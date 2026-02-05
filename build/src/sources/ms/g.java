package ms;

import kotlin.coroutines.Continuation;
import kotlin.coroutines.CoroutineContext;
import kotlin.jvm.functions.Function2;
import kotlinx.coroutines.CoroutineScope;
import kotlinx.coroutines.Job;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class g {
    public static final g0 a(CoroutineScope coroutineScope, CoroutineContext coroutineContext, c0 c0Var, Function2 function2) {
        return i.a(coroutineScope, coroutineContext, c0Var, function2);
    }

    public static final Job c(CoroutineScope coroutineScope, CoroutineContext coroutineContext, c0 c0Var, Function2 function2) {
        return i.c(coroutineScope, coroutineContext, c0Var, function2);
    }

    public static /* synthetic */ Job d(CoroutineScope coroutineScope, CoroutineContext coroutineContext, c0 c0Var, Function2 function2, int i10, Object obj) {
        return i.d(coroutineScope, coroutineContext, c0Var, function2, i10, obj);
    }

    public static final Object e(CoroutineContext coroutineContext, Function2 function2) {
        return h.a(coroutineContext, function2);
    }

    public static /* synthetic */ Object f(CoroutineContext coroutineContext, Function2 function2, int i10, Object obj) {
        return h.b(coroutineContext, function2, i10, obj);
    }

    public static final Object g(CoroutineContext coroutineContext, Function2 function2, Continuation continuation) {
        return i.e(coroutineContext, function2, continuation);
    }
}
