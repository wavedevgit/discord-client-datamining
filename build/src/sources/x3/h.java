package x3;

import android.content.Context;
import android.database.sqlite.SQLiteException;
import android.util.Log;
import android.util.Pair;
import java.io.Closeable;
import java.io.File;
import java.io.IOException;
import java.util.List;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.text.StringsKt;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public interface h extends Closeable {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static abstract class a {

        /* renamed from: b  reason: collision with root package name */
        public static final C0760a f54315b = new C0760a(null);

        /* renamed from: a  reason: collision with root package name */
        public final int f54316a;

        /* renamed from: x3.h$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        public static final class C0760a {
            public /* synthetic */ C0760a(DefaultConstructorMarker defaultConstructorMarker) {
                this();
            }

            private C0760a() {
            }
        }

        public a(int i10) {
            this.f54316a = i10;
        }

        private final void a(String str) {
            int i10;
            boolean z10;
            if (!StringsKt.A(str, ":memory:", true)) {
                int length = str.length() - 1;
                int i11 = 0;
                boolean z11 = false;
                while (i11 <= length) {
                    if (!z11) {
                        i10 = i11;
                    } else {
                        i10 = length;
                    }
                    if (Intrinsics.compare((int) str.charAt(i10), 32) <= 0) {
                        z10 = true;
                    } else {
                        z10 = false;
                    }
                    if (!z11) {
                        if (!z10) {
                            z11 = true;
                        } else {
                            i11++;
                        }
                    } else if (!z10) {
                        break;
                    } else {
                        length--;
                    }
                }
                if (str.subSequence(i11, length + 1).toString().length() == 0) {
                    return;
                }
                Log.w("SupportSQLite", "deleting the database file: " + str);
                try {
                    x3.b.a(new File(str));
                } catch (Exception e10) {
                    Log.w("SupportSQLite", "delete failed: ", e10);
                }
            }
        }

        public void b(g db2) {
            Intrinsics.checkNotNullParameter(db2, "db");
        }

        public void c(g db2) {
            Intrinsics.checkNotNullParameter(db2, "db");
            Log.e("SupportSQLite", "Corruption reported by sqlite on database: " + db2 + ".path");
            if (!db2.isOpen()) {
                String t10 = db2.t();
                if (t10 != null) {
                    a(t10);
                    return;
                }
                return;
            }
            List<Pair> list = null;
            try {
                try {
                    list = db2.L();
                } catch (SQLiteException unused) {
                }
                try {
                    db2.close();
                } catch (IOException unused2) {
                }
            } finally {
                if (list != null) {
                    for (Pair pair : list) {
                        Object obj = pair.second;
                        Intrinsics.checkNotNullExpressionValue(obj, "p.second");
                        a((String) obj);
                    }
                } else {
                    String t11 = db2.t();
                    if (t11 != null) {
                        a(t11);
                    }
                }
            }
        }

        public abstract void d(g gVar);

        public abstract void e(g gVar, int i10, int i11);

        public void f(g db2) {
            Intrinsics.checkNotNullParameter(db2, "db");
        }

        public abstract void g(g gVar, int i10, int i11);
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class b {

        /* renamed from: f  reason: collision with root package name */
        public static final C0761b f54317f = new C0761b(null);

        /* renamed from: a  reason: collision with root package name */
        public final Context f54318a;

        /* renamed from: b  reason: collision with root package name */
        public final String f54319b;

        /* renamed from: c  reason: collision with root package name */
        public final a f54320c;

        /* renamed from: d  reason: collision with root package name */
        public final boolean f54321d;

        /* renamed from: e  reason: collision with root package name */
        public final boolean f54322e;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        public static class a {

            /* renamed from: a  reason: collision with root package name */
            private final Context f54323a;

            /* renamed from: b  reason: collision with root package name */
            private String f54324b;

            /* renamed from: c  reason: collision with root package name */
            private a f54325c;

            /* renamed from: d  reason: collision with root package name */
            private boolean f54326d;

            /* renamed from: e  reason: collision with root package name */
            private boolean f54327e;

            public a(Context context) {
                Intrinsics.checkNotNullParameter(context, "context");
                this.f54323a = context;
            }

            public a a(boolean z10) {
                this.f54327e = z10;
                return this;
            }

            public b b() {
                String str;
                a aVar = this.f54325c;
                if (aVar != null) {
                    if (this.f54326d && ((str = this.f54324b) == null || str.length() == 0)) {
                        throw new IllegalArgumentException("Must set a non-null database name to a configuration that uses the no backup directory.");
                    }
                    return new b(this.f54323a, this.f54324b, aVar, this.f54326d, this.f54327e);
                }
                throw new IllegalArgumentException("Must set a callback to create the configuration.");
            }

            public a c(a callback) {
                Intrinsics.checkNotNullParameter(callback, "callback");
                this.f54325c = callback;
                return this;
            }

            public a d(String str) {
                this.f54324b = str;
                return this;
            }

            public a e(boolean z10) {
                this.f54326d = z10;
                return this;
            }
        }

        /* renamed from: x3.h$b$b  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        public static final class C0761b {
            public /* synthetic */ C0761b(DefaultConstructorMarker defaultConstructorMarker) {
                this();
            }

            public final a a(Context context) {
                Intrinsics.checkNotNullParameter(context, "context");
                return new a(context);
            }

            private C0761b() {
            }
        }

        public b(Context context, String str, a callback, boolean z10, boolean z11) {
            Intrinsics.checkNotNullParameter(context, "context");
            Intrinsics.checkNotNullParameter(callback, "callback");
            this.f54318a = context;
            this.f54319b = str;
            this.f54320c = callback;
            this.f54321d = z10;
            this.f54322e = z11;
        }

        public static final a a(Context context) {
            return f54317f.a(context);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public interface c {
        h a(b bVar);
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    void close();

    String getDatabaseName();

    g getWritableDatabase();

    void setWriteAheadLoggingEnabled(boolean z10);
}
