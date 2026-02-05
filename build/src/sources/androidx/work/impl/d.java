package androidx.work.impl;

import kotlin.jvm.internal.Intrinsics;
import r3.u;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class d extends u.b {

    /* renamed from: a  reason: collision with root package name */
    private final k4.b f5727a;

    public d(k4.b clock) {
        Intrinsics.checkNotNullParameter(clock, "clock");
        this.f5727a = clock;
    }

    private final long d() {
        return this.f5727a.a() - e0.f5731a;
    }

    private final String e() {
        return "DELETE FROM workspec WHERE state IN (2, 3, 5) AND (last_enqueue_time + minimum_retention_duration) < " + d() + " AND (SELECT COUNT(*)=0 FROM dependency WHERE     prerequisite_id=id AND     work_spec_id NOT IN         (SELECT id FROM workspec WHERE state IN (2, 3, 5)))";
    }

    @Override // r3.u.b
    public void c(x3.g db2) {
        Intrinsics.checkNotNullParameter(db2, "db");
        super.c(db2);
        db2.D();
        try {
            db2.K(e());
            db2.h0();
        } finally {
            db2.t0();
        }
    }
}
