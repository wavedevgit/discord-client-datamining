package ff;

import android.os.DeadObjectException;
import android.os.RemoteException;
import com.google.android.gms.common.api.Status;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class z0 extends m0 {

    /* renamed from: b  reason: collision with root package name */
    private final q f23003b;

    /* renamed from: c  reason: collision with root package name */
    private final xg.k f23004c;

    /* renamed from: d  reason: collision with root package name */
    private final o f23005d;

    public z0(int i10, q qVar, xg.k kVar, o oVar) {
        super(i10);
        this.f23004c = kVar;
        this.f23003b = qVar;
        this.f23005d = oVar;
        if (i10 == 2 && qVar.c()) {
            throw new IllegalArgumentException("Best-effort write calls cannot pass methods that should auto-resolve missing features.");
        }
    }

    @Override // ff.b1
    public final void a(Status status) {
        this.f23004c.d(this.f23005d.a(status));
    }

    @Override // ff.b1
    public final void b(Exception exc) {
        this.f23004c.d(exc);
    }

    @Override // ff.b1
    public final void c(e0 e0Var) {
        try {
            this.f23003b.b(e0Var.v(), this.f23004c);
        } catch (DeadObjectException e10) {
            throw e10;
        } catch (RemoteException e11) {
            a(b1.e(e11));
        } catch (RuntimeException e12) {
            this.f23004c.d(e12);
        }
    }

    @Override // ff.b1
    public final void d(v vVar, boolean z10) {
        vVar.d(this.f23004c, z10);
    }

    @Override // ff.m0
    public final boolean f(e0 e0Var) {
        return this.f23003b.c();
    }

    @Override // ff.m0
    public final com.google.android.gms.common.d[] g(e0 e0Var) {
        return this.f23003b.e();
    }
}
