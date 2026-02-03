package io.sentry;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class i2 implements ILogger {

    /* renamed from: a  reason: collision with root package name */
    private static final i2 f29621a = new i2();

    private i2() {
    }

    public static i2 e() {
        return f29621a;
    }

    @Override // io.sentry.ILogger
    public void a(SentryLevel sentryLevel, Throwable th2, String str, Object... objArr) {
    }

    @Override // io.sentry.ILogger
    public void b(SentryLevel sentryLevel, String str, Throwable th2) {
    }

    @Override // io.sentry.ILogger
    public void c(SentryLevel sentryLevel, String str, Object... objArr) {
    }

    @Override // io.sentry.ILogger
    public boolean d(SentryLevel sentryLevel) {
        return false;
    }
}
