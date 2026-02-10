package io.sentry.android.core.performance;

import android.app.Activity;
import android.app.Application;
import android.os.Bundle;
import android.os.Handler;
import android.os.Looper;
import android.os.SystemClock;
import io.sentry.a1;
import io.sentry.android.core.SentryAndroidOptions;
import io.sentry.android.core.e1;
import io.sentry.android.core.internal.util.r;
import io.sentry.android.core.x0;
import io.sentry.f1;
import io.sentry.i2;
import io.sentry.l0;
import io.sentry.s8;
import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.concurrent.TimeUnit;
import java.util.concurrent.atomic.AtomicBoolean;
import java.util.concurrent.atomic.AtomicInteger;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class h extends io.sentry.android.core.performance.a {
    private static volatile h A;

    /* renamed from: z  reason: collision with root package name */
    private static long f28524z = SystemClock.uptimeMillis();
    public static final io.sentry.util.a B = new io.sentry.util.a();

    /* renamed from: d  reason: collision with root package name */
    private a f28525d = a.UNKNOWN;

    /* renamed from: s  reason: collision with root package name */
    private f1 f28532s = null;

    /* renamed from: t  reason: collision with root package name */
    private l0 f28533t = null;

    /* renamed from: u  reason: collision with root package name */
    private s8 f28534u = null;

    /* renamed from: v  reason: collision with root package name */
    private boolean f28535v = false;

    /* renamed from: w  reason: collision with root package name */
    private boolean f28536w = true;

    /* renamed from: x  reason: collision with root package name */
    private final AtomicInteger f28537x = new AtomicInteger();

    /* renamed from: y  reason: collision with root package name */
    private final AtomicBoolean f28538y = new AtomicBoolean(false);

    /* renamed from: i  reason: collision with root package name */
    private final i f28527i = new i();

    /* renamed from: o  reason: collision with root package name */
    private final i f28528o = new i();

    /* renamed from: p  reason: collision with root package name */
    private final i f28529p = new i();

    /* renamed from: q  reason: collision with root package name */
    private final Map f28530q = new HashMap();

    /* renamed from: r  reason: collision with root package name */
    private final List f28531r = new ArrayList();

    /* renamed from: e  reason: collision with root package name */
    private boolean f28526e = e1.s();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public enum a {
        UNKNOWN,
        COLD,
        WARM
    }

    public static /* synthetic */ void a(h hVar) {
        if (hVar.f28537x.get() == 0) {
            hVar.f28526e = false;
            f1 f1Var = hVar.f28532s;
            if (f1Var != null && f1Var.isRunning()) {
                hVar.f28532s.close();
                hVar.f28532s = null;
            }
            l0 l0Var = hVar.f28533t;
            if (l0Var != null && l0Var.isRunning()) {
                hVar.f28533t.c(true);
                hVar.f28533t = null;
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void f() {
        new Handler(Looper.getMainLooper()).post(new Runnable() { // from class: io.sentry.android.core.performance.g
            @Override // java.lang.Runnable
            public final void run() {
                h.a(h.this);
            }
        });
    }

    public static h q() {
        if (A == null) {
            a1 a10 = B.a();
            try {
                if (A == null) {
                    A = new h();
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
        return A;
    }

    public void e(c cVar) {
        this.f28531r.add(cVar);
    }

    public i g() {
        i iVar = new i();
        iVar.u("Process Initialization", this.f28527i.k(), this.f28527i.m(), f28524z);
        return iVar;
    }

    public List h() {
        ArrayList arrayList = new ArrayList(this.f28531r);
        Collections.sort(arrayList);
        return arrayList;
    }

    public l0 i() {
        return this.f28533t;
    }

    public f1 j() {
        return this.f28532s;
    }

    public s8 k() {
        return this.f28534u;
    }

    public i l() {
        return this.f28527i;
    }

    public i m(SentryAndroidOptions sentryAndroidOptions) {
        if (this.f28525d != a.UNKNOWN && this.f28526e) {
            if (sentryAndroidOptions.isEnablePerformanceV2()) {
                i l10 = l();
                if (l10.q() && l10.e() <= TimeUnit.MINUTES.toMillis(1L)) {
                    return l10;
                }
            }
            i r10 = r();
            if (r10.q() && r10.e() <= TimeUnit.MINUTES.toMillis(1L)) {
                return r10;
            }
        }
        return new i();
    }

    public a n() {
        return this.f28525d;
    }

    public i o() {
        return this.f28529p;
    }

    @Override // android.app.Application.ActivityLifecycleCallbacks
    public void onActivityCreated(Activity activity, Bundle bundle) {
        a aVar;
        io.sentry.android.core.f1.c().d(activity);
        if (this.f28537x.incrementAndGet() == 1 && !this.f28538y.get()) {
            long uptimeMillis = SystemClock.uptimeMillis();
            long m10 = uptimeMillis - this.f28527i.m();
            if (this.f28526e && m10 <= TimeUnit.MINUTES.toMillis(1L)) {
                if (bundle == null) {
                    aVar = a.COLD;
                } else {
                    aVar = a.WARM;
                }
                this.f28525d = aVar;
            } else {
                this.f28525d = a.WARM;
                this.f28536w = true;
                this.f28527i.s();
                this.f28527i.v();
                this.f28527i.t(uptimeMillis);
                f28524z = uptimeMillis;
                this.f28530q.clear();
                this.f28529p.s();
            }
        }
        this.f28526e = true;
    }

    @Override // android.app.Application.ActivityLifecycleCallbacks
    public void onActivityDestroyed(Activity activity) {
        io.sentry.android.core.f1.c().a(activity);
        if (this.f28537x.decrementAndGet() == 0 && !activity.isChangingConfigurations()) {
            this.f28526e = false;
            this.f28536w = true;
            this.f28538y.set(false);
        }
    }

    @Override // android.app.Application.ActivityLifecycleCallbacks
    public void onActivityPaused(Activity activity) {
        io.sentry.android.core.f1.c().a(activity);
    }

    @Override // android.app.Application.ActivityLifecycleCallbacks
    public void onActivityResumed(Activity activity) {
        io.sentry.android.core.f1.c().d(activity);
    }

    @Override // android.app.Application.ActivityLifecycleCallbacks
    public void onActivityStarted(Activity activity) {
        io.sentry.android.core.f1.c().d(activity);
        if (this.f28538y.get()) {
            return;
        }
        if (activity.getWindow() != null) {
            r.d(activity, new Runnable() { // from class: io.sentry.android.core.performance.e
                @Override // java.lang.Runnable
                public final void run() {
                    h.this.u();
                }
            }, new x0(i2.e()));
        } else {
            new Handler(Looper.getMainLooper()).post(new Runnable() { // from class: io.sentry.android.core.performance.f
                @Override // java.lang.Runnable
                public final void run() {
                    h.this.u();
                }
            });
        }
    }

    @Override // android.app.Application.ActivityLifecycleCallbacks
    public void onActivityStopped(Activity activity) {
        io.sentry.android.core.f1.c().a(activity);
    }

    public List p() {
        ArrayList arrayList = new ArrayList(this.f28530q.values());
        Collections.sort(arrayList);
        return arrayList;
    }

    public i r() {
        return this.f28528o;
    }

    public boolean s() {
        return this.f28526e;
    }

    public void t() {
        this.f28536w = false;
        this.f28530q.clear();
        this.f28531r.clear();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public synchronized void u() {
        if (!this.f28538y.getAndSet(true)) {
            h q10 = q();
            q10.r().w();
            q10.l().w();
        }
    }

    public void v(Application application) {
        if (this.f28535v) {
            return;
        }
        boolean z10 = true;
        this.f28535v = true;
        if (!this.f28526e && !e1.s()) {
            z10 = false;
        }
        this.f28526e = z10;
        application.registerActivityLifecycleCallbacks(A);
        new Handler(Looper.getMainLooper()).post(new Runnable() { // from class: io.sentry.android.core.performance.d
            @Override // java.lang.Runnable
            public final void run() {
                h.this.f();
            }
        });
    }

    public void w(l0 l0Var) {
        this.f28533t = l0Var;
    }

    public void x(f1 f1Var) {
        this.f28532s = f1Var;
    }

    public void y(s8 s8Var) {
        this.f28534u = s8Var;
    }

    public boolean z() {
        if (this.f28536w && this.f28526e) {
            return true;
        }
        return false;
    }
}
