package ni;

import android.content.Context;
import android.content.ServiceConnection;
import android.os.IInterface;
import java.util.concurrent.atomic.AtomicInteger;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class y0 extends u0 {

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ f f38516e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public y0(f fVar) {
        this.f38516e = fVar;
    }

    @Override // ni.u0
    public final void b() {
        Object obj;
        AtomicInteger atomicInteger;
        IInterface iInterface;
        t0 t0Var;
        Context context;
        ServiceConnection serviceConnection;
        AtomicInteger atomicInteger2;
        t0 t0Var2;
        obj = this.f38516e.f38477f;
        synchronized (obj) {
            try {
                atomicInteger = this.f38516e.f38483l;
                if (atomicInteger.get() > 0) {
                    atomicInteger2 = this.f38516e.f38483l;
                    if (atomicInteger2.decrementAndGet() > 0) {
                        t0Var2 = this.f38516e.f38473b;
                        t0Var2.c("Leaving the connection open for other ongoing calls.", new Object[0]);
                        return;
                    }
                }
                f fVar = this.f38516e;
                iInterface = fVar.f38485n;
                if (iInterface != null) {
                    t0Var = fVar.f38473b;
                    t0Var.c("Unbind from service.", new Object[0]);
                    f fVar2 = this.f38516e;
                    context = fVar2.f38472a;
                    serviceConnection = fVar2.f38484m;
                    context.unbindService(serviceConnection);
                    this.f38516e.f38478g = false;
                    this.f38516e.f38485n = null;
                    this.f38516e.f38484m = null;
                }
                this.f38516e.x();
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }
}
