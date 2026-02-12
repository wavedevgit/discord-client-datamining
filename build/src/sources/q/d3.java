package q;

import a0.r0;
import android.graphics.Rect;
import android.hardware.camera2.CameraCharacteristics;
import android.hardware.camera2.CaptureRequest;
import android.hardware.camera2.TotalCaptureResult;
import androidx.concurrent.futures.c;
import p.a;
import q.z4;
import x.j;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
final class d3 implements z4.b {

    /* renamed from: a  reason: collision with root package name */
    private final r.a0 f43284a;

    /* renamed from: c  reason: collision with root package name */
    private c.a f43286c;

    /* renamed from: b  reason: collision with root package name */
    private Rect f43285b = null;

    /* renamed from: d  reason: collision with root package name */
    private Rect f43287d = null;

    /* JADX INFO: Access modifiers changed from: package-private */
    public d3(r.a0 a0Var) {
        this.f43284a = a0Var;
    }

    private Rect g() {
        return (Rect) b2.e.g((Rect) this.f43284a.a(CameraCharacteristics.SENSOR_INFO_ACTIVE_ARRAY_SIZE));
    }

    @Override // q.z4.b
    public void a(TotalCaptureResult totalCaptureResult) {
        Rect rect;
        if (this.f43286c != null) {
            CaptureRequest request = totalCaptureResult.getRequest();
            if (request == null) {
                rect = null;
            } else {
                rect = (Rect) request.get(CaptureRequest.SCALER_CROP_REGION);
            }
            Rect rect2 = this.f43287d;
            if (rect2 != null && rect2.equals(rect)) {
                this.f43286c.c(null);
                this.f43286c = null;
                this.f43287d = null;
            }
        }
    }

    @Override // q.z4.b
    public float b() {
        return 1.0f;
    }

    @Override // q.z4.b
    public void c() {
        this.f43287d = null;
        this.f43285b = null;
        c.a aVar = this.f43286c;
        if (aVar != null) {
            aVar.f(new j.a("Camera is not active."));
            this.f43286c = null;
        }
    }

    @Override // q.z4.b
    public float d() {
        Float f10 = (Float) this.f43284a.a(CameraCharacteristics.SCALER_AVAILABLE_MAX_DIGITAL_ZOOM);
        if (f10 == null) {
            return 1.0f;
        }
        if (f10.floatValue() < b()) {
            return b();
        }
        return f10.floatValue();
    }

    @Override // q.z4.b
    public Rect e() {
        Rect rect = this.f43285b;
        if (rect != null) {
            return rect;
        }
        return g();
    }

    @Override // q.z4.b
    public void f(a.C0582a c0582a) {
        Rect rect = this.f43285b;
        if (rect != null) {
            c0582a.g(CaptureRequest.SCALER_CROP_REGION, rect, r0.c.REQUIRED);
        }
    }
}
