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
    private final String f22702a;

    /* renamed from: b  reason: collision with root package name */
    private final oe.h0 f22703b;

    /* renamed from: c  reason: collision with root package name */
    private final oe.g0 f22704c;

    /* renamed from: d  reason: collision with root package name */
    private uc.b0 f22705d;

    /* renamed from: e  reason: collision with root package name */
    private String f22706e;

    /* renamed from: f  reason: collision with root package name */
    private Format f22707f;

    /* renamed from: g  reason: collision with root package name */
    private int f22708g;

    /* renamed from: h  reason: collision with root package name */
    private int f22709h;

    /* renamed from: i  reason: collision with root package name */
    private int f22710i;

    /* renamed from: j  reason: collision with root package name */
    private int f22711j;

    /* renamed from: k  reason: collision with root package name */
    private long f22712k;

    /* renamed from: l  reason: collision with root package name */
    private boolean f22713l;

    /* renamed from: m  reason: collision with root package name */
    private int f22714m;

    /* renamed from: n  reason: collision with root package name */
    private int f22715n;

    /* renamed from: o  reason: collision with root package name */
    private int f22716o;

    /* renamed from: p  reason: collision with root package name */
    private boolean f22717p;

    /* renamed from: q  reason: collision with root package name */
    private long f22718q;

    /* renamed from: r  reason: collision with root package name */
    private int f22719r;

    /* renamed from: s  reason: collision with root package name */
    private long f22720s;

    /* renamed from: t  reason: collision with root package name */
    private int f22721t;

    /* renamed from: u  reason: collision with root package name */
    private String f22722u;

    public s(String str) {
        this.f22702a = str;
        oe.h0 h0Var = new oe.h0((int) IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET);
        this.f22703b = h0Var;
        this.f22704c = new oe.g0(h0Var.e());
        this.f22712k = -9223372036854775807L;
    }

    private static long f(oe.g0 g0Var) {
        return g0Var.h((g0Var.h(2) + 1) * 8);
    }

    private void g(oe.g0 g0Var) {
        if (!g0Var.g()) {
            this.f22713l = true;
            l(g0Var);
        } else if (!this.f22713l) {
            return;
        }
        if (this.f22714m == 0) {
            if (this.f22715n == 0) {
                k(g0Var, j(g0Var));
                if (this.f22717p) {
                    g0Var.r((int) this.f22718q);
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
        this.f22722u = e10.f38770c;
        this.f22719r = e10.f38768a;
        this.f22721t = e10.f38769b;
        return b10 - g0Var.b();
    }

    private void i(oe.g0 g0Var) {
        int h10 = g0Var.h(3);
        this.f22716o = h10;
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
        if (this.f22716o == 0) {
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
            this.f22703b.U(e10 >> 3);
        } else {
            g0Var.i(this.f22703b.e(), 0, i10 * 8);
            this.f22703b.U(0);
        }
        this.f22705d.e(this.f22703b, i10);
        long j10 = this.f22712k;
        if (j10 != -9223372036854775807L) {
            this.f22705d.a(j10, 1, i10, 0, null);
            this.f22712k += this.f22720s;
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
        this.f22714m = i10;
        if (i10 == 0) {
            if (h10 == 1) {
                f(g0Var);
            }
            if (g0Var.g()) {
                this.f22715n = g0Var.h(6);
                int h11 = g0Var.h(4);
                int h12 = g0Var.h(3);
                if (h11 == 0 && h12 == 0) {
                    if (h10 == 0) {
                        int e10 = g0Var.e();
                        int h13 = h(g0Var);
                        g0Var.p(e10);
                        byte[] bArr = new byte[(h13 + 7) / 8];
                        g0Var.i(bArr, 0, h13);
                        Format G = new Format.b().U(this.f22706e).g0("audio/mp4a-latm").K(this.f22722u).J(this.f22721t).h0(this.f22719r).V(Collections.singletonList(bArr)).X(this.f22702a).G();
                        if (!G.equals(this.f22707f)) {
                            this.f22707f = G;
                            this.f22720s = 1024000000 / G.K;
                            this.f22705d.c(G);
                        }
                    } else {
                        g0Var.r(((int) f(g0Var)) - h(g0Var));
                    }
                    i(g0Var);
                    boolean g11 = g0Var.g();
                    this.f22717p = g11;
                    this.f22718q = 0L;
                    if (g11) {
                        if (h10 == 1) {
                            this.f22718q = f(g0Var);
                        } else {
                            do {
                                g10 = g0Var.g();
                                this.f22718q = (this.f22718q << 8) + g0Var.h(8);
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
        this.f22703b.Q(i10);
        this.f22704c.n(this.f22703b.e());
    }

    @Override // ed.m
    public void a(oe.h0 h0Var) {
        oe.a.i(this.f22705d);
        while (h0Var.a() > 0) {
            int i10 = this.f22708g;
            if (i10 != 0) {
                if (i10 != 1) {
                    if (i10 != 2) {
                        if (i10 == 3) {
                            int min = Math.min(h0Var.a(), this.f22710i - this.f22709h);
                            h0Var.l(this.f22704c.f38946a, this.f22709h, min);
                            int i11 = this.f22709h + min;
                            this.f22709h = i11;
                            if (i11 == this.f22710i) {
                                this.f22704c.p(0);
                                g(this.f22704c);
                                this.f22708g = 0;
                            }
                        } else {
                            throw new IllegalStateException();
                        }
                    } else {
                        int H = ((this.f22711j & (-225)) << 8) | h0Var.H();
                        this.f22710i = H;
                        if (H > this.f22703b.e().length) {
                            m(this.f22710i);
                        }
                        this.f22709h = 0;
                        this.f22708g = 3;
                    }
                } else {
                    int H2 = h0Var.H();
                    if ((H2 & 224) == 224) {
                        this.f22711j = H2;
                        this.f22708g = 2;
                    } else if (H2 != 86) {
                        this.f22708g = 0;
                    }
                }
            } else if (h0Var.H() == 86) {
                this.f22708g = 1;
            }
        }
    }

    @Override // ed.m
    public void b() {
        this.f22708g = 0;
        this.f22712k = -9223372036854775807L;
        this.f22713l = false;
    }

    @Override // ed.m
    public void c(uc.m mVar, i0.d dVar) {
        dVar.a();
        this.f22705d = mVar.c(dVar.c(), 1);
        this.f22706e = dVar.b();
    }

    @Override // ed.m
    public void e(long j10, int i10) {
        if (j10 != -9223372036854775807L) {
            this.f22712k = j10;
        }
    }

    @Override // ed.m
    public void d() {
    }
}
