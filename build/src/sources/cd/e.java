package cd;

import java.util.Arrays;
import ne.h0;
import tc.l;
import tc.n;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class e {

    /* renamed from: a  reason: collision with root package name */
    private final f f8254a = new f();

    /* renamed from: b  reason: collision with root package name */
    private final h0 f8255b = new h0(new byte[65025], 0);

    /* renamed from: c  reason: collision with root package name */
    private int f8256c = -1;

    /* renamed from: d  reason: collision with root package name */
    private int f8257d;

    /* renamed from: e  reason: collision with root package name */
    private boolean f8258e;

    private int a(int i10) {
        int i11;
        int i12 = 0;
        this.f8257d = 0;
        do {
            int i13 = this.f8257d;
            int i14 = i10 + i13;
            f fVar = this.f8254a;
            if (i14 >= fVar.f8265g) {
                break;
            }
            int[] iArr = fVar.f8268j;
            this.f8257d = i13 + 1;
            i11 = iArr[i13 + i10];
            i12 += i11;
        } while (i11 == 255);
        return i12;
    }

    public f b() {
        return this.f8254a;
    }

    public h0 c() {
        return this.f8255b;
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
        if (this.f8258e) {
            this.f8258e = false;
            this.f8255b.Q(0);
        }
        while (!this.f8258e) {
            if (this.f8256c < 0) {
                if (!this.f8254a.c(lVar) || !this.f8254a.a(lVar, true)) {
                    return false;
                }
                f fVar = this.f8254a;
                int i11 = fVar.f8266h;
                if ((fVar.f8260b & 1) == 1 && this.f8255b.g() == 0) {
                    i11 += a(0);
                    i10 = this.f8257d;
                } else {
                    i10 = 0;
                }
                if (!n.e(lVar, i11)) {
                    return false;
                }
                this.f8256c = i10;
            }
            int a10 = a(this.f8256c);
            int i12 = this.f8256c + this.f8257d;
            if (a10 > 0) {
                h0 h0Var = this.f8255b;
                h0Var.c(h0Var.g() + a10);
                if (!n.d(lVar, this.f8255b.e(), this.f8255b.g(), a10)) {
                    return false;
                }
                h0 h0Var2 = this.f8255b;
                h0Var2.T(h0Var2.g() + a10);
                if (this.f8254a.f8268j[i12 - 1] != 255) {
                    z11 = true;
                } else {
                    z11 = false;
                }
                this.f8258e = z11;
            }
            if (i12 == this.f8254a.f8265g) {
                i12 = -1;
            }
            this.f8256c = i12;
        }
        return true;
    }

    public void e() {
        this.f8254a.b();
        this.f8255b.Q(0);
        this.f8256c = -1;
        this.f8258e = false;
    }

    public void f() {
        if (this.f8255b.e().length == 65025) {
            return;
        }
        h0 h0Var = this.f8255b;
        h0Var.S(Arrays.copyOf(h0Var.e(), Math.max(65025, this.f8255b.g())), this.f8255b.g());
    }
}
