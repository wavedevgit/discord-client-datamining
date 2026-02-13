package com.google.android.exoplayer2;

import rd.r;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class w0 {

    /* renamed from: a  reason: collision with root package name */
    public final rd.p f14186a;

    /* renamed from: b  reason: collision with root package name */
    public final Object f14187b;

    /* renamed from: c  reason: collision with root package name */
    public final rd.m0[] f14188c;

    /* renamed from: d  reason: collision with root package name */
    public boolean f14189d;

    /* renamed from: e  reason: collision with root package name */
    public boolean f14190e;

    /* renamed from: f  reason: collision with root package name */
    public x0 f14191f;

    /* renamed from: g  reason: collision with root package name */
    public boolean f14192g;

    /* renamed from: h  reason: collision with root package name */
    private final boolean[] f14193h;

    /* renamed from: i  reason: collision with root package name */
    private final w1[] f14194i;

    /* renamed from: j  reason: collision with root package name */
    private final ke.q f14195j;

    /* renamed from: k  reason: collision with root package name */
    private final o1 f14196k;

    /* renamed from: l  reason: collision with root package name */
    private w0 f14197l;

    /* renamed from: m  reason: collision with root package name */
    private rd.w0 f14198m;

    /* renamed from: n  reason: collision with root package name */
    private ke.r f14199n;

    /* renamed from: o  reason: collision with root package name */
    private long f14200o;

    public w0(w1[] w1VarArr, long j10, ke.q qVar, me.b bVar, o1 o1Var, x0 x0Var, ke.r rVar) {
        this.f14194i = w1VarArr;
        this.f14200o = j10;
        this.f14195j = qVar;
        this.f14196k = o1Var;
        r.b bVar2 = x0Var.f14202a;
        this.f14187b = bVar2.f47006a;
        this.f14191f = x0Var;
        this.f14198m = rd.w0.f47078o;
        this.f14199n = rVar;
        this.f14188c = new rd.m0[w1VarArr.length];
        this.f14193h = new boolean[w1VarArr.length];
        this.f14186a = e(bVar2, o1Var, bVar, x0Var.f14203b, x0Var.f14205d);
    }

    private void c(rd.m0[] m0VarArr) {
        int i10 = 0;
        while (true) {
            w1[] w1VarArr = this.f14194i;
            if (i10 < w1VarArr.length) {
                if (w1VarArr[i10].e() == -2 && this.f14199n.c(i10)) {
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
                ke.r rVar = this.f14199n;
                if (i10 < rVar.f32291a) {
                    boolean c10 = rVar.c(i10);
                    com.google.android.exoplayer2.trackselection.g gVar = this.f14199n.f32293c[i10];
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
            w1[] w1VarArr = this.f14194i;
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
                ke.r rVar = this.f14199n;
                if (i10 < rVar.f32291a) {
                    boolean c10 = rVar.c(i10);
                    com.google.android.exoplayer2.trackselection.g gVar = this.f14199n.f32293c[i10];
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
        if (this.f14197l == null) {
            return true;
        }
        return false;
    }

    private static void u(o1 o1Var, rd.p pVar) {
        try {
            if (pVar instanceof rd.d) {
                o1Var.y(((rd.d) pVar).f46841d);
            } else {
                o1Var.y(pVar);
            }
        } catch (RuntimeException e10) {
            oe.y.d("MediaPeriodHolder", "Period release failed.", e10);
        }
    }

    public void A() {
        rd.p pVar = this.f14186a;
        if (pVar instanceof rd.d) {
            long j10 = this.f14191f.f14205d;
            if (j10 == -9223372036854775807L) {
                j10 = Long.MIN_VALUE;
            }
            ((rd.d) pVar).v(0L, j10);
        }
    }

    public long a(ke.r rVar, long j10, boolean z10) {
        return b(rVar, j10, z10, new boolean[this.f14194i.length]);
    }

    public long b(ke.r rVar, long j10, boolean z10, boolean[] zArr) {
        boolean z11;
        int i10 = 0;
        while (true) {
            boolean z12 = true;
            if (i10 >= rVar.f32291a) {
                break;
            }
            boolean[] zArr2 = this.f14193h;
            if (z10 || !rVar.b(this.f14199n, i10)) {
                z12 = false;
            }
            zArr2[i10] = z12;
            i10++;
        }
        g(this.f14188c);
        f();
        this.f14199n = rVar;
        h();
        long r10 = this.f14186a.r(rVar.f32293c, this.f14193h, this.f14188c, zArr, j10);
        c(this.f14188c);
        this.f14190e = false;
        int i11 = 0;
        while (true) {
            rd.m0[] m0VarArr = this.f14188c;
            if (i11 < m0VarArr.length) {
                if (m0VarArr[i11] != null) {
                    oe.a.g(rVar.c(i11));
                    if (this.f14194i[i11].e() != -2) {
                        this.f14190e = true;
                    }
                } else {
                    if (rVar.f32293c[i11] == null) {
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
        this.f14186a.f(y(j10));
    }

    public long i() {
        long j10;
        if (!this.f14189d) {
            return this.f14191f.f14203b;
        }
        if (this.f14190e) {
            j10 = this.f14186a.g();
        } else {
            j10 = Long.MIN_VALUE;
        }
        if (j10 == Long.MIN_VALUE) {
            return this.f14191f.f14206e;
        }
        return j10;
    }

    public w0 j() {
        return this.f14197l;
    }

    public long k() {
        if (!this.f14189d) {
            return 0L;
        }
        return this.f14186a.b();
    }

    public long l() {
        return this.f14200o;
    }

    public long m() {
        return this.f14191f.f14203b + this.f14200o;
    }

    public rd.w0 n() {
        return this.f14198m;
    }

    public ke.r o() {
        return this.f14199n;
    }

    public void p(float f10, Timeline timeline) {
        this.f14189d = true;
        this.f14198m = this.f14186a.s();
        ke.r v10 = v(f10, timeline);
        x0 x0Var = this.f14191f;
        long j10 = x0Var.f14203b;
        long j11 = x0Var.f14206e;
        if (j11 != -9223372036854775807L && j10 >= j11) {
            j10 = Math.max(0L, j11 - 1);
        }
        long a10 = a(v10, j10, false);
        long j12 = this.f14200o;
        x0 x0Var2 = this.f14191f;
        this.f14200o = j12 + (x0Var2.f14203b - a10);
        this.f14191f = x0Var2.b(a10);
    }

    public boolean q() {
        if (this.f14189d) {
            if (!this.f14190e || this.f14186a.g() == Long.MIN_VALUE) {
                return true;
            }
            return false;
        }
        return false;
    }

    public void s(long j10) {
        oe.a.g(r());
        if (this.f14189d) {
            this.f14186a.h(y(j10));
        }
    }

    public void t() {
        f();
        u(this.f14196k, this.f14186a);
    }

    public ke.r v(float f10, Timeline timeline) {
        com.google.android.exoplayer2.trackselection.g[] gVarArr;
        ke.r j10 = this.f14195j.j(this.f14194i, n(), this.f14191f.f14202a, timeline);
        for (com.google.android.exoplayer2.trackselection.g gVar : j10.f32293c) {
            if (gVar != null) {
                gVar.g(f10);
            }
        }
        return j10;
    }

    public void w(w0 w0Var) {
        if (w0Var == this.f14197l) {
            return;
        }
        f();
        this.f14197l = w0Var;
        h();
    }

    public void x(long j10) {
        this.f14200o = j10;
    }

    public long y(long j10) {
        return j10 - l();
    }

    public long z(long j10) {
        return j10 + l();
    }
}
