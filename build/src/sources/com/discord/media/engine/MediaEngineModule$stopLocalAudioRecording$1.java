package com.discord.media.engine;

import android.net.Uri;
import com.facebook.react.bridge.Callback;
import java.io.File;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlinx.coroutines.CoroutineScope;
@Metadata(d1 = {"\u0000\n\n\u0000\n\u0002\u0010\u0002\n\u0002\u0018\u0002\u0010\u0000\u001a\u00020\u0001*\u00020\u0002H\n"}, d2 = {"<anonymous>", "", "Lkotlinx/coroutines/CoroutineScope;"}, k = 3, mv = {2, 1, 0}, xi = 48)
@kotlin.coroutines.jvm.internal.e(c = "com.discord.media.engine.MediaEngineModule$stopLocalAudioRecording$1", f = "MediaEngineModule.kt", l = {394}, m = "invokeSuspend")
@SourceDebugExtension({"SMAP\nMediaEngineModule.kt\nKotlin\n*S Kotlin\n*F\n+ 1 MediaEngineModule.kt\ncom/discord/media/engine/MediaEngineModule$stopLocalAudioRecording$1\n+ 2 Uri.kt\nandroidx/core/net/UriKt\n*L\n1#1,877:1\n36#2:878\n*S KotlinDebug\n*F\n+ 1 MediaEngineModule.kt\ncom/discord/media/engine/MediaEngineModule$stopLocalAudioRecording$1\n*L\n396#1:878\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class MediaEngineModule$stopLocalAudioRecording$1 extends kotlin.coroutines.jvm.internal.k implements Function2<CoroutineScope, Continuation<? super Unit>, Object> {
    final /* synthetic */ Callback $callback;
    int label;
    final /* synthetic */ MediaEngineModule this$0;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public MediaEngineModule$stopLocalAudioRecording$1(MediaEngineModule mediaEngineModule, Callback callback, Continuation<? super MediaEngineModule$stopLocalAudioRecording$1> continuation) {
        super(2, continuation);
        this.this$0 = mediaEngineModule;
        this.$callback = callback;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit invokeSuspend$lambda$0(Callback callback, String str, int i10) {
        callback.invoke(Uri.fromFile(new File(str)).toString(), Integer.valueOf(i10));
        return Unit.f33074a;
    }

    @Override // kotlin.coroutines.jvm.internal.a
    public final Continuation<Unit> create(Object obj, Continuation<?> continuation) {
        return new MediaEngineModule$stopLocalAudioRecording$1(this.this$0, this.$callback, continuation);
    }

    @Override // kotlin.coroutines.jvm.internal.a
    public final Object invokeSuspend(Object obj) {
        Object awaitMediaEngine;
        Object f10 = pr.b.f();
        int i10 = this.label;
        if (i10 != 0) {
            if (i10 == 1) {
                kotlin.c.b(obj);
            } else {
                throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
            }
        } else {
            kotlin.c.b(obj);
            MediaEngineModule mediaEngineModule = this.this$0;
            this.label = 1;
            awaitMediaEngine = mediaEngineModule.awaitMediaEngine(this);
            if (awaitMediaEngine == f10) {
                return f10;
            }
        }
        MediaEngine mediaEngine = this.this$0.getMediaEngine();
        final Callback callback = this.$callback;
        mediaEngine.stopLocalAudioRecording$media_engine_release(new Function2() { // from class: com.discord.media.engine.j1
            @Override // kotlin.jvm.functions.Function2
            public final Object invoke(Object obj2, Object obj3) {
                Unit invokeSuspend$lambda$0;
                invokeSuspend$lambda$0 = MediaEngineModule$stopLocalAudioRecording$1.invokeSuspend$lambda$0(Callback.this, (String) obj2, ((Integer) obj3).intValue());
                return invokeSuspend$lambda$0;
            }
        });
        return Unit.f33074a;
    }

    @Override // kotlin.jvm.functions.Function2
    public final Object invoke(CoroutineScope coroutineScope, Continuation<? super Unit> continuation) {
        return ((MediaEngineModule$stopLocalAudioRecording$1) create(coroutineScope, continuation)).invokeSuspend(Unit.f33074a);
    }
}
