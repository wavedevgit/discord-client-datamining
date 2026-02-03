package io.sentry;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class q implements ILogger {

    /* renamed from: a  reason: collision with root package name */
    private final k7 f30422a;

    /* renamed from: b  reason: collision with root package name */
    private final ILogger f30423b;

    public q(k7 k7Var, ILogger iLogger) {
        this.f30422a = (k7) io.sentry.util.y.c(k7Var, "SentryOptions is required.");
        this.f30423b = iLogger;
    }

    @Override // io.sentry.ILogger
    public void a(SentryLevel sentryLevel, Throwable th2, String str, Object... objArr) {
        if (this.f30423b != null && d(sentryLevel)) {
            this.f30423b.a(sentryLevel, th2, str, objArr);
        }
    }

    @Override // io.sentry.ILogger
    public void b(SentryLevel sentryLevel, String str, Throwable th2) {
        if (this.f30423b != null && d(sentryLevel)) {
            this.f30423b.b(sentryLevel, str, th2);
        }
    }

    @Override // io.sentry.ILogger
    public void c(SentryLevel sentryLevel, String str, Object... objArr) {
        if (this.f30423b != null && d(sentryLevel)) {
            this.f30423b.c(sentryLevel, str, objArr);
        }
    }

    @Override // io.sentry.ILogger
    public boolean d(SentryLevel sentryLevel) {
        SentryLevel diagnosticLevel = this.f30422a.getDiagnosticLevel();
        if (sentryLevel == null || !this.f30422a.isDebug() || sentryLevel.ordinal() < diagnosticLevel.ordinal()) {
            return false;
        }
        return true;
    }
}
