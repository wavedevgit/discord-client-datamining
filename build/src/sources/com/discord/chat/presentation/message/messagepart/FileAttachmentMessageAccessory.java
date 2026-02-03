package com.discord.chat.presentation.message.messagepart;

import com.discord.chat.bridge.attachment.Attachment;
import com.discord.chat.bridge.spoiler.SpoilerAttributes;
import com.discord.primitives.MessageId;
import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000>\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0000\n\u0002\u0010\u0007\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0002\b\u001d\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010\u0000\n\u0002\b\u0003\b\u0086\b\u0018\u00002\u00020\u0001BG\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0005\u0012\u0006\u0010\u0006\u001a\u00020\u0007\u0012\b\u0010\b\u001a\u0004\u0018\u00010\t\u0012\b\u0010\n\u001a\u0004\u0018\u00010\u000b\u0012\b\u0010\f\u001a\u0004\u0018\u00010\r\u0012\b\u0010\u000e\u001a\u0004\u0018\u00010\r¢\u0006\u0004\b\u000f\u0010\u0010J\u0010\u0010\u001f\u001a\u00020\u0003HÆ\u0003¢\u0006\u0004\b \u0010\u0012J\t\u0010!\u001a\u00020\u0005HÆ\u0003J\t\u0010\"\u001a\u00020\u0007HÆ\u0003J\u0010\u0010#\u001a\u0004\u0018\u00010\tHÆ\u0003¢\u0006\u0002\u0010\u0019J\u000b\u0010$\u001a\u0004\u0018\u00010\u000bHÆ\u0003J\u000b\u0010%\u001a\u0004\u0018\u00010\rHÆ\u0003J\u000b\u0010&\u001a\u0004\u0018\u00010\rHÆ\u0003J^\u0010'\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\b\b\u0002\u0010\u0004\u001a\u00020\u00052\b\b\u0002\u0010\u0006\u001a\u00020\u00072\n\b\u0002\u0010\b\u001a\u0004\u0018\u00010\t2\n\b\u0002\u0010\n\u001a\u0004\u0018\u00010\u000b2\n\b\u0002\u0010\f\u001a\u0004\u0018\u00010\r2\n\b\u0002\u0010\u000e\u001a\u0004\u0018\u00010\rHÆ\u0001¢\u0006\u0004\b(\u0010)J\u0013\u0010*\u001a\u00020+2\b\u0010,\u001a\u0004\u0018\u00010-HÖ\u0003J\t\u0010.\u001a\u00020\u0007HÖ\u0001J\t\u0010/\u001a\u00020\rHÖ\u0001R\u0016\u0010\u0002\u001a\u00020\u0003X\u0096\u0004¢\u0006\n\n\u0002\u0010\u0013\u001a\u0004\b\u0011\u0010\u0012R\u0014\u0010\u0004\u001a\u00020\u0005X\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\b\u0014\u0010\u0015R\u0014\u0010\u0006\u001a\u00020\u0007X\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\b\u0016\u0010\u0017R\u0018\u0010\b\u001a\u0004\u0018\u00010\tX\u0096\u0004¢\u0006\n\n\u0002\u0010\u001a\u001a\u0004\b\u0018\u0010\u0019R\u0013\u0010\n\u001a\u0004\u0018\u00010\u000b¢\u0006\b\n\u0000\u001a\u0004\b\u001b\u0010\u001cR\u0013\u0010\f\u001a\u0004\u0018\u00010\r¢\u0006\b\n\u0000\u001a\u0004\b\u001d\u0010\u0012R\u0013\u0010\u000e\u001a\u0004\u0018\u00010\r¢\u0006\b\n\u0000\u001a\u0004\b\u001e\u0010\u0012¨\u00060"}, d2 = {"Lcom/discord/chat/presentation/message/messagepart/FileAttachmentMessageAccessory;", "Lcom/discord/chat/presentation/message/messagepart/MessageAttachmentAccessory;", "messageId", "Lcom/discord/primitives/MessageId;", "attachment", "Lcom/discord/chat/bridge/attachment/Attachment;", "attachmentIndex", "", "attachmentsOpacity", "", "spoilerAttributes", "Lcom/discord/chat/bridge/spoiler/SpoilerAttributes;", "uploaderId", "", "uploaderItemId", "<init>", "(Ljava/lang/String;Lcom/discord/chat/bridge/attachment/Attachment;ILjava/lang/Float;Lcom/discord/chat/bridge/spoiler/SpoilerAttributes;Ljava/lang/String;Ljava/lang/String;Lkotlin/jvm/internal/DefaultConstructorMarker;)V", "getMessageId-3Eiw7ao", "()Ljava/lang/String;", "Ljava/lang/String;", "getAttachment", "()Lcom/discord/chat/bridge/attachment/Attachment;", "getAttachmentIndex", "()I", "getAttachmentsOpacity", "()Ljava/lang/Float;", "Ljava/lang/Float;", "getSpoilerAttributes", "()Lcom/discord/chat/bridge/spoiler/SpoilerAttributes;", "getUploaderId", "getUploaderItemId", "component1", "component1-3Eiw7ao", "component2", "component3", "component4", "component5", "component6", "component7", "copy", "copy-dB0-bEw", "(Ljava/lang/String;Lcom/discord/chat/bridge/attachment/Attachment;ILjava/lang/Float;Lcom/discord/chat/bridge/spoiler/SpoilerAttributes;Ljava/lang/String;Ljava/lang/String;)Lcom/discord/chat/presentation/message/messagepart/FileAttachmentMessageAccessory;", "equals", "", "other", "", "hashCode", "toString", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class FileAttachmentMessageAccessory extends MessageAttachmentAccessory {
    @NotNull
    private final Attachment attachment;
    private final int attachmentIndex;
    private final Float attachmentsOpacity;
    @NotNull
    private final String messageId;
    private final SpoilerAttributes spoilerAttributes;
    private final String uploaderId;
    private final String uploaderItemId;

    public /* synthetic */ FileAttachmentMessageAccessory(String str, Attachment attachment, int i10, Float f10, SpoilerAttributes spoilerAttributes, String str2, String str3, DefaultConstructorMarker defaultConstructorMarker) {
        this(str, attachment, i10, f10, spoilerAttributes, str2, str3);
    }

    /* renamed from: copy-dB0-bEw$default  reason: not valid java name */
    public static /* synthetic */ FileAttachmentMessageAccessory m571copydB0bEw$default(FileAttachmentMessageAccessory fileAttachmentMessageAccessory, String str, Attachment attachment, int i10, Float f10, SpoilerAttributes spoilerAttributes, String str2, String str3, int i11, Object obj) {
        if ((i11 & 1) != 0) {
            str = fileAttachmentMessageAccessory.messageId;
        }
        if ((i11 & 2) != 0) {
            attachment = fileAttachmentMessageAccessory.attachment;
        }
        if ((i11 & 4) != 0) {
            i10 = fileAttachmentMessageAccessory.attachmentIndex;
        }
        if ((i11 & 8) != 0) {
            f10 = fileAttachmentMessageAccessory.attachmentsOpacity;
        }
        if ((i11 & 16) != 0) {
            spoilerAttributes = fileAttachmentMessageAccessory.spoilerAttributes;
        }
        if ((i11 & 32) != 0) {
            str2 = fileAttachmentMessageAccessory.uploaderId;
        }
        if ((i11 & 64) != 0) {
            str3 = fileAttachmentMessageAccessory.uploaderItemId;
        }
        String str4 = str2;
        String str5 = str3;
        SpoilerAttributes spoilerAttributes2 = spoilerAttributes;
        int i12 = i10;
        return fileAttachmentMessageAccessory.m573copydB0bEw(str, attachment, i12, f10, spoilerAttributes2, str4, str5);
    }

    @NotNull
    /* renamed from: component1-3Eiw7ao  reason: not valid java name */
    public final String m572component13Eiw7ao() {
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

    public final SpoilerAttributes component5() {
        return this.spoilerAttributes;
    }

    public final String component6() {
        return this.uploaderId;
    }

    public final String component7() {
        return this.uploaderItemId;
    }

    @NotNull
    /* renamed from: copy-dB0-bEw  reason: not valid java name */
    public final FileAttachmentMessageAccessory m573copydB0bEw(@NotNull String messageId, @NotNull Attachment attachment, int i10, Float f10, SpoilerAttributes spoilerAttributes, String str, String str2) {
        Intrinsics.checkNotNullParameter(messageId, "messageId");
        Intrinsics.checkNotNullParameter(attachment, "attachment");
        return new FileAttachmentMessageAccessory(messageId, attachment, i10, f10, spoilerAttributes, str, str2, null);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof FileAttachmentMessageAccessory) {
            FileAttachmentMessageAccessory fileAttachmentMessageAccessory = (FileAttachmentMessageAccessory) obj;
            return MessageId.m1090equalsimpl0(this.messageId, fileAttachmentMessageAccessory.messageId) && Intrinsics.areEqual(this.attachment, fileAttachmentMessageAccessory.attachment) && this.attachmentIndex == fileAttachmentMessageAccessory.attachmentIndex && Intrinsics.areEqual((Object) this.attachmentsOpacity, (Object) fileAttachmentMessageAccessory.attachmentsOpacity) && Intrinsics.areEqual(this.spoilerAttributes, fileAttachmentMessageAccessory.spoilerAttributes) && Intrinsics.areEqual(this.uploaderId, fileAttachmentMessageAccessory.uploaderId) && Intrinsics.areEqual(this.uploaderItemId, fileAttachmentMessageAccessory.uploaderItemId);
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

    @Override // com.discord.chat.presentation.message.messagepart.MessageAttachmentAccessory, com.discord.chat.presentation.message.messagepart.MessageAccessory
    @NotNull
    /* renamed from: getMessageId-3Eiw7ao */
    public String mo538getMessageId3Eiw7ao() {
        return this.messageId;
    }

    public final SpoilerAttributes getSpoilerAttributes() {
        return this.spoilerAttributes;
    }

    public final String getUploaderId() {
        return this.uploaderId;
    }

    public final String getUploaderItemId() {
        return this.uploaderItemId;
    }

    public int hashCode() {
        int m1091hashCodeimpl = ((((MessageId.m1091hashCodeimpl(this.messageId) * 31) + this.attachment.hashCode()) * 31) + Integer.hashCode(this.attachmentIndex)) * 31;
        Float f10 = this.attachmentsOpacity;
        int hashCode = (m1091hashCodeimpl + (f10 == null ? 0 : f10.hashCode())) * 31;
        SpoilerAttributes spoilerAttributes = this.spoilerAttributes;
        int hashCode2 = (hashCode + (spoilerAttributes == null ? 0 : spoilerAttributes.hashCode())) * 31;
        String str = this.uploaderId;
        int hashCode3 = (hashCode2 + (str == null ? 0 : str.hashCode())) * 31;
        String str2 = this.uploaderItemId;
        return hashCode3 + (str2 != null ? str2.hashCode() : 0);
    }

    @NotNull
    public String toString() {
        String m1093toStringimpl = MessageId.m1093toStringimpl(this.messageId);
        Attachment attachment = this.attachment;
        int i10 = this.attachmentIndex;
        Float f10 = this.attachmentsOpacity;
        SpoilerAttributes spoilerAttributes = this.spoilerAttributes;
        String str = this.uploaderId;
        String str2 = this.uploaderItemId;
        return "FileAttachmentMessageAccessory(messageId=" + m1093toStringimpl + ", attachment=" + attachment + ", attachmentIndex=" + i10 + ", attachmentsOpacity=" + f10 + ", spoilerAttributes=" + spoilerAttributes + ", uploaderId=" + str + ", uploaderItemId=" + str2 + ")";
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    private FileAttachmentMessageAccessory(String messageId, Attachment attachment, int i10, Float f10, SpoilerAttributes spoilerAttributes, String str, String str2) {
        super(messageId, attachment, i10, f10, null);
        Intrinsics.checkNotNullParameter(messageId, "messageId");
        Intrinsics.checkNotNullParameter(attachment, "attachment");
        this.messageId = messageId;
        this.attachment = attachment;
        this.attachmentIndex = i10;
        this.attachmentsOpacity = f10;
        this.spoilerAttributes = spoilerAttributes;
        this.uploaderId = str;
        this.uploaderItemId = str2;
    }
}
