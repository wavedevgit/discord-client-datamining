package pe;

import java.util.ArrayList;
import java.util.zip.Inflater;
import ne.g0;
import ne.h0;
import ne.w0;
import pe.e;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
abstract class f {
    public static e a(byte[] bArr, int i10) {
        ArrayList arrayList;
        h0 h0Var = new h0(bArr);
        try {
            if (c(h0Var)) {
                arrayList = f(h0Var);
            } else {
                arrayList = e(h0Var);
            }
        } catch (ArrayIndexOutOfBoundsException unused) {
            arrayList = null;
        }
        if (arrayList == null) {
            return null;
        }
        int size = arrayList.size();
        if (size != 1) {
            if (size != 2) {
                return null;
            }
            return new e((e.a) arrayList.get(0), (e.a) arrayList.get(1), i10);
        }
        return new e((e.a) arrayList.get(0), i10);
    }

    private static int b(int i10) {
        return (-(i10 & 1)) ^ (i10 >> 1);
    }

    private static boolean c(h0 h0Var) {
        h0Var.V(4);
        int q10 = h0Var.q();
        h0Var.U(0);
        if (q10 != 1886547818) {
            return false;
        }
        return true;
    }

    private static e.a d(h0 h0Var) {
        int q10 = h0Var.q();
        e.a aVar = null;
        if (q10 > 10000) {
            return null;
        }
        float[] fArr = new float[q10];
        for (int i10 = 0; i10 < q10; i10++) {
            fArr[i10] = h0Var.p();
        }
        int q11 = h0Var.q();
        if (q11 > 32000) {
            return null;
        }
        double d10 = 2.0d;
        double log = Math.log(2.0d);
        int ceil = (int) Math.ceil(Math.log(q10 * 2.0d) / log);
        g0 g0Var = new g0(h0Var.e());
        int i11 = 8;
        g0Var.p(h0Var.f() * 8);
        float[] fArr2 = new float[q11 * 5];
        int[] iArr = new int[5];
        int i12 = 0;
        int i13 = 0;
        while (i12 < q11) {
            e.a aVar2 = aVar;
            int i14 = 0;
            while (i14 < 5) {
                int b10 = iArr[i14] + b(g0Var.h(ceil));
                if (b10 < q10 && b10 >= 0) {
                    fArr2[i13] = fArr[b10];
                    iArr[i14] = b10;
                    i14++;
                    i13++;
                } else {
                    return aVar2;
                }
            }
            i12++;
            aVar = aVar2;
        }
        e.a aVar3 = aVar;
        g0Var.p((g0Var.e() + 7) & (-8));
        int i15 = 32;
        int h10 = g0Var.h(32);
        e.b[] bVarArr = new e.b[h10];
        int i16 = 0;
        while (i16 < h10) {
            int h11 = g0Var.h(i11);
            int h12 = g0Var.h(i11);
            int h13 = g0Var.h(i15);
            if (h13 > 128000) {
                return aVar3;
            }
            int i17 = h10;
            int ceil2 = (int) Math.ceil(Math.log(q11 * d10) / log);
            float[] fArr3 = new float[h13 * 3];
            float[] fArr4 = new float[h13 * 2];
            int i18 = 0;
            int i19 = 0;
            while (i18 < h13) {
                int b11 = i19 + b(g0Var.h(ceil2));
                if (b11 >= 0 && b11 < q11) {
                    int i20 = i18 * 3;
                    int i21 = b11 * 5;
                    fArr3[i20] = fArr2[i21];
                    fArr3[i20 + 1] = fArr2[i21 + 1];
                    fArr3[i20 + 2] = fArr2[i21 + 2];
                    int i22 = i18 * 2;
                    fArr4[i22] = fArr2[i21 + 3];
                    fArr4[i22 + 1] = fArr2[i21 + 4];
                    i18++;
                    i19 = b11;
                } else {
                    return aVar3;
                }
            }
            bVarArr[i16] = new e.b(h11, fArr3, fArr4, h12);
            i16++;
            h10 = i17;
            i15 = 32;
            d10 = 2.0d;
            i11 = 8;
        }
        return new e.a(bVarArr);
    }

    private static ArrayList e(h0 h0Var) {
        if (h0Var.H() != 0) {
            return null;
        }
        h0Var.V(7);
        int q10 = h0Var.q();
        if (q10 == 1684433976) {
            h0 h0Var2 = new h0();
            Inflater inflater = new Inflater(true);
            try {
                if (!w0.A0(h0Var, h0Var2, inflater)) {
                    return null;
                }
                inflater.end();
                h0Var = h0Var2;
            } finally {
                inflater.end();
            }
        } else if (q10 != 1918990112) {
            return null;
        }
        return g(h0Var);
    }

    private static ArrayList f(h0 h0Var) {
        int q10;
        h0Var.V(8);
        int f10 = h0Var.f();
        int g10 = h0Var.g();
        while (f10 < g10 && (q10 = h0Var.q() + f10) > f10 && q10 <= g10) {
            int q11 = h0Var.q();
            if (q11 != 2037673328 && q11 != 1836279920) {
                h0Var.U(q10);
                f10 = q10;
            } else {
                h0Var.T(q10);
                return e(h0Var);
            }
        }
        return null;
    }

    private static ArrayList g(h0 h0Var) {
        ArrayList arrayList = new ArrayList();
        int f10 = h0Var.f();
        int g10 = h0Var.g();
        while (f10 < g10) {
            int q10 = h0Var.q() + f10;
            if (q10 <= f10 || q10 > g10) {
                return null;
            }
            if (h0Var.q() == 1835365224) {
                e.a d10 = d(h0Var);
                if (d10 == null) {
                    return null;
                }
                arrayList.add(d10);
            }
            h0Var.U(q10);
            f10 = q10;
        }
        return arrayList;
    }
}
