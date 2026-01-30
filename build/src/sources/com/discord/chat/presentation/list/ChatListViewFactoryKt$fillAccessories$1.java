package com.discord.chat.presentation.list;

import android.view.View;
import androidx.recyclerview.widget.RecyclerView;
import com.discord.chat.presentation.message.MessageAccessoriesAdapter;
import com.discord.chat.presentation.message.viewholder.MessagePartViewHolder;
import gs.c1;
import gs.m0;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.Map;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlinx.coroutines.CoroutineScope;
/* JADX INFO: Access modifiers changed from: package-private */
@Metadata(d1 = {"\u0000\n\n\u0000\n\u0002\u0010\u0002\n\u0002\u0018\u0002\u0010\u0000\u001a\u00020\u0001*\u00020\u0002H\n"}, d2 = {"<anonymous>", "", "Lkotlinx/coroutines/CoroutineScope;"}, k = 3, mv = {2, 1, 0}, xi = 48)
@kotlin.coroutines.jvm.internal.e(c = "com.discord.chat.presentation.list.ChatListViewFactoryKt$fillAccessories$1", f = "ChatListViewFactory.kt", l = {90}, m = "invokeSuspend")
@SourceDebugExtension({"SMAP\nChatListViewFactory.kt\nKotlin\n*S Kotlin\n*F\n+ 1 ChatListViewFactory.kt\ncom/discord/chat/presentation/list/ChatListViewFactoryKt$fillAccessories$1\n+ 2 _Maps.kt\nkotlin/collections/MapsKt___MapsKt\n*L\n1#1,104:1\n216#2,2:105\n*S KotlinDebug\n*F\n+ 1 ChatListViewFactory.kt\ncom/discord/chat/presentation/list/ChatListViewFactoryKt$fillAccessories$1\n*L\n79#1:105,2\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class ChatListViewFactoryKt$fillAccessories$1 extends kotlin.coroutines.jvm.internal.k implements Function2<CoroutineScope, Continuation<? super Unit>, Object> {
    final /* synthetic */ MessageAccessoriesAdapter $accessoriesAdapter;
    final /* synthetic */ RecyclerView.RecycledViewPool $accessoriesViewPool;
    final /* synthetic */ RecyclerView $recycler;
    Object L$0;
    Object L$1;
    Object L$2;
    Object L$3;
    int label;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public ChatListViewFactoryKt$fillAccessories$1(MessageAccessoriesAdapter messageAccessoriesAdapter, RecyclerView recyclerView, RecyclerView.RecycledViewPool recycledViewPool, Continuation<? super ChatListViewFactoryKt$fillAccessories$1> continuation) {
        super(2, continuation);
        this.$accessoriesAdapter = messageAccessoriesAdapter;
        this.$recycler = recyclerView;
        this.$accessoriesViewPool = recycledViewPool;
    }

    @Override // kotlin.coroutines.jvm.internal.a
    public final Continuation<Unit> create(Object obj, Continuation<?> continuation) {
        return new ChatListViewFactoryKt$fillAccessories$1(this.$accessoriesAdapter, this.$recycler, this.$accessoriesViewPool, continuation);
    }

    @Override // kotlin.coroutines.jvm.internal.a
    public final Object invokeSuspend(Object obj) {
        Map map;
        RecyclerView recyclerView;
        RecyclerView.RecycledViewPool recycledViewPool;
        MessageAccessoriesAdapter messageAccessoriesAdapter;
        Iterator it;
        Object f10 = or.b.f();
        int i10 = this.label;
        if (i10 != 0) {
            if (i10 == 1) {
                it = (Iterator) this.L$3;
                recycledViewPool = (RecyclerView.RecycledViewPool) this.L$2;
                recyclerView = (RecyclerView) this.L$1;
                messageAccessoriesAdapter = (MessageAccessoriesAdapter) this.L$0;
                kotlin.c.b(obj);
            } else {
                throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
            }
        } else {
            kotlin.c.b(obj);
            map = ChatListViewFactoryKt.accessoriesToCreate;
            MessageAccessoriesAdapter messageAccessoriesAdapter2 = this.$accessoriesAdapter;
            RecyclerView recyclerView2 = this.$recycler;
            recyclerView = recyclerView2;
            recycledViewPool = this.$accessoriesViewPool;
            messageAccessoriesAdapter = messageAccessoriesAdapter2;
            it = map.entrySet().iterator();
        }
        while (it.hasNext()) {
            Map.Entry entry = (Map.Entry) it.next();
            int intValue = ((Number) entry.getKey()).intValue();
            int intValue2 = ((Number) entry.getValue()).intValue();
            ArrayList arrayList = new ArrayList();
            for (int i11 = 0; i11 < intValue2; i11++) {
                RecyclerView.ViewHolder createViewHolder = messageAccessoriesAdapter.createViewHolder(recyclerView, intValue);
                Intrinsics.checkNotNullExpressionValue(createViewHolder, "createViewHolder(...)");
                MessagePartViewHolder messagePartViewHolder = (MessagePartViewHolder) createViewHolder;
                View itemView = messagePartViewHolder.itemView;
                Intrinsics.checkNotNullExpressionValue(itemView, "itemView");
                if (itemView instanceof FactoryCreatable) {
                    ((FactoryCreatable) itemView).onFactoryCreate();
                }
                arrayList.add(messagePartViewHolder);
            }
            c1 c10 = m0.c();
            ChatListViewFactoryKt$fillAccessories$1$1$1 chatListViewFactoryKt$fillAccessories$1$1$1 = new ChatListViewFactoryKt$fillAccessories$1$1$1(arrayList, recycledViewPool, null);
            this.L$0 = messageAccessoriesAdapter;
            this.L$1 = recyclerView;
            this.L$2 = recycledViewPool;
            this.L$3 = it;
            this.label = 1;
            if (gs.g.g(c10, chatListViewFactoryKt$fillAccessories$1$1$1, this) == f10) {
                return f10;
            }
        }
        return Unit.f33298a;
    }

    @Override // kotlin.jvm.functions.Function2
    public final Object invoke(CoroutineScope coroutineScope, Continuation<? super Unit> continuation) {
        return ((ChatListViewFactoryKt$fillAccessories$1) create(coroutineScope, continuation)).invokeSuspend(Unit.f33298a);
    }
}
