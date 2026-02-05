package cd;

import java.util.Arrays;
import ne.h0;
import tc.l;
import tc.n;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class e {

    /* renamed from: a  reason: collision with root package name */
    private final f f7515a = new f();

    /* renamed from: b  reason: collision with root package name */
    private final h0 f7516b = new h0(new byte[65025], 0);

    /* renamed from: c  reason: collision with root package name */
    private int f7517c = -1;

    /* renamed from: d  reason: collision with root package name */
    private int f7518d;

    /* renamed from: e  reason: collision with root package name */
    private boolean f7519e;

    private int a(int i10) {
        int i11;
        int i12 = 0;
        this.f7518d = 0;
        do {
            int i13 = this.f7518d;
            int i14 = i10 + i13;
            f fVar = this.f7515a;
            if (i14 >= fVar.f7526g) {
                break;
            }
            int[] iArr = fVar.f7529j;
            this.f7518d = i13 + 1;
            i11 = iArr[i13 + i10];
            i12 += i11;
        } while (i11 == 255);
        return i12;
    }

    public f b() {
        return this.f7515a;
    }

    public h0 c() {
        return this.f7516b;
    }

    public boolean d(l lVar) {
        boolean z10;
        boolean z11;
        int i10;
        if (lVar != null) {
            z10 = true;
        } else {
            z10 = false;
        }
        ne.a.g(z10);
        if (this.f7519e) {
            this.f7519e = false;
            this.f7516b.Q(0);
        }
        while (!this.f7519e) {
            if (this.f7517c < 0) {
                if (!this.f7515a.c(lVar) || !this.f7515a.a(lVar, true)) {
                    return false;
                }
                f fVar = this.f7515a;
                int i11 = fVar.f7527h;
                if ((fVar.f7521b & 1) == 1 && this.f7516b.g() == 0) {
                    i11 += a(0);
                    i10 = this.f7518d;
                } else {
                    i10 = 0;
                }
                if (!n.e(lVar, i11)) {
                    return false;
                }
                this.f7517c = i10;
            }
            int a10 = a(this.f7517c);
            int i12 = this.f7517c + this.f7518d;
            if (a10 > 0) {
                h0 h0Var = this.f7516b;
                h0Var.c(h0Var.g() + a10);
                if (!n.d(lVar, this.f7516b.e(), this.f7516b.g(), a10)) {
                    return false;
                }
                h0 h0Var2 = this.f7516b;
                h0Var2.T(h0Var2.g() + a10);
                if (this.f7515a.f7529j[i12 - 1] != 255) {
                    z11 = true;
                } else {
                    z11 = false;
                }
                this.f7519e = z11;
            }
            if (i12 == this.f7515a.f7526g) {
                i12 = -1;
            }
            this.f7517c = i12;
        }
        return true;
    }

    public void e() {
        this.f7515a.b();
        this.f7516b.Q(0);
        this.f7517c = -1;
        this.f7519e = false;
    }

    public void f() {
        if (this.f7516b.e().length == 65025) {
            return;
        }
        h0 h0Var = this.f7516b;
        h0Var.S(Arrays.copyOf(h0Var.e(), Math.max(65025, this.f7516b.g())), this.f7516b.g());
    }
}
