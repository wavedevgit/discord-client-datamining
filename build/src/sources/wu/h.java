package wu;

import java.lang.reflect.Method;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class h {

    /* renamed from: d  reason: collision with root package name */
    public static final a f54568d = new a(null);

    /* renamed from: a  reason: collision with root package name */
    private final Method f54569a;

    /* renamed from: b  reason: collision with root package name */
    private final Method f54570b;

    /* renamed from: c  reason: collision with root package name */
    private final Method f54571c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final h a() {
            Method method;
            Method method2;
            Method method3 = null;
            try {
                Class<?> cls = Class.forName("dalvik.system.CloseGuard");
                Method method4 = cls.getMethod("get", null);
                method2 = cls.getMethod("open", String.class);
                method = cls.getMethod("warnIfOpen", null);
                method3 = method4;
            } catch (Exception unused) {
                method = null;
                method2 = null;
            }
            return new h(method3, method2, method);
        }

        private a() {
        }
    }

    public h(Method method, Method method2, Method method3) {
        this.f54569a = method;
        this.f54570b = method2;
        this.f54571c = method3;
    }

    public final Object a(String closer) {
        Intrinsics.checkNotNullParameter(closer, "closer");
        Method method = this.f54569a;
        if (method != null) {
            try {
                Object invoke = method.invoke(null, null);
                Method method2 = this.f54570b;
                Intrinsics.checkNotNull(method2);
                method2.invoke(invoke, closer);
                return invoke;
            } catch (Exception unused) {
            }
        }
        return null;
    }

    public final boolean b(Object obj) {
        if (obj != null) {
            try {
                Method method = this.f54571c;
                Intrinsics.checkNotNull(method);
                method.invoke(obj, null);
                return true;
            } catch (Exception unused) {
                return false;
            }
        }
        return false;
    }
}
