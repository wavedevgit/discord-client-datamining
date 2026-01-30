package tc;

import ne.w0;
import tc.z;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class a {

    /* renamed from: a  reason: collision with root package name */
    protected final C0637a f49391a;

    /* renamed from: b  reason: collision with root package name */
    protected final f f49392b;

    /* renamed from: c  reason: collision with root package name */
    protected c f49393c;

    /* renamed from: d  reason: collision with root package name */
    private final int f49394d;

    /* renamed from: tc.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class C0637a implements z {

        /* renamed from: a  reason: collision with root package name */
        private final d f49395a;

        /* renamed from: b  reason: collision with root package name */
        private final long f49396b;

        /* renamed from: c  reason: collision with root package name */
        private final long f49397c;

        /* renamed from: d  reason: collision with root package name */
        private final long f49398d;

        /* renamed from: e  reason: collision with root package name */
        private final long f49399e;

        /* renamed from: f  reason: collision with root package name */
        private final long f49400f;

        /* renamed from: g  reason: collision with root package name */
        private final long f49401g;

        public C0637a(d dVar, long j10, long j11, long j12, long j13, long j14, long j15) {
            this.f49395a = dVar;
            this.f49396b = j10;
            this.f49397c = j11;
            this.f49398d = j12;
            this.f49399e = j13;
            this.f49400f = j14;
            this.f49401g = j15;
        }

        @Override // tc.z
        public z.a e(long j10) {
            return new z.a(new a0(j10, c.h(this.f49395a.a(j10), this.f49397c, this.f49398d, this.f49399e, this.f49400f, this.f49401g)));
        }

        @Override // tc.z
        public boolean h() {
            return true;
        }

        @Override // tc.z
        public long i() {
            return this.f49396b;
        }

        public long k(long j10) {
            return this.f49395a.a(j10);
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class c {

        /* renamed from: a  reason: collision with root package name */
        private final long f49402a;

        /* renamed from: b  reason: collision with root package name */
        private final long f49403b;

        /* renamed from: c  reason: collision with root package name */
        private final long f49404c;

        /* renamed from: d  reason: collision with root package name */
        private long f49405d;

        /* renamed from: e  reason: collision with root package name */
        private long f49406e;

        /* renamed from: f  reason: collision with root package name */
        private long f49407f;

        /* renamed from: g  reason: collision with root package name */
        private long f49408g;

        /* renamed from: h  reason: collision with root package name */
        private long f49409h;

        protected c(long j10, long j11, long j12, long j13, long j14, long j15, long j16) {
            this.f49402a = j10;
            this.f49403b = j11;
            this.f49405d = j12;
            this.f49406e = j13;
            this.f49407f = j14;
            this.f49408g = j15;
            this.f49404c = j16;
            this.f49409h = h(j11, j12, j13, j14, j15, j16);
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
            return this.f49408g;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public long j() {
            return this.f49407f;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public long k() {
            return this.f49409h;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public long l() {
            return this.f49402a;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public long m() {
            return this.f49403b;
        }

        private void n() {
            this.f49409h = h(this.f49403b, this.f49405d, this.f49406e, this.f49407f, this.f49408g, this.f49404c);
        }

        /* JADX INFO: Access modifiers changed from: private */
        public void o(long j10, long j11) {
            this.f49406e = j10;
            this.f49408g = j11;
            n();
        }

        /* JADX INFO: Access modifiers changed from: private */
        public void p(long j10, long j11) {
            this.f49405d = j10;
            this.f49407f = j11;
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
        public static final e f49410d = new e(-3, -9223372036854775807L, -1);

        /* renamed from: a  reason: collision with root package name */
        private final int f49411a;

        /* renamed from: b  reason: collision with root package name */
        private final long f49412b;

        /* renamed from: c  reason: collision with root package name */
        private final long f49413c;

        private e(int i10, long j10, long j11) {
            this.f49411a = i10;
            this.f49412b = j10;
            this.f49413c = j11;
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
        this.f49392b = fVar;
        this.f49394d = i10;
        this.f49391a = new C0637a(dVar, j10, j11, j12, j13, j14, j15);
    }

    protected c a(long j10) {
        return new c(j10, this.f49391a.k(j10), this.f49391a.f49397c, this.f49391a.f49398d, this.f49391a.f49399e, this.f49391a.f49400f, this.f49391a.f49401g);
    }

    public final z b() {
        return this.f49391a;
    }

    public int c(l lVar, y yVar) {
        while (true) {
            c cVar = (c) ne.a.i(this.f49393c);
            long j10 = cVar.j();
            long i10 = cVar.i();
            long k10 = cVar.k();
            if (i10 - j10 <= this.f49394d) {
                e(false, j10);
                return g(lVar, j10, yVar);
            } else if (!i(lVar, k10)) {
                return g(lVar, k10, yVar);
            } else {
                lVar.e();
                e a10 = this.f49392b.a(lVar, cVar.m());
                int i11 = a10.f49411a;
                if (i11 != -3) {
                    if (i11 == -2) {
                        cVar.p(a10.f49412b, a10.f49413c);
                    } else if (i11 == -1) {
                        cVar.o(a10.f49412b, a10.f49413c);
                    } else if (i11 == 0) {
                        i(lVar, a10.f49413c);
                        e(true, a10.f49413c);
                        return g(lVar, a10.f49413c, yVar);
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
        if (this.f49393c != null) {
            return true;
        }
        return false;
    }

    protected final void e(boolean z10, long j10) {
        this.f49393c = null;
        this.f49392b.b();
        f(z10, j10);
    }

    protected final int g(l lVar, long j10, y yVar) {
        if (j10 == lVar.getPosition()) {
            return 0;
        }
        yVar.f49518a = j10;
        return 1;
    }

    public final void h(long j10) {
        c cVar = this.f49393c;
        if (cVar != null && cVar.l() == j10) {
            return;
        }
        this.f49393c = a(j10);
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
