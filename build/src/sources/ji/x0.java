package ji;

import java.util.concurrent.atomic.AtomicInteger;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class x0 extends u0 {

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ xg.k f30955e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ u0 f30956i;

    /* renamed from: o  reason: collision with root package name */
    final /* synthetic */ f f30957o;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public x0(f fVar, xg.k kVar, xg.k kVar2, u0 u0Var) {
        super(kVar);
        this.f30955e = kVar2;
        this.f30956i = u0Var;
        this.f30957o = fVar;
    }

    @Override // ji.u0
    public final void b() {
        Object obj;
        AtomicInteger atomicInteger;
        t0 t0Var;
        obj = this.f30957o.f30922f;
        synchronized (obj) {
            try {
                f.o(this.f30957o, this.f30955e);
                atomicInteger = this.f30957o.f30928l;
                if (atomicInteger.getAndIncrement() > 0) {
                    t0Var = this.f30957o.f30918b;
                    t0Var.c("Already connected to the service.", new Object[0]);
                }
                f.q(this.f30957o, this.f30956i);
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }
}
