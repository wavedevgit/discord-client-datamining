package com.discord.media.engine;

import kotlin.Metadata;
import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.functions.Function2;
import kotlinx.coroutines.CoroutineScope;
@Metadata(d1 = {"\u0000\n\n\u0000\n\u0002\u0010\u0002\n\u0002\u0018\u0002\u0010\u0000\u001a\u00020\u0001*\u00020\u0002H\n"}, d2 = {"<anonymous>", "", "Lkotlinx/coroutines/CoroutineScope;"}, k = 3, mv = {2, 1, 0}, xi = 48)
@kotlin.coroutines.jvm.internal.e(c = "com.discord.media.engine.MediaEngineModule$setBroadcastThumbnailParams$1", f = "MediaEngineModule.kt", l = {218}, m = "invokeSuspend")
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class MediaEngineModule$setBroadcastThumbnailParams$1 extends kotlin.coroutines.jvm.internal.k implements Function2<CoroutineScope, Continuation<? super Unit>, Object> {
    final /* synthetic */ double $height;
    final /* synthetic */ double $intervalSeconds;
    final /* synthetic */ double $width;
    private /* synthetic */ Object L$0;
    int label;
    final /* synthetic */ MediaEngineModule this$0;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public MediaEngineModule$setBroadcastThumbnailParams$1(MediaEngineModule mediaEngineModule, double d10, double d11, double d12, Continuation<? super MediaEngineModule$setBroadcastThumbnailParams$1> continuation) {
        super(2, continuation);
        this.this$0 = mediaEngineModule;
        this.$width = d10;
        this.$height = d11;
        this.$intervalSeconds = d12;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit invokeSuspend$lambda$0(CoroutineScope coroutineScope, MediaEngineModule mediaEngineModule, String str) {
        ms.i.d(coroutineScope, ms.m0.c(), null, new MediaEngineModule$setBroadcastThumbnailParams$1$1$1(mediaEngineModule, str, null), 2, null);
        return Unit.f31988a;
    }

    @Override // kotlin.coroutines.jvm.internal.a
    public final Continuation<Unit> create(Object obj, Continuation<?> continuation) {
        MediaEngineModule$setBroadcastThumbnailParams$1 mediaEngineModule$setBroadcastThumbnailParams$1 = new MediaEngineModule$setBroadcastThumbnailParams$1(this.this$0, this.$width, this.$height, this.$intervalSeconds, continuation);
        mediaEngineModule$setBroadcastThumbnailParams$1.L$0 = obj;
        return mediaEngineModule$setBroadcastThumbnailParams$1;
    }

    @Override // kotlin.coroutines.jvm.internal.a
    public final Object invokeSuspend(Object obj) {
        Object awaitMediaEngine;
        final CoroutineScope coroutineScope;
        Object f10 = ur.b.f();
        int i10 = this.label;
        if (i10 != 0) {
            if (i10 == 1) {
                coroutineScope = (CoroutineScope) this.L$0;
                kotlin.c.b(obj);
            } else {
                throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
            }
        } else {
            kotlin.c.b(obj);
            CoroutineScope coroutineScope2 = (CoroutineScope) this.L$0;
            MediaEngineModule mediaEngineModule = this.this$0;
            this.L$0 = coroutineScope2;
            this.label = 1;
            awaitMediaEngine = mediaEngineModule.awaitMediaEngine(this);
            if (awaitMediaEngine == f10) {
                return f10;
            }
            coroutineScope = coroutineScope2;
        }
        final MediaEngineModule mediaEngineModule2 = this.this$0;
        this.this$0.getMediaEngine().setBroadcastThumbnailParams$media_engine_release((int) this.$width, (int) this.$height, (int) this.$intervalSeconds, new Function1() { // from class: com.discord.media.engine.h1
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj2) {
                Unit invokeSuspend$lambda$0;
                invokeSuspend$lambda$0 = MediaEngineModule$setBroadcastThumbnailParams$1.invokeSuspend$lambda$0(CoroutineScope.this, mediaEngineModule2, (String) obj2);
                return invokeSuspend$lambda$0;
            }
        });
        return Unit.f31988a;
    }

    @Override // kotlin.jvm.functions.Function2
    public final Object invoke(CoroutineScope coroutineScope, Continuation<? super Unit> continuation) {
        return ((MediaEngineModule$setBroadcastThumbnailParams$1) create(coroutineScope, continuation)).invokeSuspend(Unit.f31988a);
    }
}
