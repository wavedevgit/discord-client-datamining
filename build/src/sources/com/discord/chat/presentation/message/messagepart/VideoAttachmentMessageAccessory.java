package com.discord.chat.presentation.message.messagepart;

import com.discord.chat.bridge.attachment.Attachment;
import com.discord.chat.bridge.spoiler.SpoilerAttributes;
import com.discord.chat.presentation.media.PortalUiModel;
import com.discord.primitives.ChannelId;
import com.discord.primitives.MessageId;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000J\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0007\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000b\n\u0002\b(\n\u0002\u0010\u0000\n\u0002\b\u0002\n\u0002\u0010\u000e\n\u0000\b\u0086\b\u0018\u00002\u00020\u00012\u00020\u0002B[\u0012\u0006\u0010\u0003\u001a\u00020\u0004\u0012\u0006\u0010\u0005\u001a\u00020\u0006\u0012\u0006\u0010\u0007\u001a\u00020\b\u0012\u0006\u0010\t\u001a\u00020\n\u0012\b\u0010\u000b\u001a\u0004\u0018\u00010\f\u0012\u0006\u0010\r\u001a\u00020\b\u0012\u0006\u0010\u000e\u001a\u00020\b\u0012\b\u0010\u000f\u001a\u0004\u0018\u00010\u0010\u0012\u0006\u0010\u0011\u001a\u00020\u0012\u0012\u0006\u0010\u0013\u001a\u00020\u0012¢\u0006\u0004\b\u0014\u0010\u0015J\u0010\u0010*\u001a\u00020\u0004HÆ\u0003¢\u0006\u0004\b+\u0010\u0017J\u0010\u0010,\u001a\u00020\u0006HÆ\u0003¢\u0006\u0004\b-\u0010\u001aJ\t\u0010.\u001a\u00020\bHÆ\u0003J\t\u0010/\u001a\u00020\nHÆ\u0003J\u0010\u00100\u001a\u0004\u0018\u00010\fHÆ\u0003¢\u0006\u0002\u0010!J\t\u00101\u001a\u00020\bHÆ\u0003J\t\u00102\u001a\u00020\bHÆ\u0003J\u000b\u00103\u001a\u0004\u0018\u00010\u0010HÆ\u0003J\t\u00104\u001a\u00020\u0012HÆ\u0003J\t\u00105\u001a\u00020\u0012HÆ\u0003Jx\u00106\u001a\u00020\u00002\b\b\u0002\u0010\u0003\u001a\u00020\u00042\b\b\u0002\u0010\u0005\u001a\u00020\u00062\b\b\u0002\u0010\u0007\u001a\u00020\b2\b\b\u0002\u0010\t\u001a\u00020\n2\n\b\u0002\u0010\u000b\u001a\u0004\u0018\u00010\f2\b\b\u0002\u0010\r\u001a\u00020\b2\b\b\u0002\u0010\u000e\u001a\u00020\b2\n\b\u0002\u0010\u000f\u001a\u0004\u0018\u00010\u00102\b\b\u0002\u0010\u0011\u001a\u00020\u00122\b\b\u0002\u0010\u0013\u001a\u00020\u0012HÆ\u0001¢\u0006\u0004\b7\u00108J\u0013\u00109\u001a\u00020\u00122\b\u0010:\u001a\u0004\u0018\u00010;HÖ\u0003J\t\u0010<\u001a\u00020\bHÖ\u0001J\t\u0010=\u001a\u00020>HÖ\u0001R\u0013\u0010\u0003\u001a\u00020\u0004¢\u0006\n\n\u0002\u0010\u0018\u001a\u0004\b\u0016\u0010\u0017R\u0016\u0010\u0005\u001a\u00020\u0006X\u0096\u0004¢\u0006\n\n\u0002\u0010\u001b\u001a\u0004\b\u0019\u0010\u001aR\u0014\u0010\u0007\u001a\u00020\bX\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\b\u001c\u0010\u001dR\u0014\u0010\t\u001a\u00020\nX\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\b\u001e\u0010\u001fR\u0018\u0010\u000b\u001a\u0004\u0018\u00010\fX\u0096\u0004¢\u0006\n\n\u0002\u0010\"\u001a\u0004\b \u0010!R\u0011\u0010\r\u001a\u00020\b¢\u0006\b\n\u0000\u001a\u0004\b#\u0010\u001dR\u0011\u0010\u000e\u001a\u00020\b¢\u0006\b\n\u0000\u001a\u0004\b$\u0010\u001dR\u0013\u0010\u000f\u001a\u0004\u0018\u00010\u0010¢\u0006\b\n\u0000\u001a\u0004\b%\u0010&R\u0011\u0010\u0011\u001a\u00020\u0012¢\u0006\b\n\u0000\u001a\u0004\b'\u0010(R\u0011\u0010\u0013\u001a\u00020\u0012¢\u0006\b\n\u0000\u001a\u0004\b)\u0010(¨\u0006?"}, d2 = {"Lcom/discord/chat/presentation/message/messagepart/VideoAttachmentMessageAccessory;", "Lcom/discord/chat/presentation/message/messagepart/MessageAttachmentAccessory;", "Lcom/discord/chat/presentation/media/PortalUiModel;", "channelId", "Lcom/discord/primitives/ChannelId;", "messageId", "Lcom/discord/primitives/MessageId;", "index", "", "attachment", "Lcom/discord/chat/bridge/attachment/Attachment;", "attachmentsOpacity", "", "constrainedWidth", "radiusPx", "spoilerAttributes", "Lcom/discord/chat/bridge/spoiler/SpoilerAttributes;", "useNewAltTextButton", "", "hideMediaPlayButton", "<init>", "(JLjava/lang/String;ILcom/discord/chat/bridge/attachment/Attachment;Ljava/lang/Float;IILcom/discord/chat/bridge/spoiler/SpoilerAttributes;ZZLkotlin/jvm/internal/DefaultConstructorMarker;)V", "getChannelId-o4g7jtM", "()J", "J", "getMessageId-3Eiw7ao", "()Ljava/lang/String;", "Ljava/lang/String;", "getIndex", "()I", "getAttachment", "()Lcom/discord/chat/bridge/attachment/Attachment;", "getAttachmentsOpacity", "()Ljava/lang/Float;", "Ljava/lang/Float;", "getConstrainedWidth", "getRadiusPx", "getSpoilerAttributes", "()Lcom/discord/chat/bridge/spoiler/SpoilerAttributes;", "getUseNewAltTextButton", "()Z", "getHideMediaPlayButton", "component1", "component1-o4g7jtM", "component2", "component2-3Eiw7ao", "component3", "component4", "component5", "component6", "component7", "component8", "component9", "component10", "copy", "copy-z64KZZs", "(JLjava/lang/String;ILcom/discord/chat/bridge/attachment/Attachment;Ljava/lang/Float;IILcom/discord/chat/bridge/spoiler/SpoilerAttributes;ZZ)Lcom/discord/chat/presentation/message/messagepart/VideoAttachmentMessageAccessory;", "equals", "other", "", "hashCode", "toString", "", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class VideoAttachmentMessageAccessory extends MessageAttachmentAccessory implements PortalUiModel {
    @NotNull
    private final Attachment attachment;
    private final Float attachmentsOpacity;
    private final long channelId;
    private final int constrainedWidth;
    private final boolean hideMediaPlayButton;
    private final int index;
    @NotNull
    private final String messageId;
    private final int radiusPx;
    private final SpoilerAttributes spoilerAttributes;
    private final boolean useNewAltTextButton;

    public /* synthetic */ VideoAttachmentMessageAccessory(long j10, String str, int i10, Attachment attachment, Float f10, int i11, int i12, SpoilerAttributes spoilerAttributes, boolean z10, boolean z11, DefaultConstructorMarker defaultConstructorMarker) {
        this(j10, str, i10, attachment, f10, i11, i12, spoilerAttributes, z10, z11);
    }

    /* renamed from: copy-z64KZZs$default  reason: not valid java name */
    public static /* synthetic */ VideoAttachmentMessageAccessory m671copyz64KZZs$default(VideoAttachmentMessageAccessory videoAttachmentMessageAccessory, long j10, String str, int i10, Attachment attachment, Float f10, int i11, int i12, SpoilerAttributes spoilerAttributes, boolean z10, boolean z11, int i13, Object obj) {
        if ((i13 & 1) != 0) {
            j10 = videoAttachmentMessageAccessory.channelId;
        }
        long j11 = j10;
        if ((i13 & 2) != 0) {
            str = videoAttachmentMessageAccessory.messageId;
        }
        return videoAttachmentMessageAccessory.m674copyz64KZZs(j11, str, (i13 & 4) != 0 ? videoAttachmentMessageAccessory.index : i10, (i13 & 8) != 0 ? videoAttachmentMessageAccessory.attachment : attachment, (i13 & 16) != 0 ? videoAttachmentMessageAccessory.attachmentsOpacity : f10, (i13 & 32) != 0 ? videoAttachmentMessageAccessory.constrainedWidth : i11, (i13 & 64) != 0 ? videoAttachmentMessageAccessory.radiusPx : i12, (i13 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0 ? videoAttachmentMessageAccessory.spoilerAttributes : spoilerAttributes, (i13 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0 ? videoAttachmentMessageAccessory.useNewAltTextButton : z10, (i13 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0 ? videoAttachmentMessageAccessory.hideMediaPlayButton : z11);
    }

    /* renamed from: component1-o4g7jtM  reason: not valid java name */
    public final long m672component1o4g7jtM() {
        return this.channelId;
    }

    public final boolean component10() {
        return this.hideMediaPlayButton;
    }

    @NotNull
    /* renamed from: component2-3Eiw7ao  reason: not valid java name */
    public final String m673component23Eiw7ao() {
        return this.messageId;
    }

    public final int component3() {
        return this.index;
    }

    @NotNull
    public final Attachment component4() {
        return this.attachment;
    }

    public final Float component5() {
        return this.attachmentsOpacity;
    }

    public final int component6() {
        return this.constrainedWidth;
    }

    public final int component7() {
        return this.radiusPx;
    }

    public final SpoilerAttributes component8() {
        return this.spoilerAttributes;
    }

    public final boolean component9() {
        return this.useNewAltTextButton;
    }

    @NotNull
    /* renamed from: copy-z64KZZs  reason: not valid java name */
    public final VideoAttachmentMessageAccessory m674copyz64KZZs(long j10, @NotNull String messageId, int i10, @NotNull Attachment attachment, Float f10, int i11, int i12, SpoilerAttributes spoilerAttributes, boolean z10, boolean z11) {
        Intrinsics.checkNotNullParameter(messageId, "messageId");
        Intrinsics.checkNotNullParameter(attachment, "attachment");
        return new VideoAttachmentMessageAccessory(j10, messageId, i10, attachment, f10, i11, i12, spoilerAttributes, z10, z11, null);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof VideoAttachmentMessageAccessory) {
            VideoAttachmentMessageAccessory videoAttachmentMessageAccessory = (VideoAttachmentMessageAccessory) obj;
            return ChannelId.m1063equalsimpl0(this.channelId, videoAttachmentMessageAccessory.channelId) && MessageId.m1089equalsimpl0(this.messageId, videoAttachmentMessageAccessory.messageId) && this.index == videoAttachmentMessageAccessory.index && Intrinsics.areEqual(this.attachment, videoAttachmentMessageAccessory.attachment) && Intrinsics.areEqual((Object) this.attachmentsOpacity, (Object) videoAttachmentMessageAccessory.attachmentsOpacity) && this.constrainedWidth == videoAttachmentMessageAccessory.constrainedWidth && this.radiusPx == videoAttachmentMessageAccessory.radiusPx && Intrinsics.areEqual(this.spoilerAttributes, videoAttachmentMessageAccessory.spoilerAttributes) && this.useNewAltTextButton == videoAttachmentMessageAccessory.useNewAltTextButton && this.hideMediaPlayButton == videoAttachmentMessageAccessory.hideMediaPlayButton;
        }
        return false;
    }

    @Override // com.discord.chat.presentation.message.messagepart.MessageAttachmentAccessory
    @NotNull
    public Attachment getAttachment() {
        return this.attachment;
    }

    @Override // com.discord.chat.presentation.message.messagepart.MessageAttachmentAccessory
    public Float getAttachmentsOpacity() {
        return this.attachmentsOpacity;
    }

    /* renamed from: getChannelId-o4g7jtM  reason: not valid java name */
    public final long m675getChannelIdo4g7jtM() {
        return this.channelId;
    }

    public final int getConstrainedWidth() {
        return this.constrainedWidth;
    }

    public final boolean getHideMediaPlayButton() {
        return this.hideMediaPlayButton;
    }

    @Override // com.discord.chat.presentation.media.PortalUiModel
    public int getIndex() {
        return this.index;
    }

    @Override // com.discord.chat.presentation.message.messagepart.MessageAttachmentAccessory, com.discord.chat.presentation.message.messagepart.MessageAccessory
    @NotNull
    /* renamed from: getMessageId-3Eiw7ao */
    public String mo538getMessageId3Eiw7ao() {
        return this.messageId;
    }

    @Override // com.discord.chat.presentation.media.PortalUiModel
    public double getPortal() {
        return PortalUiModel.DefaultImpls.getPortal(this);
    }

    public final int getRadiusPx() {
        return this.radiusPx;
    }

    public final SpoilerAttributes getSpoilerAttributes() {
        return this.spoilerAttributes;
    }

    public final boolean getUseNewAltTextButton() {
        return this.useNewAltTextButton;
    }

    public int hashCode() {
        int m1064hashCodeimpl = ((((((ChannelId.m1064hashCodeimpl(this.channelId) * 31) + MessageId.m1090hashCodeimpl(this.messageId)) * 31) + Integer.hashCode(this.index)) * 31) + this.attachment.hashCode()) * 31;
        Float f10 = this.attachmentsOpacity;
        int hashCode = (((((m1064hashCodeimpl + (f10 == null ? 0 : f10.hashCode())) * 31) + Integer.hashCode(this.constrainedWidth)) * 31) + Integer.hashCode(this.radiusPx)) * 31;
        SpoilerAttributes spoilerAttributes = this.spoilerAttributes;
        return ((((hashCode + (spoilerAttributes != null ? spoilerAttributes.hashCode() : 0)) * 31) + Boolean.hashCode(this.useNewAltTextButton)) * 31) + Boolean.hashCode(this.hideMediaPlayButton);
    }

    @NotNull
    public String toString() {
        String m1066toStringimpl = ChannelId.m1066toStringimpl(this.channelId);
        String m1092toStringimpl = MessageId.m1092toStringimpl(this.messageId);
        int i10 = this.index;
        Attachment attachment = this.attachment;
        Float f10 = this.attachmentsOpacity;
        int i11 = this.constrainedWidth;
        int i12 = this.radiusPx;
        SpoilerAttributes spoilerAttributes = this.spoilerAttributes;
        boolean z10 = this.useNewAltTextButton;
        boolean z11 = this.hideMediaPlayButton;
        return "VideoAttachmentMessageAccessory(channelId=" + m1066toStringimpl + ", messageId=" + m1092toStringimpl + ", index=" + i10 + ", attachment=" + attachment + ", attachmentsOpacity=" + f10 + ", constrainedWidth=" + i11 + ", radiusPx=" + i12 + ", spoilerAttributes=" + spoilerAttributes + ", useNewAltTextButton=" + z10 + ", hideMediaPlayButton=" + z11 + ")";
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    private VideoAttachmentMessageAccessory(long j10, String messageId, int i10, Attachment attachment, Float f10, int i11, int i12, SpoilerAttributes spoilerAttributes, boolean z10, boolean z11) {
        super(messageId, attachment, i10, f10, null);
        Intrinsics.checkNotNullParameter(messageId, "messageId");
        Intrinsics.checkNotNullParameter(attachment, "attachment");
        this.channelId = j10;
        this.messageId = messageId;
        this.index = i10;
        this.attachment = attachment;
        this.attachmentsOpacity = f10;
        this.constrainedWidth = i11;
        this.radiusPx = i12;
        this.spoilerAttributes = spoilerAttributes;
        this.useNewAltTextButton = z10;
        this.hideMediaPlayButton = z11;
    }
}
