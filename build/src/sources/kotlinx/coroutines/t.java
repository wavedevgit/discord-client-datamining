package kotlinx.coroutines;

import java.util.concurrent.Executor;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.RejectedExecutionException;
import java.util.concurrent.ScheduledExecutorService;
import java.util.concurrent.ScheduledFuture;
import java.util.concurrent.TimeUnit;
import kotlin.coroutines.CoroutineContext;
import ps.m0;
import ps.n0;
import ps.s0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class t extends s implements k {

    /* renamed from: o  reason: collision with root package name */
    private final Executor f34840o;

    public t(Executor executor) {
        this.f34840o = executor;
        us.a.a(e2());
    }

    private final void g2(CoroutineContext coroutineContext, RejectedExecutionException rejectedExecutionException) {
        z.c(coroutineContext, s0.a("The task was rejected", rejectedExecutionException));
    }

    private final ScheduledFuture h2(ScheduledExecutorService scheduledExecutorService, Runnable runnable, CoroutineContext coroutineContext, long j10) {
        try {
            return scheduledExecutorService.schedule(runnable, j10, TimeUnit.MILLISECONDS);
        } catch (RejectedExecutionException e10) {
            g2(coroutineContext, e10);
            return null;
        }
    }

    @Override // kotlinx.coroutines.k
    public n0 Z(long j10, Runnable runnable, CoroutineContext coroutineContext) {
        ScheduledExecutorService scheduledExecutorService;
        long j11;
        Runnable runnable2;
        CoroutineContext coroutineContext2;
        Executor e22 = e2();
        ScheduledFuture scheduledFuture = null;
        if (e22 instanceof ScheduledExecutorService) {
            scheduledExecutorService = (ScheduledExecutorService) e22;
        } else {
            scheduledExecutorService = null;
        }
        if (scheduledExecutorService != null) {
            j11 = j10;
            runnable2 = runnable;
            coroutineContext2 = coroutineContext;
            scheduledFuture = h2(scheduledExecutorService, runnable2, coroutineContext2, j11);
        } else {
            j11 = j10;
            runnable2 = runnable;
            coroutineContext2 = coroutineContext;
        }
        if (scheduledFuture != null) {
            return new n(scheduledFuture);
        }
        return j.f34823t.Z(j11, runnable2, coroutineContext2);
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        ExecutorService executorService;
        Executor e22 = e2();
        if (e22 instanceof ExecutorService) {
            executorService = (ExecutorService) e22;
        } else {
            executorService = null;
        }
        if (executorService != null) {
            executorService.shutdown();
        }
    }

    @Override // kotlinx.coroutines.s
    public Executor e2() {
        return this.f34840o;
    }

    public boolean equals(Object obj) {
        if ((obj instanceof t) && ((t) obj).e2() == e2()) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return System.identityHashCode(e2());
    }

    @Override // kotlinx.coroutines.CoroutineDispatcher
    public String toString() {
        return e2().toString();
    }

    @Override // kotlinx.coroutines.k
    public void y(long j10, CancellableContinuation cancellableContinuation) {
        ScheduledExecutorService scheduledExecutorService;
        long j11;
        Executor e22 = e2();
        ScheduledFuture scheduledFuture = null;
        if (e22 instanceof ScheduledExecutorService) {
            scheduledExecutorService = (ScheduledExecutorService) e22;
        } else {
            scheduledExecutorService = null;
        }
        if (scheduledExecutorService != null) {
            j11 = j10;
            scheduledFuture = h2(scheduledExecutorService, new g0(this, cancellableContinuation), cancellableContinuation.getContext(), j11);
        } else {
            j11 = j10;
        }
        if (scheduledFuture != null) {
            ps.l.c(cancellableContinuation, new c(scheduledFuture));
        } else {
            j.f34823t.y(j11, cancellableContinuation);
        }
    }

    @Override // kotlinx.coroutines.CoroutineDispatcher
    public void z1(CoroutineContext coroutineContext, Runnable runnable) {
        try {
            Executor e22 = e2();
            ps.b.a();
            e22.execute(runnable);
        } catch (RejectedExecutionException e10) {
            ps.b.a();
            g2(coroutineContext, e10);
            m0.b().z1(coroutineContext, runnable);
        }
    }
}
