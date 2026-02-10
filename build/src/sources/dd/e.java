package dd;

import java.util.Arrays;
import oe.h0;
import uc.l;
import uc.n;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class e {

    /* renamed from: a  reason: collision with root package name */
    private final f f20639a = new f();

    /* renamed from: b  reason: collision with root package name */
    private final h0 f20640b = new h0(new byte[65025], 0);

    /* renamed from: c  reason: collision with root package name */
    private int f20641c = -1;

    /* renamed from: d  reason: collision with root package name */
    private int f20642d;

    /* renamed from: e  reason: collision with root package name */
    private boolean f20643e;

    private int a(int i10) {
        int i11;
        int i12 = 0;
        this.f20642d = 0;
        do {
            int i13 = this.f20642d;
            int i14 = i10 + i13;
            f fVar = this.f20639a;
            if (i14 >= fVar.f20650g) {
                break;
            }
            int[] iArr = fVar.f20653j;
            this.f20642d = i13 + 1;
            i11 = iArr[i13 + i10];
            i12 += i11;
        } while (i11 == 255);
        return i12;
    }

    public f b() {
        return this.f20639a;
    }

    public h0 c() {
        return this.f20640b;
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
        if (this.f20643e) {
            this.f20643e = false;
            this.f20640b.Q(0);
        }
        while (!this.f20643e) {
            if (this.f20641c < 0) {
                if (!this.f20639a.c(lVar) || !this.f20639a.a(lVar, true)) {
                    return false;
                }
                f fVar = this.f20639a;
                int i11 = fVar.f20651h;
                if ((fVar.f20645b & 1) == 1 && this.f20640b.g() == 0) {
                    i11 += a(0);
                    i10 = this.f20642d;
                } else {
                    i10 = 0;
                }
                if (!n.e(lVar, i11)) {
                    return false;
                }
                this.f20641c = i10;
            }
            int a10 = a(this.f20641c);
            int i12 = this.f20641c + this.f20642d;
            if (a10 > 0) {
                h0 h0Var = this.f20640b;
                h0Var.c(h0Var.g() + a10);
                if (!n.d(lVar, this.f20640b.e(), this.f20640b.g(), a10)) {
                    return false;
                }
                h0 h0Var2 = this.f20640b;
                h0Var2.T(h0Var2.g() + a10);
                if (this.f20639a.f20653j[i12 - 1] != 255) {
                    z11 = true;
                } else {
                    z11 = false;
                }
                this.f20643e = z11;
            }
            if (i12 == this.f20639a.f20650g) {
                i12 = -1;
            }
            this.f20641c = i12;
        }
        return true;
    }

    public void e() {
        this.f20639a.b();
        this.f20640b.Q(0);
        this.f20641c = -1;
        this.f20643e = false;
    }

    public void f() {
        if (this.f20640b.e().length == 65025) {
            return;
        }
        h0 h0Var = this.f20640b;
        h0Var.S(Arrays.copyOf(h0Var.e(), Math.max(65025, this.f20640b.g())), this.f20640b.g());
    }
}
