package dd;

import com.google.android.exoplayer2.Format;
import dd.i0;
import nc.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class f implements m {

    /* renamed from: a  reason: collision with root package name */
    private final ne.g0 f20228a;

    /* renamed from: b  reason: collision with root package name */
    private final ne.h0 f20229b;

    /* renamed from: c  reason: collision with root package name */
    private final String f20230c;

    /* renamed from: d  reason: collision with root package name */
    private String f20231d;

    /* renamed from: e  reason: collision with root package name */
    private tc.b0 f20232e;

    /* renamed from: f  reason: collision with root package name */
    private int f20233f;

    /* renamed from: g  reason: collision with root package name */
    private int f20234g;

    /* renamed from: h  reason: collision with root package name */
    private boolean f20235h;

    /* renamed from: i  reason: collision with root package name */
    private boolean f20236i;

    /* renamed from: j  reason: collision with root package name */
    private long f20237j;

    /* renamed from: k  reason: collision with root package name */
    private Format f20238k;

    /* renamed from: l  reason: collision with root package name */
    private int f20239l;

    /* renamed from: m  reason: collision with root package name */
    private long f20240m;

    public f() {
        this(null);
    }

    private boolean a(ne.h0 h0Var, byte[] bArr, int i10) {
        int min = Math.min(h0Var.a(), i10 - this.f20234g);
        h0Var.l(bArr, this.f20234g, min);
        int i11 = this.f20234g + min;
        this.f20234g = i11;
        if (i11 == i10) {
            return true;
        }
        return false;
    }

    private void g() {
        this.f20228a.p(0);
        c.b d10 = nc.c.d(this.f20228a);
        Format format = this.f20238k;
        if (format == null || d10.f39947c != format.J || d10.f39946b != format.K || !"audio/ac4".equals(format.f11303w)) {
            Format G = new Format.b().U(this.f20231d).g0("audio/ac4").J(d10.f39947c).h0(d10.f39946b).X(this.f20230c).G();
            this.f20238k = G;
            this.f20232e.b(G);
        }
        this.f20239l = d10.f39948d;
        this.f20237j = (d10.f39949e * 1000000) / this.f20238k.K;
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
            if (!this.f20235h) {
                if (h0Var.H() == 172) {
                    z10 = true;
                }
                this.f20235h = z10;
            } else {
                H = h0Var.H();
                if (H == 172) {
                    z11 = true;
                } else {
                    z11 = false;
                }
                this.f20235h = z11;
                if (H == 64 || H == 65) {
                    break;
                }
            }
        }
        if (H == 65) {
            z10 = true;
        }
        this.f20236i = z10;
        return true;
    }

    @Override // dd.m
    public void b(ne.h0 h0Var) {
        int i10;
        ne.a.i(this.f20232e);
        while (h0Var.a() > 0) {
            int i11 = this.f20233f;
            if (i11 != 0) {
                if (i11 != 1) {
                    if (i11 == 2) {
                        int min = Math.min(h0Var.a(), this.f20239l - this.f20234g);
                        this.f20232e.f(h0Var, min);
                        int i12 = this.f20234g + min;
                        this.f20234g = i12;
                        int i13 = this.f20239l;
                        if (i12 == i13) {
                            long j10 = this.f20240m;
                            if (j10 != -9223372036854775807L) {
                                this.f20232e.d(j10, 1, i13, 0, null);
                                this.f20240m += this.f20237j;
                            }
                            this.f20233f = 0;
                        }
                    }
                } else if (a(h0Var, this.f20229b.e(), 16)) {
                    g();
                    this.f20229b.U(0);
                    this.f20232e.f(this.f20229b, 16);
                    this.f20233f = 2;
                }
            } else if (h(h0Var)) {
                this.f20233f = 1;
                this.f20229b.e()[0] = -84;
                byte[] e10 = this.f20229b.e();
                if (this.f20236i) {
                    i10 = 65;
                } else {
                    i10 = 64;
                }
                e10[1] = (byte) i10;
                this.f20234g = 2;
            }
        }
    }

    @Override // dd.m
    public void c() {
        this.f20233f = 0;
        this.f20234g = 0;
        this.f20235h = false;
        this.f20236i = false;
        this.f20240m = -9223372036854775807L;
    }

    @Override // dd.m
    public void e(long j10, int i10) {
        if (j10 != -9223372036854775807L) {
            this.f20240m = j10;
        }
    }

    @Override // dd.m
    public void f(tc.m mVar, i0.d dVar) {
        dVar.a();
        this.f20231d = dVar.b();
        this.f20232e = mVar.c(dVar.c(), 1);
    }

    public f(String str) {
        ne.g0 g0Var = new ne.g0(new byte[16]);
        this.f20228a = g0Var;
        this.f20229b = new ne.h0(g0Var.f40106a);
        this.f20233f = 0;
        this.f20234g = 0;
        this.f20235h = false;
        this.f20236i = false;
        this.f20240m = -9223372036854775807L;
        this.f20230c = str;
    }

    @Override // dd.m
    public void d() {
    }
}
