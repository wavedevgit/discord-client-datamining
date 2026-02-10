package us;

import kotlin.coroutines.Continuation;
import kotlin.coroutines.CoroutineContext;
import kotlin.coroutines.jvm.internal.CoroutineStackFrame;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class a0 extends kotlinx.coroutines.a implements CoroutineStackFrame {

    /* renamed from: o  reason: collision with root package name */
    public final Continuation f51765o;

    public a0(CoroutineContext coroutineContext, Continuation continuation) {
        super(coroutineContext, true, true);
        this.f51765o = continuation;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // kotlinx.coroutines.b0
    public void F(Object obj) {
        j.b(xr.b.c(this.f51765o), ps.t.a(obj, this.f51765o));
    }

    @Override // kotlinx.coroutines.a
    protected void S0(Object obj) {
        Continuation continuation = this.f51765o;
        continuation.resumeWith(ps.t.a(obj, continuation));
    }

    @Override // kotlin.coroutines.jvm.internal.CoroutineStackFrame
    public final CoroutineStackFrame getCallerFrame() {
        Continuation continuation = this.f51765o;
        if (continuation instanceof CoroutineStackFrame) {
            return (CoroutineStackFrame) continuation;
        }
        return null;
    }

    @Override // kotlinx.coroutines.b0
    protected final boolean l0() {
        return true;
    }

    public void Y0() {
    }
}
