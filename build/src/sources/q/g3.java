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
    private final u f44695a;

    /* renamed from: b  reason: collision with root package name */
    private final h3 f44696b;

    /* renamed from: c  reason: collision with root package name */
    private final Executor f44697c;

    /* renamed from: d  reason: collision with root package name */
    private boolean f44698d = false;

    /* renamed from: e  reason: collision with root package name */
    private c.a f44699e;

    /* renamed from: f  reason: collision with root package name */
    private u.c f44700f;

    /* JADX INFO: Access modifiers changed from: package-private */
    public g3(u uVar, r.a0 a0Var, Executor executor) {
        this.f44695a = uVar;
        this.f44696b = new h3(a0Var, 0);
        this.f44697c = executor;
    }

    private void a() {
        c.a aVar = this.f44699e;
        if (aVar != null) {
            aVar.f(new j.a("Cancelled by another setExposureCompensationIndex()"));
            this.f44699e = null;
        }
        u.c cVar = this.f44700f;
        if (cVar != null) {
            this.f44695a.W(cVar);
            this.f44700f = null;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void b(boolean z10) {
        if (z10 != this.f44698d) {
            this.f44698d = z10;
            if (!z10) {
                this.f44696b.b(0);
                a();
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void c(a.C0606a c0606a) {
        c0606a.g(CaptureRequest.CONTROL_AE_EXPOSURE_COMPENSATION, Integer.valueOf(this.f44696b.a()), r0.c.REQUIRED);
    }
}
