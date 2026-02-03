package androidx.work.impl;

import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class o extends s3.b {

    /* renamed from: c  reason: collision with root package name */
    public static final o f5661c = new o();

    private o() {
        super(7, 8);
    }

    @Override // s3.b
    public void a(x3.g db2) {
        Intrinsics.checkNotNullParameter(db2, "db");
        db2.K("\n    CREATE INDEX IF NOT EXISTS `index_WorkSpec_period_start_time` ON `workspec`(`period_start_time`)\n    ");
    }
}
