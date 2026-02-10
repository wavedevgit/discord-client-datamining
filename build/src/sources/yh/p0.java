package yh;

import android.content.Context;
import android.content.ServiceConnection;
import android.os.IInterface;
import java.util.concurrent.atomic.AtomicInteger;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class p0 extends l0 {

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ v0 f55659e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public p0(v0 v0Var) {
        this.f55659e = v0Var;
    }

    @Override // yh.l0
    public final void a() {
        Object obj;
        AtomicInteger atomicInteger;
        IInterface iInterface;
        k0 k0Var;
        Context context;
        ServiceConnection serviceConnection;
        AtomicInteger atomicInteger2;
        k0 k0Var2;
        obj = this.f55659e.f55675f;
        synchronized (obj) {
            try {
                atomicInteger = this.f55659e.f55680k;
                if (atomicInteger.get() > 0) {
                    atomicInteger2 = this.f55659e.f55680k;
                    if (atomicInteger2.decrementAndGet() > 0) {
                        k0Var2 = this.f55659e.f55671b;
                        k0Var2.d("Leaving the connection open for other ongoing calls.", new Object[0]);
                        return;
                    }
                }
                v0 v0Var = this.f55659e;
                iInterface = v0Var.f55682m;
                if (iInterface != null) {
                    k0Var = v0Var.f55671b;
                    k0Var.d("Unbind from service.", new Object[0]);
                    v0 v0Var2 = this.f55659e;
                    context = v0Var2.f55670a;
                    serviceConnection = v0Var2.f55681l;
                    context.unbindService(serviceConnection);
                    this.f55659e.f55676g = false;
                    this.f55659e.f55682m = null;
                    this.f55659e.f55681l = null;
                }
                this.f55659e.w();
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }
}
