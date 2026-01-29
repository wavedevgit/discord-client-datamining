package kotlinx.coroutines;

import gs.n0;
import gs.s0;
import gs.z0;
import java.util.concurrent.CancellationException;
import kotlin.Unit;
import kotlin.coroutines.CoroutineContext;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.FunctionReferenceImpl;
import kotlin.sequences.Sequence;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract /* synthetic */ class a0 {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public /* synthetic */ class a extends FunctionReferenceImpl implements Function1 {
        a(Object obj) {
            super(1, obj, z0.class, "invoke", "invoke(Ljava/lang/Throwable;)V", 0);
        }

        public final void a(Throwable th2) {
            ((z0) this.receiver).w(th2);
        }

        @Override // kotlin.jvm.functions.Function1
        public /* bridge */ /* synthetic */ Object invoke(Object obj) {
            a((Throwable) obj);
            return Unit.f33282a;
        }
    }

    public static final CompletableJob a(Job job) {
        return new y(job);
    }

    public static /* synthetic */ CompletableJob b(Job job, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            job = null;
        }
        return z.a(job);
    }

    public static final void c(CoroutineContext coroutineContext, CancellationException cancellationException) {
        Job job = (Job) coroutineContext.l(Job.f36291j);
        if (job != null) {
            job.h(cancellationException);
        }
    }

    public static final void d(Job job, String str, Throwable th2) {
        job.h(s0.a(str, th2));
    }

    public static /* synthetic */ void e(CoroutineContext coroutineContext, CancellationException cancellationException, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            cancellationException = null;
        }
        z.c(coroutineContext, cancellationException);
    }

    public static /* synthetic */ void f(Job job, String str, Throwable th2, int i10, Object obj) {
        if ((i10 & 2) != 0) {
            th2 = null;
        }
        z.d(job, str, th2);
    }

    public static final void g(CoroutineContext coroutineContext, CancellationException cancellationException) {
        Sequence<Job> children;
        Job job = (Job) coroutineContext.l(Job.f36291j);
        if (job != null && (children = job.getChildren()) != null) {
            for (Job job2 : children) {
                job2.h(cancellationException);
            }
        }
    }

    public static final void h(Job job, CancellationException cancellationException) {
        for (Job job2 : job.getChildren()) {
            job2.h(cancellationException);
        }
    }

    public static /* synthetic */ void i(Job job, CancellationException cancellationException, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            cancellationException = null;
        }
        z.h(job, cancellationException);
    }

    public static final n0 j(Job job, n0 n0Var) {
        n0 o10;
        o10 = o(job, false, new o(n0Var), 1, null);
        return o10;
    }

    public static final void k(CoroutineContext coroutineContext) {
        Job job = (Job) coroutineContext.l(Job.f36291j);
        if (job != null) {
            z.l(job);
        }
    }

    public static final void l(Job job) {
        if (job.a()) {
            return;
        }
        throw job.N();
    }

    public static final Job m(CoroutineContext coroutineContext) {
        Job job = (Job) coroutineContext.l(Job.f36291j);
        if (job != null) {
            return job;
        }
        throw new IllegalStateException(("Current context doesn't contain Job in it: " + coroutineContext).toString());
    }

    public static final n0 n(Job job, boolean z10, z0 z0Var) {
        if (job instanceof b0) {
            return ((b0) job).i0(z10, z0Var);
        }
        return job.L(z0Var.v(), z10, new a(z0Var));
    }

    public static /* synthetic */ n0 o(Job job, boolean z10, z0 z0Var, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            z10 = true;
        }
        return z.n(job, z10, z0Var);
    }
}
