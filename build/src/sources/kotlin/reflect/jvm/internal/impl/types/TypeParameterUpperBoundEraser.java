package kotlin.reflect.jvm.internal.impl.types;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Set;
import kotlin.Lazy;
import kotlin.Pair;
import kotlin.collections.CollectionsKt;
import kotlin.collections.o0;
import kotlin.collections.x0;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlin.reflect.jvm.internal.impl.descriptors.ClassDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.ClassifierDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.TypeParameterDescriptor;
import kotlin.reflect.jvm.internal.impl.storage.LockBasedStorageManager;
import kotlin.reflect.jvm.internal.impl.storage.MemoizedFunctionToNotNull;
import kotlin.reflect.jvm.internal.impl.types.TypeConstructorSubstitution;
import kotlin.reflect.jvm.internal.impl.types.checker.IntersectionTypeKt;
import kotlin.reflect.jvm.internal.impl.types.error.ErrorType;
import kotlin.reflect.jvm.internal.impl.types.error.ErrorTypeKind;
import kotlin.reflect.jvm.internal.impl.types.error.ErrorUtils;
import kotlin.reflect.jvm.internal.impl.types.typeUtil.TypeUtilsKt;
import org.jetbrains.annotations.NotNull;
@SourceDebugExtension({"SMAP\nTypeParameterUpperBoundEraser.kt\nKotlin\n*S Kotlin\n*F\n+ 1 TypeParameterUpperBoundEraser.kt\norg/jetbrains/kotlin/types/TypeParameterUpperBoundEraser\n+ 2 _Collections.kt\nkotlin/collections/CollectionsKt___CollectionsKt\n+ 3 fake.kt\nkotlin/jvm/internal/FakeKt\n*L\n1#1,158:1\n1193#2,2:159\n1267#2,4:161\n1563#2:166\n1634#2,3:167\n1#3:165\n*S KotlinDebug\n*F\n+ 1 TypeParameterUpperBoundEraser.kt\norg/jetbrains/kotlin/types/TypeParameterUpperBoundEraser\n*L\n77#1:159,2\n77#1:161,4\n100#1:166\n100#1:167,3\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class TypeParameterUpperBoundEraser {
    @NotNull
    public static final Companion Companion = new Companion(null);

    /* renamed from: a  reason: collision with root package name */
    private final ErasureProjectionComputer f34602a;

    /* renamed from: b  reason: collision with root package name */
    private final TypeParameterErasureOptions f34603b;

    /* renamed from: c  reason: collision with root package name */
    private final LockBasedStorageManager f34604c;

    /* renamed from: d  reason: collision with root package name */
    private final Lazy f34605d;

    /* renamed from: e  reason: collision with root package name */
    private final MemoizedFunctionToNotNull f34606e;

    @SourceDebugExtension({"SMAP\nTypeParameterUpperBoundEraser.kt\nKotlin\n*S Kotlin\n*F\n+ 1 TypeParameterUpperBoundEraser.kt\norg/jetbrains/kotlin/types/TypeParameterUpperBoundEraser$Companion\n+ 2 TypeUtils.kt\norg/jetbrains/kotlin/types/typeUtil/TypeUtilsKt\n+ 3 _Collections.kt\nkotlin/collections/CollectionsKt___CollectionsKt\n*L\n1#1,158:1\n245#2,14:159\n260#2:177\n1563#3:173\n1634#3,3:174\n*S KotlinDebug\n*F\n+ 1 TypeParameterUpperBoundEraser.kt\norg/jetbrains/kotlin/types/TypeParameterUpperBoundEraser$Companion\n*L\n140#1:159,14\n140#1:177\n140#1:173\n140#1:174,3\n*E\n"})
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        @NotNull
        public final KotlinType replaceArgumentsOfUpperBound(@NotNull KotlinType kotlinType, @NotNull TypeSubstitutor substitutor, Set<? extends TypeParameterDescriptor> set, boolean z10) {
            UnwrappedType unwrappedType;
            KotlinType type;
            KotlinType type2;
            KotlinType type3;
            Intrinsics.checkNotNullParameter(kotlinType, "<this>");
            Intrinsics.checkNotNullParameter(substitutor, "substitutor");
            UnwrappedType unwrap = kotlinType.unwrap();
            if (unwrap instanceof FlexibleType) {
                FlexibleType flexibleType = (FlexibleType) unwrap;
                SimpleType lowerBound = flexibleType.getLowerBound();
                if (!lowerBound.getConstructor().getParameters().isEmpty() && lowerBound.getConstructor().mo1199getDeclarationDescriptor() != null) {
                    List<TypeParameterDescriptor> parameters = lowerBound.getConstructor().getParameters();
                    Intrinsics.checkNotNullExpressionValue(parameters, "getParameters(...)");
                    List<TypeParameterDescriptor> list = parameters;
                    ArrayList arrayList = new ArrayList(CollectionsKt.w(list, 10));
                    for (TypeParameterDescriptor typeParameterDescriptor : list) {
                        TypeProjection typeProjection = (TypeProjection) CollectionsKt.q0(kotlinType.getArguments(), typeParameterDescriptor.getIndex());
                        if (!z10 || typeProjection == null || (type3 = typeProjection.getType()) == null || TypeUtilsKt.containsTypeParameter(type3)) {
                            boolean z11 = set != null && set.contains(typeParameterDescriptor);
                            if (typeProjection != null && !z11) {
                                TypeSubstitution substitution = substitutor.getSubstitution();
                                KotlinType type4 = typeProjection.getType();
                                Intrinsics.checkNotNullExpressionValue(type4, "getType(...)");
                                if (substitution.mo1202get(type4) != null) {
                                }
                            }
                            typeProjection = new StarProjectionImpl(typeParameterDescriptor);
                        }
                        arrayList.add(typeProjection);
                    }
                    lowerBound = TypeSubstitutionKt.replace$default(lowerBound, arrayList, null, 2, null);
                }
                SimpleType upperBound = flexibleType.getUpperBound();
                if (!upperBound.getConstructor().getParameters().isEmpty() && upperBound.getConstructor().mo1199getDeclarationDescriptor() != null) {
                    List<TypeParameterDescriptor> parameters2 = upperBound.getConstructor().getParameters();
                    Intrinsics.checkNotNullExpressionValue(parameters2, "getParameters(...)");
                    List<TypeParameterDescriptor> list2 = parameters2;
                    ArrayList arrayList2 = new ArrayList(CollectionsKt.w(list2, 10));
                    for (TypeParameterDescriptor typeParameterDescriptor2 : list2) {
                        TypeProjection typeProjection2 = (TypeProjection) CollectionsKt.q0(kotlinType.getArguments(), typeParameterDescriptor2.getIndex());
                        if (!z10 || typeProjection2 == null || (type2 = typeProjection2.getType()) == null || TypeUtilsKt.containsTypeParameter(type2)) {
                            boolean z12 = set != null && set.contains(typeParameterDescriptor2);
                            if (typeProjection2 != null && !z12) {
                                TypeSubstitution substitution2 = substitutor.getSubstitution();
                                KotlinType type5 = typeProjection2.getType();
                                Intrinsics.checkNotNullExpressionValue(type5, "getType(...)");
                                if (substitution2.mo1202get(type5) != null) {
                                }
                            }
                            typeProjection2 = new StarProjectionImpl(typeParameterDescriptor2);
                        }
                        arrayList2.add(typeProjection2);
                    }
                    upperBound = TypeSubstitutionKt.replace$default(upperBound, arrayList2, null, 2, null);
                }
                unwrappedType = KotlinTypeFactory.flexibleType(lowerBound, upperBound);
            } else if (unwrap instanceof SimpleType) {
                SimpleType simpleType = (SimpleType) unwrap;
                if (simpleType.getConstructor().getParameters().isEmpty() || simpleType.getConstructor().mo1199getDeclarationDescriptor() == null) {
                    unwrappedType = simpleType;
                } else {
                    List<TypeParameterDescriptor> parameters3 = simpleType.getConstructor().getParameters();
                    Intrinsics.checkNotNullExpressionValue(parameters3, "getParameters(...)");
                    List<TypeParameterDescriptor> list3 = parameters3;
                    ArrayList arrayList3 = new ArrayList(CollectionsKt.w(list3, 10));
                    for (TypeParameterDescriptor typeParameterDescriptor3 : list3) {
                        TypeProjection typeProjection3 = (TypeProjection) CollectionsKt.q0(kotlinType.getArguments(), typeParameterDescriptor3.getIndex());
                        if (!z10 || typeProjection3 == null || (type = typeProjection3.getType()) == null || TypeUtilsKt.containsTypeParameter(type)) {
                            boolean z13 = set != null && set.contains(typeParameterDescriptor3);
                            if (typeProjection3 != null && !z13) {
                                TypeSubstitution substitution3 = substitutor.getSubstitution();
                                KotlinType type6 = typeProjection3.getType();
                                Intrinsics.checkNotNullExpressionValue(type6, "getType(...)");
                                if (substitution3.mo1202get(type6) != null) {
                                }
                            }
                            typeProjection3 = new StarProjectionImpl(typeParameterDescriptor3);
                        }
                        arrayList3.add(typeProjection3);
                    }
                    unwrappedType = TypeSubstitutionKt.replace$default(simpleType, arrayList3, null, 2, null);
                }
            } else {
                throw new or.p();
            }
            KotlinType safeSubstitute = substitutor.safeSubstitute(TypeWithEnhancementKt.inheritEnhancement(unwrappedType, unwrap), Variance.OUT_VARIANCE);
            Intrinsics.checkNotNullExpressionValue(safeSubstitute, "safeSubstitute(...)");
            return safeSubstitute;
        }

        private Companion() {
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private final TypeParameterDescriptor f34607a;

        /* renamed from: b  reason: collision with root package name */
        private final ErasureTypeAttributes f34608b;

        public a(TypeParameterDescriptor typeParameter, ErasureTypeAttributes typeAttr) {
            Intrinsics.checkNotNullParameter(typeParameter, "typeParameter");
            Intrinsics.checkNotNullParameter(typeAttr, "typeAttr");
            this.f34607a = typeParameter;
            this.f34608b = typeAttr;
        }

        public final ErasureTypeAttributes a() {
            return this.f34608b;
        }

        public final TypeParameterDescriptor b() {
            return this.f34607a;
        }

        public boolean equals(Object obj) {
            if (!(obj instanceof a)) {
                return false;
            }
            a aVar = (a) obj;
            if (!Intrinsics.areEqual(aVar.f34607a, this.f34607a) || !Intrinsics.areEqual(aVar.f34608b, this.f34608b)) {
                return false;
            }
            return true;
        }

        public int hashCode() {
            int hashCode = this.f34607a.hashCode();
            return hashCode + (hashCode * 31) + this.f34608b.hashCode();
        }

        public String toString() {
            return "DataToEraseUpperBound(typeParameter=" + this.f34607a + ", typeAttr=" + this.f34608b + ')';
        }
    }

    public TypeParameterUpperBoundEraser(@NotNull ErasureProjectionComputer projectionComputer, @NotNull TypeParameterErasureOptions options) {
        Intrinsics.checkNotNullParameter(projectionComputer, "projectionComputer");
        Intrinsics.checkNotNullParameter(options, "options");
        this.f34602a = projectionComputer;
        this.f34603b = options;
        LockBasedStorageManager lockBasedStorageManager = new LockBasedStorageManager("Type parameter upper bound erasure results");
        this.f34604c = lockBasedStorageManager;
        this.f34605d = or.l.a(new v(this));
        MemoizedFunctionToNotNull createMemoizedFunction = lockBasedStorageManager.createMemoizedFunction(new w(this));
        Intrinsics.checkNotNullExpressionValue(createMemoizedFunction, "createMemoizedFunction(...)");
        this.f34606e = createMemoizedFunction;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final ErrorType c(TypeParameterUpperBoundEraser typeParameterUpperBoundEraser) {
        return ErrorUtils.createErrorType(ErrorTypeKind.CANNOT_COMPUTE_ERASED_BOUND, typeParameterUpperBoundEraser.toString());
    }

    private final KotlinType d(ErasureTypeAttributes erasureTypeAttributes) {
        KotlinType replaceArgumentsWithStarProjections;
        SimpleType defaultType = erasureTypeAttributes.getDefaultType();
        if (defaultType != null && (replaceArgumentsWithStarProjections = TypeUtilsKt.replaceArgumentsWithStarProjections(defaultType)) != null) {
            return replaceArgumentsWithStarProjections;
        }
        return g();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final KotlinType e(TypeParameterUpperBoundEraser typeParameterUpperBoundEraser, a aVar) {
        return typeParameterUpperBoundEraser.f(aVar.b(), aVar.a());
    }

    private final KotlinType f(TypeParameterDescriptor typeParameterDescriptor, ErasureTypeAttributes erasureTypeAttributes) {
        TypeProjection computeProjection;
        Set<TypeParameterDescriptor> visitedTypeParameters = erasureTypeAttributes.getVisitedTypeParameters();
        if (visitedTypeParameters != null && visitedTypeParameters.contains(typeParameterDescriptor.getOriginal())) {
            return d(erasureTypeAttributes);
        }
        SimpleType defaultType = typeParameterDescriptor.getDefaultType();
        Intrinsics.checkNotNullExpressionValue(defaultType, "getDefaultType(...)");
        Set<TypeParameterDescriptor> extractTypeParametersFromUpperBounds = TypeUtilsKt.extractTypeParametersFromUpperBounds(defaultType, visitedTypeParameters);
        LinkedHashMap linkedHashMap = new LinkedHashMap(kotlin.ranges.d.d(o0.e(CollectionsKt.w(extractTypeParametersFromUpperBounds, 10)), 16));
        for (TypeParameterDescriptor typeParameterDescriptor2 : extractTypeParametersFromUpperBounds) {
            if (visitedTypeParameters != null && visitedTypeParameters.contains(typeParameterDescriptor2)) {
                computeProjection = TypeUtils.makeStarProjection(typeParameterDescriptor2, erasureTypeAttributes);
                Intrinsics.checkNotNullExpressionValue(computeProjection, "makeStarProjection(...)");
            } else {
                computeProjection = this.f34602a.computeProjection(typeParameterDescriptor2, erasureTypeAttributes, this, getErasedUpperBound(typeParameterDescriptor2, erasureTypeAttributes.withNewVisitedTypeParameter(typeParameterDescriptor)));
            }
            Pair a10 = or.v.a(typeParameterDescriptor2.getTypeConstructor(), computeProjection);
            linkedHashMap.put(a10.c(), a10.d());
        }
        TypeSubstitutor create = TypeSubstitutor.create(TypeConstructorSubstitution.Companion.createByConstructorsMap$default(TypeConstructorSubstitution.Companion, linkedHashMap, false, 2, null));
        Intrinsics.checkNotNullExpressionValue(create, "create(...)");
        List<KotlinType> upperBounds = typeParameterDescriptor.getUpperBounds();
        Intrinsics.checkNotNullExpressionValue(upperBounds, "getUpperBounds(...)");
        Set h10 = h(create, upperBounds, erasureTypeAttributes);
        if (!h10.isEmpty()) {
            if (!this.f34603b.getIntersectUpperBounds()) {
                if (h10.size() == 1) {
                    return (KotlinType) CollectionsKt.P0(h10);
                }
                throw new IllegalArgumentException("Should only be one computed upper bound if no need to intersect all bounds");
            }
            List<KotlinType> h12 = CollectionsKt.h1(h10);
            ArrayList arrayList = new ArrayList(CollectionsKt.w(h12, 10));
            for (KotlinType kotlinType : h12) {
                arrayList.add(kotlinType.unwrap());
            }
            return IntersectionTypeKt.intersectTypes(arrayList);
        }
        return d(erasureTypeAttributes);
    }

    private final ErrorType g() {
        return (ErrorType) this.f34605d.getValue();
    }

    private final Set h(TypeSubstitutor typeSubstitutor, List list, ErasureTypeAttributes erasureTypeAttributes) {
        Set b10 = x0.b();
        Iterator it = list.iterator();
        while (it.hasNext()) {
            KotlinType kotlinType = (KotlinType) it.next();
            ClassifierDescriptor mo1199getDeclarationDescriptor = kotlinType.getConstructor().mo1199getDeclarationDescriptor();
            if (mo1199getDeclarationDescriptor instanceof ClassDescriptor) {
                b10.add(Companion.replaceArgumentsOfUpperBound(kotlinType, typeSubstitutor, erasureTypeAttributes.getVisitedTypeParameters(), this.f34603b.getLeaveNonTypeParameterTypes()));
            } else if (mo1199getDeclarationDescriptor instanceof TypeParameterDescriptor) {
                Set<TypeParameterDescriptor> visitedTypeParameters = erasureTypeAttributes.getVisitedTypeParameters();
                if (visitedTypeParameters != null && visitedTypeParameters.contains(mo1199getDeclarationDescriptor)) {
                    b10.add(d(erasureTypeAttributes));
                } else {
                    List<KotlinType> upperBounds = ((TypeParameterDescriptor) mo1199getDeclarationDescriptor).getUpperBounds();
                    Intrinsics.checkNotNullExpressionValue(upperBounds, "getUpperBounds(...)");
                    b10.addAll(h(typeSubstitutor, upperBounds, erasureTypeAttributes));
                }
            }
            if (!this.f34603b.getIntersectUpperBounds()) {
                break;
            }
        }
        return x0.a(b10);
    }

    @NotNull
    public final KotlinType getErasedUpperBound(@NotNull TypeParameterDescriptor typeParameter, @NotNull ErasureTypeAttributes typeAttr) {
        Intrinsics.checkNotNullParameter(typeParameter, "typeParameter");
        Intrinsics.checkNotNullParameter(typeAttr, "typeAttr");
        Object invoke = this.f34606e.invoke(new a(typeParameter, typeAttr));
        Intrinsics.checkNotNullExpressionValue(invoke, "invoke(...)");
        return (KotlinType) invoke;
    }

    public /* synthetic */ TypeParameterUpperBoundEraser(ErasureProjectionComputer erasureProjectionComputer, TypeParameterErasureOptions typeParameterErasureOptions, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this(erasureProjectionComputer, (i10 & 2) != 0 ? new TypeParameterErasureOptions(false, false) : typeParameterErasureOptions);
    }
}
