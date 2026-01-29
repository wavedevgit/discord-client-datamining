package androidx.camera.camera2.internal.compat.quirk;

import a0.y1;
import android.hardware.camera2.CameraCharacteristics;
import android.os.Build;
import r.a0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class LegacyCameraSurfaceCleanupQuirk implements y1 {
    static boolean c(a0 a0Var) {
        Integer num = (Integer) a0Var.a(CameraCharacteristics.INFO_SUPPORTED_HARDWARE_LEVEL);
        if (num != null && num.intValue() == 2) {
            return true;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static boolean d(a0 a0Var) {
        if (Build.VERSION.SDK_INT < 29 && c(a0Var)) {
            return true;
        }
        return false;
    }
}
