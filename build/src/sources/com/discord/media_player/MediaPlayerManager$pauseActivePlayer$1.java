package com.discord.media_player;

import java.lang.ref.WeakReference;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.coroutines.jvm.internal.k;
import kotlin.jvm.functions.Function2;
import kotlinx.coroutines.CoroutineScope;
/* JADX INFO: Access modifiers changed from: package-private */
@Metadata(d1 = {"\u0000\n\n\u0000\n\u0002\u0010\u0002\n\u0002\u0018\u0002\u0010\u0000\u001a\u00020\u0001*\u00020\u0002H\n"}, d2 = {"<anonymous>", "", "Lkotlinx/coroutines/CoroutineScope;"}, k = 3, mv = {2, 1, 0}, xi = 48)
@kotlin.coroutines.jvm.internal.e(c = "com.discord.media_player.MediaPlayerManager$pauseActivePlayer$1", f = "MediaPlayerManager.kt", l = {}, m = "invokeSuspend")
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class MediaPlayerManager$pauseActivePlayer$1 extends k implements Function2<CoroutineScope, Continuation<? super Unit>, Object> {
    int label;

    /* JADX INFO: Access modifiers changed from: package-private */
    public MediaPlayerManager$pauseActivePlayer$1(Continuation<? super MediaPlayerManager$pauseActivePlayer$1> continuation) {
        super(2, continuation);
    }

    @Override // kotlin.coroutines.jvm.internal.a
    public final Continuation<Unit> create(Object obj, Continuation<?> continuation) {
        return new MediaPlayerManager$pauseActivePlayer$1(continuation);
    }

    @Override // kotlin.coroutines.jvm.internal.a
    public final Object invokeSuspend(Object obj) {
        WeakReference weakReference;
        MediaPlayer mediaPlayer;
        rr.b.f();
        if (this.label == 0) {
            kotlin.c.b(obj);
            weakReference = MediaPlayerManager.activePlayerRef;
            if (weakReference != null && (mediaPlayer = (MediaPlayer) weakReference.get()) != null) {
                mediaPlayer.pause();
            }
            return Unit.f32464a;
        }
        throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
    }

    @Override // kotlin.jvm.functions.Function2
    public final Object invoke(CoroutineScope coroutineScope, Continuation<? super Unit> continuation) {
        return ((MediaPlayerManager$pauseActivePlayer$1) create(coroutineScope, continuation)).invokeSuspend(Unit.f32464a);
    }
}
