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
    private static final io.sentry.util.a f27719q = new io.sentry.util.a();

    /* renamed from: d  reason: collision with root package name */
    private Thread.UncaughtExceptionHandler f27720d;

    /* renamed from: e  reason: collision with root package name */
    private w0 f27721e;

    /* renamed from: i  reason: collision with root package name */
    private k7 f27722i;

    /* renamed from: o  reason: collision with root package name */
    private boolean f27723o;

    /* renamed from: p  reason: collision with root package name */
    private final w8 f27724p;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class a extends io.sentry.hints.d implements io.sentry.hints.l, io.sentry.hints.q {

        /* renamed from: d  reason: collision with root package name */
        private final AtomicReference f27725d;

        public a(long j10, ILogger iLogger) {
            super(j10, iLogger);
            this.f27725d = new AtomicReference();
        }

        @Override // io.sentry.hints.f
        public boolean b(io.sentry.protocol.x xVar) {
            io.sentry.protocol.x xVar2 = (io.sentry.protocol.x) this.f27725d.get();
            if (xVar2 != null && xVar2.equals(xVar)) {
                return true;
            }
            return false;
        }

        @Override // io.sentry.hints.f
        public void c(io.sentry.protocol.x xVar) {
            this.f27725d.set(xVar);
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

    private void k(Thread.UncaughtExceptionHandler uncaughtExceptionHandler) {
        m(uncaughtExceptionHandler, new HashSet());
    }

    private void m(Thread.UncaughtExceptionHandler uncaughtExceptionHandler, Set set) {
        if (uncaughtExceptionHandler == null) {
            k7 k7Var = this.f27722i;
            if (k7Var != null) {
                k7Var.getLogger().c(SentryLevel.DEBUG, "Found no UncaughtExceptionHandler to remove.", new Object[0]);
            }
        } else if (!set.add(uncaughtExceptionHandler)) {
            k7 k7Var2 = this.f27722i;
            if (k7Var2 != null) {
                k7Var2.getLogger().c(SentryLevel.WARNING, "Cycle detected in UncaughtExceptionHandler chain while removing handler.", new Object[0]);
            }
        } else if (uncaughtExceptionHandler instanceof UncaughtExceptionHandlerIntegration) {
            UncaughtExceptionHandlerIntegration uncaughtExceptionHandlerIntegration = (UncaughtExceptionHandlerIntegration) uncaughtExceptionHandler;
            Thread.UncaughtExceptionHandler uncaughtExceptionHandler2 = uncaughtExceptionHandlerIntegration.f27720d;
            if (this == uncaughtExceptionHandler2) {
                uncaughtExceptionHandlerIntegration.f27720d = this.f27720d;
                k7 k7Var3 = this.f27722i;
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
        a1 a10 = f27719q.a();
        try {
            if (this == this.f27724p.b()) {
                this.f27724p.a(this.f27720d);
                k7 k7Var = this.f27722i;
                if (k7Var != null) {
                    k7Var.getLogger().c(SentryLevel.DEBUG, "UncaughtExceptionHandlerIntegration removed.", new Object[0]);
                }
            } else {
                k(this.f27724p.b());
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
        if (this.f27723o) {
            k7Var.getLogger().c(SentryLevel.ERROR, "Attempt to register a UncaughtExceptionHandlerIntegration twice.", new Object[0]);
            return;
        }
        this.f27723o = true;
        this.f27721e = (w0) io.sentry.util.y.c(w0Var, "Scopes are required");
        k7 k7Var2 = (k7) io.sentry.util.y.c(k7Var, "SentryOptions is required");
        this.f27722i = k7Var2;
        ILogger logger = k7Var2.getLogger();
        SentryLevel sentryLevel = SentryLevel.DEBUG;
        logger.c(sentryLevel, "UncaughtExceptionHandlerIntegration enabled: %s", Boolean.valueOf(this.f27722i.isEnableUncaughtExceptionHandler()));
        if (this.f27722i.isEnableUncaughtExceptionHandler()) {
            a1 a10 = f27719q.a();
            try {
                Thread.UncaughtExceptionHandler b10 = this.f27724p.b();
                if (b10 != null) {
                    ILogger logger2 = this.f27722i.getLogger();
                    logger2.c(sentryLevel, "default UncaughtExceptionHandler class='" + b10.getClass().getName() + "'", new Object[0]);
                    if (b10 instanceof UncaughtExceptionHandlerIntegration) {
                        UncaughtExceptionHandlerIntegration uncaughtExceptionHandlerIntegration = (UncaughtExceptionHandlerIntegration) b10;
                        if (uncaughtExceptionHandlerIntegration.f27721e != null && w0Var.u() == uncaughtExceptionHandlerIntegration.f27721e.u()) {
                            this.f27720d = uncaughtExceptionHandlerIntegration.f27720d;
                        } else {
                            this.f27720d = b10;
                        }
                    } else {
                        this.f27720d = b10;
                    }
                }
                this.f27724p.a(this);
                if (a10 != null) {
                    a10.close();
                }
                this.f27722i.getLogger().c(sentryLevel, "UncaughtExceptionHandlerIntegration installed.", new Object[0]);
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
        k7 k7Var = this.f27722i;
        if (k7Var != null && this.f27721e != null) {
            k7Var.getLogger().c(SentryLevel.INFO, "Uncaught exception received.", new Object[0]);
            try {
                a aVar = new a(this.f27722i.getFlushTimeoutMillis(), this.f27722i.getLogger());
                SentryEvent sentryEvent = new SentryEvent(a(thread, th2));
                sentryEvent.E0(SentryLevel.FATAL);
                if (this.f27721e.m() == null && sentryEvent.G() != null) {
                    aVar.c(sentryEvent.G());
                }
                Hint e10 = io.sentry.util.n.e(aVar);
                boolean equals = this.f27721e.y(sentryEvent, e10).equals(io.sentry.protocol.x.f29471e);
                io.sentry.hints.h f10 = io.sentry.util.n.f(e10);
                if ((!equals || io.sentry.hints.h.MULTITHREADED_DEDUPLICATION.equals(f10)) && !aVar.g()) {
                    this.f27722i.getLogger().c(SentryLevel.WARNING, "Timed out waiting to flush event to disk before crashing. Event: %s", sentryEvent.G());
                }
            } catch (Throwable th3) {
                this.f27722i.getLogger().b(SentryLevel.ERROR, "Error sending uncaught exception to Sentry.", th3);
            }
            if (this.f27720d != null) {
                this.f27722i.getLogger().c(SentryLevel.INFO, "Invoking inner uncaught exception handler.", new Object[0]);
                this.f27720d.uncaughtException(thread, th2);
            } else if (this.f27722i.isPrintUncaughtStackTrace()) {
                th2.printStackTrace();
            }
        }
    }

    UncaughtExceptionHandlerIntegration(w8 w8Var) {
        this.f27723o = false;
        this.f27724p = (w8) io.sentry.util.y.c(w8Var, "threadAdapter is required.");
    }
}
