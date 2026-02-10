package uc;

import oe.w0;
import uc.z;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class a {

    /* renamed from: a  reason: collision with root package name */
    protected final C0696a f50587a;

    /* renamed from: b  reason: collision with root package name */
    protected final f f50588b;

    /* renamed from: c  reason: collision with root package name */
    protected c f50589c;

    /* renamed from: d  reason: collision with root package name */
    private final int f50590d;

    /* renamed from: uc.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class C0696a implements z {

        /* renamed from: a  reason: collision with root package name */
        private final d f50591a;

        /* renamed from: b  reason: collision with root package name */
        private final long f50592b;

        /* renamed from: c  reason: collision with root package name */
        private final long f50593c;

        /* renamed from: d  reason: collision with root package name */
        private final long f50594d;

        /* renamed from: e  reason: collision with root package name */
        private final long f50595e;

        /* renamed from: f  reason: collision with root package name */
        private final long f50596f;

        /* renamed from: g  reason: collision with root package name */
        private final long f50597g;

        public C0696a(d dVar, long j10, long j11, long j12, long j13, long j14, long j15) {
            this.f50591a = dVar;
            this.f50592b = j10;
            this.f50593c = j11;
            this.f50594d = j12;
            this.f50595e = j13;
            this.f50596f = j14;
            this.f50597g = j15;
        }

        @Override // uc.z
        public z.a e(long j10) {
            return new z.a(new a0(j10, c.h(this.f50591a.a(j10), this.f50593c, this.f50594d, this.f50595e, this.f50596f, this.f50597g)));
        }

        @Override // uc.z
        public boolean g() {
            return true;
        }

        @Override // uc.z
        public long i() {
            return this.f50592b;
        }

        public long k(long j10) {
            return this.f50591a.a(j10);
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class c {

        /* renamed from: a  reason: collision with root package name */
        private final long f50598a;

        /* renamed from: b  reason: collision with root package name */
        private final long f50599b;

        /* renamed from: c  reason: collision with root package name */
        private final long f50600c;

        /* renamed from: d  reason: collision with root package name */
        private long f50601d;

        /* renamed from: e  reason: collision with root package name */
        private long f50602e;

        /* renamed from: f  reason: collision with root package name */
        private long f50603f;

        /* renamed from: g  reason: collision with root package name */
        private long f50604g;

        /* renamed from: h  reason: collision with root package name */
        private long f50605h;

        protected c(long j10, long j11, long j12, long j13, long j14, long j15, long j16) {
            this.f50598a = j10;
            this.f50599b = j11;
            this.f50601d = j12;
            this.f50602e = j13;
            this.f50603f = j14;
            this.f50604g = j15;
            this.f50600c = j16;
            this.f50605h = h(j11, j12, j13, j14, j15, j16);
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
            return this.f50604g;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public long j() {
            return this.f50603f;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public long k() {
            return this.f50605h;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public long l() {
            return this.f50598a;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public long m() {
            return this.f50599b;
        }

        private void n() {
            this.f50605h = h(this.f50599b, this.f50601d, this.f50602e, this.f50603f, this.f50604g, this.f50600c);
        }

        /* JADX INFO: Access modifiers changed from: private */
        public void o(long j10, long j11) {
            this.f50602e = j10;
            this.f50604g = j11;
            n();
        }

        /* JADX INFO: Access modifiers changed from: private */
        public void p(long j10, long j11) {
            this.f50601d = j10;
            this.f50603f = j11;
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
        public static final e f50606d = new e(-3, -9223372036854775807L, -1);

        /* renamed from: a  reason: collision with root package name */
        private final int f50607a;

        /* renamed from: b  reason: collision with root package name */
        private final long f50608b;

        /* renamed from: c  reason: collision with root package name */
        private final long f50609c;

        private e(int i10, long j10, long j11) {
            this.f50607a = i10;
            this.f50608b = j10;
            this.f50609c = j11;
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
        this.f50588b = fVar;
        this.f50590d = i10;
        this.f50587a = new C0696a(dVar, j10, j11, j12, j13, j14, j15);
    }

    protected c a(long j10) {
        return new c(j10, this.f50587a.k(j10), this.f50587a.f50593c, this.f50587a.f50594d, this.f50587a.f50595e, this.f50587a.f50596f, this.f50587a.f50597g);
    }

    public final z b() {
        return this.f50587a;
    }

    public int c(l lVar, y yVar) {
        while (true) {
            c cVar = (c) oe.a.i(this.f50589c);
            long j10 = cVar.j();
            long i10 = cVar.i();
            long k10 = cVar.k();
            if (i10 - j10 <= this.f50590d) {
                e(false, j10);
                return g(lVar, j10, yVar);
            } else if (!i(lVar, k10)) {
                return g(lVar, k10, yVar);
            } else {
                lVar.e();
                e a10 = this.f50588b.a(lVar, cVar.m());
                int i11 = a10.f50607a;
                if (i11 != -3) {
                    if (i11 == -2) {
                        cVar.p(a10.f50608b, a10.f50609c);
                    } else if (i11 == -1) {
                        cVar.o(a10.f50608b, a10.f50609c);
                    } else if (i11 == 0) {
                        i(lVar, a10.f50609c);
                        e(true, a10.f50609c);
                        return g(lVar, a10.f50609c, yVar);
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
        if (this.f50589c != null) {
            return true;
        }
        return false;
    }

    protected final void e(boolean z10, long j10) {
        this.f50589c = null;
        this.f50588b.b();
        f(z10, j10);
    }

    protected final int g(l lVar, long j10, y yVar) {
        if (j10 == lVar.getPosition()) {
            return 0;
        }
        yVar.f50714a = j10;
        return 1;
    }

    public final void h(long j10) {
        c cVar = this.f50589c;
        if (cVar != null && cVar.l() == j10) {
            return;
        }
        this.f50589c = a(j10);
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
