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
    private final Application f28684d;

    /* renamed from: e  reason: collision with root package name */
    private final x0 f28685e;

    /* renamed from: i  reason: collision with root package name */
    private io.sentry.w0 f28686i;

    /* renamed from: o  reason: collision with root package name */
    private SentryAndroidOptions f28687o;

    /* renamed from: r  reason: collision with root package name */
    private boolean f28690r;

    /* renamed from: u  reason: collision with root package name */
    private ISpan f28693u;

    /* renamed from: p  reason: collision with root package name */
    private boolean f28688p = false;

    /* renamed from: q  reason: collision with root package name */
    private boolean f28689q = false;

    /* renamed from: s  reason: collision with root package name */
    private boolean f28691s = false;

    /* renamed from: t  reason: collision with root package name */
    private io.sentry.f0 f28692t = null;

    /* renamed from: v  reason: collision with root package name */
    private final WeakHashMap f28694v = new WeakHashMap();

    /* renamed from: w  reason: collision with root package name */
    private final WeakHashMap f28695w = new WeakHashMap();

    /* renamed from: x  reason: collision with root package name */
    private final WeakHashMap f28696x = new WeakHashMap();

    /* renamed from: y  reason: collision with root package name */
    private j5 f28697y = new c7(new Date(0), 0);

    /* renamed from: z  reason: collision with root package name */
    private Future f28698z = null;
    private final WeakHashMap A = new WeakHashMap();
    private final io.sentry.util.a C = new io.sentry.util.a();
    private boolean D = false;
    private final io.sentry.util.a E = new io.sentry.util.a();

    public ActivityLifecycleIntegration(Application application, x0 x0Var, i iVar) {
        this.f28684d = (Application) io.sentry.util.y.c(application, "Application is required");
        this.f28685e = (x0) io.sentry.util.y.c(x0Var, "BuildInfoProvider is required");
        this.B = (i) io.sentry.util.y.c(iVar, "ActivityFramesTracker is required");
        if (x0Var.d() >= 29) {
            this.f28690r = true;
        }
    }

    private void A0() {
        Future future = this.f28698z;
        if (future != null) {
            future.cancel(false);
            this.f28698z = null;
        }
    }

    private String A1(String str) {
        return str + " initial display";
    }

    private boolean B1(SentryAndroidOptions sentryAndroidOptions) {
        if (sentryAndroidOptions.isTracingEnabled() && sentryAndroidOptions.isEnableAutoActivityLifecycleTracing()) {
            return true;
        }
        return false;
    }

    private void C0() {
        this.f28691s = false;
        this.f28697y = new c7(new Date(0L), 0L);
        this.f28696x.clear();
    }

    private void E0() {
        j5 f10 = io.sentry.android.core.performance.h.q().m(this.f28687o).f();
        if (this.f28688p && f10 != null) {
            J0(this.f28693u, f10);
        }
    }

    private boolean E1(Activity activity) {
        return this.A.containsKey(activity);
    }

    public static /* synthetic */ void F(ActivityLifecycleIntegration activityLifecycleIntegration, WeakReference weakReference, String str, io.sentry.e1 e1Var) {
        activityLifecycleIntegration.getClass();
        Activity activity = (Activity) weakReference.get();
        if (activity != null) {
            activityLifecycleIntegration.B.k(activity, e1Var.f());
            return;
        }
        SentryAndroidOptions sentryAndroidOptions = activityLifecycleIntegration.f28687o;
        if (sentryAndroidOptions != null) {
            sentryAndroidOptions.getLogger().c(SentryLevel.WARNING, "Unable to track activity frames as the Activity %s has been destroyed.", str);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void F0(ISpan iSpan, ISpan iSpan2) {
        j5 j5Var;
        if (iSpan != null && !iSpan.isFinished()) {
            iSpan.e(x1(iSpan));
            if (iSpan2 != null) {
                j5Var = iSpan2.r();
            } else {
                j5Var = null;
            }
            if (j5Var == null) {
                j5Var = iSpan.t();
            }
            M0(iSpan, j5Var, l8.DEADLINE_EXCEEDED);
        }
    }

    private void I0(ISpan iSpan) {
        if (iSpan != null && !iSpan.isFinished()) {
            iSpan.d();
        }
    }

    private void J0(ISpan iSpan, j5 j5Var) {
        M0(iSpan, j5Var, null);
    }

    public static /* synthetic */ void L(io.sentry.e1 e1Var, IScope iScope, io.sentry.e1 e1Var2) {
        if (e1Var2 == e1Var) {
            iScope.E();
        }
    }

    private void M0(ISpan iSpan, j5 j5Var, l8 l8Var) {
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

    private void R0(ISpan iSpan, l8 l8Var) {
        if (iSpan != null && !iSpan.isFinished()) {
            iSpan.k(l8Var);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void U1(ISpan iSpan, ISpan iSpan2) {
        io.sentry.android.core.performance.h q10 = io.sentry.android.core.performance.h.q();
        io.sentry.android.core.performance.i l10 = q10.l();
        io.sentry.android.core.performance.i r10 = q10.r();
        if (l10.q() && l10.p()) {
            l10.w();
        }
        if (r10.q() && r10.p()) {
            r10.w();
        }
        E0();
        io.sentry.a1 a10 = this.E.a();
        try {
            SentryAndroidOptions sentryAndroidOptions = this.f28687o;
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

    private void V0(final io.sentry.e1 e1Var, ISpan iSpan, ISpan iSpan2) {
        if (e1Var != null && !e1Var.isFinished()) {
            R0(iSpan, l8.DEADLINE_EXCEEDED);
            F0(iSpan2, iSpan);
            A0();
            l8 a10 = e1Var.a();
            if (a10 == null) {
                a10 = l8.OK;
            }
            e1Var.k(a10);
            io.sentry.w0 w0Var = this.f28686i;
            if (w0Var != null) {
                w0Var.o(new b4() { // from class: io.sentry.android.core.n
                    @Override // io.sentry.b4
                    public final void a(IScope iScope) {
                        ActivityLifecycleIntegration.this.D0(iScope, e1Var);
                    }
                });
            }
        }
    }

    private void W1(k8 k8Var) {
        k8Var.g("auto.ui.activity");
    }

    private String Y0(Activity activity) {
        return activity.getClass().getSimpleName();
    }

    private void Y1(Activity activity) {
        Boolean bool;
        j5 j5Var;
        Long valueOf;
        j5 j5Var2;
        final io.sentry.e1 e1Var;
        k8 k8Var;
        boolean z10;
        final WeakReference weakReference = new WeakReference(activity);
        if (this.f28686i != null && !E1(activity)) {
            if (!this.f28688p) {
                this.A.put(activity, a3.u());
                if (this.f28687o.isEnableAutoTraceIdGeneration()) {
                    io.sentry.util.j0.h(this.f28686i);
                    return;
                }
                return;
            }
            b2();
            final String Y0 = Y0(activity);
            io.sentry.android.core.performance.i m10 = io.sentry.android.core.performance.h.q().m(this.f28687o);
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
            long deadlineTimeout = this.f28687o.getDeadlineTimeout();
            if (deadlineTimeout <= 0) {
                valueOf = null;
            } else {
                valueOf = Long.valueOf(deadlineTimeout);
            }
            v8Var.s(valueOf);
            if (this.f28687o.isEnableActivityLifecycleTracingAutoFinish()) {
                v8Var.t(this.f28687o.getIdleTimeout());
                v8Var.i(true);
            }
            v8Var.v(true);
            v8Var.u(new u8() { // from class: io.sentry.android.core.p
                @Override // io.sentry.u8
                public final void a(io.sentry.e1 e1Var2) {
                    ActivityLifecycleIntegration.F(ActivityLifecycleIntegration.this, weakReference, Y0, e1Var2);
                }
            });
            if (!this.f28691s && j5Var != null && bool != null) {
                s8 k10 = io.sentry.android.core.performance.h.q().k();
                io.sentry.android.core.performance.h.q().y(null);
                s8Var = k10;
                j5Var2 = j5Var;
            } else {
                j5Var2 = this.f28697y;
            }
            v8Var.h(j5Var2);
            if (s8Var != null) {
                z11 = true;
            }
            v8Var.r(z11);
            W1(v8Var);
            io.sentry.e1 z12 = this.f28686i.z(new t8(Y0, io.sentry.protocol.g0.COMPONENT, "ui.load", s8Var), v8Var);
            k8 k8Var2 = new k8();
            W1(k8Var2);
            if (!this.f28691s && j5Var != null && bool != null) {
                e1Var = z12;
                k8Var = k8Var2;
                this.f28693u = e1Var.o(e1(bool.booleanValue()), Z0(bool.booleanValue()), j5Var, io.sentry.j1.SENTRY, k8Var2);
                E0();
            } else {
                e1Var = z12;
                k8Var = k8Var2;
            }
            String A1 = A1(Y0);
            io.sentry.j1 j1Var = io.sentry.j1.SENTRY;
            j5 j5Var3 = j5Var2;
            final ISpan o10 = e1Var.o("ui.load.initial_display", A1, j5Var3, j1Var, k8Var);
            this.f28694v.put(activity, o10);
            if (this.f28689q && this.f28692t != null && this.f28687o != null) {
                final ISpan o11 = e1Var.o("ui.load.full_display", y1(Y0), j5Var3, j1Var, k8Var);
                try {
                    this.f28695w.put(activity, o11);
                    this.f28698z = this.f28687o.getExecutorService().c(new Runnable() { // from class: io.sentry.android.core.q
                        @Override // java.lang.Runnable
                        public final void run() {
                            ActivityLifecycleIntegration.this.F0(o11, o10);
                        }
                    }, 25000L);
                } catch (RejectedExecutionException e10) {
                    this.f28687o.getLogger().b(SentryLevel.ERROR, "Failed to call the executor. Time to full display span will not be finished automatically. Did you call Sentry.close()?", e10);
                }
            }
            this.f28686i.o(new b4() { // from class: io.sentry.android.core.r
                @Override // io.sentry.b4
                public final void a(IScope iScope) {
                    ActivityLifecycleIntegration.this.V(iScope, e1Var);
                }
            });
            this.A.put(activity, e1Var);
        }
    }

    private String Z0(boolean z10) {
        if (z10) {
            return "Cold Start";
        }
        return "Warm Start";
    }

    private void b2() {
        for (Map.Entry entry : this.A.entrySet()) {
            V0((io.sentry.e1) entry.getValue(), (ISpan) this.f28694v.get(entry.getKey()), (ISpan) this.f28695w.get(entry.getKey()));
        }
    }

    private void c2(Activity activity, boolean z10) {
        if (this.f28688p && z10) {
            V0((io.sentry.e1) this.A.get(activity), null, null);
        }
    }

    private String e1(boolean z10) {
        if (z10) {
            return "app.start.cold";
        }
        return "app.start.warm";
    }

    public static /* synthetic */ void x(ActivityLifecycleIntegration activityLifecycleIntegration, IScope iScope, io.sentry.e1 e1Var, io.sentry.e1 e1Var2) {
        if (e1Var2 == null) {
            activityLifecycleIntegration.getClass();
            iScope.A(e1Var);
            return;
        }
        SentryAndroidOptions sentryAndroidOptions = activityLifecycleIntegration.f28687o;
        if (sentryAndroidOptions != null) {
            sentryAndroidOptions.getLogger().c(SentryLevel.DEBUG, "Transaction '%s' won't be bound to the Scope since there's one already in there.", e1Var.getName());
        }
    }

    private String x1(ISpan iSpan) {
        String description = iSpan.getDescription();
        if (description != null && description.endsWith(" - Deadline Exceeded")) {
            return description;
        }
        return iSpan.getDescription() + " - Deadline Exceeded";
    }

    private String y1(String str) {
        return str + " full display";
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void D0(final IScope iScope, final io.sentry.e1 e1Var) {
        iScope.R(new z3.c() { // from class: io.sentry.android.core.o
            @Override // io.sentry.z3.c
            public final void a(io.sentry.e1 e1Var2) {
                ActivityLifecycleIntegration.L(io.sentry.e1.this, iScope, e1Var2);
            }
        });
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void V(final IScope iScope, final io.sentry.e1 e1Var) {
        iScope.R(new z3.c() { // from class: io.sentry.android.core.s
            @Override // io.sentry.z3.c
            public final void a(io.sentry.e1 e1Var2) {
                ActivityLifecycleIntegration.x(ActivityLifecycleIntegration.this, iScope, e1Var, e1Var2);
            }
        });
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        this.f28684d.unregisterActivityLifecycleCallbacks(this);
        SentryAndroidOptions sentryAndroidOptions = this.f28687o;
        if (sentryAndroidOptions != null) {
            sentryAndroidOptions.getLogger().c(SentryLevel.DEBUG, "ActivityLifecycleIntegration removed.", new Object[0]);
        }
        this.B.m();
    }

    @Override // io.sentry.k1
    public void h(io.sentry.w0 w0Var, k7 k7Var) {
        SentryAndroidOptions sentryAndroidOptions;
        if (k7Var instanceof SentryAndroidOptions) {
            sentryAndroidOptions = (SentryAndroidOptions) k7Var;
        } else {
            sentryAndroidOptions = null;
        }
        this.f28687o = (SentryAndroidOptions) io.sentry.util.y.c(sentryAndroidOptions, "SentryAndroidOptions is required");
        this.f28686i = (io.sentry.w0) io.sentry.util.y.c(w0Var, "Scopes are required");
        this.f28688p = B1(this.f28687o);
        this.f28692t = this.f28687o.getFullyDisplayedReporter();
        this.f28689q = this.f28687o.isEnableTimeToFullDisplayTracing();
        this.f28684d.registerActivityLifecycleCallbacks(this);
        this.f28687o.getLogger().c(SentryLevel.DEBUG, "ActivityLifecycleIntegration installed.", new Object[0]);
        io.sentry.util.p.a("ActivityLifecycle");
    }

    @Override // android.app.Application.ActivityLifecycleCallbacks
    public void onActivityCreated(Activity activity, Bundle bundle) {
        io.sentry.f0 f0Var;
        SentryAndroidOptions sentryAndroidOptions;
        if (!this.f28690r) {
            onActivityPreCreated(activity, bundle);
        }
        io.sentry.a1 a10 = this.C.a();
        try {
            if (this.f28686i != null && (sentryAndroidOptions = this.f28687o) != null && sentryAndroidOptions.isEnableScreenTracking()) {
                final String a11 = io.sentry.android.core.internal.util.k.a(activity);
                this.f28686i.o(new b4() { // from class: io.sentry.android.core.j
                    @Override // io.sentry.b4
                    public final void a(IScope iScope) {
                        iScope.L(a11);
                    }
                });
            }
            Y1(activity);
            final ISpan iSpan = (ISpan) this.f28694v.get(activity);
            final ISpan iSpan2 = (ISpan) this.f28695w.get(activity);
            this.f28691s = true;
            if (this.f28688p && iSpan != null && iSpan2 != null && (f0Var = this.f28692t) != null) {
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
            io.sentry.android.core.performance.b bVar = (io.sentry.android.core.performance.b) this.f28696x.remove(activity);
            if (bVar != null) {
                bVar.a();
            }
            if (this.f28688p) {
                R0(this.f28693u, l8.CANCELLED);
                ISpan iSpan = (ISpan) this.f28694v.get(activity);
                R0(iSpan, l8.DEADLINE_EXCEEDED);
                F0((ISpan) this.f28695w.get(activity), iSpan);
                A0();
                c2(activity, true);
                this.f28693u = null;
                this.f28694v.remove(activity);
                this.f28695w.remove(activity);
            }
            this.A.remove(activity);
            if (this.A.isEmpty() && !activity.isChangingConfigurations()) {
                C0();
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
            if (!this.f28690r) {
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
        io.sentry.android.core.performance.b bVar = (io.sentry.android.core.performance.b) this.f28696x.get(activity);
        if (bVar != null) {
            ISpan iSpan = this.f28693u;
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
        io.sentry.android.core.performance.b bVar = (io.sentry.android.core.performance.b) this.f28696x.get(activity);
        if (bVar != null) {
            ISpan iSpan = this.f28693u;
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
        this.f28696x.put(activity, bVar);
        if (this.f28691s) {
            return;
        }
        io.sentry.w0 w0Var = this.f28686i;
        if (w0Var != null) {
            a10 = w0Var.b().getDateProvider().now();
        } else {
            a10 = x.a();
        }
        this.f28697y = a10;
        bVar.g(a10);
    }

    @Override // android.app.Application.ActivityLifecycleCallbacks
    public void onActivityPrePaused(Activity activity) {
        j5 a10;
        this.f28691s = true;
        io.sentry.w0 w0Var = this.f28686i;
        if (w0Var != null) {
            a10 = w0Var.b().getDateProvider().now();
        } else {
            a10 = x.a();
        }
        this.f28697y = a10;
    }

    @Override // android.app.Application.ActivityLifecycleCallbacks
    public void onActivityPreStarted(Activity activity) {
        j5 a10;
        io.sentry.android.core.performance.b bVar = (io.sentry.android.core.performance.b) this.f28696x.get(activity);
        if (bVar != null) {
            SentryAndroidOptions sentryAndroidOptions = this.f28687o;
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
            if (!this.f28690r) {
                onActivityPostStarted(activity);
            }
            if (this.f28688p) {
                final ISpan iSpan = (ISpan) this.f28694v.get(activity);
                final ISpan iSpan2 = (ISpan) this.f28695w.get(activity);
                if (activity.getWindow() != null) {
                    io.sentry.android.core.internal.util.r.d(activity, new Runnable() { // from class: io.sentry.android.core.l
                        @Override // java.lang.Runnable
                        public final void run() {
                            ActivityLifecycleIntegration.this.U1(iSpan2, iSpan);
                        }
                    }, this.f28685e);
                } else {
                    new Handler(Looper.getMainLooper()).post(new Runnable() { // from class: io.sentry.android.core.m
                        @Override // java.lang.Runnable
                        public final void run() {
                            ActivityLifecycleIntegration.this.U1(iSpan2, iSpan);
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
            if (!this.f28690r) {
                onActivityPostCreated(activity, null);
                onActivityPreStarted(activity);
            }
            if (this.f28688p) {
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
