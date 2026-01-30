package gs;

import java.util.concurrent.atomic.AtomicIntegerFieldUpdater;
import kotlinx.coroutines.Job;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class q1 extends z0 {

    /* renamed from: r  reason: collision with root package name */
    private static final /* synthetic */ AtomicIntegerFieldUpdater f27190r = AtomicIntegerFieldUpdater.newUpdater(q1.class, "_state$volatile");
    private volatile /* synthetic */ int _state$volatile;

    /* renamed from: p  reason: collision with root package name */
    private final Thread f27191p = Thread.currentThread();

    /* renamed from: q  reason: collision with root package name */
    private n0 f27192q;

    private final Void A(int i10) {
        throw new IllegalStateException(("Illegal state " + i10).toString());
    }

    public final void B(Job job) {
        n0 o10;
        int i10;
        o10 = kotlinx.coroutines.a0.o(job, false, this, 1, null);
        this.f27192q = o10;
        AtomicIntegerFieldUpdater atomicIntegerFieldUpdater = f27190r;
        do {
            i10 = atomicIntegerFieldUpdater.get(this);
            if (i10 != 0) {
                if (i10 != 2 && i10 != 3) {
                    A(i10);
                    throw new ir.h();
                }
                return;
            }
        } while (!f27190r.compareAndSet(this, i10, 0));
    }

    @Override // gs.z0
    public boolean v() {
        return true;
    }

    @Override // gs.z0
    public void w(Throwable th2) {
        int i10;
        AtomicIntegerFieldUpdater atomicIntegerFieldUpdater = f27190r;
        do {
            i10 = atomicIntegerFieldUpdater.get(this);
            if (i10 != 0) {
                if (i10 != 1 && i10 != 2 && i10 != 3) {
                    A(i10);
                    throw new ir.h();
                }
                return;
            }
        } while (!f27190r.compareAndSet(this, i10, 2));
        this.f27191p.interrupt();
        f27190r.set(this, 3);
    }

    public final void y() {
        AtomicIntegerFieldUpdater atomicIntegerFieldUpdater = f27190r;
        while (true) {
            int i10 = atomicIntegerFieldUpdater.get(this);
            if (i10 != 0) {
                if (i10 != 2) {
                    if (i10 == 3) {
                        Thread.interrupted();
                        return;
                    } else {
                        A(i10);
                        throw new ir.h();
                    }
                }
            } else if (f27190r.compareAndSet(this, i10, 1)) {
                n0 n0Var = this.f27192q;
                if (n0Var != null) {
                    n0Var.dispose();
                    return;
                }
                return;
            }
        }
    }
}
