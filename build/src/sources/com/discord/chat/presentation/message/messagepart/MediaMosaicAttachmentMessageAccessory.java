package com.discord.chat.presentation.message.messagepart;

import com.discord.chat.bridge.MessageState;
import com.discord.primitives.ChannelId;
import com.discord.primitives.MessageId;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import java.util.List;
import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000H\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010 \n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0000\n\u0002\u0010\u000b\n\u0000\n\u0002\u0018\u0002\n\u0002\b\"\n\u0002\u0010\u0000\n\u0002\b\u0002\n\u0002\u0010\u000e\n\u0000\b\u0086\b\u0018\u00002\u00020\u0001BM\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0005\u0012\u0006\u0010\u0006\u001a\u00020\u0007\u0012\f\u0010\b\u001a\b\u0012\u0004\u0012\u00020\n0\t\u0012\u0006\u0010\u000b\u001a\u00020\f\u0012\u0006\u0010\r\u001a\u00020\u000e\u0012\u0006\u0010\u000f\u001a\u00020\u0010\u0012\u0006\u0010\u0011\u001a\u00020\u000e¢\u0006\u0004\b\u0012\u0010\u0013J\u0010\u0010$\u001a\u00020\u0003HÆ\u0003¢\u0006\u0004\b%\u0010\u0015J\t\u0010&\u001a\u00020\u0005HÆ\u0003J\u0010\u0010'\u001a\u00020\u0007HÆ\u0003¢\u0006\u0004\b(\u0010\u001aJ\u000f\u0010)\u001a\b\u0012\u0004\u0012\u00020\n0\tHÆ\u0003J\t\u0010*\u001a\u00020\fHÆ\u0003J\t\u0010+\u001a\u00020\u000eHÆ\u0003J\t\u0010,\u001a\u00020\u0010HÆ\u0003J\t\u0010-\u001a\u00020\u000eHÆ\u0003Jf\u0010.\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\b\b\u0002\u0010\u0004\u001a\u00020\u00052\b\b\u0002\u0010\u0006\u001a\u00020\u00072\u000e\b\u0002\u0010\b\u001a\b\u0012\u0004\u0012\u00020\n0\t2\b\b\u0002\u0010\u000b\u001a\u00020\f2\b\b\u0002\u0010\r\u001a\u00020\u000e2\b\b\u0002\u0010\u000f\u001a\u00020\u00102\b\b\u0002\u0010\u0011\u001a\u00020\u000eHÆ\u0001¢\u0006\u0004\b/\u00100J\u0013\u00101\u001a\u00020\u000e2\b\u00102\u001a\u0004\u0018\u000103HÖ\u0003J\t\u00104\u001a\u00020\fHÖ\u0001J\t\u00105\u001a\u000206HÖ\u0001R\u0016\u0010\u0002\u001a\u00020\u0003X\u0096\u0004¢\u0006\n\n\u0002\u0010\u0016\u001a\u0004\b\u0014\u0010\u0015R\u0011\u0010\u0004\u001a\u00020\u0005¢\u0006\b\n\u0000\u001a\u0004\b\u0017\u0010\u0018R\u0013\u0010\u0006\u001a\u00020\u0007¢\u0006\n\n\u0002\u0010\u001b\u001a\u0004\b\u0019\u0010\u001aR\u0017\u0010\b\u001a\b\u0012\u0004\u0012\u00020\n0\t¢\u0006\b\n\u0000\u001a\u0004\b\u001c\u0010\u001dR\u0011\u0010\u000b\u001a\u00020\f¢\u0006\b\n\u0000\u001a\u0004\b\u001e\u0010\u001fR\u0011\u0010\r\u001a\u00020\u000e¢\u0006\b\n\u0000\u001a\u0004\b\r\u0010 R\u0011\u0010\u000f\u001a\u00020\u0010¢\u0006\b\n\u0000\u001a\u0004\b!\u0010\"R\u0011\u0010\u0011\u001a\u00020\u000e¢\u0006\b\n\u0000\u001a\u0004\b#\u0010 ¨\u00067"}, d2 = {"Lcom/discord/chat/presentation/message/messagepart/MediaMosaicAttachmentMessageAccessory;", "Lcom/discord/chat/presentation/message/messagepart/MessageAccessory;", "messageId", "Lcom/discord/primitives/MessageId;", "margins", "Lcom/discord/chat/presentation/message/messagepart/MessageMargins;", "channelId", "Lcom/discord/primitives/ChannelId;", "attachments", "", "Lcom/discord/chat/presentation/message/messagepart/MessageAttachmentAccessory;", "constrainedWidth", "", "isForwardedContent", "", "messageState", "Lcom/discord/chat/bridge/MessageState;", "shouldAutoPlayGif", "<init>", "(Ljava/lang/String;Lcom/discord/chat/presentation/message/messagepart/MessageMargins;JLjava/util/List;IZLcom/discord/chat/bridge/MessageState;ZLkotlin/jvm/internal/DefaultConstructorMarker;)V", "getMessageId-3Eiw7ao", "()Ljava/lang/String;", "Ljava/lang/String;", "getMargins", "()Lcom/discord/chat/presentation/message/messagepart/MessageMargins;", "getChannelId-o4g7jtM", "()J", "J", "getAttachments", "()Ljava/util/List;", "getConstrainedWidth", "()I", "()Z", "getMessageState", "()Lcom/discord/chat/bridge/MessageState;", "getShouldAutoPlayGif", "component1", "component1-3Eiw7ao", "component2", "component3", "component3-o4g7jtM", "component4", "component5", "component6", "component7", "component8", "copy", "copy-SFu99iY", "(Ljava/lang/String;Lcom/discord/chat/presentation/message/messagepart/MessageMargins;JLjava/util/List;IZLcom/discord/chat/bridge/MessageState;Z)Lcom/discord/chat/presentation/message/messagepart/MediaMosaicAttachmentMessageAccessory;", "equals", "other", "", "hashCode", "toString", "", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class MediaMosaicAttachmentMessageAccessory extends MessageAccessory {
    @NotNull
    private final List<MessageAttachmentAccessory> attachments;
    private final long channelId;
    private final int constrainedWidth;
    private final boolean isForwardedContent;
    @NotNull
    private final MessageMargins margins;
    @NotNull
    private final String messageId;
    @NotNull
    private final MessageState messageState;
    private final boolean shouldAutoPlayGif;

    public /* synthetic */ MediaMosaicAttachmentMessageAccessory(String str, MessageMargins messageMargins, long j10, List list, int i10, boolean z10, MessageState messageState, boolean z11, DefaultConstructorMarker defaultConstructorMarker) {
        this(str, messageMargins, j10, list, i10, z10, messageState, z11);
    }

    /* renamed from: copy-SFu99iY$default  reason: not valid java name */
    public static /* synthetic */ MediaMosaicAttachmentMessageAccessory m615copySFu99iY$default(MediaMosaicAttachmentMessageAccessory mediaMosaicAttachmentMessageAccessory, String str, MessageMargins messageMargins, long j10, List list, int i10, boolean z10, MessageState messageState, boolean z11, int i11, Object obj) {
        if ((i11 & 1) != 0) {
            str = mediaMosaicAttachmentMessageAccessory.messageId;
        }
        if ((i11 & 2) != 0) {
            messageMargins = mediaMosaicAttachmentMessageAccessory.margins;
        }
        if ((i11 & 4) != 0) {
            j10 = mediaMosaicAttachmentMessageAccessory.channelId;
        }
        List<MessageAttachmentAccessory> list2 = list;
        if ((i11 & 8) != 0) {
            list2 = mediaMosaicAttachmentMessageAccessory.attachments;
        }
        if ((i11 & 16) != 0) {
            i10 = mediaMosaicAttachmentMessageAccessory.constrainedWidth;
        }
        if ((i11 & 32) != 0) {
            z10 = mediaMosaicAttachmentMessageAccessory.isForwardedContent;
        }
        if ((i11 & 64) != 0) {
            messageState = mediaMosaicAttachmentMessageAccessory.messageState;
        }
        if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
            z11 = mediaMosaicAttachmentMessageAccessory.shouldAutoPlayGif;
        }
        boolean z12 = z11;
        boolean z13 = z10;
        List list3 = list2;
        long j11 = j10;
        return mediaMosaicAttachmentMessageAccessory.m618copySFu99iY(str, messageMargins, j11, list3, i10, z13, messageState, z12);
    }

    @NotNull
    /* renamed from: component1-3Eiw7ao  reason: not valid java name */
    public final String m616component13Eiw7ao() {
        return this.messageId;
    }

    @NotNull
    public final MessageMargins component2() {
        return this.margins;
    }

    /* renamed from: component3-o4g7jtM  reason: not valid java name */
    public final long m617component3o4g7jtM() {
        return this.channelId;
    }

    @NotNull
    public final List<MessageAttachmentAccessory> component4() {
        return this.attachments;
    }

    public final int component5() {
        return this.constrainedWidth;
    }

    public final boolean component6() {
        return this.isForwardedContent;
    }

    @NotNull
    public final MessageState component7() {
        return this.messageState;
    }

    public final boolean component8() {
        return this.shouldAutoPlayGif;
    }

    @NotNull
    /* renamed from: copy-SFu99iY  reason: not valid java name */
    public final MediaMosaicAttachmentMessageAccessory m618copySFu99iY(@NotNull String messageId, @NotNull MessageMargins margins, long j10, @NotNull List<? extends MessageAttachmentAccessory> attachments, int i10, boolean z10, @NotNull MessageState messageState, boolean z11) {
        Intrinsics.checkNotNullParameter(messageId, "messageId");
        Intrinsics.checkNotNullParameter(margins, "margins");
        Intrinsics.checkNotNullParameter(attachments, "attachments");
        Intrinsics.checkNotNullParameter(messageState, "messageState");
        return new MediaMosaicAttachmentMessageAccessory(messageId, margins, j10, attachments, i10, z10, messageState, z11, null);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof MediaMosaicAttachmentMessageAccessory) {
            MediaMosaicAttachmentMessageAccessory mediaMosaicAttachmentMessageAccessory = (MediaMosaicAttachmentMessageAccessory) obj;
            return MessageId.m1088equalsimpl0(this.messageId, mediaMosaicAttachmentMessageAccessory.messageId) && Intrinsics.areEqual(this.margins, mediaMosaicAttachmentMessageAccessory.margins) && ChannelId.m1062equalsimpl0(this.channelId, mediaMosaicAttachmentMessageAccessory.channelId) && Intrinsics.areEqual(this.attachments, mediaMosaicAttachmentMessageAccessory.attachments) && this.constrainedWidth == mediaMosaicAttachmentMessageAccessory.constrainedWidth && this.isForwardedContent == mediaMosaicAttachmentMessageAccessory.isForwardedContent && this.messageState == mediaMosaicAttachmentMessageAccessory.messageState && this.shouldAutoPlayGif == mediaMosaicAttachmentMessageAccessory.shouldAutoPlayGif;
        }
        return false;
    }

    @NotNull
    public final List<MessageAttachmentAccessory> getAttachments() {
        return this.attachments;
    }

    /* renamed from: getChannelId-o4g7jtM  reason: not valid java name */
    public final long m619getChannelIdo4g7jtM() {
        return this.channelId;
    }

    public final int getConstrainedWidth() {
        return this.constrainedWidth;
    }

    @NotNull
    public final MessageMargins getMargins() {
        return this.margins;
    }

    @Override // com.discord.chat.presentation.message.messagepart.MessageAccessory
    @NotNull
    /* renamed from: getMessageId-3Eiw7ao */
    public String mo536getMessageId3Eiw7ao() {
        return this.messageId;
    }

    @NotNull
    public final MessageState getMessageState() {
        return this.messageState;
    }

    public final boolean getShouldAutoPlayGif() {
        return this.shouldAutoPlayGif;
    }

    public int hashCode() {
        return (((((((((((((MessageId.m1089hashCodeimpl(this.messageId) * 31) + this.margins.hashCode()) * 31) + ChannelId.m1063hashCodeimpl(this.channelId)) * 31) + this.attachments.hashCode()) * 31) + Integer.hashCode(this.constrainedWidth)) * 31) + Boolean.hashCode(this.isForwardedContent)) * 31) + this.messageState.hashCode()) * 31) + Boolean.hashCode(this.shouldAutoPlayGif);
    }

    public final boolean isForwardedContent() {
        return this.isForwardedContent;
    }

    @NotNull
    public String toString() {
        String m1091toStringimpl = MessageId.m1091toStringimpl(this.messageId);
        MessageMargins messageMargins = this.margins;
        String m1065toStringimpl = ChannelId.m1065toStringimpl(this.channelId);
        List<MessageAttachmentAccessory> list = this.attachments;
        int i10 = this.constrainedWidth;
        boolean z10 = this.isForwardedContent;
        MessageState messageState = this.messageState;
        boolean z11 = this.shouldAutoPlayGif;
        return "MediaMosaicAttachmentMessageAccessory(messageId=" + m1091toStringimpl + ", margins=" + messageMargins + ", channelId=" + m1065toStringimpl + ", attachments=" + list + ", constrainedWidth=" + i10 + ", isForwardedContent=" + z10 + ", messageState=" + messageState + ", shouldAutoPlayGif=" + z11 + ")";
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    /* JADX WARN: Multi-variable type inference failed */
    private MediaMosaicAttachmentMessageAccessory(String messageId, MessageMargins margins, long j10, List<? extends MessageAttachmentAccessory> attachments, int i10, boolean z10, MessageState messageState, boolean z11) {
        super(messageId, "multimedia attachment", false, 4, null);
        Intrinsics.checkNotNullParameter(messageId, "messageId");
        Intrinsics.checkNotNullParameter(margins, "margins");
        Intrinsics.checkNotNullParameter(attachments, "attachments");
        Intrinsics.checkNotNullParameter(messageState, "messageState");
        this.messageId = messageId;
        this.margins = margins;
        this.channelId = j10;
        this.attachments = attachments;
        this.constrainedWidth = i10;
        this.isForwardedContent = z10;
        this.messageState = messageState;
        this.shouldAutoPlayGif = z11;
    }
}
