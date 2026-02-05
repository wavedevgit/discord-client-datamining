package r3;

import android.database.Cursor;
import java.util.List;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import x3.h;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class w extends h.a {

    /* renamed from: g  reason: collision with root package name */
    public static final a f48531g = new a(null);

    /* renamed from: c  reason: collision with root package name */
    private f f48532c;

    /* renamed from: d  reason: collision with root package name */
    private final b f48533d;

    /* renamed from: e  reason: collision with root package name */
    private final String f48534e;

    /* renamed from: f  reason: collision with root package name */
    private final String f48535f;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final boolean a(x3.g db2) {
            Intrinsics.checkNotNullParameter(db2, "db");
            Cursor H1 = db2.H1("SELECT count(*) FROM sqlite_master WHERE name != 'android_metadata'");
            try {
                boolean z10 = false;
                if (H1.moveToFirst()) {
                    if (H1.getInt(0) == 0) {
                        z10 = true;
                    }
                }
                zr.c.a(H1, null);
                return z10;
            } catch (Throwable th2) {
                try {
                    throw th2;
                } catch (Throwable th3) {
                    zr.c.a(H1, th2);
                    throw th3;
                }
            }
        }

        public final boolean b(x3.g db2) {
            Intrinsics.checkNotNullParameter(db2, "db");
            Cursor H1 = db2.H1("SELECT 1 FROM sqlite_master WHERE type = 'table' AND name='room_master_table'");
            try {
                boolean z10 = false;
                if (H1.moveToFirst()) {
                    if (H1.getInt(0) != 0) {
                        z10 = true;
                    }
                }
                zr.c.a(H1, null);
                return z10;
            } catch (Throwable th2) {
                try {
                    throw th2;
                } catch (Throwable th3) {
                    zr.c.a(H1, th2);
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
        public final int f48536a;

        public b(int i10) {
            this.f48536a = i10;
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
        public final boolean f48537a;

        /* renamed from: b  reason: collision with root package name */
        public final String f48538b;

        public c(boolean z10, String str) {
            this.f48537a = z10;
            this.f48538b = str;
        }
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public w(f configuration, b delegate, String identityHash, String legacyHash) {
        super(delegate.f48536a);
        Intrinsics.checkNotNullParameter(configuration, "configuration");
        Intrinsics.checkNotNullParameter(delegate, "delegate");
        Intrinsics.checkNotNullParameter(identityHash, "identityHash");
        Intrinsics.checkNotNullParameter(legacyHash, "legacyHash");
        this.f48532c = configuration;
        this.f48533d = delegate;
        this.f48534e = identityHash;
        this.f48535f = legacyHash;
    }

    private final void h(x3.g gVar) {
        c g10;
        String str;
        if (f48531g.b(gVar)) {
            Cursor R0 = gVar.R0(new x3.a("SELECT identity_hash FROM room_master_table WHERE id = 42 LIMIT 1"));
            try {
                if (R0.moveToFirst()) {
                    str = R0.getString(0);
                } else {
                    str = null;
                }
                zr.c.a(R0, null);
                if (!Intrinsics.areEqual(this.f48534e, str) && !Intrinsics.areEqual(this.f48535f, str)) {
                    throw new IllegalStateException("Room cannot verify the data integrity. Looks like you've changed schema but forgot to update the version number. You can simply fix this by increasing the version number. Expected identity hash: " + this.f48534e + ", found: " + str);
                }
                return;
            } catch (Throwable th2) {
                try {
                    throw th2;
                } catch (Throwable th3) {
                    zr.c.a(R0, th2);
                    throw th3;
                }
            }
        }
        if (this.f48533d.g(gVar).f48537a) {
            this.f48533d.e(gVar);
            j(gVar);
            return;
        }
        throw new IllegalStateException("Pre-packaged database has an invalid schema: " + g10.f48538b);
    }

    private final void i(x3.g gVar) {
        gVar.K("CREATE TABLE IF NOT EXISTS room_master_table (id INTEGER PRIMARY KEY,identity_hash TEXT)");
    }

    private final void j(x3.g gVar) {
        i(gVar);
        gVar.K(v.a(this.f48534e));
    }

    @Override // x3.h.a
    public void b(x3.g db2) {
        Intrinsics.checkNotNullParameter(db2, "db");
        super.b(db2);
    }

    @Override // x3.h.a
    public void d(x3.g db2) {
        Intrinsics.checkNotNullParameter(db2, "db");
        boolean a10 = f48531g.a(db2);
        this.f48533d.a(db2);
        if (!a10) {
            c g10 = this.f48533d.g(db2);
            if (!g10.f48537a) {
                throw new IllegalStateException("Pre-packaged database has an invalid schema: " + g10.f48538b);
            }
        }
        j(db2);
        this.f48533d.c(db2);
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
        this.f48533d.d(db2);
        this.f48532c = null;
    }

    @Override // x3.h.a
    public void g(x3.g db2, int i10, int i11) {
        List<s3.b> d10;
        Intrinsics.checkNotNullParameter(db2, "db");
        f fVar = this.f48532c;
        if (fVar != null && (d10 = fVar.f48413d.d(i10, i11)) != null) {
            this.f48533d.f(db2);
            for (s3.b bVar : d10) {
                bVar.a(db2);
            }
            c g10 = this.f48533d.g(db2);
            if (g10.f48537a) {
                this.f48533d.e(db2);
                j(db2);
                return;
            }
            throw new IllegalStateException("Migration didn't properly handle: " + g10.f48538b);
        }
        f fVar2 = this.f48532c;
        if (fVar2 != null && !fVar2.a(i10, i11)) {
            this.f48533d.b(db2);
            this.f48533d.a(db2);
            return;
        }
        throw new IllegalStateException("A migration from " + i10 + " to " + i11 + " was required but not found. Please provide the necessary Migration path via RoomDatabase.Builder.addMigration(Migration ...) or allow for destructive migrations via one of the RoomDatabase.Builder.fallbackToDestructiveMigration* methods.");
    }
}
