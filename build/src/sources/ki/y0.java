package ki;

import android.content.Context;
import android.content.ServiceConnection;
import android.os.IInterface;
import java.util.concurrent.atomic.AtomicInteger;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class y0 extends u0 {

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ f f31757e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public y0(f fVar) {
        this.f31757e = fVar;
    }

    @Override // ki.u0
    public final void b() {
        Object obj;
        AtomicInteger atomicInteger;
        IInterface iInterface;
        t0 t0Var;
        Context context;
        ServiceConnection serviceConnection;
        AtomicInteger atomicInteger2;
        t0 t0Var2;
        obj = this.f31757e.f31718f;
        synchronized (obj) {
            try {
                atomicInteger = this.f31757e.f31724l;
                if (atomicInteger.get() > 0) {
                    atomicInteger2 = this.f31757e.f31724l;
                    if (atomicInteger2.decrementAndGet() > 0) {
                        t0Var2 = this.f31757e.f31714b;
                        t0Var2.c("Leaving the connection open for other ongoing calls.", new Object[0]);
                        return;
                    }
                }
                f fVar = this.f31757e;
                iInterface = fVar.f31726n;
                if (iInterface != null) {
                    t0Var = fVar.f31714b;
                    t0Var.c("Unbind from service.", new Object[0]);
                    f fVar2 = this.f31757e;
                    context = fVar2.f31713a;
                    serviceConnection = fVar2.f31725m;
                    context.unbindService(serviceConnection);
                    this.f31757e.f31719g = false;
                    this.f31757e.f31726n = null;
                    this.f31757e.f31725m = null;
                }
                this.f31757e.x();
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }
}
