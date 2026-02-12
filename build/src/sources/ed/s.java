package ed;

import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import com.google.android.exoplayer2.Format;
import ed.i0;
import java.util.Collections;
import mc.l0;
import oc.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class s implements m {

    /* renamed from: a  reason: collision with root package name */
    private final String f22703a;

    /* renamed from: b  reason: collision with root package name */
    private final oe.h0 f22704b;

    /* renamed from: c  reason: collision with root package name */
    private final oe.g0 f22705c;

    /* renamed from: d  reason: collision with root package name */
    private uc.b0 f22706d;

    /* renamed from: e  reason: collision with root package name */
    private String f22707e;

    /* renamed from: f  reason: collision with root package name */
    private Format f22708f;

    /* renamed from: g  reason: collision with root package name */
    private int f22709g;

    /* renamed from: h  reason: collision with root package name */
    private int f22710h;

    /* renamed from: i  reason: collision with root package name */
    private int f22711i;

    /* renamed from: j  reason: collision with root package name */
    private int f22712j;

    /* renamed from: k  reason: collision with root package name */
    private long f22713k;

    /* renamed from: l  reason: collision with root package name */
    private boolean f22714l;

    /* renamed from: m  reason: collision with root package name */
    private int f22715m;

    /* renamed from: n  reason: collision with root package name */
    private int f22716n;

    /* renamed from: o  reason: collision with root package name */
    private int f22717o;

    /* renamed from: p  reason: collision with root package name */
    private boolean f22718p;

    /* renamed from: q  reason: collision with root package name */
    private long f22719q;

    /* renamed from: r  reason: collision with root package name */
    private int f22720r;

    /* renamed from: s  reason: collision with root package name */
    private long f22721s;

    /* renamed from: t  reason: collision with root package name */
    private int f22722t;

    /* renamed from: u  reason: collision with root package name */
    private String f22723u;

    public s(String str) {
        this.f22703a = str;
        oe.h0 h0Var = new oe.h0((int) IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET);
        this.f22704b = h0Var;
        this.f22705c = new oe.g0(h0Var.e());
        this.f22713k = -9223372036854775807L;
    }

    private static long f(oe.g0 g0Var) {
        return g0Var.h((g0Var.h(2) + 1) * 8);
    }

    private void g(oe.g0 g0Var) {
        if (!g0Var.g()) {
            this.f22714l = true;
            l(g0Var);
        } else if (!this.f22714l) {
            return;
        }
        if (this.f22715m == 0) {
            if (this.f22716n == 0) {
                k(g0Var, j(g0Var));
                if (this.f22718p) {
                    g0Var.r((int) this.f22719q);
                    return;
                }
                return;
            }
            throw l0.a(null, null);
        }
        throw l0.a(null, null);
    }

    private int h(oe.g0 g0Var) {
        int b10 = g0Var.b();
        a.b e10 = oc.a.e(g0Var, true);
        this.f22723u = e10.f38771c;
        this.f22720r = e10.f38769a;
        this.f22722t = e10.f38770b;
        return b10 - g0Var.b();
    }

    private void i(oe.g0 g0Var) {
        int h10 = g0Var.h(3);
        this.f22717o = h10;
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

    private int j(oe.g0 g0Var) {
        int h10;
        if (this.f22717o == 0) {
            int i10 = 0;
            do {
                h10 = g0Var.h(8);
                i10 += h10;
            } while (h10 == 255);
            return i10;
        }
        throw l0.a(null, null);
    }

    private void k(oe.g0 g0Var, int i10) {
        int e10 = g0Var.e();
        if ((e10 & 7) == 0) {
            this.f22704b.U(e10 >> 3);
        } else {
            g0Var.i(this.f22704b.e(), 0, i10 * 8);
            this.f22704b.U(0);
        }
        this.f22706d.e(this.f22704b, i10);
        long j10 = this.f22713k;
        if (j10 != -9223372036854775807L) {
            this.f22706d.a(j10, 1, i10, 0, null);
            this.f22713k += this.f22721s;
        }
    }

    private void l(oe.g0 g0Var) {
        int i10;
        boolean g10;
        int h10 = g0Var.h(1);
        if (h10 == 1) {
            i10 = g0Var.h(1);
        } else {
            i10 = 0;
        }
        this.f22715m = i10;
        if (i10 == 0) {
            if (h10 == 1) {
                f(g0Var);
            }
            if (g0Var.g()) {
                this.f22716n = g0Var.h(6);
                int h11 = g0Var.h(4);
                int h12 = g0Var.h(3);
                if (h11 == 0 && h12 == 0) {
                    if (h10 == 0) {
                        int e10 = g0Var.e();
                        int h13 = h(g0Var);
                        g0Var.p(e10);
                        byte[] bArr = new byte[(h13 + 7) / 8];
                        g0Var.i(bArr, 0, h13);
                        Format G = new Format.b().U(this.f22707e).g0("audio/mp4a-latm").K(this.f22723u).J(this.f22722t).h0(this.f22720r).V(Collections.singletonList(bArr)).X(this.f22703a).G();
                        if (!G.equals(this.f22708f)) {
                            this.f22708f = G;
                            this.f22721s = 1024000000 / G.K;
                            this.f22706d.c(G);
                        }
                    } else {
                        g0Var.r(((int) f(g0Var)) - h(g0Var));
                    }
                    i(g0Var);
                    boolean g11 = g0Var.g();
                    this.f22718p = g11;
                    this.f22719q = 0L;
                    if (g11) {
                        if (h10 == 1) {
                            this.f22719q = f(g0Var);
                        } else {
                            do {
                                g10 = g0Var.g();
                                this.f22719q = (this.f22719q << 8) + g0Var.h(8);
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
        this.f22704b.Q(i10);
        this.f22705c.n(this.f22704b.e());
    }

    @Override // ed.m
    public void a(oe.h0 h0Var) {
        oe.a.i(this.f22706d);
        while (h0Var.a() > 0) {
            int i10 = this.f22709g;
            if (i10 != 0) {
                if (i10 != 1) {
                    if (i10 != 2) {
                        if (i10 == 3) {
                            int min = Math.min(h0Var.a(), this.f22711i - this.f22710h);
                            h0Var.l(this.f22705c.f38947a, this.f22710h, min);
                            int i11 = this.f22710h + min;
                            this.f22710h = i11;
                            if (i11 == this.f22711i) {
                                this.f22705c.p(0);
                                g(this.f22705c);
                                this.f22709g = 0;
                            }
                        } else {
                            throw new IllegalStateException();
                        }
                    } else {
                        int H = ((this.f22712j & (-225)) << 8) | h0Var.H();
                        this.f22711i = H;
                        if (H > this.f22704b.e().length) {
                            m(this.f22711i);
                        }
                        this.f22710h = 0;
                        this.f22709g = 3;
                    }
                } else {
                    int H2 = h0Var.H();
                    if ((H2 & 224) == 224) {
                        this.f22712j = H2;
                        this.f22709g = 2;
                    } else if (H2 != 86) {
                        this.f22709g = 0;
                    }
                }
            } else if (h0Var.H() == 86) {
                this.f22709g = 1;
            }
        }
    }

    @Override // ed.m
    public void b() {
        this.f22709g = 0;
        this.f22713k = -9223372036854775807L;
        this.f22714l = false;
    }

    @Override // ed.m
    public void c(uc.m mVar, i0.d dVar) {
        dVar.a();
        this.f22706d = mVar.c(dVar.c(), 1);
        this.f22707e = dVar.b();
    }

    @Override // ed.m
    public void e(long j10, int i10) {
        if (j10 != -9223372036854775807L) {
            this.f22713k = j10;
        }
    }

    @Override // ed.m
    public void d() {
    }
}
