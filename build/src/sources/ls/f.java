package ls;

import kotlin.coroutines.Continuation;
import kotlin.coroutines.CoroutineContext;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.TypeIntrinsics;
import kotlinx.coroutines.flow.Flow;
import kotlinx.coroutines.flow.FlowCollector;
import ms.l0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class f {
    public static final e b(Flow flow) {
        e eVar;
        if (flow instanceof e) {
            eVar = (e) flow;
        } else {
            eVar = null;
        }
        if (eVar == null) {
            return new h(flow, null, 0, null, 14, null);
        }
        return eVar;
    }

    public static final Object c(CoroutineContext coroutineContext, Object obj, Object obj2, Function2 function2, Continuation continuation) {
        Object invoke;
        Object i10 = l0.i(coroutineContext, obj2);
        try {
            a0 a0Var = new a0(continuation, coroutineContext);
            if (!(function2 instanceof kotlin.coroutines.jvm.internal.a)) {
                invoke = pr.b.d(function2, obj, a0Var);
            } else {
                invoke = ((Function2) TypeIntrinsics.beforeCheckcastToFunctionOfArity(function2, 2)).invoke(obj, a0Var);
            }
            l0.f(coroutineContext, i10);
            if (invoke == pr.b.f()) {
                kotlin.coroutines.jvm.internal.g.c(continuation);
            }
            return invoke;
        } catch (Throwable th2) {
            l0.f(coroutineContext, i10);
            throw th2;
        }
    }

    public static /* synthetic */ Object d(CoroutineContext coroutineContext, Object obj, Object obj2, Function2 function2, Continuation continuation, int i10, Object obj3) {
        if ((i10 & 4) != 0) {
            obj2 = l0.g(coroutineContext);
        }
        return c(coroutineContext, obj, obj2, function2, continuation);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final FlowCollector e(FlowCollector flowCollector, CoroutineContext coroutineContext) {
        if (!(flowCollector instanceof z)) {
            if (flowCollector instanceof s) {
                return flowCollector;
            }
            return new c0(flowCollector, coroutineContext);
        }
        return flowCollector;
    }
}
