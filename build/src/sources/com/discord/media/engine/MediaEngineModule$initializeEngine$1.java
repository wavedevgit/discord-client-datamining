package com.discord.media.engine;

import com.discord.media.engine.video.events.ActiveSinksChangeEvent;
import com.discord.media.engine.video.events.AudioInputInitializedEvent;
import com.discord.media.engine.video.events.DeviceChangedEvent;
import com.discord.media.engine.video.events.NoInputCallbackEvent;
import com.discord.media.engine.video.events.OnVoiceEvent;
import com.discord.reactevents.ReactEvents;
import com.facebook.react.bridge.ActivityEventListener;
import com.facebook.react.bridge.ReactApplicationContext;
import java.util.List;
import java.util.Map;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.functions.Function3;
import kotlinx.coroutines.CoroutineScope;
@Metadata(d1 = {"\u0000\n\n\u0000\n\u0002\u0010\u0002\n\u0002\u0018\u0002\u0010\u0000\u001a\u00020\u0001*\u00020\u0002H\n"}, d2 = {"<anonymous>", "", "Lkotlinx/coroutines/CoroutineScope;"}, k = 3, mv = {2, 1, 0}, xi = 48)
@kotlin.coroutines.jvm.internal.e(c = "com.discord.media.engine.MediaEngineModule$initializeEngine$1", f = "MediaEngineModule.kt", l = {112}, m = "invokeSuspend")
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class MediaEngineModule$initializeEngine$1 extends kotlin.coroutines.jvm.internal.k implements Function2<CoroutineScope, Continuation<? super Unit>, Object> {
    int label;
    final /* synthetic */ MediaEngineModule this$0;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public MediaEngineModule$initializeEngine$1(MediaEngineModule mediaEngineModule, Continuation<? super MediaEngineModule$initializeEngine$1> continuation) {
        super(2, continuation);
        this.this$0 = mediaEngineModule;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit invokeSuspend$lambda$0(MediaEngineModule mediaEngineModule, boolean z10) {
        ReactEvents reactEvents;
        reactEvents = mediaEngineModule.reactEvents;
        reactEvents.emitModuleEvent(mediaEngineModule.getReactContext(), new NoInputCallbackEvent(z10));
        return Unit.f33074a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit invokeSuspend$lambda$1(MediaEngineModule mediaEngineModule, float f10, int i10) {
        ReactEvents reactEvents;
        reactEvents = mediaEngineModule.reactEvents;
        reactEvents.emitModuleEvent(mediaEngineModule.getReactContext(), new OnVoiceEvent(f10, i10));
        return Unit.f33074a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit invokeSuspend$lambda$2(MediaEngineModule mediaEngineModule, String str, boolean z10) {
        ReactEvents reactEvents;
        reactEvents = mediaEngineModule.reactEvents;
        reactEvents.emitModuleEvent(mediaEngineModule.getReactContext(), new ActiveSinksChangeEvent(str, z10));
        return Unit.f33074a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit invokeSuspend$lambda$3(MediaEngineModule mediaEngineModule, List list, List list2, List list3) {
        ReactEvents reactEvents;
        reactEvents = mediaEngineModule.reactEvents;
        reactEvents.emitModuleEvent(mediaEngineModule.getReactContext(), new DeviceChangedEvent(list, list2, list3));
        return Unit.f33074a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit invokeSuspend$lambda$4(MediaEngineModule mediaEngineModule, double d10, Map map) {
        ReactEvents reactEvents;
        reactEvents = mediaEngineModule.reactEvents;
        reactEvents.emitModuleEvent(mediaEngineModule.getReactContext(), new AudioInputInitializedEvent(d10, map));
        return Unit.f33074a;
    }

    @Override // kotlin.coroutines.jvm.internal.a
    public final Continuation<Unit> create(Object obj, Continuation<?> continuation) {
        return new MediaEngineModule$initializeEngine$1(this.this$0, continuation);
    }

    @Override // kotlin.coroutines.jvm.internal.a
    public final Object invokeSuspend(Object obj) {
        Object awaitMediaEngine;
        ActivityEventListener activityEventListener;
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
        final MediaEngineModule mediaEngineModule2 = this.this$0;
        mediaEngine.setOnNoInputCallback$media_engine_release(new Function1() { // from class: com.discord.media.engine.b1
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj2) {
                Unit invokeSuspend$lambda$0;
                invokeSuspend$lambda$0 = MediaEngineModule$initializeEngine$1.invokeSuspend$lambda$0(MediaEngineModule.this, ((Boolean) obj2).booleanValue());
                return invokeSuspend$lambda$0;
            }
        });
        MediaEngine mediaEngine2 = this.this$0.getMediaEngine();
        final MediaEngineModule mediaEngineModule3 = this.this$0;
        mediaEngine2.setOnVoiceCallback$media_engine_release(new Function2() { // from class: com.discord.media.engine.c1
            @Override // kotlin.jvm.functions.Function2
            public final Object invoke(Object obj2, Object obj3) {
                Unit invokeSuspend$lambda$1;
                invokeSuspend$lambda$1 = MediaEngineModule$initializeEngine$1.invokeSuspend$lambda$1(MediaEngineModule.this, ((Float) obj2).floatValue(), ((Integer) obj3).intValue());
                return invokeSuspend$lambda$1;
            }
        });
        MediaEngine mediaEngine3 = this.this$0.getMediaEngine();
        final MediaEngineModule mediaEngineModule4 = this.this$0;
        mediaEngine3.setActiveSinksChangeCallback$media_engine_release(new Function2() { // from class: com.discord.media.engine.d1
            @Override // kotlin.jvm.functions.Function2
            public final Object invoke(Object obj2, Object obj3) {
                Unit invokeSuspend$lambda$2;
                invokeSuspend$lambda$2 = MediaEngineModule$initializeEngine$1.invokeSuspend$lambda$2(MediaEngineModule.this, (String) obj2, ((Boolean) obj3).booleanValue());
                return invokeSuspend$lambda$2;
            }
        });
        MediaEngine mediaEngine4 = this.this$0.getMediaEngine();
        final MediaEngineModule mediaEngineModule5 = this.this$0;
        mediaEngine4.setDeviceChangeCallback$media_engine_release(new Function3() { // from class: com.discord.media.engine.e1
            @Override // kotlin.jvm.functions.Function3
            public final Object invoke(Object obj2, Object obj3, Object obj4) {
                Unit invokeSuspend$lambda$3;
                invokeSuspend$lambda$3 = MediaEngineModule$initializeEngine$1.invokeSuspend$lambda$3(MediaEngineModule.this, (List) obj2, (List) obj3, (List) obj4);
                return invokeSuspend$lambda$3;
            }
        });
        MediaEngine mediaEngine5 = this.this$0.getMediaEngine();
        final MediaEngineModule mediaEngineModule6 = this.this$0;
        mediaEngine5.setAudioInputInitializationCallback$media_engine_release(new Function2() { // from class: com.discord.media.engine.f1
            @Override // kotlin.jvm.functions.Function2
            public final Object invoke(Object obj2, Object obj3) {
                Unit invokeSuspend$lambda$4;
                invokeSuspend$lambda$4 = MediaEngineModule$initializeEngine$1.invokeSuspend$lambda$4(MediaEngineModule.this, ((Double) obj2).doubleValue(), (Map) obj3);
                return invokeSuspend$lambda$4;
            }
        });
        ReactApplicationContext reactContext = this.this$0.getReactContext();
        activityEventListener = this.this$0.activityEventListener;
        reactContext.addActivityEventListener(activityEventListener);
        return Unit.f33074a;
    }

    @Override // kotlin.jvm.functions.Function2
    public final Object invoke(CoroutineScope coroutineScope, Continuation<? super Unit> continuation) {
        return ((MediaEngineModule$initializeEngine$1) create(coroutineScope, continuation)).invokeSuspend(Unit.f33074a);
    }
}
