package x3;

import android.content.ContentValues;
import android.database.Cursor;
import android.os.CancellationSignal;
import java.io.Closeable;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public interface g extends Closeable {
    Cursor G1(String str);

    void H();

    List L();

    Cursor N(j jVar, CancellationSignal cancellationSignal);

    void O(String str);

    boolean R1();

    Cursor S0(j jVar);

    boolean c2();

    boolean isOpen();

    void j0();

    void k0(String str, Object[] objArr);

    k k1(String str);

    void l0();

    String t();

    void v0();

    int y1(String str, int i10, ContentValues contentValues, String str2, Object[] objArr);
}
