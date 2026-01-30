package io.sentry.android.core;

import android.app.Activity;
import android.app.Application;
import android.os.Bundle;
import io.sentry.Breadcrumb;
import io.sentry.Hint;
import io.sentry.ILogger;
import io.sentry.SentryLevel;
import io.sentry.k7;
import java.io.Closeable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class ActivityBreadcrumbsIntegration implements io.sentry.k1, Closeable, Application.ActivityLifecycleCallbacks {

    /* renamed from: d  reason: collision with root package name */
    private final Application f28753d;

    /* renamed from: e  reason: collision with root package name */
    private io.sentry.w0 f28754e;

    /* renamed from: i  reason: collision with root package name */
    private boolean f28755i;

    /* renamed from: o  reason: collision with root package name */
    private final io.sentry.util.a f28756o = new io.sentry.util.a();

    public ActivityBreadcrumbsIntegration(Application application) {
        this.f28753d = (Application) io.sentry.util.y.c(application, "Application is required");
    }

    private void a(Activity activity, String str) {
        if (this.f28754e == null) {
            return;
        }
        Breadcrumb breadcrumb = new Breadcrumb();
        breadcrumb.E("navigation");
        breadcrumb.A("state", str);
        breadcrumb.A("screen", l(activity));
        breadcrumb.z("ui.lifecycle");
        breadcrumb.B(SentryLevel.INFO);
        Hint hint = new Hint();
        hint.k("android:activity", activity);
        this.f28754e.g(breadcrumb, hint);
    }

    private String l(Activity activity) {
        return activity.getClass().getSimpleName();
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        if (this.f28755i) {
            this.f28753d.unregisterActivityLifecycleCallbacks(this);
            io.sentry.w0 w0Var = this.f28754e;
            if (w0Var != null) {
                w0Var.b().getLogger().c(SentryLevel.DEBUG, "ActivityBreadcrumbsIntegration removed.", new Object[0]);
            }
        }
    }

    @Override // io.sentry.k1
    public void h(io.sentry.w0 w0Var, k7 k7Var) {
        SentryAndroidOptions sentryAndroidOptions;
        if (k7Var instanceof SentryAndroidOptions) {
            sentryAndroidOptions = (SentryAndroidOptions) k7Var;
        } else {
            sentryAndroidOptions = null;
        }
        this.f28754e = (io.sentry.w0) io.sentry.util.y.c(w0Var, "Scopes are required");
        this.f28755i = ((SentryAndroidOptions) io.sentry.util.y.c(sentryAndroidOptions, "SentryAndroidOptions is required")).isEnableActivityLifecycleBreadcrumbs();
        ILogger logger = k7Var.getLogger();
        SentryLevel sentryLevel = SentryLevel.DEBUG;
        logger.c(sentryLevel, "ActivityBreadcrumbsIntegration enabled: %s", Boolean.valueOf(this.f28755i));
        if (this.f28755i) {
            this.f28753d.registerActivityLifecycleCallbacks(this);
            k7Var.getLogger().c(sentryLevel, "ActivityBreadcrumbIntegration installed.", new Object[0]);
            io.sentry.util.p.a("ActivityBreadcrumbs");
        }
    }

    @Override // android.app.Application.ActivityLifecycleCallbacks
    public void onActivityCreated(Activity activity, Bundle bundle) {
        io.sentry.a1 a10 = this.f28756o.a();
        try {
            a(activity, "created");
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
        io.sentry.a1 a10 = this.f28756o.a();
        try {
            a(activity, "destroyed");
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
        io.sentry.a1 a10 = this.f28756o.a();
        try {
            a(activity, "paused");
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
    public void onActivityResumed(Activity activity) {
        io.sentry.a1 a10 = this.f28756o.a();
        try {
            a(activity, "resumed");
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
        io.sentry.a1 a10 = this.f28756o.a();
        try {
            a(activity, "saveInstanceState");
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
    public void onActivityStarted(Activity activity) {
        io.sentry.a1 a10 = this.f28756o.a();
        try {
            a(activity, "started");
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
        io.sentry.a1 a10 = this.f28756o.a();
        try {
            a(activity, "stopped");
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
}
