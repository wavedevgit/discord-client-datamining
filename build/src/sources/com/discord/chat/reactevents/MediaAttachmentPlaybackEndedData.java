package com.discord.chat.reactevents;

import at.v1;
import com.discord.primitives.MessageId;
import com.discord.primitives.MessageId$$serializer;
import com.discord.primitives.UserId;
import com.discord.primitives.UserId$$serializer;
import com.discord.reactevents.ReactEvent;
import com.facebook.react.bridge.WritableMap;
import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.encoding.CompositeEncoder;
import kotlinx.serialization.internal.SerializationConstructorMarker;
import org.jetbrains.annotations.NotNull;
import xs.m;
@Metadata(d1 = {"\u0000Z\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0007\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010\u000e\n\u0002\b\u0003\n\u0002\u0010\b\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u001b\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\b\u0087\b\u0018\u0000 ;2\u00020\u0001:\u0002:;B?\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0005\u0012\u0006\u0010\u0006\u001a\u00020\u0005\u0012\u0006\u0010\u0007\u001a\u00020\b\u0012\u0006\u0010\t\u001a\u00020\u0005\u0012\u0006\u0010\n\u001a\u00020\u000b\u0012\u0006\u0010\f\u001a\u00020\r¢\u0006\u0004\b\u000e\u0010\u000fBY\b\u0010\u0012\u0006\u0010\u0010\u001a\u00020\u0011\u0012\b\u0010\u0002\u001a\u0004\u0018\u00010\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0005\u0012\u0006\u0010\u0006\u001a\u00020\u0005\u0012\b\u0010\u0007\u001a\u0004\u0018\u00010\b\u0012\u0006\u0010\t\u001a\u00020\u0005\u0012\u0006\u0010\n\u001a\u00020\u000b\u0012\b\u0010\f\u001a\u0004\u0018\u00010\r\u0012\b\u0010\u0012\u001a\u0004\u0018\u00010\u0013¢\u0006\u0004\b\u000e\u0010\u0014J\u0010\u0010!\u001a\u00020\u0003HÆ\u0003¢\u0006\u0004\b\"\u0010\u0016J\t\u0010#\u001a\u00020\u0005HÆ\u0003J\t\u0010$\u001a\u00020\u0005HÆ\u0003J\u0010\u0010%\u001a\u00020\bHÆ\u0003¢\u0006\u0004\b&\u0010\u001cJ\t\u0010'\u001a\u00020\u0005HÆ\u0003J\t\u0010(\u001a\u00020\u000bHÆ\u0003J\t\u0010)\u001a\u00020\rHÆ\u0003JV\u0010*\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\b\b\u0002\u0010\u0004\u001a\u00020\u00052\b\b\u0002\u0010\u0006\u001a\u00020\u00052\b\b\u0002\u0010\u0007\u001a\u00020\b2\b\b\u0002\u0010\t\u001a\u00020\u00052\b\b\u0002\u0010\n\u001a\u00020\u000b2\b\b\u0002\u0010\f\u001a\u00020\rHÆ\u0001¢\u0006\u0004\b+\u0010,J\u0013\u0010-\u001a\u00020\u000b2\b\u0010.\u001a\u0004\u0018\u00010/HÖ\u0003J\t\u00100\u001a\u00020\u0011HÖ\u0001J\t\u00101\u001a\u00020\rHÖ\u0001J%\u00102\u001a\u0002032\u0006\u00104\u001a\u00020\u00002\u0006\u00105\u001a\u0002062\u0006\u00107\u001a\u000208H\u0001¢\u0006\u0002\b9R\u0013\u0010\u0002\u001a\u00020\u0003¢\u0006\n\n\u0002\u0010\u0017\u001a\u0004\b\u0015\u0010\u0016R\u0011\u0010\u0004\u001a\u00020\u0005¢\u0006\b\n\u0000\u001a\u0004\b\u0018\u0010\u0019R\u0011\u0010\u0006\u001a\u00020\u0005¢\u0006\b\n\u0000\u001a\u0004\b\u001a\u0010\u0019R\u0013\u0010\u0007\u001a\u00020\b¢\u0006\n\n\u0002\u0010\u001d\u001a\u0004\b\u001b\u0010\u001cR\u0011\u0010\t\u001a\u00020\u0005¢\u0006\b\n\u0000\u001a\u0004\b\u001e\u0010\u0019R\u0011\u0010\n\u001a\u00020\u000b¢\u0006\b\n\u0000\u001a\u0004\b\n\u0010\u001fR\u0011\u0010\f\u001a\u00020\r¢\u0006\b\n\u0000\u001a\u0004\b \u0010\u0016¨\u0006<"}, d2 = {"Lcom/discord/chat/reactevents/MediaAttachmentPlaybackEndedData;", "Lcom/discord/reactevents/ReactEvent;", "messageId", "Lcom/discord/primitives/MessageId;", "totalDurationSecs", "", "endDurationSecs", "senderUserId", "Lcom/discord/primitives/UserId;", "durationListeningSecs", "isVoiceMessage", "", "attachmentId", "", "<init>", "(Ljava/lang/String;FFJFZLjava/lang/String;Lkotlin/jvm/internal/DefaultConstructorMarker;)V", "seen0", "", "serializationConstructorMarker", "Lkotlinx/serialization/internal/SerializationConstructorMarker;", "(ILjava/lang/String;FFLcom/discord/primitives/UserId;FZLjava/lang/String;Lkotlinx/serialization/internal/SerializationConstructorMarker;Lkotlin/jvm/internal/DefaultConstructorMarker;)V", "getMessageId-3Eiw7ao", "()Ljava/lang/String;", "Ljava/lang/String;", "getTotalDurationSecs", "()F", "getEndDurationSecs", "getSenderUserId-re6GcUE", "()J", "J", "getDurationListeningSecs", "()Z", "getAttachmentId", "component1", "component1-3Eiw7ao", "component2", "component3", "component4", "component4-re6GcUE", "component5", "component6", "component7", "copy", "copy-O97gnAM", "(Ljava/lang/String;FFJFZLjava/lang/String;)Lcom/discord/chat/reactevents/MediaAttachmentPlaybackEndedData;", "equals", "other", "", "hashCode", "toString", "write$Self", "", "self", "output", "Lkotlinx/serialization/encoding/CompositeEncoder;", "serialDesc", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "write$Self$chat_release", "$serializer", "Companion", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@m
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class MediaAttachmentPlaybackEndedData implements ReactEvent {
    @NotNull
    public static final Companion Companion = new Companion(null);
    @NotNull
    private final String attachmentId;
    private final float durationListeningSecs;
    private final float endDurationSecs;
    private final boolean isVoiceMessage;
    @NotNull
    private final String messageId;
    private final long senderUserId;
    private final float totalDurationSecs;

    @Metadata(d1 = {"\u0000\u0016\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\f\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00060\u0005¨\u0006\u0007"}, d2 = {"Lcom/discord/chat/reactevents/MediaAttachmentPlaybackEndedData$Companion;", "", "<init>", "()V", "serializer", "Lkotlinx/serialization/KSerializer;", "Lcom/discord/chat/reactevents/MediaAttachmentPlaybackEndedData;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class Companion {
        private Companion() {
        }

        @NotNull
        public final KSerializer serializer() {
            return MediaAttachmentPlaybackEndedData$$serializer.INSTANCE;
        }

        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }
    }

    public /* synthetic */ MediaAttachmentPlaybackEndedData(int i10, String str, float f10, float f11, UserId userId, float f12, boolean z10, String str2, SerializationConstructorMarker serializationConstructorMarker, DefaultConstructorMarker defaultConstructorMarker) {
        this(i10, str, f10, f11, userId, f12, z10, str2, serializationConstructorMarker);
    }

    /* renamed from: copy-O97gnAM$default  reason: not valid java name */
    public static /* synthetic */ MediaAttachmentPlaybackEndedData m760copyO97gnAM$default(MediaAttachmentPlaybackEndedData mediaAttachmentPlaybackEndedData, String str, float f10, float f11, long j10, float f12, boolean z10, String str2, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            str = mediaAttachmentPlaybackEndedData.messageId;
        }
        if ((i10 & 2) != 0) {
            f10 = mediaAttachmentPlaybackEndedData.totalDurationSecs;
        }
        if ((i10 & 4) != 0) {
            f11 = mediaAttachmentPlaybackEndedData.endDurationSecs;
        }
        if ((i10 & 8) != 0) {
            j10 = mediaAttachmentPlaybackEndedData.senderUserId;
        }
        if ((i10 & 16) != 0) {
            f12 = mediaAttachmentPlaybackEndedData.durationListeningSecs;
        }
        if ((i10 & 32) != 0) {
            z10 = mediaAttachmentPlaybackEndedData.isVoiceMessage;
        }
        if ((i10 & 64) != 0) {
            str2 = mediaAttachmentPlaybackEndedData.attachmentId;
        }
        String str3 = str2;
        float f13 = f12;
        long j11 = j10;
        float f14 = f11;
        return mediaAttachmentPlaybackEndedData.m763copyO97gnAM(str, f10, f14, j11, f13, z10, str3);
    }

    public static final /* synthetic */ void write$Self$chat_release(MediaAttachmentPlaybackEndedData mediaAttachmentPlaybackEndedData, CompositeEncoder compositeEncoder, SerialDescriptor serialDescriptor) {
        compositeEncoder.j(serialDescriptor, 0, MessageId$$serializer.INSTANCE, MessageId.m1084boximpl(mediaAttachmentPlaybackEndedData.messageId));
        compositeEncoder.s(serialDescriptor, 1, mediaAttachmentPlaybackEndedData.totalDurationSecs);
        compositeEncoder.s(serialDescriptor, 2, mediaAttachmentPlaybackEndedData.endDurationSecs);
        compositeEncoder.j(serialDescriptor, 3, UserId$$serializer.INSTANCE, UserId.m1136boximpl(mediaAttachmentPlaybackEndedData.senderUserId));
        compositeEncoder.s(serialDescriptor, 4, mediaAttachmentPlaybackEndedData.durationListeningSecs);
        compositeEncoder.x(serialDescriptor, 5, mediaAttachmentPlaybackEndedData.isVoiceMessage);
        compositeEncoder.y(serialDescriptor, 6, mediaAttachmentPlaybackEndedData.attachmentId);
    }

    @NotNull
    /* renamed from: component1-3Eiw7ao  reason: not valid java name */
    public final String m761component13Eiw7ao() {
        return this.messageId;
    }

    public final float component2() {
        return this.totalDurationSecs;
    }

    public final float component3() {
        return this.endDurationSecs;
    }

    /* renamed from: component4-re6GcUE  reason: not valid java name */
    public final long m762component4re6GcUE() {
        return this.senderUserId;
    }

    public final float component5() {
        return this.durationListeningSecs;
    }

    public final boolean component6() {
        return this.isVoiceMessage;
    }

    @NotNull
    public final String component7() {
        return this.attachmentId;
    }

    @NotNull
    /* renamed from: copy-O97gnAM  reason: not valid java name */
    public final MediaAttachmentPlaybackEndedData m763copyO97gnAM(@NotNull String messageId, float f10, float f11, long j10, float f12, boolean z10, @NotNull String attachmentId) {
        Intrinsics.checkNotNullParameter(messageId, "messageId");
        Intrinsics.checkNotNullParameter(attachmentId, "attachmentId");
        return new MediaAttachmentPlaybackEndedData(messageId, f10, f11, j10, f12, z10, attachmentId, null);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof MediaAttachmentPlaybackEndedData) {
            MediaAttachmentPlaybackEndedData mediaAttachmentPlaybackEndedData = (MediaAttachmentPlaybackEndedData) obj;
            return MessageId.m1088equalsimpl0(this.messageId, mediaAttachmentPlaybackEndedData.messageId) && Float.compare(this.totalDurationSecs, mediaAttachmentPlaybackEndedData.totalDurationSecs) == 0 && Float.compare(this.endDurationSecs, mediaAttachmentPlaybackEndedData.endDurationSecs) == 0 && UserId.m1140equalsimpl0(this.senderUserId, mediaAttachmentPlaybackEndedData.senderUserId) && Float.compare(this.durationListeningSecs, mediaAttachmentPlaybackEndedData.durationListeningSecs) == 0 && this.isVoiceMessage == mediaAttachmentPlaybackEndedData.isVoiceMessage && Intrinsics.areEqual(this.attachmentId, mediaAttachmentPlaybackEndedData.attachmentId);
        }
        return false;
    }

    @NotNull
    public final String getAttachmentId() {
        return this.attachmentId;
    }

    public final float getDurationListeningSecs() {
        return this.durationListeningSecs;
    }

    public final float getEndDurationSecs() {
        return this.endDurationSecs;
    }

    @NotNull
    /* renamed from: getMessageId-3Eiw7ao  reason: not valid java name */
    public final String m764getMessageId3Eiw7ao() {
        return this.messageId;
    }

    /* renamed from: getSenderUserId-re6GcUE  reason: not valid java name */
    public final long m765getSenderUserIdre6GcUE() {
        return this.senderUserId;
    }

    public final float getTotalDurationSecs() {
        return this.totalDurationSecs;
    }

    public int hashCode() {
        return (((((((((((MessageId.m1089hashCodeimpl(this.messageId) * 31) + Float.hashCode(this.totalDurationSecs)) * 31) + Float.hashCode(this.endDurationSecs)) * 31) + UserId.m1141hashCodeimpl(this.senderUserId)) * 31) + Float.hashCode(this.durationListeningSecs)) * 31) + Boolean.hashCode(this.isVoiceMessage)) * 31) + this.attachmentId.hashCode();
    }

    public final boolean isVoiceMessage() {
        return this.isVoiceMessage;
    }

    @Override // com.discord.reactevents.ReactEvent
    @NotNull
    public WritableMap serialize() {
        return ReactEvent.DefaultImpls.serialize(this);
    }

    @NotNull
    public String toString() {
        String m1091toStringimpl = MessageId.m1091toStringimpl(this.messageId);
        float f10 = this.totalDurationSecs;
        float f11 = this.endDurationSecs;
        String m1143toStringimpl = UserId.m1143toStringimpl(this.senderUserId);
        float f12 = this.durationListeningSecs;
        boolean z10 = this.isVoiceMessage;
        String str = this.attachmentId;
        return "MediaAttachmentPlaybackEndedData(messageId=" + m1091toStringimpl + ", totalDurationSecs=" + f10 + ", endDurationSecs=" + f11 + ", senderUserId=" + m1143toStringimpl + ", durationListeningSecs=" + f12 + ", isVoiceMessage=" + z10 + ", attachmentId=" + str + ")";
    }

    public /* synthetic */ MediaAttachmentPlaybackEndedData(String str, float f10, float f11, long j10, float f12, boolean z10, String str2, DefaultConstructorMarker defaultConstructorMarker) {
        this(str, f10, f11, j10, f12, z10, str2);
    }

    private /* synthetic */ MediaAttachmentPlaybackEndedData(int i10, String str, float f10, float f11, UserId userId, float f12, boolean z10, String str2, SerializationConstructorMarker serializationConstructorMarker) {
        if (127 != (i10 & 127)) {
            v1.b(i10, 127, MediaAttachmentPlaybackEndedData$$serializer.INSTANCE.getDescriptor());
        }
        this.messageId = str;
        this.totalDurationSecs = f10;
        this.endDurationSecs = f11;
        this.senderUserId = userId.m1145unboximpl();
        this.durationListeningSecs = f12;
        this.isVoiceMessage = z10;
        this.attachmentId = str2;
    }

    private MediaAttachmentPlaybackEndedData(String messageId, float f10, float f11, long j10, float f12, boolean z10, String attachmentId) {
        Intrinsics.checkNotNullParameter(messageId, "messageId");
        Intrinsics.checkNotNullParameter(attachmentId, "attachmentId");
        this.messageId = messageId;
        this.totalDurationSecs = f10;
        this.endDurationSecs = f11;
        this.senderUserId = j10;
        this.durationListeningSecs = f12;
        this.isVoiceMessage = z10;
        this.attachmentId = attachmentId;
    }
}
