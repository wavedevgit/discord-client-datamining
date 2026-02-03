package kotlin.reflect.jvm.internal.impl.types.typeUtil;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Iterator;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Set;
import kotlin.collections.CollectionsKt;
import kotlin.collections.IndexedValue;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlin.reflect.jvm.internal.impl.builtins.KotlinBuiltIns;
import kotlin.reflect.jvm.internal.impl.descriptors.ClassDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.ClassKind;
import kotlin.reflect.jvm.internal.impl.descriptors.ClassifierDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.ClassifierDescriptorWithTypeParameters;
import kotlin.reflect.jvm.internal.impl.descriptors.TypeAliasDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.TypeParameterDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.annotations.Annotations;
import kotlin.reflect.jvm.internal.impl.types.AbstractStubType;
import kotlin.reflect.jvm.internal.impl.types.DefinitelyNotNullType;
import kotlin.reflect.jvm.internal.impl.types.FlexibleType;
import kotlin.reflect.jvm.internal.impl.types.KotlinType;
import kotlin.reflect.jvm.internal.impl.types.KotlinTypeFactory;
import kotlin.reflect.jvm.internal.impl.types.KotlinTypeKt;
import kotlin.reflect.jvm.internal.impl.types.SimpleType;
import kotlin.reflect.jvm.internal.impl.types.StarProjectionImpl;
import kotlin.reflect.jvm.internal.impl.types.StubTypeForBuilderInference;
import kotlin.reflect.jvm.internal.impl.types.TypeAttributesKt;
import kotlin.reflect.jvm.internal.impl.types.TypeConstructor;
import kotlin.reflect.jvm.internal.impl.types.TypeProjection;
import kotlin.reflect.jvm.internal.impl.types.TypeProjectionImpl;
import kotlin.reflect.jvm.internal.impl.types.TypeSubstitutionKt;
import kotlin.reflect.jvm.internal.impl.types.TypeUtils;
import kotlin.reflect.jvm.internal.impl.types.TypeWithEnhancementKt;
import kotlin.reflect.jvm.internal.impl.types.UnwrappedType;
import kotlin.reflect.jvm.internal.impl.types.Variance;
import kotlin.reflect.jvm.internal.impl.types.checker.KotlinTypeChecker;
import kotlin.reflect.jvm.internal.impl.types.error.ErrorType;
import kotlin.reflect.jvm.internal.impl.types.model.TypeVariableTypeConstructorMarker;
import lr.p;
import org.jetbrains.annotations.NotNull;
@SourceDebugExtension({"SMAP\nTypeUtils.kt\nKotlin\n*S Kotlin\n*F\n+ 1 TypeUtils.kt\norg/jetbrains/kotlin/types/typeUtil/TypeUtilsKt\n+ 2 _Collections.kt\nkotlin/collections/CollectionsKt___CollectionsKt\n+ 3 fake.kt\nkotlin/jvm/internal/FakeKt\n*L\n1#1,390:1\n245#1,14:415\n260#1:433\n249#1,12:434\n245#1,14:446\n260#1:464\n249#1,12:465\n256#1,3:483\n260#1:490\n256#1,3:491\n260#1:498\n256#1,3:499\n260#1:506\n381#1:532\n381#1:533\n381#1:534\n1761#2,3:391\n1563#2:394\n1634#2,3:395\n1617#2,9:399\n1869#2:408\n1870#2:410\n1626#2:411\n774#2:412\n865#2,2:413\n1563#2:429\n1634#2,3:430\n1563#2:460\n1634#2,3:461\n1761#2,3:477\n1761#2,3:480\n1563#2:486\n1634#2,3:487\n1563#2:494\n1634#2,3:495\n1563#2:502\n1634#2,3:503\n1563#2:507\n1634#2,3:508\n1563#2:511\n1634#2,3:512\n1761#2,3:515\n295#2,2:518\n1563#2:520\n1634#2,3:521\n1563#2:524\n1634#2,3:525\n1563#2:528\n1634#2,3:529\n1#3:398\n1#3:409\n*S KotlinDebug\n*F\n+ 1 TypeUtils.kt\norg/jetbrains/kotlin/types/typeUtil/TypeUtilsKt\n*L\n184#1:415,14\n184#1:433\n184#1:434,12\n185#1:446,14\n185#1:464\n185#1:465,12\n248#1:483,3\n248#1:490\n249#1:491,3\n249#1:498\n251#1:499,3\n251#1:506\n373#1:532\n376#1:533\n379#1:534\n80#1:391,3\n131#1:394\n131#1:395,3\n167#1:399,9\n167#1:408\n167#1:410\n167#1:411\n173#1:412\n173#1:413,2\n184#1:429\n184#1:430,3\n185#1:460\n185#1:461,3\n223#1:477,3\n235#1:480,3\n248#1:486\n248#1:487,3\n249#1:494\n249#1:495,3\n251#1:502\n251#1:503,3\n258#1:507\n258#1:508,3\n265#1:511\n265#1:512,3\n291#1:515,3\n298#1:518,2\n308#1:520\n308#1:521,3\n327#1:524\n327#1:525,3\n335#1:528\n335#1:529,3\n167#1:409\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class TypeUtilsKt {
    @NotNull
    public static final TypeProjection asTypeProjection(@NotNull KotlinType kotlinType) {
        Intrinsics.checkNotNullParameter(kotlinType, "<this>");
        return new TypeProjectionImpl(kotlinType);
    }

    public static final boolean contains(@NotNull KotlinType kotlinType, @NotNull Function1<? super UnwrappedType, Boolean> predicate) {
        Intrinsics.checkNotNullParameter(kotlinType, "<this>");
        Intrinsics.checkNotNullParameter(predicate, "predicate");
        return TypeUtils.contains(kotlinType, predicate);
    }

    public static final boolean containsTypeAliasParameters(@NotNull KotlinType kotlinType) {
        Intrinsics.checkNotNullParameter(kotlinType, "<this>");
        return contains(kotlinType, b.f35219d);
    }

    public static final boolean containsTypeParameter(@NotNull KotlinType kotlinType) {
        Intrinsics.checkNotNullParameter(kotlinType, "<this>");
        return TypeUtils.contains(kotlinType, a.f35218d);
    }

    @NotNull
    public static final TypeProjection createProjection(@NotNull KotlinType type, @NotNull Variance projectionKind, TypeParameterDescriptor typeParameterDescriptor) {
        Variance variance;
        Intrinsics.checkNotNullParameter(type, "type");
        Intrinsics.checkNotNullParameter(projectionKind, "projectionKind");
        if (typeParameterDescriptor != null) {
            variance = typeParameterDescriptor.getVariance();
        } else {
            variance = null;
        }
        if (variance == projectionKind) {
            projectionKind = Variance.INVARIANT;
        }
        return new TypeProjectionImpl(projectionKind, type);
    }

    private static final boolean e(KotlinType kotlinType, TypeConstructor typeConstructor, Set set) {
        ClassifierDescriptorWithTypeParameters classifierDescriptorWithTypeParameters;
        List<TypeParameterDescriptor> list;
        TypeParameterDescriptor typeParameterDescriptor;
        boolean e10;
        if (Intrinsics.areEqual(kotlinType.getConstructor(), typeConstructor)) {
            return true;
        }
        ClassifierDescriptor mo1197getDeclarationDescriptor = kotlinType.getConstructor().mo1197getDeclarationDescriptor();
        if (mo1197getDeclarationDescriptor instanceof ClassifierDescriptorWithTypeParameters) {
            classifierDescriptorWithTypeParameters = (ClassifierDescriptorWithTypeParameters) mo1197getDeclarationDescriptor;
        } else {
            classifierDescriptorWithTypeParameters = null;
        }
        if (classifierDescriptorWithTypeParameters != null) {
            list = classifierDescriptorWithTypeParameters.getDeclaredTypeParameters();
        } else {
            list = null;
        }
        Iterable<IndexedValue> n12 = CollectionsKt.n1(kotlinType.getArguments());
        if ((n12 instanceof Collection) && ((Collection) n12).isEmpty()) {
            return false;
        }
        for (IndexedValue indexedValue : n12) {
            int a10 = indexedValue.a();
            TypeProjection typeProjection = (TypeProjection) indexedValue.b();
            if (list != null) {
                typeParameterDescriptor = (TypeParameterDescriptor) CollectionsKt.q0(list, a10);
            } else {
                typeParameterDescriptor = null;
            }
            if ((typeParameterDescriptor != null && set != null && set.contains(typeParameterDescriptor)) || typeProjection.isStarProjection()) {
                e10 = false;
                continue;
            } else {
                KotlinType type = typeProjection.getType();
                Intrinsics.checkNotNullExpressionValue(type, "getType(...)");
                e10 = e(type, typeConstructor, set);
                continue;
            }
            if (e10) {
                return true;
            }
        }
        return false;
    }

    @NotNull
    public static final Set<TypeParameterDescriptor> extractTypeParametersFromUpperBounds(@NotNull KotlinType kotlinType, Set<? extends TypeParameterDescriptor> set) {
        Intrinsics.checkNotNullParameter(kotlinType, "<this>");
        LinkedHashSet linkedHashSet = new LinkedHashSet();
        h(kotlinType, kotlinType, linkedHashSet, set);
        return linkedHashSet;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final boolean f(UnwrappedType it) {
        Intrinsics.checkNotNullParameter(it, "it");
        ClassifierDescriptor mo1197getDeclarationDescriptor = it.getConstructor().mo1197getDeclarationDescriptor();
        if (mo1197getDeclarationDescriptor != null) {
            return isTypeAliasParameter(mo1197getDeclarationDescriptor);
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Boolean g(UnwrappedType unwrappedType) {
        return Boolean.valueOf(TypeUtils.isTypeParameter(unwrappedType));
    }

    @NotNull
    public static final KotlinBuiltIns getBuiltIns(@NotNull KotlinType kotlinType) {
        Intrinsics.checkNotNullParameter(kotlinType, "<this>");
        KotlinBuiltIns builtIns = kotlinType.getConstructor().getBuiltIns();
        Intrinsics.checkNotNullExpressionValue(builtIns, "getBuiltIns(...)");
        return builtIns;
    }

    /* JADX WARN: Multi-variable type inference failed */
    @NotNull
    public static final KotlinType getRepresentativeUpperBound(@NotNull TypeParameterDescriptor typeParameterDescriptor) {
        ClassDescriptor classDescriptor;
        Intrinsics.checkNotNullParameter(typeParameterDescriptor, "<this>");
        List<KotlinType> upperBounds = typeParameterDescriptor.getUpperBounds();
        Intrinsics.checkNotNullExpressionValue(upperBounds, "getUpperBounds(...)");
        upperBounds.isEmpty();
        List<KotlinType> upperBounds2 = typeParameterDescriptor.getUpperBounds();
        Intrinsics.checkNotNullExpressionValue(upperBounds2, "getUpperBounds(...)");
        Iterator<T> it = upperBounds2.iterator();
        while (true) {
            classDescriptor = null;
            if (!it.hasNext()) {
                break;
            }
            Object next = it.next();
            ClassifierDescriptor mo1197getDeclarationDescriptor = ((KotlinType) next).getConstructor().mo1197getDeclarationDescriptor();
            if (mo1197getDeclarationDescriptor instanceof ClassDescriptor) {
                classDescriptor = (ClassDescriptor) mo1197getDeclarationDescriptor;
            }
            if (classDescriptor != null && classDescriptor.getKind() != ClassKind.INTERFACE && classDescriptor.getKind() != ClassKind.ANNOTATION_CLASS) {
                classDescriptor = next;
                break;
            }
        }
        KotlinType kotlinType = (KotlinType) classDescriptor;
        if (kotlinType == null) {
            List<KotlinType> upperBounds3 = typeParameterDescriptor.getUpperBounds();
            Intrinsics.checkNotNullExpressionValue(upperBounds3, "getUpperBounds(...)");
            Object o02 = CollectionsKt.o0(upperBounds3);
            Intrinsics.checkNotNullExpressionValue(o02, "first(...)");
            return (KotlinType) o02;
        }
        return kotlinType;
    }

    private static final void h(KotlinType kotlinType, KotlinType kotlinType2, Set set, Set set2) {
        ClassifierDescriptorWithTypeParameters classifierDescriptorWithTypeParameters;
        List<TypeParameterDescriptor> list;
        TypeParameterDescriptor typeParameterDescriptor;
        ClassifierDescriptor mo1197getDeclarationDescriptor = kotlinType.getConstructor().mo1197getDeclarationDescriptor();
        if (mo1197getDeclarationDescriptor instanceof TypeParameterDescriptor) {
            if (!Intrinsics.areEqual(kotlinType.getConstructor(), kotlinType2.getConstructor())) {
                set.add(mo1197getDeclarationDescriptor);
                return;
            }
            for (KotlinType kotlinType3 : ((TypeParameterDescriptor) mo1197getDeclarationDescriptor).getUpperBounds()) {
                Intrinsics.checkNotNull(kotlinType3);
                h(kotlinType3, kotlinType2, set, set2);
            }
            return;
        }
        ClassifierDescriptor mo1197getDeclarationDescriptor2 = kotlinType.getConstructor().mo1197getDeclarationDescriptor();
        if (mo1197getDeclarationDescriptor2 instanceof ClassifierDescriptorWithTypeParameters) {
            classifierDescriptorWithTypeParameters = (ClassifierDescriptorWithTypeParameters) mo1197getDeclarationDescriptor2;
        } else {
            classifierDescriptorWithTypeParameters = null;
        }
        if (classifierDescriptorWithTypeParameters != null) {
            list = classifierDescriptorWithTypeParameters.getDeclaredTypeParameters();
        } else {
            list = null;
        }
        int i10 = 0;
        for (TypeProjection typeProjection : kotlinType.getArguments()) {
            int i11 = i10 + 1;
            if (list != null) {
                typeParameterDescriptor = (TypeParameterDescriptor) CollectionsKt.q0(list, i10);
            } else {
                typeParameterDescriptor = null;
            }
            if ((typeParameterDescriptor == null || set2 == null || !set2.contains(typeParameterDescriptor)) && !typeProjection.isStarProjection() && !CollectionsKt.d0(set, typeProjection.getType().getConstructor().mo1197getDeclarationDescriptor()) && !Intrinsics.areEqual(typeProjection.getType().getConstructor(), kotlinType2.getConstructor())) {
                KotlinType type = typeProjection.getType();
                Intrinsics.checkNotNullExpressionValue(type, "getType(...)");
                h(type, kotlinType2, set, set2);
            }
            i10 = i11;
        }
    }

    public static final boolean hasTypeParameterRecursiveBounds(@NotNull TypeParameterDescriptor typeParameter) {
        Intrinsics.checkNotNullParameter(typeParameter, "typeParameter");
        return hasTypeParameterRecursiveBounds$default(typeParameter, null, null, 6, null);
    }

    public static /* synthetic */ boolean hasTypeParameterRecursiveBounds$default(TypeParameterDescriptor typeParameterDescriptor, TypeConstructor typeConstructor, Set set, int i10, Object obj) {
        if ((i10 & 2) != 0) {
            typeConstructor = null;
        }
        if ((i10 & 4) != 0) {
            set = null;
        }
        return hasTypeParameterRecursiveBounds(typeParameterDescriptor, typeConstructor, set);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final boolean i(UnwrappedType it) {
        Intrinsics.checkNotNullParameter(it, "it");
        ClassifierDescriptor mo1197getDeclarationDescriptor = it.getConstructor().mo1197getDeclarationDescriptor();
        if (mo1197getDeclarationDescriptor == null) {
            return false;
        }
        if (!(mo1197getDeclarationDescriptor instanceof TypeAliasDescriptor) && !(mo1197getDeclarationDescriptor instanceof TypeParameterDescriptor)) {
            return false;
        }
        return true;
    }

    public static final boolean isBoolean(@NotNull KotlinType kotlinType) {
        Intrinsics.checkNotNullParameter(kotlinType, "<this>");
        return KotlinBuiltIns.isBoolean(kotlinType);
    }

    public static final boolean isNothing(@NotNull KotlinType kotlinType) {
        Intrinsics.checkNotNullParameter(kotlinType, "<this>");
        return KotlinBuiltIns.isNothing(kotlinType);
    }

    public static final boolean isStubType(@NotNull KotlinType kotlinType) {
        Intrinsics.checkNotNullParameter(kotlinType, "<this>");
        if (!(kotlinType instanceof AbstractStubType)) {
            if (!(kotlinType instanceof DefinitelyNotNullType) || !(((DefinitelyNotNullType) kotlinType).getOriginal() instanceof AbstractStubType)) {
                return false;
            }
            return true;
        }
        return true;
    }

    public static final boolean isStubTypeForBuilderInference(@NotNull KotlinType kotlinType) {
        Intrinsics.checkNotNullParameter(kotlinType, "<this>");
        if (!(kotlinType instanceof StubTypeForBuilderInference)) {
            if (!(kotlinType instanceof DefinitelyNotNullType) || !(((DefinitelyNotNullType) kotlinType).getOriginal() instanceof StubTypeForBuilderInference)) {
                return false;
            }
            return true;
        }
        return true;
    }

    public static final boolean isSubtypeOf(@NotNull KotlinType kotlinType, @NotNull KotlinType superType) {
        Intrinsics.checkNotNullParameter(kotlinType, "<this>");
        Intrinsics.checkNotNullParameter(superType, "superType");
        return KotlinTypeChecker.DEFAULT.isSubtypeOf(kotlinType, superType);
    }

    public static final boolean isTypeAliasParameter(@NotNull ClassifierDescriptor classifierDescriptor) {
        Intrinsics.checkNotNullParameter(classifierDescriptor, "<this>");
        if ((classifierDescriptor instanceof TypeParameterDescriptor) && (((TypeParameterDescriptor) classifierDescriptor).getContainingDeclaration() instanceof TypeAliasDescriptor)) {
            return true;
        }
        return false;
    }

    public static final boolean isTypeParameter(@NotNull KotlinType kotlinType) {
        Intrinsics.checkNotNullParameter(kotlinType, "<this>");
        return TypeUtils.isTypeParameter(kotlinType);
    }

    public static final boolean isUnresolvedType(@NotNull KotlinType type) {
        Intrinsics.checkNotNullParameter(type, "type");
        if ((type instanceof ErrorType) && ((ErrorType) type).getKind().isUnresolved()) {
            return true;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final boolean j(UnwrappedType it) {
        Intrinsics.checkNotNullParameter(it, "it");
        if (!(it instanceof StubTypeForBuilderInference) && !(it.getConstructor() instanceof TypeVariableTypeConstructorMarker) && !KotlinTypeKt.isError(it)) {
            return false;
        }
        return true;
    }

    @NotNull
    public static final KotlinType makeNotNullable(@NotNull KotlinType kotlinType) {
        Intrinsics.checkNotNullParameter(kotlinType, "<this>");
        KotlinType makeNotNullable = TypeUtils.makeNotNullable(kotlinType);
        Intrinsics.checkNotNullExpressionValue(makeNotNullable, "makeNotNullable(...)");
        return makeNotNullable;
    }

    @NotNull
    public static final KotlinType makeNullable(@NotNull KotlinType kotlinType) {
        Intrinsics.checkNotNullParameter(kotlinType, "<this>");
        KotlinType makeNullable = TypeUtils.makeNullable(kotlinType);
        Intrinsics.checkNotNullExpressionValue(makeNullable, "makeNullable(...)");
        return makeNullable;
    }

    @NotNull
    public static final KotlinType replaceAnnotations(@NotNull KotlinType kotlinType, @NotNull Annotations newAnnotations) {
        Intrinsics.checkNotNullParameter(kotlinType, "<this>");
        Intrinsics.checkNotNullParameter(newAnnotations, "newAnnotations");
        if (kotlinType.getAnnotations().isEmpty() && newAnnotations.isEmpty()) {
            return kotlinType;
        }
        return kotlinType.unwrap().replaceAttributes(TypeAttributesKt.replaceAnnotations(kotlinType.getAttributes(), newAnnotations));
    }

    /* JADX WARN: Multi-variable type inference failed */
    /* JADX WARN: Type inference failed for: r0v11, types: [kotlin.reflect.jvm.internal.impl.types.UnwrappedType] */
    @NotNull
    public static final KotlinType replaceArgumentsWithStarProjections(@NotNull KotlinType kotlinType) {
        SimpleType simpleType;
        Intrinsics.checkNotNullParameter(kotlinType, "<this>");
        UnwrappedType unwrap = kotlinType.unwrap();
        if (unwrap instanceof FlexibleType) {
            FlexibleType flexibleType = (FlexibleType) unwrap;
            SimpleType lowerBound = flexibleType.getLowerBound();
            if (!lowerBound.getConstructor().getParameters().isEmpty() && lowerBound.getConstructor().mo1197getDeclarationDescriptor() != null) {
                List<TypeParameterDescriptor> parameters = lowerBound.getConstructor().getParameters();
                Intrinsics.checkNotNullExpressionValue(parameters, "getParameters(...)");
                List<TypeParameterDescriptor> list = parameters;
                ArrayList arrayList = new ArrayList(CollectionsKt.w(list, 10));
                for (TypeParameterDescriptor typeParameterDescriptor : list) {
                    arrayList.add(new StarProjectionImpl(typeParameterDescriptor));
                }
                lowerBound = TypeSubstitutionKt.replace$default(lowerBound, arrayList, null, 2, null);
            }
            SimpleType upperBound = flexibleType.getUpperBound();
            if (!upperBound.getConstructor().getParameters().isEmpty() && upperBound.getConstructor().mo1197getDeclarationDescriptor() != null) {
                List<TypeParameterDescriptor> parameters2 = upperBound.getConstructor().getParameters();
                Intrinsics.checkNotNullExpressionValue(parameters2, "getParameters(...)");
                List<TypeParameterDescriptor> list2 = parameters2;
                ArrayList arrayList2 = new ArrayList(CollectionsKt.w(list2, 10));
                for (TypeParameterDescriptor typeParameterDescriptor2 : list2) {
                    arrayList2.add(new StarProjectionImpl(typeParameterDescriptor2));
                }
                upperBound = TypeSubstitutionKt.replace$default(upperBound, arrayList2, null, 2, null);
            }
            simpleType = KotlinTypeFactory.flexibleType(lowerBound, upperBound);
        } else if (unwrap instanceof SimpleType) {
            SimpleType simpleType2 = (SimpleType) unwrap;
            boolean isEmpty = simpleType2.getConstructor().getParameters().isEmpty();
            simpleType = simpleType2;
            if (!isEmpty) {
                ClassifierDescriptor mo1197getDeclarationDescriptor = simpleType2.getConstructor().mo1197getDeclarationDescriptor();
                simpleType = simpleType2;
                if (mo1197getDeclarationDescriptor != null) {
                    List<TypeParameterDescriptor> parameters3 = simpleType2.getConstructor().getParameters();
                    Intrinsics.checkNotNullExpressionValue(parameters3, "getParameters(...)");
                    List<TypeParameterDescriptor> list3 = parameters3;
                    ArrayList arrayList3 = new ArrayList(CollectionsKt.w(list3, 10));
                    for (TypeParameterDescriptor typeParameterDescriptor3 : list3) {
                        arrayList3.add(new StarProjectionImpl(typeParameterDescriptor3));
                    }
                    simpleType = TypeSubstitutionKt.replace$default(simpleType2, arrayList3, null, 2, null);
                }
            }
        } else {
            throw new p();
        }
        return TypeWithEnhancementKt.inheritEnhancement(simpleType, unwrap);
    }

    public static final boolean requiresTypeAliasExpansion(@NotNull KotlinType kotlinType) {
        Intrinsics.checkNotNullParameter(kotlinType, "<this>");
        return contains(kotlinType, c.f35220d);
    }

    public static final boolean shouldBeUpdated(KotlinType kotlinType) {
        if (kotlinType != null && !contains(kotlinType, d.f35221d)) {
            return false;
        }
        return true;
    }

    public static final boolean hasTypeParameterRecursiveBounds(@NotNull TypeParameterDescriptor typeParameter, TypeConstructor typeConstructor, Set<? extends TypeParameterDescriptor> set) {
        Intrinsics.checkNotNullParameter(typeParameter, "typeParameter");
        List<KotlinType> upperBounds = typeParameter.getUpperBounds();
        Intrinsics.checkNotNullExpressionValue(upperBounds, "getUpperBounds(...)");
        List<KotlinType> list = upperBounds;
        if ((list instanceof Collection) && list.isEmpty()) {
            return false;
        }
        for (KotlinType kotlinType : list) {
            Intrinsics.checkNotNull(kotlinType);
            if (e(kotlinType, typeParameter.getDefaultType().getConstructor(), set) && (typeConstructor == null || Intrinsics.areEqual(kotlinType.getConstructor(), typeConstructor))) {
                return true;
            }
        }
        return false;
    }
}
