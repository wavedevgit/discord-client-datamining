package gi;

import android.content.Context;
import android.content.ServiceConnection;
import android.os.IInterface;
import java.util.concurrent.atomic.AtomicInteger;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class y0 extends u0 {

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ f f26278e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public y0(f fVar) {
        this.f26278e = fVar;
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
        obj = this.f26278e.f26239f;
        synchronized (obj) {
            try {
                atomicInteger = this.f26278e.f26245l;
                if (atomicInteger.get() > 0) {
                    atomicInteger2 = this.f26278e.f26245l;
                    if (atomicInteger2.decrementAndGet() > 0) {
                        t0Var2 = this.f26278e.f26235b;
                        t0Var2.c("Leaving the connection open for other ongoing calls.", new Object[0]);
                        return;
                    }
                }
                f fVar = this.f26278e;
                iInterface = fVar.f26247n;
                if (iInterface != null) {
                    t0Var = fVar.f26235b;
                    t0Var.c("Unbind from service.", new Object[0]);
                    f fVar2 = this.f26278e;
                    context = fVar2.f26234a;
                    serviceConnection = fVar2.f26246m;
                    context.unbindService(serviceConnection);
                    this.f26278e.f26240g = false;
                    this.f26278e.f26247n = null;
                    this.f26278e.f26246m = null;
                }
                this.f26278e.x();
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }
}
