package ii;

import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class s {

    /* renamed from: a  reason: collision with root package name */
    private static final Object f28434a;

    /* renamed from: b  reason: collision with root package name */
    private static final Method f28435b;

    /* renamed from: c  reason: collision with root package name */
    private static final Method f28436c;

    static {
        Method a10;
        Object b10 = b();
        f28434a = b10;
        Method method = null;
        if (b10 == null) {
            a10 = null;
        } else {
            a10 = a();
        }
        f28435b = a10;
        if (b10 != null) {
            method = d(b10);
        }
        f28436c = method;
    }

    private static Method a() {
        return c("getStackTraceElement", Throwable.class, Integer.TYPE);
    }

    private static Object b() {
        try {
            return Class.forName("sun.misc.SharedSecrets", false, null).getMethod("getJavaLangAccess", null).invoke(null, null);
        } catch (ThreadDeath e10) {
            throw e10;
        } catch (Throwable unused) {
            return null;
        }
    }

    private static Method c(String str, Class... clsArr) {
        try {
            return Class.forName("sun.misc.JavaLangAccess", false, null).getMethod(str, clsArr);
        } catch (ThreadDeath e10) {
            throw e10;
        } catch (Throwable unused) {
            return null;
        }
    }

    private static Method d(Object obj) {
        try {
            Method c10 = c("getStackTraceDepth", Throwable.class);
            if (c10 == null) {
                return null;
            }
            c10.invoke(obj, new Throwable());
            return c10;
        } catch (IllegalAccessException | UnsupportedOperationException | InvocationTargetException unused) {
            return null;
        }
    }

    public static void e(Throwable th2) {
        m.j(th2);
        if (!(th2 instanceof RuntimeException)) {
            if (!(th2 instanceof Error)) {
                return;
            }
            throw ((Error) th2);
        }
        throw ((RuntimeException) th2);
    }
}
