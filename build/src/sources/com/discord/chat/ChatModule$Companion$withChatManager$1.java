package com.discord.chat;

import com.discord.chat.listmanager.ChatListManager;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.c;
import kotlin.coroutines.Continuation;
import kotlin.coroutines.jvm.internal.e;
import kotlin.coroutines.jvm.internal.k;
import kotlin.jvm.functions.Function2;
import kotlinx.coroutines.CoroutineScope;
import or.b;
@Metadata(d1 = {"\u0000\n\n\u0000\n\u0002\u0010\u0002\n\u0002\u0018\u0002\u0010\u0000\u001a\u00020\u0001*\u00020\u0002H\n"}, d2 = {"<anonymous>", "", "Lkotlinx/coroutines/CoroutineScope;"}, k = 3, mv = {2, 1, 0}, xi = 48)
@e(c = "com.discord.chat.ChatModule$Companion$withChatManager$1", f = "ChatModule.kt", l = {167}, m = "invokeSuspend")
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
final class ChatModule$Companion$withChatManager$1 extends k implements Function2<CoroutineScope, Continuation<? super Unit>, Object> {
    final /* synthetic */ Function2<ChatListManager, Continuation<? super Unit>, Object> $block;
    final /* synthetic */ ChatListManager $manager;
    int label;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    /* JADX WARN: Multi-variable type inference failed */
    public ChatModule$Companion$withChatManager$1(Function2<? super ChatListManager, ? super Continuation<? super Unit>, ? extends Object> function2, ChatListManager chatListManager, Continuation<? super ChatModule$Companion$withChatManager$1> continuation) {
        super(2, continuation);
        this.$block = function2;
        this.$manager = chatListManager;
    }

    @Override // kotlin.coroutines.jvm.internal.a
    public final Continuation<Unit> create(Object obj, Continuation<?> continuation) {
        return new ChatModule$Companion$withChatManager$1(this.$block, this.$manager, continuation);
    }

    @Override // kotlin.coroutines.jvm.internal.a
    public final Object invokeSuspend(Object obj) {
        Object f10 = b.f();
        int i10 = this.label;
        if (i10 != 0) {
            if (i10 == 1) {
                c.b(obj);
            } else {
                throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
            }
        } else {
            c.b(obj);
            Function2<ChatListManager, Continuation<? super Unit>, Object> function2 = this.$block;
            ChatListManager chatListManager = this.$manager;
            this.label = 1;
            if (function2.invoke(chatListManager, this) == f10) {
                return f10;
            }
        }
        return Unit.f33298a;
    }

    @Override // kotlin.jvm.functions.Function2
    public final Object invoke(CoroutineScope coroutineScope, Continuation<? super Unit> continuation) {
        return ((ChatModule$Companion$withChatManager$1) create(coroutineScope, continuation)).invokeSuspend(Unit.f33298a);
    }
}
