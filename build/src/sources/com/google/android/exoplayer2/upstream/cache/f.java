package com.google.android.exoplayer2.upstream.cache;

import android.content.ContentValues;
import android.database.Cursor;
import android.database.SQLException;
import android.database.sqlite.SQLiteDatabase;
import com.facebook.react.devsupport.StackTraceHelper;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;
import java.util.Set;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class f {

    /* renamed from: c  reason: collision with root package name */
    private static final String[] f14067c = {StackTraceHelper.NAME_KEY, "length", "last_touch_timestamp"};

    /* renamed from: a  reason: collision with root package name */
    private final qc.b f14068a;

    /* renamed from: b  reason: collision with root package name */
    private String f14069b;

    public f(qc.b bVar) {
        this.f14068a = bVar;
    }

    private static void a(SQLiteDatabase sQLiteDatabase, String str) {
        sQLiteDatabase.execSQL("DROP TABLE IF EXISTS " + str);
    }

    private Cursor c() {
        oe.a.e(this.f14069b);
        return this.f14068a.getReadableDatabase().query(this.f14069b, f14067c, null, null, null, null, null);
    }

    private static String d(String str) {
        return "ExoPlayerCacheFileMetadata" + str;
    }

    public Map b() {
        try {
            Cursor c10 = c();
            HashMap hashMap = new HashMap(c10.getCount());
            while (c10.moveToNext()) {
                hashMap.put((String) oe.a.e(c10.getString(0)), new e(c10.getLong(1), c10.getLong(2)));
            }
            c10.close();
            return hashMap;
        } catch (SQLException e10) {
            throw new qc.a(e10);
        }
    }

    public void e(long j10) {
        try {
            String hexString = Long.toHexString(j10);
            this.f14069b = d(hexString);
            if (qc.e.b(this.f14068a.getReadableDatabase(), 2, hexString) != 1) {
                SQLiteDatabase writableDatabase = this.f14068a.getWritableDatabase();
                writableDatabase.beginTransactionNonExclusive();
                qc.e.d(writableDatabase, 2, hexString, 1);
                a(writableDatabase, this.f14069b);
                writableDatabase.execSQL("CREATE TABLE " + this.f14069b + " (name TEXT PRIMARY KEY NOT NULL,length INTEGER NOT NULL,last_touch_timestamp INTEGER NOT NULL)");
                writableDatabase.setTransactionSuccessful();
                writableDatabase.endTransaction();
            }
        } catch (SQLException e10) {
            throw new qc.a(e10);
        }
    }

    public void f(String str) {
        oe.a.e(this.f14069b);
        try {
            this.f14068a.getWritableDatabase().delete(this.f14069b, "name = ?", new String[]{str});
        } catch (SQLException e10) {
            throw new qc.a(e10);
        }
    }

    public void g(Set set) {
        oe.a.e(this.f14069b);
        try {
            SQLiteDatabase writableDatabase = this.f14068a.getWritableDatabase();
            writableDatabase.beginTransactionNonExclusive();
            Iterator it = set.iterator();
            while (it.hasNext()) {
                writableDatabase.delete(this.f14069b, "name = ?", new String[]{(String) it.next()});
            }
            writableDatabase.setTransactionSuccessful();
            writableDatabase.endTransaction();
        } catch (SQLException e10) {
            throw new qc.a(e10);
        }
    }

    public void h(String str, long j10, long j11) {
        oe.a.e(this.f14069b);
        try {
            SQLiteDatabase writableDatabase = this.f14068a.getWritableDatabase();
            ContentValues contentValues = new ContentValues();
            contentValues.put(StackTraceHelper.NAME_KEY, str);
            contentValues.put("length", Long.valueOf(j10));
            contentValues.put("last_touch_timestamp", Long.valueOf(j11));
            writableDatabase.replaceOrThrow(this.f14069b, null, contentValues);
        } catch (SQLException e10) {
            throw new qc.a(e10);
        }
    }
}
