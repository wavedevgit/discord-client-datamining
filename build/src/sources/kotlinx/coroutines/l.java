package kotlinx.coroutines;

import java.util.concurrent.atomic.AtomicIntegerFieldUpdater;
import kotlin.coroutines.Continuation;
import kotlin.coroutines.CoroutineContext;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class l extends us.a0 {

    /* renamed from: p  reason: collision with root package name */
    private static final /* synthetic */ AtomicIntegerFieldUpdater f34825p = AtomicIntegerFieldUpdater.newUpdater(l.class, "_decision$volatile");
    private volatile /* synthetic */ int _decision$volatile;

    public l(CoroutineContext coroutineContext, Continuation continuation) {
        super(coroutineContext, continuation);
    }

    private final boolean c1() {
        AtomicIntegerFieldUpdater atomicIntegerFieldUpdater = f34825p;
        do {
            int i10 = atomicIntegerFieldUpdater.get(this);
            if (i10 != 0) {
                if (i10 == 1) {
                    return false;
                }
                throw new IllegalStateException("Already resumed");
            }
        } while (!f34825p.compareAndSet(this, 0, 2));
        return true;
    }

    private final boolean d1() {
        AtomicIntegerFieldUpdater atomicIntegerFieldUpdater = f34825p;
        do {
            int i10 = atomicIntegerFieldUpdater.get(this);
            if (i10 != 0) {
                if (i10 == 2) {
                    return false;
                }
                throw new IllegalStateException("Already suspended");
            }
        } while (!f34825p.compareAndSet(this, 0, 1));
        return true;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // us.a0, kotlinx.coroutines.b0
    public void F(Object obj) {
        S0(obj);
    }

    @Override // us.a0, kotlinx.coroutines.a
    protected void S0(Object obj) {
        if (c1()) {
            return;
        }
        us.j.b(xr.b.c(this.f51765o), ps.t.a(obj, this.f51765o));
    }

    public final Object Z0() {
        if (d1()) {
            return xr.b.f();
        }
        Object h10 = c0.h(e0());
        if (!(h10 instanceof ps.r)) {
            return h10;
        }
        throw ((ps.r) h10).f44530a;
    }
}
