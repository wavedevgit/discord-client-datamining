package io.sentry.android.core;

import android.content.ComponentCallbacks2;
import android.content.Context;
import android.content.res.Configuration;
import com.discord.misc.utilities.logThrottle.LogThrottleSingleton;
import com.facebook.react.uimanager.ViewProps;
import io.sentry.Breadcrumb;
import io.sentry.Hint;
import io.sentry.ILogger;
import io.sentry.SentryLevel;
import io.sentry.k7;
import io.sentry.protocol.e;
import java.io.Closeable;
import java.util.Locale;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class AppComponentsBreadcrumbsIntegration implements io.sentry.k1, Closeable, ComponentCallbacks2 {

    /* renamed from: p  reason: collision with root package name */
    private static final Hint f28778p = new Hint();

    /* renamed from: d  reason: collision with root package name */
    private final Context f28779d;

    /* renamed from: e  reason: collision with root package name */
    private io.sentry.w0 f28780e;

    /* renamed from: i  reason: collision with root package name */
    private SentryAndroidOptions f28781i;

    /* renamed from: o  reason: collision with root package name */
    private final io.sentry.android.core.internal.util.n f28782o = new io.sentry.android.core.internal.util.n(io.sentry.android.core.internal.util.f.b(), LogThrottleSingleton.RATE_LIMIT_ONE_MINUTE, 0);

    public AppComponentsBreadcrumbsIntegration(Context context) {
        this.f28779d = (Context) io.sentry.util.y.c(e1.g(context), "Context is required");
    }

    private void B(Runnable runnable) {
        SentryAndroidOptions sentryAndroidOptions = this.f28781i;
        if (sentryAndroidOptions != null) {
            try {
                sentryAndroidOptions.getExecutorService().submit(runnable);
            } catch (Throwable th2) {
                this.f28781i.getLogger().a(SentryLevel.ERROR, th2, "Failed to submit app components breadcrumb task", new Object[0]);
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void n(long j10, Configuration configuration) {
        String str;
        if (this.f28780e != null) {
            e.b a10 = io.sentry.android.core.internal.util.o.a(this.f28779d.getResources().getConfiguration().orientation);
            if (a10 != null) {
                str = a10.name().toLowerCase(Locale.ROOT);
            } else {
                str = "undefined";
            }
            Breadcrumb breadcrumb = new Breadcrumb(j10);
            breadcrumb.E("navigation");
            breadcrumb.z("device.orientation");
            breadcrumb.A(ViewProps.POSITION, str);
            breadcrumb.B(SentryLevel.INFO);
            Hint hint = new Hint();
            hint.k("android:configuration", configuration);
            this.f28780e.g(breadcrumb, hint);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void x(long j10, int i10) {
        if (this.f28780e != null) {
            Breadcrumb breadcrumb = new Breadcrumb(j10);
            breadcrumb.E("system");
            breadcrumb.z("device.event");
            breadcrumb.C("Low memory");
            breadcrumb.A("action", "LOW_MEMORY");
            breadcrumb.A("level", Integer.valueOf(i10));
            breadcrumb.B(SentryLevel.WARNING);
            this.f28780e.g(breadcrumb, f28778p);
        }
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        try {
            this.f28779d.unregisterComponentCallbacks(this);
        } catch (Throwable th2) {
            SentryAndroidOptions sentryAndroidOptions = this.f28781i;
            if (sentryAndroidOptions != null) {
                sentryAndroidOptions.getLogger().a(SentryLevel.DEBUG, th2, "It was not possible to unregisterComponentCallbacks", new Object[0]);
            }
        }
        SentryAndroidOptions sentryAndroidOptions2 = this.f28781i;
        if (sentryAndroidOptions2 != null) {
            sentryAndroidOptions2.getLogger().c(SentryLevel.DEBUG, "AppComponentsBreadcrumbsIntegration removed.", new Object[0]);
        }
    }

    @Override // io.sentry.k1
    public void h(io.sentry.w0 w0Var, k7 k7Var) {
        SentryAndroidOptions sentryAndroidOptions;
        this.f28780e = (io.sentry.w0) io.sentry.util.y.c(w0Var, "Scopes are required");
        if (k7Var instanceof SentryAndroidOptions) {
            sentryAndroidOptions = (SentryAndroidOptions) k7Var;
        } else {
            sentryAndroidOptions = null;
        }
        SentryAndroidOptions sentryAndroidOptions2 = (SentryAndroidOptions) io.sentry.util.y.c(sentryAndroidOptions, "SentryAndroidOptions is required");
        this.f28781i = sentryAndroidOptions2;
        ILogger logger = sentryAndroidOptions2.getLogger();
        SentryLevel sentryLevel = SentryLevel.DEBUG;
        logger.c(sentryLevel, "AppComponentsBreadcrumbsIntegration enabled: %s", Boolean.valueOf(this.f28781i.isEnableAppComponentBreadcrumbs()));
        if (this.f28781i.isEnableAppComponentBreadcrumbs()) {
            try {
                this.f28779d.registerComponentCallbacks(this);
                k7Var.getLogger().c(sentryLevel, "AppComponentsBreadcrumbsIntegration installed.", new Object[0]);
                io.sentry.util.p.a("AppComponentsBreadcrumbs");
            } catch (Throwable th2) {
                this.f28781i.setEnableAppComponentBreadcrumbs(false);
                k7Var.getLogger().a(SentryLevel.INFO, th2, "ComponentCallbacks2 is not available.", new Object[0]);
            }
        }
    }

    @Override // android.content.ComponentCallbacks
    public void onConfigurationChanged(final Configuration configuration) {
        final long currentTimeMillis = System.currentTimeMillis();
        B(new Runnable() { // from class: io.sentry.android.core.s0
            @Override // java.lang.Runnable
            public final void run() {
                AppComponentsBreadcrumbsIntegration.this.n(currentTimeMillis, configuration);
            }
        });
    }

    @Override // android.content.ComponentCallbacks
    public void onLowMemory() {
    }

    @Override // android.content.ComponentCallbacks2
    public void onTrimMemory(final int i10) {
        if (i10 < 40 || this.f28782o.a()) {
            return;
        }
        final long currentTimeMillis = System.currentTimeMillis();
        B(new Runnable() { // from class: io.sentry.android.core.t0
            @Override // java.lang.Runnable
            public final void run() {
                AppComponentsBreadcrumbsIntegration.this.x(currentTimeMillis, i10);
            }
        });
    }
}
