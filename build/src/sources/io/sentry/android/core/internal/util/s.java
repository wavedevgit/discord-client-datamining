package io.sentry.android.core.internal.util;

import android.content.Context;
import android.os.Process;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class s {
    public static boolean a(Context context, String str) {
        io.sentry.util.y.c(context, "The application context is required.");
        if (context.checkPermission(str, Process.myPid(), Process.myUid()) == 0) {
            return true;
        }
        return false;
    }
}
