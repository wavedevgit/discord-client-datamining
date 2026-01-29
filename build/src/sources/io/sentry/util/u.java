package io.sentry.util;

import io.sentry.ILogger;
import io.sentry.SentryLevel;
import io.sentry.k7;
import io.sentry.util.r;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class u {
    public boolean c(String str, ILogger iLogger) {
        if (g(str, iLogger) != null) {
            return true;
        }
        return false;
    }

    public boolean d(String str, k7 k7Var) {
        ILogger iLogger;
        if (k7Var != null) {
            iLogger = k7Var.getLogger();
        } else {
            iLogger = null;
        }
        return c(str, iLogger);
    }

    public r e(final String str, final ILogger iLogger) {
        return new r(new r.a() { // from class: io.sentry.util.t
            @Override // io.sentry.util.r.a
            public final Object a() {
                Boolean valueOf;
                valueOf = Boolean.valueOf(u.this.c(str, iLogger));
                return valueOf;
            }
        });
    }

    public r f(final String str, final k7 k7Var) {
        return new r(new r.a() { // from class: io.sentry.util.s
            @Override // io.sentry.util.r.a
            public final Object a() {
                Boolean valueOf;
                valueOf = Boolean.valueOf(u.this.d(str, k7Var));
                return valueOf;
            }
        });
    }

    public Class g(String str, ILogger iLogger) {
        try {
            return Class.forName(str);
        } catch (ClassNotFoundException unused) {
            if (iLogger != null) {
                SentryLevel sentryLevel = SentryLevel.INFO;
                iLogger.c(sentryLevel, "Class not available: " + str, new Object[0]);
                return null;
            }
            return null;
        } catch (UnsatisfiedLinkError e10) {
            if (iLogger != null) {
                SentryLevel sentryLevel2 = SentryLevel.ERROR;
                iLogger.b(sentryLevel2, "Failed to load (UnsatisfiedLinkError) " + str, e10);
                return null;
            }
            return null;
        } catch (Throwable th2) {
            if (iLogger != null) {
                SentryLevel sentryLevel3 = SentryLevel.ERROR;
                iLogger.b(sentryLevel3, "Failed to initialize " + str, th2);
                return null;
            }
            return null;
        }
    }
}
