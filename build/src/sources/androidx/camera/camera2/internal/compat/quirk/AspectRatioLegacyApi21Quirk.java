package androidx.camera.camera2.internal.compat.quirk;

import a0.y1;
import android.hardware.camera2.CameraCharacteristics;
import r.a0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class AspectRatioLegacyApi21Quirk implements y1 {
    /* JADX INFO: Access modifiers changed from: package-private */
    public static boolean d(a0 a0Var) {
        Integer num = (Integer) a0Var.a(CameraCharacteristics.INFO_SUPPORTED_HARDWARE_LEVEL);
        return false;
    }

    public int c() {
        return 2;
    }
}
