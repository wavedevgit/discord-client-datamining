package com.discord.media.utils;

import android.content.Context;
import android.media.MediaFormat;
import android.net.Uri;
import androidx.recyclerview.widget.RecyclerView;
import com.discord.media.utils.DiscordVideoMediaSource;
import com.linkedin.android.litr.MediaTransformer;
import com.linkedin.android.litr.d;
import java.nio.ByteBuffer;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.concurrent.CancellationException;
import kotlin.Metadata;
import kotlin.Result;
import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.coroutines.jvm.internal.g;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlinx.coroutines.CancellableContinuation;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000F\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010%\n\u0002\u0010\u000e\n\u0002\u0018\u0002\n\u0002\u0010\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\u0010\u0007\n\u0002\b\u0002\bÀ\u0002\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\u000e\u0010\t\u001a\u00020\b2\u0006\u0010\n\u001a\u00020\u0006JL\u0010\u000b\u001a\u00020\f2\u0006\u0010\n\u001a\u00020\u00062\u0006\u0010\r\u001a\u00020\u000e2\u0006\u0010\u000f\u001a\u00020\u00102\u0006\u0010\u0011\u001a\u00020\f2\u0006\u0010\u0012\u001a\u00020\u00132\u0014\b\u0002\u0010\u0014\u001a\u000e\u0012\u0004\u0012\u00020\u0016\u0012\u0004\u0012\u00020\b0\u0015H\u0086@¢\u0006\u0002\u0010\u0017R \u0010\u0004\u001a\u0014\u0012\u0004\u0012\u00020\u0006\u0012\n\u0012\b\u0012\u0004\u0012\u00020\b0\u00070\u0005X\u0082\u0004¢\u0006\u0002\n\u0000¨\u0006\u0018"}, d2 = {"Lcom/discord/media/utils/Transcoder;", "", "<init>", "()V", "cancelCallbacks", "", "", "Lkotlin/Function0;", "", "cancel", "requestId", "convertCompress", "Landroid/net/Uri;", "context", "Landroid/content/Context;", "mediaSource", "Lcom/discord/media/utils/DiscordVideoMediaSource;", "outputUri", "encodingConfig", "Lcom/discord/media/utils/EncodingConfig;", "onProgress", "Lkotlin/Function1;", "", "(Ljava/lang/String;Landroid/content/Context;Lcom/discord/media/utils/DiscordVideoMediaSource;Landroid/net/Uri;Lcom/discord/media/utils/EncodingConfig;Lkotlin/jvm/functions/Function1;Lkotlin/coroutines/Continuation;)Ljava/lang/Object;", "media_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nTranscoder.kt\nKotlin\n*S Kotlin\n*F\n+ 1 Transcoder.kt\ncom/discord/media/utils/Transcoder\n+ 2 CancellableContinuation.kt\nkotlinx/coroutines/CancellableContinuationKt\n+ 3 fake.kt\nkotlin/jvm/internal/FakeKt\n*L\n1#1,114:1\n426#2,9:115\n435#2,2:125\n1#3:124\n*S KotlinDebug\n*F\n+ 1 Transcoder.kt\ncom/discord/media/utils/Transcoder\n*L\n29#1:115,9\n29#1:125,2\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class Transcoder {
    @NotNull
    public static final Transcoder INSTANCE = new Transcoder();
    @NotNull
    private static final Map<String, Function0<Unit>> cancelCallbacks = new LinkedHashMap();

    private Transcoder() {
    }

    public static /* synthetic */ Object convertCompress$default(Transcoder transcoder, String str, Context context, DiscordVideoMediaSource discordVideoMediaSource, Uri uri, EncodingConfig encodingConfig, Function1 function1, Continuation continuation, int i10, Object obj) {
        Function1 function12 = function1;
        if ((i10 & 32) != 0) {
            function12 = new Function1() { // from class: com.discord.media.utils.f
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj2) {
                    Unit convertCompress$lambda$0;
                    convertCompress$lambda$0 = Transcoder.convertCompress$lambda$0(((Float) obj2).floatValue());
                    return convertCompress$lambda$0;
                }
            };
        }
        return transcoder.convertCompress(str, context, discordVideoMediaSource, uri, encodingConfig, function12, continuation);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit convertCompress$lambda$0(float f10) {
        return Unit.f31988a;
    }

    public final void cancel(@NotNull String requestId) {
        Intrinsics.checkNotNullParameter(requestId, "requestId");
        Function0<Unit> remove = cancelCallbacks.remove(requestId);
        if (remove != null) {
            remove.invoke();
        }
    }

    public final Object convertCompress(@NotNull final String str, @NotNull Context context, @NotNull DiscordVideoMediaSource discordVideoMediaSource, @NotNull final Uri uri, @NotNull EncodingConfig encodingConfig, @NotNull final Function1<? super Float, Unit> function1, @NotNull Continuation<? super Uri> continuation) {
        final kotlinx.coroutines.e eVar = new kotlinx.coroutines.e(ur.b.c(continuation), 1);
        eVar.H();
        final MediaTransformer mediaTransformer = new MediaTransformer(context);
        cancelCallbacks.put(str, new Function0<Unit>() { // from class: com.discord.media.utils.Transcoder$convertCompress$3$1
            @Override // kotlin.jvm.functions.Function0
            public /* bridge */ /* synthetic */ Object invoke() {
                m943invoke();
                return Unit.f31988a;
            }

            /* renamed from: invoke  reason: collision with other method in class */
            public final void m943invoke() {
                MediaTransformer.this.a(str);
            }
        });
        MediaFormat mediaFormat = new MediaFormat();
        if (encodingConfig.getUseHEVC()) {
            mediaFormat.setString("mime", "video/hevc");
            if (encodingConfig.getCreateHDR()) {
                mediaFormat.setInteger("profile", RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT);
            } else {
                mediaFormat.setInteger("profile", 1);
            }
        } else {
            mediaFormat.setString("mime", "video/avc");
        }
        mediaFormat.setInteger("width", encodingConfig.getTargetWidth());
        mediaFormat.setInteger("height", encodingConfig.getTargetHeight());
        mediaFormat.setInteger("bitrate", encodingConfig.getTargetBitrate().intValue());
        mediaFormat.setFloat("frame-rate", encodingConfig.getFrameRate().floatValue());
        mediaFormat.setFloat("operating-rate", encodingConfig.getFrameRate().floatValue());
        mediaFormat.setFloat("i-frame-interval", encodingConfig.getKeyFrameIntervalSeconds().floatValue());
        mediaFormat.setInteger("rotation-degrees", encodingConfig.getRotationDegrees().intValue());
        mediaFormat.setInteger("priority", 1);
        DiscordVideoMediaSource.ColorFormatSettings colorFormatSettings = discordVideoMediaSource.getColorFormatSettings();
        if (colorFormatSettings != null) {
            Integer colorTransfer = colorFormatSettings.getColorTransfer();
            if (colorTransfer != null) {
                mediaFormat.setInteger("color-transfer", colorTransfer.intValue());
            }
            Integer colorStandard = colorFormatSettings.getColorStandard();
            if (colorStandard != null) {
                mediaFormat.setInteger("color-standard", colorStandard.intValue());
            }
            Integer colorRange = colorFormatSettings.getColorRange();
            if (colorRange != null) {
                mediaFormat.setInteger("color-range", colorRange.intValue());
            }
            ByteBuffer hdrStaticInfo = colorFormatSettings.getHdrStaticInfo();
            if (hdrStaticInfo != null) {
                mediaFormat.setByteBuffer("hdr-static-info", hdrStaticInfo);
            }
        }
        com.linkedin.android.litr.d a10 = new d.b().c(true).b(encodingConfig.getProgressUpdateGranularity()).a();
        Intrinsics.checkNotNullExpressionValue(a10, "build(...)");
        mediaTransformer.h(str, discordVideoMediaSource.getInputUri(), uri, mediaFormat, discordVideoMediaSource.getAudioFormat(), new jl.a() { // from class: com.discord.media.utils.Transcoder$convertCompress$3$2
            @Override // jl.a
            public void onCancelled(String id2, List<kl.a> list) {
                Intrinsics.checkNotNullParameter(id2, "id");
                mediaTransformer.e();
                Transcoder.cancelCallbacks.remove(str);
                if (eVar.a()) {
                    CancellableContinuation cancellableContinuation = eVar;
                    Result.a aVar = Result.f31985e;
                    cancellableContinuation.resumeWith(Result.b(kotlin.c.a(new CancellationException("Video transcoding was cancelled"))));
                }
            }

            @Override // jl.a
            public void onCompleted(String id2, List<kl.a> list) {
                Intrinsics.checkNotNullParameter(id2, "id");
                mediaTransformer.e();
                function1.invoke(Float.valueOf(1.0f));
                Transcoder.cancelCallbacks.remove(str);
                CancellableContinuation cancellableContinuation = eVar;
                Result.a aVar = Result.f31985e;
                cancellableContinuation.resumeWith(Result.b(uri));
            }

            @Override // jl.a
            public void onError(String id2, Throwable th2, List<kl.a> list) {
                Intrinsics.checkNotNullParameter(id2, "id");
                mediaTransformer.e();
                Transcoder.cancelCallbacks.remove(str);
                CancellableContinuation cancellableContinuation = eVar;
                Result.a aVar = Result.f31985e;
                if (th2 == null) {
                    th2 = new Throwable("Unknown transcoding error");
                }
                cancellableContinuation.resumeWith(Result.b(kotlin.c.a(th2)));
            }

            @Override // jl.a
            public void onProgress(String id2, float f10) {
                Intrinsics.checkNotNullParameter(id2, "id");
                function1.invoke(Float.valueOf(f10));
            }

            @Override // jl.a
            public void onStarted(String id2) {
                Intrinsics.checkNotNullParameter(id2, "id");
                function1.invoke(Float.valueOf(0.0f));
            }
        }, a10);
        eVar.c(new Function1<Throwable, Unit>() { // from class: com.discord.media.utils.Transcoder$convertCompress$3$3
            @Override // kotlin.jvm.functions.Function1
            public /* bridge */ /* synthetic */ Object invoke(Object obj) {
                invoke((Throwable) obj);
                return Unit.f31988a;
            }

            public final void invoke(Throwable th2) {
                Transcoder.INSTANCE.cancel(str);
            }
        });
        Object B = eVar.B();
        if (B == ur.b.f()) {
            g.c(continuation);
        }
        return B;
    }
}
