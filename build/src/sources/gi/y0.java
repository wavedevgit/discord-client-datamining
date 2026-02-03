package gi;

import android.content.Context;
import android.content.ServiceConnection;
import android.os.IInterface;
import java.util.concurrent.atomic.AtomicInteger;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class y0 extends u0 {

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ f f27065e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public y0(f fVar) {
        this.f27065e = fVar;
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
        obj = this.f27065e.f27026f;
        synchronized (obj) {
            try {
                atomicInteger = this.f27065e.f27032l;
                if (atomicInteger.get() > 0) {
                    atomicInteger2 = this.f27065e.f27032l;
                    if (atomicInteger2.decrementAndGet() > 0) {
                        t0Var2 = this.f27065e.f27022b;
                        t0Var2.c("Leaving the connection open for other ongoing calls.", new Object[0]);
                        return;
                    }
                }
                f fVar = this.f27065e;
                iInterface = fVar.f27034n;
                if (iInterface != null) {
                    t0Var = fVar.f27022b;
                    t0Var.c("Unbind from service.", new Object[0]);
                    f fVar2 = this.f27065e;
                    context = fVar2.f27021a;
                    serviceConnection = fVar2.f27033m;
                    context.unbindService(serviceConnection);
                    this.f27065e.f27027g = false;
                    this.f27065e.f27034n = null;
                    this.f27065e.f27033m = null;
                }
                this.f27065e.x();
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }
}
