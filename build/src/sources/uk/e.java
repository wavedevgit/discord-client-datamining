package uk;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class e extends p {

    /* renamed from: j  reason: collision with root package name */
    static final int[] f51656j = {0, 11, 13, 14, 19, 25, 28, 21, 22, 26};

    /* renamed from: i  reason: collision with root package name */
    private final int[] f51657i = new int[4];

    private static void r(StringBuilder sb2, int i10) {
        for (int i11 = 0; i11 < 10; i11++) {
            if (i10 == f51656j[i11]) {
                sb2.insert(0, (char) (i11 + 48));
                return;
            }
        }
        throw ik.k.a();
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // uk.p
    public int k(mk.a aVar, int[] iArr, StringBuilder sb2) {
        int[] iArr2 = this.f51657i;
        iArr2[0] = 0;
        iArr2[1] = 0;
        iArr2[2] = 0;
        iArr2[3] = 0;
        int l10 = aVar.l();
        int i10 = iArr[1];
        int i11 = 0;
        for (int i12 = 0; i12 < 6 && i10 < l10; i12++) {
            int i13 = p.i(aVar, iArr2, i10, p.f51683h);
            sb2.append((char) ((i13 % 10) + 48));
            for (int i14 : iArr2) {
                i10 += i14;
            }
            if (i13 >= 10) {
                i11 |= 1 << (5 - i12);
            }
        }
        r(sb2, i11);
        int i15 = p.m(aVar, i10, true, p.f51680e)[1];
        for (int i16 = 0; i16 < 6 && i15 < l10; i16++) {
            sb2.append((char) (p.i(aVar, iArr2, i15, p.f51682g) + 48));
            for (int i17 : iArr2) {
                i15 += i17;
            }
        }
        return i15;
    }

    @Override // uk.p
    ik.a p() {
        return ik.a.EAN_13;
    }
}
