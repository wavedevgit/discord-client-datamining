package q;

import a0.m;
import android.hardware.camera2.CameraCaptureSession;
import android.hardware.camera2.CaptureFailure;
import android.hardware.camera2.CaptureRequest;
import android.hardware.camera2.TotalCaptureResult;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
final class p2 extends CameraCaptureSession.CaptureCallback {

    /* renamed from: a  reason: collision with root package name */
    private final a0.k f46951a;

    /* JADX INFO: Access modifiers changed from: package-private */
    public p2(a0.k kVar) {
        if (kVar != null) {
            this.f46951a = kVar;
            return;
        }
        throw new NullPointerException("cameraCaptureCallback is null");
    }

    private int a(CaptureRequest captureRequest) {
        Integer num;
        if (!(captureRequest.getTag() instanceof a0.q2) || (num = (Integer) ((a0.q2) captureRequest.getTag()).d("CAPTURE_CONFIG_ID_KEY")) == null) {
            return -1;
        }
        return num.intValue();
    }

    @Override // android.hardware.camera2.CameraCaptureSession.CaptureCallback
    public void onCaptureCompleted(CameraCaptureSession cameraCaptureSession, CaptureRequest captureRequest, TotalCaptureResult totalCaptureResult) {
        a0.q2 b10;
        super.onCaptureCompleted(cameraCaptureSession, captureRequest, totalCaptureResult);
        Object tag = captureRequest.getTag();
        if (tag != null) {
            b2.e.b(tag instanceof a0.q2, "The tagBundle object from the CaptureResult is not a TagBundle object.");
            b10 = (a0.q2) tag;
        } else {
            b10 = a0.q2.b();
        }
        this.f46951a.b(a(captureRequest), new g(b10, totalCaptureResult));
    }

    @Override // android.hardware.camera2.CameraCaptureSession.CaptureCallback
    public void onCaptureFailed(CameraCaptureSession cameraCaptureSession, CaptureRequest captureRequest, CaptureFailure captureFailure) {
        super.onCaptureFailed(cameraCaptureSession, captureRequest, captureFailure);
        this.f46951a.c(a(captureRequest), new a0.m(m.a.ERROR));
    }

    @Override // android.hardware.camera2.CameraCaptureSession.CaptureCallback
    public void onCaptureStarted(CameraCaptureSession cameraCaptureSession, CaptureRequest captureRequest, long j10, long j11) {
        super.onCaptureStarted(cameraCaptureSession, captureRequest, j10, j11);
        this.f46951a.d(a(captureRequest));
    }
}
