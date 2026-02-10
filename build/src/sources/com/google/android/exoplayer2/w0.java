package com.google.android.exoplayer2;

import rd.r;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class w0 {

    /* renamed from: a  reason: collision with root package name */
    public final rd.p f13608a;

    /* renamed from: b  reason: collision with root package name */
    public final Object f13609b;

    /* renamed from: c  reason: collision with root package name */
    public final rd.m0[] f13610c;

    /* renamed from: d  reason: collision with root package name */
    public boolean f13611d;

    /* renamed from: e  reason: collision with root package name */
    public boolean f13612e;

    /* renamed from: f  reason: collision with root package name */
    public x0 f13613f;

    /* renamed from: g  reason: collision with root package name */
    public boolean f13614g;

    /* renamed from: h  reason: collision with root package name */
    private final boolean[] f13615h;

    /* renamed from: i  reason: collision with root package name */
    private final w1[] f13616i;

    /* renamed from: j  reason: collision with root package name */
    private final ke.q f13617j;

    /* renamed from: k  reason: collision with root package name */
    private final o1 f13618k;

    /* renamed from: l  reason: collision with root package name */
    private w0 f13619l;

    /* renamed from: m  reason: collision with root package name */
    private rd.w0 f13620m;

    /* renamed from: n  reason: collision with root package name */
    private ke.r f13621n;

    /* renamed from: o  reason: collision with root package name */
    private long f13622o;

    public w0(w1[] w1VarArr, long j10, ke.q qVar, me.b bVar, o1 o1Var, x0 x0Var, ke.r rVar) {
        this.f13616i = w1VarArr;
        this.f13622o = j10;
        this.f13617j = qVar;
        this.f13618k = o1Var;
        r.b bVar2 = x0Var.f13624a;
        this.f13609b = bVar2.f47983a;
        this.f13613f = x0Var;
        this.f13620m = rd.w0.f48055o;
        this.f13621n = rVar;
        this.f13610c = new rd.m0[w1VarArr.length];
        this.f13615h = new boolean[w1VarArr.length];
        this.f13608a = e(bVar2, o1Var, bVar, x0Var.f13625b, x0Var.f13627d);
    }

    private void c(rd.m0[] m0VarArr) {
        int i10 = 0;
        while (true) {
            w1[] w1VarArr = this.f13616i;
            if (i10 < w1VarArr.length) {
                if (w1VarArr[i10].e() == -2 && this.f13621n.c(i10)) {
                    m0VarArr[i10] = new rd.k();
                }
                i10++;
            } else {
                return;
            }
        }
    }

    private static rd.p e(r.b bVar, o1 o1Var, me.b bVar2, long j10, long j11) {
        rd.p h10 = o1Var.h(bVar, bVar2, j10);
        if (j11 != -9223372036854775807L) {
            return new rd.d(h10, true, 0L, j11);
        }
        return h10;
    }

    private void f() {
        if (r()) {
            int i10 = 0;
            while (true) {
                ke.r rVar = this.f13621n;
                if (i10 < rVar.f30864a) {
                    boolean c10 = rVar.c(i10);
                    com.google.android.exoplayer2.trackselection.g gVar = this.f13621n.f30866c[i10];
                    if (c10 && gVar != null) {
                        gVar.disable();
                    }
                    i10++;
                } else {
                    return;
                }
            }
        }
    }

    private void g(rd.m0[] m0VarArr) {
        int i10 = 0;
        while (true) {
            w1[] w1VarArr = this.f13616i;
            if (i10 < w1VarArr.length) {
                if (w1VarArr[i10].e() == -2) {
                    m0VarArr[i10] = null;
                }
                i10++;
            } else {
                return;
            }
        }
    }

    private void h() {
        if (r()) {
            int i10 = 0;
            while (true) {
                ke.r rVar = this.f13621n;
                if (i10 < rVar.f30864a) {
                    boolean c10 = rVar.c(i10);
                    com.google.android.exoplayer2.trackselection.g gVar = this.f13621n.f30866c[i10];
                    if (c10 && gVar != null) {
                        gVar.enable();
                    }
                    i10++;
                } else {
                    return;
                }
            }
        }
    }

    private boolean r() {
        if (this.f13619l == null) {
            return true;
        }
        return false;
    }

    private static void u(o1 o1Var, rd.p pVar) {
        try {
            if (pVar instanceof rd.d) {
                o1Var.y(((rd.d) pVar).f47818d);
            } else {
                o1Var.y(pVar);
            }
        } catch (RuntimeException e10) {
            oe.y.d("MediaPeriodHolder", "Period release failed.", e10);
        }
    }

    public void A() {
        rd.p pVar = this.f13608a;
        if (pVar instanceof rd.d) {
            long j10 = this.f13613f.f13627d;
            if (j10 == -9223372036854775807L) {
                j10 = Long.MIN_VALUE;
            }
            ((rd.d) pVar).v(0L, j10);
        }
    }

    public long a(ke.r rVar, long j10, boolean z10) {
        return b(rVar, j10, z10, new boolean[this.f13616i.length]);
    }

    public long b(ke.r rVar, long j10, boolean z10, boolean[] zArr) {
        boolean z11;
        int i10 = 0;
        while (true) {
            boolean z12 = true;
            if (i10 >= rVar.f30864a) {
                break;
            }
            boolean[] zArr2 = this.f13615h;
            if (z10 || !rVar.b(this.f13621n, i10)) {
                z12 = false;
            }
            zArr2[i10] = z12;
            i10++;
        }
        g(this.f13610c);
        f();
        this.f13621n = rVar;
        h();
        long r10 = this.f13608a.r(rVar.f30866c, this.f13615h, this.f13610c, zArr, j10);
        c(this.f13610c);
        this.f13612e = false;
        int i11 = 0;
        while (true) {
            rd.m0[] m0VarArr = this.f13610c;
            if (i11 < m0VarArr.length) {
                if (m0VarArr[i11] != null) {
                    oe.a.g(rVar.c(i11));
                    if (this.f13616i[i11].e() != -2) {
                        this.f13612e = true;
                    }
                } else {
                    if (rVar.f30866c[i11] == null) {
                        z11 = true;
                    } else {
                        z11 = false;
                    }
                    oe.a.g(z11);
                }
                i11++;
            } else {
                return r10;
            }
        }
    }

    public void d(long j10) {
        oe.a.g(r());
        this.f13608a.f(y(j10));
    }

    public long i() {
        long j10;
        if (!this.f13611d) {
            return this.f13613f.f13625b;
        }
        if (this.f13612e) {
            j10 = this.f13608a.g();
        } else {
            j10 = Long.MIN_VALUE;
        }
        if (j10 == Long.MIN_VALUE) {
            return this.f13613f.f13628e;
        }
        return j10;
    }

    public w0 j() {
        return this.f13619l;
    }

    public long k() {
        if (!this.f13611d) {
            return 0L;
        }
        return this.f13608a.b();
    }

    public long l() {
        return this.f13622o;
    }

    public long m() {
        return this.f13613f.f13625b + this.f13622o;
    }

    public rd.w0 n() {
        return this.f13620m;
    }

    public ke.r o() {
        return this.f13621n;
    }

    public void p(float f10, Timeline timeline) {
        this.f13611d = true;
        this.f13620m = this.f13608a.s();
        ke.r v10 = v(f10, timeline);
        x0 x0Var = this.f13613f;
        long j10 = x0Var.f13625b;
        long j11 = x0Var.f13628e;
        if (j11 != -9223372036854775807L && j10 >= j11) {
            j10 = Math.max(0L, j11 - 1);
        }
        long a10 = a(v10, j10, false);
        long j12 = this.f13622o;
        x0 x0Var2 = this.f13613f;
        this.f13622o = j12 + (x0Var2.f13625b - a10);
        this.f13613f = x0Var2.b(a10);
    }

    public boolean q() {
        if (this.f13611d) {
            if (!this.f13612e || this.f13608a.g() == Long.MIN_VALUE) {
                return true;
            }
            return false;
        }
        return false;
    }

    public void s(long j10) {
        oe.a.g(r());
        if (this.f13611d) {
            this.f13608a.h(y(j10));
        }
    }

    public void t() {
        f();
        u(this.f13618k, this.f13608a);
    }

    public ke.r v(float f10, Timeline timeline) {
        com.google.android.exoplayer2.trackselection.g[] gVarArr;
        ke.r j10 = this.f13617j.j(this.f13616i, n(), this.f13613f.f13624a, timeline);
        for (com.google.android.exoplayer2.trackselection.g gVar : j10.f30866c) {
            if (gVar != null) {
                gVar.g(f10);
            }
        }
        return j10;
    }

    public void w(w0 w0Var) {
        if (w0Var == this.f13619l) {
            return;
        }
        f();
        this.f13619l = w0Var;
        h();
    }

    public void x(long j10) {
        this.f13622o = j10;
    }

    public long y(long j10) {
        return j10 - l();
    }

    public long z(long j10) {
        return j10 + l();
    }
}
