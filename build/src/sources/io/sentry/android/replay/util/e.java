package io.sentry.android.replay.util;

import io.sentry.ILogger;
import io.sentry.SentryLevel;
import io.sentry.k7;
import io.sentry.z0;
import java.util.concurrent.Future;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class e {
    public static final Future b(z0 z0Var, final k7 options, final String taskName, final Runnable task) {
        Intrinsics.checkNotNullParameter(z0Var, "<this>");
        Intrinsics.checkNotNullParameter(options, "options");
        Intrinsics.checkNotNullParameter(taskName, "taskName");
        Intrinsics.checkNotNullParameter(task, "task");
        try {
            return z0Var.submit(new Runnable() { // from class: io.sentry.android.replay.util.d
                @Override // java.lang.Runnable
                public final void run() {
                    e.c(task, options, taskName);
                }
            });
        } catch (Throwable th2) {
            ILogger logger = options.getLogger();
            SentryLevel sentryLevel = SentryLevel.ERROR;
            logger.b(sentryLevel, "Failed to submit task " + taskName + " to executor", th2);
            return null;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void c(Runnable runnable, k7 k7Var, String str) {
        try {
            runnable.run();
        } catch (Throwable th2) {
            ILogger logger = k7Var.getLogger();
            SentryLevel sentryLevel = SentryLevel.ERROR;
            logger.b(sentryLevel, "Failed to execute task " + str, th2);
        }
    }
}
