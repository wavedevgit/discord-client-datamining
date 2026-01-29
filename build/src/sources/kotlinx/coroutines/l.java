package kotlinx.coroutines;

import java.util.concurrent.atomic.AtomicIntegerFieldUpdater;
import kotlin.coroutines.Continuation;
import kotlin.coroutines.CoroutineContext;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class l extends ls.a0 {

    /* renamed from: p  reason: collision with root package name */
    private static final /* synthetic */ AtomicIntegerFieldUpdater f36342p = AtomicIntegerFieldUpdater.newUpdater(l.class, "_decision$volatile");
    private volatile /* synthetic */ int _decision$volatile;

    public l(CoroutineContext coroutineContext, Continuation continuation) {
        super(coroutineContext, continuation);
    }

    private final boolean b1() {
        AtomicIntegerFieldUpdater atomicIntegerFieldUpdater = f36342p;
        do {
            int i10 = atomicIntegerFieldUpdater.get(this);
            if (i10 != 0) {
                if (i10 == 1) {
                    return false;
                }
                throw new IllegalStateException("Already resumed");
            }
        } while (!f36342p.compareAndSet(this, 0, 2));
        return true;
    }

    private final boolean c1() {
        AtomicIntegerFieldUpdater atomicIntegerFieldUpdater = f36342p;
        do {
            int i10 = atomicIntegerFieldUpdater.get(this);
            if (i10 != 0) {
                if (i10 == 2) {
                    return false;
                }
                throw new IllegalStateException("Already suspended");
            }
        } while (!f36342p.compareAndSet(this, 0, 1));
        return true;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // ls.a0, kotlinx.coroutines.b0
    public void C(Object obj) {
        Q0(obj);
    }

    @Override // ls.a0, kotlinx.coroutines.a
    protected void Q0(Object obj) {
        if (b1()) {
            return;
        }
        ls.j.b(or.b.c(this.f37429o), gs.t.a(obj, this.f37429o));
    }

    public final Object Z0() {
        if (c1()) {
            return or.b.f();
        }
        Object h10 = c0.h(c0());
        if (!(h10 instanceof gs.r)) {
            return h10;
        }
        throw ((gs.r) h10).f27178a;
    }
}
