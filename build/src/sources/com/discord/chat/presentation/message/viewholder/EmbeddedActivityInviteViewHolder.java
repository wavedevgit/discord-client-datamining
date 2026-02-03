package com.discord.chat.presentation.message.viewholder;

import android.view.View;
import com.discord.chat.bridge.codedlinks.EmbeddedActivityInviteEmbedImpl;
import com.discord.chat.presentation.events.ChatEventHandler;
import com.discord.chat.presentation.message.messagepart.EmbeddedActivityInviteMessageAccessory;
import com.discord.chat.presentation.message.view.EmbeddedActivityInviteView;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000$\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0005\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\u0018\u00002\u00020\u0001B\u0017\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0005¢\u0006\u0004\b\u0006\u0010\u0007J\u000e\u0010\n\u001a\u00020\u000b2\u0006\u0010\f\u001a\u00020\rR\u000e\u0010\u0002\u001a\u00020\u0003X\u0082\u0004¢\u0006\u0002\n\u0000R\u0011\u0010\u0004\u001a\u00020\u0005¢\u0006\b\n\u0000\u001a\u0004\b\b\u0010\t¨\u0006\u000e"}, d2 = {"Lcom/discord/chat/presentation/message/viewholder/EmbeddedActivityInviteViewHolder;", "Lcom/discord/chat/presentation/message/viewholder/MessagePartViewHolder;", "embeddedActivityInviteView", "Lcom/discord/chat/presentation/message/view/EmbeddedActivityInviteView;", "eventHandler", "Lcom/discord/chat/presentation/events/ChatEventHandler;", "<init>", "(Lcom/discord/chat/presentation/message/view/EmbeddedActivityInviteView;Lcom/discord/chat/presentation/events/ChatEventHandler;)V", "getEventHandler", "()Lcom/discord/chat/presentation/events/ChatEventHandler;", "bind", "", "embeddedActivityInviteAccessory", "Lcom/discord/chat/presentation/message/messagepart/EmbeddedActivityInviteMessageAccessory;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class EmbeddedActivityInviteViewHolder extends MessagePartViewHolder {
    @NotNull
    private final EmbeddedActivityInviteView embeddedActivityInviteView;
    @NotNull
    private final ChatEventHandler eventHandler;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public EmbeddedActivityInviteViewHolder(@NotNull EmbeddedActivityInviteView embeddedActivityInviteView, @NotNull ChatEventHandler eventHandler) {
        super(embeddedActivityInviteView, null);
        Intrinsics.checkNotNullParameter(embeddedActivityInviteView, "embeddedActivityInviteView");
        Intrinsics.checkNotNullParameter(eventHandler, "eventHandler");
        this.embeddedActivityInviteView = embeddedActivityInviteView;
        this.eventHandler = eventHandler;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void bind$lambda$2$lambda$1(EmbeddedActivityInviteViewHolder embeddedActivityInviteViewHolder, EmbeddedActivityInviteMessageAccessory embeddedActivityInviteMessageAccessory, View view) {
        embeddedActivityInviteViewHolder.eventHandler.mo464onTapInviteEmbedAFFcxXc(embeddedActivityInviteMessageAccessory.mo538getMessageId3Eiw7ao(), embeddedActivityInviteMessageAccessory.getCodedLinkIndex(), null, null);
    }

    public final void bind(@NotNull final EmbeddedActivityInviteMessageAccessory embeddedActivityInviteAccessory) {
        Intrinsics.checkNotNullParameter(embeddedActivityInviteAccessory, "embeddedActivityInviteAccessory");
        EmbeddedActivityInviteEmbedImpl embeddedActivityInviteEmbed = embeddedActivityInviteAccessory.getEmbeddedActivityInviteEmbed();
        EmbeddedActivityInviteView embeddedActivityInviteView = this.embeddedActivityInviteView;
        embeddedActivityInviteView.setSplash(embeddedActivityInviteAccessory.getMargins(), embeddedActivityInviteEmbed.getSplashUrl(), embeddedActivityInviteAccessory.getConstrainedWidth());
        embeddedActivityInviteView.setTitleText(embeddedActivityInviteEmbed.getTitleText());
        embeddedActivityInviteView.setHeaderText(embeddedActivityInviteEmbed.getHeaderText());
        embeddedActivityInviteView.m691setSubtitleText2dg2Uz0(embeddedActivityInviteAccessory.getMargins(), embeddedActivityInviteEmbed.getStructurableSubtitleText(), embeddedActivityInviteAccessory.mo538getMessageId3Eiw7ao(), new EmbeddedActivityInviteViewHolder$bind$1$1(this.eventHandler), new EmbeddedActivityInviteViewHolder$bind$1$2(this.eventHandler), new EmbeddedActivityInviteViewHolder$bind$1$3(this.eventHandler), new EmbeddedActivityInviteViewHolder$bind$1$4(this.eventHandler), new EmbeddedActivityInviteViewHolder$bind$1$5(this.eventHandler), new EmbeddedActivityInviteViewHolder$bind$1$6(this.eventHandler), new EmbeddedActivityInviteViewHolder$bind$1$7(this.eventHandler), new EmbeddedActivityInviteViewHolder$bind$1$8(this.eventHandler), new EmbeddedActivityInviteViewHolder$bind$1$9(this.eventHandler), new Function0() { // from class: com.discord.chat.presentation.message.viewholder.j
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit unit;
                unit = Unit.f33074a;
                return unit;
            }
        }, new EmbeddedActivityInviteViewHolder$bind$1$10(this.eventHandler), new EmbeddedActivityInviteViewHolder$bind$1$11(this.eventHandler), new EmbeddedActivityInviteViewHolder$bind$1$12(this.eventHandler), new EmbeddedActivityInviteViewHolder$bind$1$13(this.eventHandler), new EmbeddedActivityInviteViewHolder$bind$1$14(this.eventHandler));
        embeddedActivityInviteView.setNoParticipantsText(embeddedActivityInviteEmbed.getNoParticipantsText());
        embeddedActivityInviteView.setLaunchButton(embeddedActivityInviteEmbed.getAcceptLabelText(), embeddedActivityInviteEmbed.getAcceptLabelBackgroundColor(), embeddedActivityInviteEmbed.getCtaEnabled());
        embeddedActivityInviteView.setAvatarUris(embeddedActivityInviteEmbed.getParticipantAvatarUris());
        embeddedActivityInviteView.setOnLaunchButtonClickListener(new View.OnClickListener() { // from class: com.discord.chat.presentation.message.viewholder.k
            @Override // android.view.View.OnClickListener
            public final void onClick(View view) {
                EmbeddedActivityInviteViewHolder.bind$lambda$2$lambda$1(EmbeddedActivityInviteViewHolder.this, embeddedActivityInviteAccessory, view);
            }
        });
    }

    @NotNull
    public final ChatEventHandler getEventHandler() {
        return this.eventHandler;
    }
}
