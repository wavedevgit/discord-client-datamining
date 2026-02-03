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
    private final u f46780a;

    /* renamed from: b  reason: collision with root package name */
    private final h3 f46781b;

    /* renamed from: c  reason: collision with root package name */
    private final Executor f46782c;

    /* renamed from: d  reason: collision with root package name */
    private boolean f46783d = false;

    /* renamed from: e  reason: collision with root package name */
    private c.a f46784e;

    /* renamed from: f  reason: collision with root package name */
    private u.c f46785f;

    /* JADX INFO: Access modifiers changed from: package-private */
    public g3(u uVar, r.a0 a0Var, Executor executor) {
        this.f46780a = uVar;
        this.f46781b = new h3(a0Var, 0);
        this.f46782c = executor;
    }

    private void a() {
        c.a aVar = this.f46784e;
        if (aVar != null) {
            aVar.f(new j.a("Cancelled by another setExposureCompensationIndex()"));
            this.f46784e = null;
        }
        u.c cVar = this.f46785f;
        if (cVar != null) {
            this.f46780a.W(cVar);
            this.f46785f = null;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void b(boolean z10) {
        if (z10 != this.f46783d) {
            this.f46783d = z10;
            if (!z10) {
                this.f46781b.b(0);
                a();
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void c(a.C0555a c0555a) {
        c0555a.g(CaptureRequest.CONTROL_AE_EXPOSURE_COMPENSATION, Integer.valueOf(this.f46781b.a()), r0.c.REQUIRED);
    }
}
