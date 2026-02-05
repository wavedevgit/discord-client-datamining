package com.discord.chat.presentation.list;

import android.view.View;
import androidx.recyclerview.widget.RecyclerView;
import com.discord.chat.presentation.list.delegate.BaseChatListItemDelegate;
import com.discord.chat.presentation.list.item.ChatListItem;
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
import ms.c1;
import ms.m0;
/* JADX INFO: Access modifiers changed from: package-private */
@Metadata(d1 = {"\u0000\n\n\u0000\n\u0002\u0010\u0002\n\u0002\u0018\u0002\u0010\u0000\u001a\u00020\u0001*\u00020\u0002H\n"}, d2 = {"<anonymous>", "", "Lkotlinx/coroutines/CoroutineScope;"}, k = 3, mv = {2, 1, 0}, xi = 48)
@kotlin.coroutines.jvm.internal.e(c = "com.discord.chat.presentation.list.ChatListViewFactoryKt$fillChatList$1", f = "ChatListViewFactory.kt", l = {58}, m = "invokeSuspend")
@SourceDebugExtension({"SMAP\nChatListViewFactory.kt\nKotlin\n*S Kotlin\n*F\n+ 1 ChatListViewFactory.kt\ncom/discord/chat/presentation/list/ChatListViewFactoryKt$fillChatList$1\n+ 2 _Maps.kt\nkotlin/collections/MapsKt___MapsKt\n*L\n1#1,104:1\n216#2,2:105\n*S KotlinDebug\n*F\n+ 1 ChatListViewFactory.kt\ncom/discord/chat/presentation/list/ChatListViewFactoryKt$fillChatList$1\n*L\n46#1:105,2\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class ChatListViewFactoryKt$fillChatList$1 extends kotlin.coroutines.jvm.internal.k implements Function2<CoroutineScope, Continuation<? super Unit>, Object> {
    final /* synthetic */ BaseChatListAdapter $chatListAdapter;
    final /* synthetic */ RecyclerView.RecycledViewPool $chatListViewPool;
    final /* synthetic */ Map<Class<? extends BaseChatListItemDelegate<? extends ChatListItem, ? extends View>>, Integer> $delegateViewTypes;
    final /* synthetic */ RecyclerView $recycler;
    Object L$0;
    Object L$1;
    Object L$2;
    Object L$3;
    Object L$4;
    int label;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public ChatListViewFactoryKt$fillChatList$1(Map<Class<? extends BaseChatListItemDelegate<? extends ChatListItem, ? extends View>>, Integer> map, BaseChatListAdapter baseChatListAdapter, RecyclerView recyclerView, RecyclerView.RecycledViewPool recycledViewPool, Continuation<? super ChatListViewFactoryKt$fillChatList$1> continuation) {
        super(2, continuation);
        this.$delegateViewTypes = map;
        this.$chatListAdapter = baseChatListAdapter;
        this.$recycler = recyclerView;
        this.$chatListViewPool = recycledViewPool;
    }

    @Override // kotlin.coroutines.jvm.internal.a
    public final Continuation<Unit> create(Object obj, Continuation<?> continuation) {
        return new ChatListViewFactoryKt$fillChatList$1(this.$delegateViewTypes, this.$chatListAdapter, this.$recycler, this.$chatListViewPool, continuation);
    }

    @Override // kotlin.coroutines.jvm.internal.a
    public final Object invokeSuspend(Object obj) {
        Map map;
        RecyclerView recyclerView;
        BaseChatListAdapter baseChatListAdapter;
        RecyclerView.RecycledViewPool recycledViewPool;
        Map<Class<? extends BaseChatListItemDelegate<? extends ChatListItem, ? extends View>>, Integer> map2;
        Iterator it;
        Object f10 = ur.b.f();
        int i10 = this.label;
        if (i10 != 0) {
            if (i10 == 1) {
                it = (Iterator) this.L$4;
                recycledViewPool = (RecyclerView.RecycledViewPool) this.L$3;
                recyclerView = (RecyclerView) this.L$2;
                baseChatListAdapter = (BaseChatListAdapter) this.L$1;
                map2 = (Map) this.L$0;
                kotlin.c.b(obj);
            } else {
                throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
            }
        } else {
            kotlin.c.b(obj);
            map = ChatListViewFactoryKt.recycledViewPoolSizes;
            Map<Class<? extends BaseChatListItemDelegate<? extends ChatListItem, ? extends View>>, Integer> map3 = this.$delegateViewTypes;
            BaseChatListAdapter baseChatListAdapter2 = this.$chatListAdapter;
            recyclerView = this.$recycler;
            baseChatListAdapter = baseChatListAdapter2;
            recycledViewPool = this.$chatListViewPool;
            map2 = map3;
            it = map.entrySet().iterator();
        }
        while (it.hasNext()) {
            Map.Entry entry = (Map.Entry) it.next();
            int intValue = ((Number) entry.getValue()).intValue();
            Integer num = map2.get((Class) entry.getKey());
            Intrinsics.checkNotNull(num);
            int intValue2 = num.intValue();
            ArrayList arrayList = new ArrayList();
            for (int i11 = 0; i11 < intValue; i11++) {
                RecyclerView.ViewHolder createViewHolder = baseChatListAdapter.createViewHolder(recyclerView, intValue2);
                View itemView = createViewHolder.itemView;
                Intrinsics.checkNotNullExpressionValue(itemView, "itemView");
                if (itemView instanceof FactoryCreatable) {
                    ((FactoryCreatable) itemView).onFactoryCreate();
                }
                arrayList.add(createViewHolder);
            }
            c1 c10 = m0.c();
            ChatListViewFactoryKt$fillChatList$1$1$1 chatListViewFactoryKt$fillChatList$1$1$1 = new ChatListViewFactoryKt$fillChatList$1$1$1(arrayList, recycledViewPool, null);
            this.L$0 = map2;
            this.L$1 = baseChatListAdapter;
            this.L$2 = recyclerView;
            this.L$3 = recycledViewPool;
            this.L$4 = it;
            this.label = 1;
            if (ms.g.g(c10, chatListViewFactoryKt$fillChatList$1$1$1, this) == f10) {
                return f10;
            }
        }
        return Unit.f31988a;
    }

    @Override // kotlin.jvm.functions.Function2
    public final Object invoke(CoroutineScope coroutineScope, Continuation<? super Unit> continuation) {
        return ((ChatListViewFactoryKt$fillChatList$1) create(coroutineScope, continuation)).invokeSuspend(Unit.f31988a);
    }
}
