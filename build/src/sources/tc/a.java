package tc;

import ne.w0;
import tc.z;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class a {

    /* renamed from: a  reason: collision with root package name */
    protected final C0648a f50476a;

    /* renamed from: b  reason: collision with root package name */
    protected final f f50477b;

    /* renamed from: c  reason: collision with root package name */
    protected c f50478c;

    /* renamed from: d  reason: collision with root package name */
    private final int f50479d;

    /* renamed from: tc.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class C0648a implements z {

        /* renamed from: a  reason: collision with root package name */
        private final d f50480a;

        /* renamed from: b  reason: collision with root package name */
        private final long f50481b;

        /* renamed from: c  reason: collision with root package name */
        private final long f50482c;

        /* renamed from: d  reason: collision with root package name */
        private final long f50483d;

        /* renamed from: e  reason: collision with root package name */
        private final long f50484e;

        /* renamed from: f  reason: collision with root package name */
        private final long f50485f;

        /* renamed from: g  reason: collision with root package name */
        private final long f50486g;

        public C0648a(d dVar, long j10, long j11, long j12, long j13, long j14, long j15) {
            this.f50480a = dVar;
            this.f50481b = j10;
            this.f50482c = j11;
            this.f50483d = j12;
            this.f50484e = j13;
            this.f50485f = j14;
            this.f50486g = j15;
        }

        @Override // tc.z
        public z.a e(long j10) {
            return new z.a(new a0(j10, c.h(this.f50480a.a(j10), this.f50482c, this.f50483d, this.f50484e, this.f50485f, this.f50486g)));
        }

        @Override // tc.z
        public boolean h() {
            return true;
        }

        @Override // tc.z
        public long i() {
            return this.f50481b;
        }

        public long k(long j10) {
            return this.f50480a.a(j10);
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class c {

        /* renamed from: a  reason: collision with root package name */
        private final long f50487a;

        /* renamed from: b  reason: collision with root package name */
        private final long f50488b;

        /* renamed from: c  reason: collision with root package name */
        private final long f50489c;

        /* renamed from: d  reason: collision with root package name */
        private long f50490d;

        /* renamed from: e  reason: collision with root package name */
        private long f50491e;

        /* renamed from: f  reason: collision with root package name */
        private long f50492f;

        /* renamed from: g  reason: collision with root package name */
        private long f50493g;

        /* renamed from: h  reason: collision with root package name */
        private long f50494h;

        protected c(long j10, long j11, long j12, long j13, long j14, long j15, long j16) {
            this.f50487a = j10;
            this.f50488b = j11;
            this.f50490d = j12;
            this.f50491e = j13;
            this.f50492f = j14;
            this.f50493g = j15;
            this.f50489c = j16;
            this.f50494h = h(j11, j12, j13, j14, j15, j16);
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
            return this.f50493g;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public long j() {
            return this.f50492f;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public long k() {
            return this.f50494h;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public long l() {
            return this.f50487a;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public long m() {
            return this.f50488b;
        }

        private void n() {
            this.f50494h = h(this.f50488b, this.f50490d, this.f50491e, this.f50492f, this.f50493g, this.f50489c);
        }

        /* JADX INFO: Access modifiers changed from: private */
        public void o(long j10, long j11) {
            this.f50491e = j10;
            this.f50493g = j11;
            n();
        }

        /* JADX INFO: Access modifiers changed from: private */
        public void p(long j10, long j11) {
            this.f50490d = j10;
            this.f50492f = j11;
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
        public static final e f50495d = new e(-3, -9223372036854775807L, -1);

        /* renamed from: a  reason: collision with root package name */
        private final int f50496a;

        /* renamed from: b  reason: collision with root package name */
        private final long f50497b;

        /* renamed from: c  reason: collision with root package name */
        private final long f50498c;

        private e(int i10, long j10, long j11) {
            this.f50496a = i10;
            this.f50497b = j10;
            this.f50498c = j11;
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
        this.f50477b = fVar;
        this.f50479d = i10;
        this.f50476a = new C0648a(dVar, j10, j11, j12, j13, j14, j15);
    }

    protected c a(long j10) {
        return new c(j10, this.f50476a.k(j10), this.f50476a.f50482c, this.f50476a.f50483d, this.f50476a.f50484e, this.f50476a.f50485f, this.f50476a.f50486g);
    }

    public final z b() {
        return this.f50476a;
    }

    public int c(l lVar, y yVar) {
        while (true) {
            c cVar = (c) ne.a.i(this.f50478c);
            long j10 = cVar.j();
            long i10 = cVar.i();
            long k10 = cVar.k();
            if (i10 - j10 <= this.f50479d) {
                e(false, j10);
                return g(lVar, j10, yVar);
            } else if (!i(lVar, k10)) {
                return g(lVar, k10, yVar);
            } else {
                lVar.e();
                e a10 = this.f50477b.a(lVar, cVar.m());
                int i11 = a10.f50496a;
                if (i11 != -3) {
                    if (i11 == -2) {
                        cVar.p(a10.f50497b, a10.f50498c);
                    } else if (i11 == -1) {
                        cVar.o(a10.f50497b, a10.f50498c);
                    } else if (i11 == 0) {
                        i(lVar, a10.f50498c);
                        e(true, a10.f50498c);
                        return g(lVar, a10.f50498c, yVar);
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
        if (this.f50478c != null) {
            return true;
        }
        return false;
    }

    protected final void e(boolean z10, long j10) {
        this.f50478c = null;
        this.f50477b.b();
        f(z10, j10);
    }

    protected final int g(l lVar, long j10, y yVar) {
        if (j10 == lVar.getPosition()) {
            return 0;
        }
        yVar.f50603a = j10;
        return 1;
    }

    public final void h(long j10) {
        c cVar = this.f50478c;
        if (cVar != null && cVar.l() == j10) {
            return;
        }
        this.f50478c = a(j10);
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
