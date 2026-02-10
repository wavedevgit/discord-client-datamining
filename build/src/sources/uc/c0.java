package uc;

import uc.b0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class c0 {

    /* renamed from: a  reason: collision with root package name */
    private final byte[] f51444a = new byte[10];

    /* renamed from: b  reason: collision with root package name */
    private boolean f51445b;

    /* renamed from: c  reason: collision with root package name */
    private int f51446c;

    /* renamed from: d  reason: collision with root package name */
    private long f51447d;

    /* renamed from: e  reason: collision with root package name */
    private int f51448e;

    /* renamed from: f  reason: collision with root package name */
    private int f51449f;

    /* renamed from: g  reason: collision with root package name */
    private int f51450g;

    public void a(b0 b0Var, b0.a aVar) {
        if (this.f51446c > 0) {
            b0Var.a(this.f51447d, this.f51448e, this.f51449f, this.f51450g, aVar);
            this.f51446c = 0;
        }
    }

    public void b() {
        this.f51445b = false;
        this.f51446c = 0;
    }

    public void c(b0 b0Var, long j10, int i10, int i11, int i12, b0.a aVar) {
        boolean z10;
        if (this.f51450g <= i11 + i12) {
            z10 = true;
        } else {
            z10 = false;
        }
        oe.a.h(z10, "TrueHD chunk samples must be contiguous in the sample queue.");
        if (this.f51445b) {
            int i13 = this.f51446c;
            int i14 = i13 + 1;
            this.f51446c = i14;
            if (i13 == 0) {
                this.f51447d = j10;
                this.f51448e = i10;
                this.f51449f = 0;
            }
            this.f51449f += i11;
            this.f51450g = i12;
            if (i14 >= 16) {
                a(b0Var, aVar);
            }
        }
    }

    public void d(l lVar) {
        if (!this.f51445b) {
            lVar.n(this.f51444a, 0, 10);
            lVar.e();
            if (oc.b.j(this.f51444a) == 0) {
                return;
            }
            this.f51445b = true;
        }
    }
}
