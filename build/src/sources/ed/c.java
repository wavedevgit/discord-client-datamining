package ed;

import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import com.google.android.exoplayer2.Format;
import ed.i0;
import oc.b;
import oe.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class c implements m {

    /* renamed from: a  reason: collision with root package name */
    private final oe.g0 f22427a;

    /* renamed from: b  reason: collision with root package name */
    private final oe.h0 f22428b;

    /* renamed from: c  reason: collision with root package name */
    private final String f22429c;

    /* renamed from: d  reason: collision with root package name */
    private String f22430d;

    /* renamed from: e  reason: collision with root package name */
    private uc.b0 f22431e;

    /* renamed from: f  reason: collision with root package name */
    private int f22432f;

    /* renamed from: g  reason: collision with root package name */
    private int f22433g;

    /* renamed from: h  reason: collision with root package name */
    private boolean f22434h;

    /* renamed from: i  reason: collision with root package name */
    private long f22435i;

    /* renamed from: j  reason: collision with root package name */
    private Format f22436j;

    /* renamed from: k  reason: collision with root package name */
    private int f22437k;

    /* renamed from: l  reason: collision with root package name */
    private long f22438l;

    public c() {
        this(null);
    }

    private boolean f(oe.h0 h0Var, byte[] bArr, int i10) {
        int min = Math.min(h0Var.a(), i10 - this.f22433g);
        h0Var.l(bArr, this.f22433g, min);
        int i11 = this.f22433g + min;
        this.f22433g = i11;
        if (i11 == i10) {
            return true;
        }
        return false;
    }

    private void g() {
        this.f22427a.p(0);
        b.C0548b f10 = oc.b.f(this.f22427a);
        Format format = this.f22436j;
        if (format == null || f10.f38780d != format.J || f10.f38779c != format.K || !w0.c(f10.f38777a, format.f12304w)) {
            Format.b b02 = new Format.b().U(this.f22430d).g0(f10.f38777a).J(f10.f38780d).h0(f10.f38779c).X(this.f22429c).b0(f10.f38783g);
            if ("audio/ac3".equals(f10.f38777a)) {
                b02.I(f10.f38783g);
            }
            Format G = b02.G();
            this.f22436j = G;
            this.f22431e.c(G);
        }
        this.f22437k = f10.f38781e;
        this.f22435i = (f10.f38782f * 1000000) / this.f22436j.K;
    }

    private boolean h(oe.h0 h0Var) {
        while (true) {
            boolean z10 = false;
            if (h0Var.a() <= 0) {
                return false;
            }
            if (!this.f22434h) {
                if (h0Var.H() == 11) {
                    z10 = true;
                }
                this.f22434h = z10;
            } else {
                int H = h0Var.H();
                if (H == 119) {
                    this.f22434h = false;
                    return true;
                }
                if (H == 11) {
                    z10 = true;
                }
                this.f22434h = z10;
            }
        }
    }

    @Override // ed.m
    public void a(oe.h0 h0Var) {
        oe.a.i(this.f22431e);
        while (h0Var.a() > 0) {
            int i10 = this.f22432f;
            if (i10 != 0) {
                if (i10 != 1) {
                    if (i10 == 2) {
                        int min = Math.min(h0Var.a(), this.f22437k - this.f22433g);
                        this.f22431e.e(h0Var, min);
                        int i11 = this.f22433g + min;
                        this.f22433g = i11;
                        int i12 = this.f22437k;
                        if (i11 == i12) {
                            long j10 = this.f22438l;
                            if (j10 != -9223372036854775807L) {
                                this.f22431e.a(j10, 1, i12, 0, null);
                                this.f22438l += this.f22435i;
                            }
                            this.f22432f = 0;
                        }
                    }
                } else if (f(h0Var, this.f22428b.e(), IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT)) {
                    g();
                    this.f22428b.U(0);
                    this.f22431e.e(this.f22428b, IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT);
                    this.f22432f = 2;
                }
            } else if (h(h0Var)) {
                this.f22432f = 1;
                this.f22428b.e()[0] = 11;
                this.f22428b.e()[1] = 119;
                this.f22433g = 2;
            }
        }
    }

    @Override // ed.m
    public void b() {
        this.f22432f = 0;
        this.f22433g = 0;
        this.f22434h = false;
        this.f22438l = -9223372036854775807L;
    }

    @Override // ed.m
    public void c(uc.m mVar, i0.d dVar) {
        dVar.a();
        this.f22430d = dVar.b();
        this.f22431e = mVar.c(dVar.c(), 1);
    }

    @Override // ed.m
    public void e(long j10, int i10) {
        if (j10 != -9223372036854775807L) {
            this.f22438l = j10;
        }
    }

    public c(String str) {
        oe.g0 g0Var = new oe.g0(new byte[IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT]);
        this.f22427a = g0Var;
        this.f22428b = new oe.h0(g0Var.f38946a);
        this.f22432f = 0;
        this.f22438l = -9223372036854775807L;
        this.f22429c = str;
    }

    @Override // ed.m
    public void d() {
    }
}
