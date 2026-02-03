package r;

import android.hardware.camera2.CameraCaptureSession;
import android.hardware.camera2.CaptureRequest;
import java.util.List;
import java.util.concurrent.Executor;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class v extends w {
    /* JADX INFO: Access modifiers changed from: package-private */
    public v(CameraCaptureSession cameraCaptureSession) {
        super(cameraCaptureSession, null);
    }

    @Override // r.w, r.g.a
    public int b(List list, Executor executor, CameraCaptureSession.CaptureCallback captureCallback) {
        return this.f48299a.captureBurstRequests(list, executor, captureCallback);
    }

    @Override // r.w, r.g.a
    public int c(CaptureRequest captureRequest, Executor executor, CameraCaptureSession.CaptureCallback captureCallback) {
        return this.f48299a.setSingleRepeatingRequest(captureRequest, executor, captureCallback);
    }
}
