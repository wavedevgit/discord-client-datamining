package qg;

import android.content.Context;
import android.content.ServiceConnection;
import android.os.IInterface;
import java.util.Objects;
import java.util.concurrent.atomic.AtomicInteger;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class i extends e {

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ o f47887e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public i(o oVar) {
        Objects.requireNonNull(oVar);
        this.f47887e = oVar;
    }

    @Override // qg.e
    public final void b() {
        Object obj;
        AtomicInteger atomicInteger;
        IInterface iInterface;
        d dVar;
        Context context;
        ServiceConnection serviceConnection;
        AtomicInteger atomicInteger2;
        d dVar2;
        o oVar = this.f47887e;
        obj = oVar.f47898f;
        synchronized (obj) {
            try {
                atomicInteger = oVar.f47903k;
                if (atomicInteger.get() > 0) {
                    atomicInteger2 = oVar.f47903k;
                    if (atomicInteger2.decrementAndGet() > 0) {
                        dVar2 = oVar.f47894b;
                        dVar2.c("Leaving the connection open for other ongoing calls.", new Object[0]);
                        return;
                    }
                }
                iInterface = oVar.f47905m;
                if (iInterface != null) {
                    dVar = oVar.f47894b;
                    dVar.c("Unbind from service.", new Object[0]);
                    context = oVar.f47893a;
                    serviceConnection = oVar.f47904l;
                    context.unbindService(serviceConnection);
                    oVar.f47899g = false;
                    oVar.f47905m = null;
                    oVar.f47904l = null;
                }
                oVar.w();
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }
}
