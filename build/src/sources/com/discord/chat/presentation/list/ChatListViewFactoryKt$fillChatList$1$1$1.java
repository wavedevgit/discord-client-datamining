package com.discord.chat.presentation.list;

import androidx.recyclerview.widget.RecyclerView;
import java.util.List;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlinx.coroutines.CoroutineScope;
@Metadata(d1 = {"\u0000\n\n\u0000\n\u0002\u0010\u0002\n\u0002\u0018\u0002\u0010\u0000\u001a\u00020\u0001*\u00020\u0002H\n"}, d2 = {"<anonymous>", "", "Lkotlinx/coroutines/CoroutineScope;"}, k = 3, mv = {2, 1, 0}, xi = 48)
@kotlin.coroutines.jvm.internal.e(c = "com.discord.chat.presentation.list.ChatListViewFactoryKt$fillChatList$1$1$1", f = "ChatListViewFactory.kt", l = {}, m = "invokeSuspend")
@SourceDebugExtension({"SMAP\nChatListViewFactory.kt\nKotlin\n*S Kotlin\n*F\n+ 1 ChatListViewFactory.kt\ncom/discord/chat/presentation/list/ChatListViewFactoryKt$fillChatList$1$1$1\n+ 2 _Collections.kt\nkotlin/collections/CollectionsKt___CollectionsKt\n*L\n1#1,104:1\n1869#2,2:105\n*S KotlinDebug\n*F\n+ 1 ChatListViewFactory.kt\ncom/discord/chat/presentation/list/ChatListViewFactoryKt$fillChatList$1$1$1\n*L\n59#1:105,2\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
final class ChatListViewFactoryKt$fillChatList$1$1$1 extends kotlin.coroutines.jvm.internal.k implements Function2<CoroutineScope, Continuation<? super Unit>, Object> {
    final /* synthetic */ RecyclerView.RecycledViewPool $chatListViewPool;
    final /* synthetic */ List<RecyclerView.ViewHolder> $items;
    int label;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public ChatListViewFactoryKt$fillChatList$1$1$1(List<RecyclerView.ViewHolder> list, RecyclerView.RecycledViewPool recycledViewPool, Continuation<? super ChatListViewFactoryKt$fillChatList$1$1$1> continuation) {
        super(2, continuation);
        this.$items = list;
        this.$chatListViewPool = recycledViewPool;
    }

    @Override // kotlin.coroutines.jvm.internal.a
    public final Continuation<Unit> create(Object obj, Continuation<?> continuation) {
        return new ChatListViewFactoryKt$fillChatList$1$1$1(this.$items, this.$chatListViewPool, continuation);
    }

    @Override // kotlin.coroutines.jvm.internal.a
    public final Object invokeSuspend(Object obj) {
        wr.b.f();
        if (this.label == 0) {
            kotlin.c.b(obj);
            RecyclerView.RecycledViewPool recycledViewPool = this.$chatListViewPool;
            for (RecyclerView.ViewHolder viewHolder : this.$items) {
                recycledViewPool.putRecycledView(viewHolder);
            }
            return Unit.f32008a;
        }
        throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
    }

    @Override // kotlin.jvm.functions.Function2
    public final Object invoke(CoroutineScope coroutineScope, Continuation<? super Unit> continuation) {
        return ((ChatListViewFactoryKt$fillChatList$1$1$1) create(coroutineScope, continuation)).invokeSuspend(Unit.f32008a);
    }
}
