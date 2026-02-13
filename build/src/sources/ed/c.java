package ed;

import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import com.google.android.exoplayer2.Format;
import ed.i0;
import oc.b;
import oe.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class c implements m {

    /* renamed from: a  reason: collision with root package name */
    private final oe.g0 f22428a;

    /* renamed from: b  reason: collision with root package name */
    private final oe.h0 f22429b;

    /* renamed from: c  reason: collision with root package name */
    private final String f22430c;

    /* renamed from: d  reason: collision with root package name */
    private String f22431d;

    /* renamed from: e  reason: collision with root package name */
    private uc.b0 f22432e;

    /* renamed from: f  reason: collision with root package name */
    private int f22433f;

    /* renamed from: g  reason: collision with root package name */
    private int f22434g;

    /* renamed from: h  reason: collision with root package name */
    private boolean f22435h;

    /* renamed from: i  reason: collision with root package name */
    private long f22436i;

    /* renamed from: j  reason: collision with root package name */
    private Format f22437j;

    /* renamed from: k  reason: collision with root package name */
    private int f22438k;

    /* renamed from: l  reason: collision with root package name */
    private long f22439l;

    public c() {
        this(null);
    }

    private boolean f(oe.h0 h0Var, byte[] bArr, int i10) {
        int min = Math.min(h0Var.a(), i10 - this.f22434g);
        h0Var.l(bArr, this.f22434g, min);
        int i11 = this.f22434g + min;
        this.f22434g = i11;
        if (i11 == i10) {
            return true;
        }
        return false;
    }

    private void g() {
        this.f22428a.p(0);
        b.C0548b f10 = oc.b.f(this.f22428a);
        Format format = this.f22437j;
        if (format == null || f10.f39349d != format.J || f10.f39348c != format.K || !w0.c(f10.f39346a, format.f12305w)) {
            Format.b b02 = new Format.b().U(this.f22431d).g0(f10.f39346a).J(f10.f39349d).h0(f10.f39348c).X(this.f22430c).b0(f10.f39352g);
            if ("audio/ac3".equals(f10.f39346a)) {
                b02.I(f10.f39352g);
            }
            Format G = b02.G();
            this.f22437j = G;
            this.f22432e.c(G);
        }
        this.f22438k = f10.f39350e;
        this.f22436i = (f10.f39351f * 1000000) / this.f22437j.K;
    }

    private boolean h(oe.h0 h0Var) {
        while (true) {
            boolean z10 = false;
            if (h0Var.a() <= 0) {
                return false;
            }
            if (!this.f22435h) {
                if (h0Var.H() == 11) {
                    z10 = true;
                }
                this.f22435h = z10;
            } else {
                int H = h0Var.H();
                if (H == 119) {
                    this.f22435h = false;
                    return true;
                }
                if (H == 11) {
                    z10 = true;
                }
                this.f22435h = z10;
            }
        }
    }

    @Override // ed.m
    public void a(oe.h0 h0Var) {
        oe.a.i(this.f22432e);
        while (h0Var.a() > 0) {
            int i10 = this.f22433f;
            if (i10 != 0) {
                if (i10 != 1) {
                    if (i10 == 2) {
                        int min = Math.min(h0Var.a(), this.f22438k - this.f22434g);
                        this.f22432e.e(h0Var, min);
                        int i11 = this.f22434g + min;
                        this.f22434g = i11;
                        int i12 = this.f22438k;
                        if (i11 == i12) {
                            long j10 = this.f22439l;
                            if (j10 != -9223372036854775807L) {
                                this.f22432e.a(j10, 1, i12, 0, null);
                                this.f22439l += this.f22436i;
                            }
                            this.f22433f = 0;
                        }
                    }
                } else if (f(h0Var, this.f22429b.e(), IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT)) {
                    g();
                    this.f22429b.U(0);
                    this.f22432e.e(this.f22429b, IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT);
                    this.f22433f = 2;
                }
            } else if (h(h0Var)) {
                this.f22433f = 1;
                this.f22429b.e()[0] = 11;
                this.f22429b.e()[1] = 119;
                this.f22434g = 2;
            }
        }
    }

    @Override // ed.m
    public void b() {
        this.f22433f = 0;
        this.f22434g = 0;
        this.f22435h = false;
        this.f22439l = -9223372036854775807L;
    }

    @Override // ed.m
    public void c(uc.m mVar, i0.d dVar) {
        dVar.a();
        this.f22431d = dVar.b();
        this.f22432e = mVar.c(dVar.c(), 1);
    }

    @Override // ed.m
    public void e(long j10, int i10) {
        if (j10 != -9223372036854775807L) {
            this.f22439l = j10;
        }
    }

    public c(String str) {
        oe.g0 g0Var = new oe.g0(new byte[IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT]);
        this.f22428a = g0Var;
        this.f22429b = new oe.h0(g0Var.f39515a);
        this.f22433f = 0;
        this.f22439l = -9223372036854775807L;
        this.f22430c = str;
    }

    @Override // ed.m
    public void d() {
    }
}
