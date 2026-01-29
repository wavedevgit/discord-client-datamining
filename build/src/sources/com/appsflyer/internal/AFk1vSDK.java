package com.appsflyer.internal;

import com.facebook.react.views.text.internal.span.SetSpanOperation;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class AFk1vSDK {
    public static void getMonetizationNetwork(int i10, int i11, boolean z10, int i12, int[] iArr, int[][] iArr2, int[] iArr3) {
        if (!z10) {
            getRevenue(iArr);
        }
        int i13 = 0;
        while (i13 < i12) {
            int i14 = i10 ^ iArr[i13];
            int revenue = i11 ^ getRevenue(i14, iArr2);
            i13++;
            i11 = i14;
            i10 = revenue;
        }
        int i15 = i10 ^ iArr[iArr.length - 2];
        int i16 = i11 ^ iArr[iArr.length - 1];
        if (!z10) {
            getRevenue(iArr);
        }
        iArr3[0] = i16;
        iArr3[1] = i15;
    }

    private static void getRevenue(int[] iArr) {
        for (int i10 = 0; i10 < iArr.length / 2; i10++) {
            int i11 = iArr[i10];
            iArr[i10] = iArr[(iArr.length - i10) - 1];
            iArr[(iArr.length - i10) - 1] = i11;
        }
    }

    private static int getRevenue(int i10, int[][] iArr) {
        return ((iArr[0][i10 >>> 24] + iArr[1][(i10 >>> 16) & SetSpanOperation.SPAN_MAX_PRIORITY]) ^ iArr[2][(i10 >>> 8) & SetSpanOperation.SPAN_MAX_PRIORITY]) + iArr[3][i10 & SetSpanOperation.SPAN_MAX_PRIORITY];
    }
}
