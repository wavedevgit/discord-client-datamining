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
    private final x3.h f48372d;

    /* renamed from: e  reason: collision with root package name */
    public final r3.c f48373e;

    /* renamed from: i  reason: collision with root package name */
    private final a f48374i;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a implements x3.g {

        /* renamed from: d  reason: collision with root package name */
        private final r3.c f48375d;

        /* renamed from: r3.d$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        static final class C0590a extends Lambda implements Function1 {

            /* renamed from: d  reason: collision with root package name */
            public static final C0590a f48376d = new C0590a();

            C0590a() {
                super(1);
            }

            @Override // kotlin.jvm.functions.Function1
            /* renamed from: a */
            public final List invoke(x3.g obj) {
                Intrinsics.checkNotNullParameter(obj, "obj");
                return obj.H();
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        static final class b extends Lambda implements Function1 {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ String f48377d;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            b(String str) {
                super(1);
                this.f48377d = str;
            }

            @Override // kotlin.jvm.functions.Function1
            /* renamed from: a */
            public final Object invoke(x3.g db2) {
                Intrinsics.checkNotNullParameter(db2, "db");
                db2.K(this.f48377d);
                return null;
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        static final class c extends Lambda implements Function1 {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ String f48378d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ Object[] f48379e;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            c(String str, Object[] objArr) {
                super(1);
                this.f48378d = str;
                this.f48379e = objArr;
            }

            @Override // kotlin.jvm.functions.Function1
            /* renamed from: a */
            public final Object invoke(x3.g db2) {
                Intrinsics.checkNotNullParameter(db2, "db");
                db2.h0(this.f48378d, this.f48379e);
                return null;
            }
        }

        /* renamed from: r3.d$a$d  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        /* synthetic */ class C0591d extends FunctionReferenceImpl implements Function1 {

            /* renamed from: d  reason: collision with root package name */
            public static final C0591d f48380d = new C0591d();

            C0591d() {
                super(1, x3.g.class, "inTransaction", "inTransaction()Z", 0);
            }

            @Override // kotlin.jvm.functions.Function1
            /* renamed from: a */
            public final Boolean invoke(x3.g p02) {
                Intrinsics.checkNotNullParameter(p02, "p0");
                return Boolean.valueOf(p02.S1());
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        static final class e extends Lambda implements Function1 {

            /* renamed from: d  reason: collision with root package name */
            public static final e f48381d = new e();

            e() {
                super(1);
            }

            @Override // kotlin.jvm.functions.Function1
            /* renamed from: a */
            public final Boolean invoke(x3.g db2) {
                Intrinsics.checkNotNullParameter(db2, "db");
                return Boolean.valueOf(db2.d2());
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        static final class f extends Lambda implements Function1 {

            /* renamed from: d  reason: collision with root package name */
            public static final f f48382d = new f();

            f() {
                super(1);
            }

            @Override // kotlin.jvm.functions.Function1
            /* renamed from: a */
            public final String invoke(x3.g obj) {
                Intrinsics.checkNotNullParameter(obj, "obj");
                return obj.q();
            }
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        public static final class g extends Lambda implements Function1 {

            /* renamed from: d  reason: collision with root package name */
            public static final g f48383d = new g();

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
            final /* synthetic */ String f48384d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ int f48385e;

            /* renamed from: i  reason: collision with root package name */
            final /* synthetic */ ContentValues f48386i;

            /* renamed from: o  reason: collision with root package name */
            final /* synthetic */ String f48387o;

            /* renamed from: p  reason: collision with root package name */
            final /* synthetic */ Object[] f48388p;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            h(String str, int i10, ContentValues contentValues, String str2, Object[] objArr) {
                super(1);
                this.f48384d = str;
                this.f48385e = i10;
                this.f48386i = contentValues;
                this.f48387o = str2;
                this.f48388p = objArr;
            }

            @Override // kotlin.jvm.functions.Function1
            /* renamed from: a */
            public final Integer invoke(x3.g db2) {
                Intrinsics.checkNotNullParameter(db2, "db");
                return Integer.valueOf(db2.z1(this.f48384d, this.f48385e, this.f48386i, this.f48387o, this.f48388p));
            }
        }

        public a(r3.c autoCloser) {
            Intrinsics.checkNotNullParameter(autoCloser, "autoCloser");
            this.f48375d = autoCloser;
        }

        @Override // x3.g
        public void D() {
            try {
                this.f48375d.j().D();
            } catch (Throwable th2) {
                this.f48375d.e();
                throw th2;
            }
        }

        @Override // x3.g
        public List H() {
            return (List) this.f48375d.g(C0590a.f48376d);
        }

        @Override // x3.g
        public Cursor H1(String query) {
            Intrinsics.checkNotNullParameter(query, "query");
            try {
                return new c(this.f48375d.j().H1(query), this.f48375d);
            } catch (Throwable th2) {
                this.f48375d.e();
                throw th2;
            }
        }

        @Override // x3.g
        public Cursor J(x3.j query, CancellationSignal cancellationSignal) {
            Intrinsics.checkNotNullParameter(query, "query");
            try {
                return new c(this.f48375d.j().J(query, cancellationSignal), this.f48375d);
            } catch (Throwable th2) {
                this.f48375d.e();
                throw th2;
            }
        }

        @Override // x3.g
        public void K(String sql) {
            Intrinsics.checkNotNullParameter(sql, "sql");
            this.f48375d.g(new b(sql));
        }

        @Override // x3.g
        public Cursor Q0(x3.j query) {
            Intrinsics.checkNotNullParameter(query, "query");
            try {
                return new c(this.f48375d.j().Q0(query), this.f48375d);
            } catch (Throwable th2) {
                this.f48375d.e();
                throw th2;
            }
        }

        @Override // x3.g
        public boolean S1() {
            if (this.f48375d.h() == null) {
                return false;
            }
            return ((Boolean) this.f48375d.g(C0591d.f48380d)).booleanValue();
        }

        public final void a() {
            this.f48375d.g(g.f48383d);
        }

        @Override // java.io.Closeable, java.lang.AutoCloseable
        public void close() {
            this.f48375d.d();
        }

        @Override // x3.g
        public boolean d2() {
            return ((Boolean) this.f48375d.g(e.f48381d)).booleanValue();
        }

        @Override // x3.g
        public void g0() {
            Unit unit;
            x3.g h10 = this.f48375d.h();
            if (h10 != null) {
                h10.g0();
                unit = Unit.f32464a;
            } else {
                unit = null;
            }
            if (unit != null) {
                return;
            }
            throw new IllegalStateException("setTransactionSuccessful called but delegateDb is null");
        }

        @Override // x3.g
        public void h0(String sql, Object[] bindArgs) {
            Intrinsics.checkNotNullParameter(sql, "sql");
            Intrinsics.checkNotNullParameter(bindArgs, "bindArgs");
            this.f48375d.g(new c(sql, bindArgs));
        }

        @Override // x3.g
        public void i0() {
            try {
                this.f48375d.j().i0();
            } catch (Throwable th2) {
                this.f48375d.e();
                throw th2;
            }
        }

        @Override // x3.g
        public boolean isOpen() {
            x3.g h10 = this.f48375d.h();
            if (h10 == null) {
                return false;
            }
            return h10.isOpen();
        }

        @Override // x3.g
        public x3.k l1(String sql) {
            Intrinsics.checkNotNullParameter(sql, "sql");
            return new b(sql, this.f48375d);
        }

        @Override // x3.g
        public String q() {
            return (String) this.f48375d.g(f.f48382d);
        }

        @Override // x3.g
        public void s0() {
            if (this.f48375d.h() != null) {
                try {
                    x3.g h10 = this.f48375d.h();
                    Intrinsics.checkNotNull(h10);
                    h10.s0();
                    return;
                } finally {
                    this.f48375d.e();
                }
            }
            throw new IllegalStateException("End transaction called but delegateDb is null");
        }

        @Override // x3.g
        public int z1(String table, int i10, ContentValues values, String str, Object[] objArr) {
            Intrinsics.checkNotNullParameter(table, "table");
            Intrinsics.checkNotNullParameter(values, "values");
            return ((Number) this.f48375d.g(new h(table, i10, values, str, objArr))).intValue();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private static final class c implements Cursor {

        /* renamed from: d  reason: collision with root package name */
        private final Cursor f48396d;

        /* renamed from: e  reason: collision with root package name */
        private final r3.c f48397e;

        public c(Cursor delegate, r3.c autoCloser) {
            Intrinsics.checkNotNullParameter(delegate, "delegate");
            Intrinsics.checkNotNullParameter(autoCloser, "autoCloser");
            this.f48396d = delegate;
            this.f48397e = autoCloser;
        }

        @Override // android.database.Cursor, java.io.Closeable, java.lang.AutoCloseable
        public void close() {
            this.f48396d.close();
            this.f48397e.e();
        }

        @Override // android.database.Cursor
        public void copyStringToBuffer(int i10, CharArrayBuffer charArrayBuffer) {
            this.f48396d.copyStringToBuffer(i10, charArrayBuffer);
        }

        @Override // android.database.Cursor
        public void deactivate() {
            this.f48396d.deactivate();
        }

        @Override // android.database.Cursor
        public byte[] getBlob(int i10) {
            return this.f48396d.getBlob(i10);
        }

        @Override // android.database.Cursor
        public int getColumnCount() {
            return this.f48396d.getColumnCount();
        }

        @Override // android.database.Cursor
        public int getColumnIndex(String str) {
            return this.f48396d.getColumnIndex(str);
        }

        @Override // android.database.Cursor
        public int getColumnIndexOrThrow(String str) {
            return this.f48396d.getColumnIndexOrThrow(str);
        }

        @Override // android.database.Cursor
        public String getColumnName(int i10) {
            return this.f48396d.getColumnName(i10);
        }

        @Override // android.database.Cursor
        public String[] getColumnNames() {
            return this.f48396d.getColumnNames();
        }

        @Override // android.database.Cursor
        public int getCount() {
            return this.f48396d.getCount();
        }

        @Override // android.database.Cursor
        public double getDouble(int i10) {
            return this.f48396d.getDouble(i10);
        }

        @Override // android.database.Cursor
        public Bundle getExtras() {
            return this.f48396d.getExtras();
        }

        @Override // android.database.Cursor
        public float getFloat(int i10) {
            return this.f48396d.getFloat(i10);
        }

        @Override // android.database.Cursor
        public int getInt(int i10) {
            return this.f48396d.getInt(i10);
        }

        @Override // android.database.Cursor
        public long getLong(int i10) {
            return this.f48396d.getLong(i10);
        }

        @Override // android.database.Cursor
        public Uri getNotificationUri() {
            return x3.c.a(this.f48396d);
        }

        @Override // android.database.Cursor
        public List getNotificationUris() {
            return x3.f.a(this.f48396d);
        }

        @Override // android.database.Cursor
        public int getPosition() {
            return this.f48396d.getPosition();
        }

        @Override // android.database.Cursor
        public short getShort(int i10) {
            return this.f48396d.getShort(i10);
        }

        @Override // android.database.Cursor
        public String getString(int i10) {
            return this.f48396d.getString(i10);
        }

        @Override // android.database.Cursor
        public int getType(int i10) {
            return this.f48396d.getType(i10);
        }

        @Override // android.database.Cursor
        public boolean getWantsAllOnMoveCalls() {
            return this.f48396d.getWantsAllOnMoveCalls();
        }

        @Override // android.database.Cursor
        public boolean isAfterLast() {
            return this.f48396d.isAfterLast();
        }

        @Override // android.database.Cursor
        public boolean isBeforeFirst() {
            return this.f48396d.isBeforeFirst();
        }

        @Override // android.database.Cursor
        public boolean isClosed() {
            return this.f48396d.isClosed();
        }

        @Override // android.database.Cursor
        public boolean isFirst() {
            return this.f48396d.isFirst();
        }

        @Override // android.database.Cursor
        public boolean isLast() {
            return this.f48396d.isLast();
        }

        @Override // android.database.Cursor
        public boolean isNull(int i10) {
            return this.f48396d.isNull(i10);
        }

        @Override // android.database.Cursor
        public boolean move(int i10) {
            return this.f48396d.move(i10);
        }

        @Override // android.database.Cursor
        public boolean moveToFirst() {
            return this.f48396d.moveToFirst();
        }

        @Override // android.database.Cursor
        public boolean moveToLast() {
            return this.f48396d.moveToLast();
        }

        @Override // android.database.Cursor
        public boolean moveToNext() {
            return this.f48396d.moveToNext();
        }

        @Override // android.database.Cursor
        public boolean moveToPosition(int i10) {
            return this.f48396d.moveToPosition(i10);
        }

        @Override // android.database.Cursor
        public boolean moveToPrevious() {
            return this.f48396d.moveToPrevious();
        }

        @Override // android.database.Cursor
        public void registerContentObserver(ContentObserver contentObserver) {
            this.f48396d.registerContentObserver(contentObserver);
        }

        @Override // android.database.Cursor
        public void registerDataSetObserver(DataSetObserver dataSetObserver) {
            this.f48396d.registerDataSetObserver(dataSetObserver);
        }

        @Override // android.database.Cursor
        public boolean requery() {
            return this.f48396d.requery();
        }

        @Override // android.database.Cursor
        public Bundle respond(Bundle bundle) {
            return this.f48396d.respond(bundle);
        }

        @Override // android.database.Cursor
        public void setExtras(Bundle extras) {
            Intrinsics.checkNotNullParameter(extras, "extras");
            x3.e.a(this.f48396d, extras);
        }

        @Override // android.database.Cursor
        public void setNotificationUri(ContentResolver contentResolver, Uri uri) {
            this.f48396d.setNotificationUri(contentResolver, uri);
        }

        @Override // android.database.Cursor
        public void setNotificationUris(ContentResolver cr2, List uris) {
            Intrinsics.checkNotNullParameter(cr2, "cr");
            Intrinsics.checkNotNullParameter(uris, "uris");
            x3.f.b(this.f48396d, cr2, uris);
        }

        @Override // android.database.Cursor
        public void unregisterContentObserver(ContentObserver contentObserver) {
            this.f48396d.unregisterContentObserver(contentObserver);
        }

        @Override // android.database.Cursor
        public void unregisterDataSetObserver(DataSetObserver dataSetObserver) {
            this.f48396d.unregisterDataSetObserver(dataSetObserver);
        }
    }

    public d(x3.h delegate, r3.c autoCloser) {
        Intrinsics.checkNotNullParameter(delegate, "delegate");
        Intrinsics.checkNotNullParameter(autoCloser, "autoCloser");
        this.f48372d = delegate;
        this.f48373e = autoCloser;
        autoCloser.k(getDelegate());
        this.f48374i = new a(autoCloser);
    }

    @Override // x3.h, java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        this.f48374i.close();
    }

    @Override // x3.h
    public String getDatabaseName() {
        return this.f48372d.getDatabaseName();
    }

    @Override // r3.g
    public x3.h getDelegate() {
        return this.f48372d;
    }

    @Override // x3.h
    public x3.g getWritableDatabase() {
        this.f48374i.a();
        return this.f48374i;
    }

    @Override // x3.h
    public void setWriteAheadLoggingEnabled(boolean z10) {
        this.f48372d.setWriteAheadLoggingEnabled(z10);
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class b implements x3.k {

        /* renamed from: d  reason: collision with root package name */
        private final String f48389d;

        /* renamed from: e  reason: collision with root package name */
        private final r3.c f48390e;

        /* renamed from: i  reason: collision with root package name */
        private final ArrayList f48391i;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        static final class a extends Lambda implements Function1 {

            /* renamed from: d  reason: collision with root package name */
            public static final a f48392d = new a();

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
        public static final class C0592b extends Lambda implements Function1 {

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ Function1 f48394e;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            C0592b(Function1 function1) {
                super(1);
                this.f48394e = function1;
            }

            @Override // kotlin.jvm.functions.Function1
            /* renamed from: a */
            public final Object invoke(x3.g db2) {
                Intrinsics.checkNotNullParameter(db2, "db");
                x3.k l12 = db2.l1(b.this.f48389d);
                b.this.l(l12);
                return this.f48394e.invoke(l12);
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        static final class c extends Lambda implements Function1 {

            /* renamed from: d  reason: collision with root package name */
            public static final c f48395d = new c();

            c() {
                super(1);
            }

            @Override // kotlin.jvm.functions.Function1
            /* renamed from: a */
            public final Integer invoke(x3.k obj) {
                Intrinsics.checkNotNullParameter(obj, "obj");
                return Integer.valueOf(obj.R());
            }
        }

        public b(String sql, r3.c autoCloser) {
            Intrinsics.checkNotNullParameter(sql, "sql");
            Intrinsics.checkNotNullParameter(autoCloser, "autoCloser");
            this.f48389d = sql;
            this.f48390e = autoCloser;
            this.f48391i = new ArrayList();
        }

        /* JADX INFO: Access modifiers changed from: private */
        public final void l(x3.k kVar) {
            Iterator it = this.f48391i.iterator();
            int i10 = 0;
            while (it.hasNext()) {
                it.next();
                int i11 = i10 + 1;
                if (i10 < 0) {
                    CollectionsKt.v();
                }
                Object obj = this.f48391i.get(i10);
                if (obj == null) {
                    kVar.P1(i11);
                } else if (obj instanceof Long) {
                    kVar.w1(i11, ((Number) obj).longValue());
                } else if (obj instanceof Double) {
                    kVar.T(i11, ((Number) obj).doubleValue());
                } else if (obj instanceof String) {
                    kVar.h1(i11, (String) obj);
                } else if (obj instanceof byte[]) {
                    kVar.D1(i11, (byte[]) obj);
                }
                i10 = i11;
            }
        }

        private final Object n(Function1 function1) {
            return this.f48390e.g(new C0592b(function1));
        }

        private final void x(int i10, Object obj) {
            int size;
            int i11 = i10 - 1;
            if (i11 >= this.f48391i.size() && (size = this.f48391i.size()) <= i11) {
                while (true) {
                    this.f48391i.add(null);
                    if (size == i11) {
                        break;
                    }
                    size++;
                }
            }
            this.f48391i.set(i11, obj);
        }

        @Override // x3.i
        public void D1(int i10, byte[] value) {
            Intrinsics.checkNotNullParameter(value, "value");
            x(i10, value);
        }

        @Override // x3.i
        public void P1(int i10) {
            x(i10, null);
        }

        @Override // x3.k
        public int R() {
            return ((Number) n(c.f48395d)).intValue();
        }

        @Override // x3.i
        public void T(int i10, double d10) {
            x(i10, Double.valueOf(d10));
        }

        @Override // x3.k
        public long X0() {
            return ((Number) n(a.f48392d)).longValue();
        }

        @Override // x3.i
        public void h1(int i10, String value) {
            Intrinsics.checkNotNullParameter(value, "value");
            x(i10, value);
        }

        @Override // x3.i
        public void w1(int i10, long j10) {
            x(i10, Long.valueOf(j10));
        }

        @Override // java.io.Closeable, java.lang.AutoCloseable
        public void close() {
        }
    }
}
