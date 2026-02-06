package com.discord.media_player;

import com.discord.media_player.MediaPlayerManager;
import java.lang.ref.WeakReference;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.coroutines.jvm.internal.k;
import kotlin.jvm.functions.Function2;
import kotlinx.coroutines.CoroutineScope;
import os.i0;
/* JADX INFO: Access modifiers changed from: package-private */
@Metadata(d1 = {"\u0000\n\n\u0000\n\u0002\u0010\u0002\n\u0002\u0018\u0002\u0010\u0000\u001a\u00020\u0001*\u00020\u0002H\n"}, d2 = {"<anonymous>", "", "Lkotlinx/coroutines/CoroutineScope;"}, k = 3, mv = {2, 1, 0}, xi = 48)
@kotlin.coroutines.jvm.internal.e(c = "com.discord.media_player.MediaPlayerManager$startProgressMonitor$1", f = "MediaPlayerManager.kt", l = {112}, m = "invokeSuspend")
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class MediaPlayerManager$startProgressMonitor$1 extends k implements Function2<CoroutineScope, Continuation<? super Unit>, Object> {
    final /* synthetic */ WeakReference<MediaPlayer> $playerRef;
    int label;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public MediaPlayerManager$startProgressMonitor$1(WeakReference<MediaPlayer> weakReference, Continuation<? super MediaPlayerManager$startProgressMonitor$1> continuation) {
        super(2, continuation);
        this.$playerRef = weakReference;
    }

    @Override // kotlin.coroutines.jvm.internal.a
    public final Continuation<Unit> create(Object obj, Continuation<?> continuation) {
        return new MediaPlayerManager$startProgressMonitor$1(this.$playerRef, continuation);
    }

    @Override // kotlin.coroutines.jvm.internal.a
    public final Object invokeSuspend(Object obj) {
        Object f10 = wr.b.f();
        int i10 = this.label;
        if (i10 != 0 && i10 != 1) {
            throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
        }
        kotlin.c.b(obj);
        do {
            MediaPlayer mediaPlayer = this.$playerRef.get();
            if (mediaPlayer != null && mediaPlayer.isPlaying()) {
                MediaPlayerManager.INSTANCE.getPlaybackProgressFlow$media_player_release().setValue(new MediaPlayerManager.PlaybackProgress(mediaPlayer.getMediaSource(), mediaPlayer.currentPositionMs(), mediaPlayer.durationMs()));
                this.label = 1;
            } else {
                return Unit.f32008a;
            }
        } while (i0.a(100L, this) != f10);
        return f10;
    }

    @Override // kotlin.jvm.functions.Function2
    public final Object invoke(CoroutineScope coroutineScope, Continuation<? super Unit> continuation) {
        return ((MediaPlayerManager$startProgressMonitor$1) create(coroutineScope, continuation)).invokeSuspend(Unit.f32008a);
    }
}
