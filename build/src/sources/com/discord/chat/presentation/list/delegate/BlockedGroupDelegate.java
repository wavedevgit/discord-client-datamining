package com.discord.chat.presentation.list.delegate;

import android.content.Context;
import android.view.ViewGroup;
import com.discord.chat.presentation.blockedmessage.BlockedMessageGroupView;
import com.discord.chat.presentation.events.ChatEventHandler;
import com.discord.chat.presentation.list.delegate.BaseChatListItemDelegate;
import com.discord.chat.presentation.list.item.BlockedGroupChatListItem;
import com.discord.chat.presentation.list.item.ChatListItem;
import com.discord.chat.presentation.message.view.botuikit.ComponentProvider;
import com.facebook.react.uimanager.ViewProps;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000T\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u000b\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\u0018\u00002\u000e\u0012\u0004\u0012\u00020\u0002\u0012\u0004\u0012\u00020\u00030\u0001B+\u0012\u0010\u0010\u0004\u001a\f\u0012\u0004\u0012\u00020\u00060\u0005j\u0002`\u0007\u0012\u0010\u0010\b\u001a\f\u0012\u0004\u0012\u00020\t0\u0005j\u0002`\n¢\u0006\u0004\b\u000b\u0010\fJ\u0018\u0010\r\u001a\u00020\u000e2\u0006\u0010\u000f\u001a\u00020\u00102\u0006\u0010\u0011\u001a\u00020\u0012H\u0016J\u0010\u0010\u0013\u001a\u00020\u00032\u0006\u0010\u0014\u001a\u00020\u0015H\u0016J&\u0010\u0016\u001a\u00020\u00172\u0006\u0010\u0018\u001a\u00020\u00032\u0006\u0010\u000f\u001a\u00020\u00022\f\u0010\u0019\u001a\b\u0012\u0004\u0012\u00020\u00030\u001aH\u0016R\u0018\u0010\u0004\u001a\f\u0012\u0004\u0012\u00020\u00060\u0005j\u0002`\u0007X\u0082\u0004¢\u0006\u0002\n\u0000R\u0018\u0010\b\u001a\f\u0012\u0004\u0012\u00020\t0\u0005j\u0002`\nX\u0082\u0004¢\u0006\u0002\n\u0000¨\u0006\u001b"}, d2 = {"Lcom/discord/chat/presentation/list/delegate/BlockedGroupDelegate;", "Lcom/discord/chat/presentation/list/delegate/BaseChatListItemDelegate;", "Lcom/discord/chat/presentation/list/item/BlockedGroupChatListItem;", "Lcom/discord/chat/presentation/blockedmessage/BlockedMessageGroupView;", "eventHandlerProvider", "Lkotlin/Function0;", "Lcom/discord/chat/presentation/events/ChatEventHandler;", "Lcom/discord/chat/presentation/list/delegate/EventHandlerProvider;", "messageComponentProvider", "Lcom/discord/chat/presentation/message/view/botuikit/ComponentProvider;", "Lcom/discord/chat/presentation/list/delegate/MessageComponentProvider;", "<init>", "(Lkotlin/jvm/functions/Function0;Lkotlin/jvm/functions/Function0;)V", "isForItem", "", "item", "Lcom/discord/chat/presentation/list/item/ChatListItem;", ViewProps.POSITION, "", "createView", "parent", "Landroid/view/ViewGroup;", "bindView", "", "view", "metadata", "Lcom/discord/chat/presentation/list/delegate/BaseChatListItemDelegate$Metadata;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class BlockedGroupDelegate extends BaseChatListItemDelegate<BlockedGroupChatListItem, BlockedMessageGroupView> {
    @NotNull
    private final Function0<ChatEventHandler> eventHandlerProvider;
    @NotNull
    private final Function0<ComponentProvider> messageComponentProvider;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    /* JADX WARN: Multi-variable type inference failed */
    public BlockedGroupDelegate(@NotNull Function0<? extends ChatEventHandler> eventHandlerProvider, @NotNull Function0<ComponentProvider> messageComponentProvider) {
        super(eventHandlerProvider, new Function1() { // from class: com.discord.chat.presentation.list.delegate.b
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit _init_$lambda$0;
                _init_$lambda$0 = BlockedGroupDelegate._init_$lambda$0((BlockedMessageGroupView) obj);
                return _init_$lambda$0;
            }
        });
        Intrinsics.checkNotNullParameter(eventHandlerProvider, "eventHandlerProvider");
        Intrinsics.checkNotNullParameter(messageComponentProvider, "messageComponentProvider");
        this.eventHandlerProvider = eventHandlerProvider;
        this.messageComponentProvider = messageComponentProvider;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit _init_$lambda$0(BlockedMessageGroupView blockedMessageGroupView) {
        Intrinsics.checkNotNullParameter(blockedMessageGroupView, "<this>");
        BlockedGroupDelegateKt.setupLayout(blockedMessageGroupView);
        return Unit.f33298a;
    }

    @Override // com.discord.chat.presentation.list.delegate.BaseChatListItemDelegate
    public boolean isForItem(@NotNull ChatListItem item, int i10) {
        Intrinsics.checkNotNullParameter(item, "item");
        return item instanceof BlockedGroupChatListItem;
    }

    @Override // com.discord.chat.presentation.list.delegate.BaseChatListItemDelegate
    public void bindView(@NotNull BlockedMessageGroupView view, @NotNull BlockedGroupChatListItem item, @NotNull BaseChatListItemDelegate.Metadata<BlockedMessageGroupView> metadata) {
        Intrinsics.checkNotNullParameter(view, "view");
        Intrinsics.checkNotNullParameter(item, "item");
        Intrinsics.checkNotNullParameter(metadata, "metadata");
        view.bind(item, getEventHandler());
    }

    @Override // com.discord.chat.presentation.list.delegate.BaseChatListItemDelegate
    @NotNull
    public BlockedMessageGroupView createView(@NotNull ViewGroup parent) {
        Intrinsics.checkNotNullParameter(parent, "parent");
        Context context = parent.getContext();
        Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
        BlockedMessageGroupView blockedMessageGroupView = new BlockedMessageGroupView(context, null, 2, null);
        blockedMessageGroupView.setupUI(this.eventHandlerProvider, this.messageComponentProvider);
        return blockedMessageGroupView;
    }
}
