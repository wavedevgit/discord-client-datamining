package wh;

import android.content.Context;
import android.content.ServiceConnection;
import android.os.IInterface;
import java.util.concurrent.atomic.AtomicInteger;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class p0 extends l0 {

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ v0 f53089e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public p0(v0 v0Var) {
        this.f53089e = v0Var;
    }

    @Override // wh.l0
    public final void a() {
        Object obj;
        AtomicInteger atomicInteger;
        IInterface iInterface;
        k0 k0Var;
        Context context;
        ServiceConnection serviceConnection;
        AtomicInteger atomicInteger2;
        k0 k0Var2;
        obj = this.f53089e.f53105f;
        synchronized (obj) {
            try {
                atomicInteger = this.f53089e.f53110k;
                if (atomicInteger.get() > 0) {
                    atomicInteger2 = this.f53089e.f53110k;
                    if (atomicInteger2.decrementAndGet() > 0) {
                        k0Var2 = this.f53089e.f53101b;
                        k0Var2.d("Leaving the connection open for other ongoing calls.", new Object[0]);
                        return;
                    }
                }
                v0 v0Var = this.f53089e;
                iInterface = v0Var.f53112m;
                if (iInterface != null) {
                    k0Var = v0Var.f53101b;
                    k0Var.d("Unbind from service.", new Object[0]);
                    v0 v0Var2 = this.f53089e;
                    context = v0Var2.f53100a;
                    serviceConnection = v0Var2.f53111l;
                    context.unbindService(serviceConnection);
                    this.f53089e.f53106g = false;
                    this.f53089e.f53112m = null;
                    this.f53089e.f53111l = null;
                }
                this.f53089e.w();
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }
}
