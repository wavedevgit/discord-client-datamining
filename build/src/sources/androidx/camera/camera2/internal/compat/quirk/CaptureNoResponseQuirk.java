package androidx.camera.camera2.internal.compat.quirk;

import a0.y1;
import android.hardware.camera2.CameraCharacteristics;
import android.os.Build;
import r.a0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class CaptureNoResponseQuirk implements y1 {
    /* JADX INFO: Access modifiers changed from: package-private */
    public static boolean c(a0 a0Var) {
        String str = Build.HARDWARE;
        if (("samsungexynos7420".equalsIgnoreCase(str) || "universal7420".equalsIgnoreCase(str)) && ((Integer) a0Var.a(CameraCharacteristics.LENS_FACING)).intValue() == 1) {
            return true;
        }
        return false;
    }
}
