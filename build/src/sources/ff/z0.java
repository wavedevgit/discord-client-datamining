package ff;

import android.os.DeadObjectException;
import android.os.RemoteException;
import com.google.android.gms.common.api.Status;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class z0 extends m0 {

    /* renamed from: b  reason: collision with root package name */
    private final q f23304b;

    /* renamed from: c  reason: collision with root package name */
    private final yg.k f23305c;

    /* renamed from: d  reason: collision with root package name */
    private final o f23306d;

    public z0(int i10, q qVar, yg.k kVar, o oVar) {
        super(i10);
        this.f23305c = kVar;
        this.f23304b = qVar;
        this.f23306d = oVar;
        if (i10 == 2 && qVar.c()) {
            throw new IllegalArgumentException("Best-effort write calls cannot pass methods that should auto-resolve missing features.");
        }
    }

    @Override // ff.b1
    public final void a(Status status) {
        this.f23305c.d(this.f23306d.a(status));
    }

    @Override // ff.b1
    public final void b(Exception exc) {
        this.f23305c.d(exc);
    }

    @Override // ff.b1
    public final void c(e0 e0Var) {
        try {
            this.f23304b.b(e0Var.v(), this.f23305c);
        } catch (DeadObjectException e10) {
            throw e10;
        } catch (RemoteException e11) {
            a(b1.e(e11));
        } catch (RuntimeException e12) {
            this.f23305c.d(e12);
        }
    }

    @Override // ff.b1
    public final void d(v vVar, boolean z10) {
        vVar.d(this.f23305c, z10);
    }

    @Override // ff.m0
    public final boolean f(e0 e0Var) {
        return this.f23304b.c();
    }

    @Override // ff.m0
    public final com.google.android.gms.common.d[] g(e0 e0Var) {
        return this.f23304b.e();
    }
}
