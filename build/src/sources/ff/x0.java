package ff;

import android.os.DeadObjectException;
import android.os.RemoteException;
import com.google.android.gms.common.api.Status;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class x0 extends m0 {

    /* renamed from: b  reason: collision with root package name */
    protected final yg.k f23300b;

    public x0(int i10, yg.k kVar) {
        super(i10);
        this.f23300b = kVar;
    }

    @Override // ff.b1
    public final void a(Status status) {
        this.f23300b.d(new ef.b(status));
    }

    @Override // ff.b1
    public final void b(Exception exc) {
        this.f23300b.d(exc);
    }

    @Override // ff.b1
    public final void c(e0 e0Var) {
        try {
            h(e0Var);
        } catch (DeadObjectException e10) {
            a(b1.e(e10));
            throw e10;
        } catch (RemoteException e11) {
            a(b1.e(e11));
        } catch (RuntimeException e12) {
            this.f23300b.d(e12);
        }
    }

    protected abstract void h(e0 e0Var);
}
