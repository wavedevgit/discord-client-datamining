package ni;

import android.content.Context;
import android.content.ServiceConnection;
import android.os.IInterface;
import java.util.concurrent.atomic.AtomicInteger;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class y0 extends u0 {

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ f f37947e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public y0(f fVar) {
        this.f37947e = fVar;
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
        obj = this.f37947e.f37908f;
        synchronized (obj) {
            try {
                atomicInteger = this.f37947e.f37914l;
                if (atomicInteger.get() > 0) {
                    atomicInteger2 = this.f37947e.f37914l;
                    if (atomicInteger2.decrementAndGet() > 0) {
                        t0Var2 = this.f37947e.f37904b;
                        t0Var2.c("Leaving the connection open for other ongoing calls.", new Object[0]);
                        return;
                    }
                }
                f fVar = this.f37947e;
                iInterface = fVar.f37916n;
                if (iInterface != null) {
                    t0Var = fVar.f37904b;
                    t0Var.c("Unbind from service.", new Object[0]);
                    f fVar2 = this.f37947e;
                    context = fVar2.f37903a;
                    serviceConnection = fVar2.f37915m;
                    context.unbindService(serviceConnection);
                    this.f37947e.f37909g = false;
                    this.f37947e.f37916n = null;
                    this.f37947e.f37915m = null;
                }
                this.f37947e.x();
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }
}
