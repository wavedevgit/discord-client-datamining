package androidx.work.impl;

import android.content.Context;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class r0 extends s3.b {

    /* renamed from: c  reason: collision with root package name */
    private final Context f5672c;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public r0(Context context) {
        super(9, 10);
        Intrinsics.checkNotNullParameter(context, "context");
        this.f5672c = context;
    }

    @Override // s3.b
    public void a(x3.g db2) {
        Intrinsics.checkNotNullParameter(db2, "db");
        db2.K("CREATE TABLE IF NOT EXISTS `Preference` (`key` TEXT NOT NULL, `long_value` INTEGER, PRIMARY KEY(`key`))");
        q4.n.c(this.f5672c, db2);
        q4.i.c(this.f5672c, db2);
    }
}
