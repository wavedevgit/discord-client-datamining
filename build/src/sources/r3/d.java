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
    private final x3.h f47864d;

    /* renamed from: e  reason: collision with root package name */
    public final r3.c f47865e;

    /* renamed from: i  reason: collision with root package name */
    private final a f47866i;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a implements x3.g {

        /* renamed from: d  reason: collision with root package name */
        private final r3.c f47867d;

        /* renamed from: r3.d$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        static final class C0579a extends Lambda implements Function1 {

            /* renamed from: d  reason: collision with root package name */
            public static final C0579a f47868d = new C0579a();

            C0579a() {
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
            final /* synthetic */ String f47869d;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            b(String str) {
                super(1);
                this.f47869d = str;
            }

            @Override // kotlin.jvm.functions.Function1
            /* renamed from: a */
            public final Object invoke(x3.g db2) {
                Intrinsics.checkNotNullParameter(db2, "db");
                db2.K(this.f47869d);
                return null;
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        static final class c extends Lambda implements Function1 {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ String f47870d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ Object[] f47871e;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            c(String str, Object[] objArr) {
                super(1);
                this.f47870d = str;
                this.f47871e = objArr;
            }

            @Override // kotlin.jvm.functions.Function1
            /* renamed from: a */
            public final Object invoke(x3.g db2) {
                Intrinsics.checkNotNullParameter(db2, "db");
                db2.h0(this.f47870d, this.f47871e);
                return null;
            }
        }

        /* renamed from: r3.d$a$d  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        /* synthetic */ class C0580d extends FunctionReferenceImpl implements Function1 {

            /* renamed from: d  reason: collision with root package name */
            public static final C0580d f47872d = new C0580d();

            C0580d() {
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
            public static final e f47873d = new e();

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
            public static final f f47874d = new f();

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
            public static final g f47875d = new g();

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
            final /* synthetic */ String f47876d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ int f47877e;

            /* renamed from: i  reason: collision with root package name */
            final /* synthetic */ ContentValues f47878i;

            /* renamed from: o  reason: collision with root package name */
            final /* synthetic */ String f47879o;

            /* renamed from: p  reason: collision with root package name */
            final /* synthetic */ Object[] f47880p;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            h(String str, int i10, ContentValues contentValues, String str2, Object[] objArr) {
                super(1);
                this.f47876d = str;
                this.f47877e = i10;
                this.f47878i = contentValues;
                this.f47879o = str2;
                this.f47880p = objArr;
            }

            @Override // kotlin.jvm.functions.Function1
            /* renamed from: a */
            public final Integer invoke(x3.g db2) {
                Intrinsics.checkNotNullParameter(db2, "db");
                return Integer.valueOf(db2.z1(this.f47876d, this.f47877e, this.f47878i, this.f47879o, this.f47880p));
            }
        }

        public a(r3.c autoCloser) {
            Intrinsics.checkNotNullParameter(autoCloser, "autoCloser");
            this.f47867d = autoCloser;
        }

        @Override // x3.g
        public void D() {
            try {
                this.f47867d.j().D();
            } catch (Throwable th2) {
                this.f47867d.e();
                throw th2;
            }
        }

        @Override // x3.g
        public List H() {
            return (List) this.f47867d.g(C0579a.f47868d);
        }

        @Override // x3.g
        public Cursor H1(String query) {
            Intrinsics.checkNotNullParameter(query, "query");
            try {
                return new c(this.f47867d.j().H1(query), this.f47867d);
            } catch (Throwable th2) {
                this.f47867d.e();
                throw th2;
            }
        }

        @Override // x3.g
        public Cursor J(x3.j query, CancellationSignal cancellationSignal) {
            Intrinsics.checkNotNullParameter(query, "query");
            try {
                return new c(this.f47867d.j().J(query, cancellationSignal), this.f47867d);
            } catch (Throwable th2) {
                this.f47867d.e();
                throw th2;
            }
        }

        @Override // x3.g
        public void K(String sql) {
            Intrinsics.checkNotNullParameter(sql, "sql");
            this.f47867d.g(new b(sql));
        }

        @Override // x3.g
        public Cursor Q0(x3.j query) {
            Intrinsics.checkNotNullParameter(query, "query");
            try {
                return new c(this.f47867d.j().Q0(query), this.f47867d);
            } catch (Throwable th2) {
                this.f47867d.e();
                throw th2;
            }
        }

        @Override // x3.g
        public boolean S1() {
            if (this.f47867d.h() == null) {
                return false;
            }
            return ((Boolean) this.f47867d.g(C0580d.f47872d)).booleanValue();
        }

        public final void a() {
            this.f47867d.g(g.f47875d);
        }

        @Override // java.io.Closeable, java.lang.AutoCloseable
        public void close() {
            this.f47867d.d();
        }

        @Override // x3.g
        public boolean d2() {
            return ((Boolean) this.f47867d.g(e.f47873d)).booleanValue();
        }

        @Override // x3.g
        public void g0() {
            Unit unit;
            x3.g h10 = this.f47867d.h();
            if (h10 != null) {
                h10.g0();
                unit = Unit.f33298a;
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
            this.f47867d.g(new c(sql, bindArgs));
        }

        @Override // x3.g
        public void i0() {
            try {
                this.f47867d.j().i0();
            } catch (Throwable th2) {
                this.f47867d.e();
                throw th2;
            }
        }

        @Override // x3.g
        public boolean isOpen() {
            x3.g h10 = this.f47867d.h();
            if (h10 == null) {
                return false;
            }
            return h10.isOpen();
        }

        @Override // x3.g
        public x3.k k1(String sql) {
            Intrinsics.checkNotNullParameter(sql, "sql");
            return new b(sql, this.f47867d);
        }

        @Override // x3.g
        public String q() {
            return (String) this.f47867d.g(f.f47874d);
        }

        @Override // x3.g
        public void s0() {
            if (this.f47867d.h() != null) {
                try {
                    x3.g h10 = this.f47867d.h();
                    Intrinsics.checkNotNull(h10);
                    h10.s0();
                    return;
                } finally {
                    this.f47867d.e();
                }
            }
            throw new IllegalStateException("End transaction called but delegateDb is null");
        }

        @Override // x3.g
        public int z1(String table, int i10, ContentValues values, String str, Object[] objArr) {
            Intrinsics.checkNotNullParameter(table, "table");
            Intrinsics.checkNotNullParameter(values, "values");
            return ((Number) this.f47867d.g(new h(table, i10, values, str, objArr))).intValue();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private static final class c implements Cursor {

        /* renamed from: d  reason: collision with root package name */
        private final Cursor f47888d;

        /* renamed from: e  reason: collision with root package name */
        private final r3.c f47889e;

        public c(Cursor delegate, r3.c autoCloser) {
            Intrinsics.checkNotNullParameter(delegate, "delegate");
            Intrinsics.checkNotNullParameter(autoCloser, "autoCloser");
            this.f47888d = delegate;
            this.f47889e = autoCloser;
        }

        @Override // android.database.Cursor, java.io.Closeable, java.lang.AutoCloseable
        public void close() {
            this.f47888d.close();
            this.f47889e.e();
        }

        @Override // android.database.Cursor
        public void copyStringToBuffer(int i10, CharArrayBuffer charArrayBuffer) {
            this.f47888d.copyStringToBuffer(i10, charArrayBuffer);
        }

        @Override // android.database.Cursor
        public void deactivate() {
            this.f47888d.deactivate();
        }

        @Override // android.database.Cursor
        public byte[] getBlob(int i10) {
            return this.f47888d.getBlob(i10);
        }

        @Override // android.database.Cursor
        public int getColumnCount() {
            return this.f47888d.getColumnCount();
        }

        @Override // android.database.Cursor
        public int getColumnIndex(String str) {
            return this.f47888d.getColumnIndex(str);
        }

        @Override // android.database.Cursor
        public int getColumnIndexOrThrow(String str) {
            return this.f47888d.getColumnIndexOrThrow(str);
        }

        @Override // android.database.Cursor
        public String getColumnName(int i10) {
            return this.f47888d.getColumnName(i10);
        }

        @Override // android.database.Cursor
        public String[] getColumnNames() {
            return this.f47888d.getColumnNames();
        }

        @Override // android.database.Cursor
        public int getCount() {
            return this.f47888d.getCount();
        }

        @Override // android.database.Cursor
        public double getDouble(int i10) {
            return this.f47888d.getDouble(i10);
        }

        @Override // android.database.Cursor
        public Bundle getExtras() {
            return this.f47888d.getExtras();
        }

        @Override // android.database.Cursor
        public float getFloat(int i10) {
            return this.f47888d.getFloat(i10);
        }

        @Override // android.database.Cursor
        public int getInt(int i10) {
            return this.f47888d.getInt(i10);
        }

        @Override // android.database.Cursor
        public long getLong(int i10) {
            return this.f47888d.getLong(i10);
        }

        @Override // android.database.Cursor
        public Uri getNotificationUri() {
            return x3.c.a(this.f47888d);
        }

        @Override // android.database.Cursor
        public List getNotificationUris() {
            return x3.f.a(this.f47888d);
        }

        @Override // android.database.Cursor
        public int getPosition() {
            return this.f47888d.getPosition();
        }

        @Override // android.database.Cursor
        public short getShort(int i10) {
            return this.f47888d.getShort(i10);
        }

        @Override // android.database.Cursor
        public String getString(int i10) {
            return this.f47888d.getString(i10);
        }

        @Override // android.database.Cursor
        public int getType(int i10) {
            return this.f47888d.getType(i10);
        }

        @Override // android.database.Cursor
        public boolean getWantsAllOnMoveCalls() {
            return this.f47888d.getWantsAllOnMoveCalls();
        }

        @Override // android.database.Cursor
        public boolean isAfterLast() {
            return this.f47888d.isAfterLast();
        }

        @Override // android.database.Cursor
        public boolean isBeforeFirst() {
            return this.f47888d.isBeforeFirst();
        }

        @Override // android.database.Cursor
        public boolean isClosed() {
            return this.f47888d.isClosed();
        }

        @Override // android.database.Cursor
        public boolean isFirst() {
            return this.f47888d.isFirst();
        }

        @Override // android.database.Cursor
        public boolean isLast() {
            return this.f47888d.isLast();
        }

        @Override // android.database.Cursor
        public boolean isNull(int i10) {
            return this.f47888d.isNull(i10);
        }

        @Override // android.database.Cursor
        public boolean move(int i10) {
            return this.f47888d.move(i10);
        }

        @Override // android.database.Cursor
        public boolean moveToFirst() {
            return this.f47888d.moveToFirst();
        }

        @Override // android.database.Cursor
        public boolean moveToLast() {
            return this.f47888d.moveToLast();
        }

        @Override // android.database.Cursor
        public boolean moveToNext() {
            return this.f47888d.moveToNext();
        }

        @Override // android.database.Cursor
        public boolean moveToPosition(int i10) {
            return this.f47888d.moveToPosition(i10);
        }

        @Override // android.database.Cursor
        public boolean moveToPrevious() {
            return this.f47888d.moveToPrevious();
        }

        @Override // android.database.Cursor
        public void registerContentObserver(ContentObserver contentObserver) {
            this.f47888d.registerContentObserver(contentObserver);
        }

        @Override // android.database.Cursor
        public void registerDataSetObserver(DataSetObserver dataSetObserver) {
            this.f47888d.registerDataSetObserver(dataSetObserver);
        }

        @Override // android.database.Cursor
        public boolean requery() {
            return this.f47888d.requery();
        }

        @Override // android.database.Cursor
        public Bundle respond(Bundle bundle) {
            return this.f47888d.respond(bundle);
        }

        @Override // android.database.Cursor
        public void setExtras(Bundle extras) {
            Intrinsics.checkNotNullParameter(extras, "extras");
            x3.e.a(this.f47888d, extras);
        }

        @Override // android.database.Cursor
        public void setNotificationUri(ContentResolver contentResolver, Uri uri) {
            this.f47888d.setNotificationUri(contentResolver, uri);
        }

        @Override // android.database.Cursor
        public void setNotificationUris(ContentResolver cr2, List uris) {
            Intrinsics.checkNotNullParameter(cr2, "cr");
            Intrinsics.checkNotNullParameter(uris, "uris");
            x3.f.b(this.f47888d, cr2, uris);
        }

        @Override // android.database.Cursor
        public void unregisterContentObserver(ContentObserver contentObserver) {
            this.f47888d.unregisterContentObserver(contentObserver);
        }

        @Override // android.database.Cursor
        public void unregisterDataSetObserver(DataSetObserver dataSetObserver) {
            this.f47888d.unregisterDataSetObserver(dataSetObserver);
        }
    }

    public d(x3.h delegate, r3.c autoCloser) {
        Intrinsics.checkNotNullParameter(delegate, "delegate");
        Intrinsics.checkNotNullParameter(autoCloser, "autoCloser");
        this.f47864d = delegate;
        this.f47865e = autoCloser;
        autoCloser.k(getDelegate());
        this.f47866i = new a(autoCloser);
    }

    @Override // x3.h, java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        this.f47866i.close();
    }

    @Override // x3.h
    public String getDatabaseName() {
        return this.f47864d.getDatabaseName();
    }

    @Override // r3.g
    public x3.h getDelegate() {
        return this.f47864d;
    }

    @Override // x3.h
    public x3.g getWritableDatabase() {
        this.f47866i.a();
        return this.f47866i;
    }

    @Override // x3.h
    public void setWriteAheadLoggingEnabled(boolean z10) {
        this.f47864d.setWriteAheadLoggingEnabled(z10);
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class b implements x3.k {

        /* renamed from: d  reason: collision with root package name */
        private final String f47881d;

        /* renamed from: e  reason: collision with root package name */
        private final r3.c f47882e;

        /* renamed from: i  reason: collision with root package name */
        private final ArrayList f47883i;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        static final class a extends Lambda implements Function1 {

            /* renamed from: d  reason: collision with root package name */
            public static final a f47884d = new a();

            a() {
                super(1);
            }

            @Override // kotlin.jvm.functions.Function1
            /* renamed from: a */
            public final Long invoke(x3.k obj) {
                Intrinsics.checkNotNullParameter(obj, "obj");
                return Long.valueOf(obj.W0());
            }
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        /* renamed from: r3.d$b$b  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        public static final class C0581b extends Lambda implements Function1 {

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ Function1 f47886e;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            C0581b(Function1 function1) {
                super(1);
                this.f47886e = function1;
            }

            @Override // kotlin.jvm.functions.Function1
            /* renamed from: a */
            public final Object invoke(x3.g db2) {
                Intrinsics.checkNotNullParameter(db2, "db");
                x3.k k12 = db2.k1(b.this.f47881d);
                b.this.l(k12);
                return this.f47886e.invoke(k12);
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        static final class c extends Lambda implements Function1 {

            /* renamed from: d  reason: collision with root package name */
            public static final c f47887d = new c();

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
            this.f47881d = sql;
            this.f47882e = autoCloser;
            this.f47883i = new ArrayList();
        }

        /* JADX INFO: Access modifiers changed from: private */
        public final void l(x3.k kVar) {
            Iterator it = this.f47883i.iterator();
            int i10 = 0;
            while (it.hasNext()) {
                it.next();
                int i11 = i10 + 1;
                if (i10 < 0) {
                    CollectionsKt.v();
                }
                Object obj = this.f47883i.get(i10);
                if (obj == null) {
                    kVar.P1(i11);
                } else if (obj instanceof Long) {
                    kVar.w1(i11, ((Number) obj).longValue());
                } else if (obj instanceof Double) {
                    kVar.T(i11, ((Number) obj).doubleValue());
                } else if (obj instanceof String) {
                    kVar.g1(i11, (String) obj);
                } else if (obj instanceof byte[]) {
                    kVar.D1(i11, (byte[]) obj);
                }
                i10 = i11;
            }
        }

        private final Object n(Function1 function1) {
            return this.f47882e.g(new C0581b(function1));
        }

        private final void x(int i10, Object obj) {
            int size;
            int i11 = i10 - 1;
            if (i11 >= this.f47883i.size() && (size = this.f47883i.size()) <= i11) {
                while (true) {
                    this.f47883i.add(null);
                    if (size == i11) {
                        break;
                    }
                    size++;
                }
            }
            this.f47883i.set(i11, obj);
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
            return ((Number) n(c.f47887d)).intValue();
        }

        @Override // x3.i
        public void T(int i10, double d10) {
            x(i10, Double.valueOf(d10));
        }

        @Override // x3.k
        public long W0() {
            return ((Number) n(a.f47884d)).longValue();
        }

        @Override // x3.i
        public void g1(int i10, String value) {
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
