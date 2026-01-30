package com.discord.chat.presentation.list;

import com.discord.chat.listmanager.ChatListUpdate;
import com.discord.chat.presentation.list.ChatListView;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Ref;
import kotlinx.coroutines.CoroutineScope;
import kotlinx.coroutines.flow.Flow;
import kotlinx.coroutines.flow.FlowCollector;
/* JADX INFO: Access modifiers changed from: package-private */
@Metadata(d1 = {"\u0000\n\n\u0000\n\u0002\u0010\u0002\n\u0002\u0018\u0002\u0010\u0000\u001a\u00020\u0001*\u00020\u0002H\n"}, d2 = {"<anonymous>", "", "Lkotlinx/coroutines/CoroutineScope;"}, k = 3, mv = {2, 1, 0}, xi = 48)
@kotlin.coroutines.jvm.internal.e(c = "com.discord.chat.presentation.list.ChatListView$sync$1", f = "ChatListView.kt", l = {264}, m = "invokeSuspend")
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class ChatListView$sync$1 extends kotlin.coroutines.jvm.internal.k implements Function2<CoroutineScope, Continuation<? super Unit>, Object> {
    int label;
    final /* synthetic */ ChatListView this$0;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public ChatListView$sync$1(ChatListView chatListView, Continuation<? super ChatListView$sync$1> continuation) {
        super(2, continuation);
        this.this$0 = chatListView;
    }

    @Override // kotlin.coroutines.jvm.internal.a
    public final Continuation<Unit> create(Object obj, Continuation<?> continuation) {
        return new ChatListView$sync$1(this.this$0, continuation);
    }

    @Override // kotlin.coroutines.jvm.internal.a
    public final Object invokeSuspend(Object obj) {
        ChatListView.DataSource dataSource;
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
            final Ref.BooleanRef booleanRef = new Ref.BooleanRef();
            booleanRef.element = true;
            dataSource = this.this$0.dataSource;
            if (dataSource == null) {
                Intrinsics.throwUninitializedPropertyAccessException("dataSource");
                dataSource = null;
            }
            Flow updatesFlow = dataSource.getUpdatesFlow();
            final ChatListView chatListView = this.this$0;
            FlowCollector flowCollector = new FlowCollector() { // from class: com.discord.chat.presentation.list.ChatListView$sync$1.1
                @Override // kotlinx.coroutines.flow.FlowCollector
                public /* bridge */ /* synthetic */ Object emit(Object obj2, Continuation continuation) {
                    return emit((ChatListUpdate) obj2, (Continuation<? super Unit>) continuation);
                }

                public final Object emit(ChatListUpdate chatListUpdate, Continuation<? super Unit> continuation) {
                    if (!Ref.BooleanRef.this.element) {
                        chatListView.onChatListUpdate(chatListUpdate);
                    } else {
                        chatListView.onChatListUpdate(ChatListUpdate.copy$default(chatListUpdate, null, null, null, 0, null, 27, null));
                        Ref.BooleanRef.this.element = false;
                    }
                    return Unit.f33298a;
                }
            };
            this.label = 1;
            if (updatesFlow.collect(flowCollector, this) == f10) {
                return f10;
            }
        }
        return Unit.f33298a;
    }

    @Override // kotlin.jvm.functions.Function2
    public final Object invoke(CoroutineScope coroutineScope, Continuation<? super Unit> continuation) {
        return ((ChatListView$sync$1) create(coroutineScope, continuation)).invokeSuspend(Unit.f33298a);
    }
}
