package uc;

import uc.b0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class c0 {

    /* renamed from: a  reason: collision with root package name */
    private final byte[] f50624a = new byte[10];

    /* renamed from: b  reason: collision with root package name */
    private boolean f50625b;

    /* renamed from: c  reason: collision with root package name */
    private int f50626c;

    /* renamed from: d  reason: collision with root package name */
    private long f50627d;

    /* renamed from: e  reason: collision with root package name */
    private int f50628e;

    /* renamed from: f  reason: collision with root package name */
    private int f50629f;

    /* renamed from: g  reason: collision with root package name */
    private int f50630g;

    public void a(b0 b0Var, b0.a aVar) {
        if (this.f50626c > 0) {
            b0Var.a(this.f50627d, this.f50628e, this.f50629f, this.f50630g, aVar);
            this.f50626c = 0;
        }
    }

    public void b() {
        this.f50625b = false;
        this.f50626c = 0;
    }

    public void c(b0 b0Var, long j10, int i10, int i11, int i12, b0.a aVar) {
        boolean z10;
        if (this.f50630g <= i11 + i12) {
            z10 = true;
        } else {
            z10 = false;
        }
        oe.a.h(z10, "TrueHD chunk samples must be contiguous in the sample queue.");
        if (this.f50625b) {
            int i13 = this.f50626c;
            int i14 = i13 + 1;
            this.f50626c = i14;
            if (i13 == 0) {
                this.f50627d = j10;
                this.f50628e = i10;
                this.f50629f = 0;
            }
            this.f50629f += i11;
            this.f50630g = i12;
            if (i14 >= 16) {
                a(b0Var, aVar);
            }
        }
    }

    public void d(l lVar) {
        if (!this.f50625b) {
            lVar.n(this.f50624a, 0, 10);
            lVar.e();
            if (oc.b.j(this.f50624a) == 0) {
                return;
            }
            this.f50625b = true;
        }
    }
}
