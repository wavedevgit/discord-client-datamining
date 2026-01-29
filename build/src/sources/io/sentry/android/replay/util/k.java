package io.sentry.android.replay.util;

import io.sentry.util.b0;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class k {
    public static final boolean a(b0 b0Var, Double d10) {
        Intrinsics.checkNotNullParameter(b0Var, "<this>");
        if (d10 == null || d10.doubleValue() < b0Var.c()) {
            return false;
        }
        return true;
    }
}
