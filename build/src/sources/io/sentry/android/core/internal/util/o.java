package io.sentry.android.core.internal.util;

import io.sentry.protocol.e;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class o {
    public static e.b a(int i10) {
        if (i10 != 1) {
            if (i10 != 2) {
                return null;
            }
            return e.b.LANDSCAPE;
        }
        return e.b.PORTRAIT;
    }
}
