package ls;

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
        private final Class f36493a;

        /* renamed from: b  reason: collision with root package name */
        private final List f36494b;

        /* renamed from: ls.n$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class C0519a implements Comparator {
            @Override // java.util.Comparator
            public final int compare(Object obj, Object obj2) {
                return ur.a.d(((Method) obj).getName(), ((Method) obj2).getName());
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public a(Class jClass) {
            super(null);
            Intrinsics.checkNotNullParameter(jClass, "jClass");
            this.f36493a = jClass;
            Method[] declaredMethods = jClass.getDeclaredMethods();
            Intrinsics.checkNotNullExpressionValue(declaredMethods, "getDeclaredMethods(...)");
            this.f36494b = kotlin.collections.i.F0(declaredMethods, new C0519a());
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final CharSequence c(Method method) {
            Class<?> returnType = method.getReturnType();
            Intrinsics.checkNotNullExpressionValue(returnType, "getReturnType(...)");
            return ReflectClassUtilKt.getDesc(returnType);
        }

        @Override // ls.n
        public String a() {
            return CollectionsKt.x0(this.f36494b, "", "<init>(", ")V", 0, null, m.f36489d, 24, null);
        }

        public final List d() {
            return this.f36494b;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class b extends n {

        /* renamed from: a  reason: collision with root package name */
        private final Constructor f36495a;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public b(Constructor constructor) {
            super(null);
            Intrinsics.checkNotNullParameter(constructor, "constructor");
            this.f36495a = constructor;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final CharSequence c(Class cls) {
            Intrinsics.checkNotNull(cls);
            return ReflectClassUtilKt.getDesc(cls);
        }

        @Override // ls.n
        public String a() {
            Class<?>[] parameterTypes = this.f36495a.getParameterTypes();
            Intrinsics.checkNotNullExpressionValue(parameterTypes, "getParameterTypes(...)");
            return kotlin.collections.i.v0(parameterTypes, "", "<init>(", ")V", 0, null, o.f36504d, 24, null);
        }

        public final Constructor d() {
            return this.f36495a;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class c extends n {

        /* renamed from: a  reason: collision with root package name */
        private final Method f36496a;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public c(Method method) {
            super(null);
            Intrinsics.checkNotNullParameter(method, "method");
            this.f36496a = method;
        }

        @Override // ls.n
        public String a() {
            String d10;
            d10 = g3.d(this.f36496a);
            return d10;
        }

        public final Method b() {
            return this.f36496a;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class d extends n {

        /* renamed from: a  reason: collision with root package name */
        private final JvmMemberSignature.Method f36497a;

        /* renamed from: b  reason: collision with root package name */
        private final String f36498b;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public d(JvmMemberSignature.Method signature) {
            super(null);
            Intrinsics.checkNotNullParameter(signature, "signature");
            this.f36497a = signature;
            this.f36498b = signature.asString();
        }

        @Override // ls.n
        public String a() {
            return this.f36498b;
        }

        public final String b() {
            return this.f36497a.getDesc();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class e extends n {

        /* renamed from: a  reason: collision with root package name */
        private final JvmMemberSignature.Method f36499a;

        /* renamed from: b  reason: collision with root package name */
        private final String f36500b;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public e(JvmMemberSignature.Method signature) {
            super(null);
            Intrinsics.checkNotNullParameter(signature, "signature");
            this.f36499a = signature;
            this.f36500b = signature.asString();
        }

        @Override // ls.n
        public String a() {
            return this.f36500b;
        }

        public final String b() {
            return this.f36499a.getDesc();
        }

        public final String c() {
            return this.f36499a.getName();
        }
    }

    public /* synthetic */ n(DefaultConstructorMarker defaultConstructorMarker) {
        this();
    }

    public abstract String a();

    private n() {
    }
}
