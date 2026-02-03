package cd;

import java.util.Arrays;
import ne.h0;
import tc.l;
import tc.n;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class e {

    /* renamed from: a  reason: collision with root package name */
    private final f f8110a = new f();

    /* renamed from: b  reason: collision with root package name */
    private final h0 f8111b = new h0(new byte[65025], 0);

    /* renamed from: c  reason: collision with root package name */
    private int f8112c = -1;

    /* renamed from: d  reason: collision with root package name */
    private int f8113d;

    /* renamed from: e  reason: collision with root package name */
    private boolean f8114e;

    private int a(int i10) {
        int i11;
        int i12 = 0;
        this.f8113d = 0;
        do {
            int i13 = this.f8113d;
            int i14 = i10 + i13;
            f fVar = this.f8110a;
            if (i14 >= fVar.f8121g) {
                break;
            }
            int[] iArr = fVar.f8124j;
            this.f8113d = i13 + 1;
            i11 = iArr[i13 + i10];
            i12 += i11;
        } while (i11 == 255);
        return i12;
    }

    public f b() {
        return this.f8110a;
    }

    public h0 c() {
        return this.f8111b;
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
        if (this.f8114e) {
            this.f8114e = false;
            this.f8111b.Q(0);
        }
        while (!this.f8114e) {
            if (this.f8112c < 0) {
                if (!this.f8110a.c(lVar) || !this.f8110a.a(lVar, true)) {
                    return false;
                }
                f fVar = this.f8110a;
                int i11 = fVar.f8122h;
                if ((fVar.f8116b & 1) == 1 && this.f8111b.g() == 0) {
                    i11 += a(0);
                    i10 = this.f8113d;
                } else {
                    i10 = 0;
                }
                if (!n.e(lVar, i11)) {
                    return false;
                }
                this.f8112c = i10;
            }
            int a10 = a(this.f8112c);
            int i12 = this.f8112c + this.f8113d;
            if (a10 > 0) {
                h0 h0Var = this.f8111b;
                h0Var.c(h0Var.g() + a10);
                if (!n.d(lVar, this.f8111b.e(), this.f8111b.g(), a10)) {
                    return false;
                }
                h0 h0Var2 = this.f8111b;
                h0Var2.T(h0Var2.g() + a10);
                if (this.f8110a.f8124j[i12 - 1] != 255) {
                    z11 = true;
                } else {
                    z11 = false;
                }
                this.f8114e = z11;
            }
            if (i12 == this.f8110a.f8121g) {
                i12 = -1;
            }
            this.f8112c = i12;
        }
        return true;
    }

    public void e() {
        this.f8110a.b();
        this.f8111b.Q(0);
        this.f8112c = -1;
        this.f8114e = false;
    }

    public void f() {
        if (this.f8111b.e().length == 65025) {
            return;
        }
        h0 h0Var = this.f8111b;
        h0Var.S(Arrays.copyOf(h0Var.e(), Math.max(65025, this.f8111b.g())), this.f8111b.g());
    }
}
