package th;

import java.util.concurrent.atomic.AtomicInteger;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class o0 extends l0 {

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ wg.k f49579e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ l0 f49580i;

    /* renamed from: o  reason: collision with root package name */
    final /* synthetic */ v0 f49581o;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public o0(v0 v0Var, wg.k kVar, wg.k kVar2, l0 l0Var) {
        super(kVar);
        this.f49579e = kVar2;
        this.f49580i = l0Var;
        this.f49581o = v0Var;
    }

    @Override // th.l0
    public final void a() {
        Object obj;
        AtomicInteger atomicInteger;
        k0 k0Var;
        obj = this.f49581o.f49601f;
        synchronized (obj) {
            try {
                v0.o(this.f49581o, this.f49579e);
                atomicInteger = this.f49581o.f49606k;
                if (atomicInteger.getAndIncrement() > 0) {
                    k0Var = this.f49581o.f49597b;
                    k0Var.d("Already connected to the service.", new Object[0]);
                }
                v0.q(this.f49581o, this.f49580i);
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }
}
