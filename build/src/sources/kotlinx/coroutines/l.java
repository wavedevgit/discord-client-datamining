package kotlinx.coroutines;

import java.util.concurrent.atomic.AtomicIntegerFieldUpdater;
import kotlin.coroutines.Continuation;
import kotlin.coroutines.CoroutineContext;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class l extends rs.a0 {

    /* renamed from: p  reason: collision with root package name */
    private static final /* synthetic */ AtomicIntegerFieldUpdater f35048p = AtomicIntegerFieldUpdater.newUpdater(l.class, "_decision$volatile");
    private volatile /* synthetic */ int _decision$volatile;

    public l(CoroutineContext coroutineContext, Continuation continuation) {
        super(coroutineContext, continuation);
    }

    private final boolean b1() {
        AtomicIntegerFieldUpdater atomicIntegerFieldUpdater = f35048p;
        do {
            int i10 = atomicIntegerFieldUpdater.get(this);
            if (i10 != 0) {
                if (i10 == 1) {
                    return false;
                }
                throw new IllegalStateException("Already resumed");
            }
        } while (!f35048p.compareAndSet(this, 0, 2));
        return true;
    }

    private final boolean c1() {
        AtomicIntegerFieldUpdater atomicIntegerFieldUpdater = f35048p;
        do {
            int i10 = atomicIntegerFieldUpdater.get(this);
            if (i10 != 0) {
                if (i10 == 2) {
                    return false;
                }
                throw new IllegalStateException("Already suspended");
            }
        } while (!f35048p.compareAndSet(this, 0, 1));
        return true;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // rs.a0, kotlinx.coroutines.b0
    public void C(Object obj) {
        Q0(obj);
    }

    @Override // rs.a0, kotlinx.coroutines.a
    protected void Q0(Object obj) {
        if (b1()) {
            return;
        }
        rs.j.b(ur.b.c(this.f48949o), ms.t.a(obj, this.f48949o));
    }

    public final Object X0() {
        if (c1()) {
            return ur.b.f();
        }
        Object h10 = c0.h(d0());
        if (!(h10 instanceof ms.r)) {
            return h10;
        }
        throw ((ms.r) h10).f38943a;
    }
}
