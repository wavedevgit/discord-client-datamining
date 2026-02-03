package tc;

import ne.w0;
import tc.z;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class a {

    /* renamed from: a  reason: collision with root package name */
    protected final C0648a f49663a;

    /* renamed from: b  reason: collision with root package name */
    protected final f f49664b;

    /* renamed from: c  reason: collision with root package name */
    protected c f49665c;

    /* renamed from: d  reason: collision with root package name */
    private final int f49666d;

    /* renamed from: tc.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class C0648a implements z {

        /* renamed from: a  reason: collision with root package name */
        private final d f49667a;

        /* renamed from: b  reason: collision with root package name */
        private final long f49668b;

        /* renamed from: c  reason: collision with root package name */
        private final long f49669c;

        /* renamed from: d  reason: collision with root package name */
        private final long f49670d;

        /* renamed from: e  reason: collision with root package name */
        private final long f49671e;

        /* renamed from: f  reason: collision with root package name */
        private final long f49672f;

        /* renamed from: g  reason: collision with root package name */
        private final long f49673g;

        public C0648a(d dVar, long j10, long j11, long j12, long j13, long j14, long j15) {
            this.f49667a = dVar;
            this.f49668b = j10;
            this.f49669c = j11;
            this.f49670d = j12;
            this.f49671e = j13;
            this.f49672f = j14;
            this.f49673g = j15;
        }

        @Override // tc.z
        public z.a e(long j10) {
            return new z.a(new a0(j10, c.h(this.f49667a.a(j10), this.f49669c, this.f49670d, this.f49671e, this.f49672f, this.f49673g)));
        }

        @Override // tc.z
        public boolean h() {
            return true;
        }

        @Override // tc.z
        public long i() {
            return this.f49668b;
        }

        public long k(long j10) {
            return this.f49667a.a(j10);
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class c {

        /* renamed from: a  reason: collision with root package name */
        private final long f49674a;

        /* renamed from: b  reason: collision with root package name */
        private final long f49675b;

        /* renamed from: c  reason: collision with root package name */
        private final long f49676c;

        /* renamed from: d  reason: collision with root package name */
        private long f49677d;

        /* renamed from: e  reason: collision with root package name */
        private long f49678e;

        /* renamed from: f  reason: collision with root package name */
        private long f49679f;

        /* renamed from: g  reason: collision with root package name */
        private long f49680g;

        /* renamed from: h  reason: collision with root package name */
        private long f49681h;

        protected c(long j10, long j11, long j12, long j13, long j14, long j15, long j16) {
            this.f49674a = j10;
            this.f49675b = j11;
            this.f49677d = j12;
            this.f49678e = j13;
            this.f49679f = j14;
            this.f49680g = j15;
            this.f49676c = j16;
            this.f49681h = h(j11, j12, j13, j14, j15, j16);
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
            return this.f49680g;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public long j() {
            return this.f49679f;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public long k() {
            return this.f49681h;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public long l() {
            return this.f49674a;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public long m() {
            return this.f49675b;
        }

        private void n() {
            this.f49681h = h(this.f49675b, this.f49677d, this.f49678e, this.f49679f, this.f49680g, this.f49676c);
        }

        /* JADX INFO: Access modifiers changed from: private */
        public void o(long j10, long j11) {
            this.f49678e = j10;
            this.f49680g = j11;
            n();
        }

        /* JADX INFO: Access modifiers changed from: private */
        public void p(long j10, long j11) {
            this.f49677d = j10;
            this.f49679f = j11;
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
        public static final e f49682d = new e(-3, -9223372036854775807L, -1);

        /* renamed from: a  reason: collision with root package name */
        private final int f49683a;

        /* renamed from: b  reason: collision with root package name */
        private final long f49684b;

        /* renamed from: c  reason: collision with root package name */
        private final long f49685c;

        private e(int i10, long j10, long j11) {
            this.f49683a = i10;
            this.f49684b = j10;
            this.f49685c = j11;
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
        this.f49664b = fVar;
        this.f49666d = i10;
        this.f49663a = new C0648a(dVar, j10, j11, j12, j13, j14, j15);
    }

    protected c a(long j10) {
        return new c(j10, this.f49663a.k(j10), this.f49663a.f49669c, this.f49663a.f49670d, this.f49663a.f49671e, this.f49663a.f49672f, this.f49663a.f49673g);
    }

    public final z b() {
        return this.f49663a;
    }

    public int c(l lVar, y yVar) {
        while (true) {
            c cVar = (c) ne.a.i(this.f49665c);
            long j10 = cVar.j();
            long i10 = cVar.i();
            long k10 = cVar.k();
            if (i10 - j10 <= this.f49666d) {
                e(false, j10);
                return g(lVar, j10, yVar);
            } else if (!i(lVar, k10)) {
                return g(lVar, k10, yVar);
            } else {
                lVar.e();
                e a10 = this.f49664b.a(lVar, cVar.m());
                int i11 = a10.f49683a;
                if (i11 != -3) {
                    if (i11 == -2) {
                        cVar.p(a10.f49684b, a10.f49685c);
                    } else if (i11 == -1) {
                        cVar.o(a10.f49684b, a10.f49685c);
                    } else if (i11 == 0) {
                        i(lVar, a10.f49685c);
                        e(true, a10.f49685c);
                        return g(lVar, a10.f49685c, yVar);
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
        if (this.f49665c != null) {
            return true;
        }
        return false;
    }

    protected final void e(boolean z10, long j10) {
        this.f49665c = null;
        this.f49664b.b();
        f(z10, j10);
    }

    protected final int g(l lVar, long j10, y yVar) {
        if (j10 == lVar.getPosition()) {
            return 0;
        }
        yVar.f49790a = j10;
        return 1;
    }

    public final void h(long j10) {
        c cVar = this.f49665c;
        if (cVar != null && cVar.l() == j10) {
            return;
        }
        this.f49665c = a(j10);
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
