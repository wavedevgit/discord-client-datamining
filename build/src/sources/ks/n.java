package ks;

import java.lang.reflect.Constructor;
import java.lang.reflect.Method;
import java.util.Comparator;
import java.util.List;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.reflect.jvm.internal.impl.descriptors.runtime.structure.ReflectClassUtilKt;
import kotlin.reflect.jvm.internal.impl.metadata.jvm.deserialization.JvmMemberSignature;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class n {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a extends n {

        /* renamed from: a  reason: collision with root package name */
        private final Class f35414a;

        /* renamed from: b  reason: collision with root package name */
        private final List f35415b;

        /* renamed from: ks.n$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class C0470a implements Comparator {
            @Override // java.util.Comparator
            public final int compare(Object obj, Object obj2) {
                return tr.a.d(((Method) obj).getName(), ((Method) obj2).getName());
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public a(Class jClass) {
            super(null);
            Intrinsics.checkNotNullParameter(jClass, "jClass");
            this.f35414a = jClass;
            Method[] declaredMethods = jClass.getDeclaredMethods();
            Intrinsics.checkNotNullExpressionValue(declaredMethods, "getDeclaredMethods(...)");
            this.f35415b = kotlin.collections.i.F0(declaredMethods, new C0470a());
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final CharSequence c(Method method) {
            Class<?> returnType = method.getReturnType();
            Intrinsics.checkNotNullExpressionValue(returnType, "getReturnType(...)");
            return ReflectClassUtilKt.getDesc(returnType);
        }

        @Override // ks.n
        public String a() {
            return CollectionsKt.x0(this.f35415b, "", "<init>(", ")V", 0, null, m.f35410d, 24, null);
        }

        public final List d() {
            return this.f35415b;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class b extends n {

        /* renamed from: a  reason: collision with root package name */
        private final Constructor f35416a;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public b(Constructor constructor) {
            super(null);
            Intrinsics.checkNotNullParameter(constructor, "constructor");
            this.f35416a = constructor;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final CharSequence c(Class cls) {
            Intrinsics.checkNotNull(cls);
            return ReflectClassUtilKt.getDesc(cls);
        }

        @Override // ks.n
        public String a() {
            Class<?>[] parameterTypes = this.f35416a.getParameterTypes();
            Intrinsics.checkNotNullExpressionValue(parameterTypes, "getParameterTypes(...)");
            return kotlin.collections.i.v0(parameterTypes, "", "<init>(", ")V", 0, null, o.f35425d, 24, null);
        }

        public final Constructor d() {
            return this.f35416a;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class c extends n {

        /* renamed from: a  reason: collision with root package name */
        private final Method f35417a;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public c(Method method) {
            super(null);
            Intrinsics.checkNotNullParameter(method, "method");
            this.f35417a = method;
        }

        @Override // ks.n
        public String a() {
            String d10;
            d10 = g3.d(this.f35417a);
            return d10;
        }

        public final Method b() {
            return this.f35417a;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class d extends n {

        /* renamed from: a  reason: collision with root package name */
        private final JvmMemberSignature.Method f35418a;

        /* renamed from: b  reason: collision with root package name */
        private final String f35419b;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public d(JvmMemberSignature.Method signature) {
            super(null);
            Intrinsics.checkNotNullParameter(signature, "signature");
            this.f35418a = signature;
            this.f35419b = signature.asString();
        }

        @Override // ks.n
        public String a() {
            return this.f35419b;
        }

        public final String b() {
            return this.f35418a.getDesc();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class e extends n {

        /* renamed from: a  reason: collision with root package name */
        private final JvmMemberSignature.Method f35420a;

        /* renamed from: b  reason: collision with root package name */
        private final String f35421b;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public e(JvmMemberSignature.Method signature) {
            super(null);
            Intrinsics.checkNotNullParameter(signature, "signature");
            this.f35420a = signature;
            this.f35421b = signature.asString();
        }

        @Override // ks.n
        public String a() {
            return this.f35421b;
        }

        public final String b() {
            return this.f35420a.getDesc();
        }

        public final String c() {
            return this.f35420a.getName();
        }
    }

    public /* synthetic */ n(DefaultConstructorMarker defaultConstructorMarker) {
        this();
    }

    public abstract String a();

    private n() {
    }
}
