package gi;

import android.content.Context;
import android.content.ServiceConnection;
import android.os.IInterface;
import java.util.concurrent.atomic.AtomicInteger;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class y0 extends u0 {

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ f f26954e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public y0(f fVar) {
        this.f26954e = fVar;
    }

    @Override // gi.u0
    public final void b() {
        Object obj;
        AtomicInteger atomicInteger;
        IInterface iInterface;
        t0 t0Var;
        Context context;
        ServiceConnection serviceConnection;
        AtomicInteger atomicInteger2;
        t0 t0Var2;
        obj = this.f26954e.f26915f;
        synchronized (obj) {
            try {
                atomicInteger = this.f26954e.f26921l;
                if (atomicInteger.get() > 0) {
                    atomicInteger2 = this.f26954e.f26921l;
                    if (atomicInteger2.decrementAndGet() > 0) {
                        t0Var2 = this.f26954e.f26911b;
                        t0Var2.c("Leaving the connection open for other ongoing calls.", new Object[0]);
                        return;
                    }
                }
                f fVar = this.f26954e;
                iInterface = fVar.f26923n;
                if (iInterface != null) {
                    t0Var = fVar.f26911b;
                    t0Var.c("Unbind from service.", new Object[0]);
                    f fVar2 = this.f26954e;
                    context = fVar2.f26910a;
                    serviceConnection = fVar2.f26922m;
                    context.unbindService(serviceConnection);
                    this.f26954e.f26916g = false;
                    this.f26954e.f26923n = null;
                    this.f26954e.f26922m = null;
                }
                this.f26954e.x();
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }
}
