package com.discord.media_player;

import com.discord.media_player.reactevents.MediaPlayerPlaybackRateChanged;
import com.discord.media_player.reactevents.MediaPlayerPlaybackSource;
import com.discord.reactevents.ReactEvents;
import com.facebook.react.bridge.ReactApplicationContext;
import kotlin.Metadata;
import kotlin.Pair;
import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.coroutines.jvm.internal.k;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlinx.coroutines.CoroutineScope;
import kotlinx.coroutines.flow.MutableStateFlow;
@Metadata(d1 = {"\u0000\n\n\u0000\n\u0002\u0010\u0002\n\u0002\u0018\u0002\u0010\u0000\u001a\u00020\u0001*\u00020\u0002H\n"}, d2 = {"<anonymous>", "", "Lkotlinx/coroutines/CoroutineScope;"}, k = 3, mv = {2, 1, 0}, xi = 48)
@kotlin.coroutines.jvm.internal.e(c = "com.discord.media_player.MediaPlayerManagerModule$subscribeToPlaybackEvents$2", f = "MediaPlayerManagerModule.kt", l = {179}, m = "invokeSuspend")
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class MediaPlayerManagerModule$subscribeToPlaybackEvents$2 extends k implements Function2<CoroutineScope, Continuation<? super Unit>, Object> {
    int label;
    final /* synthetic */ MediaPlayerManagerModule this$0;

    /* JADX INFO: Access modifiers changed from: package-private */
    @Metadata(d1 = {"\u0000\u0014\n\u0000\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0010\u0006\u0010\u0000\u001a\u00020\u00012\u0014\u0010\u0002\u001a\u0010\u0012\u0006\u0012\u0004\u0018\u00010\u0004\u0012\u0004\u0012\u00020\u00050\u0003H\n"}, d2 = {"<anonymous>", "", "<destruct>", "Lkotlin/Pair;", "Lcom/discord/media_player/MediaSource;", ""}, k = 3, mv = {2, 1, 0}, xi = 48)
    @kotlin.coroutines.jvm.internal.e(c = "com.discord.media_player.MediaPlayerManagerModule$subscribeToPlaybackEvents$2$1", f = "MediaPlayerManagerModule.kt", l = {}, m = "invokeSuspend")
    @SourceDebugExtension({"SMAP\nMediaPlayerManagerModule.kt\nKotlin\n*S Kotlin\n*F\n+ 1 MediaPlayerManagerModule.kt\ncom/discord/media_player/MediaPlayerManagerModule$subscribeToPlaybackEvents$2$1\n+ 2 fake.kt\nkotlin/jvm/internal/FakeKt\n*L\n1#1,342:1\n1#2:343\n*E\n"})
    /* renamed from: com.discord.media_player.MediaPlayerManagerModule$subscribeToPlaybackEvents$2$1  reason: invalid class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class AnonymousClass1 extends k implements Function2<Pair<? extends MediaSource, ? extends Double>, Continuation<? super Unit>, Object> {
        /* synthetic */ Object L$0;
        int label;
        final /* synthetic */ MediaPlayerManagerModule this$0;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        AnonymousClass1(MediaPlayerManagerModule mediaPlayerManagerModule, Continuation<? super AnonymousClass1> continuation) {
            super(2, continuation);
            this.this$0 = mediaPlayerManagerModule;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation<Unit> create(Object obj, Continuation<?> continuation) {
            AnonymousClass1 anonymousClass1 = new AnonymousClass1(this.this$0, continuation);
            anonymousClass1.L$0 = obj;
            return anonymousClass1;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            ReactEvents reactEvents;
            ReactApplicationContext reactApplicationContext;
            MediaPlayerPlaybackSource mediaPlayerPlaybackSource;
            or.b.f();
            if (this.label == 0) {
                kotlin.c.b(obj);
                Pair pair = (Pair) this.L$0;
                MediaSource mediaSource = (MediaSource) pair.a();
                double doubleValue = ((Number) pair.b()).doubleValue();
                reactEvents = this.this$0.reactEvents;
                reactApplicationContext = this.this$0.reactContext;
                if (mediaSource != null) {
                    mediaPlayerPlaybackSource = MediaPlayerPlaybackSource.Companion.fromMediaSource(mediaSource);
                } else {
                    mediaPlayerPlaybackSource = null;
                }
                reactEvents.emitModuleEvent(reactApplicationContext, new MediaPlayerPlaybackRateChanged(mediaPlayerPlaybackSource, doubleValue));
                return Unit.f33298a;
            }
            throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(Pair<MediaSource, Double> pair, Continuation<? super Unit> continuation) {
            return ((AnonymousClass1) create(pair, continuation)).invokeSuspend(Unit.f33298a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public MediaPlayerManagerModule$subscribeToPlaybackEvents$2(MediaPlayerManagerModule mediaPlayerManagerModule, Continuation<? super MediaPlayerManagerModule$subscribeToPlaybackEvents$2> continuation) {
        super(2, continuation);
        this.this$0 = mediaPlayerManagerModule;
    }

    @Override // kotlin.coroutines.jvm.internal.a
    public final Continuation<Unit> create(Object obj, Continuation<?> continuation) {
        return new MediaPlayerManagerModule$subscribeToPlaybackEvents$2(this.this$0, continuation);
    }

    @Override // kotlin.coroutines.jvm.internal.a
    public final Object invokeSuspend(Object obj) {
        Object f10 = or.b.f();
        int i10 = this.label;
        if (i10 != 0) {
            if (i10 == 1) {
                kotlin.c.b(obj);
            } else {
                throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
            }
        } else {
            kotlin.c.b(obj);
            MutableStateFlow playbackRateFlow$media_player_release = MediaPlayerManager.INSTANCE.getPlaybackRateFlow$media_player_release();
            AnonymousClass1 anonymousClass1 = new AnonymousClass1(this.this$0, null);
            this.label = 1;
            if (js.g.i(playbackRateFlow$media_player_release, anonymousClass1, this) == f10) {
                return f10;
            }
        }
        return Unit.f33298a;
    }

    @Override // kotlin.jvm.functions.Function2
    public final Object invoke(CoroutineScope coroutineScope, Continuation<? super Unit> continuation) {
        return ((MediaPlayerManagerModule$subscribeToPlaybackEvents$2) create(coroutineScope, continuation)).invokeSuspend(Unit.f33298a);
    }
}
