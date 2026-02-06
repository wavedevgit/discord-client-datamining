package com.discord.chat.presentation.blockedmessage;

import android.annotation.SuppressLint;
import android.content.Context;
import android.util.AttributeSet;
import android.view.LayoutInflater;
import android.view.View;
import android.widget.TextView;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;
import com.discord.chat.R;
import com.discord.chat.databinding.BlockedMessageGroupViewBinding;
import com.discord.chat.presentation.blockedmessage.BlockedMessageGroupView;
import com.discord.chat.presentation.events.ChatEventHandler;
import com.discord.chat.presentation.list.BaseChatListAdapter;
import com.discord.chat.presentation.list.ChatListConstraintLayout;
import com.discord.chat.presentation.list.item.BlockedGroupChatListItem;
import com.discord.chat.presentation.message.decorations.BackgroundHighlightDecoration;
import com.discord.chat.presentation.message.view.botuikit.ComponentProvider;
import com.discord.fonts.DiscordFont;
import com.discord.fonts.DiscordFontUtilsKt;
import com.discord.misc.utilities.size.SizeUtilsKt;
import com.discord.misc.utilities.view.ViewBackgroundUtilsKt;
import com.discord.primitives.MessageId;
import com.discord.react_asset_fetcher.ReactAsset;
import com.discord.react_asset_fetcher.ReactAssetUtilsKt;
import com.discord.recycler_view.decorations.VerticalSpacingItemDecoration;
import com.discord.theme.ThemeManagerKt;
import com.discord.theme.utils.ColorUtilsKt;
import com.facebook.drawee.view.SimpleDraweeView;
import kotlin.Metadata;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000L\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\u0018\u00002\u00020\u0001B\u001d\b\u0007\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\n\b\u0002\u0010\u0004\u001a\u0004\u0018\u00010\u0005¢\u0006\u0004\b\u0006\u0010\u0007J\u0018\u0010\u000e\u001a\u00020\u000f2\u0006\u0010\u0010\u001a\u00020\u00112\u0006\u0010\u0012\u001a\u00020\u0013H\u0007J*\u0010\u0014\u001a\u00020\u000f2\u0010\u0010\u0012\u001a\f\u0012\u0004\u0012\u00020\u00130\u0015j\u0002`\u00162\u0010\u0010\u0017\u001a\f\u0012\u0004\u0012\u00020\u00180\u0015j\u0002`\u0019R\u0011\u0010\b\u001a\u00020\t¢\u0006\b\n\u0000\u001a\u0004\b\n\u0010\u000bR\u000e\u0010\f\u001a\u00020\rX\u0082.¢\u0006\u0002\n\u0000¨\u0006\u001a"}, d2 = {"Lcom/discord/chat/presentation/blockedmessage/BlockedMessageGroupView;", "Lcom/discord/chat/presentation/list/ChatListConstraintLayout;", "context", "Landroid/content/Context;", "attrs", "Landroid/util/AttributeSet;", "<init>", "(Landroid/content/Context;Landroid/util/AttributeSet;)V", "binding", "Lcom/discord/chat/databinding/BlockedMessageGroupViewBinding;", "getBinding", "()Lcom/discord/chat/databinding/BlockedMessageGroupViewBinding;", "listAdapter", "Lcom/discord/chat/presentation/list/BaseChatListAdapter;", "bind", "", "item", "Lcom/discord/chat/presentation/list/item/BlockedGroupChatListItem;", "eventHandler", "Lcom/discord/chat/presentation/events/ChatEventHandler;", "setupUI", "Lkotlin/Function0;", "Lcom/discord/chat/presentation/list/delegate/EventHandlerProvider;", "componentProvider", "Lcom/discord/chat/presentation/message/view/botuikit/ComponentProvider;", "Lcom/discord/chat/presentation/list/delegate/MessageComponentProvider;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nBlockedMessageGroupView.kt\nKotlin\n*S Kotlin\n*F\n+ 1 BlockedMessageGroupView.kt\ncom/discord/chat/presentation/blockedmessage/BlockedMessageGroupView\n+ 2 View.kt\nandroidx/core/view/ViewKt\n*L\n1#1,91:1\n146#2,8:92\n257#2,2:100\n*S KotlinDebug\n*F\n+ 1 BlockedMessageGroupView.kt\ncom/discord/chat/presentation/blockedmessage/BlockedMessageGroupView\n*L\n40#1:92,8\n75#1:100,2\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class BlockedMessageGroupView extends ChatListConstraintLayout {
    @NotNull
    private final BlockedMessageGroupViewBinding binding;
    private BaseChatListAdapter listAdapter;

    /* JADX WARN: 'this' call moved to the top of the method (can break code semantics) */
    public BlockedMessageGroupView(@NotNull Context context) {
        this(context, null, 2, null);
        Intrinsics.checkNotNullParameter(context, "context");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void bind$lambda$2(ChatEventHandler chatEventHandler, BlockedGroupChatListItem blockedGroupChatListItem, View view) {
        chatEventHandler.mo484onTapToggleBlockedMessages1xi1bu0(MessageId.m1084constructorimpl(blockedGroupChatListItem.getId()));
    }

    @SuppressLint({"NotifyDataSetChanged"})
    public final void bind(@NotNull final BlockedGroupChatListItem item, @NotNull final ChatEventHandler eventHandler) {
        int i10;
        Intrinsics.checkNotNullParameter(item, "item");
        Intrinsics.checkNotNullParameter(eventHandler, "eventHandler");
        setOnClickListener(new View.OnClickListener() { // from class: r6.a
            @Override // android.view.View.OnClickListener
            public final void onClick(View view) {
                BlockedMessageGroupView.bind$lambda$2(ChatEventHandler.this, item, view);
            }
        });
        int i11 = 0;
        if (item.isRevealed()) {
            i10 = item.getBackgroundColor();
        } else {
            i10 = 0;
        }
        ViewBackgroundUtilsKt.setBackgroundRectangle$default(this, i10, SizeUtilsKt.getDpToPx(8), null, 0, 12, null);
        SimpleDraweeView closeIcon = this.binding.closeIcon;
        Intrinsics.checkNotNullExpressionValue(closeIcon, "closeIcon");
        ReactAssetUtilsKt.setReactAsset(closeIcon, ReactAsset.Close);
        SimpleDraweeView closeIcon2 = this.binding.closeIcon;
        Intrinsics.checkNotNullExpressionValue(closeIcon2, "closeIcon");
        ColorUtilsKt.setTintColor(closeIcon2, Integer.valueOf(ThemeManagerKt.getTheme().getTextMuted()));
        this.binding.blockedMessageGroupButton.setText(item.getText());
        this.binding.blockedMessageGroupButton.setTextColor(item.getTextColor());
        RecyclerView blockedMessages = this.binding.blockedMessages;
        Intrinsics.checkNotNullExpressionValue(blockedMessages, "blockedMessages");
        if (!item.isRevealed()) {
            i11 = 8;
        }
        blockedMessages.setVisibility(i11);
        BaseChatListAdapter baseChatListAdapter = this.listAdapter;
        BaseChatListAdapter baseChatListAdapter2 = null;
        if (baseChatListAdapter == null) {
            Intrinsics.throwUninitializedPropertyAccessException("listAdapter");
            baseChatListAdapter = null;
        }
        baseChatListAdapter.setItems(item.getContent());
        BaseChatListAdapter baseChatListAdapter3 = this.listAdapter;
        if (baseChatListAdapter3 == null) {
            Intrinsics.throwUninitializedPropertyAccessException("listAdapter");
        } else {
            baseChatListAdapter2 = baseChatListAdapter3;
        }
        baseChatListAdapter2.notifyDataSetChanged();
    }

    @NotNull
    public final BlockedMessageGroupViewBinding getBinding() {
        return this.binding;
    }

    public final void setupUI(@NotNull Function0<? extends ChatEventHandler> eventHandler, @NotNull Function0<ComponentProvider> componentProvider) {
        Intrinsics.checkNotNullParameter(eventHandler, "eventHandler");
        Intrinsics.checkNotNullParameter(componentProvider, "componentProvider");
        BaseChatListAdapter baseChatListAdapter = new BaseChatListAdapter(eventHandler, componentProvider);
        this.listAdapter = baseChatListAdapter;
        this.binding.blockedMessages.setAdapter(baseChatListAdapter);
    }

    public /* synthetic */ BlockedMessageGroupView(Context context, AttributeSet attributeSet, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this(context, (i10 & 2) != 0 ? null : attributeSet);
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public BlockedMessageGroupView(@NotNull Context context, AttributeSet attributeSet) {
        super(context, attributeSet);
        Intrinsics.checkNotNullParameter(context, "context");
        BlockedMessageGroupViewBinding inflate = BlockedMessageGroupViewBinding.inflate(LayoutInflater.from(context), this);
        Intrinsics.checkNotNullExpressionValue(inflate, "inflate(...)");
        this.binding = inflate;
        int dimensionPixelSize = context.getResources().getDimensionPixelSize(R.dimen.message_horizontal_spacing);
        setPaddingRelative(dimensionPixelSize, getPaddingTop(), dimensionPixelSize, getPaddingBottom());
        TextView blockedMessageGroupButton = inflate.blockedMessageGroupButton;
        Intrinsics.checkNotNullExpressionValue(blockedMessageGroupButton, "blockedMessageGroupButton");
        DiscordFontUtilsKt.setDiscordFont(blockedMessageGroupButton, DiscordFont.PrimarySemibold);
        RecyclerView recyclerView = inflate.blockedMessages;
        recyclerView.setItemAnimator(null);
        recyclerView.addItemDecoration(new BackgroundHighlightDecoration(context));
        recyclerView.addItemDecoration(new VerticalSpacingItemDecoration(SizeUtilsKt.getDpToPx(16), 0, SizeUtilsKt.getDpToPx(16), true, 2, null));
        LinearLayoutManager linearLayoutManager = new LinearLayoutManager(context);
        linearLayoutManager.setReverseLayout(true);
        recyclerView.setLayoutManager(linearLayoutManager);
    }
}
