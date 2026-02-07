package ts;

import java.util.concurrent.atomic.AtomicIntegerFieldUpdater;
import kotlin.coroutines.CoroutineContext;
import os.f1;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class b0 extends c implements f1 {

    /* renamed from: o  reason: collision with root package name */
    private static final /* synthetic */ AtomicIntegerFieldUpdater f50862o = AtomicIntegerFieldUpdater.newUpdater(b0.class, "cleanedAndPointers$volatile");
    private volatile /* synthetic */ int cleanedAndPointers$volatile;

    /* renamed from: i  reason: collision with root package name */
    public final long f50863i;

    public b0(long j10, b0 b0Var, int i10) {
        super(b0Var);
        this.f50863i = j10;
        this.cleanedAndPointers$volatile = i10 << 16;
    }

    @Override // ts.c
    public boolean k() {
        if (f50862o.get(this) == r() && !l()) {
            return true;
        }
        return false;
    }

    public final boolean p() {
        if (f50862o.addAndGet(this, -65536) == r() && !l()) {
            return true;
        }
        return false;
    }

    public abstract int r();

    public abstract void s(int i10, Throwable th2, CoroutineContext coroutineContext);

    public final void t() {
        if (f50862o.incrementAndGet(this) == r()) {
            n();
        }
    }

    public final boolean u() {
        int i10;
        AtomicIntegerFieldUpdater atomicIntegerFieldUpdater = f50862o;
        do {
            i10 = atomicIntegerFieldUpdater.get(this);
            if (i10 == r() && !l()) {
                return false;
            }
        } while (!atomicIntegerFieldUpdater.compareAndSet(this, i10, 65536 + i10));
        return true;
    }
}
