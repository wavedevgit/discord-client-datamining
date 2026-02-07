package y3;

import android.database.sqlite.SQLiteStatement;
import kotlin.jvm.internal.Intrinsics;
import x3.k;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class h extends g implements k {

    /* renamed from: e  reason: collision with root package name */
    private final SQLiteStatement f54976e;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public h(SQLiteStatement delegate) {
        super(delegate);
        Intrinsics.checkNotNullParameter(delegate, "delegate");
        this.f54976e = delegate;
    }

    @Override // x3.k
    public int U() {
        return this.f54976e.executeUpdateDelete();
    }

    @Override // x3.k
    public long X0() {
        return this.f54976e.executeInsert();
    }
}
