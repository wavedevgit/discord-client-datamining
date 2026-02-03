package com.discord.chat.input.views;

import com.discord.chat.input.views.ChatInputRootView;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.jvm.functions.Function2;
@Metadata(d1 = {"\u0000\f\n\u0000\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\u0010\u0000\u001a\u00020\u00012\b\u0010\u0002\u001a\u0004\u0018\u00010\u0003H\n"}, d2 = {"<anonymous>", "", "text", "Lcom/discord/chat/input/views/ChatInputRootView$CurrentTextAndSelection;"}, k = 3, mv = {2, 1, 0}, xi = 48)
@kotlin.coroutines.jvm.internal.e(c = "com.discord.chat.input.views.ChatInputRootView$onAttachedToWindow$1", f = "ChatInputRootView.kt", l = {}, m = "invokeSuspend")
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
final class ChatInputRootView$onAttachedToWindow$1 extends kotlin.coroutines.jvm.internal.k implements Function2<ChatInputRootView.CurrentTextAndSelection, Continuation<? super Unit>, Object> {
    /* synthetic */ Object L$0;
    int label;
    final /* synthetic */ ChatInputRootView this$0;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public ChatInputRootView$onAttachedToWindow$1(ChatInputRootView chatInputRootView, Continuation<? super ChatInputRootView$onAttachedToWindow$1> continuation) {
        super(2, continuation);
        this.this$0 = chatInputRootView;
    }

    @Override // kotlin.coroutines.jvm.internal.a
    public final Continuation<Unit> create(Object obj, Continuation<?> continuation) {
        ChatInputRootView$onAttachedToWindow$1 chatInputRootView$onAttachedToWindow$1 = new ChatInputRootView$onAttachedToWindow$1(this.this$0, continuation);
        chatInputRootView$onAttachedToWindow$1.L$0 = obj;
        return chatInputRootView$onAttachedToWindow$1;
    }

    @Override // kotlin.jvm.functions.Function2
    public final Object invoke(ChatInputRootView.CurrentTextAndSelection currentTextAndSelection, Continuation<? super Unit> continuation) {
        return ((ChatInputRootView$onAttachedToWindow$1) create(currentTextAndSelection, continuation)).invokeSuspend(Unit.f32464a);
    }

    @Override // kotlin.coroutines.jvm.internal.a
    public final Object invokeSuspend(Object obj) {
        ChatInputRootView.ChatInputListener listener;
        rr.b.f();
        if (this.label == 0) {
            kotlin.c.b(obj);
            ChatInputRootView.CurrentTextAndSelection currentTextAndSelection = (ChatInputRootView.CurrentTextAndSelection) this.L$0;
            if (currentTextAndSelection != null && (listener = this.this$0.getListener()) != null) {
                listener.onTextOrSelectionChanged(currentTextAndSelection.getSelectionStart(), currentTextAndSelection.getSelectionEnd(), currentTextAndSelection.getText(), currentTextAndSelection.getEditId());
            }
            return Unit.f32464a;
        }
        throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
    }
}
