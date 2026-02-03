package io.sentry;

import io.sentry.util.runtime.a;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileOutputStream;
import java.io.OutputStreamWriter;
import java.nio.charset.Charset;
import java.util.Arrays;
import java.util.concurrent.RejectedExecutionException;
import java.util.concurrent.TimeUnit;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class b5 {

    /* renamed from: a  reason: collision with root package name */
    private static volatile x0 f29695a = r2.c();

    /* renamed from: b  reason: collision with root package name */
    private static volatile w0 f29696b = p2.I();

    /* renamed from: c  reason: collision with root package name */
    private static final IScope f29697c = new z3(k7.empty());

    /* renamed from: d  reason: collision with root package name */
    private static volatile boolean f29698d = false;

    /* renamed from: e  reason: collision with root package name */
    private static final Charset f29699e = Charset.forName("UTF-8");

    /* renamed from: f  reason: collision with root package name */
    private static final long f29700f = System.currentTimeMillis();

    /* renamed from: g  reason: collision with root package name */
    private static final io.sentry.util.a f29701g = new io.sentry.util.a();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface a {
        void a(k7 k7Var);
    }

    private static void A(final k7 k7Var, boolean z10) {
        a1 a10 = f29701g.a();
        try {
            if (!k7Var.getClass().getName().equals("io.sentry.android.core.SentryAndroidOptions") && io.sentry.util.a0.a()) {
                throw new IllegalArgumentException("You are running Android. Please, use SentryAndroid.init. " + k7Var.getClass().getName());
            }
            if (!M(k7Var)) {
                if (a10 != null) {
                    a10.close();
                    return;
                }
                return;
            }
            Boolean isGlobalHubMode = k7Var.isGlobalHubMode();
            if (isGlobalHubMode != null) {
                z10 = isGlobalHubMode.booleanValue();
            }
            k7Var.getLogger().c(SentryLevel.INFO, "GlobalHubMode: '%s'", String.valueOf(z10));
            f29698d = z10;
            C(k7Var);
            IScope iScope = f29697c;
            if (io.sentry.util.o.d(iScope.b(), k7Var, I())) {
                if (I()) {
                    k7Var.getLogger().c(SentryLevel.WARNING, "Sentry has been already initialized. Previous configuration will be overwritten.", new Object[0]);
                }
                v().c(true);
                iScope.q(k7Var);
                f29696b = new k4(new z3(k7Var), new z3(k7Var), iScope, "Sentry.init");
                F(k7Var);
                D(k7Var);
                x().b(f29696b);
                B(k7Var);
                iScope.G(new h5(k7Var));
                if (k7Var.getExecutorService().isClosed()) {
                    k7Var.setExecutorService(new q6(k7Var));
                    k7Var.getExecutorService().b();
                }
                try {
                    k7Var.getExecutorService().submit(new Runnable() { // from class: io.sentry.u4
                        @Override // java.lang.Runnable
                        public final void run() {
                            k7.this.loadLazyFields();
                        }
                    });
                } catch (RejectedExecutionException e10) {
                    k7Var.getLogger().b(SentryLevel.DEBUG, "Failed to call the executor. Lazy fields will not be loaded. Did you call Sentry.close()?", e10);
                }
                K(k7Var);
                for (k1 k1Var : k7Var.getIntegrations()) {
                    k1Var.h(l4.h(), k7Var);
                }
                L(k7Var);
                s(k7Var, l4.h());
                y(k7Var, k7Var.getExecutorService());
                ILogger logger = k7Var.getLogger();
                SentryLevel sentryLevel = SentryLevel.DEBUG;
                logger.c(sentryLevel, "Using openTelemetryMode %s", k7Var.getOpenTelemetryMode());
                k7Var.getLogger().c(sentryLevel, "Using span factory %s", k7Var.getSpanFactory().getClass().getName());
                k7Var.getLogger().c(sentryLevel, "Using scopes storage %s", f29695a.getClass().getName());
            } else {
                k7Var.getLogger().c(SentryLevel.WARNING, "This init call has been ignored due to priority being too low.", new Object[0]);
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

    private static void B(k7 k7Var) {
        ILogger logger = k7Var.getLogger();
        SentryLevel sentryLevel = SentryLevel.INFO;
        logger.c(sentryLevel, "Initializing SDK with DSN: '%s'", k7Var.getDsn());
        String outboxPath = k7Var.getOutboxPath();
        if (outboxPath != null) {
            final File file = new File(outboxPath);
            k7Var.getRuntimeManager().a(new a.InterfaceC0407a() { // from class: io.sentry.w4
                @Override // io.sentry.util.runtime.a.InterfaceC0407a
                public final Object run() {
                    Boolean valueOf;
                    valueOf = Boolean.valueOf(file.mkdirs());
                    return valueOf;
                }
            });
        } else {
            logger.c(sentryLevel, "No outbox dir path is defined in options.", new Object[0]);
        }
        String cacheDirPath = k7Var.getCacheDirPath();
        if (cacheDirPath != null) {
            final File file2 = new File(cacheDirPath);
            k7Var.getRuntimeManager().a(new a.InterfaceC0407a() { // from class: io.sentry.x4
                @Override // io.sentry.util.runtime.a.InterfaceC0407a
                public final Object run() {
                    Boolean valueOf;
                    valueOf = Boolean.valueOf(file2.mkdirs());
                    return valueOf;
                }
            });
            if (k7Var.getEnvelopeDiskCache() instanceof io.sentry.transport.s) {
                k7Var.setEnvelopeDiskCache(io.sentry.cache.f.s(k7Var));
            }
        }
        String profilingTracesDirPath = k7Var.getProfilingTracesDirPath();
        if ((k7Var.isProfilingEnabled() || k7Var.isContinuousProfilingEnabled()) && profilingTracesDirPath != null) {
            final File file3 = new File(profilingTracesDirPath);
            k7Var.getRuntimeManager().a(new a.InterfaceC0407a() { // from class: io.sentry.y4
                @Override // io.sentry.util.runtime.a.InterfaceC0407a
                public final Object run() {
                    Boolean valueOf;
                    valueOf = Boolean.valueOf(file3.mkdirs());
                    return valueOf;
                }
            });
            try {
                k7Var.getExecutorService().submit(new Runnable() { // from class: io.sentry.z4
                    @Override // java.lang.Runnable
                    public final void run() {
                        b5.f(file3);
                    }
                });
            } catch (RejectedExecutionException e10) {
                k7Var.getLogger().b(SentryLevel.ERROR, "Failed to call the executor. Old profiles will not be deleted. Did you call Sentry.close()?", e10);
            }
        }
        io.sentry.internal.modules.b modulesLoader = k7Var.getModulesLoader();
        if (!k7Var.isSendModules()) {
            k7Var.setModulesLoader(io.sentry.internal.modules.e.b());
        } else if (modulesLoader instanceof io.sentry.internal.modules.e) {
            k7Var.setModulesLoader(new io.sentry.internal.modules.a(Arrays.asList(new io.sentry.internal.modules.c(k7Var.getLogger()), new io.sentry.internal.modules.f(k7Var.getLogger())), k7Var.getLogger()));
        }
        if (k7Var.getDebugMetaLoader() instanceof io.sentry.internal.debugmeta.b) {
            k7Var.setDebugMetaLoader(new io.sentry.internal.debugmeta.c(k7Var.getLogger()));
        }
        io.sentry.util.d.a(k7Var, k7Var.getDebugMetaLoader().a());
        if (k7Var.getThreadChecker() instanceof io.sentry.util.thread.b) {
            k7Var.setThreadChecker(io.sentry.util.thread.c.d());
        }
        if (k7Var.getPerformanceCollectors().isEmpty()) {
            k7Var.addPerformanceCollector(new l1());
        }
        if (k7Var.isEnableBackpressureHandling() && io.sentry.util.a0.c()) {
            if (k7Var.getBackpressureMonitor() instanceof io.sentry.backpressure.c) {
                k7Var.setBackpressureMonitor(new io.sentry.backpressure.a(k7Var, l4.h()));
            }
            k7Var.getBackpressureMonitor().start();
        }
        E(k7Var);
        k7Var.getLogger().c(SentryLevel.INFO, "Continuous profiler is enabled %s mode: %s", Boolean.valueOf(k7Var.isContinuousProfilingEnabled()), k7Var.getProfileLifecycle());
    }

    private static void C(k7 k7Var) {
        if (k7Var.getFatalLogger() instanceof i2) {
            k7Var.setFatalLogger(new p8());
        }
    }

    private static void D(k7 k7Var) {
        io.sentry.opentelemetry.a.c(k7Var, new io.sentry.util.u());
        if (e7.OFF == k7Var.getOpenTelemetryMode()) {
            k7Var.setSpanFactory(new o());
        }
        G(k7Var);
        io.sentry.opentelemetry.a.a(k7Var);
    }

    private static void E(k7 k7Var) {
        io.sentry.util.o.c(k7Var);
        io.sentry.util.o.b(k7Var);
    }

    private static void F(k7 k7Var) {
        if (k7Var.isDebug() && (k7Var.getLogger() instanceof i2)) {
            k7Var.setLogger(new p8());
        }
    }

    private static void G(k7 k7Var) {
        x().close();
        if (e7.OFF == k7Var.getOpenTelemetryMode()) {
            f29695a = new n();
        } else {
            f29695a = m4.a(new io.sentry.util.u(), i2.e());
        }
    }

    public static Boolean H() {
        return v().A();
    }

    public static boolean I() {
        return v().isEnabled();
    }

    public static boolean J() {
        return v().f();
    }

    private static void K(k7 k7Var) {
        try {
            k7Var.getExecutorService().submit(new b2(k7Var));
        } catch (Throwable th2) {
            k7Var.getLogger().b(SentryLevel.DEBUG, "Failed to move previous session.", th2);
        }
    }

    private static void L(final k7 k7Var) {
        try {
            k7Var.getExecutorService().submit(new Runnable() { // from class: io.sentry.a5
                @Override // java.lang.Runnable
                public final void run() {
                    b5.d(k7.this);
                }
            });
        } catch (Throwable th2) {
            k7Var.getLogger().b(SentryLevel.DEBUG, "Failed to notify options observers.", th2);
        }
    }

    private static boolean M(k7 k7Var) {
        if (k7Var.isEnableExternalConfiguration()) {
            k7Var.merge(d0.g(io.sentry.config.g.a(), k7Var.getLogger()));
        }
        String dsn = k7Var.getDsn();
        if (k7Var.isEnabled() && (dsn == null || !dsn.isEmpty())) {
            if (dsn != null) {
                k7Var.retrieveParsedDsn();
                return true;
            }
            throw new IllegalArgumentException("DSN is required. Use empty string or set enabled to false in SentryOptions to disable SDK.");
        }
        o();
        return false;
    }

    private static s8 N(k7 k7Var) {
        t8 t8Var = new t8("app.launch", "profile");
        t8Var.B(true);
        return k7Var.getInternalTracesSampler().a(new y3(t8Var, null, Double.valueOf(io.sentry.util.d0.a().c()), null));
    }

    public static a1 O(w0 w0Var) {
        return x().b(w0Var);
    }

    public static void P(String str, String str2) {
        v().a(str, str2);
    }

    public static void Q() {
        v().p();
    }

    public static e1 R(t8 t8Var, v8 v8Var) {
        return v().z(t8Var, v8Var);
    }

    public static e1 S(String str, String str2) {
        return v().y(str, str2);
    }

    public static void T(b4 b4Var) {
        v().C(b4Var);
    }

    public static /* synthetic */ void a(k7 k7Var) {
        s8 s8Var;
        String cacheDirPathWithoutDsn = k7Var.getCacheDirPathWithoutDsn();
        if (cacheDirPathWithoutDsn != null) {
            File file = new File(cacheDirPathWithoutDsn, "app_start_profiling_config");
            try {
                io.sentry.util.i.a(file);
                if (k7Var.isEnableAppStartProfiling() || k7Var.isStartProfilerOnAppStart()) {
                    if (!k7Var.isStartProfilerOnAppStart() && !k7Var.isTracingEnabled()) {
                        k7Var.getLogger().c(SentryLevel.INFO, "Tracing is disabled and app start profiling will not start.", new Object[0]);
                    } else if (file.createNewFile()) {
                        if (k7Var.isEnableAppStartProfiling()) {
                            s8Var = N(k7Var);
                        } else {
                            s8Var = new s8(Boolean.FALSE);
                        }
                        c5 c5Var = new c5(k7Var, s8Var);
                        FileOutputStream fileOutputStream = new FileOutputStream(file);
                        BufferedWriter bufferedWriter = new BufferedWriter(new OutputStreamWriter(fileOutputStream, f29699e));
                        k7Var.getSerializer().a(c5Var, bufferedWriter);
                        bufferedWriter.close();
                        fileOutputStream.close();
                    }
                }
            } catch (Throwable th2) {
                k7Var.getLogger().b(SentryLevel.ERROR, "Unable to create app start profiling config file. ", th2);
            }
        }
    }

    public static /* synthetic */ void d(k7 k7Var) {
        for (q0 q0Var : k7Var.getOptionsObservers()) {
            q0Var.i(k7Var.getRelease());
            q0Var.g(k7Var.getProguardUuid());
            q0Var.h(k7Var.getSdkVersion());
            q0Var.d(k7Var.getDist());
            q0Var.f(k7Var.getEnvironment());
            q0Var.c(k7Var.getTags());
            q0Var.e(k7Var.getSessionReplay().l());
        }
        io.sentry.cache.u findPersistingScopeObserver = k7Var.findPersistingScopeObserver();
        if (findPersistingScopeObserver != null) {
            findPersistingScopeObserver.E();
        }
    }

    public static /* synthetic */ void f(File file) {
        File[] listFiles = file.listFiles();
        if (listFiles != null) {
            for (File file2 : listFiles) {
                if (file2.lastModified() < f29700f - TimeUnit.MINUTES.toMillis(5L)) {
                    io.sentry.util.i.a(file2);
                }
            }
        }
    }

    public static void h(Breadcrumb breadcrumb) {
        v().e(breadcrumb);
    }

    public static void i(Breadcrumb breadcrumb, Hint hint) {
        v().g(breadcrumb, hint);
    }

    private static void j(a aVar, k7 k7Var) {
        try {
            aVar.a(k7Var);
        } catch (Throwable th2) {
            k7Var.getLogger().b(SentryLevel.ERROR, "Error in the 'OptionsConfiguration.configure' callback.", th2);
        }
    }

    public static io.sentry.protocol.x k(SentryEvent sentryEvent, Hint hint) {
        return v().x(sentryEvent, hint);
    }

    public static io.sentry.protocol.x l(Throwable th2) {
        return v().D(th2);
    }

    public static io.sentry.protocol.x m(Throwable th2, Hint hint) {
        return v().E(th2, hint);
    }

    public static io.sentry.protocol.x n(String str, SentryLevel sentryLevel) {
        return v().u(str, sentryLevel);
    }

    public static void o() {
        a1 a10 = f29701g.a();
        try {
            w0 v10 = v();
            f29696b = p2.I();
            x().close();
            v10.c(false);
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

    public static void p(b4 b4Var) {
        q(null, b4Var);
    }

    public static void q(d4 d4Var, b4 b4Var) {
        v().r(d4Var, b4Var);
    }

    public static void r() {
        v().l();
    }

    private static void s(k7 k7Var, w0 w0Var) {
        try {
            k7Var.getExecutorService().submit(new l3(k7Var, w0Var));
        } catch (Throwable th2) {
            k7Var.getLogger().b(SentryLevel.DEBUG, "Failed to finalize previous session.", th2);
        }
    }

    public static void t(long j10) {
        v().d(j10);
    }

    public static w0 u(String str) {
        return v().H(str);
    }

    public static w0 v() {
        if (f29698d) {
            return f29696b;
        }
        w0 w0Var = x().get();
        if (w0Var != null && !w0Var.q()) {
            return w0Var;
        }
        w0 H = f29696b.H("getCurrentScopes");
        x().b(H);
        return H;
    }

    public static IScope w() {
        return f29697c;
    }

    private static x0 x() {
        return f29695a;
    }

    private static void y(final k7 k7Var, z0 z0Var) {
        try {
            z0Var.submit(new Runnable() { // from class: io.sentry.v4
                @Override // java.lang.Runnable
                public final void run() {
                    b5.a(k7.this);
                }
            });
        } catch (Throwable th2) {
            k7Var.getLogger().b(SentryLevel.ERROR, "Failed to call the executor. App start profiling config will not be changed. Did you call Sentry.close()?", th2);
        }
    }

    public static void z(g3 g3Var, a aVar, boolean z10) {
        k7 k7Var = (k7) g3Var.b();
        j(aVar, k7Var);
        A(k7Var, z10);
    }
}
