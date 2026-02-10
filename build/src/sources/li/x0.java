package li;

import java.util.concurrent.atomic.AtomicInteger;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class x0 extends u0 {

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ zg.k f35971e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ u0 f35972i;

    /* renamed from: o  reason: collision with root package name */
    final /* synthetic */ f f35973o;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public x0(f fVar, zg.k kVar, zg.k kVar2, u0 u0Var) {
        super(kVar);
        this.f35971e = kVar2;
        this.f35972i = u0Var;
        this.f35973o = fVar;
    }

    @Override // li.u0
    public final void b() {
        Object obj;
        AtomicInteger atomicInteger;
        t0 t0Var;
        obj = this.f35973o.f35938f;
        synchronized (obj) {
            try {
                f.o(this.f35973o, this.f35971e);
                atomicInteger = this.f35973o.f35944l;
                if (atomicInteger.getAndIncrement() > 0) {
                    t0Var = this.f35973o.f35934b;
                    t0Var.c("Already connected to the service.", new Object[0]);
                }
                f.q(this.f35973o, this.f35972i);
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }
}
