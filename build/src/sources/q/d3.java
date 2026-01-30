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
    private final r.a0 f46295a;

    /* renamed from: c  reason: collision with root package name */
    private c.a f46297c;

    /* renamed from: b  reason: collision with root package name */
    private Rect f46296b = null;

    /* renamed from: d  reason: collision with root package name */
    private Rect f46298d = null;

    /* JADX INFO: Access modifiers changed from: package-private */
    public d3(r.a0 a0Var) {
        this.f46295a = a0Var;
    }

    private Rect g() {
        return (Rect) b2.e.g((Rect) this.f46295a.a(CameraCharacteristics.SENSOR_INFO_ACTIVE_ARRAY_SIZE));
    }

    @Override // q.z4.b
    public void a(TotalCaptureResult totalCaptureResult) {
        Rect rect;
        if (this.f46297c != null) {
            CaptureRequest request = totalCaptureResult.getRequest();
            if (request == null) {
                rect = null;
            } else {
                rect = (Rect) request.get(CaptureRequest.SCALER_CROP_REGION);
            }
            Rect rect2 = this.f46298d;
            if (rect2 != null && rect2.equals(rect)) {
                this.f46297c.c(null);
                this.f46297c = null;
                this.f46298d = null;
            }
        }
    }

    @Override // q.z4.b
    public float b() {
        return 1.0f;
    }

    @Override // q.z4.b
    public void c() {
        this.f46298d = null;
        this.f46296b = null;
        c.a aVar = this.f46297c;
        if (aVar != null) {
            aVar.f(new j.a("Camera is not active."));
            this.f46297c = null;
        }
    }

    @Override // q.z4.b
    public float d() {
        Float f10 = (Float) this.f46295a.a(CameraCharacteristics.SCALER_AVAILABLE_MAX_DIGITAL_ZOOM);
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
        Rect rect = this.f46296b;
        if (rect != null) {
            return rect;
        }
        return g();
    }

    @Override // q.z4.b
    public void f(a.C0551a c0551a) {
        Rect rect = this.f46296b;
        if (rect != null) {
            c0551a.g(CaptureRequest.SCALER_CROP_REGION, rect, r0.c.REQUIRED);
        }
    }
}
