package io.sentry;

import java.io.File;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public interface r4 {
    static /* synthetic */ void b(ILogger iLogger, String str, s sVar, File file) {
        SentryLevel sentryLevel = SentryLevel.DEBUG;
        iLogger.c(sentryLevel, "Started processing cached files from %s", str);
        sVar.d(file);
        iLogger.c(sentryLevel, "Finished processing cached files from %s", str);
    }

    default o4 a(final s sVar, final String str, final ILogger iLogger) {
        final File file = new File(str);
        return new o4() { // from class: io.sentry.q4
            @Override // io.sentry.o4
            public final void a() {
                r4.b(ILogger.this, str, sVar, file);
            }
        };
    }

    o4 c(w0 w0Var, k7 k7Var);

    default boolean d(String str, ILogger iLogger) {
        if (str != null && !str.isEmpty()) {
            return true;
        }
        iLogger.c(SentryLevel.INFO, "No cached dir path is defined in options.", new Object[0]);
        return false;
    }
}
