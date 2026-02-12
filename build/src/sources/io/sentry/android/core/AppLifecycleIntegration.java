package io.sentry.android.core;

import io.sentry.ILogger;
import io.sentry.SentryLevel;
import io.sentry.k7;
import java.io.Closeable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class AppLifecycleIntegration implements io.sentry.k1, Closeable {

    /* renamed from: d  reason: collision with root package name */
    private final io.sentry.util.a f28112d = new io.sentry.util.a();

    /* renamed from: e  reason: collision with root package name */
    volatile z1 f28113e;

    /* renamed from: i  reason: collision with root package name */
    private SentryAndroidOptions f28114i;

    private void a() {
        io.sentry.a1 a10 = this.f28112d.a();
        try {
            z1 z1Var = this.f28113e;
            this.f28113e = null;
            if (a10 != null) {
                a10.close();
            }
            if (z1Var != null) {
                w0.s().C(z1Var);
                SentryAndroidOptions sentryAndroidOptions = this.f28114i;
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
        w0.s().Q();
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
        this.f28114i = sentryAndroidOptions2;
        ILogger logger = sentryAndroidOptions2.getLogger();
        SentryLevel sentryLevel = SentryLevel.DEBUG;
        logger.c(sentryLevel, "enableSessionTracking enabled: %s", Boolean.valueOf(this.f28114i.isEnableAutoSessionTracking()));
        this.f28114i.getLogger().c(sentryLevel, "enableAppLifecycleBreadcrumbs enabled: %s", Boolean.valueOf(this.f28114i.isEnableAppLifecycleBreadcrumbs()));
        if (this.f28114i.isEnableAutoSessionTracking() || this.f28114i.isEnableAppLifecycleBreadcrumbs()) {
            io.sentry.a1 a10 = this.f28112d.a();
            try {
                if (this.f28113e != null) {
                    if (a10 != null) {
                        a10.close();
                        return;
                    }
                    return;
                }
                this.f28113e = new z1(w0Var, this.f28114i.getSessionTrackingIntervalMillis(), this.f28114i.isEnableAutoSessionTracking(), this.f28114i.isEnableAppLifecycleBreadcrumbs());
                w0.s().m(this.f28113e);
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
