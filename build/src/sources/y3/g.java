package y3;

import android.database.sqlite.SQLiteProgram;
import kotlin.jvm.internal.Intrinsics;
import x3.i;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class g implements i {

    /* renamed from: d  reason: collision with root package name */
    private final SQLiteProgram f54383d;

    public g(SQLiteProgram delegate) {
        Intrinsics.checkNotNullParameter(delegate, "delegate");
        this.f54383d = delegate;
    }

    @Override // x3.i
    public void D1(int i10, byte[] value) {
        Intrinsics.checkNotNullParameter(value, "value");
        this.f54383d.bindBlob(i10, value);
    }

    @Override // x3.i
    public void P1(int i10) {
        this.f54383d.bindNull(i10);
    }

    @Override // x3.i
    public void T(int i10, double d10) {
        this.f54383d.bindDouble(i10, d10);
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        this.f54383d.close();
    }

    @Override // x3.i
    public void h1(int i10, String value) {
        Intrinsics.checkNotNullParameter(value, "value");
        this.f54383d.bindString(i10, value);
    }

    @Override // x3.i
    public void w1(int i10, long j10) {
        this.f54383d.bindLong(i10, j10);
    }
}
