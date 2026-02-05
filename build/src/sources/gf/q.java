package gf;

import android.os.Handler;
import android.os.Looper;
import android.text.TextUtils;
import java.util.Objects;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class q {
    public static void a(boolean z10) {
        if (z10) {
            return;
        }
        throw new IllegalArgumentException();
    }

    public static void b(boolean z10, Object obj) {
        if (z10) {
            return;
        }
        throw new IllegalArgumentException(String.valueOf(obj));
    }

    public static void c(boolean z10, String str, Object... objArr) {
        if (z10) {
            return;
        }
        throw new IllegalArgumentException(String.format(str, objArr));
    }

    public static void d(Handler handler) {
        String str;
        Looper myLooper = Looper.myLooper();
        if (myLooper != handler.getLooper()) {
            if (myLooper != null) {
                str = myLooper.getThread().getName();
            } else {
                str = "null current looper";
            }
            String name = handler.getLooper().getThread().getName();
            StringBuilder sb2 = new StringBuilder(String.valueOf(name).length() + 35 + String.valueOf(str).length() + 1);
            sb2.append("Must be called on ");
            sb2.append(name);
            sb2.append(" thread, but got ");
            sb2.append(str);
            sb2.append(".");
            throw new IllegalStateException(sb2.toString());
        }
    }

    public static void e(String str) {
        if (com.google.android.gms.common.util.s.a()) {
            return;
        }
        throw new IllegalStateException(str);
    }

    public static String f(String str) {
        if (!TextUtils.isEmpty(str)) {
            return str;
        }
        throw new IllegalArgumentException("Given String is empty or null");
    }

    public static String g(String str, Object obj) {
        if (!TextUtils.isEmpty(str)) {
            return str;
        }
        throw new IllegalArgumentException(String.valueOf(obj));
    }

    public static void h() {
        i("Must not be called on GoogleApiHandler thread.");
    }

    public static void i(String str) {
        Looper myLooper = Looper.myLooper();
        if (myLooper != null && Objects.equals(myLooper.getThread().getName(), "GoogleApiHandler")) {
            throw new IllegalStateException(str);
        }
    }

    public static void j() {
        k("Must not be called on the main application thread");
    }

    public static void k(String str) {
        if (!com.google.android.gms.common.util.s.a()) {
            return;
        }
        throw new IllegalStateException(str);
    }

    public static Object l(Object obj) {
        if (obj != null) {
            return obj;
        }
        throw new NullPointerException("null reference");
    }

    public static Object m(Object obj, Object obj2) {
        if (obj != null) {
            return obj;
        }
        throw new NullPointerException(String.valueOf(obj2));
    }

    public static void n(boolean z10) {
        if (z10) {
            return;
        }
        throw new IllegalStateException();
    }

    public static void o(boolean z10, Object obj) {
        if (z10) {
            return;
        }
        throw new IllegalStateException(String.valueOf(obj));
    }
}
