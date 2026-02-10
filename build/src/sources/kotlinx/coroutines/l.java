package kotlinx.coroutines;

import java.util.concurrent.atomic.AtomicIntegerFieldUpdater;
import kotlin.coroutines.Continuation;
import kotlin.coroutines.CoroutineContext;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class l extends dt.a0 {

    /* renamed from: p  reason: collision with root package name */
    private static final /* synthetic */ AtomicIntegerFieldUpdater f35047p = AtomicIntegerFieldUpdater.newUpdater(l.class, "_decision$volatile");
    private volatile /* synthetic */ int _decision$volatile;

    public l(CoroutineContext coroutineContext, Continuation continuation) {
        super(coroutineContext, continuation);
    }

    private final boolean g1() {
        AtomicIntegerFieldUpdater atomicIntegerFieldUpdater = f35047p;
        do {
            int i10 = atomicIntegerFieldUpdater.get(this);
            if (i10 != 0) {
                if (i10 == 1) {
                    return false;
                }
                throw new IllegalStateException("Already resumed");
            }
        } while (!f35047p.compareAndSet(this, 0, 2));
        return true;
    }

    private final boolean h1() {
        AtomicIntegerFieldUpdater atomicIntegerFieldUpdater = f35047p;
        do {
            int i10 = atomicIntegerFieldUpdater.get(this);
            if (i10 != 0) {
                if (i10 == 2) {
                    return false;
                }
                throw new IllegalStateException("Already suspended");
            }
        } while (!f35047p.compareAndSet(this, 0, 1));
        return true;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // dt.a0, kotlinx.coroutines.b0
    public void F(Object obj) {
        V0(obj);
    }

    @Override // dt.a0, kotlinx.coroutines.a
    protected void V0(Object obj) {
        if (g1()) {
            return;
        }
        dt.j.b(gs.b.c(this.f21867o), ys.t.a(obj, this.f21867o));
    }

    public final Object d1() {
        if (h1()) {
            return gs.b.f();
        }
        Object h10 = c0.h(f0());
        if (!(h10 instanceof ys.r)) {
            return h10;
        }
        throw ((ys.r) h10).f55816a;
    }
}
