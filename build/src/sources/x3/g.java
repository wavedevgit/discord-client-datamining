package x3;

import android.content.ContentValues;
import android.database.Cursor;
import android.os.CancellationSignal;
import java.io.Closeable;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public interface g extends Closeable {
    void D();

    List H();

    Cursor H1(String str);

    Cursor J(j jVar, CancellationSignal cancellationSignal);

    void K(String str);

    Cursor Q0(j jVar);

    boolean S1();

    boolean d2();

    void g0();

    void h0(String str, Object[] objArr);

    void i0();

    boolean isOpen();

    k k1(String str);

    String q();

    void s0();

    int z1(String str, int i10, ContentValues contentValues, String str2, Object[] objArr);
}
