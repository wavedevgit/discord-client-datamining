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
    private final x3.h f48066d;

    /* renamed from: e  reason: collision with root package name */
    public final r3.c f48067e;

    /* renamed from: i  reason: collision with root package name */
    private final a f48068i;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a implements x3.g {

        /* renamed from: d  reason: collision with root package name */
        private final r3.c f48069d;

        /* renamed from: r3.d$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        static final class C0590a extends Lambda implements Function1 {

            /* renamed from: d  reason: collision with root package name */
            public static final C0590a f48070d = new C0590a();

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
            final /* synthetic */ String f48071d;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            b(String str) {
                super(1);
                this.f48071d = str;
            }

            @Override // kotlin.jvm.functions.Function1
            /* renamed from: a */
            public final Object invoke(x3.g db2) {
                Intrinsics.checkNotNullParameter(db2, "db");
                db2.K(this.f48071d);
                return null;
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        static final class c extends Lambda implements Function1 {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ String f48072d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ Object[] f48073e;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            c(String str, Object[] objArr) {
                super(1);
                this.f48072d = str;
                this.f48073e = objArr;
            }

            @Override // kotlin.jvm.functions.Function1
            /* renamed from: a */
            public final Object invoke(x3.g db2) {
                Intrinsics.checkNotNullParameter(db2, "db");
                db2.i0(this.f48072d, this.f48073e);
                return null;
            }
        }

        /* renamed from: r3.d$a$d  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        /* synthetic */ class C0591d extends FunctionReferenceImpl implements Function1 {

            /* renamed from: d  reason: collision with root package name */
            public static final C0591d f48074d = new C0591d();

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
            public static final e f48075d = new e();

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
            public static final f f48076d = new f();

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
            public static final g f48077d = new g();

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
            final /* synthetic */ String f48078d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ int f48079e;

            /* renamed from: i  reason: collision with root package name */
            final /* synthetic */ ContentValues f48080i;

            /* renamed from: o  reason: collision with root package name */
            final /* synthetic */ String f48081o;

            /* renamed from: p  reason: collision with root package name */
            final /* synthetic */ Object[] f48082p;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            h(String str, int i10, ContentValues contentValues, String str2, Object[] objArr) {
                super(1);
                this.f48078d = str;
                this.f48079e = i10;
                this.f48080i = contentValues;
                this.f48081o = str2;
                this.f48082p = objArr;
            }

            @Override // kotlin.jvm.functions.Function1
            /* renamed from: a */
            public final Integer invoke(x3.g db2) {
                Intrinsics.checkNotNullParameter(db2, "db");
                return Integer.valueOf(db2.z1(this.f48078d, this.f48079e, this.f48080i, this.f48081o, this.f48082p));
            }
        }

        public a(r3.c autoCloser) {
            Intrinsics.checkNotNullParameter(autoCloser, "autoCloser");
            this.f48069d = autoCloser;
        }

        @Override // x3.g
        public void D() {
            try {
                this.f48069d.j().D();
            } catch (Throwable th2) {
                this.f48069d.e();
                throw th2;
            }
        }

        @Override // x3.g
        public List H() {
            return (List) this.f48069d.g(C0590a.f48070d);
        }

        @Override // x3.g
        public Cursor H1(String query) {
            Intrinsics.checkNotNullParameter(query, "query");
            try {
                return new c(this.f48069d.j().H1(query), this.f48069d);
            } catch (Throwable th2) {
                this.f48069d.e();
                throw th2;
            }
        }

        @Override // x3.g
        public Cursor J(x3.j query, CancellationSignal cancellationSignal) {
            Intrinsics.checkNotNullParameter(query, "query");
            try {
                return new c(this.f48069d.j().J(query, cancellationSignal), this.f48069d);
            } catch (Throwable th2) {
                this.f48069d.e();
                throw th2;
            }
        }

        @Override // x3.g
        public void K(String sql) {
            Intrinsics.checkNotNullParameter(sql, "sql");
            this.f48069d.g(new b(sql));
        }

        @Override // x3.g
        public Cursor S0(x3.j query) {
            Intrinsics.checkNotNullParameter(query, "query");
            try {
                return new c(this.f48069d.j().S0(query), this.f48069d);
            } catch (Throwable th2) {
                this.f48069d.e();
                throw th2;
            }
        }

        @Override // x3.g
        public boolean S1() {
            if (this.f48069d.h() == null) {
                return false;
            }
            return ((Boolean) this.f48069d.g(C0591d.f48074d)).booleanValue();
        }

        public final void a() {
            this.f48069d.g(g.f48077d);
        }

        @Override // java.io.Closeable, java.lang.AutoCloseable
        public void close() {
            this.f48069d.d();
        }

        @Override // x3.g
        public boolean d2() {
            return ((Boolean) this.f48069d.g(e.f48075d)).booleanValue();
        }

        @Override // x3.g
        public void h0() {
            Unit unit;
            x3.g h10 = this.f48069d.h();
            if (h10 != null) {
                h10.h0();
                unit = Unit.f33074a;
            } else {
                unit = null;
            }
            if (unit != null) {
                return;
            }
            throw new IllegalStateException("setTransactionSuccessful called but delegateDb is null");
        }

        @Override // x3.g
        public void i0(String sql, Object[] bindArgs) {
            Intrinsics.checkNotNullParameter(sql, "sql");
            Intrinsics.checkNotNullParameter(bindArgs, "bindArgs");
            this.f48069d.g(new c(sql, bindArgs));
        }

        @Override // x3.g
        public boolean isOpen() {
            x3.g h10 = this.f48069d.h();
            if (h10 == null) {
                return false;
            }
            return h10.isOpen();
        }

        @Override // x3.g
        public void j0() {
            try {
                this.f48069d.j().j0();
            } catch (Throwable th2) {
                this.f48069d.e();
                throw th2;
            }
        }

        @Override // x3.g
        public x3.k l1(String sql) {
            Intrinsics.checkNotNullParameter(sql, "sql");
            return new b(sql, this.f48069d);
        }

        @Override // x3.g
        public String q() {
            return (String) this.f48069d.g(f.f48076d);
        }

        @Override // x3.g
        public void u0() {
            if (this.f48069d.h() != null) {
                try {
                    x3.g h10 = this.f48069d.h();
                    Intrinsics.checkNotNull(h10);
                    h10.u0();
                    return;
                } finally {
                    this.f48069d.e();
                }
            }
            throw new IllegalStateException("End transaction called but delegateDb is null");
        }

        @Override // x3.g
        public int z1(String table, int i10, ContentValues values, String str, Object[] objArr) {
            Intrinsics.checkNotNullParameter(table, "table");
            Intrinsics.checkNotNullParameter(values, "values");
            return ((Number) this.f48069d.g(new h(table, i10, values, str, objArr))).intValue();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private static final class c implements Cursor {

        /* renamed from: d  reason: collision with root package name */
        private final Cursor f48090d;

        /* renamed from: e  reason: collision with root package name */
        private final r3.c f48091e;

        public c(Cursor delegate, r3.c autoCloser) {
            Intrinsics.checkNotNullParameter(delegate, "delegate");
            Intrinsics.checkNotNullParameter(autoCloser, "autoCloser");
            this.f48090d = delegate;
            this.f48091e = autoCloser;
        }

        @Override // android.database.Cursor, java.io.Closeable, java.lang.AutoCloseable
        public void close() {
            this.f48090d.close();
            this.f48091e.e();
        }

        @Override // android.database.Cursor
        public void copyStringToBuffer(int i10, CharArrayBuffer charArrayBuffer) {
            this.f48090d.copyStringToBuffer(i10, charArrayBuffer);
        }

        @Override // android.database.Cursor
        public void deactivate() {
            this.f48090d.deactivate();
        }

        @Override // android.database.Cursor
        public byte[] getBlob(int i10) {
            return this.f48090d.getBlob(i10);
        }

        @Override // android.database.Cursor
        public int getColumnCount() {
            return this.f48090d.getColumnCount();
        }

        @Override // android.database.Cursor
        public int getColumnIndex(String str) {
            return this.f48090d.getColumnIndex(str);
        }

        @Override // android.database.Cursor
        public int getColumnIndexOrThrow(String str) {
            return this.f48090d.getColumnIndexOrThrow(str);
        }

        @Override // android.database.Cursor
        public String getColumnName(int i10) {
            return this.f48090d.getColumnName(i10);
        }

        @Override // android.database.Cursor
        public String[] getColumnNames() {
            return this.f48090d.getColumnNames();
        }

        @Override // android.database.Cursor
        public int getCount() {
            return this.f48090d.getCount();
        }

        @Override // android.database.Cursor
        public double getDouble(int i10) {
            return this.f48090d.getDouble(i10);
        }

        @Override // android.database.Cursor
        public Bundle getExtras() {
            return this.f48090d.getExtras();
        }

        @Override // android.database.Cursor
        public float getFloat(int i10) {
            return this.f48090d.getFloat(i10);
        }

        @Override // android.database.Cursor
        public int getInt(int i10) {
            return this.f48090d.getInt(i10);
        }

        @Override // android.database.Cursor
        public long getLong(int i10) {
            return this.f48090d.getLong(i10);
        }

        @Override // android.database.Cursor
        public Uri getNotificationUri() {
            return x3.c.a(this.f48090d);
        }

        @Override // android.database.Cursor
        public List getNotificationUris() {
            return x3.f.a(this.f48090d);
        }

        @Override // android.database.Cursor
        public int getPosition() {
            return this.f48090d.getPosition();
        }

        @Override // android.database.Cursor
        public short getShort(int i10) {
            return this.f48090d.getShort(i10);
        }

        @Override // android.database.Cursor
        public String getString(int i10) {
            return this.f48090d.getString(i10);
        }

        @Override // android.database.Cursor
        public int getType(int i10) {
            return this.f48090d.getType(i10);
        }

        @Override // android.database.Cursor
        public boolean getWantsAllOnMoveCalls() {
            return this.f48090d.getWantsAllOnMoveCalls();
        }

        @Override // android.database.Cursor
        public boolean isAfterLast() {
            return this.f48090d.isAfterLast();
        }

        @Override // android.database.Cursor
        public boolean isBeforeFirst() {
            return this.f48090d.isBeforeFirst();
        }

        @Override // android.database.Cursor
        public boolean isClosed() {
            return this.f48090d.isClosed();
        }

        @Override // android.database.Cursor
        public boolean isFirst() {
            return this.f48090d.isFirst();
        }

        @Override // android.database.Cursor
        public boolean isLast() {
            return this.f48090d.isLast();
        }

        @Override // android.database.Cursor
        public boolean isNull(int i10) {
            return this.f48090d.isNull(i10);
        }

        @Override // android.database.Cursor
        public boolean move(int i10) {
            return this.f48090d.move(i10);
        }

        @Override // android.database.Cursor
        public boolean moveToFirst() {
            return this.f48090d.moveToFirst();
        }

        @Override // android.database.Cursor
        public boolean moveToLast() {
            return this.f48090d.moveToLast();
        }

        @Override // android.database.Cursor
        public boolean moveToNext() {
            return this.f48090d.moveToNext();
        }

        @Override // android.database.Cursor
        public boolean moveToPosition(int i10) {
            return this.f48090d.moveToPosition(i10);
        }

        @Override // android.database.Cursor
        public boolean moveToPrevious() {
            return this.f48090d.moveToPrevious();
        }

        @Override // android.database.Cursor
        public void registerContentObserver(ContentObserver contentObserver) {
            this.f48090d.registerContentObserver(contentObserver);
        }

        @Override // android.database.Cursor
        public void registerDataSetObserver(DataSetObserver dataSetObserver) {
            this.f48090d.registerDataSetObserver(dataSetObserver);
        }

        @Override // android.database.Cursor
        public boolean requery() {
            return this.f48090d.requery();
        }

        @Override // android.database.Cursor
        public Bundle respond(Bundle bundle) {
            return this.f48090d.respond(bundle);
        }

        @Override // android.database.Cursor
        public void setExtras(Bundle extras) {
            Intrinsics.checkNotNullParameter(extras, "extras");
            x3.e.a(this.f48090d, extras);
        }

        @Override // android.database.Cursor
        public void setNotificationUri(ContentResolver contentResolver, Uri uri) {
            this.f48090d.setNotificationUri(contentResolver, uri);
        }

        @Override // android.database.Cursor
        public void setNotificationUris(ContentResolver cr2, List uris) {
            Intrinsics.checkNotNullParameter(cr2, "cr");
            Intrinsics.checkNotNullParameter(uris, "uris");
            x3.f.b(this.f48090d, cr2, uris);
        }

        @Override // android.database.Cursor
        public void unregisterContentObserver(ContentObserver contentObserver) {
            this.f48090d.unregisterContentObserver(contentObserver);
        }

        @Override // android.database.Cursor
        public void unregisterDataSetObserver(DataSetObserver dataSetObserver) {
            this.f48090d.unregisterDataSetObserver(dataSetObserver);
        }
    }

    public d(x3.h delegate, r3.c autoCloser) {
        Intrinsics.checkNotNullParameter(delegate, "delegate");
        Intrinsics.checkNotNullParameter(autoCloser, "autoCloser");
        this.f48066d = delegate;
        this.f48067e = autoCloser;
        autoCloser.k(getDelegate());
        this.f48068i = new a(autoCloser);
    }

    @Override // x3.h, java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        this.f48068i.close();
    }

    @Override // x3.h
    public String getDatabaseName() {
        return this.f48066d.getDatabaseName();
    }

    @Override // r3.g
    public x3.h getDelegate() {
        return this.f48066d;
    }

    @Override // x3.h
    public x3.g getWritableDatabase() {
        this.f48068i.a();
        return this.f48068i;
    }

    @Override // x3.h
    public void setWriteAheadLoggingEnabled(boolean z10) {
        this.f48066d.setWriteAheadLoggingEnabled(z10);
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class b implements x3.k {

        /* renamed from: d  reason: collision with root package name */
        private final String f48083d;

        /* renamed from: e  reason: collision with root package name */
        private final r3.c f48084e;

        /* renamed from: i  reason: collision with root package name */
        private final ArrayList f48085i;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        static final class a extends Lambda implements Function1 {

            /* renamed from: d  reason: collision with root package name */
            public static final a f48086d = new a();

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
            final /* synthetic */ Function1 f48088e;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            C0592b(Function1 function1) {
                super(1);
                this.f48088e = function1;
            }

            @Override // kotlin.jvm.functions.Function1
            /* renamed from: a */
            public final Object invoke(x3.g db2) {
                Intrinsics.checkNotNullParameter(db2, "db");
                x3.k l12 = db2.l1(b.this.f48083d);
                b.this.l(l12);
                return this.f48088e.invoke(l12);
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        static final class c extends Lambda implements Function1 {

            /* renamed from: d  reason: collision with root package name */
            public static final c f48089d = new c();

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
            this.f48083d = sql;
            this.f48084e = autoCloser;
            this.f48085i = new ArrayList();
        }

        /* JADX INFO: Access modifiers changed from: private */
        public final void l(x3.k kVar) {
            Iterator it = this.f48085i.iterator();
            int i10 = 0;
            while (it.hasNext()) {
                it.next();
                int i11 = i10 + 1;
                if (i10 < 0) {
                    CollectionsKt.v();
                }
                Object obj = this.f48085i.get(i10);
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
            return this.f48084e.g(new C0592b(function1));
        }

        private final void x(int i10, Object obj) {
            int size;
            int i11 = i10 - 1;
            if (i11 >= this.f48085i.size() && (size = this.f48085i.size()) <= i11) {
                while (true) {
                    this.f48085i.add(null);
                    if (size == i11) {
                        break;
                    }
                    size++;
                }
            }
            this.f48085i.set(i11, obj);
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
            return ((Number) n(c.f48089d)).intValue();
        }

        @Override // x3.i
        public void T(int i10, double d10) {
            x(i10, Double.valueOf(d10));
        }

        @Override // x3.k
        public long X0() {
            return ((Number) n(a.f48086d)).longValue();
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
