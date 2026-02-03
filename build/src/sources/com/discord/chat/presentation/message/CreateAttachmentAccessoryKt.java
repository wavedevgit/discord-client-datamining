package com.discord.chat.presentation.message;

import com.discord.chat.bridge.Message;
import com.discord.chat.bridge.attachment.Attachment;
import com.discord.chat.bridge.attachment.AttachmentType;
import com.discord.chat.bridge.spoiler.SpoilerAttributes;
import com.discord.chat.presentation.message.messagepart.AudioAttachmentMessageAccessory;
import com.discord.chat.presentation.message.messagepart.FileAttachmentMessageAccessory;
import com.discord.chat.presentation.message.messagepart.ImageAttachmentMessageAccessory;
import com.discord.chat.presentation.message.messagepart.MessageAttachmentAccessory;
import com.discord.chat.presentation.message.messagepart.VideoAttachmentMessageAccessory;
import com.discord.primitives.MessageFlag;
import com.discord.primitives.MessageFlagKt;
import kotlin.Metadata;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000\"\n\u0000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0002\b\u0003\n\u0002\u0010\u000b\n\u0002\b\u0002\u001a;\u0010\u0000\u001a\u00020\u0001*\u00020\u00022\u0006\u0010\u0003\u001a\u00020\u00042\u0006\u0010\u0005\u001a\u00020\u00062\u0006\u0010\u0007\u001a\u00020\u00062\u0006\u0010\b\u001a\u00020\u00062\b\u0010\t\u001a\u0004\u0018\u00010\nH\u0000¢\u0006\u0002\u0010\u000b¨\u0006\f"}, d2 = {"createAttachmentAccessory", "Lcom/discord/chat/presentation/message/messagepart/MessageAttachmentAccessory;", "Lcom/discord/chat/bridge/attachment/Attachment;", "message", "Lcom/discord/chat/bridge/Message;", "index", "", "constrainedWidth", "radiusPx", "verifyAge", "", "(Lcom/discord/chat/bridge/attachment/Attachment;Lcom/discord/chat/bridge/Message;IIILjava/lang/Boolean;)Lcom/discord/chat/presentation/message/messagepart/MessageAttachmentAccessory;", "chat_release"}, k = 2, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class CreateAttachmentAccessoryKt {

    @Metadata(k = 3, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public /* synthetic */ class WhenMappings {
        public static final /* synthetic */ int[] $EnumSwitchMapping$0;

        static {
            int[] iArr = new int[AttachmentType.values().length];
            try {
                iArr[AttachmentType.Image.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[AttachmentType.Video.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                iArr[AttachmentType.File.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                iArr[AttachmentType.Audio.ordinal()] = 4;
            } catch (NoSuchFieldError unused4) {
            }
            $EnumSwitchMapping$0 = iArr;
        }
    }

    @NotNull
    public static final MessageAttachmentAccessory createAttachmentAccessory(@NotNull Attachment attachment, @NotNull Message message, int i10, int i11, int i12, Boolean bool) {
        String m239getId3Eiw7ao;
        boolean z10;
        boolean z11;
        boolean z12;
        Intrinsics.checkNotNullParameter(attachment, "<this>");
        Intrinsics.checkNotNullParameter(message, "message");
        SpoilerAttributes forAttachment = SpoilerAttributes.Companion.forAttachment(attachment, message, i10, bool);
        if (!Intrinsics.areEqual(message.isCurrentUserMessageAuthor(), Boolean.TRUE) || (m239getId3Eiw7ao = message.m240getNonceN_6c4I0()) == null) {
            m239getId3Eiw7ao = message.m239getId3Eiw7ao();
        }
        int i13 = WhenMappings.$EnumSwitchMapping$0[attachment.type().ordinal()];
        boolean z13 = false;
        if (i13 != 1) {
            if (i13 != 2) {
                if (i13 != 3) {
                    if (i13 == 4) {
                        return new AudioAttachmentMessageAccessory(message.m236getChannelIdo4g7jtM(), m239getId3Eiw7ao, attachment, i10, message.getAttachmentsOpacity(), message.m235getAuthorIdwUX8bhU(), message.getAudioAttachmentBackgroundColor(), MessageFlagKt.hasMessageFlag(Long.valueOf(message.getFlags()), MessageFlag.IS_VOICE_MESSAGE), null);
                    }
                    throw new jr.p();
                }
                return new FileAttachmentMessageAccessory(m239getId3Eiw7ao, attachment, i10, message.getAttachmentsOpacity(), forAttachment, attachment.getUploaderId(), attachment.getUploaderItemId(), null);
            }
            String str = m239getId3Eiw7ao;
            long m236getChannelIdo4g7jtM = message.m236getChannelIdo4g7jtM();
            Boolean useAttachmentGridLayout = message.getUseAttachmentGridLayout();
            if (useAttachmentGridLayout != null) {
                z10 = useAttachmentGridLayout.booleanValue();
            } else {
                z10 = false;
            }
            Boolean useAttachmentUploadPreview = message.getUseAttachmentUploadPreview();
            if (useAttachmentUploadPreview != null) {
                z11 = useAttachmentUploadPreview.booleanValue();
            } else {
                z11 = false;
            }
            if (z11 && attachment.getProgress() != null) {
                z12 = true;
            } else {
                z12 = false;
            }
            return new VideoAttachmentMessageAccessory(m236getChannelIdo4g7jtM, str, i10, attachment, message.getAttachmentsOpacity(), i11, i12, forAttachment, z10, z12, null);
        }
        String str2 = m239getId3Eiw7ao;
        Boolean useAttachmentGridLayout2 = message.getUseAttachmentGridLayout();
        if (useAttachmentGridLayout2 != null) {
            z13 = useAttachmentGridLayout2.booleanValue();
        }
        return new ImageAttachmentMessageAccessory(str2, attachment, i10, message.getAttachmentsOpacity(), i11, i12, forAttachment, z13, null);
    }
}
