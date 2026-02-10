package y3;

import android.database.sqlite.SQLiteProgram;
import kotlin.jvm.internal.Intrinsics;
import x3.i;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class g implements i {

    /* renamed from: d  reason: collision with root package name */
    private final SQLiteProgram f55452d;

    public g(SQLiteProgram delegate) {
        Intrinsics.checkNotNullParameter(delegate, "delegate");
        this.f55452d = delegate;
    }

    @Override // x3.i
    public void N1(int i10) {
        this.f55452d.bindNull(i10);
    }

    @Override // x3.i
    public void X(int i10, double d10) {
        this.f55452d.bindDouble(i10, d10);
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        this.f55452d.close();
    }

    @Override // x3.i
    public void d1(int i10, String value) {
        Intrinsics.checkNotNullParameter(value, "value");
        this.f55452d.bindString(i10, value);
    }

    @Override // x3.i
    public void q1(int i10, long j10) {
        this.f55452d.bindLong(i10, j10);
    }

    @Override // x3.i
    public void y1(int i10, byte[] value) {
        Intrinsics.checkNotNullParameter(value, "value");
        this.f55452d.bindBlob(i10, value);
    }
}
