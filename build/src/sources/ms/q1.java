package ms;

import java.util.concurrent.atomic.AtomicIntegerFieldUpdater;
import kotlinx.coroutines.Job;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class q1 extends z0 {

    /* renamed from: r  reason: collision with root package name */
    private static final /* synthetic */ AtomicIntegerFieldUpdater f38939r = AtomicIntegerFieldUpdater.newUpdater(q1.class, "_state$volatile");
    private volatile /* synthetic */ int _state$volatile;

    /* renamed from: p  reason: collision with root package name */
    private final Thread f38940p = Thread.currentThread();

    /* renamed from: q  reason: collision with root package name */
    private n0 f38941q;

    private final Void A(int i10) {
        throw new IllegalStateException(("Illegal state " + i10).toString());
    }

    public final void B(Job job) {
        n0 o10;
        int i10;
        o10 = kotlinx.coroutines.a0.o(job, false, this, 1, null);
        this.f38941q = o10;
        AtomicIntegerFieldUpdater atomicIntegerFieldUpdater = f38939r;
        do {
            i10 = atomicIntegerFieldUpdater.get(this);
            if (i10 != 0) {
                if (i10 != 2 && i10 != 3) {
                    A(i10);
                    throw new or.h();
                }
                return;
            }
        } while (!f38939r.compareAndSet(this, i10, 0));
    }

    @Override // ms.z0
    public boolean v() {
        return true;
    }

    @Override // ms.z0
    public void w(Throwable th2) {
        int i10;
        AtomicIntegerFieldUpdater atomicIntegerFieldUpdater = f38939r;
        do {
            i10 = atomicIntegerFieldUpdater.get(this);
            if (i10 != 0) {
                if (i10 != 1 && i10 != 2 && i10 != 3) {
                    A(i10);
                    throw new or.h();
                }
                return;
            }
        } while (!f38939r.compareAndSet(this, i10, 2));
        this.f38940p.interrupt();
        f38939r.set(this, 3);
    }

    public final void y() {
        AtomicIntegerFieldUpdater atomicIntegerFieldUpdater = f38939r;
        while (true) {
            int i10 = atomicIntegerFieldUpdater.get(this);
            if (i10 != 0) {
                if (i10 != 2) {
                    if (i10 == 3) {
                        Thread.interrupted();
                        return;
                    } else {
                        A(i10);
                        throw new or.h();
                    }
                }
            } else if (f38939r.compareAndSet(this, i10, 1)) {
                n0 n0Var = this.f38941q;
                if (n0Var != null) {
                    n0Var.dispose();
                    return;
                }
                return;
            }
        }
    }
}
