package uc;

import oe.w0;
import uc.z;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class a {

    /* renamed from: a  reason: collision with root package name */
    protected final C0696a f50588a;

    /* renamed from: b  reason: collision with root package name */
    protected final f f50589b;

    /* renamed from: c  reason: collision with root package name */
    protected c f50590c;

    /* renamed from: d  reason: collision with root package name */
    private final int f50591d;

    /* renamed from: uc.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class C0696a implements z {

        /* renamed from: a  reason: collision with root package name */
        private final d f50592a;

        /* renamed from: b  reason: collision with root package name */
        private final long f50593b;

        /* renamed from: c  reason: collision with root package name */
        private final long f50594c;

        /* renamed from: d  reason: collision with root package name */
        private final long f50595d;

        /* renamed from: e  reason: collision with root package name */
        private final long f50596e;

        /* renamed from: f  reason: collision with root package name */
        private final long f50597f;

        /* renamed from: g  reason: collision with root package name */
        private final long f50598g;

        public C0696a(d dVar, long j10, long j11, long j12, long j13, long j14, long j15) {
            this.f50592a = dVar;
            this.f50593b = j10;
            this.f50594c = j11;
            this.f50595d = j12;
            this.f50596e = j13;
            this.f50597f = j14;
            this.f50598g = j15;
        }

        @Override // uc.z
        public z.a e(long j10) {
            return new z.a(new a0(j10, c.h(this.f50592a.a(j10), this.f50594c, this.f50595d, this.f50596e, this.f50597f, this.f50598g)));
        }

        @Override // uc.z
        public boolean g() {
            return true;
        }

        @Override // uc.z
        public long i() {
            return this.f50593b;
        }

        public long k(long j10) {
            return this.f50592a.a(j10);
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class c {

        /* renamed from: a  reason: collision with root package name */
        private final long f50599a;

        /* renamed from: b  reason: collision with root package name */
        private final long f50600b;

        /* renamed from: c  reason: collision with root package name */
        private final long f50601c;

        /* renamed from: d  reason: collision with root package name */
        private long f50602d;

        /* renamed from: e  reason: collision with root package name */
        private long f50603e;

        /* renamed from: f  reason: collision with root package name */
        private long f50604f;

        /* renamed from: g  reason: collision with root package name */
        private long f50605g;

        /* renamed from: h  reason: collision with root package name */
        private long f50606h;

        protected c(long j10, long j11, long j12, long j13, long j14, long j15, long j16) {
            this.f50599a = j10;
            this.f50600b = j11;
            this.f50602d = j12;
            this.f50603e = j13;
            this.f50604f = j14;
            this.f50605g = j15;
            this.f50601c = j16;
            this.f50606h = h(j11, j12, j13, j14, j15, j16);
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
            return this.f50605g;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public long j() {
            return this.f50604f;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public long k() {
            return this.f50606h;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public long l() {
            return this.f50599a;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public long m() {
            return this.f50600b;
        }

        private void n() {
            this.f50606h = h(this.f50600b, this.f50602d, this.f50603e, this.f50604f, this.f50605g, this.f50601c);
        }

        /* JADX INFO: Access modifiers changed from: private */
        public void o(long j10, long j11) {
            this.f50603e = j10;
            this.f50605g = j11;
            n();
        }

        /* JADX INFO: Access modifiers changed from: private */
        public void p(long j10, long j11) {
            this.f50602d = j10;
            this.f50604f = j11;
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
        public static final e f50607d = new e(-3, -9223372036854775807L, -1);

        /* renamed from: a  reason: collision with root package name */
        private final int f50608a;

        /* renamed from: b  reason: collision with root package name */
        private final long f50609b;

        /* renamed from: c  reason: collision with root package name */
        private final long f50610c;

        private e(int i10, long j10, long j11) {
            this.f50608a = i10;
            this.f50609b = j10;
            this.f50610c = j11;
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
        this.f50589b = fVar;
        this.f50591d = i10;
        this.f50588a = new C0696a(dVar, j10, j11, j12, j13, j14, j15);
    }

    protected c a(long j10) {
        return new c(j10, this.f50588a.k(j10), this.f50588a.f50594c, this.f50588a.f50595d, this.f50588a.f50596e, this.f50588a.f50597f, this.f50588a.f50598g);
    }

    public final z b() {
        return this.f50588a;
    }

    public int c(l lVar, y yVar) {
        while (true) {
            c cVar = (c) oe.a.i(this.f50590c);
            long j10 = cVar.j();
            long i10 = cVar.i();
            long k10 = cVar.k();
            if (i10 - j10 <= this.f50591d) {
                e(false, j10);
                return g(lVar, j10, yVar);
            } else if (!i(lVar, k10)) {
                return g(lVar, k10, yVar);
            } else {
                lVar.e();
                e a10 = this.f50589b.a(lVar, cVar.m());
                int i11 = a10.f50608a;
                if (i11 != -3) {
                    if (i11 == -2) {
                        cVar.p(a10.f50609b, a10.f50610c);
                    } else if (i11 == -1) {
                        cVar.o(a10.f50609b, a10.f50610c);
                    } else if (i11 == 0) {
                        i(lVar, a10.f50610c);
                        e(true, a10.f50610c);
                        return g(lVar, a10.f50610c, yVar);
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
        if (this.f50590c != null) {
            return true;
        }
        return false;
    }

    protected final void e(boolean z10, long j10) {
        this.f50590c = null;
        this.f50589b.b();
        f(z10, j10);
    }

    protected final int g(l lVar, long j10, y yVar) {
        if (j10 == lVar.getPosition()) {
            return 0;
        }
        yVar.f50715a = j10;
        return 1;
    }

    public final void h(long j10) {
        c cVar = this.f50590c;
        if (cVar != null && cVar.l() == j10) {
            return;
        }
        this.f50590c = a(j10);
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
