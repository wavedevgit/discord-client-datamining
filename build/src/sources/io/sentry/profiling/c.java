package io.sentry.profiling;

import io.sentry.ILogger;
import io.sentry.SentryLevel;
import io.sentry.e2;
import io.sentry.j2;
import io.sentry.l0;
import io.sentry.l4;
import io.sentry.u0;
import io.sentry.z0;
import java.util.Iterator;
import java.util.ServiceLoader;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class c {
    public static l0 a(ILogger iLogger, String str, int i10, z0 z0Var) {
        try {
            android.support.v4.media.session.b.a(c(a.class));
            iLogger.c(SentryLevel.DEBUG, "No continuous profiler provider found, using NoOpContinuousProfiler", new Object[0]);
            return e2.a();
        } catch (Throwable th2) {
            iLogger.b(SentryLevel.ERROR, "Failed to load continuous profiler provider, using NoOpContinuousProfiler", th2);
            return e2.a();
        }
    }

    public static u0 b() {
        ILogger logger = l4.g().t().b().getLogger();
        try {
            android.support.v4.media.session.b.a(c(b.class));
            logger.c(SentryLevel.DEBUG, "No profile converter provider found, using NoOpProfileConverter", new Object[0]);
            return j2.b();
        } catch (Throwable th2) {
            logger.b(SentryLevel.ERROR, "Failed to load profile converter provider, using NoOpProfileConverter", th2);
            return j2.b();
        }
    }

    private static Object c(Class cls) {
        Iterator it = ServiceLoader.load(cls).iterator();
        if (it.hasNext()) {
            return it.next();
        }
        return null;
    }
}
