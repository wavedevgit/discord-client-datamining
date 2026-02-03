package kotlin.reflect.jvm.internal.impl.types.checker;

import java.util.ArrayDeque;
import java.util.Collection;
import java.util.List;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlin.reflect.jvm.internal.impl.descriptors.DeclarationDescriptor;
import kotlin.reflect.jvm.internal.impl.renderer.DescriptorRenderer;
import kotlin.reflect.jvm.internal.impl.resolve.calls.inference.CapturedTypeConstructorKt;
import kotlin.reflect.jvm.internal.impl.types.KotlinType;
import kotlin.reflect.jvm.internal.impl.types.TypeConstructor;
import kotlin.reflect.jvm.internal.impl.types.TypeConstructorSubstitution;
import kotlin.reflect.jvm.internal.impl.types.TypeProjection;
import kotlin.reflect.jvm.internal.impl.types.TypeUtils;
import kotlin.reflect.jvm.internal.impl.types.Variance;
import kotlin.reflect.jvm.internal.impl.types.typesApproximation.CapturedTypeApproximationKt;
import org.jetbrains.annotations.NotNull;
@SourceDebugExtension({"SMAP\nutils.kt\nKotlin\n*S Kotlin\n*F\n+ 1 utils.kt\norg/jetbrains/kotlin/types/checker/UtilsKt\n+ 2 _Collections.kt\nkotlin/collections/CollectionsKt___CollectionsKt\n*L\n1#1,108:1\n1761#2,3:109\n*S KotlinDebug\n*F\n+ 1 utils.kt\norg/jetbrains/kotlin/types/checker/UtilsKt\n*L\n51#1:109,3\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class UtilsKt {
    private static final KotlinType a(KotlinType kotlinType) {
        return CapturedTypeApproximationKt.approximateCapturedTypes(kotlinType).getUpper();
    }

    private static final String b(TypeConstructor typeConstructor) {
        StringBuilder sb2 = new StringBuilder();
        c("type: " + typeConstructor, sb2);
        c("hashCode: " + typeConstructor.hashCode(), sb2);
        c("javaClass: " + typeConstructor.getClass().getCanonicalName(), sb2);
        for (DeclarationDescriptor mo1197getDeclarationDescriptor = typeConstructor.mo1197getDeclarationDescriptor(); mo1197getDeclarationDescriptor != null; mo1197getDeclarationDescriptor = mo1197getDeclarationDescriptor.getContainingDeclaration()) {
            c("fqName: " + DescriptorRenderer.FQ_NAMES_IN_TYPES.render(mo1197getDeclarationDescriptor), sb2);
            c("javaClass: " + mo1197getDeclarationDescriptor.getClass().getCanonicalName(), sb2);
        }
        return sb2.toString();
    }

    private static final StringBuilder c(String str, StringBuilder sb2) {
        Intrinsics.checkNotNullParameter(str, "<this>");
        sb2.append(str);
        sb2.append('\n');
        return sb2;
    }

    public static final KotlinType findCorrespondingSupertype(@NotNull KotlinType subtype, @NotNull KotlinType supertype, @NotNull TypeCheckingProcedureCallbacks typeCheckingProcedureCallbacks) {
        TypeConstructor constructor;
        Intrinsics.checkNotNullParameter(subtype, "subtype");
        Intrinsics.checkNotNullParameter(supertype, "supertype");
        Intrinsics.checkNotNullParameter(typeCheckingProcedureCallbacks, "typeCheckingProcedureCallbacks");
        ArrayDeque arrayDeque = new ArrayDeque();
        arrayDeque.add(new e(subtype, null));
        TypeConstructor constructor2 = supertype.getConstructor();
        while (!arrayDeque.isEmpty()) {
            e eVar = (e) arrayDeque.poll();
            KotlinType b10 = eVar.b();
            TypeConstructor constructor3 = b10.getConstructor();
            if (typeCheckingProcedureCallbacks.assertEqualTypeConstructors(constructor3, constructor2)) {
                boolean isMarkedNullable = b10.isMarkedNullable();
                for (e a10 = eVar.a(); a10 != null; a10 = a10.a()) {
                    KotlinType b11 = a10.b();
                    List<TypeProjection> arguments = b11.getArguments();
                    if (!(arguments instanceof Collection) || !arguments.isEmpty()) {
                        for (TypeProjection typeProjection : arguments) {
                            Variance projectionKind = typeProjection.getProjectionKind();
                            Variance variance = Variance.INVARIANT;
                            if (projectionKind != variance) {
                                KotlinType safeSubstitute = CapturedTypeConstructorKt.wrapWithCapturingSubstitution$default(TypeConstructorSubstitution.Companion.create(b11), false, 1, null).buildSubstitutor().safeSubstitute(b10, variance);
                                Intrinsics.checkNotNullExpressionValue(safeSubstitute, "safeSubstitute(...)");
                                b10 = a(safeSubstitute);
                                break;
                            }
                        }
                    }
                    b10 = TypeConstructorSubstitution.Companion.create(b11).buildSubstitutor().safeSubstitute(b10, Variance.INVARIANT);
                    Intrinsics.checkNotNull(b10);
                    if (!isMarkedNullable && !b11.isMarkedNullable()) {
                        isMarkedNullable = false;
                    } else {
                        isMarkedNullable = true;
                    }
                }
                if (typeCheckingProcedureCallbacks.assertEqualTypeConstructors(b10.getConstructor(), constructor2)) {
                    return TypeUtils.makeNullableAsSpecified(b10, isMarkedNullable);
                }
                throw new AssertionError("Type constructors should be equals!\nsubstitutedSuperType: " + b(constructor) + ", \n\nsupertype: " + b(constructor2) + " \n" + typeCheckingProcedureCallbacks.assertEqualTypeConstructors(constructor, constructor2));
            }
            for (KotlinType kotlinType : constructor3.getSupertypes()) {
                Intrinsics.checkNotNull(kotlinType);
                arrayDeque.add(new e(kotlinType, eVar));
            }
        }
        return null;
    }
}
