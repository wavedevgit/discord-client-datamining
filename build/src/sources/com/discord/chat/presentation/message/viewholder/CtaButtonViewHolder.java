package com.discord.chat.presentation.message.viewholder;

import com.discord.chat.bridge.ctabutton.CtaButton;
import com.discord.chat.presentation.message.view.CtaButtonView;
import kotlin.Metadata;
import kotlin.jvm.functions.Function3;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u00002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\u0010\u000e\n\u0002\u0010\u0002\n\u0002\b\u0006\u0018\u00002\u00020\u0001B\u000f\u0012\u0006\u0010\u0003\u001a\u00020\u0002¢\u0006\u0004\b\u0004\u0010\u0005JE\u0010\u0012\u001a\u00020\u000e2\u0006\u0010\u0007\u001a\u00020\u00062\u0006\u0010\t\u001a\u00020\b2\u0006\u0010\u000b\u001a\u00020\n2\u001e\u0010\u000f\u001a\u001a\u0012\u0004\u0012\u00020\u0006\u0012\u0004\u0012\u00020\b\u0012\u0004\u0012\u00020\r\u0012\u0004\u0012\u00020\u000e0\f¢\u0006\u0004\b\u0010\u0010\u0011R\u0014\u0010\u0003\u001a\u00020\u00028\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0003\u0010\u0013¨\u0006\u0014"}, d2 = {"Lcom/discord/chat/presentation/message/viewholder/CtaButtonViewHolder;", "Lcom/discord/chat/presentation/message/viewholder/MessagePartViewHolder;", "Lcom/discord/chat/presentation/message/view/CtaButtonView;", "ctaButtonView", "<init>", "(Lcom/discord/chat/presentation/message/view/CtaButtonView;)V", "Lcom/discord/primitives/ChannelId;", "channelId", "Lcom/discord/primitives/MessageId;", "messageId", "Lcom/discord/chat/bridge/ctabutton/CtaButton;", "accessory", "Lkotlin/Function3;", "", "", "onTapCtaButton", "bind-JjTCmh4", "(JLjava/lang/String;Lcom/discord/chat/bridge/ctabutton/CtaButton;Lkotlin/jvm/functions/Function3;)V", "bind", "Lcom/discord/chat/presentation/message/view/CtaButtonView;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class CtaButtonViewHolder extends MessagePartViewHolder {
    @NotNull
    private final CtaButtonView ctaButtonView;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public CtaButtonViewHolder(@NotNull CtaButtonView ctaButtonView) {
        super(ctaButtonView, null);
        Intrinsics.checkNotNullParameter(ctaButtonView, "ctaButtonView");
        this.ctaButtonView = ctaButtonView;
    }

    /* renamed from: bind-JjTCmh4  reason: not valid java name */
    public final void m720bindJjTCmh4(long j10, @NotNull String messageId, @NotNull CtaButton accessory, @NotNull Function3 onTapCtaButton) {
        Intrinsics.checkNotNullParameter(messageId, "messageId");
        Intrinsics.checkNotNullParameter(accessory, "accessory");
        Intrinsics.checkNotNullParameter(onTapCtaButton, "onTapCtaButton");
        this.ctaButtonView.m688setContentP6jPPyA(j10, messageId, accessory.getText(), accessory.getTextColor(), accessory.getBackgroundColor(), accessory.getCallback(), onTapCtaButton);
    }
}
