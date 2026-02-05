package rk;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class f extends p {

    /* renamed from: i  reason: collision with root package name */
    private final int[] f48842i = new int[4];

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // rk.p
    public int k(jk.a aVar, int[] iArr, StringBuilder sb2) {
        int[] iArr2 = this.f48842i;
        iArr2[0] = 0;
        iArr2[1] = 0;
        iArr2[2] = 0;
        iArr2[3] = 0;
        int l10 = aVar.l();
        int i10 = iArr[1];
        for (int i11 = 0; i11 < 4 && i10 < l10; i11++) {
            sb2.append((char) (p.i(aVar, iArr2, i10, p.f48866g) + 48));
            for (int i12 : iArr2) {
                i10 += i12;
            }
        }
        int i13 = p.m(aVar, i10, true, p.f48864e)[1];
        for (int i14 = 0; i14 < 4 && i13 < l10; i14++) {
            sb2.append((char) (p.i(aVar, iArr2, i13, p.f48866g) + 48));
            for (int i15 : iArr2) {
                i13 += i15;
            }
        }
        return i13;
    }

    @Override // rk.p
    fk.a p() {
        return fk.a.EAN_8;
    }
}
