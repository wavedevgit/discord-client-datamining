package ns;

import kotlin.coroutines.Continuation;
import kotlin.coroutines.CoroutineContext;
import kotlin.coroutines.jvm.internal.CoroutineStackFrame;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class a0 implements Continuation, CoroutineStackFrame {

    /* renamed from: d  reason: collision with root package name */
    private final Continuation f41935d;

    /* renamed from: e  reason: collision with root package name */
    private final CoroutineContext f41936e;

    public a0(Continuation continuation, CoroutineContext coroutineContext) {
        this.f41935d = continuation;
        this.f41936e = coroutineContext;
    }

    @Override // kotlin.coroutines.jvm.internal.CoroutineStackFrame
    public CoroutineStackFrame getCallerFrame() {
        Continuation continuation = this.f41935d;
        if (continuation instanceof CoroutineStackFrame) {
            return (CoroutineStackFrame) continuation;
        }
        return null;
    }

    @Override // kotlin.coroutines.Continuation
    public CoroutineContext getContext() {
        return this.f41936e;
    }

    @Override // kotlin.coroutines.Continuation
    public void resumeWith(Object obj) {
        this.f41935d.resumeWith(obj);
    }
}
