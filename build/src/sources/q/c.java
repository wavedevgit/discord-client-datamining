package q;

import a0.r0;
import android.graphics.Rect;
import android.hardware.camera2.CameraCharacteristics;
import android.hardware.camera2.CaptureRequest;
import android.hardware.camera2.TotalCaptureResult;
import android.util.Range;
import androidx.concurrent.futures.c;
import p.a;
import q.z4;
import x.j;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
final class c implements z4.b {

    /* renamed from: a  reason: collision with root package name */
    private final r.a0 f46672a;

    /* renamed from: b  reason: collision with root package name */
    private final Range f46673b;

    /* renamed from: d  reason: collision with root package name */
    private c.a f46675d;

    /* renamed from: f  reason: collision with root package name */
    private boolean f46677f;

    /* renamed from: c  reason: collision with root package name */
    private float f46674c = 1.0f;

    /* renamed from: e  reason: collision with root package name */
    private float f46676e = 1.0f;

    /* JADX INFO: Access modifiers changed from: package-private */
    public c(r.a0 a0Var) {
        CameraCharacteristics.Key key;
        this.f46677f = false;
        this.f46672a = a0Var;
        key = CameraCharacteristics.CONTROL_ZOOM_RATIO_RANGE;
        this.f46673b = (Range) a0Var.a(key);
        this.f46677f = a0Var.d();
    }

    @Override // q.z4.b
    public void a(TotalCaptureResult totalCaptureResult) {
        CaptureRequest.Key key;
        Float f10;
        if (this.f46675d != null) {
            CaptureRequest request = totalCaptureResult.getRequest();
            if (request != null) {
                key = CaptureRequest.CONTROL_ZOOM_RATIO;
                f10 = (Float) request.get(key);
            } else {
                f10 = null;
            }
            if (f10 != null) {
                if (this.f46676e == f10.floatValue()) {
                    this.f46675d.c(null);
                    this.f46675d = null;
                }
            }
        }
    }

    @Override // q.z4.b
    public float b() {
        return ((Float) this.f46673b.getLower()).floatValue();
    }

    @Override // q.z4.b
    public void c() {
        this.f46674c = 1.0f;
        c.a aVar = this.f46675d;
        if (aVar != null) {
            aVar.f(new j.a("Camera is not active."));
            this.f46675d = null;
        }
    }

    @Override // q.z4.b
    public float d() {
        return ((Float) this.f46673b.getUpper()).floatValue();
    }

    @Override // q.z4.b
    public Rect e() {
        return (Rect) b2.e.g((Rect) this.f46672a.a(CameraCharacteristics.SENSOR_INFO_ACTIVE_ARRAY_SIZE));
    }

    @Override // q.z4.b
    public void f(a.C0555a c0555a) {
        CaptureRequest.Key key;
        key = CaptureRequest.CONTROL_ZOOM_RATIO;
        Float valueOf = Float.valueOf(this.f46674c);
        r0.c cVar = r0.c.REQUIRED;
        c0555a.g(key, valueOf, cVar);
        if (this.f46677f) {
            s.b.a(c0555a, cVar);
        }
    }
}
