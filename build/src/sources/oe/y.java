package oe;

import android.text.TextUtils;
import android.util.Log;
import com.facebook.react.views.textinput.ReactEditTextInputConnectionWrapper;
import java.net.UnknownHostException;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class y {

    /* renamed from: b  reason: collision with root package name */
    private static int f39635b = 0;

    /* renamed from: c  reason: collision with root package name */
    private static boolean f39636c = true;

    /* renamed from: a  reason: collision with root package name */
    private static final Object f39634a = new Object();

    /* renamed from: d  reason: collision with root package name */
    private static a f39637d = a.f39638a;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface a {

        /* renamed from: a  reason: collision with root package name */
        public static final a f39638a = new C0550a();

        /* renamed from: oe.y$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        class C0550a implements a {
            C0550a() {
            }

            @Override // oe.y.a
            public void d(String str, String str2) {
                Log.d(str, str2);
            }

            @Override // oe.y.a
            public void e(String str, String str2) {
                Log.e(str, str2);
            }

            @Override // oe.y.a
            public void i(String str, String str2) {
                Log.i(str, str2);
            }

            @Override // oe.y.a
            public void w(String str, String str2) {
                Log.w(str, str2);
            }
        }

        void d(String str, String str2);

        void e(String str, String str2);

        void i(String str, String str2);

        void w(String str, String str2);
    }

    private static String a(String str, Throwable th2) {
        String e10 = e(th2);
        if (!TextUtils.isEmpty(e10)) {
            return str + "\n  " + e10.replace(ReactEditTextInputConnectionWrapper.NEWLINE_RAW_VALUE, "\n  ") + '\n';
        }
        return str;
    }

    public static void b(String str, String str2) {
        synchronized (f39634a) {
            try {
                if (f39635b == 0) {
                    f39637d.d(str, str2);
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    public static void c(String str, String str2) {
        synchronized (f39634a) {
            try {
                if (f39635b <= 3) {
                    f39637d.e(str, str2);
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    public static void d(String str, String str2, Throwable th2) {
        c(str, a(str2, th2));
    }

    public static String e(Throwable th2) {
        synchronized (f39634a) {
            try {
                if (th2 == null) {
                    return null;
                }
                if (h(th2)) {
                    return "UnknownHostException (no network)";
                }
                if (!f39636c) {
                    return th2.getMessage();
                }
                return Log.getStackTraceString(th2).trim().replace("\t", "    ");
            } catch (Throwable th3) {
                throw th3;
            }
        }
    }

    public static void f(String str, String str2) {
        synchronized (f39634a) {
            try {
                if (f39635b <= 1) {
                    f39637d.i(str, str2);
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    public static void g(String str, String str2, Throwable th2) {
        f(str, a(str2, th2));
    }

    private static boolean h(Throwable th2) {
        while (th2 != null) {
            if (th2 instanceof UnknownHostException) {
                return true;
            }
            th2 = th2.getCause();
        }
        return false;
    }

    public static void i(String str, String str2) {
        synchronized (f39634a) {
            try {
                if (f39635b <= 2) {
                    f39637d.w(str, str2);
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    public static void j(String str, String str2, Throwable th2) {
        i(str, a(str2, th2));
    }
}
