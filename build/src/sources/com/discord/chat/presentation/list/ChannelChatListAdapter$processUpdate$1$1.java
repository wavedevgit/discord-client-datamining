package com.discord.chat.presentation.list;

import kotlin.Metadata;
import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.jvm.functions.Function2;
import kotlinx.coroutines.CoroutineScope;
/* JADX INFO: Access modifiers changed from: package-private */
@Metadata(d1 = {"\u0000\n\n\u0000\n\u0002\u0010\u0002\n\u0002\u0018\u0002\u0010\u0000\u001a\u00020\u0001*\u00020\u0002H\n"}, d2 = {"<anonymous>", "", "Lkotlinx/coroutines/CoroutineScope;"}, k = 3, mv = {2, 1, 0}, xi = 48)
@kotlin.coroutines.jvm.internal.e(c = "com.discord.chat.presentation.list.ChannelChatListAdapter$processUpdate$1$1", f = "ChannelChatListAdapter.kt", l = {}, m = "invokeSuspend")
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class ChannelChatListAdapter$processUpdate$1$1 extends kotlin.coroutines.jvm.internal.k implements Function2<CoroutineScope, Continuation<? super Unit>, Object> {
    int label;
    final /* synthetic */ ChannelChatListAdapter this$0;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public ChannelChatListAdapter$processUpdate$1$1(ChannelChatListAdapter channelChatListAdapter, Continuation<? super ChannelChatListAdapter$processUpdate$1$1> continuation) {
        super(2, continuation);
        this.this$0 = channelChatListAdapter;
    }

    @Override // kotlin.coroutines.jvm.internal.a
    public final Continuation<Unit> create(Object obj, Continuation<?> continuation) {
        return new ChannelChatListAdapter$processUpdate$1$1(this.this$0, continuation);
    }

    @Override // kotlin.coroutines.jvm.internal.a
    public final Object invokeSuspend(Object obj) {
        rr.b.f();
        if (this.label == 0) {
            kotlin.c.b(obj);
            this.this$0.isProcessingUpdate = false;
            this.this$0.processNextUpdate();
            return Unit.f32464a;
        }
        throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
    }

    @Override // kotlin.jvm.functions.Function2
    public final Object invoke(CoroutineScope coroutineScope, Continuation<? super Unit> continuation) {
        return ((ChannelChatListAdapter$processUpdate$1$1) create(coroutineScope, continuation)).invokeSuspend(Unit.f32464a);
    }
}
