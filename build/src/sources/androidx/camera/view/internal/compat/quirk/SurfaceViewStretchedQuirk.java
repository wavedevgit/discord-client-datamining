package androidx.camera.view.internal.compat.quirk;

import a0.y1;
import android.os.Build;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class SurfaceViewStretchedQuirk implements y1 {
    private static boolean c() {
        if ("LENOVO".equalsIgnoreCase(Build.MANUFACTURER) && "Q706F".equalsIgnoreCase(Build.DEVICE)) {
            return true;
        }
        return false;
    }

    private static boolean d() {
        if ("OPPO".equalsIgnoreCase(Build.MANUFACTURER) && "OP4E75L1".equalsIgnoreCase(Build.DEVICE)) {
            return true;
        }
        return false;
    }

    private static boolean e() {
        if ("SAMSUNG".equalsIgnoreCase(Build.MANUFACTURER)) {
            String str = Build.DEVICE;
            if ("F2Q".equalsIgnoreCase(str) || "Q2Q".equalsIgnoreCase(str)) {
                return true;
            }
            return false;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static boolean f() {
        if (Build.VERSION.SDK_INT < 33) {
            if (e() || d() || c()) {
                return true;
            }
            return false;
        }
        return false;
    }
}
