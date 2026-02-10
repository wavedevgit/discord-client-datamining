package rs;

import java.util.concurrent.CancellationException;
import kotlin.coroutines.Continuation;
import kotlin.coroutines.CoroutineContext;
import kotlin.jvm.functions.Function1;
import kotlinx.coroutines.b0;
import ps.y0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class h extends kotlinx.coroutines.a implements g {

    /* renamed from: o  reason: collision with root package name */
    private final g f49295o;

    public h(CoroutineContext coroutineContext, g gVar, boolean z10, boolean z11) {
        super(coroutineContext, z10, z11);
        this.f49295o = gVar;
    }

    @Override // kotlinx.coroutines.b0
    public void M(Throwable th2) {
        CancellationException I0 = b0.I0(this, th2, null, 1, null);
        this.f49295o.k(I0);
        K(I0);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final g Z0() {
        return this.f49295o;
    }

    @Override // rs.v
    public boolean b() {
        return this.f49295o.b();
    }

    @Override // rs.w
    public void d(Function1 function1) {
        this.f49295o.d(function1);
    }

    @Override // rs.w
    public Object i(Object obj) {
        return this.f49295o.i(obj);
    }

    @Override // rs.v
    public i iterator() {
        return this.f49295o.iterator();
    }

    @Override // rs.v
    public xs.h j() {
        return this.f49295o.j();
    }

    @Override // kotlinx.coroutines.b0, kotlinx.coroutines.Job
    public final void k(CancellationException cancellationException) {
        if (isCancelled()) {
            return;
        }
        if (cancellationException == null) {
            cancellationException = new y0(P(), null, this);
        }
        M(cancellationException);
    }

    @Override // rs.v
    public xs.h l() {
        return this.f49295o.l();
    }

    @Override // rs.v
    public Object o() {
        return this.f49295o.o();
    }

    @Override // rs.w
    public boolean offer(Object obj) {
        return this.f49295o.offer(obj);
    }

    @Override // rs.v
    public Object q(Continuation continuation) {
        Object q10 = this.f49295o.q(continuation);
        xr.b.f();
        return q10;
    }

    @Override // rs.v
    public Object u(Continuation continuation) {
        return this.f49295o.u(continuation);
    }

    @Override // rs.w
    public boolean v(Throwable th2) {
        return this.f49295o.v(th2);
    }

    @Override // rs.w
    public Object x(Object obj, Continuation continuation) {
        return this.f49295o.x(obj, continuation);
    }

    @Override // rs.w
    public boolean y() {
        return this.f49295o.y();
    }

    public final g Y0() {
        return this;
    }
}
