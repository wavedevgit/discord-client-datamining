package xc;

import androidx.recyclerview.widget.h;
import ne.h0;
import tc.k;
import tc.l;
import tc.m;
import tc.p;
import tc.y;
import tc.z;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class c implements k {

    /* renamed from: q  reason: collision with root package name */
    public static final p f54583q = new p() { // from class: xc.b
        @Override // tc.p
        public final k[] b() {
            return c.b();
        }
    };

    /* renamed from: f  reason: collision with root package name */
    private m f54589f;

    /* renamed from: h  reason: collision with root package name */
    private boolean f54591h;

    /* renamed from: i  reason: collision with root package name */
    private long f54592i;

    /* renamed from: j  reason: collision with root package name */
    private int f54593j;

    /* renamed from: k  reason: collision with root package name */
    private int f54594k;

    /* renamed from: l  reason: collision with root package name */
    private int f54595l;

    /* renamed from: m  reason: collision with root package name */
    private long f54596m;

    /* renamed from: n  reason: collision with root package name */
    private boolean f54597n;

    /* renamed from: o  reason: collision with root package name */
    private a f54598o;

    /* renamed from: p  reason: collision with root package name */
    private f f54599p;

    /* renamed from: a  reason: collision with root package name */
    private final h0 f54584a = new h0(4);

    /* renamed from: b  reason: collision with root package name */
    private final h0 f54585b = new h0(9);

    /* renamed from: c  reason: collision with root package name */
    private final h0 f54586c = new h0(11);

    /* renamed from: d  reason: collision with root package name */
    private final h0 f54587d = new h0();

    /* renamed from: e  reason: collision with root package name */
    private final d f54588e = new d();

    /* renamed from: g  reason: collision with root package name */
    private int f54590g = 1;

    public static /* synthetic */ k[] b() {
        return new k[]{new c()};
    }

    private void e() {
        if (!this.f54597n) {
            this.f54589f.q(new z.b(-9223372036854775807L));
            this.f54597n = true;
        }
    }

    private long g() {
        if (this.f54591h) {
            return this.f54592i + this.f54596m;
        }
        if (this.f54588e.d() == -9223372036854775807L) {
            return 0L;
        }
        return this.f54596m;
    }

    private h0 h(l lVar) {
        if (this.f54595l > this.f54587d.b()) {
            h0 h0Var = this.f54587d;
            h0Var.S(new byte[Math.max(h0Var.b() * 2, this.f54595l)], 0);
        } else {
            this.f54587d.U(0);
        }
        this.f54587d.T(this.f54595l);
        lVar.readFully(this.f54587d.e(), 0, this.f54595l);
        return this.f54587d;
    }

    private boolean i(l lVar) {
        boolean z10;
        boolean z11 = false;
        if (!lVar.f(this.f54585b.e(), 0, 9, true)) {
            return false;
        }
        this.f54585b.U(0);
        this.f54585b.V(4);
        int H = this.f54585b.H();
        if ((H & 4) != 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        if ((H & 1) != 0) {
            z11 = true;
        }
        if (z10 && this.f54598o == null) {
            this.f54598o = new a(this.f54589f.c(8, 1));
        }
        if (z11 && this.f54599p == null) {
            this.f54599p = new f(this.f54589f.c(9, 2));
        }
        this.f54589f.s();
        this.f54593j = this.f54585b.q() - 5;
        this.f54590g = 2;
        return true;
    }

    /* JADX WARN: Removed duplicated region for block: B:26:0x0087  */
    /* JADX WARN: Removed duplicated region for block: B:27:0x008b  */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private boolean j(tc.l r10) {
        /*
            r9 = this;
            long r0 = r9.g()
            int r2 = r9.f54594k
            r3 = 8
            r4 = -9223372036854775807(0x8000000000000001, double:-4.9E-324)
            r6 = 1
            if (r2 != r3) goto L23
            xc.a r3 = r9.f54598o
            if (r3 == 0) goto L23
            r9.e()
            xc.a r2 = r9.f54598o
            ne.h0 r10 = r9.h(r10)
            boolean r10 = r2.a(r10, r0)
        L21:
            r0 = r6
            goto L75
        L23:
            r3 = 9
            if (r2 != r3) goto L39
            xc.f r3 = r9.f54599p
            if (r3 == 0) goto L39
            r9.e()
            xc.f r2 = r9.f54599p
            ne.h0 r10 = r9.h(r10)
            boolean r10 = r2.a(r10, r0)
            goto L21
        L39:
            r3 = 18
            if (r2 != r3) goto L6e
            boolean r2 = r9.f54597n
            if (r2 != 0) goto L6e
            xc.d r2 = r9.f54588e
            ne.h0 r10 = r9.h(r10)
            boolean r10 = r2.a(r10, r0)
            xc.d r0 = r9.f54588e
            long r0 = r0.d()
            int r2 = (r0 > r4 ? 1 : (r0 == r4 ? 0 : -1))
            if (r2 == 0) goto L21
            tc.m r2 = r9.f54589f
            tc.x r3 = new tc.x
            xc.d r7 = r9.f54588e
            long[] r7 = r7.e()
            xc.d r8 = r9.f54588e
            long[] r8 = r8.f()
            r3.<init>(r7, r8, r0)
            r2.q(r3)
            r9.f54597n = r6
            goto L21
        L6e:
            int r0 = r9.f54595l
            r10.k(r0)
            r10 = 0
            r0 = r10
        L75:
            boolean r1 = r9.f54591h
            if (r1 != 0) goto L8f
            if (r10 == 0) goto L8f
            r9.f54591h = r6
            xc.d r10 = r9.f54588e
            long r1 = r10.d()
            int r10 = (r1 > r4 ? 1 : (r1 == r4 ? 0 : -1))
            if (r10 != 0) goto L8b
            long r1 = r9.f54596m
            long r1 = -r1
            goto L8d
        L8b:
            r1 = 0
        L8d:
            r9.f54592i = r1
        L8f:
            r10 = 4
            r9.f54593j = r10
            r10 = 2
            r9.f54590g = r10
            return r0
        */
        throw new UnsupportedOperationException("Method not decompiled: xc.c.j(tc.l):boolean");
    }

    private boolean k(l lVar) {
        if (!lVar.f(this.f54586c.e(), 0, 11, true)) {
            return false;
        }
        this.f54586c.U(0);
        this.f54594k = this.f54586c.H();
        this.f54595l = this.f54586c.K();
        this.f54596m = this.f54586c.K();
        this.f54596m = ((this.f54586c.H() << 24) | this.f54596m) * 1000;
        this.f54586c.V(3);
        this.f54590g = 4;
        return true;
    }

    private void l(l lVar) {
        lVar.k(this.f54593j);
        this.f54593j = 0;
        this.f54590g = 3;
    }

    @Override // tc.k
    public void a(long j10, long j11) {
        if (j10 == 0) {
            this.f54590g = 1;
            this.f54591h = false;
        } else {
            this.f54590g = 3;
        }
        this.f54593j = 0;
    }

    @Override // tc.k
    public void c(m mVar) {
        this.f54589f = mVar;
    }

    @Override // tc.k
    public int d(l lVar, y yVar) {
        ne.a.i(this.f54589f);
        while (true) {
            int i10 = this.f54590g;
            if (i10 != 1) {
                if (i10 != 2) {
                    if (i10 != 3) {
                        if (i10 == 4) {
                            if (j(lVar)) {
                                return 0;
                            }
                        } else {
                            throw new IllegalStateException();
                        }
                    } else if (!k(lVar)) {
                        return -1;
                    }
                } else {
                    l(lVar);
                }
            } else if (!i(lVar)) {
                return -1;
            }
        }
    }

    @Override // tc.k
    public boolean f(l lVar) {
        lVar.n(this.f54584a.e(), 0, 3);
        this.f54584a.U(0);
        if (this.f54584a.K() != 4607062) {
            return false;
        }
        lVar.n(this.f54584a.e(), 0, 2);
        this.f54584a.U(0);
        if ((this.f54584a.N() & h.DEFAULT_SWIPE_ANIMATION_DURATION) != 0) {
            return false;
        }
        lVar.n(this.f54584a.e(), 0, 4);
        this.f54584a.U(0);
        int q10 = this.f54584a.q();
        lVar.e();
        lVar.h(q10);
        lVar.n(this.f54584a.e(), 0, 4);
        this.f54584a.U(0);
        if (this.f54584a.q() != 0) {
            return false;
        }
        return true;
    }

    @Override // tc.k
    public void release() {
    }
}
