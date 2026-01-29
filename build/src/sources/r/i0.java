package r;

import android.hardware.camera2.CameraAccessException;
import android.hardware.camera2.CameraDevice;
import android.hardware.camera2.params.SessionConfiguration;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class i0 extends h0 {
    /* JADX INFO: Access modifiers changed from: package-private */
    public i0(CameraDevice cameraDevice) {
        super((CameraDevice) b2.e.g(cameraDevice), null);
    }

    @Override // r.h0, r.b0.a
    public void a(s.p pVar) {
        SessionConfiguration sessionConfiguration = (SessionConfiguration) pVar.j();
        b2.e.g(sessionConfiguration);
        try {
            this.f47717a.createCaptureSession(sessionConfiguration);
        } catch (CameraAccessException e10) {
            throw f.e(e10);
        }
    }
}
