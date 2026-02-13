package y3;

import android.content.Context;
import android.database.DatabaseErrorHandler;
import android.database.sqlite.SQLiteDatabase;
import android.database.sqlite.SQLiteException;
import android.database.sqlite.SQLiteOpenHelper;
import android.util.Log;
import as.l;
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
    public static final a f55923s = new a(null);

    /* renamed from: d  reason: collision with root package name */
    private final Context f55924d;

    /* renamed from: e  reason: collision with root package name */
    private final String f55925e;

    /* renamed from: i  reason: collision with root package name */
    private final h.a f55926i;

    /* renamed from: o  reason: collision with root package name */
    private final boolean f55927o;

    /* renamed from: p  reason: collision with root package name */
    private final boolean f55928p;

    /* renamed from: q  reason: collision with root package name */
    private final Lazy f55929q;

    /* renamed from: r  reason: collision with root package name */
    private boolean f55930r;

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
        private y3.c f55931a;

        public b(y3.c cVar) {
            this.f55931a = cVar;
        }

        public final y3.c a() {
            return this.f55931a;
        }

        public final void b(y3.c cVar) {
            this.f55931a = cVar;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class c extends SQLiteOpenHelper {

        /* renamed from: s  reason: collision with root package name */
        public static final C0769c f55932s = new C0769c(null);

        /* renamed from: d  reason: collision with root package name */
        private final Context f55933d;

        /* renamed from: e  reason: collision with root package name */
        private final b f55934e;

        /* renamed from: i  reason: collision with root package name */
        private final h.a f55935i;

        /* renamed from: o  reason: collision with root package name */
        private final boolean f55936o;

        /* renamed from: p  reason: collision with root package name */
        private boolean f55937p;

        /* renamed from: q  reason: collision with root package name */
        private final z3.a f55938q;

        /* renamed from: r  reason: collision with root package name */
        private boolean f55939r;

        /* JADX INFO: Access modifiers changed from: private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        public static final class a extends RuntimeException {

            /* renamed from: d  reason: collision with root package name */
            private final b f55940d;

            /* renamed from: e  reason: collision with root package name */
            private final Throwable f55941e;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public a(b callbackName, Throwable cause) {
                super(cause);
                Intrinsics.checkNotNullParameter(callbackName, "callbackName");
                Intrinsics.checkNotNullParameter(cause, "cause");
                this.f55940d = callbackName;
                this.f55941e = cause;
            }

            public final b a() {
                return this.f55940d;
            }

            @Override // java.lang.Throwable
            public Throwable getCause() {
                return this.f55941e;
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
        public static final class C0769c {
            public /* synthetic */ C0769c(DefaultConstructorMarker defaultConstructorMarker) {
                this();
            }

            public final y3.c a(b refHolder, SQLiteDatabase sqLiteDatabase) {
                Intrinsics.checkNotNullParameter(refHolder, "refHolder");
                Intrinsics.checkNotNullParameter(sqLiteDatabase, "sqLiteDatabase");
                y3.c a10 = refHolder.a();
                if (a10 != null && a10.i(sqLiteDatabase)) {
                    return a10;
                }
                y3.c cVar = new y3.c(sqLiteDatabase);
                refHolder.b(cVar);
                return cVar;
            }

            private C0769c() {
            }
        }

        /* renamed from: y3.d$c$d  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        public /* synthetic */ class C0770d {

            /* renamed from: a  reason: collision with root package name */
            public static final /* synthetic */ int[] f55948a;

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
                f55948a = iArr;
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public c(Context context, String str, final b dbRef, final h.a callback, boolean z10) {
            super(context, str, null, callback.f54884a, new DatabaseErrorHandler() { // from class: y3.e
                @Override // android.database.DatabaseErrorHandler
                public final void onCorruption(SQLiteDatabase sQLiteDatabase) {
                    d.c.h(h.a.this, dbRef, sQLiteDatabase);
                }
            });
            String str2;
            Intrinsics.checkNotNullParameter(context, "context");
            Intrinsics.checkNotNullParameter(dbRef, "dbRef");
            Intrinsics.checkNotNullParameter(callback, "callback");
            this.f55933d = context;
            this.f55934e = dbRef;
            this.f55935i = callback;
            this.f55936o = z10;
            if (str == null) {
                str2 = UUID.randomUUID().toString();
                Intrinsics.checkNotNullExpressionValue(str2, "randomUUID().toString()");
            } else {
                str2 = str;
            }
            File cacheDir = context.getCacheDir();
            Intrinsics.checkNotNullExpressionValue(cacheDir, "context.cacheDir");
            this.f55938q = new z3.a(str2, cacheDir, false);
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final void h(h.a callback, b dbRef, SQLiteDatabase dbObj) {
            Intrinsics.checkNotNullParameter(callback, "$callback");
            Intrinsics.checkNotNullParameter(dbRef, "$dbRef");
            C0769c c0769c = f55932s;
            Intrinsics.checkNotNullExpressionValue(dbObj, "dbObj");
            callback.c(c0769c.a(dbRef, dbObj));
        }

        private final SQLiteDatabase n(boolean z10) {
            if (z10) {
                SQLiteDatabase writableDatabase = super.getWritableDatabase();
                Intrinsics.checkNotNullExpressionValue(writableDatabase, "{\n                super.…eDatabase()\n            }");
                return writableDatabase;
            }
            SQLiteDatabase readableDatabase = super.getReadableDatabase();
            Intrinsics.checkNotNullExpressionValue(readableDatabase, "{\n                super.…eDatabase()\n            }");
            return readableDatabase;
        }

        private final SQLiteDatabase p(boolean z10) {
            File parentFile;
            String databaseName = getDatabaseName();
            if (databaseName != null && (parentFile = this.f55933d.getDatabasePath(databaseName).getParentFile()) != null) {
                parentFile.mkdirs();
                if (!parentFile.isDirectory()) {
                    Log.w("SupportSQLite", "Invalid database parent file, not a directory: " + parentFile);
                }
            }
            try {
                return n(z10);
            } catch (Throwable unused) {
                super.close();
                try {
                    Thread.sleep(500L);
                } catch (InterruptedException unused2) {
                }
                try {
                    return n(z10);
                } catch (Throwable th2) {
                    super.close();
                    if (th2 instanceof a) {
                        a aVar = th2;
                        Throwable cause = aVar.getCause();
                        int i10 = C0770d.f55948a[aVar.a().ordinal()];
                        if (i10 != 1 && i10 != 2 && i10 != 3 && i10 != 4) {
                            if (!(cause instanceof SQLiteException)) {
                                throw cause;
                            }
                        } else {
                            throw cause;
                        }
                    } else if (th2 instanceof SQLiteException) {
                        if (databaseName == null || !this.f55936o) {
                            throw th2;
                        }
                    } else {
                        throw th2;
                    }
                    this.f55933d.deleteDatabase(databaseName);
                    try {
                        return n(z10);
                    } catch (a e10) {
                        throw e10.getCause();
                    }
                }
            }
        }

        @Override // android.database.sqlite.SQLiteOpenHelper, java.lang.AutoCloseable
        public void close() {
            try {
                z3.a.c(this.f55938q, false, 1, null);
                super.close();
                this.f55934e.b(null);
                this.f55939r = false;
            } finally {
                this.f55938q.d();
            }
        }

        public final x3.g i(boolean z10) {
            boolean z11;
            x3.g m10;
            try {
                z3.a aVar = this.f55938q;
                if (!this.f55939r && getDatabaseName() != null) {
                    z11 = true;
                } else {
                    z11 = false;
                }
                aVar.b(z11);
                this.f55937p = false;
                SQLiteDatabase p10 = p(z10);
                if (this.f55937p) {
                    close();
                    m10 = i(z10);
                } else {
                    m10 = m(p10);
                }
                this.f55938q.d();
                return m10;
            } catch (Throwable th2) {
                this.f55938q.d();
                throw th2;
            }
        }

        public final y3.c m(SQLiteDatabase sqLiteDatabase) {
            Intrinsics.checkNotNullParameter(sqLiteDatabase, "sqLiteDatabase");
            return f55932s.a(this.f55934e, sqLiteDatabase);
        }

        @Override // android.database.sqlite.SQLiteOpenHelper
        public void onConfigure(SQLiteDatabase db2) {
            Intrinsics.checkNotNullParameter(db2, "db");
            try {
                this.f55935i.b(m(db2));
            } catch (Throwable th2) {
                throw new a(b.ON_CONFIGURE, th2);
            }
        }

        @Override // android.database.sqlite.SQLiteOpenHelper
        public void onCreate(SQLiteDatabase sqLiteDatabase) {
            Intrinsics.checkNotNullParameter(sqLiteDatabase, "sqLiteDatabase");
            try {
                this.f55935i.d(m(sqLiteDatabase));
            } catch (Throwable th2) {
                throw new a(b.ON_CREATE, th2);
            }
        }

        @Override // android.database.sqlite.SQLiteOpenHelper
        public void onDowngrade(SQLiteDatabase db2, int i10, int i11) {
            Intrinsics.checkNotNullParameter(db2, "db");
            this.f55937p = true;
            try {
                this.f55935i.e(m(db2), i10, i11);
            } catch (Throwable th2) {
                throw new a(b.ON_DOWNGRADE, th2);
            }
        }

        @Override // android.database.sqlite.SQLiteOpenHelper
        public void onOpen(SQLiteDatabase db2) {
            Intrinsics.checkNotNullParameter(db2, "db");
            if (!this.f55937p) {
                try {
                    this.f55935i.f(m(db2));
                } catch (Throwable th2) {
                    throw new a(b.ON_OPEN, th2);
                }
            }
            this.f55939r = true;
        }

        @Override // android.database.sqlite.SQLiteOpenHelper
        public void onUpgrade(SQLiteDatabase sqLiteDatabase, int i10, int i11) {
            Intrinsics.checkNotNullParameter(sqLiteDatabase, "sqLiteDatabase");
            this.f55937p = true;
            try {
                this.f55935i.g(m(sqLiteDatabase), i10, i11);
            } catch (Throwable th2) {
                throw new a(b.ON_UPGRADE, th2);
            }
        }
    }

    /* renamed from: y3.d$d  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static final class C0771d extends Lambda implements Function0 {
        C0771d() {
            super(0);
        }

        @Override // kotlin.jvm.functions.Function0
        /* renamed from: a */
        public final c invoke() {
            c cVar;
            if (d.this.f55925e != null && d.this.f55927o) {
                cVar = new c(d.this.f55924d, new File(x3.d.a(d.this.f55924d), d.this.f55925e).getAbsolutePath(), new b(null), d.this.f55926i, d.this.f55928p);
            } else {
                cVar = new c(d.this.f55924d, d.this.f55925e, new b(null), d.this.f55926i, d.this.f55928p);
            }
            x3.b.d(cVar, d.this.f55930r);
            return cVar;
        }
    }

    public d(Context context, String str, h.a callback, boolean z10, boolean z11) {
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(callback, "callback");
        this.f55924d = context;
        this.f55925e = str;
        this.f55926i = callback;
        this.f55927o = z10;
        this.f55928p = z11;
        this.f55929q = l.b(new C0771d());
    }

    private final c s() {
        return (c) this.f55929q.getValue();
    }

    @Override // x3.h, java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        if (this.f55929q.isInitialized()) {
            s().close();
        }
    }

    @Override // x3.h
    public String getDatabaseName() {
        return this.f55925e;
    }

    @Override // x3.h
    public x3.g getWritableDatabase() {
        return s().i(true);
    }

    @Override // x3.h
    public void setWriteAheadLoggingEnabled(boolean z10) {
        if (this.f55929q.isInitialized()) {
            x3.b.d(s(), z10);
        }
        this.f55930r = z10;
    }
}
