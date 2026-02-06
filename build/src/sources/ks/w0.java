package ks;

import java.lang.reflect.Constructor;
import java.lang.reflect.Field;
import java.lang.reflect.Method;
import java.lang.reflect.Type;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import kotlin.Lazy;
import kotlin.Metadata;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.FunctionReferenceImpl;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.PropertyReference1Impl;
import kotlin.jvm.internal.Reflection;
import kotlin.jvm.internal.TypeIntrinsics;
import kotlin.reflect.KClass;
import kotlin.reflect.KProperty;
import kotlin.reflect.jvm.internal.impl.builtins.CompanionObjectMapping;
import kotlin.reflect.jvm.internal.impl.builtins.CompanionObjectMappingUtilsKt;
import kotlin.reflect.jvm.internal.impl.builtins.KotlinBuiltIns;
import kotlin.reflect.jvm.internal.impl.descriptors.ClassConstructorDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.ClassDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.ClassKind;
import kotlin.reflect.jvm.internal.impl.descriptors.ClassifierDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.ConstructorDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.DeclarationDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.FindClassInModuleKt;
import kotlin.reflect.jvm.internal.impl.descriptors.Modality;
import kotlin.reflect.jvm.internal.impl.descriptors.ModuleDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.PropertyDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.SourceElement;
import kotlin.reflect.jvm.internal.impl.descriptors.TypeParameterDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.impl.ClassDescriptorImpl;
import kotlin.reflect.jvm.internal.impl.descriptors.impl.EmptyPackageFragmentDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.runtime.components.ReflectKotlinClass;
import kotlin.reflect.jvm.internal.impl.descriptors.runtime.components.RuntimeModuleData;
import kotlin.reflect.jvm.internal.impl.descriptors.runtime.structure.ReflectClassUtilKt;
import kotlin.reflect.jvm.internal.impl.incremental.components.NoLookupLocation;
import kotlin.reflect.jvm.internal.impl.load.kotlin.header.KotlinClassHeader;
import kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf;
import kotlin.reflect.jvm.internal.impl.metadata.deserialization.ProtoBufUtilKt;
import kotlin.reflect.jvm.internal.impl.metadata.jvm.JvmProtoBuf;
import kotlin.reflect.jvm.internal.impl.name.ClassId;
import kotlin.reflect.jvm.internal.impl.name.FqName;
import kotlin.reflect.jvm.internal.impl.name.Name;
import kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite;
import kotlin.reflect.jvm.internal.impl.resolve.DescriptorUtils;
import kotlin.reflect.jvm.internal.impl.resolve.descriptorUtil.DescriptorUtilsKt;
import kotlin.reflect.jvm.internal.impl.resolve.scopes.GivenFunctionsMemberScope;
import kotlin.reflect.jvm.internal.impl.resolve.scopes.MemberScope;
import kotlin.reflect.jvm.internal.impl.resolve.scopes.ResolutionScope;
import kotlin.reflect.jvm.internal.impl.serialization.deserialization.MemberDeserializer;
import kotlin.reflect.jvm.internal.impl.serialization.deserialization.descriptors.DeserializedClassDescriptor;
import kotlin.reflect.jvm.internal.impl.storage.StorageManager;
import kotlin.reflect.jvm.internal.impl.types.KotlinType;
import kotlin.reflect.jvm.internal.impl.types.SimpleType;
import kotlin.text.StringsKt;
import ks.c1;
import ks.z2;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class w0 extends c1 implements KClass, x0, w2 {

    /* renamed from: o  reason: collision with root package name */
    private final Class f35446o;

    /* renamed from: p  reason: collision with root package name */
    private final Lazy f35447p;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public final class a extends c1.b {

        /* renamed from: w  reason: collision with root package name */
        static final /* synthetic */ KProperty[] f35448w = {Reflection.property1(new PropertyReference1Impl(a.class, "descriptor", "getDescriptor()Lorg/jetbrains/kotlin/descriptors/ClassDescriptor;", 0)), Reflection.property1(new PropertyReference1Impl(a.class, "annotations", "getAnnotations()Ljava/util/List;", 0)), Reflection.property1(new PropertyReference1Impl(a.class, "simpleName", "getSimpleName()Ljava/lang/String;", 0)), Reflection.property1(new PropertyReference1Impl(a.class, "qualifiedName", "getQualifiedName()Ljava/lang/String;", 0)), Reflection.property1(new PropertyReference1Impl(a.class, "constructors", "getConstructors()Ljava/util/Collection;", 0)), Reflection.property1(new PropertyReference1Impl(a.class, "nestedClasses", "getNestedClasses()Ljava/util/Collection;", 0)), Reflection.property1(new PropertyReference1Impl(a.class, "typeParameters", "getTypeParameters()Ljava/util/List;", 0)), Reflection.property1(new PropertyReference1Impl(a.class, "supertypes", "getSupertypes()Ljava/util/List;", 0)), Reflection.property1(new PropertyReference1Impl(a.class, "sealedSubclasses", "getSealedSubclasses()Ljava/util/List;", 0)), Reflection.property1(new PropertyReference1Impl(a.class, "declaredNonStaticMembers", "getDeclaredNonStaticMembers()Ljava/util/Collection;", 0)), Reflection.property1(new PropertyReference1Impl(a.class, "declaredStaticMembers", "getDeclaredStaticMembers()Ljava/util/Collection;", 0)), Reflection.property1(new PropertyReference1Impl(a.class, "inheritedNonStaticMembers", "getInheritedNonStaticMembers()Ljava/util/Collection;", 0)), Reflection.property1(new PropertyReference1Impl(a.class, "inheritedStaticMembers", "getInheritedStaticMembers()Ljava/util/Collection;", 0)), Reflection.property1(new PropertyReference1Impl(a.class, "allNonStaticMembers", "getAllNonStaticMembers()Ljava/util/Collection;", 0)), Reflection.property1(new PropertyReference1Impl(a.class, "allStaticMembers", "getAllStaticMembers()Ljava/util/Collection;", 0)), Reflection.property1(new PropertyReference1Impl(a.class, "declaredMembers", "getDeclaredMembers()Ljava/util/Collection;", 0)), Reflection.property1(new PropertyReference1Impl(a.class, "allMembers", "getAllMembers()Ljava/util/Collection;", 0))};

        /* renamed from: d  reason: collision with root package name */
        private final z2.a f35449d;

        /* renamed from: e  reason: collision with root package name */
        private final z2.a f35450e;

        /* renamed from: f  reason: collision with root package name */
        private final z2.a f35451f;

        /* renamed from: g  reason: collision with root package name */
        private final z2.a f35452g;

        /* renamed from: h  reason: collision with root package name */
        private final z2.a f35453h;

        /* renamed from: i  reason: collision with root package name */
        private final z2.a f35454i;

        /* renamed from: j  reason: collision with root package name */
        private final Lazy f35455j;

        /* renamed from: k  reason: collision with root package name */
        private final z2.a f35456k;

        /* renamed from: l  reason: collision with root package name */
        private final z2.a f35457l;

        /* renamed from: m  reason: collision with root package name */
        private final z2.a f35458m;

        /* renamed from: n  reason: collision with root package name */
        private final z2.a f35459n;

        /* renamed from: o  reason: collision with root package name */
        private final z2.a f35460o;

        /* renamed from: p  reason: collision with root package name */
        private final z2.a f35461p;

        /* renamed from: q  reason: collision with root package name */
        private final z2.a f35462q;

        /* renamed from: r  reason: collision with root package name */
        private final z2.a f35463r;

        /* renamed from: s  reason: collision with root package name */
        private final z2.a f35464s;

        /* renamed from: t  reason: collision with root package name */
        private final z2.a f35465t;

        /* renamed from: u  reason: collision with root package name */
        private final z2.a f35466u;

        public a() {
            super();
            this.f35449d = z2.c(new c0(w0.this));
            this.f35450e = z2.c(new n0(this));
            this.f35451f = z2.c(new o0(w0.this, this));
            this.f35452g = z2.c(new p0(w0.this));
            this.f35453h = z2.c(new q0(w0.this));
            this.f35454i = z2.c(new r0(this));
            this.f35455j = qr.l.b(qr.o.f48044e, new s0(this, w0.this));
            this.f35456k = z2.c(new t0(this, w0.this));
            this.f35457l = z2.c(new u0(this, w0.this));
            this.f35458m = z2.c(new v0(this));
            this.f35459n = z2.c(new d0(w0.this));
            this.f35460o = z2.c(new e0(w0.this));
            this.f35461p = z2.c(new f0(w0.this));
            this.f35462q = z2.c(new g0(w0.this));
            this.f35463r = z2.c(new h0(this));
            this.f35464s = z2.c(new i0(this));
            this.f35465t = z2.c(new j0(this));
            this.f35466u = z2.c(new k0(this));
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final List A(a aVar) {
            return j3.e(aVar.N());
        }

        private final String B(Class cls) {
            String simpleName = cls.getSimpleName();
            Method enclosingMethod = cls.getEnclosingMethod();
            if (enclosingMethod != null) {
                Intrinsics.checkNotNull(simpleName);
                return StringsKt.W0(simpleName, enclosingMethod.getName() + '$', null, 2, null);
            }
            Constructor<?> enclosingConstructor = cls.getEnclosingConstructor();
            if (enclosingConstructor != null) {
                Intrinsics.checkNotNull(simpleName);
                return StringsKt.W0(simpleName, enclosingConstructor.getName() + '$', null, 2, null);
            }
            Intrinsics.checkNotNull(simpleName);
            return StringsKt.V0(simpleName, '$', null, 2, null);
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final List C(w0 w0Var) {
            Collection<ConstructorDescriptor> r10 = w0Var.r();
            ArrayList arrayList = new ArrayList(CollectionsKt.w(r10, 10));
            for (ConstructorDescriptor constructorDescriptor : r10) {
                arrayList.add(new h1(w0Var, constructorDescriptor));
            }
            return arrayList;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final List D(a aVar) {
            return CollectionsKt.L0(aVar.L(), aVar.M());
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final Collection E(w0 w0Var) {
            return w0Var.u(w0Var.L(), c1.d.f35281d);
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final Collection F(w0 w0Var) {
            return w0Var.u(w0Var.M(), c1.d.f35281d);
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final ClassDescriptor G(w0 w0Var) {
            ClassDescriptor findClassAcrossModuleDependencies;
            ClassId I = w0Var.I();
            RuntimeModuleData b10 = ((a) w0Var.J().getValue()).b();
            ModuleDescriptor module = b10.getModule();
            if (I.isLocal() && w0Var.getJClass().isAnnotationPresent(Metadata.class)) {
                findClassAcrossModuleDependencies = b10.getDeserialization().deserializeClass(I);
            } else {
                findClassAcrossModuleDependencies = FindClassInModuleKt.findClassAcrossModuleDependencies(module, I);
            }
            if (findClassAcrossModuleDependencies == null) {
                return w0Var.G(I, b10);
            }
            return findClassAcrossModuleDependencies;
        }

        private final Collection M() {
            Object b10 = this.f35460o.b(this, f35448w[10]);
            Intrinsics.checkNotNullExpressionValue(b10, "getValue(...)");
            return (Collection) b10;
        }

        private final Collection O() {
            Object b10 = this.f35461p.b(this, f35448w[11]);
            Intrinsics.checkNotNullExpressionValue(b10, "getValue(...)");
            return (Collection) b10;
        }

        private final Collection P() {
            Object b10 = this.f35462q.b(this, f35448w[12]);
            Intrinsics.checkNotNullExpressionValue(b10, "getValue(...)");
            return (Collection) b10;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final Collection T(w0 w0Var) {
            return w0Var.u(w0Var.L(), c1.d.f35282e);
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final Collection U(w0 w0Var) {
            return w0Var.u(w0Var.M(), c1.d.f35282e);
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final List V(a aVar) {
            ClassDescriptor classDescriptor;
            Class cls;
            w0 w0Var;
            ArrayList<DeclarationDescriptor> arrayList = new ArrayList();
            for (Object obj : ResolutionScope.DefaultImpls.getContributedDescriptors$default(aVar.N().getUnsubstitutedInnerClassesScope(), null, null, 3, null)) {
                if (!DescriptorUtils.isEnumEntry((DeclarationDescriptor) obj)) {
                    arrayList.add(obj);
                }
            }
            ArrayList arrayList2 = new ArrayList();
            for (DeclarationDescriptor declarationDescriptor : arrayList) {
                if (declarationDescriptor instanceof ClassDescriptor) {
                    classDescriptor = (ClassDescriptor) declarationDescriptor;
                } else {
                    classDescriptor = null;
                }
                if (classDescriptor != null) {
                    cls = j3.q(classDescriptor);
                } else {
                    cls = null;
                }
                if (cls != null) {
                    w0Var = new w0(cls);
                } else {
                    w0Var = null;
                }
                if (w0Var != null) {
                    arrayList2.add(w0Var);
                }
            }
            return arrayList2;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final Object W(a aVar, w0 w0Var) {
            Field declaredField;
            ClassDescriptor N = aVar.N();
            if (N.getKind() != ClassKind.OBJECT) {
                return null;
            }
            if (N.isCompanionObject() && !CompanionObjectMappingUtilsKt.isMappedIntrinsicCompanionObject(CompanionObjectMapping.INSTANCE, N)) {
                declaredField = w0Var.getJClass().getEnclosingClass().getDeclaredField(N.getName().asString());
            } else {
                declaredField = w0Var.getJClass().getDeclaredField("INSTANCE");
            }
            Object obj = declaredField.get(null);
            Intrinsics.checkNotNull(obj, "null cannot be cast to non-null type T of kotlin.reflect.jvm.internal.KClassImpl");
            return obj;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final String X(w0 w0Var) {
            if (!w0Var.getJClass().isAnonymousClass()) {
                ClassId I = w0Var.I();
                if (I.isLocal()) {
                    return null;
                }
                return I.asSingleFqName().asString();
            }
            return null;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final List Y(a aVar) {
            w0 w0Var;
            Collection<ClassDescriptor> sealedSubclasses = aVar.N().getSealedSubclasses();
            Intrinsics.checkNotNullExpressionValue(sealedSubclasses, "getSealedSubclasses(...)");
            ArrayList arrayList = new ArrayList();
            for (ClassDescriptor classDescriptor : sealedSubclasses) {
                Intrinsics.checkNotNull(classDescriptor, "null cannot be cast to non-null type org.jetbrains.kotlin.descriptors.ClassDescriptor");
                Class q10 = j3.q(classDescriptor);
                if (q10 != null) {
                    w0Var = new w0(q10);
                } else {
                    w0Var = null;
                }
                if (w0Var != null) {
                    arrayList.add(w0Var);
                }
            }
            return arrayList;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final String Z(w0 w0Var, a aVar) {
            if (!w0Var.getJClass().isAnonymousClass()) {
                ClassId I = w0Var.I();
                if (I.isLocal()) {
                    return aVar.B(w0Var.getJClass());
                }
                String asString = I.getShortClassName().asString();
                Intrinsics.checkNotNullExpressionValue(asString, "asString(...)");
                return asString;
            }
            return null;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final List a0(a aVar, w0 w0Var) {
            Collection<KotlinType> supertypes = aVar.N().getTypeConstructor().getSupertypes();
            Intrinsics.checkNotNullExpressionValue(supertypes, "getSupertypes(...)");
            ArrayList<t2> arrayList = new ArrayList(supertypes.size());
            for (KotlinType kotlinType : supertypes) {
                Intrinsics.checkNotNull(kotlinType);
                arrayList.add(new t2(kotlinType, new l0(kotlinType, aVar, w0Var)));
            }
            if (!KotlinBuiltIns.isSpecialClassWithNoSupertypes(aVar.N())) {
                if (!arrayList.isEmpty()) {
                    for (t2 t2Var : arrayList) {
                        ClassKind kind = DescriptorUtils.getClassDescriptorForType(t2Var.l()).getKind();
                        Intrinsics.checkNotNullExpressionValue(kind, "getKind(...)");
                        if (kind != ClassKind.INTERFACE && kind != ClassKind.ANNOTATION_CLASS) {
                            break;
                        }
                    }
                }
                SimpleType anyType = DescriptorUtilsKt.getBuiltIns(aVar.N()).getAnyType();
                Intrinsics.checkNotNullExpressionValue(anyType, "getAnyType(...)");
                arrayList.add(new t2(anyType, m0.f35363d));
            }
            return kotlin.reflect.jvm.internal.impl.utils.CollectionsKt.compact(arrayList);
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final Type b0(KotlinType kotlinType, a aVar, w0 w0Var) {
            ClassifierDescriptor mo1199getDeclarationDescriptor = kotlinType.getConstructor().mo1199getDeclarationDescriptor();
            if (mo1199getDeclarationDescriptor instanceof ClassDescriptor) {
                Class q10 = j3.q((ClassDescriptor) mo1199getDeclarationDescriptor);
                if (q10 != null) {
                    if (Intrinsics.areEqual(w0Var.getJClass().getSuperclass(), q10)) {
                        Type genericSuperclass = w0Var.getJClass().getGenericSuperclass();
                        Intrinsics.checkNotNull(genericSuperclass);
                        return genericSuperclass;
                    }
                    Class<?>[] interfaces = w0Var.getJClass().getInterfaces();
                    Intrinsics.checkNotNullExpressionValue(interfaces, "getInterfaces(...)");
                    int h02 = kotlin.collections.i.h0(interfaces, q10);
                    if (h02 >= 0) {
                        Type type = w0Var.getJClass().getGenericInterfaces()[h02];
                        Intrinsics.checkNotNull(type);
                        return type;
                    }
                    throw new x2("No superclass of " + aVar + " in Java reflection for " + mo1199getDeclarationDescriptor);
                }
                throw new x2("Unsupported superclass of " + aVar + ": " + mo1199getDeclarationDescriptor);
            }
            throw new x2("Supertype not a class: " + mo1199getDeclarationDescriptor);
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final Type c0() {
            return Object.class;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final List d0(a aVar, w0 w0Var) {
            List<TypeParameterDescriptor> declaredTypeParameters = aVar.N().getDeclaredTypeParameters();
            Intrinsics.checkNotNullExpressionValue(declaredTypeParameters, "getDeclaredTypeParameters(...)");
            List<TypeParameterDescriptor> list = declaredTypeParameters;
            ArrayList arrayList = new ArrayList(CollectionsKt.w(list, 10));
            for (TypeParameterDescriptor typeParameterDescriptor : list) {
                Intrinsics.checkNotNull(typeParameterDescriptor);
                arrayList.add(new v2(w0Var, typeParameterDescriptor));
            }
            return arrayList;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final List x(a aVar) {
            return CollectionsKt.L0(aVar.I(), aVar.J());
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final List y(a aVar) {
            return CollectionsKt.L0(aVar.L(), aVar.O());
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final List z(a aVar) {
            return CollectionsKt.L0(aVar.M(), aVar.P());
        }

        public final Collection H() {
            Object b10 = this.f35466u.b(this, f35448w[16]);
            Intrinsics.checkNotNullExpressionValue(b10, "getValue(...)");
            return (Collection) b10;
        }

        public final Collection I() {
            Object b10 = this.f35463r.b(this, f35448w[13]);
            Intrinsics.checkNotNullExpressionValue(b10, "getValue(...)");
            return (Collection) b10;
        }

        public final Collection J() {
            Object b10 = this.f35464s.b(this, f35448w[14]);
            Intrinsics.checkNotNullExpressionValue(b10, "getValue(...)");
            return (Collection) b10;
        }

        public final List K() {
            Object b10 = this.f35450e.b(this, f35448w[1]);
            Intrinsics.checkNotNullExpressionValue(b10, "getValue(...)");
            return (List) b10;
        }

        public final Collection L() {
            Object b10 = this.f35459n.b(this, f35448w[9]);
            Intrinsics.checkNotNullExpressionValue(b10, "getValue(...)");
            return (Collection) b10;
        }

        public final ClassDescriptor N() {
            Object b10 = this.f35449d.b(this, f35448w[0]);
            Intrinsics.checkNotNullExpressionValue(b10, "getValue(...)");
            return (ClassDescriptor) b10;
        }

        public final String Q() {
            return (String) this.f35452g.b(this, f35448w[3]);
        }

        public final String R() {
            return (String) this.f35451f.b(this, f35448w[2]);
        }

        public final List S() {
            Object b10 = this.f35456k.b(this, f35448w[6]);
            Intrinsics.checkNotNullExpressionValue(b10, "getValue(...)");
            return (List) b10;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public /* synthetic */ class b {

        /* renamed from: a  reason: collision with root package name */
        public static final /* synthetic */ int[] f35468a;

        static {
            int[] iArr = new int[KotlinClassHeader.Kind.values().length];
            try {
                iArr[KotlinClassHeader.Kind.FILE_FACADE.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[KotlinClassHeader.Kind.MULTIFILE_CLASS.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                iArr[KotlinClassHeader.Kind.MULTIFILE_CLASS_PART.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                iArr[KotlinClassHeader.Kind.SYNTHETIC_CLASS.ordinal()] = 4;
            } catch (NoSuchFieldError unused4) {
            }
            try {
                iArr[KotlinClassHeader.Kind.UNKNOWN.ordinal()] = 5;
            } catch (NoSuchFieldError unused5) {
            }
            try {
                iArr[KotlinClassHeader.Kind.CLASS.ordinal()] = 6;
            } catch (NoSuchFieldError unused6) {
            }
            f35468a = iArr;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class c extends GivenFunctionsMemberScope {
        c(ClassDescriptorImpl classDescriptorImpl, StorageManager storageManager) {
            super(storageManager, classDescriptorImpl);
        }

        @Override // kotlin.reflect.jvm.internal.impl.resolve.scopes.GivenFunctionsMemberScope
        protected List c() {
            return CollectionsKt.l();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    /* synthetic */ class d extends FunctionReferenceImpl implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        public static final d f35469d = new d();

        d() {
            super(2, MemberDeserializer.class, "loadProperty", "loadProperty(Lorg/jetbrains/kotlin/metadata/ProtoBuf$Property;)Lorg/jetbrains/kotlin/descriptors/PropertyDescriptor;", 0);
        }

        @Override // kotlin.jvm.functions.Function2
        /* renamed from: a */
        public final PropertyDescriptor invoke(MemberDeserializer p02, ProtoBuf.Property p12) {
            Intrinsics.checkNotNullParameter(p02, "p0");
            Intrinsics.checkNotNullParameter(p12, "p1");
            return p02.loadProperty(p12);
        }
    }

    public w0(Class jClass) {
        Intrinsics.checkNotNullParameter(jClass, "jClass");
        this.f35446o = jClass;
        this.f35447p = qr.l.b(qr.o.f48044e, new b0(this));
    }

    private final ClassDescriptor F(ClassId classId, RuntimeModuleData runtimeModuleData) {
        ClassDescriptorImpl classDescriptorImpl = new ClassDescriptorImpl(new EmptyPackageFragmentDescriptor(runtimeModuleData.getModule(), classId.getPackageFqName()), classId.getShortClassName(), Modality.FINAL, ClassKind.CLASS, CollectionsKt.e(runtimeModuleData.getModule().getBuiltIns().getAny().getDefaultType()), SourceElement.NO_SOURCE, false, runtimeModuleData.getDeserialization().getStorageManager());
        classDescriptorImpl.initialize(new c(classDescriptorImpl, runtimeModuleData.getDeserialization().getStorageManager()), kotlin.collections.x0.d(), null);
        return classDescriptorImpl;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final ClassDescriptor G(ClassId classId, RuntimeModuleData runtimeModuleData) {
        KotlinClassHeader.Kind kind;
        int i10;
        KotlinClassHeader classHeader;
        if (getJClass().isSynthetic()) {
            return F(classId, runtimeModuleData);
        }
        ReflectKotlinClass create = ReflectKotlinClass.Factory.create(getJClass());
        if (create != null && (classHeader = create.getClassHeader()) != null) {
            kind = classHeader.getKind();
        } else {
            kind = null;
        }
        if (kind == null) {
            i10 = -1;
        } else {
            i10 = b.f35468a[kind.ordinal()];
        }
        switch (i10) {
            case -1:
            case 6:
                throw new x2("Unresolved class: " + getJClass() + " (kind = " + kind + ')');
            case 0:
            default:
                throw new qr.p();
            case 1:
            case 2:
            case 3:
            case 4:
                return F(classId, runtimeModuleData);
            case 5:
                throw new x2("Unknown class: " + getJClass() + " (kind = " + kind + ')');
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final a H(w0 w0Var) {
        return new a();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final ClassId I() {
        return e3.f35300a.c(getJClass());
    }

    public final Lazy J() {
        return this.f35447p;
    }

    @Override // ks.x0
    /* renamed from: K */
    public ClassDescriptor getDescriptor() {
        return ((a) this.f35447p.getValue()).N();
    }

    public final MemberScope L() {
        return getDescriptor().getDefaultType().getMemberScope();
    }

    public final MemberScope M() {
        MemberScope staticScope = getDescriptor().getStaticScope();
        Intrinsics.checkNotNullExpressionValue(staticScope, "getStaticScope(...)");
        return staticScope;
    }

    public boolean equals(Object obj) {
        if ((obj instanceof w0) && Intrinsics.areEqual(ds.a.c(this), ds.a.c((KClass) obj))) {
            return true;
        }
        return false;
    }

    @Override // kotlin.reflect.b
    public List getAnnotations() {
        return ((a) this.f35447p.getValue()).K();
    }

    @Override // kotlin.jvm.internal.ClassBasedDeclarationContainer
    public Class getJClass() {
        return this.f35446o;
    }

    @Override // kotlin.jvm.internal.ClassBasedDeclarationContainer
    public Collection getMembers() {
        return ((a) this.f35447p.getValue()).H();
    }

    @Override // kotlin.reflect.KClass
    public String getQualifiedName() {
        return ((a) this.f35447p.getValue()).Q();
    }

    @Override // kotlin.reflect.KClass
    public String getSimpleName() {
        return ((a) this.f35447p.getValue()).R();
    }

    @Override // kotlin.reflect.KClass
    public List getTypeParameters() {
        return ((a) this.f35447p.getValue()).S();
    }

    @Override // kotlin.reflect.KClass
    public int hashCode() {
        return ds.a.c(this).hashCode();
    }

    @Override // kotlin.reflect.KClass
    public boolean isInstance(Object obj) {
        Integer functionClassArity = ReflectClassUtilKt.getFunctionClassArity(getJClass());
        if (functionClassArity != null) {
            return TypeIntrinsics.isFunctionOfArity(obj, functionClassArity.intValue());
        }
        Class<?> wrapperByPrimitive = ReflectClassUtilKt.getWrapperByPrimitive(getJClass());
        if (wrapperByPrimitive == null) {
            wrapperByPrimitive = getJClass();
        }
        return wrapperByPrimitive.isInstance(obj);
    }

    @Override // kotlin.reflect.KClass
    public boolean isValue() {
        return getDescriptor().isValue();
    }

    @Override // ks.c1
    public Collection r() {
        ClassDescriptor descriptor = getDescriptor();
        if (descriptor.getKind() != ClassKind.INTERFACE && descriptor.getKind() != ClassKind.OBJECT) {
            Collection<ClassConstructorDescriptor> constructors = descriptor.getConstructors();
            Intrinsics.checkNotNullExpressionValue(constructors, "getConstructors(...)");
            return constructors;
        }
        return CollectionsKt.l();
    }

    @Override // ks.c1
    public Collection s(Name name) {
        Intrinsics.checkNotNullParameter(name, "name");
        MemberScope L = L();
        NoLookupLocation noLookupLocation = NoLookupLocation.FROM_REFLECTION;
        return CollectionsKt.L0(L.getContributedFunctions(name, noLookupLocation), M().getContributedFunctions(name, noLookupLocation));
    }

    @Override // ks.c1
    public PropertyDescriptor t(int i10) {
        DeserializedClassDescriptor deserializedClassDescriptor;
        Class<?> declaringClass;
        if (Intrinsics.areEqual(getJClass().getSimpleName(), "DefaultImpls") && (declaringClass = getJClass().getDeclaringClass()) != null && declaringClass.isInterface()) {
            KClass e10 = ds.a.e(declaringClass);
            Intrinsics.checkNotNull(e10, "null cannot be cast to non-null type kotlin.reflect.jvm.internal.KClassImpl<*>");
            return ((w0) e10).t(i10);
        }
        ClassDescriptor descriptor = getDescriptor();
        if (descriptor instanceof DeserializedClassDescriptor) {
            deserializedClassDescriptor = (DeserializedClassDescriptor) descriptor;
        } else {
            deserializedClassDescriptor = null;
        }
        if (deserializedClassDescriptor != null) {
            ProtoBuf.Class classProto = deserializedClassDescriptor.getClassProto();
            GeneratedMessageLite.GeneratedExtension<ProtoBuf.Class, List<ProtoBuf.Property>> classLocalVariable = JvmProtoBuf.classLocalVariable;
            Intrinsics.checkNotNullExpressionValue(classLocalVariable, "classLocalVariable");
            ProtoBuf.Property property = (ProtoBuf.Property) ProtoBufUtilKt.getExtensionOrNull(classProto, classLocalVariable, i10);
            if (property != null) {
                return (PropertyDescriptor) j3.h(getJClass(), property, deserializedClassDescriptor.getC().getNameResolver(), deserializedClassDescriptor.getC().getTypeTable(), deserializedClassDescriptor.getMetadataVersion(), d.f35469d);
            }
        }
        return null;
    }

    public String toString() {
        FqName packageFqName;
        String str;
        StringBuilder sb2 = new StringBuilder();
        sb2.append("class ");
        ClassId I = I();
        if (I.getPackageFqName().isRoot()) {
            str = "";
        } else {
            str = packageFqName.asString() + '.';
        }
        sb2.append(str + StringsKt.I(I.getRelativeClassName().asString(), '.', '$', false, 4, null));
        return sb2.toString();
    }

    @Override // ks.c1
    public Collection w(Name name) {
        Intrinsics.checkNotNullParameter(name, "name");
        MemberScope L = L();
        NoLookupLocation noLookupLocation = NoLookupLocation.FROM_REFLECTION;
        return CollectionsKt.L0(L.getContributedVariables(name, noLookupLocation), M().getContributedVariables(name, noLookupLocation));
    }
}
