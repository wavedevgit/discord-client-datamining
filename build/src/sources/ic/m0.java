package ic;

import ac.i;
import android.content.ContentValues;
import android.database.Cursor;
import android.database.sqlite.SQLiteDatabase;
import android.database.sqlite.SQLiteDatabaseLockedException;
import android.os.SystemClock;
import android.util.Base64;
import com.facebook.react.devsupport.StackTraceHelper;
import dc.a;
import dc.c;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Iterator;
import java.util.List;
import java.util.ListIterator;
import java.util.Map;
import java.util.Objects;
import java.util.Set;
import javax.inject.Provider;
import jc.b;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class m0 implements ic.d, jc.b, ic.c {

    /* renamed from: q  reason: collision with root package name */
    private static final yb.c f28445q = yb.c.b("proto");

    /* renamed from: d  reason: collision with root package name */
    private final t0 f28446d;

    /* renamed from: e  reason: collision with root package name */
    private final kc.a f28447e;

    /* renamed from: i  reason: collision with root package name */
    private final kc.a f28448i;

    /* renamed from: o  reason: collision with root package name */
    private final e f28449o;

    /* renamed from: p  reason: collision with root package name */
    private final Provider f28450p;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface b {
        Object apply(Object obj);
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class c {

        /* renamed from: a  reason: collision with root package name */
        final String f28451a;

        /* renamed from: b  reason: collision with root package name */
        final String f28452b;

        private c(String str, String str2) {
            this.f28451a = str;
            this.f28452b = str2;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface d {
        Object a();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public m0(kc.a aVar, kc.a aVar2, e eVar, t0 t0Var, Provider provider) {
        this.f28446d = t0Var;
        this.f28447e = aVar;
        this.f28448i = aVar2;
        this.f28449o = eVar;
        this.f28450p = provider;
    }

    static Object A2(Cursor cursor, b bVar) {
        try {
            return bVar.apply(cursor);
        } finally {
            cursor.close();
        }
    }

    public static /* synthetic */ Object C(m0 m0Var, Cursor cursor) {
        m0Var.getClass();
        while (cursor.moveToNext()) {
            int i10 = cursor.getInt(0);
            m0Var.i(i10, c.b.MESSAGE_TOO_OLD, cursor.getString(1));
        }
        return null;
    }

    public static /* synthetic */ dc.a C0(m0 m0Var, Map map, a.C0289a c0289a, Cursor cursor) {
        m0Var.getClass();
        while (cursor.moveToNext()) {
            String string = cursor.getString(0);
            c.b w12 = m0Var.w1(cursor.getInt(1));
            long j10 = cursor.getLong(2);
            if (!map.containsKey(string)) {
                map.put(string, new ArrayList());
            }
            ((List) map.get(string)).add(dc.c.c().c(w12).b(j10).a());
        }
        m0Var.v2(c0289a, map);
        c0289a.e(m0Var.c2());
        c0289a.d(m0Var.P1());
        c0289a.c((String) m0Var.f28450p.get());
        return c0289a.b();
    }

    public static /* synthetic */ Boolean E0(Cursor cursor) {
        boolean z10;
        if (cursor.getCount() > 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        return Boolean.valueOf(z10);
    }

    public static /* synthetic */ Long F0(m0 m0Var, ac.i iVar, ac.o oVar, SQLiteDatabase sQLiteDatabase) {
        boolean z10;
        byte[] bArr;
        if (m0Var.l2()) {
            m0Var.i(1L, c.b.CACHE_FULL, iVar.j());
            return -1L;
        }
        long z12 = m0Var.z1(sQLiteDatabase, oVar);
        int e10 = m0Var.f28449o.e();
        byte[] a10 = iVar.e().a();
        if (a10.length <= e10) {
            z10 = true;
        } else {
            z10 = false;
        }
        ContentValues contentValues = new ContentValues();
        contentValues.put("context_id", Long.valueOf(z12));
        contentValues.put("transport_name", iVar.j());
        contentValues.put("timestamp_ms", Long.valueOf(iVar.f()));
        contentValues.put("uptime_ms", Long.valueOf(iVar.k()));
        contentValues.put("payload_encoding", iVar.e().b().a());
        contentValues.put("code", iVar.d());
        contentValues.put("num_attempts", (Integer) 0);
        contentValues.put("inline", Boolean.valueOf(z10));
        if (z10) {
            bArr = a10;
        } else {
            bArr = new byte[0];
        }
        contentValues.put("payload", bArr);
        long insert = sQLiteDatabase.insert("events", null, contentValues);
        if (!z10) {
            int ceil = (int) Math.ceil(a10.length / e10);
            for (int i10 = 1; i10 <= ceil; i10++) {
                byte[] copyOfRange = Arrays.copyOfRange(a10, (i10 - 1) * e10, Math.min(i10 * e10, a10.length));
                ContentValues contentValues2 = new ContentValues();
                contentValues2.put("event_id", Long.valueOf(insert));
                contentValues2.put("sequence_num", Integer.valueOf(i10));
                contentValues2.put("bytes", copyOfRange);
                sQLiteDatabase.insert("event_payloads", null, contentValues2);
            }
        }
        for (Map.Entry entry : iVar.i().entrySet()) {
            ContentValues contentValues3 = new ContentValues();
            contentValues3.put("event_id", Long.valueOf(insert));
            contentValues3.put(StackTraceHelper.NAME_KEY, (String) entry.getKey());
            contentValues3.put("value", (String) entry.getValue());
            sQLiteDatabase.insert("event_metadata", null, contentValues3);
        }
        return Long.valueOf(insert);
    }

    public static /* synthetic */ Object G0(SQLiteDatabase sQLiteDatabase) {
        sQLiteDatabase.beginTransaction();
        return null;
    }

    public static /* synthetic */ Long H0(Cursor cursor) {
        if (!cursor.moveToNext()) {
            return null;
        }
        return Long.valueOf(cursor.getLong(0));
    }

    public static /* synthetic */ Object I(final m0 m0Var, String str, String str2, SQLiteDatabase sQLiteDatabase) {
        m0Var.getClass();
        sQLiteDatabase.compileStatement(str).execute();
        A2(sQLiteDatabase.rawQuery(str2, null), new b() { // from class: ic.v
            @Override // ic.m0.b
            public final Object apply(Object obj) {
                return m0.y(m0.this, (Cursor) obj);
            }
        });
        sQLiteDatabase.compileStatement("DELETE FROM events WHERE num_attempts >= 16").execute();
        return null;
    }

    public static /* synthetic */ Boolean J(m0 m0Var, ac.o oVar, SQLiteDatabase sQLiteDatabase) {
        Long f22 = m0Var.f2(sQLiteDatabase, oVar);
        if (f22 == null) {
            return Boolean.FALSE;
        }
        return (Boolean) A2(m0Var.E1().rawQuery("SELECT 1 FROM events WHERE context_id = ? LIMIT 1", new String[]{f22.toString()}), new b() { // from class: ic.u
            @Override // ic.m0.b
            public final Object apply(Object obj) {
                return Boolean.valueOf(((Cursor) obj).moveToNext());
            }
        });
    }

    public static /* synthetic */ Object L0(Throwable th2) {
        throw new jc.a("Timed out while trying to acquire the lock.", th2);
    }

    public static /* synthetic */ Object N0(String str, c.b bVar, long j10, SQLiteDatabase sQLiteDatabase) {
        if (!((Boolean) A2(sQLiteDatabase.rawQuery("SELECT 1 FROM log_event_dropped WHERE log_source = ? AND reason = ?", new String[]{str, Integer.toString(bVar.getNumber())}), new b() { // from class: ic.y
            @Override // ic.m0.b
            public final Object apply(Object obj) {
                return m0.E0((Cursor) obj);
            }
        })).booleanValue()) {
            ContentValues contentValues = new ContentValues();
            contentValues.put("log_source", str);
            contentValues.put("reason", Integer.valueOf(bVar.getNumber()));
            contentValues.put("events_dropped_count", Long.valueOf(j10));
            sQLiteDatabase.insert("log_event_dropped", null, contentValues);
            return null;
        }
        sQLiteDatabase.execSQL("UPDATE log_event_dropped SET events_dropped_count = events_dropped_count + " + j10 + " WHERE log_source = ? AND reason = ?", new String[]{str, Integer.toString(bVar.getNumber())});
        return null;
    }

    public static /* synthetic */ Object O0(Map map, Cursor cursor) {
        while (cursor.moveToNext()) {
            long j10 = cursor.getLong(0);
            Set set = (Set) map.get(Long.valueOf(j10));
            if (set == null) {
                set = new HashSet();
                map.put(Long.valueOf(j10), set);
            }
            set.add(new c(cursor.getString(1), cursor.getString(2)));
        }
        return null;
    }

    private dc.b P1() {
        return dc.b.b().b(dc.e.c().b(B1()).c(e.f28428a.f()).a()).a();
    }

    public static /* synthetic */ Object Q(long j10, ac.o oVar, SQLiteDatabase sQLiteDatabase) {
        ContentValues contentValues = new ContentValues();
        contentValues.put("next_request_ms", Long.valueOf(j10));
        if (sQLiteDatabase.update("transport_contexts", contentValues, "backend_name = ? and priority = ?", new String[]{oVar.b(), String.valueOf(lc.a.a(oVar.d()))}) < 1) {
            contentValues.put("backend_name", oVar.b());
            contentValues.put("priority", Integer.valueOf(lc.a.a(oVar.d())));
            sQLiteDatabase.insert("transport_contexts", null, contentValues);
        }
        return null;
    }

    public static /* synthetic */ Integer S0(final m0 m0Var, long j10, SQLiteDatabase sQLiteDatabase) {
        m0Var.getClass();
        String[] strArr = {String.valueOf(j10)};
        A2(sQLiteDatabase.rawQuery("SELECT COUNT(*), transport_name FROM events WHERE timestamp_ms < ? GROUP BY transport_name", strArr), new b() { // from class: ic.s
            @Override // ic.m0.b
            public final Object apply(Object obj) {
                return m0.C(m0.this, (Cursor) obj);
            }
        });
        return Integer.valueOf(sQLiteDatabase.delete("events", "timestamp_ms < ?", strArr));
    }

    public static /* synthetic */ Object V0(m0 m0Var, List list, ac.o oVar, Cursor cursor) {
        m0Var.getClass();
        while (cursor.moveToNext()) {
            boolean z10 = false;
            long j10 = cursor.getLong(0);
            if (cursor.getInt(7) != 0) {
                z10 = true;
            }
            i.a k10 = ac.i.a().j(cursor.getString(1)).i(cursor.getLong(2)).k(cursor.getLong(3));
            if (z10) {
                k10.h(new ac.h(y2(cursor.getString(4)), cursor.getBlob(5)));
            } else {
                k10.h(new ac.h(y2(cursor.getString(4)), m0Var.w2(j10)));
            }
            if (!cursor.isNull(6)) {
                k10.g(Integer.valueOf(cursor.getInt(6)));
            }
            list.add(k.a(j10, oVar, k10.d()));
        }
        return null;
    }

    private long Y1() {
        return E1().compileStatement("PRAGMA page_count").simpleQueryForLong();
    }

    public static /* synthetic */ byte[] Z(Cursor cursor) {
        ArrayList arrayList = new ArrayList();
        int i10 = 0;
        while (cursor.moveToNext()) {
            byte[] blob = cursor.getBlob(0);
            arrayList.add(blob);
            i10 += blob.length;
        }
        byte[] bArr = new byte[i10];
        int i11 = 0;
        for (int i12 = 0; i12 < arrayList.size(); i12++) {
            byte[] bArr2 = (byte[]) arrayList.get(i12);
            System.arraycopy(bArr2, 0, bArr, i11, bArr2.length);
            i11 += bArr2.length;
        }
        return bArr;
    }

    public static /* synthetic */ Object Z0(m0 m0Var, SQLiteDatabase sQLiteDatabase) {
        m0Var.getClass();
        sQLiteDatabase.compileStatement("DELETE FROM log_event_dropped").execute();
        sQLiteDatabase.compileStatement("UPDATE global_log_event_state SET last_metrics_upload_ms=" + m0Var.f28447e.a()).execute();
        return null;
    }

    public static /* synthetic */ dc.a a1(final m0 m0Var, String str, final Map map, final a.C0289a c0289a, SQLiteDatabase sQLiteDatabase) {
        m0Var.getClass();
        return (dc.a) A2(sQLiteDatabase.rawQuery(str, new String[0]), new b() { // from class: ic.a0
            @Override // ic.m0.b
            public final Object apply(Object obj) {
                return m0.C0(m0.this, map, c0289a, (Cursor) obj);
            }
        });
    }

    private long a2() {
        return E1().compileStatement("PRAGMA page_size").simpleQueryForLong();
    }

    public static /* synthetic */ Long b1(Cursor cursor) {
        if (cursor.moveToNext()) {
            return Long.valueOf(cursor.getLong(0));
        }
        return 0L;
    }

    private dc.f c2() {
        final long a10 = this.f28447e.a();
        return (dc.f) g2(new b() { // from class: ic.c0
            @Override // ic.m0.b
            public final Object apply(Object obj) {
                return m0.f1(a10, (SQLiteDatabase) obj);
            }
        });
    }

    public static /* synthetic */ dc.f f1(final long j10, SQLiteDatabase sQLiteDatabase) {
        return (dc.f) A2(sQLiteDatabase.rawQuery("SELECT last_metrics_upload_ms FROM global_log_event_state LIMIT 1", new String[0]), new b() { // from class: ic.d0
            @Override // ic.m0.b
            public final Object apply(Object obj) {
                return m0.n(j10, (Cursor) obj);
            }
        });
    }

    private Long f2(SQLiteDatabase sQLiteDatabase, ac.o oVar) {
        StringBuilder sb2 = new StringBuilder("backend_name = ? and priority = ?");
        ArrayList arrayList = new ArrayList(Arrays.asList(oVar.b(), String.valueOf(lc.a.a(oVar.d()))));
        if (oVar.c() != null) {
            sb2.append(" and extras = ?");
            arrayList.add(Base64.encodeToString(oVar.c(), 0));
        } else {
            sb2.append(" and extras is null");
        }
        return (Long) A2(sQLiteDatabase.query("transport_contexts", new String[]{"_id"}, sb2.toString(), (String[]) arrayList.toArray(new String[0]), null, null, null), new b() { // from class: ic.n
            @Override // ic.m0.b
            public final Object apply(Object obj) {
                return m0.H0((Cursor) obj);
            }
        });
    }

    private boolean l2() {
        if (Y1() * a2() >= this.f28449o.f()) {
            return true;
        }
        return false;
    }

    private List m2(List list, Map map) {
        ListIterator listIterator = list.listIterator();
        while (listIterator.hasNext()) {
            k kVar = (k) listIterator.next();
            if (map.containsKey(Long.valueOf(kVar.c()))) {
                i.a l10 = kVar.b().l();
                for (c cVar : (Set) map.get(Long.valueOf(kVar.c()))) {
                    l10.c(cVar.f28451a, cVar.f28452b);
                }
                listIterator.set(k.a(kVar.c(), kVar.d(), l10.d()));
            }
        }
        return list;
    }

    public static /* synthetic */ dc.f n(long j10, Cursor cursor) {
        cursor.moveToNext();
        return dc.f.c().c(cursor.getLong(0)).b(j10).a();
    }

    private List o2(SQLiteDatabase sQLiteDatabase, final ac.o oVar, int i10) {
        final ArrayList arrayList = new ArrayList();
        Long f22 = f2(sQLiteDatabase, oVar);
        if (f22 == null) {
            return arrayList;
        }
        A2(sQLiteDatabase.query("events", new String[]{"_id", "transport_name", "timestamp_ms", "uptime_ms", "payload_encoding", "payload", "code", "inline"}, "context_id = ?", new String[]{f22.toString()}, null, null, null, String.valueOf(i10)), new b() { // from class: ic.x
            @Override // ic.m0.b
            public final Object apply(Object obj) {
                return m0.V0(m0.this, arrayList, oVar, (Cursor) obj);
            }
        });
        return arrayList;
    }

    public static /* synthetic */ List p(m0 m0Var, ac.o oVar, SQLiteDatabase sQLiteDatabase) {
        yb.e[] values;
        List o22 = m0Var.o2(sQLiteDatabase, oVar, m0Var.f28449o.d());
        for (yb.e eVar : yb.e.values()) {
            if (eVar != oVar.d()) {
                int d10 = m0Var.f28449o.d() - o22.size();
                if (d10 <= 0) {
                    break;
                }
                o22.addAll(m0Var.o2(sQLiteDatabase, oVar.f(eVar), d10));
            }
        }
        return m0Var.m2(o22, m0Var.t2(sQLiteDatabase, o22));
    }

    public static /* synthetic */ List s(Cursor cursor) {
        ArrayList arrayList = new ArrayList();
        while (cursor.moveToNext()) {
            arrayList.add(ac.o.a().b(cursor.getString(1)).d(lc.a.b(cursor.getInt(2))).c(u2(cursor.getString(3))).a());
        }
        return arrayList;
    }

    private Map t2(SQLiteDatabase sQLiteDatabase, List list) {
        final HashMap hashMap = new HashMap();
        StringBuilder sb2 = new StringBuilder("event_id IN (");
        for (int i10 = 0; i10 < list.size(); i10++) {
            sb2.append(((k) list.get(i10)).c());
            if (i10 < list.size() - 1) {
                sb2.append(',');
            }
        }
        sb2.append(')');
        A2(sQLiteDatabase.query("event_metadata", new String[]{"event_id", StackTraceHelper.NAME_KEY, "value"}, sb2.toString(), null, null, null, null), new b() { // from class: ic.z
            @Override // ic.m0.b
            public final Object apply(Object obj) {
                return m0.O0(hashMap, (Cursor) obj);
            }
        });
        return hashMap;
    }

    private static byte[] u2(String str) {
        if (str == null) {
            return null;
        }
        return Base64.decode(str, 0);
    }

    private void v2(a.C0289a c0289a, Map map) {
        for (Map.Entry entry : map.entrySet()) {
            c0289a.a(dc.d.c().c((String) entry.getKey()).b((List) entry.getValue()).a());
        }
    }

    private c.b w1(int i10) {
        c.b bVar = c.b.REASON_UNKNOWN;
        if (i10 == bVar.getNumber()) {
            return bVar;
        }
        c.b bVar2 = c.b.MESSAGE_TOO_OLD;
        if (i10 == bVar2.getNumber()) {
            return bVar2;
        }
        c.b bVar3 = c.b.CACHE_FULL;
        if (i10 == bVar3.getNumber()) {
            return bVar3;
        }
        c.b bVar4 = c.b.PAYLOAD_TOO_BIG;
        if (i10 == bVar4.getNumber()) {
            return bVar4;
        }
        c.b bVar5 = c.b.MAX_RETRIES_REACHED;
        if (i10 == bVar5.getNumber()) {
            return bVar5;
        }
        c.b bVar6 = c.b.INVALID_PAYLOD;
        if (i10 == bVar6.getNumber()) {
            return bVar6;
        }
        c.b bVar7 = c.b.SERVER_ERROR;
        if (i10 == bVar7.getNumber()) {
            return bVar7;
        }
        ec.a.b("SQLiteEventStore", "%n is not valid. No matched LogEventDropped-Reason found. Treated it as REASON_UNKNOWN", Integer.valueOf(i10));
        return bVar;
    }

    private byte[] w2(long j10) {
        return (byte[]) A2(E1().query("event_payloads", new String[]{"bytes"}, "event_id = ?", new String[]{String.valueOf(j10)}, null, null, "sequence_num"), new b() { // from class: ic.b0
            @Override // ic.m0.b
            public final Object apply(Object obj) {
                return m0.Z((Cursor) obj);
            }
        });
    }

    private void x1(final SQLiteDatabase sQLiteDatabase) {
        x2(new d() { // from class: ic.l
            @Override // ic.m0.d
            public final Object a() {
                return m0.G0(sQLiteDatabase);
            }
        }, new b() { // from class: ic.w
            @Override // ic.m0.b
            public final Object apply(Object obj) {
                return m0.L0((Throwable) obj);
            }
        });
    }

    private Object x2(d dVar, b bVar) {
        long a10 = this.f28448i.a();
        while (true) {
            try {
                return dVar.a();
            } catch (SQLiteDatabaseLockedException e10) {
                if (this.f28448i.a() >= this.f28449o.b() + a10) {
                    return bVar.apply(e10);
                }
                SystemClock.sleep(50L);
            }
        }
    }

    public static /* synthetic */ Object y(m0 m0Var, Cursor cursor) {
        m0Var.getClass();
        while (cursor.moveToNext()) {
            int i10 = cursor.getInt(0);
            m0Var.i(i10, c.b.MAX_RETRIES_REACHED, cursor.getString(1));
        }
        return null;
    }

    private static yb.c y2(String str) {
        if (str == null) {
            return f28445q;
        }
        return yb.c.b(str);
    }

    public static /* synthetic */ SQLiteDatabase z(Throwable th2) {
        throw new jc.a("Timed out while trying to open db.", th2);
    }

    public static /* synthetic */ List z0(SQLiteDatabase sQLiteDatabase) {
        return (List) A2(sQLiteDatabase.rawQuery("SELECT distinct t._id, t.backend_name, t.priority, t.extras FROM transport_contexts AS t, events AS e WHERE e.context_id = t._id", new String[0]), new b() { // from class: ic.k0
            @Override // ic.m0.b
            public final Object apply(Object obj) {
                return m0.s((Cursor) obj);
            }
        });
    }

    private long z1(SQLiteDatabase sQLiteDatabase, ac.o oVar) {
        Long f22 = f2(sQLiteDatabase, oVar);
        if (f22 != null) {
            return f22.longValue();
        }
        ContentValues contentValues = new ContentValues();
        contentValues.put("backend_name", oVar.b());
        contentValues.put("priority", Integer.valueOf(lc.a.a(oVar.d())));
        contentValues.put("next_request_ms", (Integer) 0);
        if (oVar.c() != null) {
            contentValues.put("extras", Base64.encodeToString(oVar.c(), 0));
        }
        return sQLiteDatabase.insert("transport_contexts", null, contentValues);
    }

    private static String z2(Iterable iterable) {
        StringBuilder sb2 = new StringBuilder("(");
        Iterator it = iterable.iterator();
        while (it.hasNext()) {
            sb2.append(((k) it.next()).c());
            if (it.hasNext()) {
                sb2.append(',');
            }
        }
        sb2.append(')');
        return sb2.toString();
    }

    @Override // ic.d
    public k A1(final ac.o oVar, final ac.i iVar) {
        ec.a.c("SQLiteEventStore", "Storing event with priority=%s, name=%s for destination %s", oVar.d(), iVar.j(), oVar.b());
        long longValue = ((Long) g2(new b() { // from class: ic.i0
            @Override // ic.m0.b
            public final Object apply(Object obj) {
                return m0.F0(m0.this, iVar, oVar, (SQLiteDatabase) obj);
            }
        })).longValue();
        if (longValue < 1) {
            return null;
        }
        return k.a(longValue, oVar, iVar);
    }

    long B1() {
        return Y1() * a2();
    }

    SQLiteDatabase E1() {
        final t0 t0Var = this.f28446d;
        Objects.requireNonNull(t0Var);
        return (SQLiteDatabase) x2(new d() { // from class: ic.e0
            @Override // ic.m0.d
            public final Object a() {
                return t0.this.getWritableDatabase();
            }
        }, new b() { // from class: ic.f0
            @Override // ic.m0.b
            public final Object apply(Object obj) {
                return m0.z((Throwable) obj);
            }
        });
    }

    @Override // ic.d
    public void K(Iterable iterable) {
        if (!iterable.iterator().hasNext()) {
            return;
        }
        E1().compileStatement("DELETE FROM events WHERE _id in " + z2(iterable)).execute();
    }

    @Override // ic.d
    public void K1(final ac.o oVar, final long j10) {
        g2(new b() { // from class: ic.p
            @Override // ic.m0.b
            public final Object apply(Object obj) {
                return m0.Q(j10, oVar, (SQLiteDatabase) obj);
            }
        });
    }

    @Override // ic.d
    public boolean N1(final ac.o oVar) {
        return ((Boolean) g2(new b() { // from class: ic.o
            @Override // ic.m0.b
            public final Object apply(Object obj) {
                return m0.J(m0.this, oVar, (SQLiteDatabase) obj);
            }
        })).booleanValue();
    }

    @Override // ic.d
    public void T0(Iterable iterable) {
        if (!iterable.iterator().hasNext()) {
            return;
        }
        final String str = "UPDATE events SET num_attempts = num_attempts + 1 WHERE _id in " + z2(iterable);
        g2(new b() { // from class: ic.l0
            @Override // ic.m0.b
            public final Object apply(Object obj) {
                return m0.I(m0.this, str, r3, (SQLiteDatabase) obj);
            }
        });
    }

    @Override // ic.c
    public void a() {
        g2(new b() { // from class: ic.q
            @Override // ic.m0.b
            public final Object apply(Object obj) {
                return m0.Z0(m0.this, (SQLiteDatabase) obj);
            }
        });
    }

    @Override // ic.d
    public long a0(ac.o oVar) {
        return ((Long) A2(E1().rawQuery("SELECT next_request_ms FROM transport_contexts WHERE backend_name = ? and priority = ?", new String[]{oVar.b(), String.valueOf(lc.a.a(oVar.d()))}), new b() { // from class: ic.h0
            @Override // ic.m0.b
            public final Object apply(Object obj) {
                return m0.b1((Cursor) obj);
            }
        })).longValue();
    }

    @Override // ic.d
    public Iterable c0() {
        return (Iterable) g2(new b() { // from class: ic.g0
            @Override // ic.m0.b
            public final Object apply(Object obj) {
                return m0.z0((SQLiteDatabase) obj);
            }
        });
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        this.f28446d.close();
    }

    Object g2(b bVar) {
        SQLiteDatabase E1 = E1();
        E1.beginTransaction();
        try {
            Object apply = bVar.apply(E1);
            E1.setTransactionSuccessful();
            return apply;
        } finally {
            E1.endTransaction();
        }
    }

    @Override // ic.c
    public dc.a h() {
        final a.C0289a e10 = dc.a.e();
        final HashMap hashMap = new HashMap();
        return (dc.a) g2(new b() { // from class: ic.t
            @Override // ic.m0.b
            public final Object apply(Object obj) {
                return m0.a1(m0.this, r2, hashMap, e10, (SQLiteDatabase) obj);
            }
        });
    }

    @Override // ic.c
    public void i(final long j10, final c.b bVar, final String str) {
        g2(new b() { // from class: ic.r
            @Override // ic.m0.b
            public final Object apply(Object obj) {
                return m0.N0(str, bVar, j10, (SQLiteDatabase) obj);
            }
        });
    }

    @Override // ic.d
    public int l() {
        final long a10 = this.f28447e.a() - this.f28449o.c();
        return ((Integer) g2(new b() { // from class: ic.j0
            @Override // ic.m0.b
            public final Object apply(Object obj) {
                return m0.S0(m0.this, a10, (SQLiteDatabase) obj);
            }
        })).intValue();
    }

    @Override // jc.b
    public Object m(b.a aVar) {
        SQLiteDatabase E1 = E1();
        x1(E1);
        try {
            Object execute = aVar.execute();
            E1.setTransactionSuccessful();
            return execute;
        } finally {
            E1.endTransaction();
        }
    }

    @Override // ic.d
    public Iterable n2(final ac.o oVar) {
        return (Iterable) g2(new b() { // from class: ic.m
            @Override // ic.m0.b
            public final Object apply(Object obj) {
                return m0.p(m0.this, oVar, (SQLiteDatabase) obj);
            }
        });
    }
}
