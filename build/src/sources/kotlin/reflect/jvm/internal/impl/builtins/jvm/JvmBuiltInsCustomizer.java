package kotlin.reflect.jvm.internal.impl.builtins.jvm;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.Set;
import kotlin.Pair;
import kotlin.collections.CollectionsKt;
import kotlin.collections.x0;
import kotlin.enums.EnumEntries;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.PropertyReference1Impl;
import kotlin.jvm.internal.Ref;
import kotlin.jvm.internal.Reflection;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlin.reflect.KProperty;
import kotlin.reflect.jvm.internal.impl.builtins.KotlinBuiltIns;
import kotlin.reflect.jvm.internal.impl.builtins.jvm.JvmBuiltIns;
import kotlin.reflect.jvm.internal.impl.builtins.jvm.JvmBuiltInsCustomizer;
import kotlin.reflect.jvm.internal.impl.descriptors.CallableMemberDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.ClassConstructorDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.ClassDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.ClassKind;
import kotlin.reflect.jvm.internal.impl.descriptors.ClassifierDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.ConstructorDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.DeclarationDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.DescriptorUtilKt;
import kotlin.reflect.jvm.internal.impl.descriptors.DescriptorVisibilities;
import kotlin.reflect.jvm.internal.impl.descriptors.FindClassInModuleKt;
import kotlin.reflect.jvm.internal.impl.descriptors.FunctionDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.Modality;
import kotlin.reflect.jvm.internal.impl.descriptors.ModuleDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.NotFoundClasses;
import kotlin.reflect.jvm.internal.impl.descriptors.SimpleFunctionDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.SourceElement;
import kotlin.reflect.jvm.internal.impl.descriptors.ValueParameterDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.annotations.AnnotationUtilKt;
import kotlin.reflect.jvm.internal.impl.descriptors.annotations.Annotations;
import kotlin.reflect.jvm.internal.impl.descriptors.deserialization.AdditionalClassPartsProvider;
import kotlin.reflect.jvm.internal.impl.descriptors.deserialization.PlatformDependentDeclarationFilter;
import kotlin.reflect.jvm.internal.impl.descriptors.deserialization.PlatformDependentDeclarationFilterKt;
import kotlin.reflect.jvm.internal.impl.descriptors.impl.ClassDescriptorImpl;
import kotlin.reflect.jvm.internal.impl.descriptors.impl.PackageFragmentDescriptorImpl;
import kotlin.reflect.jvm.internal.impl.incremental.components.NoLookupLocation;
import kotlin.reflect.jvm.internal.impl.load.java.components.JavaResolverCache;
import kotlin.reflect.jvm.internal.impl.load.java.lazy.descriptors.LazyJavaClassDescriptor;
import kotlin.reflect.jvm.internal.impl.load.java.lazy.descriptors.LazyJavaClassMemberScope;
import kotlin.reflect.jvm.internal.impl.load.kotlin.MethodSignatureBuildingUtilsKt;
import kotlin.reflect.jvm.internal.impl.load.kotlin.MethodSignatureMappingKt;
import kotlin.reflect.jvm.internal.impl.load.kotlin.SignatureBuildingComponents;
import kotlin.reflect.jvm.internal.impl.name.ClassId;
import kotlin.reflect.jvm.internal.impl.name.FqName;
import kotlin.reflect.jvm.internal.impl.name.FqNameUnsafe;
import kotlin.reflect.jvm.internal.impl.name.Name;
import kotlin.reflect.jvm.internal.impl.resolve.OverridingUtil;
import kotlin.reflect.jvm.internal.impl.resolve.descriptorUtil.DescriptorUtilsKt;
import kotlin.reflect.jvm.internal.impl.resolve.scopes.MemberScope;
import kotlin.reflect.jvm.internal.impl.serialization.deserialization.descriptors.DeserializedClassDescriptor;
import kotlin.reflect.jvm.internal.impl.storage.CacheWithNotNullValues;
import kotlin.reflect.jvm.internal.impl.storage.MemoizedFunctionToNotNull;
import kotlin.reflect.jvm.internal.impl.storage.NotNullLazyValue;
import kotlin.reflect.jvm.internal.impl.storage.StorageKt;
import kotlin.reflect.jvm.internal.impl.storage.StorageManager;
import kotlin.reflect.jvm.internal.impl.types.KotlinType;
import kotlin.reflect.jvm.internal.impl.types.LazyWrappedType;
import kotlin.reflect.jvm.internal.impl.types.SimpleType;
import kotlin.reflect.jvm.internal.impl.types.TypeSubstitutor;
import kotlin.reflect.jvm.internal.impl.utils.DFS;
import kotlin.reflect.jvm.internal.impl.utils.SmartSet;
import org.jetbrains.annotations.NotNull;
@SourceDebugExtension({"SMAP\nJvmBuiltInsCustomizer.kt\nKotlin\n*S Kotlin\n*F\n+ 1 JvmBuiltInsCustomizer.kt\norg/jetbrains/kotlin/builtins/jvm/JvmBuiltInsCustomizer\n+ 2 _Collections.kt\nkotlin/collections/CollectionsKt___CollectionsKt\n+ 3 fake.kt\nkotlin/jvm/internal/FakeKt\n*L\n1#1,376:1\n1761#2,3:377\n1617#2,9:380\n1869#2:389\n1870#2:391\n1626#2:392\n1563#2:393\n1634#2,3:394\n774#2:397\n865#2:398\n1761#2,3:399\n866#2:402\n774#2:403\n865#2:404\n2746#2,3:405\n866#2:408\n1563#2:409\n1634#2,3:410\n1761#2,3:413\n1617#2,9:416\n1869#2:425\n1870#2:427\n1626#2:428\n1#3:390\n1#3:426\n*S KotlinDebug\n*F\n+ 1 JvmBuiltInsCustomizer.kt\norg/jetbrains/kotlin/builtins/jvm/JvmBuiltInsCustomizer\n*L\n120#1:377,3\n136#1:380,9\n136#1:389\n136#1:391\n136#1:392\n195#1:393\n195#1:394,3\n209#1:397\n209#1:398\n214#1:399,3\n209#1:402\n317#1:403\n317#1:404\n319#1:405,3\n317#1:408\n326#1:409\n326#1:410,3\n353#1:413,3\n257#1:416,9\n257#1:425\n257#1:427\n257#1:428\n136#1:390\n257#1:426\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class JvmBuiltInsCustomizer implements AdditionalClassPartsProvider, PlatformDependentDeclarationFilter {

    /* renamed from: i  reason: collision with root package name */
    static final /* synthetic */ KProperty[] f32232i = {Reflection.property1(new PropertyReference1Impl(JvmBuiltInsCustomizer.class, "settings", "getSettings()Lorg/jetbrains/kotlin/builtins/jvm/JvmBuiltIns$Settings;", 0)), Reflection.property1(new PropertyReference1Impl(JvmBuiltInsCustomizer.class, "cloneableType", "getCloneableType()Lorg/jetbrains/kotlin/types/SimpleType;", 0)), Reflection.property1(new PropertyReference1Impl(JvmBuiltInsCustomizer.class, "notConsideredDeprecation", "getNotConsideredDeprecation()Lorg/jetbrains/kotlin/descriptors/annotations/Annotations;", 0))};

    /* renamed from: a  reason: collision with root package name */
    private final ModuleDescriptor f32233a;

    /* renamed from: b  reason: collision with root package name */
    private final JavaToKotlinClassMapper f32234b;

    /* renamed from: c  reason: collision with root package name */
    private final NotNullLazyValue f32235c;

    /* renamed from: d  reason: collision with root package name */
    private final KotlinType f32236d;

    /* renamed from: e  reason: collision with root package name */
    private final NotNullLazyValue f32237e;

    /* renamed from: f  reason: collision with root package name */
    private final CacheWithNotNullValues f32238f;

    /* renamed from: g  reason: collision with root package name */
    private final NotNullLazyValue f32239g;

    /* renamed from: h  reason: collision with root package name */
    private final MemoizedFunctionToNotNull f32240h;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public /* synthetic */ class WhenMappings {
        public static final /* synthetic */ int[] $EnumSwitchMapping$0;

        static {
            int[] iArr = new int[a.values().length];
            try {
                iArr[a.f32241d.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[a.f32243i.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                iArr[a.f32244o.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                iArr[a.f32245p.ordinal()] = 4;
            } catch (NoSuchFieldError unused4) {
            }
            try {
                iArr[a.f32242e.ordinal()] = 5;
            } catch (NoSuchFieldError unused5) {
            }
            $EnumSwitchMapping$0 = iArr;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
    /* JADX WARN: Unknown enum class pattern. Please report as an issue! */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a {

        /* renamed from: d  reason: collision with root package name */
        public static final a f32241d = new a("HIDDEN", 0);

        /* renamed from: e  reason: collision with root package name */
        public static final a f32242e = new a("VISIBLE", 1);

        /* renamed from: i  reason: collision with root package name */
        public static final a f32243i = new a("DEPRECATED_LIST_METHODS", 2);

        /* renamed from: o  reason: collision with root package name */
        public static final a f32244o = new a("NOT_CONSIDERED", 3);

        /* renamed from: p  reason: collision with root package name */
        public static final a f32245p = new a("DROP", 4);

        /* renamed from: q  reason: collision with root package name */
        private static final /* synthetic */ a[] f32246q;

        /* renamed from: r  reason: collision with root package name */
        private static final /* synthetic */ EnumEntries f32247r;

        static {
            a[] a10 = a();
            f32246q = a10;
            f32247r = vr.a.a(a10);
        }

        private a(String str, int i10) {
        }

        private static final /* synthetic */ a[] a() {
            return new a[]{f32241d, f32242e, f32243i, f32244o, f32245p};
        }

        public static a valueOf(String str) {
            return (a) Enum.valueOf(a.class, str);
        }

        public static a[] values() {
            return (a[]) f32246q.clone();
        }
    }

    public JvmBuiltInsCustomizer(@NotNull ModuleDescriptor moduleDescriptor, @NotNull StorageManager storageManager, @NotNull Function0<JvmBuiltIns.Settings> settingsComputation) {
        Intrinsics.checkNotNullParameter(moduleDescriptor, "moduleDescriptor");
        Intrinsics.checkNotNullParameter(storageManager, "storageManager");
        Intrinsics.checkNotNullParameter(settingsComputation, "settingsComputation");
        this.f32233a = moduleDescriptor;
        this.f32234b = JavaToKotlinClassMapper.INSTANCE;
        this.f32235c = storageManager.createLazyValue(settingsComputation);
        this.f32236d = l(storageManager);
        this.f32237e = storageManager.createLazyValue(new f(this, storageManager));
        this.f32238f = storageManager.createCacheWithNotNullValues();
        this.f32239g = storageManager.createLazyValue(new g(this));
        this.f32240h = storageManager.createMemoizedFunction(new h(this));
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Boolean A(JvmBuiltInsCustomizer jvmBuiltInsCustomizer, CallableMemberDescriptor callableMemberDescriptor) {
        boolean z10;
        if (callableMemberDescriptor.getKind() == CallableMemberDescriptor.Kind.DECLARATION) {
            JavaToKotlinClassMapper javaToKotlinClassMapper = jvmBuiltInsCustomizer.f32234b;
            DeclarationDescriptor containingDeclaration = callableMemberDescriptor.getContainingDeclaration();
            Intrinsics.checkNotNull(containingDeclaration, "null cannot be cast to non-null type org.jetbrains.kotlin.descriptors.ClassDescriptor");
            if (javaToKotlinClassMapper.isMutable((ClassDescriptor) containingDeclaration)) {
                z10 = true;
                return Boolean.valueOf(z10);
            }
        }
        z10 = false;
        return Boolean.valueOf(z10);
    }

    private final boolean B(ConstructorDescriptor constructorDescriptor, ClassDescriptor classDescriptor) {
        FqNameUnsafe fqNameUnsafe;
        if (constructorDescriptor.getValueParameters().size() == 1) {
            List<ValueParameterDescriptor> valueParameters = constructorDescriptor.getValueParameters();
            Intrinsics.checkNotNullExpressionValue(valueParameters, "getValueParameters(...)");
            ClassifierDescriptor mo1199getDeclarationDescriptor = ((ValueParameterDescriptor) CollectionsKt.Q0(valueParameters)).getType().getConstructor().mo1199getDeclarationDescriptor();
            if (mo1199getDeclarationDescriptor != null) {
                fqNameUnsafe = DescriptorUtilsKt.getFqNameUnsafe(mo1199getDeclarationDescriptor);
            } else {
                fqNameUnsafe = null;
            }
            if (Intrinsics.areEqual(fqNameUnsafe, DescriptorUtilsKt.getFqNameUnsafe(classDescriptor))) {
                return true;
            }
            return false;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Annotations C(JvmBuiltInsCustomizer jvmBuiltInsCustomizer) {
        return Annotations.Companion.create(CollectionsKt.e(AnnotationUtilKt.createDeprecatedAnnotation$default(jvmBuiltInsCustomizer.f32233a.getBuiltIns(), "This member is not fully supported by Kotlin compiler, so it may be absent or have different signature in next major version", null, null, true, 6, null)));
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final SimpleType j(JvmBuiltInsCustomizer jvmBuiltInsCustomizer, StorageManager storageManager) {
        return FindClassInModuleKt.findNonGenericClassAcrossDependencies(jvmBuiltInsCustomizer.x().getOwnerModuleDescriptor(), JvmBuiltInClassDescriptorFactory.Companion.getCLONEABLE_CLASS_ID(), new NotFoundClasses(storageManager, jvmBuiltInsCustomizer.x().getOwnerModuleDescriptor())).getDefaultType();
    }

    private final SimpleFunctionDescriptor k(DeserializedClassDescriptor deserializedClassDescriptor, SimpleFunctionDescriptor simpleFunctionDescriptor) {
        FunctionDescriptor.CopyBuilder<? extends SimpleFunctionDescriptor> newCopyBuilder = simpleFunctionDescriptor.newCopyBuilder();
        newCopyBuilder.setOwner(deserializedClassDescriptor);
        newCopyBuilder.setVisibility(DescriptorVisibilities.PUBLIC);
        newCopyBuilder.setReturnType(deserializedClassDescriptor.getDefaultType());
        newCopyBuilder.setDispatchReceiverParameter(deserializedClassDescriptor.getThisAsReceiverParameter());
        SimpleFunctionDescriptor build = newCopyBuilder.build();
        Intrinsics.checkNotNull(build);
        return build;
    }

    private final KotlinType l(StorageManager storageManager) {
        final ModuleDescriptor moduleDescriptor = this.f32233a;
        final FqName fqName = new FqName("java.io");
        ClassDescriptorImpl classDescriptorImpl = new ClassDescriptorImpl(new PackageFragmentDescriptorImpl(moduleDescriptor, fqName) { // from class: kotlin.reflect.jvm.internal.impl.builtins.jvm.JvmBuiltInsCustomizer$createMockJavaIoSerializableType$mockJavaIoPackageFragment$1
            @Override // kotlin.reflect.jvm.internal.impl.descriptors.PackageFragmentDescriptor
            public MemberScope.Empty getMemberScope() {
                return MemberScope.Empty.INSTANCE;
            }
        }, Name.identifier("Serializable"), Modality.ABSTRACT, ClassKind.INTERFACE, CollectionsKt.e(new LazyWrappedType(storageManager, new i(this))), SourceElement.NO_SOURCE, false, storageManager);
        classDescriptorImpl.initialize(MemberScope.Empty.INSTANCE, x0.d(), null);
        SimpleType defaultType = classDescriptorImpl.getDefaultType();
        Intrinsics.checkNotNullExpressionValue(defaultType, "getDefaultType(...)");
        return defaultType;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final KotlinType m(JvmBuiltInsCustomizer jvmBuiltInsCustomizer) {
        SimpleType anyType = jvmBuiltInsCustomizer.f32233a.getBuiltIns().getAnyType();
        Intrinsics.checkNotNullExpressionValue(anyType, "getAnyType(...)");
        return anyType;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Annotations n(JvmBuiltInsCustomizer jvmBuiltInsCustomizer, Pair pair) {
        Intrinsics.checkNotNullParameter(pair, "<destruct>");
        String str = (String) pair.b();
        return Annotations.Companion.create(CollectionsKt.e(AnnotationUtilKt.createDeprecatedAnnotation(jvmBuiltInsCustomizer.f32233a.getBuiltIns(), '\'' + ((String) pair.a()) + "()' member of List is redundant in Kotlin and might be removed soon. Please use '" + str + "()' stdlib extension instead", str + "()", "HIDDEN", false)));
    }

    private final Collection o(ClassDescriptor classDescriptor, Function1 function1) {
        LazyJavaClassDescriptor t10 = t(classDescriptor);
        if (t10 == null) {
            return CollectionsKt.l();
        }
        Collection<ClassDescriptor> mapPlatformClass = this.f32234b.mapPlatformClass(DescriptorUtilsKt.getFqNameSafe(t10), FallbackBuiltIns.f32196g.getInstance());
        ClassDescriptor classDescriptor2 = (ClassDescriptor) CollectionsKt.A0(mapPlatformClass);
        if (classDescriptor2 == null) {
            return CollectionsKt.l();
        }
        SmartSet.Companion companion = SmartSet.Companion;
        ArrayList arrayList = new ArrayList(CollectionsKt.w(mapPlatformClass, 10));
        for (ClassDescriptor classDescriptor3 : mapPlatformClass) {
            arrayList.add(DescriptorUtilsKt.getFqNameSafe(classDescriptor3));
        }
        SmartSet create = companion.create(arrayList);
        boolean isMutable = this.f32234b.isMutable(classDescriptor);
        MemberScope unsubstitutedMemberScope = ((ClassDescriptor) this.f32238f.computeIfAbsent(DescriptorUtilsKt.getFqNameSafe(t10), new k(t10, classDescriptor2))).getUnsubstitutedMemberScope();
        Intrinsics.checkNotNullExpressionValue(unsubstitutedMemberScope, "getUnsubstitutedMemberScope(...)");
        ArrayList arrayList2 = new ArrayList();
        for (Object obj : (Iterable) function1.invoke(unsubstitutedMemberScope)) {
            SimpleFunctionDescriptor simpleFunctionDescriptor = (SimpleFunctionDescriptor) obj;
            if (simpleFunctionDescriptor.getKind() == CallableMemberDescriptor.Kind.DECLARATION && simpleFunctionDescriptor.getVisibility().isPublicAPI() && !KotlinBuiltIns.isDeprecated(simpleFunctionDescriptor)) {
                Collection<? extends FunctionDescriptor> overriddenDescriptors = simpleFunctionDescriptor.getOverriddenDescriptors();
                Intrinsics.checkNotNullExpressionValue(overriddenDescriptors, "getOverriddenDescriptors(...)");
                Collection<? extends FunctionDescriptor> collection = overriddenDescriptors;
                if (!(collection instanceof Collection) || !collection.isEmpty()) {
                    for (FunctionDescriptor functionDescriptor : collection) {
                        DeclarationDescriptor containingDeclaration = functionDescriptor.getContainingDeclaration();
                        Intrinsics.checkNotNullExpressionValue(containingDeclaration, "getContainingDeclaration(...)");
                        if (create.contains(DescriptorUtilsKt.getFqNameSafe(containingDeclaration))) {
                            break;
                        }
                    }
                }
                if (!y(simpleFunctionDescriptor, isMutable)) {
                    arrayList2.add(obj);
                }
            }
        }
        return arrayList2;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final ClassDescriptor p(LazyJavaClassDescriptor lazyJavaClassDescriptor, ClassDescriptor classDescriptor) {
        JavaResolverCache EMPTY = JavaResolverCache.EMPTY;
        Intrinsics.checkNotNullExpressionValue(EMPTY, "EMPTY");
        return lazyJavaClassDescriptor.copy$descriptors_jvm(EMPTY, classDescriptor);
    }

    private final SimpleType q() {
        return (SimpleType) StorageKt.getValue(this.f32237e, this, f32232i[1]);
    }

    private static final boolean r(ConstructorDescriptor constructorDescriptor, TypeSubstitutor typeSubstitutor, ConstructorDescriptor constructorDescriptor2) {
        if (OverridingUtil.getBothWaysOverridability(constructorDescriptor, constructorDescriptor2.substitute(typeSubstitutor)) == OverridingUtil.OverrideCompatibilityInfo.Result.OVERRIDABLE) {
            return true;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Collection s(Name name, MemberScope it) {
        Intrinsics.checkNotNullParameter(it, "it");
        return it.getContributedFunctions(name, NoLookupLocation.FROM_BUILTINS);
    }

    private final LazyJavaClassDescriptor t(ClassDescriptor classDescriptor) {
        ClassId mapKotlinToJava;
        FqName asSingleFqName;
        if (KotlinBuiltIns.isAny(classDescriptor) || !KotlinBuiltIns.isUnderKotlinPackage(classDescriptor)) {
            return null;
        }
        FqNameUnsafe fqNameUnsafe = DescriptorUtilsKt.getFqNameUnsafe(classDescriptor);
        if (fqNameUnsafe.isSafe() && (mapKotlinToJava = JavaToKotlinClassMap.INSTANCE.mapKotlinToJava(fqNameUnsafe)) != null && (asSingleFqName = mapKotlinToJava.asSingleFqName()) != null) {
            ClassDescriptor resolveClassByFqName = DescriptorUtilKt.resolveClassByFqName(x().getOwnerModuleDescriptor(), asSingleFqName, NoLookupLocation.FROM_BUILTINS);
            if (resolveClassByFqName instanceof LazyJavaClassDescriptor) {
                return (LazyJavaClassDescriptor) resolveClassByFqName;
            }
        }
        return null;
    }

    private final a u(FunctionDescriptor functionDescriptor) {
        DeclarationDescriptor containingDeclaration = functionDescriptor.getContainingDeclaration();
        Intrinsics.checkNotNull(containingDeclaration, "null cannot be cast to non-null type org.jetbrains.kotlin.descriptors.ClassDescriptor");
        final String computeJvmDescriptor$default = MethodSignatureMappingKt.computeJvmDescriptor$default(functionDescriptor, false, false, 3, null);
        final Ref.ObjectRef objectRef = new Ref.ObjectRef();
        Object dfs = DFS.dfs(CollectionsKt.e((ClassDescriptor) containingDeclaration), new n(this), new DFS.AbstractNodeHandler<ClassDescriptor, a>() { // from class: kotlin.reflect.jvm.internal.impl.builtins.jvm.JvmBuiltInsCustomizer$getJdkMethodStatus$2
            /* JADX WARN: Type inference failed for: r0v4, types: [T, kotlin.reflect.jvm.internal.impl.builtins.jvm.JvmBuiltInsCustomizer$a] */
            /* JADX WARN: Type inference failed for: r0v5, types: [T, kotlin.reflect.jvm.internal.impl.builtins.jvm.JvmBuiltInsCustomizer$a] */
            /* JADX WARN: Type inference failed for: r0v6, types: [T, kotlin.reflect.jvm.internal.impl.builtins.jvm.JvmBuiltInsCustomizer$a] */
            /* JADX WARN: Type inference failed for: r0v7, types: [T, kotlin.reflect.jvm.internal.impl.builtins.jvm.JvmBuiltInsCustomizer$a] */
            @Override // kotlin.reflect.jvm.internal.impl.utils.DFS.AbstractNodeHandler, kotlin.reflect.jvm.internal.impl.utils.DFS.NodeHandler
            public boolean beforeChildren(ClassDescriptor javaClassDescriptor) {
                Intrinsics.checkNotNullParameter(javaClassDescriptor, "javaClassDescriptor");
                String signature = MethodSignatureBuildingUtilsKt.signature(SignatureBuildingComponents.INSTANCE, javaClassDescriptor, computeJvmDescriptor$default);
                JvmBuiltInsSignatures jvmBuiltInsSignatures = JvmBuiltInsSignatures.INSTANCE;
                if (jvmBuiltInsSignatures.getHIDDEN_METHOD_SIGNATURES().contains(signature)) {
                    objectRef.element = JvmBuiltInsCustomizer.a.f32241d;
                } else if (jvmBuiltInsSignatures.getVISIBLE_METHOD_SIGNATURES().contains(signature)) {
                    objectRef.element = JvmBuiltInsCustomizer.a.f32242e;
                } else if (jvmBuiltInsSignatures.getDEPRECATED_LIST_METHODS().contains(signature)) {
                    objectRef.element = JvmBuiltInsCustomizer.a.f32243i;
                } else if (jvmBuiltInsSignatures.getDROP_LIST_METHOD_SIGNATURES().contains(signature)) {
                    objectRef.element = JvmBuiltInsCustomizer.a.f32245p;
                }
                return objectRef.element == 0;
            }

            @Override // kotlin.reflect.jvm.internal.impl.utils.DFS.NodeHandler
            public JvmBuiltInsCustomizer.a result() {
                JvmBuiltInsCustomizer.a aVar = (JvmBuiltInsCustomizer.a) objectRef.element;
                return aVar == null ? JvmBuiltInsCustomizer.a.f32244o : aVar;
            }
        });
        Intrinsics.checkNotNullExpressionValue(dfs, "dfs(...)");
        return (a) dfs;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Iterable v(JvmBuiltInsCustomizer jvmBuiltInsCustomizer, ClassDescriptor classDescriptor) {
        ClassifierDescriptor classifierDescriptor;
        ClassDescriptor classDescriptor2;
        Collection<KotlinType> supertypes = classDescriptor.getTypeConstructor().getSupertypes();
        Intrinsics.checkNotNullExpressionValue(supertypes, "getSupertypes(...)");
        ArrayList arrayList = new ArrayList();
        for (KotlinType kotlinType : supertypes) {
            ClassifierDescriptor mo1199getDeclarationDescriptor = kotlinType.getConstructor().mo1199getDeclarationDescriptor();
            LazyJavaClassDescriptor lazyJavaClassDescriptor = null;
            if (mo1199getDeclarationDescriptor != null) {
                classifierDescriptor = mo1199getDeclarationDescriptor.getOriginal();
            } else {
                classifierDescriptor = null;
            }
            if (classifierDescriptor instanceof ClassDescriptor) {
                classDescriptor2 = (ClassDescriptor) classifierDescriptor;
            } else {
                classDescriptor2 = null;
            }
            if (classDescriptor2 != null && (lazyJavaClassDescriptor = jvmBuiltInsCustomizer.t(classDescriptor2)) == null) {
                lazyJavaClassDescriptor = classDescriptor2;
            }
            if (lazyJavaClassDescriptor != null) {
                arrayList.add(lazyJavaClassDescriptor);
            }
        }
        return arrayList;
    }

    private final Annotations w() {
        return (Annotations) StorageKt.getValue(this.f32239g, this, f32232i[2]);
    }

    private final JvmBuiltIns.Settings x() {
        return (JvmBuiltIns.Settings) StorageKt.getValue(this.f32235c, this, f32232i[0]);
    }

    private final boolean y(SimpleFunctionDescriptor simpleFunctionDescriptor, boolean z10) {
        DeclarationDescriptor containingDeclaration = simpleFunctionDescriptor.getContainingDeclaration();
        Intrinsics.checkNotNull(containingDeclaration, "null cannot be cast to non-null type org.jetbrains.kotlin.descriptors.ClassDescriptor");
        String computeJvmDescriptor$default = MethodSignatureMappingKt.computeJvmDescriptor$default(simpleFunctionDescriptor, false, false, 3, null);
        if (z10 ^ JvmBuiltInsSignatures.INSTANCE.getMUTABLE_METHOD_SIGNATURES().contains(MethodSignatureBuildingUtilsKt.signature(SignatureBuildingComponents.INSTANCE, (ClassDescriptor) containingDeclaration, computeJvmDescriptor$default))) {
            return true;
        }
        Boolean ifAny = DFS.ifAny(CollectionsKt.e(simpleFunctionDescriptor), l.f32275a, new m(this));
        Intrinsics.checkNotNullExpressionValue(ifAny, "ifAny(...)");
        return ifAny.booleanValue();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Iterable z(CallableMemberDescriptor callableMemberDescriptor) {
        return callableMemberDescriptor.getOriginal().getOverriddenDescriptors();
    }

    @Override // kotlin.reflect.jvm.internal.impl.descriptors.deserialization.AdditionalClassPartsProvider
    @NotNull
    public Collection<ClassConstructorDescriptor> getConstructors(@NotNull ClassDescriptor classDescriptor) {
        Intrinsics.checkNotNullParameter(classDescriptor, "classDescriptor");
        if (classDescriptor.getKind() == ClassKind.CLASS && x().isAdditionalBuiltInsFeatureSupported()) {
            LazyJavaClassDescriptor t10 = t(classDescriptor);
            if (t10 == null) {
                return CollectionsKt.l();
            }
            ClassDescriptor mapJavaToKotlin$default = JavaToKotlinClassMapper.mapJavaToKotlin$default(this.f32234b, DescriptorUtilsKt.getFqNameSafe(t10), FallbackBuiltIns.f32196g.getInstance(), null, 4, null);
            if (mapJavaToKotlin$default == null) {
                return CollectionsKt.l();
            }
            TypeSubstitutor buildSubstitutor = MappingUtilKt.createMappedTypeParametersSubstitution(mapJavaToKotlin$default, t10).buildSubstitutor();
            ArrayList<ClassConstructorDescriptor> arrayList = new ArrayList();
            for (Object obj : t10.getConstructors()) {
                ClassConstructorDescriptor classConstructorDescriptor = (ClassConstructorDescriptor) obj;
                if (classConstructorDescriptor.getVisibility().isPublicAPI()) {
                    Collection<ClassConstructorDescriptor> constructors = mapJavaToKotlin$default.getConstructors();
                    Intrinsics.checkNotNullExpressionValue(constructors, "getConstructors(...)");
                    Collection<ClassConstructorDescriptor> collection = constructors;
                    if (!(collection instanceof Collection) || !collection.isEmpty()) {
                        for (ClassConstructorDescriptor classConstructorDescriptor2 : collection) {
                            Intrinsics.checkNotNull(classConstructorDescriptor2);
                            if (r(classConstructorDescriptor2, buildSubstitutor, classConstructorDescriptor)) {
                                break;
                            }
                        }
                    }
                    if (!B(classConstructorDescriptor, classDescriptor) && !KotlinBuiltIns.isDeprecated(classConstructorDescriptor) && !JvmBuiltInsSignatures.INSTANCE.getHIDDEN_CONSTRUCTOR_SIGNATURES().contains(MethodSignatureBuildingUtilsKt.signature(SignatureBuildingComponents.INSTANCE, t10, MethodSignatureMappingKt.computeJvmDescriptor$default(classConstructorDescriptor, false, false, 3, null)))) {
                        arrayList.add(obj);
                    }
                }
            }
            ArrayList arrayList2 = new ArrayList(CollectionsKt.w(arrayList, 10));
            for (ClassConstructorDescriptor classConstructorDescriptor3 : arrayList) {
                FunctionDescriptor.CopyBuilder<? extends FunctionDescriptor> newCopyBuilder = classConstructorDescriptor3.newCopyBuilder();
                newCopyBuilder.setOwner(classDescriptor);
                newCopyBuilder.setReturnType(classDescriptor.getDefaultType());
                newCopyBuilder.setPreserveSourceElement();
                newCopyBuilder.setSubstitution(buildSubstitutor.getSubstitution());
                if (!JvmBuiltInsSignatures.INSTANCE.getVISIBLE_CONSTRUCTOR_SIGNATURES().contains(MethodSignatureBuildingUtilsKt.signature(SignatureBuildingComponents.INSTANCE, t10, MethodSignatureMappingKt.computeJvmDescriptor$default(classConstructorDescriptor3, false, false, 3, null)))) {
                    newCopyBuilder.setAdditionalAnnotations(w());
                }
                FunctionDescriptor build = newCopyBuilder.build();
                Intrinsics.checkNotNull(build, "null cannot be cast to non-null type org.jetbrains.kotlin.descriptors.ClassConstructorDescriptor");
                arrayList2.add((ClassConstructorDescriptor) build);
            }
            return arrayList2;
        }
        return CollectionsKt.l();
    }

    /* JADX WARN: Removed duplicated region for block: B:64:0x019f A[SYNTHETIC] */
    /* JADX WARN: Removed duplicated region for block: B:67:0x00b8 A[SYNTHETIC] */
    @Override // kotlin.reflect.jvm.internal.impl.descriptors.deserialization.AdditionalClassPartsProvider
    @org.jetbrains.annotations.NotNull
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public java.util.Collection<kotlin.reflect.jvm.internal.impl.descriptors.SimpleFunctionDescriptor> getFunctions(@org.jetbrains.annotations.NotNull kotlin.reflect.jvm.internal.impl.name.Name r7, @org.jetbrains.annotations.NotNull kotlin.reflect.jvm.internal.impl.descriptors.ClassDescriptor r8) {
        /*
            Method dump skipped, instructions count: 421
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: kotlin.reflect.jvm.internal.impl.builtins.jvm.JvmBuiltInsCustomizer.getFunctions(kotlin.reflect.jvm.internal.impl.name.Name, kotlin.reflect.jvm.internal.impl.descriptors.ClassDescriptor):java.util.Collection");
    }

    @Override // kotlin.reflect.jvm.internal.impl.descriptors.deserialization.AdditionalClassPartsProvider
    @NotNull
    public Collection<KotlinType> getSupertypes(@NotNull ClassDescriptor classDescriptor) {
        Intrinsics.checkNotNullParameter(classDescriptor, "classDescriptor");
        FqNameUnsafe fqNameUnsafe = DescriptorUtilsKt.getFqNameUnsafe(classDescriptor);
        JvmBuiltInsSignatures jvmBuiltInsSignatures = JvmBuiltInsSignatures.INSTANCE;
        if (jvmBuiltInsSignatures.isArrayOrPrimitiveArray(fqNameUnsafe)) {
            return CollectionsKt.o(q(), this.f32236d);
        }
        if (jvmBuiltInsSignatures.isSerializableInJava(fqNameUnsafe)) {
            return CollectionsKt.e(this.f32236d);
        }
        return CollectionsKt.l();
    }

    @Override // kotlin.reflect.jvm.internal.impl.descriptors.deserialization.PlatformDependentDeclarationFilter
    public boolean isFunctionAvailable(@NotNull ClassDescriptor classDescriptor, @NotNull SimpleFunctionDescriptor functionDescriptor) {
        Intrinsics.checkNotNullParameter(classDescriptor, "classDescriptor");
        Intrinsics.checkNotNullParameter(functionDescriptor, "functionDescriptor");
        LazyJavaClassDescriptor t10 = t(classDescriptor);
        if (t10 == null || !functionDescriptor.getAnnotations().hasAnnotation(PlatformDependentDeclarationFilterKt.getPLATFORM_DEPENDENT_ANNOTATION_FQ_NAME())) {
            return true;
        }
        if (!x().isAdditionalBuiltInsFeatureSupported()) {
            return false;
        }
        String computeJvmDescriptor$default = MethodSignatureMappingKt.computeJvmDescriptor$default(functionDescriptor, false, false, 3, null);
        LazyJavaClassMemberScope unsubstitutedMemberScope = t10.getUnsubstitutedMemberScope();
        Name name = functionDescriptor.getName();
        Intrinsics.checkNotNullExpressionValue(name, "getName(...)");
        Collection<SimpleFunctionDescriptor> contributedFunctions = unsubstitutedMemberScope.getContributedFunctions(name, NoLookupLocation.FROM_BUILTINS);
        if ((contributedFunctions instanceof Collection) && contributedFunctions.isEmpty()) {
            return false;
        }
        for (SimpleFunctionDescriptor simpleFunctionDescriptor : contributedFunctions) {
            if (Intrinsics.areEqual(MethodSignatureMappingKt.computeJvmDescriptor$default(simpleFunctionDescriptor, false, false, 3, null), computeJvmDescriptor$default)) {
                return true;
            }
        }
        return false;
    }

    @Override // kotlin.reflect.jvm.internal.impl.descriptors.deserialization.AdditionalClassPartsProvider
    @NotNull
    public Set<Name> getFunctionsNames(@NotNull ClassDescriptor classDescriptor) {
        LazyJavaClassMemberScope unsubstitutedMemberScope;
        Set<Name> functionNames;
        Intrinsics.checkNotNullParameter(classDescriptor, "classDescriptor");
        if (x().isAdditionalBuiltInsFeatureSupported()) {
            LazyJavaClassDescriptor t10 = t(classDescriptor);
            return (t10 == null || (unsubstitutedMemberScope = t10.getUnsubstitutedMemberScope()) == null || (functionNames = unsubstitutedMemberScope.getFunctionNames()) == null) ? x0.d() : functionNames;
        }
        return x0.d();
    }
}
