package androidx.camera.camera2.internal.compat.quirk;

import a0.y1;
import android.os.Build;
import java.util.Locale;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class StillCaptureFlashStopRepeatingQuirk implements y1 {
    /* JADX INFO: Access modifiers changed from: package-private */
    public static boolean c() {
        String str = Build.MANUFACTURER;
        Locale locale = Locale.US;
        if ("SAMSUNG".equals(str.toUpperCase(locale)) && Build.MODEL.toUpperCase(locale).startsWith("SM-A716")) {
            return true;
        }
        return false;
    }
}
