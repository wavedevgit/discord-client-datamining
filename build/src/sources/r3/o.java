package r3;

import android.content.Context;
import android.content.Intent;
import android.database.Cursor;
import android.database.sqlite.SQLiteException;
import android.util.Log;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;
import java.util.LinkedHashMap;
import java.util.Locale;
import java.util.Map;
import java.util.Set;
import java.util.concurrent.atomic.AtomicBoolean;
import java.util.concurrent.locks.Lock;
import kotlin.Unit;
import kotlin.collections.CollectionsKt;
import kotlin.collections.o0;
import kotlin.collections.x0;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.text.StringsKt;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class o {

    /* renamed from: q  reason: collision with root package name */
    public static final a f48521q = new a(null);

    /* renamed from: r  reason: collision with root package name */
    private static final String[] f48522r = {"UPDATE", "DELETE", "INSERT"};

    /* renamed from: a  reason: collision with root package name */
    private final u f48523a;

    /* renamed from: b  reason: collision with root package name */
    private final Map f48524b;

    /* renamed from: c  reason: collision with root package name */
    private final Map f48525c;

    /* renamed from: d  reason: collision with root package name */
    private final Map f48526d;

    /* renamed from: e  reason: collision with root package name */
    private final String[] f48527e;

    /* renamed from: f  reason: collision with root package name */
    private r3.c f48528f;

    /* renamed from: g  reason: collision with root package name */
    private final AtomicBoolean f48529g;

    /* renamed from: h  reason: collision with root package name */
    private volatile boolean f48530h;

    /* renamed from: i  reason: collision with root package name */
    private volatile x3.k f48531i;

    /* renamed from: j  reason: collision with root package name */
    private final b f48532j;

    /* renamed from: k  reason: collision with root package name */
    private final m f48533k;

    /* renamed from: l  reason: collision with root package name */
    private final m.b f48534l;

    /* renamed from: m  reason: collision with root package name */
    private r f48535m;

    /* renamed from: n  reason: collision with root package name */
    private final Object f48536n;

    /* renamed from: o  reason: collision with root package name */
    private final Object f48537o;

    /* renamed from: p  reason: collision with root package name */
    public final Runnable f48538p;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final void a(x3.g database) {
            Intrinsics.checkNotNullParameter(database, "database");
            if (database.c2()) {
                database.l0();
            } else {
                database.H();
            }
        }

        public final String b(String tableName, String triggerType) {
            Intrinsics.checkNotNullParameter(tableName, "tableName");
            Intrinsics.checkNotNullParameter(triggerType, "triggerType");
            return "`room_table_modification_trigger_" + tableName + '_' + triggerType + '`';
        }

        private a() {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class b {

        /* renamed from: e  reason: collision with root package name */
        public static final a f48539e = new a(null);

        /* renamed from: a  reason: collision with root package name */
        private final long[] f48540a;

        /* renamed from: b  reason: collision with root package name */
        private final boolean[] f48541b;

        /* renamed from: c  reason: collision with root package name */
        private final int[] f48542c;

        /* renamed from: d  reason: collision with root package name */
        private boolean f48543d;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        public static final class a {
            public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
                this();
            }

            private a() {
            }
        }

        public b(int i10) {
            this.f48540a = new long[i10];
            this.f48541b = new boolean[i10];
            this.f48542c = new int[i10];
        }

        public final int[] a() {
            boolean z10;
            synchronized (this) {
                try {
                    if (!this.f48543d) {
                        return null;
                    }
                    long[] jArr = this.f48540a;
                    int length = jArr.length;
                    int i10 = 0;
                    int i11 = 0;
                    while (i10 < length) {
                        int i12 = i11 + 1;
                        int i13 = 1;
                        if (jArr[i10] > 0) {
                            z10 = true;
                        } else {
                            z10 = false;
                        }
                        boolean[] zArr = this.f48541b;
                        if (z10 != zArr[i11]) {
                            int[] iArr = this.f48542c;
                            if (!z10) {
                                i13 = 2;
                            }
                            iArr[i11] = i13;
                        } else {
                            this.f48542c[i11] = 0;
                        }
                        zArr[i11] = z10;
                        i10++;
                        i11 = i12;
                    }
                    this.f48543d = false;
                    return (int[]) this.f48542c.clone();
                } catch (Throwable th2) {
                    throw th2;
                }
            }
        }

        public final boolean b(int... tableIds) {
            boolean z10;
            Intrinsics.checkNotNullParameter(tableIds, "tableIds");
            synchronized (this) {
                try {
                    z10 = false;
                    for (int i10 : tableIds) {
                        long[] jArr = this.f48540a;
                        long j10 = jArr[i10];
                        jArr[i10] = 1 + j10;
                        if (j10 == 0) {
                            z10 = true;
                            this.f48543d = true;
                        }
                    }
                    Unit unit = Unit.f32008a;
                } catch (Throwable th2) {
                    throw th2;
                }
            }
            return z10;
        }

        public final boolean c(int... tableIds) {
            boolean z10;
            Intrinsics.checkNotNullParameter(tableIds, "tableIds");
            synchronized (this) {
                try {
                    z10 = false;
                    for (int i10 : tableIds) {
                        long[] jArr = this.f48540a;
                        long j10 = jArr[i10];
                        jArr[i10] = j10 - 1;
                        if (j10 == 1) {
                            z10 = true;
                            this.f48543d = true;
                        }
                    }
                    Unit unit = Unit.f32008a;
                } catch (Throwable th2) {
                    throw th2;
                }
            }
            return z10;
        }

        public final void d() {
            synchronized (this) {
                Arrays.fill(this.f48541b, false);
                this.f48543d = true;
                Unit unit = Unit.f32008a;
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static abstract class c {

        /* renamed from: a  reason: collision with root package name */
        private final String[] f48544a;

        public c(String[] tables) {
            Intrinsics.checkNotNullParameter(tables, "tables");
            this.f48544a = tables;
        }

        public final String[] a() {
            return this.f48544a;
        }

        public abstract boolean b();

        public abstract void c(Set set);
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class d {

        /* renamed from: a  reason: collision with root package name */
        private final c f48545a;

        /* renamed from: b  reason: collision with root package name */
        private final int[] f48546b;

        /* renamed from: c  reason: collision with root package name */
        private final String[] f48547c;

        /* renamed from: d  reason: collision with root package name */
        private final Set f48548d;

        public d(c observer, int[] tableIds, String[] tableNames) {
            boolean z10;
            Set d10;
            Intrinsics.checkNotNullParameter(observer, "observer");
            Intrinsics.checkNotNullParameter(tableIds, "tableIds");
            Intrinsics.checkNotNullParameter(tableNames, "tableNames");
            this.f48545a = observer;
            this.f48546b = tableIds;
            this.f48547c = tableNames;
            if (tableNames.length == 0) {
                z10 = true;
            } else {
                z10 = false;
            }
            if (!z10) {
                d10 = x0.c(tableNames[0]);
            } else {
                d10 = x0.d();
            }
            this.f48548d = d10;
            if (tableIds.length == tableNames.length) {
                return;
            }
            throw new IllegalStateException("Check failed.");
        }

        public final int[] a() {
            return this.f48546b;
        }

        public final void b(Set invalidatedTablesIds) {
            Set d10;
            Intrinsics.checkNotNullParameter(invalidatedTablesIds, "invalidatedTablesIds");
            int[] iArr = this.f48546b;
            int length = iArr.length;
            if (length != 0) {
                int i10 = 0;
                if (length != 1) {
                    Set b10 = x0.b();
                    int[] iArr2 = this.f48546b;
                    int length2 = iArr2.length;
                    int i11 = 0;
                    while (i10 < length2) {
                        int i12 = i11 + 1;
                        if (invalidatedTablesIds.contains(Integer.valueOf(iArr2[i10]))) {
                            b10.add(this.f48547c[i11]);
                        }
                        i10++;
                        i11 = i12;
                    }
                    d10 = x0.a(b10);
                } else if (invalidatedTablesIds.contains(Integer.valueOf(iArr[0]))) {
                    d10 = this.f48548d;
                } else {
                    d10 = x0.d();
                }
            } else {
                d10 = x0.d();
            }
            if (!d10.isEmpty()) {
                this.f48545a.c(d10);
            }
        }

        public final void c(String[] tables) {
            Set d10;
            String[] strArr;
            Intrinsics.checkNotNullParameter(tables, "tables");
            int length = this.f48547c.length;
            if (length != 0) {
                if (length != 1) {
                    Set b10 = x0.b();
                    for (String str : tables) {
                        for (String str2 : this.f48547c) {
                            if (StringsKt.A(str2, str, true)) {
                                b10.add(str2);
                            }
                        }
                    }
                    d10 = x0.a(b10);
                } else {
                    int length2 = tables.length;
                    int i10 = 0;
                    while (true) {
                        if (i10 < length2) {
                            if (StringsKt.A(tables[i10], this.f48547c[0], true)) {
                                d10 = this.f48548d;
                                break;
                            }
                            i10++;
                        } else {
                            d10 = x0.d();
                            break;
                        }
                    }
                }
            } else {
                d10 = x0.d();
            }
            if (!d10.isEmpty()) {
                this.f48545a.c(d10);
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class e implements Runnable {
        e() {
        }

        private final Set a() {
            o oVar = o.this;
            Set b10 = x0.b();
            Cursor y10 = u.y(oVar.e(), new x3.a("SELECT * FROM room_table_modification_log WHERE invalidated = 1;"), null, 2, null);
            while (y10.moveToNext()) {
                try {
                    b10.add(Integer.valueOf(y10.getInt(0)));
                } finally {
                }
            }
            Unit unit = Unit.f32008a;
            bs.c.a(y10, null);
            Set a10 = x0.a(b10);
            if (!a10.isEmpty()) {
                if (o.this.d() != null) {
                    x3.k d10 = o.this.d();
                    if (d10 != null) {
                        d10.U();
                        return a10;
                    }
                    throw new IllegalArgumentException("Required value was null.");
                }
                throw new IllegalStateException("Required value was null.");
            }
            return a10;
        }

        /* JADX WARN: Code restructure failed: missing block: B:25:0x0080, code lost:
            if (r0 != null) goto L31;
         */
        /* JADX WARN: Code restructure failed: missing block: B:26:0x0082, code lost:
            r0.e();
         */
        /* JADX WARN: Code restructure failed: missing block: B:38:0x00a6, code lost:
            if (r0 == null) goto L32;
         */
        /* JADX WARN: Code restructure failed: missing block: B:42:0x00bd, code lost:
            if (r0 == null) goto L32;
         */
        /* JADX WARN: Code restructure failed: missing block: B:45:0x00c7, code lost:
            if (r2.isEmpty() != false) goto L49;
         */
        /* JADX WARN: Code restructure failed: missing block: B:46:0x00c9, code lost:
            r0 = r4.f48549d.f();
            r1 = r4.f48549d;
         */
        /* JADX WARN: Code restructure failed: missing block: B:47:0x00d1, code lost:
            monitor-enter(r0);
         */
        /* JADX WARN: Code restructure failed: missing block: B:48:0x00d2, code lost:
            r1 = r1.f().iterator();
         */
        /* JADX WARN: Code restructure failed: missing block: B:50:0x00de, code lost:
            if (r1.hasNext() == false) goto L41;
         */
        /* JADX WARN: Code restructure failed: missing block: B:51:0x00e0, code lost:
            ((r3.o.d) ((java.util.Map.Entry) r1.next()).getValue()).b(r2);
         */
        /* JADX WARN: Code restructure failed: missing block: B:52:0x00f0, code lost:
            r1 = move-exception;
         */
        /* JADX WARN: Code restructure failed: missing block: B:54:0x00f2, code lost:
            r1 = kotlin.Unit.f32008a;
         */
        /* JADX WARN: Code restructure failed: missing block: B:55:0x00f4, code lost:
            monitor-exit(r0);
         */
        /* JADX WARN: Code restructure failed: missing block: B:58:0x00f7, code lost:
            throw r1;
         */
        /* JADX WARN: Code restructure failed: missing block: B:72:?, code lost:
            return;
         */
        /* JADX WARN: Code restructure failed: missing block: B:73:?, code lost:
            return;
         */
        @Override // java.lang.Runnable
        /*
            Code decompiled incorrectly, please refer to instructions dump.
            To view partially-correct add '--show-bad-code' argument
        */
        public void run() {
            /*
                Method dump skipped, instructions count: 264
                To view this dump add '--comments-level debug' option
            */
            throw new UnsupportedOperationException("Method not decompiled: r3.o.e.run():void");
        }
    }

    public o(u database, Map shadowTablesMap, Map viewTables, String... tableNames) {
        String str;
        Intrinsics.checkNotNullParameter(database, "database");
        Intrinsics.checkNotNullParameter(shadowTablesMap, "shadowTablesMap");
        Intrinsics.checkNotNullParameter(viewTables, "viewTables");
        Intrinsics.checkNotNullParameter(tableNames, "tableNames");
        this.f48523a = database;
        this.f48524b = shadowTablesMap;
        this.f48525c = viewTables;
        this.f48529g = new AtomicBoolean(false);
        this.f48532j = new b(tableNames.length);
        this.f48533k = new m(database);
        this.f48534l = new m.b();
        this.f48536n = new Object();
        this.f48537o = new Object();
        this.f48526d = new LinkedHashMap();
        int length = tableNames.length;
        String[] strArr = new String[length];
        for (int i10 = 0; i10 < length; i10++) {
            String str2 = tableNames[i10];
            Locale US = Locale.US;
            Intrinsics.checkNotNullExpressionValue(US, "US");
            String lowerCase = str2.toLowerCase(US);
            Intrinsics.checkNotNullExpressionValue(lowerCase, "this as java.lang.String).toLowerCase(locale)");
            this.f48526d.put(lowerCase, Integer.valueOf(i10));
            String str3 = (String) this.f48524b.get(tableNames[i10]);
            if (str3 != null) {
                Intrinsics.checkNotNullExpressionValue(US, "US");
                str = str3.toLowerCase(US);
                Intrinsics.checkNotNullExpressionValue(str, "this as java.lang.String).toLowerCase(locale)");
            } else {
                str = null;
            }
            if (str != null) {
                lowerCase = str;
            }
            strArr[i10] = lowerCase;
        }
        this.f48527e = strArr;
        for (Map.Entry entry : this.f48524b.entrySet()) {
            Locale US2 = Locale.US;
            Intrinsics.checkNotNullExpressionValue(US2, "US");
            String lowerCase2 = ((String) entry.getValue()).toLowerCase(US2);
            Intrinsics.checkNotNullExpressionValue(lowerCase2, "this as java.lang.String).toLowerCase(locale)");
            if (this.f48526d.containsKey(lowerCase2)) {
                Intrinsics.checkNotNullExpressionValue(US2, "US");
                String lowerCase3 = ((String) entry.getKey()).toLowerCase(US2);
                Intrinsics.checkNotNullExpressionValue(lowerCase3, "this as java.lang.String).toLowerCase(locale)");
                Map map = this.f48526d;
                map.put(lowerCase3, o0.j(map, lowerCase2));
            }
        }
        this.f48538p = new e();
    }

    private final String[] n(String[] strArr) {
        Set b10 = x0.b();
        for (String str : strArr) {
            Map map = this.f48525c;
            Locale US = Locale.US;
            Intrinsics.checkNotNullExpressionValue(US, "US");
            String lowerCase = str.toLowerCase(US);
            Intrinsics.checkNotNullExpressionValue(lowerCase, "this as java.lang.String).toLowerCase(locale)");
            if (map.containsKey(lowerCase)) {
                Map map2 = this.f48525c;
                Intrinsics.checkNotNullExpressionValue(US, "US");
                String lowerCase2 = str.toLowerCase(US);
                Intrinsics.checkNotNullExpressionValue(lowerCase2, "this as java.lang.String).toLowerCase(locale)");
                Object obj = map2.get(lowerCase2);
                Intrinsics.checkNotNull(obj);
                b10.addAll((Collection) obj);
            } else {
                b10.add(str);
            }
        }
        Object[] array = x0.a(b10).toArray(new String[0]);
        Intrinsics.checkNotNull(array, "null cannot be cast to non-null type kotlin.Array<T of kotlin.collections.ArraysKt__ArraysJVMKt.toTypedArray>");
        return (String[]) array;
    }

    private final void q(x3.g gVar, int i10) {
        gVar.O("INSERT OR IGNORE INTO room_table_modification_log VALUES(" + i10 + ", 0)");
        String str = this.f48527e[i10];
        for (String str2 : f48522r) {
            String str3 = "CREATE TEMP TRIGGER IF NOT EXISTS " + f48521q.b(str, str2) + " AFTER " + str2 + " ON `" + str + "` BEGIN UPDATE room_table_modification_log SET invalidated = 1 WHERE table_id = " + i10 + " AND invalidated = 0; END";
            Intrinsics.checkNotNullExpressionValue(str3, "StringBuilder().apply(builderAction).toString()");
            gVar.O(str3);
        }
    }

    private final void r(x3.g gVar, int i10) {
        String[] strArr;
        String str = this.f48527e[i10];
        for (String str2 : f48522r) {
            String str3 = "DROP TRIGGER IF EXISTS " + f48521q.b(str, str2);
            Intrinsics.checkNotNullExpressionValue(str3, "StringBuilder().apply(builderAction).toString()");
            gVar.O(str3);
        }
    }

    public void b(c observer) {
        d dVar;
        Intrinsics.checkNotNullParameter(observer, "observer");
        String[] n10 = n(observer.a());
        ArrayList arrayList = new ArrayList(n10.length);
        for (String str : n10) {
            Map map = this.f48526d;
            Locale US = Locale.US;
            Intrinsics.checkNotNullExpressionValue(US, "US");
            String lowerCase = str.toLowerCase(US);
            Intrinsics.checkNotNullExpressionValue(lowerCase, "this as java.lang.String).toLowerCase(locale)");
            Integer num = (Integer) map.get(lowerCase);
            if (num != null) {
                arrayList.add(num);
            } else {
                throw new IllegalArgumentException("There is no table with name " + str);
            }
        }
        int[] g12 = CollectionsKt.g1(arrayList);
        d dVar2 = new d(observer, g12, n10);
        synchronized (this.f48534l) {
            dVar = (d) this.f48534l.g(observer, dVar2);
        }
        if (dVar == null && this.f48532j.b(Arrays.copyOf(g12, g12.length))) {
            s();
        }
    }

    public final boolean c() {
        if (!this.f48523a.w()) {
            return false;
        }
        if (!this.f48530h) {
            this.f48523a.m().getWritableDatabase();
        }
        if (!this.f48530h) {
            Log.e("ROOM", "database is not initialized even though it is open");
            return false;
        }
        return true;
    }

    public final x3.k d() {
        return this.f48531i;
    }

    public final u e() {
        return this.f48523a;
    }

    public final m.b f() {
        return this.f48534l;
    }

    public final AtomicBoolean g() {
        return this.f48529g;
    }

    public final Map h() {
        return this.f48526d;
    }

    public final void i(x3.g database) {
        Intrinsics.checkNotNullParameter(database, "database");
        synchronized (this.f48537o) {
            if (this.f48530h) {
                Log.e("ROOM", "Invalidation tracker is initialized twice :/.");
                return;
            }
            database.O("PRAGMA temp_store = MEMORY;");
            database.O("PRAGMA recursive_triggers='ON';");
            database.O("CREATE TEMP TABLE room_table_modification_log (table_id INTEGER PRIMARY KEY, invalidated INTEGER NOT NULL DEFAULT 0)");
            t(database);
            this.f48531i = database.k1("UPDATE room_table_modification_log SET invalidated = 0 WHERE invalidated = 1");
            this.f48530h = true;
            Unit unit = Unit.f32008a;
        }
    }

    public final void j(String... tables) {
        Intrinsics.checkNotNullParameter(tables, "tables");
        synchronized (this.f48534l) {
            try {
                for (Map.Entry entry : this.f48534l) {
                    Intrinsics.checkNotNullExpressionValue(entry, "(observer, wrapper)");
                    d dVar = (d) entry.getValue();
                    if (!((c) entry.getKey()).b()) {
                        dVar.c(tables);
                    }
                }
                Unit unit = Unit.f32008a;
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    public final void k() {
        synchronized (this.f48537o) {
            this.f48530h = false;
            this.f48532j.d();
            Unit unit = Unit.f32008a;
        }
    }

    public void l() {
        if (this.f48529g.compareAndSet(false, true)) {
            r3.c cVar = this.f48528f;
            if (cVar != null) {
                cVar.j();
            }
            this.f48523a.n().execute(this.f48538p);
        }
    }

    public void m(c observer) {
        d dVar;
        Intrinsics.checkNotNullParameter(observer, "observer");
        synchronized (this.f48534l) {
            dVar = (d) this.f48534l.h(observer);
        }
        if (dVar != null) {
            b bVar = this.f48532j;
            int[] a10 = dVar.a();
            if (bVar.c(Arrays.copyOf(a10, a10.length))) {
                s();
            }
        }
    }

    public final void o(r3.c autoCloser) {
        Intrinsics.checkNotNullParameter(autoCloser, "autoCloser");
        this.f48528f = autoCloser;
        autoCloser.m(new Runnable() { // from class: r3.n
            @Override // java.lang.Runnable
            public final void run() {
                o.this.k();
            }
        });
    }

    public final void p(Context context, String name, Intent serviceIntent) {
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(name, "name");
        Intrinsics.checkNotNullParameter(serviceIntent, "serviceIntent");
        this.f48535m = new r(context, name, serviceIntent, this, this.f48523a.n());
    }

    public final void s() {
        if (!this.f48523a.w()) {
            return;
        }
        t(this.f48523a.m().getWritableDatabase());
    }

    public final void t(x3.g database) {
        Intrinsics.checkNotNullParameter(database, "database");
        if (!database.R1()) {
            try {
                Lock k10 = this.f48523a.k();
                k10.lock();
                synchronized (this.f48536n) {
                    int[] a10 = this.f48532j.a();
                    if (a10 != null) {
                        f48521q.a(database);
                        int length = a10.length;
                        int i10 = 0;
                        int i11 = 0;
                        while (i10 < length) {
                            int i12 = a10[i10];
                            int i13 = i11 + 1;
                            if (i12 != 1) {
                                if (i12 == 2) {
                                    r(database, i11);
                                }
                            } else {
                                q(database, i11);
                            }
                            i10++;
                            i11 = i13;
                        }
                        database.j0();
                        database.v0();
                        Unit unit = Unit.f32008a;
                    }
                }
                k10.unlock();
            } catch (SQLiteException e10) {
                Log.e("ROOM", "Cannot run invalidation tracker. Is the db closed?", e10);
            } catch (IllegalStateException e11) {
                Log.e("ROOM", "Cannot run invalidation tracker. Is the db closed?", e11);
            }
        }
    }
}
