package kotlin.reflect.jvm.internal.impl.load.java.lazy.descriptors;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Comparator;
import java.util.Iterator;
import java.util.List;
import java.util.Set;
import kotlin.Lazy;
import kotlin.collections.CollectionsKt;
import kotlin.collections.x0;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlin.ranges.IntRange;
import kotlin.reflect.jvm.internal.impl.builtins.KotlinBuiltIns;
import kotlin.reflect.jvm.internal.impl.builtins.StandardNames;
import kotlin.reflect.jvm.internal.impl.builtins.jvm.MappingUtilKt;
import kotlin.reflect.jvm.internal.impl.descriptors.ClassConstructorDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.ClassDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.ClassKind;
import kotlin.reflect.jvm.internal.impl.descriptors.ClassifierDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.DeclarationDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.DescriptorVisibilities;
import kotlin.reflect.jvm.internal.impl.descriptors.DescriptorVisibility;
import kotlin.reflect.jvm.internal.impl.descriptors.Modality;
import kotlin.reflect.jvm.internal.impl.descriptors.NotFoundClasses;
import kotlin.reflect.jvm.internal.impl.descriptors.ScopesHolderForClass;
import kotlin.reflect.jvm.internal.impl.descriptors.SupertypeLoopChecker;
import kotlin.reflect.jvm.internal.impl.descriptors.TypeParameterDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.TypeParameterUtilsKt;
import kotlin.reflect.jvm.internal.impl.descriptors.ValueClassRepresentation;
import kotlin.reflect.jvm.internal.impl.descriptors.Visibility;
import kotlin.reflect.jvm.internal.impl.descriptors.annotations.AnnotationDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.annotations.Annotations;
import kotlin.reflect.jvm.internal.impl.descriptors.impl.ClassDescriptorBase;
import kotlin.reflect.jvm.internal.impl.incremental.components.NoLookupLocation;
import kotlin.reflect.jvm.internal.impl.load.java.FakePureImplementationsProvider;
import kotlin.reflect.jvm.internal.impl.load.java.JavaDescriptorVisibilities;
import kotlin.reflect.jvm.internal.impl.load.java.JvmAnnotationNames;
import kotlin.reflect.jvm.internal.impl.load.java.UtilsKt;
import kotlin.reflect.jvm.internal.impl.load.java.components.JavaResolverCache;
import kotlin.reflect.jvm.internal.impl.load.java.descriptors.JavaClassDescriptor;
import kotlin.reflect.jvm.internal.impl.load.java.lazy.ContextKt;
import kotlin.reflect.jvm.internal.impl.load.java.lazy.LazyJavaAnnotationsKt;
import kotlin.reflect.jvm.internal.impl.load.java.lazy.LazyJavaResolverContext;
import kotlin.reflect.jvm.internal.impl.load.java.lazy.types.JavaTypeAttributes;
import kotlin.reflect.jvm.internal.impl.load.java.lazy.types.JavaTypeAttributesKt;
import kotlin.reflect.jvm.internal.impl.load.java.structure.JavaAnnotation;
import kotlin.reflect.jvm.internal.impl.load.java.structure.JavaClass;
import kotlin.reflect.jvm.internal.impl.load.java.structure.JavaClassifierType;
import kotlin.reflect.jvm.internal.impl.load.java.structure.JavaType;
import kotlin.reflect.jvm.internal.impl.load.java.structure.JavaTypeParameter;
import kotlin.reflect.jvm.internal.impl.name.ClassId;
import kotlin.reflect.jvm.internal.impl.name.FqName;
import kotlin.reflect.jvm.internal.impl.name.FqNamesUtilKt;
import kotlin.reflect.jvm.internal.impl.resolve.constants.StringValue;
import kotlin.reflect.jvm.internal.impl.resolve.descriptorUtil.DescriptorUtilsKt;
import kotlin.reflect.jvm.internal.impl.resolve.scopes.InnerClassesScopeWrapper;
import kotlin.reflect.jvm.internal.impl.resolve.scopes.MemberScope;
import kotlin.reflect.jvm.internal.impl.serialization.deserialization.ErrorReporter;
import kotlin.reflect.jvm.internal.impl.storage.NotNullLazyValue;
import kotlin.reflect.jvm.internal.impl.types.AbstractClassTypeConstructor;
import kotlin.reflect.jvm.internal.impl.types.KotlinType;
import kotlin.reflect.jvm.internal.impl.types.KotlinTypeFactory;
import kotlin.reflect.jvm.internal.impl.types.SimpleType;
import kotlin.reflect.jvm.internal.impl.types.TypeAttributes;
import kotlin.reflect.jvm.internal.impl.types.TypeConstructor;
import kotlin.reflect.jvm.internal.impl.types.TypeProjectionImpl;
import kotlin.reflect.jvm.internal.impl.types.TypeUsage;
import kotlin.reflect.jvm.internal.impl.types.Variance;
import kotlin.reflect.jvm.internal.impl.types.checker.KotlinTypeRefiner;
import kotlin.sequences.Sequence;
import org.jetbrains.annotations.NotNull;
@SourceDebugExtension({"SMAP\nLazyJavaClassDescriptor.kt\nKotlin\n*S Kotlin\n*F\n+ 1 LazyJavaClassDescriptor.kt\norg/jetbrains/kotlin/load/java/lazy/descriptors/LazyJavaClassDescriptor\n+ 2 _Collections.kt\nkotlin/collections/CollectionsKt___CollectionsKt\n+ 3 _Sequences.kt\nkotlin/sequences/SequencesKt___SequencesKt\n+ 4 fake.kt\nkotlin/jvm/internal/FakeKt\n*L\n1#1,322:1\n1761#2,3:323\n1761#2,3:326\n1056#2:334\n1563#2:336\n1634#2,3:337\n1152#3:329\n1321#3:330\n1322#3:332\n1153#3:333\n1#4:331\n1#4:335\n*S KotlinDebug\n*F\n+ 1 LazyJavaClassDescriptor.kt\norg/jetbrains/kotlin/load/java/lazy/descriptors/LazyJavaClassDescriptor\n*L\n185#1:323,3\n188#1:326,3\n202#1:334\n151#1:336\n151#1:337,3\n200#1:329\n200#1:330\n200#1:332\n200#1:333\n200#1:331\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class LazyJavaClassDescriptor extends ClassDescriptorBase implements JavaClassDescriptor {
    @NotNull
    public static final Companion Companion = new Companion(null);
    private static final Set I = x0.i("equals", "hashCode", "getClass", "wait", "notify", "notifyAll", "toString");
    private final boolean A;
    private final a B;
    private final LazyJavaClassMemberScope C;
    private final ScopesHolderForClass D;
    private final InnerClassesScopeWrapper E;
    private final LazyJavaStaticClassScope F;
    private final Annotations G;
    private final NotNullLazyValue H;

    /* renamed from: s  reason: collision with root package name */
    private final LazyJavaResolverContext f33365s;

    /* renamed from: t  reason: collision with root package name */
    private final JavaClass f33366t;

    /* renamed from: u  reason: collision with root package name */
    private final ClassDescriptor f33367u;

    /* renamed from: v  reason: collision with root package name */
    private final LazyJavaResolverContext f33368v;

    /* renamed from: w  reason: collision with root package name */
    private final Lazy f33369w;

    /* renamed from: x  reason: collision with root package name */
    private final ClassKind f33370x;

    /* renamed from: y  reason: collision with root package name */
    private final Modality f33371y;

    /* renamed from: z  reason: collision with root package name */
    private final Visibility f33372z;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private Companion() {
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public final class a extends AbstractClassTypeConstructor {

        /* renamed from: d  reason: collision with root package name */
        private final NotNullLazyValue f33373d;

        public a() {
            super(LazyJavaClassDescriptor.this.f33368v.getStorageManager());
            this.f33373d = LazyJavaClassDescriptor.this.f33368v.getStorageManager().createLazyValue(new i(LazyJavaClassDescriptor.this));
        }

        private final KotlinType C() {
            FqName fqName;
            ArrayList arrayList;
            FqName D = D();
            D = (D == null || D.isRoot() || !D.startsWith(StandardNames.BUILT_INS_PACKAGE_NAME)) ? null : null;
            if (D == null) {
                fqName = FakePureImplementationsProvider.INSTANCE.getPurelyImplementedInterface(DescriptorUtilsKt.getFqNameSafe(LazyJavaClassDescriptor.this));
                if (fqName == null) {
                    return null;
                }
            } else {
                fqName = D;
            }
            ClassDescriptor resolveTopLevelClass = DescriptorUtilsKt.resolveTopLevelClass(LazyJavaClassDescriptor.this.f33368v.getModule(), fqName, NoLookupLocation.FROM_JAVA_LOADER);
            if (resolveTopLevelClass == null) {
                return null;
            }
            int size = resolveTopLevelClass.getTypeConstructor().getParameters().size();
            List<TypeParameterDescriptor> parameters = LazyJavaClassDescriptor.this.getTypeConstructor().getParameters();
            Intrinsics.checkNotNullExpressionValue(parameters, "getParameters(...)");
            int size2 = parameters.size();
            if (size2 == size) {
                List<TypeParameterDescriptor> list = parameters;
                arrayList = new ArrayList(CollectionsKt.w(list, 10));
                for (TypeParameterDescriptor typeParameterDescriptor : list) {
                    arrayList.add(new TypeProjectionImpl(Variance.INVARIANT, typeParameterDescriptor.getDefaultType()));
                }
            } else if (size2 != 1 || size <= 1 || D != null) {
                return null;
            } else {
                TypeProjectionImpl typeProjectionImpl = new TypeProjectionImpl(Variance.INVARIANT, ((TypeParameterDescriptor) CollectionsKt.Q0(parameters)).getDefaultType());
                IntRange intRange = new IntRange(1, size);
                ArrayList arrayList2 = new ArrayList(CollectionsKt.w(intRange, 10));
                Iterator it = intRange.iterator();
                while (it.hasNext()) {
                    ((kotlin.collections.m0) it).nextInt();
                    arrayList2.add(typeProjectionImpl);
                }
                arrayList = arrayList2;
            }
            return KotlinTypeFactory.simpleNotNullType(TypeAttributes.Companion.getEmpty(), resolveTopLevelClass, arrayList);
        }

        private final FqName D() {
            StringValue stringValue;
            String value;
            Annotations annotations = LazyJavaClassDescriptor.this.getAnnotations();
            FqName PURELY_IMPLEMENTS_ANNOTATION = JvmAnnotationNames.PURELY_IMPLEMENTS_ANNOTATION;
            Intrinsics.checkNotNullExpressionValue(PURELY_IMPLEMENTS_ANNOTATION, "PURELY_IMPLEMENTS_ANNOTATION");
            AnnotationDescriptor mo1193findAnnotation = annotations.mo1193findAnnotation(PURELY_IMPLEMENTS_ANNOTATION);
            if (mo1193findAnnotation == null) {
                return null;
            }
            Object R0 = CollectionsKt.R0(mo1193findAnnotation.getAllValueArguments().values());
            if (R0 instanceof StringValue) {
                stringValue = (StringValue) R0;
            } else {
                stringValue = null;
            }
            if (stringValue == null || (value = stringValue.getValue()) == null || !FqNamesUtilKt.isValidJavaFqName(value)) {
                return null;
            }
            return new FqName(value);
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final List E(LazyJavaClassDescriptor lazyJavaClassDescriptor) {
            return TypeParameterUtilsKt.computeConstructorTypeParameters(lazyJavaClassDescriptor);
        }

        @Override // kotlin.reflect.jvm.internal.impl.types.TypeConstructor
        public List getParameters() {
            return (List) this.f33373d.invoke();
        }

        @Override // kotlin.reflect.jvm.internal.impl.types.TypeConstructor
        public boolean isDenotable() {
            return true;
        }

        @Override // kotlin.reflect.jvm.internal.impl.types.AbstractTypeConstructor
        protected Collection l() {
            Object obj;
            List e10;
            Collection<JavaClassifierType> supertypes = LazyJavaClassDescriptor.this.getJClass().getSupertypes();
            ArrayList arrayList = new ArrayList(supertypes.size());
            ArrayList<JavaType> arrayList2 = new ArrayList(0);
            KotlinType C = C();
            Iterator<JavaClassifierType> it = supertypes.iterator();
            while (true) {
                obj = null;
                if (!it.hasNext()) {
                    break;
                }
                JavaClassifierType next = it.next();
                KotlinType enhanceSuperType = LazyJavaClassDescriptor.this.f33368v.getComponents().getSignatureEnhancement().enhanceSuperType(LazyJavaClassDescriptor.this.f33368v.getTypeResolver().transformJavaType(next, JavaTypeAttributesKt.toAttributes$default(TypeUsage.SUPERTYPE, false, false, null, 7, null)), LazyJavaClassDescriptor.this.f33368v);
                if (enhanceSuperType.getConstructor().mo1197getDeclarationDescriptor() instanceof NotFoundClasses.MockClassDescriptor) {
                    arrayList2.add(next);
                }
                TypeConstructor constructor = enhanceSuperType.getConstructor();
                if (C != null) {
                    obj = C.getConstructor();
                }
                if (!Intrinsics.areEqual(constructor, obj) && !KotlinBuiltIns.isAnyOrNullableAny(enhanceSuperType)) {
                    arrayList.add(enhanceSuperType);
                }
            }
            ClassDescriptor classDescriptor = LazyJavaClassDescriptor.this.f33367u;
            if (classDescriptor != null) {
                obj = MappingUtilKt.createMappedTypeParametersSubstitution(classDescriptor, LazyJavaClassDescriptor.this).buildSubstitutor().substitute(classDescriptor.getDefaultType(), Variance.INVARIANT);
            }
            kotlin.reflect.jvm.internal.impl.utils.CollectionsKt.addIfNotNull(arrayList, obj);
            kotlin.reflect.jvm.internal.impl.utils.CollectionsKt.addIfNotNull(arrayList, C);
            if (!arrayList2.isEmpty()) {
                ErrorReporter errorReporter = LazyJavaClassDescriptor.this.f33368v.getComponents().getErrorReporter();
                ClassDescriptor mo1197getDeclarationDescriptor = mo1197getDeclarationDescriptor();
                ArrayList arrayList3 = new ArrayList(CollectionsKt.w(arrayList2, 10));
                for (JavaType javaType : arrayList2) {
                    Intrinsics.checkNotNull(javaType, "null cannot be cast to non-null type org.jetbrains.kotlin.load.java.structure.JavaClassifierType");
                    arrayList3.add(((JavaClassifierType) javaType).getPresentableText());
                }
                errorReporter.reportIncompleteHierarchy(mo1197getDeclarationDescriptor, arrayList3);
            }
            if (!arrayList.isEmpty()) {
                e10 = CollectionsKt.h1(arrayList);
            } else {
                e10 = CollectionsKt.e(LazyJavaClassDescriptor.this.f33368v.getModule().getBuiltIns().getAnyType());
            }
            return e10;
        }

        @Override // kotlin.reflect.jvm.internal.impl.types.AbstractTypeConstructor
        protected SupertypeLoopChecker p() {
            return LazyJavaClassDescriptor.this.f33368v.getComponents().getSupertypeLoopChecker();
        }

        public String toString() {
            String asString = LazyJavaClassDescriptor.this.getName().asString();
            Intrinsics.checkNotNullExpressionValue(asString, "asString(...)");
            return asString;
        }

        @Override // kotlin.reflect.jvm.internal.impl.types.AbstractClassTypeConstructor, kotlin.reflect.jvm.internal.impl.types.ClassifierBasedTypeConstructor, kotlin.reflect.jvm.internal.impl.types.TypeConstructor
        /* renamed from: getDeclarationDescriptor */
        public ClassDescriptor mo1197getDeclarationDescriptor() {
            return LazyJavaClassDescriptor.this;
        }
    }

    public /* synthetic */ LazyJavaClassDescriptor(LazyJavaResolverContext lazyJavaResolverContext, DeclarationDescriptor declarationDescriptor, JavaClass javaClass, ClassDescriptor classDescriptor, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this(lazyJavaResolverContext, declarationDescriptor, javaClass, (i10 & 8) != 0 ? null : classDescriptor);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final List e(LazyJavaClassDescriptor lazyJavaClassDescriptor) {
        List<JavaTypeParameter> typeParameters = lazyJavaClassDescriptor.f33366t.getTypeParameters();
        ArrayList arrayList = new ArrayList(CollectionsKt.w(typeParameters, 10));
        for (JavaTypeParameter javaTypeParameter : typeParameters) {
            TypeParameterDescriptor resolveTypeParameter = lazyJavaClassDescriptor.f33368v.getTypeParameterResolver().resolveTypeParameter(javaTypeParameter);
            if (resolveTypeParameter != null) {
                arrayList.add(resolveTypeParameter);
            } else {
                throw new AssertionError("Parameter " + javaTypeParameter + " surely belongs to class " + lazyJavaClassDescriptor.f33366t + ", so it must be resolved");
            }
        }
        return arrayList;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final List g(LazyJavaClassDescriptor lazyJavaClassDescriptor) {
        ClassId classId = DescriptorUtilsKt.getClassId(lazyJavaClassDescriptor);
        if (classId != null) {
            return lazyJavaClassDescriptor.f33365s.getComponents().getJavaModuleResolver().getAnnotationsForModuleOwnerOfClass(classId);
        }
        return null;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final LazyJavaClassMemberScope h(LazyJavaClassDescriptor lazyJavaClassDescriptor, KotlinTypeRefiner it) {
        boolean z10;
        Intrinsics.checkNotNullParameter(it, "it");
        LazyJavaResolverContext lazyJavaResolverContext = lazyJavaClassDescriptor.f33368v;
        JavaClass javaClass = lazyJavaClassDescriptor.f33366t;
        if (lazyJavaClassDescriptor.f33367u != null) {
            z10 = true;
        } else {
            z10 = false;
        }
        return new LazyJavaClassMemberScope(lazyJavaResolverContext, lazyJavaClassDescriptor, javaClass, z10, lazyJavaClassDescriptor.C);
    }

    @NotNull
    public final LazyJavaClassDescriptor copy$descriptors_jvm(@NotNull JavaResolverCache javaResolverCache, ClassDescriptor classDescriptor) {
        Intrinsics.checkNotNullParameter(javaResolverCache, "javaResolverCache");
        LazyJavaResolverContext lazyJavaResolverContext = this.f33368v;
        LazyJavaResolverContext replaceComponents = ContextKt.replaceComponents(lazyJavaResolverContext, lazyJavaResolverContext.getComponents().replace(javaResolverCache));
        DeclarationDescriptor containingDeclaration = getContainingDeclaration();
        Intrinsics.checkNotNullExpressionValue(containingDeclaration, "getContainingDeclaration(...)");
        return new LazyJavaClassDescriptor(replaceComponents, containingDeclaration, this.f33366t, classDescriptor);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // kotlin.reflect.jvm.internal.impl.descriptors.impl.ModuleAwareClassDescriptor
    /* renamed from: f */
    public LazyJavaClassMemberScope getUnsubstitutedMemberScope(KotlinTypeRefiner kotlinTypeRefiner) {
        Intrinsics.checkNotNullParameter(kotlinTypeRefiner, "kotlinTypeRefiner");
        return (LazyJavaClassMemberScope) this.D.getScope(kotlinTypeRefiner);
    }

    @Override // kotlin.reflect.jvm.internal.impl.descriptors.annotations.Annotated
    @NotNull
    public Annotations getAnnotations() {
        return this.G;
    }

    @Override // kotlin.reflect.jvm.internal.impl.descriptors.ClassDescriptor
    /* renamed from: getCompanionObjectDescriptor */
    public ClassDescriptor mo1191getCompanionObjectDescriptor() {
        return null;
    }

    @Override // kotlin.reflect.jvm.internal.impl.descriptors.ClassDescriptor, kotlin.reflect.jvm.internal.impl.descriptors.ClassifierDescriptorWithTypeParameters
    @NotNull
    public List<TypeParameterDescriptor> getDeclaredTypeParameters() {
        return (List) this.H.invoke();
    }

    @NotNull
    public final JavaClass getJClass() {
        return this.f33366t;
    }

    @Override // kotlin.reflect.jvm.internal.impl.descriptors.ClassDescriptor
    @NotNull
    public ClassKind getKind() {
        return this.f33370x;
    }

    @Override // kotlin.reflect.jvm.internal.impl.descriptors.ClassDescriptor, kotlin.reflect.jvm.internal.impl.descriptors.MemberDescriptor
    @NotNull
    public Modality getModality() {
        return this.f33371y;
    }

    public final List<JavaAnnotation> getModuleAnnotations() {
        return (List) this.f33369w.getValue();
    }

    @Override // kotlin.reflect.jvm.internal.impl.descriptors.ClassDescriptor
    @NotNull
    public Collection<ClassDescriptor> getSealedSubclasses() {
        ClassDescriptor classDescriptor;
        if (this.f33371y == Modality.SEALED) {
            JavaTypeAttributes attributes$default = JavaTypeAttributesKt.toAttributes$default(TypeUsage.COMMON, false, false, null, 7, null);
            Sequence<JavaClassifierType> permittedTypes = this.f33366t.getPermittedTypes();
            ArrayList arrayList = new ArrayList();
            for (JavaClassifierType javaClassifierType : permittedTypes) {
                ClassifierDescriptor mo1197getDeclarationDescriptor = this.f33368v.getTypeResolver().transformJavaType(javaClassifierType, attributes$default).getConstructor().mo1197getDeclarationDescriptor();
                if (mo1197getDeclarationDescriptor instanceof ClassDescriptor) {
                    classDescriptor = (ClassDescriptor) mo1197getDeclarationDescriptor;
                } else {
                    classDescriptor = null;
                }
                if (classDescriptor != null) {
                    arrayList.add(classDescriptor);
                }
            }
            return CollectionsKt.W0(arrayList, new Comparator() { // from class: kotlin.reflect.jvm.internal.impl.load.java.lazy.descriptors.LazyJavaClassDescriptor$getSealedSubclasses$$inlined$sortedBy$1
                @Override // java.util.Comparator
                public final int compare(T t10, T t11) {
                    return or.a.d(DescriptorUtilsKt.getFqNameSafe((ClassDescriptor) t10).asString(), DescriptorUtilsKt.getFqNameSafe((ClassDescriptor) t11).asString());
                }
            });
        }
        return CollectionsKt.l();
    }

    @Override // kotlin.reflect.jvm.internal.impl.descriptors.ClassDescriptor
    @NotNull
    public MemberScope getStaticScope() {
        return this.F;
    }

    @Override // kotlin.reflect.jvm.internal.impl.descriptors.ClassifierDescriptor
    @NotNull
    public TypeConstructor getTypeConstructor() {
        return this.B;
    }

    @Override // kotlin.reflect.jvm.internal.impl.descriptors.impl.AbstractClassDescriptor, kotlin.reflect.jvm.internal.impl.descriptors.ClassDescriptor
    @NotNull
    public MemberScope getUnsubstitutedInnerClassesScope() {
        return this.E;
    }

    @Override // kotlin.reflect.jvm.internal.impl.descriptors.ClassDescriptor
    /* renamed from: getUnsubstitutedPrimaryConstructor */
    public ClassConstructorDescriptor mo1192getUnsubstitutedPrimaryConstructor() {
        return null;
    }

    @Override // kotlin.reflect.jvm.internal.impl.descriptors.ClassDescriptor
    public ValueClassRepresentation<SimpleType> getValueClassRepresentation() {
        return null;
    }

    @Override // kotlin.reflect.jvm.internal.impl.descriptors.ClassDescriptor, kotlin.reflect.jvm.internal.impl.descriptors.MemberDescriptor, kotlin.reflect.jvm.internal.impl.descriptors.DeclarationDescriptorWithVisibility
    @NotNull
    public DescriptorVisibility getVisibility() {
        if (Intrinsics.areEqual(this.f33372z, DescriptorVisibilities.PRIVATE) && this.f33366t.getOuterClass() == null) {
            DescriptorVisibility descriptorVisibility = JavaDescriptorVisibilities.PACKAGE_VISIBILITY;
            Intrinsics.checkNotNull(descriptorVisibility);
            return descriptorVisibility;
        }
        return UtilsKt.toDescriptorVisibility(this.f33372z);
    }

    @Override // kotlin.reflect.jvm.internal.impl.descriptors.MemberDescriptor
    public boolean isActual() {
        return false;
    }

    @Override // kotlin.reflect.jvm.internal.impl.descriptors.ClassDescriptor
    public boolean isCompanionObject() {
        return false;
    }

    @Override // kotlin.reflect.jvm.internal.impl.descriptors.ClassDescriptor
    public boolean isData() {
        return false;
    }

    @Override // kotlin.reflect.jvm.internal.impl.descriptors.MemberDescriptor
    public boolean isExpect() {
        return false;
    }

    @Override // kotlin.reflect.jvm.internal.impl.descriptors.ClassDescriptor
    public boolean isFun() {
        return false;
    }

    @Override // kotlin.reflect.jvm.internal.impl.descriptors.ClassDescriptor
    public boolean isInline() {
        return false;
    }

    @Override // kotlin.reflect.jvm.internal.impl.descriptors.ClassifierDescriptorWithTypeParameters
    public boolean isInner() {
        return this.A;
    }

    @Override // kotlin.reflect.jvm.internal.impl.descriptors.ClassDescriptor
    public boolean isValue() {
        return false;
    }

    @NotNull
    public String toString() {
        return "Lazy Java class " + DescriptorUtilsKt.getFqNameUnsafe(this);
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public LazyJavaClassDescriptor(@NotNull LazyJavaResolverContext outerContext, @NotNull DeclarationDescriptor containingDeclaration, @NotNull JavaClass jClass, ClassDescriptor classDescriptor) {
        super(outerContext.getStorageManager(), containingDeclaration, jClass.getName(), outerContext.getComponents().getSourceElementFactory().source(jClass), false);
        ClassKind classKind;
        Modality modality;
        Intrinsics.checkNotNullParameter(outerContext, "outerContext");
        Intrinsics.checkNotNullParameter(containingDeclaration, "containingDeclaration");
        Intrinsics.checkNotNullParameter(jClass, "jClass");
        this.f33365s = outerContext;
        this.f33366t = jClass;
        this.f33367u = classDescriptor;
        LazyJavaResolverContext childForClassOrPackage$default = ContextKt.childForClassOrPackage$default(outerContext, this, jClass, 0, 4, null);
        this.f33368v = childForClassOrPackage$default;
        childForClassOrPackage$default.getComponents().getJavaResolverCache().recordClass(jClass, this);
        jClass.getLightClassOriginKind();
        this.f33369w = lr.l.a(new f(this));
        if (jClass.isAnnotationType()) {
            classKind = ClassKind.ANNOTATION_CLASS;
        } else if (jClass.isInterface()) {
            classKind = ClassKind.INTERFACE;
        } else {
            classKind = jClass.isEnum() ? ClassKind.ENUM_CLASS : ClassKind.CLASS;
        }
        this.f33370x = classKind;
        if (!jClass.isAnnotationType() && !jClass.isEnum()) {
            modality = Modality.Companion.convertFromFlags(jClass.isSealed(), jClass.isSealed() || jClass.isAbstract() || jClass.isInterface(), !jClass.isFinal());
        } else {
            modality = Modality.FINAL;
        }
        this.f33371y = modality;
        this.f33372z = jClass.getVisibility();
        this.A = (jClass.getOuterClass() == null || jClass.isStatic()) ? false : true;
        this.B = new a();
        LazyJavaClassMemberScope lazyJavaClassMemberScope = new LazyJavaClassMemberScope(childForClassOrPackage$default, this, jClass, classDescriptor != null, null, 16, null);
        this.C = lazyJavaClassMemberScope;
        this.D = ScopesHolderForClass.Companion.create(this, childForClassOrPackage$default.getStorageManager(), childForClassOrPackage$default.getComponents().getKotlinTypeChecker().getKotlinTypeRefiner(), new g(this));
        this.E = new InnerClassesScopeWrapper(lazyJavaClassMemberScope);
        this.F = new LazyJavaStaticClassScope(childForClassOrPackage$default, jClass, this);
        this.G = LazyJavaAnnotationsKt.resolveAnnotations(childForClassOrPackage$default, jClass);
        this.H = childForClassOrPackage$default.getStorageManager().createLazyValue(new h(this));
    }

    @Override // kotlin.reflect.jvm.internal.impl.descriptors.ClassDescriptor
    @NotNull
    public List<ClassConstructorDescriptor> getConstructors() {
        return (List) this.C.getConstructors$descriptors_jvm().invoke();
    }

    @Override // kotlin.reflect.jvm.internal.impl.descriptors.impl.AbstractClassDescriptor, kotlin.reflect.jvm.internal.impl.descriptors.ClassDescriptor
    @NotNull
    public LazyJavaClassMemberScope getUnsubstitutedMemberScope() {
        MemberScope unsubstitutedMemberScope = super.getUnsubstitutedMemberScope();
        Intrinsics.checkNotNull(unsubstitutedMemberScope, "null cannot be cast to non-null type org.jetbrains.kotlin.load.java.lazy.descriptors.LazyJavaClassMemberScope");
        return (LazyJavaClassMemberScope) unsubstitutedMemberScope;
    }
}
