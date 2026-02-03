package com.discord.chat.presentation.message.messagepart;

import android.view.View;
import com.discord.chat.bridge.embed.Embed;
import com.discord.chat.bridge.spoiler.SpoilerAttributes;
import com.discord.chat.presentation.media.PortalUiModel;
import com.discord.primitives.ChannelId;
import com.discord.primitives.MessageId;
import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000R\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000b\n\u0002\b\u0005\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b1\n\u0002\u0010\u0000\n\u0002\b\u0002\n\u0002\u0010\u000e\n\u0000\b\u0086\b\u0018\u00002\u00020\u00012\u00020\u0002B\u0083\u0001\u0012\u0006\u0010\u0003\u001a\u00020\u0004\u0012\u0006\u0010\u0005\u001a\u00020\u0006\u0012\u0006\u0010\u0007\u001a\u00020\b\u0012\u0006\u0010\t\u001a\u00020\n\u0012\u0006\u0010\u000b\u001a\u00020\b\u0012\u0006\u0010\f\u001a\u00020\b\u0012\u0006\u0010\r\u001a\u00020\u000e\u0012\u0006\u0010\u000f\u001a\u00020\u0010\u0012\u0006\u0010\u0011\u001a\u00020\u0010\u0012\u0006\u0010\u0012\u001a\u00020\u0010\u0012\u0006\u0010\u0013\u001a\u00020\u0010\u0012\u0006\u0010\u0014\u001a\u00020\u0010\u0012\b\u0010\u0015\u001a\u0004\u0018\u00010\u0016\u0012\b\u0010\u0017\u001a\u0004\u0018\u00010\u0018\u0012\u0006\u0010\u0019\u001a\u00020\u0010¢\u0006\u0004\b\u001a\u0010\u001bJ\u0010\u00104\u001a\u00020\u0004HÆ\u0003¢\u0006\u0004\b5\u0010\u001dJ\t\u00106\u001a\u00020\u0006HÆ\u0003J\t\u00107\u001a\u00020\bHÆ\u0003J\u0010\u00108\u001a\u00020\nHÆ\u0003¢\u0006\u0004\b9\u0010$J\t\u0010:\u001a\u00020\bHÆ\u0003J\t\u0010;\u001a\u00020\bHÆ\u0003J\t\u0010<\u001a\u00020\u000eHÆ\u0003J\t\u0010=\u001a\u00020\u0010HÆ\u0003J\t\u0010>\u001a\u00020\u0010HÆ\u0003J\t\u0010?\u001a\u00020\u0010HÆ\u0003J\t\u0010@\u001a\u00020\u0010HÆ\u0003J\t\u0010A\u001a\u00020\u0010HÆ\u0003J\u000b\u0010B\u001a\u0004\u0018\u00010\u0016HÆ\u0003J\u000b\u0010C\u001a\u0004\u0018\u00010\u0018HÆ\u0003J\t\u0010D\u001a\u00020\u0010HÆ\u0003Jª\u0001\u0010E\u001a\u00020\u00002\b\b\u0002\u0010\u0003\u001a\u00020\u00042\b\b\u0002\u0010\u0005\u001a\u00020\u00062\b\b\u0002\u0010\u0007\u001a\u00020\b2\b\b\u0002\u0010\t\u001a\u00020\n2\b\b\u0002\u0010\u000b\u001a\u00020\b2\b\b\u0002\u0010\f\u001a\u00020\b2\b\b\u0002\u0010\r\u001a\u00020\u000e2\b\b\u0002\u0010\u000f\u001a\u00020\u00102\b\b\u0002\u0010\u0011\u001a\u00020\u00102\b\b\u0002\u0010\u0012\u001a\u00020\u00102\b\b\u0002\u0010\u0013\u001a\u00020\u00102\b\b\u0002\u0010\u0014\u001a\u00020\u00102\n\b\u0002\u0010\u0015\u001a\u0004\u0018\u00010\u00162\n\b\u0002\u0010\u0017\u001a\u0004\u0018\u00010\u00182\b\b\u0002\u0010\u0019\u001a\u00020\u0010HÆ\u0001¢\u0006\u0004\bF\u0010GJ\u0013\u0010H\u001a\u00020\u00102\b\u0010I\u001a\u0004\u0018\u00010JHÖ\u0003J\t\u0010K\u001a\u00020\bHÖ\u0001J\t\u0010L\u001a\u00020MHÖ\u0001R\u0016\u0010\u0003\u001a\u00020\u0004X\u0096\u0004¢\u0006\n\n\u0002\u0010\u001e\u001a\u0004\b\u001c\u0010\u001dR\u0011\u0010\u0005\u001a\u00020\u0006¢\u0006\b\n\u0000\u001a\u0004\b\u001f\u0010 R\u0014\u0010\u0007\u001a\u00020\bX\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\b!\u0010\"R\u0013\u0010\t\u001a\u00020\n¢\u0006\n\n\u0002\u0010%\u001a\u0004\b#\u0010$R\u0011\u0010\u000b\u001a\u00020\b¢\u0006\b\n\u0000\u001a\u0004\b&\u0010\"R\u0011\u0010\f\u001a\u00020\b¢\u0006\b\n\u0000\u001a\u0004\b'\u0010\"R\u0011\u0010\r\u001a\u00020\u000e¢\u0006\b\n\u0000\u001a\u0004\b(\u0010)R\u0011\u0010\u000f\u001a\u00020\u0010¢\u0006\b\n\u0000\u001a\u0004\b*\u0010+R\u0011\u0010\u0011\u001a\u00020\u0010¢\u0006\b\n\u0000\u001a\u0004\b,\u0010+R\u0011\u0010\u0012\u001a\u00020\u0010¢\u0006\b\n\u0000\u001a\u0004\b-\u0010+R\u0011\u0010\u0013\u001a\u00020\u0010¢\u0006\b\n\u0000\u001a\u0004\b.\u0010+R\u0011\u0010\u0014\u001a\u00020\u0010¢\u0006\b\n\u0000\u001a\u0004\b/\u0010+R\u0013\u0010\u0015\u001a\u0004\u0018\u00010\u0016¢\u0006\b\n\u0000\u001a\u0004\b0\u00101R\u0013\u0010\u0017\u001a\u0004\u0018\u00010\u0018¢\u0006\b\n\u0000\u001a\u0004\b2\u00103R\u0011\u0010\u0019\u001a\u00020\u0010¢\u0006\b\n\u0000\u001a\u0004\b\u0019\u0010+¨\u0006N"}, d2 = {"Lcom/discord/chat/presentation/message/messagepart/EmbedMessageAccessory;", "Lcom/discord/chat/presentation/message/messagepart/MessageAccessory;", "Lcom/discord/chat/presentation/media/PortalUiModel;", "messageId", "Lcom/discord/primitives/MessageId;", "margins", "Lcom/discord/chat/presentation/message/messagepart/MessageMargins;", "index", "", "channelId", "Lcom/discord/primitives/ChannelId;", "constrainedWidth", "radiusPx", "embed", "Lcom/discord/chat/bridge/embed/Embed;", "shouldAutoPlayGifs", "", "shouldAnimateEmoji", "shouldShowLinkDecorations", "shouldShowRoleDot", "shouldShowRoleOnName", "spoilerAttributes", "Lcom/discord/chat/bridge/spoiler/SpoilerAttributes;", "onLongClick", "Landroid/view/View$OnLongClickListener;", "isForwardedContent", "<init>", "(Ljava/lang/String;Lcom/discord/chat/presentation/message/messagepart/MessageMargins;IJIILcom/discord/chat/bridge/embed/Embed;ZZZZZLcom/discord/chat/bridge/spoiler/SpoilerAttributes;Landroid/view/View$OnLongClickListener;ZLkotlin/jvm/internal/DefaultConstructorMarker;)V", "getMessageId-3Eiw7ao", "()Ljava/lang/String;", "Ljava/lang/String;", "getMargins", "()Lcom/discord/chat/presentation/message/messagepart/MessageMargins;", "getIndex", "()I", "getChannelId-o4g7jtM", "()J", "J", "getConstrainedWidth", "getRadiusPx", "getEmbed", "()Lcom/discord/chat/bridge/embed/Embed;", "getShouldAutoPlayGifs", "()Z", "getShouldAnimateEmoji", "getShouldShowLinkDecorations", "getShouldShowRoleDot", "getShouldShowRoleOnName", "getSpoilerAttributes", "()Lcom/discord/chat/bridge/spoiler/SpoilerAttributes;", "getOnLongClick", "()Landroid/view/View$OnLongClickListener;", "component1", "component1-3Eiw7ao", "component2", "component3", "component4", "component4-o4g7jtM", "component5", "component6", "component7", "component8", "component9", "component10", "component11", "component12", "component13", "component14", "component15", "copy", "copy-BDjX1ak", "(Ljava/lang/String;Lcom/discord/chat/presentation/message/messagepart/MessageMargins;IJIILcom/discord/chat/bridge/embed/Embed;ZZZZZLcom/discord/chat/bridge/spoiler/SpoilerAttributes;Landroid/view/View$OnLongClickListener;Z)Lcom/discord/chat/presentation/message/messagepart/EmbedMessageAccessory;", "equals", "other", "", "hashCode", "toString", "", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class EmbedMessageAccessory extends MessageAccessory implements PortalUiModel {
    private final long channelId;
    private final int constrainedWidth;
    @NotNull
    private final Embed embed;
    private final int index;
    private final boolean isForwardedContent;
    @NotNull
    private final MessageMargins margins;
    @NotNull
    private final String messageId;
    private final View.OnLongClickListener onLongClick;
    private final int radiusPx;
    private final boolean shouldAnimateEmoji;
    private final boolean shouldAutoPlayGifs;
    private final boolean shouldShowLinkDecorations;
    private final boolean shouldShowRoleDot;
    private final boolean shouldShowRoleOnName;
    private final SpoilerAttributes spoilerAttributes;

    public /* synthetic */ EmbedMessageAccessory(String str, MessageMargins messageMargins, int i10, long j10, int i11, int i12, Embed embed, boolean z10, boolean z11, boolean z12, boolean z13, boolean z14, SpoilerAttributes spoilerAttributes, View.OnLongClickListener onLongClickListener, boolean z15, DefaultConstructorMarker defaultConstructorMarker) {
        this(str, messageMargins, i10, j10, i11, i12, embed, z10, z11, z12, z13, z14, spoilerAttributes, onLongClickListener, z15);
    }

    @NotNull
    /* renamed from: component1-3Eiw7ao  reason: not valid java name */
    public final String m561component13Eiw7ao() {
        return this.messageId;
    }

    public final boolean component10() {
        return this.shouldShowLinkDecorations;
    }

    public final boolean component11() {
        return this.shouldShowRoleDot;
    }

    public final boolean component12() {
        return this.shouldShowRoleOnName;
    }

    public final SpoilerAttributes component13() {
        return this.spoilerAttributes;
    }

    public final View.OnLongClickListener component14() {
        return this.onLongClick;
    }

    public final boolean component15() {
        return this.isForwardedContent;
    }

    @NotNull
    public final MessageMargins component2() {
        return this.margins;
    }

    public final int component3() {
        return this.index;
    }

    /* renamed from: component4-o4g7jtM  reason: not valid java name */
    public final long m562component4o4g7jtM() {
        return this.channelId;
    }

    public final int component5() {
        return this.constrainedWidth;
    }

    public final int component6() {
        return this.radiusPx;
    }

    @NotNull
    public final Embed component7() {
        return this.embed;
    }

    public final boolean component8() {
        return this.shouldAutoPlayGifs;
    }

    public final boolean component9() {
        return this.shouldAnimateEmoji;
    }

    @NotNull
    /* renamed from: copy-BDjX1ak  reason: not valid java name */
    public final EmbedMessageAccessory m563copyBDjX1ak(@NotNull String messageId, @NotNull MessageMargins margins, int i10, long j10, int i11, int i12, @NotNull Embed embed, boolean z10, boolean z11, boolean z12, boolean z13, boolean z14, SpoilerAttributes spoilerAttributes, View.OnLongClickListener onLongClickListener, boolean z15) {
        Intrinsics.checkNotNullParameter(messageId, "messageId");
        Intrinsics.checkNotNullParameter(margins, "margins");
        Intrinsics.checkNotNullParameter(embed, "embed");
        return new EmbedMessageAccessory(messageId, margins, i10, j10, i11, i12, embed, z10, z11, z12, z13, z14, spoilerAttributes, onLongClickListener, z15, null);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof EmbedMessageAccessory) {
            EmbedMessageAccessory embedMessageAccessory = (EmbedMessageAccessory) obj;
            return MessageId.m1090equalsimpl0(this.messageId, embedMessageAccessory.messageId) && Intrinsics.areEqual(this.margins, embedMessageAccessory.margins) && this.index == embedMessageAccessory.index && ChannelId.m1064equalsimpl0(this.channelId, embedMessageAccessory.channelId) && this.constrainedWidth == embedMessageAccessory.constrainedWidth && this.radiusPx == embedMessageAccessory.radiusPx && Intrinsics.areEqual(this.embed, embedMessageAccessory.embed) && this.shouldAutoPlayGifs == embedMessageAccessory.shouldAutoPlayGifs && this.shouldAnimateEmoji == embedMessageAccessory.shouldAnimateEmoji && this.shouldShowLinkDecorations == embedMessageAccessory.shouldShowLinkDecorations && this.shouldShowRoleDot == embedMessageAccessory.shouldShowRoleDot && this.shouldShowRoleOnName == embedMessageAccessory.shouldShowRoleOnName && Intrinsics.areEqual(this.spoilerAttributes, embedMessageAccessory.spoilerAttributes) && Intrinsics.areEqual(this.onLongClick, embedMessageAccessory.onLongClick) && this.isForwardedContent == embedMessageAccessory.isForwardedContent;
        }
        return false;
    }

    /* renamed from: getChannelId-o4g7jtM  reason: not valid java name */
    public final long m564getChannelIdo4g7jtM() {
        return this.channelId;
    }

    public final int getConstrainedWidth() {
        return this.constrainedWidth;
    }

    @NotNull
    public final Embed getEmbed() {
        return this.embed;
    }

    @Override // com.discord.chat.presentation.media.PortalUiModel
    public int getIndex() {
        return this.index;
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

    public final View.OnLongClickListener getOnLongClick() {
        return this.onLongClick;
    }

    @Override // com.discord.chat.presentation.media.PortalUiModel
    public double getPortal() {
        return PortalUiModel.DefaultImpls.getPortal(this);
    }

    public final int getRadiusPx() {
        return this.radiusPx;
    }

    public final boolean getShouldAnimateEmoji() {
        return this.shouldAnimateEmoji;
    }

    public final boolean getShouldAutoPlayGifs() {
        return this.shouldAutoPlayGifs;
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

    public final SpoilerAttributes getSpoilerAttributes() {
        return this.spoilerAttributes;
    }

    public int hashCode() {
        int m1091hashCodeimpl = ((((((((((((((((((((((MessageId.m1091hashCodeimpl(this.messageId) * 31) + this.margins.hashCode()) * 31) + Integer.hashCode(this.index)) * 31) + ChannelId.m1065hashCodeimpl(this.channelId)) * 31) + Integer.hashCode(this.constrainedWidth)) * 31) + Integer.hashCode(this.radiusPx)) * 31) + this.embed.hashCode()) * 31) + Boolean.hashCode(this.shouldAutoPlayGifs)) * 31) + Boolean.hashCode(this.shouldAnimateEmoji)) * 31) + Boolean.hashCode(this.shouldShowLinkDecorations)) * 31) + Boolean.hashCode(this.shouldShowRoleDot)) * 31) + Boolean.hashCode(this.shouldShowRoleOnName)) * 31;
        SpoilerAttributes spoilerAttributes = this.spoilerAttributes;
        int hashCode = (m1091hashCodeimpl + (spoilerAttributes == null ? 0 : spoilerAttributes.hashCode())) * 31;
        View.OnLongClickListener onLongClickListener = this.onLongClick;
        return ((hashCode + (onLongClickListener != null ? onLongClickListener.hashCode() : 0)) * 31) + Boolean.hashCode(this.isForwardedContent);
    }

    public final boolean isForwardedContent() {
        return this.isForwardedContent;
    }

    @NotNull
    public String toString() {
        String m1093toStringimpl = MessageId.m1093toStringimpl(this.messageId);
        MessageMargins messageMargins = this.margins;
        int i10 = this.index;
        String m1067toStringimpl = ChannelId.m1067toStringimpl(this.channelId);
        int i11 = this.constrainedWidth;
        int i12 = this.radiusPx;
        Embed embed = this.embed;
        boolean z10 = this.shouldAutoPlayGifs;
        boolean z11 = this.shouldAnimateEmoji;
        boolean z12 = this.shouldShowLinkDecorations;
        boolean z13 = this.shouldShowRoleDot;
        boolean z14 = this.shouldShowRoleOnName;
        SpoilerAttributes spoilerAttributes = this.spoilerAttributes;
        View.OnLongClickListener onLongClickListener = this.onLongClick;
        boolean z15 = this.isForwardedContent;
        return "EmbedMessageAccessory(messageId=" + m1093toStringimpl + ", margins=" + messageMargins + ", index=" + i10 + ", channelId=" + m1067toStringimpl + ", constrainedWidth=" + i11 + ", radiusPx=" + i12 + ", embed=" + embed + ", shouldAutoPlayGifs=" + z10 + ", shouldAnimateEmoji=" + z11 + ", shouldShowLinkDecorations=" + z12 + ", shouldShowRoleDot=" + z13 + ", shouldShowRoleOnName=" + z14 + ", spoilerAttributes=" + spoilerAttributes + ", onLongClick=" + onLongClickListener + ", isForwardedContent=" + z15 + ")";
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    private EmbedMessageAccessory(String messageId, MessageMargins margins, int i10, long j10, int i11, int i12, Embed embed, boolean z10, boolean z11, boolean z12, boolean z13, boolean z14, SpoilerAttributes spoilerAttributes, View.OnLongClickListener onLongClickListener, boolean z15) {
        super(messageId, "embed " + i10, false, 4, null);
        Intrinsics.checkNotNullParameter(messageId, "messageId");
        Intrinsics.checkNotNullParameter(margins, "margins");
        Intrinsics.checkNotNullParameter(embed, "embed");
        this.messageId = messageId;
        this.margins = margins;
        this.index = i10;
        this.channelId = j10;
        this.constrainedWidth = i11;
        this.radiusPx = i12;
        this.embed = embed;
        this.shouldAutoPlayGifs = z10;
        this.shouldAnimateEmoji = z11;
        this.shouldShowLinkDecorations = z12;
        this.shouldShowRoleDot = z13;
        this.shouldShowRoleOnName = z14;
        this.spoilerAttributes = spoilerAttributes;
        this.onLongClick = onLongClickListener;
        this.isForwardedContent = z15;
    }
}
