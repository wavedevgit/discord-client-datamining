package kotlinx.coroutines;

import hs.j1;
import hs.m0;
import hs.s0;
import java.util.concurrent.CancellationException;
import kotlin.coroutines.Continuation;
import kotlin.coroutines.CoroutineContext;
import kotlin.jvm.functions.Function2;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class i {
    public static final CoroutineScope a(CoroutineContext coroutineContext) {
        CompletableJob b10;
        if (coroutineContext.l(Job.f36083j) == null) {
            b10 = a0.b(null, 1, null);
            coroutineContext = coroutineContext.Z0(b10);
        }
        return new ms.e(coroutineContext);
    }

    public static final CoroutineScope b() {
        return new ms.e(j1.b(null, 1, null).Z0(m0.c()));
    }

    public static final void c(CoroutineScope coroutineScope, String str, Throwable th2) {
        d(coroutineScope, s0.a(str, th2));
    }

    public static final void d(CoroutineScope coroutineScope, CancellationException cancellationException) {
        Job job = (Job) coroutineScope.getCoroutineContext().l(Job.f36083j);
        if (job != null) {
            job.h(cancellationException);
            return;
        }
        throw new IllegalStateException(("Scope cannot be cancelled because it does not have a job: " + coroutineScope).toString());
    }

    public static /* synthetic */ void e(CoroutineScope coroutineScope, String str, Throwable th2, int i10, Object obj) {
        if ((i10 & 2) != 0) {
            th2 = null;
        }
        c(coroutineScope, str, th2);
    }

    public static /* synthetic */ void f(CoroutineScope coroutineScope, CancellationException cancellationException, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            cancellationException = null;
        }
        d(coroutineScope, cancellationException);
    }

    public static final Object g(Function2 function2, Continuation continuation) {
        ms.a0 a0Var = new ms.a0(continuation.getContext(), continuation);
        Object d10 = ns.b.d(a0Var, a0Var, function2);
        if (d10 == pr.b.f()) {
            kotlin.coroutines.jvm.internal.g.c(continuation);
        }
        return d10;
    }

    public static final void h(CoroutineScope coroutineScope) {
        z.k(coroutineScope.getCoroutineContext());
    }

    public static final boolean i(CoroutineScope coroutineScope) {
        Job job = (Job) coroutineScope.getCoroutineContext().l(Job.f36083j);
        if (job != null) {
            return job.a();
        }
        return true;
    }

    public static final CoroutineScope j(CoroutineScope coroutineScope, CoroutineContext coroutineContext) {
        return new ms.e(coroutineScope.getCoroutineContext().Z0(coroutineContext));
    }
}
