package at;

import java.util.concurrent.CancellationException;
import kotlin.coroutines.Continuation;
import kotlin.coroutines.CoroutineContext;
import kotlin.jvm.functions.Function1;
import kotlinx.coroutines.b0;
import ys.y0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class h extends kotlinx.coroutines.a implements g {

    /* renamed from: o  reason: collision with root package name */
    private final g f6167o;

    public h(CoroutineContext coroutineContext, g gVar, boolean z10, boolean z11) {
        super(coroutineContext, z10, z11);
        this.f6167o = gVar;
    }

    @Override // kotlinx.coroutines.b0
    public void M(Throwable th2) {
        CancellationException K0 = b0.K0(this, th2, null, 1, null);
        this.f6167o.i(K0);
        K(K0);
    }

    @Override // at.w
    public void b(Function1 function1) {
        this.f6167o.b(function1);
    }

    @Override // at.w
    public Object d(Object obj) {
        return this.f6167o.d(obj);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final g d1() {
        return this.f6167o;
    }

    @Override // kotlinx.coroutines.b0, kotlinx.coroutines.Job, at.v
    public final void i(CancellationException cancellationException) {
        if (isCancelled()) {
            return;
        }
        if (cancellationException == null) {
            cancellationException = new y0(P(), null, this);
        }
        M(cancellationException);
    }

    @Override // at.v
    public i iterator() {
        return this.f6167o.iterator();
    }

    @Override // at.v
    public boolean j() {
        return this.f6167o.j();
    }

    @Override // at.v
    public gt.h k() {
        return this.f6167o.k();
    }

    @Override // at.v
    public gt.h l() {
        return this.f6167o.l();
    }

    @Override // at.v
    public Object o() {
        return this.f6167o.o();
    }

    @Override // at.w
    public boolean offer(Object obj) {
        return this.f6167o.offer(obj);
    }

    @Override // at.v
    public Object q(Continuation continuation) {
        Object q10 = this.f6167o.q(continuation);
        gs.b.f();
        return q10;
    }

    @Override // at.v
    public Object u(Continuation continuation) {
        return this.f6167o.u(continuation);
    }

    @Override // at.w
    public boolean v(Throwable th2) {
        return this.f6167o.v(th2);
    }

    @Override // at.w
    public Object x(Object obj, Continuation continuation) {
        return this.f6167o.x(obj, continuation);
    }

    @Override // at.w
    public boolean z() {
        return this.f6167o.z();
    }

    public final g c1() {
        return this;
    }
}
