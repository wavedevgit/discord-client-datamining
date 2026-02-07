package ss;

import kotlin.coroutines.Continuation;
import kotlin.coroutines.CoroutineContext;
import kotlin.coroutines.jvm.internal.CoroutineStackFrame;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class a0 implements Continuation, CoroutineStackFrame {

    /* renamed from: d  reason: collision with root package name */
    private final Continuation f50067d;

    /* renamed from: e  reason: collision with root package name */
    private final CoroutineContext f50068e;

    public a0(Continuation continuation, CoroutineContext coroutineContext) {
        this.f50067d = continuation;
        this.f50068e = coroutineContext;
    }

    @Override // kotlin.coroutines.jvm.internal.CoroutineStackFrame
    public CoroutineStackFrame getCallerFrame() {
        Continuation continuation = this.f50067d;
        if (continuation instanceof CoroutineStackFrame) {
            return (CoroutineStackFrame) continuation;
        }
        return null;
    }

    @Override // kotlin.coroutines.Continuation
    public CoroutineContext getContext() {
        return this.f50068e;
    }

    @Override // kotlin.coroutines.Continuation
    public void resumeWith(Object obj) {
        this.f50067d.resumeWith(obj);
    }
}
