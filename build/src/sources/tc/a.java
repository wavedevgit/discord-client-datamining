package tc;

import ne.w0;
import tc.z;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class a {

    /* renamed from: a  reason: collision with root package name */
    protected final C0665a f50452a;

    /* renamed from: b  reason: collision with root package name */
    protected final f f50453b;

    /* renamed from: c  reason: collision with root package name */
    protected c f50454c;

    /* renamed from: d  reason: collision with root package name */
    private final int f50455d;

    /* renamed from: tc.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class C0665a implements z {

        /* renamed from: a  reason: collision with root package name */
        private final d f50456a;

        /* renamed from: b  reason: collision with root package name */
        private final long f50457b;

        /* renamed from: c  reason: collision with root package name */
        private final long f50458c;

        /* renamed from: d  reason: collision with root package name */
        private final long f50459d;

        /* renamed from: e  reason: collision with root package name */
        private final long f50460e;

        /* renamed from: f  reason: collision with root package name */
        private final long f50461f;

        /* renamed from: g  reason: collision with root package name */
        private final long f50462g;

        public C0665a(d dVar, long j10, long j11, long j12, long j13, long j14, long j15) {
            this.f50456a = dVar;
            this.f50457b = j10;
            this.f50458c = j11;
            this.f50459d = j12;
            this.f50460e = j13;
            this.f50461f = j14;
            this.f50462g = j15;
        }

        @Override // tc.z
        public z.a e(long j10) {
            return new z.a(new a0(j10, c.h(this.f50456a.a(j10), this.f50458c, this.f50459d, this.f50460e, this.f50461f, this.f50462g)));
        }

        @Override // tc.z
        public boolean h() {
            return true;
        }

        @Override // tc.z
        public long i() {
            return this.f50457b;
        }

        public long k(long j10) {
            return this.f50456a.a(j10);
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class c {

        /* renamed from: a  reason: collision with root package name */
        private final long f50463a;

        /* renamed from: b  reason: collision with root package name */
        private final long f50464b;

        /* renamed from: c  reason: collision with root package name */
        private final long f50465c;

        /* renamed from: d  reason: collision with root package name */
        private long f50466d;

        /* renamed from: e  reason: collision with root package name */
        private long f50467e;

        /* renamed from: f  reason: collision with root package name */
        private long f50468f;

        /* renamed from: g  reason: collision with root package name */
        private long f50469g;

        /* renamed from: h  reason: collision with root package name */
        private long f50470h;

        protected c(long j10, long j11, long j12, long j13, long j14, long j15, long j16) {
            this.f50463a = j10;
            this.f50464b = j11;
            this.f50466d = j12;
            this.f50467e = j13;
            this.f50468f = j14;
            this.f50469g = j15;
            this.f50465c = j16;
            this.f50470h = h(j11, j12, j13, j14, j15, j16);
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
            return this.f50469g;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public long j() {
            return this.f50468f;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public long k() {
            return this.f50470h;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public long l() {
            return this.f50463a;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public long m() {
            return this.f50464b;
        }

        private void n() {
            this.f50470h = h(this.f50464b, this.f50466d, this.f50467e, this.f50468f, this.f50469g, this.f50465c);
        }

        /* JADX INFO: Access modifiers changed from: private */
        public void o(long j10, long j11) {
            this.f50467e = j10;
            this.f50469g = j11;
            n();
        }

        /* JADX INFO: Access modifiers changed from: private */
        public void p(long j10, long j11) {
            this.f50466d = j10;
            this.f50468f = j11;
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
        public static final e f50471d = new e(-3, -9223372036854775807L, -1);

        /* renamed from: a  reason: collision with root package name */
        private final int f50472a;

        /* renamed from: b  reason: collision with root package name */
        private final long f50473b;

        /* renamed from: c  reason: collision with root package name */
        private final long f50474c;

        private e(int i10, long j10, long j11) {
            this.f50472a = i10;
            this.f50473b = j10;
            this.f50474c = j11;
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
        this.f50453b = fVar;
        this.f50455d = i10;
        this.f50452a = new C0665a(dVar, j10, j11, j12, j13, j14, j15);
    }

    protected c a(long j10) {
        return new c(j10, this.f50452a.k(j10), this.f50452a.f50458c, this.f50452a.f50459d, this.f50452a.f50460e, this.f50452a.f50461f, this.f50452a.f50462g);
    }

    public final z b() {
        return this.f50452a;
    }

    public int c(l lVar, y yVar) {
        while (true) {
            c cVar = (c) ne.a.i(this.f50454c);
            long j10 = cVar.j();
            long i10 = cVar.i();
            long k10 = cVar.k();
            if (i10 - j10 <= this.f50455d) {
                e(false, j10);
                return g(lVar, j10, yVar);
            } else if (!i(lVar, k10)) {
                return g(lVar, k10, yVar);
            } else {
                lVar.e();
                e a10 = this.f50453b.a(lVar, cVar.m());
                int i11 = a10.f50472a;
                if (i11 != -3) {
                    if (i11 == -2) {
                        cVar.p(a10.f50473b, a10.f50474c);
                    } else if (i11 == -1) {
                        cVar.o(a10.f50473b, a10.f50474c);
                    } else if (i11 == 0) {
                        i(lVar, a10.f50474c);
                        e(true, a10.f50474c);
                        return g(lVar, a10.f50474c, yVar);
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
        if (this.f50454c != null) {
            return true;
        }
        return false;
    }

    protected final void e(boolean z10, long j10) {
        this.f50454c = null;
        this.f50453b.b();
        f(z10, j10);
    }

    protected final int g(l lVar, long j10, y yVar) {
        if (j10 == lVar.getPosition()) {
            return 0;
        }
        yVar.f50579a = j10;
        return 1;
    }

    public final void h(long j10) {
        c cVar = this.f50454c;
        if (cVar != null && cVar.l() == j10) {
            return;
        }
        this.f50454c = a(j10);
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
