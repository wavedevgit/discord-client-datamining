package androidx.camera.camera2.internal.compat.quirk;

import a0.y1;
import android.os.Build;
import android.util.Size;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class ExtraSupportedOutputSizeQuirk implements y1 {
    private Size[] d() {
        return new Size[]{new Size(1440, 1080), new Size(960, 720)};
    }

    private static boolean e() {
        if ("motorola".equalsIgnoreCase(Build.BRAND) && "moto e5 play".equalsIgnoreCase(Build.MODEL)) {
            return true;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static boolean f() {
        return e();
    }

    public Size[] c(int i10) {
        if (i10 == 34 && e()) {
            return d();
        }
        return new Size[0];
    }
}
