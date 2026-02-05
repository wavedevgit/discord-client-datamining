package com.discord.chat.presentation.message.view.voicemessages;

import kotlin.Metadata;
import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.jvm.functions.Function2;
import kotlinx.coroutines.CoroutineScope;
@Metadata(d1 = {"\u0000\n\n\u0000\n\u0002\u0010\u0002\n\u0002\u0018\u0002\u0010\u0000\u001a\u00020\u0001*\u00020\u0002H\n"}, d2 = {"<anonymous>", "", "Lkotlinx/coroutines/CoroutineScope;"}, k = 3, mv = {2, 1, 0}, xi = 48)
@kotlin.coroutines.jvm.internal.e(c = "com.discord.chat.presentation.message.view.voicemessages.AudioWaveView$finishAnimation$1", f = "AudioWaveView.kt", l = {122}, m = "invokeSuspend")
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
final class AudioWaveView$finishAnimation$1 extends kotlin.coroutines.jvm.internal.k implements Function2<CoroutineScope, Continuation<? super Unit>, Object> {
    int I$0;
    int I$1;
    private /* synthetic */ Object L$0;
    Object L$1;
    int label;
    final /* synthetic */ AudioWaveView this$0;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public AudioWaveView$finishAnimation$1(AudioWaveView audioWaveView, Continuation<? super AudioWaveView$finishAnimation$1> continuation) {
        super(2, continuation);
        this.this$0 = audioWaveView;
    }

    @Override // kotlin.coroutines.jvm.internal.a
    public final Continuation<Unit> create(Object obj, Continuation<?> continuation) {
        AudioWaveView$finishAnimation$1 audioWaveView$finishAnimation$1 = new AudioWaveView$finishAnimation$1(this.this$0, continuation);
        audioWaveView$finishAnimation$1.L$0 = obj;
        return audioWaveView$finishAnimation$1;
    }

    /* JADX WARN: Removed duplicated region for block: B:10:0x0035  */
    /* JADX WARN: Removed duplicated region for block: B:15:0x0056  */
    /* JADX WARN: Removed duplicated region for block: B:17:0x005b  */
    /* JADX WARN: Unsupported multi-entry loop pattern (BACK_EDGE: B:11:0x004d -> B:13:0x0050). Please submit an issue!!! */
    @Override // kotlin.coroutines.jvm.internal.a
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public final java.lang.Object invokeSuspend(java.lang.Object r9) {
        /*
            r8 = this;
            java.lang.Object r0 = ur.b.f()
            int r1 = r8.label
            r2 = 1
            if (r1 == 0) goto L23
            if (r1 != r2) goto L1b
            int r1 = r8.I$1
            int r3 = r8.I$0
            java.lang.Object r4 = r8.L$1
            com.discord.chat.presentation.message.view.voicemessages.AudioWaveView r4 = (com.discord.chat.presentation.message.view.voicemessages.AudioWaveView) r4
            java.lang.Object r5 = r8.L$0
            kotlinx.coroutines.CoroutineScope r5 = (kotlinx.coroutines.CoroutineScope) r5
            kotlin.c.b(r9)
            goto L50
        L1b:
            java.lang.IllegalStateException r9 = new java.lang.IllegalStateException
            java.lang.String r0 = "call to 'resume' before 'invoke' with coroutine"
            r9.<init>(r0)
            throw r9
        L23:
            kotlin.c.b(r9)
            java.lang.Object r9 = r8.L$0
            kotlinx.coroutines.CoroutineScope r9 = (kotlinx.coroutines.CoroutineScope) r9
            com.discord.chat.presentation.message.view.voicemessages.AudioWaveView r1 = r8.this$0
            r3 = 10
            r4 = 0
            r5 = r4
            r4 = r1
            r1 = r5
            r5 = r9
        L33:
            if (r1 >= r3) goto L5b
            kotlinx.coroutines.CoroutineDispatcher r9 = ms.m0.a()
            com.discord.chat.presentation.message.view.voicemessages.AudioWaveView$finishAnimation$1$1$1 r6 = new com.discord.chat.presentation.message.view.voicemessages.AudioWaveView$finishAnimation$1$1$1
            r7 = 0
            r6.<init>(r7)
            r8.L$0 = r5
            r8.L$1 = r4
            r8.I$0 = r3
            r8.I$1 = r1
            r8.label = r2
            java.lang.Object r9 = ms.g.g(r9, r6, r8)
            if (r9 != r0) goto L50
            return r0
        L50:
            boolean r9 = kotlinx.coroutines.i.i(r5)
            if (r9 == 0) goto L59
            r4.invalidate()
        L59:
            int r1 = r1 + r2
            goto L33
        L5b:
            kotlin.Unit r9 = kotlin.Unit.f31988a
            return r9
        */
        throw new UnsupportedOperationException("Method not decompiled: com.discord.chat.presentation.message.view.voicemessages.AudioWaveView$finishAnimation$1.invokeSuspend(java.lang.Object):java.lang.Object");
    }

    @Override // kotlin.jvm.functions.Function2
    public final Object invoke(CoroutineScope coroutineScope, Continuation<? super Unit> continuation) {
        return ((AudioWaveView$finishAnimation$1) create(coroutineScope, continuation)).invokeSuspend(Unit.f31988a);
    }
}
