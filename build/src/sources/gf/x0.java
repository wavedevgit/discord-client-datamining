package gf;

import android.os.DeadObjectException;
import android.os.RemoteException;
import com.google.android.gms.common.api.Status;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class x0 extends m0 {

    /* renamed from: b  reason: collision with root package name */
    protected final zg.k f24385b;

    public x0(int i10, zg.k kVar) {
        super(i10);
        this.f24385b = kVar;
    }

    @Override // gf.b1
    public final void a(Status status) {
        this.f24385b.d(new ff.b(status));
    }

    @Override // gf.b1
    public final void b(Exception exc) {
        this.f24385b.d(exc);
    }

    @Override // gf.b1
    public final void c(e0 e0Var) {
        try {
            h(e0Var);
        } catch (DeadObjectException e10) {
            a(b1.e(e10));
            throw e10;
        } catch (RemoteException e11) {
            a(b1.e(e11));
        } catch (RuntimeException e12) {
            this.f24385b.d(e12);
        }
    }

    protected abstract void h(e0 e0Var);
}
