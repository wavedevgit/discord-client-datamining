package com.discord.chat.presentation.message.messagepart;

import com.discord.chat.bridge.attachment.Attachment;
import com.discord.chat.bridge.spoiler.SpoilerAttributes;
import com.discord.primitives.MessageId;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000@\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0000\n\u0002\u0010\u0007\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000b\n\u0002\b \n\u0002\u0010\u0000\n\u0002\b\u0002\n\u0002\u0010\u000e\n\u0000\b\u0086\b\u0018\u00002\u00020\u0001BK\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0005\u0012\u0006\u0010\u0006\u001a\u00020\u0007\u0012\b\u0010\b\u001a\u0004\u0018\u00010\t\u0012\u0006\u0010\n\u001a\u00020\u0007\u0012\u0006\u0010\u000b\u001a\u00020\u0007\u0012\b\u0010\f\u001a\u0004\u0018\u00010\r\u0012\u0006\u0010\u000e\u001a\u00020\u000f¢\u0006\u0004\b\u0010\u0010\u0011J\u0010\u0010\"\u001a\u00020\u0003HÆ\u0003¢\u0006\u0004\b#\u0010\u0013J\t\u0010$\u001a\u00020\u0005HÆ\u0003J\t\u0010%\u001a\u00020\u0007HÆ\u0003J\u0010\u0010&\u001a\u0004\u0018\u00010\tHÆ\u0003¢\u0006\u0002\u0010\u001aJ\t\u0010'\u001a\u00020\u0007HÆ\u0003J\t\u0010(\u001a\u00020\u0007HÆ\u0003J\u000b\u0010)\u001a\u0004\u0018\u00010\rHÆ\u0003J\t\u0010*\u001a\u00020\u000fHÆ\u0003Jd\u0010+\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\b\b\u0002\u0010\u0004\u001a\u00020\u00052\b\b\u0002\u0010\u0006\u001a\u00020\u00072\n\b\u0002\u0010\b\u001a\u0004\u0018\u00010\t2\b\b\u0002\u0010\n\u001a\u00020\u00072\b\b\u0002\u0010\u000b\u001a\u00020\u00072\n\b\u0002\u0010\f\u001a\u0004\u0018\u00010\r2\b\b\u0002\u0010\u000e\u001a\u00020\u000fHÆ\u0001¢\u0006\u0004\b,\u0010-J\u0013\u0010.\u001a\u00020\u000f2\b\u0010/\u001a\u0004\u0018\u000100HÖ\u0003J\t\u00101\u001a\u00020\u0007HÖ\u0001J\t\u00102\u001a\u000203HÖ\u0001R\u0016\u0010\u0002\u001a\u00020\u0003X\u0096\u0004¢\u0006\n\n\u0002\u0010\u0014\u001a\u0004\b\u0012\u0010\u0013R\u0014\u0010\u0004\u001a\u00020\u0005X\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\b\u0015\u0010\u0016R\u0014\u0010\u0006\u001a\u00020\u0007X\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\b\u0017\u0010\u0018R\u0018\u0010\b\u001a\u0004\u0018\u00010\tX\u0096\u0004¢\u0006\n\n\u0002\u0010\u001b\u001a\u0004\b\u0019\u0010\u001aR\u0011\u0010\n\u001a\u00020\u0007¢\u0006\b\n\u0000\u001a\u0004\b\u001c\u0010\u0018R\u0011\u0010\u000b\u001a\u00020\u0007¢\u0006\b\n\u0000\u001a\u0004\b\u001d\u0010\u0018R\u0013\u0010\f\u001a\u0004\u0018\u00010\r¢\u0006\b\n\u0000\u001a\u0004\b\u001e\u0010\u001fR\u0011\u0010\u000e\u001a\u00020\u000f¢\u0006\b\n\u0000\u001a\u0004\b \u0010!¨\u00064"}, d2 = {"Lcom/discord/chat/presentation/message/messagepart/ImageAttachmentMessageAccessory;", "Lcom/discord/chat/presentation/message/messagepart/MessageAttachmentAccessory;", "messageId", "Lcom/discord/primitives/MessageId;", "attachment", "Lcom/discord/chat/bridge/attachment/Attachment;", "attachmentIndex", "", "attachmentsOpacity", "", "constrainedWidth", "radiusPx", "spoilerAttributes", "Lcom/discord/chat/bridge/spoiler/SpoilerAttributes;", "useNewAltTextButton", "", "<init>", "(Ljava/lang/String;Lcom/discord/chat/bridge/attachment/Attachment;ILjava/lang/Float;IILcom/discord/chat/bridge/spoiler/SpoilerAttributes;ZLkotlin/jvm/internal/DefaultConstructorMarker;)V", "getMessageId-3Eiw7ao", "()Ljava/lang/String;", "Ljava/lang/String;", "getAttachment", "()Lcom/discord/chat/bridge/attachment/Attachment;", "getAttachmentIndex", "()I", "getAttachmentsOpacity", "()Ljava/lang/Float;", "Ljava/lang/Float;", "getConstrainedWidth", "getRadiusPx", "getSpoilerAttributes", "()Lcom/discord/chat/bridge/spoiler/SpoilerAttributes;", "getUseNewAltTextButton", "()Z", "component1", "component1-3Eiw7ao", "component2", "component3", "component4", "component5", "component6", "component7", "component8", "copy", "copy-NsYpSCE", "(Ljava/lang/String;Lcom/discord/chat/bridge/attachment/Attachment;ILjava/lang/Float;IILcom/discord/chat/bridge/spoiler/SpoilerAttributes;Z)Lcom/discord/chat/presentation/message/messagepart/ImageAttachmentMessageAccessory;", "equals", "other", "", "hashCode", "toString", "", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class ImageAttachmentMessageAccessory extends MessageAttachmentAccessory {
    @NotNull
    private final Attachment attachment;
    private final int attachmentIndex;
    private final Float attachmentsOpacity;
    private final int constrainedWidth;
    @NotNull
    private final String messageId;
    private final int radiusPx;
    private final SpoilerAttributes spoilerAttributes;
    private final boolean useNewAltTextButton;

    public /* synthetic */ ImageAttachmentMessageAccessory(String str, Attachment attachment, int i10, Float f10, int i11, int i12, SpoilerAttributes spoilerAttributes, boolean z10, DefaultConstructorMarker defaultConstructorMarker) {
        this(str, attachment, i10, f10, i11, i12, spoilerAttributes, z10);
    }

    /* renamed from: copy-NsYpSCE$default  reason: not valid java name */
    public static /* synthetic */ ImageAttachmentMessageAccessory m604copyNsYpSCE$default(ImageAttachmentMessageAccessory imageAttachmentMessageAccessory, String str, Attachment attachment, int i10, Float f10, int i11, int i12, SpoilerAttributes spoilerAttributes, boolean z10, int i13, Object obj) {
        if ((i13 & 1) != 0) {
            str = imageAttachmentMessageAccessory.messageId;
        }
        if ((i13 & 2) != 0) {
            attachment = imageAttachmentMessageAccessory.attachment;
        }
        if ((i13 & 4) != 0) {
            i10 = imageAttachmentMessageAccessory.attachmentIndex;
        }
        if ((i13 & 8) != 0) {
            f10 = imageAttachmentMessageAccessory.attachmentsOpacity;
        }
        if ((i13 & 16) != 0) {
            i11 = imageAttachmentMessageAccessory.constrainedWidth;
        }
        if ((i13 & 32) != 0) {
            i12 = imageAttachmentMessageAccessory.radiusPx;
        }
        if ((i13 & 64) != 0) {
            spoilerAttributes = imageAttachmentMessageAccessory.spoilerAttributes;
        }
        if ((i13 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
            z10 = imageAttachmentMessageAccessory.useNewAltTextButton;
        }
        SpoilerAttributes spoilerAttributes2 = spoilerAttributes;
        boolean z11 = z10;
        int i14 = i11;
        int i15 = i12;
        return imageAttachmentMessageAccessory.m606copyNsYpSCE(str, attachment, i10, f10, i14, i15, spoilerAttributes2, z11);
    }

    @NotNull
    /* renamed from: component1-3Eiw7ao  reason: not valid java name */
    public final String m605component13Eiw7ao() {
        return this.messageId;
    }

    @NotNull
    public final Attachment component2() {
        return this.attachment;
    }

    public final int component3() {
        return this.attachmentIndex;
    }

    public final Float component4() {
        return this.attachmentsOpacity;
    }

    public final int component5() {
        return this.constrainedWidth;
    }

    public final int component6() {
        return this.radiusPx;
    }

    public final SpoilerAttributes component7() {
        return this.spoilerAttributes;
    }

    public final boolean component8() {
        return this.useNewAltTextButton;
    }

    @NotNull
    /* renamed from: copy-NsYpSCE  reason: not valid java name */
    public final ImageAttachmentMessageAccessory m606copyNsYpSCE(@NotNull String messageId, @NotNull Attachment attachment, int i10, Float f10, int i11, int i12, SpoilerAttributes spoilerAttributes, boolean z10) {
        Intrinsics.checkNotNullParameter(messageId, "messageId");
        Intrinsics.checkNotNullParameter(attachment, "attachment");
        return new ImageAttachmentMessageAccessory(messageId, attachment, i10, f10, i11, i12, spoilerAttributes, z10, null);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof ImageAttachmentMessageAccessory) {
            ImageAttachmentMessageAccessory imageAttachmentMessageAccessory = (ImageAttachmentMessageAccessory) obj;
            return MessageId.m1087equalsimpl0(this.messageId, imageAttachmentMessageAccessory.messageId) && Intrinsics.areEqual(this.attachment, imageAttachmentMessageAccessory.attachment) && this.attachmentIndex == imageAttachmentMessageAccessory.attachmentIndex && Intrinsics.areEqual((Object) this.attachmentsOpacity, (Object) imageAttachmentMessageAccessory.attachmentsOpacity) && this.constrainedWidth == imageAttachmentMessageAccessory.constrainedWidth && this.radiusPx == imageAttachmentMessageAccessory.radiusPx && Intrinsics.areEqual(this.spoilerAttributes, imageAttachmentMessageAccessory.spoilerAttributes) && this.useNewAltTextButton == imageAttachmentMessageAccessory.useNewAltTextButton;
        }
        return false;
    }

    @Override // com.discord.chat.presentation.message.messagepart.MessageAttachmentAccessory
    @NotNull
    public Attachment getAttachment() {
        return this.attachment;
    }

    @Override // com.discord.chat.presentation.message.messagepart.MessageAttachmentAccessory
    public int getAttachmentIndex() {
        return this.attachmentIndex;
    }

    @Override // com.discord.chat.presentation.message.messagepart.MessageAttachmentAccessory
    public Float getAttachmentsOpacity() {
        return this.attachmentsOpacity;
    }

    public final int getConstrainedWidth() {
        return this.constrainedWidth;
    }

    @Override // com.discord.chat.presentation.message.messagepart.MessageAttachmentAccessory, com.discord.chat.presentation.message.messagepart.MessageAccessory
    @NotNull
    /* renamed from: getMessageId-3Eiw7ao */
    public String mo536getMessageId3Eiw7ao() {
        return this.messageId;
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
        int m1088hashCodeimpl = ((((MessageId.m1088hashCodeimpl(this.messageId) * 31) + this.attachment.hashCode()) * 31) + Integer.hashCode(this.attachmentIndex)) * 31;
        Float f10 = this.attachmentsOpacity;
        int hashCode = (((((m1088hashCodeimpl + (f10 == null ? 0 : f10.hashCode())) * 31) + Integer.hashCode(this.constrainedWidth)) * 31) + Integer.hashCode(this.radiusPx)) * 31;
        SpoilerAttributes spoilerAttributes = this.spoilerAttributes;
        return ((hashCode + (spoilerAttributes != null ? spoilerAttributes.hashCode() : 0)) * 31) + Boolean.hashCode(this.useNewAltTextButton);
    }

    @NotNull
    public String toString() {
        String m1090toStringimpl = MessageId.m1090toStringimpl(this.messageId);
        Attachment attachment = this.attachment;
        int i10 = this.attachmentIndex;
        Float f10 = this.attachmentsOpacity;
        int i11 = this.constrainedWidth;
        int i12 = this.radiusPx;
        SpoilerAttributes spoilerAttributes = this.spoilerAttributes;
        boolean z10 = this.useNewAltTextButton;
        return "ImageAttachmentMessageAccessory(messageId=" + m1090toStringimpl + ", attachment=" + attachment + ", attachmentIndex=" + i10 + ", attachmentsOpacity=" + f10 + ", constrainedWidth=" + i11 + ", radiusPx=" + i12 + ", spoilerAttributes=" + spoilerAttributes + ", useNewAltTextButton=" + z10 + ")";
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    private ImageAttachmentMessageAccessory(String messageId, Attachment attachment, int i10, Float f10, int i11, int i12, SpoilerAttributes spoilerAttributes, boolean z10) {
        super(messageId, attachment, i10, f10, null);
        Intrinsics.checkNotNullParameter(messageId, "messageId");
        Intrinsics.checkNotNullParameter(attachment, "attachment");
        this.messageId = messageId;
        this.attachment = attachment;
        this.attachmentIndex = i10;
        this.attachmentsOpacity = f10;
        this.constrainedWidth = i11;
        this.radiusPx = i12;
        this.spoilerAttributes = spoilerAttributes;
        this.useNewAltTextButton = z10;
    }
}
