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
    private static final byte[] f21431v = {73, 68, 51};

    /* renamed from: a  reason: collision with root package name */
    private final boolean f21432a;

    /* renamed from: b  reason: collision with root package name */
    private final ne.g0 f21433b;

    /* renamed from: c  reason: collision with root package name */
    private final ne.h0 f21434c;

    /* renamed from: d  reason: collision with root package name */
    private final String f21435d;

    /* renamed from: e  reason: collision with root package name */
    private String f21436e;

    /* renamed from: f  reason: collision with root package name */
    private tc.b0 f21437f;

    /* renamed from: g  reason: collision with root package name */
    private tc.b0 f21438g;

    /* renamed from: h  reason: collision with root package name */
    private int f21439h;

    /* renamed from: i  reason: collision with root package name */
    private int f21440i;

    /* renamed from: j  reason: collision with root package name */
    private int f21441j;

    /* renamed from: k  reason: collision with root package name */
    private boolean f21442k;

    /* renamed from: l  reason: collision with root package name */
    private boolean f21443l;

    /* renamed from: m  reason: collision with root package name */
    private int f21444m;

    /* renamed from: n  reason: collision with root package name */
    private int f21445n;

    /* renamed from: o  reason: collision with root package name */
    private int f21446o;

    /* renamed from: p  reason: collision with root package name */
    private boolean f21447p;

    /* renamed from: q  reason: collision with root package name */
    private long f21448q;

    /* renamed from: r  reason: collision with root package name */
    private int f21449r;

    /* renamed from: s  reason: collision with root package name */
    private long f21450s;

    /* renamed from: t  reason: collision with root package name */
    private tc.b0 f21451t;

    /* renamed from: u  reason: collision with root package name */
    private long f21452u;

    public i(boolean z10) {
        this(z10, null);
    }

    private void a() {
        ne.a.e(this.f21437f);
        w0.j(this.f21451t);
        w0.j(this.f21438g);
    }

    private void g(ne.h0 h0Var) {
        if (h0Var.a() == 0) {
            return;
        }
        this.f21433b.f40067a[0] = h0Var.e()[h0Var.f()];
        this.f21433b.p(2);
        int h10 = this.f21433b.h(4);
        int i10 = this.f21445n;
        if (i10 != -1 && h10 != i10) {
            q();
            return;
        }
        if (!this.f21443l) {
            this.f21443l = true;
            this.f21444m = this.f21446o;
            this.f21445n = h10;
        }
        t();
    }

    private boolean h(ne.h0 h0Var, int i10) {
        h0Var.U(i10 + 1);
        if (!w(h0Var, this.f21433b.f40067a, 1)) {
            return false;
        }
        this.f21433b.p(4);
        int h10 = this.f21433b.h(1);
        int i11 = this.f21444m;
        if (i11 != -1 && h10 != i11) {
            return false;
        }
        if (this.f21445n != -1) {
            if (!w(h0Var, this.f21433b.f40067a, 1)) {
                return true;
            }
            this.f21433b.p(2);
            if (this.f21433b.h(4) != this.f21445n) {
                return false;
            }
            h0Var.U(i10 + 2);
        }
        if (!w(h0Var, this.f21433b.f40067a, 4)) {
            return true;
        }
        this.f21433b.p(14);
        int h11 = this.f21433b.h(13);
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
        int min = Math.min(h0Var.a(), i10 - this.f21440i);
        h0Var.l(bArr, this.f21440i, min);
        int i11 = this.f21440i + min;
        this.f21440i = i11;
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
            if (this.f21441j == 512 && l((byte) -1, (byte) i11) && (this.f21443l || h(h0Var, f10 - 1))) {
                this.f21446o = (b10 & 8) >> 3;
                boolean z10 = true;
                if ((b10 & 1) != 0) {
                    z10 = false;
                }
                this.f21442k = z10;
                if (!this.f21443l) {
                    r();
                } else {
                    t();
                }
                h0Var.U(i10);
                return;
            }
            int i12 = this.f21441j;
            int i13 = i11 | i12;
            if (i13 != 329) {
                if (i13 != 511) {
                    if (i13 != 836) {
                        if (i13 != 1075) {
                            if (i12 != 256) {
                                this.f21441j = IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER;
                            }
                        } else {
                            u();
                            h0Var.U(i10);
                            return;
                        }
                    } else {
                        this.f21441j = IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET;
                    }
                } else {
                    this.f21441j = IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING;
                }
            } else {
                this.f21441j = 768;
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
        this.f21433b.p(0);
        if (!this.f21447p) {
            int i10 = 2;
            int h10 = this.f21433b.h(2) + 1;
            if (h10 != 2) {
                ne.y.i("AdtsReader", "Detected audio object type: " + h10 + ", but assuming AAC LC.");
            } else {
                i10 = h10;
            }
            this.f21433b.r(5);
            byte[] b10 = nc.a.b(i10, this.f21445n, this.f21433b.h(3));
            a.b f10 = nc.a.f(b10);
            Format G = new Format.b().U(this.f21436e).g0("audio/mp4a-latm").K(f10.f39891c).J(f10.f39890b).h0(f10.f39889a).V(Collections.singletonList(b10)).X(this.f21435d).G();
            this.f21448q = 1024000000 / G.K;
            this.f21437f.b(G);
            this.f21447p = true;
        } else {
            this.f21433b.r(10);
        }
        this.f21433b.r(4);
        int h11 = this.f21433b.h(13);
        int i11 = h11 - 7;
        if (this.f21442k) {
            i11 = h11 - 9;
        }
        v(this.f21437f, this.f21448q, 0, i11);
    }

    private void o() {
        this.f21438g.f(this.f21434c, 10);
        this.f21434c.U(6);
        v(this.f21438g, 0L, 10, this.f21434c.G() + 10);
    }

    private void p(ne.h0 h0Var) {
        int min = Math.min(h0Var.a(), this.f21449r - this.f21440i);
        this.f21451t.f(h0Var, min);
        int i10 = this.f21440i + min;
        this.f21440i = i10;
        int i11 = this.f21449r;
        if (i10 == i11) {
            long j10 = this.f21450s;
            if (j10 != -9223372036854775807L) {
                this.f21451t.d(j10, 1, i11, 0, null);
                this.f21450s += this.f21452u;
            }
            s();
        }
    }

    private void q() {
        this.f21443l = false;
        s();
    }

    private void r() {
        this.f21439h = 1;
        this.f21440i = 0;
    }

    private void s() {
        this.f21439h = 0;
        this.f21440i = 0;
        this.f21441j = IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER;
    }

    private void t() {
        this.f21439h = 3;
        this.f21440i = 0;
    }

    private void u() {
        this.f21439h = 2;
        this.f21440i = f21431v.length;
        this.f21449r = 0;
        this.f21434c.U(0);
    }

    private void v(tc.b0 b0Var, long j10, int i10, int i11) {
        this.f21439h = 4;
        this.f21440i = i10;
        this.f21451t = b0Var;
        this.f21452u = j10;
        this.f21449r = i11;
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
            int i11 = this.f21439h;
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
                            if (this.f21442k) {
                                i10 = 7;
                            } else {
                                i10 = 5;
                            }
                            if (i(h0Var, this.f21433b.f40067a, i10)) {
                                n();
                            }
                        }
                    } else if (i(h0Var, this.f21434c.e(), 10)) {
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
        this.f21450s = -9223372036854775807L;
        q();
    }

    @Override // dd.m
    public void e(long j10, int i10) {
        if (j10 != -9223372036854775807L) {
            this.f21450s = j10;
        }
    }

    @Override // dd.m
    public void f(tc.m mVar, i0.d dVar) {
        dVar.a();
        this.f21436e = dVar.b();
        tc.b0 c10 = mVar.c(dVar.c(), 1);
        this.f21437f = c10;
        this.f21451t = c10;
        if (this.f21432a) {
            dVar.a();
            tc.b0 c11 = mVar.c(dVar.c(), 5);
            this.f21438g = c11;
            c11.b(new Format.b().U(dVar.b()).g0("application/id3").G());
            return;
        }
        this.f21438g = new tc.j();
    }

    public long k() {
        return this.f21448q;
    }

    public i(boolean z10, String str) {
        this.f21433b = new ne.g0(new byte[7]);
        this.f21434c = new ne.h0(Arrays.copyOf(f21431v, 10));
        s();
        this.f21444m = -1;
        this.f21445n = -1;
        this.f21448q = -9223372036854775807L;
        this.f21450s = -9223372036854775807L;
        this.f21432a = z10;
        this.f21435d = str;
    }

    @Override // dd.m
    public void d() {
    }
}
