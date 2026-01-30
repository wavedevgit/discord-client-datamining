package com.google.android.exoplayer2;

import qd.r;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class w0 {

    /* renamed from: a  reason: collision with root package name */
    public final qd.p f14525a;

    /* renamed from: b  reason: collision with root package name */
    public final Object f14526b;

    /* renamed from: c  reason: collision with root package name */
    public final qd.m0[] f14527c;

    /* renamed from: d  reason: collision with root package name */
    public boolean f14528d;

    /* renamed from: e  reason: collision with root package name */
    public boolean f14529e;

    /* renamed from: f  reason: collision with root package name */
    public x0 f14530f;

    /* renamed from: g  reason: collision with root package name */
    public boolean f14531g;

    /* renamed from: h  reason: collision with root package name */
    private final boolean[] f14532h;

    /* renamed from: i  reason: collision with root package name */
    private final w1[] f14533i;

    /* renamed from: j  reason: collision with root package name */
    private final je.q f14534j;

    /* renamed from: k  reason: collision with root package name */
    private final o1 f14535k;

    /* renamed from: l  reason: collision with root package name */
    private w0 f14536l;

    /* renamed from: m  reason: collision with root package name */
    private qd.w0 f14537m;

    /* renamed from: n  reason: collision with root package name */
    private je.r f14538n;

    /* renamed from: o  reason: collision with root package name */
    private long f14539o;

    public w0(w1[] w1VarArr, long j10, je.q qVar, le.b bVar, o1 o1Var, x0 x0Var, je.r rVar) {
        this.f14533i = w1VarArr;
        this.f14539o = j10;
        this.f14534j = qVar;
        this.f14535k = o1Var;
        r.b bVar2 = x0Var.f14541a;
        this.f14526b = bVar2.f47300a;
        this.f14530f = x0Var;
        this.f14537m = qd.w0.f47372o;
        this.f14538n = rVar;
        this.f14527c = new qd.m0[w1VarArr.length];
        this.f14532h = new boolean[w1VarArr.length];
        this.f14525a = e(bVar2, o1Var, bVar, x0Var.f14542b, x0Var.f14544d);
    }

    private void c(qd.m0[] m0VarArr) {
        int i10 = 0;
        while (true) {
            w1[] w1VarArr = this.f14533i;
            if (i10 < w1VarArr.length) {
                if (w1VarArr[i10].e() == -2 && this.f14538n.c(i10)) {
                    m0VarArr[i10] = new qd.k();
                }
                i10++;
            } else {
                return;
            }
        }
    }

    private static qd.p e(r.b bVar, o1 o1Var, le.b bVar2, long j10, long j11) {
        qd.p h10 = o1Var.h(bVar, bVar2, j10);
        if (j11 != -9223372036854775807L) {
            return new qd.d(h10, true, 0L, j11);
        }
        return h10;
    }

    private void f() {
        if (r()) {
            int i10 = 0;
            while (true) {
                je.r rVar = this.f14538n;
                if (i10 < rVar.f32009a) {
                    boolean c10 = rVar.c(i10);
                    com.google.android.exoplayer2.trackselection.g gVar = this.f14538n.f32011c[i10];
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

    private void g(qd.m0[] m0VarArr) {
        int i10 = 0;
        while (true) {
            w1[] w1VarArr = this.f14533i;
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
                je.r rVar = this.f14538n;
                if (i10 < rVar.f32009a) {
                    boolean c10 = rVar.c(i10);
                    com.google.android.exoplayer2.trackselection.g gVar = this.f14538n.f32011c[i10];
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
        if (this.f14536l == null) {
            return true;
        }
        return false;
    }

    private static void u(o1 o1Var, qd.p pVar) {
        try {
            if (pVar instanceof qd.d) {
                o1Var.y(((qd.d) pVar).f47135d);
            } else {
                o1Var.y(pVar);
            }
        } catch (RuntimeException e10) {
            ne.y.d("MediaPeriodHolder", "Period release failed.", e10);
        }
    }

    public void A() {
        qd.p pVar = this.f14525a;
        if (pVar instanceof qd.d) {
            long j10 = this.f14530f.f14544d;
            if (j10 == -9223372036854775807L) {
                j10 = Long.MIN_VALUE;
            }
            ((qd.d) pVar).v(0L, j10);
        }
    }

    public long a(je.r rVar, long j10, boolean z10) {
        return b(rVar, j10, z10, new boolean[this.f14533i.length]);
    }

    public long b(je.r rVar, long j10, boolean z10, boolean[] zArr) {
        boolean z11;
        int i10 = 0;
        while (true) {
            boolean z12 = true;
            if (i10 >= rVar.f32009a) {
                break;
            }
            boolean[] zArr2 = this.f14532h;
            if (z10 || !rVar.b(this.f14538n, i10)) {
                z12 = false;
            }
            zArr2[i10] = z12;
            i10++;
        }
        g(this.f14527c);
        f();
        this.f14538n = rVar;
        h();
        long o10 = this.f14525a.o(rVar.f32011c, this.f14532h, this.f14527c, zArr, j10);
        c(this.f14527c);
        this.f14529e = false;
        int i11 = 0;
        while (true) {
            qd.m0[] m0VarArr = this.f14527c;
            if (i11 < m0VarArr.length) {
                if (m0VarArr[i11] != null) {
                    ne.a.g(rVar.c(i11));
                    if (this.f14533i[i11].e() != -2) {
                        this.f14529e = true;
                    }
                } else {
                    if (rVar.f32011c[i11] == null) {
                        z11 = true;
                    } else {
                        z11 = false;
                    }
                    ne.a.g(z11);
                }
                i11++;
            } else {
                return o10;
            }
        }
    }

    public void d(long j10) {
        ne.a.g(r());
        this.f14525a.f(y(j10));
    }

    public long i() {
        long j10;
        if (!this.f14528d) {
            return this.f14530f.f14542b;
        }
        if (this.f14529e) {
            j10 = this.f14525a.g();
        } else {
            j10 = Long.MIN_VALUE;
        }
        if (j10 == Long.MIN_VALUE) {
            return this.f14530f.f14545e;
        }
        return j10;
    }

    public w0 j() {
        return this.f14536l;
    }

    public long k() {
        if (!this.f14528d) {
            return 0L;
        }
        return this.f14525a.b();
    }

    public long l() {
        return this.f14539o;
    }

    public long m() {
        return this.f14530f.f14542b + this.f14539o;
    }

    public qd.w0 n() {
        return this.f14537m;
    }

    public je.r o() {
        return this.f14538n;
    }

    public void p(float f10, Timeline timeline) {
        this.f14528d = true;
        this.f14537m = this.f14525a.t();
        je.r v10 = v(f10, timeline);
        x0 x0Var = this.f14530f;
        long j10 = x0Var.f14542b;
        long j11 = x0Var.f14545e;
        if (j11 != -9223372036854775807L && j10 >= j11) {
            j10 = Math.max(0L, j11 - 1);
        }
        long a10 = a(v10, j10, false);
        long j12 = this.f14539o;
        x0 x0Var2 = this.f14530f;
        this.f14539o = j12 + (x0Var2.f14542b - a10);
        this.f14530f = x0Var2.b(a10);
    }

    public boolean q() {
        if (this.f14528d) {
            if (!this.f14529e || this.f14525a.g() == Long.MIN_VALUE) {
                return true;
            }
            return false;
        }
        return false;
    }

    public void s(long j10) {
        ne.a.g(r());
        if (this.f14528d) {
            this.f14525a.h(y(j10));
        }
    }

    public void t() {
        f();
        u(this.f14535k, this.f14525a);
    }

    public je.r v(float f10, Timeline timeline) {
        com.google.android.exoplayer2.trackselection.g[] gVarArr;
        je.r j10 = this.f14534j.j(this.f14533i, n(), this.f14530f.f14541a, timeline);
        for (com.google.android.exoplayer2.trackselection.g gVar : j10.f32011c) {
            if (gVar != null) {
                gVar.g(f10);
            }
        }
        return j10;
    }

    public void w(w0 w0Var) {
        if (w0Var == this.f14536l) {
            return;
        }
        f();
        this.f14536l = w0Var;
        h();
    }

    public void x(long j10) {
        this.f14539o = j10;
    }

    public long y(long j10) {
        return j10 - l();
    }

    public long z(long j10) {
        return j10 + l();
    }
}
