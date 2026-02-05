package io.sentry.android.core;

import io.sentry.ILogger;
import io.sentry.SentryLevel;
import io.sentry.k7;
import java.io.Closeable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class NdkIntegration implements io.sentry.k1, Closeable {

    /* renamed from: d  reason: collision with root package name */
    private final Class f27792d;

    /* renamed from: e  reason: collision with root package name */
    private SentryAndroidOptions f27793e;

    public NdkIntegration(Class cls) {
        this.f27792d = cls;
    }

    private void a(SentryAndroidOptions sentryAndroidOptions) {
        sentryAndroidOptions.setEnableNdk(false);
        sentryAndroidOptions.setEnableScopeSync(false);
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        Class cls;
        SentryAndroidOptions sentryAndroidOptions = this.f27793e;
        if (sentryAndroidOptions != null && sentryAndroidOptions.isEnableNdk() && (cls = this.f27792d) != null) {
            try {
                try {
                    cls.getMethod("close", null).invoke(null, null);
                    this.f27793e.getLogger().c(SentryLevel.DEBUG, "NdkIntegration removed.", new Object[0]);
                    a(this.f27793e);
                } catch (NoSuchMethodException e10) {
                    this.f27793e.getLogger().b(SentryLevel.ERROR, "Failed to invoke the SentryNdk.close method.", e10);
                    a(this.f27793e);
                }
            }
        }
    }

    @Override // io.sentry.k1
    public final void h(io.sentry.w0 w0Var, k7 k7Var) {
        SentryAndroidOptions sentryAndroidOptions;
        io.sentry.util.y.c(w0Var, "Scopes are required");
        if (k7Var instanceof SentryAndroidOptions) {
            sentryAndroidOptions = (SentryAndroidOptions) k7Var;
        } else {
            sentryAndroidOptions = null;
        }
        SentryAndroidOptions sentryAndroidOptions2 = (SentryAndroidOptions) io.sentry.util.y.c(sentryAndroidOptions, "SentryAndroidOptions is required");
        this.f27793e = sentryAndroidOptions2;
        boolean isEnableNdk = sentryAndroidOptions2.isEnableNdk();
        ILogger logger = this.f27793e.getLogger();
        SentryLevel sentryLevel = SentryLevel.DEBUG;
        logger.c(sentryLevel, "NdkIntegration enabled: %s", Boolean.valueOf(isEnableNdk));
        if (isEnableNdk && this.f27792d != null) {
            if (this.f27793e.getCacheDirPath() == null) {
                this.f27793e.getLogger().c(SentryLevel.ERROR, "No cache dir path is defined in options.", new Object[0]);
                a(this.f27793e);
                return;
            }
            try {
                this.f27792d.getMethod("init", SentryAndroidOptions.class).invoke(null, this.f27793e);
                this.f27793e.getLogger().c(sentryLevel, "NdkIntegration installed.", new Object[0]);
                io.sentry.util.p.a("Ndk");
                return;
            } catch (NoSuchMethodException e10) {
                a(this.f27793e);
                this.f27793e.getLogger().b(SentryLevel.ERROR, "Failed to invoke the SentryNdk.init method.", e10);
                return;
            } catch (Throwable th2) {
                a(this.f27793e);
                this.f27793e.getLogger().b(SentryLevel.ERROR, "Failed to initialize SentryNdk.", th2);
                return;
            }
        }
        a(this.f27793e);
    }
}
