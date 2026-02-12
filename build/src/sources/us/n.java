package us;

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
        private final Class f51099a;

        /* renamed from: b  reason: collision with root package name */
        private final List f51100b;

        /* renamed from: us.n$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class C0703a implements Comparator {
            @Override // java.util.Comparator
            public final int compare(Object obj, Object obj2) {
                return ds.a.d(((Method) obj).getName(), ((Method) obj2).getName());
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public a(Class jClass) {
            super(null);
            Intrinsics.checkNotNullParameter(jClass, "jClass");
            this.f51099a = jClass;
            Method[] declaredMethods = jClass.getDeclaredMethods();
            Intrinsics.checkNotNullExpressionValue(declaredMethods, "getDeclaredMethods(...)");
            this.f51100b = kotlin.collections.i.F0(declaredMethods, new C0703a());
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final CharSequence c(Method method) {
            Class<?> returnType = method.getReturnType();
            Intrinsics.checkNotNullExpressionValue(returnType, "getReturnType(...)");
            return ReflectClassUtilKt.getDesc(returnType);
        }

        @Override // us.n
        public String a() {
            return CollectionsKt.x0(this.f51100b, "", "<init>(", ")V", 0, null, m.f51095d, 24, null);
        }

        public final List d() {
            return this.f51100b;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class b extends n {

        /* renamed from: a  reason: collision with root package name */
        private final Constructor f51101a;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public b(Constructor constructor) {
            super(null);
            Intrinsics.checkNotNullParameter(constructor, "constructor");
            this.f51101a = constructor;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final CharSequence c(Class cls) {
            Intrinsics.checkNotNull(cls);
            return ReflectClassUtilKt.getDesc(cls);
        }

        @Override // us.n
        public String a() {
            Class<?>[] parameterTypes = this.f51101a.getParameterTypes();
            Intrinsics.checkNotNullExpressionValue(parameterTypes, "getParameterTypes(...)");
            return kotlin.collections.i.v0(parameterTypes, "", "<init>(", ")V", 0, null, o.f51110d, 24, null);
        }

        public final Constructor d() {
            return this.f51101a;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class c extends n {

        /* renamed from: a  reason: collision with root package name */
        private final Method f51102a;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public c(Method method) {
            super(null);
            Intrinsics.checkNotNullParameter(method, "method");
            this.f51102a = method;
        }

        @Override // us.n
        public String a() {
            String d10;
            d10 = g3.d(this.f51102a);
            return d10;
        }

        public final Method b() {
            return this.f51102a;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class d extends n {

        /* renamed from: a  reason: collision with root package name */
        private final JvmMemberSignature.Method f51103a;

        /* renamed from: b  reason: collision with root package name */
        private final String f51104b;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public d(JvmMemberSignature.Method signature) {
            super(null);
            Intrinsics.checkNotNullParameter(signature, "signature");
            this.f51103a = signature;
            this.f51104b = signature.asString();
        }

        @Override // us.n
        public String a() {
            return this.f51104b;
        }

        public final String b() {
            return this.f51103a.getDesc();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class e extends n {

        /* renamed from: a  reason: collision with root package name */
        private final JvmMemberSignature.Method f51105a;

        /* renamed from: b  reason: collision with root package name */
        private final String f51106b;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public e(JvmMemberSignature.Method signature) {
            super(null);
            Intrinsics.checkNotNullParameter(signature, "signature");
            this.f51105a = signature;
            this.f51106b = signature.asString();
        }

        @Override // us.n
        public String a() {
            return this.f51106b;
        }

        public final String b() {
            return this.f51105a.getDesc();
        }

        public final String c() {
            return this.f51105a.getName();
        }
    }

    public /* synthetic */ n(DefaultConstructorMarker defaultConstructorMarker) {
        this();
    }

    public abstract String a();

    private n() {
    }
}
