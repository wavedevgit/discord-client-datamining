package tc;

import tc.b0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class c0 {

    /* renamed from: a  reason: collision with root package name */
    private final byte[] f50488a = new byte[10];

    /* renamed from: b  reason: collision with root package name */
    private boolean f50489b;

    /* renamed from: c  reason: collision with root package name */
    private int f50490c;

    /* renamed from: d  reason: collision with root package name */
    private long f50491d;

    /* renamed from: e  reason: collision with root package name */
    private int f50492e;

    /* renamed from: f  reason: collision with root package name */
    private int f50493f;

    /* renamed from: g  reason: collision with root package name */
    private int f50494g;

    public void a(b0 b0Var, b0.a aVar) {
        if (this.f50490c > 0) {
            b0Var.d(this.f50491d, this.f50492e, this.f50493f, this.f50494g, aVar);
            this.f50490c = 0;
        }
    }

    public void b() {
        this.f50489b = false;
        this.f50490c = 0;
    }

    public void c(b0 b0Var, long j10, int i10, int i11, int i12, b0.a aVar) {
        boolean z10;
        if (this.f50494g <= i11 + i12) {
            z10 = true;
        } else {
            z10 = false;
        }
        ne.a.h(z10, "TrueHD chunk samples must be contiguous in the sample queue.");
        if (this.f50489b) {
            int i13 = this.f50490c;
            int i14 = i13 + 1;
            this.f50490c = i14;
            if (i13 == 0) {
                this.f50491d = j10;
                this.f50492e = i10;
                this.f50493f = 0;
            }
            this.f50493f += i11;
            this.f50494g = i12;
            if (i14 >= 16) {
                a(b0Var, aVar);
            }
        }
    }

    public void d(l lVar) {
        if (!this.f50489b) {
            lVar.n(this.f50488a, 0, 10);
            lVar.e();
            if (nc.b.j(this.f50488a) == 0) {
                return;
            }
            this.f50489b = true;
        }
    }
}
