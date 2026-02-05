package ji;

import android.content.Context;
import android.content.ServiceConnection;
import android.os.IInterface;
import java.util.concurrent.atomic.AtomicInteger;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class y0 extends u0 {

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ f f30961e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public y0(f fVar) {
        this.f30961e = fVar;
    }

    @Override // ji.u0
    public final void b() {
        Object obj;
        AtomicInteger atomicInteger;
        IInterface iInterface;
        t0 t0Var;
        Context context;
        ServiceConnection serviceConnection;
        AtomicInteger atomicInteger2;
        t0 t0Var2;
        obj = this.f30961e.f30922f;
        synchronized (obj) {
            try {
                atomicInteger = this.f30961e.f30928l;
                if (atomicInteger.get() > 0) {
                    atomicInteger2 = this.f30961e.f30928l;
                    if (atomicInteger2.decrementAndGet() > 0) {
                        t0Var2 = this.f30961e.f30918b;
                        t0Var2.c("Leaving the connection open for other ongoing calls.", new Object[0]);
                        return;
                    }
                }
                f fVar = this.f30961e;
                iInterface = fVar.f30930n;
                if (iInterface != null) {
                    t0Var = fVar.f30918b;
                    t0Var.c("Unbind from service.", new Object[0]);
                    f fVar2 = this.f30961e;
                    context = fVar2.f30917a;
                    serviceConnection = fVar2.f30929m;
                    context.unbindService(serviceConnection);
                    this.f30961e.f30923g = false;
                    this.f30961e.f30930n = null;
                    this.f30961e.f30929m = null;
                }
                this.f30961e.x();
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }
}
