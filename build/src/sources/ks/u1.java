package ks;

import java.util.Collection;
import java.util.List;
import kotlin.Lazy;
import kotlin.Pair;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.FunctionReferenceImpl;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.PropertyReference1Impl;
import kotlin.jvm.internal.Reflection;
import kotlin.reflect.KProperty;
import kotlin.reflect.jvm.internal.impl.descriptors.PropertyDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.runtime.components.ReflectKotlinClass;
import kotlin.reflect.jvm.internal.impl.descriptors.runtime.structure.ReflectClassUtilKt;
import kotlin.reflect.jvm.internal.impl.incremental.components.NoLookupLocation;
import kotlin.reflect.jvm.internal.impl.load.kotlin.header.KotlinClassHeader;
import kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf;
import kotlin.reflect.jvm.internal.impl.metadata.deserialization.MetadataVersion;
import kotlin.reflect.jvm.internal.impl.metadata.deserialization.ProtoBufUtilKt;
import kotlin.reflect.jvm.internal.impl.metadata.deserialization.TypeTable;
import kotlin.reflect.jvm.internal.impl.metadata.jvm.JvmProtoBuf;
import kotlin.reflect.jvm.internal.impl.metadata.jvm.deserialization.JvmNameResolver;
import kotlin.reflect.jvm.internal.impl.metadata.jvm.deserialization.JvmProtoBufUtil;
import kotlin.reflect.jvm.internal.impl.name.Name;
import kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite;
import kotlin.reflect.jvm.internal.impl.resolve.scopes.MemberScope;
import kotlin.reflect.jvm.internal.impl.serialization.deserialization.MemberDeserializer;
import kotlin.text.StringsKt;
import ks.c1;
import ks.z2;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class u1 extends c1 {

    /* renamed from: o  reason: collision with root package name */
    private final Class f35426o;

    /* renamed from: p  reason: collision with root package name */
    private final Lazy f35427p;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public final class a extends c1.b {

        /* renamed from: j  reason: collision with root package name */
        static final /* synthetic */ KProperty[] f35428j = {Reflection.property1(new PropertyReference1Impl(a.class, "kotlinClass", "getKotlinClass()Lorg/jetbrains/kotlin/descriptors/runtime/components/ReflectKotlinClass;", 0)), Reflection.property1(new PropertyReference1Impl(a.class, "scope", "getScope()Lorg/jetbrains/kotlin/resolve/scopes/MemberScope;", 0)), Reflection.property1(new PropertyReference1Impl(a.class, "members", "getMembers()Ljava/util/Collection;", 0))};

        /* renamed from: d  reason: collision with root package name */
        private final z2.a f35429d;

        /* renamed from: e  reason: collision with root package name */
        private final z2.a f35430e;

        /* renamed from: f  reason: collision with root package name */
        private final Lazy f35431f;

        /* renamed from: g  reason: collision with root package name */
        private final Lazy f35432g;

        /* renamed from: h  reason: collision with root package name */
        private final z2.a f35433h;

        public a() {
            super();
            this.f35429d = z2.c(new p1(u1.this));
            this.f35430e = z2.c(new q1(this));
            qr.o oVar = qr.o.f48044e;
            this.f35431f = qr.l.b(oVar, new r1(this, u1.this));
            this.f35432g = qr.l.b(oVar, new s1(this));
            this.f35433h = z2.c(new t1(u1.this, this));
        }

        private final ReflectKotlinClass i() {
            return (ReflectKotlinClass) this.f35429d.b(this, f35428j[0]);
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final ReflectKotlinClass n(u1 u1Var) {
            return ReflectKotlinClass.Factory.create(u1Var.getJClass());
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final Collection o(u1 u1Var, a aVar) {
            return u1Var.u(aVar.m(), c1.d.f35281d);
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final qr.u p(a aVar) {
            KotlinClassHeader classHeader;
            ReflectKotlinClass i10 = aVar.i();
            if (i10 != null && (classHeader = i10.getClassHeader()) != null) {
                String[] data = classHeader.getData();
                String[] strings = classHeader.getStrings();
                if (data != null && strings != null) {
                    Pair<JvmNameResolver, ProtoBuf.Package> readPackageDataFrom = JvmProtoBufUtil.readPackageDataFrom(data, strings);
                    return new qr.u((JvmNameResolver) readPackageDataFrom.a(), (ProtoBuf.Package) readPackageDataFrom.b(), classHeader.getMetadataVersion());
                }
            }
            return null;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final Class q(a aVar, u1 u1Var) {
            String str;
            KotlinClassHeader classHeader;
            ReflectKotlinClass i10 = aVar.i();
            if (i10 != null && (classHeader = i10.getClassHeader()) != null) {
                str = classHeader.getMultifileClassName();
            } else {
                str = null;
            }
            if (str == null || str.length() <= 0) {
                return null;
            }
            return u1Var.getJClass().getClassLoader().loadClass(StringsKt.I(str, '/', '.', false, 4, null));
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final MemberScope r(a aVar) {
            ReflectKotlinClass i10 = aVar.i();
            if (i10 != null) {
                return aVar.b().getPackagePartScopeCache().getPackagePartScope(i10);
            }
            return MemberScope.Empty.INSTANCE;
        }

        public final Collection j() {
            Object b10 = this.f35433h.b(this, f35428j[2]);
            Intrinsics.checkNotNullExpressionValue(b10, "getValue(...)");
            return (Collection) b10;
        }

        public final qr.u k() {
            return (qr.u) this.f35432g.getValue();
        }

        public final Class l() {
            return (Class) this.f35431f.getValue();
        }

        public final MemberScope m() {
            Object b10 = this.f35430e.b(this, f35428j[1]);
            Intrinsics.checkNotNullExpressionValue(b10, "getValue(...)");
            return (MemberScope) b10;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    /* synthetic */ class b extends FunctionReferenceImpl implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        public static final b f35435d = new b();

        b() {
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

    public u1(Class jClass) {
        Intrinsics.checkNotNullParameter(jClass, "jClass");
        this.f35426o = jClass;
        this.f35427p = qr.l.b(qr.o.f48044e, new o1(this));
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final a D(u1 u1Var) {
        return new a();
    }

    private final MemberScope E() {
        return ((a) this.f35427p.getValue()).m();
    }

    public boolean equals(Object obj) {
        if ((obj instanceof u1) && Intrinsics.areEqual(getJClass(), ((u1) obj).getJClass())) {
            return true;
        }
        return false;
    }

    @Override // kotlin.jvm.internal.ClassBasedDeclarationContainer
    public Class getJClass() {
        return this.f35426o;
    }

    @Override // kotlin.jvm.internal.ClassBasedDeclarationContainer
    public Collection getMembers() {
        return ((a) this.f35427p.getValue()).j();
    }

    public int hashCode() {
        return getJClass().hashCode();
    }

    @Override // ks.c1
    public Collection r() {
        return CollectionsKt.l();
    }

    @Override // ks.c1
    public Collection s(Name name) {
        Intrinsics.checkNotNullParameter(name, "name");
        return E().getContributedFunctions(name, NoLookupLocation.FROM_REFLECTION);
    }

    @Override // ks.c1
    public PropertyDescriptor t(int i10) {
        qr.u k10 = ((a) this.f35427p.getValue()).k();
        if (k10 != null) {
            JvmNameResolver jvmNameResolver = (JvmNameResolver) k10.a();
            ProtoBuf.Package r22 = (ProtoBuf.Package) k10.b();
            MetadataVersion metadataVersion = (MetadataVersion) k10.c();
            GeneratedMessageLite.GeneratedExtension<ProtoBuf.Package, List<ProtoBuf.Property>> packageLocalVariable = JvmProtoBuf.packageLocalVariable;
            Intrinsics.checkNotNullExpressionValue(packageLocalVariable, "packageLocalVariable");
            ProtoBuf.Property property = (ProtoBuf.Property) ProtoBufUtilKt.getExtensionOrNull(r22, packageLocalVariable, i10);
            if (property != null) {
                Class jClass = getJClass();
                ProtoBuf.TypeTable typeTable = r22.getTypeTable();
                Intrinsics.checkNotNullExpressionValue(typeTable, "getTypeTable(...)");
                return (PropertyDescriptor) j3.h(jClass, property, jvmNameResolver, new TypeTable(typeTable), metadataVersion, b.f35435d);
            }
        }
        return null;
    }

    public String toString() {
        return "file class " + ReflectClassUtilKt.getClassId(getJClass()).asSingleFqName();
    }

    @Override // ks.c1
    protected Class v() {
        Class l10 = ((a) this.f35427p.getValue()).l();
        if (l10 == null) {
            return getJClass();
        }
        return l10;
    }

    @Override // ks.c1
    public Collection w(Name name) {
        Intrinsics.checkNotNullParameter(name, "name");
        return E().getContributedVariables(name, NoLookupLocation.FROM_REFLECTION);
    }
}
