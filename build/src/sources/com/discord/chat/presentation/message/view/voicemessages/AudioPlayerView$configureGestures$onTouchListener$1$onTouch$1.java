package com.discord.chat.presentation.message.view.voicemessages;

import android.view.ViewConfiguration;
import gs.i0;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.jvm.functions.Function2;
import kotlinx.coroutines.CoroutineScope;
@Metadata(d1 = {"\u0000\n\n\u0000\n\u0002\u0010\u0002\n\u0002\u0018\u0002\u0010\u0000\u001a\u00020\u0001*\u00020\u0002H\n"}, d2 = {"<anonymous>", "", "Lkotlinx/coroutines/CoroutineScope;"}, k = 3, mv = {2, 1, 0}, xi = 48)
@kotlin.coroutines.jvm.internal.e(c = "com.discord.chat.presentation.message.view.voicemessages.AudioPlayerView$configureGestures$onTouchListener$1$onTouch$1", f = "AudioPlayerView.kt", l = {262}, m = "invokeSuspend")
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
final class AudioPlayerView$configureGestures$onTouchListener$1$onTouch$1 extends kotlin.coroutines.jvm.internal.k implements Function2<CoroutineScope, Continuation<? super Unit>, Object> {
    int label;
    final /* synthetic */ AudioPlayerView$configureGestures$onTouchListener$1 this$0;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public AudioPlayerView$configureGestures$onTouchListener$1$onTouch$1(AudioPlayerView$configureGestures$onTouchListener$1 audioPlayerView$configureGestures$onTouchListener$1, Continuation<? super AudioPlayerView$configureGestures$onTouchListener$1$onTouch$1> continuation) {
        super(2, continuation);
        this.this$0 = audioPlayerView$configureGestures$onTouchListener$1;
    }

    @Override // kotlin.coroutines.jvm.internal.a
    public final Continuation<Unit> create(Object obj, Continuation<?> continuation) {
        return new AudioPlayerView$configureGestures$onTouchListener$1$onTouch$1(this.this$0, continuation);
    }

    @Override // kotlin.coroutines.jvm.internal.a
    public final Object invokeSuspend(Object obj) {
        Runnable runnable;
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
            this.label = 1;
            if (i0.a(ViewConfiguration.getLongPressTimeout(), this) == f10) {
                return f10;
            }
        }
        runnable = this.this$0.longPressRunnable;
        runnable.run();
        return Unit.f33282a;
    }

    @Override // kotlin.jvm.functions.Function2
    public final Object invoke(CoroutineScope coroutineScope, Continuation<? super Unit> continuation) {
        return ((AudioPlayerView$configureGestures$onTouchListener$1$onTouch$1) create(coroutineScope, continuation)).invokeSuspend(Unit.f33282a);
    }
}
