package com.discord.chat.presentation.message.messagepart;

import com.discord.chat.bridge.codedlinks.GuildEventInviteEmbedImpl;
import com.discord.primitives.MessageId;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u00008\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000b\n\u0002\b!\n\u0002\u0010\u0000\n\u0002\b\u0002\n\u0002\u0010\u000e\n\u0000\b\u0086\b\u0018\u00002\u00020\u0001BG\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0005\u0012\u0006\u0010\u0006\u001a\u00020\u0007\u0012\u0006\u0010\b\u001a\u00020\t\u0012\u0006\u0010\n\u001a\u00020\u000b\u0012\u0006\u0010\f\u001a\u00020\u000b\u0012\u0006\u0010\r\u001a\u00020\u000b\u0012\u0006\u0010\u000e\u001a\u00020\u000b¢\u0006\u0004\b\u000f\u0010\u0010J\u0010\u0010\u001f\u001a\u00020\u0003HÆ\u0003¢\u0006\u0004\b \u0010\u0012J\t\u0010!\u001a\u00020\u0005HÆ\u0003J\t\u0010\"\u001a\u00020\u0007HÆ\u0003J\t\u0010#\u001a\u00020\tHÆ\u0003J\t\u0010$\u001a\u00020\u000bHÆ\u0003J\t\u0010%\u001a\u00020\u000bHÆ\u0003J\t\u0010&\u001a\u00020\u000bHÆ\u0003J\t\u0010'\u001a\u00020\u000bHÆ\u0003J`\u0010(\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\b\b\u0002\u0010\u0004\u001a\u00020\u00052\b\b\u0002\u0010\u0006\u001a\u00020\u00072\b\b\u0002\u0010\b\u001a\u00020\t2\b\b\u0002\u0010\n\u001a\u00020\u000b2\b\b\u0002\u0010\f\u001a\u00020\u000b2\b\b\u0002\u0010\r\u001a\u00020\u000b2\b\b\u0002\u0010\u000e\u001a\u00020\u000bHÆ\u0001¢\u0006\u0004\b)\u0010*J\u0013\u0010+\u001a\u00020\u000b2\b\u0010,\u001a\u0004\u0018\u00010-HÖ\u0003J\t\u0010.\u001a\u00020\u0007HÖ\u0001J\t\u0010/\u001a\u000200HÖ\u0001R\u0016\u0010\u0002\u001a\u00020\u0003X\u0096\u0004¢\u0006\n\n\u0002\u0010\u0013\u001a\u0004\b\u0011\u0010\u0012R\u0011\u0010\u0004\u001a\u00020\u0005¢\u0006\b\n\u0000\u001a\u0004\b\u0014\u0010\u0015R\u0011\u0010\u0006\u001a\u00020\u0007¢\u0006\b\n\u0000\u001a\u0004\b\u0016\u0010\u0017R\u0011\u0010\b\u001a\u00020\t¢\u0006\b\n\u0000\u001a\u0004\b\u0018\u0010\u0019R\u0011\u0010\n\u001a\u00020\u000b¢\u0006\b\n\u0000\u001a\u0004\b\u001a\u0010\u001bR\u0011\u0010\f\u001a\u00020\u000b¢\u0006\b\n\u0000\u001a\u0004\b\u001c\u0010\u001bR\u0011\u0010\r\u001a\u00020\u000b¢\u0006\b\n\u0000\u001a\u0004\b\u001d\u0010\u001bR\u0011\u0010\u000e\u001a\u00020\u000b¢\u0006\b\n\u0000\u001a\u0004\b\u001e\u0010\u001b¨\u00061"}, d2 = {"Lcom/discord/chat/presentation/message/messagepart/GuildEventInviteMessageAccessory;", "Lcom/discord/chat/presentation/message/messagepart/MessageAccessory;", "messageId", "Lcom/discord/primitives/MessageId;", "margins", "Lcom/discord/chat/presentation/message/messagepart/MessageMargins;", "codedLinkIndex", "", "invite", "Lcom/discord/chat/bridge/codedlinks/GuildEventInviteEmbedImpl;", "shouldAnimateEmoji", "", "shouldShowLinkDecorations", "shouldShowRoleDot", "shouldShowRoleOnName", "<init>", "(Ljava/lang/String;Lcom/discord/chat/presentation/message/messagepart/MessageMargins;ILcom/discord/chat/bridge/codedlinks/GuildEventInviteEmbedImpl;ZZZZLkotlin/jvm/internal/DefaultConstructorMarker;)V", "getMessageId-3Eiw7ao", "()Ljava/lang/String;", "Ljava/lang/String;", "getMargins", "()Lcom/discord/chat/presentation/message/messagepart/MessageMargins;", "getCodedLinkIndex", "()I", "getInvite", "()Lcom/discord/chat/bridge/codedlinks/GuildEventInviteEmbedImpl;", "getShouldAnimateEmoji", "()Z", "getShouldShowLinkDecorations", "getShouldShowRoleDot", "getShouldShowRoleOnName", "component1", "component1-3Eiw7ao", "component2", "component3", "component4", "component5", "component6", "component7", "component8", "copy", "copy-NsYpSCE", "(Ljava/lang/String;Lcom/discord/chat/presentation/message/messagepart/MessageMargins;ILcom/discord/chat/bridge/codedlinks/GuildEventInviteEmbedImpl;ZZZZ)Lcom/discord/chat/presentation/message/messagepart/GuildEventInviteMessageAccessory;", "equals", "other", "", "hashCode", "toString", "", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class GuildEventInviteMessageAccessory extends MessageAccessory {
    private final int codedLinkIndex;
    @NotNull
    private final GuildEventInviteEmbedImpl invite;
    @NotNull
    private final MessageMargins margins;
    @NotNull
    private final String messageId;
    private final boolean shouldAnimateEmoji;
    private final boolean shouldShowLinkDecorations;
    private final boolean shouldShowRoleDot;
    private final boolean shouldShowRoleOnName;

    public /* synthetic */ GuildEventInviteMessageAccessory(String str, MessageMargins messageMargins, int i10, GuildEventInviteEmbedImpl guildEventInviteEmbedImpl, boolean z10, boolean z11, boolean z12, boolean z13, DefaultConstructorMarker defaultConstructorMarker) {
        this(str, messageMargins, i10, guildEventInviteEmbedImpl, z10, z11, z12, z13);
    }

    /* renamed from: copy-NsYpSCE$default  reason: not valid java name */
    public static /* synthetic */ GuildEventInviteMessageAccessory m594copyNsYpSCE$default(GuildEventInviteMessageAccessory guildEventInviteMessageAccessory, String str, MessageMargins messageMargins, int i10, GuildEventInviteEmbedImpl guildEventInviteEmbedImpl, boolean z10, boolean z11, boolean z12, boolean z13, int i11, Object obj) {
        if ((i11 & 1) != 0) {
            str = guildEventInviteMessageAccessory.messageId;
        }
        if ((i11 & 2) != 0) {
            messageMargins = guildEventInviteMessageAccessory.margins;
        }
        if ((i11 & 4) != 0) {
            i10 = guildEventInviteMessageAccessory.codedLinkIndex;
        }
        if ((i11 & 8) != 0) {
            guildEventInviteEmbedImpl = guildEventInviteMessageAccessory.invite;
        }
        if ((i11 & 16) != 0) {
            z10 = guildEventInviteMessageAccessory.shouldAnimateEmoji;
        }
        if ((i11 & 32) != 0) {
            z11 = guildEventInviteMessageAccessory.shouldShowLinkDecorations;
        }
        if ((i11 & 64) != 0) {
            z12 = guildEventInviteMessageAccessory.shouldShowRoleDot;
        }
        if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
            z13 = guildEventInviteMessageAccessory.shouldShowRoleOnName;
        }
        boolean z14 = z12;
        boolean z15 = z13;
        boolean z16 = z10;
        boolean z17 = z11;
        return guildEventInviteMessageAccessory.m596copyNsYpSCE(str, messageMargins, i10, guildEventInviteEmbedImpl, z16, z17, z14, z15);
    }

    @NotNull
    /* renamed from: component1-3Eiw7ao  reason: not valid java name */
    public final String m595component13Eiw7ao() {
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
    public final GuildEventInviteEmbedImpl component4() {
        return this.invite;
    }

    public final boolean component5() {
        return this.shouldAnimateEmoji;
    }

    public final boolean component6() {
        return this.shouldShowLinkDecorations;
    }

    public final boolean component7() {
        return this.shouldShowRoleDot;
    }

    public final boolean component8() {
        return this.shouldShowRoleOnName;
    }

    @NotNull
    /* renamed from: copy-NsYpSCE  reason: not valid java name */
    public final GuildEventInviteMessageAccessory m596copyNsYpSCE(@NotNull String messageId, @NotNull MessageMargins margins, int i10, @NotNull GuildEventInviteEmbedImpl invite, boolean z10, boolean z11, boolean z12, boolean z13) {
        Intrinsics.checkNotNullParameter(messageId, "messageId");
        Intrinsics.checkNotNullParameter(margins, "margins");
        Intrinsics.checkNotNullParameter(invite, "invite");
        return new GuildEventInviteMessageAccessory(messageId, margins, i10, invite, z10, z11, z12, z13, null);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof GuildEventInviteMessageAccessory) {
            GuildEventInviteMessageAccessory guildEventInviteMessageAccessory = (GuildEventInviteMessageAccessory) obj;
            return MessageId.m1089equalsimpl0(this.messageId, guildEventInviteMessageAccessory.messageId) && Intrinsics.areEqual(this.margins, guildEventInviteMessageAccessory.margins) && this.codedLinkIndex == guildEventInviteMessageAccessory.codedLinkIndex && Intrinsics.areEqual(this.invite, guildEventInviteMessageAccessory.invite) && this.shouldAnimateEmoji == guildEventInviteMessageAccessory.shouldAnimateEmoji && this.shouldShowLinkDecorations == guildEventInviteMessageAccessory.shouldShowLinkDecorations && this.shouldShowRoleDot == guildEventInviteMessageAccessory.shouldShowRoleDot && this.shouldShowRoleOnName == guildEventInviteMessageAccessory.shouldShowRoleOnName;
        }
        return false;
    }

    public final int getCodedLinkIndex() {
        return this.codedLinkIndex;
    }

    @NotNull
    public final GuildEventInviteEmbedImpl getInvite() {
        return this.invite;
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

    public final boolean getShouldAnimateEmoji() {
        return this.shouldAnimateEmoji;
    }

    public final boolean getShouldShowLinkDecorations() {
        return this.shouldShowLinkDecorations;
    }

    public final boolean getShouldShowRoleDot() {
        return this.shouldShowRoleDot;
    }

    public final boolean getShouldShowRoleOnName() {
        return this.shouldShowRoleOnName;
    }

    public int hashCode() {
        return (((((((((((((MessageId.m1090hashCodeimpl(this.messageId) * 31) + this.margins.hashCode()) * 31) + Integer.hashCode(this.codedLinkIndex)) * 31) + this.invite.hashCode()) * 31) + Boolean.hashCode(this.shouldAnimateEmoji)) * 31) + Boolean.hashCode(this.shouldShowLinkDecorations)) * 31) + Boolean.hashCode(this.shouldShowRoleDot)) * 31) + Boolean.hashCode(this.shouldShowRoleOnName);
    }

    @NotNull
    public String toString() {
        String m1092toStringimpl = MessageId.m1092toStringimpl(this.messageId);
        MessageMargins messageMargins = this.margins;
        int i10 = this.codedLinkIndex;
        GuildEventInviteEmbedImpl guildEventInviteEmbedImpl = this.invite;
        boolean z10 = this.shouldAnimateEmoji;
        boolean z11 = this.shouldShowLinkDecorations;
        boolean z12 = this.shouldShowRoleDot;
        boolean z13 = this.shouldShowRoleOnName;
        return "GuildEventInviteMessageAccessory(messageId=" + m1092toStringimpl + ", margins=" + messageMargins + ", codedLinkIndex=" + i10 + ", invite=" + guildEventInviteEmbedImpl + ", shouldAnimateEmoji=" + z10 + ", shouldShowLinkDecorations=" + z11 + ", shouldShowRoleDot=" + z12 + ", shouldShowRoleOnName=" + z13 + ")";
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    private GuildEventInviteMessageAccessory(String messageId, MessageMargins margins, int i10, GuildEventInviteEmbedImpl invite, boolean z10, boolean z11, boolean z12, boolean z13) {
        super(messageId, "guild scheduled event invite " + i10, false, 4, null);
        Intrinsics.checkNotNullParameter(messageId, "messageId");
        Intrinsics.checkNotNullParameter(margins, "margins");
        Intrinsics.checkNotNullParameter(invite, "invite");
        this.messageId = messageId;
        this.margins = margins;
        this.codedLinkIndex = i10;
        this.invite = invite;
        this.shouldAnimateEmoji = z10;
        this.shouldShowLinkDecorations = z11;
        this.shouldShowRoleDot = z12;
        this.shouldShowRoleOnName = z13;
    }
}
