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
    private final u f43932a;

    /* renamed from: b  reason: collision with root package name */
    private final h3 f43933b;

    /* renamed from: c  reason: collision with root package name */
    private final Executor f43934c;

    /* renamed from: d  reason: collision with root package name */
    private boolean f43935d = false;

    /* renamed from: e  reason: collision with root package name */
    private c.a f43936e;

    /* renamed from: f  reason: collision with root package name */
    private u.c f43937f;

    /* JADX INFO: Access modifiers changed from: package-private */
    public g3(u uVar, r.a0 a0Var, Executor executor) {
        this.f43932a = uVar;
        this.f43933b = new h3(a0Var, 0);
        this.f43934c = executor;
    }

    private void a() {
        c.a aVar = this.f43936e;
        if (aVar != null) {
            aVar.f(new j.a("Cancelled by another setExposureCompensationIndex()"));
            this.f43936e = null;
        }
        u.c cVar = this.f43937f;
        if (cVar != null) {
            this.f43932a.W(cVar);
            this.f43937f = null;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void b(boolean z10) {
        if (z10 != this.f43935d) {
            this.f43935d = z10;
            if (!z10) {
                this.f43933b.b(0);
                a();
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void c(a.C0582a c0582a) {
        c0582a.g(CaptureRequest.CONTROL_AE_EXPOSURE_COMPENSATION, Integer.valueOf(this.f43933b.a()), r0.c.REQUIRED);
    }
}
