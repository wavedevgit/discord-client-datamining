package sg;

import java.util.Objects;
import java.util.concurrent.atomic.AtomicInteger;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class h extends e {

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ zg.k f48097e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ e f48098i;

    /* renamed from: o  reason: collision with root package name */
    final /* synthetic */ o f48099o;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public h(o oVar, zg.k kVar, zg.k kVar2, e eVar) {
        super(kVar);
        this.f48097e = kVar2;
        this.f48098i = eVar;
        Objects.requireNonNull(oVar);
        this.f48099o = oVar;
    }

    @Override // sg.e
    public final void b() {
        Object obj;
        AtomicInteger atomicInteger;
        d dVar;
        o oVar = this.f48099o;
        obj = oVar.f48111f;
        synchronized (obj) {
            try {
                o.o(oVar, this.f48097e);
                atomicInteger = oVar.f48116k;
                if (atomicInteger.getAndIncrement() > 0) {
                    dVar = oVar.f48107b;
                    dVar.c("Already connected to the service.", new Object[0]);
                }
                o.q(oVar, this.f48098i);
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }
}
