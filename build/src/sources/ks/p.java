package ks;

import java.lang.reflect.Field;
import java.lang.reflect.Method;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.reflect.jvm.internal.impl.descriptors.DeclarationDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.DescriptorVisibilities;
import kotlin.reflect.jvm.internal.impl.descriptors.PackageFragmentDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.PropertyDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.runtime.structure.ReflectClassUtilKt;
import kotlin.reflect.jvm.internal.impl.load.java.JvmAbi;
import kotlin.reflect.jvm.internal.impl.load.kotlin.JvmPackagePartSource;
import kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf;
import kotlin.reflect.jvm.internal.impl.metadata.deserialization.NameResolver;
import kotlin.reflect.jvm.internal.impl.metadata.deserialization.ProtoBufUtilKt;
import kotlin.reflect.jvm.internal.impl.metadata.deserialization.TypeTable;
import kotlin.reflect.jvm.internal.impl.metadata.jvm.JvmProtoBuf;
import kotlin.reflect.jvm.internal.impl.metadata.jvm.deserialization.JvmMemberSignature;
import kotlin.reflect.jvm.internal.impl.metadata.jvm.deserialization.JvmProtoBufUtil;
import kotlin.reflect.jvm.internal.impl.name.NameUtils;
import kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite;
import kotlin.reflect.jvm.internal.impl.serialization.deserialization.descriptors.DeserializedClassDescriptor;
import kotlin.reflect.jvm.internal.impl.serialization.deserialization.descriptors.DeserializedContainerSource;
import kotlin.reflect.jvm.internal.impl.serialization.deserialization.descriptors.DeserializedPropertyDescriptor;
import ks.n;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class p {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a extends p {

        /* renamed from: a  reason: collision with root package name */
        private final Field f35381a;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public a(Field field) {
            super(null);
            Intrinsics.checkNotNullParameter(field, "field");
            this.f35381a = field;
        }

        @Override // ks.p
        public String a() {
            StringBuilder sb2 = new StringBuilder();
            String name = this.f35381a.getName();
            Intrinsics.checkNotNullExpressionValue(name, "getName(...)");
            sb2.append(JvmAbi.getterName(name));
            sb2.append("()");
            Class<?> type = this.f35381a.getType();
            Intrinsics.checkNotNullExpressionValue(type, "getType(...)");
            sb2.append(ReflectClassUtilKt.getDesc(type));
            return sb2.toString();
        }

        public final Field b() {
            return this.f35381a;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class b extends p {

        /* renamed from: a  reason: collision with root package name */
        private final Method f35382a;

        /* renamed from: b  reason: collision with root package name */
        private final Method f35383b;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public b(Method getterMethod, Method method) {
            super(null);
            Intrinsics.checkNotNullParameter(getterMethod, "getterMethod");
            this.f35382a = getterMethod;
            this.f35383b = method;
        }

        @Override // ks.p
        public String a() {
            String d10;
            d10 = g3.d(this.f35382a);
            return d10;
        }

        public final Method b() {
            return this.f35382a;
        }

        public final Method c() {
            return this.f35383b;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class c extends p {

        /* renamed from: a  reason: collision with root package name */
        private final PropertyDescriptor f35384a;

        /* renamed from: b  reason: collision with root package name */
        private final ProtoBuf.Property f35385b;

        /* renamed from: c  reason: collision with root package name */
        private final JvmProtoBuf.JvmPropertySignature f35386c;

        /* renamed from: d  reason: collision with root package name */
        private final NameResolver f35387d;

        /* renamed from: e  reason: collision with root package name */
        private final TypeTable f35388e;

        /* renamed from: f  reason: collision with root package name */
        private final String f35389f;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public c(PropertyDescriptor descriptor, ProtoBuf.Property proto, JvmProtoBuf.JvmPropertySignature signature, NameResolver nameResolver, TypeTable typeTable) {
            super(null);
            String str;
            Intrinsics.checkNotNullParameter(descriptor, "descriptor");
            Intrinsics.checkNotNullParameter(proto, "proto");
            Intrinsics.checkNotNullParameter(signature, "signature");
            Intrinsics.checkNotNullParameter(nameResolver, "nameResolver");
            Intrinsics.checkNotNullParameter(typeTable, "typeTable");
            this.f35384a = descriptor;
            this.f35385b = proto;
            this.f35386c = signature;
            this.f35387d = nameResolver;
            this.f35388e = typeTable;
            if (signature.hasGetter()) {
                str = nameResolver.getString(signature.getGetter().getName()) + nameResolver.getString(signature.getGetter().getDesc());
            } else {
                JvmMemberSignature.Field jvmFieldSignature$default = JvmProtoBufUtil.getJvmFieldSignature$default(JvmProtoBufUtil.INSTANCE, proto, nameResolver, typeTable, false, 8, null);
                if (jvmFieldSignature$default != null) {
                    String component1 = jvmFieldSignature$default.component1();
                    str = JvmAbi.getterName(component1) + c() + "()" + jvmFieldSignature$default.component2();
                } else {
                    throw new x2("No field signature for property: " + descriptor);
                }
            }
            this.f35389f = str;
        }

        private final String c() {
            DeclarationDescriptor containingDeclaration = this.f35384a.getContainingDeclaration();
            Intrinsics.checkNotNullExpressionValue(containingDeclaration, "getContainingDeclaration(...)");
            if (Intrinsics.areEqual(this.f35384a.getVisibility(), DescriptorVisibilities.INTERNAL) && (containingDeclaration instanceof DeserializedClassDescriptor)) {
                ProtoBuf.Class classProto = ((DeserializedClassDescriptor) containingDeclaration).getClassProto();
                GeneratedMessageLite.GeneratedExtension<ProtoBuf.Class, Integer> classModuleName = JvmProtoBuf.classModuleName;
                Intrinsics.checkNotNullExpressionValue(classModuleName, "classModuleName");
                Integer num = (Integer) ProtoBufUtilKt.getExtensionOrNull(classProto, classModuleName);
                String str = (num == null || (str = this.f35387d.getString(num.intValue())) == null) ? "main" : "main";
                return '$' + NameUtils.sanitizeAsJavaIdentifier(str);
            } else if (Intrinsics.areEqual(this.f35384a.getVisibility(), DescriptorVisibilities.PRIVATE) && (containingDeclaration instanceof PackageFragmentDescriptor)) {
                PropertyDescriptor propertyDescriptor = this.f35384a;
                Intrinsics.checkNotNull(propertyDescriptor, "null cannot be cast to non-null type org.jetbrains.kotlin.serialization.deserialization.descriptors.DeserializedPropertyDescriptor");
                DeserializedContainerSource containerSource = ((DeserializedPropertyDescriptor) propertyDescriptor).getContainerSource();
                if (containerSource instanceof JvmPackagePartSource) {
                    JvmPackagePartSource jvmPackagePartSource = (JvmPackagePartSource) containerSource;
                    if (jvmPackagePartSource.getFacadeClassName() != null) {
                        return '$' + jvmPackagePartSource.getSimpleName().asString();
                    }
                    return "";
                }
                return "";
            } else {
                return "";
            }
        }

        @Override // ks.p
        public String a() {
            return this.f35389f;
        }

        public final PropertyDescriptor b() {
            return this.f35384a;
        }

        public final NameResolver d() {
            return this.f35387d;
        }

        public final ProtoBuf.Property e() {
            return this.f35385b;
        }

        public final JvmProtoBuf.JvmPropertySignature f() {
            return this.f35386c;
        }

        public final TypeTable g() {
            return this.f35388e;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class d extends p {

        /* renamed from: a  reason: collision with root package name */
        private final n.e f35390a;

        /* renamed from: b  reason: collision with root package name */
        private final n.e f35391b;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public d(n.e getterSignature, n.e eVar) {
            super(null);
            Intrinsics.checkNotNullParameter(getterSignature, "getterSignature");
            this.f35390a = getterSignature;
            this.f35391b = eVar;
        }

        @Override // ks.p
        public String a() {
            return this.f35390a.a();
        }

        public final n.e b() {
            return this.f35390a;
        }

        public final n.e c() {
            return this.f35391b;
        }
    }

    public /* synthetic */ p(DefaultConstructorMarker defaultConstructorMarker) {
        this();
    }

    public abstract String a();

    private p() {
    }
}
