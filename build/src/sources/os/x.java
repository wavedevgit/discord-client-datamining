package os;

import kotlin.coroutines.CoroutineContext;
import kotlin.jvm.functions.Function1;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class x {
    public static final void a(Function1 function1, Object obj, CoroutineContext coroutineContext) {
        q0 b10 = b(function1, obj, null);
        if (b10 != null) {
            js.a0.a(coroutineContext, b10);
        }
    }

    public static final q0 b(Function1 function1, Object obj, q0 q0Var) {
        try {
            function1.invoke(obj);
            return q0Var;
        } catch (Throwable th2) {
            if (q0Var != null && q0Var.getCause() != th2) {
                lr.e.a(q0Var, th2);
                return q0Var;
            }
            return new q0("Exception in undelivered element handler for " + obj, th2);
        }
    }

    public static /* synthetic */ q0 c(Function1 function1, Object obj, q0 q0Var, int i10, Object obj2) {
        if ((i10 & 2) != 0) {
            q0Var = null;
        }
        return b(function1, obj, q0Var);
    }
}
