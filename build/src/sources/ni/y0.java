package ni;

import android.content.Context;
import android.content.ServiceConnection;
import android.os.IInterface;
import java.util.concurrent.atomic.AtomicInteger;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class y0 extends u0 {

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ f f37948e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public y0(f fVar) {
        this.f37948e = fVar;
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
        obj = this.f37948e.f37909f;
        synchronized (obj) {
            try {
                atomicInteger = this.f37948e.f37915l;
                if (atomicInteger.get() > 0) {
                    atomicInteger2 = this.f37948e.f37915l;
                    if (atomicInteger2.decrementAndGet() > 0) {
                        t0Var2 = this.f37948e.f37905b;
                        t0Var2.c("Leaving the connection open for other ongoing calls.", new Object[0]);
                        return;
                    }
                }
                f fVar = this.f37948e;
                iInterface = fVar.f37917n;
                if (iInterface != null) {
                    t0Var = fVar.f37905b;
                    t0Var.c("Unbind from service.", new Object[0]);
                    f fVar2 = this.f37948e;
                    context = fVar2.f37904a;
                    serviceConnection = fVar2.f37916m;
                    context.unbindService(serviceConnection);
                    this.f37948e.f37910g = false;
                    this.f37948e.f37917n = null;
                    this.f37948e.f37916m = null;
                }
                this.f37948e.x();
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }
}
