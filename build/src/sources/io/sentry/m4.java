package io.sentry;

import java.lang.reflect.InvocationTargetException;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class m4 {
    public static x0 a(io.sentry.util.u uVar, ILogger iLogger) {
        x0 b10 = b(uVar, iLogger);
        b10.a();
        return b10;
    }

    private static x0 b(io.sentry.util.u uVar, ILogger iLogger) {
        Class g10;
        if (io.sentry.util.a0.c() && uVar.c("io.sentry.opentelemetry.OtelContextScopesStorage", iLogger) && (g10 = uVar.g("io.sentry.opentelemetry.OtelContextScopesStorage", iLogger)) != null) {
            try {
                Object newInstance = g10.getDeclaredConstructor(null).newInstance(null);
                if (newInstance != null && (newInstance instanceof x0)) {
                    return (x0) newInstance;
                }
            } catch (IllegalAccessException | InstantiationException | NoSuchMethodException | InvocationTargetException unused) {
            }
        }
        return new n();
    }
}
