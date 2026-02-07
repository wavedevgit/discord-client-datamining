package io.sentry.android.core;

import io.sentry.ILogger;
import io.sentry.SentryLevel;
import io.sentry.k7;
import java.io.Closeable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class NdkIntegration implements io.sentry.k1, Closeable {

    /* renamed from: d  reason: collision with root package name */
    private final Class f26984d;

    /* renamed from: e  reason: collision with root package name */
    private SentryAndroidOptions f26985e;

    public NdkIntegration(Class cls) {
        this.f26984d = cls;
    }

    private void a(SentryAndroidOptions sentryAndroidOptions) {
        sentryAndroidOptions.setEnableNdk(false);
        sentryAndroidOptions.setEnableScopeSync(false);
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        Class cls;
        SentryAndroidOptions sentryAndroidOptions = this.f26985e;
        if (sentryAndroidOptions != null && sentryAndroidOptions.isEnableNdk() && (cls = this.f26984d) != null) {
            try {
                try {
                    cls.getMethod("close", null).invoke(null, null);
                    this.f26985e.getLogger().c(SentryLevel.DEBUG, "NdkIntegration removed.", new Object[0]);
                    a(this.f26985e);
                } catch (NoSuchMethodException e10) {
                    this.f26985e.getLogger().b(SentryLevel.ERROR, "Failed to invoke the SentryNdk.close method.", e10);
                    a(this.f26985e);
                }
            }
        }
    }

    @Override // io.sentry.k1
    public final void g(io.sentry.w0 w0Var, k7 k7Var) {
        SentryAndroidOptions sentryAndroidOptions;
        io.sentry.util.y.c(w0Var, "Scopes are required");
        if (k7Var instanceof SentryAndroidOptions) {
            sentryAndroidOptions = (SentryAndroidOptions) k7Var;
        } else {
            sentryAndroidOptions = null;
        }
        SentryAndroidOptions sentryAndroidOptions2 = (SentryAndroidOptions) io.sentry.util.y.c(sentryAndroidOptions, "SentryAndroidOptions is required");
        this.f26985e = sentryAndroidOptions2;
        boolean isEnableNdk = sentryAndroidOptions2.isEnableNdk();
        ILogger logger = this.f26985e.getLogger();
        SentryLevel sentryLevel = SentryLevel.DEBUG;
        logger.c(sentryLevel, "NdkIntegration enabled: %s", Boolean.valueOf(isEnableNdk));
        if (isEnableNdk && this.f26984d != null) {
            if (this.f26985e.getCacheDirPath() == null) {
                this.f26985e.getLogger().c(SentryLevel.ERROR, "No cache dir path is defined in options.", new Object[0]);
                a(this.f26985e);
                return;
            }
            try {
                this.f26984d.getMethod("init", SentryAndroidOptions.class).invoke(null, this.f26985e);
                this.f26985e.getLogger().c(sentryLevel, "NdkIntegration installed.", new Object[0]);
                io.sentry.util.p.a("Ndk");
                return;
            } catch (NoSuchMethodException e10) {
                a(this.f26985e);
                this.f26985e.getLogger().b(SentryLevel.ERROR, "Failed to invoke the SentryNdk.init method.", e10);
                return;
            } catch (Throwable th2) {
                a(this.f26985e);
                this.f26985e.getLogger().b(SentryLevel.ERROR, "Failed to initialize SentryNdk.", th2);
                return;
            }
        }
        a(this.f26985e);
    }
}
