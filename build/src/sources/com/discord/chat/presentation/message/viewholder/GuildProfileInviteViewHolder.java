package com.discord.chat.presentation.message.viewholder;

import android.view.View;
import com.discord.chat.bridge.codedlinks.GuildProfileInviteEmbedImpl;
import com.discord.chat.presentation.events.ChatEventHandler;
import com.discord.chat.presentation.message.messagepart.GuildProfileInviteMessageAccessory;
import com.discord.chat.presentation.message.view.GuildProfileInviteView;
import kotlin.Metadata;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000$\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\u0018\u00002\u00020\u0001B\u000f\u0012\u0006\u0010\u0002\u001a\u00020\u0003¢\u0006\u0004\b\u0004\u0010\u0005J\u0016\u0010\u0006\u001a\u00020\u00072\u0006\u0010\b\u001a\u00020\t2\u0006\u0010\n\u001a\u00020\u000bR\u000e\u0010\u0002\u001a\u00020\u0003X\u0082\u0004¢\u0006\u0002\n\u0000¨\u0006\f"}, d2 = {"Lcom/discord/chat/presentation/message/viewholder/GuildProfileInviteViewHolder;", "Lcom/discord/chat/presentation/message/viewholder/MessagePartViewHolder;", "guildProfileInviteView", "Lcom/discord/chat/presentation/message/view/GuildProfileInviteView;", "<init>", "(Lcom/discord/chat/presentation/message/view/GuildProfileInviteView;)V", "bind", "", "inviteAccessory", "Lcom/discord/chat/presentation/message/messagepart/GuildProfileInviteMessageAccessory;", "eventHandler", "Lcom/discord/chat/presentation/events/ChatEventHandler;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class GuildProfileInviteViewHolder extends MessagePartViewHolder {
    @NotNull
    private final GuildProfileInviteView guildProfileInviteView;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public GuildProfileInviteViewHolder(@NotNull GuildProfileInviteView guildProfileInviteView) {
        super(guildProfileInviteView, null);
        Intrinsics.checkNotNullParameter(guildProfileInviteView, "guildProfileInviteView");
        this.guildProfileInviteView = guildProfileInviteView;
    }

    public final void bind(@NotNull GuildProfileInviteMessageAccessory inviteAccessory, @NotNull final ChatEventHandler eventHandler) {
        boolean z10;
        Intrinsics.checkNotNullParameter(inviteAccessory, "inviteAccessory");
        Intrinsics.checkNotNullParameter(eventHandler, "eventHandler");
        GuildProfileInviteEmbedImpl invite = inviteAccessory.getInvite();
        final String mo536getMessageId3Eiw7ao = inviteAccessory.mo536getMessageId3Eiw7ao();
        final int codedLinkIndex = inviteAccessory.getCodedLinkIndex();
        GuildProfileInviteView guildProfileInviteView = this.guildProfileInviteView;
        guildProfileInviteView.setHeader(invite.getHeaderText());
        String inviteSplash = invite.getInviteSplash();
        int bannerColor = invite.getBannerColor();
        int bannerColorSecondary = invite.getBannerColorSecondary();
        if (invite.getHeaderText() == null) {
            z10 = true;
        } else {
            z10 = false;
        }
        guildProfileInviteView.setBanner(inviteSplash, bannerColor, bannerColorSecondary, z10);
        guildProfileInviteView.setAvatar(invite.getThumbnailUrl(), invite.getThumbnailText());
        guildProfileInviteView.setTitle(invite.getTitleText());
        guildProfileInviteView.setGuildBadge(invite.getBadgeIconUrl());
        guildProfileInviteView.setPresence(invite.getOnlineText(), invite.getMemberText());
        guildProfileInviteView.setEstablished(invite.getEstablishedText());
        guildProfileInviteView.setBody(invite.getBodyText(), invite.getHasProfileOverflow());
        guildProfileInviteView.setRoles(invite.getRoles(), invite.getRolesHeadingText());
        guildProfileInviteView.setAcceptButton(invite.getAcceptLabelText(), invite.getAcceptLabelBackgroundColor());
        guildProfileInviteView.setClickListeners(new View.OnClickListener() { // from class: com.discord.chat.presentation.message.viewholder.u
            @Override // android.view.View.OnClickListener
            public final void onClick(View view) {
                ChatEventHandler.this.mo462onTapInviteEmbedAFFcxXc(mo536getMessageId3Eiw7ao, codedLinkIndex, null, null);
            }
        }, new View.OnClickListener() { // from class: com.discord.chat.presentation.message.viewholder.v
            @Override // android.view.View.OnClickListener
            public final void onClick(View view) {
                ChatEventHandler.this.mo463onTapInviteEmbedAcceptntcYbpo(mo536getMessageId3Eiw7ao, codedLinkIndex);
            }
        });
    }
}
