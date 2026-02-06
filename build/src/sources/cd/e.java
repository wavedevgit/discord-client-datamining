package cd;

import java.util.Arrays;
import ne.h0;
import tc.l;
import tc.n;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class e {

    /* renamed from: a  reason: collision with root package name */
    private final f f7360a = new f();

    /* renamed from: b  reason: collision with root package name */
    private final h0 f7361b = new h0(new byte[65025], 0);

    /* renamed from: c  reason: collision with root package name */
    private int f7362c = -1;

    /* renamed from: d  reason: collision with root package name */
    private int f7363d;

    /* renamed from: e  reason: collision with root package name */
    private boolean f7364e;

    private int a(int i10) {
        int i11;
        int i12 = 0;
        this.f7363d = 0;
        do {
            int i13 = this.f7363d;
            int i14 = i10 + i13;
            f fVar = this.f7360a;
            if (i14 >= fVar.f7371g) {
                break;
            }
            int[] iArr = fVar.f7374j;
            this.f7363d = i13 + 1;
            i11 = iArr[i13 + i10];
            i12 += i11;
        } while (i11 == 255);
        return i12;
    }

    public f b() {
        return this.f7360a;
    }

    public h0 c() {
        return this.f7361b;
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
        if (this.f7364e) {
            this.f7364e = false;
            this.f7361b.Q(0);
        }
        while (!this.f7364e) {
            if (this.f7362c < 0) {
                if (!this.f7360a.c(lVar) || !this.f7360a.a(lVar, true)) {
                    return false;
                }
                f fVar = this.f7360a;
                int i11 = fVar.f7372h;
                if ((fVar.f7366b & 1) == 1 && this.f7361b.g() == 0) {
                    i11 += a(0);
                    i10 = this.f7363d;
                } else {
                    i10 = 0;
                }
                if (!n.e(lVar, i11)) {
                    return false;
                }
                this.f7362c = i10;
            }
            int a10 = a(this.f7362c);
            int i12 = this.f7362c + this.f7363d;
            if (a10 > 0) {
                h0 h0Var = this.f7361b;
                h0Var.c(h0Var.g() + a10);
                if (!n.d(lVar, this.f7361b.e(), this.f7361b.g(), a10)) {
                    return false;
                }
                h0 h0Var2 = this.f7361b;
                h0Var2.T(h0Var2.g() + a10);
                if (this.f7360a.f7374j[i12 - 1] != 255) {
                    z11 = true;
                } else {
                    z11 = false;
                }
                this.f7364e = z11;
            }
            if (i12 == this.f7360a.f7371g) {
                i12 = -1;
            }
            this.f7362c = i12;
        }
        return true;
    }

    public void e() {
        this.f7360a.b();
        this.f7361b.Q(0);
        this.f7362c = -1;
        this.f7364e = false;
    }

    public void f() {
        if (this.f7361b.e().length == 65025) {
            return;
        }
        h0 h0Var = this.f7361b;
        h0Var.S(Arrays.copyOf(h0Var.e(), Math.max(65025, this.f7361b.g())), this.f7361b.g());
    }
}
