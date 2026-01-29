package y3;

import android.content.Context;
import android.database.DatabaseErrorHandler;
import android.database.sqlite.SQLiteDatabase;
import android.database.sqlite.SQLiteException;
import android.database.sqlite.SQLiteOpenHelper;
import android.util.Log;
import ir.l;
import java.io.File;
import java.util.UUID;
import kotlin.Lazy;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Lambda;
import x3.h;
import y3.d;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class d implements x3.h {

    /* renamed from: s  reason: collision with root package name */
    public static final a f53912s = new a(null);

    /* renamed from: d  reason: collision with root package name */
    private final Context f53913d;

    /* renamed from: e  reason: collision with root package name */
    private final String f53914e;

    /* renamed from: i  reason: collision with root package name */
    private final h.a f53915i;

    /* renamed from: o  reason: collision with root package name */
    private final boolean f53916o;

    /* renamed from: p  reason: collision with root package name */
    private final boolean f53917p;

    /* renamed from: q  reason: collision with root package name */
    private final Lazy f53918q;

    /* renamed from: r  reason: collision with root package name */
    private boolean f53919r;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private a() {
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        private y3.c f53920a;

        public b(y3.c cVar) {
            this.f53920a = cVar;
        }

        public final y3.c a() {
            return this.f53920a;
        }

        public final void b(y3.c cVar) {
            this.f53920a = cVar;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class c extends SQLiteOpenHelper {

        /* renamed from: s  reason: collision with root package name */
        public static final C0747c f53921s = new C0747c(null);

        /* renamed from: d  reason: collision with root package name */
        private final Context f53922d;

        /* renamed from: e  reason: collision with root package name */
        private final b f53923e;

        /* renamed from: i  reason: collision with root package name */
        private final h.a f53924i;

        /* renamed from: o  reason: collision with root package name */
        private final boolean f53925o;

        /* renamed from: p  reason: collision with root package name */
        private boolean f53926p;

        /* renamed from: q  reason: collision with root package name */
        private final z3.a f53927q;

        /* renamed from: r  reason: collision with root package name */
        private boolean f53928r;

        /* JADX INFO: Access modifiers changed from: private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        public static final class a extends RuntimeException {

            /* renamed from: d  reason: collision with root package name */
            private final b f53929d;

            /* renamed from: e  reason: collision with root package name */
            private final Throwable f53930e;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public a(b callbackName, Throwable cause) {
                super(cause);
                Intrinsics.checkNotNullParameter(callbackName, "callbackName");
                Intrinsics.checkNotNullParameter(cause, "cause");
                this.f53929d = callbackName;
                this.f53930e = cause;
            }

            public final b a() {
                return this.f53929d;
            }

            @Override // java.lang.Throwable
            public Throwable getCause() {
                return this.f53930e;
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        public enum b {
            ON_CONFIGURE,
            ON_CREATE,
            ON_UPGRADE,
            ON_DOWNGRADE,
            ON_OPEN
        }

        /* renamed from: y3.d$c$c  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        public static final class C0747c {
            public /* synthetic */ C0747c(DefaultConstructorMarker defaultConstructorMarker) {
                this();
            }

            public final y3.c a(b refHolder, SQLiteDatabase sqLiteDatabase) {
                Intrinsics.checkNotNullParameter(refHolder, "refHolder");
                Intrinsics.checkNotNullParameter(sqLiteDatabase, "sqLiteDatabase");
                y3.c a10 = refHolder.a();
                if (a10 != null && a10.l(sqLiteDatabase)) {
                    return a10;
                }
                y3.c cVar = new y3.c(sqLiteDatabase);
                refHolder.b(cVar);
                return cVar;
            }

            private C0747c() {
            }
        }

        /* renamed from: y3.d$c$d  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        public /* synthetic */ class C0748d {

            /* renamed from: a  reason: collision with root package name */
            public static final /* synthetic */ int[] f53937a;

            static {
                int[] iArr = new int[b.values().length];
                try {
                    iArr[b.ON_CONFIGURE.ordinal()] = 1;
                } catch (NoSuchFieldError unused) {
                }
                try {
                    iArr[b.ON_CREATE.ordinal()] = 2;
                } catch (NoSuchFieldError unused2) {
                }
                try {
                    iArr[b.ON_UPGRADE.ordinal()] = 3;
                } catch (NoSuchFieldError unused3) {
                }
                try {
                    iArr[b.ON_DOWNGRADE.ordinal()] = 4;
                } catch (NoSuchFieldError unused4) {
                }
                try {
                    iArr[b.ON_OPEN.ordinal()] = 5;
                } catch (NoSuchFieldError unused5) {
                }
                f53937a = iArr;
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public c(Context context, String str, final b dbRef, final h.a callback, boolean z10) {
            super(context, str, null, callback.f53138a, new DatabaseErrorHandler() { // from class: y3.e
                @Override // android.database.DatabaseErrorHandler
                public final void onCorruption(SQLiteDatabase sQLiteDatabase) {
                    d.c.h(h.a.this, dbRef, sQLiteDatabase);
                }
            });
            String str2;
            Intrinsics.checkNotNullParameter(context, "context");
            Intrinsics.checkNotNullParameter(dbRef, "dbRef");
            Intrinsics.checkNotNullParameter(callback, "callback");
            this.f53922d = context;
            this.f53923e = dbRef;
            this.f53924i = callback;
            this.f53925o = z10;
            if (str == null) {
                str2 = UUID.randomUUID().toString();
                Intrinsics.checkNotNullExpressionValue(str2, "randomUUID().toString()");
            } else {
                str2 = str;
            }
            File cacheDir = context.getCacheDir();
            Intrinsics.checkNotNullExpressionValue(cacheDir, "context.cacheDir");
            this.f53927q = new z3.a(str2, cacheDir, false);
        }

        private final SQLiteDatabase B(boolean z10) {
            File parentFile;
            String databaseName = getDatabaseName();
            if (databaseName != null && (parentFile = this.f53922d.getDatabasePath(databaseName).getParentFile()) != null) {
                parentFile.mkdirs();
                if (!parentFile.isDirectory()) {
                    Log.w("SupportSQLite", "Invalid database parent file, not a directory: " + parentFile);
                }
            }
            try {
                return x(z10);
            } catch (Throwable unused) {
                super.close();
                try {
                    Thread.sleep(500L);
                } catch (InterruptedException unused2) {
                }
                try {
                    return x(z10);
                } catch (Throwable th2) {
                    super.close();
                    if (th2 instanceof a) {
                        a aVar = th2;
                        Throwable cause = aVar.getCause();
                        int i10 = C0748d.f53937a[aVar.a().ordinal()];
                        if (i10 != 1 && i10 != 2 && i10 != 3 && i10 != 4) {
                            if (!(cause instanceof SQLiteException)) {
                                throw cause;
                            }
                        } else {
                            throw cause;
                        }
                    } else if (th2 instanceof SQLiteException) {
                        if (databaseName == null || !this.f53925o) {
                            throw th2;
                        }
                    } else {
                        throw th2;
                    }
                    this.f53922d.deleteDatabase(databaseName);
                    try {
                        return x(z10);
                    } catch (a e10) {
                        throw e10.getCause();
                    }
                }
            }
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final void h(h.a callback, b dbRef, SQLiteDatabase dbObj) {
            Intrinsics.checkNotNullParameter(callback, "$callback");
            Intrinsics.checkNotNullParameter(dbRef, "$dbRef");
            C0747c c0747c = f53921s;
            Intrinsics.checkNotNullExpressionValue(dbObj, "dbObj");
            callback.c(c0747c.a(dbRef, dbObj));
        }

        private final SQLiteDatabase x(boolean z10) {
            if (z10) {
                SQLiteDatabase writableDatabase = super.getWritableDatabase();
                Intrinsics.checkNotNullExpressionValue(writableDatabase, "{\n                super.…eDatabase()\n            }");
                return writableDatabase;
            }
            SQLiteDatabase readableDatabase = super.getReadableDatabase();
            Intrinsics.checkNotNullExpressionValue(readableDatabase, "{\n                super.…eDatabase()\n            }");
            return readableDatabase;
        }

        @Override // android.database.sqlite.SQLiteOpenHelper, java.lang.AutoCloseable
        public void close() {
            try {
                z3.a.c(this.f53927q, false, 1, null);
                super.close();
                this.f53923e.b(null);
                this.f53928r = false;
            } finally {
                this.f53927q.d();
            }
        }

        public final x3.g l(boolean z10) {
            boolean z11;
            x3.g n10;
            try {
                z3.a aVar = this.f53927q;
                if (!this.f53928r && getDatabaseName() != null) {
                    z11 = true;
                } else {
                    z11 = false;
                }
                aVar.b(z11);
                this.f53926p = false;
                SQLiteDatabase B = B(z10);
                if (this.f53926p) {
                    close();
                    n10 = l(z10);
                } else {
                    n10 = n(B);
                }
                this.f53927q.d();
                return n10;
            } catch (Throwable th2) {
                this.f53927q.d();
                throw th2;
            }
        }

        public final y3.c n(SQLiteDatabase sqLiteDatabase) {
            Intrinsics.checkNotNullParameter(sqLiteDatabase, "sqLiteDatabase");
            return f53921s.a(this.f53923e, sqLiteDatabase);
        }

        @Override // android.database.sqlite.SQLiteOpenHelper
        public void onConfigure(SQLiteDatabase db2) {
            Intrinsics.checkNotNullParameter(db2, "db");
            try {
                this.f53924i.b(n(db2));
            } catch (Throwable th2) {
                throw new a(b.ON_CONFIGURE, th2);
            }
        }

        @Override // android.database.sqlite.SQLiteOpenHelper
        public void onCreate(SQLiteDatabase sqLiteDatabase) {
            Intrinsics.checkNotNullParameter(sqLiteDatabase, "sqLiteDatabase");
            try {
                this.f53924i.d(n(sqLiteDatabase));
            } catch (Throwable th2) {
                throw new a(b.ON_CREATE, th2);
            }
        }

        @Override // android.database.sqlite.SQLiteOpenHelper
        public void onDowngrade(SQLiteDatabase db2, int i10, int i11) {
            Intrinsics.checkNotNullParameter(db2, "db");
            this.f53926p = true;
            try {
                this.f53924i.e(n(db2), i10, i11);
            } catch (Throwable th2) {
                throw new a(b.ON_DOWNGRADE, th2);
            }
        }

        @Override // android.database.sqlite.SQLiteOpenHelper
        public void onOpen(SQLiteDatabase db2) {
            Intrinsics.checkNotNullParameter(db2, "db");
            if (!this.f53926p) {
                try {
                    this.f53924i.f(n(db2));
                } catch (Throwable th2) {
                    throw new a(b.ON_OPEN, th2);
                }
            }
            this.f53928r = true;
        }

        @Override // android.database.sqlite.SQLiteOpenHelper
        public void onUpgrade(SQLiteDatabase sqLiteDatabase, int i10, int i11) {
            Intrinsics.checkNotNullParameter(sqLiteDatabase, "sqLiteDatabase");
            this.f53926p = true;
            try {
                this.f53924i.g(n(sqLiteDatabase), i10, i11);
            } catch (Throwable th2) {
                throw new a(b.ON_UPGRADE, th2);
            }
        }
    }

    /* renamed from: y3.d$d  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static final class C0749d extends Lambda implements Function0 {
        C0749d() {
            super(0);
        }

        @Override // kotlin.jvm.functions.Function0
        /* renamed from: a */
        public final c invoke() {
            c cVar;
            if (d.this.f53914e != null && d.this.f53916o) {
                cVar = new c(d.this.f53913d, new File(x3.d.a(d.this.f53913d), d.this.f53914e).getAbsolutePath(), new b(null), d.this.f53915i, d.this.f53917p);
            } else {
                cVar = new c(d.this.f53913d, d.this.f53914e, new b(null), d.this.f53915i, d.this.f53917p);
            }
            x3.b.d(cVar, d.this.f53919r);
            return cVar;
        }
    }

    public d(Context context, String str, h.a callback, boolean z10, boolean z11) {
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(callback, "callback");
        this.f53913d = context;
        this.f53914e = str;
        this.f53915i = callback;
        this.f53916o = z10;
        this.f53917p = z11;
        this.f53918q = l.b(new C0749d());
    }

    private final c E() {
        return (c) this.f53918q.getValue();
    }

    @Override // x3.h, java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        if (this.f53918q.isInitialized()) {
            E().close();
        }
    }

    @Override // x3.h
    public String getDatabaseName() {
        return this.f53914e;
    }

    @Override // x3.h
    public x3.g getWritableDatabase() {
        return E().l(true);
    }

    @Override // x3.h
    public void setWriteAheadLoggingEnabled(boolean z10) {
        if (this.f53918q.isInitialized()) {
            x3.b.d(E(), z10);
        }
        this.f53919r = z10;
    }
}
