package kotlin.reflect.jvm.internal.impl.load.java.typeEnhancement;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlin.reflect.jvm.internal.impl.builtins.jvm.JavaToKotlinClassMap;
import kotlin.reflect.jvm.internal.impl.load.java.AbstractAnnotationTypeQualifierResolver;
import kotlin.reflect.jvm.internal.impl.load.java.AnnotationQualifierApplicabilityType;
import kotlin.reflect.jvm.internal.impl.load.java.JavaDefaultQualifiers;
import kotlin.reflect.jvm.internal.impl.load.java.JavaTypeQualifiersByElementType;
import kotlin.reflect.jvm.internal.impl.name.FqNameUnsafe;
import kotlin.reflect.jvm.internal.impl.types.model.KotlinTypeMarker;
import kotlin.reflect.jvm.internal.impl.types.model.TypeArgumentMarker;
import kotlin.reflect.jvm.internal.impl.types.model.TypeConstructorMarker;
import kotlin.reflect.jvm.internal.impl.types.model.TypeParameterMarker;
import kotlin.reflect.jvm.internal.impl.types.model.TypeSystemContext;
import kotlin.reflect.jvm.internal.impl.types.model.TypeVariance;
import org.jetbrains.annotations.NotNull;
@SourceDebugExtension({"SMAP\nAbstractSignatureParts.kt\nKotlin\n*S Kotlin\n*F\n+ 1 AbstractSignatureParts.kt\norg/jetbrains/kotlin/load/java/typeEnhancement/AbstractSignatureParts\n+ 2 fake.kt\nkotlin/jvm/internal/FakeKt\n+ 3 _Collections.kt\nkotlin/collections/CollectionsKt___CollectionsKt\n*L\n1#1,234:1\n1#2:235\n1#2:258\n1#2:281\n774#3:236\n865#3,2:237\n1740#3,3:239\n1761#3,3:242\n1761#3,3:245\n1617#3,9:248\n1869#3:257\n1870#3:259\n1626#3:260\n1740#3,3:261\n1563#3:264\n1634#3,3:265\n1761#3,3:268\n1617#3,9:271\n1869#3:280\n1870#3:282\n1626#3:283\n1869#3,2:284\n3550#3,7:286\n*S KotlinDebug\n*F\n+ 1 AbstractSignatureParts.kt\norg/jetbrains/kotlin/load/java/typeEnhancement/AbstractSignatureParts\n*L\n162#1:258\n188#1:281\n90#1:236\n90#1:237,2\n159#1:239,3\n161#1:242,3\n162#1:245,3\n162#1:248,9\n162#1:257\n162#1:259\n162#1:260\n165#1:261,3\n175#1:264\n175#1:265,3\n183#1:268,3\n188#1:271,9\n188#1:280\n188#1:282\n188#1:283\n201#1:284,2\n215#1:286,7\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class AbstractSignatureParts<TAnnotation> {

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private final KotlinTypeMarker f33099a;

        /* renamed from: b  reason: collision with root package name */
        private final JavaTypeQualifiersByElementType f33100b;

        /* renamed from: c  reason: collision with root package name */
        private final TypeParameterMarker f33101c;

        public a(KotlinTypeMarker kotlinTypeMarker, JavaTypeQualifiersByElementType javaTypeQualifiersByElementType, TypeParameterMarker typeParameterMarker) {
            this.f33099a = kotlinTypeMarker;
            this.f33100b = javaTypeQualifiersByElementType;
            this.f33101c = typeParameterMarker;
        }

        public final JavaTypeQualifiersByElementType a() {
            return this.f33100b;
        }

        public final KotlinTypeMarker b() {
            return this.f33099a;
        }

        public final TypeParameterMarker c() {
            return this.f33101c;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final JavaTypeQualifiers d(TypeEnhancementInfo typeEnhancementInfo, JavaTypeQualifiers[] javaTypeQualifiersArr, int i10) {
        Map<Integer, JavaTypeQualifiers> map;
        JavaTypeQualifiers javaTypeQualifiers;
        if (typeEnhancementInfo != null && (map = typeEnhancementInfo.getMap()) != null && (javaTypeQualifiers = map.get(Integer.valueOf(i10))) != null) {
            return javaTypeQualifiers;
        }
        if (i10 >= 0 && i10 < javaTypeQualifiersArr.length) {
            return javaTypeQualifiersArr[i10];
        }
        return JavaTypeQualifiers.Companion.getNONE();
    }

    private final JavaTypeQualifiersByElementType e(KotlinTypeMarker kotlinTypeMarker, JavaTypeQualifiersByElementType javaTypeQualifiersByElementType) {
        return getAnnotationTypeQualifierResolver().extractAndMergeDefaultQualifiers(javaTypeQualifiersByElementType, getAnnotations(kotlinTypeMarker));
    }

    private final JavaTypeQualifiers f(KotlinTypeMarker kotlinTypeMarker) {
        NullabilityQualifier nullabilityQualifier;
        boolean z10;
        NullabilityQualifier m10 = m(kotlinTypeMarker);
        MutabilityQualifier mutabilityQualifier = null;
        if (m10 == null) {
            KotlinTypeMarker enhancedForWarnings = getEnhancedForWarnings(kotlinTypeMarker);
            if (enhancedForWarnings != null) {
                nullabilityQualifier = m(enhancedForWarnings);
            } else {
                nullabilityQualifier = null;
            }
        } else {
            nullabilityQualifier = m10;
        }
        TypeSystemContext typeSystem = getTypeSystem();
        JavaToKotlinClassMap javaToKotlinClassMap = JavaToKotlinClassMap.INSTANCE;
        if (javaToKotlinClassMap.isReadOnly(getFqNameUnsafe(typeSystem.lowerBoundIfFlexible(kotlinTypeMarker)))) {
            mutabilityQualifier = MutabilityQualifier.READ_ONLY;
        } else if (javaToKotlinClassMap.isMutable(getFqNameUnsafe(typeSystem.upperBoundIfFlexible(kotlinTypeMarker)))) {
            mutabilityQualifier = MutabilityQualifier.MUTABLE;
        }
        boolean z11 = true;
        if (!getTypeSystem().isDefinitelyNotNullType(kotlinTypeMarker) && !isNotNullTypeParameterCompat(kotlinTypeMarker)) {
            z10 = false;
        } else {
            z10 = true;
        }
        if (nullabilityQualifier == m10) {
            z11 = false;
        }
        return new JavaTypeQualifiers(nullabilityQualifier, mutabilityQualifier, z10, z11);
    }

    private final JavaTypeQualifiers g(a aVar) {
        boolean z10;
        List l10;
        TypeParameterMarker typeParameterMarker;
        boolean z11;
        AnnotationQualifierApplicabilityType containerApplicabilityType;
        JavaDefaultQualifiers javaDefaultQualifiers;
        NullabilityQualifierWithMigrationStatus nullabilityQualifierWithMigrationStatus;
        NullabilityQualifier nullabilityQualifier;
        boolean z12;
        NullabilityQualifierWithMigrationStatus nullabilityQualifierWithMigrationStatus2;
        KotlinTypeMarker b10;
        TypeConstructorMarker typeConstructor;
        TypeVariance typeVariance;
        NullabilityQualifier nullabilityQualifier2 = null;
        if (aVar.b() == null) {
            TypeSystemContext typeSystem = getTypeSystem();
            TypeParameterMarker c10 = aVar.c();
            if (c10 != null) {
                typeVariance = typeSystem.getVariance(c10);
            } else {
                typeVariance = null;
            }
            if (typeVariance == TypeVariance.IN) {
                return JavaTypeQualifiers.Companion.getNONE();
            }
        }
        boolean z13 = false;
        if (aVar.c() == null) {
            z10 = true;
        } else {
            z10 = false;
        }
        KotlinTypeMarker b11 = aVar.b();
        if (b11 == null || (l10 = getAnnotations(b11)) == null) {
            l10 = CollectionsKt.l();
        }
        TypeSystemContext typeSystem2 = getTypeSystem();
        KotlinTypeMarker b12 = aVar.b();
        if (b12 != null && (typeConstructor = typeSystem2.typeConstructor(b12)) != null) {
            typeParameterMarker = typeSystem2.getTypeParameterClassifier(typeConstructor);
        } else {
            typeParameterMarker = null;
        }
        if (getContainerApplicabilityType() == AnnotationQualifierApplicabilityType.TYPE_PARAMETER_BOUNDS) {
            z11 = true;
        } else {
            z11 = false;
        }
        if (z10) {
            if (!z11 && getEnableImprovementsInStrictMode() && (b10 = aVar.b()) != null && isArrayOrPrimitiveArray(b10)) {
                Iterable<TAnnotation> containerAnnotations = getContainerAnnotations();
                ArrayList arrayList = new ArrayList();
                for (TAnnotation tannotation : containerAnnotations) {
                    if (!getAnnotationTypeQualifierResolver().isTypeUseAnnotation(tannotation)) {
                        arrayList.add(tannotation);
                    }
                }
                l10 = CollectionsKt.L0(arrayList, l10);
            } else {
                l10 = CollectionsKt.J0(getContainerAnnotations(), l10);
            }
        }
        MutabilityQualifier extractMutability = getAnnotationTypeQualifierResolver().extractMutability(l10);
        NullabilityQualifierWithMigrationStatus extractNullability = getAnnotationTypeQualifierResolver().extractNullability(l10, new kotlin.reflect.jvm.internal.impl.load.java.typeEnhancement.a(this, aVar));
        if (extractNullability != null) {
            NullabilityQualifier qualifier = extractNullability.getQualifier();
            if (extractNullability.getQualifier() == NullabilityQualifier.NOT_NULL && typeParameterMarker != null) {
                z13 = true;
            }
            return new JavaTypeQualifiers(qualifier, extractMutability, z13, extractNullability.isForWarningOnly());
        }
        if (!z10 && !z11) {
            containerApplicabilityType = AnnotationQualifierApplicabilityType.TYPE_USE;
        } else {
            containerApplicabilityType = getContainerApplicabilityType();
        }
        JavaTypeQualifiersByElementType a10 = aVar.a();
        if (a10 != null) {
            javaDefaultQualifiers = a10.get(containerApplicabilityType);
        } else {
            javaDefaultQualifiers = null;
        }
        if (typeParameterMarker != null) {
            nullabilityQualifierWithMigrationStatus = k(typeParameterMarker);
        } else {
            nullabilityQualifierWithMigrationStatus = null;
        }
        NullabilityQualifierWithMigrationStatus l11 = l(nullabilityQualifierWithMigrationStatus, javaDefaultQualifiers);
        if (nullabilityQualifierWithMigrationStatus != null) {
            nullabilityQualifier = nullabilityQualifierWithMigrationStatus.getQualifier();
        } else {
            nullabilityQualifier = null;
        }
        if (nullabilityQualifier != NullabilityQualifier.NOT_NULL && (typeParameterMarker == null || javaDefaultQualifiers == null || !javaDefaultQualifiers.getDefinitelyNotNull())) {
            z12 = false;
        } else {
            z12 = true;
        }
        TypeParameterMarker c11 = aVar.c();
        if (c11 != null && (nullabilityQualifierWithMigrationStatus2 = k(c11)) != null) {
            if (nullabilityQualifierWithMigrationStatus2.getQualifier() == NullabilityQualifier.NULLABLE) {
                nullabilityQualifierWithMigrationStatus2 = NullabilityQualifierWithMigrationStatus.copy$default(nullabilityQualifierWithMigrationStatus2, NullabilityQualifier.FORCE_FLEXIBILITY, false, 2, null);
            }
        } else {
            nullabilityQualifierWithMigrationStatus2 = null;
        }
        NullabilityQualifierWithMigrationStatus n10 = n(nullabilityQualifierWithMigrationStatus2, l11);
        if (n10 != null) {
            nullabilityQualifier2 = n10.getQualifier();
        }
        if (n10 != null && n10.isForWarningOnly()) {
            z13 = true;
        }
        return new JavaTypeQualifiers(nullabilityQualifier2, extractMutability, z12, z13);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final boolean h(AbstractSignatureParts abstractSignatureParts, a aVar, Object extractNullability) {
        Intrinsics.checkNotNullParameter(extractNullability, "$this$extractNullability");
        return abstractSignatureParts.forceWarning(extractNullability, aVar.b());
    }

    private final List i(Object obj, Function1 function1) {
        ArrayList arrayList = new ArrayList(1);
        j(obj, arrayList, function1);
        return arrayList;
    }

    private final void j(Object obj, List list, Function1 function1) {
        list.add(obj);
        Iterable<Object> iterable = (Iterable) function1.invoke(obj);
        if (iterable != null) {
            for (Object obj2 : iterable) {
                j(obj2, list, function1);
            }
        }
    }

    private final NullabilityQualifierWithMigrationStatus k(TypeParameterMarker typeParameterMarker) {
        List<KotlinTypeMarker> list;
        NullabilityQualifier nullabilityQualifier;
        boolean z10;
        TypeSystemContext typeSystem = getTypeSystem();
        if (!isFromJava(typeParameterMarker)) {
            return null;
        }
        List<KotlinTypeMarker> upperBounds = typeSystem.getUpperBounds(typeParameterMarker);
        List<KotlinTypeMarker> list2 = upperBounds;
        boolean z11 = list2 instanceof Collection;
        if (!z11 || !list2.isEmpty()) {
            Iterator<T> it = list2.iterator();
            while (true) {
                if (!it.hasNext()) {
                    break;
                } else if (!typeSystem.isError((KotlinTypeMarker) it.next())) {
                    if (!z11 || !list2.isEmpty()) {
                        for (KotlinTypeMarker kotlinTypeMarker : list2) {
                            if (m(kotlinTypeMarker) != null) {
                                list = upperBounds;
                                break;
                            }
                        }
                    }
                    if (!z11 || !list2.isEmpty()) {
                        for (KotlinTypeMarker kotlinTypeMarker2 : list2) {
                            if (getEnhancedForWarnings(kotlinTypeMarker2) != null) {
                                list = new ArrayList<>();
                                for (KotlinTypeMarker kotlinTypeMarker3 : list2) {
                                    KotlinTypeMarker enhancedForWarnings = getEnhancedForWarnings(kotlinTypeMarker3);
                                    if (enhancedForWarnings != null) {
                                        list.add(enhancedForWarnings);
                                    }
                                }
                                List<KotlinTypeMarker> list3 = list;
                                if (!(list3 instanceof Collection) || !list3.isEmpty()) {
                                    for (KotlinTypeMarker kotlinTypeMarker4 : list3) {
                                        if (!typeSystem.isNullableType(kotlinTypeMarker4)) {
                                            nullabilityQualifier = NullabilityQualifier.NOT_NULL;
                                            break;
                                        }
                                    }
                                }
                                nullabilityQualifier = NullabilityQualifier.NULLABLE;
                                if (list != upperBounds) {
                                    z10 = true;
                                } else {
                                    z10 = false;
                                }
                                return new NullabilityQualifierWithMigrationStatus(nullabilityQualifier, z10);
                            }
                        }
                    }
                }
            }
        }
        return null;
    }

    private final NullabilityQualifier m(KotlinTypeMarker kotlinTypeMarker) {
        TypeSystemContext typeSystem = getTypeSystem();
        if (typeSystem.isMarkedNullable(typeSystem.lowerBoundIfFlexible(kotlinTypeMarker))) {
            return NullabilityQualifier.NULLABLE;
        }
        if (!typeSystem.isMarkedNullable(typeSystem.upperBoundIfFlexible(kotlinTypeMarker))) {
            return NullabilityQualifier.NOT_NULL;
        }
        return null;
    }

    private final NullabilityQualifierWithMigrationStatus n(NullabilityQualifierWithMigrationStatus nullabilityQualifierWithMigrationStatus, NullabilityQualifierWithMigrationStatus nullabilityQualifierWithMigrationStatus2) {
        if (nullabilityQualifierWithMigrationStatus == null) {
            return nullabilityQualifierWithMigrationStatus2;
        }
        if (nullabilityQualifierWithMigrationStatus2 == null || ((!nullabilityQualifierWithMigrationStatus.isForWarningOnly() || nullabilityQualifierWithMigrationStatus2.isForWarningOnly()) && ((!nullabilityQualifierWithMigrationStatus.isForWarningOnly() && nullabilityQualifierWithMigrationStatus2.isForWarningOnly()) || (nullabilityQualifierWithMigrationStatus.getQualifier().compareTo(nullabilityQualifierWithMigrationStatus2.getQualifier()) >= 0 && nullabilityQualifierWithMigrationStatus.getQualifier().compareTo(nullabilityQualifierWithMigrationStatus2.getQualifier()) > 0)))) {
            return nullabilityQualifierWithMigrationStatus;
        }
        return nullabilityQualifierWithMigrationStatus2;
    }

    private final List o(KotlinTypeMarker kotlinTypeMarker) {
        return i(new a(kotlinTypeMarker, e(kotlinTypeMarker, getContainerDefaultTypeQualifiers()), null), new c(this, getTypeSystem()));
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Iterable p(AbstractSignatureParts abstractSignatureParts, TypeSystemContext typeSystemContext, a it) {
        KotlinTypeMarker b10;
        TypeConstructorMarker typeConstructor;
        List<TypeParameterMarker> parameters;
        a aVar;
        KotlinTypeMarker b11;
        Intrinsics.checkNotNullParameter(it, "it");
        if ((abstractSignatureParts.getSkipRawTypeArguments() && (b11 = it.b()) != null && typeSystemContext.isRawType(b11)) || (b10 = it.b()) == null || (typeConstructor = typeSystemContext.typeConstructor(b10)) == null || (parameters = typeSystemContext.getParameters(typeConstructor)) == null) {
            return null;
        }
        List<TypeParameterMarker> list = parameters;
        List<TypeArgumentMarker> arguments = typeSystemContext.getArguments(it.b());
        Iterator<T> it2 = list.iterator();
        Iterator<T> it3 = arguments.iterator();
        ArrayList arrayList = new ArrayList(Math.min(CollectionsKt.w(list, 10), CollectionsKt.w(arguments, 10)));
        while (it2.hasNext() && it3.hasNext()) {
            TypeParameterMarker typeParameterMarker = (TypeParameterMarker) it2.next();
            KotlinTypeMarker type = typeSystemContext.getType((TypeArgumentMarker) it3.next());
            if (type == null) {
                aVar = new a(null, it.a(), typeParameterMarker);
            } else {
                aVar = new a(type, abstractSignatureParts.e(type, it.a()), typeParameterMarker);
            }
            arrayList.add(aVar);
        }
        return arrayList;
    }

    @NotNull
    public final Function1<Integer, JavaTypeQualifiers> computeIndexedQualifiers(@NotNull KotlinTypeMarker kotlinTypeMarker, @NotNull Iterable<? extends KotlinTypeMarker> overrides, TypeEnhancementInfo typeEnhancementInfo, boolean z10) {
        int i10;
        boolean z11;
        boolean z12;
        JavaTypeQualifiers javaTypeQualifiers;
        KotlinTypeMarker b10;
        Intrinsics.checkNotNullParameter(kotlinTypeMarker, "<this>");
        Intrinsics.checkNotNullParameter(overrides, "overrides");
        List o10 = o(kotlinTypeMarker);
        ArrayList<List> arrayList = new ArrayList(CollectionsKt.w(overrides, 10));
        for (KotlinTypeMarker kotlinTypeMarker2 : overrides) {
            arrayList.add(o(kotlinTypeMarker2));
        }
        if (!getForceOnlyHeadTypeConstructor()) {
            if (isCovariant() && (!(overrides instanceof Collection) || !((Collection) overrides).isEmpty())) {
                for (KotlinTypeMarker kotlinTypeMarker3 : overrides) {
                    if (!isEqual(kotlinTypeMarker, kotlinTypeMarker3)) {
                        i10 = 1;
                        break;
                    }
                }
            }
            i10 = o10.size();
        } else {
            i10 = 1;
            break;
        }
        JavaTypeQualifiers[] javaTypeQualifiersArr = new JavaTypeQualifiers[i10];
        for (int i11 = 0; i11 < i10; i11++) {
            JavaTypeQualifiers g10 = g((a) o10.get(i11));
            ArrayList arrayList2 = new ArrayList();
            for (List list : arrayList) {
                a aVar = (a) CollectionsKt.q0(list, i11);
                if (aVar != null && (b10 = aVar.b()) != null) {
                    javaTypeQualifiers = f(b10);
                } else {
                    javaTypeQualifiers = null;
                }
                if (javaTypeQualifiers != null) {
                    arrayList2.add(javaTypeQualifiers);
                }
            }
            if (i11 == 0 && isCovariant()) {
                z11 = true;
            } else {
                z11 = false;
            }
            if (i11 == 0 && getContainerIsVarargParameter()) {
                z12 = true;
            } else {
                z12 = false;
            }
            javaTypeQualifiersArr[i11] = TypeEnhancementUtilsKt.computeQualifiersForOverride(g10, arrayList2, z11, z12, z10);
        }
        return new b(typeEnhancementInfo, javaTypeQualifiersArr);
    }

    public abstract boolean forceWarning(@NotNull TAnnotation tannotation, KotlinTypeMarker kotlinTypeMarker);

    @NotNull
    public abstract AbstractAnnotationTypeQualifierResolver<TAnnotation> getAnnotationTypeQualifierResolver();

    @NotNull
    public abstract Iterable<TAnnotation> getAnnotations(@NotNull KotlinTypeMarker kotlinTypeMarker);

    @NotNull
    public abstract Iterable<TAnnotation> getContainerAnnotations();

    @NotNull
    public abstract AnnotationQualifierApplicabilityType getContainerApplicabilityType();

    public abstract JavaTypeQualifiersByElementType getContainerDefaultTypeQualifiers();

    public abstract boolean getContainerIsVarargParameter();

    public abstract boolean getEnableImprovementsInStrictMode();

    public abstract KotlinTypeMarker getEnhancedForWarnings(@NotNull KotlinTypeMarker kotlinTypeMarker);

    public boolean getForceOnlyHeadTypeConstructor() {
        return false;
    }

    public abstract FqNameUnsafe getFqNameUnsafe(@NotNull KotlinTypeMarker kotlinTypeMarker);

    public abstract boolean getSkipRawTypeArguments();

    @NotNull
    public abstract TypeSystemContext getTypeSystem();

    public abstract boolean isArrayOrPrimitiveArray(@NotNull KotlinTypeMarker kotlinTypeMarker);

    public abstract boolean isCovariant();

    public abstract boolean isEqual(@NotNull KotlinTypeMarker kotlinTypeMarker, @NotNull KotlinTypeMarker kotlinTypeMarker2);

    public abstract boolean isFromJava(@NotNull TypeParameterMarker typeParameterMarker);

    public boolean isNotNullTypeParameterCompat(@NotNull KotlinTypeMarker kotlinTypeMarker) {
        Intrinsics.checkNotNullParameter(kotlinTypeMarker, "<this>");
        return false;
    }

    protected abstract NullabilityQualifierWithMigrationStatus l(NullabilityQualifierWithMigrationStatus nullabilityQualifierWithMigrationStatus, JavaDefaultQualifiers javaDefaultQualifiers);
}
