package io.sentry.util;

import io.sentry.ILogger;
import io.sentry.SentryLevel;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class v {
    public static void a(Class cls, Object obj, ILogger iLogger) {
        String str;
        SentryLevel sentryLevel = SentryLevel.DEBUG;
        if (obj != null) {
            str = obj.getClass().getCanonicalName();
        } else {
            str = "Hint";
        }
        iLogger.c(sentryLevel, "%s is not %s", str, cls.getCanonicalName());
    }
}
