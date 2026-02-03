package dd;

import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import com.google.android.exoplayer2.Format;
import dd.i0;
import nc.b;
import ne.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class c implements m {

    /* renamed from: a  reason: collision with root package name */
    private final ne.g0 f20200a;

    /* renamed from: b  reason: collision with root package name */
    private final ne.h0 f20201b;

    /* renamed from: c  reason: collision with root package name */
    private final String f20202c;

    /* renamed from: d  reason: collision with root package name */
    private String f20203d;

    /* renamed from: e  reason: collision with root package name */
    private tc.b0 f20204e;

    /* renamed from: f  reason: collision with root package name */
    private int f20205f;

    /* renamed from: g  reason: collision with root package name */
    private int f20206g;

    /* renamed from: h  reason: collision with root package name */
    private boolean f20207h;

    /* renamed from: i  reason: collision with root package name */
    private long f20208i;

    /* renamed from: j  reason: collision with root package name */
    private Format f20209j;

    /* renamed from: k  reason: collision with root package name */
    private int f20210k;

    /* renamed from: l  reason: collision with root package name */
    private long f20211l;

    public c() {
        this(null);
    }

    private boolean a(ne.h0 h0Var, byte[] bArr, int i10) {
        int min = Math.min(h0Var.a(), i10 - this.f20206g);
        h0Var.l(bArr, this.f20206g, min);
        int i11 = this.f20206g + min;
        this.f20206g = i11;
        if (i11 == i10) {
            return true;
        }
        return false;
    }

    private void g() {
        this.f20200a.p(0);
        b.C0519b f10 = nc.b.f(this.f20200a);
        Format format = this.f20209j;
        if (format == null || f10.f39940d != format.J || f10.f39939c != format.K || !w0.c(f10.f39937a, format.f11303w)) {
            Format.b b02 = new Format.b().U(this.f20203d).g0(f10.f39937a).J(f10.f39940d).h0(f10.f39939c).X(this.f20202c).b0(f10.f39943g);
            if ("audio/ac3".equals(f10.f39937a)) {
                b02.I(f10.f39943g);
            }
            Format G = b02.G();
            this.f20209j = G;
            this.f20204e.b(G);
        }
        this.f20210k = f10.f39941e;
        this.f20208i = (f10.f39942f * 1000000) / this.f20209j.K;
    }

    private boolean h(ne.h0 h0Var) {
        while (true) {
            boolean z10 = false;
            if (h0Var.a() <= 0) {
                return false;
            }
            if (!this.f20207h) {
                if (h0Var.H() == 11) {
                    z10 = true;
                }
                this.f20207h = z10;
            } else {
                int H = h0Var.H();
                if (H == 119) {
                    this.f20207h = false;
                    return true;
                }
                if (H == 11) {
                    z10 = true;
                }
                this.f20207h = z10;
            }
        }
    }

    @Override // dd.m
    public void b(ne.h0 h0Var) {
        ne.a.i(this.f20204e);
        while (h0Var.a() > 0) {
            int i10 = this.f20205f;
            if (i10 != 0) {
                if (i10 != 1) {
                    if (i10 == 2) {
                        int min = Math.min(h0Var.a(), this.f20210k - this.f20206g);
                        this.f20204e.f(h0Var, min);
                        int i11 = this.f20206g + min;
                        this.f20206g = i11;
                        int i12 = this.f20210k;
                        if (i11 == i12) {
                            long j10 = this.f20211l;
                            if (j10 != -9223372036854775807L) {
                                this.f20204e.d(j10, 1, i12, 0, null);
                                this.f20211l += this.f20208i;
                            }
                            this.f20205f = 0;
                        }
                    }
                } else if (a(h0Var, this.f20201b.e(), IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT)) {
                    g();
                    this.f20201b.U(0);
                    this.f20204e.f(this.f20201b, IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT);
                    this.f20205f = 2;
                }
            } else if (h(h0Var)) {
                this.f20205f = 1;
                this.f20201b.e()[0] = 11;
                this.f20201b.e()[1] = 119;
                this.f20206g = 2;
            }
        }
    }

    @Override // dd.m
    public void c() {
        this.f20205f = 0;
        this.f20206g = 0;
        this.f20207h = false;
        this.f20211l = -9223372036854775807L;
    }

    @Override // dd.m
    public void e(long j10, int i10) {
        if (j10 != -9223372036854775807L) {
            this.f20211l = j10;
        }
    }

    @Override // dd.m
    public void f(tc.m mVar, i0.d dVar) {
        dVar.a();
        this.f20203d = dVar.b();
        this.f20204e = mVar.c(dVar.c(), 1);
    }

    public c(String str) {
        ne.g0 g0Var = new ne.g0(new byte[IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT]);
        this.f20200a = g0Var;
        this.f20201b = new ne.h0(g0Var.f40106a);
        this.f20205f = 0;
        this.f20211l = -9223372036854775807L;
        this.f20202c = str;
    }

    @Override // dd.m
    public void d() {
    }
}
