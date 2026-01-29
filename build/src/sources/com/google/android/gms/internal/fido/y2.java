package com.google.android.gms.internal.fido;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class y2 {
    public static byte[] a(byte[]... bArr) {
        long j10 = 0;
        int i10 = 0;
        while (true) {
            if (i10 >= bArr.length) {
                break;
            }
            j10 += bArr[i10].length;
            i10++;
        }
        int i11 = (int) j10;
        if (j10 == i11) {
            byte[] bArr2 = new byte[i11];
            int i12 = 0;
            for (byte[] bArr3 : bArr) {
                int length = bArr3.length;
                System.arraycopy(bArr3, 0, bArr2, i12, length);
                i12 += length;
            }
            return bArr2;
        }
        throw new IllegalArgumentException(m0.a("the total number of elements (%s) in the arrays must fit in an int", Long.valueOf(j10)));
    }
}
