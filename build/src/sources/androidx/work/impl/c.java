package androidx.work.impl;

import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class c implements s3.a {
    @Override // s3.a
    public void a(x3.g db2) {
        Intrinsics.checkNotNullParameter(db2, "db");
        db2.K("UPDATE WorkSpec SET `last_enqueue_time` = -1 WHERE `last_enqueue_time` = 0");
    }
}
