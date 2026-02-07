package dd;

import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import com.google.android.exoplayer2.Format;
import dd.i0;
import nc.b;
import ne.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class c implements m {

    /* renamed from: a  reason: collision with root package name */
    private final ne.g0 f20371a;

    /* renamed from: b  reason: collision with root package name */
    private final ne.h0 f20372b;

    /* renamed from: c  reason: collision with root package name */
    private final String f20373c;

    /* renamed from: d  reason: collision with root package name */
    private String f20374d;

    /* renamed from: e  reason: collision with root package name */
    private tc.b0 f20375e;

    /* renamed from: f  reason: collision with root package name */
    private int f20376f;

    /* renamed from: g  reason: collision with root package name */
    private int f20377g;

    /* renamed from: h  reason: collision with root package name */
    private boolean f20378h;

    /* renamed from: i  reason: collision with root package name */
    private long f20379i;

    /* renamed from: j  reason: collision with root package name */
    private Format f20380j;

    /* renamed from: k  reason: collision with root package name */
    private int f20381k;

    /* renamed from: l  reason: collision with root package name */
    private long f20382l;

    public c() {
        this(null);
    }

    private boolean a(ne.h0 h0Var, byte[] bArr, int i10) {
        int min = Math.min(h0Var.a(), i10 - this.f20377g);
        h0Var.l(bArr, this.f20377g, min);
        int i11 = this.f20377g + min;
        this.f20377g = i11;
        if (i11 == i10) {
            return true;
        }
        return false;
    }

    private void g() {
        this.f20371a.p(0);
        b.C0535b f10 = nc.b.f(this.f20371a);
        Format format = this.f20380j;
        if (format == null || f10.f38803d != format.J || f10.f38802c != format.K || !w0.c(f10.f38800a, format.f11587w)) {
            Format.b b02 = new Format.b().U(this.f20374d).g0(f10.f38800a).J(f10.f38803d).h0(f10.f38802c).X(this.f20373c).b0(f10.f38806g);
            if ("audio/ac3".equals(f10.f38800a)) {
                b02.I(f10.f38806g);
            }
            Format G = b02.G();
            this.f20380j = G;
            this.f20375e.b(G);
        }
        this.f20381k = f10.f38804e;
        this.f20379i = (f10.f38805f * 1000000) / this.f20380j.K;
    }

    private boolean h(ne.h0 h0Var) {
        while (true) {
            boolean z10 = false;
            if (h0Var.a() <= 0) {
                return false;
            }
            if (!this.f20378h) {
                if (h0Var.H() == 11) {
                    z10 = true;
                }
                this.f20378h = z10;
            } else {
                int H = h0Var.H();
                if (H == 119) {
                    this.f20378h = false;
                    return true;
                }
                if (H == 11) {
                    z10 = true;
                }
                this.f20378h = z10;
            }
        }
    }

    @Override // dd.m
    public void b(ne.h0 h0Var) {
        ne.a.i(this.f20375e);
        while (h0Var.a() > 0) {
            int i10 = this.f20376f;
            if (i10 != 0) {
                if (i10 != 1) {
                    if (i10 == 2) {
                        int min = Math.min(h0Var.a(), this.f20381k - this.f20377g);
                        this.f20375e.f(h0Var, min);
                        int i11 = this.f20377g + min;
                        this.f20377g = i11;
                        int i12 = this.f20381k;
                        if (i11 == i12) {
                            long j10 = this.f20382l;
                            if (j10 != -9223372036854775807L) {
                                this.f20375e.d(j10, 1, i12, 0, null);
                                this.f20382l += this.f20379i;
                            }
                            this.f20376f = 0;
                        }
                    }
                } else if (a(h0Var, this.f20372b.e(), IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT)) {
                    g();
                    this.f20372b.U(0);
                    this.f20375e.f(this.f20372b, IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT);
                    this.f20376f = 2;
                }
            } else if (h(h0Var)) {
                this.f20376f = 1;
                this.f20372b.e()[0] = 11;
                this.f20372b.e()[1] = 119;
                this.f20377g = 2;
            }
        }
    }

    @Override // dd.m
    public void c() {
        this.f20376f = 0;
        this.f20377g = 0;
        this.f20378h = false;
        this.f20382l = -9223372036854775807L;
    }

    @Override // dd.m
    public void e(long j10, int i10) {
        if (j10 != -9223372036854775807L) {
            this.f20382l = j10;
        }
    }

    @Override // dd.m
    public void f(tc.m mVar, i0.d dVar) {
        dVar.a();
        this.f20374d = dVar.b();
        this.f20375e = mVar.c(dVar.c(), 1);
    }

    public c(String str) {
        ne.g0 g0Var = new ne.g0(new byte[IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT]);
        this.f20371a = g0Var;
        this.f20372b = new ne.h0(g0Var.f38969a);
        this.f20376f = 0;
        this.f20382l = -9223372036854775807L;
        this.f20373c = str;
    }

    @Override // dd.m
    public void d() {
    }
}
