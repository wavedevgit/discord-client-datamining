package x3;

import android.content.ContentValues;
import android.database.Cursor;
import android.os.CancellationSignal;
import java.io.Closeable;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public interface g extends Closeable {
    void H();

    Cursor H1(String str);

    List L();

    Cursor O(j jVar, CancellationSignal cancellationSignal);

    void P(String str);

    Cursor R0(j jVar);

    boolean W1();

    boolean i2();

    boolean isOpen();

    void k0();

    void l0(String str, Object[] objArr);

    void m0();

    k m1(String str);

    String t();

    void t0();

    int y1(String str, int i10, ContentValues contentValues, String str2, Object[] objArr);
}
