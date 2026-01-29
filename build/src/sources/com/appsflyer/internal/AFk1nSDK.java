package com.appsflyer.internal;

import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import com.facebook.react.views.text.internal.span.SetSpanOperation;
import kotlin.jvm.internal.ByteCompanionObject;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class AFk1nSDK {
    private static byte[] component2 = new byte[IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER];
    static final byte[] getMonetizationNetwork = new byte[IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER];
    static final int[] AFAdRevenueData = new int[IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER];
    static final int[] getRevenue = new int[IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER];
    static final int[] getCurrencyIso4217Code = new int[IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER];
    static final int[] getMediationNetwork = new int[IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER];
    private static int[] areAllFieldsValid = new int[10];

    static {
        int i10;
        byte b10;
        byte[] bArr;
        int i11;
        byte b11 = 1;
        byte b12 = 1;
        do {
            int i12 = (b11 << 1) ^ b11;
            if ((b11 & ByteCompanionObject.MIN_VALUE) != 0) {
                i10 = 27;
            } else {
                i10 = 0;
            }
            b11 = (byte) (i10 ^ i12);
            byte b13 = (byte) (b12 ^ (b12 << 1));
            byte b14 = (byte) (b13 ^ (b13 << 2));
            byte b15 = (byte) (b14 ^ (b14 << 4));
            if ((b15 & ByteCompanionObject.MIN_VALUE) != 0) {
                b10 = 9;
            } else {
                b10 = 0;
            }
            b12 = (byte) (b15 ^ b10);
            bArr = component2;
            i11 = b11 & 255;
            int i13 = b12 & 255;
            bArr[i11] = (byte) (((((b12 ^ 99) ^ ((i13 << 1) | (i13 >> 7))) ^ ((i13 << 2) | (i13 >> 6))) ^ ((i13 << 3) | (i13 >> 5))) ^ ((i13 >> 4) | (i13 << 4)));
        } while (i11 != 1);
        bArr[0] = 99;
        for (int i14 = 0; i14 < 256; i14++) {
            int i15 = component2[i14] & 255;
            getMonetizationNetwork[i15] = (byte) i14;
            int i16 = i14 << 1;
            if (i16 >= 256) {
                i16 ^= 283;
            }
            int i17 = i16 << 1;
            if (i17 >= 256) {
                i17 ^= 283;
            }
            int i18 = i17 << 1;
            if (i18 >= 256) {
                i18 ^= 283;
            }
            int i19 = i18 ^ i14;
            int i20 = ((i16 ^ (i17 ^ i18)) << 24) | (i19 << 16) | ((i19 ^ i17) << 8) | (i19 ^ i16);
            AFAdRevenueData[i15] = i20;
            getRevenue[i15] = (i20 >>> 8) | (i20 << 24);
            getCurrencyIso4217Code[i15] = (i20 >>> 16) | (i20 << 16);
            getMediationNetwork[i15] = (i20 << 8) | (i20 >>> 24);
        }
        areAllFieldsValid[0] = 16777216;
        int i21 = 1;
        for (int i22 = 1; i22 < 10; i22++) {
            i21 <<= 1;
            if (i21 >= 256) {
                i21 ^= 283;
            }
            areAllFieldsValid[i22] = i21 << 24;
        }
    }

    public static byte[][] getMediationNetwork(int i10) {
        byte[][] bArr = new byte[4];
        for (int i11 = 0; i11 < 4; i11++) {
            int i12 = i10 >>> (i11 << 3);
            byte[] bArr2 = new byte[4];
            bArr2[0] = (byte) (i12 & 3);
            bArr2[1] = (byte) ((i12 >> 2) & 3);
            bArr2[2] = (byte) ((i12 >> 4) & 3);
            bArr2[3] = (byte) ((i12 >> 6) & 3);
            bArr[i11] = bArr2;
        }
        return bArr;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static int[] getMonetizationNetwork(byte[] bArr, int i10) {
        if (bArr.length == 16) {
            int i11 = 4;
            int i12 = (i10 + 1) * 4;
            int[] iArr = new int[i12];
            int i13 = 0;
            for (int i14 = 0; i14 < 4; i14++) {
                int i15 = ((bArr[i13 + 1] & 255) << 16) | (bArr[i13] << 24);
                int i16 = i13 + 3;
                i13 += 4;
                iArr[i14] = i15 | ((bArr[i13 + 2] & 255) << 8) | (bArr[i16] & 255);
            }
            int i17 = 4;
            int i18 = 0;
            int i19 = 0;
            while (i17 < i12) {
                int i20 = iArr[i17 - 1];
                if (i18 == 0) {
                    byte[] bArr2 = component2;
                    i20 = ((bArr2[i20 >>> 24] & 255) | (((bArr2[(i20 >>> 16) & SetSpanOperation.SPAN_MAX_PRIORITY] << 24) | ((bArr2[(i20 >>> 8) & SetSpanOperation.SPAN_MAX_PRIORITY] & 255) << 16)) | ((bArr2[i20 & SetSpanOperation.SPAN_MAX_PRIORITY] & 255) << 8))) ^ areAllFieldsValid[i19];
                    i18 = 4;
                    i19++;
                }
                iArr[i17] = i20 ^ iArr[i17 - 4];
                i17++;
                i18--;
            }
            if (bArr.length == 16) {
                int[] iArr2 = new int[i12];
                int i21 = i10 * 4;
                iArr2[0] = iArr[i21];
                int i22 = 1;
                iArr2[1] = iArr[i21 + 1];
                iArr2[2] = iArr[i21 + 2];
                char c10 = 3;
                iArr2[3] = iArr[i21 + 3];
                int i23 = i21 - 4;
                while (i22 < i10) {
                    int i24 = iArr[i23];
                    int[] iArr3 = AFAdRevenueData;
                    byte[] bArr3 = component2;
                    int i25 = iArr3[bArr3[i24 >>> 24] & 255];
                    int[] iArr4 = getRevenue;
                    int i26 = i25 ^ iArr4[bArr3[(i24 >>> 16) & SetSpanOperation.SPAN_MAX_PRIORITY] & 255];
                    int[] iArr5 = getCurrencyIso4217Code;
                    int i27 = i26 ^ iArr5[bArr3[(i24 >>> 8) & SetSpanOperation.SPAN_MAX_PRIORITY] & 255];
                    int[] iArr6 = getMediationNetwork;
                    iArr2[i11] = iArr6[bArr3[i24 & SetSpanOperation.SPAN_MAX_PRIORITY] & 255] ^ i27;
                    int i28 = iArr[i23 + 1];
                    char c11 = c10;
                    int[] iArr7 = iArr2;
                    iArr7[i11 + 1] = ((iArr4[bArr3[(i28 >>> 16) & SetSpanOperation.SPAN_MAX_PRIORITY] & 255] ^ iArr3[bArr3[i28 >>> 24] & 255]) ^ iArr5[bArr3[(i28 >>> 8) & SetSpanOperation.SPAN_MAX_PRIORITY] & 255]) ^ iArr6[bArr3[i28 & SetSpanOperation.SPAN_MAX_PRIORITY] & 255];
                    int i29 = iArr[i23 + 2];
                    int i30 = i11 + 3;
                    iArr7[i11 + 2] = iArr6[bArr3[i29 & SetSpanOperation.SPAN_MAX_PRIORITY] & 255] ^ ((iArr3[bArr3[i29 >>> 24] & 255] ^ iArr4[bArr3[(i29 >>> 16) & SetSpanOperation.SPAN_MAX_PRIORITY] & 255]) ^ iArr5[bArr3[(i29 >>> 8) & SetSpanOperation.SPAN_MAX_PRIORITY] & 255]);
                    int i31 = iArr[i23 + 3];
                    i11 += 4;
                    iArr7[i30] = iArr6[bArr3[i31 & SetSpanOperation.SPAN_MAX_PRIORITY] & 255] ^ ((iArr3[bArr3[i31 >>> 24] & 255] ^ iArr4[bArr3[(i31 >>> 16) & SetSpanOperation.SPAN_MAX_PRIORITY] & 255]) ^ iArr5[bArr3[(i31 >>> 8) & SetSpanOperation.SPAN_MAX_PRIORITY] & 255]);
                    i23 -= 4;
                    i22++;
                    c10 = c11;
                    iArr2 = iArr7;
                }
                int[] iArr8 = iArr2;
                iArr8[i11] = iArr[i23];
                iArr8[i11 + 1] = iArr[i23 + 1];
                iArr8[i11 + 2] = iArr[i23 + 2];
                iArr8[i11 + 3] = iArr[i23 + 3];
                return iArr8;
            }
            throw new IllegalArgumentException();
        }
        throw new IllegalArgumentException();
    }
}
