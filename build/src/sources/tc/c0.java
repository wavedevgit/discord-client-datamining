package tc;

import tc.b0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class c0 {

    /* renamed from: a  reason: collision with root package name */
    private final byte[] f50536a = new byte[10];

    /* renamed from: b  reason: collision with root package name */
    private boolean f50537b;

    /* renamed from: c  reason: collision with root package name */
    private int f50538c;

    /* renamed from: d  reason: collision with root package name */
    private long f50539d;

    /* renamed from: e  reason: collision with root package name */
    private int f50540e;

    /* renamed from: f  reason: collision with root package name */
    private int f50541f;

    /* renamed from: g  reason: collision with root package name */
    private int f50542g;

    public void a(b0 b0Var, b0.a aVar) {
        if (this.f50538c > 0) {
            b0Var.d(this.f50539d, this.f50540e, this.f50541f, this.f50542g, aVar);
            this.f50538c = 0;
        }
    }

    public void b() {
        this.f50537b = false;
        this.f50538c = 0;
    }

    public void c(b0 b0Var, long j10, int i10, int i11, int i12, b0.a aVar) {
        boolean z10;
        if (this.f50542g <= i11 + i12) {
            z10 = true;
        } else {
            z10 = false;
        }
        ne.a.h(z10, "TrueHD chunk samples must be contiguous in the sample queue.");
        if (this.f50537b) {
            int i13 = this.f50538c;
            int i14 = i13 + 1;
            this.f50538c = i14;
            if (i13 == 0) {
                this.f50539d = j10;
                this.f50540e = i10;
                this.f50541f = 0;
            }
            this.f50541f += i11;
            this.f50542g = i12;
            if (i14 >= 16) {
                a(b0Var, aVar);
            }
        }
    }

    public void d(l lVar) {
        if (!this.f50537b) {
            lVar.n(this.f50536a, 0, 10);
            lVar.e();
            if (nc.b.j(this.f50536a) == 0) {
                return;
            }
            this.f50537b = true;
        }
    }
}
