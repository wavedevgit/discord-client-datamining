package kotlinx.coroutines;

import java.util.concurrent.Executor;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.RejectedExecutionException;
import java.util.concurrent.ScheduledExecutorService;
import java.util.concurrent.ScheduledFuture;
import java.util.concurrent.TimeUnit;
import kotlin.coroutines.CoroutineContext;
import ms.m0;
import ms.n0;
import ms.s0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class t extends s implements k {

    /* renamed from: o  reason: collision with root package name */
    private final Executor f35063o;

    public t(Executor executor) {
        this.f35063o = executor;
        rs.a.a(f2());
    }

    private final void h2(CoroutineContext coroutineContext, RejectedExecutionException rejectedExecutionException) {
        z.c(coroutineContext, s0.a("The task was rejected", rejectedExecutionException));
    }

    private final ScheduledFuture i2(ScheduledExecutorService scheduledExecutorService, Runnable runnable, CoroutineContext coroutineContext, long j10) {
        try {
            return scheduledExecutorService.schedule(runnable, j10, TimeUnit.MILLISECONDS);
        } catch (RejectedExecutionException e10) {
            h2(coroutineContext, e10);
            return null;
        }
    }

    @Override // kotlinx.coroutines.k
    public n0 D0(long j10, Runnable runnable, CoroutineContext coroutineContext) {
        ScheduledExecutorService scheduledExecutorService;
        long j11;
        Runnable runnable2;
        CoroutineContext coroutineContext2;
        Executor f22 = f2();
        ScheduledFuture scheduledFuture = null;
        if (f22 instanceof ScheduledExecutorService) {
            scheduledExecutorService = (ScheduledExecutorService) f22;
        } else {
            scheduledExecutorService = null;
        }
        if (scheduledExecutorService != null) {
            j11 = j10;
            runnable2 = runnable;
            coroutineContext2 = coroutineContext;
            scheduledFuture = i2(scheduledExecutorService, runnable2, coroutineContext2, j11);
        } else {
            j11 = j10;
            runnable2 = runnable;
            coroutineContext2 = coroutineContext;
        }
        if (scheduledFuture != null) {
            return new n(scheduledFuture);
        }
        return j.f35046t.D0(j11, runnable2, coroutineContext2);
    }

    @Override // kotlinx.coroutines.CoroutineDispatcher
    public void E1(CoroutineContext coroutineContext, Runnable runnable) {
        try {
            Executor f22 = f2();
            ms.b.a();
            f22.execute(runnable);
        } catch (RejectedExecutionException e10) {
            ms.b.a();
            h2(coroutineContext, e10);
            m0.b().E1(coroutineContext, runnable);
        }
    }

    @Override // kotlinx.coroutines.k
    public void F(long j10, CancellableContinuation cancellableContinuation) {
        ScheduledExecutorService scheduledExecutorService;
        long j11;
        Executor f22 = f2();
        ScheduledFuture scheduledFuture = null;
        if (f22 instanceof ScheduledExecutorService) {
            scheduledExecutorService = (ScheduledExecutorService) f22;
        } else {
            scheduledExecutorService = null;
        }
        if (scheduledExecutorService != null) {
            j11 = j10;
            scheduledFuture = i2(scheduledExecutorService, new g0(this, cancellableContinuation), cancellableContinuation.getContext(), j11);
        } else {
            j11 = j10;
        }
        if (scheduledFuture != null) {
            ms.l.c(cancellableContinuation, new c(scheduledFuture));
        } else {
            j.f35046t.F(j11, cancellableContinuation);
        }
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        ExecutorService executorService;
        Executor f22 = f2();
        if (f22 instanceof ExecutorService) {
            executorService = (ExecutorService) f22;
        } else {
            executorService = null;
        }
        if (executorService != null) {
            executorService.shutdown();
        }
    }

    public boolean equals(Object obj) {
        if ((obj instanceof t) && ((t) obj).f2() == f2()) {
            return true;
        }
        return false;
    }

    @Override // kotlinx.coroutines.s
    public Executor f2() {
        return this.f35063o;
    }

    public int hashCode() {
        return System.identityHashCode(f2());
    }

    @Override // kotlinx.coroutines.CoroutineDispatcher
    public String toString() {
        return f2().toString();
    }
}
