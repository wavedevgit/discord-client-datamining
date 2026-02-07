package r3;

import android.content.ContentResolver;
import android.content.ContentValues;
import android.database.CharArrayBuffer;
import android.database.ContentObserver;
import android.database.Cursor;
import android.database.DataSetObserver;
import android.net.Uri;
import android.os.Bundle;
import android.os.CancellationSignal;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import kotlin.Unit;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.FunctionReferenceImpl;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Lambda;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class d implements x3.h, g {

    /* renamed from: d  reason: collision with root package name */
    private final x3.h f48514d;

    /* renamed from: e  reason: collision with root package name */
    public final r3.c f48515e;

    /* renamed from: i  reason: collision with root package name */
    private final a f48516i;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a implements x3.g {

        /* renamed from: d  reason: collision with root package name */
        private final r3.c f48517d;

        /* renamed from: r3.d$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        static final class C0613a extends Lambda implements Function1 {

            /* renamed from: d  reason: collision with root package name */
            public static final C0613a f48518d = new C0613a();

            C0613a() {
                super(1);
            }

            @Override // kotlin.jvm.functions.Function1
            /* renamed from: a */
            public final List invoke(x3.g obj) {
                Intrinsics.checkNotNullParameter(obj, "obj");
                return obj.L();
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        static final class b extends Lambda implements Function1 {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ String f48519d;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            b(String str) {
                super(1);
                this.f48519d = str;
            }

            @Override // kotlin.jvm.functions.Function1
            /* renamed from: a */
            public final Object invoke(x3.g db2) {
                Intrinsics.checkNotNullParameter(db2, "db");
                db2.O(this.f48519d);
                return null;
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        static final class c extends Lambda implements Function1 {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ String f48520d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ Object[] f48521e;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            c(String str, Object[] objArr) {
                super(1);
                this.f48520d = str;
                this.f48521e = objArr;
            }

            @Override // kotlin.jvm.functions.Function1
            /* renamed from: a */
            public final Object invoke(x3.g db2) {
                Intrinsics.checkNotNullParameter(db2, "db");
                db2.k0(this.f48520d, this.f48521e);
                return null;
            }
        }

        /* renamed from: r3.d$a$d  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        /* synthetic */ class C0614d extends FunctionReferenceImpl implements Function1 {

            /* renamed from: d  reason: collision with root package name */
            public static final C0614d f48522d = new C0614d();

            C0614d() {
                super(1, x3.g.class, "inTransaction", "inTransaction()Z", 0);
            }

            @Override // kotlin.jvm.functions.Function1
            /* renamed from: a */
            public final Boolean invoke(x3.g p02) {
                Intrinsics.checkNotNullParameter(p02, "p0");
                return Boolean.valueOf(p02.R1());
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        static final class e extends Lambda implements Function1 {

            /* renamed from: d  reason: collision with root package name */
            public static final e f48523d = new e();

            e() {
                super(1);
            }

            @Override // kotlin.jvm.functions.Function1
            /* renamed from: a */
            public final Boolean invoke(x3.g db2) {
                Intrinsics.checkNotNullParameter(db2, "db");
                return Boolean.valueOf(db2.c2());
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        static final class f extends Lambda implements Function1 {

            /* renamed from: d  reason: collision with root package name */
            public static final f f48524d = new f();

            f() {
                super(1);
            }

            @Override // kotlin.jvm.functions.Function1
            /* renamed from: a */
            public final String invoke(x3.g obj) {
                Intrinsics.checkNotNullParameter(obj, "obj");
                return obj.t();
            }
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        public static final class g extends Lambda implements Function1 {

            /* renamed from: d  reason: collision with root package name */
            public static final g f48525d = new g();

            g() {
                super(1);
            }

            @Override // kotlin.jvm.functions.Function1
            /* renamed from: a */
            public final Object invoke(x3.g it) {
                Intrinsics.checkNotNullParameter(it, "it");
                return null;
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        static final class h extends Lambda implements Function1 {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ String f48526d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ int f48527e;

            /* renamed from: i  reason: collision with root package name */
            final /* synthetic */ ContentValues f48528i;

            /* renamed from: o  reason: collision with root package name */
            final /* synthetic */ String f48529o;

            /* renamed from: p  reason: collision with root package name */
            final /* synthetic */ Object[] f48530p;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            h(String str, int i10, ContentValues contentValues, String str2, Object[] objArr) {
                super(1);
                this.f48526d = str;
                this.f48527e = i10;
                this.f48528i = contentValues;
                this.f48529o = str2;
                this.f48530p = objArr;
            }

            @Override // kotlin.jvm.functions.Function1
            /* renamed from: a */
            public final Integer invoke(x3.g db2) {
                Intrinsics.checkNotNullParameter(db2, "db");
                return Integer.valueOf(db2.y1(this.f48526d, this.f48527e, this.f48528i, this.f48529o, this.f48530p));
            }
        }

        public a(r3.c autoCloser) {
            Intrinsics.checkNotNullParameter(autoCloser, "autoCloser");
            this.f48517d = autoCloser;
        }

        @Override // x3.g
        public Cursor G1(String query) {
            Intrinsics.checkNotNullParameter(query, "query");
            try {
                return new c(this.f48517d.j().G1(query), this.f48517d);
            } catch (Throwable th2) {
                this.f48517d.e();
                throw th2;
            }
        }

        @Override // x3.g
        public void H() {
            try {
                this.f48517d.j().H();
            } catch (Throwable th2) {
                this.f48517d.e();
                throw th2;
            }
        }

        @Override // x3.g
        public List L() {
            return (List) this.f48517d.g(C0613a.f48518d);
        }

        @Override // x3.g
        public Cursor N(x3.j query, CancellationSignal cancellationSignal) {
            Intrinsics.checkNotNullParameter(query, "query");
            try {
                return new c(this.f48517d.j().N(query, cancellationSignal), this.f48517d);
            } catch (Throwable th2) {
                this.f48517d.e();
                throw th2;
            }
        }

        @Override // x3.g
        public void O(String sql) {
            Intrinsics.checkNotNullParameter(sql, "sql");
            this.f48517d.g(new b(sql));
        }

        @Override // x3.g
        public boolean R1() {
            if (this.f48517d.h() == null) {
                return false;
            }
            return ((Boolean) this.f48517d.g(C0614d.f48522d)).booleanValue();
        }

        @Override // x3.g
        public Cursor S0(x3.j query) {
            Intrinsics.checkNotNullParameter(query, "query");
            try {
                return new c(this.f48517d.j().S0(query), this.f48517d);
            } catch (Throwable th2) {
                this.f48517d.e();
                throw th2;
            }
        }

        public final void a() {
            this.f48517d.g(g.f48525d);
        }

        @Override // x3.g
        public boolean c2() {
            return ((Boolean) this.f48517d.g(e.f48523d)).booleanValue();
        }

        @Override // java.io.Closeable, java.lang.AutoCloseable
        public void close() {
            this.f48517d.d();
        }

        @Override // x3.g
        public boolean isOpen() {
            x3.g h10 = this.f48517d.h();
            if (h10 == null) {
                return false;
            }
            return h10.isOpen();
        }

        @Override // x3.g
        public void j0() {
            Unit unit;
            x3.g h10 = this.f48517d.h();
            if (h10 != null) {
                h10.j0();
                unit = Unit.f32056a;
            } else {
                unit = null;
            }
            if (unit != null) {
                return;
            }
            throw new IllegalStateException("setTransactionSuccessful called but delegateDb is null");
        }

        @Override // x3.g
        public void k0(String sql, Object[] bindArgs) {
            Intrinsics.checkNotNullParameter(sql, "sql");
            Intrinsics.checkNotNullParameter(bindArgs, "bindArgs");
            this.f48517d.g(new c(sql, bindArgs));
        }

        @Override // x3.g
        public x3.k k1(String sql) {
            Intrinsics.checkNotNullParameter(sql, "sql");
            return new b(sql, this.f48517d);
        }

        @Override // x3.g
        public void l0() {
            try {
                this.f48517d.j().l0();
            } catch (Throwable th2) {
                this.f48517d.e();
                throw th2;
            }
        }

        @Override // x3.g
        public String t() {
            return (String) this.f48517d.g(f.f48524d);
        }

        @Override // x3.g
        public void v0() {
            if (this.f48517d.h() != null) {
                try {
                    x3.g h10 = this.f48517d.h();
                    Intrinsics.checkNotNull(h10);
                    h10.v0();
                    return;
                } finally {
                    this.f48517d.e();
                }
            }
            throw new IllegalStateException("End transaction called but delegateDb is null");
        }

        @Override // x3.g
        public int y1(String table, int i10, ContentValues values, String str, Object[] objArr) {
            Intrinsics.checkNotNullParameter(table, "table");
            Intrinsics.checkNotNullParameter(values, "values");
            return ((Number) this.f48517d.g(new h(table, i10, values, str, objArr))).intValue();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private static final class c implements Cursor {

        /* renamed from: d  reason: collision with root package name */
        private final Cursor f48538d;

        /* renamed from: e  reason: collision with root package name */
        private final r3.c f48539e;

        public c(Cursor delegate, r3.c autoCloser) {
            Intrinsics.checkNotNullParameter(delegate, "delegate");
            Intrinsics.checkNotNullParameter(autoCloser, "autoCloser");
            this.f48538d = delegate;
            this.f48539e = autoCloser;
        }

        @Override // android.database.Cursor, java.io.Closeable, java.lang.AutoCloseable
        public void close() {
            this.f48538d.close();
            this.f48539e.e();
        }

        @Override // android.database.Cursor
        public void copyStringToBuffer(int i10, CharArrayBuffer charArrayBuffer) {
            this.f48538d.copyStringToBuffer(i10, charArrayBuffer);
        }

        @Override // android.database.Cursor
        public void deactivate() {
            this.f48538d.deactivate();
        }

        @Override // android.database.Cursor
        public byte[] getBlob(int i10) {
            return this.f48538d.getBlob(i10);
        }

        @Override // android.database.Cursor
        public int getColumnCount() {
            return this.f48538d.getColumnCount();
        }

        @Override // android.database.Cursor
        public int getColumnIndex(String str) {
            return this.f48538d.getColumnIndex(str);
        }

        @Override // android.database.Cursor
        public int getColumnIndexOrThrow(String str) {
            return this.f48538d.getColumnIndexOrThrow(str);
        }

        @Override // android.database.Cursor
        public String getColumnName(int i10) {
            return this.f48538d.getColumnName(i10);
        }

        @Override // android.database.Cursor
        public String[] getColumnNames() {
            return this.f48538d.getColumnNames();
        }

        @Override // android.database.Cursor
        public int getCount() {
            return this.f48538d.getCount();
        }

        @Override // android.database.Cursor
        public double getDouble(int i10) {
            return this.f48538d.getDouble(i10);
        }

        @Override // android.database.Cursor
        public Bundle getExtras() {
            return this.f48538d.getExtras();
        }

        @Override // android.database.Cursor
        public float getFloat(int i10) {
            return this.f48538d.getFloat(i10);
        }

        @Override // android.database.Cursor
        public int getInt(int i10) {
            return this.f48538d.getInt(i10);
        }

        @Override // android.database.Cursor
        public long getLong(int i10) {
            return this.f48538d.getLong(i10);
        }

        @Override // android.database.Cursor
        public Uri getNotificationUri() {
            return x3.c.a(this.f48538d);
        }

        @Override // android.database.Cursor
        public List getNotificationUris() {
            return x3.f.a(this.f48538d);
        }

        @Override // android.database.Cursor
        public int getPosition() {
            return this.f48538d.getPosition();
        }

        @Override // android.database.Cursor
        public short getShort(int i10) {
            return this.f48538d.getShort(i10);
        }

        @Override // android.database.Cursor
        public String getString(int i10) {
            return this.f48538d.getString(i10);
        }

        @Override // android.database.Cursor
        public int getType(int i10) {
            return this.f48538d.getType(i10);
        }

        @Override // android.database.Cursor
        public boolean getWantsAllOnMoveCalls() {
            return this.f48538d.getWantsAllOnMoveCalls();
        }

        @Override // android.database.Cursor
        public boolean isAfterLast() {
            return this.f48538d.isAfterLast();
        }

        @Override // android.database.Cursor
        public boolean isBeforeFirst() {
            return this.f48538d.isBeforeFirst();
        }

        @Override // android.database.Cursor
        public boolean isClosed() {
            return this.f48538d.isClosed();
        }

        @Override // android.database.Cursor
        public boolean isFirst() {
            return this.f48538d.isFirst();
        }

        @Override // android.database.Cursor
        public boolean isLast() {
            return this.f48538d.isLast();
        }

        @Override // android.database.Cursor
        public boolean isNull(int i10) {
            return this.f48538d.isNull(i10);
        }

        @Override // android.database.Cursor
        public boolean move(int i10) {
            return this.f48538d.move(i10);
        }

        @Override // android.database.Cursor
        public boolean moveToFirst() {
            return this.f48538d.moveToFirst();
        }

        @Override // android.database.Cursor
        public boolean moveToLast() {
            return this.f48538d.moveToLast();
        }

        @Override // android.database.Cursor
        public boolean moveToNext() {
            return this.f48538d.moveToNext();
        }

        @Override // android.database.Cursor
        public boolean moveToPosition(int i10) {
            return this.f48538d.moveToPosition(i10);
        }

        @Override // android.database.Cursor
        public boolean moveToPrevious() {
            return this.f48538d.moveToPrevious();
        }

        @Override // android.database.Cursor
        public void registerContentObserver(ContentObserver contentObserver) {
            this.f48538d.registerContentObserver(contentObserver);
        }

        @Override // android.database.Cursor
        public void registerDataSetObserver(DataSetObserver dataSetObserver) {
            this.f48538d.registerDataSetObserver(dataSetObserver);
        }

        @Override // android.database.Cursor
        public boolean requery() {
            return this.f48538d.requery();
        }

        @Override // android.database.Cursor
        public Bundle respond(Bundle bundle) {
            return this.f48538d.respond(bundle);
        }

        @Override // android.database.Cursor
        public void setExtras(Bundle extras) {
            Intrinsics.checkNotNullParameter(extras, "extras");
            x3.e.a(this.f48538d, extras);
        }

        @Override // android.database.Cursor
        public void setNotificationUri(ContentResolver contentResolver, Uri uri) {
            this.f48538d.setNotificationUri(contentResolver, uri);
        }

        @Override // android.database.Cursor
        public void setNotificationUris(ContentResolver cr2, List uris) {
            Intrinsics.checkNotNullParameter(cr2, "cr");
            Intrinsics.checkNotNullParameter(uris, "uris");
            x3.f.b(this.f48538d, cr2, uris);
        }

        @Override // android.database.Cursor
        public void unregisterContentObserver(ContentObserver contentObserver) {
            this.f48538d.unregisterContentObserver(contentObserver);
        }

        @Override // android.database.Cursor
        public void unregisterDataSetObserver(DataSetObserver dataSetObserver) {
            this.f48538d.unregisterDataSetObserver(dataSetObserver);
        }
    }

    public d(x3.h delegate, r3.c autoCloser) {
        Intrinsics.checkNotNullParameter(delegate, "delegate");
        Intrinsics.checkNotNullParameter(autoCloser, "autoCloser");
        this.f48514d = delegate;
        this.f48515e = autoCloser;
        autoCloser.k(getDelegate());
        this.f48516i = new a(autoCloser);
    }

    @Override // x3.h, java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        this.f48516i.close();
    }

    @Override // x3.h
    public String getDatabaseName() {
        return this.f48514d.getDatabaseName();
    }

    @Override // r3.g
    public x3.h getDelegate() {
        return this.f48514d;
    }

    @Override // x3.h
    public x3.g getWritableDatabase() {
        this.f48516i.a();
        return this.f48516i;
    }

    @Override // x3.h
    public void setWriteAheadLoggingEnabled(boolean z10) {
        this.f48514d.setWriteAheadLoggingEnabled(z10);
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class b implements x3.k {

        /* renamed from: d  reason: collision with root package name */
        private final String f48531d;

        /* renamed from: e  reason: collision with root package name */
        private final r3.c f48532e;

        /* renamed from: i  reason: collision with root package name */
        private final ArrayList f48533i;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        static final class a extends Lambda implements Function1 {

            /* renamed from: d  reason: collision with root package name */
            public static final a f48534d = new a();

            a() {
                super(1);
            }

            @Override // kotlin.jvm.functions.Function1
            /* renamed from: a */
            public final Long invoke(x3.k obj) {
                Intrinsics.checkNotNullParameter(obj, "obj");
                return Long.valueOf(obj.X0());
            }
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        /* renamed from: r3.d$b$b  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        public static final class C0615b extends Lambda implements Function1 {

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ Function1 f48536e;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            C0615b(Function1 function1) {
                super(1);
                this.f48536e = function1;
            }

            @Override // kotlin.jvm.functions.Function1
            /* renamed from: a */
            public final Object invoke(x3.g db2) {
                Intrinsics.checkNotNullParameter(db2, "db");
                x3.k k12 = db2.k1(b.this.f48531d);
                b.this.k(k12);
                return this.f48536e.invoke(k12);
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        static final class c extends Lambda implements Function1 {

            /* renamed from: d  reason: collision with root package name */
            public static final c f48537d = new c();

            c() {
                super(1);
            }

            @Override // kotlin.jvm.functions.Function1
            /* renamed from: a */
            public final Integer invoke(x3.k obj) {
                Intrinsics.checkNotNullParameter(obj, "obj");
                return Integer.valueOf(obj.U());
            }
        }

        public b(String sql, r3.c autoCloser) {
            Intrinsics.checkNotNullParameter(sql, "sql");
            Intrinsics.checkNotNullParameter(autoCloser, "autoCloser");
            this.f48531d = sql;
            this.f48532e = autoCloser;
            this.f48533i = new ArrayList();
        }

        /* JADX INFO: Access modifiers changed from: private */
        public final void k(x3.k kVar) {
            Iterator it = this.f48533i.iterator();
            int i10 = 0;
            while (it.hasNext()) {
                it.next();
                int i11 = i10 + 1;
                if (i10 < 0) {
                    CollectionsKt.v();
                }
                Object obj = this.f48533i.get(i10);
                if (obj == null) {
                    kVar.O1(i11);
                } else if (obj instanceof Long) {
                    kVar.v1(i11, ((Number) obj).longValue());
                } else if (obj instanceof Double) {
                    kVar.W(i11, ((Number) obj).doubleValue());
                } else if (obj instanceof String) {
                    kVar.g1(i11, (String) obj);
                } else if (obj instanceof byte[]) {
                    kVar.C1(i11, (byte[]) obj);
                }
                i10 = i11;
            }
        }

        private final Object m(Function1 function1) {
            return this.f48532e.g(new C0615b(function1));
        }

        private final void n(int i10, Object obj) {
            int size;
            int i11 = i10 - 1;
            if (i11 >= this.f48533i.size() && (size = this.f48533i.size()) <= i11) {
                while (true) {
                    this.f48533i.add(null);
                    if (size == i11) {
                        break;
                    }
                    size++;
                }
            }
            this.f48533i.set(i11, obj);
        }

        @Override // x3.i
        public void C1(int i10, byte[] value) {
            Intrinsics.checkNotNullParameter(value, "value");
            n(i10, value);
        }

        @Override // x3.i
        public void O1(int i10) {
            n(i10, null);
        }

        @Override // x3.k
        public int U() {
            return ((Number) m(c.f48537d)).intValue();
        }

        @Override // x3.i
        public void W(int i10, double d10) {
            n(i10, Double.valueOf(d10));
        }

        @Override // x3.k
        public long X0() {
            return ((Number) m(a.f48534d)).longValue();
        }

        @Override // x3.i
        public void g1(int i10, String value) {
            Intrinsics.checkNotNullParameter(value, "value");
            n(i10, value);
        }

        @Override // x3.i
        public void v1(int i10, long j10) {
            n(i10, Long.valueOf(j10));
        }

        @Override // java.io.Closeable, java.lang.AutoCloseable
        public void close() {
        }
    }
}
