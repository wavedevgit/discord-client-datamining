package dd;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class j0 {
    public static int a(byte[] bArr, int i10, int i11) {
        while (i10 < i11 && bArr[i10] != 71) {
            i10++;
        }
        return i10;
    }

    public static boolean b(byte[] bArr, int i10, int i11, int i12) {
        int i13 = 0;
        for (int i14 = -4; i14 <= 4; i14++) {
            int i15 = (i14 * 188) + i12;
            if (i15 >= i10 && i15 < i11 && bArr[i15] == 71) {
                i13++;
                if (i13 == 5) {
                    return true;
                }
            } else {
                i13 = 0;
            }
        }
        return false;
    }

    public static long c(ne.h0 h0Var, int i10, int i11) {
        h0Var.U(i10);
        if (h0Var.a() < 5) {
            return -9223372036854775807L;
        }
        int q10 = h0Var.q();
        if ((8388608 & q10) != 0 || ((2096896 & q10) >> 8) != i11 || (q10 & 32) == 0 || h0Var.H() < 7 || h0Var.a() < 7 || (h0Var.H() & 16) != 16) {
            return -9223372036854775807L;
        }
        byte[] bArr = new byte[6];
        h0Var.l(bArr, 0, 6);
        return d(bArr);
    }

    private static long d(byte[] bArr) {
        return ((bArr[0] & 255) << 25) | ((bArr[1] & 255) << 17) | ((bArr[2] & 255) << 9) | ((bArr[3] & 255) << 1) | ((255 & bArr[4]) >> 7);
    }
}
