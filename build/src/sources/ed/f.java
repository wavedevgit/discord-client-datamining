package ed;

import com.google.android.exoplayer2.Format;
import ed.i0;
import oc.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class f implements m {

    /* renamed from: a  reason: collision with root package name */
    private final oe.g0 f21288a;

    /* renamed from: b  reason: collision with root package name */
    private final oe.h0 f21289b;

    /* renamed from: c  reason: collision with root package name */
    private final String f21290c;

    /* renamed from: d  reason: collision with root package name */
    private String f21291d;

    /* renamed from: e  reason: collision with root package name */
    private uc.b0 f21292e;

    /* renamed from: f  reason: collision with root package name */
    private int f21293f;

    /* renamed from: g  reason: collision with root package name */
    private int f21294g;

    /* renamed from: h  reason: collision with root package name */
    private boolean f21295h;

    /* renamed from: i  reason: collision with root package name */
    private boolean f21296i;

    /* renamed from: j  reason: collision with root package name */
    private long f21297j;

    /* renamed from: k  reason: collision with root package name */
    private Format f21298k;

    /* renamed from: l  reason: collision with root package name */
    private int f21299l;

    /* renamed from: m  reason: collision with root package name */
    private long f21300m;

    public f() {
        this(null);
    }

    private boolean f(oe.h0 h0Var, byte[] bArr, int i10) {
        int min = Math.min(h0Var.a(), i10 - this.f21294g);
        h0Var.l(bArr, this.f21294g, min);
        int i11 = this.f21294g + min;
        this.f21294g = i11;
        if (i11 == i10) {
            return true;
        }
        return false;
    }

    private void g() {
        this.f21288a.p(0);
        c.b d10 = oc.c.d(this.f21288a);
        Format format = this.f21298k;
        if (format == null || d10.f40461c != format.J || d10.f40460b != format.K || !"audio/ac4".equals(format.f11727w)) {
            Format G = new Format.b().U(this.f21291d).g0("audio/ac4").J(d10.f40461c).h0(d10.f40460b).X(this.f21290c).G();
            this.f21298k = G;
            this.f21292e.c(G);
        }
        this.f21299l = d10.f40462d;
        this.f21297j = (d10.f40463e * 1000000) / this.f21298k.K;
    }

    private boolean h(oe.h0 h0Var) {
        boolean z10;
        int H;
        boolean z11;
        while (true) {
            z10 = false;
            if (h0Var.a() <= 0) {
                return false;
            }
            if (!this.f21295h) {
                if (h0Var.H() == 172) {
                    z10 = true;
                }
                this.f21295h = z10;
            } else {
                H = h0Var.H();
                if (H == 172) {
                    z11 = true;
                } else {
                    z11 = false;
                }
                this.f21295h = z11;
                if (H == 64 || H == 65) {
                    break;
                }
            }
        }
        if (H == 65) {
            z10 = true;
        }
        this.f21296i = z10;
        return true;
    }

    @Override // ed.m
    public void a(oe.h0 h0Var) {
        int i10;
        oe.a.i(this.f21292e);
        while (h0Var.a() > 0) {
            int i11 = this.f21293f;
            if (i11 != 0) {
                if (i11 != 1) {
                    if (i11 == 2) {
                        int min = Math.min(h0Var.a(), this.f21299l - this.f21294g);
                        this.f21292e.e(h0Var, min);
                        int i12 = this.f21294g + min;
                        this.f21294g = i12;
                        int i13 = this.f21299l;
                        if (i12 == i13) {
                            long j10 = this.f21300m;
                            if (j10 != -9223372036854775807L) {
                                this.f21292e.a(j10, 1, i13, 0, null);
                                this.f21300m += this.f21297j;
                            }
                            this.f21293f = 0;
                        }
                    }
                } else if (f(h0Var, this.f21289b.e(), 16)) {
                    g();
                    this.f21289b.U(0);
                    this.f21292e.e(this.f21289b, 16);
                    this.f21293f = 2;
                }
            } else if (h(h0Var)) {
                this.f21293f = 1;
                this.f21289b.e()[0] = -84;
                byte[] e10 = this.f21289b.e();
                if (this.f21296i) {
                    i10 = 65;
                } else {
                    i10 = 64;
                }
                e10[1] = (byte) i10;
                this.f21294g = 2;
            }
        }
    }

    @Override // ed.m
    public void b() {
        this.f21293f = 0;
        this.f21294g = 0;
        this.f21295h = false;
        this.f21296i = false;
        this.f21300m = -9223372036854775807L;
    }

    @Override // ed.m
    public void c(uc.m mVar, i0.d dVar) {
        dVar.a();
        this.f21291d = dVar.b();
        this.f21292e = mVar.c(dVar.c(), 1);
    }

    @Override // ed.m
    public void e(long j10, int i10) {
        if (j10 != -9223372036854775807L) {
            this.f21300m = j10;
        }
    }

    public f(String str) {
        oe.g0 g0Var = new oe.g0(new byte[16]);
        this.f21288a = g0Var;
        this.f21289b = new oe.h0(g0Var.f40620a);
        this.f21293f = 0;
        this.f21294g = 0;
        this.f21295h = false;
        this.f21296i = false;
        this.f21300m = -9223372036854775807L;
        this.f21290c = str;
    }

    @Override // ed.m
    public void d() {
    }
}
