package com.google.android.exoplayer2;

import qd.r;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class w0 {

    /* renamed from: a  reason: collision with root package name */
    public final qd.p f13122a;

    /* renamed from: b  reason: collision with root package name */
    public final Object f13123b;

    /* renamed from: c  reason: collision with root package name */
    public final qd.m0[] f13124c;

    /* renamed from: d  reason: collision with root package name */
    public boolean f13125d;

    /* renamed from: e  reason: collision with root package name */
    public boolean f13126e;

    /* renamed from: f  reason: collision with root package name */
    public x0 f13127f;

    /* renamed from: g  reason: collision with root package name */
    public boolean f13128g;

    /* renamed from: h  reason: collision with root package name */
    private final boolean[] f13129h;

    /* renamed from: i  reason: collision with root package name */
    private final w1[] f13130i;

    /* renamed from: j  reason: collision with root package name */
    private final je.q f13131j;

    /* renamed from: k  reason: collision with root package name */
    private final o1 f13132k;

    /* renamed from: l  reason: collision with root package name */
    private w0 f13133l;

    /* renamed from: m  reason: collision with root package name */
    private qd.w0 f13134m;

    /* renamed from: n  reason: collision with root package name */
    private je.r f13135n;

    /* renamed from: o  reason: collision with root package name */
    private long f13136o;

    public w0(w1[] w1VarArr, long j10, je.q qVar, le.b bVar, o1 o1Var, x0 x0Var, je.r rVar) {
        this.f13130i = w1VarArr;
        this.f13136o = j10;
        this.f13131j = qVar;
        this.f13132k = o1Var;
        r.b bVar2 = x0Var.f13138a;
        this.f13123b = bVar2.f47705a;
        this.f13127f = x0Var;
        this.f13134m = qd.w0.f47777o;
        this.f13135n = rVar;
        this.f13124c = new qd.m0[w1VarArr.length];
        this.f13129h = new boolean[w1VarArr.length];
        this.f13122a = e(bVar2, o1Var, bVar, x0Var.f13139b, x0Var.f13141d);
    }

    private void c(qd.m0[] m0VarArr) {
        int i10 = 0;
        while (true) {
            w1[] w1VarArr = this.f13130i;
            if (i10 < w1VarArr.length) {
                if (w1VarArr[i10].e() == -2 && this.f13135n.c(i10)) {
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
                je.r rVar = this.f13135n;
                if (i10 < rVar.f31543a) {
                    boolean c10 = rVar.c(i10);
                    com.google.android.exoplayer2.trackselection.g gVar = this.f13135n.f31545c[i10];
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
            w1[] w1VarArr = this.f13130i;
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
                je.r rVar = this.f13135n;
                if (i10 < rVar.f31543a) {
                    boolean c10 = rVar.c(i10);
                    com.google.android.exoplayer2.trackselection.g gVar = this.f13135n.f31545c[i10];
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
        if (this.f13133l == null) {
            return true;
        }
        return false;
    }

    private static void u(o1 o1Var, qd.p pVar) {
        try {
            if (pVar instanceof qd.d) {
                o1Var.y(((qd.d) pVar).f47540d);
            } else {
                o1Var.y(pVar);
            }
        } catch (RuntimeException e10) {
            ne.y.d("MediaPeriodHolder", "Period release failed.", e10);
        }
    }

    public void A() {
        qd.p pVar = this.f13122a;
        if (pVar instanceof qd.d) {
            long j10 = this.f13127f.f13141d;
            if (j10 == -9223372036854775807L) {
                j10 = Long.MIN_VALUE;
            }
            ((qd.d) pVar).v(0L, j10);
        }
    }

    public long a(je.r rVar, long j10, boolean z10) {
        return b(rVar, j10, z10, new boolean[this.f13130i.length]);
    }

    public long b(je.r rVar, long j10, boolean z10, boolean[] zArr) {
        boolean z11;
        int i10 = 0;
        while (true) {
            boolean z12 = true;
            if (i10 >= rVar.f31543a) {
                break;
            }
            boolean[] zArr2 = this.f13129h;
            if (z10 || !rVar.b(this.f13135n, i10)) {
                z12 = false;
            }
            zArr2[i10] = z12;
            i10++;
        }
        g(this.f13124c);
        f();
        this.f13135n = rVar;
        h();
        long o10 = this.f13122a.o(rVar.f31545c, this.f13129h, this.f13124c, zArr, j10);
        c(this.f13124c);
        this.f13126e = false;
        int i11 = 0;
        while (true) {
            qd.m0[] m0VarArr = this.f13124c;
            if (i11 < m0VarArr.length) {
                if (m0VarArr[i11] != null) {
                    ne.a.g(rVar.c(i11));
                    if (this.f13130i[i11].e() != -2) {
                        this.f13126e = true;
                    }
                } else {
                    if (rVar.f31545c[i11] == null) {
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
        this.f13122a.f(y(j10));
    }

    public long i() {
        long j10;
        if (!this.f13125d) {
            return this.f13127f.f13139b;
        }
        if (this.f13126e) {
            j10 = this.f13122a.g();
        } else {
            j10 = Long.MIN_VALUE;
        }
        if (j10 == Long.MIN_VALUE) {
            return this.f13127f.f13142e;
        }
        return j10;
    }

    public w0 j() {
        return this.f13133l;
    }

    public long k() {
        if (!this.f13125d) {
            return 0L;
        }
        return this.f13122a.b();
    }

    public long l() {
        return this.f13136o;
    }

    public long m() {
        return this.f13127f.f13139b + this.f13136o;
    }

    public qd.w0 n() {
        return this.f13134m;
    }

    public je.r o() {
        return this.f13135n;
    }

    public void p(float f10, Timeline timeline) {
        this.f13125d = true;
        this.f13134m = this.f13122a.t();
        je.r v10 = v(f10, timeline);
        x0 x0Var = this.f13127f;
        long j10 = x0Var.f13139b;
        long j11 = x0Var.f13142e;
        if (j11 != -9223372036854775807L && j10 >= j11) {
            j10 = Math.max(0L, j11 - 1);
        }
        long a10 = a(v10, j10, false);
        long j12 = this.f13136o;
        x0 x0Var2 = this.f13127f;
        this.f13136o = j12 + (x0Var2.f13139b - a10);
        this.f13127f = x0Var2.b(a10);
    }

    public boolean q() {
        if (this.f13125d) {
            if (!this.f13126e || this.f13122a.g() == Long.MIN_VALUE) {
                return true;
            }
            return false;
        }
        return false;
    }

    public void s(long j10) {
        ne.a.g(r());
        if (this.f13125d) {
            this.f13122a.h(y(j10));
        }
    }

    public void t() {
        f();
        u(this.f13132k, this.f13122a);
    }

    public je.r v(float f10, Timeline timeline) {
        com.google.android.exoplayer2.trackselection.g[] gVarArr;
        je.r j10 = this.f13131j.j(this.f13130i, n(), this.f13127f.f13138a, timeline);
        for (com.google.android.exoplayer2.trackselection.g gVar : j10.f31545c) {
            if (gVar != null) {
                gVar.g(f10);
            }
        }
        return j10;
    }

    public void w(w0 w0Var) {
        if (w0Var == this.f13133l) {
            return;
        }
        f();
        this.f13133l = w0Var;
        h();
    }

    public void x(long j10) {
        this.f13136o = j10;
    }

    public long y(long j10) {
        return j10 - l();
    }

    public long z(long j10) {
        return j10 + l();
    }
}
