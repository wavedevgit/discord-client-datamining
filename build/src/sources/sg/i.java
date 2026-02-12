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
    final /* synthetic */ o f48100e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public i(o oVar) {
        Objects.requireNonNull(oVar);
        this.f48100e = oVar;
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
        o oVar = this.f48100e;
        obj = oVar.f48111f;
        synchronized (obj) {
            try {
                atomicInteger = oVar.f48116k;
                if (atomicInteger.get() > 0) {
                    atomicInteger2 = oVar.f48116k;
                    if (atomicInteger2.decrementAndGet() > 0) {
                        dVar2 = oVar.f48107b;
                        dVar2.c("Leaving the connection open for other ongoing calls.", new Object[0]);
                        return;
                    }
                }
                iInterface = oVar.f48118m;
                if (iInterface != null) {
                    dVar = oVar.f48107b;
                    dVar.c("Unbind from service.", new Object[0]);
                    context = oVar.f48106a;
                    serviceConnection = oVar.f48117l;
                    context.unbindService(serviceConnection);
                    oVar.f48112g = false;
                    oVar.f48118m = null;
                    oVar.f48117l = null;
                }
                oVar.w();
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }
}
