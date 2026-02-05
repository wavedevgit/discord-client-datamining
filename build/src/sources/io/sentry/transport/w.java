package io.sentry.transport;

import io.sentry.ILogger;
import io.sentry.SentryLevel;
import io.sentry.j5;
import io.sentry.k5;
import java.util.concurrent.CancellationException;
import java.util.concurrent.Future;
import java.util.concurrent.LinkedBlockingQueue;
import java.util.concurrent.RejectedExecutionException;
import java.util.concurrent.RejectedExecutionHandler;
import java.util.concurrent.ThreadFactory;
import java.util.concurrent.ThreadPoolExecutor;
import java.util.concurrent.TimeUnit;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class w extends ThreadPoolExecutor implements AutoCloseable {

    /* renamed from: q  reason: collision with root package name */
    private static final long f29771q = io.sentry.k.i(2000);

    /* renamed from: d  reason: collision with root package name */
    private final int f29772d;

    /* renamed from: e  reason: collision with root package name */
    private j5 f29773e;

    /* renamed from: i  reason: collision with root package name */
    private final ILogger f29774i;

    /* renamed from: o  reason: collision with root package name */
    private final k5 f29775o;

    /* renamed from: p  reason: collision with root package name */
    private final b0 f29776p;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class a implements Future {
        a() {
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

    public w(int i10, int i11, ThreadFactory threadFactory, RejectedExecutionHandler rejectedExecutionHandler, ILogger iLogger, k5 k5Var) {
        super(i10, i10, 0L, TimeUnit.MILLISECONDS, new LinkedBlockingQueue(), threadFactory, rejectedExecutionHandler);
        this.f29773e = null;
        this.f29776p = new b0();
        this.f29772d = i11;
        this.f29774i = iLogger;
        this.f29775o = k5Var;
    }

    public boolean a() {
        j5 j5Var = this.f29773e;
        if (j5Var == null || this.f29775o.now().d(j5Var) >= f29771q) {
            return false;
        }
        return true;
    }

    @Override // java.util.concurrent.ThreadPoolExecutor
    protected void afterExecute(Runnable runnable, Throwable th2) {
        try {
            super.afterExecute(runnable, th2);
        } finally {
            this.f29776p.a();
        }
    }

    @Override // java.lang.AutoCloseable
    public /* synthetic */ void close() {
        c0.c.a(this);
    }

    public boolean h() {
        if (this.f29776p.b() < this.f29772d) {
            return true;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void k(long j10) {
        try {
            this.f29776p.d(j10, TimeUnit.MILLISECONDS);
        } catch (InterruptedException e10) {
            this.f29774i.b(SentryLevel.ERROR, "Failed to wait till idle", e10);
            Thread.currentThread().interrupt();
        }
    }

    @Override // java.util.concurrent.AbstractExecutorService, java.util.concurrent.ExecutorService
    public Future submit(Runnable runnable) {
        if (h()) {
            this.f29776p.c();
            try {
                return super.submit(runnable);
            } catch (RejectedExecutionException e10) {
                this.f29776p.a();
                this.f29773e = this.f29775o.now();
                this.f29774i.b(SentryLevel.WARNING, "Submit rejected by thread pool executor", e10);
                return new a();
            }
        }
        this.f29773e = this.f29775o.now();
        this.f29774i.c(SentryLevel.WARNING, "Submit cancelled", new Object[0]);
        return new a();
    }
}
