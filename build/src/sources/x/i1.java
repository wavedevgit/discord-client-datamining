package x;

import a0.h0;
import a0.h2;
import a0.r2;
import x.i1;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public interface i1 {

    /* renamed from: a  reason: collision with root package name */
    public static final i1 f52895a = new i1() { // from class: x.h1
        @Override // x.i1
        public final i1.c e(i1.b bVar) {
            i1.c cVar;
            cVar = i1.c.f52900d;
            return cVar;
        }
    };

    /* renamed from: b  reason: collision with root package name */
    public static final i1 f52896b = new h0.b(d());

    /* renamed from: c  reason: collision with root package name */
    public static final i1 f52897c = new a0.h0(d());

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private final i1 f52898a;

        /* renamed from: b  reason: collision with root package name */
        private long f52899b;

        public a(i1 i1Var) {
            this.f52898a = i1Var;
            this.f52899b = i1Var.b();
        }

        public i1 a() {
            i1 i1Var = this.f52898a;
            if (i1Var instanceof h2) {
                return ((h2) i1Var).c(this.f52899b);
            }
            return new r2(this.f52899b, this.f52898a);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public interface b {
        int a();

        Throwable b();

        long c();
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class c {

        /* renamed from: d  reason: collision with root package name */
        public static final c f52900d = new c(false, 0);

        /* renamed from: e  reason: collision with root package name */
        public static final c f52901e = new c(true);

        /* renamed from: f  reason: collision with root package name */
        public static final c f52902f = new c(true, 100);

        /* renamed from: g  reason: collision with root package name */
        public static c f52903g = new c(false, 0, true);

        /* renamed from: a  reason: collision with root package name */
        private final long f52904a;

        /* renamed from: b  reason: collision with root package name */
        private final boolean f52905b;

        /* renamed from: c  reason: collision with root package name */
        private final boolean f52906c;

        private c(boolean z10) {
            this(z10, a());
        }

        public static long a() {
            return 500L;
        }

        public long b() {
            return this.f52904a;
        }

        public boolean c() {
            return this.f52906c;
        }

        public boolean d() {
            return this.f52905b;
        }

        private c(boolean z10, long j10) {
            this(z10, j10, false);
        }

        private c(boolean z10, long j10, boolean z11) {
            this.f52905b = z10;
            this.f52904a = j10;
            if (z11) {
                b2.e.b(!z10, "shouldRetry must be false when completeWithoutFailure is set to true");
            }
            this.f52906c = z11;
        }
    }

    static long d() {
        return 6000L;
    }

    default long b() {
        return 0L;
    }

    c e(b bVar);
}
