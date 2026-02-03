package com.discord.chat.presentation.message.view.voicemessages;

import com.discord.chat.presentation.message.messagepart.AudioAttachmentMessageAccessory;
import com.discord.chat.presentation.message.view.voicemessages.AudioPlayerManager;
import com.discord.media_player.MediaSource;
import com.discord.media_player.MediaType;
import com.discord.primitives.ChannelId;
import kotlin.Metadata;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000$\n\u0000\n\u0002\u0010\t\n\u0000\n\u0002\u0010\b\n\u0000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0000\u001a\f\u0010\u0004\u001a\u00020\u0005*\u00020\u0006H\u0000\u001a\u0018\u0010\u0007\u001a\u00020\b*\u00020\u00052\n\b\u0002\u0010\t\u001a\u0004\u0018\u00010\nH\u0000\"\u000e\u0010\u0000\u001a\u00020\u0001X\u0080T¢\u0006\u0002\n\u0000\"\u000e\u0010\u0002\u001a\u00020\u0003X\u0080T¢\u0006\u0002\n\u0000¨\u0006\u000b"}, d2 = {"EMIT_EVENT_FREQUENCY_MS", "", "ANIMATION_LENGTH_MS", "", "toAudioSource", "Lcom/discord/chat/presentation/message/view/voicemessages/AudioPlayerManager$AudioSource;", "Lcom/discord/chat/presentation/message/messagepart/AudioAttachmentMessageAccessory;", "toMediaSource", "Lcom/discord/media_player/MediaSource;", "featureTag", "", "chat_release"}, k = 2, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class AudioPlayerUtilsKt {
    public static final int ANIMATION_LENGTH_MS = 500;
    public static final long EMIT_EVENT_FREQUENCY_MS = 50;

    @NotNull
    public static final AudioPlayerManager.AudioSource toAudioSource(@NotNull AudioAttachmentMessageAccessory audioAttachmentMessageAccessory) {
        Intrinsics.checkNotNullParameter(audioAttachmentMessageAccessory, "<this>");
        return new AudioPlayerManager.AudioSource(ChannelId.m1060boximpl(audioAttachmentMessageAccessory.m551getChannelIdo4g7jtM()), audioAttachmentMessageAccessory.mo538getMessageId3Eiw7ao(), audioAttachmentMessageAccessory.getAttachment().getUrl(), Integer.valueOf(audioAttachmentMessageAccessory.getAttachmentIndex()), null);
    }

    @NotNull
    public static final MediaSource toMediaSource(@NotNull AudioPlayerManager.AudioSource audioSource, String str) {
        String str2;
        Intrinsics.checkNotNullParameter(audioSource, "<this>");
        ChannelId m716getChannelIdqMVnFVQ = audioSource.m716getChannelIdqMVnFVQ();
        String m717getMessageId3Eiw7ao = audioSource.m717getMessageId3Eiw7ao();
        Integer index = audioSource.getIndex();
        String url = audioSource.getUrl();
        if (str == null) {
            str2 = "audio attachment: " + audioSource.getUrl();
        } else {
            str2 = str;
        }
        return new MediaSource(url, null, null, null, str2, MediaType.AUDIO, false, m716getChannelIdqMVnFVQ, m717getMessageId3Eiw7ao, index, null, null, 3150, null);
    }

    public static /* synthetic */ MediaSource toMediaSource$default(AudioPlayerManager.AudioSource audioSource, String str, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            str = null;
        }
        return toMediaSource(audioSource, str);
    }
}
