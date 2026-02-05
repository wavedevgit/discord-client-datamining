package io.sentry.transport;

import io.sentry.Hint;
import io.sentry.ILogger;
import io.sentry.SentryLevel;
import io.sentry.UncaughtExceptionHandlerIntegration;
import io.sentry.k5;
import io.sentry.k7;
import io.sentry.l5;
import io.sentry.transport.e;
import io.sentry.util.n;
import io.sentry.w3;
import java.io.IOException;
import java.util.concurrent.Future;
import java.util.concurrent.RejectedExecutionHandler;
import java.util.concurrent.ThreadFactory;
import java.util.concurrent.ThreadPoolExecutor;
import java.util.concurrent.TimeUnit;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class e implements q {

    /* renamed from: d  reason: collision with root package name */
    private final w f29736d;

    /* renamed from: e  reason: collision with root package name */
    private final io.sentry.cache.g f29737e;

    /* renamed from: i  reason: collision with root package name */
    private final k7 f29738i;

    /* renamed from: o  reason: collision with root package name */
    private final a0 f29739o;

    /* renamed from: p  reason: collision with root package name */
    private final r f29740p;

    /* renamed from: q  reason: collision with root package name */
    private final o f29741q;

    /* renamed from: r  reason: collision with root package name */
    private volatile Runnable f29742r;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b implements ThreadFactory {

        /* renamed from: a  reason: collision with root package name */
        private int f29743a;

        private b() {
        }

        @Override // java.util.concurrent.ThreadFactory
        public Thread newThread(Runnable runnable) {
            StringBuilder sb2 = new StringBuilder();
            sb2.append("SentryAsyncConnection-");
            int i10 = this.f29743a;
            this.f29743a = i10 + 1;
            sb2.append(i10);
            Thread thread = new Thread(runnable, sb2.toString());
            thread.setDaemon(true);
            return thread;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public final class c implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        private final l5 f29744d;

        /* renamed from: e  reason: collision with root package name */
        private final Hint f29745e;

        /* renamed from: i  reason: collision with root package name */
        private final io.sentry.cache.g f29746i;

        /* renamed from: o  reason: collision with root package name */
        private final c0 f29747o = c0.a();

        c(l5 l5Var, Hint hint, io.sentry.cache.g gVar) {
            this.f29744d = (l5) io.sentry.util.y.c(l5Var, "Envelope is required.");
            this.f29745e = hint;
            this.f29746i = (io.sentry.cache.g) io.sentry.util.y.c(gVar, "EnvelopeCache is required.");
        }

        public static /* synthetic */ void a(c cVar, c0 c0Var, io.sentry.hints.p pVar) {
            e.this.f29738i.getLogger().c(SentryLevel.DEBUG, "Marking envelope submission result: %s", Boolean.valueOf(c0Var.d()));
            pVar.c(c0Var.d());
        }

        public static /* synthetic */ void b(c cVar, io.sentry.hints.f fVar) {
            if (fVar.b(cVar.f29744d.b().a())) {
                fVar.d();
                e.this.f29738i.getLogger().c(SentryLevel.DEBUG, "Disk flush envelope fired", new Object[0]);
                return;
            }
            e.this.f29738i.getLogger().c(SentryLevel.DEBUG, "Not firing envelope flush as there's an ongoing transaction", new Object[0]);
        }

        public static /* synthetic */ void d(c cVar, boolean z10, l5 l5Var, Object obj, Class cls) {
            if (!z10) {
                io.sentry.util.v.a(cls, obj, e.this.f29738i.getLogger());
                e.this.f29738i.getClientReportRecorder().b(io.sentry.clientreport.f.NETWORK_ERROR, l5Var);
                return;
            }
            cVar.getClass();
        }

        public static /* synthetic */ void e(c cVar, boolean z10, Object obj, Class cls) {
            if (!z10) {
                io.sentry.util.v.a(cls, obj, e.this.f29738i.getLogger());
                e.this.f29738i.getClientReportRecorder().b(io.sentry.clientreport.f.NETWORK_ERROR, cVar.f29744d);
                return;
            }
            cVar.getClass();
        }

        private c0 j() {
            c0 c0Var = this.f29747o;
            this.f29744d.b().d(null);
            final boolean N0 = this.f29746i.N0(this.f29744d, this.f29745e);
            io.sentry.util.n.k(this.f29745e, io.sentry.hints.f.class, new n.a() { // from class: io.sentry.transport.g
                @Override // io.sentry.util.n.a
                public final void accept(Object obj) {
                    e.c.b(e.c.this, (io.sentry.hints.f) obj);
                }
            });
            if (e.this.f29740p.a()) {
                final l5 e10 = e.this.f29738i.getClientReportRecorder().e(this.f29744d);
                try {
                    e10.b().d(io.sentry.k.k(e.this.f29738i.getDateProvider().now().h()));
                    c0 h10 = e.this.f29741q.h(e10);
                    if (h10.d()) {
                        this.f29746i.E(this.f29744d);
                        return h10;
                    }
                    String str = "The transport failed to send the envelope with response code " + h10.c();
                    e.this.f29738i.getLogger().c(SentryLevel.ERROR, str, new Object[0]);
                    if (h10.c() >= 400 && h10.c() != 429 && !N0) {
                        io.sentry.util.n.j(this.f29745e, io.sentry.hints.k.class, new n.c() { // from class: io.sentry.transport.h
                            @Override // io.sentry.util.n.c
                            public final void accept(Object obj) {
                                e.this.f29738i.getClientReportRecorder().b(io.sentry.clientreport.f.NETWORK_ERROR, e10);
                            }
                        });
                    }
                    throw new IllegalStateException(str);
                } catch (IOException e11) {
                    io.sentry.util.n.l(this.f29745e, io.sentry.hints.k.class, new n.a() { // from class: io.sentry.transport.i
                        @Override // io.sentry.util.n.a
                        public final void accept(Object obj) {
                            ((io.sentry.hints.k) obj).d(true);
                        }
                    }, new n.b() { // from class: io.sentry.transport.j
                        @Override // io.sentry.util.n.b
                        public final void a(Object obj, Class cls) {
                            e.c.d(e.c.this, N0, e10, obj, cls);
                        }
                    });
                    throw new IllegalStateException("Sending the event failed.", e11);
                }
            }
            io.sentry.util.n.l(this.f29745e, io.sentry.hints.k.class, new n.a() { // from class: io.sentry.transport.k
                @Override // io.sentry.util.n.a
                public final void accept(Object obj) {
                    ((io.sentry.hints.k) obj).d(true);
                }
            }, new n.b() { // from class: io.sentry.transport.l
                @Override // io.sentry.util.n.b
                public final void a(Object obj, Class cls) {
                    e.c.e(e.c.this, N0, obj, cls);
                }
            });
            return c0Var;
        }

        @Override // java.lang.Runnable
        public void run() {
            e.this.f29742r = this;
            final c0 c0Var = this.f29747o;
            try {
                c0Var = j();
                e.this.f29738i.getLogger().c(SentryLevel.DEBUG, "Envelope flushed", new Object[0]);
            } finally {
            }
        }
    }

    public e(k7 k7Var, a0 a0Var, r rVar, w3 w3Var) {
        this(L(k7Var.getMaxQueueSize(), k7Var.getEnvelopeDiskCache(), k7Var.getLogger(), k7Var.getDateProvider()), k7Var, a0Var, rVar, new o(k7Var, w3Var, a0Var));
    }

    private static w L(int i10, final io.sentry.cache.g gVar, final ILogger iLogger, k5 k5Var) {
        return new w(1, i10, new b(), new RejectedExecutionHandler() { // from class: io.sentry.transport.a
            @Override // java.util.concurrent.RejectedExecutionHandler
            public final void rejectedExecution(Runnable runnable, ThreadPoolExecutor threadPoolExecutor) {
                e.m(io.sentry.cache.g.this, iLogger, runnable, threadPoolExecutor);
            }
        }, iLogger, k5Var);
    }

    private static void N(Hint hint, final boolean z10) {
        io.sentry.util.n.k(hint, io.sentry.hints.p.class, new n.a() { // from class: io.sentry.transport.c
            @Override // io.sentry.util.n.a
            public final void accept(Object obj) {
                ((io.sentry.hints.p) obj).c(false);
            }
        });
        io.sentry.util.n.k(hint, io.sentry.hints.k.class, new n.a() { // from class: io.sentry.transport.d
            @Override // io.sentry.util.n.a
            public final void accept(Object obj) {
                ((io.sentry.hints.k) obj).d(z10);
            }
        });
    }

    public static /* synthetic */ void h(e eVar, io.sentry.hints.g gVar) {
        eVar.getClass();
        gVar.b();
        eVar.f29738i.getLogger().c(SentryLevel.DEBUG, "Envelope enqueued", new Object[0]);
    }

    public static /* synthetic */ void m(io.sentry.cache.g gVar, ILogger iLogger, Runnable runnable, ThreadPoolExecutor threadPoolExecutor) {
        if (runnable instanceof c) {
            c cVar = (c) runnable;
            if (!io.sentry.util.n.h(cVar.f29745e, io.sentry.hints.e.class)) {
                gVar.N0(cVar.f29744d, cVar.f29745e);
            }
            N(cVar.f29745e, true);
            iLogger.c(SentryLevel.WARNING, "Envelope rejected", new Object[0]);
        }
    }

    @Override // io.sentry.transport.q
    public void a0(l5 l5Var, Hint hint) {
        io.sentry.cache.g gVar = this.f29737e;
        boolean z10 = false;
        if (io.sentry.util.n.h(hint, io.sentry.hints.e.class)) {
            gVar = s.b();
            this.f29738i.getLogger().c(SentryLevel.DEBUG, "Captured Envelope is already cached", new Object[0]);
            z10 = true;
        }
        l5 E = this.f29739o.E(l5Var, hint);
        if (E == null) {
            if (z10) {
                this.f29737e.E(l5Var);
                return;
            }
            return;
        }
        if (io.sentry.util.n.h(hint, UncaughtExceptionHandlerIntegration.a.class)) {
            E = this.f29738i.getClientReportRecorder().e(E);
        }
        Future submit = this.f29736d.submit(new c(E, hint, gVar));
        if (submit != null && submit.isCancelled()) {
            this.f29738i.getClientReportRecorder().b(io.sentry.clientreport.f.QUEUE_OVERFLOW, E);
        } else {
            io.sentry.util.n.k(hint, io.sentry.hints.g.class, new n.a() { // from class: io.sentry.transport.b
                @Override // io.sentry.util.n.a
                public final void accept(Object obj) {
                    e.h(e.this, (io.sentry.hints.g) obj);
                }
            });
        }
    }

    @Override // io.sentry.transport.q
    public void c(boolean z10) {
        this.f29739o.close();
        this.f29736d.shutdown();
        this.f29738i.getLogger().c(SentryLevel.DEBUG, "Shutting down", new Object[0]);
        if (!z10) {
            try {
                long flushTimeoutMillis = this.f29738i.getFlushTimeoutMillis();
                if (!this.f29736d.awaitTermination(flushTimeoutMillis, TimeUnit.MILLISECONDS)) {
                    ILogger logger = this.f29738i.getLogger();
                    SentryLevel sentryLevel = SentryLevel.WARNING;
                    logger.c(sentryLevel, "Failed to shutdown the async connection async sender  within " + flushTimeoutMillis + " ms. Trying to force it now.", new Object[0]);
                    this.f29736d.shutdownNow();
                    if (this.f29742r != null) {
                        this.f29736d.getRejectedExecutionHandler().rejectedExecution(this.f29742r, this.f29736d);
                    }
                }
            } catch (InterruptedException unused) {
                this.f29738i.getLogger().c(SentryLevel.DEBUG, "Thread interrupted while closing the connection.", new Object[0]);
                Thread.currentThread().interrupt();
            }
        }
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        c(false);
    }

    @Override // io.sentry.transport.q
    public void d(long j10) {
        this.f29736d.k(j10);
    }

    @Override // io.sentry.transport.q
    public boolean g() {
        boolean N = this.f29739o.N();
        boolean a10 = this.f29736d.a();
        if (!N && !a10) {
            return true;
        }
        return false;
    }

    @Override // io.sentry.transport.q
    public a0 j() {
        return this.f29739o;
    }

    public e(w wVar, k7 k7Var, a0 a0Var, r rVar, o oVar) {
        this.f29742r = null;
        this.f29736d = (w) io.sentry.util.y.c(wVar, "executor is required");
        this.f29737e = (io.sentry.cache.g) io.sentry.util.y.c(k7Var.getEnvelopeDiskCache(), "envelopeCache is required");
        this.f29738i = (k7) io.sentry.util.y.c(k7Var, "options is required");
        this.f29739o = (a0) io.sentry.util.y.c(a0Var, "rateLimiter is required");
        this.f29740p = (r) io.sentry.util.y.c(rVar, "transportGate is required");
        this.f29741q = (o) io.sentry.util.y.c(oVar, "httpConnection is required");
    }
}
