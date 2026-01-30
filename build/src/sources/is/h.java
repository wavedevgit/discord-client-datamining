package is;

import gs.y0;
import java.util.concurrent.CancellationException;
import kotlin.coroutines.Continuation;
import kotlin.coroutines.CoroutineContext;
import kotlin.jvm.functions.Function1;
import kotlinx.coroutines.b0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class h extends kotlinx.coroutines.a implements g {

    /* renamed from: o  reason: collision with root package name */
    private final g f31204o;

    public h(CoroutineContext coroutineContext, g gVar, boolean z10, boolean z11) {
        super(coroutineContext, z10, z11);
        this.f31204o = gVar;
    }

    @Override // kotlinx.coroutines.b0
    public void I(Throwable th2) {
        CancellationException G0 = b0.G0(this, th2, null, 1, null);
        this.f31204o.h(G0);
        G(G0);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final g Z0() {
        return this.f31204o;
    }

    @Override // is.w
    public void b(Function1 function1) {
        this.f31204o.b(function1);
    }

    @Override // is.w
    public Object e(Object obj) {
        return this.f31204o.e(obj);
    }

    @Override // kotlinx.coroutines.b0, kotlinx.coroutines.Job, is.v
    public final void h(CancellationException cancellationException) {
        if (isCancelled()) {
            return;
        }
        if (cancellationException == null) {
            cancellationException = new y0(M(), null, this);
        }
        I(cancellationException);
    }

    @Override // is.v
    public boolean i() {
        return this.f31204o.i();
    }

    @Override // is.v
    public i iterator() {
        return this.f31204o.iterator();
    }

    @Override // is.v
    public os.h j() {
        return this.f31204o.j();
    }

    @Override // is.v
    public os.h k() {
        return this.f31204o.k();
    }

    @Override // is.v
    public Object m() {
        return this.f31204o.m();
    }

    @Override // is.v
    public Object o(Continuation continuation) {
        Object o10 = this.f31204o.o(continuation);
        or.b.f();
        return o10;
    }

    @Override // is.w
    public boolean offer(Object obj) {
        return this.f31204o.offer(obj);
    }

    @Override // is.v
    public Object r(Continuation continuation) {
        return this.f31204o.r(continuation);
    }

    @Override // is.w
    public boolean s(Throwable th2) {
        return this.f31204o.s(th2);
    }

    @Override // is.w
    public Object u(Object obj, Continuation continuation) {
        return this.f31204o.u(obj, continuation);
    }

    @Override // is.w
    public boolean v() {
        return this.f31204o.v();
    }

    public final g W0() {
        return this;
    }
}
