package uc;

import oe.w0;
import uc.z;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class a {

    /* renamed from: a  reason: collision with root package name */
    protected final C0696a f51156a;

    /* renamed from: b  reason: collision with root package name */
    protected final f f51157b;

    /* renamed from: c  reason: collision with root package name */
    protected c f51158c;

    /* renamed from: d  reason: collision with root package name */
    private final int f51159d;

    /* renamed from: uc.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class C0696a implements z {

        /* renamed from: a  reason: collision with root package name */
        private final d f51160a;

        /* renamed from: b  reason: collision with root package name */
        private final long f51161b;

        /* renamed from: c  reason: collision with root package name */
        private final long f51162c;

        /* renamed from: d  reason: collision with root package name */
        private final long f51163d;

        /* renamed from: e  reason: collision with root package name */
        private final long f51164e;

        /* renamed from: f  reason: collision with root package name */
        private final long f51165f;

        /* renamed from: g  reason: collision with root package name */
        private final long f51166g;

        public C0696a(d dVar, long j10, long j11, long j12, long j13, long j14, long j15) {
            this.f51160a = dVar;
            this.f51161b = j10;
            this.f51162c = j11;
            this.f51163d = j12;
            this.f51164e = j13;
            this.f51165f = j14;
            this.f51166g = j15;
        }

        @Override // uc.z
        public z.a e(long j10) {
            return new z.a(new a0(j10, c.h(this.f51160a.a(j10), this.f51162c, this.f51163d, this.f51164e, this.f51165f, this.f51166g)));
        }

        @Override // uc.z
        public boolean g() {
            return true;
        }

        @Override // uc.z
        public long i() {
            return this.f51161b;
        }

        public long k(long j10) {
            return this.f51160a.a(j10);
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class c {

        /* renamed from: a  reason: collision with root package name */
        private final long f51167a;

        /* renamed from: b  reason: collision with root package name */
        private final long f51168b;

        /* renamed from: c  reason: collision with root package name */
        private final long f51169c;

        /* renamed from: d  reason: collision with root package name */
        private long f51170d;

        /* renamed from: e  reason: collision with root package name */
        private long f51171e;

        /* renamed from: f  reason: collision with root package name */
        private long f51172f;

        /* renamed from: g  reason: collision with root package name */
        private long f51173g;

        /* renamed from: h  reason: collision with root package name */
        private long f51174h;

        protected c(long j10, long j11, long j12, long j13, long j14, long j15, long j16) {
            this.f51167a = j10;
            this.f51168b = j11;
            this.f51170d = j12;
            this.f51171e = j13;
            this.f51172f = j14;
            this.f51173g = j15;
            this.f51169c = j16;
            this.f51174h = h(j11, j12, j13, j14, j15, j16);
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
            return this.f51173g;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public long j() {
            return this.f51172f;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public long k() {
            return this.f51174h;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public long l() {
            return this.f51167a;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public long m() {
            return this.f51168b;
        }

        private void n() {
            this.f51174h = h(this.f51168b, this.f51170d, this.f51171e, this.f51172f, this.f51173g, this.f51169c);
        }

        /* JADX INFO: Access modifiers changed from: private */
        public void o(long j10, long j11) {
            this.f51171e = j10;
            this.f51173g = j11;
            n();
        }

        /* JADX INFO: Access modifiers changed from: private */
        public void p(long j10, long j11) {
            this.f51170d = j10;
            this.f51172f = j11;
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
        public static final e f51175d = new e(-3, -9223372036854775807L, -1);

        /* renamed from: a  reason: collision with root package name */
        private final int f51176a;

        /* renamed from: b  reason: collision with root package name */
        private final long f51177b;

        /* renamed from: c  reason: collision with root package name */
        private final long f51178c;

        private e(int i10, long j10, long j11) {
            this.f51176a = i10;
            this.f51177b = j10;
            this.f51178c = j11;
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
        this.f51157b = fVar;
        this.f51159d = i10;
        this.f51156a = new C0696a(dVar, j10, j11, j12, j13, j14, j15);
    }

    protected c a(long j10) {
        return new c(j10, this.f51156a.k(j10), this.f51156a.f51162c, this.f51156a.f51163d, this.f51156a.f51164e, this.f51156a.f51165f, this.f51156a.f51166g);
    }

    public final z b() {
        return this.f51156a;
    }

    public int c(l lVar, y yVar) {
        while (true) {
            c cVar = (c) oe.a.i(this.f51158c);
            long j10 = cVar.j();
            long i10 = cVar.i();
            long k10 = cVar.k();
            if (i10 - j10 <= this.f51159d) {
                e(false, j10);
                return g(lVar, j10, yVar);
            } else if (!i(lVar, k10)) {
                return g(lVar, k10, yVar);
            } else {
                lVar.e();
                e a10 = this.f51157b.a(lVar, cVar.m());
                int i11 = a10.f51176a;
                if (i11 != -3) {
                    if (i11 == -2) {
                        cVar.p(a10.f51177b, a10.f51178c);
                    } else if (i11 == -1) {
                        cVar.o(a10.f51177b, a10.f51178c);
                    } else if (i11 == 0) {
                        i(lVar, a10.f51178c);
                        e(true, a10.f51178c);
                        return g(lVar, a10.f51178c, yVar);
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
        if (this.f51158c != null) {
            return true;
        }
        return false;
    }

    protected final void e(boolean z10, long j10) {
        this.f51158c = null;
        this.f51157b.b();
        f(z10, j10);
    }

    protected final int g(l lVar, long j10, y yVar) {
        if (j10 == lVar.getPosition()) {
            return 0;
        }
        yVar.f51283a = j10;
        return 1;
    }

    public final void h(long j10) {
        c cVar = this.f51158c;
        if (cVar != null && cVar.l() == j10) {
            return;
        }
        this.f51158c = a(j10);
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
        @Override // uc.a.d
        public long a(long j10) {
            return j10;
        }
    }

    protected void f(boolean z10, long j10) {
    }
}
