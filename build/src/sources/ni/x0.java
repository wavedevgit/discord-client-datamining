package ni;

import java.util.concurrent.atomic.AtomicInteger;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class x0 extends u0 {

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ zg.k f37941e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ u0 f37942i;

    /* renamed from: o  reason: collision with root package name */
    final /* synthetic */ f f37943o;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public x0(f fVar, zg.k kVar, zg.k kVar2, u0 u0Var) {
        super(kVar);
        this.f37941e = kVar2;
        this.f37942i = u0Var;
        this.f37943o = fVar;
    }

    @Override // ni.u0
    public final void b() {
        Object obj;
        AtomicInteger atomicInteger;
        t0 t0Var;
        obj = this.f37943o.f37908f;
        synchronized (obj) {
            try {
                f.o(this.f37943o, this.f37941e);
                atomicInteger = this.f37943o.f37914l;
                if (atomicInteger.getAndIncrement() > 0) {
                    t0Var = this.f37943o.f37904b;
                    t0Var.c("Already connected to the service.", new Object[0]);
                }
                f.q(this.f37943o, this.f37942i);
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }
}
