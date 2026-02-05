package io.sentry;

import io.sentry.z3;
import java.io.Closeable;
import java.util.concurrent.RejectedExecutionException;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class k4 implements w0 {

    /* renamed from: a  reason: collision with root package name */
    private final IScope f29092a;

    /* renamed from: b  reason: collision with root package name */
    private final IScope f29093b;

    /* renamed from: c  reason: collision with root package name */
    private final IScope f29094c;

    /* renamed from: d  reason: collision with root package name */
    private final k4 f29095d;

    /* renamed from: e  reason: collision with root package name */
    private final String f29096e;

    /* renamed from: f  reason: collision with root package name */
    private final h f29097f;

    /* renamed from: g  reason: collision with root package name */
    private final g f29098g;

    /* renamed from: h  reason: collision with root package name */
    private final io.sentry.logger.a f29099h;

    public k4(IScope iScope, IScope iScope2, IScope iScope3, String str) {
        this(iScope, iScope2, iScope3, null, str);
    }

    private void N(SentryEvent sentryEvent) {
        V().Q(sentryEvent);
    }

    private IScope O(IScope iScope, b4 b4Var) {
        if (b4Var != null) {
            try {
                IScope clone = iScope.clone();
                b4Var.a(clone);
                return clone;
            } catch (Throwable th2) {
                b().getLogger().b(SentryLevel.ERROR, "Error in the 'ScopeCallback' callback.", th2);
            }
        }
        return iScope;
    }

    private io.sentry.protocol.x P(SentryEvent sentryEvent, Hint hint, b4 b4Var) {
        io.sentry.protocol.x xVar = io.sentry.protocol.x.f29471e;
        if (!isEnabled()) {
            b().getLogger().c(SentryLevel.WARNING, "Instance is disabled and this 'captureEvent' call is a no-op.", new Object[0]);
            return xVar;
        } else if (sentryEvent == null) {
            b().getLogger().c(SentryLevel.WARNING, "captureEvent called with null parameter.", new Object[0]);
            return xVar;
        } else {
            try {
                N(sentryEvent);
                xVar = U().m(sentryEvent, O(V(), b4Var), hint);
                X(xVar);
                return xVar;
            } catch (Throwable th2) {
                ILogger logger = b().getLogger();
                SentryLevel sentryLevel = SentryLevel.ERROR;
                logger.b(sentryLevel, "Error while capturing event with id: " + sentryEvent.G(), th2);
                return xVar;
            }
        }
    }

    private io.sentry.protocol.x Q(Throwable th2, Hint hint, b4 b4Var) {
        io.sentry.protocol.x xVar = io.sentry.protocol.x.f29471e;
        if (!isEnabled()) {
            b().getLogger().c(SentryLevel.WARNING, "Instance is disabled and this 'captureException' call is a no-op.", new Object[0]);
        } else if (th2 == null) {
            b().getLogger().c(SentryLevel.WARNING, "captureException called with null parameter.", new Object[0]);
        } else {
            try {
                SentryEvent sentryEvent = new SentryEvent(th2);
                N(sentryEvent);
                xVar = U().m(sentryEvent, O(V(), b4Var), hint);
            } catch (Throwable th3) {
                ILogger logger = b().getLogger();
                SentryLevel sentryLevel = SentryLevel.ERROR;
                logger.b(sentryLevel, "Error while capturing exception: " + th2.getMessage(), th3);
            }
        }
        X(xVar);
        return xVar;
    }

    private io.sentry.protocol.x R(String str, SentryLevel sentryLevel, b4 b4Var) {
        io.sentry.protocol.x xVar = io.sentry.protocol.x.f29471e;
        if (!isEnabled()) {
            b().getLogger().c(SentryLevel.WARNING, "Instance is disabled and this 'captureMessage' call is a no-op.", new Object[0]);
        } else if (str == null) {
            b().getLogger().c(SentryLevel.WARNING, "captureMessage called with null parameter.", new Object[0]);
        } else {
            try {
                xVar = U().i(str, sentryLevel, O(V(), b4Var));
            } catch (Throwable th2) {
                ILogger logger = b().getLogger();
                SentryLevel sentryLevel2 = SentryLevel.ERROR;
                logger.b(sentryLevel2, "Error while capturing message: " + str, th2);
            }
        }
        X(xVar);
        return xVar;
    }

    private e1 S(t8 t8Var, v8 v8Var) {
        e1 a10;
        io.sentry.util.y.c(t8Var, "transactionContext is required");
        t8Var.t(v8Var.a());
        if (!isEnabled()) {
            b().getLogger().c(SentryLevel.WARNING, "Instance is disabled and this 'startTransaction' returns a no-op.", new Object[0]);
            a10 = a3.u();
        } else if (io.sentry.util.e0.b(b().getIgnoredSpanOrigins(), t8Var.g())) {
            b().getLogger().c(SentryLevel.DEBUG, "Returning no-op for span origin %s as the SDK has been configured to ignore it", t8Var.g());
            a10 = a3.u();
        } else if (!b().getInstrumenter().equals(t8Var.e())) {
            b().getLogger().c(SentryLevel.DEBUG, "Returning no-op for instrumenter %s as the SDK has been configured to use instrumenter %s", t8Var.e(), b().getInstrumenter());
            a10 = a3.u();
        } else if (!b().isTracingEnabled()) {
            b().getLogger().c(SentryLevel.INFO, "Tracing is disabled and this 'startTransaction' returns a no-op.", new Object[0]);
            a10 = a3.u();
        } else {
            Double W = W(t8Var);
            v8Var.j();
            s8 a11 = b().getInternalTracesSampler().a(new y3(t8Var, null, W, null));
            t8Var.u(a11);
            d1 m10 = v8Var.m();
            if (m10 == null) {
                m10 = b().getSpanFactory();
            }
            if (a11.e().booleanValue() && b().isContinuousProfilingEnabled()) {
                o3 profileLifecycle = b().getProfileLifecycle();
                o3 o3Var = o3.TRACE;
                if (profileLifecycle == o3Var && t8Var.j().equals(io.sentry.protocol.x.f29471e)) {
                    b().getContinuousProfiler().d(o3Var, b().getInternalTracesSampler());
                }
            }
            a10 = m10.a(t8Var, this, v8Var, this.f29097f);
            if (a11.e().booleanValue() && a11.b().booleanValue()) {
                f1 transactionProfiler = b().getTransactionProfiler();
                if (!transactionProfiler.isRunning()) {
                    transactionProfiler.start();
                    transactionProfiler.a(a10);
                } else if (v8Var.o()) {
                    transactionProfiler.a(a10);
                }
            }
        }
        if (v8Var.p()) {
            a10.makeCurrent();
        }
        return a10;
    }

    private Double W(t8 t8Var) {
        Double i10;
        d b10 = t8Var.b();
        if (b10 != null && (i10 = b10.i()) != null) {
            return i10;
        }
        return V().M().c();
    }

    private void X(io.sentry.protocol.x xVar) {
        V().U(xVar);
    }

    private static void Y(k7 k7Var) {
        io.sentry.util.y.c(k7Var, "SentryOptions is required.");
        if (k7Var.getDsn() != null && !k7Var.getDsn().isEmpty()) {
            return;
        }
        throw new IllegalArgumentException("Scopes requires a DSN to be instantiated. Considering using the NoOpScopes if no DSN is available.");
    }

    @Override // io.sentry.w0
    public e1 A(t8 t8Var, v8 v8Var) {
        return S(t8Var, v8Var);
    }

    @Override // io.sentry.w0
    public Boolean B() {
        return i5.a().b(b().getCacheDirPath(), !b().isEnableAutoSessionTracking());
    }

    @Override // io.sentry.w0
    public IScope C() {
        return this.f29092a;
    }

    @Override // io.sentry.w0
    public void D(b4 b4Var) {
        if (!isEnabled()) {
            try {
                b4Var.a(n2.g());
                return;
            } catch (Throwable th2) {
                b().getLogger().b(SentryLevel.ERROR, "Error in the 'withScope' callback.", th2);
                return;
            }
        }
        w0 T = T("withScope");
        try {
            a1 makeCurrent = T.makeCurrent();
            b4Var.a(T.C());
            if (makeCurrent != null) {
                makeCurrent.close();
            }
        } catch (Throwable th3) {
            b().getLogger().b(SentryLevel.ERROR, "Error in the 'withScope' callback.", th3);
        }
    }

    @Override // io.sentry.w0
    public io.sentry.protocol.x F(Throwable th2, Hint hint) {
        return Q(th2, hint, null);
    }

    @Override // io.sentry.w0
    public io.sentry.protocol.x H(io.sentry.protocol.d0 d0Var, q8 q8Var, Hint hint, q3 q3Var) {
        io.sentry.protocol.d0 d0Var2;
        io.sentry.util.y.c(d0Var, "transaction is required");
        io.sentry.protocol.x xVar = io.sentry.protocol.x.f29471e;
        if (!isEnabled()) {
            b().getLogger().c(SentryLevel.WARNING, "Instance is disabled and this 'captureTransaction' call is a no-op.", new Object[0]);
        } else if (!d0Var.s0()) {
            b().getLogger().c(SentryLevel.WARNING, "Transaction: %s is not finished and this 'captureTransaction' call is a no-op.", d0Var.G());
        } else if (!Boolean.TRUE.equals(Boolean.valueOf(d0Var.t0()))) {
            b().getLogger().c(SentryLevel.DEBUG, "Transaction %s was dropped due to sampling decision.", d0Var.G());
            if (b().getBackpressureMonitor().a() > 0) {
                io.sentry.clientreport.h clientReportRecorder = b().getClientReportRecorder();
                io.sentry.clientreport.f fVar = io.sentry.clientreport.f.BACKPRESSURE;
                clientReportRecorder.a(fVar, j.Transaction);
                b().getClientReportRecorder().c(fVar, j.Span, d0Var.q0().size() + 1);
            } else {
                io.sentry.clientreport.h clientReportRecorder2 = b().getClientReportRecorder();
                io.sentry.clientreport.f fVar2 = io.sentry.clientreport.f.SAMPLE_RATE;
                clientReportRecorder2.a(fVar2, j.Transaction);
                b().getClientReportRecorder().c(fVar2, j.Span, d0Var.q0().size() + 1);
            }
        } else {
            try {
                d0Var2 = d0Var;
                try {
                    return U().b(d0Var2, q8Var, V(), hint, q3Var);
                } catch (Throwable th2) {
                    th = th2;
                    Throwable th3 = th;
                    ILogger logger = b().getLogger();
                    SentryLevel sentryLevel = SentryLevel.ERROR;
                    logger.b(sentryLevel, "Error while capturing transaction with id: " + d0Var2.G(), th3);
                    return xVar;
                }
            } catch (Throwable th4) {
                th = th4;
                d0Var2 = d0Var;
            }
        }
        return xVar;
    }

    @Override // io.sentry.w0
    public w0 I(String str) {
        return new k4(this.f29092a.clone(), this.f29093b.clone(), this.f29094c, this, str);
    }

    public w0 T(String str) {
        return new k4(this.f29092a.clone(), this.f29093b, this.f29094c, this, str);
    }

    public y0 U() {
        return V().O();
    }

    public IScope V() {
        return this.f29098g;
    }

    @Override // io.sentry.w0
    public void a(String str, String str2) {
        if (!isEnabled()) {
            b().getLogger().c(SentryLevel.WARNING, "Instance is disabled and this 'setTag' call is a no-op.", new Object[0]);
        } else if (str != null && str2 != null) {
            V().a(str, str2);
        } else {
            b().getLogger().c(SentryLevel.WARNING, "setTag called with null parameter.", new Object[0]);
        }
    }

    @Override // io.sentry.w0
    public k7 b() {
        return this.f29098g.b();
    }

    @Override // io.sentry.w0
    public void c(final boolean z10) {
        if (!isEnabled()) {
            b().getLogger().c(SentryLevel.WARNING, "Instance is disabled and this 'close' call is a no-op.", new Object[0]);
            return;
        }
        try {
            for (k1 k1Var : b().getIntegrations()) {
                if (k1Var instanceof Closeable) {
                    ((Closeable) k1Var).close();
                }
            }
            p(new b4() { // from class: io.sentry.e4
                @Override // io.sentry.b4
                public final void a(IScope iScope) {
                    iScope.clear();
                }
            });
            s(d4.ISOLATION, new b4() { // from class: io.sentry.f4
                @Override // io.sentry.b4
                public final void a(IScope iScope) {
                    iScope.clear();
                }
            });
            b().getBackpressureMonitor().close();
            b().getTransactionProfiler().close();
            b().getContinuousProfiler().c(true);
            b().getCompositePerformanceCollector().close();
            b().getConnectionStatusProvider().close();
            final z0 executorService = b().getExecutorService();
            if (z10) {
                try {
                    executorService.submit(new Runnable() { // from class: io.sentry.g4
                        @Override // java.lang.Runnable
                        public final void run() {
                            executorService.a(k4.this.b().getShutdownTimeoutMillis());
                        }
                    });
                } catch (RejectedExecutionException e10) {
                    b().getLogger().b(SentryLevel.WARNING, "Failed to submit executor service shutdown task during restart. Shutting down synchronously.", e10);
                    executorService.a(b().getShutdownTimeoutMillis());
                }
            } else {
                executorService.a(b().getShutdownTimeoutMillis());
            }
            s(d4.CURRENT, new b4() { // from class: io.sentry.h4
                @Override // io.sentry.b4
                public final void a(IScope iScope) {
                    iScope.O().c(z10);
                }
            });
            s(d4.ISOLATION, new b4() { // from class: io.sentry.i4
                @Override // io.sentry.b4
                public final void a(IScope iScope) {
                    iScope.O().c(z10);
                }
            });
            s(d4.GLOBAL, new b4() { // from class: io.sentry.j4
                @Override // io.sentry.b4
                public final void a(IScope iScope) {
                    iScope.O().c(z10);
                }
            });
        } catch (Throwable th2) {
            b().getLogger().b(SentryLevel.ERROR, "Error while closing the Scopes.", th2);
        }
    }

    @Override // io.sentry.w0
    public void d(long j10) {
        if (!isEnabled()) {
            b().getLogger().c(SentryLevel.WARNING, "Instance is disabled and this 'flush' call is a no-op.", new Object[0]);
            return;
        }
        try {
            U().d(j10);
        } catch (Throwable th2) {
            b().getLogger().b(SentryLevel.ERROR, "Error in the 'client.flush'.", th2);
        }
    }

    @Override // io.sentry.w0
    public void e(Breadcrumb breadcrumb) {
        i(breadcrumb, new Hint());
    }

    @Override // io.sentry.w0
    public boolean g() {
        return U().g();
    }

    @Override // io.sentry.w0
    public void i(Breadcrumb breadcrumb, Hint hint) {
        if (!isEnabled()) {
            b().getLogger().c(SentryLevel.WARNING, "Instance is disabled and this 'addBreadcrumb' call is a no-op.", new Object[0]);
        } else if (breadcrumb == null) {
            b().getLogger().c(SentryLevel.WARNING, "addBreadcrumb called with null parameter.", new Object[0]);
        } else {
            V().i(breadcrumb, hint);
        }
    }

    @Override // io.sentry.w0
    public boolean isEnabled() {
        return U().isEnabled();
    }

    @Override // io.sentry.w0
    public io.sentry.transport.a0 j() {
        return U().j();
    }

    @Override // io.sentry.w0
    public void k(Throwable th2, ISpan iSpan, String str) {
        V().k(th2, iSpan, str);
    }

    @Override // io.sentry.w0
    public io.sentry.protocol.x l(l5 l5Var, Hint hint) {
        io.sentry.util.y.c(l5Var, "SentryEnvelope is required.");
        io.sentry.protocol.x xVar = io.sentry.protocol.x.f29471e;
        if (!isEnabled()) {
            b().getLogger().c(SentryLevel.WARNING, "Instance is disabled and this 'captureEnvelope' call is a no-op.", new Object[0]);
        } else {
            try {
                io.sentry.protocol.x l10 = U().l(l5Var, hint);
                if (l10 != null) {
                    return l10;
                }
            } catch (Throwable th2) {
                b().getLogger().b(SentryLevel.ERROR, "Error while capturing envelope.", th2);
            }
        }
        return xVar;
    }

    @Override // io.sentry.w0
    public e1 m() {
        if (!isEnabled()) {
            b().getLogger().c(SentryLevel.WARNING, "Instance is disabled and this 'getTransaction' call is a no-op.", new Object[0]);
            return null;
        }
        return V().m();
    }

    @Override // io.sentry.w0
    public a1 makeCurrent() {
        return b5.O(this);
    }

    @Override // io.sentry.w0
    public void n() {
        if (!isEnabled()) {
            b().getLogger().c(SentryLevel.WARNING, "Instance is disabled and this 'endSession' call is a no-op.", new Object[0]);
            return;
        }
        z7 n10 = V().n();
        if (n10 != null) {
            U().f(n10, io.sentry.util.n.e(new io.sentry.hints.m()));
        }
    }

    @Override // io.sentry.w0
    public void r() {
        if (!isEnabled()) {
            b().getLogger().c(SentryLevel.WARNING, "Instance is disabled and this 'startSession' call is a no-op.", new Object[0]);
            return;
        }
        z3.d r10 = V().r();
        if (r10 != null) {
            if (r10.b() != null) {
                U().f(r10.b(), io.sentry.util.n.e(new io.sentry.hints.m()));
            }
            U().f(r10.a(), io.sentry.util.n.e(new io.sentry.hints.o()));
            return;
        }
        b().getLogger().c(SentryLevel.WARNING, "Session could not be started.", new Object[0]);
    }

    @Override // io.sentry.w0
    public void s(d4 d4Var, b4 b4Var) {
        if (!isEnabled()) {
            b().getLogger().c(SentryLevel.WARNING, "Instance is disabled and this 'configureScope' call is a no-op.", new Object[0]);
            return;
        }
        try {
            b4Var.a(this.f29098g.g(d4Var));
        } catch (Throwable th2) {
            b().getLogger().b(SentryLevel.ERROR, "Error in the 'configureScope' callback.", th2);
        }
    }

    @Override // io.sentry.w0
    public io.sentry.protocol.x t(l7 l7Var, Hint hint) {
        io.sentry.protocol.x xVar = io.sentry.protocol.x.f29471e;
        if (!isEnabled()) {
            b().getLogger().c(SentryLevel.WARNING, "Instance is disabled and this 'captureReplay' call is a no-op.", new Object[0]);
        } else {
            try {
                return U().a(l7Var, V(), hint);
            } catch (Throwable th2) {
                b().getLogger().b(SentryLevel.ERROR, "Error while capturing replay", th2);
            }
        }
        return xVar;
    }

    @Override // io.sentry.w0
    public IScope u() {
        return this.f29094c;
    }

    @Override // io.sentry.w0
    public io.sentry.protocol.x v(String str, SentryLevel sentryLevel) {
        return R(str, sentryLevel, null);
    }

    @Override // io.sentry.w0
    public io.sentry.protocol.x w(m3 m3Var) {
        io.sentry.util.y.c(m3Var, "profilingContinuousData is required");
        io.sentry.protocol.x xVar = io.sentry.protocol.x.f29471e;
        if (!isEnabled()) {
            b().getLogger().c(SentryLevel.WARNING, "Instance is disabled and this 'captureTransaction' call is a no-op.", new Object[0]);
        } else {
            try {
                return U().k(m3Var, C());
            } catch (Throwable th2) {
                ILogger logger = b().getLogger();
                SentryLevel sentryLevel = SentryLevel.ERROR;
                logger.b(sentryLevel, "Error while capturing profile chunk with id: " + m3Var.n(), th2);
            }
        }
        return xVar;
    }

    @Override // io.sentry.w0
    public io.sentry.protocol.x y(SentryEvent sentryEvent, Hint hint) {
        return P(sentryEvent, hint, null);
    }

    private k4(IScope iScope, IScope iScope2, IScope iScope3, k4 k4Var, String str) {
        this.f29098g = new g(iScope3, iScope2, iScope);
        this.f29092a = iScope;
        this.f29093b = iScope2;
        this.f29094c = iScope3;
        this.f29095d = k4Var;
        this.f29096e = str;
        k7 b10 = b();
        Y(b10);
        this.f29097f = b10.getCompositePerformanceCollector();
        this.f29099h = new io.sentry.logger.c(this);
    }

    @Override // io.sentry.w0
    /* renamed from: clone */
    public p0 m1188clone() {
        if (!isEnabled()) {
            b().getLogger().c(SentryLevel.WARNING, "Disabled Scopes cloned.", new Object[0]);
        }
        return new j0(I("scopes clone"));
    }
}
