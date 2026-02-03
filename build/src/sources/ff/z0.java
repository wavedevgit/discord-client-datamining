package ff;

import android.os.DeadObjectException;
import android.os.RemoteException;
import com.google.android.gms.common.api.Status;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class z0 extends m0 {

    /* renamed from: b  reason: collision with root package name */
    private final q f23978b;

    /* renamed from: c  reason: collision with root package name */
    private final wg.k f23979c;

    /* renamed from: d  reason: collision with root package name */
    private final o f23980d;

    public z0(int i10, q qVar, wg.k kVar, o oVar) {
        super(i10);
        this.f23979c = kVar;
        this.f23978b = qVar;
        this.f23980d = oVar;
        if (i10 == 2 && qVar.c()) {
            throw new IllegalArgumentException("Best-effort write calls cannot pass methods that should auto-resolve missing features.");
        }
    }

    @Override // ff.b1
    public final void a(Status status) {
        this.f23979c.d(this.f23980d.a(status));
    }

    @Override // ff.b1
    public final void b(Exception exc) {
        this.f23979c.d(exc);
    }

    @Override // ff.b1
    public final void c(e0 e0Var) {
        try {
            this.f23978b.b(e0Var.v(), this.f23979c);
        } catch (DeadObjectException e10) {
            throw e10;
        } catch (RemoteException e11) {
            a(b1.e(e11));
        } catch (RuntimeException e12) {
            this.f23979c.d(e12);
        }
    }

    @Override // ff.b1
    public final void d(v vVar, boolean z10) {
        vVar.d(this.f23979c, z10);
    }

    @Override // ff.m0
    public final boolean f(e0 e0Var) {
        return this.f23978b.c();
    }

    @Override // ff.m0
    public final com.google.android.gms.common.d[] g(e0 e0Var) {
        return this.f23978b.e();
    }
}
