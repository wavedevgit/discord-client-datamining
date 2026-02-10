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
    private final Application f27134d;

    /* renamed from: e  reason: collision with root package name */
    private final x0 f27135e;

    /* renamed from: i  reason: collision with root package name */
    private io.sentry.w0 f27136i;

    /* renamed from: o  reason: collision with root package name */
    private SentryAndroidOptions f27137o;

    /* renamed from: r  reason: collision with root package name */
    private boolean f27140r;

    /* renamed from: u  reason: collision with root package name */
    private ISpan f27143u;

    /* renamed from: p  reason: collision with root package name */
    private boolean f27138p = false;

    /* renamed from: q  reason: collision with root package name */
    private boolean f27139q = false;

    /* renamed from: s  reason: collision with root package name */
    private boolean f27141s = false;

    /* renamed from: t  reason: collision with root package name */
    private io.sentry.f0 f27142t = null;

    /* renamed from: v  reason: collision with root package name */
    private final WeakHashMap f27144v = new WeakHashMap();

    /* renamed from: w  reason: collision with root package name */
    private final WeakHashMap f27145w = new WeakHashMap();

    /* renamed from: x  reason: collision with root package name */
    private final WeakHashMap f27146x = new WeakHashMap();

    /* renamed from: y  reason: collision with root package name */
    private j5 f27147y = new c7(new Date(0), 0);

    /* renamed from: z  reason: collision with root package name */
    private Future f27148z = null;
    private final WeakHashMap A = new WeakHashMap();
    private final io.sentry.util.a C = new io.sentry.util.a();
    private boolean D = false;
    private final io.sentry.util.a E = new io.sentry.util.a();

    public ActivityLifecycleIntegration(Application application, x0 x0Var, i iVar) {
        this.f27134d = (Application) io.sentry.util.y.c(application, "Application is required");
        this.f27135e = (x0) io.sentry.util.y.c(x0Var, "BuildInfoProvider is required");
        this.B = (i) io.sentry.util.y.c(iVar, "ActivityFramesTracker is required");
        if (x0Var.d() >= 29) {
            this.f27140r = true;
        }
    }

    private void C0() {
        j5 f10 = io.sentry.android.core.performance.h.q().m(this.f27137o).f();
        if (this.f27138p && f10 != null) {
            H0(this.f27143u, f10);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void D0(ISpan iSpan, ISpan iSpan2) {
        j5 j5Var;
        if (iSpan != null && !iSpan.isFinished()) {
            iSpan.e(r1(iSpan));
            if (iSpan2 != null) {
                j5Var = iSpan2.r();
            } else {
                j5Var = null;
            }
            if (j5Var == null) {
                j5Var = iSpan.t();
            }
            J0(iSpan, j5Var, l8.DEADLINE_EXCEEDED);
        }
    }

    private void G0(ISpan iSpan) {
        if (iSpan != null && !iSpan.isFinished()) {
            iSpan.d();
        }
    }

    private void H0(ISpan iSpan, j5 j5Var) {
        J0(iSpan, j5Var, null);
    }

    private void J() {
        Future future = this.f27148z;
        if (future != null) {
            future.cancel(false);
            this.f27148z = null;
        }
    }

    private void J0(ISpan iSpan, j5 j5Var, l8 l8Var) {
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

    private void O0(ISpan iSpan, l8 l8Var) {
        if (iSpan != null && !iSpan.isFinished()) {
            iSpan.k(l8Var);
        }
    }

    private void Q() {
        this.f27141s = false;
        this.f27147y = new c7(new Date(0L), 0L);
        this.f27146x.clear();
    }

    private void R0(final io.sentry.e1 e1Var, ISpan iSpan, ISpan iSpan2) {
        if (e1Var != null && !e1Var.isFinished()) {
            O0(iSpan, l8.DEADLINE_EXCEEDED);
            D0(iSpan2, iSpan);
            J();
            l8 a10 = e1Var.a();
            if (a10 == null) {
                a10 = l8.OK;
            }
            e1Var.k(a10);
            io.sentry.w0 w0Var = this.f27136i;
            if (w0Var != null) {
                w0Var.o(new b4() { // from class: io.sentry.android.core.n
                    @Override // io.sentry.b4
                    public final void a(IScope iScope) {
                        ActivityLifecycleIntegration.this.Z(iScope, e1Var);
                    }
                });
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void S1(ISpan iSpan, ISpan iSpan2) {
        io.sentry.android.core.performance.h q10 = io.sentry.android.core.performance.h.q();
        io.sentry.android.core.performance.i l10 = q10.l();
        io.sentry.android.core.performance.i r10 = q10.r();
        if (l10.q() && l10.o()) {
            l10.w();
        }
        if (r10.q() && r10.o()) {
            r10.w();
        }
        C0();
        io.sentry.a1 a10 = this.E.a();
        try {
            SentryAndroidOptions sentryAndroidOptions = this.f27137o;
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
                    H0(iSpan, now);
                }
                H0(iSpan2, now);
            } else {
                G0(iSpan2);
                if (this.D) {
                    G0(iSpan);
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

    private void U1(k8 k8Var) {
        k8Var.g("auto.ui.activity");
    }

    private String V0(Activity activity) {
        return activity.getClass().getSimpleName();
    }

    private String W0(boolean z10) {
        if (z10) {
            return "Cold Start";
        }
        return "Warm Start";
    }

    private void W1(Activity activity) {
        Boolean bool;
        j5 j5Var;
        Long valueOf;
        j5 j5Var2;
        final io.sentry.e1 e1Var;
        k8 k8Var;
        boolean z10;
        final WeakReference weakReference = new WeakReference(activity);
        if (this.f27136i != null && !z1(activity)) {
            if (!this.f27138p) {
                this.A.put(activity, a3.u());
                if (this.f27137o.isEnableAutoTraceIdGeneration()) {
                    io.sentry.util.j0.h(this.f27136i);
                    return;
                }
                return;
            }
            Z1();
            final String V0 = V0(activity);
            io.sentry.android.core.performance.i m10 = io.sentry.android.core.performance.h.q().m(this.f27137o);
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
            long deadlineTimeout = this.f27137o.getDeadlineTimeout();
            if (deadlineTimeout <= 0) {
                valueOf = null;
            } else {
                valueOf = Long.valueOf(deadlineTimeout);
            }
            v8Var.s(valueOf);
            if (this.f27137o.isEnableActivityLifecycleTracingAutoFinish()) {
                v8Var.t(this.f27137o.getIdleTimeout());
                v8Var.i(true);
            }
            v8Var.v(true);
            v8Var.u(new u8() { // from class: io.sentry.android.core.p
                @Override // io.sentry.u8
                public final void a(io.sentry.e1 e1Var2) {
                    ActivityLifecycleIntegration.y(ActivityLifecycleIntegration.this, weakReference, V0, e1Var2);
                }
            });
            if (!this.f27141s && j5Var != null && bool != null) {
                s8 k10 = io.sentry.android.core.performance.h.q().k();
                io.sentry.android.core.performance.h.q().y(null);
                s8Var = k10;
                j5Var2 = j5Var;
            } else {
                j5Var2 = this.f27147y;
            }
            v8Var.h(j5Var2);
            if (s8Var != null) {
                z11 = true;
            }
            v8Var.r(z11);
            U1(v8Var);
            io.sentry.e1 z12 = this.f27136i.z(new t8(V0, io.sentry.protocol.g0.COMPONENT, "ui.load", s8Var), v8Var);
            k8 k8Var2 = new k8();
            U1(k8Var2);
            if (!this.f27141s && j5Var != null && bool != null) {
                e1Var = z12;
                k8Var = k8Var2;
                this.f27143u = e1Var.o(a1(bool.booleanValue()), W0(bool.booleanValue()), j5Var, io.sentry.j1.SENTRY, k8Var2);
                C0();
            } else {
                e1Var = z12;
                k8Var = k8Var2;
            }
            String u12 = u1(V0);
            io.sentry.j1 j1Var = io.sentry.j1.SENTRY;
            j5 j5Var3 = j5Var2;
            final ISpan o10 = e1Var.o("ui.load.initial_display", u12, j5Var3, j1Var, k8Var);
            this.f27144v.put(activity, o10);
            if (this.f27139q && this.f27142t != null && this.f27137o != null) {
                final ISpan o11 = e1Var.o("ui.load.full_display", s1(V0), j5Var3, j1Var, k8Var);
                try {
                    this.f27145w.put(activity, o11);
                    this.f27148z = this.f27137o.getExecutorService().c(new Runnable() { // from class: io.sentry.android.core.q
                        @Override // java.lang.Runnable
                        public final void run() {
                            ActivityLifecycleIntegration.this.D0(o11, o10);
                        }
                    }, 25000L);
                } catch (RejectedExecutionException e10) {
                    this.f27137o.getLogger().b(SentryLevel.ERROR, "Failed to call the executor. Time to full display span will not be finished automatically. Did you call Sentry.close()?", e10);
                }
            }
            this.f27136i.o(new b4() { // from class: io.sentry.android.core.r
                @Override // io.sentry.b4
                public final void a(IScope iScope) {
                    ActivityLifecycleIntegration.this.I(iScope, e1Var);
                }
            });
            this.A.put(activity, e1Var);
        }
    }

    private void Z1() {
        for (Map.Entry entry : this.A.entrySet()) {
            R0((io.sentry.e1) entry.getValue(), (ISpan) this.f27144v.get(entry.getKey()), (ISpan) this.f27145w.get(entry.getKey()));
        }
    }

    private String a1(boolean z10) {
        if (z10) {
            return "app.start.cold";
        }
        return "app.start.warm";
    }

    private void a2(Activity activity, boolean z10) {
        if (this.f27138p && z10) {
            R0((io.sentry.e1) this.A.get(activity), null, null);
        }
    }

    public static /* synthetic */ void n(ActivityLifecycleIntegration activityLifecycleIntegration, IScope iScope, io.sentry.e1 e1Var, io.sentry.e1 e1Var2) {
        if (e1Var2 == null) {
            activityLifecycleIntegration.getClass();
            iScope.A(e1Var);
            return;
        }
        SentryAndroidOptions sentryAndroidOptions = activityLifecycleIntegration.f27137o;
        if (sentryAndroidOptions != null) {
            sentryAndroidOptions.getLogger().c(SentryLevel.DEBUG, "Transaction '%s' won't be bound to the Scope since there's one already in there.", e1Var.getName());
        }
    }

    private String r1(ISpan iSpan) {
        String description = iSpan.getDescription();
        if (description != null && description.endsWith(" - Deadline Exceeded")) {
            return description;
        }
        return iSpan.getDescription() + " - Deadline Exceeded";
    }

    private String s1(String str) {
        return str + " full display";
    }

    private String u1(String str) {
        return str + " initial display";
    }

    private boolean w1(SentryAndroidOptions sentryAndroidOptions) {
        if (sentryAndroidOptions.isTracingEnabled() && sentryAndroidOptions.isEnableAutoActivityLifecycleTracing()) {
            return true;
        }
        return false;
    }

    public static /* synthetic */ void y(ActivityLifecycleIntegration activityLifecycleIntegration, WeakReference weakReference, String str, io.sentry.e1 e1Var) {
        activityLifecycleIntegration.getClass();
        Activity activity = (Activity) weakReference.get();
        if (activity != null) {
            activityLifecycleIntegration.B.k(activity, e1Var.f());
            return;
        }
        SentryAndroidOptions sentryAndroidOptions = activityLifecycleIntegration.f27137o;
        if (sentryAndroidOptions != null) {
            sentryAndroidOptions.getLogger().c(SentryLevel.WARNING, "Unable to track activity frames as the Activity %s has been destroyed.", str);
        }
    }

    public static /* synthetic */ void z(io.sentry.e1 e1Var, IScope iScope, io.sentry.e1 e1Var2) {
        if (e1Var2 == e1Var) {
            iScope.E();
        }
    }

    private boolean z1(Activity activity) {
        return this.A.containsKey(activity);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void I(final IScope iScope, final io.sentry.e1 e1Var) {
        iScope.R(new z3.c() { // from class: io.sentry.android.core.s
            @Override // io.sentry.z3.c
            public final void a(io.sentry.e1 e1Var2) {
                ActivityLifecycleIntegration.n(ActivityLifecycleIntegration.this, iScope, e1Var, e1Var2);
            }
        });
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void Z(final IScope iScope, final io.sentry.e1 e1Var) {
        iScope.R(new z3.c() { // from class: io.sentry.android.core.o
            @Override // io.sentry.z3.c
            public final void a(io.sentry.e1 e1Var2) {
                ActivityLifecycleIntegration.z(io.sentry.e1.this, iScope, e1Var2);
            }
        });
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        this.f27134d.unregisterActivityLifecycleCallbacks(this);
        SentryAndroidOptions sentryAndroidOptions = this.f27137o;
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
        this.f27137o = (SentryAndroidOptions) io.sentry.util.y.c(sentryAndroidOptions, "SentryAndroidOptions is required");
        this.f27136i = (io.sentry.w0) io.sentry.util.y.c(w0Var, "Scopes are required");
        this.f27138p = w1(this.f27137o);
        this.f27142t = this.f27137o.getFullyDisplayedReporter();
        this.f27139q = this.f27137o.isEnableTimeToFullDisplayTracing();
        this.f27134d.registerActivityLifecycleCallbacks(this);
        this.f27137o.getLogger().c(SentryLevel.DEBUG, "ActivityLifecycleIntegration installed.", new Object[0]);
        io.sentry.util.p.a("ActivityLifecycle");
    }

    @Override // android.app.Application.ActivityLifecycleCallbacks
    public void onActivityCreated(Activity activity, Bundle bundle) {
        io.sentry.f0 f0Var;
        SentryAndroidOptions sentryAndroidOptions;
        if (!this.f27140r) {
            onActivityPreCreated(activity, bundle);
        }
        io.sentry.a1 a10 = this.C.a();
        try {
            if (this.f27136i != null && (sentryAndroidOptions = this.f27137o) != null && sentryAndroidOptions.isEnableScreenTracking()) {
                final String a11 = io.sentry.android.core.internal.util.k.a(activity);
                this.f27136i.o(new b4() { // from class: io.sentry.android.core.j
                    @Override // io.sentry.b4
                    public final void a(IScope iScope) {
                        iScope.L(a11);
                    }
                });
            }
            W1(activity);
            final ISpan iSpan = (ISpan) this.f27144v.get(activity);
            final ISpan iSpan2 = (ISpan) this.f27145w.get(activity);
            this.f27141s = true;
            if (this.f27138p && iSpan != null && iSpan2 != null && (f0Var = this.f27142t) != null) {
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
            io.sentry.android.core.performance.b bVar = (io.sentry.android.core.performance.b) this.f27146x.remove(activity);
            if (bVar != null) {
                bVar.a();
            }
            if (this.f27138p) {
                O0(this.f27143u, l8.CANCELLED);
                ISpan iSpan = (ISpan) this.f27144v.get(activity);
                O0(iSpan, l8.DEADLINE_EXCEEDED);
                D0((ISpan) this.f27145w.get(activity), iSpan);
                J();
                a2(activity, true);
                this.f27143u = null;
                this.f27144v.remove(activity);
                this.f27145w.remove(activity);
            }
            this.A.remove(activity);
            if (this.A.isEmpty() && !activity.isChangingConfigurations()) {
                Q();
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
            if (!this.f27140r) {
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
        io.sentry.android.core.performance.b bVar = (io.sentry.android.core.performance.b) this.f27146x.get(activity);
        if (bVar != null) {
            ISpan iSpan = this.f27143u;
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
        io.sentry.android.core.performance.b bVar = (io.sentry.android.core.performance.b) this.f27146x.get(activity);
        if (bVar != null) {
            ISpan iSpan = this.f27143u;
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
        this.f27146x.put(activity, bVar);
        if (this.f27141s) {
            return;
        }
        io.sentry.w0 w0Var = this.f27136i;
        if (w0Var != null) {
            a10 = w0Var.b().getDateProvider().now();
        } else {
            a10 = x.a();
        }
        this.f27147y = a10;
        bVar.g(a10);
    }

    @Override // android.app.Application.ActivityLifecycleCallbacks
    public void onActivityPrePaused(Activity activity) {
        j5 a10;
        this.f27141s = true;
        io.sentry.w0 w0Var = this.f27136i;
        if (w0Var != null) {
            a10 = w0Var.b().getDateProvider().now();
        } else {
            a10 = x.a();
        }
        this.f27147y = a10;
    }

    @Override // android.app.Application.ActivityLifecycleCallbacks
    public void onActivityPreStarted(Activity activity) {
        j5 a10;
        io.sentry.android.core.performance.b bVar = (io.sentry.android.core.performance.b) this.f27146x.get(activity);
        if (bVar != null) {
            SentryAndroidOptions sentryAndroidOptions = this.f27137o;
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
            if (!this.f27140r) {
                onActivityPostStarted(activity);
            }
            if (this.f27138p) {
                final ISpan iSpan = (ISpan) this.f27144v.get(activity);
                final ISpan iSpan2 = (ISpan) this.f27145w.get(activity);
                if (activity.getWindow() != null) {
                    io.sentry.android.core.internal.util.r.d(activity, new Runnable() { // from class: io.sentry.android.core.l
                        @Override // java.lang.Runnable
                        public final void run() {
                            ActivityLifecycleIntegration.this.S1(iSpan2, iSpan);
                        }
                    }, this.f27135e);
                } else {
                    new Handler(Looper.getMainLooper()).post(new Runnable() { // from class: io.sentry.android.core.m
                        @Override // java.lang.Runnable
                        public final void run() {
                            ActivityLifecycleIntegration.this.S1(iSpan2, iSpan);
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
            if (!this.f27140r) {
                onActivityPostCreated(activity, null);
                onActivityPreStarted(activity);
            }
            if (this.f27138p) {
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
