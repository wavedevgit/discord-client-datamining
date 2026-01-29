package io.sentry;

import java.lang.reflect.InvocationTargetException;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class f8 {
    public static d1 a(io.sentry.util.u uVar, ILogger iLogger) {
        Class g10;
        if (io.sentry.util.a0.c() && uVar.c("io.sentry.opentelemetry.OtelSpanFactory", iLogger) && (g10 = uVar.g("io.sentry.opentelemetry.OtelSpanFactory", iLogger)) != null) {
            try {
                Object newInstance = g10.getDeclaredConstructor(null).newInstance(null);
                if (newInstance != null && (newInstance instanceof d1)) {
                    return (d1) newInstance;
                }
            } catch (IllegalAccessException | InstantiationException | NoSuchMethodException | InvocationTargetException unused) {
            }
        }
        return new o();
    }
}
