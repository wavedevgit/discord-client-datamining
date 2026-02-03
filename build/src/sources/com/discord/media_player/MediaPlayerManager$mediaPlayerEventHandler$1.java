package com.discord.media_player;

import com.discord.media_player.MediaPlayer;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.coroutines.jvm.internal.k;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlinx.coroutines.CoroutineScope;
/* JADX INFO: Access modifiers changed from: package-private */
@Metadata(d1 = {"\u0000\n\n\u0000\n\u0002\u0010\u0002\n\u0002\u0018\u0002\u0010\u0000\u001a\u00020\u0001*\u00020\u0002H\n"}, d2 = {"<anonymous>", "", "Lkotlinx/coroutines/CoroutineScope;"}, k = 3, mv = {2, 1, 0}, xi = 48)
@kotlin.coroutines.jvm.internal.e(c = "com.discord.media_player.MediaPlayerManager$mediaPlayerEventHandler$1", f = "MediaPlayerManager.kt", l = {60}, m = "invokeSuspend")
@SourceDebugExtension({"SMAP\nMediaPlayerManager.kt\nKotlin\n*S Kotlin\n*F\n+ 1 MediaPlayerManager.kt\ncom/discord/media_player/MediaPlayerManager$mediaPlayerEventHandler$1\n+ 2 StateFlow.kt\nkotlinx/coroutines/flow/StateFlowKt\n*L\n1#1,161:1\n230#2,5:162\n230#2,5:167\n230#2,5:172\n*S KotlinDebug\n*F\n+ 1 MediaPlayerManager.kt\ncom/discord/media_player/MediaPlayerManager$mediaPlayerEventHandler$1\n*L\n52#1:162,5\n66#1:167,5\n79#1:172,5\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class MediaPlayerManager$mediaPlayerEventHandler$1 extends k implements Function2<CoroutineScope, Continuation<? super Unit>, Object> {
    final /* synthetic */ MediaPlayer.Event $event;
    final /* synthetic */ MediaPlayer $mediaPlayer;
    Object L$0;
    Object L$1;
    int label;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public MediaPlayerManager$mediaPlayerEventHandler$1(MediaPlayer mediaPlayer, MediaPlayer.Event event, Continuation<? super MediaPlayerManager$mediaPlayerEventHandler$1> continuation) {
        super(2, continuation);
        this.$mediaPlayer = mediaPlayer;
        this.$event = event;
    }

    @Override // kotlin.coroutines.jvm.internal.a
    public final Continuation<Unit> create(Object obj, Continuation<?> continuation) {
        return new MediaPlayerManager$mediaPlayerEventHandler$1(this.$mediaPlayer, this.$event, continuation);
    }

    /* JADX WARN: Code restructure failed: missing block: B:20:0x0077, code lost:
        r1 = com.discord.media_player.MediaPlayerManager.activePlayerRef;
     */
    /* JADX WARN: Removed duplicated region for block: B:36:0x00d3  */
    @Override // kotlin.coroutines.jvm.internal.a
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public final java.lang.Object invokeSuspend(java.lang.Object r14) {
        /*
            Method dump skipped, instructions count: 329
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: com.discord.media_player.MediaPlayerManager$mediaPlayerEventHandler$1.invokeSuspend(java.lang.Object):java.lang.Object");
    }

    @Override // kotlin.jvm.functions.Function2
    public final Object invoke(CoroutineScope coroutineScope, Continuation<? super Unit> continuation) {
        return ((MediaPlayerManager$mediaPlayerEventHandler$1) create(coroutineScope, continuation)).invokeSuspend(Unit.f33074a);
    }
}
