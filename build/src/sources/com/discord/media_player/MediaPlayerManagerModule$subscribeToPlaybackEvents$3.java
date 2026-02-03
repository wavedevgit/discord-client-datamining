package com.discord.media_player;

import com.discord.media_player.MediaPlayerManager;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.coroutines.jvm.internal.k;
import kotlin.jvm.functions.Function2;
import kotlinx.coroutines.CoroutineScope;
import kotlinx.coroutines.flow.MutableStateFlow;
@Metadata(d1 = {"\u0000\n\n\u0000\n\u0002\u0010\u0002\n\u0002\u0018\u0002\u0010\u0000\u001a\u00020\u0001*\u00020\u0002H\n"}, d2 = {"<anonymous>", "", "Lkotlinx/coroutines/CoroutineScope;"}, k = 3, mv = {2, 1, 0}, xi = 48)
@kotlin.coroutines.jvm.internal.e(c = "com.discord.media_player.MediaPlayerManagerModule$subscribeToPlaybackEvents$3", f = "MediaPlayerManagerModule.kt", l = {192}, m = "invokeSuspend")
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class MediaPlayerManagerModule$subscribeToPlaybackEvents$3 extends k implements Function2<CoroutineScope, Continuation<? super Unit>, Object> {
    int label;
    final /* synthetic */ MediaPlayerManagerModule this$0;

    /* JADX INFO: Access modifiers changed from: package-private */
    @Metadata(d1 = {"\u0000\f\n\u0000\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\u0010\u0000\u001a\u00020\u00012\u0006\u0010\u0002\u001a\u00020\u0003H\n"}, d2 = {"<anonymous>", "", "playbackProgress", "Lcom/discord/media_player/MediaPlayerManager$PlaybackProgress;"}, k = 3, mv = {2, 1, 0}, xi = 48)
    @kotlin.coroutines.jvm.internal.e(c = "com.discord.media_player.MediaPlayerManagerModule$subscribeToPlaybackEvents$3$1", f = "MediaPlayerManagerModule.kt", l = {}, m = "invokeSuspend")
    /* renamed from: com.discord.media_player.MediaPlayerManagerModule$subscribeToPlaybackEvents$3$1  reason: invalid class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class AnonymousClass1 extends k implements Function2<MediaPlayerManager.PlaybackProgress, Continuation<? super Unit>, Object> {
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

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(MediaPlayerManager.PlaybackProgress playbackProgress, Continuation<? super Unit> continuation) {
            return ((AnonymousClass1) create(playbackProgress, continuation)).invokeSuspend(Unit.f32464a);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            rr.b.f();
            if (this.label == 0) {
                kotlin.c.b(obj);
                MediaPlayerManager.PlaybackProgress playbackProgress = (MediaPlayerManager.PlaybackProgress) this.L$0;
                this.this$0.onMediaPlayerPlaybackProgress(playbackProgress.getSource(), playbackProgress.getTimeMs(), playbackProgress.getDurationMs());
                return Unit.f32464a;
            }
            throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public MediaPlayerManagerModule$subscribeToPlaybackEvents$3(MediaPlayerManagerModule mediaPlayerManagerModule, Continuation<? super MediaPlayerManagerModule$subscribeToPlaybackEvents$3> continuation) {
        super(2, continuation);
        this.this$0 = mediaPlayerManagerModule;
    }

    @Override // kotlin.coroutines.jvm.internal.a
    public final Continuation<Unit> create(Object obj, Continuation<?> continuation) {
        return new MediaPlayerManagerModule$subscribeToPlaybackEvents$3(this.this$0, continuation);
    }

    @Override // kotlin.coroutines.jvm.internal.a
    public final Object invokeSuspend(Object obj) {
        Object f10 = rr.b.f();
        int i10 = this.label;
        if (i10 != 0) {
            if (i10 == 1) {
                kotlin.c.b(obj);
            } else {
                throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
            }
        } else {
            kotlin.c.b(obj);
            MutableStateFlow playbackProgressFlow$media_player_release = MediaPlayerManager.INSTANCE.getPlaybackProgressFlow$media_player_release();
            AnonymousClass1 anonymousClass1 = new AnonymousClass1(this.this$0, null);
            this.label = 1;
            if (ms.g.i(playbackProgressFlow$media_player_release, anonymousClass1, this) == f10) {
                return f10;
            }
        }
        return Unit.f32464a;
    }

    @Override // kotlin.jvm.functions.Function2
    public final Object invoke(CoroutineScope coroutineScope, Continuation<? super Unit> continuation) {
        return ((MediaPlayerManagerModule$subscribeToPlaybackEvents$3) create(coroutineScope, continuation)).invokeSuspend(Unit.f32464a);
    }
}
