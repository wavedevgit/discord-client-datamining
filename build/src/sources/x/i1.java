package x;

import a0.h0;
import a0.h2;
import a0.r2;
import x.i1;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public interface i1 {

    /* renamed from: a  reason: collision with root package name */
    public static final i1 f52837a = new i1() { // from class: x.h1
        @Override // x.i1
        public final i1.c e(i1.b bVar) {
            i1.c cVar;
            cVar = i1.c.f52842d;
            return cVar;
        }
    };

    /* renamed from: b  reason: collision with root package name */
    public static final i1 f52838b = new h0.b(d());

    /* renamed from: c  reason: collision with root package name */
    public static final i1 f52839c = new a0.h0(d());

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private final i1 f52840a;

        /* renamed from: b  reason: collision with root package name */
        private long f52841b;

        public a(i1 i1Var) {
            this.f52840a = i1Var;
            this.f52841b = i1Var.b();
        }

        public i1 a() {
            i1 i1Var = this.f52840a;
            if (i1Var instanceof h2) {
                return ((h2) i1Var).c(this.f52841b);
            }
            return new r2(this.f52841b, this.f52840a);
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
        public static final c f52842d = new c(false, 0);

        /* renamed from: e  reason: collision with root package name */
        public static final c f52843e = new c(true);

        /* renamed from: f  reason: collision with root package name */
        public static final c f52844f = new c(true, 100);

        /* renamed from: g  reason: collision with root package name */
        public static c f52845g = new c(false, 0, true);

        /* renamed from: a  reason: collision with root package name */
        private final long f52846a;

        /* renamed from: b  reason: collision with root package name */
        private final boolean f52847b;

        /* renamed from: c  reason: collision with root package name */
        private final boolean f52848c;

        private c(boolean z10) {
            this(z10, a());
        }

        public static long a() {
            return 500L;
        }

        public long b() {
            return this.f52846a;
        }

        public boolean c() {
            return this.f52848c;
        }

        public boolean d() {
            return this.f52847b;
        }

        private c(boolean z10, long j10) {
            this(z10, j10, false);
        }

        private c(boolean z10, long j10, boolean z11) {
            this.f52847b = z10;
            this.f52846a = j10;
            if (z11) {
                b2.e.b(!z10, "shouldRetry must be false when completeWithoutFailure is set to true");
            }
            this.f52848c = z11;
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
