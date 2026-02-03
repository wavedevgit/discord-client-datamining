package rs;

import kotlin.Result;
import kotlinx.coroutines.CancellableContinuation;
import kotlinx.coroutines.CoroutineDispatcher;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class n {
    /* JADX INFO: Access modifiers changed from: private */
    public static final void c(CancellableContinuation cancellableContinuation, Object obj) {
        CoroutineDispatcher coroutineDispatcher = (CoroutineDispatcher) cancellableContinuation.getContext().l(CoroutineDispatcher.f35472e);
        if (coroutineDispatcher != null) {
            cancellableContinuation.q(coroutineDispatcher, obj);
        } else {
            cancellableContinuation.resumeWith(Result.b(obj));
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void d(CancellableContinuation cancellableContinuation, Throwable th2) {
        CoroutineDispatcher coroutineDispatcher = (CoroutineDispatcher) cancellableContinuation.getContext().l(CoroutineDispatcher.f35472e);
        if (coroutineDispatcher != null) {
            cancellableContinuation.f(coroutineDispatcher, th2);
            return;
        }
        Result.a aVar = Result.f32461e;
        cancellableContinuation.resumeWith(Result.b(kotlin.c.a(th2)));
    }
}
