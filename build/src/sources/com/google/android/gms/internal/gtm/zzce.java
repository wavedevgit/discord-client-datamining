package com.google.android.gms.internal.gtm;

import android.database.Cursor;
import android.database.sqlite.SQLiteDatabase;
import android.database.sqlite.SQLiteException;
import android.text.TextUtils;
import com.google.android.gms.common.util.VisibleForTesting;
import com.google.android.gms.common.util.i;
import gf.q;
import java.io.Closeable;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import se.n;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class zzce extends zzbs implements Closeable {
    private static final String zza = String.format("CREATE TABLE IF NOT EXISTS %s ( '%s' INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, '%s' INTEGER NOT NULL, '%s' TEXT NOT NULL, '%s' TEXT NOT NULL, '%s' INTEGER);", "hits2", "hit_id", "hit_time", "hit_url", "hit_string", "hit_app_id");
    private static final String zzb = String.format("SELECT MAX(%s) FROM %s WHERE 1;", "hit_time", "hits2");
    private final zzcd zzc;
    private final zzfo zzd;
    private final zzfo zze;

    /* JADX INFO: Access modifiers changed from: package-private */
    public zzce(zzbv zzbvVar) {
        super(zzbvVar);
        this.zzd = new zzfo(zzC());
        this.zze = new zzfo(zzC());
        this.zzc = new zzcd(this, zzbvVar.zza(), zzae());
    }

    private final long zzad(String str, String[] strArr, long j10) {
        Cursor cursor = null;
        try {
            try {
                cursor = zzf().rawQuery(str, strArr);
                if (cursor.moveToFirst()) {
                    long j11 = cursor.getLong(0);
                    cursor.close();
                    return j11;
                }
                cursor.close();
                return 0L;
            } catch (SQLiteException e10) {
                zzL("Database error", str, e10);
                throw e10;
            }
        } catch (Throwable th2) {
            if (cursor != null) {
                cursor.close();
            }
            throw th2;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final String zzae() {
        zzw();
        zzw();
        return "google_analytics_v4.db";
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public final void close() {
        try {
            this.zzc.close();
        } catch (SQLiteException e10) {
            zzK("Sql error closing database", e10);
        } catch (IllegalStateException e11) {
            zzK("Error closing database", e11);
        }
    }

    public final void zzZ(List<Long> list) {
        q.l(list);
        n.d();
        zzW();
        if (!list.isEmpty()) {
            StringBuilder sb2 = new StringBuilder("hit_id");
            sb2.append(" in (");
            for (int i10 = 0; i10 < list.size(); i10++) {
                Long l10 = list.get(i10);
                if (l10 != null && l10.longValue() != 0) {
                    if (i10 > 0) {
                        sb2.append(",");
                    }
                    sb2.append(l10);
                } else {
                    throw new SQLiteException("Invalid hit id");
                }
            }
            sb2.append(")");
            String sb3 = sb2.toString();
            try {
                SQLiteDatabase zzf = zzf();
                zzP("Deleting dispatched hits. count", Integer.valueOf(list.size()));
                int delete = zzf.delete("hits2", sb3, null);
                if (delete != list.size()) {
                    zzU("Deleted fewer hits then expected", Integer.valueOf(list.size()), Integer.valueOf(delete), sb3);
                }
            } catch (SQLiteException e10) {
                zzK("Error deleting hits", e10);
                throw e10;
            }
        }
    }

    public final int zza() {
        n.d();
        zzW();
        if (!this.zzd.zzc(86400000L)) {
            return 0;
        }
        this.zzd.zzb();
        zzO("Deleting stale hits (if any)");
        int delete = zzf().delete("hits2", "hit_time < ?", new String[]{Long.toString(zzC().a() - 2592000000L)});
        zzP("Deleted stale hits, count", Integer.valueOf(delete));
        return delete;
    }

    public final void zzaa() {
        zzW();
        zzf().endTransaction();
    }

    public final void zzab() {
        zzW();
        zzf().setTransactionSuccessful();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final boolean zzac() {
        if (zzb() == 0) {
            return true;
        }
        return false;
    }

    public final long zzb() {
        n.d();
        zzW();
        Cursor cursor = null;
        try {
            try {
                Cursor rawQuery = zzf().rawQuery("SELECT COUNT(*) FROM hits2", null);
                if (rawQuery.moveToFirst()) {
                    long j10 = rawQuery.getLong(0);
                    rawQuery.close();
                    return j10;
                }
                throw new SQLiteException("Database returned empty set");
            } catch (SQLiteException e10) {
                zzL("Database error", "SELECT COUNT(*) FROM hits2", e10);
                throw e10;
            }
        } catch (Throwable th2) {
            if (0 != 0) {
                cursor.close();
            }
            throw th2;
        }
    }

    public final long zzc() {
        n.d();
        zzW();
        return zzad(zzb, null, 0L);
    }

    @Override // com.google.android.gms.internal.gtm.zzbs
    protected final void zzd() {
    }

    @VisibleForTesting
    final SQLiteDatabase zzf() {
        try {
            return this.zzc.getWritableDatabase();
        } catch (SQLiteException e10) {
            zzS("Error opening database", e10);
            throw e10;
        }
    }

    public final List<zzex> zzj(long j10) {
        boolean z10;
        Cursor query;
        Map<String, String> map;
        boolean z11;
        if (j10 >= 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        q.a(z10);
        n.d();
        zzW();
        Cursor cursor = null;
        try {
            try {
                query = zzf().query("hits2", new String[]{"hit_id", "hit_time", "hit_string", "hit_url", "hit_app_id"}, null, null, null, null, String.format("%s ASC", "hit_id"), Long.toString(j10));
            } catch (Throwable th2) {
                th = th2;
            }
        } catch (SQLiteException e10) {
            e = e10;
        }
        try {
            ArrayList arrayList = new ArrayList();
            if (query.moveToFirst()) {
                do {
                    long j11 = query.getLong(0);
                    long j12 = query.getLong(1);
                    String string = query.getString(2);
                    String string2 = query.getString(3);
                    int i10 = query.getInt(4);
                    Map<String, String> zzk = zzk(string);
                    if (!TextUtils.isEmpty(string2) && string2.startsWith("http:")) {
                        map = zzk;
                        z11 = false;
                        arrayList.add(new zzex(this, map, j12, z11, j11, i10, null));
                    }
                    map = zzk;
                    z11 = true;
                    arrayList.add(new zzex(this, map, j12, z11, j11, i10, null));
                } while (query.moveToNext());
                query.close();
                return arrayList;
            }
            query.close();
            return arrayList;
        } catch (SQLiteException e11) {
            e = e11;
            zzK("Error loading hits from the database", e);
            throw e;
        } catch (Throwable th3) {
            th = th3;
            cursor = query;
            if (cursor != null) {
                cursor.close();
            }
            throw th;
        }
    }

    @VisibleForTesting
    final Map<String, String> zzk(String str) {
        if (TextUtils.isEmpty(str)) {
            return new HashMap(0);
        }
        try {
            if (!str.startsWith("?")) {
                if (str.length() != 0) {
                    str = "?".concat(str);
                } else {
                    str = new String("?");
                }
            }
            return i.a(new URI(str), "UTF-8");
        } catch (URISyntaxException e10) {
            zzK("Error parsing hit parameters", e10);
            return new HashMap(0);
        }
    }

    public final void zzm() {
        zzW();
        zzf().beginTransaction();
    }

    public final void zzn(long j10) {
        n.d();
        zzW();
        ArrayList arrayList = new ArrayList(1);
        Long valueOf = Long.valueOf(j10);
        arrayList.add(valueOf);
        zzP("Deleting hit, id", valueOf);
        zzZ(arrayList);
    }
}
