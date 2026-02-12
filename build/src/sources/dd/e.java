package dd;

import java.util.Arrays;
import oe.h0;
import uc.l;
import uc.n;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class e {

    /* renamed from: a  reason: collision with root package name */
    private final f f21587a = new f();

    /* renamed from: b  reason: collision with root package name */
    private final h0 f21588b = new h0(new byte[65025], 0);

    /* renamed from: c  reason: collision with root package name */
    private int f21589c = -1;

    /* renamed from: d  reason: collision with root package name */
    private int f21590d;

    /* renamed from: e  reason: collision with root package name */
    private boolean f21591e;

    private int a(int i10) {
        int i11;
        int i12 = 0;
        this.f21590d = 0;
        do {
            int i13 = this.f21590d;
            int i14 = i10 + i13;
            f fVar = this.f21587a;
            if (i14 >= fVar.f21598g) {
                break;
            }
            int[] iArr = fVar.f21601j;
            this.f21590d = i13 + 1;
            i11 = iArr[i13 + i10];
            i12 += i11;
        } while (i11 == 255);
        return i12;
    }

    public f b() {
        return this.f21587a;
    }

    public h0 c() {
        return this.f21588b;
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
        oe.a.g(z10);
        if (this.f21591e) {
            this.f21591e = false;
            this.f21588b.Q(0);
        }
        while (!this.f21591e) {
            if (this.f21589c < 0) {
                if (!this.f21587a.c(lVar) || !this.f21587a.a(lVar, true)) {
                    return false;
                }
                f fVar = this.f21587a;
                int i11 = fVar.f21599h;
                if ((fVar.f21593b & 1) == 1 && this.f21588b.g() == 0) {
                    i11 += a(0);
                    i10 = this.f21590d;
                } else {
                    i10 = 0;
                }
                if (!n.e(lVar, i11)) {
                    return false;
                }
                this.f21589c = i10;
            }
            int a10 = a(this.f21589c);
            int i12 = this.f21589c + this.f21590d;
            if (a10 > 0) {
                h0 h0Var = this.f21588b;
                h0Var.c(h0Var.g() + a10);
                if (!n.d(lVar, this.f21588b.e(), this.f21588b.g(), a10)) {
                    return false;
                }
                h0 h0Var2 = this.f21588b;
                h0Var2.T(h0Var2.g() + a10);
                if (this.f21587a.f21601j[i12 - 1] != 255) {
                    z11 = true;
                } else {
                    z11 = false;
                }
                this.f21591e = z11;
            }
            if (i12 == this.f21587a.f21598g) {
                i12 = -1;
            }
            this.f21589c = i12;
        }
        return true;
    }

    public void e() {
        this.f21587a.b();
        this.f21588b.Q(0);
        this.f21589c = -1;
        this.f21591e = false;
    }

    public void f() {
        if (this.f21588b.e().length == 65025) {
            return;
        }
        h0 h0Var = this.f21588b;
        h0Var.S(Arrays.copyOf(h0Var.e(), Math.max(65025, this.f21588b.g())), this.f21588b.g());
    }
}
