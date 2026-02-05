package os;

import java.util.concurrent.CancellationException;
import kotlin.coroutines.Continuation;
import kotlin.coroutines.CoroutineContext;
import kotlin.jvm.functions.Function1;
import kotlinx.coroutines.b0;
import ms.y0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class h extends kotlinx.coroutines.a implements g {

    /* renamed from: o  reason: collision with root package name */
    private final g f44413o;

    public h(CoroutineContext coroutineContext, g gVar, boolean z10, boolean z11) {
        super(coroutineContext, z10, z11);
        this.f44413o = gVar;
    }

    @Override // kotlinx.coroutines.b0
    public void I(Throwable th2) {
        CancellationException G0 = b0.G0(this, th2, null, 1, null);
        this.f44413o.h(G0);
        G(G0);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final g X0() {
        return this.f44413o;
    }

    @Override // os.v
    public boolean b() {
        return this.f44413o.b();
    }

    @Override // os.w
    public void d(Function1 function1) {
        this.f44413o.d(function1);
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

    @Override // os.w
    public Object i(Object obj) {
        return this.f44413o.i(obj);
    }

    @Override // os.v
    public i iterator() {
        return this.f44413o.iterator();
    }

    @Override // os.v
    public us.h j() {
        return this.f44413o.j();
    }

    @Override // os.v
    public us.h l() {
        return this.f44413o.l();
    }

    @Override // os.v
    public Object n() {
        return this.f44413o.n();
    }

    @Override // os.w
    public boolean offer(Object obj) {
        return this.f44413o.offer(obj);
    }

    @Override // os.v
    public Object p(Continuation continuation) {
        Object p10 = this.f44413o.p(continuation);
        ur.b.f();
        return p10;
    }

    @Override // os.v
    public Object s(Continuation continuation) {
        return this.f44413o.s(continuation);
    }

    @Override // os.w
    public boolean t(Throwable th2) {
        return this.f44413o.t(th2);
    }

    @Override // os.w
    public Object v(Object obj, Continuation continuation) {
        return this.f44413o.v(obj, continuation);
    }

    @Override // os.w
    public boolean w() {
        return this.f44413o.w();
    }

    public final g W0() {
        return this;
    }
}
