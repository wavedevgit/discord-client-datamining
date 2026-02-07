package xh;

import android.content.Context;
import android.content.ServiceConnection;
import android.os.IInterface;
import java.util.concurrent.atomic.AtomicInteger;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class p0 extends l0 {

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ v0 f54724e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public p0(v0 v0Var) {
        this.f54724e = v0Var;
    }

    @Override // xh.l0
    public final void a() {
        Object obj;
        AtomicInteger atomicInteger;
        IInterface iInterface;
        k0 k0Var;
        Context context;
        ServiceConnection serviceConnection;
        AtomicInteger atomicInteger2;
        k0 k0Var2;
        obj = this.f54724e.f54740f;
        synchronized (obj) {
            try {
                atomicInteger = this.f54724e.f54745k;
                if (atomicInteger.get() > 0) {
                    atomicInteger2 = this.f54724e.f54745k;
                    if (atomicInteger2.decrementAndGet() > 0) {
                        k0Var2 = this.f54724e.f54736b;
                        k0Var2.d("Leaving the connection open for other ongoing calls.", new Object[0]);
                        return;
                    }
                }
                v0 v0Var = this.f54724e;
                iInterface = v0Var.f54747m;
                if (iInterface != null) {
                    k0Var = v0Var.f54736b;
                    k0Var.d("Unbind from service.", new Object[0]);
                    v0 v0Var2 = this.f54724e;
                    context = v0Var2.f54735a;
                    serviceConnection = v0Var2.f54746l;
                    context.unbindService(serviceConnection);
                    this.f54724e.f54741g = false;
                    this.f54724e.f54747m = null;
                    this.f54724e.f54746l = null;
                }
                this.f54724e.w();
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }
}
