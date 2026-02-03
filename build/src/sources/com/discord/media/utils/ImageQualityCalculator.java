package com.discord.media.utils;

import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import com.facebook.react.views.text.internal.span.SetSpanOperation;
import js.g;
import js.m0;
import kotlin.Metadata;
import kotlin.coroutines.Continuation;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000J\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u0007\n\u0002\b\u0002\n\u0002\u0010\b\n\u0002\b\u0006\n\u0002\u0010\u0006\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0012\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0010\u0015\n\u0002\b\u0005\n\u0002\u0010\u0014\n\u0002\b\u0011\bÆ\u0002\u0018\u00002\u00020\u0001:\u00014B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J \u0010\u0012\u001a\u0004\u0018\u00010\u00132\u0006\u0010\u0014\u001a\u00020\u00152\u0006\u0010\u0016\u001a\u00020\u0015H\u0086@¢\u0006\u0002\u0010\u0017J \u0010\u0012\u001a\u0004\u0018\u00010\u00132\u0006\u0010\u0018\u001a\u00020\u00192\u0006\u0010\u001a\u001a\u00020\u0019H\u0086@¢\u0006\u0002\u0010\u001bJ(\u0010\u001c\u001a\u00020\u000f2\u0006\u0010\u001d\u001a\u00020\u001e2\u0006\u0010\u001f\u001a\u00020\u001e2\u0006\u0010 \u001a\u00020\b2\u0006\u0010!\u001a\u00020\bH\u0002J(\u0010\"\u001a\u00020\u000f2\u0006\u0010\u001d\u001a\u00020\u001e2\u0006\u0010\u001f\u001a\u00020\u001e2\u0006\u0010 \u001a\u00020\b2\u0006\u0010!\u001a\u00020\bH\u0002J \u0010#\u001a\u00020$2\u0006\u0010%\u001a\u00020\u001e2\u0006\u0010 \u001a\u00020\b2\u0006\u0010!\u001a\u00020\bH\u0002J(\u0010&\u001a\u00020\u000f2\u0006\u0010'\u001a\u00020$2\u0006\u0010(\u001a\u00020$2\u0006\u0010 \u001a\u00020\b2\u0006\u0010!\u001a\u00020\bH\u0002JH\u0010)\u001a\u00020\u000f2\u0006\u0010'\u001a\u00020$2\u0006\u0010(\u001a\u00020$2\u0006\u0010 \u001a\u00020\b2\u0006\u0010*\u001a\u00020\b2\u0006\u0010+\u001a\u00020\b2\u0006\u0010,\u001a\u00020\b2\u0006\u0010-\u001a\u00020\u00052\u0006\u0010.\u001a\u00020\u0005H\u0002J\u0012\u0010/\u001a\u0004\u0018\u00010\u00192\u0006\u00100\u001a\u00020\u0015H\u0002J \u00101\u001a\u00020\b2\u0006\u0010 \u001a\u00020\b2\u0006\u0010!\u001a\u00020\b2\u0006\u00102\u001a\u00020\bH\u0002J\u0010\u00103\u001a\u00020\u001e2\u0006\u0010%\u001a\u00020\u001eH\u0002R\u000e\u0010\u0004\u001a\u00020\u0005X\u0082T¢\u0006\u0002\n\u0000R\u000e\u0010\u0006\u001a\u00020\u0005X\u0082T¢\u0006\u0002\n\u0000R\u000e\u0010\u0007\u001a\u00020\bX\u0082T¢\u0006\u0002\n\u0000R\u000e\u0010\t\u001a\u00020\bX\u0082T¢\u0006\u0002\n\u0000R\u000e\u0010\n\u001a\u00020\u0005X\u0082T¢\u0006\u0002\n\u0000R\u000e\u0010\u000b\u001a\u00020\u0005X\u0082T¢\u0006\u0002\n\u0000R\u000e\u0010\f\u001a\u00020\u0005X\u0082T¢\u0006\u0002\n\u0000R\u000e\u0010\r\u001a\u00020\bX\u0082T¢\u0006\u0002\n\u0000R\u000e\u0010\u000e\u001a\u00020\u000fX\u0082T¢\u0006\u0002\n\u0000R\u000e\u0010\u0010\u001a\u00020\u000fX\u0082T¢\u0006\u0002\n\u0000R\u000e\u0010\u0011\u001a\u00020\bX\u0082T¢\u0006\u0002\n\u0000¨\u00065"}, d2 = {"Lcom/discord/media/utils/ImageQualityCalculator;", "", "<init>", "()V", "SSIM_C1", "", "SSIM_C2", "SSIM_WINDOW_SIZE", "", "SSIM_WINDOW_STRIDE", "RGB_TO_GRAYSCALE_RED_WEIGHT", "RGB_TO_GRAYSCALE_GREEN_WEIGHT", "RGB_TO_GRAYSCALE_BLUE_WEIGHT", "MAX_PROCESSING_DIMENSION", "MAX_PIXEL_VALUE_8BIT", "", "PSNR_DECIBEL_COEFFICIENT", "RGB_CHANNEL_COUNT", "calculateQualityMetrics", "Lcom/discord/media/utils/ImageQualityCalculator$ImageQualityMetrics;", "originalData", "", "compressedData", "([B[BLkotlin/coroutines/Continuation;)Ljava/lang/Object;", "originalBitmap", "Landroid/graphics/Bitmap;", "compressedBitmap", "(Landroid/graphics/Bitmap;Landroid/graphics/Bitmap;Lkotlin/coroutines/Continuation;)Ljava/lang/Object;", "calculatePSNR", "originalPixels", "", "compressedPixels", "width", "height", "calculateSSIM", "convertToGrayscale", "", "pixels", "calculateSSIMFromGrayscale", "original", "compressed", "calculateWindowSSIM", "startX", "startY", "windowSize", "c1", "c2", "decodeByteArraySafely", "data", "calculateInSampleSize", "maxDimension", "unpremultiplyPixels", "ImageQualityMetrics", "media_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class ImageQualityCalculator {
    @NotNull
    public static final ImageQualityCalculator INSTANCE = new ImageQualityCalculator();
    private static final double MAX_PIXEL_VALUE_8BIT = 255.0d;
    private static final int MAX_PROCESSING_DIMENSION = 4096;
    private static final double PSNR_DECIBEL_COEFFICIENT = 20.0d;
    private static final int RGB_CHANNEL_COUNT = 3;
    private static final float RGB_TO_GRAYSCALE_BLUE_WEIGHT = 0.114f;
    private static final float RGB_TO_GRAYSCALE_GREEN_WEIGHT = 0.587f;
    private static final float RGB_TO_GRAYSCALE_RED_WEIGHT = 0.299f;
    private static final float SSIM_C1 = 6.5025f;
    private static final float SSIM_C2 = 58.5225f;
    private static final int SSIM_WINDOW_SIZE = 8;
    private static final int SSIM_WINDOW_STRIDE = 4;

    @Metadata(d1 = {"\u0000.\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\u0006\n\u0002\b\u0002\n\u0002\u0010\t\n\u0002\b\u000f\n\u0002\u0010\u000b\n\u0002\b\u0002\n\u0002\u0010\b\n\u0000\n\u0002\u0010\u000e\n\u0000\b\u0086\b\u0018\u00002\u00020\u0001B'\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0003\u0012\u0006\u0010\u0005\u001a\u00020\u0006\u0012\u0006\u0010\u0007\u001a\u00020\u0006¢\u0006\u0004\b\b\u0010\tJ\t\u0010\u0010\u001a\u00020\u0003HÆ\u0003J\t\u0010\u0011\u001a\u00020\u0003HÆ\u0003J\t\u0010\u0012\u001a\u00020\u0006HÆ\u0003J\t\u0010\u0013\u001a\u00020\u0006HÆ\u0003J1\u0010\u0014\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\b\b\u0002\u0010\u0004\u001a\u00020\u00032\b\b\u0002\u0010\u0005\u001a\u00020\u00062\b\b\u0002\u0010\u0007\u001a\u00020\u0006HÆ\u0001J\u0013\u0010\u0015\u001a\u00020\u00162\b\u0010\u0017\u001a\u0004\u0018\u00010\u0001HÖ\u0003J\t\u0010\u0018\u001a\u00020\u0019HÖ\u0001J\t\u0010\u001a\u001a\u00020\u001bHÖ\u0001R\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\n\u0010\u000bR\u0011\u0010\u0004\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\f\u0010\u000bR\u0011\u0010\u0005\u001a\u00020\u0006¢\u0006\b\n\u0000\u001a\u0004\b\r\u0010\u000eR\u0011\u0010\u0007\u001a\u00020\u0006¢\u0006\b\n\u0000\u001a\u0004\b\u000f\u0010\u000e¨\u0006\u001c"}, d2 = {"Lcom/discord/media/utils/ImageQualityCalculator$ImageQualityMetrics;", "", "psnr", "", "ssim", "psnrCalculationTimeMs", "", "ssimCalculationTimeMs", "<init>", "(DDJJ)V", "getPsnr", "()D", "getSsim", "getPsnrCalculationTimeMs", "()J", "getSsimCalculationTimeMs", "component1", "component2", "component3", "component4", "copy", "equals", "", "other", "hashCode", "", "toString", "", "media_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class ImageQualityMetrics {
        private final double psnr;
        private final long psnrCalculationTimeMs;
        private final double ssim;
        private final long ssimCalculationTimeMs;

        public ImageQualityMetrics(double d10, double d11, long j10, long j11) {
            this.psnr = d10;
            this.ssim = d11;
            this.psnrCalculationTimeMs = j10;
            this.ssimCalculationTimeMs = j11;
        }

        public static /* synthetic */ ImageQualityMetrics copy$default(ImageQualityMetrics imageQualityMetrics, double d10, double d11, long j10, long j11, int i10, Object obj) {
            if ((i10 & 1) != 0) {
                d10 = imageQualityMetrics.psnr;
            }
            double d12 = d10;
            if ((i10 & 2) != 0) {
                d11 = imageQualityMetrics.ssim;
            }
            double d13 = d11;
            if ((i10 & 4) != 0) {
                j10 = imageQualityMetrics.psnrCalculationTimeMs;
            }
            return imageQualityMetrics.copy(d12, d13, j10, (i10 & 8) != 0 ? imageQualityMetrics.ssimCalculationTimeMs : j11);
        }

        public final double component1() {
            return this.psnr;
        }

        public final double component2() {
            return this.ssim;
        }

        public final long component3() {
            return this.psnrCalculationTimeMs;
        }

        public final long component4() {
            return this.ssimCalculationTimeMs;
        }

        @NotNull
        public final ImageQualityMetrics copy(double d10, double d11, long j10, long j11) {
            return new ImageQualityMetrics(d10, d11, j10, j11);
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj instanceof ImageQualityMetrics) {
                ImageQualityMetrics imageQualityMetrics = (ImageQualityMetrics) obj;
                return Double.compare(this.psnr, imageQualityMetrics.psnr) == 0 && Double.compare(this.ssim, imageQualityMetrics.ssim) == 0 && this.psnrCalculationTimeMs == imageQualityMetrics.psnrCalculationTimeMs && this.ssimCalculationTimeMs == imageQualityMetrics.ssimCalculationTimeMs;
            }
            return false;
        }

        public final double getPsnr() {
            return this.psnr;
        }

        public final long getPsnrCalculationTimeMs() {
            return this.psnrCalculationTimeMs;
        }

        public final double getSsim() {
            return this.ssim;
        }

        public final long getSsimCalculationTimeMs() {
            return this.ssimCalculationTimeMs;
        }

        public int hashCode() {
            return (((((Double.hashCode(this.psnr) * 31) + Double.hashCode(this.ssim)) * 31) + Long.hashCode(this.psnrCalculationTimeMs)) * 31) + Long.hashCode(this.ssimCalculationTimeMs);
        }

        @NotNull
        public String toString() {
            double d10 = this.psnr;
            double d11 = this.ssim;
            long j10 = this.psnrCalculationTimeMs;
            long j11 = this.ssimCalculationTimeMs;
            return "ImageQualityMetrics(psnr=" + d10 + ", ssim=" + d11 + ", psnrCalculationTimeMs=" + j10 + ", ssimCalculationTimeMs=" + j11 + ")";
        }
    }

    private ImageQualityCalculator() {
    }

    private final int calculateInSampleSize(int i10, int i11, int i12) {
        int i13 = 1;
        if (i11 <= i12 && i10 <= i12) {
            return 1;
        }
        int i14 = i11 / 2;
        int i15 = i10 / 2;
        while (i14 / i13 >= i12 && i15 / i13 >= i12) {
            i13 *= 2;
        }
        return i13;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final double calculatePSNR(int[] iArr, int[] iArr2, int i10, int i11) {
        int i12 = i10 * i11;
        double d10 = 0.0d;
        for (int i13 = 0; i13 < i12; i13++) {
            int i14 = iArr[i13];
            int i15 = iArr2[i13];
            int i16 = (i14 >> 16) & SetSpanOperation.SPAN_MAX_PRIORITY;
            int i17 = (i14 >> 8) & SetSpanOperation.SPAN_MAX_PRIORITY;
            int i18 = i14 & SetSpanOperation.SPAN_MAX_PRIORITY;
            double d11 = i16 - ((i15 >> 16) & SetSpanOperation.SPAN_MAX_PRIORITY);
            double d12 = i17 - ((i15 >> 8) & SetSpanOperation.SPAN_MAX_PRIORITY);
            double d13 = i18 - (i15 & SetSpanOperation.SPAN_MAX_PRIORITY);
            d10 += (d11 * d11) + (d12 * d12) + (d13 * d13);
        }
        double d14 = d10 / (i12 * 3.0d);
        if (d14 == 0.0d) {
            return Double.POSITIVE_INFINITY;
        }
        return Math.log10(MAX_PIXEL_VALUE_8BIT / Math.sqrt(d14)) * PSNR_DECIBEL_COEFFICIENT;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final double calculateSSIM(int[] iArr, int[] iArr2, int i10, int i11) {
        return calculateSSIMFromGrayscale(convertToGrayscale(iArr, i10, i11), convertToGrayscale(iArr2, i10, i11), i10, i11);
    }

    private final double calculateSSIMFromGrayscale(float[] fArr, float[] fArr2, int i10, int i11) {
        double d10;
        int i12;
        int i13 = 0;
        int c10 = tr.c.c(0, i11 - 8, 4);
        if (c10 >= 0) {
            int i14 = 0;
            int i15 = 0;
            d10 = 0.0d;
            while (true) {
                int c11 = tr.c.c(i13, i10 - 8, 4);
                if (c11 >= 0) {
                    int i16 = i13;
                    while (true) {
                        int i17 = c11;
                        double calculateWindowSSIM = calculateWindowSSIM(fArr, fArr2, i10, i16, i15, 8, SSIM_C1, SSIM_C2);
                        if (Math.abs(calculateWindowSSIM) <= Double.MAX_VALUE) {
                            d10 += calculateWindowSSIM;
                            i14++;
                        }
                        if (i16 == i17) {
                            break;
                        }
                        i16 += 4;
                        c11 = i17;
                    }
                }
                if (i15 == c10) {
                    break;
                }
                i15 += 4;
                i13 = 0;
            }
            i12 = i14;
        } else {
            d10 = 0.0d;
            i12 = 0;
        }
        if (i12 <= 0) {
            return 0.0d;
        }
        return d10 / i12;
    }

    private final double calculateWindowSSIM(float[] fArr, float[] fArr2, int i10, int i11, int i12, int i13, float f10, float f11) {
        int i14 = i13 * i13;
        double d10 = 0.0d;
        double d11 = 0.0d;
        double d12 = 0.0d;
        double d13 = 0.0d;
        double d14 = 0.0d;
        for (int i15 = 0; i15 < i13; i15++) {
            int i16 = 0;
            while (i16 < i13) {
                int i17 = ((i12 + i15) * i10) + i11 + i16;
                int i18 = i16;
                double d15 = fArr[i17];
                double d16 = fArr2[i17];
                d10 += d15;
                d11 += d16;
                d12 += d15 * d15;
                d13 += d16 * d16;
                d14 += d16 * d15;
                i16 = i18 + 1;
            }
        }
        double d17 = i14;
        double d18 = d10 / d17;
        double d19 = d11 / d17;
        double d20 = (d12 - (d10 * d18)) / d17;
        double d21 = (d13 - (d11 * d19)) / d17;
        double d22 = f10;
        double d23 = f11;
        double d24 = ((d18 * 2.0d * d19) + d22) * ((((d14 - (d10 * d19)) / d17) * 2.0d) + d23);
        double d25 = ((d18 * d18) + (d19 * d19) + d22) * (d20 + d21 + d23);
        if (d25 <= 0.0d) {
            return 0.0d;
        }
        return d24 / d25;
    }

    private final float[] convertToGrayscale(int[] iArr, int i10, int i11) {
        int i12 = i10 * i11;
        float[] fArr = new float[i12];
        for (int i13 = 0; i13 < i12; i13++) {
            int i14 = iArr[i13];
            fArr[i13] = (((i14 >> 16) & SetSpanOperation.SPAN_MAX_PRIORITY) * RGB_TO_GRAYSCALE_RED_WEIGHT) + (((i14 >> 8) & SetSpanOperation.SPAN_MAX_PRIORITY) * RGB_TO_GRAYSCALE_GREEN_WEIGHT) + ((i14 & SetSpanOperation.SPAN_MAX_PRIORITY) * RGB_TO_GRAYSCALE_BLUE_WEIGHT);
        }
        return fArr;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final Bitmap decodeByteArraySafely(byte[] bArr) {
        int i10;
        try {
            BitmapFactory.Options options = new BitmapFactory.Options();
            options.inJustDecodeBounds = true;
            BitmapFactory.decodeByteArray(bArr, 0, bArr.length, options);
            int i11 = options.outWidth;
            if (i11 > 0 && (i10 = options.outHeight) > 0) {
                int calculateInSampleSize = calculateInSampleSize(i11, i10, 4096);
                BitmapFactory.Options options2 = new BitmapFactory.Options();
                options2.inSampleSize = calculateInSampleSize;
                options2.inPreferredConfig = Bitmap.Config.ARGB_8888;
                options2.inPremultiplied = false;
                options2.inScaled = false;
                return BitmapFactory.decodeByteArray(bArr, 0, bArr.length, options2);
            }
        } catch (Exception unused) {
        }
        return null;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final int[] unpremultiplyPixels(int[] iArr) {
        int[] iArr2 = new int[iArr.length];
        int length = iArr.length;
        for (int i10 = 0; i10 < length; i10++) {
            int i11 = iArr[i10];
            int i12 = (i11 >> 24) & SetSpanOperation.SPAN_MAX_PRIORITY;
            if (i12 != 0) {
                if (i12 != 255) {
                    iArr2[i10] = kotlin.ranges.d.m(((i11 & SetSpanOperation.SPAN_MAX_PRIORITY) * SetSpanOperation.SPAN_MAX_PRIORITY) / i12, 0, SetSpanOperation.SPAN_MAX_PRIORITY) | (i12 << 24) | (kotlin.ranges.d.m((((i11 >> 16) & SetSpanOperation.SPAN_MAX_PRIORITY) * SetSpanOperation.SPAN_MAX_PRIORITY) / i12, 0, SetSpanOperation.SPAN_MAX_PRIORITY) << 16) | (kotlin.ranges.d.m((((i11 >> 8) & SetSpanOperation.SPAN_MAX_PRIORITY) * SetSpanOperation.SPAN_MAX_PRIORITY) / i12, 0, SetSpanOperation.SPAN_MAX_PRIORITY) << 8);
                } else {
                    iArr2[i10] = i11;
                }
            } else {
                iArr2[i10] = 0;
            }
        }
        return iArr2;
    }

    public final Object calculateQualityMetrics(@NotNull byte[] bArr, @NotNull byte[] bArr2, @NotNull Continuation<? super ImageQualityMetrics> continuation) {
        return g.g(m0.a(), new ImageQualityCalculator$calculateQualityMetrics$2(bArr, bArr2, null), continuation);
    }

    public final Object calculateQualityMetrics(@NotNull Bitmap bitmap, @NotNull Bitmap bitmap2, @NotNull Continuation<? super ImageQualityMetrics> continuation) {
        return g.g(m0.a(), new ImageQualityCalculator$calculateQualityMetrics$4(bitmap, bitmap2, null), continuation);
    }
}
