package kotlinx.coroutines;

import java.util.concurrent.Executor;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.RejectedExecutionException;
import java.util.concurrent.ScheduledExecutorService;
import java.util.concurrent.ScheduledFuture;
import java.util.concurrent.TimeUnit;
import kotlin.coroutines.CoroutineContext;
import ys.m0;
import ys.n0;
import ys.s0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class t extends s implements k {

    /* renamed from: o  reason: collision with root package name */
    private final Executor f35631o;

    public t(Executor executor) {
        this.f35631o = executor;
        dt.a.a(P1());
    }

    private final void Y1(CoroutineContext coroutineContext, RejectedExecutionException rejectedExecutionException) {
        z.c(coroutineContext, s0.a("The task was rejected", rejectedExecutionException));
    }

    private final ScheduledFuture a2(ScheduledExecutorService scheduledExecutorService, Runnable runnable, CoroutineContext coroutineContext, long j10) {
        try {
            return scheduledExecutorService.schedule(runnable, j10, TimeUnit.MILLISECONDS);
        } catch (RejectedExecutionException e10) {
            Y1(coroutineContext, e10);
            return null;
        }
    }

    @Override // kotlinx.coroutines.k
    public n0 C0(long j10, Runnable runnable, CoroutineContext coroutineContext) {
        ScheduledExecutorService scheduledExecutorService;
        long j11;
        Runnable runnable2;
        CoroutineContext coroutineContext2;
        Executor P1 = P1();
        ScheduledFuture scheduledFuture = null;
        if (P1 instanceof ScheduledExecutorService) {
            scheduledExecutorService = (ScheduledExecutorService) P1;
        } else {
            scheduledExecutorService = null;
        }
        if (scheduledExecutorService != null) {
            j11 = j10;
            runnable2 = runnable;
            coroutineContext2 = coroutineContext;
            scheduledFuture = a2(scheduledExecutorService, runnable2, coroutineContext2, j11);
        } else {
            j11 = j10;
            runnable2 = runnable;
            coroutineContext2 = coroutineContext;
        }
        if (scheduledFuture != null) {
            return new n(scheduledFuture);
        }
        return j.f35614t.C0(j11, runnable2, coroutineContext2);
    }

    @Override // kotlinx.coroutines.s
    public Executor P1() {
        return this.f35631o;
    }

    @Override // kotlinx.coroutines.CoroutineDispatcher
    public void b1(CoroutineContext coroutineContext, Runnable runnable) {
        try {
            Executor P1 = P1();
            ys.b.a();
            P1.execute(runnable);
        } catch (RejectedExecutionException e10) {
            ys.b.a();
            Y1(coroutineContext, e10);
            m0.b().b1(coroutineContext, runnable);
        }
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        ExecutorService executorService;
        Executor P1 = P1();
        if (P1 instanceof ExecutorService) {
            executorService = (ExecutorService) P1;
        } else {
            executorService = null;
        }
        if (executorService != null) {
            executorService.shutdown();
        }
    }

    public boolean equals(Object obj) {
        if ((obj instanceof t) && ((t) obj).P1() == P1()) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return System.identityHashCode(P1());
    }

    @Override // kotlinx.coroutines.CoroutineDispatcher
    public String toString() {
        return P1().toString();
    }

    @Override // kotlinx.coroutines.k
    public void z(long j10, CancellableContinuation cancellableContinuation) {
        ScheduledExecutorService scheduledExecutorService;
        long j11;
        Executor P1 = P1();
        ScheduledFuture scheduledFuture = null;
        if (P1 instanceof ScheduledExecutorService) {
            scheduledExecutorService = (ScheduledExecutorService) P1;
        } else {
            scheduledExecutorService = null;
        }
        if (scheduledExecutorService != null) {
            j11 = j10;
            scheduledFuture = a2(scheduledExecutorService, new g0(this, cancellableContinuation), cancellableContinuation.getContext(), j11);
        } else {
            j11 = j10;
        }
        if (scheduledFuture != null) {
            ys.l.c(cancellableContinuation, new c(scheduledFuture));
        } else {
            j.f35614t.z(j11, cancellableContinuation);
        }
    }
}
