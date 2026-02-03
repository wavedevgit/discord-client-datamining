package th;

import android.content.Context;
import android.content.ServiceConnection;
import android.os.IInterface;
import java.util.concurrent.atomic.AtomicInteger;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class p0 extends l0 {

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ v0 f49857e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public p0(v0 v0Var) {
        this.f49857e = v0Var;
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
        obj = this.f49857e.f49873f;
        synchronized (obj) {
            try {
                atomicInteger = this.f49857e.f49878k;
                if (atomicInteger.get() > 0) {
                    atomicInteger2 = this.f49857e.f49878k;
                    if (atomicInteger2.decrementAndGet() > 0) {
                        k0Var2 = this.f49857e.f49869b;
                        k0Var2.d("Leaving the connection open for other ongoing calls.", new Object[0]);
                        return;
                    }
                }
                v0 v0Var = this.f49857e;
                iInterface = v0Var.f49880m;
                if (iInterface != null) {
                    k0Var = v0Var.f49869b;
                    k0Var.d("Unbind from service.", new Object[0]);
                    v0 v0Var2 = this.f49857e;
                    context = v0Var2.f49868a;
                    serviceConnection = v0Var2.f49879l;
                    context.unbindService(serviceConnection);
                    this.f49857e.f49874g = false;
                    this.f49857e.f49880m = null;
                    this.f49857e.f49879l = null;
                }
                this.f49857e.w();
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }
}
