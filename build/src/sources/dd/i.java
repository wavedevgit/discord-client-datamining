package dd;

import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import com.google.android.exoplayer2.Format;
import dd.i0;
import java.util.Arrays;
import java.util.Collections;
import nc.a;
import ne.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class i implements m {

    /* renamed from: v  reason: collision with root package name */
    private static final byte[] f20461v = {73, 68, 51};

    /* renamed from: a  reason: collision with root package name */
    private final boolean f20462a;

    /* renamed from: b  reason: collision with root package name */
    private final ne.g0 f20463b;

    /* renamed from: c  reason: collision with root package name */
    private final ne.h0 f20464c;

    /* renamed from: d  reason: collision with root package name */
    private final String f20465d;

    /* renamed from: e  reason: collision with root package name */
    private String f20466e;

    /* renamed from: f  reason: collision with root package name */
    private tc.b0 f20467f;

    /* renamed from: g  reason: collision with root package name */
    private tc.b0 f20468g;

    /* renamed from: h  reason: collision with root package name */
    private int f20469h;

    /* renamed from: i  reason: collision with root package name */
    private int f20470i;

    /* renamed from: j  reason: collision with root package name */
    private int f20471j;

    /* renamed from: k  reason: collision with root package name */
    private boolean f20472k;

    /* renamed from: l  reason: collision with root package name */
    private boolean f20473l;

    /* renamed from: m  reason: collision with root package name */
    private int f20474m;

    /* renamed from: n  reason: collision with root package name */
    private int f20475n;

    /* renamed from: o  reason: collision with root package name */
    private int f20476o;

    /* renamed from: p  reason: collision with root package name */
    private boolean f20477p;

    /* renamed from: q  reason: collision with root package name */
    private long f20478q;

    /* renamed from: r  reason: collision with root package name */
    private int f20479r;

    /* renamed from: s  reason: collision with root package name */
    private long f20480s;

    /* renamed from: t  reason: collision with root package name */
    private tc.b0 f20481t;

    /* renamed from: u  reason: collision with root package name */
    private long f20482u;

    public i(boolean z10) {
        this(z10, null);
    }

    private void a() {
        ne.a.e(this.f20467f);
        w0.j(this.f20481t);
        w0.j(this.f20468g);
    }

    private void g(ne.h0 h0Var) {
        if (h0Var.a() == 0) {
            return;
        }
        this.f20463b.f38969a[0] = h0Var.e()[h0Var.f()];
        this.f20463b.p(2);
        int h10 = this.f20463b.h(4);
        int i10 = this.f20475n;
        if (i10 != -1 && h10 != i10) {
            q();
            return;
        }
        if (!this.f20473l) {
            this.f20473l = true;
            this.f20474m = this.f20476o;
            this.f20475n = h10;
        }
        t();
    }

    private boolean h(ne.h0 h0Var, int i10) {
        h0Var.U(i10 + 1);
        if (!w(h0Var, this.f20463b.f38969a, 1)) {
            return false;
        }
        this.f20463b.p(4);
        int h10 = this.f20463b.h(1);
        int i11 = this.f20474m;
        if (i11 != -1 && h10 != i11) {
            return false;
        }
        if (this.f20475n != -1) {
            if (!w(h0Var, this.f20463b.f38969a, 1)) {
                return true;
            }
            this.f20463b.p(2);
            if (this.f20463b.h(4) != this.f20475n) {
                return false;
            }
            h0Var.U(i10 + 2);
        }
        if (!w(h0Var, this.f20463b.f38969a, 4)) {
            return true;
        }
        this.f20463b.p(14);
        int h11 = this.f20463b.h(13);
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

    private boolean i(ne.h0 h0Var, byte[] bArr, int i10) {
        int min = Math.min(h0Var.a(), i10 - this.f20470i);
        h0Var.l(bArr, this.f20470i, min);
        int i11 = this.f20470i + min;
        this.f20470i = i11;
        if (i11 == i10) {
            return true;
        }
        return false;
    }

    private void j(ne.h0 h0Var) {
        byte[] e10 = h0Var.e();
        int f10 = h0Var.f();
        int g10 = h0Var.g();
        while (f10 < g10) {
            int i10 = f10 + 1;
            byte b10 = e10[f10];
            int i11 = b10 & 255;
            if (this.f20471j == 512 && l((byte) -1, (byte) i11) && (this.f20473l || h(h0Var, f10 - 1))) {
                this.f20476o = (b10 & 8) >> 3;
                boolean z10 = true;
                if ((b10 & 1) != 0) {
                    z10 = false;
                }
                this.f20472k = z10;
                if (!this.f20473l) {
                    r();
                } else {
                    t();
                }
                h0Var.U(i10);
                return;
            }
            int i12 = this.f20471j;
            int i13 = i11 | i12;
            if (i13 != 329) {
                if (i13 != 511) {
                    if (i13 != 836) {
                        if (i13 != 1075) {
                            if (i12 != 256) {
                                this.f20471j = IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER;
                            }
                        } else {
                            u();
                            h0Var.U(i10);
                            return;
                        }
                    } else {
                        this.f20471j = IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET;
                    }
                } else {
                    this.f20471j = IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING;
                }
            } else {
                this.f20471j = 768;
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
        this.f20463b.p(0);
        if (!this.f20477p) {
            int i10 = 2;
            int h10 = this.f20463b.h(2) + 1;
            if (h10 != 2) {
                ne.y.i("AdtsReader", "Detected audio object type: " + h10 + ", but assuming AAC LC.");
            } else {
                i10 = h10;
            }
            this.f20463b.r(5);
            byte[] b10 = nc.a.b(i10, this.f20475n, this.f20463b.h(3));
            a.b f10 = nc.a.f(b10);
            Format G = new Format.b().U(this.f20466e).g0("audio/mp4a-latm").K(f10.f38793c).J(f10.f38792b).h0(f10.f38791a).V(Collections.singletonList(b10)).X(this.f20465d).G();
            this.f20478q = 1024000000 / G.K;
            this.f20467f.b(G);
            this.f20477p = true;
        } else {
            this.f20463b.r(10);
        }
        this.f20463b.r(4);
        int h11 = this.f20463b.h(13);
        int i11 = h11 - 7;
        if (this.f20472k) {
            i11 = h11 - 9;
        }
        v(this.f20467f, this.f20478q, 0, i11);
    }

    private void o() {
        this.f20468g.f(this.f20464c, 10);
        this.f20464c.U(6);
        v(this.f20468g, 0L, 10, this.f20464c.G() + 10);
    }

    private void p(ne.h0 h0Var) {
        int min = Math.min(h0Var.a(), this.f20479r - this.f20470i);
        this.f20481t.f(h0Var, min);
        int i10 = this.f20470i + min;
        this.f20470i = i10;
        int i11 = this.f20479r;
        if (i10 == i11) {
            long j10 = this.f20480s;
            if (j10 != -9223372036854775807L) {
                this.f20481t.d(j10, 1, i11, 0, null);
                this.f20480s += this.f20482u;
            }
            s();
        }
    }

    private void q() {
        this.f20473l = false;
        s();
    }

    private void r() {
        this.f20469h = 1;
        this.f20470i = 0;
    }

    private void s() {
        this.f20469h = 0;
        this.f20470i = 0;
        this.f20471j = IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER;
    }

    private void t() {
        this.f20469h = 3;
        this.f20470i = 0;
    }

    private void u() {
        this.f20469h = 2;
        this.f20470i = f20461v.length;
        this.f20479r = 0;
        this.f20464c.U(0);
    }

    private void v(tc.b0 b0Var, long j10, int i10, int i11) {
        this.f20469h = 4;
        this.f20470i = i10;
        this.f20481t = b0Var;
        this.f20482u = j10;
        this.f20479r = i11;
    }

    private boolean w(ne.h0 h0Var, byte[] bArr, int i10) {
        if (h0Var.a() < i10) {
            return false;
        }
        h0Var.l(bArr, 0, i10);
        return true;
    }

    @Override // dd.m
    public void b(ne.h0 h0Var) {
        int i10;
        a();
        while (h0Var.a() > 0) {
            int i11 = this.f20469h;
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
                            if (this.f20472k) {
                                i10 = 7;
                            } else {
                                i10 = 5;
                            }
                            if (i(h0Var, this.f20463b.f38969a, i10)) {
                                n();
                            }
                        }
                    } else if (i(h0Var, this.f20464c.e(), 10)) {
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

    @Override // dd.m
    public void c() {
        this.f20480s = -9223372036854775807L;
        q();
    }

    @Override // dd.m
    public void e(long j10, int i10) {
        if (j10 != -9223372036854775807L) {
            this.f20480s = j10;
        }
    }

    @Override // dd.m
    public void f(tc.m mVar, i0.d dVar) {
        dVar.a();
        this.f20466e = dVar.b();
        tc.b0 c10 = mVar.c(dVar.c(), 1);
        this.f20467f = c10;
        this.f20481t = c10;
        if (this.f20462a) {
            dVar.a();
            tc.b0 c11 = mVar.c(dVar.c(), 5);
            this.f20468g = c11;
            c11.b(new Format.b().U(dVar.b()).g0("application/id3").G());
            return;
        }
        this.f20468g = new tc.j();
    }

    public long k() {
        return this.f20478q;
    }

    public i(boolean z10, String str) {
        this.f20463b = new ne.g0(new byte[7]);
        this.f20464c = new ne.h0(Arrays.copyOf(f20461v, 10));
        s();
        this.f20474m = -1;
        this.f20475n = -1;
        this.f20478q = -9223372036854775807L;
        this.f20480s = -9223372036854775807L;
        this.f20462a = z10;
        this.f20465d = str;
    }

    @Override // dd.m
    public void d() {
    }
}
