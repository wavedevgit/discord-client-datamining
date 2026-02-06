package ki;

import android.content.Context;
import android.content.ServiceConnection;
import android.os.IInterface;
import java.util.concurrent.atomic.AtomicInteger;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class y0 extends u0 {

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ f f31709e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public y0(f fVar) {
        this.f31709e = fVar;
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
        obj = this.f31709e.f31670f;
        synchronized (obj) {
            try {
                atomicInteger = this.f31709e.f31676l;
                if (atomicInteger.get() > 0) {
                    atomicInteger2 = this.f31709e.f31676l;
                    if (atomicInteger2.decrementAndGet() > 0) {
                        t0Var2 = this.f31709e.f31666b;
                        t0Var2.c("Leaving the connection open for other ongoing calls.", new Object[0]);
                        return;
                    }
                }
                f fVar = this.f31709e;
                iInterface = fVar.f31678n;
                if (iInterface != null) {
                    t0Var = fVar.f31666b;
                    t0Var.c("Unbind from service.", new Object[0]);
                    f fVar2 = this.f31709e;
                    context = fVar2.f31665a;
                    serviceConnection = fVar2.f31677m;
                    context.unbindService(serviceConnection);
                    this.f31709e.f31671g = false;
                    this.f31709e.f31678n = null;
                    this.f31709e.f31677m = null;
                }
                this.f31709e.x();
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }
}
