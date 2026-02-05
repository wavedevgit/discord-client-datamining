package wh;

import java.util.concurrent.atomic.AtomicInteger;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class o0 extends l0 {

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ xg.k f53083e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ l0 f53084i;

    /* renamed from: o  reason: collision with root package name */
    final /* synthetic */ v0 f53085o;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public o0(v0 v0Var, xg.k kVar, xg.k kVar2, l0 l0Var) {
        super(kVar);
        this.f53083e = kVar2;
        this.f53084i = l0Var;
        this.f53085o = v0Var;
    }

    @Override // wh.l0
    public final void a() {
        Object obj;
        AtomicInteger atomicInteger;
        k0 k0Var;
        obj = this.f53085o.f53105f;
        synchronized (obj) {
            try {
                v0.o(this.f53085o, this.f53083e);
                atomicInteger = this.f53085o.f53110k;
                if (atomicInteger.getAndIncrement() > 0) {
                    k0Var = this.f53085o.f53101b;
                    k0Var.d("Already connected to the service.", new Object[0]);
                }
                v0.q(this.f53085o, this.f53084i);
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }
}
