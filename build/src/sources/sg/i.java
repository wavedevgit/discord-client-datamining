package sg;

import android.content.Context;
import android.content.ServiceConnection;
import android.os.IInterface;
import java.util.Objects;
import java.util.concurrent.atomic.AtomicInteger;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class i extends e {

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ o f49783e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public i(o oVar) {
        Objects.requireNonNull(oVar);
        this.f49783e = oVar;
    }

    @Override // sg.e
    public final void b() {
        Object obj;
        AtomicInteger atomicInteger;
        IInterface iInterface;
        d dVar;
        Context context;
        ServiceConnection serviceConnection;
        AtomicInteger atomicInteger2;
        d dVar2;
        o oVar = this.f49783e;
        obj = oVar.f49794f;
        synchronized (obj) {
            try {
                atomicInteger = oVar.f49799k;
                if (atomicInteger.get() > 0) {
                    atomicInteger2 = oVar.f49799k;
                    if (atomicInteger2.decrementAndGet() > 0) {
                        dVar2 = oVar.f49790b;
                        dVar2.c("Leaving the connection open for other ongoing calls.", new Object[0]);
                        return;
                    }
                }
                iInterface = oVar.f49801m;
                if (iInterface != null) {
                    dVar = oVar.f49790b;
                    dVar.c("Unbind from service.", new Object[0]);
                    context = oVar.f49789a;
                    serviceConnection = oVar.f49800l;
                    context.unbindService(serviceConnection);
                    oVar.f49795g = false;
                    oVar.f49801m = null;
                    oVar.f49800l = null;
                }
                oVar.w();
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }
}
