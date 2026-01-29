package h0;

import a0.p0;
import androidx.camera.core.internal.compat.quirk.ImageCaptureRotationOptionQuirk;
import androidx.camera.core.n;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class b {
    public boolean a() {
        ImageCaptureRotationOptionQuirk imageCaptureRotationOptionQuirk = (ImageCaptureRotationOptionQuirk) androidx.camera.core.internal.compat.quirk.a.b(ImageCaptureRotationOptionQuirk.class);
        if (imageCaptureRotationOptionQuirk != null && !imageCaptureRotationOptionQuirk.g(p0.f209i)) {
            return false;
        }
        return true;
    }

    public boolean b(n nVar) {
        if (a() && i0.b.i(nVar.getFormat())) {
            return true;
        }
        return false;
    }
}
