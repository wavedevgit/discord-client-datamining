package com.appsflyer.internal;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class AFk1gSDK {
    public int getCurrencyIso4217Code;
    public int getMediationNetwork;

    public static char[] getCurrencyIso4217Code(long j10, char[] cArr, int i10) {
        int length = cArr.length;
        char[] cArr2 = new char[length];
        int i11 = 0;
        int i12 = 4;
        for (int i13 = 0; i13 < cArr.length; i13++) {
            if (((j10 >>> i13) & 1) == i10 && i11 < 4) {
                cArr2[i11] = cArr[i13];
            } else if (i12 < length) {
                cArr2[i12] = cArr[i13];
                i12++;
            } else {
                cArr2[i11] = cArr[i13];
            }
            i11++;
        }
        return cArr2;
    }
}
