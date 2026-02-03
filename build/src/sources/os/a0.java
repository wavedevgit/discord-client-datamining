package os;

import kotlin.coroutines.Continuation;
import kotlin.coroutines.CoroutineContext;
import kotlin.coroutines.jvm.internal.CoroutineStackFrame;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class a0 extends kotlinx.coroutines.a implements CoroutineStackFrame {

    /* renamed from: o  reason: collision with root package name */
    public final Continuation f44500o;

    public a0(CoroutineContext coroutineContext, Continuation continuation) {
        super(coroutineContext, true, true);
        this.f44500o = continuation;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // kotlinx.coroutines.b0
    public void C(Object obj) {
        j.b(rr.b.c(this.f44500o), js.t.a(obj, this.f44500o));
    }

    @Override // kotlinx.coroutines.a
    protected void Q0(Object obj) {
        Continuation continuation = this.f44500o;
        continuation.resumeWith(js.t.a(obj, continuation));
    }

    @Override // kotlin.coroutines.jvm.internal.CoroutineStackFrame
    public final CoroutineStackFrame getCallerFrame() {
        Continuation continuation = this.f44500o;
        if (continuation instanceof CoroutineStackFrame) {
            return (CoroutineStackFrame) continuation;
        }
        return null;
    }

    @Override // kotlinx.coroutines.b0
    protected final boolean j0() {
        return true;
    }

    public void W0() {
    }
}
