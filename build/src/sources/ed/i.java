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
    private static final byte[] f21350v = {73, 68, 51};

    /* renamed from: a  reason: collision with root package name */
    private final boolean f21351a;

    /* renamed from: b  reason: collision with root package name */
    private final oe.g0 f21352b;

    /* renamed from: c  reason: collision with root package name */
    private final oe.h0 f21353c;

    /* renamed from: d  reason: collision with root package name */
    private final String f21354d;

    /* renamed from: e  reason: collision with root package name */
    private String f21355e;

    /* renamed from: f  reason: collision with root package name */
    private uc.b0 f21356f;

    /* renamed from: g  reason: collision with root package name */
    private uc.b0 f21357g;

    /* renamed from: h  reason: collision with root package name */
    private int f21358h;

    /* renamed from: i  reason: collision with root package name */
    private int f21359i;

    /* renamed from: j  reason: collision with root package name */
    private int f21360j;

    /* renamed from: k  reason: collision with root package name */
    private boolean f21361k;

    /* renamed from: l  reason: collision with root package name */
    private boolean f21362l;

    /* renamed from: m  reason: collision with root package name */
    private int f21363m;

    /* renamed from: n  reason: collision with root package name */
    private int f21364n;

    /* renamed from: o  reason: collision with root package name */
    private int f21365o;

    /* renamed from: p  reason: collision with root package name */
    private boolean f21366p;

    /* renamed from: q  reason: collision with root package name */
    private long f21367q;

    /* renamed from: r  reason: collision with root package name */
    private int f21368r;

    /* renamed from: s  reason: collision with root package name */
    private long f21369s;

    /* renamed from: t  reason: collision with root package name */
    private uc.b0 f21370t;

    /* renamed from: u  reason: collision with root package name */
    private long f21371u;

    public i(boolean z10) {
        this(z10, null);
    }

    private void f() {
        oe.a.e(this.f21356f);
        w0.j(this.f21370t);
        w0.j(this.f21357g);
    }

    private void g(oe.h0 h0Var) {
        if (h0Var.a() == 0) {
            return;
        }
        this.f21352b.f40620a[0] = h0Var.e()[h0Var.f()];
        this.f21352b.p(2);
        int h10 = this.f21352b.h(4);
        int i10 = this.f21364n;
        if (i10 != -1 && h10 != i10) {
            q();
            return;
        }
        if (!this.f21362l) {
            this.f21362l = true;
            this.f21363m = this.f21365o;
            this.f21364n = h10;
        }
        t();
    }

    private boolean h(oe.h0 h0Var, int i10) {
        h0Var.U(i10 + 1);
        if (!w(h0Var, this.f21352b.f40620a, 1)) {
            return false;
        }
        this.f21352b.p(4);
        int h10 = this.f21352b.h(1);
        int i11 = this.f21363m;
        if (i11 != -1 && h10 != i11) {
            return false;
        }
        if (this.f21364n != -1) {
            if (!w(h0Var, this.f21352b.f40620a, 1)) {
                return true;
            }
            this.f21352b.p(2);
            if (this.f21352b.h(4) != this.f21364n) {
                return false;
            }
            h0Var.U(i10 + 2);
        }
        if (!w(h0Var, this.f21352b.f40620a, 4)) {
            return true;
        }
        this.f21352b.p(14);
        int h11 = this.f21352b.h(13);
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
        int min = Math.min(h0Var.a(), i10 - this.f21359i);
        h0Var.l(bArr, this.f21359i, min);
        int i11 = this.f21359i + min;
        this.f21359i = i11;
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
            if (this.f21360j == 512 && l((byte) -1, (byte) i11) && (this.f21362l || h(h0Var, f10 - 1))) {
                this.f21365o = (b10 & 8) >> 3;
                boolean z10 = true;
                if ((b10 & 1) != 0) {
                    z10 = false;
                }
                this.f21361k = z10;
                if (!this.f21362l) {
                    r();
                } else {
                    t();
                }
                h0Var.U(i10);
                return;
            }
            int i12 = this.f21360j;
            int i13 = i11 | i12;
            if (i13 != 329) {
                if (i13 != 511) {
                    if (i13 != 836) {
                        if (i13 != 1075) {
                            if (i12 != 256) {
                                this.f21360j = IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER;
                            }
                        } else {
                            u();
                            h0Var.U(i10);
                            return;
                        }
                    } else {
                        this.f21360j = IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET;
                    }
                } else {
                    this.f21360j = IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING;
                }
            } else {
                this.f21360j = 768;
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
        this.f21352b.p(0);
        if (!this.f21366p) {
            int i10 = 2;
            int h10 = this.f21352b.h(2) + 1;
            if (h10 != 2) {
                oe.y.i("AdtsReader", "Detected audio object type: " + h10 + ", but assuming AAC LC.");
            } else {
                i10 = h10;
            }
            this.f21352b.r(5);
            byte[] b10 = oc.a.b(i10, this.f21364n, this.f21352b.h(3));
            a.b f10 = oc.a.f(b10);
            Format G = new Format.b().U(this.f21355e).g0("audio/mp4a-latm").K(f10.f40444c).J(f10.f40443b).h0(f10.f40442a).V(Collections.singletonList(b10)).X(this.f21354d).G();
            this.f21367q = 1024000000 / G.K;
            this.f21356f.c(G);
            this.f21366p = true;
        } else {
            this.f21352b.r(10);
        }
        this.f21352b.r(4);
        int h11 = this.f21352b.h(13);
        int i11 = h11 - 7;
        if (this.f21361k) {
            i11 = h11 - 9;
        }
        v(this.f21356f, this.f21367q, 0, i11);
    }

    private void o() {
        this.f21357g.e(this.f21353c, 10);
        this.f21353c.U(6);
        v(this.f21357g, 0L, 10, this.f21353c.G() + 10);
    }

    private void p(oe.h0 h0Var) {
        int min = Math.min(h0Var.a(), this.f21368r - this.f21359i);
        this.f21370t.e(h0Var, min);
        int i10 = this.f21359i + min;
        this.f21359i = i10;
        int i11 = this.f21368r;
        if (i10 == i11) {
            long j10 = this.f21369s;
            if (j10 != -9223372036854775807L) {
                this.f21370t.a(j10, 1, i11, 0, null);
                this.f21369s += this.f21371u;
            }
            s();
        }
    }

    private void q() {
        this.f21362l = false;
        s();
    }

    private void r() {
        this.f21358h = 1;
        this.f21359i = 0;
    }

    private void s() {
        this.f21358h = 0;
        this.f21359i = 0;
        this.f21360j = IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER;
    }

    private void t() {
        this.f21358h = 3;
        this.f21359i = 0;
    }

    private void u() {
        this.f21358h = 2;
        this.f21359i = f21350v.length;
        this.f21368r = 0;
        this.f21353c.U(0);
    }

    private void v(uc.b0 b0Var, long j10, int i10, int i11) {
        this.f21358h = 4;
        this.f21359i = i10;
        this.f21370t = b0Var;
        this.f21371u = j10;
        this.f21368r = i11;
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
            int i11 = this.f21358h;
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
                            if (this.f21361k) {
                                i10 = 7;
                            } else {
                                i10 = 5;
                            }
                            if (i(h0Var, this.f21352b.f40620a, i10)) {
                                n();
                            }
                        }
                    } else if (i(h0Var, this.f21353c.e(), 10)) {
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
        this.f21369s = -9223372036854775807L;
        q();
    }

    @Override // ed.m
    public void c(uc.m mVar, i0.d dVar) {
        dVar.a();
        this.f21355e = dVar.b();
        uc.b0 c10 = mVar.c(dVar.c(), 1);
        this.f21356f = c10;
        this.f21370t = c10;
        if (this.f21351a) {
            dVar.a();
            uc.b0 c11 = mVar.c(dVar.c(), 5);
            this.f21357g = c11;
            c11.c(new Format.b().U(dVar.b()).g0("application/id3").G());
            return;
        }
        this.f21357g = new uc.j();
    }

    @Override // ed.m
    public void e(long j10, int i10) {
        if (j10 != -9223372036854775807L) {
            this.f21369s = j10;
        }
    }

    public long k() {
        return this.f21367q;
    }

    public i(boolean z10, String str) {
        this.f21352b = new oe.g0(new byte[7]);
        this.f21353c = new oe.h0(Arrays.copyOf(f21350v, 10));
        s();
        this.f21363m = -1;
        this.f21364n = -1;
        this.f21367q = -9223372036854775807L;
        this.f21369s = -9223372036854775807L;
        this.f21351a = z10;
        this.f21354d = str;
    }

    @Override // ed.m
    public void d() {
    }
}
