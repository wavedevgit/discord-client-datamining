package os;

import java.util.concurrent.atomic.AtomicIntegerFieldUpdater;
import kotlinx.coroutines.Job;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class q1 extends z0 {

    /* renamed from: r  reason: collision with root package name */
    private static final /* synthetic */ AtomicIntegerFieldUpdater f43569r = AtomicIntegerFieldUpdater.newUpdater(q1.class, "_state$volatile");
    private volatile /* synthetic */ int _state$volatile;

    /* renamed from: p  reason: collision with root package name */
    private final Thread f43570p = Thread.currentThread();

    /* renamed from: q  reason: collision with root package name */
    private n0 f43571q;

    private final Void A(int i10) {
        throw new IllegalStateException(("Illegal state " + i10).toString());
    }

    public final void B(Job job) {
        n0 o10;
        int i10;
        o10 = kotlinx.coroutines.a0.o(job, false, this, 1, null);
        this.f43571q = o10;
        AtomicIntegerFieldUpdater atomicIntegerFieldUpdater = f43569r;
        do {
            i10 = atomicIntegerFieldUpdater.get(this);
            if (i10 != 0) {
                if (i10 != 2 && i10 != 3) {
                    A(i10);
                    throw new qr.h();
                }
                return;
            }
        } while (!f43569r.compareAndSet(this, i10, 0));
    }

    @Override // os.z0
    public boolean v() {
        return true;
    }

    @Override // os.z0
    public void w(Throwable th2) {
        int i10;
        AtomicIntegerFieldUpdater atomicIntegerFieldUpdater = f43569r;
        do {
            i10 = atomicIntegerFieldUpdater.get(this);
            if (i10 != 0) {
                if (i10 != 1 && i10 != 2 && i10 != 3) {
                    A(i10);
                    throw new qr.h();
                }
                return;
            }
        } while (!f43569r.compareAndSet(this, i10, 2));
        this.f43570p.interrupt();
        f43569r.set(this, 3);
    }

    public final void y() {
        AtomicIntegerFieldUpdater atomicIntegerFieldUpdater = f43569r;
        while (true) {
            int i10 = atomicIntegerFieldUpdater.get(this);
            if (i10 != 0) {
                if (i10 != 2) {
                    if (i10 == 3) {
                        Thread.interrupted();
                        return;
                    } else {
                        A(i10);
                        throw new qr.h();
                    }
                }
            } else if (f43569r.compareAndSet(this, i10, 1)) {
                n0 n0Var = this.f43571q;
                if (n0Var != null) {
                    n0Var.dispose();
                    return;
                }
                return;
            }
        }
    }
}
