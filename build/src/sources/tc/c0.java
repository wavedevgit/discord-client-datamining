package tc;

import tc.b0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class c0 {

    /* renamed from: a  reason: collision with root package name */
    private final byte[] f49411a = new byte[10];

    /* renamed from: b  reason: collision with root package name */
    private boolean f49412b;

    /* renamed from: c  reason: collision with root package name */
    private int f49413c;

    /* renamed from: d  reason: collision with root package name */
    private long f49414d;

    /* renamed from: e  reason: collision with root package name */
    private int f49415e;

    /* renamed from: f  reason: collision with root package name */
    private int f49416f;

    /* renamed from: g  reason: collision with root package name */
    private int f49417g;

    public void a(b0 b0Var, b0.a aVar) {
        if (this.f49413c > 0) {
            b0Var.d(this.f49414d, this.f49415e, this.f49416f, this.f49417g, aVar);
            this.f49413c = 0;
        }
    }

    public void b() {
        this.f49412b = false;
        this.f49413c = 0;
    }

    public void c(b0 b0Var, long j10, int i10, int i11, int i12, b0.a aVar) {
        boolean z10;
        if (this.f49417g <= i11 + i12) {
            z10 = true;
        } else {
            z10 = false;
        }
        ne.a.h(z10, "TrueHD chunk samples must be contiguous in the sample queue.");
        if (this.f49412b) {
            int i13 = this.f49413c;
            int i14 = i13 + 1;
            this.f49413c = i14;
            if (i13 == 0) {
                this.f49414d = j10;
                this.f49415e = i10;
                this.f49416f = 0;
            }
            this.f49416f += i11;
            this.f49417g = i12;
            if (i14 >= 16) {
                a(b0Var, aVar);
            }
        }
    }

    public void d(l lVar) {
        if (!this.f49412b) {
            lVar.n(this.f49411a, 0, 10);
            lVar.e();
            if (nc.b.j(this.f49411a) == 0) {
                return;
            }
            this.f49412b = true;
        }
    }
}
