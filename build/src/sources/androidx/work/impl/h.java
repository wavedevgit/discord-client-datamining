package androidx.work.impl;

import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class h extends s3.b {

    /* renamed from: c  reason: collision with root package name */
    public static final h f5764c = new h();

    private h() {
        super(12, 13);
    }

    @Override // s3.b
    public void a(x3.g db2) {
        Intrinsics.checkNotNullParameter(db2, "db");
        db2.K("UPDATE workspec SET required_network_type = 0 WHERE required_network_type IS NULL ");
        db2.K("UPDATE workspec SET content_uri_triggers = x'' WHERE content_uri_triggers is NULL");
    }
}
