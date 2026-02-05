package dd;

import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import com.google.android.exoplayer2.Format;
import dd.i0;
import nc.b;
import ne.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class c implements m {

    /* renamed from: a  reason: collision with root package name */
    private final ne.g0 f20416a;

    /* renamed from: b  reason: collision with root package name */
    private final ne.h0 f20417b;

    /* renamed from: c  reason: collision with root package name */
    private final String f20418c;

    /* renamed from: d  reason: collision with root package name */
    private String f20419d;

    /* renamed from: e  reason: collision with root package name */
    private tc.b0 f20420e;

    /* renamed from: f  reason: collision with root package name */
    private int f20421f;

    /* renamed from: g  reason: collision with root package name */
    private int f20422g;

    /* renamed from: h  reason: collision with root package name */
    private boolean f20423h;

    /* renamed from: i  reason: collision with root package name */
    private long f20424i;

    /* renamed from: j  reason: collision with root package name */
    private Format f20425j;

    /* renamed from: k  reason: collision with root package name */
    private int f20426k;

    /* renamed from: l  reason: collision with root package name */
    private long f20427l;

    public c() {
        this(null);
    }

    private boolean a(ne.h0 h0Var, byte[] bArr, int i10) {
        int min = Math.min(h0Var.a(), i10 - this.f20422g);
        h0Var.l(bArr, this.f20422g, min);
        int i11 = this.f20422g + min;
        this.f20422g = i11;
        if (i11 == i10) {
            return true;
        }
        return false;
    }

    private void g() {
        this.f20416a.p(0);
        b.C0521b f10 = nc.b.f(this.f20416a);
        Format format = this.f20425j;
        if (format == null || f10.f39400d != format.J || f10.f39399c != format.K || !w0.c(f10.f39397a, format.f11688w)) {
            Format.b b02 = new Format.b().U(this.f20419d).g0(f10.f39397a).J(f10.f39400d).h0(f10.f39399c).X(this.f20418c).b0(f10.f39403g);
            if ("audio/ac3".equals(f10.f39397a)) {
                b02.I(f10.f39403g);
            }
            Format G = b02.G();
            this.f20425j = G;
            this.f20420e.b(G);
        }
        this.f20426k = f10.f39401e;
        this.f20424i = (f10.f39402f * 1000000) / this.f20425j.K;
    }

    private boolean h(ne.h0 h0Var) {
        while (true) {
            boolean z10 = false;
            if (h0Var.a() <= 0) {
                return false;
            }
            if (!this.f20423h) {
                if (h0Var.H() == 11) {
                    z10 = true;
                }
                this.f20423h = z10;
            } else {
                int H = h0Var.H();
                if (H == 119) {
                    this.f20423h = false;
                    return true;
                }
                if (H == 11) {
                    z10 = true;
                }
                this.f20423h = z10;
            }
        }
    }

    @Override // dd.m
    public void b(ne.h0 h0Var) {
        ne.a.i(this.f20420e);
        while (h0Var.a() > 0) {
            int i10 = this.f20421f;
            if (i10 != 0) {
                if (i10 != 1) {
                    if (i10 == 2) {
                        int min = Math.min(h0Var.a(), this.f20426k - this.f20422g);
                        this.f20420e.f(h0Var, min);
                        int i11 = this.f20422g + min;
                        this.f20422g = i11;
                        int i12 = this.f20426k;
                        if (i11 == i12) {
                            long j10 = this.f20427l;
                            if (j10 != -9223372036854775807L) {
                                this.f20420e.d(j10, 1, i12, 0, null);
                                this.f20427l += this.f20424i;
                            }
                            this.f20421f = 0;
                        }
                    }
                } else if (a(h0Var, this.f20417b.e(), IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT)) {
                    g();
                    this.f20417b.U(0);
                    this.f20420e.f(this.f20417b, IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT);
                    this.f20421f = 2;
                }
            } else if (h(h0Var)) {
                this.f20421f = 1;
                this.f20417b.e()[0] = 11;
                this.f20417b.e()[1] = 119;
                this.f20422g = 2;
            }
        }
    }

    @Override // dd.m
    public void c() {
        this.f20421f = 0;
        this.f20422g = 0;
        this.f20423h = false;
        this.f20427l = -9223372036854775807L;
    }

    @Override // dd.m
    public void e(long j10, int i10) {
        if (j10 != -9223372036854775807L) {
            this.f20427l = j10;
        }
    }

    @Override // dd.m
    public void f(tc.m mVar, i0.d dVar) {
        dVar.a();
        this.f20419d = dVar.b();
        this.f20420e = mVar.c(dVar.c(), 1);
    }

    public c(String str) {
        ne.g0 g0Var = new ne.g0(new byte[IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT]);
        this.f20416a = g0Var;
        this.f20417b = new ne.h0(g0Var.f39566a);
        this.f20421f = 0;
        this.f20427l = -9223372036854775807L;
        this.f20418c = str;
    }

    @Override // dd.m
    public void d() {
    }
}
