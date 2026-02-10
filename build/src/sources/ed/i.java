package ed;

import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import com.google.android.exoplayer2.Format;
import ed.i0;
import java.util.Arrays;
import java.util.Collections;
import oc.a;
import oe.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class i implements m {

    /* renamed from: v  reason: collision with root package name */
    private static final byte[] f22517v = {73, 68, 51};

    /* renamed from: a  reason: collision with root package name */
    private final boolean f22518a;

    /* renamed from: b  reason: collision with root package name */
    private final oe.g0 f22519b;

    /* renamed from: c  reason: collision with root package name */
    private final oe.h0 f22520c;

    /* renamed from: d  reason: collision with root package name */
    private final String f22521d;

    /* renamed from: e  reason: collision with root package name */
    private String f22522e;

    /* renamed from: f  reason: collision with root package name */
    private uc.b0 f22523f;

    /* renamed from: g  reason: collision with root package name */
    private uc.b0 f22524g;

    /* renamed from: h  reason: collision with root package name */
    private int f22525h;

    /* renamed from: i  reason: collision with root package name */
    private int f22526i;

    /* renamed from: j  reason: collision with root package name */
    private int f22527j;

    /* renamed from: k  reason: collision with root package name */
    private boolean f22528k;

    /* renamed from: l  reason: collision with root package name */
    private boolean f22529l;

    /* renamed from: m  reason: collision with root package name */
    private int f22530m;

    /* renamed from: n  reason: collision with root package name */
    private int f22531n;

    /* renamed from: o  reason: collision with root package name */
    private int f22532o;

    /* renamed from: p  reason: collision with root package name */
    private boolean f22533p;

    /* renamed from: q  reason: collision with root package name */
    private long f22534q;

    /* renamed from: r  reason: collision with root package name */
    private int f22535r;

    /* renamed from: s  reason: collision with root package name */
    private long f22536s;

    /* renamed from: t  reason: collision with root package name */
    private uc.b0 f22537t;

    /* renamed from: u  reason: collision with root package name */
    private long f22538u;

    public i(boolean z10) {
        this(z10, null);
    }

    private void f() {
        oe.a.e(this.f22523f);
        w0.j(this.f22537t);
        w0.j(this.f22524g);
    }

    private void g(oe.h0 h0Var) {
        if (h0Var.a() == 0) {
            return;
        }
        this.f22519b.f38946a[0] = h0Var.e()[h0Var.f()];
        this.f22519b.p(2);
        int h10 = this.f22519b.h(4);
        int i10 = this.f22531n;
        if (i10 != -1 && h10 != i10) {
            q();
            return;
        }
        if (!this.f22529l) {
            this.f22529l = true;
            this.f22530m = this.f22532o;
            this.f22531n = h10;
        }
        t();
    }

    private boolean h(oe.h0 h0Var, int i10) {
        h0Var.U(i10 + 1);
        if (!w(h0Var, this.f22519b.f38946a, 1)) {
            return false;
        }
        this.f22519b.p(4);
        int h10 = this.f22519b.h(1);
        int i11 = this.f22530m;
        if (i11 != -1 && h10 != i11) {
            return false;
        }
        if (this.f22531n != -1) {
            if (!w(h0Var, this.f22519b.f38946a, 1)) {
                return true;
            }
            this.f22519b.p(2);
            if (this.f22519b.h(4) != this.f22531n) {
                return false;
            }
            h0Var.U(i10 + 2);
        }
        if (!w(h0Var, this.f22519b.f38946a, 4)) {
            return true;
        }
        this.f22519b.p(14);
        int h11 = this.f22519b.h(13);
        if (h11 < 7) {
            return false;
        }
        byte[] e10 = h0Var.e();
        int g10 = h0Var.g();
        int i12 = i10 + h11;
        if (i12 >= g10) {
            return true;
        }
        byte b10 = e10[i12];
        if (b10 == -1) {
            int i13 = i12 + 1;
            if (i13 == g10) {
                return true;
            }
            if (l((byte) -1, e10[i13]) && ((e10[i13] & 8) >> 3) == h10) {
                return true;
            }
            return false;
        } else if (b10 != 73) {
            return false;
        } else {
            int i14 = i12 + 1;
            if (i14 == g10) {
                return true;
            }
            if (e10[i14] != 68) {
                return false;
            }
            int i15 = i12 + 2;
            if (i15 == g10 || e10[i15] == 51) {
                return true;
            }
            return false;
        }
    }

    private boolean i(oe.h0 h0Var, byte[] bArr, int i10) {
        int min = Math.min(h0Var.a(), i10 - this.f22526i);
        h0Var.l(bArr, this.f22526i, min);
        int i11 = this.f22526i + min;
        this.f22526i = i11;
        if (i11 == i10) {
            return true;
        }
        return false;
    }

    private void j(oe.h0 h0Var) {
        byte[] e10 = h0Var.e();
        int f10 = h0Var.f();
        int g10 = h0Var.g();
        while (f10 < g10) {
            int i10 = f10 + 1;
            byte b10 = e10[f10];
            int i11 = b10 & 255;
            if (this.f22527j == 512 && l((byte) -1, (byte) i11) && (this.f22529l || h(h0Var, f10 - 1))) {
                this.f22532o = (b10 & 8) >> 3;
                boolean z10 = true;
                if ((b10 & 1) != 0) {
                    z10 = false;
                }
                this.f22528k = z10;
                if (!this.f22529l) {
                    r();
                } else {
                    t();
                }
                h0Var.U(i10);
                return;
            }
            int i12 = this.f22527j;
            int i13 = i11 | i12;
            if (i13 != 329) {
                if (i13 != 511) {
                    if (i13 != 836) {
                        if (i13 != 1075) {
                            if (i12 != 256) {
                                this.f22527j = IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER;
                            }
                        } else {
                            u();
                            h0Var.U(i10);
                            return;
                        }
                    } else {
                        this.f22527j = IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET;
                    }
                } else {
                    this.f22527j = IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING;
                }
            } else {
                this.f22527j = 768;
            }
            f10 = i10;
        }
        h0Var.U(f10);
    }

    private boolean l(byte b10, byte b11) {
        return m(((b10 & 255) << 8) | (b11 & 255));
    }

    public static boolean m(int i10) {
        if ((i10 & 65526) == 65520) {
            return true;
        }
        return false;
    }

    private void n() {
        this.f22519b.p(0);
        if (!this.f22533p) {
            int i10 = 2;
            int h10 = this.f22519b.h(2) + 1;
            if (h10 != 2) {
                oe.y.i("AdtsReader", "Detected audio object type: " + h10 + ", but assuming AAC LC.");
            } else {
                i10 = h10;
            }
            this.f22519b.r(5);
            byte[] b10 = oc.a.b(i10, this.f22531n, this.f22519b.h(3));
            a.b f10 = oc.a.f(b10);
            Format G = new Format.b().U(this.f22522e).g0("audio/mp4a-latm").K(f10.f38770c).J(f10.f38769b).h0(f10.f38768a).V(Collections.singletonList(b10)).X(this.f22521d).G();
            this.f22534q = 1024000000 / G.K;
            this.f22523f.c(G);
            this.f22533p = true;
        } else {
            this.f22519b.r(10);
        }
        this.f22519b.r(4);
        int h11 = this.f22519b.h(13);
        int i11 = h11 - 7;
        if (this.f22528k) {
            i11 = h11 - 9;
        }
        v(this.f22523f, this.f22534q, 0, i11);
    }

    private void o() {
        this.f22524g.e(this.f22520c, 10);
        this.f22520c.U(6);
        v(this.f22524g, 0L, 10, this.f22520c.G() + 10);
    }

    private void p(oe.h0 h0Var) {
        int min = Math.min(h0Var.a(), this.f22535r - this.f22526i);
        this.f22537t.e(h0Var, min);
        int i10 = this.f22526i + min;
        this.f22526i = i10;
        int i11 = this.f22535r;
        if (i10 == i11) {
            long j10 = this.f22536s;
            if (j10 != -9223372036854775807L) {
                this.f22537t.a(j10, 1, i11, 0, null);
                this.f22536s += this.f22538u;
            }
            s();
        }
    }

    private void q() {
        this.f22529l = false;
        s();
    }

    private void r() {
        this.f22525h = 1;
        this.f22526i = 0;
    }

    private void s() {
        this.f22525h = 0;
        this.f22526i = 0;
        this.f22527j = IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER;
    }

    private void t() {
        this.f22525h = 3;
        this.f22526i = 0;
    }

    private void u() {
        this.f22525h = 2;
        this.f22526i = f22517v.length;
        this.f22535r = 0;
        this.f22520c.U(0);
    }

    private void v(uc.b0 b0Var, long j10, int i10, int i11) {
        this.f22525h = 4;
        this.f22526i = i10;
        this.f22537t = b0Var;
        this.f22538u = j10;
        this.f22535r = i11;
    }

    private boolean w(oe.h0 h0Var, byte[] bArr, int i10) {
        if (h0Var.a() < i10) {
            return false;
        }
        h0Var.l(bArr, 0, i10);
        return true;
    }

    @Override // ed.m
    public void a(oe.h0 h0Var) {
        int i10;
        f();
        while (h0Var.a() > 0) {
            int i11 = this.f22525h;
            if (i11 != 0) {
                if (i11 != 1) {
                    if (i11 != 2) {
                        if (i11 != 3) {
                            if (i11 == 4) {
                                p(h0Var);
                            } else {
                                throw new IllegalStateException();
                            }
                        } else {
                            if (this.f22528k) {
                                i10 = 7;
                            } else {
                                i10 = 5;
                            }
                            if (i(h0Var, this.f22519b.f38946a, i10)) {
                                n();
                            }
                        }
                    } else if (i(h0Var, this.f22520c.e(), 10)) {
                        o();
                    }
                } else {
                    g(h0Var);
                }
            } else {
                j(h0Var);
            }
        }
    }

    @Override // ed.m
    public void b() {
        this.f22536s = -9223372036854775807L;
        q();
    }

    @Override // ed.m
    public void c(uc.m mVar, i0.d dVar) {
        dVar.a();
        this.f22522e = dVar.b();
        uc.b0 c10 = mVar.c(dVar.c(), 1);
        this.f22523f = c10;
        this.f22537t = c10;
        if (this.f22518a) {
            dVar.a();
            uc.b0 c11 = mVar.c(dVar.c(), 5);
            this.f22524g = c11;
            c11.c(new Format.b().U(dVar.b()).g0("application/id3").G());
            return;
        }
        this.f22524g = new uc.j();
    }

    @Override // ed.m
    public void e(long j10, int i10) {
        if (j10 != -9223372036854775807L) {
            this.f22536s = j10;
        }
    }

    public long k() {
        return this.f22534q;
    }

    public i(boolean z10, String str) {
        this.f22519b = new oe.g0(new byte[7]);
        this.f22520c = new oe.h0(Arrays.copyOf(f22517v, 10));
        s();
        this.f22530m = -1;
        this.f22531n = -1;
        this.f22534q = -9223372036854775807L;
        this.f22536s = -9223372036854775807L;
        this.f22518a = z10;
        this.f22521d = str;
    }

    @Override // ed.m
    public void d() {
    }
}
