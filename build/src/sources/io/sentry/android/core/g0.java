package io.sentry.android.core;

import android.app.Application;
import android.content.Context;
import android.content.pm.PackageInfo;
import io.sentry.ILogger;
import io.sentry.SentryLevel;
import io.sentry.android.core.SentryAndroidOptions;
import io.sentry.android.distribution.DistributionIntegration;
import io.sentry.android.fragment.FragmentLifecycleIntegration;
import io.sentry.android.replay.ReplayIntegration;
import io.sentry.android.timber.SentryTimberIntegration;
import io.sentry.b3;
import io.sentry.compose.gestures.ComposeGestureTargetLocator;
import io.sentry.compose.viewhierarchy.ComposeViewHierarchyExporter;
import io.sentry.d3;
import io.sentry.d4;
import io.sentry.e7;
import io.sentry.p4;
import io.sentry.s4;
import io.sentry.t4;
import io.sentry.util.r;
import io.sentry.util.runtime.a;
import io.sentry.x2;
import java.io.File;
import java.util.ArrayList;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class g0 {
    /* JADX INFO: Access modifiers changed from: package-private */
    public static File f(Context context) {
        return new File(context.getCacheDir(), "sentry");
    }

    private static String g(PackageInfo packageInfo, String str) {
        return packageInfo.packageName + "@" + packageInfo.versionName + "+" + str;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static void h(SentryAndroidOptions sentryAndroidOptions, Context context, x0 x0Var, io.sentry.util.u uVar, i iVar, boolean z10) {
        if (sentryAndroidOptions.getCacheDirPath() != null && (sentryAndroidOptions.getEnvelopeDiskCache() instanceof io.sentry.transport.s)) {
            sentryAndroidOptions.setEnvelopeDiskCache(new io.sentry.android.core.cache.d(sentryAndroidOptions));
        }
        if (sentryAndroidOptions.getConnectionStatusProvider() instanceof io.sentry.d2) {
            sentryAndroidOptions.setConnectionStatusProvider(new io.sentry.android.core.internal.util.e(context, sentryAndroidOptions, x0Var, io.sentry.android.core.internal.util.f.b()));
        }
        if (sentryAndroidOptions.getCacheDirPath() != null) {
            sentryAndroidOptions.addScopeObserver(new io.sentry.cache.u(sentryAndroidOptions));
            sentryAndroidOptions.addOptionsObserver(new io.sentry.cache.h(sentryAndroidOptions));
        }
        sentryAndroidOptions.addEventProcessor(new io.sentry.l(sentryAndroidOptions));
        sentryAndroidOptions.addEventProcessor(new j1(context, x0Var, sentryAndroidOptions));
        sentryAndroidOptions.addEventProcessor(new e2(sentryAndroidOptions, iVar));
        sentryAndroidOptions.addEventProcessor(new ScreenshotEventProcessor(sentryAndroidOptions, x0Var));
        sentryAndroidOptions.addEventProcessor(new ViewHierarchyEventProcessor(sentryAndroidOptions));
        sentryAndroidOptions.addEventProcessor(new r0(context, sentryAndroidOptions, x0Var));
        if (sentryAndroidOptions.getTransportGate() instanceof io.sentry.transport.u) {
            sentryAndroidOptions.setTransportGate(new m0(sentryAndroidOptions));
        }
        io.sentry.android.core.performance.h q10 = io.sentry.android.core.performance.h.q();
        if (sentryAndroidOptions.getModulesLoader() instanceof io.sentry.internal.modules.e) {
            sentryAndroidOptions.setModulesLoader(new io.sentry.android.core.internal.modules.b(context, sentryAndroidOptions.getLogger()));
        }
        if (sentryAndroidOptions.getDebugMetaLoader() instanceof io.sentry.internal.debugmeta.b) {
            sentryAndroidOptions.setDebugMetaLoader(new io.sentry.android.core.internal.debugmeta.a(context, sentryAndroidOptions.getLogger()));
        }
        if (sentryAndroidOptions.getVersionDetector() instanceof d3) {
            sentryAndroidOptions.setVersionDetector(new io.sentry.p(sentryAndroidOptions));
        }
        io.sentry.util.r f10 = uVar.f("androidx.core.view.ScrollingView", sentryAndroidOptions);
        boolean d10 = uVar.d("androidx.compose.ui.node.Owner", sentryAndroidOptions);
        if (sentryAndroidOptions.getGestureTargetLocators().isEmpty()) {
            ArrayList arrayList = new ArrayList(2);
            arrayList.add(new io.sentry.android.core.internal.gestures.a(f10));
            if (d10 && uVar.d("io.sentry.compose.gestures.ComposeGestureTargetLocator", sentryAndroidOptions)) {
                arrayList.add(new ComposeGestureTargetLocator(sentryAndroidOptions.getLogger()));
            }
            sentryAndroidOptions.setGestureTargetLocators(arrayList);
        }
        if (sentryAndroidOptions.getViewHierarchyExporters().isEmpty() && d10 && uVar.d("io.sentry.compose.viewhierarchy.ComposeViewHierarchyExporter", sentryAndroidOptions)) {
            ArrayList arrayList2 = new ArrayList(1);
            arrayList2.add(new ComposeViewHierarchyExporter(sentryAndroidOptions.getLogger()));
            sentryAndroidOptions.setViewHierarchyExporters(arrayList2);
        }
        if (sentryAndroidOptions.getThreadChecker() instanceof io.sentry.util.thread.b) {
            sentryAndroidOptions.setThreadChecker(io.sentry.android.core.internal.util.j.e());
        }
        if (sentryAndroidOptions.getSocketTagger() instanceof x2) {
            sentryAndroidOptions.setSocketTagger(j0.c());
        }
        if (sentryAndroidOptions.getPerformanceCollectors().isEmpty()) {
            sentryAndroidOptions.addPerformanceCollector(new a0());
            sentryAndroidOptions.addPerformanceCollector(new w(sentryAndroidOptions.getLogger()));
            if (sentryAndroidOptions.isEnablePerformanceV2()) {
                sentryAndroidOptions.addPerformanceCollector(new p2(sentryAndroidOptions, (io.sentry.android.core.internal.util.c0) io.sentry.util.y.c(sentryAndroidOptions.getFrameMetricsCollector(), "options.getFrameMetricsCollector is required")));
            }
        }
        if (sentryAndroidOptions.getCompositePerformanceCollector() instanceof io.sentry.c2) {
            sentryAndroidOptions.setCompositePerformanceCollector(new io.sentry.m(sentryAndroidOptions));
        }
        if (z10 && (sentryAndroidOptions.getReplayController().L() instanceof io.sentry.k2)) {
            sentryAndroidOptions.getReplayController().o(new io.sentry.android.replay.a(sentryAndroidOptions));
        }
        io.sentry.a1 a10 = io.sentry.android.core.performance.h.B.a();
        try {
            io.sentry.f1 j10 = q10.j();
            io.sentry.l0 i10 = q10.i();
            q10.x(null);
            q10.w(null);
            if (a10 != null) {
                a10.close();
            }
            l(sentryAndroidOptions, context, x0Var, j10, i10, sentryAndroidOptions.getCompositePerformanceCollector());
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

    /* JADX INFO: Access modifiers changed from: package-private */
    public static void i(Context context, final SentryAndroidOptions sentryAndroidOptions, x0 x0Var, io.sentry.util.u uVar, i iVar, boolean z10, boolean z11, boolean z12, boolean z13) {
        io.sentry.util.r rVar = new io.sentry.util.r(new r.a() { // from class: io.sentry.android.core.c0
            @Override // io.sentry.util.r.a
            public final Object a() {
                Boolean valueOf;
                valueOf = Boolean.valueOf(io.sentry.android.core.cache.d.L(SentryAndroidOptions.this));
                return valueOf;
            }
        });
        sentryAndroidOptions.addIntegration(new SendCachedEnvelopeIntegration(new s4(new p4() { // from class: io.sentry.android.core.d0
            @Override // io.sentry.p4
            public final String a() {
                String cacheDirPath;
                cacheDirPath = SentryAndroidOptions.this.getCacheDirPath();
                return cacheDirPath;
            }
        }), rVar));
        sentryAndroidOptions.addIntegration(new NdkIntegration(uVar.g("io.sentry.android.ndk.SentryNdk", sentryAndroidOptions.getLogger())));
        sentryAndroidOptions.addIntegration(EnvelopeFileObserverIntegration.k());
        sentryAndroidOptions.addIntegration(new SendCachedEnvelopeIntegration(new t4(new p4() { // from class: io.sentry.android.core.e0
            @Override // io.sentry.p4
            public final String a() {
                String outboxPath;
                outboxPath = SentryAndroidOptions.this.getOutboxPath();
                return outboxPath;
            }
        }), rVar));
        sentryAndroidOptions.addIntegration(new AppLifecycleIntegration());
        sentryAndroidOptions.addIntegration(p0.a(context, x0Var));
        if (context instanceof Application) {
            Application application = (Application) context;
            sentryAndroidOptions.addIntegration(new ActivityLifecycleIntegration(application, x0Var, iVar));
            sentryAndroidOptions.addIntegration(new ActivityBreadcrumbsIntegration(application));
            sentryAndroidOptions.addIntegration(new UserInteractionIntegration(application, uVar));
            if (z10) {
                sentryAndroidOptions.addIntegration(new FragmentLifecycleIntegration(application, true, true));
            }
        } else {
            sentryAndroidOptions.getLogger().c(SentryLevel.WARNING, "ActivityLifecycle, FragmentLifecycle and UserInteraction Integrations need an Application class to be installed.", new Object[0]);
        }
        if (z11) {
            sentryAndroidOptions.addIntegration(new SentryTimberIntegration());
        }
        sentryAndroidOptions.addIntegration(new AppComponentsBreadcrumbsIntegration(context));
        sentryAndroidOptions.addIntegration(new SystemEventsBreadcrumbsIntegration(context));
        sentryAndroidOptions.addIntegration(new NetworkBreadcrumbsIntegration(context, x0Var));
        if (z12) {
            ReplayIntegration replayIntegration = new ReplayIntegration(context, io.sentry.transport.n.b());
            sentryAndroidOptions.addIntegration(replayIntegration);
            sentryAndroidOptions.setReplayController(replayIntegration);
        }
        if (z13) {
            DistributionIntegration distributionIntegration = new DistributionIntegration(context);
            sentryAndroidOptions.setDistributionController(distributionIntegration);
            sentryAndroidOptions.addIntegration(distributionIntegration);
        }
        sentryAndroidOptions.getFeedbackOptions().g(new SentryAndroidOptions.a());
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static void j(SentryAndroidOptions sentryAndroidOptions, Context context, ILogger iLogger, x0 x0Var) {
        io.sentry.util.y.c(context, "The context is required.");
        final Context g10 = e1.g(context);
        io.sentry.util.y.c(sentryAndroidOptions, "The options object is required.");
        io.sentry.util.y.c(iLogger, "The ILogger object is required.");
        sentryAndroidOptions.setLogger(iLogger);
        sentryAndroidOptions.setFatalLogger(new y());
        sentryAndroidOptions.setDefaultScopeType(d4.CURRENT);
        sentryAndroidOptions.setOpenTelemetryMode(e7.OFF);
        sentryAndroidOptions.setDateProvider(new l2());
        sentryAndroidOptions.setRuntimeManager(new io.sentry.android.core.internal.util.h());
        sentryAndroidOptions.setFlushTimeoutMillis(4000L);
        sentryAndroidOptions.setFrameMetricsCollector(new io.sentry.android.core.internal.util.c0(g10, iLogger, x0Var));
        b2.a(g10, sentryAndroidOptions, x0Var);
        sentryAndroidOptions.setCacheDirPath((String) sentryAndroidOptions.getRuntimeManager().a(new a.InterfaceC0414a() { // from class: io.sentry.android.core.b0
            @Override // io.sentry.util.runtime.a.InterfaceC0414a
            public final Object run() {
                String absolutePath;
                absolutePath = g0.f(g10).getAbsolutePath();
                return absolutePath;
            }
        }));
        k(sentryAndroidOptions, g10, x0Var);
        w0.E().L(sentryAndroidOptions);
    }

    private static void k(SentryAndroidOptions sentryAndroidOptions, final Context context, x0 x0Var) {
        PackageInfo p10 = e1.p(context, x0Var);
        if (p10 != null) {
            if (sentryAndroidOptions.getRelease() == null) {
                sentryAndroidOptions.setRelease(g(p10, e1.q(p10, x0Var)));
            }
            String str = p10.packageName;
            if (str != null && !str.startsWith("android.")) {
                sentryAndroidOptions.addInAppInclude(str);
            }
        }
        if (sentryAndroidOptions.getDistinctId() == null) {
            try {
                sentryAndroidOptions.setDistinctId((String) sentryAndroidOptions.getRuntimeManager().a(new a.InterfaceC0414a() { // from class: io.sentry.android.core.f0
                    @Override // io.sentry.util.runtime.a.InterfaceC0414a
                    public final Object run() {
                        String a10;
                        a10 = r1.a(context);
                        return a10;
                    }
                }));
            } catch (RuntimeException e10) {
                sentryAndroidOptions.getLogger().b(SentryLevel.ERROR, "Could not generate distinct Id.", e10);
            }
        }
    }

    private static void l(SentryAndroidOptions sentryAndroidOptions, Context context, x0 x0Var, io.sentry.f1 f1Var, io.sentry.l0 l0Var, io.sentry.h hVar) {
        if (!sentryAndroidOptions.isProfilingEnabled() && sentryAndroidOptions.getProfilesSampleRate() == null) {
            sentryAndroidOptions.setTransactionProfiler(b3.c());
            if (f1Var != null) {
                f1Var.close();
            }
            if (l0Var != null) {
                sentryAndroidOptions.setContinuousProfiler(l0Var);
                io.sentry.protocol.x f10 = l0Var.f();
                if (l0Var.isRunning() && !f10.equals(io.sentry.protocol.x.f29471e)) {
                    hVar.f(f10.toString());
                    return;
                }
                return;
            }
            sentryAndroidOptions.setContinuousProfiler(new v(x0Var, (io.sentry.android.core.internal.util.c0) io.sentry.util.y.c(sentryAndroidOptions.getFrameMetricsCollector(), "options.getFrameMetricsCollector is required"), sentryAndroidOptions.getLogger(), sentryAndroidOptions.getProfilingTracesDirPath(), sentryAndroidOptions.getProfilingTracesHz(), sentryAndroidOptions.getExecutorService()));
            return;
        }
        sentryAndroidOptions.setContinuousProfiler(io.sentry.e2.a());
        if (l0Var != null) {
            l0Var.c(true);
        }
        if (f1Var != null) {
            sentryAndroidOptions.setTransactionProfiler(f1Var);
        } else {
            sentryAndroidOptions.setTransactionProfiler(new l0(context, sentryAndroidOptions, x0Var, (io.sentry.android.core.internal.util.c0) io.sentry.util.y.c(sentryAndroidOptions.getFrameMetricsCollector(), "options.getFrameMetricsCollector is required")));
        }
    }
}
