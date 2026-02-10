package li;

import android.content.Context;
import android.content.ServiceConnection;
import android.os.IInterface;
import java.util.concurrent.atomic.AtomicInteger;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class y0 extends u0 {

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ f f35977e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public y0(f fVar) {
        this.f35977e = fVar;
    }

    @Override // li.u0
    public final void b() {
        Object obj;
        AtomicInteger atomicInteger;
        IInterface iInterface;
        t0 t0Var;
        Context context;
        ServiceConnection serviceConnection;
        AtomicInteger atomicInteger2;
        t0 t0Var2;
        obj = this.f35977e.f35938f;
        synchronized (obj) {
            try {
                atomicInteger = this.f35977e.f35944l;
                if (atomicInteger.get() > 0) {
                    atomicInteger2 = this.f35977e.f35944l;
                    if (atomicInteger2.decrementAndGet() > 0) {
                        t0Var2 = this.f35977e.f35934b;
                        t0Var2.c("Leaving the connection open for other ongoing calls.", new Object[0]);
                        return;
                    }
                }
                f fVar = this.f35977e;
                iInterface = fVar.f35946n;
                if (iInterface != null) {
                    t0Var = fVar.f35934b;
                    t0Var.c("Unbind from service.", new Object[0]);
                    f fVar2 = this.f35977e;
                    context = fVar2.f35933a;
                    serviceConnection = fVar2.f35945m;
                    context.unbindService(serviceConnection);
                    this.f35977e.f35939g = false;
                    this.f35977e.f35946n = null;
                    this.f35977e.f35945m = null;
                }
                this.f35977e.x();
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }
}
