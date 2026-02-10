package io.sentry;

import io.sentry.w8;
import java.io.Closeable;
import java.lang.Thread;
import java.util.HashSet;
import java.util.Set;
import java.util.concurrent.atomic.AtomicReference;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class UncaughtExceptionHandlerIntegration implements k1, Thread.UncaughtExceptionHandler, Closeable {

    /* renamed from: q  reason: collision with root package name */
    private static final io.sentry.util.a f28046q = new io.sentry.util.a();

    /* renamed from: d  reason: collision with root package name */
    private Thread.UncaughtExceptionHandler f28047d;

    /* renamed from: e  reason: collision with root package name */
    private w0 f28048e;

    /* renamed from: i  reason: collision with root package name */
    private k7 f28049i;

    /* renamed from: o  reason: collision with root package name */
    private boolean f28050o;

    /* renamed from: p  reason: collision with root package name */
    private final w8 f28051p;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class a extends io.sentry.hints.d implements io.sentry.hints.l, io.sentry.hints.q {

        /* renamed from: d  reason: collision with root package name */
        private final AtomicReference f28052d;

        public a(long j10, ILogger iLogger) {
            super(j10, iLogger);
            this.f28052d = new AtomicReference();
        }

        @Override // io.sentry.hints.f
        public boolean b(io.sentry.protocol.x xVar) {
            io.sentry.protocol.x xVar2 = (io.sentry.protocol.x) this.f28052d.get();
            if (xVar2 != null && xVar2.equals(xVar)) {
                return true;
            }
            return false;
        }

        @Override // io.sentry.hints.f
        public void c(io.sentry.protocol.x xVar) {
            this.f28052d.set(xVar);
        }
    }

    public UncaughtExceptionHandlerIntegration() {
        this(w8.a.c());
    }

    static Throwable a(Thread thread, Throwable th2) {
        io.sentry.protocol.l lVar = new io.sentry.protocol.l();
        lVar.n(Boolean.FALSE);
        lVar.p("UncaughtExceptionHandler");
        return new io.sentry.exception.a(lVar, th2, thread);
    }

    private void i(Thread.UncaughtExceptionHandler uncaughtExceptionHandler) {
        m(uncaughtExceptionHandler, new HashSet());
    }

    private void m(Thread.UncaughtExceptionHandler uncaughtExceptionHandler, Set set) {
        if (uncaughtExceptionHandler == null) {
            k7 k7Var = this.f28049i;
            if (k7Var != null) {
                k7Var.getLogger().c(SentryLevel.DEBUG, "Found no UncaughtExceptionHandler to remove.", new Object[0]);
            }
        } else if (!set.add(uncaughtExceptionHandler)) {
            k7 k7Var2 = this.f28049i;
            if (k7Var2 != null) {
                k7Var2.getLogger().c(SentryLevel.WARNING, "Cycle detected in UncaughtExceptionHandler chain while removing handler.", new Object[0]);
            }
        } else if (uncaughtExceptionHandler instanceof UncaughtExceptionHandlerIntegration) {
            UncaughtExceptionHandlerIntegration uncaughtExceptionHandlerIntegration = (UncaughtExceptionHandlerIntegration) uncaughtExceptionHandler;
            Thread.UncaughtExceptionHandler uncaughtExceptionHandler2 = uncaughtExceptionHandlerIntegration.f28047d;
            if (this == uncaughtExceptionHandler2) {
                uncaughtExceptionHandlerIntegration.f28047d = this.f28047d;
                k7 k7Var3 = this.f28049i;
                if (k7Var3 != null) {
                    k7Var3.getLogger().c(SentryLevel.DEBUG, "UncaughtExceptionHandlerIntegration removed.", new Object[0]);
                    return;
                }
                return;
            }
            m(uncaughtExceptionHandler2, set);
        }
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        a1 a10 = f28046q.a();
        try {
            if (this == this.f28051p.b()) {
                this.f28051p.a(this.f28047d);
                k7 k7Var = this.f28049i;
                if (k7Var != null) {
                    k7Var.getLogger().c(SentryLevel.DEBUG, "UncaughtExceptionHandlerIntegration removed.", new Object[0]);
                }
            } else {
                i(this.f28051p.b());
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

    @Override // io.sentry.k1
    public final void h(w0 w0Var, k7 k7Var) {
        if (this.f28050o) {
            k7Var.getLogger().c(SentryLevel.ERROR, "Attempt to register a UncaughtExceptionHandlerIntegration twice.", new Object[0]);
            return;
        }
        this.f28050o = true;
        this.f28048e = (w0) io.sentry.util.y.c(w0Var, "Scopes are required");
        k7 k7Var2 = (k7) io.sentry.util.y.c(k7Var, "SentryOptions is required");
        this.f28049i = k7Var2;
        ILogger logger = k7Var2.getLogger();
        SentryLevel sentryLevel = SentryLevel.DEBUG;
        logger.c(sentryLevel, "UncaughtExceptionHandlerIntegration enabled: %s", Boolean.valueOf(this.f28049i.isEnableUncaughtExceptionHandler()));
        if (this.f28049i.isEnableUncaughtExceptionHandler()) {
            a1 a10 = f28046q.a();
            try {
                Thread.UncaughtExceptionHandler b10 = this.f28051p.b();
                if (b10 != null) {
                    ILogger logger2 = this.f28049i.getLogger();
                    logger2.c(sentryLevel, "default UncaughtExceptionHandler class='" + b10.getClass().getName() + "'", new Object[0]);
                    if (b10 instanceof UncaughtExceptionHandlerIntegration) {
                        UncaughtExceptionHandlerIntegration uncaughtExceptionHandlerIntegration = (UncaughtExceptionHandlerIntegration) b10;
                        if (uncaughtExceptionHandlerIntegration.f28048e != null && w0Var.u() == uncaughtExceptionHandlerIntegration.f28048e.u()) {
                            this.f28047d = uncaughtExceptionHandlerIntegration.f28047d;
                        } else {
                            this.f28047d = b10;
                        }
                    } else {
                        this.f28047d = b10;
                    }
                }
                this.f28051p.a(this);
                if (a10 != null) {
                    a10.close();
                }
                this.f28049i.getLogger().c(sentryLevel, "UncaughtExceptionHandlerIntegration installed.", new Object[0]);
                io.sentry.util.p.a("UncaughtExceptionHandler");
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

    @Override // java.lang.Thread.UncaughtExceptionHandler
    public void uncaughtException(Thread thread, Throwable th2) {
        k7 k7Var = this.f28049i;
        if (k7Var != null && this.f28048e != null) {
            k7Var.getLogger().c(SentryLevel.INFO, "Uncaught exception received.", new Object[0]);
            try {
                a aVar = new a(this.f28049i.getFlushTimeoutMillis(), this.f28049i.getLogger());
                SentryEvent sentryEvent = new SentryEvent(a(thread, th2));
                sentryEvent.E0(SentryLevel.FATAL);
                if (this.f28048e.l() == null && sentryEvent.G() != null) {
                    aVar.c(sentryEvent.G());
                }
                Hint e10 = io.sentry.util.n.e(aVar);
                boolean equals = this.f28048e.y(sentryEvent, e10).equals(io.sentry.protocol.x.f29798e);
                io.sentry.hints.h f10 = io.sentry.util.n.f(e10);
                if ((!equals || io.sentry.hints.h.MULTITHREADED_DEDUPLICATION.equals(f10)) && !aVar.g()) {
                    this.f28049i.getLogger().c(SentryLevel.WARNING, "Timed out waiting to flush event to disk before crashing. Event: %s", sentryEvent.G());
                }
            } catch (Throwable th3) {
                this.f28049i.getLogger().b(SentryLevel.ERROR, "Error sending uncaught exception to Sentry.", th3);
            }
            if (this.f28047d != null) {
                this.f28049i.getLogger().c(SentryLevel.INFO, "Invoking inner uncaught exception handler.", new Object[0]);
                this.f28047d.uncaughtException(thread, th2);
            } else if (this.f28049i.isPrintUncaughtStackTrace()) {
                th2.printStackTrace();
            }
        }
    }

    UncaughtExceptionHandlerIntegration(w8 w8Var) {
        this.f28050o = false;
        this.f28051p = (w8) io.sentry.util.y.c(w8Var, "threadAdapter is required.");
    }
}
