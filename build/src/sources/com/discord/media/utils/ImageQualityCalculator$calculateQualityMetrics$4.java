package com.discord.media.utils;

import android.graphics.Bitmap;
import com.discord.media.utils.ImageQualityCalculator;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.coroutines.jvm.internal.k;
import kotlin.jvm.functions.Function2;
import kotlinx.coroutines.CoroutineScope;
/* JADX INFO: Access modifiers changed from: package-private */
@Metadata(d1 = {"\u0000\n\n\u0000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\u0010\u0000\u001a\u0004\u0018\u00010\u0001*\u00020\u0002H\n"}, d2 = {"<anonymous>", "Lcom/discord/media/utils/ImageQualityCalculator$ImageQualityMetrics;", "Lkotlinx/coroutines/CoroutineScope;"}, k = 3, mv = {2, 1, 0}, xi = 48)
@kotlin.coroutines.jvm.internal.e(c = "com.discord.media.utils.ImageQualityCalculator$calculateQualityMetrics$4", f = "ImageQualityCalculator.kt", l = {}, m = "invokeSuspend")
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class ImageQualityCalculator$calculateQualityMetrics$4 extends k implements Function2<CoroutineScope, Continuation<? super ImageQualityCalculator.ImageQualityMetrics>, Object> {
    final /* synthetic */ Bitmap $compressedBitmap;
    final /* synthetic */ Bitmap $originalBitmap;
    int label;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public ImageQualityCalculator$calculateQualityMetrics$4(Bitmap bitmap, Bitmap bitmap2, Continuation<? super ImageQualityCalculator$calculateQualityMetrics$4> continuation) {
        super(2, continuation);
        this.$originalBitmap = bitmap;
        this.$compressedBitmap = bitmap2;
    }

    @Override // kotlin.coroutines.jvm.internal.a
    public final Continuation<Unit> create(Object obj, Continuation<?> continuation) {
        return new ImageQualityCalculator$calculateQualityMetrics$4(this.$originalBitmap, this.$compressedBitmap, continuation);
    }

    @Override // kotlin.coroutines.jvm.internal.a
    public final Object invokeSuspend(Object obj) {
        int[] iArr;
        int[] iArr2;
        double calculatePSNR;
        double calculateSSIM;
        pr.b.f();
        if (this.label == 0) {
            kotlin.c.b(obj);
            try {
                if (this.$originalBitmap.getWidth() == this.$compressedBitmap.getWidth() && this.$originalBitmap.getHeight() == this.$compressedBitmap.getHeight()) {
                    int width = this.$originalBitmap.getWidth();
                    int height = this.$originalBitmap.getHeight();
                    int i10 = width * height;
                    int[] iArr3 = new int[i10];
                    int[] iArr4 = new int[i10];
                    this.$originalBitmap.getPixels(iArr3, 0, width, 0, 0, width, height);
                    this.$compressedBitmap.getPixels(iArr4, 0, width, 0, 0, width, height);
                    if (this.$originalBitmap.isPremultiplied()) {
                        iArr = ImageQualityCalculator.INSTANCE.unpremultiplyPixels(iArr3);
                    } else {
                        iArr = iArr3;
                    }
                    if (this.$compressedBitmap.isPremultiplied()) {
                        iArr2 = ImageQualityCalculator.INSTANCE.unpremultiplyPixels(iArr4);
                    } else {
                        iArr2 = iArr4;
                    }
                    long nanoTime = System.nanoTime();
                    ImageQualityCalculator imageQualityCalculator = ImageQualityCalculator.INSTANCE;
                    calculatePSNR = imageQualityCalculator.calculatePSNR(iArr, iArr2, width, height);
                    long nanoTime2 = (System.nanoTime() - nanoTime) / 1000000;
                    long nanoTime3 = System.nanoTime();
                    calculateSSIM = imageQualityCalculator.calculateSSIM(iArr, iArr2, width, height);
                    return new ImageQualityCalculator.ImageQualityMetrics(calculatePSNR, calculateSSIM, nanoTime2, (System.nanoTime() - nanoTime3) / 1000000);
                }
            } catch (Exception unused) {
            }
            return null;
        }
        throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
    }

    @Override // kotlin.jvm.functions.Function2
    public final Object invoke(CoroutineScope coroutineScope, Continuation<? super ImageQualityCalculator.ImageQualityMetrics> continuation) {
        return ((ImageQualityCalculator$calculateQualityMetrics$4) create(coroutineScope, continuation)).invokeSuspend(Unit.f33074a);
    }
}
