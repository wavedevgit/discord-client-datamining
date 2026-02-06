package qs;

import java.util.concurrent.CancellationException;
import kotlin.coroutines.Continuation;
import kotlin.coroutines.CoroutineContext;
import kotlin.jvm.functions.Function1;
import kotlinx.coroutines.b0;
import os.y0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class h extends kotlinx.coroutines.a implements g {

    /* renamed from: o  reason: collision with root package name */
    private final g f48129o;

    public h(CoroutineContext coroutineContext, g gVar, boolean z10, boolean z11) {
        super(coroutineContext, z10, z11);
        this.f48129o = gVar;
    }

    @Override // kotlinx.coroutines.b0
    public void M(Throwable th2) {
        CancellationException G0 = b0.G0(this, th2, null, 1, null);
        this.f48129o.k(G0);
        K(G0);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final g Z0() {
        return this.f48129o;
    }

    @Override // qs.v
    public boolean b() {
        return this.f48129o.b();
    }

    @Override // qs.w
    public void d(Function1 function1) {
        this.f48129o.d(function1);
    }

    @Override // qs.w
    public Object i(Object obj) {
        return this.f48129o.i(obj);
    }

    @Override // qs.v
    public i iterator() {
        return this.f48129o.iterator();
    }

    @Override // qs.v
    public ws.h j() {
        return this.f48129o.j();
    }

    @Override // kotlinx.coroutines.b0, kotlinx.coroutines.Job
    public final void k(CancellationException cancellationException) {
        if (isCancelled()) {
            return;
        }
        if (cancellationException == null) {
            cancellationException = new y0(Q(), null, this);
        }
        M(cancellationException);
    }

    @Override // qs.v
    public ws.h l() {
        return this.f48129o.l();
    }

    @Override // qs.v
    public Object o() {
        return this.f48129o.o();
    }

    @Override // qs.w
    public boolean offer(Object obj) {
        return this.f48129o.offer(obj);
    }

    @Override // qs.v
    public Object q(Continuation continuation) {
        Object q10 = this.f48129o.q(continuation);
        wr.b.f();
        return q10;
    }

    @Override // qs.v
    public Object u(Continuation continuation) {
        return this.f48129o.u(continuation);
    }

    @Override // qs.w
    public boolean v(Throwable th2) {
        return this.f48129o.v(th2);
    }

    @Override // qs.w
    public Object x(Object obj, Continuation continuation) {
        return this.f48129o.x(obj, continuation);
    }

    @Override // qs.w
    public boolean y() {
        return this.f48129o.y();
    }

    public final g X0() {
        return this;
    }
}
