package com.discord.media.engine;

import com.discord.crash_reporting.CrashReporting;
import com.discord.media.engine.video.events.FirstFrameCallbackEvent;
import com.discord.media.engine.video.events.MlsFailureCallbackEvent;
import com.discord.media.engine.video.events.PingCallbackEvent;
import com.discord.media.engine.video.events.PingTimeoutCallbackEvent;
import com.discord.media.engine.video.events.SecureFramesStateUpdateCallbackEvent;
import com.discord.media.engine.video.events.UserSpeakingEvent;
import com.discord.reactevents.ReactEvents;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.functions.Function3;
import kotlin.jvm.functions.Function4;
import kotlinx.coroutines.CoroutineScope;
/* JADX INFO: Access modifiers changed from: package-private */
@Metadata(d1 = {"\u0000\n\n\u0000\n\u0002\u0010\u0002\n\u0002\u0018\u0002\u0010\u0000\u001a\u00020\u0001*\u00020\u0002H\n"}, d2 = {"<anonymous>", "", "Lkotlinx/coroutines/CoroutineScope;"}, k = 3, mv = {2, 1, 0}, xi = 48)
@kotlin.coroutines.jvm.internal.e(c = "com.discord.media.engine.MediaEngineModule$addConnectionCallbacks$1", f = "MediaEngineModule.kt", l = {411}, m = "invokeSuspend")
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class MediaEngineModule$addConnectionCallbacks$1 extends kotlin.coroutines.jvm.internal.k implements Function2<CoroutineScope, Continuation<? super Unit>, Object> {
    final /* synthetic */ int $connectionId;
    int label;
    final /* synthetic */ MediaEngineModule this$0;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public MediaEngineModule$addConnectionCallbacks$1(MediaEngineModule mediaEngineModule, int i10, Continuation<? super MediaEngineModule$addConnectionCallbacks$1> continuation) {
        super(2, continuation);
        this.this$0 = mediaEngineModule;
        this.$connectionId = i10;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit invokeSuspend$lambda$0(MediaEngineModule mediaEngineModule, int i10, String str, int i11, float f10) {
        ReactEvents reactEvents;
        reactEvents = mediaEngineModule.reactEvents;
        reactEvents.emitModuleEvent(mediaEngineModule.getReactContext(), new UserSpeakingEvent(i10, str, i11, f10));
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit invokeSuspend$lambda$1(MediaEngineModule mediaEngineModule, int i10, int i11, String str, int i12, int i13) {
        ReactEvents reactEvents;
        try {
            reactEvents = mediaEngineModule.reactEvents;
            reactEvents.emitModuleEvent(mediaEngineModule.getReactContext(), new PingCallbackEvent(i10, i11, str, i12, i13));
            return Unit.f32008a;
        } catch (Exception e10) {
            CrashReporting crashReporting = CrashReporting.INSTANCE;
            String message = e10.getMessage();
            CrashReporting.addBreadcrumb$default(crashReporting, "setOnPingCallback failed with: " + message, kotlin.collections.o0.f(qr.v.a("stackTrace", qr.e.b(e10))), "MediaEngineModule", null, false, 24, null);
            throw e10;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit invokeSuspend$lambda$2(MediaEngineModule mediaEngineModule, int i10, String str, int i11, int i12, int i13) {
        ReactEvents reactEvents;
        reactEvents = mediaEngineModule.reactEvents;
        reactEvents.emitModuleEvent(mediaEngineModule.getReactContext(), new PingTimeoutCallbackEvent(i10, str, i11, i12, i13));
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit invokeSuspend$lambda$3(MediaEngineModule mediaEngineModule, int i10, String str, long j10, String str2) {
        ReactEvents reactEvents;
        reactEvents = mediaEngineModule.reactEvents;
        reactEvents.emitModuleEvent(mediaEngineModule.getReactContext(), new FirstFrameCallbackEvent(i10, str, j10, str2));
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit invokeSuspend$lambda$4(MediaEngineModule mediaEngineModule, int i10, String str, String str2) {
        ReactEvents reactEvents;
        reactEvents = mediaEngineModule.reactEvents;
        reactEvents.emitModuleEvent(mediaEngineModule.getReactContext(), new MlsFailureCallbackEvent(i10, str, str2));
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit invokeSuspend$lambda$5(MediaEngineModule mediaEngineModule, int i10, String str) {
        ReactEvents reactEvents;
        reactEvents = mediaEngineModule.reactEvents;
        reactEvents.emitModuleEvent(mediaEngineModule.getReactContext(), new SecureFramesStateUpdateCallbackEvent(i10, str));
        return Unit.f32008a;
    }

    @Override // kotlin.coroutines.jvm.internal.a
    public final Continuation<Unit> create(Object obj, Continuation<?> continuation) {
        return new MediaEngineModule$addConnectionCallbacks$1(this.this$0, this.$connectionId, continuation);
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
        final int i11 = this.$connectionId;
        final MediaEngineModule mediaEngineModule2 = this.this$0;
        mediaEngine.connectionInstanceSetOnSpeakingCallback$media_engine_release(i11, new Function3() { // from class: com.discord.media.engine.c0
            @Override // kotlin.jvm.functions.Function3
            public final Object invoke(Object obj2, Object obj3, Object obj4) {
                Unit invokeSuspend$lambda$0;
                invokeSuspend$lambda$0 = MediaEngineModule$addConnectionCallbacks$1.invokeSuspend$lambda$0(MediaEngineModule.this, i11, (String) obj2, ((Integer) obj3).intValue(), ((Float) obj4).floatValue());
                return invokeSuspend$lambda$0;
            }
        });
        MediaEngine mediaEngine2 = this.this$0.getMediaEngine();
        final int i12 = this.$connectionId;
        final MediaEngineModule mediaEngineModule3 = this.this$0;
        mediaEngine2.connectionInstanceSetOnPingCallback$media_engine_release(i12, new Function4() { // from class: com.discord.media.engine.d0
            @Override // kotlin.jvm.functions.Function4
            public final Object invoke(Object obj2, Object obj3, Object obj4, Object obj5) {
                Unit invokeSuspend$lambda$1;
                invokeSuspend$lambda$1 = MediaEngineModule$addConnectionCallbacks$1.invokeSuspend$lambda$1(MediaEngineModule.this, i12, ((Integer) obj2).intValue(), (String) obj3, ((Integer) obj4).intValue(), ((Integer) obj5).intValue());
                return invokeSuspend$lambda$1;
            }
        });
        MediaEngine mediaEngine3 = this.this$0.getMediaEngine();
        final int i13 = this.$connectionId;
        final MediaEngineModule mediaEngineModule4 = this.this$0;
        mediaEngine3.connectionInstanceSetOnPingTimeoutCallback$media_engine_release(i13, new Function4() { // from class: com.discord.media.engine.e0
            @Override // kotlin.jvm.functions.Function4
            public final Object invoke(Object obj2, Object obj3, Object obj4, Object obj5) {
                Unit invokeSuspend$lambda$2;
                invokeSuspend$lambda$2 = MediaEngineModule$addConnectionCallbacks$1.invokeSuspend$lambda$2(MediaEngineModule.this, i13, (String) obj2, ((Integer) obj3).intValue(), ((Integer) obj4).intValue(), ((Integer) obj5).intValue());
                return invokeSuspend$lambda$2;
            }
        });
        MediaEngine mediaEngine4 = this.this$0.getMediaEngine();
        final int i14 = this.$connectionId;
        final MediaEngineModule mediaEngineModule5 = this.this$0;
        mediaEngine4.connectionInstanceSetOnFirstFrameCallback$media_engine_release(i14, new Function3() { // from class: com.discord.media.engine.f0
            @Override // kotlin.jvm.functions.Function3
            public final Object invoke(Object obj2, Object obj3, Object obj4) {
                Unit invokeSuspend$lambda$3;
                invokeSuspend$lambda$3 = MediaEngineModule$addConnectionCallbacks$1.invokeSuspend$lambda$3(MediaEngineModule.this, i14, (String) obj2, ((Long) obj3).longValue(), (String) obj4);
                return invokeSuspend$lambda$3;
            }
        });
        MediaEngine mediaEngine5 = this.this$0.getMediaEngine();
        final int i15 = this.$connectionId;
        final MediaEngineModule mediaEngineModule6 = this.this$0;
        mediaEngine5.connectionInstanceSetOnMLSFailureCallback$media_engine_release(i15, new Function2() { // from class: com.discord.media.engine.g0
            @Override // kotlin.jvm.functions.Function2
            public final Object invoke(Object obj2, Object obj3) {
                Unit invokeSuspend$lambda$4;
                invokeSuspend$lambda$4 = MediaEngineModule$addConnectionCallbacks$1.invokeSuspend$lambda$4(MediaEngineModule.this, i15, (String) obj2, (String) obj3);
                return invokeSuspend$lambda$4;
            }
        });
        MediaEngine mediaEngine6 = this.this$0.getMediaEngine();
        final int i16 = this.$connectionId;
        final MediaEngineModule mediaEngineModule7 = this.this$0;
        mediaEngine6.connectionInstanceSetSecureFramesStateUpdateCallback$media_engine_release(i16, new Function1() { // from class: com.discord.media.engine.h0
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj2) {
                Unit invokeSuspend$lambda$5;
                invokeSuspend$lambda$5 = MediaEngineModule$addConnectionCallbacks$1.invokeSuspend$lambda$5(MediaEngineModule.this, i16, (String) obj2);
                return invokeSuspend$lambda$5;
            }
        });
        return Unit.f32008a;
    }

    @Override // kotlin.jvm.functions.Function2
    public final Object invoke(CoroutineScope coroutineScope, Continuation<? super Unit> continuation) {
        return ((MediaEngineModule$addConnectionCallbacks$1) create(coroutineScope, continuation)).invokeSuspend(Unit.f32008a);
    }
}
