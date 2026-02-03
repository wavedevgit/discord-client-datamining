package dd;

import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import com.google.android.exoplayer2.Format;
import dd.i0;
import nc.b;
import ne.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class c implements m {

    /* renamed from: a  reason: collision with root package name */
    private final ne.g0 f21341a;

    /* renamed from: b  reason: collision with root package name */
    private final ne.h0 f21342b;

    /* renamed from: c  reason: collision with root package name */
    private final String f21343c;

    /* renamed from: d  reason: collision with root package name */
    private String f21344d;

    /* renamed from: e  reason: collision with root package name */
    private tc.b0 f21345e;

    /* renamed from: f  reason: collision with root package name */
    private int f21346f;

    /* renamed from: g  reason: collision with root package name */
    private int f21347g;

    /* renamed from: h  reason: collision with root package name */
    private boolean f21348h;

    /* renamed from: i  reason: collision with root package name */
    private long f21349i;

    /* renamed from: j  reason: collision with root package name */
    private Format f21350j;

    /* renamed from: k  reason: collision with root package name */
    private int f21351k;

    /* renamed from: l  reason: collision with root package name */
    private long f21352l;

    public c() {
        this(null);
    }

    private boolean a(ne.h0 h0Var, byte[] bArr, int i10) {
        int min = Math.min(h0Var.a(), i10 - this.f21347g);
        h0Var.l(bArr, this.f21347g, min);
        int i11 = this.f21347g + min;
        this.f21347g = i11;
        if (i11 == i10) {
            return true;
        }
        return false;
    }

    private void g() {
        this.f21341a.p(0);
        b.C0522b f10 = nc.b.f(this.f21341a);
        Format format = this.f21350j;
        if (format == null || f10.f39901d != format.J || f10.f39900c != format.K || !w0.c(f10.f39898a, format.f12335w)) {
            Format.b b02 = new Format.b().U(this.f21344d).g0(f10.f39898a).J(f10.f39901d).h0(f10.f39900c).X(this.f21343c).b0(f10.f39904g);
            if ("audio/ac3".equals(f10.f39898a)) {
                b02.I(f10.f39904g);
            }
            Format G = b02.G();
            this.f21350j = G;
            this.f21345e.b(G);
        }
        this.f21351k = f10.f39902e;
        this.f21349i = (f10.f39903f * 1000000) / this.f21350j.K;
    }

    private boolean h(ne.h0 h0Var) {
        while (true) {
            boolean z10 = false;
            if (h0Var.a() <= 0) {
                return false;
            }
            if (!this.f21348h) {
                if (h0Var.H() == 11) {
                    z10 = true;
                }
                this.f21348h = z10;
            } else {
                int H = h0Var.H();
                if (H == 119) {
                    this.f21348h = false;
                    return true;
                }
                if (H == 11) {
                    z10 = true;
                }
                this.f21348h = z10;
            }
        }
    }

    @Override // dd.m
    public void b(ne.h0 h0Var) {
        ne.a.i(this.f21345e);
        while (h0Var.a() > 0) {
            int i10 = this.f21346f;
            if (i10 != 0) {
                if (i10 != 1) {
                    if (i10 == 2) {
                        int min = Math.min(h0Var.a(), this.f21351k - this.f21347g);
                        this.f21345e.f(h0Var, min);
                        int i11 = this.f21347g + min;
                        this.f21347g = i11;
                        int i12 = this.f21351k;
                        if (i11 == i12) {
                            long j10 = this.f21352l;
                            if (j10 != -9223372036854775807L) {
                                this.f21345e.d(j10, 1, i12, 0, null);
                                this.f21352l += this.f21349i;
                            }
                            this.f21346f = 0;
                        }
                    }
                } else if (a(h0Var, this.f21342b.e(), IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT)) {
                    g();
                    this.f21342b.U(0);
                    this.f21345e.f(this.f21342b, IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT);
                    this.f21346f = 2;
                }
            } else if (h(h0Var)) {
                this.f21346f = 1;
                this.f21342b.e()[0] = 11;
                this.f21342b.e()[1] = 119;
                this.f21347g = 2;
            }
        }
    }

    @Override // dd.m
    public void c() {
        this.f21346f = 0;
        this.f21347g = 0;
        this.f21348h = false;
        this.f21352l = -9223372036854775807L;
    }

    @Override // dd.m
    public void e(long j10, int i10) {
        if (j10 != -9223372036854775807L) {
            this.f21352l = j10;
        }
    }

    @Override // dd.m
    public void f(tc.m mVar, i0.d dVar) {
        dVar.a();
        this.f21344d = dVar.b();
        this.f21345e = mVar.c(dVar.c(), 1);
    }

    public c(String str) {
        ne.g0 g0Var = new ne.g0(new byte[IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT]);
        this.f21341a = g0Var;
        this.f21342b = new ne.h0(g0Var.f40067a);
        this.f21346f = 0;
        this.f21352l = -9223372036854775807L;
        this.f21343c = str;
    }

    @Override // dd.m
    public void d() {
    }
}
