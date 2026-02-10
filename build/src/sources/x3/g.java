package x3;

import android.content.ContentValues;
import android.database.Cursor;
import android.os.CancellationSignal;
import java.io.Closeable;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public interface g extends Closeable {
    Cursor C1(String str);

    void H();

    List L();

    Cursor N0(j jVar);

    Cursor O(j jVar, CancellationSignal cancellationSignal);

    void P(String str);

    boolean Q1();

    boolean c2();

    k h1(String str);

    boolean isOpen();

    void k0();

    void l0(String str, Object[] objArr);

    void m0();

    String t();

    void t0();

    int t1(String str, int i10, ContentValues contentValues, String str2, Object[] objArr);
}
