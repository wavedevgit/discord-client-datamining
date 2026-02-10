package ed;

import com.google.android.exoplayer2.Format;
import ed.i0;
import oc.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class f implements m {

    /* renamed from: a  reason: collision with root package name */
    private final oe.g0 f22455a;

    /* renamed from: b  reason: collision with root package name */
    private final oe.h0 f22456b;

    /* renamed from: c  reason: collision with root package name */
    private final String f22457c;

    /* renamed from: d  reason: collision with root package name */
    private String f22458d;

    /* renamed from: e  reason: collision with root package name */
    private uc.b0 f22459e;

    /* renamed from: f  reason: collision with root package name */
    private int f22460f;

    /* renamed from: g  reason: collision with root package name */
    private int f22461g;

    /* renamed from: h  reason: collision with root package name */
    private boolean f22462h;

    /* renamed from: i  reason: collision with root package name */
    private boolean f22463i;

    /* renamed from: j  reason: collision with root package name */
    private long f22464j;

    /* renamed from: k  reason: collision with root package name */
    private Format f22465k;

    /* renamed from: l  reason: collision with root package name */
    private int f22466l;

    /* renamed from: m  reason: collision with root package name */
    private long f22467m;

    public f() {
        this(null);
    }

    private boolean f(oe.h0 h0Var, byte[] bArr, int i10) {
        int min = Math.min(h0Var.a(), i10 - this.f22461g);
        h0Var.l(bArr, this.f22461g, min);
        int i11 = this.f22461g + min;
        this.f22461g = i11;
        if (i11 == i10) {
            return true;
        }
        return false;
    }

    private void g() {
        this.f22455a.p(0);
        c.b d10 = oc.c.d(this.f22455a);
        Format format = this.f22465k;
        if (format == null || d10.f38787c != format.J || d10.f38786b != format.K || !"audio/ac4".equals(format.f12304w)) {
            Format G = new Format.b().U(this.f22458d).g0("audio/ac4").J(d10.f38787c).h0(d10.f38786b).X(this.f22457c).G();
            this.f22465k = G;
            this.f22459e.c(G);
        }
        this.f22466l = d10.f38788d;
        this.f22464j = (d10.f38789e * 1000000) / this.f22465k.K;
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
            if (!this.f22462h) {
                if (h0Var.H() == 172) {
                    z10 = true;
                }
                this.f22462h = z10;
            } else {
                H = h0Var.H();
                if (H == 172) {
                    z11 = true;
                } else {
                    z11 = false;
                }
                this.f22462h = z11;
                if (H == 64 || H == 65) {
                    break;
                }
            }
        }
        if (H == 65) {
            z10 = true;
        }
        this.f22463i = z10;
        return true;
    }

    @Override // ed.m
    public void a(oe.h0 h0Var) {
        int i10;
        oe.a.i(this.f22459e);
        while (h0Var.a() > 0) {
            int i11 = this.f22460f;
            if (i11 != 0) {
                if (i11 != 1) {
                    if (i11 == 2) {
                        int min = Math.min(h0Var.a(), this.f22466l - this.f22461g);
                        this.f22459e.e(h0Var, min);
                        int i12 = this.f22461g + min;
                        this.f22461g = i12;
                        int i13 = this.f22466l;
                        if (i12 == i13) {
                            long j10 = this.f22467m;
                            if (j10 != -9223372036854775807L) {
                                this.f22459e.a(j10, 1, i13, 0, null);
                                this.f22467m += this.f22464j;
                            }
                            this.f22460f = 0;
                        }
                    }
                } else if (f(h0Var, this.f22456b.e(), 16)) {
                    g();
                    this.f22456b.U(0);
                    this.f22459e.e(this.f22456b, 16);
                    this.f22460f = 2;
                }
            } else if (h(h0Var)) {
                this.f22460f = 1;
                this.f22456b.e()[0] = -84;
                byte[] e10 = this.f22456b.e();
                if (this.f22463i) {
                    i10 = 65;
                } else {
                    i10 = 64;
                }
                e10[1] = (byte) i10;
                this.f22461g = 2;
            }
        }
    }

    @Override // ed.m
    public void b() {
        this.f22460f = 0;
        this.f22461g = 0;
        this.f22462h = false;
        this.f22463i = false;
        this.f22467m = -9223372036854775807L;
    }

    @Override // ed.m
    public void c(uc.m mVar, i0.d dVar) {
        dVar.a();
        this.f22458d = dVar.b();
        this.f22459e = mVar.c(dVar.c(), 1);
    }

    @Override // ed.m
    public void e(long j10, int i10) {
        if (j10 != -9223372036854775807L) {
            this.f22467m = j10;
        }
    }

    public f(String str) {
        oe.g0 g0Var = new oe.g0(new byte[16]);
        this.f22455a = g0Var;
        this.f22456b = new oe.h0(g0Var.f38946a);
        this.f22460f = 0;
        this.f22461g = 0;
        this.f22462h = false;
        this.f22463i = false;
        this.f22467m = -9223372036854775807L;
        this.f22457c = str;
    }

    @Override // ed.m
    public void d() {
    }
}
