package r;

import android.hardware.camera2.CameraAccessException;
import android.hardware.camera2.CameraDevice;
import android.hardware.camera2.params.InputConfiguration;
import android.os.Handler;
import java.util.List;
import r.g;
import r.j0;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class h0 extends g0 {
    /* JADX INFO: Access modifiers changed from: package-private */
    public h0(CameraDevice cameraDevice, Object obj) {
        super(cameraDevice, obj);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static h0 e(CameraDevice cameraDevice, Handler handler) {
        return new h0(cameraDevice, new j0.a(handler));
    }

    @Override // r.b0.a
    public void a(s.p pVar) {
        j0.c(this.f47717a, pVar);
        g.c cVar = new g.c(pVar.a(), pVar.e());
        List c10 = pVar.c();
        Handler handler = ((j0.a) b2.e.g((j0.a) this.f47718b)).f47719a;
        s.i b10 = pVar.b();
        try {
            if (b10 != null) {
                InputConfiguration inputConfiguration = (InputConfiguration) b10.a();
                b2.e.g(inputConfiguration);
                this.f47717a.createReprocessableCaptureSessionByConfigurations(inputConfiguration, s.p.h(c10), cVar, handler);
            } else if (pVar.d() == 1) {
                this.f47717a.createConstrainedHighSpeedCaptureSession(j0.d(c10), cVar, handler);
            } else {
                this.f47717a.createCaptureSessionByOutputConfigurations(s.p.h(c10), cVar, handler);
            }
        } catch (CameraAccessException e10) {
            throw f.e(e10);
        }
    }
}
