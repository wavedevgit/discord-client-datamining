package th;

import android.content.Context;
import android.content.ServiceConnection;
import android.os.IInterface;
import java.util.concurrent.atomic.AtomicInteger;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class p0 extends l0 {

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ v0 f50065e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public p0(v0 v0Var) {
        this.f50065e = v0Var;
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
        obj = this.f50065e.f50081f;
        synchronized (obj) {
            try {
                atomicInteger = this.f50065e.f50086k;
                if (atomicInteger.get() > 0) {
                    atomicInteger2 = this.f50065e.f50086k;
                    if (atomicInteger2.decrementAndGet() > 0) {
                        k0Var2 = this.f50065e.f50077b;
                        k0Var2.d("Leaving the connection open for other ongoing calls.", new Object[0]);
                        return;
                    }
                }
                v0 v0Var = this.f50065e;
                iInterface = v0Var.f50088m;
                if (iInterface != null) {
                    k0Var = v0Var.f50077b;
                    k0Var.d("Unbind from service.", new Object[0]);
                    v0 v0Var2 = this.f50065e;
                    context = v0Var2.f50076a;
                    serviceConnection = v0Var2.f50087l;
                    context.unbindService(serviceConnection);
                    this.f50065e.f50082g = false;
                    this.f50065e.f50088m = null;
                    this.f50065e.f50087l = null;
                }
                this.f50065e.w();
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }
}
