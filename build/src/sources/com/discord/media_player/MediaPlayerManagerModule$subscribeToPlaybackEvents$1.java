package com.discord.media_player;

import com.discord.media_player.reactevents.MediaPlayerPlaybackSource;
import com.discord.media_player.reactevents.MediaPlayerPlaybackSourceChanged;
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
import kotlinx.coroutines.flow.Flow;
@Metadata(d1 = {"\u0000\n\n\u0000\n\u0002\u0010\u0002\n\u0002\u0018\u0002\u0010\u0000\u001a\u00020\u0001*\u00020\u0002H\n"}, d2 = {"<anonymous>", "", "Lkotlinx/coroutines/CoroutineScope;"}, k = 3, mv = {2, 1, 0}, xi = 48)
@kotlin.coroutines.jvm.internal.e(c = "com.discord.media_player.MediaPlayerManagerModule$subscribeToPlaybackEvents$1", f = "MediaPlayerManagerModule.kt", l = {167}, m = "invokeSuspend")
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class MediaPlayerManagerModule$subscribeToPlaybackEvents$1 extends k implements Function2<CoroutineScope, Continuation<? super Unit>, Object> {
    int label;
    final /* synthetic */ MediaPlayerManagerModule this$0;

    /* JADX INFO: Access modifiers changed from: package-private */
    @Metadata(d1 = {"\u0000\u0010\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\u0010\u0006\u0010\u0000\u001a\u0004\u0018\u00010\u00012\u0014\u0010\u0002\u001a\u0010\u0012\u0006\u0012\u0004\u0018\u00010\u0001\u0012\u0004\u0012\u00020\u00040\u0003H\n"}, d2 = {"<anonymous>", "Lcom/discord/media_player/MediaSource;", "<destruct>", "Lkotlin/Pair;", ""}, k = 3, mv = {2, 1, 0}, xi = 48)
    @kotlin.coroutines.jvm.internal.e(c = "com.discord.media_player.MediaPlayerManagerModule$subscribeToPlaybackEvents$1$1", f = "MediaPlayerManagerModule.kt", l = {}, m = "invokeSuspend")
    /* renamed from: com.discord.media_player.MediaPlayerManagerModule$subscribeToPlaybackEvents$1$1  reason: invalid class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class AnonymousClass1 extends k implements Function2<Pair<? extends MediaSource, ? extends Double>, Continuation<? super MediaSource>, Object> {
        /* synthetic */ Object L$0;
        int label;

        AnonymousClass1(Continuation<? super AnonymousClass1> continuation) {
            super(2, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation<Unit> create(Object obj, Continuation<?> continuation) {
            AnonymousClass1 anonymousClass1 = new AnonymousClass1(continuation);
            anonymousClass1.L$0 = obj;
            return anonymousClass1;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            or.b.f();
            if (this.label == 0) {
                kotlin.c.b(obj);
                return (MediaSource) ((Pair) this.L$0).a();
            }
            throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(Pair<MediaSource, Double> pair, Continuation<? super MediaSource> continuation) {
            return ((AnonymousClass1) create(pair, continuation)).invokeSuspend(Unit.f33282a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Metadata(d1 = {"\u0000\f\n\u0000\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\u0010\u0000\u001a\u00020\u00012\b\u0010\u0002\u001a\u0004\u0018\u00010\u0003H\n"}, d2 = {"<anonymous>", "", "mediaSource", "Lcom/discord/media_player/MediaSource;"}, k = 3, mv = {2, 1, 0}, xi = 48)
    @kotlin.coroutines.jvm.internal.e(c = "com.discord.media_player.MediaPlayerManagerModule$subscribeToPlaybackEvents$1$2", f = "MediaPlayerManagerModule.kt", l = {}, m = "invokeSuspend")
    @SourceDebugExtension({"SMAP\nMediaPlayerManagerModule.kt\nKotlin\n*S Kotlin\n*F\n+ 1 MediaPlayerManagerModule.kt\ncom/discord/media_player/MediaPlayerManagerModule$subscribeToPlaybackEvents$1$2\n+ 2 fake.kt\nkotlin/jvm/internal/FakeKt\n*L\n1#1,342:1\n1#2:343\n*E\n"})
    /* renamed from: com.discord.media_player.MediaPlayerManagerModule$subscribeToPlaybackEvents$1$2  reason: invalid class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class AnonymousClass2 extends k implements Function2<MediaSource, Continuation<? super Unit>, Object> {
        /* synthetic */ Object L$0;
        int label;
        final /* synthetic */ MediaPlayerManagerModule this$0;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        AnonymousClass2(MediaPlayerManagerModule mediaPlayerManagerModule, Continuation<? super AnonymousClass2> continuation) {
            super(2, continuation);
            this.this$0 = mediaPlayerManagerModule;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation<Unit> create(Object obj, Continuation<?> continuation) {
            AnonymousClass2 anonymousClass2 = new AnonymousClass2(this.this$0, continuation);
            anonymousClass2.L$0 = obj;
            return anonymousClass2;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(MediaSource mediaSource, Continuation<? super Unit> continuation) {
            return ((AnonymousClass2) create(mediaSource, continuation)).invokeSuspend(Unit.f33282a);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            ReactEvents reactEvents;
            ReactApplicationContext reactApplicationContext;
            MediaPlayerPlaybackSource mediaPlayerPlaybackSource;
            or.b.f();
            if (this.label == 0) {
                kotlin.c.b(obj);
                MediaSource mediaSource = (MediaSource) this.L$0;
                reactEvents = this.this$0.reactEvents;
                reactApplicationContext = this.this$0.reactContext;
                if (mediaSource != null) {
                    mediaPlayerPlaybackSource = MediaPlayerPlaybackSource.Companion.fromMediaSource(mediaSource);
                } else {
                    mediaPlayerPlaybackSource = null;
                }
                reactEvents.emitModuleEvent(reactApplicationContext, new MediaPlayerPlaybackSourceChanged(mediaPlayerPlaybackSource));
                return Unit.f33282a;
            }
            throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public MediaPlayerManagerModule$subscribeToPlaybackEvents$1(MediaPlayerManagerModule mediaPlayerManagerModule, Continuation<? super MediaPlayerManagerModule$subscribeToPlaybackEvents$1> continuation) {
        super(2, continuation);
        this.this$0 = mediaPlayerManagerModule;
    }

    @Override // kotlin.coroutines.jvm.internal.a
    public final Continuation<Unit> create(Object obj, Continuation<?> continuation) {
        return new MediaPlayerManagerModule$subscribeToPlaybackEvents$1(this.this$0, continuation);
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
            Flow l10 = js.g.l(js.g.z(MediaPlayerManager.INSTANCE.getPlaybackRateFlow$media_player_release(), new AnonymousClass1(null)));
            AnonymousClass2 anonymousClass2 = new AnonymousClass2(this.this$0, null);
            this.label = 1;
            if (js.g.i(l10, anonymousClass2, this) == f10) {
                return f10;
            }
        }
        return Unit.f33282a;
    }

    @Override // kotlin.jvm.functions.Function2
    public final Object invoke(CoroutineScope coroutineScope, Continuation<? super Unit> continuation) {
        return ((MediaPlayerManagerModule$subscribeToPlaybackEvents$1) create(coroutineScope, continuation)).invokeSuspend(Unit.f33282a);
    }
}
