package gf;

import android.os.DeadObjectException;
import android.os.RemoteException;
import com.google.android.gms.common.api.Status;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class z0 extends m0 {

    /* renamed from: b  reason: collision with root package name */
    private final q f25690b;

    /* renamed from: c  reason: collision with root package name */
    private final zg.k f25691c;

    /* renamed from: d  reason: collision with root package name */
    private final o f25692d;

    public z0(int i10, q qVar, zg.k kVar, o oVar) {
        super(i10);
        this.f25691c = kVar;
        this.f25690b = qVar;
        this.f25692d = oVar;
        if (i10 == 2 && qVar.c()) {
            throw new IllegalArgumentException("Best-effort write calls cannot pass methods that should auto-resolve missing features.");
        }
    }

    @Override // gf.b1
    public final void a(Status status) {
        this.f25691c.d(this.f25692d.a(status));
    }

    @Override // gf.b1
    public final void b(Exception exc) {
        this.f25691c.d(exc);
    }

    @Override // gf.b1
    public final void c(e0 e0Var) {
        try {
            this.f25690b.b(e0Var.v(), this.f25691c);
        } catch (DeadObjectException e10) {
            throw e10;
        } catch (RemoteException e11) {
            a(b1.e(e11));
        } catch (RuntimeException e12) {
            this.f25691c.d(e12);
        }
    }

    @Override // gf.b1
    public final void d(v vVar, boolean z10) {
        vVar.d(this.f25691c, z10);
    }

    @Override // gf.m0
    public final boolean f(e0 e0Var) {
        return this.f25690b.c();
    }

    @Override // gf.m0
    public final com.google.android.gms.common.d[] g(e0 e0Var) {
        return this.f25690b.e();
    }
}
