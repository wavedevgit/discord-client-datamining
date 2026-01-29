package androidx.camera.core.internal.compat.quirk;

import a0.p0;
import a0.r0;
import a0.y1;
import android.os.Build;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class ImageCaptureRotationOptionQuirk implements y1 {
    private static boolean c() {
        String str = Build.FINGERPRINT;
        if (!str.startsWith("generic") && !str.startsWith("unknown")) {
            String str2 = Build.MODEL;
            if (!str2.contains("google_sdk") && !str2.contains("Emulator") && !str2.contains("Cuttlefish") && !str2.contains("Android SDK built for x86") && !Build.MANUFACTURER.contains("Genymotion")) {
                if ((!Build.BRAND.startsWith("generic") || !Build.DEVICE.startsWith("generic")) && !Build.PRODUCT.equals("google_sdk") && !Build.HARDWARE.contains("ranchu")) {
                    return false;
                }
                return true;
            }
            return true;
        }
        return true;
    }

    private static boolean d() {
        c();
        return false;
    }

    private static boolean e() {
        if ("HONOR".equalsIgnoreCase(Build.BRAND) && "STK-LX1".equalsIgnoreCase(Build.MODEL)) {
            return true;
        }
        return false;
    }

    private static boolean f() {
        if ("HUAWEI".equalsIgnoreCase(Build.BRAND) && "SNE-LX1".equalsIgnoreCase(Build.MODEL)) {
            return true;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static boolean h() {
        if (!f() && !e() && !d()) {
            return false;
        }
        return true;
    }

    public boolean g(r0.a aVar) {
        if (aVar != p0.f209i) {
            return true;
        }
        return false;
    }
}
