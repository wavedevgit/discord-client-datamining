package kotlin.reflect.jvm.internal.impl.types.typesApproximation;

import ir.p;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import kotlin.Pair;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlin.reflect.jvm.internal.impl.builtins.KotlinBuiltIns;
import kotlin.reflect.jvm.internal.impl.descriptors.TypeParameterDescriptor;
import kotlin.reflect.jvm.internal.impl.resolve.calls.inference.CapturedTypeConstructor;
import kotlin.reflect.jvm.internal.impl.resolve.calls.inference.CapturedTypeConstructorKt;
import kotlin.reflect.jvm.internal.impl.resolve.descriptorUtil.DescriptorUtilsKt;
import kotlin.reflect.jvm.internal.impl.types.FlexibleTypesKt;
import kotlin.reflect.jvm.internal.impl.types.KotlinType;
import kotlin.reflect.jvm.internal.impl.types.KotlinTypeFactory;
import kotlin.reflect.jvm.internal.impl.types.SimpleType;
import kotlin.reflect.jvm.internal.impl.types.TypeConstructor;
import kotlin.reflect.jvm.internal.impl.types.TypeConstructorSubstitution;
import kotlin.reflect.jvm.internal.impl.types.TypeProjection;
import kotlin.reflect.jvm.internal.impl.types.TypeProjectionImpl;
import kotlin.reflect.jvm.internal.impl.types.TypeSubstitutionKt;
import kotlin.reflect.jvm.internal.impl.types.TypeSubstitutor;
import kotlin.reflect.jvm.internal.impl.types.TypeUtils;
import kotlin.reflect.jvm.internal.impl.types.TypeWithEnhancementKt;
import kotlin.reflect.jvm.internal.impl.types.UnwrappedType;
import kotlin.reflect.jvm.internal.impl.types.Variance;
import kotlin.reflect.jvm.internal.impl.types.typeUtil.TypeUtilsKt;
import org.jetbrains.annotations.NotNull;
@SourceDebugExtension({"SMAP\nCapturedTypeApproximation.kt\nKotlin\n*S Kotlin\n*F\n+ 1 CapturedTypeApproximation.kt\norg/jetbrains/kotlin/types/typesApproximation/CapturedTypeApproximationKt\n+ 2 _Collections.kt\nkotlin/collections/CollectionsKt___CollectionsKt\n+ 3 fake.kt\nkotlin/jvm/internal/FakeKt\n*L\n1#1,178:1\n1761#2,3:179\n1563#2:183\n1634#2,3:184\n1#3:182\n*S KotlinDebug\n*F\n+ 1 CapturedTypeApproximation.kt\norg/jetbrains/kotlin/types/typesApproximation/CapturedTypeApproximationKt\n*L\n158#1:179,3\n167#1:183\n167#1:184,3\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class CapturedTypeApproximationKt {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public /* synthetic */ class WhenMappings {
        public static final /* synthetic */ int[] $EnumSwitchMapping$0;

        static {
            int[] iArr = new int[Variance.values().length];
            try {
                iArr[Variance.INVARIANT.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[Variance.IN_VARIANCE.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                iArr[Variance.OUT_VARIANCE.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            $EnumSwitchMapping$0 = iArr;
        }
    }

    @NotNull
    public static final ApproximationBounds<KotlinType> approximateCapturedTypes(@NotNull KotlinType type) {
        Object e10;
        Intrinsics.checkNotNullParameter(type, "type");
        if (FlexibleTypesKt.isFlexible(type)) {
            ApproximationBounds<KotlinType> approximateCapturedTypes = approximateCapturedTypes(FlexibleTypesKt.lowerIfFlexible(type));
            ApproximationBounds<KotlinType> approximateCapturedTypes2 = approximateCapturedTypes(FlexibleTypesKt.upperIfFlexible(type));
            return new ApproximationBounds<>(TypeWithEnhancementKt.inheritEnhancement(KotlinTypeFactory.flexibleType(FlexibleTypesKt.lowerIfFlexible(approximateCapturedTypes.getLower()), FlexibleTypesKt.upperIfFlexible(approximateCapturedTypes2.getLower())), type), TypeWithEnhancementKt.inheritEnhancement(KotlinTypeFactory.flexibleType(FlexibleTypesKt.lowerIfFlexible(approximateCapturedTypes.getUpper()), FlexibleTypesKt.upperIfFlexible(approximateCapturedTypes2.getUpper())), type));
        }
        TypeConstructor constructor = type.getConstructor();
        if (CapturedTypeConstructorKt.isCaptured(type)) {
            Intrinsics.checkNotNull(constructor, "null cannot be cast to non-null type org.jetbrains.kotlin.resolve.calls.inference.CapturedTypeConstructor");
            TypeProjection projection = ((CapturedTypeConstructor) constructor).getProjection();
            KotlinType type2 = projection.getType();
            Intrinsics.checkNotNullExpressionValue(type2, "getType(...)");
            KotlinType b10 = b(type2, type);
            int i10 = WhenMappings.$EnumSwitchMapping$0[projection.getProjectionKind().ordinal()];
            if (i10 != 2) {
                if (i10 == 3) {
                    SimpleType nothingType = TypeUtilsKt.getBuiltIns(type).getNothingType();
                    Intrinsics.checkNotNullExpressionValue(nothingType, "getNothingType(...)");
                    return new ApproximationBounds<>(b(nothingType, type), b10);
                }
                throw new AssertionError("Only nontrivial projections should have been captured, not: " + projection);
            }
            return new ApproximationBounds<>(b10, TypeUtilsKt.getBuiltIns(type).getNullableAnyType());
        } else if (!type.getArguments().isEmpty() && type.getArguments().size() == constructor.getParameters().size()) {
            ArrayList arrayList = new ArrayList();
            ArrayList arrayList2 = new ArrayList();
            List<TypeParameterDescriptor> parameters = constructor.getParameters();
            Intrinsics.checkNotNullExpressionValue(parameters, "getParameters(...)");
            for (Pair pair : CollectionsKt.p1(type.getArguments(), parameters)) {
                TypeProjection typeProjection = (TypeProjection) pair.a();
                TypeParameterDescriptor typeParameterDescriptor = (TypeParameterDescriptor) pair.b();
                Intrinsics.checkNotNull(typeParameterDescriptor);
                b g10 = g(typeProjection, typeParameterDescriptor);
                if (typeProjection.isStarProjection()) {
                    arrayList.add(g10);
                    arrayList2.add(g10);
                } else {
                    ApproximationBounds d10 = d(g10);
                    arrayList.add((b) d10.component1());
                    arrayList2.add((b) d10.component2());
                }
            }
            boolean z10 = false;
            if (!arrayList.isEmpty()) {
                Iterator it = arrayList.iterator();
                while (true) {
                    if (it.hasNext()) {
                        if (!((b) it.next()).d()) {
                            z10 = true;
                            break;
                        }
                    } else {
                        break;
                    }
                }
            }
            if (z10) {
                e10 = TypeUtilsKt.getBuiltIns(type).getNothingType();
                Intrinsics.checkNotNullExpressionValue(e10, "getNothingType(...)");
            } else {
                e10 = e(type, arrayList);
            }
            return new ApproximationBounds<>(e10, e(type, arrayList2));
        } else {
            return new ApproximationBounds<>(type, type);
        }
    }

    public static final TypeProjection approximateCapturedTypesIfNecessary(TypeProjection typeProjection, boolean z10) {
        if (typeProjection == null) {
            return null;
        }
        if (!typeProjection.isStarProjection()) {
            KotlinType type = typeProjection.getType();
            Intrinsics.checkNotNullExpressionValue(type, "getType(...)");
            if (TypeUtils.contains(type, a.f36042d)) {
                Variance projectionKind = typeProjection.getProjectionKind();
                Intrinsics.checkNotNullExpressionValue(projectionKind, "getProjectionKind(...)");
                if (projectionKind == Variance.OUT_VARIANCE) {
                    return new TypeProjectionImpl(projectionKind, approximateCapturedTypes(type).getUpper());
                }
                if (z10) {
                    return new TypeProjectionImpl(projectionKind, approximateCapturedTypes(type).getLower());
                }
                return f(typeProjection);
            }
        }
        return typeProjection;
    }

    private static final KotlinType b(KotlinType kotlinType, KotlinType kotlinType2) {
        KotlinType makeNullableIfNeeded = TypeUtils.makeNullableIfNeeded(kotlinType, kotlinType2.isMarkedNullable());
        Intrinsics.checkNotNullExpressionValue(makeNullableIfNeeded, "makeNullableIfNeeded(...)");
        return makeNullableIfNeeded;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Boolean c(UnwrappedType unwrappedType) {
        Intrinsics.checkNotNull(unwrappedType);
        return Boolean.valueOf(CapturedTypeConstructorKt.isCaptured(unwrappedType));
    }

    private static final ApproximationBounds d(b bVar) {
        ApproximationBounds<KotlinType> approximateCapturedTypes = approximateCapturedTypes(bVar.a());
        ApproximationBounds<KotlinType> approximateCapturedTypes2 = approximateCapturedTypes(bVar.b());
        return new ApproximationBounds(new b(bVar.c(), approximateCapturedTypes.component2(), approximateCapturedTypes2.component1()), new b(bVar.c(), approximateCapturedTypes.component1(), approximateCapturedTypes2.component2()));
    }

    private static final KotlinType e(KotlinType kotlinType, List list) {
        kotlinType.getArguments().size();
        list.size();
        List<b> list2 = list;
        ArrayList arrayList = new ArrayList(CollectionsKt.w(list2, 10));
        for (b bVar : list2) {
            arrayList.add(h(bVar));
        }
        return TypeSubstitutionKt.replace$default(kotlinType, arrayList, null, null, 6, null);
    }

    private static final TypeProjection f(TypeProjection typeProjection) {
        TypeSubstitutor create = TypeSubstitutor.create(new TypeConstructorSubstitution() { // from class: kotlin.reflect.jvm.internal.impl.types.typesApproximation.CapturedTypeApproximationKt$substituteCapturedTypesWithProjections$typeSubstitutor$1
            @Override // kotlin.reflect.jvm.internal.impl.types.TypeConstructorSubstitution
            public TypeProjection get(TypeConstructor key) {
                CapturedTypeConstructor capturedTypeConstructor;
                Intrinsics.checkNotNullParameter(key, "key");
                if (key instanceof CapturedTypeConstructor) {
                    capturedTypeConstructor = (CapturedTypeConstructor) key;
                } else {
                    capturedTypeConstructor = null;
                }
                if (capturedTypeConstructor == null) {
                    return null;
                }
                if (capturedTypeConstructor.getProjection().isStarProjection()) {
                    return new TypeProjectionImpl(Variance.OUT_VARIANCE, capturedTypeConstructor.getProjection().getType());
                }
                return capturedTypeConstructor.getProjection();
            }
        });
        Intrinsics.checkNotNullExpressionValue(create, "create(...)");
        return create.substituteWithoutApproximation(typeProjection);
    }

    private static final b g(TypeProjection typeProjection, TypeParameterDescriptor typeParameterDescriptor) {
        int i10 = WhenMappings.$EnumSwitchMapping$0[TypeSubstitutor.combine(typeParameterDescriptor.getVariance(), typeProjection).ordinal()];
        if (i10 != 1) {
            if (i10 != 2) {
                if (i10 == 3) {
                    SimpleType nothingType = DescriptorUtilsKt.getBuiltIns(typeParameterDescriptor).getNothingType();
                    Intrinsics.checkNotNullExpressionValue(nothingType, "getNothingType(...)");
                    KotlinType type = typeProjection.getType();
                    Intrinsics.checkNotNullExpressionValue(type, "getType(...)");
                    return new b(typeParameterDescriptor, nothingType, type);
                }
                throw new p();
            }
            KotlinType type2 = typeProjection.getType();
            Intrinsics.checkNotNullExpressionValue(type2, "getType(...)");
            SimpleType nullableAnyType = DescriptorUtilsKt.getBuiltIns(typeParameterDescriptor).getNullableAnyType();
            Intrinsics.checkNotNullExpressionValue(nullableAnyType, "getNullableAnyType(...)");
            return new b(typeParameterDescriptor, type2, nullableAnyType);
        }
        KotlinType type3 = typeProjection.getType();
        Intrinsics.checkNotNullExpressionValue(type3, "getType(...)");
        KotlinType type4 = typeProjection.getType();
        Intrinsics.checkNotNullExpressionValue(type4, "getType(...)");
        return new b(typeParameterDescriptor, type3, type4);
    }

    private static final TypeProjection h(b bVar) {
        bVar.d();
        if (!Intrinsics.areEqual(bVar.a(), bVar.b())) {
            Variance variance = bVar.c().getVariance();
            Variance variance2 = Variance.IN_VARIANCE;
            if (variance != variance2) {
                if (KotlinBuiltIns.isNothing(bVar.a()) && bVar.c().getVariance() != variance2) {
                    return new TypeProjectionImpl(i(bVar, Variance.OUT_VARIANCE), bVar.b());
                }
                if (KotlinBuiltIns.isNullableAny(bVar.b())) {
                    return new TypeProjectionImpl(i(bVar, variance2), bVar.a());
                }
                return new TypeProjectionImpl(i(bVar, Variance.OUT_VARIANCE), bVar.b());
            }
        }
        return new TypeProjectionImpl(bVar.a());
    }

    private static final Variance i(b bVar, Variance variance) {
        if (variance == bVar.c().getVariance()) {
            return Variance.INVARIANT;
        }
        return variance;
    }
}
