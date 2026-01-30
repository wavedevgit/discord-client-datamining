package y3;

import android.database.sqlite.SQLiteStatement;
import kotlin.jvm.internal.Intrinsics;
import x3.k;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class h extends g implements k {

    /* renamed from: e  reason: collision with root package name */
    private final SQLiteStatement f53958e;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public h(SQLiteStatement delegate) {
        super(delegate);
        Intrinsics.checkNotNullParameter(delegate, "delegate");
        this.f53958e = delegate;
    }

    @Override // x3.k
    public int R() {
        return this.f53958e.executeUpdateDelete();
    }

    @Override // x3.k
    public long W0() {
        return this.f53958e.executeInsert();
    }
}
