package y3;

import android.content.ContentValues;
import android.database.Cursor;
import android.database.sqlite.SQLiteCursor;
import android.database.sqlite.SQLiteCursorDriver;
import android.database.sqlite.SQLiteDatabase;
import android.database.sqlite.SQLiteQuery;
import android.database.sqlite.SQLiteStatement;
import android.os.CancellationSignal;
import android.text.TextUtils;
import java.util.List;
import kotlin.jvm.functions.Function4;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Lambda;
import x3.j;
import x3.k;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class c implements x3.g {

    /* renamed from: i  reason: collision with root package name */
    public static final a f54892i = new a(null);

    /* renamed from: o  reason: collision with root package name */
    private static final String[] f54893o = {"", " OR ROLLBACK ", " OR ABORT ", " OR FAIL ", " OR IGNORE ", " OR REPLACE "};

    /* renamed from: p  reason: collision with root package name */
    private static final String[] f54894p = new String[0];

    /* renamed from: d  reason: collision with root package name */
    private final SQLiteDatabase f54895d;

    /* renamed from: e  reason: collision with root package name */
    private final List f54896e;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private a() {
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class b extends Lambda implements Function4 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ j f54897d;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        b(j jVar) {
            super(4);
            this.f54897d = jVar;
        }

        @Override // kotlin.jvm.functions.Function4
        /* renamed from: a */
        public final SQLiteCursor invoke(SQLiteDatabase sQLiteDatabase, SQLiteCursorDriver sQLiteCursorDriver, String str, SQLiteQuery sQLiteQuery) {
            j jVar = this.f54897d;
            Intrinsics.checkNotNull(sQLiteQuery);
            jVar.g(new g(sQLiteQuery));
            return new SQLiteCursor(sQLiteCursorDriver, str, sQLiteQuery);
        }
    }

    public c(SQLiteDatabase delegate) {
        Intrinsics.checkNotNullParameter(delegate, "delegate");
        this.f54895d = delegate;
        this.f54896e = delegate.getAttachedDbs();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Cursor m(Function4 tmp0, SQLiteDatabase sQLiteDatabase, SQLiteCursorDriver sQLiteCursorDriver, String str, SQLiteQuery sQLiteQuery) {
        Intrinsics.checkNotNullParameter(tmp0, "$tmp0");
        return (Cursor) tmp0.invoke(sQLiteDatabase, sQLiteCursorDriver, str, sQLiteQuery);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Cursor n(j query, SQLiteDatabase sQLiteDatabase, SQLiteCursorDriver sQLiteCursorDriver, String str, SQLiteQuery sQLiteQuery) {
        Intrinsics.checkNotNullParameter(query, "$query");
        Intrinsics.checkNotNull(sQLiteQuery);
        query.g(new g(sQLiteQuery));
        return new SQLiteCursor(sQLiteCursorDriver, str, sQLiteQuery);
    }

    @Override // x3.g
    public Cursor G1(String query) {
        Intrinsics.checkNotNullParameter(query, "query");
        return S0(new x3.a(query));
    }

    @Override // x3.g
    public void H() {
        this.f54895d.beginTransaction();
    }

    @Override // x3.g
    public List L() {
        return this.f54896e;
    }

    @Override // x3.g
    public Cursor N(final j query, CancellationSignal cancellationSignal) {
        Intrinsics.checkNotNullParameter(query, "query");
        SQLiteDatabase sQLiteDatabase = this.f54895d;
        String a10 = query.a();
        String[] strArr = f54894p;
        Intrinsics.checkNotNull(cancellationSignal);
        return x3.b.c(sQLiteDatabase, a10, strArr, null, cancellationSignal, new SQLiteDatabase.CursorFactory() { // from class: y3.a
            @Override // android.database.sqlite.SQLiteDatabase.CursorFactory
            public final Cursor newCursor(SQLiteDatabase sQLiteDatabase2, SQLiteCursorDriver sQLiteCursorDriver, String str, SQLiteQuery sQLiteQuery) {
                Cursor n10;
                n10 = c.n(j.this, sQLiteDatabase2, sQLiteCursorDriver, str, sQLiteQuery);
                return n10;
            }
        });
    }

    @Override // x3.g
    public void O(String sql) {
        Intrinsics.checkNotNullParameter(sql, "sql");
        this.f54895d.execSQL(sql);
    }

    @Override // x3.g
    public boolean R1() {
        return this.f54895d.inTransaction();
    }

    @Override // x3.g
    public Cursor S0(j query) {
        Intrinsics.checkNotNullParameter(query, "query");
        final b bVar = new b(query);
        Cursor rawQueryWithFactory = this.f54895d.rawQueryWithFactory(new SQLiteDatabase.CursorFactory() { // from class: y3.b
            @Override // android.database.sqlite.SQLiteDatabase.CursorFactory
            public final Cursor newCursor(SQLiteDatabase sQLiteDatabase, SQLiteCursorDriver sQLiteCursorDriver, String str, SQLiteQuery sQLiteQuery) {
                Cursor m10;
                m10 = c.m(Function4.this, sQLiteDatabase, sQLiteCursorDriver, str, sQLiteQuery);
                return m10;
            }
        }, query.a(), f54894p, null);
        Intrinsics.checkNotNullExpressionValue(rawQueryWithFactory, "delegate.rawQueryWithFac…EMPTY_STRING_ARRAY, null)");
        return rawQueryWithFactory;
    }

    @Override // x3.g
    public boolean c2() {
        return x3.b.b(this.f54895d);
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        this.f54895d.close();
    }

    @Override // x3.g
    public boolean isOpen() {
        return this.f54895d.isOpen();
    }

    @Override // x3.g
    public void j0() {
        this.f54895d.setTransactionSuccessful();
    }

    public final boolean k(SQLiteDatabase sqLiteDatabase) {
        Intrinsics.checkNotNullParameter(sqLiteDatabase, "sqLiteDatabase");
        return Intrinsics.areEqual(this.f54895d, sqLiteDatabase);
    }

    @Override // x3.g
    public void k0(String sql, Object[] bindArgs) {
        Intrinsics.checkNotNullParameter(sql, "sql");
        Intrinsics.checkNotNullParameter(bindArgs, "bindArgs");
        this.f54895d.execSQL(sql, bindArgs);
    }

    @Override // x3.g
    public k k1(String sql) {
        Intrinsics.checkNotNullParameter(sql, "sql");
        SQLiteStatement compileStatement = this.f54895d.compileStatement(sql);
        Intrinsics.checkNotNullExpressionValue(compileStatement, "delegate.compileStatement(sql)");
        return new h(compileStatement);
    }

    @Override // x3.g
    public void l0() {
        this.f54895d.beginTransactionNonExclusive();
    }

    @Override // x3.g
    public String t() {
        return this.f54895d.getPath();
    }

    @Override // x3.g
    public void v0() {
        this.f54895d.endTransaction();
    }

    @Override // x3.g
    public int y1(String table, int i10, ContentValues values, String str, Object[] objArr) {
        int length;
        String str2;
        Intrinsics.checkNotNullParameter(table, "table");
        Intrinsics.checkNotNullParameter(values, "values");
        if (values.size() != 0) {
            int size = values.size();
            if (objArr == null) {
                length = size;
            } else {
                length = objArr.length + size;
            }
            Object[] objArr2 = new Object[length];
            StringBuilder sb2 = new StringBuilder();
            sb2.append("UPDATE ");
            sb2.append(f54893o[i10]);
            sb2.append(table);
            sb2.append(" SET ");
            int i11 = 0;
            for (String str3 : values.keySet()) {
                if (i11 > 0) {
                    str2 = ",";
                } else {
                    str2 = "";
                }
                sb2.append(str2);
                sb2.append(str3);
                objArr2[i11] = values.get(str3);
                sb2.append("=?");
                i11++;
            }
            if (objArr != null) {
                for (int i12 = size; i12 < length; i12++) {
                    objArr2[i12] = objArr[i12 - size];
                }
            }
            if (!TextUtils.isEmpty(str)) {
                sb2.append(" WHERE ");
                sb2.append(str);
            }
            String sb3 = sb2.toString();
            Intrinsics.checkNotNullExpressionValue(sb3, "StringBuilder().apply(builderAction).toString()");
            k k12 = k1(sb3);
            x3.a.f54434i.b(k12, objArr2);
            return k12.U();
        }
        throw new IllegalArgumentException("Empty values");
    }
}
