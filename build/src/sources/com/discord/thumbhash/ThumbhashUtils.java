package com.discord.thumbhash;

import android.graphics.Bitmap;
import kotlin.jvm.internal.ByteCompanionObject;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class ThumbhashUtils {

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class Channel {

        /* renamed from: ac  reason: collision with root package name */
        float[] f9714ac;

        /* renamed from: dc  reason: collision with root package name */
        float f9715dc;
        int nx;
        int ny;
        float scale;

        Channel(int i10, int i11) {
            int i12;
            this.nx = i10;
            this.ny = i11;
            int i13 = 0;
            for (int i14 = 0; i14 < i11; i14++) {
                if (i14 > 0) {
                    i12 = 0;
                } else {
                    i12 = 1;
                }
                while (i12 * i11 < (i11 - i14) * i10) {
                    i13++;
                    i12++;
                }
            }
            this.f9714ac = new float[i13];
        }

        int decode(byte[] bArr, int i10, int i11, float f10) {
            int i12 = 0;
            while (true) {
                float[] fArr = this.f9714ac;
                if (i12 < fArr.length) {
                    fArr[i12] = ((((bArr[(i11 >> 1) + i10] >> ((i11 & 1) << 2)) & 15) / 7.5f) - 1.0f) * f10;
                    i11++;
                    i12++;
                } else {
                    return i11;
                }
            }
        }
    }

    ThumbhashUtils() {
    }

    public static float thumbHashToApproximateAspectRatio(byte[] bArr) {
        boolean z10;
        int i10;
        byte b10 = bArr[3];
        boolean z11 = false;
        if ((bArr[2] & ByteCompanionObject.MIN_VALUE) != 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        if ((bArr[4] & ByteCompanionObject.MIN_VALUE) != 0) {
            z11 = true;
        }
        int i11 = 5;
        if (z11) {
            if (z10) {
                i10 = 5;
            } else {
                i10 = 7;
            }
        } else {
            i10 = b10 & 7;
        }
        if (z11) {
            i11 = b10 & 7;
        } else if (!z10) {
            i11 = 7;
        }
        return i10 / i11;
    }

    /* JADX WARN: Removed duplicated region for block: B:25:0x0088  */
    /* JADX WARN: Removed duplicated region for block: B:26:0x0092  */
    /* JADX WARN: Removed duplicated region for block: B:29:0x00a2  */
    /* JADX WARN: Removed duplicated region for block: B:32:0x00cd  */
    /* JADX WARN: Removed duplicated region for block: B:33:0x00d7  */
    /* JADX WARN: Removed duplicated region for block: B:36:0x00e0  */
    /* JADX WARN: Removed duplicated region for block: B:39:0x00ec  */
    /* JADX WARN: Removed duplicated region for block: B:40:0x00ee  */
    /* JADX WARN: Removed duplicated region for block: B:43:0x00f6  */
    /* JADX WARN: Removed duplicated region for block: B:46:0x0101  */
    /* JADX WARN: Removed duplicated region for block: B:47:0x0103  */
    /* JADX WARN: Removed duplicated region for block: B:50:0x010a  */
    /* JADX WARN: Removed duplicated region for block: B:51:0x010c  */
    /* JADX WARN: Removed duplicated region for block: B:54:0x011c  */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public static android.graphics.Bitmap thumbHashToRGBA(byte[] r33, int r34, float r35) {
        /*
            Method dump skipped, instructions count: 668
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: com.discord.thumbhash.ThumbhashUtils.thumbHashToRGBA(byte[], int, float):android.graphics.Bitmap");
    }

    public static Bitmap thumbHashToRGBA(byte[] bArr) {
        return thumbHashToRGBA(bArr, 1, 1.1f);
    }
}
