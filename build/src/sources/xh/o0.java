package xh;

import java.util.concurrent.atomic.AtomicInteger;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class o0 extends l0 {

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ yg.k f54718e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ l0 f54719i;

    /* renamed from: o  reason: collision with root package name */
    final /* synthetic */ v0 f54720o;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public o0(v0 v0Var, yg.k kVar, yg.k kVar2, l0 l0Var) {
        super(kVar);
        this.f54718e = kVar2;
        this.f54719i = l0Var;
        this.f54720o = v0Var;
    }

    @Override // xh.l0
    public final void a() {
        Object obj;
        AtomicInteger atomicInteger;
        k0 k0Var;
        obj = this.f54720o.f54740f;
        synchronized (obj) {
            try {
                v0.o(this.f54720o, this.f54718e);
                atomicInteger = this.f54720o.f54745k;
                if (atomicInteger.getAndIncrement() > 0) {
                    k0Var = this.f54720o.f54736b;
                    k0Var.d("Already connected to the service.", new Object[0]);
                }
                v0.q(this.f54720o, this.f54719i);
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }
}
