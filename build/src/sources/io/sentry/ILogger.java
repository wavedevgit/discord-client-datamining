package io.sentry;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public interface ILogger {
    void a(SentryLevel sentryLevel, Throwable th2, String str, Object... objArr);

    void b(SentryLevel sentryLevel, String str, Throwable th2);

    void c(SentryLevel sentryLevel, String str, Object... objArr);

    boolean d(SentryLevel sentryLevel);
}
