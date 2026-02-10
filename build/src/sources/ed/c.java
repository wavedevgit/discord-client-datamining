package ed;

import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import com.google.android.exoplayer2.Format;
import ed.i0;
import oc.b;
import oe.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class c implements m {

    /* renamed from: a  reason: collision with root package name */
    private final oe.g0 f21260a;

    /* renamed from: b  reason: collision with root package name */
    private final oe.h0 f21261b;

    /* renamed from: c  reason: collision with root package name */
    private final String f21262c;

    /* renamed from: d  reason: collision with root package name */
    private String f21263d;

    /* renamed from: e  reason: collision with root package name */
    private uc.b0 f21264e;

    /* renamed from: f  reason: collision with root package name */
    private int f21265f;

    /* renamed from: g  reason: collision with root package name */
    private int f21266g;

    /* renamed from: h  reason: collision with root package name */
    private boolean f21267h;

    /* renamed from: i  reason: collision with root package name */
    private long f21268i;

    /* renamed from: j  reason: collision with root package name */
    private Format f21269j;

    /* renamed from: k  reason: collision with root package name */
    private int f21270k;

    /* renamed from: l  reason: collision with root package name */
    private long f21271l;

    public c() {
        this(null);
    }

    private boolean f(oe.h0 h0Var, byte[] bArr, int i10) {
        int min = Math.min(h0Var.a(), i10 - this.f21266g);
        h0Var.l(bArr, this.f21266g, min);
        int i11 = this.f21266g + min;
        this.f21266g = i11;
        if (i11 == i10) {
            return true;
        }
        return false;
    }

    private void g() {
        this.f21260a.p(0);
        b.C0586b f10 = oc.b.f(this.f21260a);
        Format format = this.f21269j;
        if (format == null || f10.f40454d != format.J || f10.f40453c != format.K || !w0.c(f10.f40451a, format.f11727w)) {
            Format.b b02 = new Format.b().U(this.f21263d).g0(f10.f40451a).J(f10.f40454d).h0(f10.f40453c).X(this.f21262c).b0(f10.f40457g);
            if ("audio/ac3".equals(f10.f40451a)) {
                b02.I(f10.f40457g);
            }
            Format G = b02.G();
            this.f21269j = G;
            this.f21264e.c(G);
        }
        this.f21270k = f10.f40455e;
        this.f21268i = (f10.f40456f * 1000000) / this.f21269j.K;
    }

    private boolean h(oe.h0 h0Var) {
        while (true) {
            boolean z10 = false;
            if (h0Var.a() <= 0) {
                return false;
            }
            if (!this.f21267h) {
                if (h0Var.H() == 11) {
                    z10 = true;
                }
                this.f21267h = z10;
            } else {
                int H = h0Var.H();
                if (H == 119) {
                    this.f21267h = false;
                    return true;
                }
                if (H == 11) {
                    z10 = true;
                }
                this.f21267h = z10;
            }
        }
    }

    @Override // ed.m
    public void a(oe.h0 h0Var) {
        oe.a.i(this.f21264e);
        while (h0Var.a() > 0) {
            int i10 = this.f21265f;
            if (i10 != 0) {
                if (i10 != 1) {
                    if (i10 == 2) {
                        int min = Math.min(h0Var.a(), this.f21270k - this.f21266g);
                        this.f21264e.e(h0Var, min);
                        int i11 = this.f21266g + min;
                        this.f21266g = i11;
                        int i12 = this.f21270k;
                        if (i11 == i12) {
                            long j10 = this.f21271l;
                            if (j10 != -9223372036854775807L) {
                                this.f21264e.a(j10, 1, i12, 0, null);
                                this.f21271l += this.f21268i;
                            }
                            this.f21265f = 0;
                        }
                    }
                } else if (f(h0Var, this.f21261b.e(), IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT)) {
                    g();
                    this.f21261b.U(0);
                    this.f21264e.e(this.f21261b, IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT);
                    this.f21265f = 2;
                }
            } else if (h(h0Var)) {
                this.f21265f = 1;
                this.f21261b.e()[0] = 11;
                this.f21261b.e()[1] = 119;
                this.f21266g = 2;
            }
        }
    }

    @Override // ed.m
    public void b() {
        this.f21265f = 0;
        this.f21266g = 0;
        this.f21267h = false;
        this.f21271l = -9223372036854775807L;
    }

    @Override // ed.m
    public void c(uc.m mVar, i0.d dVar) {
        dVar.a();
        this.f21263d = dVar.b();
        this.f21264e = mVar.c(dVar.c(), 1);
    }

    @Override // ed.m
    public void e(long j10, int i10) {
        if (j10 != -9223372036854775807L) {
            this.f21271l = j10;
        }
    }

    public c(String str) {
        oe.g0 g0Var = new oe.g0(new byte[IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT]);
        this.f21260a = g0Var;
        this.f21261b = new oe.h0(g0Var.f40620a);
        this.f21265f = 0;
        this.f21271l = -9223372036854775807L;
        this.f21262c = str;
    }

    @Override // ed.m
    public void d() {
    }
}
