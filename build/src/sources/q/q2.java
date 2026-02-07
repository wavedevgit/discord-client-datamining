package q;

import android.hardware.camera2.CameraCaptureSession;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
final class q2 extends a0.k {

    /* renamed from: a  reason: collision with root package name */
    private final CameraCaptureSession.CaptureCallback f46120a;

    private q2(CameraCaptureSession.CaptureCallback captureCallback) {
        if (captureCallback != null) {
            this.f46120a = captureCallback;
            return;
        }
        throw new NullPointerException("captureCallback is null");
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static q2 e(CameraCaptureSession.CaptureCallback captureCallback) {
        return new q2(captureCallback);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public CameraCaptureSession.CaptureCallback f() {
        return this.f46120a;
    }
}
