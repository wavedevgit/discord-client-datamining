package gi;

import android.content.Context;
import android.content.ServiceConnection;
import android.os.IInterface;
import java.util.concurrent.atomic.AtomicInteger;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class y0 extends u0 {

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ f f26970e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public y0(f fVar) {
        this.f26970e = fVar;
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
        obj = this.f26970e.f26931f;
        synchronized (obj) {
            try {
                atomicInteger = this.f26970e.f26937l;
                if (atomicInteger.get() > 0) {
                    atomicInteger2 = this.f26970e.f26937l;
                    if (atomicInteger2.decrementAndGet() > 0) {
                        t0Var2 = this.f26970e.f26927b;
                        t0Var2.c("Leaving the connection open for other ongoing calls.", new Object[0]);
                        return;
                    }
                }
                f fVar = this.f26970e;
                iInterface = fVar.f26939n;
                if (iInterface != null) {
                    t0Var = fVar.f26927b;
                    t0Var.c("Unbind from service.", new Object[0]);
                    f fVar2 = this.f26970e;
                    context = fVar2.f26926a;
                    serviceConnection = fVar2.f26938m;
                    context.unbindService(serviceConnection);
                    this.f26970e.f26932g = false;
                    this.f26970e.f26939n = null;
                    this.f26970e.f26938m = null;
                }
                this.f26970e.x();
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }
}
