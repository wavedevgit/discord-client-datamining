package kotlin.reflect.jvm.internal.impl.descriptors;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlin.reflect.jvm.internal.impl.resolve.DescriptorUtils;
import kotlin.reflect.jvm.internal.impl.resolve.descriptorUtil.DescriptorUtilsKt;
import kotlin.reflect.jvm.internal.impl.types.KotlinType;
import kotlin.reflect.jvm.internal.impl.types.TypeConstructor;
import kotlin.reflect.jvm.internal.impl.types.TypeProjection;
import kotlin.reflect.jvm.internal.impl.types.error.ErrorUtils;
import kotlin.sequences.Sequence;
import org.jetbrains.annotations.NotNull;
@SourceDebugExtension({"SMAP\ntypeParameterUtils.kt\nKotlin\n*S Kotlin\n*F\n+ 1 typeParameterUtils.kt\norg/jetbrains/kotlin/descriptors/TypeParameterUtilsKt\n+ 2 addToStdlib.kt\norg/jetbrains/kotlin/utils/addToStdlib/AddToStdlibKt\n+ 3 _Collections.kt\nkotlin/collections/CollectionsKt___CollectionsKt\n*L\n1#1,100:1\n16#2,2:101\n1563#3:103\n1634#3,3:104\n*S KotlinDebug\n*F\n+ 1 typeParameterUtils.kt\norg/jetbrains/kotlin/descriptors/TypeParameterUtilsKt\n*L\n37#1:101,2\n42#1:103\n42#1:104,3\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class TypeParameterUtilsKt {
    public static final PossiblyInnerType buildPossiblyInnerType(@NotNull KotlinType kotlinType) {
        ClassifierDescriptorWithTypeParameters classifierDescriptorWithTypeParameters;
        Intrinsics.checkNotNullParameter(kotlinType, "<this>");
        ClassifierDescriptor mo1198getDeclarationDescriptor = kotlinType.getConstructor().mo1198getDeclarationDescriptor();
        if (mo1198getDeclarationDescriptor instanceof ClassifierDescriptorWithTypeParameters) {
            classifierDescriptorWithTypeParameters = (ClassifierDescriptorWithTypeParameters) mo1198getDeclarationDescriptor;
        } else {
            classifierDescriptorWithTypeParameters = null;
        }
        return d(kotlinType, classifierDescriptorWithTypeParameters, 0);
    }

    @NotNull
    public static final List<TypeParameterDescriptor> computeConstructorTypeParameters(@NotNull ClassifierDescriptorWithTypeParameters classifierDescriptorWithTypeParameters) {
        List<TypeParameterDescriptor> list;
        Object obj;
        TypeConstructor typeConstructor;
        Intrinsics.checkNotNullParameter(classifierDescriptorWithTypeParameters, "<this>");
        List<TypeParameterDescriptor> declaredTypeParameters = classifierDescriptorWithTypeParameters.getDeclaredTypeParameters();
        Intrinsics.checkNotNullExpressionValue(declaredTypeParameters, "getDeclaredTypeParameters(...)");
        if (!classifierDescriptorWithTypeParameters.isInner() && !(classifierDescriptorWithTypeParameters.getContainingDeclaration() instanceof CallableDescriptor)) {
            return declaredTypeParameters;
        }
        List Y = kotlin.sequences.k.Y(kotlin.sequences.k.L(kotlin.sequences.k.F(kotlin.sequences.k.W(DescriptorUtilsKt.getParents(classifierDescriptorWithTypeParameters), i.f33685d), j.f33888d), k.f33889d));
        Iterator it = DescriptorUtilsKt.getParents(classifierDescriptorWithTypeParameters).iterator();
        while (true) {
            list = null;
            if (it.hasNext()) {
                obj = it.next();
                if (obj instanceof ClassDescriptor) {
                    break;
                }
            } else {
                obj = null;
                break;
            }
        }
        ClassDescriptor classDescriptor = (ClassDescriptor) obj;
        if (classDescriptor != null && (typeConstructor = classDescriptor.getTypeConstructor()) != null) {
            list = typeConstructor.getParameters();
        }
        if (list == null) {
            list = CollectionsKt.l();
        }
        if (Y.isEmpty() && list.isEmpty()) {
            List<TypeParameterDescriptor> declaredTypeParameters2 = classifierDescriptorWithTypeParameters.getDeclaredTypeParameters();
            Intrinsics.checkNotNullExpressionValue(declaredTypeParameters2, "getDeclaredTypeParameters(...)");
            return declaredTypeParameters2;
        }
        List<TypeParameterDescriptor> L0 = CollectionsKt.L0(Y, list);
        ArrayList arrayList = new ArrayList(CollectionsKt.w(L0, 10));
        for (TypeParameterDescriptor typeParameterDescriptor : L0) {
            Intrinsics.checkNotNull(typeParameterDescriptor);
            arrayList.add(e(typeParameterDescriptor, classifierDescriptorWithTypeParameters, declaredTypeParameters.size()));
        }
        return CollectionsKt.L0(declaredTypeParameters, arrayList);
    }

    private static final PossiblyInnerType d(KotlinType kotlinType, ClassifierDescriptorWithTypeParameters classifierDescriptorWithTypeParameters, int i10) {
        ClassifierDescriptorWithTypeParameters classifierDescriptorWithTypeParameters2 = null;
        if (classifierDescriptorWithTypeParameters == null || ErrorUtils.isError(classifierDescriptorWithTypeParameters)) {
            return null;
        }
        int size = classifierDescriptorWithTypeParameters.getDeclaredTypeParameters().size() + i10;
        if (!classifierDescriptorWithTypeParameters.isInner()) {
            if (size != kotlinType.getArguments().size()) {
                DescriptorUtils.isLocal(classifierDescriptorWithTypeParameters);
            }
            return new PossiblyInnerType(classifierDescriptorWithTypeParameters, kotlinType.getArguments().subList(i10, kotlinType.getArguments().size()), null);
        }
        List<TypeProjection> subList = kotlinType.getArguments().subList(i10, size);
        DeclarationDescriptor containingDeclaration = classifierDescriptorWithTypeParameters.getContainingDeclaration();
        if (containingDeclaration instanceof ClassifierDescriptorWithTypeParameters) {
            classifierDescriptorWithTypeParameters2 = (ClassifierDescriptorWithTypeParameters) containingDeclaration;
        }
        return new PossiblyInnerType(classifierDescriptorWithTypeParameters, subList, d(kotlinType, classifierDescriptorWithTypeParameters2, size));
    }

    private static final a e(TypeParameterDescriptor typeParameterDescriptor, DeclarationDescriptor declarationDescriptor, int i10) {
        return new a(typeParameterDescriptor, declarationDescriptor, i10);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final boolean f(DeclarationDescriptor it) {
        Intrinsics.checkNotNullParameter(it, "it");
        return it instanceof CallableDescriptor;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final boolean g(DeclarationDescriptor it) {
        Intrinsics.checkNotNullParameter(it, "it");
        if (!(it instanceof ConstructorDescriptor)) {
            return true;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Sequence h(DeclarationDescriptor it) {
        Intrinsics.checkNotNullParameter(it, "it");
        List<TypeParameterDescriptor> typeParameters = ((CallableDescriptor) it).getTypeParameters();
        Intrinsics.checkNotNullExpressionValue(typeParameters, "getTypeParameters(...)");
        return CollectionsKt.b0(typeParameters);
    }
}
