package kotlin.reflect.jvm.internal.impl.load.java.lazy.types;

import java.util.ArrayList;
import java.util.List;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlin.reflect.jvm.internal.impl.builtins.PrimitiveType;
import kotlin.reflect.jvm.internal.impl.builtins.jvm.JavaToKotlinClassMapper;
import kotlin.reflect.jvm.internal.impl.descriptors.ClassDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.ClassifierDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.TypeParameterDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.annotations.AnnotationDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.annotations.Annotations;
import kotlin.reflect.jvm.internal.impl.descriptors.annotations.CompositeAnnotations;
import kotlin.reflect.jvm.internal.impl.load.java.UtilsKt;
import kotlin.reflect.jvm.internal.impl.load.java.lazy.LazyJavaAnnotations;
import kotlin.reflect.jvm.internal.impl.load.java.lazy.LazyJavaResolverContext;
import kotlin.reflect.jvm.internal.impl.load.java.lazy.TypeParameterResolver;
import kotlin.reflect.jvm.internal.impl.load.java.structure.JavaArrayType;
import kotlin.reflect.jvm.internal.impl.load.java.structure.JavaClass;
import kotlin.reflect.jvm.internal.impl.load.java.structure.JavaClassifier;
import kotlin.reflect.jvm.internal.impl.load.java.structure.JavaClassifierType;
import kotlin.reflect.jvm.internal.impl.load.java.structure.JavaPrimitiveType;
import kotlin.reflect.jvm.internal.impl.load.java.structure.JavaType;
import kotlin.reflect.jvm.internal.impl.load.java.structure.JavaTypeParameter;
import kotlin.reflect.jvm.internal.impl.load.java.structure.JavaTypesKt;
import kotlin.reflect.jvm.internal.impl.load.java.structure.JavaWildcardType;
import kotlin.reflect.jvm.internal.impl.name.ClassId;
import kotlin.reflect.jvm.internal.impl.name.FqName;
import kotlin.reflect.jvm.internal.impl.types.KotlinType;
import kotlin.reflect.jvm.internal.impl.types.KotlinTypeFactory;
import kotlin.reflect.jvm.internal.impl.types.LazyWrappedType;
import kotlin.reflect.jvm.internal.impl.types.SimpleType;
import kotlin.reflect.jvm.internal.impl.types.TypeAttributes;
import kotlin.reflect.jvm.internal.impl.types.TypeAttributesKt;
import kotlin.reflect.jvm.internal.impl.types.TypeConstructor;
import kotlin.reflect.jvm.internal.impl.types.TypeParameterUpperBoundEraser;
import kotlin.reflect.jvm.internal.impl.types.TypeProjection;
import kotlin.reflect.jvm.internal.impl.types.TypeProjectionImpl;
import kotlin.reflect.jvm.internal.impl.types.TypeUsage;
import kotlin.reflect.jvm.internal.impl.types.TypeUtils;
import kotlin.reflect.jvm.internal.impl.types.Variance;
import kotlin.reflect.jvm.internal.impl.types.checker.KotlinTypeRefiner;
import kotlin.reflect.jvm.internal.impl.types.error.ErrorType;
import kotlin.reflect.jvm.internal.impl.types.error.ErrorTypeKind;
import kotlin.reflect.jvm.internal.impl.types.error.ErrorUtils;
import kotlin.reflect.jvm.internal.impl.types.typeUtil.TypeUtilsKt;
import org.jetbrains.annotations.NotNull;
@SourceDebugExtension({"SMAP\nJavaTypeResolver.kt\nKotlin\n*S Kotlin\n*F\n+ 1 JavaTypeResolver.kt\norg/jetbrains/kotlin/load/java/lazy/types/JavaTypeResolver\n+ 2 fake.kt\nkotlin/jvm/internal/FakeKt\n+ 3 coreLib.kt\norg/jetbrains/kotlin/utils/CoreLibKt\n+ 4 _Collections.kt\nkotlin/collections/CollectionsKt___CollectionsKt\n*L\n1#1,321:1\n1#2:322\n19#3:323\n1563#4:324\n1634#4,3:325\n1563#4:328\n1634#4,3:329\n1563#4:332\n1634#4,3:333\n*S KotlinDebug\n*F\n+ 1 JavaTypeResolver.kt\norg/jetbrains/kotlin/load/java/lazy/types/JavaTypeResolver\n*L\n144#1:323\n205#1:324\n205#1:325,3\n263#1:328\n263#1:329,3\n267#1:332\n267#1:333,3\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class JavaTypeResolver {

    /* renamed from: a  reason: collision with root package name */
    private final LazyJavaResolverContext f33486a;

    /* renamed from: b  reason: collision with root package name */
    private final TypeParameterResolver f33487b;

    /* renamed from: c  reason: collision with root package name */
    private final RawProjectionComputer f33488c;

    /* renamed from: d  reason: collision with root package name */
    private final TypeParameterUpperBoundEraser f33489d;

    public JavaTypeResolver(@NotNull LazyJavaResolverContext c10, @NotNull TypeParameterResolver typeParameterResolver) {
        Intrinsics.checkNotNullParameter(c10, "c");
        Intrinsics.checkNotNullParameter(typeParameterResolver, "typeParameterResolver");
        this.f33486a = c10;
        this.f33487b = typeParameterResolver;
        RawProjectionComputer rawProjectionComputer = new RawProjectionComputer();
        this.f33488c = rawProjectionComputer;
        this.f33489d = new TypeParameterUpperBoundEraser(rawProjectionComputer, null, 2, null);
    }

    private final boolean b(JavaClassifierType javaClassifierType, ClassDescriptor classDescriptor) {
        Variance variance;
        if (!JavaTypesKt.isSuperWildcard((JavaType) CollectionsKt.B0(javaClassifierType.getTypeArguments()))) {
            return false;
        }
        List<TypeParameterDescriptor> parameters = JavaToKotlinClassMapper.INSTANCE.convertReadOnlyToMutable(classDescriptor).getTypeConstructor().getParameters();
        Intrinsics.checkNotNullExpressionValue(parameters, "getParameters(...)");
        TypeParameterDescriptor typeParameterDescriptor = (TypeParameterDescriptor) CollectionsKt.B0(parameters);
        if (typeParameterDescriptor == null || (variance = typeParameterDescriptor.getVariance()) == null || variance == Variance.OUT_VARIANCE) {
            return false;
        }
        return true;
    }

    /* JADX WARN: Code restructure failed: missing block: B:7:0x001f, code lost:
        if (r0.isEmpty() == false) goto L29;
     */
    /* JADX WARN: Removed duplicated region for block: B:13:0x002e  */
    /* JADX WARN: Removed duplicated region for block: B:15:0x0033  */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private final java.util.List c(kotlin.reflect.jvm.internal.impl.load.java.structure.JavaClassifierType r10, kotlin.reflect.jvm.internal.impl.load.java.lazy.types.JavaTypeAttributes r11, kotlin.reflect.jvm.internal.impl.types.TypeConstructor r12) {
        /*
            r9 = this;
            boolean r0 = r10.isRaw()
            java.lang.String r1 = "getParameters(...)"
            if (r0 != 0) goto L24
            java.util.List r0 = r10.getTypeArguments()
            boolean r0 = r0.isEmpty()
            if (r0 == 0) goto L22
            java.util.List r0 = r12.getParameters()
            kotlin.jvm.internal.Intrinsics.checkNotNullExpressionValue(r0, r1)
            java.util.Collection r0 = (java.util.Collection) r0
            boolean r0 = r0.isEmpty()
            if (r0 != 0) goto L22
            goto L24
        L22:
            r0 = 0
            goto L25
        L24:
            r0 = 1
        L25:
            java.util.List r2 = r12.getParameters()
            kotlin.jvm.internal.Intrinsics.checkNotNullExpressionValue(r2, r1)
            if (r0 == 0) goto L33
            java.util.List r10 = r9.d(r10, r2, r12, r11)
            return r10
        L33:
            int r11 = r2.size()
            java.util.List r12 = r10.getTypeArguments()
            int r12 = r12.size()
            r0 = 10
            if (r11 == r12) goto L7e
            java.lang.Iterable r2 = (java.lang.Iterable) r2
            java.util.ArrayList r10 = new java.util.ArrayList
            int r11 = kotlin.collections.CollectionsKt.w(r2, r0)
            r10.<init>(r11)
            java.util.Iterator r11 = r2.iterator()
        L52:
            boolean r12 = r11.hasNext()
            if (r12 == 0) goto L79
            java.lang.Object r12 = r11.next()
            kotlin.reflect.jvm.internal.impl.descriptors.TypeParameterDescriptor r12 = (kotlin.reflect.jvm.internal.impl.descriptors.TypeParameterDescriptor) r12
            kotlin.reflect.jvm.internal.impl.types.TypeProjectionImpl r0 = new kotlin.reflect.jvm.internal.impl.types.TypeProjectionImpl
            kotlin.reflect.jvm.internal.impl.types.error.ErrorTypeKind r1 = kotlin.reflect.jvm.internal.impl.types.error.ErrorTypeKind.MISSED_TYPE_ARGUMENT_FOR_TYPE_PARAMETER
            kotlin.reflect.jvm.internal.impl.name.Name r12 = r12.getName()
            java.lang.String r12 = r12.asString()
            java.lang.String[] r12 = new java.lang.String[]{r12}
            kotlin.reflect.jvm.internal.impl.types.error.ErrorType r12 = kotlin.reflect.jvm.internal.impl.types.error.ErrorUtils.createErrorType(r1, r12)
            r0.<init>(r12)
            r10.add(r0)
            goto L52
        L79:
            java.util.List r10 = kotlin.collections.CollectionsKt.h1(r10)
            return r10
        L7e:
            java.util.List r10 = r10.getTypeArguments()
            java.lang.Iterable r10 = (java.lang.Iterable) r10
            java.lang.Iterable r10 = kotlin.collections.CollectionsKt.n1(r10)
            java.util.ArrayList r11 = new java.util.ArrayList
            int r12 = kotlin.collections.CollectionsKt.w(r10, r0)
            r11.<init>(r12)
            java.util.Iterator r10 = r10.iterator()
        L95:
            boolean r12 = r10.hasNext()
            if (r12 == 0) goto Lca
            java.lang.Object r12 = r10.next()
            kotlin.collections.IndexedValue r12 = (kotlin.collections.IndexedValue) r12
            int r0 = r12.a()
            java.lang.Object r12 = r12.b()
            kotlin.reflect.jvm.internal.impl.load.java.structure.JavaType r12 = (kotlin.reflect.jvm.internal.impl.load.java.structure.JavaType) r12
            r2.size()
            java.lang.Object r0 = r2.get(r0)
            kotlin.reflect.jvm.internal.impl.descriptors.TypeParameterDescriptor r0 = (kotlin.reflect.jvm.internal.impl.descriptors.TypeParameterDescriptor) r0
            kotlin.reflect.jvm.internal.impl.types.TypeUsage r3 = kotlin.reflect.jvm.internal.impl.types.TypeUsage.COMMON
            r7 = 7
            r8 = 0
            r4 = 0
            r5 = 0
            r6 = 0
            kotlin.reflect.jvm.internal.impl.load.java.lazy.types.JavaTypeAttributes r1 = kotlin.reflect.jvm.internal.impl.load.java.lazy.types.JavaTypeAttributesKt.toAttributes$default(r3, r4, r5, r6, r7, r8)
            kotlin.jvm.internal.Intrinsics.checkNotNull(r0)
            kotlin.reflect.jvm.internal.impl.types.TypeProjection r12 = r9.n(r12, r1, r0)
            r11.add(r12)
            goto L95
        Lca:
            java.util.List r10 = kotlin.collections.CollectionsKt.h1(r11)
            return r10
        */
        throw new UnsupportedOperationException("Method not decompiled: kotlin.reflect.jvm.internal.impl.load.java.lazy.types.JavaTypeResolver.c(kotlin.reflect.jvm.internal.impl.load.java.structure.JavaClassifierType, kotlin.reflect.jvm.internal.impl.load.java.lazy.types.JavaTypeAttributes, kotlin.reflect.jvm.internal.impl.types.TypeConstructor):java.util.List");
    }

    private final List d(JavaClassifierType javaClassifierType, List list, TypeConstructor typeConstructor, JavaTypeAttributes javaTypeAttributes) {
        JavaClassifierType javaClassifierType2;
        TypeConstructor typeConstructor2;
        JavaTypeAttributes javaTypeAttributes2;
        TypeProjection computeProjection;
        List<TypeParameterDescriptor> list2 = list;
        ArrayList arrayList = new ArrayList(CollectionsKt.w(list2, 10));
        for (TypeParameterDescriptor typeParameterDescriptor : list2) {
            if (TypeUtilsKt.hasTypeParameterRecursiveBounds(typeParameterDescriptor, null, javaTypeAttributes.getVisitedTypeParameters())) {
                computeProjection = TypeUtils.makeStarProjection(typeParameterDescriptor, javaTypeAttributes);
                javaClassifierType2 = javaClassifierType;
                typeConstructor2 = typeConstructor;
                javaTypeAttributes2 = javaTypeAttributes;
            } else {
                javaClassifierType2 = javaClassifierType;
                typeConstructor2 = typeConstructor;
                javaTypeAttributes2 = javaTypeAttributes;
                computeProjection = this.f33488c.computeProjection(typeParameterDescriptor, javaTypeAttributes2.markIsRaw(javaClassifierType2.isRaw()), this.f33489d, new LazyWrappedType(this.f33486a.getStorageManager(), new a(this, typeParameterDescriptor, javaTypeAttributes2, typeConstructor2, javaClassifierType2)));
            }
            arrayList.add(computeProjection);
            javaTypeAttributes = javaTypeAttributes2;
            typeConstructor = typeConstructor2;
            javaClassifierType = javaClassifierType2;
        }
        return arrayList;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final KotlinType e(JavaTypeResolver javaTypeResolver, TypeParameterDescriptor typeParameterDescriptor, JavaTypeAttributes javaTypeAttributes, TypeConstructor typeConstructor, JavaClassifierType javaClassifierType) {
        SimpleType simpleType;
        TypeParameterUpperBoundEraser typeParameterUpperBoundEraser = javaTypeResolver.f33489d;
        ClassifierDescriptor mo1197getDeclarationDescriptor = typeConstructor.mo1197getDeclarationDescriptor();
        if (mo1197getDeclarationDescriptor != null) {
            simpleType = mo1197getDeclarationDescriptor.getDefaultType();
        } else {
            simpleType = null;
        }
        return typeParameterUpperBoundEraser.getErasedUpperBound(typeParameterDescriptor, javaTypeAttributes.withDefaultType(simpleType).markIsRaw(javaClassifierType.isRaw()));
    }

    private final SimpleType f(JavaClassifierType javaClassifierType, JavaTypeAttributes javaTypeAttributes, SimpleType simpleType) {
        JavaClassifierType javaClassifierType2;
        TypeAttributes defaultAttributes;
        if (simpleType != null && (defaultAttributes = simpleType.getAttributes()) != null) {
            javaClassifierType2 = javaClassifierType;
        } else {
            javaClassifierType2 = javaClassifierType;
            defaultAttributes = TypeAttributesKt.toDefaultAttributes(new LazyJavaAnnotations(this.f33486a, javaClassifierType2, false, 4, null));
        }
        TypeAttributes typeAttributes = defaultAttributes;
        TypeConstructor g10 = g(javaClassifierType2, javaTypeAttributes);
        TypeConstructor typeConstructor = null;
        if (g10 == null) {
            return null;
        }
        boolean j10 = j(javaTypeAttributes);
        if (simpleType != null) {
            typeConstructor = simpleType.getConstructor();
        }
        if (Intrinsics.areEqual(typeConstructor, g10) && !javaClassifierType2.isRaw() && j10) {
            return simpleType.makeNullableAsSpecified(true);
        }
        return KotlinTypeFactory.simpleType$default(typeAttributes, g10, c(javaClassifierType2, javaTypeAttributes, g10), j10, (KotlinTypeRefiner) null, 16, (Object) null);
    }

    private final TypeConstructor g(JavaClassifierType javaClassifierType, JavaTypeAttributes javaTypeAttributes) {
        TypeConstructor typeConstructor;
        JavaClassifier classifier = javaClassifierType.getClassifier();
        if (classifier == null) {
            return h(javaClassifierType);
        }
        if (classifier instanceof JavaClass) {
            JavaClass javaClass = (JavaClass) classifier;
            FqName fqName = javaClass.getFqName();
            if (fqName != null) {
                ClassDescriptor k10 = k(javaClassifierType, javaTypeAttributes, fqName);
                if (k10 == null) {
                    k10 = this.f33486a.getComponents().getModuleClassResolver().resolveClass(javaClass);
                }
                if (k10 != null && (typeConstructor = k10.getTypeConstructor()) != null) {
                    return typeConstructor;
                }
                return h(javaClassifierType);
            }
            throw new AssertionError("Class type should have a FQ name: " + classifier);
        } else if (classifier instanceof JavaTypeParameter) {
            TypeParameterDescriptor resolveTypeParameter = this.f33487b.resolveTypeParameter((JavaTypeParameter) classifier);
            if (resolveTypeParameter != null) {
                return resolveTypeParameter.getTypeConstructor();
            }
            return null;
        } else {
            throw new IllegalStateException("Unknown classifier kind: " + classifier);
        }
    }

    private final TypeConstructor h(JavaClassifierType javaClassifierType) {
        TypeConstructor typeConstructor = this.f33486a.getComponents().getDeserializedDescriptorResolver().getComponents().getNotFoundClasses().getClass(ClassId.Companion.topLevel(new FqName(javaClassifierType.getClassifierQualifiedName())), CollectionsKt.e(0)).getTypeConstructor();
        Intrinsics.checkNotNullExpressionValue(typeConstructor, "getTypeConstructor(...)");
        return typeConstructor;
    }

    private final boolean i(Variance variance, TypeParameterDescriptor typeParameterDescriptor) {
        if (typeParameterDescriptor.getVariance() == Variance.INVARIANT || variance == typeParameterDescriptor.getVariance()) {
            return false;
        }
        return true;
    }

    private final boolean j(JavaTypeAttributes javaTypeAttributes) {
        if (javaTypeAttributes.getFlexibility() == JavaTypeFlexibility.FLEXIBLE_LOWER_BOUND || javaTypeAttributes.isForAnnotationParameter() || javaTypeAttributes.getHowThisTypeIsUsed() == TypeUsage.SUPERTYPE) {
            return false;
        }
        return true;
    }

    private final ClassDescriptor k(JavaClassifierType javaClassifierType, JavaTypeAttributes javaTypeAttributes, FqName fqName) {
        FqName fqName2;
        if (javaTypeAttributes.isForAnnotationParameter()) {
            fqName2 = JavaTypeResolverKt.f33490a;
            if (Intrinsics.areEqual(fqName, fqName2)) {
                return this.f33486a.getComponents().getReflectionTypes().getKClass();
            }
        }
        JavaToKotlinClassMapper javaToKotlinClassMapper = JavaToKotlinClassMapper.INSTANCE;
        ClassDescriptor mapJavaToKotlin$default = JavaToKotlinClassMapper.mapJavaToKotlin$default(javaToKotlinClassMapper, fqName, this.f33486a.getModule().getBuiltIns(), null, 4, null);
        if (mapJavaToKotlin$default == null) {
            return null;
        }
        if (javaToKotlinClassMapper.isReadOnly(mapJavaToKotlin$default) && (javaTypeAttributes.getFlexibility() == JavaTypeFlexibility.FLEXIBLE_LOWER_BOUND || javaTypeAttributes.getHowThisTypeIsUsed() == TypeUsage.SUPERTYPE || b(javaClassifierType, mapJavaToKotlin$default))) {
            return javaToKotlinClassMapper.convertReadOnlyToMutable(mapJavaToKotlin$default);
        }
        return mapJavaToKotlin$default;
    }

    private final KotlinType l(JavaClassifierType javaClassifierType, JavaTypeAttributes javaTypeAttributes) {
        boolean z10;
        if (!javaTypeAttributes.isForAnnotationParameter() && javaTypeAttributes.getHowThisTypeIsUsed() != TypeUsage.SUPERTYPE) {
            z10 = true;
        } else {
            z10 = false;
        }
        boolean isRaw = javaClassifierType.isRaw();
        if (!isRaw && !z10) {
            SimpleType f10 = f(javaClassifierType, javaTypeAttributes, null);
            if (f10 != null) {
                return f10;
            }
            return m(javaClassifierType);
        }
        SimpleType f11 = f(javaClassifierType, javaTypeAttributes.withFlexibility(JavaTypeFlexibility.FLEXIBLE_LOWER_BOUND), null);
        if (f11 == null) {
            return m(javaClassifierType);
        }
        SimpleType f12 = f(javaClassifierType, javaTypeAttributes.withFlexibility(JavaTypeFlexibility.FLEXIBLE_UPPER_BOUND), f11);
        if (f12 == null) {
            return m(javaClassifierType);
        }
        if (isRaw) {
            return new RawTypeImpl(f11, f12);
        }
        return KotlinTypeFactory.flexibleType(f11, f12);
    }

    private static final ErrorType m(JavaClassifierType javaClassifierType) {
        return ErrorUtils.createErrorType(ErrorTypeKind.UNRESOLVED_JAVA_CLASS, javaClassifierType.getPresentableText());
    }

    private final TypeProjection n(JavaType javaType, JavaTypeAttributes javaTypeAttributes, TypeParameterDescriptor typeParameterDescriptor) {
        Variance variance;
        if (javaType instanceof JavaWildcardType) {
            JavaWildcardType javaWildcardType = (JavaWildcardType) javaType;
            JavaType bound = javaWildcardType.getBound();
            if (javaWildcardType.isExtends()) {
                variance = Variance.OUT_VARIANCE;
            } else {
                variance = Variance.IN_VARIANCE;
            }
            if (bound != null && !i(variance, typeParameterDescriptor)) {
                AnnotationDescriptor extractNullabilityAnnotationOnBoundedWildcard = UtilsKt.extractNullabilityAnnotationOnBoundedWildcard(this.f33486a, javaWildcardType);
                KotlinType transformJavaType = transformJavaType(bound, JavaTypeAttributesKt.toAttributes$default(TypeUsage.COMMON, false, false, null, 7, null));
                if (extractNullabilityAnnotationOnBoundedWildcard != null) {
                    transformJavaType = TypeUtilsKt.replaceAnnotations(transformJavaType, Annotations.Companion.create(CollectionsKt.K0(transformJavaType.getAnnotations(), extractNullabilityAnnotationOnBoundedWildcard)));
                }
                return TypeUtilsKt.createProjection(transformJavaType, variance, typeParameterDescriptor);
            }
            TypeProjection makeStarProjection = TypeUtils.makeStarProjection(typeParameterDescriptor, javaTypeAttributes);
            Intrinsics.checkNotNullExpressionValue(makeStarProjection, "makeStarProjection(...)");
            return makeStarProjection;
        }
        return new TypeProjectionImpl(Variance.INVARIANT, transformJavaType(javaType, javaTypeAttributes));
    }

    public static /* synthetic */ KotlinType transformArrayType$default(JavaTypeResolver javaTypeResolver, JavaArrayType javaArrayType, JavaTypeAttributes javaTypeAttributes, boolean z10, int i10, Object obj) {
        if ((i10 & 4) != 0) {
            z10 = false;
        }
        return javaTypeResolver.transformArrayType(javaArrayType, javaTypeAttributes, z10);
    }

    @NotNull
    public final KotlinType transformArrayType(@NotNull JavaArrayType arrayType, @NotNull JavaTypeAttributes attr, boolean z10) {
        JavaPrimitiveType javaPrimitiveType;
        Variance variance;
        Intrinsics.checkNotNullParameter(arrayType, "arrayType");
        Intrinsics.checkNotNullParameter(attr, "attr");
        JavaType componentType = arrayType.getComponentType();
        PrimitiveType primitiveType = null;
        if (componentType instanceof JavaPrimitiveType) {
            javaPrimitiveType = (JavaPrimitiveType) componentType;
        } else {
            javaPrimitiveType = null;
        }
        if (javaPrimitiveType != null) {
            primitiveType = javaPrimitiveType.getType();
        }
        LazyJavaAnnotations lazyJavaAnnotations = new LazyJavaAnnotations(this.f33486a, arrayType, true);
        if (primitiveType != null) {
            SimpleType primitiveArrayKotlinType = this.f33486a.getModule().getBuiltIns().getPrimitiveArrayKotlinType(primitiveType);
            Intrinsics.checkNotNull(primitiveArrayKotlinType);
            KotlinType replaceAnnotations = TypeUtilsKt.replaceAnnotations(primitiveArrayKotlinType, new CompositeAnnotations(primitiveArrayKotlinType.getAnnotations(), lazyJavaAnnotations));
            Intrinsics.checkNotNull(replaceAnnotations, "null cannot be cast to non-null type org.jetbrains.kotlin.types.SimpleType");
            SimpleType simpleType = (SimpleType) replaceAnnotations;
            if (attr.isForAnnotationParameter()) {
                return simpleType;
            }
            return KotlinTypeFactory.flexibleType(simpleType, simpleType.makeNullableAsSpecified(true));
        }
        KotlinType transformJavaType = transformJavaType(componentType, JavaTypeAttributesKt.toAttributes$default(TypeUsage.COMMON, attr.isForAnnotationParameter(), false, null, 6, null));
        if (attr.isForAnnotationParameter()) {
            if (z10) {
                variance = Variance.OUT_VARIANCE;
            } else {
                variance = Variance.INVARIANT;
            }
            SimpleType arrayType2 = this.f33486a.getModule().getBuiltIns().getArrayType(variance, transformJavaType, lazyJavaAnnotations);
            Intrinsics.checkNotNullExpressionValue(arrayType2, "getArrayType(...)");
            return arrayType2;
        }
        SimpleType arrayType3 = this.f33486a.getModule().getBuiltIns().getArrayType(Variance.INVARIANT, transformJavaType, lazyJavaAnnotations);
        Intrinsics.checkNotNullExpressionValue(arrayType3, "getArrayType(...)");
        return KotlinTypeFactory.flexibleType(arrayType3, this.f33486a.getModule().getBuiltIns().getArrayType(Variance.OUT_VARIANCE, transformJavaType, lazyJavaAnnotations).makeNullableAsSpecified(true));
    }

    @NotNull
    public final KotlinType transformJavaType(JavaType javaType, @NotNull JavaTypeAttributes attr) {
        KotlinType transformJavaType;
        SimpleType unitType;
        Intrinsics.checkNotNullParameter(attr, "attr");
        if (javaType instanceof JavaPrimitiveType) {
            PrimitiveType type = ((JavaPrimitiveType) javaType).getType();
            if (type != null) {
                unitType = this.f33486a.getModule().getBuiltIns().getPrimitiveKotlinType(type);
            } else {
                unitType = this.f33486a.getModule().getBuiltIns().getUnitType();
            }
            Intrinsics.checkNotNull(unitType);
            return unitType;
        } else if (javaType instanceof JavaClassifierType) {
            return l((JavaClassifierType) javaType, attr);
        } else {
            if (javaType instanceof JavaArrayType) {
                return transformArrayType$default(this, (JavaArrayType) javaType, attr, false, 4, null);
            }
            if (javaType instanceof JavaWildcardType) {
                JavaType bound = ((JavaWildcardType) javaType).getBound();
                if (bound != null && (transformJavaType = transformJavaType(bound, attr)) != null) {
                    return transformJavaType;
                }
                SimpleType defaultBound = this.f33486a.getModule().getBuiltIns().getDefaultBound();
                Intrinsics.checkNotNullExpressionValue(defaultBound, "getDefaultBound(...)");
                return defaultBound;
            } else if (javaType == null) {
                SimpleType defaultBound2 = this.f33486a.getModule().getBuiltIns().getDefaultBound();
                Intrinsics.checkNotNullExpressionValue(defaultBound2, "getDefaultBound(...)");
                return defaultBound2;
            } else {
                throw new UnsupportedOperationException("Unsupported type: " + javaType);
            }
        }
    }
}
