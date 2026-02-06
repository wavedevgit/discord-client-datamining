package xh;

import java.util.concurrent.atomic.AtomicInteger;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class o0 extends l0 {

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ yg.k f54670e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ l0 f54671i;

    /* renamed from: o  reason: collision with root package name */
    final /* synthetic */ v0 f54672o;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public o0(v0 v0Var, yg.k kVar, yg.k kVar2, l0 l0Var) {
        super(kVar);
        this.f54670e = kVar2;
        this.f54671i = l0Var;
        this.f54672o = v0Var;
    }

    @Override // xh.l0
    public final void a() {
        Object obj;
        AtomicInteger atomicInteger;
        k0 k0Var;
        obj = this.f54672o.f54692f;
        synchronized (obj) {
            try {
                v0.o(this.f54672o, this.f54670e);
                atomicInteger = this.f54672o.f54697k;
                if (atomicInteger.getAndIncrement() > 0) {
                    k0Var = this.f54672o.f54688b;
                    k0Var.d("Already connected to the service.", new Object[0]);
                }
                v0.q(this.f54672o, this.f54671i);
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }
}
