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
    private final k7 f28764d;

    /* renamed from: e  reason: collision with root package name */
    private final w0 f28765e;

    /* renamed from: i  reason: collision with root package name */
    private int f28766i = 0;

    /* renamed from: o  reason: collision with root package name */
    private volatile Future f28767o = null;

    /* renamed from: p  reason: collision with root package name */
    private final io.sentry.util.a f28768p = new io.sentry.util.a();

    public a(k7 k7Var, w0 w0Var) {
        this.f28764d = k7Var;
        this.f28765e = w0Var;
    }

    private boolean c() {
        return this.f28765e.g();
    }

    private void d(int i10) {
        z0 executorService = this.f28764d.getExecutorService();
        if (!executorService.isClosed()) {
            a1 a10 = this.f28768p.a();
            try {
                try {
                    this.f28767o = executorService.c(this, i10);
                } catch (RejectedExecutionException e10) {
                    this.f28764d.getLogger().b(SentryLevel.WARNING, "Backpressure monitor reschedule task rejected", e10);
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
        return this.f28766i;
    }

    void b() {
        if (c()) {
            if (this.f28766i > 0) {
                this.f28764d.getLogger().c(SentryLevel.DEBUG, "Health check positive, reverting to normal sampling.", new Object[0]);
            }
            this.f28766i = 0;
            return;
        }
        int i10 = this.f28766i;
        if (i10 < 10) {
            this.f28766i = i10 + 1;
            this.f28764d.getLogger().c(SentryLevel.DEBUG, "Health check negative, downsampling with a factor of %d", Integer.valueOf(this.f28766i));
        }
    }

    @Override // io.sentry.backpressure.b
    public void close() {
        Future future = this.f28767o;
        if (future != null) {
            a1 a10 = this.f28768p.a();
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
