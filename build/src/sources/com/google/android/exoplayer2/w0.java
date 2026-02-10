package com.google.android.exoplayer2;

import rd.r;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class w0 {

    /* renamed from: a  reason: collision with root package name */
    public final rd.p f14185a;

    /* renamed from: b  reason: collision with root package name */
    public final Object f14186b;

    /* renamed from: c  reason: collision with root package name */
    public final rd.m0[] f14187c;

    /* renamed from: d  reason: collision with root package name */
    public boolean f14188d;

    /* renamed from: e  reason: collision with root package name */
    public boolean f14189e;

    /* renamed from: f  reason: collision with root package name */
    public x0 f14190f;

    /* renamed from: g  reason: collision with root package name */
    public boolean f14191g;

    /* renamed from: h  reason: collision with root package name */
    private final boolean[] f14192h;

    /* renamed from: i  reason: collision with root package name */
    private final w1[] f14193i;

    /* renamed from: j  reason: collision with root package name */
    private final ke.q f14194j;

    /* renamed from: k  reason: collision with root package name */
    private final o1 f14195k;

    /* renamed from: l  reason: collision with root package name */
    private w0 f14196l;

    /* renamed from: m  reason: collision with root package name */
    private rd.w0 f14197m;

    /* renamed from: n  reason: collision with root package name */
    private ke.r f14198n;

    /* renamed from: o  reason: collision with root package name */
    private long f14199o;

    public w0(w1[] w1VarArr, long j10, ke.q qVar, me.b bVar, o1 o1Var, x0 x0Var, ke.r rVar) {
        this.f14193i = w1VarArr;
        this.f14199o = j10;
        this.f14194j = qVar;
        this.f14195k = o1Var;
        r.b bVar2 = x0Var.f14201a;
        this.f14186b = bVar2.f46437a;
        this.f14190f = x0Var;
        this.f14197m = rd.w0.f46509o;
        this.f14198n = rVar;
        this.f14187c = new rd.m0[w1VarArr.length];
        this.f14192h = new boolean[w1VarArr.length];
        this.f14185a = e(bVar2, o1Var, bVar, x0Var.f14202b, x0Var.f14204d);
    }

    private void c(rd.m0[] m0VarArr) {
        int i10 = 0;
        while (true) {
            w1[] w1VarArr = this.f14193i;
            if (i10 < w1VarArr.length) {
                if (w1VarArr[i10].e() == -2 && this.f14198n.c(i10)) {
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
                ke.r rVar = this.f14198n;
                if (i10 < rVar.f31722a) {
                    boolean c10 = rVar.c(i10);
                    com.google.android.exoplayer2.trackselection.g gVar = this.f14198n.f31724c[i10];
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
            w1[] w1VarArr = this.f14193i;
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
                ke.r rVar = this.f14198n;
                if (i10 < rVar.f31722a) {
                    boolean c10 = rVar.c(i10);
                    com.google.android.exoplayer2.trackselection.g gVar = this.f14198n.f31724c[i10];
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
        if (this.f14196l == null) {
            return true;
        }
        return false;
    }

    private static void u(o1 o1Var, rd.p pVar) {
        try {
            if (pVar instanceof rd.d) {
                o1Var.y(((rd.d) pVar).f46272d);
            } else {
                o1Var.y(pVar);
            }
        } catch (RuntimeException e10) {
            oe.y.d("MediaPeriodHolder", "Period release failed.", e10);
        }
    }

    public void A() {
        rd.p pVar = this.f14185a;
        if (pVar instanceof rd.d) {
            long j10 = this.f14190f.f14204d;
            if (j10 == -9223372036854775807L) {
                j10 = Long.MIN_VALUE;
            }
            ((rd.d) pVar).v(0L, j10);
        }
    }

    public long a(ke.r rVar, long j10, boolean z10) {
        return b(rVar, j10, z10, new boolean[this.f14193i.length]);
    }

    public long b(ke.r rVar, long j10, boolean z10, boolean[] zArr) {
        boolean z11;
        int i10 = 0;
        while (true) {
            boolean z12 = true;
            if (i10 >= rVar.f31722a) {
                break;
            }
            boolean[] zArr2 = this.f14192h;
            if (z10 || !rVar.b(this.f14198n, i10)) {
                z12 = false;
            }
            zArr2[i10] = z12;
            i10++;
        }
        g(this.f14187c);
        f();
        this.f14198n = rVar;
        h();
        long r10 = this.f14185a.r(rVar.f31724c, this.f14192h, this.f14187c, zArr, j10);
        c(this.f14187c);
        this.f14189e = false;
        int i11 = 0;
        while (true) {
            rd.m0[] m0VarArr = this.f14187c;
            if (i11 < m0VarArr.length) {
                if (m0VarArr[i11] != null) {
                    oe.a.g(rVar.c(i11));
                    if (this.f14193i[i11].e() != -2) {
                        this.f14189e = true;
                    }
                } else {
                    if (rVar.f31724c[i11] == null) {
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
        this.f14185a.f(y(j10));
    }

    public long i() {
        long j10;
        if (!this.f14188d) {
            return this.f14190f.f14202b;
        }
        if (this.f14189e) {
            j10 = this.f14185a.g();
        } else {
            j10 = Long.MIN_VALUE;
        }
        if (j10 == Long.MIN_VALUE) {
            return this.f14190f.f14205e;
        }
        return j10;
    }

    public w0 j() {
        return this.f14196l;
    }

    public long k() {
        if (!this.f14188d) {
            return 0L;
        }
        return this.f14185a.b();
    }

    public long l() {
        return this.f14199o;
    }

    public long m() {
        return this.f14190f.f14202b + this.f14199o;
    }

    public rd.w0 n() {
        return this.f14197m;
    }

    public ke.r o() {
        return this.f14198n;
    }

    public void p(float f10, Timeline timeline) {
        this.f14188d = true;
        this.f14197m = this.f14185a.s();
        ke.r v10 = v(f10, timeline);
        x0 x0Var = this.f14190f;
        long j10 = x0Var.f14202b;
        long j11 = x0Var.f14205e;
        if (j11 != -9223372036854775807L && j10 >= j11) {
            j10 = Math.max(0L, j11 - 1);
        }
        long a10 = a(v10, j10, false);
        long j12 = this.f14199o;
        x0 x0Var2 = this.f14190f;
        this.f14199o = j12 + (x0Var2.f14202b - a10);
        this.f14190f = x0Var2.b(a10);
    }

    public boolean q() {
        if (this.f14188d) {
            if (!this.f14189e || this.f14185a.g() == Long.MIN_VALUE) {
                return true;
            }
            return false;
        }
        return false;
    }

    public void s(long j10) {
        oe.a.g(r());
        if (this.f14188d) {
            this.f14185a.h(y(j10));
        }
    }

    public void t() {
        f();
        u(this.f14195k, this.f14185a);
    }

    public ke.r v(float f10, Timeline timeline) {
        com.google.android.exoplayer2.trackselection.g[] gVarArr;
        ke.r j10 = this.f14194j.j(this.f14193i, n(), this.f14190f.f14201a, timeline);
        for (com.google.android.exoplayer2.trackselection.g gVar : j10.f31724c) {
            if (gVar != null) {
                gVar.g(f10);
            }
        }
        return j10;
    }

    public void w(w0 w0Var) {
        if (w0Var == this.f14196l) {
            return;
        }
        f();
        this.f14196l = w0Var;
        h();
    }

    public void x(long j10) {
        this.f14199o = j10;
    }

    public long y(long j10) {
        return j10 - l();
    }

    public long z(long j10) {
        return j10 + l();
    }
}
