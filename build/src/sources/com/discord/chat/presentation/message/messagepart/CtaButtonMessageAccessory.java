package com.discord.chat.presentation.message.messagepart;

import com.discord.chat.bridge.ctabutton.CtaButton;
import com.discord.primitives.ChannelId;
import com.discord.primitives.MessageId;
import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u00006\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0013\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\b\n\u0000\n\u0002\u0010\u000e\n\u0000\b\u0086\b\u0018\u00002\u00020\u0001B\u001f\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0005\u0012\u0006\u0010\u0006\u001a\u00020\u0007¢\u0006\u0004\b\b\u0010\tJ\u0010\u0010\u0012\u001a\u00020\u0003HÆ\u0003¢\u0006\u0004\b\u0013\u0010\u000bJ\u0010\u0010\u0014\u001a\u00020\u0005HÆ\u0003¢\u0006\u0004\b\u0015\u0010\u000eJ\t\u0010\u0016\u001a\u00020\u0007HÆ\u0003J.\u0010\u0017\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\b\b\u0002\u0010\u0004\u001a\u00020\u00052\b\b\u0002\u0010\u0006\u001a\u00020\u0007HÆ\u0001¢\u0006\u0004\b\u0018\u0010\u0019J\u0013\u0010\u001a\u001a\u00020\u001b2\b\u0010\u001c\u001a\u0004\u0018\u00010\u001dHÖ\u0003J\t\u0010\u001e\u001a\u00020\u001fHÖ\u0001J\t\u0010 \u001a\u00020!HÖ\u0001R\u0013\u0010\u0002\u001a\u00020\u0003¢\u0006\n\n\u0002\u0010\f\u001a\u0004\b\n\u0010\u000bR\u0016\u0010\u0004\u001a\u00020\u0005X\u0096\u0004¢\u0006\n\n\u0002\u0010\u000f\u001a\u0004\b\r\u0010\u000eR\u0011\u0010\u0006\u001a\u00020\u0007¢\u0006\b\n\u0000\u001a\u0004\b\u0010\u0010\u0011¨\u0006\""}, d2 = {"Lcom/discord/chat/presentation/message/messagepart/CtaButtonMessageAccessory;", "Lcom/discord/chat/presentation/message/messagepart/MessageAccessory;", "channelId", "Lcom/discord/primitives/ChannelId;", "messageId", "Lcom/discord/primitives/MessageId;", "ctaButton", "Lcom/discord/chat/bridge/ctabutton/CtaButton;", "<init>", "(JLjava/lang/String;Lcom/discord/chat/bridge/ctabutton/CtaButton;Lkotlin/jvm/internal/DefaultConstructorMarker;)V", "getChannelId-o4g7jtM", "()J", "J", "getMessageId-3Eiw7ao", "()Ljava/lang/String;", "Ljava/lang/String;", "getCtaButton", "()Lcom/discord/chat/bridge/ctabutton/CtaButton;", "component1", "component1-o4g7jtM", "component2", "component2-3Eiw7ao", "component3", "copy", "copy-sekaTiM", "(JLjava/lang/String;Lcom/discord/chat/bridge/ctabutton/CtaButton;)Lcom/discord/chat/presentation/message/messagepart/CtaButtonMessageAccessory;", "equals", "", "other", "", "hashCode", "", "toString", "", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class CtaButtonMessageAccessory extends MessageAccessory {
    private final long channelId;
    @NotNull
    private final CtaButton ctaButton;
    @NotNull
    private final String messageId;

    public /* synthetic */ CtaButtonMessageAccessory(long j10, String str, CtaButton ctaButton, DefaultConstructorMarker defaultConstructorMarker) {
        this(j10, str, ctaButton);
    }

    /* renamed from: copy-sekaTiM$default  reason: not valid java name */
    public static /* synthetic */ CtaButtonMessageAccessory m555copysekaTiM$default(CtaButtonMessageAccessory ctaButtonMessageAccessory, long j10, String str, CtaButton ctaButton, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            j10 = ctaButtonMessageAccessory.channelId;
        }
        if ((i10 & 2) != 0) {
            str = ctaButtonMessageAccessory.messageId;
        }
        if ((i10 & 4) != 0) {
            ctaButton = ctaButtonMessageAccessory.ctaButton;
        }
        return ctaButtonMessageAccessory.m558copysekaTiM(j10, str, ctaButton);
    }

    /* renamed from: component1-o4g7jtM  reason: not valid java name */
    public final long m556component1o4g7jtM() {
        return this.channelId;
    }

    @NotNull
    /* renamed from: component2-3Eiw7ao  reason: not valid java name */
    public final String m557component23Eiw7ao() {
        return this.messageId;
    }

    @NotNull
    public final CtaButton component3() {
        return this.ctaButton;
    }

    @NotNull
    /* renamed from: copy-sekaTiM  reason: not valid java name */
    public final CtaButtonMessageAccessory m558copysekaTiM(long j10, @NotNull String messageId, @NotNull CtaButton ctaButton) {
        Intrinsics.checkNotNullParameter(messageId, "messageId");
        Intrinsics.checkNotNullParameter(ctaButton, "ctaButton");
        return new CtaButtonMessageAccessory(j10, messageId, ctaButton, null);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof CtaButtonMessageAccessory) {
            CtaButtonMessageAccessory ctaButtonMessageAccessory = (CtaButtonMessageAccessory) obj;
            return ChannelId.m1063equalsimpl0(this.channelId, ctaButtonMessageAccessory.channelId) && MessageId.m1089equalsimpl0(this.messageId, ctaButtonMessageAccessory.messageId) && Intrinsics.areEqual(this.ctaButton, ctaButtonMessageAccessory.ctaButton);
        }
        return false;
    }

    /* renamed from: getChannelId-o4g7jtM  reason: not valid java name */
    public final long m559getChannelIdo4g7jtM() {
        return this.channelId;
    }

    @NotNull
    public final CtaButton getCtaButton() {
        return this.ctaButton;
    }

    @Override // com.discord.chat.presentation.message.messagepart.MessageAccessory
    @NotNull
    /* renamed from: getMessageId-3Eiw7ao */
    public String mo538getMessageId3Eiw7ao() {
        return this.messageId;
    }

    public int hashCode() {
        return (((ChannelId.m1064hashCodeimpl(this.channelId) * 31) + MessageId.m1090hashCodeimpl(this.messageId)) * 31) + this.ctaButton.hashCode();
    }

    @NotNull
    public String toString() {
        String m1066toStringimpl = ChannelId.m1066toStringimpl(this.channelId);
        String m1092toStringimpl = MessageId.m1092toStringimpl(this.messageId);
        CtaButton ctaButton = this.ctaButton;
        return "CtaButtonMessageAccessory(channelId=" + m1066toStringimpl + ", messageId=" + m1092toStringimpl + ", ctaButton=" + ctaButton + ")";
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    private CtaButtonMessageAccessory(long j10, String messageId, CtaButton ctaButton) {
        super(messageId, "cta button", false, 4, null);
        Intrinsics.checkNotNullParameter(messageId, "messageId");
        Intrinsics.checkNotNullParameter(ctaButton, "ctaButton");
        this.channelId = j10;
        this.messageId = messageId;
        this.ctaButton = ctaButton;
    }
}
