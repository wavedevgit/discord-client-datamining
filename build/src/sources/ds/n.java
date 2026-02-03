package ds;

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
        private final Class f22255a;

        /* renamed from: b  reason: collision with root package name */
        private final List f22256b;

        /* renamed from: ds.n$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class C0292a implements Comparator {
            @Override // java.util.Comparator
            public final int compare(Object obj, Object obj2) {
                return mr.a.d(((Method) obj).getName(), ((Method) obj2).getName());
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public a(Class jClass) {
            super(null);
            Intrinsics.checkNotNullParameter(jClass, "jClass");
            this.f22255a = jClass;
            Method[] declaredMethods = jClass.getDeclaredMethods();
            Intrinsics.checkNotNullExpressionValue(declaredMethods, "getDeclaredMethods(...)");
            this.f22256b = kotlin.collections.i.F0(declaredMethods, new C0292a());
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final CharSequence c(Method method) {
            Class<?> returnType = method.getReturnType();
            Intrinsics.checkNotNullExpressionValue(returnType, "getReturnType(...)");
            return ReflectClassUtilKt.getDesc(returnType);
        }

        @Override // ds.n
        public String a() {
            return CollectionsKt.x0(this.f22256b, "", "<init>(", ")V", 0, null, m.f22251d, 24, null);
        }

        public final List d() {
            return this.f22256b;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class b extends n {

        /* renamed from: a  reason: collision with root package name */
        private final Constructor f22257a;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public b(Constructor constructor) {
            super(null);
            Intrinsics.checkNotNullParameter(constructor, "constructor");
            this.f22257a = constructor;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final CharSequence c(Class cls) {
            Intrinsics.checkNotNull(cls);
            return ReflectClassUtilKt.getDesc(cls);
        }

        @Override // ds.n
        public String a() {
            Class<?>[] parameterTypes = this.f22257a.getParameterTypes();
            Intrinsics.checkNotNullExpressionValue(parameterTypes, "getParameterTypes(...)");
            return kotlin.collections.i.v0(parameterTypes, "", "<init>(", ")V", 0, null, o.f22266d, 24, null);
        }

        public final Constructor d() {
            return this.f22257a;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class c extends n {

        /* renamed from: a  reason: collision with root package name */
        private final Method f22258a;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public c(Method method) {
            super(null);
            Intrinsics.checkNotNullParameter(method, "method");
            this.f22258a = method;
        }

        @Override // ds.n
        public String a() {
            String d10;
            d10 = g3.d(this.f22258a);
            return d10;
        }

        public final Method b() {
            return this.f22258a;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class d extends n {

        /* renamed from: a  reason: collision with root package name */
        private final JvmMemberSignature.Method f22259a;

        /* renamed from: b  reason: collision with root package name */
        private final String f22260b;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public d(JvmMemberSignature.Method signature) {
            super(null);
            Intrinsics.checkNotNullParameter(signature, "signature");
            this.f22259a = signature;
            this.f22260b = signature.asString();
        }

        @Override // ds.n
        public String a() {
            return this.f22260b;
        }

        public final String b() {
            return this.f22259a.getDesc();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class e extends n {

        /* renamed from: a  reason: collision with root package name */
        private final JvmMemberSignature.Method f22261a;

        /* renamed from: b  reason: collision with root package name */
        private final String f22262b;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public e(JvmMemberSignature.Method signature) {
            super(null);
            Intrinsics.checkNotNullParameter(signature, "signature");
            this.f22261a = signature;
            this.f22262b = signature.asString();
        }

        @Override // ds.n
        public String a() {
            return this.f22262b;
        }

        public final String b() {
            return this.f22261a.getDesc();
        }

        public final String c() {
            return this.f22261a.getName();
        }
    }

    public /* synthetic */ n(DefaultConstructorMarker defaultConstructorMarker) {
        this();
    }

    public abstract String a();

    private n() {
    }
}
