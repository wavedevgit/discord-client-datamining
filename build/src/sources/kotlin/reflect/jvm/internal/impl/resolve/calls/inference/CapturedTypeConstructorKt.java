package kotlin.reflect.jvm.internal.impl.resolve.calls.inference;

import java.util.ArrayList;
import java.util.List;
import kotlin.Pair;
import kotlin.collections.CollectionsKt;
import kotlin.collections.i;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlin.reflect.jvm.internal.impl.descriptors.ClassifierDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.TypeParameterDescriptor;
import kotlin.reflect.jvm.internal.impl.storage.LockBasedStorageManager;
import kotlin.reflect.jvm.internal.impl.storage.StorageManager;
import kotlin.reflect.jvm.internal.impl.types.DelegatedTypeSubstitution;
import kotlin.reflect.jvm.internal.impl.types.IndexedParametersSubstitution;
import kotlin.reflect.jvm.internal.impl.types.KotlinType;
import kotlin.reflect.jvm.internal.impl.types.LazyWrappedType;
import kotlin.reflect.jvm.internal.impl.types.TypeProjection;
import kotlin.reflect.jvm.internal.impl.types.TypeProjectionImpl;
import kotlin.reflect.jvm.internal.impl.types.TypeSubstitution;
import kotlin.reflect.jvm.internal.impl.types.Variance;
import org.jetbrains.annotations.NotNull;
@SourceDebugExtension({"SMAP\nCapturedTypeConstructor.kt\nKotlin\n*S Kotlin\n*F\n+ 1 CapturedTypeConstructor.kt\norg/jetbrains/kotlin/resolve/calls/inference/CapturedTypeConstructorKt\n+ 2 _Collections.kt\nkotlin/collections/CollectionsKt___CollectionsKt\n+ 3 ArraysJVM.kt\nkotlin/collections/ArraysKt__ArraysJVMKt\n*L\n1#1,153:1\n1563#2:154\n1634#2,3:155\n37#3:158\n36#3,3:159\n*S KotlinDebug\n*F\n+ 1 CapturedTypeConstructor.kt\norg/jetbrains/kotlin/resolve/calls/inference/CapturedTypeConstructorKt\n*L\n125#1:154\n125#1:155,3\n127#1:158\n127#1:159,3\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class CapturedTypeConstructorKt {
    /* JADX INFO: Access modifiers changed from: private */
    public static final TypeProjection b(TypeProjection typeProjection, TypeParameterDescriptor typeParameterDescriptor) {
        if (typeParameterDescriptor != null && typeProjection.getProjectionKind() != Variance.INVARIANT) {
            if (typeParameterDescriptor.getVariance() == typeProjection.getProjectionKind()) {
                if (typeProjection.isStarProjection()) {
                    StorageManager NO_LOCKS = LockBasedStorageManager.NO_LOCKS;
                    Intrinsics.checkNotNullExpressionValue(NO_LOCKS, "NO_LOCKS");
                    return new TypeProjectionImpl(new LazyWrappedType(NO_LOCKS, new a(typeProjection)));
                }
                return new TypeProjectionImpl(typeProjection.getType());
            }
            return new TypeProjectionImpl(createCapturedType(typeProjection));
        }
        return typeProjection;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final KotlinType c(TypeProjection typeProjection) {
        KotlinType type = typeProjection.getType();
        Intrinsics.checkNotNullExpressionValue(type, "getType(...)");
        return type;
    }

    @NotNull
    public static final KotlinType createCapturedType(@NotNull TypeProjection typeProjection) {
        Intrinsics.checkNotNullParameter(typeProjection, "typeProjection");
        return new CapturedType(typeProjection, null, false, null, 14, null);
    }

    public static final boolean isCaptured(@NotNull KotlinType kotlinType) {
        Intrinsics.checkNotNullParameter(kotlinType, "<this>");
        return kotlinType.getConstructor() instanceof CapturedTypeConstructor;
    }

    @NotNull
    public static final TypeSubstitution wrapWithCapturingSubstitution(@NotNull final TypeSubstitution typeSubstitution, final boolean z10) {
        Intrinsics.checkNotNullParameter(typeSubstitution, "<this>");
        if (typeSubstitution instanceof IndexedParametersSubstitution) {
            IndexedParametersSubstitution indexedParametersSubstitution = (IndexedParametersSubstitution) typeSubstitution;
            TypeParameterDescriptor[] parameters = indexedParametersSubstitution.getParameters();
            List<Pair> j12 = i.j1(indexedParametersSubstitution.getArguments(), indexedParametersSubstitution.getParameters());
            ArrayList arrayList = new ArrayList(CollectionsKt.w(j12, 10));
            for (Pair pair : j12) {
                arrayList.add(b((TypeProjection) pair.c(), (TypeParameterDescriptor) pair.d()));
            }
            return new IndexedParametersSubstitution(parameters, (TypeProjection[]) arrayList.toArray(new TypeProjection[0]), z10);
        }
        return new DelegatedTypeSubstitution(typeSubstitution) { // from class: kotlin.reflect.jvm.internal.impl.resolve.calls.inference.CapturedTypeConstructorKt$wrapWithCapturingSubstitution$2
            @Override // kotlin.reflect.jvm.internal.impl.types.DelegatedTypeSubstitution, kotlin.reflect.jvm.internal.impl.types.TypeSubstitution
            public boolean approximateContravariantCapturedTypes() {
                return z10;
            }

            @Override // kotlin.reflect.jvm.internal.impl.types.DelegatedTypeSubstitution, kotlin.reflect.jvm.internal.impl.types.TypeSubstitution
            /* renamed from: get */
            public TypeProjection mo1200get(KotlinType key) {
                TypeProjection b10;
                Intrinsics.checkNotNullParameter(key, "key");
                TypeProjection mo1200get = super.mo1200get(key);
                TypeParameterDescriptor typeParameterDescriptor = null;
                if (mo1200get == null) {
                    return null;
                }
                ClassifierDescriptor mo1197getDeclarationDescriptor = key.getConstructor().mo1197getDeclarationDescriptor();
                if (mo1197getDeclarationDescriptor instanceof TypeParameterDescriptor) {
                    typeParameterDescriptor = (TypeParameterDescriptor) mo1197getDeclarationDescriptor;
                }
                b10 = CapturedTypeConstructorKt.b(mo1200get, typeParameterDescriptor);
                return b10;
            }
        };
    }

    public static /* synthetic */ TypeSubstitution wrapWithCapturingSubstitution$default(TypeSubstitution typeSubstitution, boolean z10, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            z10 = true;
        }
        return wrapWithCapturingSubstitution(typeSubstitution, z10);
    }
}
