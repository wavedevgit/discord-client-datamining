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
    private static final String[] f13349c = {StackTraceHelper.NAME_KEY, "length", "last_touch_timestamp"};

    /* renamed from: a  reason: collision with root package name */
    private final pc.b f13350a;

    /* renamed from: b  reason: collision with root package name */
    private String f13351b;

    public f(pc.b bVar) {
        this.f13350a = bVar;
    }

    private static void a(SQLiteDatabase sQLiteDatabase, String str) {
        sQLiteDatabase.execSQL("DROP TABLE IF EXISTS " + str);
    }

    private Cursor c() {
        ne.a.e(this.f13351b);
        return this.f13350a.getReadableDatabase().query(this.f13351b, f13349c, null, null, null, null, null);
    }

    private static String d(String str) {
        return "ExoPlayerCacheFileMetadata" + str;
    }

    public Map b() {
        try {
            Cursor c10 = c();
            HashMap hashMap = new HashMap(c10.getCount());
            while (c10.moveToNext()) {
                hashMap.put((String) ne.a.e(c10.getString(0)), new e(c10.getLong(1), c10.getLong(2)));
            }
            c10.close();
            return hashMap;
        } catch (SQLException e10) {
            throw new pc.a(e10);
        }
    }

    public void e(long j10) {
        try {
            String hexString = Long.toHexString(j10);
            this.f13351b = d(hexString);
            if (pc.e.b(this.f13350a.getReadableDatabase(), 2, hexString) != 1) {
                SQLiteDatabase writableDatabase = this.f13350a.getWritableDatabase();
                writableDatabase.beginTransactionNonExclusive();
                pc.e.d(writableDatabase, 2, hexString, 1);
                a(writableDatabase, this.f13351b);
                writableDatabase.execSQL("CREATE TABLE " + this.f13351b + " (name TEXT PRIMARY KEY NOT NULL,length INTEGER NOT NULL,last_touch_timestamp INTEGER NOT NULL)");
                writableDatabase.setTransactionSuccessful();
                writableDatabase.endTransaction();
            }
        } catch (SQLException e10) {
            throw new pc.a(e10);
        }
    }

    public void f(String str) {
        ne.a.e(this.f13351b);
        try {
            this.f13350a.getWritableDatabase().delete(this.f13351b, "name = ?", new String[]{str});
        } catch (SQLException e10) {
            throw new pc.a(e10);
        }
    }

    public void g(Set set) {
        ne.a.e(this.f13351b);
        try {
            SQLiteDatabase writableDatabase = this.f13350a.getWritableDatabase();
            writableDatabase.beginTransactionNonExclusive();
            Iterator it = set.iterator();
            while (it.hasNext()) {
                writableDatabase.delete(this.f13351b, "name = ?", new String[]{(String) it.next()});
            }
            writableDatabase.setTransactionSuccessful();
            writableDatabase.endTransaction();
        } catch (SQLException e10) {
            throw new pc.a(e10);
        }
    }

    public void h(String str, long j10, long j11) {
        ne.a.e(this.f13351b);
        try {
            SQLiteDatabase writableDatabase = this.f13350a.getWritableDatabase();
            ContentValues contentValues = new ContentValues();
            contentValues.put(StackTraceHelper.NAME_KEY, str);
            contentValues.put("length", Long.valueOf(j10));
            contentValues.put("last_touch_timestamp", Long.valueOf(j11));
            writableDatabase.replaceOrThrow(this.f13351b, null, contentValues);
        } catch (SQLException e10) {
            throw new pc.a(e10);
        }
    }
}
