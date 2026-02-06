package io.sentry.backpressure;

import io.sentry.SentryLevel;
import io.sentry.a1;
import io.sentry.k7;
import io.sentry.w0;
import io.sentry.z0;
import java.util.concurrent.Future;
import java.util.concurrent.RejectedExecutionException;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a implements b, Runnable {

    /* renamed from: d  reason: collision with root package name */
    private final k7 f27908d;

    /* renamed from: e  reason: collision with root package name */
    private final w0 f27909e;

    /* renamed from: i  reason: collision with root package name */
    private int f27910i = 0;

    /* renamed from: o  reason: collision with root package name */
    private volatile Future f27911o = null;

    /* renamed from: p  reason: collision with root package name */
    private final io.sentry.util.a f27912p = new io.sentry.util.a();

    public a(k7 k7Var, w0 w0Var) {
        this.f27908d = k7Var;
        this.f27909e = w0Var;
    }

    private boolean c() {
        return this.f27909e.f();
    }

    private void d(int i10) {
        z0 executorService = this.f27908d.getExecutorService();
        if (!executorService.isClosed()) {
            a1 a10 = this.f27912p.a();
            try {
                try {
                    this.f27911o = executorService.c(this, i10);
                } catch (RejectedExecutionException e10) {
                    this.f27908d.getLogger().b(SentryLevel.WARNING, "Backpressure monitor reschedule task rejected", e10);
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
    }

    @Override // io.sentry.backpressure.b
    public int a() {
        return this.f27910i;
    }

    void b() {
        if (c()) {
            if (this.f27910i > 0) {
                this.f27908d.getLogger().c(SentryLevel.DEBUG, "Health check positive, reverting to normal sampling.", new Object[0]);
            }
            this.f27910i = 0;
            return;
        }
        int i10 = this.f27910i;
        if (i10 < 10) {
            this.f27910i = i10 + 1;
            this.f27908d.getLogger().c(SentryLevel.DEBUG, "Health check negative, downsampling with a factor of %d", Integer.valueOf(this.f27910i));
        }
    }

    @Override // io.sentry.backpressure.b
    public void close() {
        Future future = this.f27911o;
        if (future != null) {
            a1 a10 = this.f27912p.a();
            try {
                future.cancel(true);
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
    }

    @Override // java.lang.Runnable
    public void run() {
        b();
        d(10000);
    }

    @Override // io.sentry.backpressure.b
    public void start() {
        d(500);
    }
}
