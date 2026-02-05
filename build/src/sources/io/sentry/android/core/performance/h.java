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
    private static long f28197z = SystemClock.uptimeMillis();
    public static final io.sentry.util.a B = new io.sentry.util.a();

    /* renamed from: d  reason: collision with root package name */
    private a f28198d = a.UNKNOWN;

    /* renamed from: s  reason: collision with root package name */
    private f1 f28205s = null;

    /* renamed from: t  reason: collision with root package name */
    private l0 f28206t = null;

    /* renamed from: u  reason: collision with root package name */
    private s8 f28207u = null;

    /* renamed from: v  reason: collision with root package name */
    private boolean f28208v = false;

    /* renamed from: w  reason: collision with root package name */
    private boolean f28209w = true;

    /* renamed from: x  reason: collision with root package name */
    private final AtomicInteger f28210x = new AtomicInteger();

    /* renamed from: y  reason: collision with root package name */
    private final AtomicBoolean f28211y = new AtomicBoolean(false);

    /* renamed from: i  reason: collision with root package name */
    private final i f28200i = new i();

    /* renamed from: o  reason: collision with root package name */
    private final i f28201o = new i();

    /* renamed from: p  reason: collision with root package name */
    private final i f28202p = new i();

    /* renamed from: q  reason: collision with root package name */
    private final Map f28203q = new HashMap();

    /* renamed from: r  reason: collision with root package name */
    private final List f28204r = new ArrayList();

    /* renamed from: e  reason: collision with root package name */
    private boolean f28199e = e1.s();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public enum a {
        UNKNOWN,
        COLD,
        WARM
    }

    public static /* synthetic */ void a(h hVar) {
        if (hVar.f28210x.get() == 0) {
            hVar.f28199e = false;
            f1 f1Var = hVar.f28205s;
            if (f1Var != null && f1Var.isRunning()) {
                hVar.f28205s.close();
                hVar.f28205s = null;
            }
            l0 l0Var = hVar.f28206t;
            if (l0Var != null && l0Var.isRunning()) {
                hVar.f28206t.c(true);
                hVar.f28206t = null;
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
        this.f28204r.add(cVar);
    }

    public i g() {
        i iVar = new i();
        iVar.u("Process Initialization", this.f28200i.k(), this.f28200i.m(), f28197z);
        return iVar;
    }

    public List h() {
        ArrayList arrayList = new ArrayList(this.f28204r);
        Collections.sort(arrayList);
        return arrayList;
    }

    public l0 i() {
        return this.f28206t;
    }

    public f1 j() {
        return this.f28205s;
    }

    public s8 k() {
        return this.f28207u;
    }

    public i l() {
        return this.f28200i;
    }

    public i m(SentryAndroidOptions sentryAndroidOptions) {
        if (this.f28198d != a.UNKNOWN && this.f28199e) {
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
        return this.f28198d;
    }

    public i o() {
        return this.f28202p;
    }

    @Override // android.app.Application.ActivityLifecycleCallbacks
    public void onActivityCreated(Activity activity, Bundle bundle) {
        a aVar;
        io.sentry.android.core.f1.c().d(activity);
        if (this.f28210x.incrementAndGet() == 1 && !this.f28211y.get()) {
            long uptimeMillis = SystemClock.uptimeMillis();
            long m10 = uptimeMillis - this.f28200i.m();
            if (this.f28199e && m10 <= TimeUnit.MINUTES.toMillis(1L)) {
                if (bundle == null) {
                    aVar = a.COLD;
                } else {
                    aVar = a.WARM;
                }
                this.f28198d = aVar;
            } else {
                this.f28198d = a.WARM;
                this.f28209w = true;
                this.f28200i.s();
                this.f28200i.v();
                this.f28200i.t(uptimeMillis);
                f28197z = uptimeMillis;
                this.f28203q.clear();
                this.f28202p.s();
            }
        }
        this.f28199e = true;
    }

    @Override // android.app.Application.ActivityLifecycleCallbacks
    public void onActivityDestroyed(Activity activity) {
        io.sentry.android.core.f1.c().a(activity);
        if (this.f28210x.decrementAndGet() == 0 && !activity.isChangingConfigurations()) {
            this.f28199e = false;
            this.f28209w = true;
            this.f28211y.set(false);
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
        if (this.f28211y.get()) {
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
        ArrayList arrayList = new ArrayList(this.f28203q.values());
        Collections.sort(arrayList);
        return arrayList;
    }

    public i r() {
        return this.f28201o;
    }

    public boolean s() {
        return this.f28199e;
    }

    public void t() {
        this.f28209w = false;
        this.f28203q.clear();
        this.f28204r.clear();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public synchronized void u() {
        if (!this.f28211y.getAndSet(true)) {
            h q10 = q();
            q10.r().w();
            q10.l().w();
        }
    }

    public void v(Application application) {
        if (this.f28208v) {
            return;
        }
        boolean z10 = true;
        this.f28208v = true;
        if (!this.f28199e && !e1.s()) {
            z10 = false;
        }
        this.f28199e = z10;
        application.registerActivityLifecycleCallbacks(A);
        new Handler(Looper.getMainLooper()).post(new Runnable() { // from class: io.sentry.android.core.performance.d
            @Override // java.lang.Runnable
            public final void run() {
                h.this.f();
            }
        });
    }

    public void w(l0 l0Var) {
        this.f28206t = l0Var;
    }

    public void x(f1 f1Var) {
        this.f28205s = f1Var;
    }

    public void y(s8 s8Var) {
        this.f28207u = s8Var;
    }

    public boolean z() {
        if (this.f28209w && this.f28199e) {
            return true;
        }
        return false;
    }
}
