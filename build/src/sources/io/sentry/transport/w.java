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
    private static final long f30770q = io.sentry.k.i(2000);

    /* renamed from: d  reason: collision with root package name */
    private final int f30771d;

    /* renamed from: e  reason: collision with root package name */
    private j5 f30772e;

    /* renamed from: i  reason: collision with root package name */
    private final ILogger f30773i;

    /* renamed from: o  reason: collision with root package name */
    private final k5 f30774o;

    /* renamed from: p  reason: collision with root package name */
    private final b0 f30775p;

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
        this.f30772e = null;
        this.f30775p = new b0();
        this.f30771d = i11;
        this.f30773i = iLogger;
        this.f30774o = k5Var;
    }

    public boolean a() {
        j5 j5Var = this.f30772e;
        if (j5Var == null || this.f30774o.now().d(j5Var) >= f30770q) {
            return false;
        }
        return true;
    }

    @Override // java.util.concurrent.ThreadPoolExecutor
    protected void afterExecute(Runnable runnable, Throwable th2) {
        try {
            super.afterExecute(runnable, th2);
        } finally {
            this.f30775p.a();
        }
    }

    @Override // java.lang.AutoCloseable
    public /* synthetic */ void close() {
        c0.c.a(this);
    }

    public boolean h() {
        if (this.f30775p.b() < this.f30771d) {
            return true;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void l(long j10) {
        try {
            this.f30775p.d(j10, TimeUnit.MILLISECONDS);
        } catch (InterruptedException e10) {
            this.f30773i.b(SentryLevel.ERROR, "Failed to wait till idle", e10);
            Thread.currentThread().interrupt();
        }
    }

    @Override // java.util.concurrent.AbstractExecutorService, java.util.concurrent.ExecutorService
    public Future submit(Runnable runnable) {
        if (h()) {
            this.f30775p.c();
            try {
                return super.submit(runnable);
            } catch (RejectedExecutionException e10) {
                this.f30775p.a();
                this.f30772e = this.f30774o.now();
                this.f30773i.b(SentryLevel.WARNING, "Submit rejected by thread pool executor", e10);
                return new a();
            }
        }
        this.f30772e = this.f30774o.now();
        this.f30773i.c(SentryLevel.WARNING, "Submit cancelled", new Object[0]);
        return new a();
    }
}
