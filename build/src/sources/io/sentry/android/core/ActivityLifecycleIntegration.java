package io.sentry.android.core;

import android.app.Activity;
import android.app.Application;
import android.os.Bundle;
import android.os.Handler;
import android.os.Looper;
import io.sentry.IScope;
import io.sentry.ISpan;
import io.sentry.SentryLevel;
import io.sentry.a2;
import io.sentry.a3;
import io.sentry.android.core.performance.h;
import io.sentry.b4;
import io.sentry.c7;
import io.sentry.f0;
import io.sentry.j5;
import io.sentry.k7;
import io.sentry.k8;
import io.sentry.l8;
import io.sentry.s8;
import io.sentry.t8;
import io.sentry.u8;
import io.sentry.v8;
import io.sentry.z3;
import java.io.Closeable;
import java.lang.ref.WeakReference;
import java.util.Date;
import java.util.Map;
import java.util.WeakHashMap;
import java.util.concurrent.Future;
import java.util.concurrent.RejectedExecutionException;
import java.util.concurrent.TimeUnit;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class ActivityLifecycleIntegration implements io.sentry.k1, Closeable, Application.ActivityLifecycleCallbacks {
    private final i B;

    /* renamed from: d  reason: collision with root package name */
    private final Application f26934d;

    /* renamed from: e  reason: collision with root package name */
    private final x0 f26935e;

    /* renamed from: i  reason: collision with root package name */
    private io.sentry.w0 f26936i;

    /* renamed from: o  reason: collision with root package name */
    private SentryAndroidOptions f26937o;

    /* renamed from: r  reason: collision with root package name */
    private boolean f26940r;

    /* renamed from: u  reason: collision with root package name */
    private ISpan f26943u;

    /* renamed from: p  reason: collision with root package name */
    private boolean f26938p = false;

    /* renamed from: q  reason: collision with root package name */
    private boolean f26939q = false;

    /* renamed from: s  reason: collision with root package name */
    private boolean f26941s = false;

    /* renamed from: t  reason: collision with root package name */
    private io.sentry.f0 f26942t = null;

    /* renamed from: v  reason: collision with root package name */
    private final WeakHashMap f26944v = new WeakHashMap();

    /* renamed from: w  reason: collision with root package name */
    private final WeakHashMap f26945w = new WeakHashMap();

    /* renamed from: x  reason: collision with root package name */
    private final WeakHashMap f26946x = new WeakHashMap();

    /* renamed from: y  reason: collision with root package name */
    private j5 f26947y = new c7(new Date(0), 0);

    /* renamed from: z  reason: collision with root package name */
    private Future f26948z = null;
    private final WeakHashMap A = new WeakHashMap();
    private final io.sentry.util.a C = new io.sentry.util.a();
    private boolean D = false;
    private final io.sentry.util.a E = new io.sentry.util.a();

    public ActivityLifecycleIntegration(Application application, x0 x0Var, i iVar) {
        this.f26934d = (Application) io.sentry.util.y.c(application, "Application is required");
        this.f26935e = (x0) io.sentry.util.y.c(x0Var, "BuildInfoProvider is required");
        this.B = (i) io.sentry.util.y.c(iVar, "ActivityFramesTracker is required");
        if (x0Var.d() >= 29) {
            this.f26940r = true;
        }
    }

    private boolean A1(SentryAndroidOptions sentryAndroidOptions) {
        if (sentryAndroidOptions.isTracingEnabled() && sentryAndroidOptions.isEnableAutoActivityLifecycleTracing()) {
            return true;
        }
        return false;
    }

    private boolean D1(Activity activity) {
        return this.A.containsKey(activity);
    }

    private void E0() {
        j5 f10 = io.sentry.android.core.performance.h.q().m(this.f26937o).f();
        if (this.f26938p && f10 != null) {
            J0(this.f26943u, f10);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void F0(ISpan iSpan, ISpan iSpan2) {
        j5 j5Var;
        if (iSpan != null && !iSpan.isFinished()) {
            iSpan.e(w1(iSpan));
            if (iSpan2 != null) {
                j5Var = iSpan2.r();
            } else {
                j5Var = null;
            }
            if (j5Var == null) {
                j5Var = iSpan.t();
            }
            K0(iSpan, j5Var, l8.DEADLINE_EXCEEDED);
        }
    }

    private void I0(ISpan iSpan) {
        if (iSpan != null && !iSpan.isFinished()) {
            iSpan.d();
        }
    }

    private void J() {
        Future future = this.f26948z;
        if (future != null) {
            future.cancel(false);
            this.f26948z = null;
        }
    }

    private void J0(ISpan iSpan, j5 j5Var) {
        K0(iSpan, j5Var, null);
    }

    private void K0(ISpan iSpan, j5 j5Var, l8 l8Var) {
        if (iSpan != null && !iSpan.isFinished()) {
            if (l8Var == null) {
                if (iSpan.a() != null) {
                    l8Var = iSpan.a();
                } else {
                    l8Var = l8.OK;
                }
            }
            iSpan.s(l8Var, j5Var);
        }
    }

    private void L0(ISpan iSpan, l8 l8Var) {
        if (iSpan != null && !iSpan.isFinished()) {
            iSpan.k(l8Var);
        }
    }

    private void O0(final io.sentry.e1 e1Var, ISpan iSpan, ISpan iSpan2) {
        if (e1Var != null && !e1Var.isFinished()) {
            L0(iSpan, l8.DEADLINE_EXCEEDED);
            F0(iSpan2, iSpan);
            J();
            l8 a10 = e1Var.a();
            if (a10 == null) {
                a10 = l8.OK;
            }
            e1Var.k(a10);
            io.sentry.w0 w0Var = this.f26936i;
            if (w0Var != null) {
                w0Var.o(new b4() { // from class: io.sentry.android.core.n
                    @Override // io.sentry.b4
                    public final void a(IScope iScope) {
                        ActivityLifecycleIntegration.this.Y(iScope, e1Var);
                    }
                });
            }
        }
    }

    private void P() {
        this.f26941s = false;
        this.f26947y = new c7(new Date(0L), 0L);
        this.f26946x.clear();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void T1(ISpan iSpan, ISpan iSpan2) {
        io.sentry.android.core.performance.h q10 = io.sentry.android.core.performance.h.q();
        io.sentry.android.core.performance.i l10 = q10.l();
        io.sentry.android.core.performance.i r10 = q10.r();
        if (l10.q() && l10.o()) {
            l10.w();
        }
        if (r10.q() && r10.o()) {
            r10.w();
        }
        E0();
        io.sentry.a1 a10 = this.E.a();
        try {
            SentryAndroidOptions sentryAndroidOptions = this.f26937o;
            if (sentryAndroidOptions != null && iSpan2 != null) {
                j5 now = sentryAndroidOptions.getDateProvider().now();
                long millis = TimeUnit.NANOSECONDS.toMillis(now.d(iSpan2.t()));
                Long valueOf = Long.valueOf(millis);
                a2.a aVar = a2.a.MILLISECOND;
                iSpan2.m("time_to_initial_display", valueOf, aVar);
                if (iSpan != null && this.D) {
                    this.D = false;
                    iSpan2.m("time_to_full_display", Long.valueOf(millis), aVar);
                    iSpan.m("time_to_full_display", Long.valueOf(millis), aVar);
                    J0(iSpan, now);
                }
                J0(iSpan2, now);
            } else {
                I0(iSpan2);
                if (this.D) {
                    I0(iSpan);
                }
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

    private String V0(Activity activity) {
        return activity.getClass().getSimpleName();
    }

    private void V1(k8 k8Var) {
        k8Var.g("auto.ui.activity");
    }

    private void X1(Activity activity) {
        Boolean bool;
        j5 j5Var;
        Long valueOf;
        j5 j5Var2;
        final io.sentry.e1 e1Var;
        k8 k8Var;
        boolean z10;
        final WeakReference weakReference = new WeakReference(activity);
        if (this.f26936i != null && !D1(activity)) {
            if (!this.f26938p) {
                this.A.put(activity, a3.u());
                if (this.f26937o.isEnableAutoTraceIdGeneration()) {
                    io.sentry.util.j0.h(this.f26936i);
                    return;
                }
                return;
            }
            a2();
            final String V0 = V0(activity);
            io.sentry.android.core.performance.i m10 = io.sentry.android.core.performance.h.q().m(this.f26937o);
            boolean z11 = false;
            s8 s8Var = null;
            if (e1.s() && m10.q()) {
                j5 i10 = m10.i();
                if (io.sentry.android.core.performance.h.q().n() == h.a.COLD) {
                    z10 = true;
                } else {
                    z10 = false;
                }
                bool = Boolean.valueOf(z10);
                j5Var = i10;
            } else {
                bool = null;
                j5Var = null;
            }
            v8 v8Var = new v8();
            long deadlineTimeout = this.f26937o.getDeadlineTimeout();
            if (deadlineTimeout <= 0) {
                valueOf = null;
            } else {
                valueOf = Long.valueOf(deadlineTimeout);
            }
            v8Var.s(valueOf);
            if (this.f26937o.isEnableActivityLifecycleTracingAutoFinish()) {
                v8Var.t(this.f26937o.getIdleTimeout());
                v8Var.i(true);
            }
            v8Var.v(true);
            v8Var.u(new u8() { // from class: io.sentry.android.core.p
                @Override // io.sentry.u8
                public final void a(io.sentry.e1 e1Var2) {
                    ActivityLifecycleIntegration.y(ActivityLifecycleIntegration.this, weakReference, V0, e1Var2);
                }
            });
            if (!this.f26941s && j5Var != null && bool != null) {
                s8 k10 = io.sentry.android.core.performance.h.q().k();
                io.sentry.android.core.performance.h.q().y(null);
                s8Var = k10;
                j5Var2 = j5Var;
            } else {
                j5Var2 = this.f26947y;
            }
            v8Var.h(j5Var2);
            if (s8Var != null) {
                z11 = true;
            }
            v8Var.r(z11);
            V1(v8Var);
            io.sentry.e1 z12 = this.f26936i.z(new t8(V0, io.sentry.protocol.g0.COMPONENT, "ui.load", s8Var), v8Var);
            k8 k8Var2 = new k8();
            V1(k8Var2);
            if (!this.f26941s && j5Var != null && bool != null) {
                e1Var = z12;
                k8Var = k8Var2;
                this.f26943u = e1Var.o(d1(bool.booleanValue()), Y0(bool.booleanValue()), j5Var, io.sentry.j1.SENTRY, k8Var2);
                E0();
            } else {
                e1Var = z12;
                k8Var = k8Var2;
            }
            String z13 = z1(V0);
            io.sentry.j1 j1Var = io.sentry.j1.SENTRY;
            j5 j5Var3 = j5Var2;
            final ISpan o10 = e1Var.o("ui.load.initial_display", z13, j5Var3, j1Var, k8Var);
            this.f26944v.put(activity, o10);
            if (this.f26939q && this.f26942t != null && this.f26937o != null) {
                final ISpan o11 = e1Var.o("ui.load.full_display", x1(V0), j5Var3, j1Var, k8Var);
                try {
                    this.f26945w.put(activity, o11);
                    this.f26948z = this.f26937o.getExecutorService().c(new Runnable() { // from class: io.sentry.android.core.q
                        @Override // java.lang.Runnable
                        public final void run() {
                            ActivityLifecycleIntegration.this.F0(o11, o10);
                        }
                    }, 25000L);
                } catch (RejectedExecutionException e10) {
                    this.f26937o.getLogger().b(SentryLevel.ERROR, "Failed to call the executor. Time to full display span will not be finished automatically. Did you call Sentry.close()?", e10);
                }
            }
            this.f26936i.o(new b4() { // from class: io.sentry.android.core.r
                @Override // io.sentry.b4
                public final void a(IScope iScope) {
                    ActivityLifecycleIntegration.this.I(iScope, e1Var);
                }
            });
            this.A.put(activity, e1Var);
        }
    }

    private String Y0(boolean z10) {
        if (z10) {
            return "Cold Start";
        }
        return "Warm Start";
    }

    private void a2() {
        for (Map.Entry entry : this.A.entrySet()) {
            O0((io.sentry.e1) entry.getValue(), (ISpan) this.f26944v.get(entry.getKey()), (ISpan) this.f26945w.get(entry.getKey()));
        }
    }

    private void b2(Activity activity, boolean z10) {
        if (this.f26938p && z10) {
            O0((io.sentry.e1) this.A.get(activity), null, null);
        }
    }

    private String d1(boolean z10) {
        if (z10) {
            return "app.start.cold";
        }
        return "app.start.warm";
    }

    public static /* synthetic */ void n(ActivityLifecycleIntegration activityLifecycleIntegration, IScope iScope, io.sentry.e1 e1Var, io.sentry.e1 e1Var2) {
        if (e1Var2 == null) {
            activityLifecycleIntegration.getClass();
            iScope.B(e1Var);
            return;
        }
        SentryAndroidOptions sentryAndroidOptions = activityLifecycleIntegration.f26937o;
        if (sentryAndroidOptions != null) {
            sentryAndroidOptions.getLogger().c(SentryLevel.DEBUG, "Transaction '%s' won't be bound to the Scope since there's one already in there.", e1Var.getName());
        }
    }

    private String w1(ISpan iSpan) {
        String description = iSpan.getDescription();
        if (description != null && description.endsWith(" - Deadline Exceeded")) {
            return description;
        }
        return iSpan.getDescription() + " - Deadline Exceeded";
    }

    private String x1(String str) {
        return str + " full display";
    }

    public static /* synthetic */ void y(ActivityLifecycleIntegration activityLifecycleIntegration, WeakReference weakReference, String str, io.sentry.e1 e1Var) {
        activityLifecycleIntegration.getClass();
        Activity activity = (Activity) weakReference.get();
        if (activity != null) {
            activityLifecycleIntegration.B.k(activity, e1Var.f());
            return;
        }
        SentryAndroidOptions sentryAndroidOptions = activityLifecycleIntegration.f26937o;
        if (sentryAndroidOptions != null) {
            sentryAndroidOptions.getLogger().c(SentryLevel.WARNING, "Unable to track activity frames as the Activity %s has been destroyed.", str);
        }
    }

    public static /* synthetic */ void z(io.sentry.e1 e1Var, IScope iScope, io.sentry.e1 e1Var2) {
        if (e1Var2 == e1Var) {
            iScope.F();
        }
    }

    private String z1(String str) {
        return str + " initial display";
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void I(final IScope iScope, final io.sentry.e1 e1Var) {
        iScope.S(new z3.c() { // from class: io.sentry.android.core.s
            @Override // io.sentry.z3.c
            public final void a(io.sentry.e1 e1Var2) {
                ActivityLifecycleIntegration.n(ActivityLifecycleIntegration.this, iScope, e1Var, e1Var2);
            }
        });
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void Y(final IScope iScope, final io.sentry.e1 e1Var) {
        iScope.S(new z3.c() { // from class: io.sentry.android.core.o
            @Override // io.sentry.z3.c
            public final void a(io.sentry.e1 e1Var2) {
                ActivityLifecycleIntegration.z(io.sentry.e1.this, iScope, e1Var2);
            }
        });
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        this.f26934d.unregisterActivityLifecycleCallbacks(this);
        SentryAndroidOptions sentryAndroidOptions = this.f26937o;
        if (sentryAndroidOptions != null) {
            sentryAndroidOptions.getLogger().c(SentryLevel.DEBUG, "ActivityLifecycleIntegration removed.", new Object[0]);
        }
        this.B.m();
    }

    @Override // io.sentry.k1
    public void g(io.sentry.w0 w0Var, k7 k7Var) {
        SentryAndroidOptions sentryAndroidOptions;
        if (k7Var instanceof SentryAndroidOptions) {
            sentryAndroidOptions = (SentryAndroidOptions) k7Var;
        } else {
            sentryAndroidOptions = null;
        }
        this.f26937o = (SentryAndroidOptions) io.sentry.util.y.c(sentryAndroidOptions, "SentryAndroidOptions is required");
        this.f26936i = (io.sentry.w0) io.sentry.util.y.c(w0Var, "Scopes are required");
        this.f26938p = A1(this.f26937o);
        this.f26942t = this.f26937o.getFullyDisplayedReporter();
        this.f26939q = this.f26937o.isEnableTimeToFullDisplayTracing();
        this.f26934d.registerActivityLifecycleCallbacks(this);
        this.f26937o.getLogger().c(SentryLevel.DEBUG, "ActivityLifecycleIntegration installed.", new Object[0]);
        io.sentry.util.p.a("ActivityLifecycle");
    }

    @Override // android.app.Application.ActivityLifecycleCallbacks
    public void onActivityCreated(Activity activity, Bundle bundle) {
        io.sentry.f0 f0Var;
        SentryAndroidOptions sentryAndroidOptions;
        if (!this.f26940r) {
            onActivityPreCreated(activity, bundle);
        }
        io.sentry.a1 a10 = this.C.a();
        try {
            if (this.f26936i != null && (sentryAndroidOptions = this.f26937o) != null && sentryAndroidOptions.isEnableScreenTracking()) {
                final String a11 = io.sentry.android.core.internal.util.k.a(activity);
                this.f26936i.o(new b4() { // from class: io.sentry.android.core.j
                    @Override // io.sentry.b4
                    public final void a(IScope iScope) {
                        iScope.M(a11);
                    }
                });
            }
            X1(activity);
            final ISpan iSpan = (ISpan) this.f26944v.get(activity);
            final ISpan iSpan2 = (ISpan) this.f26945w.get(activity);
            this.f26941s = true;
            if (this.f26938p && iSpan != null && iSpan2 != null && (f0Var = this.f26942t) != null) {
                f0Var.b(new f0.a() { // from class: io.sentry.android.core.k
                });
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

    @Override // android.app.Application.ActivityLifecycleCallbacks
    public void onActivityDestroyed(Activity activity) {
        io.sentry.a1 a10 = this.C.a();
        try {
            io.sentry.android.core.performance.b bVar = (io.sentry.android.core.performance.b) this.f26946x.remove(activity);
            if (bVar != null) {
                bVar.a();
            }
            if (this.f26938p) {
                L0(this.f26943u, l8.CANCELLED);
                ISpan iSpan = (ISpan) this.f26944v.get(activity);
                L0(iSpan, l8.DEADLINE_EXCEEDED);
                F0((ISpan) this.f26945w.get(activity), iSpan);
                J();
                b2(activity, true);
                this.f26943u = null;
                this.f26944v.remove(activity);
                this.f26945w.remove(activity);
            }
            this.A.remove(activity);
            if (this.A.isEmpty() && !activity.isChangingConfigurations()) {
                P();
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

    @Override // android.app.Application.ActivityLifecycleCallbacks
    public void onActivityPaused(Activity activity) {
        io.sentry.a1 a10 = this.C.a();
        try {
            if (!this.f26940r) {
                onActivityPrePaused(activity);
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

    @Override // android.app.Application.ActivityLifecycleCallbacks
    public void onActivityPostCreated(Activity activity, Bundle bundle) {
        io.sentry.android.core.performance.b bVar = (io.sentry.android.core.performance.b) this.f26946x.get(activity);
        if (bVar != null) {
            ISpan iSpan = this.f26943u;
            if (iSpan == null) {
                iSpan = (ISpan) this.A.get(activity);
            }
            bVar.b(iSpan);
        }
    }

    @Override // android.app.Application.ActivityLifecycleCallbacks
    public void onActivityPostResumed(Activity activity) {
    }

    @Override // android.app.Application.ActivityLifecycleCallbacks
    public void onActivityPostStarted(Activity activity) {
        io.sentry.android.core.performance.b bVar = (io.sentry.android.core.performance.b) this.f26946x.get(activity);
        if (bVar != null) {
            ISpan iSpan = this.f26943u;
            if (iSpan == null) {
                iSpan = (ISpan) this.A.get(activity);
            }
            bVar.c(iSpan);
            bVar.e();
        }
    }

    @Override // android.app.Application.ActivityLifecycleCallbacks
    public void onActivityPreCreated(Activity activity, Bundle bundle) {
        j5 a10;
        io.sentry.android.core.performance.b bVar = new io.sentry.android.core.performance.b(activity.getClass().getName());
        this.f26946x.put(activity, bVar);
        if (this.f26941s) {
            return;
        }
        io.sentry.w0 w0Var = this.f26936i;
        if (w0Var != null) {
            a10 = w0Var.b().getDateProvider().now();
        } else {
            a10 = x.a();
        }
        this.f26947y = a10;
        bVar.g(a10);
    }

    @Override // android.app.Application.ActivityLifecycleCallbacks
    public void onActivityPrePaused(Activity activity) {
        j5 a10;
        this.f26941s = true;
        io.sentry.w0 w0Var = this.f26936i;
        if (w0Var != null) {
            a10 = w0Var.b().getDateProvider().now();
        } else {
            a10 = x.a();
        }
        this.f26947y = a10;
    }

    @Override // android.app.Application.ActivityLifecycleCallbacks
    public void onActivityPreStarted(Activity activity) {
        j5 a10;
        io.sentry.android.core.performance.b bVar = (io.sentry.android.core.performance.b) this.f26946x.get(activity);
        if (bVar != null) {
            SentryAndroidOptions sentryAndroidOptions = this.f26937o;
            if (sentryAndroidOptions != null) {
                a10 = sentryAndroidOptions.getDateProvider().now();
            } else {
                a10 = x.a();
            }
            bVar.h(a10);
        }
    }

    @Override // android.app.Application.ActivityLifecycleCallbacks
    public void onActivityResumed(Activity activity) {
        io.sentry.a1 a10 = this.C.a();
        try {
            if (!this.f26940r) {
                onActivityPostStarted(activity);
            }
            if (this.f26938p) {
                final ISpan iSpan = (ISpan) this.f26944v.get(activity);
                final ISpan iSpan2 = (ISpan) this.f26945w.get(activity);
                if (activity.getWindow() != null) {
                    io.sentry.android.core.internal.util.r.d(activity, new Runnable() { // from class: io.sentry.android.core.l
                        @Override // java.lang.Runnable
                        public final void run() {
                            ActivityLifecycleIntegration.this.T1(iSpan2, iSpan);
                        }
                    }, this.f26935e);
                } else {
                    new Handler(Looper.getMainLooper()).post(new Runnable() { // from class: io.sentry.android.core.m
                        @Override // java.lang.Runnable
                        public final void run() {
                            ActivityLifecycleIntegration.this.T1(iSpan2, iSpan);
                        }
                    });
                }
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

    @Override // android.app.Application.ActivityLifecycleCallbacks
    public void onActivitySaveInstanceState(Activity activity, Bundle bundle) {
    }

    @Override // android.app.Application.ActivityLifecycleCallbacks
    public void onActivityStarted(Activity activity) {
        io.sentry.a1 a10 = this.C.a();
        try {
            if (!this.f26940r) {
                onActivityPostCreated(activity, null);
                onActivityPreStarted(activity);
            }
            if (this.f26938p) {
                this.B.f(activity);
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

    @Override // android.app.Application.ActivityLifecycleCallbacks
    public void onActivityStopped(Activity activity) {
    }
}
