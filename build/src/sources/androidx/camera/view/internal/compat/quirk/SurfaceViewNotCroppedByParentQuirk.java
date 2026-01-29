package androidx.camera.view.internal.compat.quirk;

import a0.y1;
import android.os.Build;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class SurfaceViewNotCroppedByParentQuirk implements y1 {
    /* JADX INFO: Access modifiers changed from: package-private */
    public static boolean c() {
        if ("XIAOMI".equalsIgnoreCase(Build.MANUFACTURER) && "M2101K7AG".equalsIgnoreCase(Build.MODEL)) {
            return true;
        }
        return false;
    }
}
