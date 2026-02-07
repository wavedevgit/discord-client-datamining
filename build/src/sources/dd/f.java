package dd;

import com.google.android.exoplayer2.Format;
import dd.i0;
import nc.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class f implements m {

    /* renamed from: a  reason: collision with root package name */
    private final ne.g0 f20399a;

    /* renamed from: b  reason: collision with root package name */
    private final ne.h0 f20400b;

    /* renamed from: c  reason: collision with root package name */
    private final String f20401c;

    /* renamed from: d  reason: collision with root package name */
    private String f20402d;

    /* renamed from: e  reason: collision with root package name */
    private tc.b0 f20403e;

    /* renamed from: f  reason: collision with root package name */
    private int f20404f;

    /* renamed from: g  reason: collision with root package name */
    private int f20405g;

    /* renamed from: h  reason: collision with root package name */
    private boolean f20406h;

    /* renamed from: i  reason: collision with root package name */
    private boolean f20407i;

    /* renamed from: j  reason: collision with root package name */
    private long f20408j;

    /* renamed from: k  reason: collision with root package name */
    private Format f20409k;

    /* renamed from: l  reason: collision with root package name */
    private int f20410l;

    /* renamed from: m  reason: collision with root package name */
    private long f20411m;

    public f() {
        this(null);
    }

    private boolean a(ne.h0 h0Var, byte[] bArr, int i10) {
        int min = Math.min(h0Var.a(), i10 - this.f20405g);
        h0Var.l(bArr, this.f20405g, min);
        int i11 = this.f20405g + min;
        this.f20405g = i11;
        if (i11 == i10) {
            return true;
        }
        return false;
    }

    private void g() {
        this.f20399a.p(0);
        c.b d10 = nc.c.d(this.f20399a);
        Format format = this.f20409k;
        if (format == null || d10.f38810c != format.J || d10.f38809b != format.K || !"audio/ac4".equals(format.f11587w)) {
            Format G = new Format.b().U(this.f20402d).g0("audio/ac4").J(d10.f38810c).h0(d10.f38809b).X(this.f20401c).G();
            this.f20409k = G;
            this.f20403e.b(G);
        }
        this.f20410l = d10.f38811d;
        this.f20408j = (d10.f38812e * 1000000) / this.f20409k.K;
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
            if (!this.f20406h) {
                if (h0Var.H() == 172) {
                    z10 = true;
                }
                this.f20406h = z10;
            } else {
                H = h0Var.H();
                if (H == 172) {
                    z11 = true;
                } else {
                    z11 = false;
                }
                this.f20406h = z11;
                if (H == 64 || H == 65) {
                    break;
                }
            }
        }
        if (H == 65) {
            z10 = true;
        }
        this.f20407i = z10;
        return true;
    }

    @Override // dd.m
    public void b(ne.h0 h0Var) {
        int i10;
        ne.a.i(this.f20403e);
        while (h0Var.a() > 0) {
            int i11 = this.f20404f;
            if (i11 != 0) {
                if (i11 != 1) {
                    if (i11 == 2) {
                        int min = Math.min(h0Var.a(), this.f20410l - this.f20405g);
                        this.f20403e.f(h0Var, min);
                        int i12 = this.f20405g + min;
                        this.f20405g = i12;
                        int i13 = this.f20410l;
                        if (i12 == i13) {
                            long j10 = this.f20411m;
                            if (j10 != -9223372036854775807L) {
                                this.f20403e.d(j10, 1, i13, 0, null);
                                this.f20411m += this.f20408j;
                            }
                            this.f20404f = 0;
                        }
                    }
                } else if (a(h0Var, this.f20400b.e(), 16)) {
                    g();
                    this.f20400b.U(0);
                    this.f20403e.f(this.f20400b, 16);
                    this.f20404f = 2;
                }
            } else if (h(h0Var)) {
                this.f20404f = 1;
                this.f20400b.e()[0] = -84;
                byte[] e10 = this.f20400b.e();
                if (this.f20407i) {
                    i10 = 65;
                } else {
                    i10 = 64;
                }
                e10[1] = (byte) i10;
                this.f20405g = 2;
            }
        }
    }

    @Override // dd.m
    public void c() {
        this.f20404f = 0;
        this.f20405g = 0;
        this.f20406h = false;
        this.f20407i = false;
        this.f20411m = -9223372036854775807L;
    }

    @Override // dd.m
    public void e(long j10, int i10) {
        if (j10 != -9223372036854775807L) {
            this.f20411m = j10;
        }
    }

    @Override // dd.m
    public void f(tc.m mVar, i0.d dVar) {
        dVar.a();
        this.f20402d = dVar.b();
        this.f20403e = mVar.c(dVar.c(), 1);
    }

    public f(String str) {
        ne.g0 g0Var = new ne.g0(new byte[16]);
        this.f20399a = g0Var;
        this.f20400b = new ne.h0(g0Var.f38969a);
        this.f20404f = 0;
        this.f20405g = 0;
        this.f20406h = false;
        this.f20407i = false;
        this.f20411m = -9223372036854775807L;
        this.f20401c = str;
    }

    @Override // dd.m
    public void d() {
    }
}
