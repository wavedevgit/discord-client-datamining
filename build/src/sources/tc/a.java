package tc;

import ne.w0;
import tc.z;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class a {

    /* renamed from: a  reason: collision with root package name */
    protected final C0665a f50500a;

    /* renamed from: b  reason: collision with root package name */
    protected final f f50501b;

    /* renamed from: c  reason: collision with root package name */
    protected c f50502c;

    /* renamed from: d  reason: collision with root package name */
    private final int f50503d;

    /* renamed from: tc.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class C0665a implements z {

        /* renamed from: a  reason: collision with root package name */
        private final d f50504a;

        /* renamed from: b  reason: collision with root package name */
        private final long f50505b;

        /* renamed from: c  reason: collision with root package name */
        private final long f50506c;

        /* renamed from: d  reason: collision with root package name */
        private final long f50507d;

        /* renamed from: e  reason: collision with root package name */
        private final long f50508e;

        /* renamed from: f  reason: collision with root package name */
        private final long f50509f;

        /* renamed from: g  reason: collision with root package name */
        private final long f50510g;

        public C0665a(d dVar, long j10, long j11, long j12, long j13, long j14, long j15) {
            this.f50504a = dVar;
            this.f50505b = j10;
            this.f50506c = j11;
            this.f50507d = j12;
            this.f50508e = j13;
            this.f50509f = j14;
            this.f50510g = j15;
        }

        @Override // tc.z
        public z.a e(long j10) {
            return new z.a(new a0(j10, c.h(this.f50504a.a(j10), this.f50506c, this.f50507d, this.f50508e, this.f50509f, this.f50510g)));
        }

        @Override // tc.z
        public boolean h() {
            return true;
        }

        @Override // tc.z
        public long i() {
            return this.f50505b;
        }

        public long k(long j10) {
            return this.f50504a.a(j10);
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class c {

        /* renamed from: a  reason: collision with root package name */
        private final long f50511a;

        /* renamed from: b  reason: collision with root package name */
        private final long f50512b;

        /* renamed from: c  reason: collision with root package name */
        private final long f50513c;

        /* renamed from: d  reason: collision with root package name */
        private long f50514d;

        /* renamed from: e  reason: collision with root package name */
        private long f50515e;

        /* renamed from: f  reason: collision with root package name */
        private long f50516f;

        /* renamed from: g  reason: collision with root package name */
        private long f50517g;

        /* renamed from: h  reason: collision with root package name */
        private long f50518h;

        protected c(long j10, long j11, long j12, long j13, long j14, long j15, long j16) {
            this.f50511a = j10;
            this.f50512b = j11;
            this.f50514d = j12;
            this.f50515e = j13;
            this.f50516f = j14;
            this.f50517g = j15;
            this.f50513c = j16;
            this.f50518h = h(j11, j12, j13, j14, j15, j16);
        }

        protected static long h(long j10, long j11, long j12, long j13, long j14, long j15) {
            if (j13 + 1 < j14 && j11 + 1 < j12) {
                long j16 = ((float) (j10 - j11)) * (((float) (j14 - j13)) / ((float) (j12 - j11)));
                return w0.r(((j16 + j13) - j15) - (j16 / 20), j13, j14 - 1);
            }
            return j13;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public long i() {
            return this.f50517g;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public long j() {
            return this.f50516f;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public long k() {
            return this.f50518h;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public long l() {
            return this.f50511a;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public long m() {
            return this.f50512b;
        }

        private void n() {
            this.f50518h = h(this.f50512b, this.f50514d, this.f50515e, this.f50516f, this.f50517g, this.f50513c);
        }

        /* JADX INFO: Access modifiers changed from: private */
        public void o(long j10, long j11) {
            this.f50515e = j10;
            this.f50517g = j11;
            n();
        }

        /* JADX INFO: Access modifiers changed from: private */
        public void p(long j10, long j11) {
            this.f50514d = j10;
            this.f50516f = j11;
            n();
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface d {
        long a(long j10);
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class e {

        /* renamed from: d  reason: collision with root package name */
        public static final e f50519d = new e(-3, -9223372036854775807L, -1);

        /* renamed from: a  reason: collision with root package name */
        private final int f50520a;

        /* renamed from: b  reason: collision with root package name */
        private final long f50521b;

        /* renamed from: c  reason: collision with root package name */
        private final long f50522c;

        private e(int i10, long j10, long j11) {
            this.f50520a = i10;
            this.f50521b = j10;
            this.f50522c = j11;
        }

        public static e d(long j10, long j11) {
            return new e(-1, j10, j11);
        }

        public static e e(long j10) {
            return new e(0, -9223372036854775807L, j10);
        }

        public static e f(long j10, long j11) {
            return new e(-2, j10, j11);
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public a(d dVar, f fVar, long j10, long j11, long j12, long j13, long j14, long j15, int i10) {
        this.f50501b = fVar;
        this.f50503d = i10;
        this.f50500a = new C0665a(dVar, j10, j11, j12, j13, j14, j15);
    }

    protected c a(long j10) {
        return new c(j10, this.f50500a.k(j10), this.f50500a.f50506c, this.f50500a.f50507d, this.f50500a.f50508e, this.f50500a.f50509f, this.f50500a.f50510g);
    }

    public final z b() {
        return this.f50500a;
    }

    public int c(l lVar, y yVar) {
        while (true) {
            c cVar = (c) ne.a.i(this.f50502c);
            long j10 = cVar.j();
            long i10 = cVar.i();
            long k10 = cVar.k();
            if (i10 - j10 <= this.f50503d) {
                e(false, j10);
                return g(lVar, j10, yVar);
            } else if (!i(lVar, k10)) {
                return g(lVar, k10, yVar);
            } else {
                lVar.e();
                e a10 = this.f50501b.a(lVar, cVar.m());
                int i11 = a10.f50520a;
                if (i11 != -3) {
                    if (i11 == -2) {
                        cVar.p(a10.f50521b, a10.f50522c);
                    } else if (i11 == -1) {
                        cVar.o(a10.f50521b, a10.f50522c);
                    } else if (i11 == 0) {
                        i(lVar, a10.f50522c);
                        e(true, a10.f50522c);
                        return g(lVar, a10.f50522c, yVar);
                    } else {
                        throw new IllegalStateException("Invalid case");
                    }
                } else {
                    e(false, k10);
                    return g(lVar, k10, yVar);
                }
            }
        }
    }

    public final boolean d() {
        if (this.f50502c != null) {
            return true;
        }
        return false;
    }

    protected final void e(boolean z10, long j10) {
        this.f50502c = null;
        this.f50501b.b();
        f(z10, j10);
    }

    protected final int g(l lVar, long j10, y yVar) {
        if (j10 == lVar.getPosition()) {
            return 0;
        }
        yVar.f50627a = j10;
        return 1;
    }

    public final void h(long j10) {
        c cVar = this.f50502c;
        if (cVar != null && cVar.l() == j10) {
            return;
        }
        this.f50502c = a(j10);
    }

    protected final boolean i(l lVar, long j10) {
        long position = j10 - lVar.getPosition();
        if (position >= 0 && position <= 262144) {
            lVar.k((int) position);
            return true;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface f {
        e a(l lVar, long j10);

        default void b() {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class b implements d {
        @Override // tc.a.d
        public long a(long j10) {
            return j10;
        }
    }

    protected void f(boolean z10, long j10) {
    }
}
