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
    private final String f20646a;

    /* renamed from: b  reason: collision with root package name */
    private final ne.h0 f20647b;

    /* renamed from: c  reason: collision with root package name */
    private final ne.g0 f20648c;

    /* renamed from: d  reason: collision with root package name */
    private tc.b0 f20649d;

    /* renamed from: e  reason: collision with root package name */
    private String f20650e;

    /* renamed from: f  reason: collision with root package name */
    private Format f20651f;

    /* renamed from: g  reason: collision with root package name */
    private int f20652g;

    /* renamed from: h  reason: collision with root package name */
    private int f20653h;

    /* renamed from: i  reason: collision with root package name */
    private int f20654i;

    /* renamed from: j  reason: collision with root package name */
    private int f20655j;

    /* renamed from: k  reason: collision with root package name */
    private long f20656k;

    /* renamed from: l  reason: collision with root package name */
    private boolean f20657l;

    /* renamed from: m  reason: collision with root package name */
    private int f20658m;

    /* renamed from: n  reason: collision with root package name */
    private int f20659n;

    /* renamed from: o  reason: collision with root package name */
    private int f20660o;

    /* renamed from: p  reason: collision with root package name */
    private boolean f20661p;

    /* renamed from: q  reason: collision with root package name */
    private long f20662q;

    /* renamed from: r  reason: collision with root package name */
    private int f20663r;

    /* renamed from: s  reason: collision with root package name */
    private long f20664s;

    /* renamed from: t  reason: collision with root package name */
    private int f20665t;

    /* renamed from: u  reason: collision with root package name */
    private String f20666u;

    public s(String str) {
        this.f20646a = str;
        ne.h0 h0Var = new ne.h0((int) IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET);
        this.f20647b = h0Var;
        this.f20648c = new ne.g0(h0Var.e());
        this.f20656k = -9223372036854775807L;
    }

    private static long a(ne.g0 g0Var) {
        return g0Var.h((g0Var.h(2) + 1) * 8);
    }

    private void g(ne.g0 g0Var) {
        if (!g0Var.g()) {
            this.f20657l = true;
            l(g0Var);
        } else if (!this.f20657l) {
            return;
        }
        if (this.f20658m == 0) {
            if (this.f20659n == 0) {
                k(g0Var, j(g0Var));
                if (this.f20661p) {
                    g0Var.r((int) this.f20662q);
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
        this.f20666u = e10.f38745c;
        this.f20663r = e10.f38743a;
        this.f20665t = e10.f38744b;
        return b10 - g0Var.b();
    }

    private void i(ne.g0 g0Var) {
        int h10 = g0Var.h(3);
        this.f20660o = h10;
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
        if (this.f20660o == 0) {
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
            this.f20647b.U(e10 >> 3);
        } else {
            g0Var.i(this.f20647b.e(), 0, i10 * 8);
            this.f20647b.U(0);
        }
        this.f20649d.f(this.f20647b, i10);
        long j10 = this.f20656k;
        if (j10 != -9223372036854775807L) {
            this.f20649d.d(j10, 1, i10, 0, null);
            this.f20656k += this.f20664s;
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
        this.f20658m = i10;
        if (i10 == 0) {
            if (h10 == 1) {
                a(g0Var);
            }
            if (g0Var.g()) {
                this.f20659n = g0Var.h(6);
                int h11 = g0Var.h(4);
                int h12 = g0Var.h(3);
                if (h11 == 0 && h12 == 0) {
                    if (h10 == 0) {
                        int e10 = g0Var.e();
                        int h13 = h(g0Var);
                        g0Var.p(e10);
                        byte[] bArr = new byte[(h13 + 7) / 8];
                        g0Var.i(bArr, 0, h13);
                        Format G = new Format.b().U(this.f20650e).g0("audio/mp4a-latm").K(this.f20666u).J(this.f20665t).h0(this.f20663r).V(Collections.singletonList(bArr)).X(this.f20646a).G();
                        if (!G.equals(this.f20651f)) {
                            this.f20651f = G;
                            this.f20664s = 1024000000 / G.K;
                            this.f20649d.b(G);
                        }
                    } else {
                        g0Var.r(((int) a(g0Var)) - h(g0Var));
                    }
                    i(g0Var);
                    boolean g11 = g0Var.g();
                    this.f20661p = g11;
                    this.f20662q = 0L;
                    if (g11) {
                        if (h10 == 1) {
                            this.f20662q = a(g0Var);
                        } else {
                            do {
                                g10 = g0Var.g();
                                this.f20662q = (this.f20662q << 8) + g0Var.h(8);
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
        this.f20647b.Q(i10);
        this.f20648c.n(this.f20647b.e());
    }

    @Override // dd.m
    public void b(ne.h0 h0Var) {
        ne.a.i(this.f20649d);
        while (h0Var.a() > 0) {
            int i10 = this.f20652g;
            if (i10 != 0) {
                if (i10 != 1) {
                    if (i10 != 2) {
                        if (i10 == 3) {
                            int min = Math.min(h0Var.a(), this.f20654i - this.f20653h);
                            h0Var.l(this.f20648c.f38921a, this.f20653h, min);
                            int i11 = this.f20653h + min;
                            this.f20653h = i11;
                            if (i11 == this.f20654i) {
                                this.f20648c.p(0);
                                g(this.f20648c);
                                this.f20652g = 0;
                            }
                        } else {
                            throw new IllegalStateException();
                        }
                    } else {
                        int H = ((this.f20655j & (-225)) << 8) | h0Var.H();
                        this.f20654i = H;
                        if (H > this.f20647b.e().length) {
                            m(this.f20654i);
                        }
                        this.f20653h = 0;
                        this.f20652g = 3;
                    }
                } else {
                    int H2 = h0Var.H();
                    if ((H2 & 224) == 224) {
                        this.f20655j = H2;
                        this.f20652g = 2;
                    } else if (H2 != 86) {
                        this.f20652g = 0;
                    }
                }
            } else if (h0Var.H() == 86) {
                this.f20652g = 1;
            }
        }
    }

    @Override // dd.m
    public void c() {
        this.f20652g = 0;
        this.f20656k = -9223372036854775807L;
        this.f20657l = false;
    }

    @Override // dd.m
    public void e(long j10, int i10) {
        if (j10 != -9223372036854775807L) {
            this.f20656k = j10;
        }
    }

    @Override // dd.m
    public void f(tc.m mVar, i0.d dVar) {
        dVar.a();
        this.f20649d = mVar.c(dVar.c(), 1);
        this.f20650e = dVar.b();
    }

    @Override // dd.m
    public void d() {
    }
}
