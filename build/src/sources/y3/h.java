package y3;

import android.database.sqlite.SQLiteStatement;
import kotlin.jvm.internal.Intrinsics;
import x3.k;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class h extends g implements k {

    /* renamed from: e  reason: collision with root package name */
    private final SQLiteStatement f55953e;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public h(SQLiteStatement delegate) {
        super(delegate);
        Intrinsics.checkNotNullParameter(delegate, "delegate");
        this.f55953e = delegate;
    }

    @Override // x3.k
    public int V() {
        return this.f55953e.executeUpdateDelete();
    }

    @Override // x3.k
    public long X0() {
        return this.f55953e.executeInsert();
    }
}
