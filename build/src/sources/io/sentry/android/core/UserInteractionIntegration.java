package io.sentry.android.core;

import android.app.Activity;
import android.app.Application;
import android.os.Bundle;
import android.view.Window;
import androidx.lifecycle.Lifecycle;
import androidx.lifecycle.LifecycleOwner;
import io.sentry.ILogger;
import io.sentry.SentryLevel;
import io.sentry.k7;
import java.io.Closeable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class UserInteractionIntegration implements io.sentry.k1, Closeable, Application.ActivityLifecycleCallbacks {

    /* renamed from: d  reason: collision with root package name */
    private final Application f27240d;

    /* renamed from: e  reason: collision with root package name */
    private io.sentry.w0 f27241e;

    /* renamed from: i  reason: collision with root package name */
    private SentryAndroidOptions f27242i;

    /* renamed from: o  reason: collision with root package name */
    private final boolean f27243o;

    /* renamed from: p  reason: collision with root package name */
    private final boolean f27244p;

    public UserInteractionIntegration(Application application, io.sentry.util.u uVar) {
        this.f27240d = (Application) io.sentry.util.y.c(application, "Application is required");
        this.f27243o = uVar.d("androidx.core.view.GestureDetectorCompat", this.f27242i);
        this.f27244p = uVar.d("androidx.lifecycle.Lifecycle", this.f27242i);
    }

    private void a(Activity activity) {
        Window window = activity.getWindow();
        if (window == null) {
            SentryAndroidOptions sentryAndroidOptions = this.f27242i;
            if (sentryAndroidOptions != null) {
                sentryAndroidOptions.getLogger().c(SentryLevel.INFO, "Window was null in startTracking", new Object[0]);
            }
        } else if (this.f27241e != null && this.f27242i != null) {
            Window.Callback callback = window.getCallback();
            if (callback == null) {
                callback = new io.sentry.android.core.internal.gestures.b();
            }
            if (!(callback instanceof io.sentry.android.core.internal.gestures.h)) {
                window.setCallback(new io.sentry.android.core.internal.gestures.h(callback, activity, new io.sentry.android.core.internal.gestures.g(activity, this.f27241e, this.f27242i), this.f27242i));
            }
        }
    }

    private void k(Activity activity) {
        Window window = activity.getWindow();
        if (window == null) {
            SentryAndroidOptions sentryAndroidOptions = this.f27242i;
            if (sentryAndroidOptions != null) {
                sentryAndroidOptions.getLogger().c(SentryLevel.INFO, "Window was null in stopTracking", new Object[0]);
                return;
            }
            return;
        }
        Window.Callback callback = window.getCallback();
        if (callback instanceof io.sentry.android.core.internal.gestures.h) {
            io.sentry.android.core.internal.gestures.h hVar = (io.sentry.android.core.internal.gestures.h) callback;
            hVar.c();
            if (hVar.a() instanceof io.sentry.android.core.internal.gestures.b) {
                window.setCallback(null);
            } else {
                window.setCallback(hVar.a());
            }
        }
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        this.f27240d.unregisterActivityLifecycleCallbacks(this);
        SentryAndroidOptions sentryAndroidOptions = this.f27242i;
        if (sentryAndroidOptions != null) {
            sentryAndroidOptions.getLogger().c(SentryLevel.DEBUG, "UserInteractionIntegration removed.", new Object[0]);
        }
    }

    @Override // io.sentry.k1
    public void g(io.sentry.w0 w0Var, k7 k7Var) {
        SentryAndroidOptions sentryAndroidOptions;
        boolean z10;
        if (k7Var instanceof SentryAndroidOptions) {
            sentryAndroidOptions = (SentryAndroidOptions) k7Var;
        } else {
            sentryAndroidOptions = null;
        }
        this.f27242i = (SentryAndroidOptions) io.sentry.util.y.c(sentryAndroidOptions, "SentryAndroidOptions is required");
        this.f27241e = (io.sentry.w0) io.sentry.util.y.c(w0Var, "Scopes are required");
        if (!this.f27242i.isEnableUserInteractionBreadcrumbs() && !this.f27242i.isEnableUserInteractionTracing()) {
            z10 = false;
        } else {
            z10 = true;
        }
        ILogger logger = this.f27242i.getLogger();
        SentryLevel sentryLevel = SentryLevel.DEBUG;
        logger.c(sentryLevel, "UserInteractionIntegration enabled: %s", Boolean.valueOf(z10));
        if (z10) {
            if (this.f27243o) {
                this.f27240d.registerActivityLifecycleCallbacks(this);
                this.f27242i.getLogger().c(sentryLevel, "UserInteractionIntegration installed.", new Object[0]);
                io.sentry.util.p.a("UserInteraction");
                if (this.f27244p) {
                    Activity b10 = f1.c().b();
                    if ((b10 instanceof LifecycleOwner) && ((LifecycleOwner) b10).getLifecycle().b() == Lifecycle.State.f4547p) {
                        a(b10);
                        return;
                    }
                    return;
                }
                return;
            }
            k7Var.getLogger().c(SentryLevel.INFO, "androidx.core is not available, UserInteractionIntegration won't be installed", new Object[0]);
        }
    }

    @Override // android.app.Application.ActivityLifecycleCallbacks
    public void onActivityCreated(Activity activity, Bundle bundle) {
    }

    @Override // android.app.Application.ActivityLifecycleCallbacks
    public void onActivityDestroyed(Activity activity) {
    }

    @Override // android.app.Application.ActivityLifecycleCallbacks
    public void onActivityPaused(Activity activity) {
        k(activity);
    }

    @Override // android.app.Application.ActivityLifecycleCallbacks
    public void onActivityResumed(Activity activity) {
        a(activity);
    }

    @Override // android.app.Application.ActivityLifecycleCallbacks
    public void onActivitySaveInstanceState(Activity activity, Bundle bundle) {
    }

    @Override // android.app.Application.ActivityLifecycleCallbacks
    public void onActivityStarted(Activity activity) {
    }

    @Override // android.app.Application.ActivityLifecycleCallbacks
    public void onActivityStopped(Activity activity) {
    }
}
