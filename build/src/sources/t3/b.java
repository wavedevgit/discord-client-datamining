package t3;

import android.database.AbstractWindowedCursor;
import android.database.Cursor;
import android.os.CancellationSignal;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.nio.ByteBuffer;
import java.nio.channels.FileChannel;
import java.util.List;
import kotlin.Unit;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.Intrinsics;
import kotlin.text.StringsKt;
import r3.u;
import x3.g;
import x3.j;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class b {
    public static final void a(g db2) {
        Intrinsics.checkNotNullParameter(db2, "db");
        List c10 = CollectionsKt.c();
        Cursor H1 = db2.H1("SELECT name FROM sqlite_master WHERE type = 'trigger'");
        while (H1.moveToNext()) {
            try {
                c10.add(H1.getString(0));
            } finally {
            }
        }
        Unit unit = Unit.f33282a;
        tr.c.a(H1, null);
        for (String triggerName : CollectionsKt.a(c10)) {
            Intrinsics.checkNotNullExpressionValue(triggerName, "triggerName");
            if (StringsKt.P(triggerName, "room_fts_content_sync_", false, 2, null)) {
                db2.K("DROP TRIGGER IF EXISTS " + triggerName);
            }
        }
    }

    public static final Cursor b(u db2, j sqLiteQuery, boolean z10, CancellationSignal cancellationSignal) {
        int i10;
        Intrinsics.checkNotNullParameter(db2, "db");
        Intrinsics.checkNotNullParameter(sqLiteQuery, "sqLiteQuery");
        Cursor x10 = db2.x(sqLiteQuery, cancellationSignal);
        if (z10 && (x10 instanceof AbstractWindowedCursor)) {
            AbstractWindowedCursor abstractWindowedCursor = (AbstractWindowedCursor) x10;
            int count = abstractWindowedCursor.getCount();
            if (abstractWindowedCursor.hasWindow()) {
                i10 = abstractWindowedCursor.getWindow().getNumRows();
            } else {
                i10 = count;
            }
            if (i10 < count) {
                return a.a(x10);
            }
            return x10;
        }
        return x10;
    }

    public static final int c(File databaseFile) {
        Intrinsics.checkNotNullParameter(databaseFile, "databaseFile");
        FileChannel channel = new FileInputStream(databaseFile).getChannel();
        try {
            ByteBuffer allocate = ByteBuffer.allocate(4);
            channel.tryLock(60L, 4L, true);
            channel.position(60L);
            if (channel.read(allocate) == 4) {
                allocate.rewind();
                int i10 = allocate.getInt();
                tr.c.a(channel, null);
                return i10;
            }
            throw new IOException("Bad database header, unable to read 4 bytes at offset 60");
        } catch (Throwable th2) {
            try {
                throw th2;
            } catch (Throwable th3) {
                tr.c.a(channel, th2);
                throw th3;
            }
        }
    }
}
