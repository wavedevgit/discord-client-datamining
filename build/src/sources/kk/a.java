package kk;

import ck.g;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class a {

    /* renamed from: a  reason: collision with root package name */
    private final gk.b f33231a;

    /* renamed from: b  reason: collision with root package name */
    private final gk.b f33232b;

    /* renamed from: c  reason: collision with root package name */
    private final e f33233c;

    /* JADX INFO: Access modifiers changed from: package-private */
    public a(gk.b bVar) {
        int i10 = bVar.i();
        if (i10 >= 8 && i10 <= 144 && (i10 & 1) == 0) {
            this.f33233c = j(bVar);
            gk.b a10 = a(bVar);
            this.f33231a = a10;
            this.f33232b = new gk.b(a10.l(), a10.i());
            return;
        }
        throw g.a();
    }

    private gk.b a(gk.b bVar) {
        int f10 = this.f33233c.f();
        int e10 = this.f33233c.e();
        if (bVar.i() == f10) {
            int c10 = this.f33233c.c();
            int b10 = this.f33233c.b();
            int i10 = f10 / c10;
            int i11 = e10 / b10;
            gk.b bVar2 = new gk.b(i11 * b10, i10 * c10);
            for (int i12 = 0; i12 < i10; i12++) {
                int i13 = i12 * c10;
                for (int i14 = 0; i14 < i11; i14++) {
                    int i15 = i14 * b10;
                    for (int i16 = 0; i16 < c10; i16++) {
                        int i17 = ((c10 + 2) * i12) + 1 + i16;
                        int i18 = i13 + i16;
                        for (int i19 = 0; i19 < b10; i19++) {
                            if (bVar.e(((b10 + 2) * i14) + 1 + i19, i17)) {
                                bVar2.q(i15 + i19, i18);
                            }
                        }
                    }
                }
            }
            return bVar2;
        }
        throw new IllegalArgumentException("Dimension of bitMatrix must match the version size");
    }

    private int d(int i10, int i11) {
        int i12 = i10 - 1;
        int i13 = (h(i12, 0, i10, i11) ? 1 : 0) << 1;
        if (h(i12, 1, i10, i11)) {
            i13 |= 1;
        }
        int i14 = i13 << 1;
        if (h(i12, 2, i10, i11)) {
            i14 |= 1;
        }
        int i15 = i14 << 1;
        if (h(0, i11 - 2, i10, i11)) {
            i15 |= 1;
        }
        int i16 = i15 << 1;
        int i17 = i11 - 1;
        if (h(0, i17, i10, i11)) {
            i16 |= 1;
        }
        int i18 = i16 << 1;
        if (h(1, i17, i10, i11)) {
            i18 |= 1;
        }
        int i19 = i18 << 1;
        if (h(2, i17, i10, i11)) {
            i19 |= 1;
        }
        int i20 = i19 << 1;
        if (h(3, i17, i10, i11)) {
            return i20 | 1;
        }
        return i20;
    }

    private int e(int i10, int i11) {
        int i12 = (h(i10 + (-3), 0, i10, i11) ? 1 : 0) << 1;
        if (h(i10 - 2, 0, i10, i11)) {
            i12 |= 1;
        }
        int i13 = i12 << 1;
        if (h(i10 - 1, 0, i10, i11)) {
            i13 |= 1;
        }
        int i14 = i13 << 1;
        if (h(0, i11 - 4, i10, i11)) {
            i14 |= 1;
        }
        int i15 = i14 << 1;
        if (h(0, i11 - 3, i10, i11)) {
            i15 |= 1;
        }
        int i16 = i15 << 1;
        if (h(0, i11 - 2, i10, i11)) {
            i16 |= 1;
        }
        int i17 = i16 << 1;
        int i18 = i11 - 1;
        if (h(0, i18, i10, i11)) {
            i17 |= 1;
        }
        int i19 = i17 << 1;
        if (h(1, i18, i10, i11)) {
            return i19 | 1;
        }
        return i19;
    }

    private int f(int i10, int i11) {
        int i12 = i10 - 1;
        int i13 = (h(i12, 0, i10, i11) ? 1 : 0) << 1;
        int i14 = i11 - 1;
        if (h(i12, i14, i10, i11)) {
            i13 |= 1;
        }
        int i15 = i13 << 1;
        int i16 = i11 - 3;
        if (h(0, i16, i10, i11)) {
            i15 |= 1;
        }
        int i17 = i15 << 1;
        int i18 = i11 - 2;
        if (h(0, i18, i10, i11)) {
            i17 |= 1;
        }
        int i19 = i17 << 1;
        if (h(0, i14, i10, i11)) {
            i19 |= 1;
        }
        int i20 = i19 << 1;
        if (h(1, i16, i10, i11)) {
            i20 |= 1;
        }
        int i21 = i20 << 1;
        if (h(1, i18, i10, i11)) {
            i21 |= 1;
        }
        int i22 = i21 << 1;
        if (h(1, i14, i10, i11)) {
            return i22 | 1;
        }
        return i22;
    }

    private int g(int i10, int i11) {
        int i12 = (h(i10 + (-3), 0, i10, i11) ? 1 : 0) << 1;
        if (h(i10 - 2, 0, i10, i11)) {
            i12 |= 1;
        }
        int i13 = i12 << 1;
        if (h(i10 - 1, 0, i10, i11)) {
            i13 |= 1;
        }
        int i14 = i13 << 1;
        if (h(0, i11 - 2, i10, i11)) {
            i14 |= 1;
        }
        int i15 = i14 << 1;
        int i16 = i11 - 1;
        if (h(0, i16, i10, i11)) {
            i15 |= 1;
        }
        int i17 = i15 << 1;
        if (h(1, i16, i10, i11)) {
            i17 |= 1;
        }
        int i18 = i17 << 1;
        if (h(2, i16, i10, i11)) {
            i18 |= 1;
        }
        int i19 = i18 << 1;
        if (h(3, i16, i10, i11)) {
            return i19 | 1;
        }
        return i19;
    }

    private boolean h(int i10, int i11, int i12, int i13) {
        if (i10 < 0) {
            i10 += i12;
            i11 += 4 - ((i12 + 4) & 7);
        }
        if (i11 < 0) {
            i11 += i13;
            i10 += 4 - ((i13 + 4) & 7);
        }
        if (i10 >= i12) {
            i10 -= i12;
        }
        this.f33232b.q(i11, i10);
        return this.f33231a.e(i11, i10);
    }

    private int i(int i10, int i11, int i12, int i13) {
        int i14 = i10 - 2;
        int i15 = i11 - 2;
        int i16 = (h(i14, i15, i12, i13) ? 1 : 0) << 1;
        int i17 = i11 - 1;
        if (h(i14, i17, i12, i13)) {
            i16 |= 1;
        }
        int i18 = i16 << 1;
        int i19 = i10 - 1;
        if (h(i19, i15, i12, i13)) {
            i18 |= 1;
        }
        int i20 = i18 << 1;
        if (h(i19, i17, i12, i13)) {
            i20 |= 1;
        }
        int i21 = i20 << 1;
        if (h(i19, i11, i12, i13)) {
            i21 |= 1;
        }
        int i22 = i21 << 1;
        if (h(i10, i15, i12, i13)) {
            i22 |= 1;
        }
        int i23 = i22 << 1;
        if (h(i10, i17, i12, i13)) {
            i23 |= 1;
        }
        int i24 = i23 << 1;
        if (h(i10, i11, i12, i13)) {
            return i24 | 1;
        }
        return i24;
    }

    private static e j(gk.b bVar) {
        return e.h(bVar.i(), bVar.l());
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public e b() {
        return this.f33233c;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public byte[] c() {
        byte[] bArr = new byte[this.f33233c.g()];
        int i10 = this.f33231a.i();
        int l10 = this.f33231a.l();
        int i11 = 0;
        boolean z10 = false;
        int i12 = 0;
        boolean z11 = false;
        boolean z12 = false;
        boolean z13 = false;
        int i13 = 4;
        while (true) {
            if (i13 == i10 && i11 == 0 && !z10) {
                bArr[i12] = (byte) d(i10, l10);
                i13 -= 2;
                i11 += 2;
                i12++;
                z10 = true;
            } else {
                int i14 = i10 - 2;
                if (i13 == i14 && i11 == 0 && (l10 & 3) != 0 && !z11) {
                    bArr[i12] = (byte) e(i10, l10);
                    i13 -= 2;
                    i11 += 2;
                    i12++;
                    z11 = true;
                } else if (i13 == i10 + 4 && i11 == 2 && (l10 & 7) == 0 && !z12) {
                    bArr[i12] = (byte) f(i10, l10);
                    i13 -= 2;
                    i11 += 2;
                    i12++;
                    z12 = true;
                } else if (i13 == i14 && i11 == 0 && (l10 & 7) == 4 && !z13) {
                    bArr[i12] = (byte) g(i10, l10);
                    i13 -= 2;
                    i11 += 2;
                    i12++;
                    z13 = true;
                } else {
                    while (true) {
                        if (i13 < i10 && i11 >= 0 && !this.f33232b.e(i11, i13)) {
                            bArr[i12] = (byte) i(i13, i11, i10, l10);
                            i12++;
                        }
                        int i15 = i13 - 2;
                        int i16 = i11 + 2;
                        if (i15 < 0 || i16 >= l10) {
                            break;
                        }
                        i13 = i15;
                        i11 = i16;
                    }
                    int i17 = i13 - 1;
                    int i18 = i11 + 5;
                    while (true) {
                        if (i17 >= 0 && i18 < l10 && !this.f33232b.e(i18, i17)) {
                            bArr[i12] = (byte) i(i17, i18, i10, l10);
                            i12++;
                        }
                        int i19 = i17 + 2;
                        int i20 = i18 - 2;
                        if (i19 >= i10 || i20 < 0) {
                            break;
                        }
                        i17 = i19;
                        i18 = i20;
                    }
                    i13 = i17 + 5;
                    i11 = i18 - 1;
                }
            }
            if (i13 >= i10 && i11 >= l10) {
                break;
            }
        }
        if (i12 == this.f33233c.g()) {
            return bArr;
        }
        throw g.a();
    }
}
