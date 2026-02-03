package w0;

import kotlin.coroutines.Continuation;
import kotlin.coroutines.CoroutineContext;
import kotlin.jvm.functions.Function1;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class o {
    public static final n a(CoroutineContext coroutineContext) {
        n nVar = (n) coroutineContext.l(n.f51594m);
        if (nVar != null) {
            return nVar;
        }
        throw new IllegalStateException("A MonotonicFrameClock is not available in this CoroutineContext. Callers should supply an appropriate MonotonicFrameClock using withContext.");
    }

    public static final Object b(Function1 function1, Continuation continuation) {
        return a(continuation.getContext()).t0(function1, continuation);
    }
}
