package dd;

import com.google.android.exoplayer2.Format;
import dd.i0;
import nc.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class f implements m {

    /* renamed from: a  reason: collision with root package name */
    private final ne.g0 f21793a;

    /* renamed from: b  reason: collision with root package name */
    private final ne.h0 f21794b;

    /* renamed from: c  reason: collision with root package name */
    private final String f21795c;

    /* renamed from: d  reason: collision with root package name */
    private String f21796d;

    /* renamed from: e  reason: collision with root package name */
    private tc.b0 f21797e;

    /* renamed from: f  reason: collision with root package name */
    private int f21798f;

    /* renamed from: g  reason: collision with root package name */
    private int f21799g;

    /* renamed from: h  reason: collision with root package name */
    private boolean f21800h;

    /* renamed from: i  reason: collision with root package name */
    private boolean f21801i;

    /* renamed from: j  reason: collision with root package name */
    private long f21802j;

    /* renamed from: k  reason: collision with root package name */
    private Format f21803k;

    /* renamed from: l  reason: collision with root package name */
    private int f21804l;

    /* renamed from: m  reason: collision with root package name */
    private long f21805m;

    public f() {
        this(null);
    }

    private boolean a(ne.h0 h0Var, byte[] bArr, int i10) {
        int min = Math.min(h0Var.a(), i10 - this.f21799g);
        h0Var.l(bArr, this.f21799g, min);
        int i11 = this.f21799g + min;
        this.f21799g = i11;
        if (i11 == i10) {
            return true;
        }
        return false;
    }

    private void g() {
        this.f21793a.p(0);
        c.b d10 = nc.c.d(this.f21793a);
        Format format = this.f21803k;
        if (format == null || d10.f40029c != format.J || d10.f40028b != format.K || !"audio/ac4".equals(format.f12706w)) {
            Format G = new Format.b().U(this.f21796d).g0("audio/ac4").J(d10.f40029c).h0(d10.f40028b).X(this.f21795c).G();
            this.f21803k = G;
            this.f21797e.b(G);
        }
        this.f21804l = d10.f40030d;
        this.f21802j = (d10.f40031e * 1000000) / this.f21803k.K;
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
            if (!this.f21800h) {
                if (h0Var.H() == 172) {
                    z10 = true;
                }
                this.f21800h = z10;
            } else {
                H = h0Var.H();
                if (H == 172) {
                    z11 = true;
                } else {
                    z11 = false;
                }
                this.f21800h = z11;
                if (H == 64 || H == 65) {
                    break;
                }
            }
        }
        if (H == 65) {
            z10 = true;
        }
        this.f21801i = z10;
        return true;
    }

    @Override // dd.m
    public void b(ne.h0 h0Var) {
        int i10;
        ne.a.i(this.f21797e);
        while (h0Var.a() > 0) {
            int i11 = this.f21798f;
            if (i11 != 0) {
                if (i11 != 1) {
                    if (i11 == 2) {
                        int min = Math.min(h0Var.a(), this.f21804l - this.f21799g);
                        this.f21797e.f(h0Var, min);
                        int i12 = this.f21799g + min;
                        this.f21799g = i12;
                        int i13 = this.f21804l;
                        if (i12 == i13) {
                            long j10 = this.f21805m;
                            if (j10 != -9223372036854775807L) {
                                this.f21797e.d(j10, 1, i13, 0, null);
                                this.f21805m += this.f21802j;
                            }
                            this.f21798f = 0;
                        }
                    }
                } else if (a(h0Var, this.f21794b.e(), 16)) {
                    g();
                    this.f21794b.U(0);
                    this.f21797e.f(this.f21794b, 16);
                    this.f21798f = 2;
                }
            } else if (h(h0Var)) {
                this.f21798f = 1;
                this.f21794b.e()[0] = -84;
                byte[] e10 = this.f21794b.e();
                if (this.f21801i) {
                    i10 = 65;
                } else {
                    i10 = 64;
                }
                e10[1] = (byte) i10;
                this.f21799g = 2;
            }
        }
    }

    @Override // dd.m
    public void c() {
        this.f21798f = 0;
        this.f21799g = 0;
        this.f21800h = false;
        this.f21801i = false;
        this.f21805m = -9223372036854775807L;
    }

    @Override // dd.m
    public void e(long j10, int i10) {
        if (j10 != -9223372036854775807L) {
            this.f21805m = j10;
        }
    }

    @Override // dd.m
    public void f(tc.m mVar, i0.d dVar) {
        dVar.a();
        this.f21796d = dVar.b();
        this.f21797e = mVar.c(dVar.c(), 1);
    }

    public f(String str) {
        ne.g0 g0Var = new ne.g0(new byte[16]);
        this.f21793a = g0Var;
        this.f21794b = new ne.h0(g0Var.f40188a);
        this.f21798f = 0;
        this.f21799g = 0;
        this.f21800h = false;
        this.f21801i = false;
        this.f21805m = -9223372036854775807L;
        this.f21795c = str;
    }

    @Override // dd.m
    public void d() {
    }
}
