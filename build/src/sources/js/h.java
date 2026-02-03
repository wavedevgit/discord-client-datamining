package js;

import hs.y0;
import java.util.concurrent.CancellationException;
import kotlin.coroutines.Continuation;
import kotlin.coroutines.CoroutineContext;
import kotlin.jvm.functions.Function1;
import kotlinx.coroutines.b0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class h extends kotlinx.coroutines.a implements g {

    /* renamed from: o  reason: collision with root package name */
    private final g f32267o;

    public h(CoroutineContext coroutineContext, g gVar, boolean z10, boolean z11) {
        super(coroutineContext, z10, z11);
        this.f32267o = gVar;
    }

    @Override // kotlinx.coroutines.b0
    public void I(Throwable th2) {
        CancellationException F0 = b0.F0(this, th2, null, 1, null);
        this.f32267o.h(F0);
        G(F0);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final g X0() {
        return this.f32267o;
    }

    @Override // js.w
    public void b(Function1 function1) {
        this.f32267o.b(function1);
    }

    @Override // js.w
    public Object d(Object obj) {
        return this.f32267o.d(obj);
    }

    @Override // kotlinx.coroutines.b0, kotlinx.coroutines.Job, js.v
    public final void h(CancellationException cancellationException) {
        if (isCancelled()) {
            return;
        }
        if (cancellationException == null) {
            cancellationException = new y0(M(), null, this);
        }
        I(cancellationException);
    }

    @Override // js.v
    public boolean i() {
        return this.f32267o.i();
    }

    @Override // js.v
    public i iterator() {
        return this.f32267o.iterator();
    }

    @Override // js.v
    public ps.h j() {
        return this.f32267o.j();
    }

    @Override // js.v
    public ps.h k() {
        return this.f32267o.k();
    }

    @Override // js.v
    public Object m() {
        return this.f32267o.m();
    }

    @Override // js.v
    public Object o(Continuation continuation) {
        Object o10 = this.f32267o.o(continuation);
        pr.b.f();
        return o10;
    }

    @Override // js.w
    public boolean offer(Object obj) {
        return this.f32267o.offer(obj);
    }

    @Override // js.v
    public Object r(Continuation continuation) {
        return this.f32267o.r(continuation);
    }

    @Override // js.w
    public boolean s(Throwable th2) {
        return this.f32267o.s(th2);
    }

    @Override // js.w
    public Object u(Object obj, Continuation continuation) {
        return this.f32267o.u(obj, continuation);
    }

    @Override // js.w
    public boolean v() {
        return this.f32267o.v();
    }

    public final g W0() {
        return this;
    }
}
