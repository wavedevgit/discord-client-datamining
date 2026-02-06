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
    private final r.a0 f45784a;

    /* renamed from: b  reason: collision with root package name */
    private final Range f45785b;

    /* renamed from: d  reason: collision with root package name */
    private c.a f45787d;

    /* renamed from: f  reason: collision with root package name */
    private boolean f45789f;

    /* renamed from: c  reason: collision with root package name */
    private float f45786c = 1.0f;

    /* renamed from: e  reason: collision with root package name */
    private float f45788e = 1.0f;

    /* JADX INFO: Access modifiers changed from: package-private */
    public c(r.a0 a0Var) {
        CameraCharacteristics.Key key;
        this.f45789f = false;
        this.f45784a = a0Var;
        key = CameraCharacteristics.CONTROL_ZOOM_RATIO_RANGE;
        this.f45785b = (Range) a0Var.a(key);
        this.f45789f = a0Var.d();
    }

    @Override // q.z4.b
    public void a(TotalCaptureResult totalCaptureResult) {
        CaptureRequest.Key key;
        Float f10;
        if (this.f45787d != null) {
            CaptureRequest request = totalCaptureResult.getRequest();
            if (request != null) {
                key = CaptureRequest.CONTROL_ZOOM_RATIO;
                f10 = (Float) request.get(key);
            } else {
                f10 = null;
            }
            if (f10 != null) {
                if (this.f45788e == f10.floatValue()) {
                    this.f45787d.c(null);
                    this.f45787d = null;
                }
            }
        }
    }

    @Override // q.z4.b
    public float b() {
        return ((Float) this.f45785b.getLower()).floatValue();
    }

    @Override // q.z4.b
    public void c() {
        this.f45786c = 1.0f;
        c.a aVar = this.f45787d;
        if (aVar != null) {
            aVar.f(new j.a("Camera is not active."));
            this.f45787d = null;
        }
    }

    @Override // q.z4.b
    public float d() {
        return ((Float) this.f45785b.getUpper()).floatValue();
    }

    @Override // q.z4.b
    public Rect e() {
        return (Rect) b2.e.g((Rect) this.f45784a.a(CameraCharacteristics.SENSOR_INFO_ACTIVE_ARRAY_SIZE));
    }

    @Override // q.z4.b
    public void f(a.C0575a c0575a) {
        CaptureRequest.Key key;
        key = CaptureRequest.CONTROL_ZOOM_RATIO;
        Float valueOf = Float.valueOf(this.f45786c);
        r0.c cVar = r0.c.REQUIRED;
        c0575a.g(key, valueOf, cVar);
        if (this.f45789f) {
            s.b.a(c0575a, cVar);
        }
    }
}
