package com.discord.chat.presentation.message.viewholder;

import android.view.View;
import com.discord.chat.bridge.codedlinks.GuildInviteEmbedImpl;
import com.discord.chat.presentation.events.ChatEventHandler;
import com.discord.chat.presentation.message.messagepart.GuildInviteMessageAccessory;
import com.discord.chat.presentation.message.view.GuildInviteView;
import kotlin.Metadata;
import kotlin.jvm.internal.Intrinsics;
import kotlin.text.StringsKt;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000$\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0005\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\u0018\u00002\u00020\u0001B\u0017\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0005¢\u0006\u0004\b\u0006\u0010\u0007J\u000e\u0010\n\u001a\u00020\u000b2\u0006\u0010\f\u001a\u00020\rR\u000e\u0010\u0002\u001a\u00020\u0003X\u0082\u0004¢\u0006\u0002\n\u0000R\u0011\u0010\u0004\u001a\u00020\u0005¢\u0006\b\n\u0000\u001a\u0004\b\b\u0010\t¨\u0006\u000e"}, d2 = {"Lcom/discord/chat/presentation/message/viewholder/GuildInviteViewHolder;", "Lcom/discord/chat/presentation/message/viewholder/MessagePartViewHolder;", "guildInviteView", "Lcom/discord/chat/presentation/message/view/GuildInviteView;", "eventHandler", "Lcom/discord/chat/presentation/events/ChatEventHandler;", "<init>", "(Lcom/discord/chat/presentation/message/view/GuildInviteView;Lcom/discord/chat/presentation/events/ChatEventHandler;)V", "getEventHandler", "()Lcom/discord/chat/presentation/events/ChatEventHandler;", "bind", "", "inviteAccessory", "Lcom/discord/chat/presentation/message/messagepart/GuildInviteMessageAccessory;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class GuildInviteViewHolder extends MessagePartViewHolder {
    @NotNull
    private final ChatEventHandler eventHandler;
    @NotNull
    private final GuildInviteView guildInviteView;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public GuildInviteViewHolder(@NotNull GuildInviteView guildInviteView, @NotNull ChatEventHandler eventHandler) {
        super(guildInviteView, null);
        Intrinsics.checkNotNullParameter(guildInviteView, "guildInviteView");
        Intrinsics.checkNotNullParameter(eventHandler, "eventHandler");
        this.guildInviteView = guildInviteView;
        this.eventHandler = eventHandler;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void bind$lambda$2$lambda$0(GuildInviteViewHolder guildInviteViewHolder, GuildInviteMessageAccessory guildInviteMessageAccessory, View view) {
        guildInviteViewHolder.eventHandler.mo464onTapInviteEmbedAFFcxXc(guildInviteMessageAccessory.mo538getMessageId3Eiw7ao(), guildInviteMessageAccessory.getCodedLinkIndex(), null, null);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void bind$lambda$2$lambda$1(GuildInviteViewHolder guildInviteViewHolder, GuildInviteMessageAccessory guildInviteMessageAccessory, View view) {
        guildInviteViewHolder.eventHandler.mo465onTapInviteEmbedAcceptntcYbpo(guildInviteMessageAccessory.mo538getMessageId3Eiw7ao(), guildInviteMessageAccessory.getCodedLinkIndex());
    }

    public final void bind(@NotNull final GuildInviteMessageAccessory inviteAccessory) {
        String str;
        Intrinsics.checkNotNullParameter(inviteAccessory, "inviteAccessory");
        GuildInviteEmbedImpl invite = inviteAccessory.getInvite();
        GuildInviteView guildInviteView = this.guildInviteView;
        String subtitle = invite.getSubtitle();
        if (subtitle != null && !StringsKt.k0(subtitle)) {
            str = invite.getSubtitle();
        } else {
            String channelIcon = invite.getChannelIcon();
            if (channelIcon != null && !StringsKt.k0(channelIcon)) {
                str = invite.getChannelName();
            } else {
                str = null;
            }
        }
        guildInviteView.setInviteSplash(invite.getInviteSplash());
        guildInviteView.setHeaderText(invite.getHeaderText());
        guildInviteView.setHeaderColor(Integer.valueOf(invite.getHeaderColor()));
        guildInviteView.setTitleText(invite.getTitleText());
        guildInviteView.setGuildBadge(invite.getBadgeIconUrl());
        guildInviteView.setTitleColor(invite.getTitleColor());
        guildInviteView.setPresence(invite.getOnlineText(), invite.getMemberText());
        guildInviteView.setGuildImage(invite.getThumbnailUrl(), invite.getThumbnailText(), invite.getThumbnailBackgroundColor(), invite.getThumbnailCornerRadius());
        guildInviteView.setSubtitle(str);
        guildInviteView.setSubtitleColor(invite.getSubtitleColor());
        guildInviteView.setSubtitleIcon(invite.getChannelIcon());
        guildInviteView.setClickListeners(invite.getCanBeAccepted(), new View.OnClickListener() { // from class: com.discord.chat.presentation.message.viewholder.s
            @Override // android.view.View.OnClickListener
            public final void onClick(View view) {
                GuildInviteViewHolder.bind$lambda$2$lambda$0(GuildInviteViewHolder.this, inviteAccessory, view);
            }
        }, new View.OnClickListener() { // from class: com.discord.chat.presentation.message.viewholder.t
            @Override // android.view.View.OnClickListener
            public final void onClick(View view) {
                GuildInviteViewHolder.bind$lambda$2$lambda$1(GuildInviteViewHolder.this, inviteAccessory, view);
            }
        });
        guildInviteView.setButtonText(invite.getAcceptLabelText());
        guildInviteView.setButtonTextColor(invite.getAcceptLabelColor());
        guildInviteView.setButtonBackgroundColor(invite.getAcceptLabelBackgroundColor());
        guildInviteView.setBackgroundRectangleColor(Integer.valueOf(invite.getBackgroundColor()));
    }

    @NotNull
    public final ChatEventHandler getEventHandler() {
        return this.eventHandler;
    }
}
