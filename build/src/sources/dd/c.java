package dd;

import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import com.google.android.exoplayer2.Format;
import dd.i0;
import nc.b;
import ne.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class c implements m {

    /* renamed from: a  reason: collision with root package name */
    private final ne.g0 f21765a;

    /* renamed from: b  reason: collision with root package name */
    private final ne.h0 f21766b;

    /* renamed from: c  reason: collision with root package name */
    private final String f21767c;

    /* renamed from: d  reason: collision with root package name */
    private String f21768d;

    /* renamed from: e  reason: collision with root package name */
    private tc.b0 f21769e;

    /* renamed from: f  reason: collision with root package name */
    private int f21770f;

    /* renamed from: g  reason: collision with root package name */
    private int f21771g;

    /* renamed from: h  reason: collision with root package name */
    private boolean f21772h;

    /* renamed from: i  reason: collision with root package name */
    private long f21773i;

    /* renamed from: j  reason: collision with root package name */
    private Format f21774j;

    /* renamed from: k  reason: collision with root package name */
    private int f21775k;

    /* renamed from: l  reason: collision with root package name */
    private long f21776l;

    public c() {
        this(null);
    }

    private boolean a(ne.h0 h0Var, byte[] bArr, int i10) {
        int min = Math.min(h0Var.a(), i10 - this.f21771g);
        h0Var.l(bArr, this.f21771g, min);
        int i11 = this.f21771g + min;
        this.f21771g = i11;
        if (i11 == i10) {
            return true;
        }
        return false;
    }

    private void g() {
        this.f21765a.p(0);
        b.C0513b f10 = nc.b.f(this.f21765a);
        Format format = this.f21774j;
        if (format == null || f10.f40022d != format.J || f10.f40021c != format.K || !w0.c(f10.f40019a, format.f12706w)) {
            Format.b b02 = new Format.b().U(this.f21768d).g0(f10.f40019a).J(f10.f40022d).h0(f10.f40021c).X(this.f21767c).b0(f10.f40025g);
            if ("audio/ac3".equals(f10.f40019a)) {
                b02.I(f10.f40025g);
            }
            Format G = b02.G();
            this.f21774j = G;
            this.f21769e.b(G);
        }
        this.f21775k = f10.f40023e;
        this.f21773i = (f10.f40024f * 1000000) / this.f21774j.K;
    }

    private boolean h(ne.h0 h0Var) {
        while (true) {
            boolean z10 = false;
            if (h0Var.a() <= 0) {
                return false;
            }
            if (!this.f21772h) {
                if (h0Var.H() == 11) {
                    z10 = true;
                }
                this.f21772h = z10;
            } else {
                int H = h0Var.H();
                if (H == 119) {
                    this.f21772h = false;
                    return true;
                }
                if (H == 11) {
                    z10 = true;
                }
                this.f21772h = z10;
            }
        }
    }

    @Override // dd.m
    public void b(ne.h0 h0Var) {
        ne.a.i(this.f21769e);
        while (h0Var.a() > 0) {
            int i10 = this.f21770f;
            if (i10 != 0) {
                if (i10 != 1) {
                    if (i10 == 2) {
                        int min = Math.min(h0Var.a(), this.f21775k - this.f21771g);
                        this.f21769e.f(h0Var, min);
                        int i11 = this.f21771g + min;
                        this.f21771g = i11;
                        int i12 = this.f21775k;
                        if (i11 == i12) {
                            long j10 = this.f21776l;
                            if (j10 != -9223372036854775807L) {
                                this.f21769e.d(j10, 1, i12, 0, null);
                                this.f21776l += this.f21773i;
                            }
                            this.f21770f = 0;
                        }
                    }
                } else if (a(h0Var, this.f21766b.e(), IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT)) {
                    g();
                    this.f21766b.U(0);
                    this.f21769e.f(this.f21766b, IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT);
                    this.f21770f = 2;
                }
            } else if (h(h0Var)) {
                this.f21770f = 1;
                this.f21766b.e()[0] = 11;
                this.f21766b.e()[1] = 119;
                this.f21771g = 2;
            }
        }
    }

    @Override // dd.m
    public void c() {
        this.f21770f = 0;
        this.f21771g = 0;
        this.f21772h = false;
        this.f21776l = -9223372036854775807L;
    }

    @Override // dd.m
    public void e(long j10, int i10) {
        if (j10 != -9223372036854775807L) {
            this.f21776l = j10;
        }
    }

    @Override // dd.m
    public void f(tc.m mVar, i0.d dVar) {
        dVar.a();
        this.f21768d = dVar.b();
        this.f21769e = mVar.c(dVar.c(), 1);
    }

    public c(String str) {
        ne.g0 g0Var = new ne.g0(new byte[IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT]);
        this.f21765a = g0Var;
        this.f21766b = new ne.h0(g0Var.f40188a);
        this.f21770f = 0;
        this.f21776l = -9223372036854775807L;
        this.f21767c = str;
    }

    @Override // dd.m
    public void d() {
    }
}
