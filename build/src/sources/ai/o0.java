package ai;

import java.util.concurrent.atomic.AtomicInteger;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class o0 extends l0 {

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ zg.k f812e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ l0 f813i;

    /* renamed from: o  reason: collision with root package name */
    final /* synthetic */ v0 f814o;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public o0(v0 v0Var, zg.k kVar, zg.k kVar2, l0 l0Var) {
        super(kVar);
        this.f812e = kVar2;
        this.f813i = l0Var;
        this.f814o = v0Var;
    }

    @Override // ai.l0
    public final void a() {
        Object obj;
        AtomicInteger atomicInteger;
        k0 k0Var;
        obj = this.f814o.f834f;
        synchronized (obj) {
            try {
                v0.o(this.f814o, this.f812e);
                atomicInteger = this.f814o.f839k;
                if (atomicInteger.getAndIncrement() > 0) {
                    k0Var = this.f814o.f830b;
                    k0Var.d("Already connected to the service.", new Object[0]);
                }
                v0.q(this.f814o, this.f813i);
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }
}
