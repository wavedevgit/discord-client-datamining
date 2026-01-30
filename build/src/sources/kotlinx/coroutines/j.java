package kotlinx.coroutines;

import gs.l1;
import gs.n0;
import gs.p0;
import java.util.concurrent.RejectedExecutionException;
import java.util.concurrent.TimeUnit;
import java.util.concurrent.locks.LockSupport;
import kotlin.coroutines.CoroutineContext;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.LongCompanionObject;
import kotlinx.coroutines.q;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class j extends q implements Runnable {
    private static volatile Thread _thread;
    private static volatile int debugStatus;

    /* renamed from: t  reason: collision with root package name */
    public static final j f36356t;

    /* renamed from: u  reason: collision with root package name */
    private static final long f36357u;

    static {
        Long l10;
        j jVar = new j();
        f36356t = jVar;
        p0.q2(jVar, false, 1, null);
        TimeUnit timeUnit = TimeUnit.MILLISECONDS;
        try {
            l10 = Long.getLong("kotlinx.coroutines.DefaultExecutor.keepAlive", 1000L);
        } catch (SecurityException unused) {
            l10 = 1000L;
        }
        f36357u = timeUnit.toNanos(l10.longValue());
    }

    private j() {
    }

    private final synchronized void Q2() {
        if (!T2()) {
            return;
        }
        debugStatus = 3;
        K2();
        Intrinsics.checkNotNull(this, "null cannot be cast to non-null type java.lang.Object");
        notifyAll();
    }

    private final synchronized Thread R2() {
        Thread thread;
        thread = _thread;
        if (thread == null) {
            thread = new Thread(this, "kotlinx.coroutines.DefaultExecutor");
            _thread = thread;
            thread.setContextClassLoader(f36356t.getClass().getClassLoader());
            thread.setDaemon(true);
            thread.start();
        }
        return thread;
    }

    private final boolean S2() {
        if (debugStatus == 4) {
            return true;
        }
        return false;
    }

    private final boolean T2() {
        int i10 = debugStatus;
        if (i10 != 2 && i10 != 3) {
            return false;
        }
        return true;
    }

    private final synchronized boolean U2() {
        if (T2()) {
            return false;
        }
        debugStatus = 1;
        Intrinsics.checkNotNull(this, "null cannot be cast to non-null type java.lang.Object");
        notifyAll();
        return true;
    }

    private final void V2() {
        throw new RejectedExecutionException("DefaultExecutor was shut down. This error indicates that Dispatchers.shutdown() was invoked prior to completion of exiting coroutines, leaving coroutines in incomplete state. Please refer to Dispatchers.shutdown documentation for more details");
    }

    @Override // kotlinx.coroutines.q
    public void C2(Runnable runnable) {
        if (S2()) {
            V2();
        }
        super.C2(runnable);
    }

    @Override // kotlinx.coroutines.q, kotlinx.coroutines.k
    public n0 D0(long j10, Runnable runnable, CoroutineContext coroutineContext) {
        return N2(j10, runnable);
    }

    @Override // java.lang.Runnable
    public void run() {
        boolean I2;
        l1.f27177a.d(this);
        gs.b.a();
        try {
            if (!U2()) {
                if (!I2) {
                    return;
                }
                return;
            }
            long j10 = Long.MAX_VALUE;
            while (true) {
                Thread.interrupted();
                long t22 = t2();
                if (t22 == LongCompanionObject.MAX_VALUE) {
                    gs.b.a();
                    long nanoTime = System.nanoTime();
                    if (j10 == LongCompanionObject.MAX_VALUE) {
                        j10 = f36357u + nanoTime;
                    }
                    long j11 = j10 - nanoTime;
                    if (j11 <= 0) {
                        _thread = null;
                        Q2();
                        gs.b.a();
                        if (!I2()) {
                            w2();
                            return;
                        }
                        return;
                    }
                    t22 = kotlin.ranges.d.j(t22, j11);
                } else {
                    j10 = Long.MAX_VALUE;
                }
                if (t22 > 0) {
                    if (T2()) {
                        _thread = null;
                        Q2();
                        gs.b.a();
                        if (!I2()) {
                            w2();
                            return;
                        }
                        return;
                    }
                    gs.b.a();
                    LockSupport.parkNanos(this, t22);
                }
            }
        } finally {
            _thread = null;
            Q2();
            gs.b.a();
            if (!I2()) {
                w2();
            }
        }
    }

    @Override // kotlinx.coroutines.q, gs.p0
    public void shutdown() {
        debugStatus = 4;
        super.shutdown();
    }

    @Override // kotlinx.coroutines.CoroutineDispatcher
    public String toString() {
        return "DefaultExecutor";
    }

    @Override // kotlinx.coroutines.r
    protected Thread w2() {
        Thread thread = _thread;
        if (thread == null) {
            return R2();
        }
        return thread;
    }

    @Override // kotlinx.coroutines.r
    protected void x2(long j10, q.c cVar) {
        V2();
    }
}
