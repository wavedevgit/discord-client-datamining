package r;

import android.content.Context;
import android.hardware.camera2.CameraAccessException;
import java.util.Set;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class q0 extends p0 {
    /* JADX INFO: Access modifiers changed from: package-private */
    public q0(Context context) {
        super(context);
    }

    @Override // r.r0, r.n0.b
    public Set c() {
        try {
            return this.f48280a.getConcurrentCameraIds();
        } catch (CameraAccessException e10) {
            throw f.e(e10);
        }
    }
}
