package dd;

import com.google.android.exoplayer2.Format;
import dd.i0;
import nc.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class f implements m {

    /* renamed from: a  reason: collision with root package name */
    private final ne.g0 f20444a;

    /* renamed from: b  reason: collision with root package name */
    private final ne.h0 f20445b;

    /* renamed from: c  reason: collision with root package name */
    private final String f20446c;

    /* renamed from: d  reason: collision with root package name */
    private String f20447d;

    /* renamed from: e  reason: collision with root package name */
    private tc.b0 f20448e;

    /* renamed from: f  reason: collision with root package name */
    private int f20449f;

    /* renamed from: g  reason: collision with root package name */
    private int f20450g;

    /* renamed from: h  reason: collision with root package name */
    private boolean f20451h;

    /* renamed from: i  reason: collision with root package name */
    private boolean f20452i;

    /* renamed from: j  reason: collision with root package name */
    private long f20453j;

    /* renamed from: k  reason: collision with root package name */
    private Format f20454k;

    /* renamed from: l  reason: collision with root package name */
    private int f20455l;

    /* renamed from: m  reason: collision with root package name */
    private long f20456m;

    public f() {
        this(null);
    }

    private boolean a(ne.h0 h0Var, byte[] bArr, int i10) {
        int min = Math.min(h0Var.a(), i10 - this.f20450g);
        h0Var.l(bArr, this.f20450g, min);
        int i11 = this.f20450g + min;
        this.f20450g = i11;
        if (i11 == i10) {
            return true;
        }
        return false;
    }

    private void g() {
        this.f20444a.p(0);
        c.b d10 = nc.c.d(this.f20444a);
        Format format = this.f20454k;
        if (format == null || d10.f39407c != format.J || d10.f39406b != format.K || !"audio/ac4".equals(format.f11688w)) {
            Format G = new Format.b().U(this.f20447d).g0("audio/ac4").J(d10.f39407c).h0(d10.f39406b).X(this.f20446c).G();
            this.f20454k = G;
            this.f20448e.b(G);
        }
        this.f20455l = d10.f39408d;
        this.f20453j = (d10.f39409e * 1000000) / this.f20454k.K;
    }

    private boolean h(ne.h0 h0Var) {
        boolean z10;
        int H;
        boolean z11;
        while (true) {
            z10 = false;
            if (h0Var.a() <= 0) {
                return false;
            }
            if (!this.f20451h) {
                if (h0Var.H() == 172) {
                    z10 = true;
                }
                this.f20451h = z10;
            } else {
                H = h0Var.H();
                if (H == 172) {
                    z11 = true;
                } else {
                    z11 = false;
                }
                this.f20451h = z11;
                if (H == 64 || H == 65) {
                    break;
                }
            }
        }
        if (H == 65) {
            z10 = true;
        }
        this.f20452i = z10;
        return true;
    }

    @Override // dd.m
    public void b(ne.h0 h0Var) {
        int i10;
        ne.a.i(this.f20448e);
        while (h0Var.a() > 0) {
            int i11 = this.f20449f;
            if (i11 != 0) {
                if (i11 != 1) {
                    if (i11 == 2) {
                        int min = Math.min(h0Var.a(), this.f20455l - this.f20450g);
                        this.f20448e.f(h0Var, min);
                        int i12 = this.f20450g + min;
                        this.f20450g = i12;
                        int i13 = this.f20455l;
                        if (i12 == i13) {
                            long j10 = this.f20456m;
                            if (j10 != -9223372036854775807L) {
                                this.f20448e.d(j10, 1, i13, 0, null);
                                this.f20456m += this.f20453j;
                            }
                            this.f20449f = 0;
                        }
                    }
                } else if (a(h0Var, this.f20445b.e(), 16)) {
                    g();
                    this.f20445b.U(0);
                    this.f20448e.f(this.f20445b, 16);
                    this.f20449f = 2;
                }
            } else if (h(h0Var)) {
                this.f20449f = 1;
                this.f20445b.e()[0] = -84;
                byte[] e10 = this.f20445b.e();
                if (this.f20452i) {
                    i10 = 65;
                } else {
                    i10 = 64;
                }
                e10[1] = (byte) i10;
                this.f20450g = 2;
            }
        }
    }

    @Override // dd.m
    public void c() {
        this.f20449f = 0;
        this.f20450g = 0;
        this.f20451h = false;
        this.f20452i = false;
        this.f20456m = -9223372036854775807L;
    }

    @Override // dd.m
    public void e(long j10, int i10) {
        if (j10 != -9223372036854775807L) {
            this.f20456m = j10;
        }
    }

    @Override // dd.m
    public void f(tc.m mVar, i0.d dVar) {
        dVar.a();
        this.f20447d = dVar.b();
        this.f20448e = mVar.c(dVar.c(), 1);
    }

    public f(String str) {
        ne.g0 g0Var = new ne.g0(new byte[16]);
        this.f20444a = g0Var;
        this.f20445b = new ne.h0(g0Var.f39566a);
        this.f20449f = 0;
        this.f20450g = 0;
        this.f20451h = false;
        this.f20452i = false;
        this.f20456m = -9223372036854775807L;
        this.f20446c = str;
    }

    @Override // dd.m
    public void d() {
    }
}
