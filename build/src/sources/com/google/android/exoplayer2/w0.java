package com.google.android.exoplayer2;

import qd.r;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class w0 {

    /* renamed from: a  reason: collision with root package name */
    public final qd.p f13507a;

    /* renamed from: b  reason: collision with root package name */
    public final Object f13508b;

    /* renamed from: c  reason: collision with root package name */
    public final qd.m0[] f13509c;

    /* renamed from: d  reason: collision with root package name */
    public boolean f13510d;

    /* renamed from: e  reason: collision with root package name */
    public boolean f13511e;

    /* renamed from: f  reason: collision with root package name */
    public x0 f13512f;

    /* renamed from: g  reason: collision with root package name */
    public boolean f13513g;

    /* renamed from: h  reason: collision with root package name */
    private final boolean[] f13514h;

    /* renamed from: i  reason: collision with root package name */
    private final w1[] f13515i;

    /* renamed from: j  reason: collision with root package name */
    private final je.q f13516j;

    /* renamed from: k  reason: collision with root package name */
    private final o1 f13517k;

    /* renamed from: l  reason: collision with root package name */
    private w0 f13518l;

    /* renamed from: m  reason: collision with root package name */
    private qd.w0 f13519m;

    /* renamed from: n  reason: collision with root package name */
    private je.r f13520n;

    /* renamed from: o  reason: collision with root package name */
    private long f13521o;

    public w0(w1[] w1VarArr, long j10, je.q qVar, le.b bVar, o1 o1Var, x0 x0Var, je.r rVar) {
        this.f13515i = w1VarArr;
        this.f13521o = j10;
        this.f13516j = qVar;
        this.f13517k = o1Var;
        r.b bVar2 = x0Var.f13523a;
        this.f13508b = bVar2.f47769a;
        this.f13512f = x0Var;
        this.f13519m = qd.w0.f47841o;
        this.f13520n = rVar;
        this.f13509c = new qd.m0[w1VarArr.length];
        this.f13514h = new boolean[w1VarArr.length];
        this.f13507a = e(bVar2, o1Var, bVar, x0Var.f13524b, x0Var.f13526d);
    }

    private void c(qd.m0[] m0VarArr) {
        int i10 = 0;
        while (true) {
            w1[] w1VarArr = this.f13515i;
            if (i10 < w1VarArr.length) {
                if (w1VarArr[i10].e() == -2 && this.f13520n.c(i10)) {
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
                je.r rVar = this.f13520n;
                if (i10 < rVar.f30892a) {
                    boolean c10 = rVar.c(i10);
                    com.google.android.exoplayer2.trackselection.g gVar = this.f13520n.f30894c[i10];
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
            w1[] w1VarArr = this.f13515i;
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
                je.r rVar = this.f13520n;
                if (i10 < rVar.f30892a) {
                    boolean c10 = rVar.c(i10);
                    com.google.android.exoplayer2.trackselection.g gVar = this.f13520n.f30894c[i10];
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
        if (this.f13518l == null) {
            return true;
        }
        return false;
    }

    private static void u(o1 o1Var, qd.p pVar) {
        try {
            if (pVar instanceof qd.d) {
                o1Var.y(((qd.d) pVar).f47604d);
            } else {
                o1Var.y(pVar);
            }
        } catch (RuntimeException e10) {
            ne.y.d("MediaPeriodHolder", "Period release failed.", e10);
        }
    }

    public void A() {
        qd.p pVar = this.f13507a;
        if (pVar instanceof qd.d) {
            long j10 = this.f13512f.f13526d;
            if (j10 == -9223372036854775807L) {
                j10 = Long.MIN_VALUE;
            }
            ((qd.d) pVar).v(0L, j10);
        }
    }

    public long a(je.r rVar, long j10, boolean z10) {
        return b(rVar, j10, z10, new boolean[this.f13515i.length]);
    }

    public long b(je.r rVar, long j10, boolean z10, boolean[] zArr) {
        boolean z11;
        int i10 = 0;
        while (true) {
            boolean z12 = true;
            if (i10 >= rVar.f30892a) {
                break;
            }
            boolean[] zArr2 = this.f13514h;
            if (z10 || !rVar.b(this.f13520n, i10)) {
                z12 = false;
            }
            zArr2[i10] = z12;
            i10++;
        }
        g(this.f13509c);
        f();
        this.f13520n = rVar;
        h();
        long o10 = this.f13507a.o(rVar.f30894c, this.f13514h, this.f13509c, zArr, j10);
        c(this.f13509c);
        this.f13511e = false;
        int i11 = 0;
        while (true) {
            qd.m0[] m0VarArr = this.f13509c;
            if (i11 < m0VarArr.length) {
                if (m0VarArr[i11] != null) {
                    ne.a.g(rVar.c(i11));
                    if (this.f13515i[i11].e() != -2) {
                        this.f13511e = true;
                    }
                } else {
                    if (rVar.f30894c[i11] == null) {
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
        this.f13507a.f(y(j10));
    }

    public long i() {
        long j10;
        if (!this.f13510d) {
            return this.f13512f.f13524b;
        }
        if (this.f13511e) {
            j10 = this.f13507a.g();
        } else {
            j10 = Long.MIN_VALUE;
        }
        if (j10 == Long.MIN_VALUE) {
            return this.f13512f.f13527e;
        }
        return j10;
    }

    public w0 j() {
        return this.f13518l;
    }

    public long k() {
        if (!this.f13510d) {
            return 0L;
        }
        return this.f13507a.b();
    }

    public long l() {
        return this.f13521o;
    }

    public long m() {
        return this.f13512f.f13524b + this.f13521o;
    }

    public qd.w0 n() {
        return this.f13519m;
    }

    public je.r o() {
        return this.f13520n;
    }

    public void p(float f10, Timeline timeline) {
        this.f13510d = true;
        this.f13519m = this.f13507a.t();
        je.r v10 = v(f10, timeline);
        x0 x0Var = this.f13512f;
        long j10 = x0Var.f13524b;
        long j11 = x0Var.f13527e;
        if (j11 != -9223372036854775807L && j10 >= j11) {
            j10 = Math.max(0L, j11 - 1);
        }
        long a10 = a(v10, j10, false);
        long j12 = this.f13521o;
        x0 x0Var2 = this.f13512f;
        this.f13521o = j12 + (x0Var2.f13524b - a10);
        this.f13512f = x0Var2.b(a10);
    }

    public boolean q() {
        if (this.f13510d) {
            if (!this.f13511e || this.f13507a.g() == Long.MIN_VALUE) {
                return true;
            }
            return false;
        }
        return false;
    }

    public void s(long j10) {
        ne.a.g(r());
        if (this.f13510d) {
            this.f13507a.h(y(j10));
        }
    }

    public void t() {
        f();
        u(this.f13517k, this.f13507a);
    }

    public je.r v(float f10, Timeline timeline) {
        com.google.android.exoplayer2.trackselection.g[] gVarArr;
        je.r j10 = this.f13516j.j(this.f13515i, n(), this.f13512f.f13523a, timeline);
        for (com.google.android.exoplayer2.trackselection.g gVar : j10.f30894c) {
            if (gVar != null) {
                gVar.g(f10);
            }
        }
        return j10;
    }

    public void w(w0 w0Var) {
        if (w0Var == this.f13518l) {
            return;
        }
        f();
        this.f13518l = w0Var;
        h();
    }

    public void x(long j10) {
        this.f13521o = j10;
    }

    public long y(long j10) {
        return j10 - l();
    }

    public long z(long j10) {
        return j10 + l();
    }
}
