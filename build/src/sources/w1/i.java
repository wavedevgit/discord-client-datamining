package w1;

import android.os.Build;
import android.os.Trace;
import android.util.Log;
import java.lang.reflect.Method;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class i {

    /* renamed from: a  reason: collision with root package name */
    private static long f52049a;

    /* renamed from: b  reason: collision with root package name */
    private static Method f52050b;

    /* renamed from: c  reason: collision with root package name */
    private static Method f52051c;

    /* renamed from: d  reason: collision with root package name */
    private static Method f52052d;

    /* renamed from: e  reason: collision with root package name */
    private static Method f52053e;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static class a {
        static boolean a() {
            return Trace.isEnabled();
        }
    }

    static {
        if (Build.VERSION.SDK_INT < 29) {
            try {
                f52049a = Trace.class.getField("TRACE_TAG_APP").getLong(null);
                Class cls = Long.TYPE;
                f52050b = Trace.class.getMethod("isTagEnabled", cls);
                Class cls2 = Integer.TYPE;
                f52051c = Trace.class.getMethod("asyncTraceBegin", cls, String.class, cls2);
                f52052d = Trace.class.getMethod("asyncTraceEnd", cls, String.class, cls2);
                f52053e = Trace.class.getMethod("traceCounter", cls, String.class, cls2);
            } catch (Exception e10) {
                Log.i("TraceCompat", "Unable to initialize via reflection.", e10);
            }
        }
    }

    public static void a(String str) {
        Trace.beginSection(str);
    }

    public static void b() {
        Trace.endSection();
    }

    public static boolean c() {
        if (Build.VERSION.SDK_INT >= 29) {
            return a.a();
        }
        try {
            return ((Boolean) f52050b.invoke(null, Long.valueOf(f52049a))).booleanValue();
        } catch (Exception unused) {
            Log.v("TraceCompat", "Unable to invoke isTagEnabled() via reflection.");
            return false;
        }
    }
}
