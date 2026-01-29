package vk;

import ck.c;
import ck.p;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class a {

    /* renamed from: a  reason: collision with root package name */
    private static final int[] f51162a = {0, 4, 1, 5};

    /* renamed from: b  reason: collision with root package name */
    private static final int[] f51163b = {6, 2, 7, 3};

    /* renamed from: c  reason: collision with root package name */
    private static final int[] f51164c = {8, 1, 1, 1, 1, 1, 1, 3};

    /* renamed from: d  reason: collision with root package name */
    private static final int[] f51165d = {7, 1, 1, 3, 1, 1, 1, 2, 1};

    /* renamed from: e  reason: collision with root package name */
    private static final int[] f51166e = {0, 180, 270, 90};

    private static gk.b a(gk.b bVar, int i10) {
        if (i10 % 360 == 0) {
            return bVar;
        }
        gk.b clone = bVar.clone();
        clone.m(i10);
        return clone;
    }

    private static void b(p[] pVarArr, p[] pVarArr2, int[] iArr) {
        for (int i10 = 0; i10 < iArr.length; i10++) {
            pVarArr[iArr[i10]] = pVarArr2[i10];
        }
    }

    /* JADX WARN: Code restructure failed: missing block: B:10:0x001d, code lost:
        if (r4 != 0) goto L11;
     */
    /* JADX WARN: Code restructure failed: missing block: B:12:0x0020, code lost:
        r3 = r0.iterator();
     */
    /* JADX WARN: Code restructure failed: missing block: B:14:0x0028, code lost:
        if (r3.hasNext() == false) goto L24;
     */
    /* JADX WARN: Code restructure failed: missing block: B:15:0x002a, code lost:
        r4 = (ck.p[]) r3.next();
        r7 = r4[1];
     */
    /* JADX WARN: Code restructure failed: missing block: B:16:0x0032, code lost:
        if (r7 == null) goto L17;
     */
    /* JADX WARN: Code restructure failed: missing block: B:17:0x0034, code lost:
        r2 = (int) java.lang.Math.max(r2, r7.d());
     */
    /* JADX WARN: Code restructure failed: missing block: B:18:0x003e, code lost:
        r4 = r4[3];
     */
    /* JADX WARN: Code restructure failed: missing block: B:19:0x0040, code lost:
        if (r4 == null) goto L23;
     */
    /* JADX WARN: Code restructure failed: missing block: B:20:0x0042, code lost:
        r2 = java.lang.Math.max(r2, (int) r4.d());
     */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private static java.util.List c(boolean r8, gk.b r9) {
        /*
            java.util.ArrayList r0 = new java.util.ArrayList
            r0.<init>()
            r1 = 0
            r2 = r1
            r3 = r2
        L8:
            r4 = r3
        L9:
            int r5 = r9.i()
            if (r2 >= r5) goto L7a
            ck.p[] r3 = g(r9, r2, r3)
            r5 = r3[r1]
            r6 = 1
            if (r5 != 0) goto L50
            r5 = 3
            r7 = r3[r5]
            if (r7 != 0) goto L50
            if (r4 != 0) goto L20
            goto L7a
        L20:
            java.util.Iterator r3 = r0.iterator()
        L24:
            boolean r4 = r3.hasNext()
            if (r4 == 0) goto L4c
            java.lang.Object r4 = r3.next()
            ck.p[] r4 = (ck.p[]) r4
            r7 = r4[r6]
            if (r7 == 0) goto L3e
            float r2 = (float) r2
            float r7 = r7.d()
            float r2 = java.lang.Math.max(r2, r7)
            int r2 = (int) r2
        L3e:
            r4 = r4[r5]
            if (r4 == 0) goto L24
            float r4 = r4.d()
            int r4 = (int) r4
            int r2 = java.lang.Math.max(r2, r4)
            goto L24
        L4c:
            int r2 = r2 + 5
            r3 = r1
            goto L8
        L50:
            r0.add(r3)
            if (r8 != 0) goto L56
            goto L7a
        L56:
            r2 = 2
            r4 = r3[r2]
            if (r4 == 0) goto L69
            float r4 = r4.c()
            int r4 = (int) r4
            r2 = r3[r2]
            float r2 = r2.d()
        L66:
            int r2 = (int) r2
            r3 = r4
            goto L78
        L69:
            r2 = 4
            r4 = r3[r2]
            float r4 = r4.c()
            int r4 = (int) r4
            r2 = r3[r2]
            float r2 = r2.d()
            goto L66
        L78:
            r4 = r6
            goto L9
        L7a:
            return r0
        */
        throw new UnsupportedOperationException("Method not decompiled: vk.a.c(boolean, gk.b):java.util.List");
    }

    public static b d(c cVar, Map map, boolean z10) {
        int[] iArr;
        gk.b a10 = cVar.a();
        for (int i10 : f51166e) {
            gk.b a11 = a(a10, i10);
            List c10 = c(z10, a11);
            if (!c10.isEmpty()) {
                return new b(a11, c10, i10);
            }
        }
        return new b(a10, new ArrayList(), 0);
    }

    private static int[] e(gk.b bVar, int i10, int i11, int i12, int[] iArr, int[] iArr2) {
        Arrays.fill(iArr2, 0, iArr2.length, 0);
        int i13 = 0;
        while (bVar.e(i10, i11) && i10 > 0) {
            int i14 = i13 + 1;
            if (i13 >= 3) {
                break;
            }
            i10--;
            i13 = i14;
        }
        int length = iArr.length;
        int i15 = i10;
        int i16 = 0;
        boolean z10 = false;
        while (i10 < i12) {
            if (bVar.e(i10, i11) != z10) {
                iArr2[i16] = iArr2[i16] + 1;
            } else {
                if (i16 == length - 1) {
                    if (h(iArr2, iArr) < 0.42f) {
                        return new int[]{i15, i10};
                    }
                    i15 += iArr2[0] + iArr2[1];
                    int i17 = i16 - 1;
                    System.arraycopy(iArr2, 2, iArr2, 0, i17);
                    iArr2[i17] = 0;
                    iArr2[i16] = 0;
                    i16--;
                } else {
                    i16++;
                }
                iArr2[i16] = 1;
                z10 = !z10;
            }
            i10++;
        }
        if (i16 == length - 1 && h(iArr2, iArr) < 0.42f) {
            return new int[]{i15, i10 - 1};
        }
        return null;
    }

    private static p[] f(gk.b bVar, int i10, int i11, int i12, int i13, int i14, int[] iArr) {
        int i15;
        boolean z10;
        int[] e10;
        p[] pVarArr = new p[4];
        int[] iArr2 = iArr;
        int[] iArr3 = new int[iArr2.length];
        int i16 = i12;
        while (true) {
            if (i16 < i10) {
                int[] e11 = e(bVar, i13, i16, i11, iArr2, iArr3);
                if (e11 != null) {
                    int[] iArr4 = e11;
                    while (true) {
                        i15 = i16;
                        if (i15 <= 0 || (e10 = e(bVar, i13, i15 - 1, i11, iArr, iArr3)) == null) {
                            break;
                        }
                        iArr4 = e10;
                    }
                    float f10 = i15;
                    pVarArr[0] = new p(iArr4[0], f10);
                    pVarArr[1] = new p(iArr4[1], f10);
                    z10 = true;
                } else {
                    i16 += 5;
                    iArr2 = iArr;
                }
            } else {
                i15 = i16;
                z10 = false;
                break;
            }
        }
        int i17 = i15 + 1;
        if (z10) {
            int[] iArr5 = {(int) pVarArr[0].c(), (int) pVarArr[1].c()};
            int i18 = i17;
            int i19 = 0;
            while (i18 < i10) {
                int[] e12 = e(bVar, iArr5[0], i18, i11, iArr, iArr3);
                if (e12 != null && Math.abs(iArr5[0] - e12[0]) < 5 && Math.abs(iArr5[1] - e12[1]) < 5) {
                    iArr5 = e12;
                    i19 = 0;
                } else if (i19 > 25) {
                    break;
                } else {
                    i19++;
                }
                i18++;
            }
            i17 = i18 - (i19 + 1);
            float f11 = i17;
            pVarArr[2] = new p(iArr5[0], f11);
            pVarArr[3] = new p(iArr5[1], f11);
        }
        if (i17 - i15 < i14) {
            Arrays.fill(pVarArr, (Object) null);
        }
        return pVarArr;
    }

    private static p[] g(gk.b bVar, int i10, int i11) {
        int i12 = bVar.i();
        int l10 = bVar.l();
        p[] pVarArr = new p[8];
        int i13 = 10;
        int i14 = i10;
        int i15 = i11;
        b(pVarArr, f(bVar, i12, l10, i14, i15, 10, f51164c), f51162a);
        p pVar = pVarArr[4];
        if (pVar != null) {
            int c10 = (int) pVar.c();
            int d10 = (int) pVarArr[4].d();
            p pVar2 = pVarArr[5];
            if (pVar2 != null) {
                i13 = (int) Math.max((((int) pVar2.d()) - d10) * 0.5f, 10.0f);
            }
            i14 = d10;
            i15 = c10;
        }
        b(pVarArr, f(bVar, i12, l10, i14, i15, i13, f51165d), f51163b);
        return pVarArr;
    }

    private static float h(int[] iArr, int[] iArr2) {
        float f10;
        int length = iArr.length;
        int i10 = 0;
        int i11 = 0;
        for (int i12 = 0; i12 < length; i12++) {
            i10 += iArr[i12];
            i11 += iArr2[i12];
        }
        if (i10 < i11) {
            return Float.POSITIVE_INFINITY;
        }
        float f11 = i10;
        float f12 = f11 / i11;
        float f13 = 0.8f * f12;
        float f14 = 0.0f;
        for (int i13 = 0; i13 < length; i13++) {
            float f15 = iArr2[i13] * f12;
            float f16 = iArr[i13];
            if (f16 > f15) {
                f10 = f16 - f15;
            } else {
                f10 = f15 - f16;
            }
            if (f10 > f13) {
                return Float.POSITIVE_INFINITY;
            }
            f14 += f10;
        }
        return f14 / f11;
    }
}
