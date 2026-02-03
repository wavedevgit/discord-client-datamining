package dd;

import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import com.google.android.exoplayer2.Format;
import dd.i0;
import java.util.Collections;
import lc.l0;
import nc.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class s implements m {

    /* renamed from: a  reason: collision with root package name */
    private final String f21616a;

    /* renamed from: b  reason: collision with root package name */
    private final ne.h0 f21617b;

    /* renamed from: c  reason: collision with root package name */
    private final ne.g0 f21618c;

    /* renamed from: d  reason: collision with root package name */
    private tc.b0 f21619d;

    /* renamed from: e  reason: collision with root package name */
    private String f21620e;

    /* renamed from: f  reason: collision with root package name */
    private Format f21621f;

    /* renamed from: g  reason: collision with root package name */
    private int f21622g;

    /* renamed from: h  reason: collision with root package name */
    private int f21623h;

    /* renamed from: i  reason: collision with root package name */
    private int f21624i;

    /* renamed from: j  reason: collision with root package name */
    private int f21625j;

    /* renamed from: k  reason: collision with root package name */
    private long f21626k;

    /* renamed from: l  reason: collision with root package name */
    private boolean f21627l;

    /* renamed from: m  reason: collision with root package name */
    private int f21628m;

    /* renamed from: n  reason: collision with root package name */
    private int f21629n;

    /* renamed from: o  reason: collision with root package name */
    private int f21630o;

    /* renamed from: p  reason: collision with root package name */
    private boolean f21631p;

    /* renamed from: q  reason: collision with root package name */
    private long f21632q;

    /* renamed from: r  reason: collision with root package name */
    private int f21633r;

    /* renamed from: s  reason: collision with root package name */
    private long f21634s;

    /* renamed from: t  reason: collision with root package name */
    private int f21635t;

    /* renamed from: u  reason: collision with root package name */
    private String f21636u;

    public s(String str) {
        this.f21616a = str;
        ne.h0 h0Var = new ne.h0((int) IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET);
        this.f21617b = h0Var;
        this.f21618c = new ne.g0(h0Var.e());
        this.f21626k = -9223372036854775807L;
    }

    private static long a(ne.g0 g0Var) {
        return g0Var.h((g0Var.h(2) + 1) * 8);
    }

    private void g(ne.g0 g0Var) {
        if (!g0Var.g()) {
            this.f21627l = true;
            l(g0Var);
        } else if (!this.f21627l) {
            return;
        }
        if (this.f21628m == 0) {
            if (this.f21629n == 0) {
                k(g0Var, j(g0Var));
                if (this.f21631p) {
                    g0Var.r((int) this.f21632q);
                    return;
                }
                return;
            }
            throw l0.a(null, null);
        }
        throw l0.a(null, null);
    }

    private int h(ne.g0 g0Var) {
        int b10 = g0Var.b();
        a.b e10 = nc.a.e(g0Var, true);
        this.f21636u = e10.f39891c;
        this.f21633r = e10.f39889a;
        this.f21635t = e10.f39890b;
        return b10 - g0Var.b();
    }

    private void i(ne.g0 g0Var) {
        int h10 = g0Var.h(3);
        this.f21630o = h10;
        if (h10 != 0) {
            if (h10 != 1) {
                if (h10 != 3 && h10 != 4 && h10 != 5) {
                    if (h10 != 6 && h10 != 7) {
                        throw new IllegalStateException();
                    }
                    g0Var.r(1);
                    return;
                }
                g0Var.r(6);
                return;
            }
            g0Var.r(9);
            return;
        }
        g0Var.r(8);
    }

    private int j(ne.g0 g0Var) {
        int h10;
        if (this.f21630o == 0) {
            int i10 = 0;
            do {
                h10 = g0Var.h(8);
                i10 += h10;
            } while (h10 == 255);
            return i10;
        }
        throw l0.a(null, null);
    }

    private void k(ne.g0 g0Var, int i10) {
        int e10 = g0Var.e();
        if ((e10 & 7) == 0) {
            this.f21617b.U(e10 >> 3);
        } else {
            g0Var.i(this.f21617b.e(), 0, i10 * 8);
            this.f21617b.U(0);
        }
        this.f21619d.f(this.f21617b, i10);
        long j10 = this.f21626k;
        if (j10 != -9223372036854775807L) {
            this.f21619d.d(j10, 1, i10, 0, null);
            this.f21626k += this.f21634s;
        }
    }

    private void l(ne.g0 g0Var) {
        int i10;
        boolean g10;
        int h10 = g0Var.h(1);
        if (h10 == 1) {
            i10 = g0Var.h(1);
        } else {
            i10 = 0;
        }
        this.f21628m = i10;
        if (i10 == 0) {
            if (h10 == 1) {
                a(g0Var);
            }
            if (g0Var.g()) {
                this.f21629n = g0Var.h(6);
                int h11 = g0Var.h(4);
                int h12 = g0Var.h(3);
                if (h11 == 0 && h12 == 0) {
                    if (h10 == 0) {
                        int e10 = g0Var.e();
                        int h13 = h(g0Var);
                        g0Var.p(e10);
                        byte[] bArr = new byte[(h13 + 7) / 8];
                        g0Var.i(bArr, 0, h13);
                        Format G = new Format.b().U(this.f21620e).g0("audio/mp4a-latm").K(this.f21636u).J(this.f21635t).h0(this.f21633r).V(Collections.singletonList(bArr)).X(this.f21616a).G();
                        if (!G.equals(this.f21621f)) {
                            this.f21621f = G;
                            this.f21634s = 1024000000 / G.K;
                            this.f21619d.b(G);
                        }
                    } else {
                        g0Var.r(((int) a(g0Var)) - h(g0Var));
                    }
                    i(g0Var);
                    boolean g11 = g0Var.g();
                    this.f21631p = g11;
                    this.f21632q = 0L;
                    if (g11) {
                        if (h10 == 1) {
                            this.f21632q = a(g0Var);
                        } else {
                            do {
                                g10 = g0Var.g();
                                this.f21632q = (this.f21632q << 8) + g0Var.h(8);
                            } while (g10);
                        }
                    }
                    if (g0Var.g()) {
                        g0Var.r(8);
                        return;
                    }
                    return;
                }
                throw l0.a(null, null);
            }
            throw l0.a(null, null);
        }
        throw l0.a(null, null);
    }

    private void m(int i10) {
        this.f21617b.Q(i10);
        this.f21618c.n(this.f21617b.e());
    }

    @Override // dd.m
    public void b(ne.h0 h0Var) {
        ne.a.i(this.f21619d);
        while (h0Var.a() > 0) {
            int i10 = this.f21622g;
            if (i10 != 0) {
                if (i10 != 1) {
                    if (i10 != 2) {
                        if (i10 == 3) {
                            int min = Math.min(h0Var.a(), this.f21624i - this.f21623h);
                            h0Var.l(this.f21618c.f40067a, this.f21623h, min);
                            int i11 = this.f21623h + min;
                            this.f21623h = i11;
                            if (i11 == this.f21624i) {
                                this.f21618c.p(0);
                                g(this.f21618c);
                                this.f21622g = 0;
                            }
                        } else {
                            throw new IllegalStateException();
                        }
                    } else {
                        int H = ((this.f21625j & (-225)) << 8) | h0Var.H();
                        this.f21624i = H;
                        if (H > this.f21617b.e().length) {
                            m(this.f21624i);
                        }
                        this.f21623h = 0;
                        this.f21622g = 3;
                    }
                } else {
                    int H2 = h0Var.H();
                    if ((H2 & 224) == 224) {
                        this.f21625j = H2;
                        this.f21622g = 2;
                    } else if (H2 != 86) {
                        this.f21622g = 0;
                    }
                }
            } else if (h0Var.H() == 86) {
                this.f21622g = 1;
            }
        }
    }

    @Override // dd.m
    public void c() {
        this.f21622g = 0;
        this.f21626k = -9223372036854775807L;
        this.f21627l = false;
    }

    @Override // dd.m
    public void e(long j10, int i10) {
        if (j10 != -9223372036854775807L) {
            this.f21626k = j10;
        }
    }

    @Override // dd.m
    public void f(tc.m mVar, i0.d dVar) {
        dVar.a();
        this.f21619d = mVar.c(dVar.c(), 1);
        this.f21620e = dVar.b();
    }

    @Override // dd.m
    public void d() {
    }
}
