package com.discord.chat;

import com.discord.chat.ChatModule;
import com.discord.chat.listmanager.ChatListManager;
import com.discord.chatreplay.logger.RowLogger;
import com.facebook.react.bridge.ReactApplicationContext;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.c;
import kotlin.coroutines.Continuation;
import kotlin.coroutines.jvm.internal.e;
import kotlin.coroutines.jvm.internal.k;
import kotlin.jvm.functions.Function2;
import wr.b;
@Metadata(d1 = {"\u0000\f\n\u0000\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\u0010\u0000\u001a\u00020\u00012\u0006\u0010\u0002\u001a\u00020\u0003H\n"}, d2 = {"<anonymous>", "", "manager", "Lcom/discord/chat/listmanager/ChatListManager;"}, k = 3, mv = {2, 1, 0}, xi = 48)
@e(c = "com.discord.chat.ChatModule$clearRows$1", f = "ChatModule.kt", l = {}, m = "invokeSuspend")
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
final class ChatModule$clearRows$1 extends k implements Function2<ChatListManager, Continuation<? super Unit>, Object> {
    final /* synthetic */ int $changesetUpdateId;
    final /* synthetic */ int $tag;
    /* synthetic */ Object L$0;
    int label;
    final /* synthetic */ ChatModule this$0;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public ChatModule$clearRows$1(ChatModule chatModule, int i10, int i11, Continuation<? super ChatModule$clearRows$1> continuation) {
        super(2, continuation);
        this.this$0 = chatModule;
        this.$tag = i10;
        this.$changesetUpdateId = i11;
    }

    @Override // kotlin.coroutines.jvm.internal.a
    public final Continuation<Unit> create(Object obj, Continuation<?> continuation) {
        ChatModule$clearRows$1 chatModule$clearRows$1 = new ChatModule$clearRows$1(this.this$0, this.$tag, this.$changesetUpdateId, continuation);
        chatModule$clearRows$1.L$0 = obj;
        return chatModule$clearRows$1;
    }

    @Override // kotlin.jvm.functions.Function2
    public final Object invoke(ChatListManager chatListManager, Continuation<? super Unit> continuation) {
        return ((ChatModule$clearRows$1) create(chatListManager, continuation)).invokeSuspend(Unit.f32056a);
    }

    @Override // kotlin.coroutines.jvm.internal.a
    public final Object invokeSuspend(Object obj) {
        ReactApplicationContext reactApplicationContext;
        RowLogger rowUpdateLoggerFor;
        b.f();
        if (this.label == 0) {
            c.b(obj);
            ChatModule.Companion companion = ChatModule.Companion;
            reactApplicationContext = this.this$0.reactContext;
            rowUpdateLoggerFor = companion.rowUpdateLoggerFor(reactApplicationContext, this.$tag);
            rowUpdateLoggerFor.logRowsClear();
            ((ChatListManager) this.L$0).clearRows(this.$changesetUpdateId);
            return Unit.f32056a;
        }
        throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
    }
}
