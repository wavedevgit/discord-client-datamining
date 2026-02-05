package qg;

import java.util.Objects;
import java.util.concurrent.atomic.AtomicInteger;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class h extends e {

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ xg.k f47884e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ e f47885i;

    /* renamed from: o  reason: collision with root package name */
    final /* synthetic */ o f47886o;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public h(o oVar, xg.k kVar, xg.k kVar2, e eVar) {
        super(kVar);
        this.f47884e = kVar2;
        this.f47885i = eVar;
        Objects.requireNonNull(oVar);
        this.f47886o = oVar;
    }

    @Override // qg.e
    public final void b() {
        Object obj;
        AtomicInteger atomicInteger;
        d dVar;
        o oVar = this.f47886o;
        obj = oVar.f47898f;
        synchronized (obj) {
            try {
                o.o(oVar, this.f47884e);
                atomicInteger = oVar.f47903k;
                if (atomicInteger.getAndIncrement() > 0) {
                    dVar = oVar.f47894b;
                    dVar.c("Already connected to the service.", new Object[0]);
                }
                o.q(oVar, this.f47885i);
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }
}
