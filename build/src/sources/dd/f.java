package dd;

import com.google.android.exoplayer2.Format;
import dd.i0;
import nc.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class f implements m {

    /* renamed from: a  reason: collision with root package name */
    private final ne.g0 f21369a;

    /* renamed from: b  reason: collision with root package name */
    private final ne.h0 f21370b;

    /* renamed from: c  reason: collision with root package name */
    private final String f21371c;

    /* renamed from: d  reason: collision with root package name */
    private String f21372d;

    /* renamed from: e  reason: collision with root package name */
    private tc.b0 f21373e;

    /* renamed from: f  reason: collision with root package name */
    private int f21374f;

    /* renamed from: g  reason: collision with root package name */
    private int f21375g;

    /* renamed from: h  reason: collision with root package name */
    private boolean f21376h;

    /* renamed from: i  reason: collision with root package name */
    private boolean f21377i;

    /* renamed from: j  reason: collision with root package name */
    private long f21378j;

    /* renamed from: k  reason: collision with root package name */
    private Format f21379k;

    /* renamed from: l  reason: collision with root package name */
    private int f21380l;

    /* renamed from: m  reason: collision with root package name */
    private long f21381m;

    public f() {
        this(null);
    }

    private boolean a(ne.h0 h0Var, byte[] bArr, int i10) {
        int min = Math.min(h0Var.a(), i10 - this.f21375g);
        h0Var.l(bArr, this.f21375g, min);
        int i11 = this.f21375g + min;
        this.f21375g = i11;
        if (i11 == i10) {
            return true;
        }
        return false;
    }

    private void g() {
        this.f21369a.p(0);
        c.b d10 = nc.c.d(this.f21369a);
        Format format = this.f21379k;
        if (format == null || d10.f39908c != format.J || d10.f39907b != format.K || !"audio/ac4".equals(format.f12335w)) {
            Format G = new Format.b().U(this.f21372d).g0("audio/ac4").J(d10.f39908c).h0(d10.f39907b).X(this.f21371c).G();
            this.f21379k = G;
            this.f21373e.b(G);
        }
        this.f21380l = d10.f39909d;
        this.f21378j = (d10.f39910e * 1000000) / this.f21379k.K;
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
            if (!this.f21376h) {
                if (h0Var.H() == 172) {
                    z10 = true;
                }
                this.f21376h = z10;
            } else {
                H = h0Var.H();
                if (H == 172) {
                    z11 = true;
                } else {
                    z11 = false;
                }
                this.f21376h = z11;
                if (H == 64 || H == 65) {
                    break;
                }
            }
        }
        if (H == 65) {
            z10 = true;
        }
        this.f21377i = z10;
        return true;
    }

    @Override // dd.m
    public void b(ne.h0 h0Var) {
        int i10;
        ne.a.i(this.f21373e);
        while (h0Var.a() > 0) {
            int i11 = this.f21374f;
            if (i11 != 0) {
                if (i11 != 1) {
                    if (i11 == 2) {
                        int min = Math.min(h0Var.a(), this.f21380l - this.f21375g);
                        this.f21373e.f(h0Var, min);
                        int i12 = this.f21375g + min;
                        this.f21375g = i12;
                        int i13 = this.f21380l;
                        if (i12 == i13) {
                            long j10 = this.f21381m;
                            if (j10 != -9223372036854775807L) {
                                this.f21373e.d(j10, 1, i13, 0, null);
                                this.f21381m += this.f21378j;
                            }
                            this.f21374f = 0;
                        }
                    }
                } else if (a(h0Var, this.f21370b.e(), 16)) {
                    g();
                    this.f21370b.U(0);
                    this.f21373e.f(this.f21370b, 16);
                    this.f21374f = 2;
                }
            } else if (h(h0Var)) {
                this.f21374f = 1;
                this.f21370b.e()[0] = -84;
                byte[] e10 = this.f21370b.e();
                if (this.f21377i) {
                    i10 = 65;
                } else {
                    i10 = 64;
                }
                e10[1] = (byte) i10;
                this.f21375g = 2;
            }
        }
    }

    @Override // dd.m
    public void c() {
        this.f21374f = 0;
        this.f21375g = 0;
        this.f21376h = false;
        this.f21377i = false;
        this.f21381m = -9223372036854775807L;
    }

    @Override // dd.m
    public void e(long j10, int i10) {
        if (j10 != -9223372036854775807L) {
            this.f21381m = j10;
        }
    }

    @Override // dd.m
    public void f(tc.m mVar, i0.d dVar) {
        dVar.a();
        this.f21372d = dVar.b();
        this.f21373e = mVar.c(dVar.c(), 1);
    }

    public f(String str) {
        ne.g0 g0Var = new ne.g0(new byte[16]);
        this.f21369a = g0Var;
        this.f21370b = new ne.h0(g0Var.f40067a);
        this.f21374f = 0;
        this.f21375g = 0;
        this.f21376h = false;
        this.f21377i = false;
        this.f21381m = -9223372036854775807L;
        this.f21371c = str;
    }

    @Override // dd.m
    public void d() {
    }
}
