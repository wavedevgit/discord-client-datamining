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
    public static final p f56066q = new p() { // from class: yc.b
        @Override // uc.p
        public final k[] b() {
            return c.b();
        }
    };

    /* renamed from: f  reason: collision with root package name */
    private m f56072f;

    /* renamed from: h  reason: collision with root package name */
    private boolean f56074h;

    /* renamed from: i  reason: collision with root package name */
    private long f56075i;

    /* renamed from: j  reason: collision with root package name */
    private int f56076j;

    /* renamed from: k  reason: collision with root package name */
    private int f56077k;

    /* renamed from: l  reason: collision with root package name */
    private int f56078l;

    /* renamed from: m  reason: collision with root package name */
    private long f56079m;

    /* renamed from: n  reason: collision with root package name */
    private boolean f56080n;

    /* renamed from: o  reason: collision with root package name */
    private a f56081o;

    /* renamed from: p  reason: collision with root package name */
    private f f56082p;

    /* renamed from: a  reason: collision with root package name */
    private final h0 f56067a = new h0(4);

    /* renamed from: b  reason: collision with root package name */
    private final h0 f56068b = new h0(9);

    /* renamed from: c  reason: collision with root package name */
    private final h0 f56069c = new h0(11);

    /* renamed from: d  reason: collision with root package name */
    private final h0 f56070d = new h0();

    /* renamed from: e  reason: collision with root package name */
    private final d f56071e = new d();

    /* renamed from: g  reason: collision with root package name */
    private int f56073g = 1;

    public static /* synthetic */ k[] b() {
        return new k[]{new c()};
    }

    private void e() {
        if (!this.f56080n) {
            this.f56072f.j(new z.b(-9223372036854775807L));
            this.f56080n = true;
        }
    }

    private long f() {
        if (this.f56074h) {
            return this.f56075i + this.f56079m;
        }
        if (this.f56071e.d() == -9223372036854775807L) {
            return 0L;
        }
        return this.f56079m;
    }

    private h0 g(l lVar) {
        if (this.f56078l > this.f56070d.b()) {
            h0 h0Var = this.f56070d;
            h0Var.S(new byte[Math.max(h0Var.b() * 2, this.f56078l)], 0);
        } else {
            this.f56070d.U(0);
        }
        this.f56070d.T(this.f56078l);
        lVar.readFully(this.f56070d.e(), 0, this.f56078l);
        return this.f56070d;
    }

    private boolean i(l lVar) {
        boolean z10;
        boolean z11 = false;
        if (!lVar.f(this.f56068b.e(), 0, 9, true)) {
            return false;
        }
        this.f56068b.U(0);
        this.f56068b.V(4);
        int H = this.f56068b.H();
        if ((H & 4) != 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        if ((H & 1) != 0) {
            z11 = true;
        }
        if (z10 && this.f56081o == null) {
            this.f56081o = new a(this.f56072f.c(8, 1));
        }
        if (z11 && this.f56082p == null) {
            this.f56082p = new f(this.f56072f.c(9, 2));
        }
        this.f56072f.q();
        this.f56076j = this.f56068b.q() - 5;
        this.f56073g = 2;
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
            int r2 = r9.f56077k
            r3 = 8
            r4 = -9223372036854775807(0x8000000000000001, double:-4.9E-324)
            r6 = 1
            if (r2 != r3) goto L23
            yc.a r3 = r9.f56081o
            if (r3 == 0) goto L23
            r9.e()
            yc.a r2 = r9.f56081o
            oe.h0 r10 = r9.g(r10)
            boolean r10 = r2.a(r10, r0)
        L21:
            r0 = r6
            goto L75
        L23:
            r3 = 9
            if (r2 != r3) goto L39
            yc.f r3 = r9.f56082p
            if (r3 == 0) goto L39
            r9.e()
            yc.f r2 = r9.f56082p
            oe.h0 r10 = r9.g(r10)
            boolean r10 = r2.a(r10, r0)
            goto L21
        L39:
            r3 = 18
            if (r2 != r3) goto L6e
            boolean r2 = r9.f56080n
            if (r2 != 0) goto L6e
            yc.d r2 = r9.f56071e
            oe.h0 r10 = r9.g(r10)
            boolean r10 = r2.a(r10, r0)
            yc.d r0 = r9.f56071e
            long r0 = r0.d()
            int r2 = (r0 > r4 ? 1 : (r0 == r4 ? 0 : -1))
            if (r2 == 0) goto L21
            uc.m r2 = r9.f56072f
            uc.x r3 = new uc.x
            yc.d r7 = r9.f56071e
            long[] r7 = r7.e()
            yc.d r8 = r9.f56071e
            long[] r8 = r8.f()
            r3.<init>(r7, r8, r0)
            r2.j(r3)
            r9.f56080n = r6
            goto L21
        L6e:
            int r0 = r9.f56078l
            r10.k(r0)
            r10 = 0
            r0 = r10
        L75:
            boolean r1 = r9.f56074h
            if (r1 != 0) goto L8f
            if (r10 == 0) goto L8f
            r9.f56074h = r6
            yc.d r10 = r9.f56071e
            long r1 = r10.d()
            int r10 = (r1 > r4 ? 1 : (r1 == r4 ? 0 : -1))
            if (r10 != 0) goto L8b
            long r1 = r9.f56079m
            long r1 = -r1
            goto L8d
        L8b:
            r1 = 0
        L8d:
            r9.f56075i = r1
        L8f:
            r10 = 4
            r9.f56076j = r10
            r10 = 2
            r9.f56073g = r10
            return r0
        */
        throw new UnsupportedOperationException("Method not decompiled: yc.c.j(uc.l):boolean");
    }

    private boolean k(l lVar) {
        if (!lVar.f(this.f56069c.e(), 0, 11, true)) {
            return false;
        }
        this.f56069c.U(0);
        this.f56077k = this.f56069c.H();
        this.f56078l = this.f56069c.K();
        this.f56079m = this.f56069c.K();
        this.f56079m = ((this.f56069c.H() << 24) | this.f56079m) * 1000;
        this.f56069c.V(3);
        this.f56073g = 4;
        return true;
    }

    private void l(l lVar) {
        lVar.k(this.f56076j);
        this.f56076j = 0;
        this.f56073g = 3;
    }

    @Override // uc.k
    public void a(long j10, long j11) {
        if (j10 == 0) {
            this.f56073g = 1;
            this.f56074h = false;
        } else {
            this.f56073g = 3;
        }
        this.f56076j = 0;
    }

    @Override // uc.k
    public void c(m mVar) {
        this.f56072f = mVar;
    }

    @Override // uc.k
    public boolean d(l lVar) {
        lVar.n(this.f56067a.e(), 0, 3);
        this.f56067a.U(0);
        if (this.f56067a.K() != 4607062) {
            return false;
        }
        lVar.n(this.f56067a.e(), 0, 2);
        this.f56067a.U(0);
        if ((this.f56067a.N() & h.DEFAULT_SWIPE_ANIMATION_DURATION) != 0) {
            return false;
        }
        lVar.n(this.f56067a.e(), 0, 4);
        this.f56067a.U(0);
        int q10 = this.f56067a.q();
        lVar.e();
        lVar.h(q10);
        lVar.n(this.f56067a.e(), 0, 4);
        this.f56067a.U(0);
        if (this.f56067a.q() != 0) {
            return false;
        }
        return true;
    }

    @Override // uc.k
    public int h(l lVar, y yVar) {
        oe.a.i(this.f56072f);
        while (true) {
            int i10 = this.f56073g;
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
