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
    private final w f30317d;

    /* renamed from: e  reason: collision with root package name */
    private final io.sentry.cache.g f30318e;

    /* renamed from: i  reason: collision with root package name */
    private final k7 f30319i;

    /* renamed from: o  reason: collision with root package name */
    private final a0 f30320o;

    /* renamed from: p  reason: collision with root package name */
    private final r f30321p;

    /* renamed from: q  reason: collision with root package name */
    private final o f30322q;

    /* renamed from: r  reason: collision with root package name */
    private volatile Runnable f30323r;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b implements ThreadFactory {

        /* renamed from: a  reason: collision with root package name */
        private int f30324a;

        private b() {
        }

        @Override // java.util.concurrent.ThreadFactory
        public Thread newThread(Runnable runnable) {
            StringBuilder sb2 = new StringBuilder();
            sb2.append("SentryAsyncConnection-");
            int i10 = this.f30324a;
            this.f30324a = i10 + 1;
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
        private final l5 f30325d;

        /* renamed from: e  reason: collision with root package name */
        private final Hint f30326e;

        /* renamed from: i  reason: collision with root package name */
        private final io.sentry.cache.g f30327i;

        /* renamed from: o  reason: collision with root package name */
        private final c0 f30328o = c0.a();

        c(l5 l5Var, Hint hint, io.sentry.cache.g gVar) {
            this.f30325d = (l5) io.sentry.util.y.c(l5Var, "Envelope is required.");
            this.f30326e = hint;
            this.f30327i = (io.sentry.cache.g) io.sentry.util.y.c(gVar, "EnvelopeCache is required.");
        }

        public static /* synthetic */ void a(c cVar, c0 c0Var, io.sentry.hints.p pVar) {
            e.this.f30319i.getLogger().c(SentryLevel.DEBUG, "Marking envelope submission result: %s", Boolean.valueOf(c0Var.d()));
            pVar.c(c0Var.d());
        }

        public static /* synthetic */ void b(c cVar, io.sentry.hints.f fVar) {
            if (fVar.b(cVar.f30325d.b().a())) {
                fVar.d();
                e.this.f30319i.getLogger().c(SentryLevel.DEBUG, "Disk flush envelope fired", new Object[0]);
                return;
            }
            e.this.f30319i.getLogger().c(SentryLevel.DEBUG, "Not firing envelope flush as there's an ongoing transaction", new Object[0]);
        }

        public static /* synthetic */ void d(c cVar, boolean z10, l5 l5Var, Object obj, Class cls) {
            if (!z10) {
                io.sentry.util.v.a(cls, obj, e.this.f30319i.getLogger());
                e.this.f30319i.getClientReportRecorder().b(io.sentry.clientreport.f.NETWORK_ERROR, l5Var);
                return;
            }
            cVar.getClass();
        }

        public static /* synthetic */ void e(c cVar, boolean z10, Object obj, Class cls) {
            if (!z10) {
                io.sentry.util.v.a(cls, obj, e.this.f30319i.getLogger());
                e.this.f30319i.getClientReportRecorder().b(io.sentry.clientreport.f.NETWORK_ERROR, cVar.f30325d);
                return;
            }
            cVar.getClass();
        }

        private c0 j() {
            c0 c0Var = this.f30328o;
            this.f30325d.b().d(null);
            final boolean L0 = this.f30327i.L0(this.f30325d, this.f30326e);
            io.sentry.util.n.k(this.f30326e, io.sentry.hints.f.class, new n.a() { // from class: io.sentry.transport.g
                @Override // io.sentry.util.n.a
                public final void accept(Object obj) {
                    e.c.b(e.c.this, (io.sentry.hints.f) obj);
                }
            });
            if (e.this.f30321p.a()) {
                final l5 e10 = e.this.f30319i.getClientReportRecorder().e(this.f30325d);
                try {
                    e10.b().d(io.sentry.k.k(e.this.f30319i.getDateProvider().now().h()));
                    c0 h10 = e.this.f30322q.h(e10);
                    if (h10.d()) {
                        this.f30327i.E(this.f30325d);
                        return h10;
                    }
                    String str = "The transport failed to send the envelope with response code " + h10.c();
                    e.this.f30319i.getLogger().c(SentryLevel.ERROR, str, new Object[0]);
                    if (h10.c() >= 400 && h10.c() != 429 && !L0) {
                        io.sentry.util.n.j(this.f30326e, io.sentry.hints.k.class, new n.c() { // from class: io.sentry.transport.h
                            @Override // io.sentry.util.n.c
                            public final void accept(Object obj) {
                                e.this.f30319i.getClientReportRecorder().b(io.sentry.clientreport.f.NETWORK_ERROR, e10);
                            }
                        });
                    }
                    throw new IllegalStateException(str);
                } catch (IOException e11) {
                    io.sentry.util.n.l(this.f30326e, io.sentry.hints.k.class, new n.a() { // from class: io.sentry.transport.i
                        @Override // io.sentry.util.n.a
                        public final void accept(Object obj) {
                            ((io.sentry.hints.k) obj).d(true);
                        }
                    }, new n.b() { // from class: io.sentry.transport.j
                        @Override // io.sentry.util.n.b
                        public final void a(Object obj, Class cls) {
                            e.c.d(e.c.this, L0, e10, obj, cls);
                        }
                    });
                    throw new IllegalStateException("Sending the event failed.", e11);
                }
            }
            io.sentry.util.n.l(this.f30326e, io.sentry.hints.k.class, new n.a() { // from class: io.sentry.transport.k
                @Override // io.sentry.util.n.a
                public final void accept(Object obj) {
                    ((io.sentry.hints.k) obj).d(true);
                }
            }, new n.b() { // from class: io.sentry.transport.l
                @Override // io.sentry.util.n.b
                public final void a(Object obj, Class cls) {
                    e.c.e(e.c.this, L0, obj, cls);
                }
            });
            return c0Var;
        }

        @Override // java.lang.Runnable
        public void run() {
            e.this.f30323r = this;
            final c0 c0Var = this.f30328o;
            try {
                c0Var = j();
                e.this.f30319i.getLogger().c(SentryLevel.DEBUG, "Envelope flushed", new Object[0]);
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
                e.n(io.sentry.cache.g.this, iLogger, runnable, threadPoolExecutor);
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
        eVar.f30319i.getLogger().c(SentryLevel.DEBUG, "Envelope enqueued", new Object[0]);
    }

    public static /* synthetic */ void n(io.sentry.cache.g gVar, ILogger iLogger, Runnable runnable, ThreadPoolExecutor threadPoolExecutor) {
        if (runnable instanceof c) {
            c cVar = (c) runnable;
            if (!io.sentry.util.n.h(cVar.f30326e, io.sentry.hints.e.class)) {
                gVar.L0(cVar.f30325d, cVar.f30326e);
            }
            N(cVar.f30326e, true);
            iLogger.c(SentryLevel.WARNING, "Envelope rejected", new Object[0]);
        }
    }

    @Override // io.sentry.transport.q
    public void a0(l5 l5Var, Hint hint) {
        io.sentry.cache.g gVar = this.f30318e;
        boolean z10 = false;
        if (io.sentry.util.n.h(hint, io.sentry.hints.e.class)) {
            gVar = s.b();
            this.f30319i.getLogger().c(SentryLevel.DEBUG, "Captured Envelope is already cached", new Object[0]);
            z10 = true;
        }
        l5 E = this.f30320o.E(l5Var, hint);
        if (E == null) {
            if (z10) {
                this.f30318e.E(l5Var);
                return;
            }
            return;
        }
        if (io.sentry.util.n.h(hint, UncaughtExceptionHandlerIntegration.a.class)) {
            E = this.f30319i.getClientReportRecorder().e(E);
        }
        Future submit = this.f30317d.submit(new c(E, hint, gVar));
        if (submit != null && submit.isCancelled()) {
            this.f30319i.getClientReportRecorder().b(io.sentry.clientreport.f.QUEUE_OVERFLOW, E);
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
        this.f30320o.close();
        this.f30317d.shutdown();
        this.f30319i.getLogger().c(SentryLevel.DEBUG, "Shutting down", new Object[0]);
        if (!z10) {
            try {
                long flushTimeoutMillis = this.f30319i.getFlushTimeoutMillis();
                if (!this.f30317d.awaitTermination(flushTimeoutMillis, TimeUnit.MILLISECONDS)) {
                    ILogger logger = this.f30319i.getLogger();
                    SentryLevel sentryLevel = SentryLevel.WARNING;
                    logger.c(sentryLevel, "Failed to shutdown the async connection async sender  within " + flushTimeoutMillis + " ms. Trying to force it now.", new Object[0]);
                    this.f30317d.shutdownNow();
                    if (this.f30323r != null) {
                        this.f30317d.getRejectedExecutionHandler().rejectedExecution(this.f30323r, this.f30317d);
                    }
                }
            } catch (InterruptedException unused) {
                this.f30319i.getLogger().c(SentryLevel.DEBUG, "Thread interrupted while closing the connection.", new Object[0]);
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
        this.f30317d.l(j10);
    }

    @Override // io.sentry.transport.q
    public boolean f() {
        boolean N = this.f30320o.N();
        boolean a10 = this.f30317d.a();
        if (!N && !a10) {
            return true;
        }
        return false;
    }

    @Override // io.sentry.transport.q
    public a0 j() {
        return this.f30320o;
    }

    public e(w wVar, k7 k7Var, a0 a0Var, r rVar, o oVar) {
        this.f30323r = null;
        this.f30317d = (w) io.sentry.util.y.c(wVar, "executor is required");
        this.f30318e = (io.sentry.cache.g) io.sentry.util.y.c(k7Var.getEnvelopeDiskCache(), "envelopeCache is required");
        this.f30319i = (k7) io.sentry.util.y.c(k7Var, "options is required");
        this.f30320o = (a0) io.sentry.util.y.c(a0Var, "rateLimiter is required");
        this.f30321p = (r) io.sentry.util.y.c(rVar, "transportGate is required");
        this.f30322q = (o) io.sentry.util.y.c(oVar, "httpConnection is required");
    }
}
