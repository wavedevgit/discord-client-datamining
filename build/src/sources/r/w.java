package r;

import android.hardware.camera2.CameraCaptureSession;
import android.hardware.camera2.CaptureRequest;
import android.os.Handler;
import java.util.List;
import java.util.concurrent.Executor;
import r.g;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class w implements g.a {

    /* renamed from: a  reason: collision with root package name */
    final CameraCaptureSession f47772a;

    /* renamed from: b  reason: collision with root package name */
    final Object f47773b;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class a {

        /* renamed from: a  reason: collision with root package name */
        final Handler f47774a;

        a(Handler handler) {
            this.f47774a = handler;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public w(CameraCaptureSession cameraCaptureSession, Object obj) {
        this.f47772a = (CameraCaptureSession) b2.e.g(cameraCaptureSession);
        this.f47773b = obj;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static g.a d(CameraCaptureSession cameraCaptureSession, Handler handler) {
        return new w(cameraCaptureSession, new a(handler));
    }

    @Override // r.g.a
    public CameraCaptureSession a() {
        return this.f47772a;
    }

    @Override // r.g.a
    public int b(List list, Executor executor, CameraCaptureSession.CaptureCallback captureCallback) {
        return this.f47772a.captureBurst(list, new g.b(executor, captureCallback), ((a) this.f47773b).f47774a);
    }

    @Override // r.g.a
    public int c(CaptureRequest captureRequest, Executor executor, CameraCaptureSession.CaptureCallback captureCallback) {
        return this.f47772a.setRepeatingRequest(captureRequest, new g.b(executor, captureCallback), ((a) this.f47773b).f47774a);
    }
}
