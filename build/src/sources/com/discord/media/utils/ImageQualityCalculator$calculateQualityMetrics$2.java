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
@kotlin.coroutines.jvm.internal.e(c = "com.discord.media.utils.ImageQualityCalculator$calculateQualityMetrics$2", f = "ImageQualityCalculator.kt", l = {135}, m = "invokeSuspend")
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class ImageQualityCalculator$calculateQualityMetrics$2 extends k implements Function2<CoroutineScope, Continuation<? super ImageQualityCalculator.ImageQualityMetrics>, Object> {
    final /* synthetic */ byte[] $compressedData;
    final /* synthetic */ byte[] $originalData;
    int label;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public ImageQualityCalculator$calculateQualityMetrics$2(byte[] bArr, byte[] bArr2, Continuation<? super ImageQualityCalculator$calculateQualityMetrics$2> continuation) {
        super(2, continuation);
        this.$originalData = bArr;
        this.$compressedData = bArr2;
    }

    @Override // kotlin.coroutines.jvm.internal.a
    public final Continuation<Unit> create(Object obj, Continuation<?> continuation) {
        return new ImageQualityCalculator$calculateQualityMetrics$2(this.$originalData, this.$compressedData, continuation);
    }

    @Override // kotlin.coroutines.jvm.internal.a
    public final Object invokeSuspend(Object obj) {
        Bitmap decodeByteArraySafely;
        Bitmap decodeByteArraySafely2;
        Object f10 = or.b.f();
        int i10 = this.label;
        if (i10 != 0) {
            if (i10 == 1) {
                kotlin.c.b(obj);
                return obj;
            }
            throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
        }
        kotlin.c.b(obj);
        ImageQualityCalculator imageQualityCalculator = ImageQualityCalculator.INSTANCE;
        decodeByteArraySafely = imageQualityCalculator.decodeByteArraySafely(this.$originalData);
        decodeByteArraySafely2 = imageQualityCalculator.decodeByteArraySafely(this.$compressedData);
        if (decodeByteArraySafely != null && decodeByteArraySafely2 != null) {
            this.label = 1;
            Object calculateQualityMetrics = imageQualityCalculator.calculateQualityMetrics(decodeByteArraySafely, decodeByteArraySafely2, this);
            if (calculateQualityMetrics == f10) {
                return f10;
            }
            return calculateQualityMetrics;
        }
        return null;
    }

    @Override // kotlin.jvm.functions.Function2
    public final Object invoke(CoroutineScope coroutineScope, Continuation<? super ImageQualityCalculator.ImageQualityMetrics> continuation) {
        return ((ImageQualityCalculator$calculateQualityMetrics$2) create(coroutineScope, continuation)).invokeSuspend(Unit.f33282a);
    }
}
