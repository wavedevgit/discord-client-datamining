package gi;

import java.util.concurrent.atomic.AtomicInteger;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class x0 extends u0 {

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ wg.k f26948e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ u0 f26949i;

    /* renamed from: o  reason: collision with root package name */
    final /* synthetic */ f f26950o;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public x0(f fVar, wg.k kVar, wg.k kVar2, u0 u0Var) {
        super(kVar);
        this.f26948e = kVar2;
        this.f26949i = u0Var;
        this.f26950o = fVar;
    }

    @Override // gi.u0
    public final void b() {
        Object obj;
        AtomicInteger atomicInteger;
        t0 t0Var;
        obj = this.f26950o.f26915f;
        synchronized (obj) {
            try {
                f.o(this.f26950o, this.f26948e);
                atomicInteger = this.f26950o.f26921l;
                if (atomicInteger.getAndIncrement() > 0) {
                    t0Var = this.f26950o.f26911b;
                    t0Var.c("Already connected to the service.", new Object[0]);
                }
                f.q(this.f26950o, this.f26949i);
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }
}
