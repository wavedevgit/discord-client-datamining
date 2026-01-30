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
    public static final a f53922i = new a(null);

    /* renamed from: o  reason: collision with root package name */
    private static final String[] f53923o = {"", " OR ROLLBACK ", " OR ABORT ", " OR FAIL ", " OR IGNORE ", " OR REPLACE "};

    /* renamed from: p  reason: collision with root package name */
    private static final String[] f53924p = new String[0];

    /* renamed from: d  reason: collision with root package name */
    private final SQLiteDatabase f53925d;

    /* renamed from: e  reason: collision with root package name */
    private final List f53926e;

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
        final /* synthetic */ j f53927d;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        b(j jVar) {
            super(4);
            this.f53927d = jVar;
        }

        @Override // kotlin.jvm.functions.Function4
        /* renamed from: a */
        public final SQLiteCursor invoke(SQLiteDatabase sQLiteDatabase, SQLiteCursorDriver sQLiteCursorDriver, String str, SQLiteQuery sQLiteQuery) {
            j jVar = this.f53927d;
            Intrinsics.checkNotNull(sQLiteQuery);
            jVar.h(new g(sQLiteQuery));
            return new SQLiteCursor(sQLiteCursorDriver, str, sQLiteQuery);
        }
    }

    public c(SQLiteDatabase delegate) {
        Intrinsics.checkNotNullParameter(delegate, "delegate");
        this.f53925d = delegate;
        this.f53926e = delegate.getAttachedDbs();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Cursor n(Function4 tmp0, SQLiteDatabase sQLiteDatabase, SQLiteCursorDriver sQLiteCursorDriver, String str, SQLiteQuery sQLiteQuery) {
        Intrinsics.checkNotNullParameter(tmp0, "$tmp0");
        return (Cursor) tmp0.invoke(sQLiteDatabase, sQLiteCursorDriver, str, sQLiteQuery);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Cursor x(j query, SQLiteDatabase sQLiteDatabase, SQLiteCursorDriver sQLiteCursorDriver, String str, SQLiteQuery sQLiteQuery) {
        Intrinsics.checkNotNullParameter(query, "$query");
        Intrinsics.checkNotNull(sQLiteQuery);
        query.h(new g(sQLiteQuery));
        return new SQLiteCursor(sQLiteCursorDriver, str, sQLiteQuery);
    }

    @Override // x3.g
    public void D() {
        this.f53925d.beginTransaction();
    }

    @Override // x3.g
    public List H() {
        return this.f53926e;
    }

    @Override // x3.g
    public Cursor H1(String query) {
        Intrinsics.checkNotNullParameter(query, "query");
        return Q0(new x3.a(query));
    }

    @Override // x3.g
    public Cursor J(final j query, CancellationSignal cancellationSignal) {
        Intrinsics.checkNotNullParameter(query, "query");
        SQLiteDatabase sQLiteDatabase = this.f53925d;
        String a10 = query.a();
        String[] strArr = f53924p;
        Intrinsics.checkNotNull(cancellationSignal);
        return x3.b.c(sQLiteDatabase, a10, strArr, null, cancellationSignal, new SQLiteDatabase.CursorFactory() { // from class: y3.a
            @Override // android.database.sqlite.SQLiteDatabase.CursorFactory
            public final Cursor newCursor(SQLiteDatabase sQLiteDatabase2, SQLiteCursorDriver sQLiteCursorDriver, String str, SQLiteQuery sQLiteQuery) {
                Cursor x10;
                x10 = c.x(j.this, sQLiteDatabase2, sQLiteCursorDriver, str, sQLiteQuery);
                return x10;
            }
        });
    }

    @Override // x3.g
    public void K(String sql) {
        Intrinsics.checkNotNullParameter(sql, "sql");
        this.f53925d.execSQL(sql);
    }

    @Override // x3.g
    public Cursor Q0(j query) {
        Intrinsics.checkNotNullParameter(query, "query");
        final b bVar = new b(query);
        Cursor rawQueryWithFactory = this.f53925d.rawQueryWithFactory(new SQLiteDatabase.CursorFactory() { // from class: y3.b
            @Override // android.database.sqlite.SQLiteDatabase.CursorFactory
            public final Cursor newCursor(SQLiteDatabase sQLiteDatabase, SQLiteCursorDriver sQLiteCursorDriver, String str, SQLiteQuery sQLiteQuery) {
                Cursor n10;
                n10 = c.n(Function4.this, sQLiteDatabase, sQLiteCursorDriver, str, sQLiteQuery);
                return n10;
            }
        }, query.a(), f53924p, null);
        Intrinsics.checkNotNullExpressionValue(rawQueryWithFactory, "delegate.rawQueryWithFac…EMPTY_STRING_ARRAY, null)");
        return rawQueryWithFactory;
    }

    @Override // x3.g
    public boolean S1() {
        return this.f53925d.inTransaction();
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        this.f53925d.close();
    }

    @Override // x3.g
    public boolean d2() {
        return x3.b.b(this.f53925d);
    }

    @Override // x3.g
    public void g0() {
        this.f53925d.setTransactionSuccessful();
    }

    @Override // x3.g
    public void h0(String sql, Object[] bindArgs) {
        Intrinsics.checkNotNullParameter(sql, "sql");
        Intrinsics.checkNotNullParameter(bindArgs, "bindArgs");
        this.f53925d.execSQL(sql, bindArgs);
    }

    @Override // x3.g
    public void i0() {
        this.f53925d.beginTransactionNonExclusive();
    }

    @Override // x3.g
    public boolean isOpen() {
        return this.f53925d.isOpen();
    }

    @Override // x3.g
    public k k1(String sql) {
        Intrinsics.checkNotNullParameter(sql, "sql");
        SQLiteStatement compileStatement = this.f53925d.compileStatement(sql);
        Intrinsics.checkNotNullExpressionValue(compileStatement, "delegate.compileStatement(sql)");
        return new h(compileStatement);
    }

    public final boolean l(SQLiteDatabase sqLiteDatabase) {
        Intrinsics.checkNotNullParameter(sqLiteDatabase, "sqLiteDatabase");
        return Intrinsics.areEqual(this.f53925d, sqLiteDatabase);
    }

    @Override // x3.g
    public String q() {
        return this.f53925d.getPath();
    }

    @Override // x3.g
    public void s0() {
        this.f53925d.endTransaction();
    }

    @Override // x3.g
    public int z1(String table, int i10, ContentValues values, String str, Object[] objArr) {
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
            sb2.append(f53923o[i10]);
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
            x3.a.f53145i.b(k12, objArr2);
            return k12.R();
        }
        throw new IllegalArgumentException("Empty values");
    }
}
