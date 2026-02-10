package sg;

import java.util.Objects;
import java.util.concurrent.atomic.AtomicInteger;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class h extends e {

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ zg.k f49780e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ e f49781i;

    /* renamed from: o  reason: collision with root package name */
    final /* synthetic */ o f49782o;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public h(o oVar, zg.k kVar, zg.k kVar2, e eVar) {
        super(kVar);
        this.f49780e = kVar2;
        this.f49781i = eVar;
        Objects.requireNonNull(oVar);
        this.f49782o = oVar;
    }

    @Override // sg.e
    public final void b() {
        Object obj;
        AtomicInteger atomicInteger;
        d dVar;
        o oVar = this.f49782o;
        obj = oVar.f49794f;
        synchronized (obj) {
            try {
                o.o(oVar, this.f49780e);
                atomicInteger = oVar.f49799k;
                if (atomicInteger.getAndIncrement() > 0) {
                    dVar = oVar.f49790b;
                    dVar.c("Already connected to the service.", new Object[0]);
                }
                o.q(oVar, this.f49781i);
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }
}
