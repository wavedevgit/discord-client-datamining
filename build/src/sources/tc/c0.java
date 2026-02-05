package tc;

import tc.b0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class c0 {

    /* renamed from: a  reason: collision with root package name */
    private final byte[] f50512a = new byte[10];

    /* renamed from: b  reason: collision with root package name */
    private boolean f50513b;

    /* renamed from: c  reason: collision with root package name */
    private int f50514c;

    /* renamed from: d  reason: collision with root package name */
    private long f50515d;

    /* renamed from: e  reason: collision with root package name */
    private int f50516e;

    /* renamed from: f  reason: collision with root package name */
    private int f50517f;

    /* renamed from: g  reason: collision with root package name */
    private int f50518g;

    public void a(b0 b0Var, b0.a aVar) {
        if (this.f50514c > 0) {
            b0Var.d(this.f50515d, this.f50516e, this.f50517f, this.f50518g, aVar);
            this.f50514c = 0;
        }
    }

    public void b() {
        this.f50513b = false;
        this.f50514c = 0;
    }

    public void c(b0 b0Var, long j10, int i10, int i11, int i12, b0.a aVar) {
        boolean z10;
        if (this.f50518g <= i11 + i12) {
            z10 = true;
        } else {
            z10 = false;
        }
        ne.a.h(z10, "TrueHD chunk samples must be contiguous in the sample queue.");
        if (this.f50513b) {
            int i13 = this.f50514c;
            int i14 = i13 + 1;
            this.f50514c = i14;
            if (i13 == 0) {
                this.f50515d = j10;
                this.f50516e = i10;
                this.f50517f = 0;
            }
            this.f50517f += i11;
            this.f50518g = i12;
            if (i14 >= 16) {
                a(b0Var, aVar);
            }
        }
    }

    public void d(l lVar) {
        if (!this.f50513b) {
            lVar.n(this.f50512a, 0, 10);
            lVar.e();
            if (nc.b.j(this.f50512a) == 0) {
                return;
            }
            this.f50513b = true;
        }
    }
}
