package androidx.work.impl;

import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class m extends s3.b {

    /* renamed from: c  reason: collision with root package name */
    public static final m f6099c = new m();

    private m() {
        super(4, 5);
    }

    @Override // s3.b
    public void a(x3.g db2) {
        Intrinsics.checkNotNullParameter(db2, "db");
        db2.O("ALTER TABLE workspec ADD COLUMN `trigger_content_update_delay` INTEGER NOT NULL DEFAULT -1");
        db2.O("ALTER TABLE workspec ADD COLUMN `trigger_max_content_delay` INTEGER NOT NULL DEFAULT -1");
    }
}
