package androidx.camera.camera2.internal.compat.quirk;

import a0.y1;
import android.os.Build;
import java.util.Arrays;
import java.util.List;
import java.util.Locale;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class InvalidVideoProfilesQuirk implements y1 {

    /* renamed from: a  reason: collision with root package name */
    private static final List f2367a = Arrays.asList("pixel 4", "pixel 4a", "pixel 4a (5g)", "pixel 4 xl", "pixel 5", "pixel 5a", "pixel 6", "pixel 6a", "pixel 6 pro", "pixel 7", "pixel 7 pro");

    /* renamed from: b  reason: collision with root package name */
    private static final List f2368b = Arrays.asList("cph2417", "cph2451");

    /* renamed from: c  reason: collision with root package name */
    private static final List f2369c = Arrays.asList("cph2437", "cph2525", "pht110");

    private static boolean c() {
        if (Build.VERSION.SDK_INT == 33) {
            return true;
        }
        return false;
    }

    private static boolean d() {
        if (e() && c()) {
            return true;
        }
        return false;
    }

    private static boolean e() {
        return f2368b.contains(Build.MODEL.toLowerCase(Locale.ROOT));
    }

    private static boolean f() {
        if (g() && c()) {
            return true;
        }
        return false;
    }

    private static boolean g() {
        return f2369c.contains(Build.MODEL.toLowerCase(Locale.ROOT));
    }

    private static boolean h() {
        if (!o() && !m()) {
            return false;
        }
        return true;
    }

    private static boolean i() {
        if (j() && h()) {
            return true;
        }
        return false;
    }

    private static boolean j() {
        return f2367a.contains(Build.MODEL.toLowerCase(Locale.ROOT));
    }

    private static boolean k() {
        if ("samsung".equalsIgnoreCase(Build.BRAND) && o()) {
            return true;
        }
        return false;
    }

    private static boolean l() {
        String str = Build.BRAND;
        if ("redmi".equalsIgnoreCase(str) || "xiaomi".equalsIgnoreCase(str)) {
            if (!n() && !o()) {
                return false;
            }
            return true;
        }
        return false;
    }

    private static boolean m() {
        return Build.ID.toLowerCase(Locale.ROOT).startsWith("td1a");
    }

    private static boolean n() {
        return Build.ID.toLowerCase(Locale.ROOT).startsWith("tkq1");
    }

    private static boolean o() {
        return Build.ID.toLowerCase(Locale.ROOT).startsWith("tp1a");
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static boolean p() {
        if (!k() && !i() && !l() && !d() && !f()) {
            return false;
        }
        return true;
    }
}
