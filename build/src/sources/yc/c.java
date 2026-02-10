package yc;

import androidx.recyclerview.widget.h;
import oe.h0;
import uc.k;
import uc.l;
import uc.m;
import uc.p;
import uc.y;
import uc.z;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class c implements k {

    /* renamed from: q  reason: collision with root package name */
    public static final p f55566q = new p() { // from class: yc.b
        @Override // uc.p
        public final k[] b() {
            return c.b();
        }
    };

    /* renamed from: f  reason: collision with root package name */
    private m f55572f;

    /* renamed from: h  reason: collision with root package name */
    private boolean f55574h;

    /* renamed from: i  reason: collision with root package name */
    private long f55575i;

    /* renamed from: j  reason: collision with root package name */
    private int f55576j;

    /* renamed from: k  reason: collision with root package name */
    private int f55577k;

    /* renamed from: l  reason: collision with root package name */
    private int f55578l;

    /* renamed from: m  reason: collision with root package name */
    private long f55579m;

    /* renamed from: n  reason: collision with root package name */
    private boolean f55580n;

    /* renamed from: o  reason: collision with root package name */
    private a f55581o;

    /* renamed from: p  reason: collision with root package name */
    private f f55582p;

    /* renamed from: a  reason: collision with root package name */
    private final h0 f55567a = new h0(4);

    /* renamed from: b  reason: collision with root package name */
    private final h0 f55568b = new h0(9);

    /* renamed from: c  reason: collision with root package name */
    private final h0 f55569c = new h0(11);

    /* renamed from: d  reason: collision with root package name */
    private final h0 f55570d = new h0();

    /* renamed from: e  reason: collision with root package name */
    private final d f55571e = new d();

    /* renamed from: g  reason: collision with root package name */
    private int f55573g = 1;

    public static /* synthetic */ k[] b() {
        return new k[]{new c()};
    }

    private void e() {
        if (!this.f55580n) {
            this.f55572f.j(new z.b(-9223372036854775807L));
            this.f55580n = true;
        }
    }

    private long f() {
        if (this.f55574h) {
            return this.f55575i + this.f55579m;
        }
        if (this.f55571e.d() == -9223372036854775807L) {
            return 0L;
        }
        return this.f55579m;
    }

    private h0 g(l lVar) {
        if (this.f55578l > this.f55570d.b()) {
            h0 h0Var = this.f55570d;
            h0Var.S(new byte[Math.max(h0Var.b() * 2, this.f55578l)], 0);
        } else {
            this.f55570d.U(0);
        }
        this.f55570d.T(this.f55578l);
        lVar.readFully(this.f55570d.e(), 0, this.f55578l);
        return this.f55570d;
    }

    private boolean i(l lVar) {
        boolean z10;
        boolean z11 = false;
        if (!lVar.f(this.f55568b.e(), 0, 9, true)) {
            return false;
        }
        this.f55568b.U(0);
        this.f55568b.V(4);
        int H = this.f55568b.H();
        if ((H & 4) != 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        if ((H & 1) != 0) {
            z11 = true;
        }
        if (z10 && this.f55581o == null) {
            this.f55581o = new a(this.f55572f.c(8, 1));
        }
        if (z11 && this.f55582p == null) {
            this.f55582p = new f(this.f55572f.c(9, 2));
        }
        this.f55572f.q();
        this.f55576j = this.f55568b.q() - 5;
        this.f55573g = 2;
        return true;
    }

    /* JADX WARN: Removed duplicated region for block: B:26:0x0087  */
    /* JADX WARN: Removed duplicated region for block: B:27:0x008b  */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private boolean j(uc.l r10) {
        /*
            r9 = this;
            long r0 = r9.f()
            int r2 = r9.f55577k
            r3 = 8
            r4 = -9223372036854775807(0x8000000000000001, double:-4.9E-324)
            r6 = 1
            if (r2 != r3) goto L23
            yc.a r3 = r9.f55581o
            if (r3 == 0) goto L23
            r9.e()
            yc.a r2 = r9.f55581o
            oe.h0 r10 = r9.g(r10)
            boolean r10 = r2.a(r10, r0)
        L21:
            r0 = r6
            goto L75
        L23:
            r3 = 9
            if (r2 != r3) goto L39
            yc.f r3 = r9.f55582p
            if (r3 == 0) goto L39
            r9.e()
            yc.f r2 = r9.f55582p
            oe.h0 r10 = r9.g(r10)
            boolean r10 = r2.a(r10, r0)
            goto L21
        L39:
            r3 = 18
            if (r2 != r3) goto L6e
            boolean r2 = r9.f55580n
            if (r2 != 0) goto L6e
            yc.d r2 = r9.f55571e
            oe.h0 r10 = r9.g(r10)
            boolean r10 = r2.a(r10, r0)
            yc.d r0 = r9.f55571e
            long r0 = r0.d()
            int r2 = (r0 > r4 ? 1 : (r0 == r4 ? 0 : -1))
            if (r2 == 0) goto L21
            uc.m r2 = r9.f55572f
            uc.x r3 = new uc.x
            yc.d r7 = r9.f55571e
            long[] r7 = r7.e()
            yc.d r8 = r9.f55571e
            long[] r8 = r8.f()
            r3.<init>(r7, r8, r0)
            r2.j(r3)
            r9.f55580n = r6
            goto L21
        L6e:
            int r0 = r9.f55578l
            r10.k(r0)
            r10 = 0
            r0 = r10
        L75:
            boolean r1 = r9.f55574h
            if (r1 != 0) goto L8f
            if (r10 == 0) goto L8f
            r9.f55574h = r6
            yc.d r10 = r9.f55571e
            long r1 = r10.d()
            int r10 = (r1 > r4 ? 1 : (r1 == r4 ? 0 : -1))
            if (r10 != 0) goto L8b
            long r1 = r9.f55579m
            long r1 = -r1
            goto L8d
        L8b:
            r1 = 0
        L8d:
            r9.f55575i = r1
        L8f:
            r10 = 4
            r9.f55576j = r10
            r10 = 2
            r9.f55573g = r10
            return r0
        */
        throw new UnsupportedOperationException("Method not decompiled: yc.c.j(uc.l):boolean");
    }

    private boolean k(l lVar) {
        if (!lVar.f(this.f55569c.e(), 0, 11, true)) {
            return false;
        }
        this.f55569c.U(0);
        this.f55577k = this.f55569c.H();
        this.f55578l = this.f55569c.K();
        this.f55579m = this.f55569c.K();
        this.f55579m = ((this.f55569c.H() << 24) | this.f55579m) * 1000;
        this.f55569c.V(3);
        this.f55573g = 4;
        return true;
    }

    private void l(l lVar) {
        lVar.k(this.f55576j);
        this.f55576j = 0;
        this.f55573g = 3;
    }

    @Override // uc.k
    public void a(long j10, long j11) {
        if (j10 == 0) {
            this.f55573g = 1;
            this.f55574h = false;
        } else {
            this.f55573g = 3;
        }
        this.f55576j = 0;
    }

    @Override // uc.k
    public void c(m mVar) {
        this.f55572f = mVar;
    }

    @Override // uc.k
    public boolean d(l lVar) {
        lVar.n(this.f55567a.e(), 0, 3);
        this.f55567a.U(0);
        if (this.f55567a.K() != 4607062) {
            return false;
        }
        lVar.n(this.f55567a.e(), 0, 2);
        this.f55567a.U(0);
        if ((this.f55567a.N() & h.DEFAULT_SWIPE_ANIMATION_DURATION) != 0) {
            return false;
        }
        lVar.n(this.f55567a.e(), 0, 4);
        this.f55567a.U(0);
        int q10 = this.f55567a.q();
        lVar.e();
        lVar.h(q10);
        lVar.n(this.f55567a.e(), 0, 4);
        this.f55567a.U(0);
        if (this.f55567a.q() != 0) {
            return false;
        }
        return true;
    }

    @Override // uc.k
    public int h(l lVar, y yVar) {
        oe.a.i(this.f55572f);
        while (true) {
            int i10 = this.f55573g;
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

    @Override // uc.k
    public void release() {
    }
}
