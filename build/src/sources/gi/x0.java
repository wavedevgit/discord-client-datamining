package gi;

import java.util.concurrent.atomic.AtomicInteger;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class x0 extends u0 {

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ wg.k f27059e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ u0 f27060i;

    /* renamed from: o  reason: collision with root package name */
    final /* synthetic */ f f27061o;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public x0(f fVar, wg.k kVar, wg.k kVar2, u0 u0Var) {
        super(kVar);
        this.f27059e = kVar2;
        this.f27060i = u0Var;
        this.f27061o = fVar;
    }

    @Override // gi.u0
    public final void b() {
        Object obj;
        AtomicInteger atomicInteger;
        t0 t0Var;
        obj = this.f27061o.f27026f;
        synchronized (obj) {
            try {
                f.o(this.f27061o, this.f27059e);
                atomicInteger = this.f27061o.f27032l;
                if (atomicInteger.getAndIncrement() > 0) {
                    t0Var = this.f27061o.f27022b;
                    t0Var.c("Already connected to the service.", new Object[0]);
                }
                f.q(this.f27061o, this.f27060i);
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }
}
