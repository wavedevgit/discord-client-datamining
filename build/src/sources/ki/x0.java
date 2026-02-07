package ki;

import java.util.concurrent.atomic.AtomicInteger;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class x0 extends u0 {

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ yg.k f31751e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ u0 f31752i;

    /* renamed from: o  reason: collision with root package name */
    final /* synthetic */ f f31753o;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public x0(f fVar, yg.k kVar, yg.k kVar2, u0 u0Var) {
        super(kVar);
        this.f31751e = kVar2;
        this.f31752i = u0Var;
        this.f31753o = fVar;
    }

    @Override // ki.u0
    public final void b() {
        Object obj;
        AtomicInteger atomicInteger;
        t0 t0Var;
        obj = this.f31753o.f31718f;
        synchronized (obj) {
            try {
                f.o(this.f31753o, this.f31751e);
                atomicInteger = this.f31753o.f31724l;
                if (atomicInteger.getAndIncrement() > 0) {
                    t0Var = this.f31753o.f31714b;
                    t0Var.c("Already connected to the service.", new Object[0]);
                }
                f.q(this.f31753o, this.f31752i);
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }
}
