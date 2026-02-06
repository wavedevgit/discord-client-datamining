package ki;

import java.util.concurrent.atomic.AtomicInteger;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class x0 extends u0 {

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ yg.k f31703e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ u0 f31704i;

    /* renamed from: o  reason: collision with root package name */
    final /* synthetic */ f f31705o;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public x0(f fVar, yg.k kVar, yg.k kVar2, u0 u0Var) {
        super(kVar);
        this.f31703e = kVar2;
        this.f31704i = u0Var;
        this.f31705o = fVar;
    }

    @Override // ki.u0
    public final void b() {
        Object obj;
        AtomicInteger atomicInteger;
        t0 t0Var;
        obj = this.f31705o.f31670f;
        synchronized (obj) {
            try {
                f.o(this.f31705o, this.f31703e);
                atomicInteger = this.f31705o.f31676l;
                if (atomicInteger.getAndIncrement() > 0) {
                    t0Var = this.f31705o.f31666b;
                    t0Var.c("Already connected to the service.", new Object[0]);
                }
                f.q(this.f31705o, this.f31704i);
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }
}
