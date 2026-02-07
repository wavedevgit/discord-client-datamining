package rg;

import java.util.Objects;
import java.util.concurrent.atomic.AtomicInteger;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class h extends e {

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ yg.k f48955e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ e f48956i;

    /* renamed from: o  reason: collision with root package name */
    final /* synthetic */ o f48957o;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public h(o oVar, yg.k kVar, yg.k kVar2, e eVar) {
        super(kVar);
        this.f48955e = kVar2;
        this.f48956i = eVar;
        Objects.requireNonNull(oVar);
        this.f48957o = oVar;
    }

    @Override // rg.e
    public final void b() {
        Object obj;
        AtomicInteger atomicInteger;
        d dVar;
        o oVar = this.f48957o;
        obj = oVar.f48969f;
        synchronized (obj) {
            try {
                o.o(oVar, this.f48955e);
                atomicInteger = oVar.f48974k;
                if (atomicInteger.getAndIncrement() > 0) {
                    dVar = oVar.f48965b;
                    dVar.c("Already connected to the service.", new Object[0]);
                }
                o.q(oVar, this.f48956i);
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }
}
