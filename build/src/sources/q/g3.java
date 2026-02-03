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
    private final u f46630a;

    /* renamed from: b  reason: collision with root package name */
    private final h3 f46631b;

    /* renamed from: c  reason: collision with root package name */
    private final Executor f46632c;

    /* renamed from: d  reason: collision with root package name */
    private boolean f46633d = false;

    /* renamed from: e  reason: collision with root package name */
    private c.a f46634e;

    /* renamed from: f  reason: collision with root package name */
    private u.c f46635f;

    /* JADX INFO: Access modifiers changed from: package-private */
    public g3(u uVar, r.a0 a0Var, Executor executor) {
        this.f46630a = uVar;
        this.f46631b = new h3(a0Var, 0);
        this.f46632c = executor;
    }

    private void a() {
        c.a aVar = this.f46634e;
        if (aVar != null) {
            aVar.f(new j.a("Cancelled by another setExposureCompensationIndex()"));
            this.f46634e = null;
        }
        u.c cVar = this.f46635f;
        if (cVar != null) {
            this.f46630a.W(cVar);
            this.f46635f = null;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void b(boolean z10) {
        if (z10 != this.f46633d) {
            this.f46633d = z10;
            if (!z10) {
                this.f46631b.b(0);
                a();
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void c(a.C0558a c0558a) {
        c0558a.g(CaptureRequest.CONTROL_AE_EXPOSURE_COMPENSATION, Integer.valueOf(this.f46631b.a()), r0.c.REQUIRED);
    }
}
