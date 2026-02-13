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
    private final x3.h f46511d;

    /* renamed from: e  reason: collision with root package name */
    public final r3.c f46512e;

    /* renamed from: i  reason: collision with root package name */
    private final a f46513i;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a implements x3.g {

        /* renamed from: d  reason: collision with root package name */
        private final r3.c f46514d;

        /* renamed from: r3.d$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        static final class C0624a extends Lambda implements Function1 {

            /* renamed from: d  reason: collision with root package name */
            public static final C0624a f46515d = new C0624a();

            C0624a() {
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
            final /* synthetic */ String f46516d;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            b(String str) {
                super(1);
                this.f46516d = str;
            }

            @Override // kotlin.jvm.functions.Function1
            /* renamed from: a */
            public final Object invoke(x3.g db2) {
                Intrinsics.checkNotNullParameter(db2, "db");
                db2.P(this.f46516d);
                return null;
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        static final class c extends Lambda implements Function1 {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ String f46517d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ Object[] f46518e;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            c(String str, Object[] objArr) {
                super(1);
                this.f46517d = str;
                this.f46518e = objArr;
            }

            @Override // kotlin.jvm.functions.Function1
            /* renamed from: a */
            public final Object invoke(x3.g db2) {
                Intrinsics.checkNotNullParameter(db2, "db");
                db2.l0(this.f46517d, this.f46518e);
                return null;
            }
        }

        /* renamed from: r3.d$a$d  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        /* synthetic */ class C0625d extends FunctionReferenceImpl implements Function1 {

            /* renamed from: d  reason: collision with root package name */
            public static final C0625d f46519d = new C0625d();

            C0625d() {
                super(1, x3.g.class, "inTransaction", "inTransaction()Z", 0);
            }

            @Override // kotlin.jvm.functions.Function1
            /* renamed from: a */
            public final Boolean invoke(x3.g p02) {
                Intrinsics.checkNotNullParameter(p02, "p0");
                return Boolean.valueOf(p02.W1());
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        static final class e extends Lambda implements Function1 {

            /* renamed from: d  reason: collision with root package name */
            public static final e f46520d = new e();

            e() {
                super(1);
            }

            @Override // kotlin.jvm.functions.Function1
            /* renamed from: a */
            public final Boolean invoke(x3.g db2) {
                Intrinsics.checkNotNullParameter(db2, "db");
                return Boolean.valueOf(db2.i2());
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        static final class f extends Lambda implements Function1 {

            /* renamed from: d  reason: collision with root package name */
            public static final f f46521d = new f();

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
            public static final g f46522d = new g();

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
            final /* synthetic */ String f46523d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ int f46524e;

            /* renamed from: i  reason: collision with root package name */
            final /* synthetic */ ContentValues f46525i;

            /* renamed from: o  reason: collision with root package name */
            final /* synthetic */ String f46526o;

            /* renamed from: p  reason: collision with root package name */
            final /* synthetic */ Object[] f46527p;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            h(String str, int i10, ContentValues contentValues, String str2, Object[] objArr) {
                super(1);
                this.f46523d = str;
                this.f46524e = i10;
                this.f46525i = contentValues;
                this.f46526o = str2;
                this.f46527p = objArr;
            }

            @Override // kotlin.jvm.functions.Function1
            /* renamed from: a */
            public final Integer invoke(x3.g db2) {
                Intrinsics.checkNotNullParameter(db2, "db");
                return Integer.valueOf(db2.y1(this.f46523d, this.f46524e, this.f46525i, this.f46526o, this.f46527p));
            }
        }

        public a(r3.c autoCloser) {
            Intrinsics.checkNotNullParameter(autoCloser, "autoCloser");
            this.f46514d = autoCloser;
        }

        @Override // x3.g
        public void H() {
            try {
                this.f46514d.j().H();
            } catch (Throwable th2) {
                this.f46514d.e();
                throw th2;
            }
        }

        @Override // x3.g
        public Cursor H1(String query) {
            Intrinsics.checkNotNullParameter(query, "query");
            try {
                return new c(this.f46514d.j().H1(query), this.f46514d);
            } catch (Throwable th2) {
                this.f46514d.e();
                throw th2;
            }
        }

        @Override // x3.g
        public List L() {
            return (List) this.f46514d.g(C0624a.f46515d);
        }

        @Override // x3.g
        public Cursor O(x3.j query, CancellationSignal cancellationSignal) {
            Intrinsics.checkNotNullParameter(query, "query");
            try {
                return new c(this.f46514d.j().O(query, cancellationSignal), this.f46514d);
            } catch (Throwable th2) {
                this.f46514d.e();
                throw th2;
            }
        }

        @Override // x3.g
        public void P(String sql) {
            Intrinsics.checkNotNullParameter(sql, "sql");
            this.f46514d.g(new b(sql));
        }

        @Override // x3.g
        public Cursor R0(x3.j query) {
            Intrinsics.checkNotNullParameter(query, "query");
            try {
                return new c(this.f46514d.j().R0(query), this.f46514d);
            } catch (Throwable th2) {
                this.f46514d.e();
                throw th2;
            }
        }

        @Override // x3.g
        public boolean W1() {
            if (this.f46514d.h() == null) {
                return false;
            }
            return ((Boolean) this.f46514d.g(C0625d.f46519d)).booleanValue();
        }

        public final void a() {
            this.f46514d.g(g.f46522d);
        }

        @Override // java.io.Closeable, java.lang.AutoCloseable
        public void close() {
            this.f46514d.d();
        }

        @Override // x3.g
        public boolean i2() {
            return ((Boolean) this.f46514d.g(e.f46520d)).booleanValue();
        }

        @Override // x3.g
        public boolean isOpen() {
            x3.g h10 = this.f46514d.h();
            if (h10 == null) {
                return false;
            }
            return h10.isOpen();
        }

        @Override // x3.g
        public void k0() {
            Unit unit;
            x3.g h10 = this.f46514d.h();
            if (h10 != null) {
                h10.k0();
                unit = Unit.f32556a;
            } else {
                unit = null;
            }
            if (unit != null) {
                return;
            }
            throw new IllegalStateException("setTransactionSuccessful called but delegateDb is null");
        }

        @Override // x3.g
        public void l0(String sql, Object[] bindArgs) {
            Intrinsics.checkNotNullParameter(sql, "sql");
            Intrinsics.checkNotNullParameter(bindArgs, "bindArgs");
            this.f46514d.g(new c(sql, bindArgs));
        }

        @Override // x3.g
        public void m0() {
            try {
                this.f46514d.j().m0();
            } catch (Throwable th2) {
                this.f46514d.e();
                throw th2;
            }
        }

        @Override // x3.g
        public x3.k m1(String sql) {
            Intrinsics.checkNotNullParameter(sql, "sql");
            return new b(sql, this.f46514d);
        }

        @Override // x3.g
        public String t() {
            return (String) this.f46514d.g(f.f46521d);
        }

        @Override // x3.g
        public void t0() {
            if (this.f46514d.h() != null) {
                try {
                    x3.g h10 = this.f46514d.h();
                    Intrinsics.checkNotNull(h10);
                    h10.t0();
                    return;
                } finally {
                    this.f46514d.e();
                }
            }
            throw new IllegalStateException("End transaction called but delegateDb is null");
        }

        @Override // x3.g
        public int y1(String table, int i10, ContentValues values, String str, Object[] objArr) {
            Intrinsics.checkNotNullParameter(table, "table");
            Intrinsics.checkNotNullParameter(values, "values");
            return ((Number) this.f46514d.g(new h(table, i10, values, str, objArr))).intValue();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private static final class c implements Cursor {

        /* renamed from: d  reason: collision with root package name */
        private final Cursor f46535d;

        /* renamed from: e  reason: collision with root package name */
        private final r3.c f46536e;

        public c(Cursor delegate, r3.c autoCloser) {
            Intrinsics.checkNotNullParameter(delegate, "delegate");
            Intrinsics.checkNotNullParameter(autoCloser, "autoCloser");
            this.f46535d = delegate;
            this.f46536e = autoCloser;
        }

        @Override // android.database.Cursor, java.io.Closeable, java.lang.AutoCloseable
        public void close() {
            this.f46535d.close();
            this.f46536e.e();
        }

        @Override // android.database.Cursor
        public void copyStringToBuffer(int i10, CharArrayBuffer charArrayBuffer) {
            this.f46535d.copyStringToBuffer(i10, charArrayBuffer);
        }

        @Override // android.database.Cursor
        public void deactivate() {
            this.f46535d.deactivate();
        }

        @Override // android.database.Cursor
        public byte[] getBlob(int i10) {
            return this.f46535d.getBlob(i10);
        }

        @Override // android.database.Cursor
        public int getColumnCount() {
            return this.f46535d.getColumnCount();
        }

        @Override // android.database.Cursor
        public int getColumnIndex(String str) {
            return this.f46535d.getColumnIndex(str);
        }

        @Override // android.database.Cursor
        public int getColumnIndexOrThrow(String str) {
            return this.f46535d.getColumnIndexOrThrow(str);
        }

        @Override // android.database.Cursor
        public String getColumnName(int i10) {
            return this.f46535d.getColumnName(i10);
        }

        @Override // android.database.Cursor
        public String[] getColumnNames() {
            return this.f46535d.getColumnNames();
        }

        @Override // android.database.Cursor
        public int getCount() {
            return this.f46535d.getCount();
        }

        @Override // android.database.Cursor
        public double getDouble(int i10) {
            return this.f46535d.getDouble(i10);
        }

        @Override // android.database.Cursor
        public Bundle getExtras() {
            return this.f46535d.getExtras();
        }

        @Override // android.database.Cursor
        public float getFloat(int i10) {
            return this.f46535d.getFloat(i10);
        }

        @Override // android.database.Cursor
        public int getInt(int i10) {
            return this.f46535d.getInt(i10);
        }

        @Override // android.database.Cursor
        public long getLong(int i10) {
            return this.f46535d.getLong(i10);
        }

        @Override // android.database.Cursor
        public Uri getNotificationUri() {
            return x3.c.a(this.f46535d);
        }

        @Override // android.database.Cursor
        public List getNotificationUris() {
            return x3.f.a(this.f46535d);
        }

        @Override // android.database.Cursor
        public int getPosition() {
            return this.f46535d.getPosition();
        }

        @Override // android.database.Cursor
        public short getShort(int i10) {
            return this.f46535d.getShort(i10);
        }

        @Override // android.database.Cursor
        public String getString(int i10) {
            return this.f46535d.getString(i10);
        }

        @Override // android.database.Cursor
        public int getType(int i10) {
            return this.f46535d.getType(i10);
        }

        @Override // android.database.Cursor
        public boolean getWantsAllOnMoveCalls() {
            return this.f46535d.getWantsAllOnMoveCalls();
        }

        @Override // android.database.Cursor
        public boolean isAfterLast() {
            return this.f46535d.isAfterLast();
        }

        @Override // android.database.Cursor
        public boolean isBeforeFirst() {
            return this.f46535d.isBeforeFirst();
        }

        @Override // android.database.Cursor
        public boolean isClosed() {
            return this.f46535d.isClosed();
        }

        @Override // android.database.Cursor
        public boolean isFirst() {
            return this.f46535d.isFirst();
        }

        @Override // android.database.Cursor
        public boolean isLast() {
            return this.f46535d.isLast();
        }

        @Override // android.database.Cursor
        public boolean isNull(int i10) {
            return this.f46535d.isNull(i10);
        }

        @Override // android.database.Cursor
        public boolean move(int i10) {
            return this.f46535d.move(i10);
        }

        @Override // android.database.Cursor
        public boolean moveToFirst() {
            return this.f46535d.moveToFirst();
        }

        @Override // android.database.Cursor
        public boolean moveToLast() {
            return this.f46535d.moveToLast();
        }

        @Override // android.database.Cursor
        public boolean moveToNext() {
            return this.f46535d.moveToNext();
        }

        @Override // android.database.Cursor
        public boolean moveToPosition(int i10) {
            return this.f46535d.moveToPosition(i10);
        }

        @Override // android.database.Cursor
        public boolean moveToPrevious() {
            return this.f46535d.moveToPrevious();
        }

        @Override // android.database.Cursor
        public void registerContentObserver(ContentObserver contentObserver) {
            this.f46535d.registerContentObserver(contentObserver);
        }

        @Override // android.database.Cursor
        public void registerDataSetObserver(DataSetObserver dataSetObserver) {
            this.f46535d.registerDataSetObserver(dataSetObserver);
        }

        @Override // android.database.Cursor
        public boolean requery() {
            return this.f46535d.requery();
        }

        @Override // android.database.Cursor
        public Bundle respond(Bundle bundle) {
            return this.f46535d.respond(bundle);
        }

        @Override // android.database.Cursor
        public void setExtras(Bundle extras) {
            Intrinsics.checkNotNullParameter(extras, "extras");
            x3.e.a(this.f46535d, extras);
        }

        @Override // android.database.Cursor
        public void setNotificationUri(ContentResolver contentResolver, Uri uri) {
            this.f46535d.setNotificationUri(contentResolver, uri);
        }

        @Override // android.database.Cursor
        public void setNotificationUris(ContentResolver cr2, List uris) {
            Intrinsics.checkNotNullParameter(cr2, "cr");
            Intrinsics.checkNotNullParameter(uris, "uris");
            x3.f.b(this.f46535d, cr2, uris);
        }

        @Override // android.database.Cursor
        public void unregisterContentObserver(ContentObserver contentObserver) {
            this.f46535d.unregisterContentObserver(contentObserver);
        }

        @Override // android.database.Cursor
        public void unregisterDataSetObserver(DataSetObserver dataSetObserver) {
            this.f46535d.unregisterDataSetObserver(dataSetObserver);
        }
    }

    public d(x3.h delegate, r3.c autoCloser) {
        Intrinsics.checkNotNullParameter(delegate, "delegate");
        Intrinsics.checkNotNullParameter(autoCloser, "autoCloser");
        this.f46511d = delegate;
        this.f46512e = autoCloser;
        autoCloser.k(getDelegate());
        this.f46513i = new a(autoCloser);
    }

    @Override // x3.h, java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        this.f46513i.close();
    }

    @Override // x3.h
    public String getDatabaseName() {
        return this.f46511d.getDatabaseName();
    }

    @Override // r3.g
    public x3.h getDelegate() {
        return this.f46511d;
    }

    @Override // x3.h
    public x3.g getWritableDatabase() {
        this.f46513i.a();
        return this.f46513i;
    }

    @Override // x3.h
    public void setWriteAheadLoggingEnabled(boolean z10) {
        this.f46511d.setWriteAheadLoggingEnabled(z10);
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class b implements x3.k {

        /* renamed from: d  reason: collision with root package name */
        private final String f46528d;

        /* renamed from: e  reason: collision with root package name */
        private final r3.c f46529e;

        /* renamed from: i  reason: collision with root package name */
        private final ArrayList f46530i;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        static final class a extends Lambda implements Function1 {

            /* renamed from: d  reason: collision with root package name */
            public static final a f46531d = new a();

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
        public static final class C0626b extends Lambda implements Function1 {

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ Function1 f46533e;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            C0626b(Function1 function1) {
                super(1);
                this.f46533e = function1;
            }

            @Override // kotlin.jvm.functions.Function1
            /* renamed from: a */
            public final Object invoke(x3.g db2) {
                Intrinsics.checkNotNullParameter(db2, "db");
                x3.k m12 = db2.m1(b.this.f46528d);
                b.this.i(m12);
                return this.f46533e.invoke(m12);
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        static final class c extends Lambda implements Function1 {

            /* renamed from: d  reason: collision with root package name */
            public static final c f46534d = new c();

            c() {
                super(1);
            }

            @Override // kotlin.jvm.functions.Function1
            /* renamed from: a */
            public final Integer invoke(x3.k obj) {
                Intrinsics.checkNotNullParameter(obj, "obj");
                return Integer.valueOf(obj.V());
            }
        }

        public b(String sql, r3.c autoCloser) {
            Intrinsics.checkNotNullParameter(sql, "sql");
            Intrinsics.checkNotNullParameter(autoCloser, "autoCloser");
            this.f46528d = sql;
            this.f46529e = autoCloser;
            this.f46530i = new ArrayList();
        }

        /* JADX INFO: Access modifiers changed from: private */
        public final void i(x3.k kVar) {
            Iterator it = this.f46530i.iterator();
            int i10 = 0;
            while (it.hasNext()) {
                it.next();
                int i11 = i10 + 1;
                if (i10 < 0) {
                    CollectionsKt.v();
                }
                Object obj = this.f46530i.get(i10);
                if (obj == null) {
                    kVar.S1(i11);
                } else if (obj instanceof Long) {
                    kVar.v1(i11, ((Number) obj).longValue());
                } else if (obj instanceof Double) {
                    kVar.X(i11, ((Number) obj).doubleValue());
                } else if (obj instanceof String) {
                    kVar.i1(i11, (String) obj);
                } else if (obj instanceof byte[]) {
                    kVar.D1(i11, (byte[]) obj);
                }
                i10 = i11;
            }
        }

        private final Object m(Function1 function1) {
            return this.f46529e.g(new C0626b(function1));
        }

        private final void n(int i10, Object obj) {
            int size;
            int i11 = i10 - 1;
            if (i11 >= this.f46530i.size() && (size = this.f46530i.size()) <= i11) {
                while (true) {
                    this.f46530i.add(null);
                    if (size == i11) {
                        break;
                    }
                    size++;
                }
            }
            this.f46530i.set(i11, obj);
        }

        @Override // x3.i
        public void D1(int i10, byte[] value) {
            Intrinsics.checkNotNullParameter(value, "value");
            n(i10, value);
        }

        @Override // x3.i
        public void S1(int i10) {
            n(i10, null);
        }

        @Override // x3.k
        public int V() {
            return ((Number) m(c.f46534d)).intValue();
        }

        @Override // x3.i
        public void X(int i10, double d10) {
            n(i10, Double.valueOf(d10));
        }

        @Override // x3.k
        public long X0() {
            return ((Number) m(a.f46531d)).longValue();
        }

        @Override // x3.i
        public void i1(int i10, String value) {
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
