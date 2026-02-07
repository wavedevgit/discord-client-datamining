package rg;

import android.content.Context;
import android.content.ServiceConnection;
import android.os.IInterface;
import java.util.Objects;
import java.util.concurrent.atomic.AtomicInteger;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class i extends e {

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ o f48958e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public i(o oVar) {
        Objects.requireNonNull(oVar);
        this.f48958e = oVar;
    }

    @Override // rg.e
    public final void b() {
        Object obj;
        AtomicInteger atomicInteger;
        IInterface iInterface;
        d dVar;
        Context context;
        ServiceConnection serviceConnection;
        AtomicInteger atomicInteger2;
        d dVar2;
        o oVar = this.f48958e;
        obj = oVar.f48969f;
        synchronized (obj) {
            try {
                atomicInteger = oVar.f48974k;
                if (atomicInteger.get() > 0) {
                    atomicInteger2 = oVar.f48974k;
                    if (atomicInteger2.decrementAndGet() > 0) {
                        dVar2 = oVar.f48965b;
                        dVar2.c("Leaving the connection open for other ongoing calls.", new Object[0]);
                        return;
                    }
                }
                iInterface = oVar.f48976m;
                if (iInterface != null) {
                    dVar = oVar.f48965b;
                    dVar.c("Unbind from service.", new Object[0]);
                    context = oVar.f48964a;
                    serviceConnection = oVar.f48975l;
                    context.unbindService(serviceConnection);
                    oVar.f48970g = false;
                    oVar.f48976m = null;
                    oVar.f48975l = null;
                }
                oVar.w();
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }
}
