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
    private final u f43363a;

    /* renamed from: b  reason: collision with root package name */
    private final h3 f43364b;

    /* renamed from: c  reason: collision with root package name */
    private final Executor f43365c;

    /* renamed from: d  reason: collision with root package name */
    private boolean f43366d = false;

    /* renamed from: e  reason: collision with root package name */
    private c.a f43367e;

    /* renamed from: f  reason: collision with root package name */
    private u.c f43368f;

    /* JADX INFO: Access modifiers changed from: package-private */
    public g3(u uVar, r.a0 a0Var, Executor executor) {
        this.f43363a = uVar;
        this.f43364b = new h3(a0Var, 0);
        this.f43365c = executor;
    }

    private void a() {
        c.a aVar = this.f43367e;
        if (aVar != null) {
            aVar.f(new j.a("Cancelled by another setExposureCompensationIndex()"));
            this.f43367e = null;
        }
        u.c cVar = this.f43368f;
        if (cVar != null) {
            this.f43363a.W(cVar);
            this.f43368f = null;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void b(boolean z10) {
        if (z10 != this.f43366d) {
            this.f43366d = z10;
            if (!z10) {
                this.f43364b.b(0);
                a();
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void c(a.C0582a c0582a) {
        c0582a.g(CaptureRequest.CONTROL_AE_EXPOSURE_COMPENSATION, Integer.valueOf(this.f43364b.a()), r0.c.REQUIRED);
    }
}
