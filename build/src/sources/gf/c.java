package gf;

import android.app.Activity;
import android.app.ActivityManager;
import android.app.Application;
import android.content.ComponentCallbacks2;
import android.content.res.Configuration;
import android.os.Bundle;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.concurrent.atomic.AtomicBoolean;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class c implements Application.ActivityLifecycleCallbacks, ComponentCallbacks2 {

    /* renamed from: p  reason: collision with root package name */
    private static final c f24272p = new c();

    /* renamed from: d  reason: collision with root package name */
    private final AtomicBoolean f24273d = new AtomicBoolean();

    /* renamed from: e  reason: collision with root package name */
    private final AtomicBoolean f24274e = new AtomicBoolean();

    /* renamed from: i  reason: collision with root package name */
    private final ArrayList f24275i = new ArrayList();

    /* renamed from: o  reason: collision with root package name */
    private boolean f24276o = false;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface a {
        void a(boolean z10);
    }

    private c() {
    }

    public static c b() {
        return f24272p;
    }

    public static void c(Application application) {
        c cVar = f24272p;
        synchronized (cVar) {
            try {
                if (!cVar.f24276o) {
                    application.registerActivityLifecycleCallbacks(cVar);
                    application.registerComponentCallbacks(cVar);
                    cVar.f24276o = true;
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    private final void f(boolean z10) {
        synchronized (f24272p) {
            try {
                Iterator it = this.f24275i.iterator();
                while (it.hasNext()) {
                    ((a) it.next()).a(z10);
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    public void a(a aVar) {
        synchronized (f24272p) {
            this.f24275i.add(aVar);
        }
    }

    public boolean d() {
        return this.f24273d.get();
    }

    public boolean e(boolean z10) {
        AtomicBoolean atomicBoolean = this.f24274e;
        if (!atomicBoolean.get()) {
            if (!com.google.android.gms.common.util.l.b()) {
                ActivityManager.RunningAppProcessInfo runningAppProcessInfo = new ActivityManager.RunningAppProcessInfo();
                ActivityManager.getMyMemoryState(runningAppProcessInfo);
                if (!atomicBoolean.getAndSet(true) && runningAppProcessInfo.importance > 100) {
                    this.f24273d.set(true);
                }
            } else {
                return z10;
            }
        }
        return d();
    }

    @Override // android.app.Application.ActivityLifecycleCallbacks
    public final void onActivityCreated(Activity activity, Bundle bundle) {
        AtomicBoolean atomicBoolean = this.f24274e;
        boolean compareAndSet = this.f24273d.compareAndSet(true, false);
        atomicBoolean.set(true);
        if (compareAndSet) {
            f(false);
        }
    }

    @Override // android.app.Application.ActivityLifecycleCallbacks
    public final void onActivityResumed(Activity activity) {
        AtomicBoolean atomicBoolean = this.f24274e;
        boolean compareAndSet = this.f24273d.compareAndSet(true, false);
        atomicBoolean.set(true);
        if (compareAndSet) {
            f(false);
        }
    }

    @Override // android.content.ComponentCallbacks2
    public final void onTrimMemory(int i10) {
        if (i10 == 20 && this.f24273d.compareAndSet(false, true)) {
            this.f24274e.set(true);
            f(true);
        }
    }

    @Override // android.content.ComponentCallbacks
    public final void onLowMemory() {
    }

    @Override // android.app.Application.ActivityLifecycleCallbacks
    public final void onActivityDestroyed(Activity activity) {
    }

    @Override // android.app.Application.ActivityLifecycleCallbacks
    public final void onActivityPaused(Activity activity) {
    }

    @Override // android.app.Application.ActivityLifecycleCallbacks
    public final void onActivityStarted(Activity activity) {
    }

    @Override // android.app.Application.ActivityLifecycleCallbacks
    public final void onActivityStopped(Activity activity) {
    }

    @Override // android.content.ComponentCallbacks
    public final void onConfigurationChanged(Configuration configuration) {
    }

    @Override // android.app.Application.ActivityLifecycleCallbacks
    public final void onActivitySaveInstanceState(Activity activity, Bundle bundle) {
    }
}
