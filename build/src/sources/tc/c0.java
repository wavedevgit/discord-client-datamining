package tc;

import tc.b0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class c0 {

    /* renamed from: a  reason: collision with root package name */
    private final byte[] f49907a = new byte[10];

    /* renamed from: b  reason: collision with root package name */
    private boolean f49908b;

    /* renamed from: c  reason: collision with root package name */
    private int f49909c;

    /* renamed from: d  reason: collision with root package name */
    private long f49910d;

    /* renamed from: e  reason: collision with root package name */
    private int f49911e;

    /* renamed from: f  reason: collision with root package name */
    private int f49912f;

    /* renamed from: g  reason: collision with root package name */
    private int f49913g;

    public void a(b0 b0Var, b0.a aVar) {
        if (this.f49909c > 0) {
            b0Var.d(this.f49910d, this.f49911e, this.f49912f, this.f49913g, aVar);
            this.f49909c = 0;
        }
    }

    public void b() {
        this.f49908b = false;
        this.f49909c = 0;
    }

    public void c(b0 b0Var, long j10, int i10, int i11, int i12, b0.a aVar) {
        boolean z10;
        if (this.f49913g <= i11 + i12) {
            z10 = true;
        } else {
            z10 = false;
        }
        ne.a.h(z10, "TrueHD chunk samples must be contiguous in the sample queue.");
        if (this.f49908b) {
            int i13 = this.f49909c;
            int i14 = i13 + 1;
            this.f49909c = i14;
            if (i13 == 0) {
                this.f49910d = j10;
                this.f49911e = i10;
                this.f49912f = 0;
            }
            this.f49912f += i11;
            this.f49913g = i12;
            if (i14 >= 16) {
                a(b0Var, aVar);
            }
        }
    }

    public void d(l lVar) {
        if (!this.f49908b) {
            lVar.n(this.f49907a, 0, 10);
            lVar.e();
            if (nc.b.j(this.f49907a) == 0) {
                return;
            }
            this.f49908b = true;
        }
    }
}
