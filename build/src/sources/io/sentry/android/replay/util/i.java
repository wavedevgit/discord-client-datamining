package io.sentry.android.replay.util;

import io.sentry.ILogger;
import io.sentry.SentryLevel;
import io.sentry.k7;
import java.util.Collection;
import java.util.List;
import java.util.concurrent.Callable;
import java.util.concurrent.Future;
import java.util.concurrent.ScheduledExecutorService;
import java.util.concurrent.ScheduledFuture;
import java.util.concurrent.TimeUnit;
import kotlin.Unit;
import kotlin.jvm.internal.Intrinsics;
import kotlin.text.StringsKt;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class i implements ScheduledExecutorService, AutoCloseable {

    /* renamed from: d  reason: collision with root package name */
    private final ScheduledExecutorService f28664d;

    /* renamed from: e  reason: collision with root package name */
    private final k7 f28665e;

    public i(ScheduledExecutorService delegate, k7 options) {
        Intrinsics.checkNotNullParameter(delegate, "delegate");
        Intrinsics.checkNotNullParameter(options, "options");
        this.f28664d = delegate;
        this.f28665e = options;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void h(Runnable runnable, i iVar) {
        String str;
        try {
            runnable.run();
        } catch (Throwable th2) {
            ILogger logger = iVar.f28665e.getLogger();
            SentryLevel sentryLevel = SentryLevel.ERROR;
            StringBuilder sb2 = new StringBuilder();
            sb2.append("Failed to execute task ");
            if (runnable instanceof j) {
                str = ((j) runnable).a();
            } else {
                str = "";
            }
            sb2.append(str);
            logger.b(sentryLevel, sb2.toString(), th2);
        }
    }

    @Override // java.util.concurrent.ExecutorService
    public boolean awaitTermination(long j10, TimeUnit timeUnit) {
        return this.f28664d.awaitTermination(j10, timeUnit);
    }

    @Override // java.lang.AutoCloseable
    public /* synthetic */ void close() {
        c0.c.a(this);
    }

    @Override // java.util.concurrent.Executor
    public void execute(Runnable runnable) {
        this.f28664d.execute(runnable);
    }

    @Override // java.util.concurrent.ExecutorService
    public List invokeAll(Collection collection) {
        return this.f28664d.invokeAll(collection);
    }

    @Override // java.util.concurrent.ExecutorService
    public Object invokeAny(Collection collection) {
        return this.f28664d.invokeAny(collection);
    }

    @Override // java.util.concurrent.ExecutorService
    public boolean isShutdown() {
        return this.f28664d.isShutdown();
    }

    @Override // java.util.concurrent.ExecutorService
    public boolean isTerminated() {
        return this.f28664d.isTerminated();
    }

    @Override // java.util.concurrent.ScheduledExecutorService
    public ScheduledFuture schedule(Runnable runnable, long j10, TimeUnit timeUnit) {
        return this.f28664d.schedule(runnable, j10, timeUnit);
    }

    @Override // java.util.concurrent.ScheduledExecutorService
    public ScheduledFuture scheduleAtFixedRate(Runnable runnable, long j10, long j11, TimeUnit timeUnit) {
        return this.f28664d.scheduleAtFixedRate(runnable, j10, j11, timeUnit);
    }

    @Override // java.util.concurrent.ScheduledExecutorService
    public ScheduledFuture scheduleWithFixedDelay(Runnable runnable, long j10, long j11, TimeUnit timeUnit) {
        return this.f28664d.scheduleWithFixedDelay(runnable, j10, j11, timeUnit);
    }

    @Override // java.util.concurrent.ExecutorService
    public void shutdown() {
        synchronized (this) {
            if (!isShutdown()) {
                this.f28664d.shutdown();
            }
            try {
                if (!awaitTermination(this.f28665e.getShutdownTimeoutMillis(), TimeUnit.MILLISECONDS)) {
                    shutdownNow();
                }
            } catch (InterruptedException unused) {
                shutdownNow();
                Thread.currentThread().interrupt();
            }
            Unit unit = Unit.f31988a;
        }
    }

    @Override // java.util.concurrent.ExecutorService
    public List shutdownNow() {
        return this.f28664d.shutdownNow();
    }

    @Override // java.util.concurrent.ExecutorService
    public Future submit(Runnable runnable, Object obj) {
        return this.f28664d.submit(runnable, obj);
    }

    @Override // java.util.concurrent.ExecutorService
    public List invokeAll(Collection collection, long j10, TimeUnit timeUnit) {
        return this.f28664d.invokeAll(collection, j10, timeUnit);
    }

    @Override // java.util.concurrent.ExecutorService
    public Object invokeAny(Collection collection, long j10, TimeUnit timeUnit) {
        return this.f28664d.invokeAny(collection, j10, timeUnit);
    }

    @Override // java.util.concurrent.ScheduledExecutorService
    public ScheduledFuture schedule(Callable callable, long j10, TimeUnit timeUnit) {
        return this.f28664d.schedule(callable, j10, timeUnit);
    }

    @Override // java.util.concurrent.ExecutorService
    public Future submit(Callable callable) {
        return this.f28664d.submit(callable);
    }

    @Override // java.util.concurrent.ExecutorService
    public Future submit(final Runnable task) {
        Intrinsics.checkNotNullParameter(task, "task");
        String name = Thread.currentThread().getName();
        Intrinsics.checkNotNullExpressionValue(name, "getName(...)");
        if (StringsKt.P(name, "SentryReplayIntegration", false, 2, null)) {
            task.run();
            return null;
        }
        try {
            return this.f28664d.submit(new Runnable() { // from class: io.sentry.android.replay.util.h
                @Override // java.lang.Runnable
                public final void run() {
                    i.h(task, this);
                }
            });
        } catch (Throwable th2) {
            ILogger logger = this.f28665e.getLogger();
            SentryLevel sentryLevel = SentryLevel.ERROR;
            StringBuilder sb2 = new StringBuilder();
            sb2.append("Failed to submit task ");
            sb2.append(task instanceof j ? ((j) task).a() : "");
            sb2.append(" to executor");
            logger.b(sentryLevel, sb2.toString(), th2);
            return null;
        }
    }
}
