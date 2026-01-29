package com.google.android.gms.internal.play_billing;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class v3 extends RuntimeException {
    public v3(v2 v2Var) {
        super("Message was missing required fields.  (Lite runtime could not determine which fields were missing).");
    }

    public final a2 a() {
        return new a2(getMessage());
    }
}
