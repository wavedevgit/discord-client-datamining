package com.discord.chat.presentation.message.messagepart;

import androidx.recyclerview.widget.RecyclerView;
import com.discord.chat.bridge.structurabletext.StructurableText;
import com.discord.chat.bridge.truncation.Truncation;
import com.discord.fonts.DiscordFont;
import com.discord.primitives.MessageId;
import com.discord.theme.DiscordThemeObject;
import com.discord.theme.ThemeManagerKt;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
import org.webrtc.PeerConnection;
@Metadata(d1 = {"\u0000R\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000b\n\u0002\b\u0004\n\u0002\u0010\b\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0010\u000e\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b8\n\u0002\u0010\u0000\n\u0002\b\u0003\b\u0086\b\u0018\u00002\u00020\u0001B«\u0001\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0005\u0012\u0006\u0010\u0006\u001a\u00020\u0007\u0012\u0006\u0010\b\u001a\u00020\t\u0012\u0006\u0010\n\u001a\u00020\t\u0012\u0006\u0010\u000b\u001a\u00020\t\u0012\u0006\u0010\f\u001a\u00020\t\u0012\u0006\u0010\r\u001a\u00020\u000e\u0012\b\b\u0001\u0010\u000f\u001a\u00020\u000e\u0012\u0006\u0010\u0010\u001a\u00020\u000e\u0012\u0006\u0010\u0011\u001a\u00020\u0012\u0012\u0006\u0010\u0013\u001a\u00020\u000e\u0012\u0006\u0010\u0014\u001a\u00020\t\u0012\u0006\u0010\u0015\u001a\u00020\u000e\u0012\b\u0010\u0016\u001a\u0004\u0018\u00010\u0017\u0012\b\u0010\u0018\u001a\u0004\u0018\u00010\u000e\u0012\u0006\u0010\u0019\u001a\u00020\t\u0012\n\b\u0002\u0010\u001a\u001a\u0004\u0018\u00010\u001b\u0012\b\b\u0002\u0010\u001c\u001a\u00020\u001d¢\u0006\u0004\b\u001e\u0010\u001fJ\u0010\u0010=\u001a\u00020\u0003HÆ\u0003¢\u0006\u0004\b>\u0010!J\t\u0010?\u001a\u00020\u0005HÆ\u0003J\t\u0010@\u001a\u00020\u0007HÆ\u0003J\t\u0010A\u001a\u00020\tHÆ\u0003J\t\u0010B\u001a\u00020\tHÆ\u0003J\t\u0010C\u001a\u00020\tHÆ\u0003J\t\u0010D\u001a\u00020\tHÆ\u0003J\t\u0010E\u001a\u00020\u000eHÆ\u0003J\t\u0010F\u001a\u00020\u000eHÆ\u0003J\t\u0010G\u001a\u00020\u000eHÆ\u0003J\t\u0010H\u001a\u00020\u0012HÆ\u0003J\t\u0010I\u001a\u00020\u000eHÆ\u0003J\t\u0010J\u001a\u00020\tHÆ\u0003J\t\u0010K\u001a\u00020\u000eHÆ\u0003J\u000b\u0010L\u001a\u0004\u0018\u00010\u0017HÆ\u0003J\u0010\u0010M\u001a\u0004\u0018\u00010\u000eHÆ\u0003¢\u0006\u0002\u00107J\t\u0010N\u001a\u00020\tHÆ\u0003J\u000b\u0010O\u001a\u0004\u0018\u00010\u001bHÆ\u0003J\t\u0010P\u001a\u00020\u001dHÆ\u0003JÔ\u0001\u0010Q\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\b\b\u0002\u0010\u0004\u001a\u00020\u00052\b\b\u0002\u0010\u0006\u001a\u00020\u00072\b\b\u0002\u0010\b\u001a\u00020\t2\b\b\u0002\u0010\n\u001a\u00020\t2\b\b\u0002\u0010\u000b\u001a\u00020\t2\b\b\u0002\u0010\f\u001a\u00020\t2\b\b\u0002\u0010\r\u001a\u00020\u000e2\b\b\u0003\u0010\u000f\u001a\u00020\u000e2\b\b\u0002\u0010\u0010\u001a\u00020\u000e2\b\b\u0002\u0010\u0011\u001a\u00020\u00122\b\b\u0002\u0010\u0013\u001a\u00020\u000e2\b\b\u0002\u0010\u0014\u001a\u00020\t2\b\b\u0002\u0010\u0015\u001a\u00020\u000e2\n\b\u0002\u0010\u0016\u001a\u0004\u0018\u00010\u00172\n\b\u0002\u0010\u0018\u001a\u0004\u0018\u00010\u000e2\b\b\u0002\u0010\u0019\u001a\u00020\t2\n\b\u0002\u0010\u001a\u001a\u0004\u0018\u00010\u001b2\b\b\u0002\u0010\u001c\u001a\u00020\u001dHÆ\u0001¢\u0006\u0004\bR\u0010SJ\u0013\u0010T\u001a\u00020\t2\b\u0010U\u001a\u0004\u0018\u00010VHÖ\u0003J\t\u0010W\u001a\u00020\u000eHÖ\u0001J\t\u0010X\u001a\u00020\u0017HÖ\u0001R\u0016\u0010\u0002\u001a\u00020\u0003X\u0096\u0004¢\u0006\n\n\u0002\u0010\"\u001a\u0004\b \u0010!R\u0011\u0010\u0004\u001a\u00020\u0005¢\u0006\b\n\u0000\u001a\u0004\b#\u0010$R\u0011\u0010\u0006\u001a\u00020\u0007¢\u0006\b\n\u0000\u001a\u0004\b%\u0010&R\u0011\u0010\b\u001a\u00020\t¢\u0006\b\n\u0000\u001a\u0004\b'\u0010(R\u0011\u0010\n\u001a\u00020\t¢\u0006\b\n\u0000\u001a\u0004\b)\u0010(R\u0011\u0010\u000b\u001a\u00020\t¢\u0006\b\n\u0000\u001a\u0004\b*\u0010(R\u0011\u0010\f\u001a\u00020\t¢\u0006\b\n\u0000\u001a\u0004\b+\u0010(R\u0011\u0010\r\u001a\u00020\u000e¢\u0006\b\n\u0000\u001a\u0004\b,\u0010-R\u0011\u0010\u000f\u001a\u00020\u000e¢\u0006\b\n\u0000\u001a\u0004\b.\u0010-R\u0011\u0010\u0010\u001a\u00020\u000e¢\u0006\b\n\u0000\u001a\u0004\b/\u0010-R\u0011\u0010\u0011\u001a\u00020\u0012¢\u0006\b\n\u0000\u001a\u0004\b0\u00101R\u0011\u0010\u0013\u001a\u00020\u000e¢\u0006\b\n\u0000\u001a\u0004\b2\u0010-R\u0011\u0010\u0014\u001a\u00020\t¢\u0006\b\n\u0000\u001a\u0004\b3\u0010(R\u0011\u0010\u0015\u001a\u00020\u000e¢\u0006\b\n\u0000\u001a\u0004\b4\u0010-R\u0013\u0010\u0016\u001a\u0004\u0018\u00010\u0017¢\u0006\b\n\u0000\u001a\u0004\b5\u0010!R\u0015\u0010\u0018\u001a\u0004\u0018\u00010\u000e¢\u0006\n\n\u0002\u00108\u001a\u0004\b6\u00107R\u0011\u0010\u0019\u001a\u00020\t¢\u0006\b\n\u0000\u001a\u0004\b\u0019\u0010(R\u0013\u0010\u001a\u001a\u0004\u0018\u00010\u001b¢\u0006\b\n\u0000\u001a\u0004\b9\u0010:R\u0011\u0010\u001c\u001a\u00020\u001d¢\u0006\b\n\u0000\u001a\u0004\b;\u0010<¨\u0006Y"}, d2 = {"Lcom/discord/chat/presentation/message/messagepart/MessageContentAccessory;", "Lcom/discord/chat/presentation/message/messagepart/MessageAccessory;", "messageId", "Lcom/discord/primitives/MessageId;", "margins", "Lcom/discord/chat/presentation/message/messagepart/MessageMargins;", "messageContent", "Lcom/discord/chat/bridge/structurabletext/StructurableText;", "shouldAnimateEmoji", "", "shouldShowLinkDecorations", "shouldShowRoleDot", "shouldShowRoleOnName", "bottomSpacingPx", "", "linkColor", "messageTextColor", "messageFont", "Lcom/discord/fonts/DiscordFont;", "textSizeSp", "boldLinkText", "constrainedWidth", "editedLabel", "", "editedLabelTextColor", "isForwardedContent", "truncation", "Lcom/discord/chat/bridge/truncation/Truncation;", "theme", "Lcom/discord/theme/DiscordThemeObject;", "<init>", "(Ljava/lang/String;Lcom/discord/chat/presentation/message/messagepart/MessageMargins;Lcom/discord/chat/bridge/structurabletext/StructurableText;ZZZZIIILcom/discord/fonts/DiscordFont;IZILjava/lang/String;Ljava/lang/Integer;ZLcom/discord/chat/bridge/truncation/Truncation;Lcom/discord/theme/DiscordThemeObject;Lkotlin/jvm/internal/DefaultConstructorMarker;)V", "getMessageId-3Eiw7ao", "()Ljava/lang/String;", "Ljava/lang/String;", "getMargins", "()Lcom/discord/chat/presentation/message/messagepart/MessageMargins;", "getMessageContent", "()Lcom/discord/chat/bridge/structurabletext/StructurableText;", "getShouldAnimateEmoji", "()Z", "getShouldShowLinkDecorations", "getShouldShowRoleDot", "getShouldShowRoleOnName", "getBottomSpacingPx", "()I", "getLinkColor", "getMessageTextColor", "getMessageFont", "()Lcom/discord/fonts/DiscordFont;", "getTextSizeSp", "getBoldLinkText", "getConstrainedWidth", "getEditedLabel", "getEditedLabelTextColor", "()Ljava/lang/Integer;", "Ljava/lang/Integer;", "getTruncation", "()Lcom/discord/chat/bridge/truncation/Truncation;", "getTheme", "()Lcom/discord/theme/DiscordThemeObject;", "component1", "component1-3Eiw7ao", "component2", "component3", "component4", "component5", "component6", "component7", "component8", "component9", "component10", "component11", "component12", "component13", "component14", "component15", "component16", "component17", "component18", "component19", "copy", "copy-m9bs0RY", "(Ljava/lang/String;Lcom/discord/chat/presentation/message/messagepart/MessageMargins;Lcom/discord/chat/bridge/structurabletext/StructurableText;ZZZZIIILcom/discord/fonts/DiscordFont;IZILjava/lang/String;Ljava/lang/Integer;ZLcom/discord/chat/bridge/truncation/Truncation;Lcom/discord/theme/DiscordThemeObject;)Lcom/discord/chat/presentation/message/messagepart/MessageContentAccessory;", "equals", "other", "", "hashCode", "toString", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class MessageContentAccessory extends MessageAccessory {
    private final boolean boldLinkText;
    private final int bottomSpacingPx;
    private final int constrainedWidth;
    private final String editedLabel;
    private final Integer editedLabelTextColor;
    private final boolean isForwardedContent;
    private final int linkColor;
    @NotNull
    private final MessageMargins margins;
    @NotNull
    private final StructurableText messageContent;
    @NotNull
    private final DiscordFont messageFont;
    @NotNull
    private final String messageId;
    private final int messageTextColor;
    private final boolean shouldAnimateEmoji;
    private final boolean shouldShowLinkDecorations;
    private final boolean shouldShowRoleDot;
    private final boolean shouldShowRoleOnName;
    private final int textSizeSp;
    @NotNull
    private final DiscordThemeObject theme;
    private final Truncation truncation;

    public /* synthetic */ MessageContentAccessory(String str, MessageMargins messageMargins, StructurableText structurableText, boolean z10, boolean z11, boolean z12, boolean z13, int i10, int i11, int i12, DiscordFont discordFont, int i13, boolean z14, int i14, String str2, Integer num, boolean z15, Truncation truncation, DiscordThemeObject discordThemeObject, DefaultConstructorMarker defaultConstructorMarker) {
        this(str, messageMargins, structurableText, z10, z11, z12, z13, i10, i11, i12, discordFont, i13, z14, i14, str2, num, z15, truncation, discordThemeObject);
    }

    /* renamed from: copy-m9bs0RY$default  reason: not valid java name */
    public static /* synthetic */ MessageContentAccessory m623copym9bs0RY$default(MessageContentAccessory messageContentAccessory, String str, MessageMargins messageMargins, StructurableText structurableText, boolean z10, boolean z11, boolean z12, boolean z13, int i10, int i11, int i12, DiscordFont discordFont, int i13, boolean z14, int i14, String str2, Integer num, boolean z15, Truncation truncation, DiscordThemeObject discordThemeObject, int i15, Object obj) {
        DiscordThemeObject discordThemeObject2;
        Truncation truncation2;
        String str3 = (i15 & 1) != 0 ? messageContentAccessory.messageId : str;
        MessageMargins messageMargins2 = (i15 & 2) != 0 ? messageContentAccessory.margins : messageMargins;
        StructurableText structurableText2 = (i15 & 4) != 0 ? messageContentAccessory.messageContent : structurableText;
        boolean z16 = (i15 & 8) != 0 ? messageContentAccessory.shouldAnimateEmoji : z10;
        boolean z17 = (i15 & 16) != 0 ? messageContentAccessory.shouldShowLinkDecorations : z11;
        boolean z18 = (i15 & 32) != 0 ? messageContentAccessory.shouldShowRoleDot : z12;
        boolean z19 = (i15 & 64) != 0 ? messageContentAccessory.shouldShowRoleOnName : z13;
        int i16 = (i15 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0 ? messageContentAccessory.bottomSpacingPx : i10;
        int i17 = (i15 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0 ? messageContentAccessory.linkColor : i11;
        int i18 = (i15 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0 ? messageContentAccessory.messageTextColor : i12;
        DiscordFont discordFont2 = (i15 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0 ? messageContentAccessory.messageFont : discordFont;
        int i19 = (i15 & RecyclerView.ItemAnimator.FLAG_MOVED) != 0 ? messageContentAccessory.textSizeSp : i13;
        boolean z20 = (i15 & RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT) != 0 ? messageContentAccessory.boldLinkText : z14;
        int i20 = (i15 & 8192) != 0 ? messageContentAccessory.constrainedWidth : i14;
        String str4 = str3;
        String str5 = (i15 & 16384) != 0 ? messageContentAccessory.editedLabel : str2;
        Integer num2 = (i15 & PeerConnection.PORTALLOCATOR_ENABLE_ANY_ADDRESS_PORTS) != 0 ? messageContentAccessory.editedLabelTextColor : num;
        boolean z21 = (i15 & 65536) != 0 ? messageContentAccessory.isForwardedContent : z15;
        Truncation truncation3 = (i15 & 131072) != 0 ? messageContentAccessory.truncation : truncation;
        if ((i15 & 262144) != 0) {
            truncation2 = truncation3;
            discordThemeObject2 = messageContentAccessory.theme;
        } else {
            discordThemeObject2 = discordThemeObject;
            truncation2 = truncation3;
        }
        return messageContentAccessory.m625copym9bs0RY(str4, messageMargins2, structurableText2, z16, z17, z18, z19, i16, i17, i18, discordFont2, i19, z20, i20, str5, num2, z21, truncation2, discordThemeObject2);
    }

    @NotNull
    /* renamed from: component1-3Eiw7ao  reason: not valid java name */
    public final String m624component13Eiw7ao() {
        return this.messageId;
    }

    public final int component10() {
        return this.messageTextColor;
    }

    @NotNull
    public final DiscordFont component11() {
        return this.messageFont;
    }

    public final int component12() {
        return this.textSizeSp;
    }

    public final boolean component13() {
        return this.boldLinkText;
    }

    public final int component14() {
        return this.constrainedWidth;
    }

    public final String component15() {
        return this.editedLabel;
    }

    public final Integer component16() {
        return this.editedLabelTextColor;
    }

    public final boolean component17() {
        return this.isForwardedContent;
    }

    public final Truncation component18() {
        return this.truncation;
    }

    @NotNull
    public final DiscordThemeObject component19() {
        return this.theme;
    }

    @NotNull
    public final MessageMargins component2() {
        return this.margins;
    }

    @NotNull
    public final StructurableText component3() {
        return this.messageContent;
    }

    public final boolean component4() {
        return this.shouldAnimateEmoji;
    }

    public final boolean component5() {
        return this.shouldShowLinkDecorations;
    }

    public final boolean component6() {
        return this.shouldShowRoleDot;
    }

    public final boolean component7() {
        return this.shouldShowRoleOnName;
    }

    public final int component8() {
        return this.bottomSpacingPx;
    }

    public final int component9() {
        return this.linkColor;
    }

    @NotNull
    /* renamed from: copy-m9bs0RY  reason: not valid java name */
    public final MessageContentAccessory m625copym9bs0RY(@NotNull String messageId, @NotNull MessageMargins margins, @NotNull StructurableText messageContent, boolean z10, boolean z11, boolean z12, boolean z13, int i10, int i11, int i12, @NotNull DiscordFont messageFont, int i13, boolean z14, int i14, String str, Integer num, boolean z15, Truncation truncation, @NotNull DiscordThemeObject theme) {
        Intrinsics.checkNotNullParameter(messageId, "messageId");
        Intrinsics.checkNotNullParameter(margins, "margins");
        Intrinsics.checkNotNullParameter(messageContent, "messageContent");
        Intrinsics.checkNotNullParameter(messageFont, "messageFont");
        Intrinsics.checkNotNullParameter(theme, "theme");
        return new MessageContentAccessory(messageId, margins, messageContent, z10, z11, z12, z13, i10, i11, i12, messageFont, i13, z14, i14, str, num, z15, truncation, theme, null);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof MessageContentAccessory) {
            MessageContentAccessory messageContentAccessory = (MessageContentAccessory) obj;
            return MessageId.m1088equalsimpl0(this.messageId, messageContentAccessory.messageId) && Intrinsics.areEqual(this.margins, messageContentAccessory.margins) && Intrinsics.areEqual(this.messageContent, messageContentAccessory.messageContent) && this.shouldAnimateEmoji == messageContentAccessory.shouldAnimateEmoji && this.shouldShowLinkDecorations == messageContentAccessory.shouldShowLinkDecorations && this.shouldShowRoleDot == messageContentAccessory.shouldShowRoleDot && this.shouldShowRoleOnName == messageContentAccessory.shouldShowRoleOnName && this.bottomSpacingPx == messageContentAccessory.bottomSpacingPx && this.linkColor == messageContentAccessory.linkColor && this.messageTextColor == messageContentAccessory.messageTextColor && this.messageFont == messageContentAccessory.messageFont && this.textSizeSp == messageContentAccessory.textSizeSp && this.boldLinkText == messageContentAccessory.boldLinkText && this.constrainedWidth == messageContentAccessory.constrainedWidth && Intrinsics.areEqual(this.editedLabel, messageContentAccessory.editedLabel) && Intrinsics.areEqual(this.editedLabelTextColor, messageContentAccessory.editedLabelTextColor) && this.isForwardedContent == messageContentAccessory.isForwardedContent && Intrinsics.areEqual(this.truncation, messageContentAccessory.truncation) && Intrinsics.areEqual(this.theme, messageContentAccessory.theme);
        }
        return false;
    }

    public final boolean getBoldLinkText() {
        return this.boldLinkText;
    }

    public final int getBottomSpacingPx() {
        return this.bottomSpacingPx;
    }

    public final int getConstrainedWidth() {
        return this.constrainedWidth;
    }

    public final String getEditedLabel() {
        return this.editedLabel;
    }

    public final Integer getEditedLabelTextColor() {
        return this.editedLabelTextColor;
    }

    public final int getLinkColor() {
        return this.linkColor;
    }

    @NotNull
    public final MessageMargins getMargins() {
        return this.margins;
    }

    @NotNull
    public final StructurableText getMessageContent() {
        return this.messageContent;
    }

    @NotNull
    public final DiscordFont getMessageFont() {
        return this.messageFont;
    }

    @Override // com.discord.chat.presentation.message.messagepart.MessageAccessory
    @NotNull
    /* renamed from: getMessageId-3Eiw7ao */
    public String mo536getMessageId3Eiw7ao() {
        return this.messageId;
    }

    public final int getMessageTextColor() {
        return this.messageTextColor;
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

    public final int getTextSizeSp() {
        return this.textSizeSp;
    }

    @NotNull
    public final DiscordThemeObject getTheme() {
        return this.theme;
    }

    public final Truncation getTruncation() {
        return this.truncation;
    }

    public int hashCode() {
        int m1089hashCodeimpl = ((((((((((((((((((((((((((MessageId.m1089hashCodeimpl(this.messageId) * 31) + this.margins.hashCode()) * 31) + this.messageContent.hashCode()) * 31) + Boolean.hashCode(this.shouldAnimateEmoji)) * 31) + Boolean.hashCode(this.shouldShowLinkDecorations)) * 31) + Boolean.hashCode(this.shouldShowRoleDot)) * 31) + Boolean.hashCode(this.shouldShowRoleOnName)) * 31) + Integer.hashCode(this.bottomSpacingPx)) * 31) + Integer.hashCode(this.linkColor)) * 31) + Integer.hashCode(this.messageTextColor)) * 31) + this.messageFont.hashCode()) * 31) + Integer.hashCode(this.textSizeSp)) * 31) + Boolean.hashCode(this.boldLinkText)) * 31) + Integer.hashCode(this.constrainedWidth)) * 31;
        String str = this.editedLabel;
        int hashCode = (m1089hashCodeimpl + (str == null ? 0 : str.hashCode())) * 31;
        Integer num = this.editedLabelTextColor;
        int hashCode2 = (((hashCode + (num == null ? 0 : num.hashCode())) * 31) + Boolean.hashCode(this.isForwardedContent)) * 31;
        Truncation truncation = this.truncation;
        return ((hashCode2 + (truncation != null ? truncation.hashCode() : 0)) * 31) + this.theme.hashCode();
    }

    public final boolean isForwardedContent() {
        return this.isForwardedContent;
    }

    @NotNull
    public String toString() {
        String m1091toStringimpl = MessageId.m1091toStringimpl(this.messageId);
        MessageMargins messageMargins = this.margins;
        StructurableText structurableText = this.messageContent;
        boolean z10 = this.shouldAnimateEmoji;
        boolean z11 = this.shouldShowLinkDecorations;
        boolean z12 = this.shouldShowRoleDot;
        boolean z13 = this.shouldShowRoleOnName;
        int i10 = this.bottomSpacingPx;
        int i11 = this.linkColor;
        int i12 = this.messageTextColor;
        DiscordFont discordFont = this.messageFont;
        int i13 = this.textSizeSp;
        boolean z14 = this.boldLinkText;
        int i14 = this.constrainedWidth;
        String str = this.editedLabel;
        Integer num = this.editedLabelTextColor;
        boolean z15 = this.isForwardedContent;
        Truncation truncation = this.truncation;
        DiscordThemeObject discordThemeObject = this.theme;
        return "MessageContentAccessory(messageId=" + m1091toStringimpl + ", margins=" + messageMargins + ", messageContent=" + structurableText + ", shouldAnimateEmoji=" + z10 + ", shouldShowLinkDecorations=" + z11 + ", shouldShowRoleDot=" + z12 + ", shouldShowRoleOnName=" + z13 + ", bottomSpacingPx=" + i10 + ", linkColor=" + i11 + ", messageTextColor=" + i12 + ", messageFont=" + discordFont + ", textSizeSp=" + i13 + ", boldLinkText=" + z14 + ", constrainedWidth=" + i14 + ", editedLabel=" + str + ", editedLabelTextColor=" + num + ", isForwardedContent=" + z15 + ", truncation=" + truncation + ", theme=" + discordThemeObject + ")";
    }

    public /* synthetic */ MessageContentAccessory(String str, MessageMargins messageMargins, StructurableText structurableText, boolean z10, boolean z11, boolean z12, boolean z13, int i10, int i11, int i12, DiscordFont discordFont, int i13, boolean z14, int i14, String str2, Integer num, boolean z15, Truncation truncation, DiscordThemeObject discordThemeObject, int i15, DefaultConstructorMarker defaultConstructorMarker) {
        this(str, messageMargins, structurableText, z10, z11, z12, z13, i10, i11, i12, discordFont, i13, z14, i14, str2, num, z15, (i15 & 131072) != 0 ? null : truncation, (i15 & 262144) != 0 ? ThemeManagerKt.getTheme() : discordThemeObject, null);
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    private MessageContentAccessory(String messageId, MessageMargins margins, StructurableText messageContent, boolean z10, boolean z11, boolean z12, boolean z13, int i10, int i11, int i12, DiscordFont messageFont, int i13, boolean z14, int i14, String str, Integer num, boolean z15, Truncation truncation, DiscordThemeObject theme) {
        super(messageId, "message content", false, 4, null);
        Intrinsics.checkNotNullParameter(messageId, "messageId");
        Intrinsics.checkNotNullParameter(margins, "margins");
        Intrinsics.checkNotNullParameter(messageContent, "messageContent");
        Intrinsics.checkNotNullParameter(messageFont, "messageFont");
        Intrinsics.checkNotNullParameter(theme, "theme");
        this.messageId = messageId;
        this.margins = margins;
        this.messageContent = messageContent;
        this.shouldAnimateEmoji = z10;
        this.shouldShowLinkDecorations = z11;
        this.shouldShowRoleDot = z12;
        this.shouldShowRoleOnName = z13;
        this.bottomSpacingPx = i10;
        this.linkColor = i11;
        this.messageTextColor = i12;
        this.messageFont = messageFont;
        this.textSizeSp = i13;
        this.boldLinkText = z14;
        this.constrainedWidth = i14;
        this.editedLabel = str;
        this.editedLabelTextColor = num;
        this.isForwardedContent = z15;
        this.truncation = truncation;
        this.theme = theme;
    }
}
