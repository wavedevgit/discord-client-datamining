package y3;

import android.database.sqlite.SQLiteProgram;
import kotlin.jvm.internal.Intrinsics;
import x3.i;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class g implements i {

    /* renamed from: d  reason: collision with root package name */
    private final SQLiteProgram f53932d;

    public g(SQLiteProgram delegate) {
        Intrinsics.checkNotNullParameter(delegate, "delegate");
        this.f53932d = delegate;
    }

    @Override // x3.i
    public void D1(int i10, byte[] value) {
        Intrinsics.checkNotNullParameter(value, "value");
        this.f53932d.bindBlob(i10, value);
    }

    @Override // x3.i
    public void P1(int i10) {
        this.f53932d.bindNull(i10);
    }

    @Override // x3.i
    public void T(int i10, double d10) {
        this.f53932d.bindDouble(i10, d10);
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        this.f53932d.close();
    }

    @Override // x3.i
    public void h1(int i10, String value) {
        Intrinsics.checkNotNullParameter(value, "value");
        this.f53932d.bindString(i10, value);
    }

    @Override // x3.i
    public void w1(int i10, long j10) {
        this.f53932d.bindLong(i10, j10);
    }
}
