package tc;

import ne.w0;
import tc.z;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class a {

    /* renamed from: a  reason: collision with root package name */
    protected final C0621a f49871a;

    /* renamed from: b  reason: collision with root package name */
    protected final f f49872b;

    /* renamed from: c  reason: collision with root package name */
    protected c f49873c;

    /* renamed from: d  reason: collision with root package name */
    private final int f49874d;

    /* renamed from: tc.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class C0621a implements z {

        /* renamed from: a  reason: collision with root package name */
        private final d f49875a;

        /* renamed from: b  reason: collision with root package name */
        private final long f49876b;

        /* renamed from: c  reason: collision with root package name */
        private final long f49877c;

        /* renamed from: d  reason: collision with root package name */
        private final long f49878d;

        /* renamed from: e  reason: collision with root package name */
        private final long f49879e;

        /* renamed from: f  reason: collision with root package name */
        private final long f49880f;

        /* renamed from: g  reason: collision with root package name */
        private final long f49881g;

        public C0621a(d dVar, long j10, long j11, long j12, long j13, long j14, long j15) {
            this.f49875a = dVar;
            this.f49876b = j10;
            this.f49877c = j11;
            this.f49878d = j12;
            this.f49879e = j13;
            this.f49880f = j14;
            this.f49881g = j15;
        }

        @Override // tc.z
        public z.a e(long j10) {
            return new z.a(new a0(j10, c.h(this.f49875a.a(j10), this.f49877c, this.f49878d, this.f49879e, this.f49880f, this.f49881g)));
        }

        @Override // tc.z
        public boolean h() {
            return true;
        }

        @Override // tc.z
        public long i() {
            return this.f49876b;
        }

        public long k(long j10) {
            return this.f49875a.a(j10);
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class c {

        /* renamed from: a  reason: collision with root package name */
        private final long f49882a;

        /* renamed from: b  reason: collision with root package name */
        private final long f49883b;

        /* renamed from: c  reason: collision with root package name */
        private final long f49884c;

        /* renamed from: d  reason: collision with root package name */
        private long f49885d;

        /* renamed from: e  reason: collision with root package name */
        private long f49886e;

        /* renamed from: f  reason: collision with root package name */
        private long f49887f;

        /* renamed from: g  reason: collision with root package name */
        private long f49888g;

        /* renamed from: h  reason: collision with root package name */
        private long f49889h;

        protected c(long j10, long j11, long j12, long j13, long j14, long j15, long j16) {
            this.f49882a = j10;
            this.f49883b = j11;
            this.f49885d = j12;
            this.f49886e = j13;
            this.f49887f = j14;
            this.f49888g = j15;
            this.f49884c = j16;
            this.f49889h = h(j11, j12, j13, j14, j15, j16);
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
            return this.f49888g;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public long j() {
            return this.f49887f;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public long k() {
            return this.f49889h;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public long l() {
            return this.f49882a;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public long m() {
            return this.f49883b;
        }

        private void n() {
            this.f49889h = h(this.f49883b, this.f49885d, this.f49886e, this.f49887f, this.f49888g, this.f49884c);
        }

        /* JADX INFO: Access modifiers changed from: private */
        public void o(long j10, long j11) {
            this.f49886e = j10;
            this.f49888g = j11;
            n();
        }

        /* JADX INFO: Access modifiers changed from: private */
        public void p(long j10, long j11) {
            this.f49885d = j10;
            this.f49887f = j11;
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
        public static final e f49890d = new e(-3, -9223372036854775807L, -1);

        /* renamed from: a  reason: collision with root package name */
        private final int f49891a;

        /* renamed from: b  reason: collision with root package name */
        private final long f49892b;

        /* renamed from: c  reason: collision with root package name */
        private final long f49893c;

        private e(int i10, long j10, long j11) {
            this.f49891a = i10;
            this.f49892b = j10;
            this.f49893c = j11;
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
        this.f49872b = fVar;
        this.f49874d = i10;
        this.f49871a = new C0621a(dVar, j10, j11, j12, j13, j14, j15);
    }

    protected c a(long j10) {
        return new c(j10, this.f49871a.k(j10), this.f49871a.f49877c, this.f49871a.f49878d, this.f49871a.f49879e, this.f49871a.f49880f, this.f49871a.f49881g);
    }

    public final z b() {
        return this.f49871a;
    }

    public int c(l lVar, y yVar) {
        while (true) {
            c cVar = (c) ne.a.i(this.f49873c);
            long j10 = cVar.j();
            long i10 = cVar.i();
            long k10 = cVar.k();
            if (i10 - j10 <= this.f49874d) {
                e(false, j10);
                return g(lVar, j10, yVar);
            } else if (!i(lVar, k10)) {
                return g(lVar, k10, yVar);
            } else {
                lVar.e();
                e a10 = this.f49872b.a(lVar, cVar.m());
                int i11 = a10.f49891a;
                if (i11 != -3) {
                    if (i11 == -2) {
                        cVar.p(a10.f49892b, a10.f49893c);
                    } else if (i11 == -1) {
                        cVar.o(a10.f49892b, a10.f49893c);
                    } else if (i11 == 0) {
                        i(lVar, a10.f49893c);
                        e(true, a10.f49893c);
                        return g(lVar, a10.f49893c, yVar);
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
        if (this.f49873c != null) {
            return true;
        }
        return false;
    }

    protected final void e(boolean z10, long j10) {
        this.f49873c = null;
        this.f49872b.b();
        f(z10, j10);
    }

    protected final int g(l lVar, long j10, y yVar) {
        if (j10 == lVar.getPosition()) {
            return 0;
        }
        yVar.f49998a = j10;
        return 1;
    }

    public final void h(long j10) {
        c cVar = this.f49873c;
        if (cVar != null && cVar.l() == j10) {
            return;
        }
        this.f49873c = a(j10);
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
