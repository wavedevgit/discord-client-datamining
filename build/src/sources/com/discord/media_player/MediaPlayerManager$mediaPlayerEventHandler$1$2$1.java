package com.discord.media_player;

import kotlin.Metadata;
import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.coroutines.jvm.internal.k;
import kotlin.jvm.functions.Function2;
import kotlinx.coroutines.CoroutineScope;
@Metadata(d1 = {"\u0000\n\n\u0000\n\u0002\u0010\u0002\n\u0002\u0018\u0002\u0010\u0000\u001a\u00020\u0001*\u00020\u0002H\n"}, d2 = {"<anonymous>", "", "Lkotlinx/coroutines/CoroutineScope;"}, k = 3, mv = {2, 1, 0}, xi = 48)
@kotlin.coroutines.jvm.internal.e(c = "com.discord.media_player.MediaPlayerManager$mediaPlayerEventHandler$1$2$1", f = "MediaPlayerManager.kt", l = {}, m = "invokeSuspend")
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class MediaPlayerManager$mediaPlayerEventHandler$1$2$1 extends k implements Function2<CoroutineScope, Continuation<? super Unit>, Object> {
    final /* synthetic */ MediaPlayer $prevMediaPlayer;
    int label;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public MediaPlayerManager$mediaPlayerEventHandler$1$2$1(MediaPlayer mediaPlayer, Continuation<? super MediaPlayerManager$mediaPlayerEventHandler$1$2$1> continuation) {
        super(2, continuation);
        this.$prevMediaPlayer = mediaPlayer;
    }

    @Override // kotlin.coroutines.jvm.internal.a
    public final Continuation<Unit> create(Object obj, Continuation<?> continuation) {
        return new MediaPlayerManager$mediaPlayerEventHandler$1$2$1(this.$prevMediaPlayer, continuation);
    }

    @Override // kotlin.coroutines.jvm.internal.a
    public final Object invokeSuspend(Object obj) {
        ur.b.f();
        if (this.label == 0) {
            kotlin.c.b(obj);
            this.$prevMediaPlayer.pause();
            return Unit.f31988a;
        }
        throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
    }

    @Override // kotlin.jvm.functions.Function2
    public final Object invoke(CoroutineScope coroutineScope, Continuation<? super Unit> continuation) {
        return ((MediaPlayerManager$mediaPlayerEventHandler$1$2$1) create(coroutineScope, continuation)).invokeSuspend(Unit.f31988a);
    }
}
