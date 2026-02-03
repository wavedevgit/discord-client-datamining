package ls;

import java.util.concurrent.CancellationException;
import js.y0;
import kotlin.coroutines.Continuation;
import kotlin.coroutines.CoroutineContext;
import kotlin.jvm.functions.Function1;
import kotlinx.coroutines.b0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class h extends kotlinx.coroutines.a implements g {

    /* renamed from: o  reason: collision with root package name */
    private final g f37205o;

    public h(CoroutineContext coroutineContext, g gVar, boolean z10, boolean z11) {
        super(coroutineContext, z10, z11);
        this.f37205o = gVar;
    }

    @Override // kotlinx.coroutines.b0
    public void I(Throwable th2) {
        CancellationException G0 = b0.G0(this, th2, null, 1, null);
        this.f37205o.h(G0);
        G(G0);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final g X0() {
        return this.f37205o;
    }

    @Override // ls.v
    public boolean b() {
        return this.f37205o.b();
    }

    @Override // ls.w
    public void d(Function1 function1) {
        this.f37205o.d(function1);
    }

    @Override // kotlinx.coroutines.b0, kotlinx.coroutines.Job
    public final void h(CancellationException cancellationException) {
        if (isCancelled()) {
            return;
        }
        if (cancellationException == null) {
            cancellationException = new y0(M(), null, this);
        }
        I(cancellationException);
    }

    @Override // ls.w
    public Object i(Object obj) {
        return this.f37205o.i(obj);
    }

    @Override // ls.v
    public i iterator() {
        return this.f37205o.iterator();
    }

    @Override // ls.v
    public rs.h j() {
        return this.f37205o.j();
    }

    @Override // ls.v
    public rs.h k() {
        return this.f37205o.k();
    }

    @Override // ls.v
    public Object m() {
        return this.f37205o.m();
    }

    @Override // ls.v
    public Object o(Continuation continuation) {
        Object o10 = this.f37205o.o(continuation);
        rr.b.f();
        return o10;
    }

    @Override // ls.w
    public boolean offer(Object obj) {
        return this.f37205o.offer(obj);
    }

    @Override // ls.v
    public Object r(Continuation continuation) {
        return this.f37205o.r(continuation);
    }

    @Override // ls.w
    public boolean s(Throwable th2) {
        return this.f37205o.s(th2);
    }

    @Override // ls.w
    public Object u(Object obj, Continuation continuation) {
        return this.f37205o.u(obj, continuation);
    }

    @Override // ls.w
    public boolean v() {
        return this.f37205o.v();
    }

    public final g W0() {
        return this;
    }
}
