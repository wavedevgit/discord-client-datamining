package us;

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
import us.n;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class p {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a extends p {

        /* renamed from: a  reason: collision with root package name */
        private final Field f51113a;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public a(Field field) {
            super(null);
            Intrinsics.checkNotNullParameter(field, "field");
            this.f51113a = field;
        }

        @Override // us.p
        public String a() {
            StringBuilder sb2 = new StringBuilder();
            String name = this.f51113a.getName();
            Intrinsics.checkNotNullExpressionValue(name, "getName(...)");
            sb2.append(JvmAbi.getterName(name));
            sb2.append("()");
            Class<?> type = this.f51113a.getType();
            Intrinsics.checkNotNullExpressionValue(type, "getType(...)");
            sb2.append(ReflectClassUtilKt.getDesc(type));
            return sb2.toString();
        }

        public final Field b() {
            return this.f51113a;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class b extends p {

        /* renamed from: a  reason: collision with root package name */
        private final Method f51114a;

        /* renamed from: b  reason: collision with root package name */
        private final Method f51115b;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public b(Method getterMethod, Method method) {
            super(null);
            Intrinsics.checkNotNullParameter(getterMethod, "getterMethod");
            this.f51114a = getterMethod;
            this.f51115b = method;
        }

        @Override // us.p
        public String a() {
            String d10;
            d10 = g3.d(this.f51114a);
            return d10;
        }

        public final Method b() {
            return this.f51114a;
        }

        public final Method c() {
            return this.f51115b;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class c extends p {

        /* renamed from: a  reason: collision with root package name */
        private final PropertyDescriptor f51116a;

        /* renamed from: b  reason: collision with root package name */
        private final ProtoBuf.Property f51117b;

        /* renamed from: c  reason: collision with root package name */
        private final JvmProtoBuf.JvmPropertySignature f51118c;

        /* renamed from: d  reason: collision with root package name */
        private final NameResolver f51119d;

        /* renamed from: e  reason: collision with root package name */
        private final TypeTable f51120e;

        /* renamed from: f  reason: collision with root package name */
        private final String f51121f;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public c(PropertyDescriptor descriptor, ProtoBuf.Property proto, JvmProtoBuf.JvmPropertySignature signature, NameResolver nameResolver, TypeTable typeTable) {
            super(null);
            String str;
            Intrinsics.checkNotNullParameter(descriptor, "descriptor");
            Intrinsics.checkNotNullParameter(proto, "proto");
            Intrinsics.checkNotNullParameter(signature, "signature");
            Intrinsics.checkNotNullParameter(nameResolver, "nameResolver");
            Intrinsics.checkNotNullParameter(typeTable, "typeTable");
            this.f51116a = descriptor;
            this.f51117b = proto;
            this.f51118c = signature;
            this.f51119d = nameResolver;
            this.f51120e = typeTable;
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
            this.f51121f = str;
        }

        private final String c() {
            DeclarationDescriptor containingDeclaration = this.f51116a.getContainingDeclaration();
            Intrinsics.checkNotNullExpressionValue(containingDeclaration, "getContainingDeclaration(...)");
            if (Intrinsics.areEqual(this.f51116a.getVisibility(), DescriptorVisibilities.INTERNAL) && (containingDeclaration instanceof DeserializedClassDescriptor)) {
                ProtoBuf.Class classProto = ((DeserializedClassDescriptor) containingDeclaration).getClassProto();
                GeneratedMessageLite.GeneratedExtension<ProtoBuf.Class, Integer> classModuleName = JvmProtoBuf.classModuleName;
                Intrinsics.checkNotNullExpressionValue(classModuleName, "classModuleName");
                Integer num = (Integer) ProtoBufUtilKt.getExtensionOrNull(classProto, classModuleName);
                String str = (num == null || (str = this.f51119d.getString(num.intValue())) == null) ? "main" : "main";
                return '$' + NameUtils.sanitizeAsJavaIdentifier(str);
            } else if (Intrinsics.areEqual(this.f51116a.getVisibility(), DescriptorVisibilities.PRIVATE) && (containingDeclaration instanceof PackageFragmentDescriptor)) {
                PropertyDescriptor propertyDescriptor = this.f51116a;
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

        @Override // us.p
        public String a() {
            return this.f51121f;
        }

        public final PropertyDescriptor b() {
            return this.f51116a;
        }

        public final NameResolver d() {
            return this.f51119d;
        }

        public final ProtoBuf.Property e() {
            return this.f51117b;
        }

        public final JvmProtoBuf.JvmPropertySignature f() {
            return this.f51118c;
        }

        public final TypeTable g() {
            return this.f51120e;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class d extends p {

        /* renamed from: a  reason: collision with root package name */
        private final n.e f51122a;

        /* renamed from: b  reason: collision with root package name */
        private final n.e f51123b;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public d(n.e getterSignature, n.e eVar) {
            super(null);
            Intrinsics.checkNotNullParameter(getterSignature, "getterSignature");
            this.f51122a = getterSignature;
            this.f51123b = eVar;
        }

        @Override // us.p
        public String a() {
            return this.f51122a.a();
        }

        public final n.e b() {
            return this.f51122a;
        }

        public final n.e c() {
            return this.f51123b;
        }
    }

    public /* synthetic */ p(DefaultConstructorMarker defaultConstructorMarker) {
        this();
    }

    public abstract String a();

    private p() {
    }
}
