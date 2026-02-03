package ms;

import kotlin.coroutines.Continuation;
import kotlin.coroutines.CoroutineContext;
import kotlin.coroutines.jvm.internal.CoroutineStackFrame;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class a0 extends kotlinx.coroutines.a implements CoroutineStackFrame {

    /* renamed from: o  reason: collision with root package name */
    public final Continuation f39145o;

    public a0(CoroutineContext coroutineContext, Continuation continuation) {
        super(coroutineContext, true, true);
        this.f39145o = continuation;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // kotlinx.coroutines.b0
    public void C(Object obj) {
        j.b(pr.b.c(this.f39145o), hs.t.a(obj, this.f39145o));
    }

    @Override // kotlinx.coroutines.a
    protected void R0(Object obj) {
        Continuation continuation = this.f39145o;
        continuation.resumeWith(hs.t.a(obj, continuation));
    }

    @Override // kotlin.coroutines.jvm.internal.CoroutineStackFrame
    public final CoroutineStackFrame getCallerFrame() {
        Continuation continuation = this.f39145o;
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
