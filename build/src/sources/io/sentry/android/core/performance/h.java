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
    private static long f29139z = SystemClock.uptimeMillis();
    public static final io.sentry.util.a B = new io.sentry.util.a();

    /* renamed from: d  reason: collision with root package name */
    private a f29140d = a.UNKNOWN;

    /* renamed from: s  reason: collision with root package name */
    private f1 f29147s = null;

    /* renamed from: t  reason: collision with root package name */
    private l0 f29148t = null;

    /* renamed from: u  reason: collision with root package name */
    private s8 f29149u = null;

    /* renamed from: v  reason: collision with root package name */
    private boolean f29150v = false;

    /* renamed from: w  reason: collision with root package name */
    private boolean f29151w = true;

    /* renamed from: x  reason: collision with root package name */
    private final AtomicInteger f29152x = new AtomicInteger();

    /* renamed from: y  reason: collision with root package name */
    private final AtomicBoolean f29153y = new AtomicBoolean(false);

    /* renamed from: i  reason: collision with root package name */
    private final i f29142i = new i();

    /* renamed from: o  reason: collision with root package name */
    private final i f29143o = new i();

    /* renamed from: p  reason: collision with root package name */
    private final i f29144p = new i();

    /* renamed from: q  reason: collision with root package name */
    private final Map f29145q = new HashMap();

    /* renamed from: r  reason: collision with root package name */
    private final List f29146r = new ArrayList();

    /* renamed from: e  reason: collision with root package name */
    private boolean f29141e = e1.s();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public enum a {
        UNKNOWN,
        COLD,
        WARM
    }

    public static /* synthetic */ void a(h hVar) {
        if (hVar.f29152x.get() == 0) {
            hVar.f29141e = false;
            f1 f1Var = hVar.f29147s;
            if (f1Var != null && f1Var.isRunning()) {
                hVar.f29147s.close();
                hVar.f29147s = null;
            }
            l0 l0Var = hVar.f29148t;
            if (l0Var != null && l0Var.isRunning()) {
                hVar.f29148t.c(true);
                hVar.f29148t = null;
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
        this.f29146r.add(cVar);
    }

    public i g() {
        i iVar = new i();
        iVar.u("Process Initialization", this.f29142i.j(), this.f29142i.l(), f29139z);
        return iVar;
    }

    public List h() {
        ArrayList arrayList = new ArrayList(this.f29146r);
        Collections.sort(arrayList);
        return arrayList;
    }

    public l0 i() {
        return this.f29148t;
    }

    public f1 j() {
        return this.f29147s;
    }

    public s8 k() {
        return this.f29149u;
    }

    public i l() {
        return this.f29142i;
    }

    public i m(SentryAndroidOptions sentryAndroidOptions) {
        if (this.f29140d != a.UNKNOWN && this.f29141e) {
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
        return this.f29140d;
    }

    public i o() {
        return this.f29144p;
    }

    @Override // android.app.Application.ActivityLifecycleCallbacks
    public void onActivityCreated(Activity activity, Bundle bundle) {
        a aVar;
        io.sentry.android.core.f1.c().d(activity);
        if (this.f29152x.incrementAndGet() == 1 && !this.f29153y.get()) {
            long uptimeMillis = SystemClock.uptimeMillis();
            long l10 = uptimeMillis - this.f29142i.l();
            if (this.f29141e && l10 <= TimeUnit.MINUTES.toMillis(1L)) {
                if (bundle == null) {
                    aVar = a.COLD;
                } else {
                    aVar = a.WARM;
                }
                this.f29140d = aVar;
            } else {
                this.f29140d = a.WARM;
                this.f29151w = true;
                this.f29142i.s();
                this.f29142i.v();
                this.f29142i.t(uptimeMillis);
                f29139z = uptimeMillis;
                this.f29145q.clear();
                this.f29144p.s();
            }
        }
        this.f29141e = true;
    }

    @Override // android.app.Application.ActivityLifecycleCallbacks
    public void onActivityDestroyed(Activity activity) {
        io.sentry.android.core.f1.c().a(activity);
        if (this.f29152x.decrementAndGet() == 0 && !activity.isChangingConfigurations()) {
            this.f29141e = false;
            this.f29151w = true;
            this.f29153y.set(false);
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
        if (this.f29153y.get()) {
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
        ArrayList arrayList = new ArrayList(this.f29145q.values());
        Collections.sort(arrayList);
        return arrayList;
    }

    public i r() {
        return this.f29143o;
    }

    public boolean s() {
        return this.f29141e;
    }

    public void t() {
        this.f29151w = false;
        this.f29145q.clear();
        this.f29146r.clear();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public synchronized void u() {
        if (!this.f29153y.getAndSet(true)) {
            h q10 = q();
            q10.r().w();
            q10.l().w();
        }
    }

    public void v(Application application) {
        if (this.f29150v) {
            return;
        }
        boolean z10 = true;
        this.f29150v = true;
        if (!this.f29141e && !e1.s()) {
            z10 = false;
        }
        this.f29141e = z10;
        application.registerActivityLifecycleCallbacks(A);
        new Handler(Looper.getMainLooper()).post(new Runnable() { // from class: io.sentry.android.core.performance.d
            @Override // java.lang.Runnable
            public final void run() {
                h.this.f();
            }
        });
    }

    public void w(l0 l0Var) {
        this.f29148t = l0Var;
    }

    public void x(f1 f1Var) {
        this.f29147s = f1Var;
    }

    public void y(s8 s8Var) {
        this.f29149u = s8Var;
    }

    public boolean z() {
        if (this.f29151w && this.f29141e) {
            return true;
        }
        return false;
    }
}
