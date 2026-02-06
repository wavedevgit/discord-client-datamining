package q;

import a0.r0;
import android.hardware.camera2.CaptureRequest;
import androidx.concurrent.futures.c;
import java.util.concurrent.Executor;
import p.a;
import q.u;
import x.j;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class g3 {

    /* renamed from: a  reason: collision with root package name */
    private final u f45892a;

    /* renamed from: b  reason: collision with root package name */
    private final h3 f45893b;

    /* renamed from: c  reason: collision with root package name */
    private final Executor f45894c;

    /* renamed from: d  reason: collision with root package name */
    private boolean f45895d = false;

    /* renamed from: e  reason: collision with root package name */
    private c.a f45896e;

    /* renamed from: f  reason: collision with root package name */
    private u.c f45897f;

    /* JADX INFO: Access modifiers changed from: package-private */
    public g3(u uVar, r.a0 a0Var, Executor executor) {
        this.f45892a = uVar;
        this.f45893b = new h3(a0Var, 0);
        this.f45894c = executor;
    }

    private void a() {
        c.a aVar = this.f45896e;
        if (aVar != null) {
            aVar.f(new j.a("Cancelled by another setExposureCompensationIndex()"));
            this.f45896e = null;
        }
        u.c cVar = this.f45897f;
        if (cVar != null) {
            this.f45892a.W(cVar);
            this.f45897f = null;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void b(boolean z10) {
        if (z10 != this.f45895d) {
            this.f45895d = z10;
            if (!z10) {
                this.f45893b.b(0);
                a();
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void c(a.C0575a c0575a) {
        c0575a.g(CaptureRequest.CONTROL_AE_EXPOSURE_COMPENSATION, Integer.valueOf(this.f45893b.a()), r0.c.REQUIRED);
    }
}
