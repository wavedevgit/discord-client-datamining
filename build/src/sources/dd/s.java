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
    private final String f22040a;

    /* renamed from: b  reason: collision with root package name */
    private final ne.h0 f22041b;

    /* renamed from: c  reason: collision with root package name */
    private final ne.g0 f22042c;

    /* renamed from: d  reason: collision with root package name */
    private tc.b0 f22043d;

    /* renamed from: e  reason: collision with root package name */
    private String f22044e;

    /* renamed from: f  reason: collision with root package name */
    private Format f22045f;

    /* renamed from: g  reason: collision with root package name */
    private int f22046g;

    /* renamed from: h  reason: collision with root package name */
    private int f22047h;

    /* renamed from: i  reason: collision with root package name */
    private int f22048i;

    /* renamed from: j  reason: collision with root package name */
    private int f22049j;

    /* renamed from: k  reason: collision with root package name */
    private long f22050k;

    /* renamed from: l  reason: collision with root package name */
    private boolean f22051l;

    /* renamed from: m  reason: collision with root package name */
    private int f22052m;

    /* renamed from: n  reason: collision with root package name */
    private int f22053n;

    /* renamed from: o  reason: collision with root package name */
    private int f22054o;

    /* renamed from: p  reason: collision with root package name */
    private boolean f22055p;

    /* renamed from: q  reason: collision with root package name */
    private long f22056q;

    /* renamed from: r  reason: collision with root package name */
    private int f22057r;

    /* renamed from: s  reason: collision with root package name */
    private long f22058s;

    /* renamed from: t  reason: collision with root package name */
    private int f22059t;

    /* renamed from: u  reason: collision with root package name */
    private String f22060u;

    public s(String str) {
        this.f22040a = str;
        ne.h0 h0Var = new ne.h0((int) IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET);
        this.f22041b = h0Var;
        this.f22042c = new ne.g0(h0Var.e());
        this.f22050k = -9223372036854775807L;
    }

    private static long a(ne.g0 g0Var) {
        return g0Var.h((g0Var.h(2) + 1) * 8);
    }

    private void g(ne.g0 g0Var) {
        if (!g0Var.g()) {
            this.f22051l = true;
            l(g0Var);
        } else if (!this.f22051l) {
            return;
        }
        if (this.f22052m == 0) {
            if (this.f22053n == 0) {
                k(g0Var, j(g0Var));
                if (this.f22055p) {
                    g0Var.r((int) this.f22056q);
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
        this.f22060u = e10.f40028c;
        this.f22057r = e10.f40026a;
        this.f22059t = e10.f40027b;
        return b10 - g0Var.b();
    }

    private void i(ne.g0 g0Var) {
        int h10 = g0Var.h(3);
        this.f22054o = h10;
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
        if (this.f22054o == 0) {
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
            this.f22041b.U(e10 >> 3);
        } else {
            g0Var.i(this.f22041b.e(), 0, i10 * 8);
            this.f22041b.U(0);
        }
        this.f22043d.f(this.f22041b, i10);
        long j10 = this.f22050k;
        if (j10 != -9223372036854775807L) {
            this.f22043d.d(j10, 1, i10, 0, null);
            this.f22050k += this.f22058s;
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
        this.f22052m = i10;
        if (i10 == 0) {
            if (h10 == 1) {
                a(g0Var);
            }
            if (g0Var.g()) {
                this.f22053n = g0Var.h(6);
                int h11 = g0Var.h(4);
                int h12 = g0Var.h(3);
                if (h11 == 0 && h12 == 0) {
                    if (h10 == 0) {
                        int e10 = g0Var.e();
                        int h13 = h(g0Var);
                        g0Var.p(e10);
                        byte[] bArr = new byte[(h13 + 7) / 8];
                        g0Var.i(bArr, 0, h13);
                        Format G = new Format.b().U(this.f22044e).g0("audio/mp4a-latm").K(this.f22060u).J(this.f22059t).h0(this.f22057r).V(Collections.singletonList(bArr)).X(this.f22040a).G();
                        if (!G.equals(this.f22045f)) {
                            this.f22045f = G;
                            this.f22058s = 1024000000 / G.K;
                            this.f22043d.b(G);
                        }
                    } else {
                        g0Var.r(((int) a(g0Var)) - h(g0Var));
                    }
                    i(g0Var);
                    boolean g11 = g0Var.g();
                    this.f22055p = g11;
                    this.f22056q = 0L;
                    if (g11) {
                        if (h10 == 1) {
                            this.f22056q = a(g0Var);
                        } else {
                            do {
                                g10 = g0Var.g();
                                this.f22056q = (this.f22056q << 8) + g0Var.h(8);
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
        this.f22041b.Q(i10);
        this.f22042c.n(this.f22041b.e());
    }

    @Override // dd.m
    public void b(ne.h0 h0Var) {
        ne.a.i(this.f22043d);
        while (h0Var.a() > 0) {
            int i10 = this.f22046g;
            if (i10 != 0) {
                if (i10 != 1) {
                    if (i10 != 2) {
                        if (i10 == 3) {
                            int min = Math.min(h0Var.a(), this.f22048i - this.f22047h);
                            h0Var.l(this.f22042c.f40204a, this.f22047h, min);
                            int i11 = this.f22047h + min;
                            this.f22047h = i11;
                            if (i11 == this.f22048i) {
                                this.f22042c.p(0);
                                g(this.f22042c);
                                this.f22046g = 0;
                            }
                        } else {
                            throw new IllegalStateException();
                        }
                    } else {
                        int H = ((this.f22049j & (-225)) << 8) | h0Var.H();
                        this.f22048i = H;
                        if (H > this.f22041b.e().length) {
                            m(this.f22048i);
                        }
                        this.f22047h = 0;
                        this.f22046g = 3;
                    }
                } else {
                    int H2 = h0Var.H();
                    if ((H2 & 224) == 224) {
                        this.f22049j = H2;
                        this.f22046g = 2;
                    } else if (H2 != 86) {
                        this.f22046g = 0;
                    }
                }
            } else if (h0Var.H() == 86) {
                this.f22046g = 1;
            }
        }
    }

    @Override // dd.m
    public void c() {
        this.f22046g = 0;
        this.f22050k = -9223372036854775807L;
        this.f22051l = false;
    }

    @Override // dd.m
    public void e(long j10, int i10) {
        if (j10 != -9223372036854775807L) {
            this.f22050k = j10;
        }
    }

    @Override // dd.m
    public void f(tc.m mVar, i0.d dVar) {
        dVar.a();
        this.f22043d = mVar.c(dVar.c(), 1);
        this.f22044e = dVar.b();
    }

    @Override // dd.m
    public void d() {
    }
}
