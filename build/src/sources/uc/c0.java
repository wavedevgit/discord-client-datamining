package uc;

import uc.b0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class c0 {

    /* renamed from: a  reason: collision with root package name */
    private final byte[] f50623a = new byte[10];

    /* renamed from: b  reason: collision with root package name */
    private boolean f50624b;

    /* renamed from: c  reason: collision with root package name */
    private int f50625c;

    /* renamed from: d  reason: collision with root package name */
    private long f50626d;

    /* renamed from: e  reason: collision with root package name */
    private int f50627e;

    /* renamed from: f  reason: collision with root package name */
    private int f50628f;

    /* renamed from: g  reason: collision with root package name */
    private int f50629g;

    public void a(b0 b0Var, b0.a aVar) {
        if (this.f50625c > 0) {
            b0Var.a(this.f50626d, this.f50627e, this.f50628f, this.f50629g, aVar);
            this.f50625c = 0;
        }
    }

    public void b() {
        this.f50624b = false;
        this.f50625c = 0;
    }

    public void c(b0 b0Var, long j10, int i10, int i11, int i12, b0.a aVar) {
        boolean z10;
        if (this.f50629g <= i11 + i12) {
            z10 = true;
        } else {
            z10 = false;
        }
        oe.a.h(z10, "TrueHD chunk samples must be contiguous in the sample queue.");
        if (this.f50624b) {
            int i13 = this.f50625c;
            int i14 = i13 + 1;
            this.f50625c = i14;
            if (i13 == 0) {
                this.f50626d = j10;
                this.f50627e = i10;
                this.f50628f = 0;
            }
            this.f50628f += i11;
            this.f50629g = i12;
            if (i14 >= 16) {
                a(b0Var, aVar);
            }
        }
    }

    public void d(l lVar) {
        if (!this.f50624b) {
            lVar.n(this.f50623a, 0, 10);
            lVar.e();
            if (oc.b.j(this.f50623a) == 0) {
                return;
            }
            this.f50624b = true;
        }
    }
}
