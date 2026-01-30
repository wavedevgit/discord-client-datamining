package fk;

import ck.k;
import ck.p;
import ik.c;
import ik.e;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a {

    /* renamed from: g  reason: collision with root package name */
    private static final int[] f25229g = {3808, 476, 2107, 1799};

    /* renamed from: a  reason: collision with root package name */
    private final gk.b f25230a;

    /* renamed from: b  reason: collision with root package name */
    private boolean f25231b;

    /* renamed from: c  reason: collision with root package name */
    private int f25232c;

    /* renamed from: d  reason: collision with root package name */
    private int f25233d;

    /* renamed from: e  reason: collision with root package name */
    private int f25234e;

    /* renamed from: f  reason: collision with root package name */
    private int f25235f;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* renamed from: fk.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class C0326a {

        /* renamed from: a  reason: collision with root package name */
        private final int f25236a;

        /* renamed from: b  reason: collision with root package name */
        private final int f25237b;

        C0326a(int i10, int i11) {
            this.f25236a = i10;
            this.f25237b = i11;
        }

        int a() {
            return this.f25236a;
        }

        int b() {
            return this.f25237b;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        private final int f25238a;

        /* renamed from: b  reason: collision with root package name */
        private final int f25239b;

        b(int i10, int i11) {
            this.f25238a = i10;
            this.f25239b = i11;
        }

        int a() {
            return this.f25238a;
        }

        int b() {
            return this.f25239b;
        }

        p c() {
            return new p(this.f25238a, this.f25239b);
        }

        public String toString() {
            return "<" + this.f25238a + ' ' + this.f25239b + '>';
        }
    }

    public a(gk.b bVar) {
        this.f25230a = bVar;
    }

    private static float b(p pVar, p pVar2) {
        return hk.a.a(pVar.c(), pVar.d(), pVar2.c(), pVar2.d());
    }

    private static float c(b bVar, b bVar2) {
        return hk.a.b(bVar.a(), bVar.b(), bVar2.a(), bVar2.b());
    }

    private static p[] d(p[] pVarArr, int i10, int i11) {
        float f10 = i11 / (i10 * 2.0f);
        float c10 = pVarArr[0].c() - pVarArr[2].c();
        float d10 = pVarArr[0].d() - pVarArr[2].d();
        float c11 = (pVarArr[0].c() + pVarArr[2].c()) / 2.0f;
        float d11 = (pVarArr[0].d() + pVarArr[2].d()) / 2.0f;
        float f11 = c10 * f10;
        float f12 = d10 * f10;
        p pVar = new p(c11 + f11, d11 + f12);
        p pVar2 = new p(c11 - f11, d11 - f12);
        float c12 = pVarArr[1].c() - pVarArr[3].c();
        float d12 = pVarArr[1].d() - pVarArr[3].d();
        float c13 = (pVarArr[1].c() + pVarArr[3].c()) / 2.0f;
        float d13 = (pVarArr[1].d() + pVarArr[3].d()) / 2.0f;
        float f13 = c12 * f10;
        float f14 = f10 * d12;
        return new p[]{pVar, new p(c13 + f13, d13 + f14), pVar2, new p(c13 - f13, d13 - f14)};
    }

    private int e(p[] pVarArr) {
        long j10;
        long j11;
        if (o(pVarArr[0]) && o(pVarArr[1]) && o(pVarArr[2]) && o(pVarArr[3])) {
            int i10 = this.f25234e * 2;
            int[] iArr = {r(pVarArr[0], pVarArr[1], i10), r(pVarArr[1], pVarArr[2], i10), r(pVarArr[2], pVarArr[3], i10), r(pVarArr[3], pVarArr[0], i10)};
            this.f25235f = m(iArr, i10);
            long j12 = 0;
            for (int i11 = 0; i11 < 4; i11++) {
                int i12 = iArr[(this.f25235f + i11) % 4];
                if (this.f25231b) {
                    j10 = j12 << 7;
                    j11 = (i12 >> 1) & 127;
                } else {
                    j10 = j12 << 10;
                    j11 = ((i12 >> 2) & 992) + ((i12 >> 1) & 31);
                }
                j12 = j10 + j11;
            }
            C0326a h10 = h(j12, this.f25231b);
            int a10 = h10.a();
            if (this.f25231b) {
                this.f25232c = (a10 >> 6) + 1;
                this.f25233d = (a10 & 63) + 1;
            } else {
                this.f25232c = (a10 >> 11) + 1;
                this.f25233d = (a10 & 2047) + 1;
            }
            return h10.b();
        }
        throw k.a();
    }

    private p[] f(b bVar) {
        int i10;
        boolean z10 = true;
        this.f25234e = 1;
        b bVar2 = bVar;
        b bVar3 = bVar2;
        b bVar4 = bVar3;
        boolean z11 = true;
        while (this.f25234e < 9) {
            b j10 = j(bVar, z11, 1, -1);
            b j11 = j(bVar2, z11, 1, 1);
            b j12 = j(bVar3, z11, -1, 1);
            b j13 = j(bVar4, z11, -1, -1);
            if (this.f25234e > 2) {
                double c10 = (c(j13, j10) * this.f25234e) / (c(bVar4, bVar) * (this.f25234e + 2));
                if (c10 < 0.75d || c10 > 1.25d || !p(j10, j11, j12, j13)) {
                    break;
                }
            }
            z11 = !z11;
            this.f25234e++;
            bVar4 = j13;
            bVar = j10;
            bVar2 = j11;
            bVar3 = j12;
        }
        int i11 = this.f25234e;
        if (i11 != 5 && i11 != 7) {
            throw k.a();
        }
        if (i11 != 5) {
            z10 = false;
        }
        this.f25231b = z10;
        return d(new p[]{new p(bVar.a() + 0.5f, bVar.b() - 0.5f), new p(bVar2.a() + 0.5f, bVar2.b() + 0.5f), new p(bVar3.a() - 0.5f, bVar3.b() + 0.5f), new p(bVar4.a() - 0.5f, bVar4.b() - 0.5f)}, (i10 * 2) - 3, this.f25234e * 2);
    }

    private int g(b bVar, b bVar2) {
        float c10 = c(bVar, bVar2);
        boolean z10 = false;
        if (c10 == 0.0f) {
            return 0;
        }
        float a10 = (bVar2.a() - bVar.a()) / c10;
        float b10 = (bVar2.b() - bVar.b()) / c10;
        float a11 = bVar.a();
        float b11 = bVar.b();
        boolean e10 = this.f25230a.e(bVar.a(), bVar.b());
        int floor = (int) Math.floor(c10);
        int i10 = 0;
        for (int i11 = 0; i11 < floor; i11++) {
            if (this.f25230a.e(hk.a.c(a11), hk.a.c(b11)) != e10) {
                i10++;
            }
            a11 += a10;
            b11 += b10;
        }
        float f10 = i10 / c10;
        if (f10 > 0.1f && f10 < 0.9f) {
            return 0;
        }
        if (f10 <= 0.1f) {
            z10 = true;
        }
        if (z10 == e10) {
            return 1;
        }
        return -1;
    }

    private static C0326a h(long j10, boolean z10) {
        int i10;
        int i11;
        if (z10) {
            i10 = 7;
            i11 = 2;
        } else {
            i10 = 10;
            i11 = 4;
        }
        int i12 = i10 - i11;
        int[] iArr = new int[i10];
        for (int i13 = i10 - 1; i13 >= 0; i13--) {
            iArr[i13] = ((int) j10) & 15;
            j10 >>= 4;
        }
        try {
            int a10 = new c(ik.a.f28575k).a(iArr, i12);
            int i14 = 0;
            for (int i15 = 0; i15 < i11; i15++) {
                i14 = (i14 << 4) + iArr[i15];
            }
            return new C0326a(i14, a10);
        } catch (e unused) {
            throw k.a();
        }
    }

    private int i() {
        if (this.f25231b) {
            return (this.f25232c * 4) + 11;
        }
        int i10 = this.f25232c;
        return (i10 * 4) + ((((i10 * 2) + 6) / 15) * 2) + 15;
    }

    private b j(b bVar, boolean z10, int i10, int i11) {
        int a10 = bVar.a() + i10;
        int b10 = bVar.b();
        while (true) {
            b10 += i11;
            if (!n(a10, b10) || this.f25230a.e(a10, b10) != z10) {
                break;
            }
            a10 += i10;
        }
        int i12 = a10 - i10;
        int i13 = b10 - i11;
        while (n(i12, i13) && this.f25230a.e(i12, i13) == z10) {
            i12 += i10;
        }
        int i14 = i12 - i10;
        while (n(i14, i13) && this.f25230a.e(i14, i13) == z10) {
            i13 += i11;
        }
        return new b(i14, i13 - i11);
    }

    private b k() {
        p c10;
        p pVar;
        p pVar2;
        p pVar3;
        p c11;
        p c12;
        p c13;
        p c14;
        try {
            p[] c15 = new hk.b(this.f25230a).c();
            pVar2 = c15[0];
            pVar3 = c15[1];
            pVar = c15[2];
            c10 = c15[3];
        } catch (k unused) {
            int l10 = this.f25230a.l() / 2;
            int i10 = this.f25230a.i() / 2;
            int i11 = l10 + 7;
            int i12 = i10 - 7;
            p c16 = j(new b(i11, i12), false, 1, -1).c();
            int i13 = i10 + 7;
            p c17 = j(new b(i11, i13), false, 1, 1).c();
            int i14 = l10 - 7;
            p c18 = j(new b(i14, i13), false, -1, 1).c();
            c10 = j(new b(i14, i12), false, -1, -1).c();
            pVar = c18;
            pVar2 = c16;
            pVar3 = c17;
        }
        int c19 = hk.a.c((((pVar2.c() + c10.c()) + pVar3.c()) + pVar.c()) / 4.0f);
        int c20 = hk.a.c((((pVar2.d() + c10.d()) + pVar3.d()) + pVar.d()) / 4.0f);
        try {
            p[] c21 = new hk.b(this.f25230a, 15, c19, c20).c();
            c11 = c21[0];
            c12 = c21[1];
            c13 = c21[2];
            c14 = c21[3];
        } catch (k unused2) {
            int i15 = c19 + 7;
            int i16 = c20 - 7;
            c11 = j(new b(i15, i16), false, 1, -1).c();
            int i17 = c20 + 7;
            c12 = j(new b(i15, i17), false, 1, 1).c();
            int i18 = c19 - 7;
            c13 = j(new b(i18, i17), false, -1, 1).c();
            c14 = j(new b(i18, i16), false, -1, -1).c();
        }
        return new b(hk.a.c((((c11.c() + c14.c()) + c12.c()) + c13.c()) / 4.0f), hk.a.c((((c11.d() + c14.d()) + c12.d()) + c13.d()) / 4.0f));
    }

    private p[] l(p[] pVarArr) {
        return d(pVarArr, this.f25234e * 2, i());
    }

    private static int m(int[] iArr, int i10) {
        int i11 = 0;
        for (int i12 : iArr) {
            i11 = (i11 << 3) + ((i12 >> (i10 - 2)) << 1) + (i12 & 1);
        }
        int i13 = ((i11 & 1) << 11) + (i11 >> 1);
        for (int i14 = 0; i14 < 4; i14++) {
            if (Integer.bitCount(f25229g[i14] ^ i13) <= 2) {
                return i14;
            }
        }
        throw k.a();
    }

    private boolean n(int i10, int i11) {
        if (i10 >= 0 && i10 < this.f25230a.l() && i11 >= 0 && i11 < this.f25230a.i()) {
            return true;
        }
        return false;
    }

    private boolean o(p pVar) {
        return n(hk.a.c(pVar.c()), hk.a.c(pVar.d()));
    }

    private boolean p(b bVar, b bVar2, b bVar3, b bVar4) {
        b bVar5 = new b(Math.max(0, bVar.a() - 3), Math.min(this.f25230a.i() - 1, bVar.b() + 3));
        b bVar6 = new b(Math.max(0, bVar2.a() - 3), Math.max(0, bVar2.b() - 3));
        b bVar7 = new b(Math.min(this.f25230a.l() - 1, bVar3.a() + 3), Math.max(0, Math.min(this.f25230a.i() - 1, bVar3.b() - 3)));
        b bVar8 = new b(Math.min(this.f25230a.l() - 1, bVar4.a() + 3), Math.min(this.f25230a.i() - 1, bVar4.b() + 3));
        int g10 = g(bVar8, bVar5);
        if (g10 == 0 || g(bVar5, bVar6) != g10 || g(bVar6, bVar7) != g10 || g(bVar7, bVar8) != g10) {
            return false;
        }
        return true;
    }

    private gk.b q(gk.b bVar, p pVar, p pVar2, p pVar3, p pVar4) {
        gk.k b10 = gk.k.b();
        int i10 = i();
        float f10 = i10 / 2.0f;
        int i11 = this.f25234e;
        float f11 = f10 - i11;
        float f12 = f10 + i11;
        return b10.c(bVar, i10, i10, f11, f11, f12, f11, f12, f12, f11, f12, pVar.c(), pVar.d(), pVar2.c(), pVar2.d(), pVar3.c(), pVar3.d(), pVar4.c(), pVar4.d());
    }

    private int r(p pVar, p pVar2, int i10) {
        float b10 = b(pVar, pVar2);
        float f10 = b10 / i10;
        float c10 = pVar.c();
        float d10 = pVar.d();
        float c11 = ((pVar2.c() - pVar.c()) * f10) / b10;
        float d11 = (f10 * (pVar2.d() - pVar.d())) / b10;
        int i11 = 0;
        for (int i12 = 0; i12 < i10; i12++) {
            float f11 = i12;
            if (this.f25230a.e(hk.a.c((f11 * c11) + c10), hk.a.c((f11 * d11) + d10))) {
                i11 |= 1 << ((i10 - i12) - 1);
            }
        }
        return i11;
    }

    public dk.a a(boolean z10) {
        p[] f10 = f(k());
        if (z10) {
            p pVar = f10[0];
            f10[0] = f10[2];
            f10[2] = pVar;
        }
        int e10 = e(f10);
        gk.b bVar = this.f25230a;
        int i10 = this.f25235f;
        return new dk.a(q(bVar, f10[i10 % 4], f10[(i10 + 1) % 4], f10[(i10 + 2) % 4], f10[(i10 + 3) % 4]), l(f10), this.f25231b, this.f25233d, this.f25232c, e10);
    }
}
