package lk;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class j extends hk.b {

    /* renamed from: d  reason: collision with root package name */
    private static final byte[] f36346d = new byte[0];

    /* renamed from: b  reason: collision with root package name */
    private byte[] f36347b;

    /* renamed from: c  reason: collision with root package name */
    private final int[] f36348c;

    public j(hk.i iVar) {
        super(iVar);
        this.f36347b = f36346d;
        this.f36348c = new int[32];
    }

    private static int g(int[] iArr) {
        int length = iArr.length;
        int i10 = 0;
        int i11 = 0;
        int i12 = 0;
        for (int i13 = 0; i13 < length; i13++) {
            int i14 = iArr[i13];
            if (i14 > i10) {
                i12 = i13;
                i10 = i14;
            }
            if (i14 > i11) {
                i11 = i14;
            }
        }
        int i15 = 0;
        int i16 = 0;
        for (int i17 = 0; i17 < length; i17++) {
            int i18 = i17 - i12;
            int i19 = iArr[i17] * i18 * i18;
            if (i19 > i16) {
                i15 = i17;
                i16 = i19;
            }
        }
        if (i12 <= i15) {
            int i20 = i12;
            i12 = i15;
            i15 = i20;
        }
        if (i12 - i15 > length / 16) {
            int i21 = i12 - 1;
            int i22 = -1;
            int i23 = i21;
            while (i21 > i15) {
                int i24 = i21 - i15;
                int i25 = i24 * i24 * (i12 - i21) * (i11 - iArr[i21]);
                if (i25 > i22) {
                    i23 = i21;
                    i22 = i25;
                }
                i21--;
            }
            return i23 << 3;
        }
        throw hk.k.a();
    }

    private void h(int i10) {
        if (this.f36347b.length < i10) {
            this.f36347b = new byte[i10];
        }
        for (int i11 = 0; i11 < 32; i11++) {
            this.f36348c[i11] = 0;
        }
    }

    @Override // hk.b
    public b b() {
        hk.i e10 = e();
        int d10 = e10.d();
        int a10 = e10.a();
        b bVar = new b(d10, a10);
        h(d10);
        int[] iArr = this.f36348c;
        for (int i10 = 1; i10 < 5; i10++) {
            byte[] c10 = e10.c((a10 * i10) / 5, this.f36347b);
            int i11 = (d10 * 4) / 5;
            for (int i12 = d10 / 5; i12 < i11; i12++) {
                int i13 = (c10[i12] & 255) >> 3;
                iArr[i13] = iArr[i13] + 1;
            }
        }
        int g10 = g(iArr);
        byte[] b10 = e10.b();
        for (int i14 = 0; i14 < a10; i14++) {
            int i15 = i14 * d10;
            for (int i16 = 0; i16 < d10; i16++) {
                if ((b10[i15 + i16] & 255) < g10) {
                    bVar.q(i16, i14);
                }
            }
        }
        return bVar;
    }

    @Override // hk.b
    public a c(int i10, a aVar) {
        hk.i e10 = e();
        int d10 = e10.d();
        if (aVar != null && aVar.l() >= d10) {
            aVar.d();
        } else {
            aVar = new a(d10);
        }
        h(d10);
        byte[] c10 = e10.c(i10, this.f36347b);
        int[] iArr = this.f36348c;
        for (int i11 = 0; i11 < d10; i11++) {
            int i12 = (c10[i11] & 255) >> 3;
            iArr[i12] = iArr[i12] + 1;
        }
        int g10 = g(iArr);
        if (d10 < 3) {
            for (int i13 = 0; i13 < d10; i13++) {
                if ((c10[i13] & 255) < g10) {
                    aVar.r(i13);
                }
            }
        } else {
            int i14 = c10[1] & 255;
            int i15 = c10[0] & 255;
            int i16 = i14;
            int i17 = 1;
            while (i17 < d10 - 1) {
                int i18 = i17 + 1;
                int i19 = c10[i18] & 255;
                if ((((i16 * 4) - i15) - i19) / 2 < g10) {
                    aVar.r(i17);
                }
                i15 = i16;
                i17 = i18;
                i16 = i19;
            }
        }
        return aVar;
    }
}
