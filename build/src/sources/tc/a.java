package tc;

import ne.w0;
import tc.z;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class a {

    /* renamed from: a  reason: collision with root package name */
    protected final C0621a f49874a;

    /* renamed from: b  reason: collision with root package name */
    protected final f f49875b;

    /* renamed from: c  reason: collision with root package name */
    protected c f49876c;

    /* renamed from: d  reason: collision with root package name */
    private final int f49877d;

    /* renamed from: tc.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class C0621a implements z {

        /* renamed from: a  reason: collision with root package name */
        private final d f49878a;

        /* renamed from: b  reason: collision with root package name */
        private final long f49879b;

        /* renamed from: c  reason: collision with root package name */
        private final long f49880c;

        /* renamed from: d  reason: collision with root package name */
        private final long f49881d;

        /* renamed from: e  reason: collision with root package name */
        private final long f49882e;

        /* renamed from: f  reason: collision with root package name */
        private final long f49883f;

        /* renamed from: g  reason: collision with root package name */
        private final long f49884g;

        public C0621a(d dVar, long j10, long j11, long j12, long j13, long j14, long j15) {
            this.f49878a = dVar;
            this.f49879b = j10;
            this.f49880c = j11;
            this.f49881d = j12;
            this.f49882e = j13;
            this.f49883f = j14;
            this.f49884g = j15;
        }

        @Override // tc.z
        public z.a e(long j10) {
            return new z.a(new a0(j10, c.h(this.f49878a.a(j10), this.f49880c, this.f49881d, this.f49882e, this.f49883f, this.f49884g)));
        }

        @Override // tc.z
        public boolean h() {
            return true;
        }

        @Override // tc.z
        public long i() {
            return this.f49879b;
        }

        public long k(long j10) {
            return this.f49878a.a(j10);
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class c {

        /* renamed from: a  reason: collision with root package name */
        private final long f49885a;

        /* renamed from: b  reason: collision with root package name */
        private final long f49886b;

        /* renamed from: c  reason: collision with root package name */
        private final long f49887c;

        /* renamed from: d  reason: collision with root package name */
        private long f49888d;

        /* renamed from: e  reason: collision with root package name */
        private long f49889e;

        /* renamed from: f  reason: collision with root package name */
        private long f49890f;

        /* renamed from: g  reason: collision with root package name */
        private long f49891g;

        /* renamed from: h  reason: collision with root package name */
        private long f49892h;

        protected c(long j10, long j11, long j12, long j13, long j14, long j15, long j16) {
            this.f49885a = j10;
            this.f49886b = j11;
            this.f49888d = j12;
            this.f49889e = j13;
            this.f49890f = j14;
            this.f49891g = j15;
            this.f49887c = j16;
            this.f49892h = h(j11, j12, j13, j14, j15, j16);
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
            return this.f49891g;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public long j() {
            return this.f49890f;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public long k() {
            return this.f49892h;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public long l() {
            return this.f49885a;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public long m() {
            return this.f49886b;
        }

        private void n() {
            this.f49892h = h(this.f49886b, this.f49888d, this.f49889e, this.f49890f, this.f49891g, this.f49887c);
        }

        /* JADX INFO: Access modifiers changed from: private */
        public void o(long j10, long j11) {
            this.f49889e = j10;
            this.f49891g = j11;
            n();
        }

        /* JADX INFO: Access modifiers changed from: private */
        public void p(long j10, long j11) {
            this.f49888d = j10;
            this.f49890f = j11;
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
        public static final e f49893d = new e(-3, -9223372036854775807L, -1);

        /* renamed from: a  reason: collision with root package name */
        private final int f49894a;

        /* renamed from: b  reason: collision with root package name */
        private final long f49895b;

        /* renamed from: c  reason: collision with root package name */
        private final long f49896c;

        private e(int i10, long j10, long j11) {
            this.f49894a = i10;
            this.f49895b = j10;
            this.f49896c = j11;
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
        this.f49875b = fVar;
        this.f49877d = i10;
        this.f49874a = new C0621a(dVar, j10, j11, j12, j13, j14, j15);
    }

    protected c a(long j10) {
        return new c(j10, this.f49874a.k(j10), this.f49874a.f49880c, this.f49874a.f49881d, this.f49874a.f49882e, this.f49874a.f49883f, this.f49874a.f49884g);
    }

    public final z b() {
        return this.f49874a;
    }

    public int c(l lVar, y yVar) {
        while (true) {
            c cVar = (c) ne.a.i(this.f49876c);
            long j10 = cVar.j();
            long i10 = cVar.i();
            long k10 = cVar.k();
            if (i10 - j10 <= this.f49877d) {
                e(false, j10);
                return g(lVar, j10, yVar);
            } else if (!i(lVar, k10)) {
                return g(lVar, k10, yVar);
            } else {
                lVar.e();
                e a10 = this.f49875b.a(lVar, cVar.m());
                int i11 = a10.f49894a;
                if (i11 != -3) {
                    if (i11 == -2) {
                        cVar.p(a10.f49895b, a10.f49896c);
                    } else if (i11 == -1) {
                        cVar.o(a10.f49895b, a10.f49896c);
                    } else if (i11 == 0) {
                        i(lVar, a10.f49896c);
                        e(true, a10.f49896c);
                        return g(lVar, a10.f49896c, yVar);
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
        if (this.f49876c != null) {
            return true;
        }
        return false;
    }

    protected final void e(boolean z10, long j10) {
        this.f49876c = null;
        this.f49875b.b();
        f(z10, j10);
    }

    protected final int g(l lVar, long j10, y yVar) {
        if (j10 == lVar.getPosition()) {
            return 0;
        }
        yVar.f50001a = j10;
        return 1;
    }

    public final void h(long j10) {
        c cVar = this.f49876c;
        if (cVar != null && cVar.l() == j10) {
            return;
        }
        this.f49876c = a(j10);
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
