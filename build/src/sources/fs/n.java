package fs;

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
        private final Class f24573a;

        /* renamed from: b  reason: collision with root package name */
        private final List f24574b;

        /* renamed from: fs.n$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class C0326a implements Comparator {
            @Override // java.util.Comparator
            public final int compare(Object obj, Object obj2) {
                return or.a.d(((Method) obj).getName(), ((Method) obj2).getName());
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public a(Class jClass) {
            super(null);
            Intrinsics.checkNotNullParameter(jClass, "jClass");
            this.f24573a = jClass;
            Method[] declaredMethods = jClass.getDeclaredMethods();
            Intrinsics.checkNotNullExpressionValue(declaredMethods, "getDeclaredMethods(...)");
            this.f24574b = kotlin.collections.i.F0(declaredMethods, new C0326a());
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final CharSequence c(Method method) {
            Class<?> returnType = method.getReturnType();
            Intrinsics.checkNotNullExpressionValue(returnType, "getReturnType(...)");
            return ReflectClassUtilKt.getDesc(returnType);
        }

        @Override // fs.n
        public String a() {
            return CollectionsKt.x0(this.f24574b, "", "<init>(", ")V", 0, null, m.f24569d, 24, null);
        }

        public final List d() {
            return this.f24574b;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class b extends n {

        /* renamed from: a  reason: collision with root package name */
        private final Constructor f24575a;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public b(Constructor constructor) {
            super(null);
            Intrinsics.checkNotNullParameter(constructor, "constructor");
            this.f24575a = constructor;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final CharSequence c(Class cls) {
            Intrinsics.checkNotNull(cls);
            return ReflectClassUtilKt.getDesc(cls);
        }

        @Override // fs.n
        public String a() {
            Class<?>[] parameterTypes = this.f24575a.getParameterTypes();
            Intrinsics.checkNotNullExpressionValue(parameterTypes, "getParameterTypes(...)");
            return kotlin.collections.i.v0(parameterTypes, "", "<init>(", ")V", 0, null, o.f24584d, 24, null);
        }

        public final Constructor d() {
            return this.f24575a;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class c extends n {

        /* renamed from: a  reason: collision with root package name */
        private final Method f24576a;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public c(Method method) {
            super(null);
            Intrinsics.checkNotNullParameter(method, "method");
            this.f24576a = method;
        }

        @Override // fs.n
        public String a() {
            String d10;
            d10 = g3.d(this.f24576a);
            return d10;
        }

        public final Method b() {
            return this.f24576a;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class d extends n {

        /* renamed from: a  reason: collision with root package name */
        private final JvmMemberSignature.Method f24577a;

        /* renamed from: b  reason: collision with root package name */
        private final String f24578b;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public d(JvmMemberSignature.Method signature) {
            super(null);
            Intrinsics.checkNotNullParameter(signature, "signature");
            this.f24577a = signature;
            this.f24578b = signature.asString();
        }

        @Override // fs.n
        public String a() {
            return this.f24578b;
        }

        public final String b() {
            return this.f24577a.getDesc();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class e extends n {

        /* renamed from: a  reason: collision with root package name */
        private final JvmMemberSignature.Method f24579a;

        /* renamed from: b  reason: collision with root package name */
        private final String f24580b;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public e(JvmMemberSignature.Method signature) {
            super(null);
            Intrinsics.checkNotNullParameter(signature, "signature");
            this.f24579a = signature;
            this.f24580b = signature.asString();
        }

        @Override // fs.n
        public String a() {
            return this.f24580b;
        }

        public final String b() {
            return this.f24579a.getDesc();
        }

        public final String c() {
            return this.f24579a.getName();
        }
    }

    public /* synthetic */ n(DefaultConstructorMarker defaultConstructorMarker) {
        this();
    }

    public abstract String a();

    private n() {
    }
}
