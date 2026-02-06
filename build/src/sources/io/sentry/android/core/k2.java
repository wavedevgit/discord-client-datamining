package io.sentry.android.core;

import android.app.Application;
import android.content.Context;
import android.os.Process;
import android.os.SystemClock;
import io.sentry.ILogger;
import io.sentry.IScope;
import io.sentry.SentryLevel;
import io.sentry.android.fragment.FragmentLifecycleIntegration;
import io.sentry.android.timber.SentryTimberIntegration;
import io.sentry.b4;
import io.sentry.b5;
import io.sentry.g3;
import io.sentry.k7;
import io.sentry.z7;
import java.lang.reflect.InvocationTargetException;
import java.util.ArrayList;
import java.util.concurrent.atomic.AtomicBoolean;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class k2 {

    /* renamed from: a  reason: collision with root package name */
    private static final long f27242a = SystemClock.uptimeMillis();

    /* renamed from: b  reason: collision with root package name */
    protected static final io.sentry.util.a f27243b = new io.sentry.util.a();

    public static /* synthetic */ void a(SentryAndroidOptions sentryAndroidOptions) {
    }

    public static /* synthetic */ void b(AtomicBoolean atomicBoolean, IScope iScope) {
        z7 J = iScope.J();
        if (J != null && J.k() != null) {
            atomicBoolean.set(true);
        }
    }

    public static /* synthetic */ void c(ILogger iLogger, Context context, b5.a aVar, SentryAndroidOptions sentryAndroidOptions) {
        boolean z10;
        boolean z11;
        io.sentry.util.u uVar = new io.sentry.util.u();
        boolean d10 = uVar.d("timber.log.Timber", sentryAndroidOptions);
        boolean z12 = true;
        if (uVar.d("androidx.fragment.app.FragmentManager$FragmentLifecycleCallbacks", sentryAndroidOptions) && uVar.d("io.sentry.android.fragment.FragmentLifecycleIntegration", sentryAndroidOptions)) {
            z10 = true;
        } else {
            z10 = true;
            z12 = false;
        }
        if (d10 && uVar.d("io.sentry.android.timber.SentryTimberIntegration", sentryAndroidOptions)) {
            z11 = z10;
        } else {
            z11 = false;
        }
        boolean d11 = uVar.d("io.sentry.android.replay.ReplayIntegration", sentryAndroidOptions);
        boolean d12 = uVar.d("io.sentry.android.distribution.DistributionIntegration", sentryAndroidOptions);
        x0 x0Var = new x0(iLogger);
        io.sentry.util.u uVar2 = new io.sentry.util.u();
        i iVar = new i(uVar2, sentryAndroidOptions);
        g0.j(sentryAndroidOptions, context, iLogger, x0Var);
        g0.i(context, sentryAndroidOptions, x0Var, uVar2, iVar, z12, z11, d11, d12);
        boolean z13 = z11;
        boolean z14 = z12;
        try {
            aVar.a(sentryAndroidOptions);
        } catch (Throwable th2) {
            sentryAndroidOptions.getLogger().b(SentryLevel.ERROR, "Error in the 'OptionsConfiguration.configure' callback.", th2);
        }
        io.sentry.android.core.performance.h q10 = io.sentry.android.core.performance.h.q();
        if (sentryAndroidOptions.isEnablePerformanceV2() && x0Var.d() >= 24) {
            io.sentry.android.core.performance.i l10 = q10.l();
            if (l10.n()) {
                l10.t(Process.getStartUptimeMillis());
            }
        }
        if (context.getApplicationContext() instanceof Application) {
            q10.v((Application) context.getApplicationContext());
        }
        io.sentry.android.core.performance.i r10 = q10.r();
        if (r10.n()) {
            r10.t(f27242a);
        }
        g0.h(sentryAndroidOptions, context, x0Var, uVar2, iVar, d11);
        d(sentryAndroidOptions, z14, z13);
    }

    private static void d(k7 k7Var, boolean z10, boolean z11) {
        ArrayList arrayList = new ArrayList();
        ArrayList arrayList2 = new ArrayList();
        ArrayList arrayList3 = new ArrayList();
        for (io.sentry.k1 k1Var : k7Var.getIntegrations()) {
            if (z10 && (k1Var instanceof FragmentLifecycleIntegration)) {
                arrayList2.add(k1Var);
            }
            if (z11 && (k1Var instanceof SentryTimberIntegration)) {
                arrayList.add(k1Var);
            }
            if (k1Var instanceof SystemEventsBreadcrumbsIntegration) {
                arrayList3.add(k1Var);
            }
        }
        if (arrayList2.size() > 1) {
            for (int i10 = 0; i10 < arrayList2.size() - 1; i10++) {
                k7Var.getIntegrations().remove((io.sentry.k1) arrayList2.get(i10));
            }
        }
        if (arrayList.size() > 1) {
            for (int i11 = 0; i11 < arrayList.size() - 1; i11++) {
                k7Var.getIntegrations().remove((io.sentry.k1) arrayList.get(i11));
            }
        }
        if (arrayList3.size() > 1) {
            for (int i12 = 0; i12 < arrayList3.size() - 1; i12++) {
                k7Var.getIntegrations().remove((io.sentry.k1) arrayList3.get(i12));
            }
        }
    }

    public static void e(Context context, ILogger iLogger) {
        f(context, iLogger, new b5.a() { // from class: io.sentry.android.core.h2
            @Override // io.sentry.b5.a
            public final void a(k7 k7Var) {
                k2.a((SentryAndroidOptions) k7Var);
            }
        });
    }

    public static void f(final Context context, final ILogger iLogger, final b5.a aVar) {
        try {
            io.sentry.a1 a10 = f27243b.a();
            try {
                b5.z(g3.a(SentryAndroidOptions.class), new b5.a() { // from class: io.sentry.android.core.i2
                    @Override // io.sentry.b5.a
                    public final void a(k7 k7Var) {
                        k2.c(ILogger.this, context, aVar, (SentryAndroidOptions) k7Var);
                    }
                }, true);
                io.sentry.w0 v10 = b5.v();
                if (e1.s()) {
                    if (v10.b().isEnableAutoSessionTracking()) {
                        final AtomicBoolean atomicBoolean = new AtomicBoolean(false);
                        v10.o(new b4() { // from class: io.sentry.android.core.j2
                            @Override // io.sentry.b4
                            public final void a(IScope iScope) {
                                k2.b(atomicBoolean, iScope);
                            }
                        });
                        if (!atomicBoolean.get()) {
                            v10.q();
                        }
                    }
                    v10.b().getReplayController().start();
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
        } catch (IllegalAccessException e10) {
            iLogger.b(SentryLevel.FATAL, "Fatal error during SentryAndroid.init(...)", e10);
            throw new RuntimeException("Failed to initialize Sentry's SDK", e10);
        } catch (InstantiationException e11) {
            iLogger.b(SentryLevel.FATAL, "Fatal error during SentryAndroid.init(...)", e11);
            throw new RuntimeException("Failed to initialize Sentry's SDK", e11);
        } catch (NoSuchMethodException e12) {
            iLogger.b(SentryLevel.FATAL, "Fatal error during SentryAndroid.init(...)", e12);
            throw new RuntimeException("Failed to initialize Sentry's SDK", e12);
        } catch (InvocationTargetException e13) {
            iLogger.b(SentryLevel.FATAL, "Fatal error during SentryAndroid.init(...)", e13);
            throw new RuntimeException("Failed to initialize Sentry's SDK", e13);
        }
    }

    public static void g(Context context, b5.a aVar) {
        f(context, new z(), aVar);
    }
}
