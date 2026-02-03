package com.discord.chat.presentation.message.viewholder;

import android.view.View;
import androidx.recyclerview.widget.RecyclerView;
import com.discord.chat.presentation.message.messagepart.ChannelPromptActionsAccessory;
import com.discord.chat.presentation.message.view.ChannelPromptActionsView;
import com.discord.primitives.ChannelId;
import com.discord.primitives.MessageId;
import kotlin.Metadata;
import kotlin.jvm.functions.Function3;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u00000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0010\u000e\n\u0000\u0018\u00002\u00020\u0001B\u000f\u0012\u0006\u0010\u0002\u001a\u00020\u0003¢\u0006\u0004\b\u0004\u0010\u0005J.\u0010\u0006\u001a\u00020\u00072\u0006\u0010\b\u001a\u00020\t2\u001e\u0010\n\u001a\u001a\u0012\u0004\u0012\u00020\f\u0012\u0004\u0012\u00020\r\u0012\u0004\u0012\u00020\u000e\u0012\u0004\u0012\u00020\u00070\u000bR\u000e\u0010\u0002\u001a\u00020\u0003X\u0082\u0004¢\u0006\u0002\n\u0000¨\u0006\u000f"}, d2 = {"Lcom/discord/chat/presentation/message/viewholder/ChannelPromptActionsViewHolder;", "Lcom/discord/chat/presentation/message/viewholder/MessagePartViewHolder;", "channelPromptActionsView", "Lcom/discord/chat/presentation/message/view/ChannelPromptActionsView;", "<init>", "(Lcom/discord/chat/presentation/message/view/ChannelPromptActionsView;)V", "bind", "", "accessory", "Lcom/discord/chat/presentation/message/messagepart/ChannelPromptActionsAccessory;", "onTapChannelPromptButton", "Lkotlin/Function3;", "Lcom/discord/primitives/MessageId;", "Lcom/discord/primitives/ChannelId;", "", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class ChannelPromptActionsViewHolder extends MessagePartViewHolder {
    @NotNull
    private final ChannelPromptActionsView channelPromptActionsView;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public ChannelPromptActionsViewHolder(@NotNull ChannelPromptActionsView channelPromptActionsView) {
        super(channelPromptActionsView, null);
        Intrinsics.checkNotNullParameter(channelPromptActionsView, "channelPromptActionsView");
        this.channelPromptActionsView = channelPromptActionsView;
        channelPromptActionsView.setLayoutParams(new RecyclerView.LayoutParams(-2, -2));
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void bind$lambda$0(Function3 function3, ChannelPromptActionsAccessory channelPromptActionsAccessory, View view) {
        function3.invoke(MessageId.m1086boximpl(channelPromptActionsAccessory.mo538getMessageId3Eiw7ao()), ChannelId.m1060boximpl(channelPromptActionsAccessory.getMessage().m236getChannelIdo4g7jtM()), "camera");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void bind$lambda$1(Function3 function3, ChannelPromptActionsAccessory channelPromptActionsAccessory, View view) {
        function3.invoke(MessageId.m1086boximpl(channelPromptActionsAccessory.mo538getMessageId3Eiw7ao()), ChannelId.m1060boximpl(channelPromptActionsAccessory.getMessage().m236getChannelIdo4g7jtM()), "emoji");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void bind$lambda$2(Function3 function3, ChannelPromptActionsAccessory channelPromptActionsAccessory, View view) {
        function3.invoke(MessageId.m1086boximpl(channelPromptActionsAccessory.mo538getMessageId3Eiw7ao()), ChannelId.m1060boximpl(channelPromptActionsAccessory.getMessage().m236getChannelIdo4g7jtM()), "gaming-stats");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void bind$lambda$3(Function3 function3, ChannelPromptActionsAccessory channelPromptActionsAccessory, View view) {
        function3.invoke(MessageId.m1086boximpl(channelPromptActionsAccessory.mo538getMessageId3Eiw7ao()), ChannelId.m1060boximpl(channelPromptActionsAccessory.getMessage().m236getChannelIdo4g7jtM()), "gif");
    }

    public final void bind(@NotNull final ChannelPromptActionsAccessory accessory, @NotNull final Function3 onTapChannelPromptButton) {
        Intrinsics.checkNotNullParameter(accessory, "accessory");
        Intrinsics.checkNotNullParameter(onTapChannelPromptButton, "onTapChannelPromptButton");
        this.channelPromptActionsView.configure(accessory.getMessage(), new View.OnClickListener() { // from class: com.discord.chat.presentation.message.viewholder.f
            @Override // android.view.View.OnClickListener
            public final void onClick(View view) {
                ChannelPromptActionsViewHolder.bind$lambda$0(Function3.this, accessory, view);
            }
        }, new View.OnClickListener() { // from class: com.discord.chat.presentation.message.viewholder.g
            @Override // android.view.View.OnClickListener
            public final void onClick(View view) {
                ChannelPromptActionsViewHolder.bind$lambda$1(Function3.this, accessory, view);
            }
        }, new View.OnClickListener() { // from class: com.discord.chat.presentation.message.viewholder.h
            @Override // android.view.View.OnClickListener
            public final void onClick(View view) {
                ChannelPromptActionsViewHolder.bind$lambda$2(Function3.this, accessory, view);
            }
        }, new View.OnClickListener() { // from class: com.discord.chat.presentation.message.viewholder.i
            @Override // android.view.View.OnClickListener
            public final void onClick(View view) {
                ChannelPromptActionsViewHolder.bind$lambda$3(Function3.this, accessory, view);
            }
        });
    }
}
