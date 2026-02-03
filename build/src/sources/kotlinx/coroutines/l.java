package kotlinx.coroutines;

import java.util.concurrent.atomic.AtomicIntegerFieldUpdater;
import kotlin.coroutines.Continuation;
import kotlin.coroutines.CoroutineContext;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class l extends os.a0 {

    /* renamed from: p  reason: collision with root package name */
    private static final /* synthetic */ AtomicIntegerFieldUpdater f35524p = AtomicIntegerFieldUpdater.newUpdater(l.class, "_decision$volatile");
    private volatile /* synthetic */ int _decision$volatile;

    public l(CoroutineContext coroutineContext, Continuation continuation) {
        super(coroutineContext, continuation);
    }

    private final boolean a1() {
        AtomicIntegerFieldUpdater atomicIntegerFieldUpdater = f35524p;
        do {
            int i10 = atomicIntegerFieldUpdater.get(this);
            if (i10 != 0) {
                if (i10 == 1) {
                    return false;
                }
                throw new IllegalStateException("Already resumed");
            }
        } while (!f35524p.compareAndSet(this, 0, 2));
        return true;
    }

    private final boolean b1() {
        AtomicIntegerFieldUpdater atomicIntegerFieldUpdater = f35524p;
        do {
            int i10 = atomicIntegerFieldUpdater.get(this);
            if (i10 != 0) {
                if (i10 == 2) {
                    return false;
                }
                throw new IllegalStateException("Already suspended");
            }
        } while (!f35524p.compareAndSet(this, 0, 1));
        return true;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // os.a0, kotlinx.coroutines.b0
    public void C(Object obj) {
        Q0(obj);
    }

    @Override // os.a0, kotlinx.coroutines.a
    protected void Q0(Object obj) {
        if (a1()) {
            return;
        }
        os.j.b(rr.b.c(this.f44500o), js.t.a(obj, this.f44500o));
    }

    public final Object X0() {
        if (b1()) {
            return rr.b.f();
        }
        Object h10 = c0.h(c0());
        if (!(h10 instanceof js.r)) {
            return h10;
        }
        throw ((js.r) h10).f31981a;
    }
}
