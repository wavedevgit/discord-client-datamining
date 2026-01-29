package io.sentry.android.core;

import android.content.Context;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class p0 {
    public static io.sentry.k1 a(Context context, x0 x0Var) {
        if (x0Var.d() >= 30) {
            return new AnrV2Integration(context);
        }
        return new AnrIntegration(context);
    }
}
