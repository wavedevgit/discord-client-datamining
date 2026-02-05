package androidx.work.impl;

import android.content.Context;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class v extends s3.b {

    /* renamed from: c  reason: collision with root package name */
    private final Context f5882c;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public v(Context mContext, int i10, int i11) {
        super(i10, i11);
        Intrinsics.checkNotNullParameter(mContext, "mContext");
        this.f5882c = mContext;
    }

    @Override // s3.b
    public void a(x3.g db2) {
        Intrinsics.checkNotNullParameter(db2, "db");
        if (this.f49323b >= 10) {
            db2.i0("INSERT OR REPLACE INTO `Preference` (`key`, `long_value`) VALUES (@key, @long_value)", new Object[]{"reschedule_needed", 1});
        } else {
            this.f5882c.getSharedPreferences("androidx.work.util.preferences", 0).edit().putBoolean("reschedule_needed", true).apply();
        }
    }
}
