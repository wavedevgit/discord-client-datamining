package com.discord.media.engine;

import com.discord.media.engine.video.events.UserSpeakingEvent;
import com.discord.reactevents.ReactEvents;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.functions.Function3;
import kotlinx.coroutines.CoroutineScope;
@Metadata(d1 = {"\u0000\n\n\u0000\n\u0002\u0010\u0002\n\u0002\u0018\u0002\u0010\u0000\u001a\u00020\u0001*\u00020\u0002H\n"}, d2 = {"<anonymous>", "", "Lkotlinx/coroutines/CoroutineScope;"}, k = 3, mv = {2, 1, 0}, xi = 48)
@kotlin.coroutines.jvm.internal.e(c = "com.discord.media.engine.MediaEngineModule$connectionInstanceTriggerOnSpeakingCallback$1", f = "MediaEngineModule.kt", l = {798}, m = "invokeSuspend")
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class MediaEngineModule$connectionInstanceTriggerOnSpeakingCallback$1 extends kotlin.coroutines.jvm.internal.k implements Function2<CoroutineScope, Continuation<? super Unit>, Object> {
    final /* synthetic */ double $connectionId;
    int label;
    final /* synthetic */ MediaEngineModule this$0;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public MediaEngineModule$connectionInstanceTriggerOnSpeakingCallback$1(MediaEngineModule mediaEngineModule, double d10, Continuation<? super MediaEngineModule$connectionInstanceTriggerOnSpeakingCallback$1> continuation) {
        super(2, continuation);
        this.this$0 = mediaEngineModule;
        this.$connectionId = d10;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit invokeSuspend$lambda$0(MediaEngineModule mediaEngineModule, double d10, String str, int i10, float f10) {
        ReactEvents reactEvents;
        reactEvents = mediaEngineModule.reactEvents;
        reactEvents.emitModuleEvent(mediaEngineModule.getReactContext(), new UserSpeakingEvent((int) d10, str, i10, f10));
        return Unit.f32008a;
    }

    @Override // kotlin.coroutines.jvm.internal.a
    public final Continuation<Unit> create(Object obj, Continuation<?> continuation) {
        return new MediaEngineModule$connectionInstanceTriggerOnSpeakingCallback$1(this.this$0, this.$connectionId, continuation);
    }

    @Override // kotlin.coroutines.jvm.internal.a
    public final Object invokeSuspend(Object obj) {
        Object awaitMediaEngine;
        Object f10 = wr.b.f();
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
        final double d10 = this.$connectionId;
        final MediaEngineModule mediaEngineModule2 = this.this$0;
        mediaEngine.connectionInstanceSetOnSpeakingCallback$media_engine_release((int) d10, new Function3() { // from class: com.discord.media.engine.r0
            @Override // kotlin.jvm.functions.Function3
            public final Object invoke(Object obj2, Object obj3, Object obj4) {
                Unit invokeSuspend$lambda$0;
                invokeSuspend$lambda$0 = MediaEngineModule$connectionInstanceTriggerOnSpeakingCallback$1.invokeSuspend$lambda$0(MediaEngineModule.this, d10, (String) obj2, ((Integer) obj3).intValue(), ((Float) obj4).floatValue());
                return invokeSuspend$lambda$0;
            }
        });
        return Unit.f32008a;
    }

    @Override // kotlin.jvm.functions.Function2
    public final Object invoke(CoroutineScope coroutineScope, Continuation<? super Unit> continuation) {
        return ((MediaEngineModule$connectionInstanceTriggerOnSpeakingCallback$1) create(coroutineScope, continuation)).invokeSuspend(Unit.f32008a);
    }
}
