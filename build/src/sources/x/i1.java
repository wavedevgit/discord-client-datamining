package x;

import a0.h0;
import a0.h2;
import a0.r2;
import x.i1;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public interface i1 {

    /* renamed from: a  reason: collision with root package name */
    public static final i1 f54641a = new i1() { // from class: x.h1
        @Override // x.i1
        public final i1.c e(i1.b bVar) {
            i1.c cVar;
            cVar = i1.c.f54646d;
            return cVar;
        }
    };

    /* renamed from: b  reason: collision with root package name */
    public static final i1 f54642b = new h0.b(d());

    /* renamed from: c  reason: collision with root package name */
    public static final i1 f54643c = new a0.h0(d());

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private final i1 f54644a;

        /* renamed from: b  reason: collision with root package name */
        private long f54645b;

        public a(i1 i1Var) {
            this.f54644a = i1Var;
            this.f54645b = i1Var.b();
        }

        public i1 a() {
            i1 i1Var = this.f54644a;
            if (i1Var instanceof h2) {
                return ((h2) i1Var).c(this.f54645b);
            }
            return new r2(this.f54645b, this.f54644a);
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
        public static final c f54646d = new c(false, 0);

        /* renamed from: e  reason: collision with root package name */
        public static final c f54647e = new c(true);

        /* renamed from: f  reason: collision with root package name */
        public static final c f54648f = new c(true, 100);

        /* renamed from: g  reason: collision with root package name */
        public static c f54649g = new c(false, 0, true);

        /* renamed from: a  reason: collision with root package name */
        private final long f54650a;

        /* renamed from: b  reason: collision with root package name */
        private final boolean f54651b;

        /* renamed from: c  reason: collision with root package name */
        private final boolean f54652c;

        private c(boolean z10) {
            this(z10, a());
        }

        public static long a() {
            return 500L;
        }

        public long b() {
            return this.f54650a;
        }

        public boolean c() {
            return this.f54652c;
        }

        public boolean d() {
            return this.f54651b;
        }

        private c(boolean z10, long j10) {
            this(z10, j10, false);
        }

        private c(boolean z10, long j10, boolean z11) {
            this.f54651b = z10;
            this.f54650a = j10;
            if (z11) {
                b2.e.b(!z10, "shouldRetry must be false when completeWithoutFailure is set to true");
            }
            this.f54652c = z11;
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
