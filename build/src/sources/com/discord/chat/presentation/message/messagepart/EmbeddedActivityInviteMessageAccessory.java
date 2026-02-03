package com.discord.chat.presentation.message.messagepart;

import com.discord.chat.bridge.codedlinks.EmbeddedActivityInviteEmbedImpl;
import com.discord.primitives.MessageId;
import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u00008\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0017\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010\u0000\n\u0002\b\u0002\n\u0002\u0010\u000e\n\u0000\b\u0086\b\u0018\u00002\u00020\u0001B/\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0005\u0012\u0006\u0010\u0006\u001a\u00020\u0007\u0012\u0006\u0010\b\u001a\u00020\t\u0012\u0006\u0010\n\u001a\u00020\u0007¢\u0006\u0004\b\u000b\u0010\fJ\u0010\u0010\u0017\u001a\u00020\u0003HÆ\u0003¢\u0006\u0004\b\u0018\u0010\u000eJ\t\u0010\u0019\u001a\u00020\u0005HÆ\u0003J\t\u0010\u001a\u001a\u00020\u0007HÆ\u0003J\t\u0010\u001b\u001a\u00020\tHÆ\u0003J\t\u0010\u001c\u001a\u00020\u0007HÆ\u0003JB\u0010\u001d\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\b\b\u0002\u0010\u0004\u001a\u00020\u00052\b\b\u0002\u0010\u0006\u001a\u00020\u00072\b\b\u0002\u0010\b\u001a\u00020\t2\b\b\u0002\u0010\n\u001a\u00020\u0007HÆ\u0001¢\u0006\u0004\b\u001e\u0010\u001fJ\u0013\u0010 \u001a\u00020!2\b\u0010\"\u001a\u0004\u0018\u00010#HÖ\u0003J\t\u0010$\u001a\u00020\u0007HÖ\u0001J\t\u0010%\u001a\u00020&HÖ\u0001R\u0016\u0010\u0002\u001a\u00020\u0003X\u0096\u0004¢\u0006\n\n\u0002\u0010\u000f\u001a\u0004\b\r\u0010\u000eR\u0011\u0010\u0004\u001a\u00020\u0005¢\u0006\b\n\u0000\u001a\u0004\b\u0010\u0010\u0011R\u0011\u0010\u0006\u001a\u00020\u0007¢\u0006\b\n\u0000\u001a\u0004\b\u0012\u0010\u0013R\u0011\u0010\b\u001a\u00020\t¢\u0006\b\n\u0000\u001a\u0004\b\u0014\u0010\u0015R\u0011\u0010\n\u001a\u00020\u0007¢\u0006\b\n\u0000\u001a\u0004\b\u0016\u0010\u0013¨\u0006'"}, d2 = {"Lcom/discord/chat/presentation/message/messagepart/EmbeddedActivityInviteMessageAccessory;", "Lcom/discord/chat/presentation/message/messagepart/MessageAccessory;", "messageId", "Lcom/discord/primitives/MessageId;", "margins", "Lcom/discord/chat/presentation/message/messagepart/MessageMargins;", "codedLinkIndex", "", "embeddedActivityInviteEmbed", "Lcom/discord/chat/bridge/codedlinks/EmbeddedActivityInviteEmbedImpl;", "constrainedWidth", "<init>", "(Ljava/lang/String;Lcom/discord/chat/presentation/message/messagepart/MessageMargins;ILcom/discord/chat/bridge/codedlinks/EmbeddedActivityInviteEmbedImpl;ILkotlin/jvm/internal/DefaultConstructorMarker;)V", "getMessageId-3Eiw7ao", "()Ljava/lang/String;", "Ljava/lang/String;", "getMargins", "()Lcom/discord/chat/presentation/message/messagepart/MessageMargins;", "getCodedLinkIndex", "()I", "getEmbeddedActivityInviteEmbed", "()Lcom/discord/chat/bridge/codedlinks/EmbeddedActivityInviteEmbedImpl;", "getConstrainedWidth", "component1", "component1-3Eiw7ao", "component2", "component3", "component4", "component5", "copy", "copy-pPZZVto", "(Ljava/lang/String;Lcom/discord/chat/presentation/message/messagepart/MessageMargins;ILcom/discord/chat/bridge/codedlinks/EmbeddedActivityInviteEmbedImpl;I)Lcom/discord/chat/presentation/message/messagepart/EmbeddedActivityInviteMessageAccessory;", "equals", "", "other", "", "hashCode", "toString", "", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class EmbeddedActivityInviteMessageAccessory extends MessageAccessory {
    private final int codedLinkIndex;
    private final int constrainedWidth;
    @NotNull
    private final EmbeddedActivityInviteEmbedImpl embeddedActivityInviteEmbed;
    @NotNull
    private final MessageMargins margins;
    @NotNull
    private final String messageId;

    public /* synthetic */ EmbeddedActivityInviteMessageAccessory(String str, MessageMargins messageMargins, int i10, EmbeddedActivityInviteEmbedImpl embeddedActivityInviteEmbedImpl, int i11, DefaultConstructorMarker defaultConstructorMarker) {
        this(str, messageMargins, i10, embeddedActivityInviteEmbedImpl, i11);
    }

    /* renamed from: copy-pPZZVto$default  reason: not valid java name */
    public static /* synthetic */ EmbeddedActivityInviteMessageAccessory m565copypPZZVto$default(EmbeddedActivityInviteMessageAccessory embeddedActivityInviteMessageAccessory, String str, MessageMargins messageMargins, int i10, EmbeddedActivityInviteEmbedImpl embeddedActivityInviteEmbedImpl, int i11, int i12, Object obj) {
        if ((i12 & 1) != 0) {
            str = embeddedActivityInviteMessageAccessory.messageId;
        }
        if ((i12 & 2) != 0) {
            messageMargins = embeddedActivityInviteMessageAccessory.margins;
        }
        if ((i12 & 4) != 0) {
            i10 = embeddedActivityInviteMessageAccessory.codedLinkIndex;
        }
        if ((i12 & 8) != 0) {
            embeddedActivityInviteEmbedImpl = embeddedActivityInviteMessageAccessory.embeddedActivityInviteEmbed;
        }
        if ((i12 & 16) != 0) {
            i11 = embeddedActivityInviteMessageAccessory.constrainedWidth;
        }
        int i13 = i11;
        int i14 = i10;
        return embeddedActivityInviteMessageAccessory.m567copypPZZVto(str, messageMargins, i14, embeddedActivityInviteEmbedImpl, i13);
    }

    @NotNull
    /* renamed from: component1-3Eiw7ao  reason: not valid java name */
    public final String m566component13Eiw7ao() {
        return this.messageId;
    }

    @NotNull
    public final MessageMargins component2() {
        return this.margins;
    }

    public final int component3() {
        return this.codedLinkIndex;
    }

    @NotNull
    public final EmbeddedActivityInviteEmbedImpl component4() {
        return this.embeddedActivityInviteEmbed;
    }

    public final int component5() {
        return this.constrainedWidth;
    }

    @NotNull
    /* renamed from: copy-pPZZVto  reason: not valid java name */
    public final EmbeddedActivityInviteMessageAccessory m567copypPZZVto(@NotNull String messageId, @NotNull MessageMargins margins, int i10, @NotNull EmbeddedActivityInviteEmbedImpl embeddedActivityInviteEmbed, int i11) {
        Intrinsics.checkNotNullParameter(messageId, "messageId");
        Intrinsics.checkNotNullParameter(margins, "margins");
        Intrinsics.checkNotNullParameter(embeddedActivityInviteEmbed, "embeddedActivityInviteEmbed");
        return new EmbeddedActivityInviteMessageAccessory(messageId, margins, i10, embeddedActivityInviteEmbed, i11, null);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof EmbeddedActivityInviteMessageAccessory) {
            EmbeddedActivityInviteMessageAccessory embeddedActivityInviteMessageAccessory = (EmbeddedActivityInviteMessageAccessory) obj;
            return MessageId.m1089equalsimpl0(this.messageId, embeddedActivityInviteMessageAccessory.messageId) && Intrinsics.areEqual(this.margins, embeddedActivityInviteMessageAccessory.margins) && this.codedLinkIndex == embeddedActivityInviteMessageAccessory.codedLinkIndex && Intrinsics.areEqual(this.embeddedActivityInviteEmbed, embeddedActivityInviteMessageAccessory.embeddedActivityInviteEmbed) && this.constrainedWidth == embeddedActivityInviteMessageAccessory.constrainedWidth;
        }
        return false;
    }

    public final int getCodedLinkIndex() {
        return this.codedLinkIndex;
    }

    public final int getConstrainedWidth() {
        return this.constrainedWidth;
    }

    @NotNull
    public final EmbeddedActivityInviteEmbedImpl getEmbeddedActivityInviteEmbed() {
        return this.embeddedActivityInviteEmbed;
    }

    @NotNull
    public final MessageMargins getMargins() {
        return this.margins;
    }

    @Override // com.discord.chat.presentation.message.messagepart.MessageAccessory
    @NotNull
    /* renamed from: getMessageId-3Eiw7ao */
    public String mo538getMessageId3Eiw7ao() {
        return this.messageId;
    }

    public int hashCode() {
        return (((((((MessageId.m1090hashCodeimpl(this.messageId) * 31) + this.margins.hashCode()) * 31) + Integer.hashCode(this.codedLinkIndex)) * 31) + this.embeddedActivityInviteEmbed.hashCode()) * 31) + Integer.hashCode(this.constrainedWidth);
    }

    @NotNull
    public String toString() {
        String m1092toStringimpl = MessageId.m1092toStringimpl(this.messageId);
        MessageMargins messageMargins = this.margins;
        int i10 = this.codedLinkIndex;
        EmbeddedActivityInviteEmbedImpl embeddedActivityInviteEmbedImpl = this.embeddedActivityInviteEmbed;
        int i11 = this.constrainedWidth;
        return "EmbeddedActivityInviteMessageAccessory(messageId=" + m1092toStringimpl + ", margins=" + messageMargins + ", codedLinkIndex=" + i10 + ", embeddedActivityInviteEmbed=" + embeddedActivityInviteEmbedImpl + ", constrainedWidth=" + i11 + ")";
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    private EmbeddedActivityInviteMessageAccessory(String messageId, MessageMargins margins, int i10, EmbeddedActivityInviteEmbedImpl embeddedActivityInviteEmbed, int i11) {
        super(messageId, "embedded activity invite " + i10, false, 4, null);
        Intrinsics.checkNotNullParameter(messageId, "messageId");
        Intrinsics.checkNotNullParameter(margins, "margins");
        Intrinsics.checkNotNullParameter(embeddedActivityInviteEmbed, "embeddedActivityInviteEmbed");
        this.messageId = messageId;
        this.margins = margins;
        this.codedLinkIndex = i10;
        this.embeddedActivityInviteEmbed = embeddedActivityInviteEmbed;
        this.constrainedWidth = i11;
    }
}
