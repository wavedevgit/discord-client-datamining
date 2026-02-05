package io.sentry.android.core;

import io.sentry.ILogger;
import io.sentry.SentryLevel;
import io.sentry.k7;
import java.io.Closeable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class AppLifecycleIntegration implements io.sentry.k1, Closeable {

    /* renamed from: d  reason: collision with root package name */
    private final io.sentry.util.a f27784d = new io.sentry.util.a();

    /* renamed from: e  reason: collision with root package name */
    volatile z1 f27785e;

    /* renamed from: i  reason: collision with root package name */
    private SentryAndroidOptions f27786i;

    private void a() {
        io.sentry.a1 a10 = this.f27784d.a();
        try {
            z1 z1Var = this.f27785e;
            this.f27785e = null;
            if (a10 != null) {
                a10.close();
            }
            if (z1Var != null) {
                w0.E().N(z1Var);
                SentryAndroidOptions sentryAndroidOptions = this.f27786i;
                if (sentryAndroidOptions != null) {
                    sentryAndroidOptions.getLogger().c(SentryLevel.DEBUG, "AppLifecycleIntegration removed.", new Object[0]);
                }
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

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        a();
        w0.E().C0();
    }

    @Override // io.sentry.k1
    public void h(io.sentry.w0 w0Var, k7 k7Var) {
        SentryAndroidOptions sentryAndroidOptions;
        io.sentry.util.y.c(w0Var, "Scopes are required");
        if (k7Var instanceof SentryAndroidOptions) {
            sentryAndroidOptions = (SentryAndroidOptions) k7Var;
        } else {
            sentryAndroidOptions = null;
        }
        SentryAndroidOptions sentryAndroidOptions2 = (SentryAndroidOptions) io.sentry.util.y.c(sentryAndroidOptions, "SentryAndroidOptions is required");
        this.f27786i = sentryAndroidOptions2;
        ILogger logger = sentryAndroidOptions2.getLogger();
        SentryLevel sentryLevel = SentryLevel.DEBUG;
        logger.c(sentryLevel, "enableSessionTracking enabled: %s", Boolean.valueOf(this.f27786i.isEnableAutoSessionTracking()));
        this.f27786i.getLogger().c(sentryLevel, "enableAppLifecycleBreadcrumbs enabled: %s", Boolean.valueOf(this.f27786i.isEnableAppLifecycleBreadcrumbs()));
        if (this.f27786i.isEnableAutoSessionTracking() || this.f27786i.isEnableAppLifecycleBreadcrumbs()) {
            io.sentry.a1 a10 = this.f27784d.a();
            try {
                if (this.f27785e != null) {
                    if (a10 != null) {
                        a10.close();
                        return;
                    }
                    return;
                }
                this.f27785e = new z1(w0Var, this.f27786i.getSessionTrackingIntervalMillis(), this.f27786i.isEnableAutoSessionTracking(), this.f27786i.isEnableAppLifecycleBreadcrumbs());
                w0.E().m(this.f27785e);
                if (a10 != null) {
                    a10.close();
                }
                k7Var.getLogger().c(sentryLevel, "AppLifecycleIntegration installed.", new Object[0]);
                io.sentry.util.p.a("AppLifecycle");
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
}
