package androidx.camera.camera2.internal.compat.quirk;

import a0.y1;
import android.os.Build;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class CaptureSessionShouldUseMrirQuirk implements y1 {
    /* JADX INFO: Access modifiers changed from: package-private */
    public static boolean c() {
        if ("google".equalsIgnoreCase(Build.BRAND) && Build.VERSION.SDK_INT >= 35) {
            return true;
        }
        return false;
    }
}
