package com.discord.media.engine;

import com.discord.media.engine.video.events.OnBroadcastThumbnailEvent;
import com.discord.reactevents.ReactEvents;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.jvm.functions.Function2;
import kotlinx.coroutines.CoroutineScope;
/* JADX INFO: Access modifiers changed from: package-private */
@Metadata(d1 = {"\u0000\n\n\u0000\n\u0002\u0010\u0002\n\u0002\u0018\u0002\u0010\u0000\u001a\u00020\u0001*\u00020\u0002H\n"}, d2 = {"<anonymous>", "", "Lkotlinx/coroutines/CoroutineScope;"}, k = 3, mv = {2, 1, 0}, xi = 48)
@kotlin.coroutines.jvm.internal.e(c = "com.discord.media.engine.MediaEngineModule$setBroadcastThumbnailParams$1$1$1", f = "MediaEngineModule.kt", l = {}, m = "invokeSuspend")
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class MediaEngineModule$setBroadcastThumbnailParams$1$1$1 extends kotlin.coroutines.jvm.internal.k implements Function2<CoroutineScope, Continuation<? super Unit>, Object> {
    final /* synthetic */ String $imgdata;
    int label;
    final /* synthetic */ MediaEngineModule this$0;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public MediaEngineModule$setBroadcastThumbnailParams$1$1$1(MediaEngineModule mediaEngineModule, String str, Continuation<? super MediaEngineModule$setBroadcastThumbnailParams$1$1$1> continuation) {
        super(2, continuation);
        this.this$0 = mediaEngineModule;
        this.$imgdata = str;
    }

    @Override // kotlin.coroutines.jvm.internal.a
    public final Continuation<Unit> create(Object obj, Continuation<?> continuation) {
        return new MediaEngineModule$setBroadcastThumbnailParams$1$1$1(this.this$0, this.$imgdata, continuation);
    }

    @Override // kotlin.coroutines.jvm.internal.a
    public final Object invokeSuspend(Object obj) {
        ReactEvents reactEvents;
        wr.b.f();
        if (this.label == 0) {
            kotlin.c.b(obj);
            reactEvents = this.this$0.reactEvents;
            reactEvents.emitModuleEvent(this.this$0.getReactContext(), new OnBroadcastThumbnailEvent(this.$imgdata));
            return Unit.f32056a;
        }
        throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
    }

    @Override // kotlin.jvm.functions.Function2
    public final Object invoke(CoroutineScope coroutineScope, Continuation<? super Unit> continuation) {
        return ((MediaEngineModule$setBroadcastThumbnailParams$1$1$1) create(coroutineScope, continuation)).invokeSuspend(Unit.f32056a);
    }
}
