package q;

import android.hardware.camera2.CameraCaptureSession;
import android.hardware.camera2.CaptureFailure;
import android.hardware.camera2.CaptureRequest;
import android.hardware.camera2.CaptureResult;
import android.hardware.camera2.TotalCaptureResult;
import android.view.Surface;
import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
class i2 extends CameraCaptureSession.CaptureCallback {

    /* renamed from: b  reason: collision with root package name */
    a f46873b = null;

    /* renamed from: a  reason: collision with root package name */
    final Map f46872a = new HashMap();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    interface a {
        void a(CameraCaptureSession cameraCaptureSession, int i10, boolean z10);
    }

    private List b(CaptureRequest captureRequest) {
        List list = (List) this.f46872a.get(captureRequest);
        if (list != null) {
            return list;
        }
        return Collections.EMPTY_LIST;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void a(CaptureRequest captureRequest, List list) {
        List list2 = (List) this.f46872a.get(captureRequest);
        if (list2 != null) {
            ArrayList arrayList = new ArrayList(list.size() + list2.size());
            arrayList.addAll(list);
            arrayList.addAll(list2);
            this.f46872a.put(captureRequest, arrayList);
            return;
        }
        this.f46872a.put(captureRequest, list);
    }

    public void c(a aVar) {
        this.f46873b = aVar;
    }

    @Override // android.hardware.camera2.CameraCaptureSession.CaptureCallback
    public void onCaptureBufferLost(CameraCaptureSession cameraCaptureSession, CaptureRequest captureRequest, Surface surface, long j10) {
        for (CameraCaptureSession.CaptureCallback captureCallback : b(captureRequest)) {
            r.c.a(captureCallback, cameraCaptureSession, captureRequest, surface, j10);
        }
    }

    @Override // android.hardware.camera2.CameraCaptureSession.CaptureCallback
    public void onCaptureCompleted(CameraCaptureSession cameraCaptureSession, CaptureRequest captureRequest, TotalCaptureResult totalCaptureResult) {
        for (CameraCaptureSession.CaptureCallback captureCallback : b(captureRequest)) {
            captureCallback.onCaptureCompleted(cameraCaptureSession, captureRequest, totalCaptureResult);
        }
    }

    @Override // android.hardware.camera2.CameraCaptureSession.CaptureCallback
    public void onCaptureFailed(CameraCaptureSession cameraCaptureSession, CaptureRequest captureRequest, CaptureFailure captureFailure) {
        for (CameraCaptureSession.CaptureCallback captureCallback : b(captureRequest)) {
            captureCallback.onCaptureFailed(cameraCaptureSession, captureRequest, captureFailure);
        }
    }

    @Override // android.hardware.camera2.CameraCaptureSession.CaptureCallback
    public void onCaptureProgressed(CameraCaptureSession cameraCaptureSession, CaptureRequest captureRequest, CaptureResult captureResult) {
        for (CameraCaptureSession.CaptureCallback captureCallback : b(captureRequest)) {
            captureCallback.onCaptureProgressed(cameraCaptureSession, captureRequest, captureResult);
        }
    }

    @Override // android.hardware.camera2.CameraCaptureSession.CaptureCallback
    public void onCaptureSequenceAborted(CameraCaptureSession cameraCaptureSession, int i10) {
        for (List<CameraCaptureSession.CaptureCallback> list : this.f46872a.values()) {
            for (CameraCaptureSession.CaptureCallback captureCallback : list) {
                captureCallback.onCaptureSequenceAborted(cameraCaptureSession, i10);
            }
        }
        a aVar = this.f46873b;
        if (aVar != null) {
            aVar.a(cameraCaptureSession, i10, true);
        }
    }

    @Override // android.hardware.camera2.CameraCaptureSession.CaptureCallback
    public void onCaptureSequenceCompleted(CameraCaptureSession cameraCaptureSession, int i10, long j10) {
        for (List<CameraCaptureSession.CaptureCallback> list : this.f46872a.values()) {
            for (CameraCaptureSession.CaptureCallback captureCallback : list) {
                captureCallback.onCaptureSequenceCompleted(cameraCaptureSession, i10, j10);
            }
        }
        a aVar = this.f46873b;
        if (aVar != null) {
            aVar.a(cameraCaptureSession, i10, false);
        }
    }

    @Override // android.hardware.camera2.CameraCaptureSession.CaptureCallback
    public void onCaptureStarted(CameraCaptureSession cameraCaptureSession, CaptureRequest captureRequest, long j10, long j11) {
        for (CameraCaptureSession.CaptureCallback captureCallback : b(captureRequest)) {
            captureCallback.onCaptureStarted(cameraCaptureSession, captureRequest, j10, j11);
        }
    }
}
