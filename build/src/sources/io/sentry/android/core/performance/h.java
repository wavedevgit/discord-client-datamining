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
    private static long f27389z = SystemClock.uptimeMillis();
    public static final io.sentry.util.a B = new io.sentry.util.a();

    /* renamed from: d  reason: collision with root package name */
    private a f27390d = a.UNKNOWN;

    /* renamed from: s  reason: collision with root package name */
    private f1 f27397s = null;

    /* renamed from: t  reason: collision with root package name */
    private l0 f27398t = null;

    /* renamed from: u  reason: collision with root package name */
    private s8 f27399u = null;

    /* renamed from: v  reason: collision with root package name */
    private boolean f27400v = false;

    /* renamed from: w  reason: collision with root package name */
    private boolean f27401w = true;

    /* renamed from: x  reason: collision with root package name */
    private final AtomicInteger f27402x = new AtomicInteger();

    /* renamed from: y  reason: collision with root package name */
    private final AtomicBoolean f27403y = new AtomicBoolean(false);

    /* renamed from: i  reason: collision with root package name */
    private final i f27392i = new i();

    /* renamed from: o  reason: collision with root package name */
    private final i f27393o = new i();

    /* renamed from: p  reason: collision with root package name */
    private final i f27394p = new i();

    /* renamed from: q  reason: collision with root package name */
    private final Map f27395q = new HashMap();

    /* renamed from: r  reason: collision with root package name */
    private final List f27396r = new ArrayList();

    /* renamed from: e  reason: collision with root package name */
    private boolean f27391e = e1.s();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public enum a {
        UNKNOWN,
        COLD,
        WARM
    }

    public static /* synthetic */ void a(h hVar) {
        if (hVar.f27402x.get() == 0) {
            hVar.f27391e = false;
            f1 f1Var = hVar.f27397s;
            if (f1Var != null && f1Var.isRunning()) {
                hVar.f27397s.close();
                hVar.f27397s = null;
            }
            l0 l0Var = hVar.f27398t;
            if (l0Var != null && l0Var.isRunning()) {
                hVar.f27398t.c(true);
                hVar.f27398t = null;
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
        this.f27396r.add(cVar);
    }

    public i g() {
        i iVar = new i();
        iVar.u("Process Initialization", this.f27392i.j(), this.f27392i.m(), f27389z);
        return iVar;
    }

    public List h() {
        ArrayList arrayList = new ArrayList(this.f27396r);
        Collections.sort(arrayList);
        return arrayList;
    }

    public l0 i() {
        return this.f27398t;
    }

    public f1 j() {
        return this.f27397s;
    }

    public s8 k() {
        return this.f27399u;
    }

    public i l() {
        return this.f27392i;
    }

    public i m(SentryAndroidOptions sentryAndroidOptions) {
        if (this.f27390d != a.UNKNOWN && this.f27391e) {
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
        return this.f27390d;
    }

    public i o() {
        return this.f27394p;
    }

    @Override // android.app.Application.ActivityLifecycleCallbacks
    public void onActivityCreated(Activity activity, Bundle bundle) {
        a aVar;
        io.sentry.android.core.f1.c().d(activity);
        if (this.f27402x.incrementAndGet() == 1 && !this.f27403y.get()) {
            long uptimeMillis = SystemClock.uptimeMillis();
            long m10 = uptimeMillis - this.f27392i.m();
            if (this.f27391e && m10 <= TimeUnit.MINUTES.toMillis(1L)) {
                if (bundle == null) {
                    aVar = a.COLD;
                } else {
                    aVar = a.WARM;
                }
                this.f27390d = aVar;
            } else {
                this.f27390d = a.WARM;
                this.f27401w = true;
                this.f27392i.s();
                this.f27392i.v();
                this.f27392i.t(uptimeMillis);
                f27389z = uptimeMillis;
                this.f27395q.clear();
                this.f27394p.s();
            }
        }
        this.f27391e = true;
    }

    @Override // android.app.Application.ActivityLifecycleCallbacks
    public void onActivityDestroyed(Activity activity) {
        io.sentry.android.core.f1.c().a(activity);
        if (this.f27402x.decrementAndGet() == 0 && !activity.isChangingConfigurations()) {
            this.f27391e = false;
            this.f27401w = true;
            this.f27403y.set(false);
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
        if (this.f27403y.get()) {
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
        ArrayList arrayList = new ArrayList(this.f27395q.values());
        Collections.sort(arrayList);
        return arrayList;
    }

    public i r() {
        return this.f27393o;
    }

    public boolean s() {
        return this.f27391e;
    }

    public void t() {
        this.f27401w = false;
        this.f27395q.clear();
        this.f27396r.clear();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public synchronized void u() {
        if (!this.f27403y.getAndSet(true)) {
            h q10 = q();
            q10.r().w();
            q10.l().w();
        }
    }

    public void v(Application application) {
        if (this.f27400v) {
            return;
        }
        boolean z10 = true;
        this.f27400v = true;
        if (!this.f27391e && !e1.s()) {
            z10 = false;
        }
        this.f27391e = z10;
        application.registerActivityLifecycleCallbacks(A);
        new Handler(Looper.getMainLooper()).post(new Runnable() { // from class: io.sentry.android.core.performance.d
            @Override // java.lang.Runnable
            public final void run() {
                h.this.f();
            }
        });
    }

    public void w(l0 l0Var) {
        this.f27398t = l0Var;
    }

    public void x(f1 f1Var) {
        this.f27397s = f1Var;
    }

    public void y(s8 s8Var) {
        this.f27399u = s8Var;
    }

    public boolean z() {
        if (this.f27401w && this.f27391e) {
            return true;
        }
        return false;
    }
}
