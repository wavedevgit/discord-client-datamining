package c4;

import android.os.Build;
import android.os.Trace;
import android.util.Log;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class a {

    /* renamed from: a  reason: collision with root package name */
    private static long f7378a;

    /* renamed from: b  reason: collision with root package name */
    private static Method f7379b;

    /* renamed from: c  reason: collision with root package name */
    private static Method f7380c;

    /* renamed from: d  reason: collision with root package name */
    private static Method f7381d;

    /* renamed from: e  reason: collision with root package name */
    private static Method f7382e;

    public static void a(String str, int i10) {
        if (Build.VERSION.SDK_INT >= 29) {
            c.a(l(str), i10);
        } else {
            b(l(str), i10);
        }
    }

    private static void b(String str, int i10) {
        try {
            if (f7380c == null) {
                f7380c = Trace.class.getMethod("asyncTraceBegin", Long.TYPE, String.class, Integer.TYPE);
            }
            f7380c.invoke(null, Long.valueOf(f7378a), str, Integer.valueOf(i10));
        } catch (Exception e10) {
            g("asyncTraceBegin", e10);
        }
    }

    public static void c(String str) {
        b.a(l(str));
    }

    public static void d(String str, int i10) {
        if (Build.VERSION.SDK_INT >= 29) {
            c.b(l(str), i10);
        } else {
            e(l(str), i10);
        }
    }

    private static void e(String str, int i10) {
        try {
            if (f7381d == null) {
                f7381d = Trace.class.getMethod("asyncTraceEnd", Long.TYPE, String.class, Integer.TYPE);
            }
            f7381d.invoke(null, Long.valueOf(f7378a), str, Integer.valueOf(i10));
        } catch (Exception e10) {
            g("asyncTraceEnd", e10);
        }
    }

    public static void f() {
        b.b();
    }

    private static void g(String str, Exception exc) {
        if (exc instanceof InvocationTargetException) {
            Throwable cause = exc.getCause();
            if (cause instanceof RuntimeException) {
                throw ((RuntimeException) cause);
            }
            throw new RuntimeException(cause);
        }
        Log.v("Trace", "Unable to call " + str + " via reflection", exc);
    }

    public static boolean h() {
        if (Build.VERSION.SDK_INT >= 29) {
            return c.c();
        }
        return i();
    }

    private static boolean i() {
        try {
            if (f7379b == null) {
                f7378a = Trace.class.getField("TRACE_TAG_APP").getLong(null);
                f7379b = Trace.class.getMethod("isTagEnabled", Long.TYPE);
            }
            return ((Boolean) f7379b.invoke(null, Long.valueOf(f7378a))).booleanValue();
        } catch (Exception e10) {
            g("isTagEnabled", e10);
            return false;
        }
    }

    public static void j(String str, int i10) {
        if (Build.VERSION.SDK_INT >= 29) {
            c.d(l(str), i10);
        } else {
            k(l(str), i10);
        }
    }

    private static void k(String str, int i10) {
        try {
            if (f7382e == null) {
                f7382e = Trace.class.getMethod("traceCounter", Long.TYPE, String.class, Integer.TYPE);
            }
            f7382e.invoke(null, Long.valueOf(f7378a), str, Integer.valueOf(i10));
        } catch (Exception e10) {
            g("traceCounter", e10);
        }
    }

    private static String l(String str) {
        if (str.length() <= 127) {
            return str;
        }
        return str.substring(0, 127);
    }
}
