package th;

import android.content.Context;
import android.content.ServiceConnection;
import android.os.IInterface;
import java.util.concurrent.atomic.AtomicInteger;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class p0 extends l0 {

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ v0 f50068e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public p0(v0 v0Var) {
        this.f50068e = v0Var;
    }

    @Override // th.l0
    public final void a() {
        Object obj;
        AtomicInteger atomicInteger;
        IInterface iInterface;
        k0 k0Var;
        Context context;
        ServiceConnection serviceConnection;
        AtomicInteger atomicInteger2;
        k0 k0Var2;
        obj = this.f50068e.f50084f;
        synchronized (obj) {
            try {
                atomicInteger = this.f50068e.f50089k;
                if (atomicInteger.get() > 0) {
                    atomicInteger2 = this.f50068e.f50089k;
                    if (atomicInteger2.decrementAndGet() > 0) {
                        k0Var2 = this.f50068e.f50080b;
                        k0Var2.d("Leaving the connection open for other ongoing calls.", new Object[0]);
                        return;
                    }
                }
                v0 v0Var = this.f50068e;
                iInterface = v0Var.f50091m;
                if (iInterface != null) {
                    k0Var = v0Var.f50080b;
                    k0Var.d("Unbind from service.", new Object[0]);
                    v0 v0Var2 = this.f50068e;
                    context = v0Var2.f50079a;
                    serviceConnection = v0Var2.f50090l;
                    context.unbindService(serviceConnection);
                    this.f50068e.f50085g = false;
                    this.f50068e.f50091m = null;
                    this.f50068e.f50090l = null;
                }
                this.f50068e.w();
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }
}
