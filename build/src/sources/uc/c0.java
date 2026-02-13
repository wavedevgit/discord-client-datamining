package uc;

import uc.b0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class c0 {

    /* renamed from: a  reason: collision with root package name */
    private final byte[] f51192a = new byte[10];

    /* renamed from: b  reason: collision with root package name */
    private boolean f51193b;

    /* renamed from: c  reason: collision with root package name */
    private int f51194c;

    /* renamed from: d  reason: collision with root package name */
    private long f51195d;

    /* renamed from: e  reason: collision with root package name */
    private int f51196e;

    /* renamed from: f  reason: collision with root package name */
    private int f51197f;

    /* renamed from: g  reason: collision with root package name */
    private int f51198g;

    public void a(b0 b0Var, b0.a aVar) {
        if (this.f51194c > 0) {
            b0Var.a(this.f51195d, this.f51196e, this.f51197f, this.f51198g, aVar);
            this.f51194c = 0;
        }
    }

    public void b() {
        this.f51193b = false;
        this.f51194c = 0;
    }

    public void c(b0 b0Var, long j10, int i10, int i11, int i12, b0.a aVar) {
        boolean z10;
        if (this.f51198g <= i11 + i12) {
            z10 = true;
        } else {
            z10 = false;
        }
        oe.a.h(z10, "TrueHD chunk samples must be contiguous in the sample queue.");
        if (this.f51193b) {
            int i13 = this.f51194c;
            int i14 = i13 + 1;
            this.f51194c = i14;
            if (i13 == 0) {
                this.f51195d = j10;
                this.f51196e = i10;
                this.f51197f = 0;
            }
            this.f51197f += i11;
            this.f51198g = i12;
            if (i14 >= 16) {
                a(b0Var, aVar);
            }
        }
    }

    public void d(l lVar) {
        if (!this.f51193b) {
            lVar.n(this.f51192a, 0, 10);
            lVar.e();
            if (oc.b.j(this.f51192a) == 0) {
                return;
            }
            this.f51193b = true;
        }
    }
}
