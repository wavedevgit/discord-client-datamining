package uc;

import oe.w0;
import uc.z;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class a {

    /* renamed from: a  reason: collision with root package name */
    protected final C0714a f51408a;

    /* renamed from: b  reason: collision with root package name */
    protected final f f51409b;

    /* renamed from: c  reason: collision with root package name */
    protected c f51410c;

    /* renamed from: d  reason: collision with root package name */
    private final int f51411d;

    /* renamed from: uc.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class C0714a implements z {

        /* renamed from: a  reason: collision with root package name */
        private final d f51412a;

        /* renamed from: b  reason: collision with root package name */
        private final long f51413b;

        /* renamed from: c  reason: collision with root package name */
        private final long f51414c;

        /* renamed from: d  reason: collision with root package name */
        private final long f51415d;

        /* renamed from: e  reason: collision with root package name */
        private final long f51416e;

        /* renamed from: f  reason: collision with root package name */
        private final long f51417f;

        /* renamed from: g  reason: collision with root package name */
        private final long f51418g;

        public C0714a(d dVar, long j10, long j11, long j12, long j13, long j14, long j15) {
            this.f51412a = dVar;
            this.f51413b = j10;
            this.f51414c = j11;
            this.f51415d = j12;
            this.f51416e = j13;
            this.f51417f = j14;
            this.f51418g = j15;
        }

        @Override // uc.z
        public z.a e(long j10) {
            return new z.a(new a0(j10, c.h(this.f51412a.a(j10), this.f51414c, this.f51415d, this.f51416e, this.f51417f, this.f51418g)));
        }

        @Override // uc.z
        public boolean g() {
            return true;
        }

        @Override // uc.z
        public long i() {
            return this.f51413b;
        }

        public long k(long j10) {
            return this.f51412a.a(j10);
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class c {

        /* renamed from: a  reason: collision with root package name */
        private final long f51419a;

        /* renamed from: b  reason: collision with root package name */
        private final long f51420b;

        /* renamed from: c  reason: collision with root package name */
        private final long f51421c;

        /* renamed from: d  reason: collision with root package name */
        private long f51422d;

        /* renamed from: e  reason: collision with root package name */
        private long f51423e;

        /* renamed from: f  reason: collision with root package name */
        private long f51424f;

        /* renamed from: g  reason: collision with root package name */
        private long f51425g;

        /* renamed from: h  reason: collision with root package name */
        private long f51426h;

        protected c(long j10, long j11, long j12, long j13, long j14, long j15, long j16) {
            this.f51419a = j10;
            this.f51420b = j11;
            this.f51422d = j12;
            this.f51423e = j13;
            this.f51424f = j14;
            this.f51425g = j15;
            this.f51421c = j16;
            this.f51426h = h(j11, j12, j13, j14, j15, j16);
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
            return this.f51425g;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public long j() {
            return this.f51424f;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public long k() {
            return this.f51426h;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public long l() {
            return this.f51419a;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public long m() {
            return this.f51420b;
        }

        private void n() {
            this.f51426h = h(this.f51420b, this.f51422d, this.f51423e, this.f51424f, this.f51425g, this.f51421c);
        }

        /* JADX INFO: Access modifiers changed from: private */
        public void o(long j10, long j11) {
            this.f51423e = j10;
            this.f51425g = j11;
            n();
        }

        /* JADX INFO: Access modifiers changed from: private */
        public void p(long j10, long j11) {
            this.f51422d = j10;
            this.f51424f = j11;
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
        public static final e f51427d = new e(-3, -9223372036854775807L, -1);

        /* renamed from: a  reason: collision with root package name */
        private final int f51428a;

        /* renamed from: b  reason: collision with root package name */
        private final long f51429b;

        /* renamed from: c  reason: collision with root package name */
        private final long f51430c;

        private e(int i10, long j10, long j11) {
            this.f51428a = i10;
            this.f51429b = j10;
            this.f51430c = j11;
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
        this.f51409b = fVar;
        this.f51411d = i10;
        this.f51408a = new C0714a(dVar, j10, j11, j12, j13, j14, j15);
    }

    protected c a(long j10) {
        return new c(j10, this.f51408a.k(j10), this.f51408a.f51414c, this.f51408a.f51415d, this.f51408a.f51416e, this.f51408a.f51417f, this.f51408a.f51418g);
    }

    public final z b() {
        return this.f51408a;
    }

    public int c(l lVar, y yVar) {
        while (true) {
            c cVar = (c) oe.a.i(this.f51410c);
            long j10 = cVar.j();
            long i10 = cVar.i();
            long k10 = cVar.k();
            if (i10 - j10 <= this.f51411d) {
                e(false, j10);
                return g(lVar, j10, yVar);
            } else if (!i(lVar, k10)) {
                return g(lVar, k10, yVar);
            } else {
                lVar.e();
                e a10 = this.f51409b.a(lVar, cVar.m());
                int i11 = a10.f51428a;
                if (i11 != -3) {
                    if (i11 == -2) {
                        cVar.p(a10.f51429b, a10.f51430c);
                    } else if (i11 == -1) {
                        cVar.o(a10.f51429b, a10.f51430c);
                    } else if (i11 == 0) {
                        i(lVar, a10.f51430c);
                        e(true, a10.f51430c);
                        return g(lVar, a10.f51430c, yVar);
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
        if (this.f51410c != null) {
            return true;
        }
        return false;
    }

    protected final void e(boolean z10, long j10) {
        this.f51410c = null;
        this.f51409b.b();
        f(z10, j10);
    }

    protected final int g(l lVar, long j10, y yVar) {
        if (j10 == lVar.getPosition()) {
            return 0;
        }
        yVar.f51535a = j10;
        return 1;
    }

    public final void h(long j10) {
        c cVar = this.f51410c;
        if (cVar != null && cVar.l() == j10) {
            return;
        }
        this.f51410c = a(j10);
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
