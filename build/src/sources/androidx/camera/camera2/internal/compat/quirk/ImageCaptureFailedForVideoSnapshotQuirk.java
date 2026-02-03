package androidx.camera.camera2.internal.compat.quirk;

import a0.y1;
import android.os.Build;
import java.util.Arrays;
import java.util.HashSet;
import java.util.Locale;
import java.util.Set;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class ImageCaptureFailedForVideoSnapshotQuirk implements y1 {

    /* renamed from: a  reason: collision with root package name */
    private static final Set f1920a = new HashSet(Arrays.asList("itel l6006", "itel w6004", "moto g(20)", "moto e13", "moto e20", "rmx3231", "rmx3511", "sm-a032f", "sm-a035m", "tecno mobile bf6"));

    private static boolean c() {
        if ("HUAWEI".equalsIgnoreCase(Build.BRAND) && "FIG-LX1".equalsIgnoreCase(Build.MODEL)) {
            return true;
        }
        return false;
    }

    private static boolean d() {
        String str;
        Set set = f1920a;
        String str2 = Build.MODEL;
        Locale locale = Locale.US;
        if (!set.contains(str2.toLowerCase(locale))) {
            if (Build.VERSION.SDK_INT >= 31) {
                str = Build.SOC_MANUFACTURER;
                if ("Spreadtrum".equalsIgnoreCase(str)) {
                    return true;
                }
            }
            String str3 = Build.HARDWARE;
            if (!str3.toLowerCase(locale).startsWith("ums")) {
                if (!"itel".equalsIgnoreCase(Build.BRAND) || !str3.toLowerCase(locale).startsWith("sp")) {
                    return false;
                }
                return true;
            }
            return true;
        }
        return true;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static boolean e() {
        if (!d() && !c()) {
            return false;
        }
        return true;
    }
}
