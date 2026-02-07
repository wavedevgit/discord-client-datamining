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
    private static final io.sentry.util.a f26911q = new io.sentry.util.a();

    /* renamed from: d  reason: collision with root package name */
    private Thread.UncaughtExceptionHandler f26912d;

    /* renamed from: e  reason: collision with root package name */
    private w0 f26913e;

    /* renamed from: i  reason: collision with root package name */
    private k7 f26914i;

    /* renamed from: o  reason: collision with root package name */
    private boolean f26915o;

    /* renamed from: p  reason: collision with root package name */
    private final w8 f26916p;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class a extends io.sentry.hints.d implements io.sentry.hints.l, io.sentry.hints.q {

        /* renamed from: d  reason: collision with root package name */
        private final AtomicReference f26917d;

        public a(long j10, ILogger iLogger) {
            super(j10, iLogger);
            this.f26917d = new AtomicReference();
        }

        @Override // io.sentry.hints.f
        public boolean b(io.sentry.protocol.x xVar) {
            io.sentry.protocol.x xVar2 = (io.sentry.protocol.x) this.f26917d.get();
            if (xVar2 != null && xVar2.equals(xVar)) {
                return true;
            }
            return false;
        }

        @Override // io.sentry.hints.f
        public void c(io.sentry.protocol.x xVar) {
            this.f26917d.set(xVar);
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
            k7 k7Var = this.f26914i;
            if (k7Var != null) {
                k7Var.getLogger().c(SentryLevel.DEBUG, "Found no UncaughtExceptionHandler to remove.", new Object[0]);
            }
        } else if (!set.add(uncaughtExceptionHandler)) {
            k7 k7Var2 = this.f26914i;
            if (k7Var2 != null) {
                k7Var2.getLogger().c(SentryLevel.WARNING, "Cycle detected in UncaughtExceptionHandler chain while removing handler.", new Object[0]);
            }
        } else if (uncaughtExceptionHandler instanceof UncaughtExceptionHandlerIntegration) {
            UncaughtExceptionHandlerIntegration uncaughtExceptionHandlerIntegration = (UncaughtExceptionHandlerIntegration) uncaughtExceptionHandler;
            Thread.UncaughtExceptionHandler uncaughtExceptionHandler2 = uncaughtExceptionHandlerIntegration.f26912d;
            if (this == uncaughtExceptionHandler2) {
                uncaughtExceptionHandlerIntegration.f26912d = this.f26912d;
                k7 k7Var3 = this.f26914i;
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
        a1 a10 = f26911q.a();
        try {
            if (this == this.f26916p.b()) {
                this.f26916p.a(this.f26912d);
                k7 k7Var = this.f26914i;
                if (k7Var != null) {
                    k7Var.getLogger().c(SentryLevel.DEBUG, "UncaughtExceptionHandlerIntegration removed.", new Object[0]);
                }
            } else {
                k(this.f26916p.b());
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
    public final void g(w0 w0Var, k7 k7Var) {
        if (this.f26915o) {
            k7Var.getLogger().c(SentryLevel.ERROR, "Attempt to register a UncaughtExceptionHandlerIntegration twice.", new Object[0]);
            return;
        }
        this.f26915o = true;
        this.f26913e = (w0) io.sentry.util.y.c(w0Var, "Scopes are required");
        k7 k7Var2 = (k7) io.sentry.util.y.c(k7Var, "SentryOptions is required");
        this.f26914i = k7Var2;
        ILogger logger = k7Var2.getLogger();
        SentryLevel sentryLevel = SentryLevel.DEBUG;
        logger.c(sentryLevel, "UncaughtExceptionHandlerIntegration enabled: %s", Boolean.valueOf(this.f26914i.isEnableUncaughtExceptionHandler()));
        if (this.f26914i.isEnableUncaughtExceptionHandler()) {
            a1 a10 = f26911q.a();
            try {
                Thread.UncaughtExceptionHandler b10 = this.f26916p.b();
                if (b10 != null) {
                    ILogger logger2 = this.f26914i.getLogger();
                    logger2.c(sentryLevel, "default UncaughtExceptionHandler class='" + b10.getClass().getName() + "'", new Object[0]);
                    if (b10 instanceof UncaughtExceptionHandlerIntegration) {
                        UncaughtExceptionHandlerIntegration uncaughtExceptionHandlerIntegration = (UncaughtExceptionHandlerIntegration) b10;
                        if (uncaughtExceptionHandlerIntegration.f26913e != null && w0Var.t() == uncaughtExceptionHandlerIntegration.f26913e.t()) {
                            this.f26912d = uncaughtExceptionHandlerIntegration.f26912d;
                        } else {
                            this.f26912d = b10;
                        }
                    } else {
                        this.f26912d = b10;
                    }
                }
                this.f26916p.a(this);
                if (a10 != null) {
                    a10.close();
                }
                this.f26914i.getLogger().c(sentryLevel, "UncaughtExceptionHandlerIntegration installed.", new Object[0]);
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
        k7 k7Var = this.f26914i;
        if (k7Var != null && this.f26913e != null) {
            k7Var.getLogger().c(SentryLevel.INFO, "Uncaught exception received.", new Object[0]);
            try {
                a aVar = new a(this.f26914i.getFlushTimeoutMillis(), this.f26914i.getLogger());
                SentryEvent sentryEvent = new SentryEvent(a(thread, th2));
                sentryEvent.E0(SentryLevel.FATAL);
                if (this.f26913e.l() == null && sentryEvent.G() != null) {
                    aVar.c(sentryEvent.G());
                }
                Hint e10 = io.sentry.util.n.e(aVar);
                boolean equals = this.f26913e.x(sentryEvent, e10).equals(io.sentry.protocol.x.f28663e);
                io.sentry.hints.h f10 = io.sentry.util.n.f(e10);
                if ((!equals || io.sentry.hints.h.MULTITHREADED_DEDUPLICATION.equals(f10)) && !aVar.g()) {
                    this.f26914i.getLogger().c(SentryLevel.WARNING, "Timed out waiting to flush event to disk before crashing. Event: %s", sentryEvent.G());
                }
            } catch (Throwable th3) {
                this.f26914i.getLogger().b(SentryLevel.ERROR, "Error sending uncaught exception to Sentry.", th3);
            }
            if (this.f26912d != null) {
                this.f26914i.getLogger().c(SentryLevel.INFO, "Invoking inner uncaught exception handler.", new Object[0]);
                this.f26912d.uncaughtException(thread, th2);
            } else if (this.f26914i.isPrintUncaughtStackTrace()) {
                th2.printStackTrace();
            }
        }
    }

    UncaughtExceptionHandlerIntegration(w8 w8Var) {
        this.f26915o = false;
        this.f26916p = (w8) io.sentry.util.y.c(w8Var, "threadAdapter is required.");
    }
}
