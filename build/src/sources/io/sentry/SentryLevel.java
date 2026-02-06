package io.sentry;

import java.util.Locale;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public enum SentryLevel implements w1 {
    DEBUG,
    INFO,
    WARNING,
    ERROR,
    FATAL;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements m1 {
        @Override // io.sentry.m1
        /* renamed from: b */
        public SentryLevel a(e3 e3Var, ILogger iLogger) {
            return SentryLevel.valueOf(e3Var.e1().toUpperCase(Locale.ROOT));
        }
    }

    @Override // io.sentry.w1
    public void serialize(@NotNull f3 f3Var, @NotNull ILogger iLogger) {
        f3Var.f(name().toLowerCase(Locale.ROOT));
    }
}
