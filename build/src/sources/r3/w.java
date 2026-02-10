package r3;

import android.database.Cursor;
import java.util.List;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import x3.h;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class w extends h.a {

    /* renamed from: g  reason: collision with root package name */
    public static final a f47637g = new a(null);

    /* renamed from: c  reason: collision with root package name */
    private f f47638c;

    /* renamed from: d  reason: collision with root package name */
    private final b f47639d;

    /* renamed from: e  reason: collision with root package name */
    private final String f47640e;

    /* renamed from: f  reason: collision with root package name */
    private final String f47641f;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final boolean a(x3.g db2) {
            Intrinsics.checkNotNullParameter(db2, "db");
            Cursor C1 = db2.C1("SELECT count(*) FROM sqlite_master WHERE name != 'android_metadata'");
            try {
                boolean z10 = false;
                if (C1.moveToFirst()) {
                    if (C1.getInt(0) == 0) {
                        z10 = true;
                    }
                }
                cs.c.a(C1, null);
                return z10;
            } catch (Throwable th2) {
                try {
                    throw th2;
                } catch (Throwable th3) {
                    cs.c.a(C1, th2);
                    throw th3;
                }
            }
        }

        public final boolean b(x3.g db2) {
            Intrinsics.checkNotNullParameter(db2, "db");
            Cursor C1 = db2.C1("SELECT 1 FROM sqlite_master WHERE type = 'table' AND name='room_master_table'");
            try {
                boolean z10 = false;
                if (C1.moveToFirst()) {
                    if (C1.getInt(0) != 0) {
                        z10 = true;
                    }
                }
                cs.c.a(C1, null);
                return z10;
            } catch (Throwable th2) {
                try {
                    throw th2;
                } catch (Throwable th3) {
                    cs.c.a(C1, th2);
                    throw th3;
                }
            }
        }

        private a() {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static abstract class b {

        /* renamed from: a  reason: collision with root package name */
        public final int f47642a;

        public b(int i10) {
            this.f47642a = i10;
        }

        public abstract void a(x3.g gVar);

        public abstract void b(x3.g gVar);

        public abstract void c(x3.g gVar);

        public abstract void d(x3.g gVar);

        public abstract void e(x3.g gVar);

        public abstract void f(x3.g gVar);

        public abstract c g(x3.g gVar);
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class c {

        /* renamed from: a  reason: collision with root package name */
        public final boolean f47643a;

        /* renamed from: b  reason: collision with root package name */
        public final String f47644b;

        public c(boolean z10, String str) {
            this.f47643a = z10;
            this.f47644b = str;
        }
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public w(f configuration, b delegate, String identityHash, String legacyHash) {
        super(delegate.f47642a);
        Intrinsics.checkNotNullParameter(configuration, "configuration");
        Intrinsics.checkNotNullParameter(delegate, "delegate");
        Intrinsics.checkNotNullParameter(identityHash, "identityHash");
        Intrinsics.checkNotNullParameter(legacyHash, "legacyHash");
        this.f47638c = configuration;
        this.f47639d = delegate;
        this.f47640e = identityHash;
        this.f47641f = legacyHash;
    }

    private final void h(x3.g gVar) {
        c g10;
        String str;
        if (f47637g.b(gVar)) {
            Cursor N0 = gVar.N0(new x3.a("SELECT identity_hash FROM room_master_table WHERE id = 42 LIMIT 1"));
            try {
                if (N0.moveToFirst()) {
                    str = N0.getString(0);
                } else {
                    str = null;
                }
                cs.c.a(N0, null);
                if (!Intrinsics.areEqual(this.f47640e, str) && !Intrinsics.areEqual(this.f47641f, str)) {
                    throw new IllegalStateException("Room cannot verify the data integrity. Looks like you've changed schema but forgot to update the version number. You can simply fix this by increasing the version number. Expected identity hash: " + this.f47640e + ", found: " + str);
                }
                return;
            } catch (Throwable th2) {
                try {
                    throw th2;
                } catch (Throwable th3) {
                    cs.c.a(N0, th2);
                    throw th3;
                }
            }
        }
        if (this.f47639d.g(gVar).f47643a) {
            this.f47639d.e(gVar);
            j(gVar);
            return;
        }
        throw new IllegalStateException("Pre-packaged database has an invalid schema: " + g10.f47644b);
    }

    private final void i(x3.g gVar) {
        gVar.P("CREATE TABLE IF NOT EXISTS room_master_table (id INTEGER PRIMARY KEY,identity_hash TEXT)");
    }

    private final void j(x3.g gVar) {
        i(gVar);
        gVar.P(v.a(this.f47640e));
    }

    @Override // x3.h.a
    public void b(x3.g db2) {
        Intrinsics.checkNotNullParameter(db2, "db");
        super.b(db2);
    }

    @Override // x3.h.a
    public void d(x3.g db2) {
        Intrinsics.checkNotNullParameter(db2, "db");
        boolean a10 = f47637g.a(db2);
        this.f47639d.a(db2);
        if (!a10) {
            c g10 = this.f47639d.g(db2);
            if (!g10.f47643a) {
                throw new IllegalStateException("Pre-packaged database has an invalid schema: " + g10.f47644b);
            }
        }
        j(db2);
        this.f47639d.c(db2);
    }

    @Override // x3.h.a
    public void e(x3.g db2, int i10, int i11) {
        Intrinsics.checkNotNullParameter(db2, "db");
        g(db2, i10, i11);
    }

    @Override // x3.h.a
    public void f(x3.g db2) {
        Intrinsics.checkNotNullParameter(db2, "db");
        super.f(db2);
        h(db2);
        this.f47639d.d(db2);
        this.f47638c = null;
    }

    @Override // x3.h.a
    public void g(x3.g db2, int i10, int i11) {
        List<s3.b> d10;
        Intrinsics.checkNotNullParameter(db2, "db");
        f fVar = this.f47638c;
        if (fVar != null && (d10 = fVar.f47519d.d(i10, i11)) != null) {
            this.f47639d.f(db2);
            for (s3.b bVar : d10) {
                bVar.a(db2);
            }
            c g10 = this.f47639d.g(db2);
            if (g10.f47643a) {
                this.f47639d.e(db2);
                j(db2);
                return;
            }
            throw new IllegalStateException("Migration didn't properly handle: " + g10.f47644b);
        }
        f fVar2 = this.f47638c;
        if (fVar2 != null && !fVar2.a(i10, i11)) {
            this.f47639d.b(db2);
            this.f47639d.a(db2);
            return;
        }
        throw new IllegalStateException("A migration from " + i10 + " to " + i11 + " was required but not found. Please provide the necessary Migration path via RoomDatabase.Builder.addMigration(Migration ...) or allow for destructive migrations via one of the RoomDatabase.Builder.fallbackToDestructiveMigration* methods.");
    }
}
