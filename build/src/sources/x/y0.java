package x;

import android.os.Build;
import android.util.Log;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class y0 {

    /* renamed from: a  reason: collision with root package name */
    private static int f53574a = 3;

    public static void a(String str, String str2) {
        String k10 = k(str);
        if (g(k10, 3)) {
            Log.d(k10, str2);
        }
    }

    public static void b(String str, String str2, Throwable th2) {
        String k10 = k(str);
        if (g(k10, 3)) {
            Log.d(k10, str2, th2);
        }
    }

    public static void c(String str, String str2) {
        String k10 = k(str);
        if (g(k10, 6)) {
            Log.e(k10, str2);
        }
    }

    public static void d(String str, String str2, Throwable th2) {
        String k10 = k(str);
        if (g(k10, 6)) {
            Log.e(k10, str2, th2);
        }
    }

    public static void e(String str, String str2) {
        String k10 = k(str);
        if (g(k10, 4)) {
            Log.i(k10, str2);
        }
    }

    public static boolean f(String str) {
        return g(k(str), 3);
    }

    private static boolean g(String str, int i10) {
        if (f53574a > i10 && !Log.isLoggable(str, i10)) {
            return false;
        }
        return true;
    }

    public static boolean h(String str) {
        return g(k(str), 2);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static void i() {
        f53574a = 3;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static void j(int i10) {
        f53574a = i10;
    }

    private static String k(String str) {
        if (Build.VERSION.SDK_INT <= 25 && 23 < str.length()) {
            return str.substring(0, 23);
        }
        return str;
    }

    public static void l(String str, String str2) {
        String k10 = k(str);
        if (g(k10, 5)) {
            Log.w(k10, str2);
        }
    }

    public static void m(String str, String str2, Throwable th2) {
        String k10 = k(str);
        if (g(k10, 5)) {
            Log.w(k10, str2, th2);
        }
    }
}
