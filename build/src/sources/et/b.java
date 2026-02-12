package et;

import as.h;
import dt.a0;
import dt.l0;
import kotlin.Result;
import kotlin.c;
import kotlin.coroutines.Continuation;
import kotlin.coroutines.CoroutineContext;
import kotlin.coroutines.jvm.internal.g;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.TypeIntrinsics;
import kotlinx.coroutines.c0;
import ys.j0;
import ys.r;
import ys.r1;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class b {
    private static final Void a(a0 a0Var, j0 j0Var) {
        a0Var.q0(new r(j0Var.getCause(), false, 2, null));
        throw j0Var.getCause();
    }

    private static final boolean b(a0 a0Var, Throwable th2) {
        if ((th2 instanceof r1) && ((r1) th2).f55820d == a0Var) {
            return false;
        }
        return true;
    }

    public static final void c(Function2 function2, Object obj, Continuation continuation) {
        Object invoke;
        Continuation a10 = g.a(continuation);
        try {
            CoroutineContext context = a10.getContext();
            Object i10 = l0.i(context, null);
            g.b(a10);
            if (!(function2 instanceof kotlin.coroutines.jvm.internal.a)) {
                invoke = gs.b.d(function2, obj, a10);
            } else {
                invoke = ((Function2) TypeIntrinsics.beforeCheckcastToFunctionOfArity(function2, 2)).invoke(obj, a10);
            }
            l0.f(context, i10);
            if (invoke != gs.b.f()) {
                a10.resumeWith(Result.b(invoke));
            }
        } catch (Throwable th2) {
            th = th2;
            if (th instanceof j0) {
                th = ((j0) th).getCause();
            }
            Result.a aVar = Result.f31985e;
            a10.resumeWith(Result.b(c.a(th)));
        }
    }

    public static final Object d(a0 a0Var, Object obj, Function2 function2) {
        return f(a0Var, true, obj, function2);
    }

    public static final Object e(a0 a0Var, Object obj, Function2 function2) {
        return f(a0Var, false, obj, function2);
    }

    private static final Object f(a0 a0Var, boolean z10, Object obj, Function2 function2) {
        r rVar;
        try {
            if (!(function2 instanceof kotlin.coroutines.jvm.internal.a)) {
                rVar = gs.b.d(function2, obj, a0Var);
            } else {
                rVar = ((Function2) TypeIntrinsics.beforeCheckcastToFunctionOfArity(function2, 2)).invoke(obj, a0Var);
            }
        } catch (j0 e10) {
            a(a0Var, e10);
            throw new h();
        } catch (Throwable th2) {
            rVar = new r(th2, false, 2, null);
        }
        if (rVar == gs.b.f()) {
            return gs.b.f();
        }
        Object r02 = a0Var.r0(rVar);
        if (r02 == c0.f35019b) {
            return gs.b.f();
        }
        a0Var.c1();
        if (r02 instanceof r) {
            if (!z10 && !b(a0Var, ((r) r02).f55817a)) {
                if (rVar instanceof r) {
                    throw ((r) rVar).f55817a;
                }
                return rVar;
            }
            throw ((r) r02).f55817a;
        }
        return c0.h(r02);
    }
}
