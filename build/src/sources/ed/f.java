package ed;

import com.google.android.exoplayer2.Format;
import ed.i0;
import oc.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class f implements m {

    /* renamed from: a  reason: collision with root package name */
    private final oe.g0 f22456a;

    /* renamed from: b  reason: collision with root package name */
    private final oe.h0 f22457b;

    /* renamed from: c  reason: collision with root package name */
    private final String f22458c;

    /* renamed from: d  reason: collision with root package name */
    private String f22459d;

    /* renamed from: e  reason: collision with root package name */
    private uc.b0 f22460e;

    /* renamed from: f  reason: collision with root package name */
    private int f22461f;

    /* renamed from: g  reason: collision with root package name */
    private int f22462g;

    /* renamed from: h  reason: collision with root package name */
    private boolean f22463h;

    /* renamed from: i  reason: collision with root package name */
    private boolean f22464i;

    /* renamed from: j  reason: collision with root package name */
    private long f22465j;

    /* renamed from: k  reason: collision with root package name */
    private Format f22466k;

    /* renamed from: l  reason: collision with root package name */
    private int f22467l;

    /* renamed from: m  reason: collision with root package name */
    private long f22468m;

    public f() {
        this(null);
    }

    private boolean f(oe.h0 h0Var, byte[] bArr, int i10) {
        int min = Math.min(h0Var.a(), i10 - this.f22462g);
        h0Var.l(bArr, this.f22462g, min);
        int i11 = this.f22462g + min;
        this.f22462g = i11;
        if (i11 == i10) {
            return true;
        }
        return false;
    }

    private void g() {
        this.f22456a.p(0);
        c.b d10 = oc.c.d(this.f22456a);
        Format format = this.f22466k;
        if (format == null || d10.f39356c != format.J || d10.f39355b != format.K || !"audio/ac4".equals(format.f12305w)) {
            Format G = new Format.b().U(this.f22459d).g0("audio/ac4").J(d10.f39356c).h0(d10.f39355b).X(this.f22458c).G();
            this.f22466k = G;
            this.f22460e.c(G);
        }
        this.f22467l = d10.f39357d;
        this.f22465j = (d10.f39358e * 1000000) / this.f22466k.K;
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
            if (!this.f22463h) {
                if (h0Var.H() == 172) {
                    z10 = true;
                }
                this.f22463h = z10;
            } else {
                H = h0Var.H();
                if (H == 172) {
                    z11 = true;
                } else {
                    z11 = false;
                }
                this.f22463h = z11;
                if (H == 64 || H == 65) {
                    break;
                }
            }
        }
        if (H == 65) {
            z10 = true;
        }
        this.f22464i = z10;
        return true;
    }

    @Override // ed.m
    public void a(oe.h0 h0Var) {
        int i10;
        oe.a.i(this.f22460e);
        while (h0Var.a() > 0) {
            int i11 = this.f22461f;
            if (i11 != 0) {
                if (i11 != 1) {
                    if (i11 == 2) {
                        int min = Math.min(h0Var.a(), this.f22467l - this.f22462g);
                        this.f22460e.e(h0Var, min);
                        int i12 = this.f22462g + min;
                        this.f22462g = i12;
                        int i13 = this.f22467l;
                        if (i12 == i13) {
                            long j10 = this.f22468m;
                            if (j10 != -9223372036854775807L) {
                                this.f22460e.a(j10, 1, i13, 0, null);
                                this.f22468m += this.f22465j;
                            }
                            this.f22461f = 0;
                        }
                    }
                } else if (f(h0Var, this.f22457b.e(), 16)) {
                    g();
                    this.f22457b.U(0);
                    this.f22460e.e(this.f22457b, 16);
                    this.f22461f = 2;
                }
            } else if (h(h0Var)) {
                this.f22461f = 1;
                this.f22457b.e()[0] = -84;
                byte[] e10 = this.f22457b.e();
                if (this.f22464i) {
                    i10 = 65;
                } else {
                    i10 = 64;
                }
                e10[1] = (byte) i10;
                this.f22462g = 2;
            }
        }
    }

    @Override // ed.m
    public void b() {
        this.f22461f = 0;
        this.f22462g = 0;
        this.f22463h = false;
        this.f22464i = false;
        this.f22468m = -9223372036854775807L;
    }

    @Override // ed.m
    public void c(uc.m mVar, i0.d dVar) {
        dVar.a();
        this.f22459d = dVar.b();
        this.f22460e = mVar.c(dVar.c(), 1);
    }

    @Override // ed.m
    public void e(long j10, int i10) {
        if (j10 != -9223372036854775807L) {
            this.f22468m = j10;
        }
    }

    public f(String str) {
        oe.g0 g0Var = new oe.g0(new byte[16]);
        this.f22456a = g0Var;
        this.f22457b = new oe.h0(g0Var.f39515a);
        this.f22461f = 0;
        this.f22462g = 0;
        this.f22463h = false;
        this.f22464i = false;
        this.f22468m = -9223372036854775807L;
        this.f22458c = str;
    }

    @Override // ed.m
    public void d() {
    }
}
