package com.discord.chat.presentation.message.view.voicemessages;

import gs.i0;
import gs.m0;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.jvm.functions.Function2;
import kotlinx.coroutines.CoroutineDispatcher;
import kotlinx.coroutines.CoroutineScope;
/* JADX INFO: Access modifiers changed from: package-private */
@Metadata(d1 = {"\u0000\n\n\u0000\n\u0002\u0010\u0002\n\u0002\u0018\u0002\u0010\u0000\u001a\u00020\u0001*\u00020\u0002H\n"}, d2 = {"<anonymous>", "", "Lkotlinx/coroutines/CoroutineScope;"}, k = 3, mv = {2, 1, 0}, xi = 48)
@kotlin.coroutines.jvm.internal.e(c = "com.discord.chat.presentation.message.view.voicemessages.AudioPlayerView$reset$2", f = "AudioPlayerView.kt", l = {693}, m = "invokeSuspend")
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class AudioPlayerView$reset$2 extends kotlin.coroutines.jvm.internal.k implements Function2<CoroutineScope, Continuation<? super Unit>, Object> {
    int label;
    final /* synthetic */ AudioPlayerView this$0;

    /* JADX INFO: Access modifiers changed from: package-private */
    @Metadata(d1 = {"\u0000\n\n\u0000\n\u0002\u0010\u0002\n\u0002\u0018\u0002\u0010\u0000\u001a\u00020\u0001*\u00020\u0002H\n"}, d2 = {"<anonymous>", "", "Lkotlinx/coroutines/CoroutineScope;"}, k = 3, mv = {2, 1, 0}, xi = 48)
    @kotlin.coroutines.jvm.internal.e(c = "com.discord.chat.presentation.message.view.voicemessages.AudioPlayerView$reset$2$1", f = "AudioPlayerView.kt", l = {694}, m = "invokeSuspend")
    /* renamed from: com.discord.chat.presentation.message.view.voicemessages.AudioPlayerView$reset$2$1  reason: invalid class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class AnonymousClass1 extends kotlin.coroutines.jvm.internal.k implements Function2<CoroutineScope, Continuation<? super Unit>, Object> {
        int label;

        AnonymousClass1(Continuation<? super AnonymousClass1> continuation) {
            super(2, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation<Unit> create(Object obj, Continuation<?> continuation) {
            return new AnonymousClass1(continuation);
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
                this.label = 1;
                if (i0.a(500L, this) == f10) {
                    return f10;
                }
            }
            return Unit.f33298a;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation<? super Unit> continuation) {
            return ((AnonymousClass1) create(coroutineScope, continuation)).invokeSuspend(Unit.f33298a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public AudioPlayerView$reset$2(AudioPlayerView audioPlayerView, Continuation<? super AudioPlayerView$reset$2> continuation) {
        super(2, continuation);
        this.this$0 = audioPlayerView;
    }

    @Override // kotlin.coroutines.jvm.internal.a
    public final Continuation<Unit> create(Object obj, Continuation<?> continuation) {
        return new AudioPlayerView$reset$2(this.this$0, continuation);
    }

    @Override // kotlin.coroutines.jvm.internal.a
    public final Object invokeSuspend(Object obj) {
        AudioPlayerViewState audioPlayerViewState;
        AudioPlayerViewState audioPlayerViewState2;
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
            CoroutineDispatcher a10 = m0.a();
            AnonymousClass1 anonymousClass1 = new AnonymousClass1(null);
            this.label = 1;
            if (gs.g.g(a10, anonymousClass1, this) == f10) {
                return f10;
            }
        }
        this.this$0.wasPlayingBeforeBeingPaused = false;
        AudioPlayerView audioPlayerView = this.this$0;
        audioPlayerViewState = audioPlayerView.state;
        audioPlayerView.configurePlayButton(audioPlayerViewState);
        AudioPlayerView audioPlayerView2 = this.this$0;
        audioPlayerViewState2 = audioPlayerView2.state;
        audioPlayerView2.configureAudioProgressView(audioPlayerViewState2);
        this.this$0.getBinding().wave.reset();
        return Unit.f33298a;
    }

    @Override // kotlin.jvm.functions.Function2
    public final Object invoke(CoroutineScope coroutineScope, Continuation<? super Unit> continuation) {
        return ((AudioPlayerView$reset$2) create(coroutineScope, continuation)).invokeSuspend(Unit.f33298a);
    }
}
