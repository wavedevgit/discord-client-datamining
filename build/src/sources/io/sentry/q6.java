package io.sentry;

import java.util.concurrent.CancellationException;
import java.util.concurrent.Future;
import java.util.concurrent.RejectedExecutionException;
import java.util.concurrent.ScheduledThreadPoolExecutor;
import java.util.concurrent.ThreadFactory;
import java.util.concurrent.TimeUnit;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class q6 implements z0 {

    /* renamed from: a  reason: collision with root package name */
    private final ScheduledThreadPoolExecutor f30503a;

    /* renamed from: b  reason: collision with root package name */
    private final io.sentry.util.a f30504b;

    /* renamed from: c  reason: collision with root package name */
    private final Runnable f30505c;

    /* renamed from: d  reason: collision with root package name */
    private final k7 f30506d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    private static final class b implements Future {
        private b() {
        }

        @Override // java.util.concurrent.Future
        public boolean cancel(boolean z10) {
            return true;
        }

        @Override // java.util.concurrent.Future
        public Object get() {
            throw new CancellationException();
        }

        @Override // java.util.concurrent.Future
        public boolean isCancelled() {
            return true;
        }

        @Override // java.util.concurrent.Future
        public boolean isDone() {
            return true;
        }

        @Override // java.util.concurrent.Future
        public Object get(long j10, TimeUnit timeUnit) {
            throw new CancellationException();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    private static final class c implements ThreadFactory {

        /* renamed from: a  reason: collision with root package name */
        private int f30507a;

        private c() {
        }

        @Override // java.util.concurrent.ThreadFactory
        public Thread newThread(Runnable runnable) {
            StringBuilder sb2 = new StringBuilder();
            sb2.append("SentryExecutorServiceThreadFactory-");
            int i10 = this.f30507a;
            this.f30507a = i10 + 1;
            sb2.append(i10);
            Thread thread = new Thread(runnable, sb2.toString());
            thread.setDaemon(true);
            return thread;
        }
    }

    q6(ScheduledThreadPoolExecutor scheduledThreadPoolExecutor, k7 k7Var) {
        this.f30504b = new io.sentry.util.a();
        this.f30505c = new Runnable() { // from class: io.sentry.o6
            @Override // java.lang.Runnable
            public final void run() {
                q6.e();
            }
        };
        this.f30503a = scheduledThreadPoolExecutor;
        this.f30506d = k7Var;
    }

    public static /* synthetic */ void d(q6 q6Var) {
        q6Var.getClass();
        for (int i10 = 0; i10 < 40; i10++) {
            try {
                q6Var.f30503a.schedule(q6Var.f30505c, 365L, TimeUnit.DAYS).cancel(true);
            } catch (RejectedExecutionException unused) {
                return;
            }
        }
        q6Var.f30503a.purge();
    }

    public static /* synthetic */ void e() {
    }

    private boolean f() {
        if (this.f30503a.getQueue().size() >= 271) {
            this.f30503a.purge();
        }
        if (this.f30503a.getQueue().size() < 271) {
            return true;
        }
        return false;
    }

    @Override // io.sentry.z0
    public void a(long j10) {
        a1 a10 = this.f30504b.a();
        try {
            if (!this.f30503a.isShutdown()) {
                this.f30503a.shutdown();
                try {
                    if (!this.f30503a.awaitTermination(j10, TimeUnit.MILLISECONDS)) {
                        this.f30503a.shutdownNow();
                    }
                } catch (InterruptedException unused) {
                    this.f30503a.shutdownNow();
                    Thread.currentThread().interrupt();
                }
            }
            if (a10 != null) {
                a10.close();
            }
        } catch (Throwable th2) {
            if (a10 != null) {
                try {
                    a10.close();
                } catch (Throwable th3) {
                    th2.addSuppressed(th3);
                }
            }
            throw th2;
        }
    }

    @Override // io.sentry.z0
    public void b() {
        try {
            this.f30503a.submit(new Runnable() { // from class: io.sentry.p6
                @Override // java.lang.Runnable
                public final void run() {
                    q6.d(q6.this);
                }
            });
        } catch (RejectedExecutionException e10) {
            k7 k7Var = this.f30506d;
            if (k7Var != null) {
                ILogger logger = k7Var.getLogger();
                SentryLevel sentryLevel = SentryLevel.WARNING;
                logger.b(sentryLevel, "Prewarm task rejected from " + this.f30503a, e10);
            }
        }
    }

    @Override // io.sentry.z0
    public Future c(Runnable runnable, long j10) {
        return this.f30503a.schedule(runnable, j10, TimeUnit.MILLISECONDS);
    }

    @Override // io.sentry.z0
    public boolean isClosed() {
        a1 a10 = this.f30504b.a();
        try {
            boolean isShutdown = this.f30503a.isShutdown();
            if (a10 != null) {
                a10.close();
            }
            return isShutdown;
        } catch (Throwable th2) {
            if (a10 != null) {
                try {
                    a10.close();
                } catch (Throwable th3) {
                    th2.addSuppressed(th3);
                }
            }
            throw th2;
        }
    }

    @Override // io.sentry.z0
    public Future submit(Runnable runnable) {
        if (f()) {
            return this.f30503a.submit(runnable);
        }
        k7 k7Var = this.f30506d;
        if (k7Var != null) {
            ILogger logger = k7Var.getLogger();
            SentryLevel sentryLevel = SentryLevel.WARNING;
            logger.c(sentryLevel, "Task " + runnable + " rejected from " + this.f30503a, new Object[0]);
        }
        return new b();
    }

    public q6(k7 k7Var) {
        this(new ScheduledThreadPoolExecutor(1, new c()), k7Var);
    }

    public q6() {
        this(new ScheduledThreadPoolExecutor(1, new c()), null);
    }
}
