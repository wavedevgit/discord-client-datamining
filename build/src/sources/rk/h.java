package rk;

import com.google.zxing.Result;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class h extends k {

    /* renamed from: b  reason: collision with root package name */
    private static final int[] f48845b = {6, 8, 10, 12, 14};

    /* renamed from: c  reason: collision with root package name */
    private static final int[] f48846c = {1, 1, 1, 1};

    /* renamed from: d  reason: collision with root package name */
    private static final int[][] f48847d = {new int[]{1, 1, 2}, new int[]{1, 1, 3}};

    /* renamed from: e  reason: collision with root package name */
    private static final int[][] f48848e = {new int[]{1, 1, 2, 2, 1}, new int[]{2, 1, 1, 1, 2}, new int[]{1, 2, 1, 1, 2}, new int[]{2, 2, 1, 1, 1}, new int[]{1, 1, 2, 1, 2}, new int[]{2, 1, 2, 1, 1}, new int[]{1, 2, 2, 1, 1}, new int[]{1, 1, 1, 2, 2}, new int[]{2, 1, 1, 2, 1}, new int[]{1, 2, 1, 2, 1}, new int[]{1, 1, 3, 3, 1}, new int[]{3, 1, 1, 1, 3}, new int[]{1, 3, 1, 1, 3}, new int[]{3, 3, 1, 1, 1}, new int[]{1, 1, 3, 1, 3}, new int[]{3, 1, 3, 1, 1}, new int[]{1, 3, 3, 1, 1}, new int[]{1, 1, 1, 3, 3}, new int[]{3, 1, 1, 3, 1}, new int[]{1, 3, 1, 3, 1}};

    /* renamed from: a  reason: collision with root package name */
    private int f48849a = -1;

    private static int g(int[] iArr) {
        int length = f48848e.length;
        float f10 = 0.38f;
        int i10 = -1;
        for (int i11 = 0; i11 < length; i11++) {
            float d10 = k.d(iArr, f48848e[i11], 0.5f);
            if (d10 < f10) {
                i10 = i11;
                f10 = d10;
            } else if (d10 == f10) {
                i10 = -1;
            }
        }
        if (i10 >= 0) {
            return i10 % 10;
        }
        throw fk.k.a();
    }

    private int[] h(jk.a aVar) {
        int i10;
        int[] k10;
        aVar.q();
        try {
            try {
                k10 = k(aVar, l(aVar), f48847d[0]);
            } catch (fk.k unused) {
                k10 = k(aVar, i10, f48847d[1]);
            }
            m(aVar, k10[0]);
            int i11 = k10[0];
            k10[0] = aVar.l() - k10[1];
            k10[1] = aVar.l() - i11;
            return k10;
        } finally {
            aVar.q();
        }
    }

    private static void i(jk.a aVar, int i10, int i11, StringBuilder sb2) {
        int[] iArr = new int[10];
        int[] iArr2 = new int[5];
        int[] iArr3 = new int[5];
        while (i10 < i11) {
            k.e(aVar, i10, iArr);
            for (int i12 = 0; i12 < 5; i12++) {
                int i13 = i12 * 2;
                iArr2[i12] = iArr[i13];
                iArr3[i12] = iArr[i13 + 1];
            }
            sb2.append((char) (g(iArr2) + 48));
            sb2.append((char) (g(iArr3) + 48));
            for (int i14 = 0; i14 < 10; i14++) {
                i10 += iArr[i14];
            }
        }
    }

    private int[] j(jk.a aVar) {
        int[] k10 = k(aVar, l(aVar), f48846c);
        int i10 = k10[1];
        int i11 = k10[0];
        this.f48849a = (i10 - i11) / 4;
        m(aVar, i11);
        return k10;
    }

    private static int[] k(jk.a aVar, int i10, int[] iArr) {
        int length = iArr.length;
        int[] iArr2 = new int[length];
        int l10 = aVar.l();
        int i11 = i10;
        boolean z10 = false;
        int i12 = 0;
        while (i10 < l10) {
            if (aVar.g(i10) != z10) {
                iArr2[i12] = iArr2[i12] + 1;
            } else {
                if (i12 == length - 1) {
                    if (k.d(iArr2, iArr, 0.5f) < 0.38f) {
                        return new int[]{i11, i10};
                    }
                    i11 += iArr2[0] + iArr2[1];
                    int i13 = i12 - 1;
                    System.arraycopy(iArr2, 2, iArr2, 0, i13);
                    iArr2[i13] = 0;
                    iArr2[i12] = 0;
                    i12--;
                } else {
                    i12++;
                }
                iArr2[i12] = 1;
                z10 = !z10;
            }
            i10++;
        }
        throw fk.k.a();
    }

    private static int l(jk.a aVar) {
        int l10 = aVar.l();
        int j10 = aVar.j(0);
        if (j10 != l10) {
            return j10;
        }
        throw fk.k.a();
    }

    /* JADX WARN: Code restructure failed: missing block: B:10:0x001c, code lost:
        return;
     */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private void m(jk.a r3, int r4) {
        /*
            r2 = this;
            int r0 = r2.f48849a
            int r0 = r0 * 10
            int r0 = java.lang.Math.min(r0, r4)
            int r4 = r4 + (-1)
        La:
            if (r0 <= 0) goto L1a
            if (r4 < 0) goto L1a
            boolean r1 = r3.g(r4)
            if (r1 == 0) goto L15
            goto L1a
        L15:
            int r0 = r0 + (-1)
            int r4 = r4 + (-1)
            goto La
        L1a:
            if (r0 != 0) goto L1d
            return
        L1d:
            fk.k r3 = fk.k.a()
            throw r3
        */
        throw new UnsupportedOperationException("Method not decompiled: rk.h.m(jk.a, int):void");
    }

    @Override // rk.k
    public Result b(int i10, jk.a aVar, Map map) {
        int[] iArr;
        boolean z10;
        int[] j10 = j(aVar);
        int[] h10 = h(aVar);
        StringBuilder sb2 = new StringBuilder(20);
        i(aVar, j10[1], h10[0], sb2);
        String sb3 = sb2.toString();
        if (map != null) {
            iArr = (int[]) map.get(fk.e.ALLOWED_LENGTHS);
        } else {
            iArr = null;
        }
        if (iArr == null) {
            iArr = f48845b;
        }
        int length = sb3.length();
        int length2 = iArr.length;
        int i11 = 0;
        int i12 = 0;
        while (true) {
            if (i11 < length2) {
                int i13 = iArr[i11];
                if (length == i13) {
                    z10 = true;
                    break;
                }
                if (i13 > i12) {
                    i12 = i13;
                }
                i11++;
            } else {
                z10 = false;
                break;
            }
        }
        if (!z10 && length > i12) {
            z10 = true;
        }
        if (z10) {
            float f10 = i10;
            Result result = new Result(sb3, null, new fk.p[]{new fk.p(j10[1], f10), new fk.p(h10[0], f10)}, fk.a.ITF);
            result.h(fk.o.SYMBOLOGY_IDENTIFIER, "]I0");
            return result;
        }
        throw fk.g.a();
    }
}
