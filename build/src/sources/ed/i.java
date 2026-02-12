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
    private static final byte[] f22518v = {73, 68, 51};

    /* renamed from: a  reason: collision with root package name */
    private final boolean f22519a;

    /* renamed from: b  reason: collision with root package name */
    private final oe.g0 f22520b;

    /* renamed from: c  reason: collision with root package name */
    private final oe.h0 f22521c;

    /* renamed from: d  reason: collision with root package name */
    private final String f22522d;

    /* renamed from: e  reason: collision with root package name */
    private String f22523e;

    /* renamed from: f  reason: collision with root package name */
    private uc.b0 f22524f;

    /* renamed from: g  reason: collision with root package name */
    private uc.b0 f22525g;

    /* renamed from: h  reason: collision with root package name */
    private int f22526h;

    /* renamed from: i  reason: collision with root package name */
    private int f22527i;

    /* renamed from: j  reason: collision with root package name */
    private int f22528j;

    /* renamed from: k  reason: collision with root package name */
    private boolean f22529k;

    /* renamed from: l  reason: collision with root package name */
    private boolean f22530l;

    /* renamed from: m  reason: collision with root package name */
    private int f22531m;

    /* renamed from: n  reason: collision with root package name */
    private int f22532n;

    /* renamed from: o  reason: collision with root package name */
    private int f22533o;

    /* renamed from: p  reason: collision with root package name */
    private boolean f22534p;

    /* renamed from: q  reason: collision with root package name */
    private long f22535q;

    /* renamed from: r  reason: collision with root package name */
    private int f22536r;

    /* renamed from: s  reason: collision with root package name */
    private long f22537s;

    /* renamed from: t  reason: collision with root package name */
    private uc.b0 f22538t;

    /* renamed from: u  reason: collision with root package name */
    private long f22539u;

    public i(boolean z10) {
        this(z10, null);
    }

    private void f() {
        oe.a.e(this.f22524f);
        w0.j(this.f22538t);
        w0.j(this.f22525g);
    }

    private void g(oe.h0 h0Var) {
        if (h0Var.a() == 0) {
            return;
        }
        this.f22520b.f38947a[0] = h0Var.e()[h0Var.f()];
        this.f22520b.p(2);
        int h10 = this.f22520b.h(4);
        int i10 = this.f22532n;
        if (i10 != -1 && h10 != i10) {
            q();
            return;
        }
        if (!this.f22530l) {
            this.f22530l = true;
            this.f22531m = this.f22533o;
            this.f22532n = h10;
        }
        t();
    }

    private boolean h(oe.h0 h0Var, int i10) {
        h0Var.U(i10 + 1);
        if (!w(h0Var, this.f22520b.f38947a, 1)) {
            return false;
        }
        this.f22520b.p(4);
        int h10 = this.f22520b.h(1);
        int i11 = this.f22531m;
        if (i11 != -1 && h10 != i11) {
            return false;
        }
        if (this.f22532n != -1) {
            if (!w(h0Var, this.f22520b.f38947a, 1)) {
                return true;
            }
            this.f22520b.p(2);
            if (this.f22520b.h(4) != this.f22532n) {
                return false;
            }
            h0Var.U(i10 + 2);
        }
        if (!w(h0Var, this.f22520b.f38947a, 4)) {
            return true;
        }
        this.f22520b.p(14);
        int h11 = this.f22520b.h(13);
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
        int min = Math.min(h0Var.a(), i10 - this.f22527i);
        h0Var.l(bArr, this.f22527i, min);
        int i11 = this.f22527i + min;
        this.f22527i = i11;
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
            if (this.f22528j == 512 && l((byte) -1, (byte) i11) && (this.f22530l || h(h0Var, f10 - 1))) {
                this.f22533o = (b10 & 8) >> 3;
                boolean z10 = true;
                if ((b10 & 1) != 0) {
                    z10 = false;
                }
                this.f22529k = z10;
                if (!this.f22530l) {
                    r();
                } else {
                    t();
                }
                h0Var.U(i10);
                return;
            }
            int i12 = this.f22528j;
            int i13 = i11 | i12;
            if (i13 != 329) {
                if (i13 != 511) {
                    if (i13 != 836) {
                        if (i13 != 1075) {
                            if (i12 != 256) {
                                this.f22528j = IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER;
                            }
                        } else {
                            u();
                            h0Var.U(i10);
                            return;
                        }
                    } else {
                        this.f22528j = IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET;
                    }
                } else {
                    this.f22528j = IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING;
                }
            } else {
                this.f22528j = 768;
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
        this.f22520b.p(0);
        if (!this.f22534p) {
            int i10 = 2;
            int h10 = this.f22520b.h(2) + 1;
            if (h10 != 2) {
                oe.y.i("AdtsReader", "Detected audio object type: " + h10 + ", but assuming AAC LC.");
            } else {
                i10 = h10;
            }
            this.f22520b.r(5);
            byte[] b10 = oc.a.b(i10, this.f22532n, this.f22520b.h(3));
            a.b f10 = oc.a.f(b10);
            Format G = new Format.b().U(this.f22523e).g0("audio/mp4a-latm").K(f10.f38771c).J(f10.f38770b).h0(f10.f38769a).V(Collections.singletonList(b10)).X(this.f22522d).G();
            this.f22535q = 1024000000 / G.K;
            this.f22524f.c(G);
            this.f22534p = true;
        } else {
            this.f22520b.r(10);
        }
        this.f22520b.r(4);
        int h11 = this.f22520b.h(13);
        int i11 = h11 - 7;
        if (this.f22529k) {
            i11 = h11 - 9;
        }
        v(this.f22524f, this.f22535q, 0, i11);
    }

    private void o() {
        this.f22525g.e(this.f22521c, 10);
        this.f22521c.U(6);
        v(this.f22525g, 0L, 10, this.f22521c.G() + 10);
    }

    private void p(oe.h0 h0Var) {
        int min = Math.min(h0Var.a(), this.f22536r - this.f22527i);
        this.f22538t.e(h0Var, min);
        int i10 = this.f22527i + min;
        this.f22527i = i10;
        int i11 = this.f22536r;
        if (i10 == i11) {
            long j10 = this.f22537s;
            if (j10 != -9223372036854775807L) {
                this.f22538t.a(j10, 1, i11, 0, null);
                this.f22537s += this.f22539u;
            }
            s();
        }
    }

    private void q() {
        this.f22530l = false;
        s();
    }

    private void r() {
        this.f22526h = 1;
        this.f22527i = 0;
    }

    private void s() {
        this.f22526h = 0;
        this.f22527i = 0;
        this.f22528j = IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER;
    }

    private void t() {
        this.f22526h = 3;
        this.f22527i = 0;
    }

    private void u() {
        this.f22526h = 2;
        this.f22527i = f22518v.length;
        this.f22536r = 0;
        this.f22521c.U(0);
    }

    private void v(uc.b0 b0Var, long j10, int i10, int i11) {
        this.f22526h = 4;
        this.f22527i = i10;
        this.f22538t = b0Var;
        this.f22539u = j10;
        this.f22536r = i11;
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
            int i11 = this.f22526h;
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
                            if (this.f22529k) {
                                i10 = 7;
                            } else {
                                i10 = 5;
                            }
                            if (i(h0Var, this.f22520b.f38947a, i10)) {
                                n();
                            }
                        }
                    } else if (i(h0Var, this.f22521c.e(), 10)) {
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
        this.f22537s = -9223372036854775807L;
        q();
    }

    @Override // ed.m
    public void c(uc.m mVar, i0.d dVar) {
        dVar.a();
        this.f22523e = dVar.b();
        uc.b0 c10 = mVar.c(dVar.c(), 1);
        this.f22524f = c10;
        this.f22538t = c10;
        if (this.f22519a) {
            dVar.a();
            uc.b0 c11 = mVar.c(dVar.c(), 5);
            this.f22525g = c11;
            c11.c(new Format.b().U(dVar.b()).g0("application/id3").G());
            return;
        }
        this.f22525g = new uc.j();
    }

    @Override // ed.m
    public void e(long j10, int i10) {
        if (j10 != -9223372036854775807L) {
            this.f22537s = j10;
        }
    }

    public long k() {
        return this.f22535q;
    }

    public i(boolean z10, String str) {
        this.f22520b = new oe.g0(new byte[7]);
        this.f22521c = new oe.h0(Arrays.copyOf(f22518v, 10));
        s();
        this.f22531m = -1;
        this.f22532n = -1;
        this.f22535q = -9223372036854775807L;
        this.f22537s = -9223372036854775807L;
        this.f22519a = z10;
        this.f22522d = str;
    }

    @Override // ed.m
    public void d() {
    }
}
