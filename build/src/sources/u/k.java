package u;

import android.hardware.camera2.CaptureRequest;
import androidx.camera.camera2.internal.compat.quirk.ImageCapturePixelHDRPlusQuirk;
import p.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class k {
    public void a(int i10, a.C0564a c0564a) {
        CaptureRequest.Key key;
        CaptureRequest.Key key2;
        if (((ImageCapturePixelHDRPlusQuirk) androidx.camera.camera2.internal.compat.quirk.b.b(ImageCapturePixelHDRPlusQuirk.class)) != null) {
            if (i10 == 0) {
                key = CaptureRequest.CONTROL_ENABLE_ZSL;
                c0564a.f(key, Boolean.TRUE);
            } else if (i10 == 1) {
                key2 = CaptureRequest.CONTROL_ENABLE_ZSL;
                c0564a.f(key2, Boolean.FALSE);
            }
        }
    }
}
