package tc;

import ne.w0;
import tc.z;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class a {

    /* renamed from: a  reason: collision with root package name */
    protected final C0637a f49375a;

    /* renamed from: b  reason: collision with root package name */
    protected final f f49376b;

    /* renamed from: c  reason: collision with root package name */
    protected c f49377c;

    /* renamed from: d  reason: collision with root package name */
    private final int f49378d;

    /* renamed from: tc.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class C0637a implements z {

        /* renamed from: a  reason: collision with root package name */
        private final d f49379a;

        /* renamed from: b  reason: collision with root package name */
        private final long f49380b;

        /* renamed from: c  reason: collision with root package name */
        private final long f49381c;

        /* renamed from: d  reason: collision with root package name */
        private final long f49382d;

        /* renamed from: e  reason: collision with root package name */
        private final long f49383e;

        /* renamed from: f  reason: collision with root package name */
        private final long f49384f;

        /* renamed from: g  reason: collision with root package name */
        private final long f49385g;

        public C0637a(d dVar, long j10, long j11, long j12, long j13, long j14, long j15) {
            this.f49379a = dVar;
            this.f49380b = j10;
            this.f49381c = j11;
            this.f49382d = j12;
            this.f49383e = j13;
            this.f49384f = j14;
            this.f49385g = j15;
        }

        @Override // tc.z
        public z.a e(long j10) {
            return new z.a(new a0(j10, c.h(this.f49379a.a(j10), this.f49381c, this.f49382d, this.f49383e, this.f49384f, this.f49385g)));
        }

        @Override // tc.z
        public boolean h() {
            return true;
        }

        @Override // tc.z
        public long i() {
            return this.f49380b;
        }

        public long k(long j10) {
            return this.f49379a.a(j10);
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class c {

        /* renamed from: a  reason: collision with root package name */
        private final long f49386a;

        /* renamed from: b  reason: collision with root package name */
        private final long f49387b;

        /* renamed from: c  reason: collision with root package name */
        private final long f49388c;

        /* renamed from: d  reason: collision with root package name */
        private long f49389d;

        /* renamed from: e  reason: collision with root package name */
        private long f49390e;

        /* renamed from: f  reason: collision with root package name */
        private long f49391f;

        /* renamed from: g  reason: collision with root package name */
        private long f49392g;

        /* renamed from: h  reason: collision with root package name */
        private long f49393h;

        protected c(long j10, long j11, long j12, long j13, long j14, long j15, long j16) {
            this.f49386a = j10;
            this.f49387b = j11;
            this.f49389d = j12;
            this.f49390e = j13;
            this.f49391f = j14;
            this.f49392g = j15;
            this.f49388c = j16;
            this.f49393h = h(j11, j12, j13, j14, j15, j16);
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
            return this.f49392g;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public long j() {
            return this.f49391f;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public long k() {
            return this.f49393h;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public long l() {
            return this.f49386a;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public long m() {
            return this.f49387b;
        }

        private void n() {
            this.f49393h = h(this.f49387b, this.f49389d, this.f49390e, this.f49391f, this.f49392g, this.f49388c);
        }

        /* JADX INFO: Access modifiers changed from: private */
        public void o(long j10, long j11) {
            this.f49390e = j10;
            this.f49392g = j11;
            n();
        }

        /* JADX INFO: Access modifiers changed from: private */
        public void p(long j10, long j11) {
            this.f49389d = j10;
            this.f49391f = j11;
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
        public static final e f49394d = new e(-3, -9223372036854775807L, -1);

        /* renamed from: a  reason: collision with root package name */
        private final int f49395a;

        /* renamed from: b  reason: collision with root package name */
        private final long f49396b;

        /* renamed from: c  reason: collision with root package name */
        private final long f49397c;

        private e(int i10, long j10, long j11) {
            this.f49395a = i10;
            this.f49396b = j10;
            this.f49397c = j11;
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
        this.f49376b = fVar;
        this.f49378d = i10;
        this.f49375a = new C0637a(dVar, j10, j11, j12, j13, j14, j15);
    }

    protected c a(long j10) {
        return new c(j10, this.f49375a.k(j10), this.f49375a.f49381c, this.f49375a.f49382d, this.f49375a.f49383e, this.f49375a.f49384f, this.f49375a.f49385g);
    }

    public final z b() {
        return this.f49375a;
    }

    public int c(l lVar, y yVar) {
        while (true) {
            c cVar = (c) ne.a.i(this.f49377c);
            long j10 = cVar.j();
            long i10 = cVar.i();
            long k10 = cVar.k();
            if (i10 - j10 <= this.f49378d) {
                e(false, j10);
                return g(lVar, j10, yVar);
            } else if (!i(lVar, k10)) {
                return g(lVar, k10, yVar);
            } else {
                lVar.e();
                e a10 = this.f49376b.a(lVar, cVar.m());
                int i11 = a10.f49395a;
                if (i11 != -3) {
                    if (i11 == -2) {
                        cVar.p(a10.f49396b, a10.f49397c);
                    } else if (i11 == -1) {
                        cVar.o(a10.f49396b, a10.f49397c);
                    } else if (i11 == 0) {
                        i(lVar, a10.f49397c);
                        e(true, a10.f49397c);
                        return g(lVar, a10.f49397c, yVar);
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
        if (this.f49377c != null) {
            return true;
        }
        return false;
    }

    protected final void e(boolean z10, long j10) {
        this.f49377c = null;
        this.f49376b.b();
        f(z10, j10);
    }

    protected final int g(l lVar, long j10, y yVar) {
        if (j10 == lVar.getPosition()) {
            return 0;
        }
        yVar.f49502a = j10;
        return 1;
    }

    public final void h(long j10) {
        c cVar = this.f49377c;
        if (cVar != null && cVar.l() == j10) {
            return;
        }
        this.f49377c = a(j10);
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
