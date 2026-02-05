package com.discord.chat.bridge.contentnode;

import com.discord.primitives.ChannelId;
import com.discord.primitives.ChannelId$$serializer;
import com.discord.primitives.MessageId;
import com.discord.primitives.MessageId$$serializer;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import gt.n2;
import gt.v1;
import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.encoding.CompositeEncoder;
import kotlinx.serialization.internal.SerializationConstructorMarker;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000R\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u000b\n\u0002\b\u0005\n\u0002\u0010\b\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u001d\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\b\u0087\b\u0018\u0000 =2\u00020\u0001:\u0002<=BY\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0005\u0012\u0006\u0010\u0006\u001a\u00020\u0007\u0012\n\b\u0002\u0010\b\u001a\u0004\u0018\u00010\u0003\u0012\n\b\u0002\u0010\t\u001a\u0004\u0018\u00010\u0003\u0012\b\b\u0002\u0010\n\u001a\u00020\u000b\u0012\n\b\u0002\u0010\f\u001a\u0004\u0018\u00010\u0003\u0012\n\b\u0002\u0010\r\u001a\u0004\u0018\u00010\u0003¢\u0006\u0004\b\u000e\u0010\u000fBi\b\u0010\u0012\u0006\u0010\u0010\u001a\u00020\u0011\u0012\b\u0010\u0002\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u0004\u001a\u0004\u0018\u00010\u0005\u0012\b\u0010\u0006\u001a\u0004\u0018\u00010\u0007\u0012\b\u0010\b\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\t\u001a\u0004\u0018\u00010\u0003\u0012\u0006\u0010\n\u001a\u00020\u000b\u0012\b\u0010\f\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\r\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u0012\u001a\u0004\u0018\u00010\u0013¢\u0006\u0004\b\u000e\u0010\u0014J\t\u0010\"\u001a\u00020\u0003HÆ\u0003J\u0010\u0010#\u001a\u00020\u0005HÆ\u0003¢\u0006\u0004\b$\u0010\u0018J\u0010\u0010%\u001a\u00020\u0007HÆ\u0003¢\u0006\u0004\b&\u0010\u0016J\u000b\u0010'\u001a\u0004\u0018\u00010\u0003HÆ\u0003J\u000b\u0010(\u001a\u0004\u0018\u00010\u0003HÆ\u0003J\t\u0010)\u001a\u00020\u000bHÆ\u0003J\u000b\u0010*\u001a\u0004\u0018\u00010\u0003HÆ\u0003J\u000b\u0010+\u001a\u0004\u0018\u00010\u0003HÆ\u0003Jh\u0010,\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\b\b\u0002\u0010\u0004\u001a\u00020\u00052\b\b\u0002\u0010\u0006\u001a\u00020\u00072\n\b\u0002\u0010\b\u001a\u0004\u0018\u00010\u00032\n\b\u0002\u0010\t\u001a\u0004\u0018\u00010\u00032\b\b\u0002\u0010\n\u001a\u00020\u000b2\n\b\u0002\u0010\f\u001a\u0004\u0018\u00010\u00032\n\b\u0002\u0010\r\u001a\u0004\u0018\u00010\u0003HÆ\u0001¢\u0006\u0004\b-\u0010.J\u0013\u0010/\u001a\u00020\u000b2\b\u00100\u001a\u0004\u0018\u000101HÖ\u0003J\t\u00102\u001a\u00020\u0011HÖ\u0001J\t\u00103\u001a\u00020\u0003HÖ\u0001J%\u00104\u001a\u0002052\u0006\u00106\u001a\u00020\u00002\u0006\u00107\u001a\u0002082\u0006\u00109\u001a\u00020:H\u0001¢\u0006\u0002\b;R\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0015\u0010\u0016R\u0013\u0010\u0004\u001a\u00020\u0005¢\u0006\n\n\u0002\u0010\u0019\u001a\u0004\b\u0017\u0010\u0018R\u0013\u0010\u0006\u001a\u00020\u0007¢\u0006\n\n\u0002\u0010\u001b\u001a\u0004\b\u001a\u0010\u0016R\u0013\u0010\b\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u001c\u0010\u0016R\u0013\u0010\t\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u001d\u0010\u0016R\u0011\u0010\n\u001a\u00020\u000b¢\u0006\b\n\u0000\u001a\u0004\b\u001e\u0010\u001fR\u0013\u0010\f\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b \u0010\u0016R\u0013\u0010\r\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b!\u0010\u0016¨\u0006>"}, d2 = {"Lcom/discord/chat/bridge/contentnode/SoundmojiContentNode;", "Lcom/discord/chat/bridge/contentnode/ContentNode;", "soundId", "", "channelId", "Lcom/discord/primitives/ChannelId;", "messageId", "Lcom/discord/primitives/MessageId;", "content", "guildId", "jumboable", "", "emojiId", "emojiName", "<init>", "(Ljava/lang/String;JLjava/lang/String;Ljava/lang/String;Ljava/lang/String;ZLjava/lang/String;Ljava/lang/String;Lkotlin/jvm/internal/DefaultConstructorMarker;)V", "seen0", "", "serializationConstructorMarker", "Lkotlinx/serialization/internal/SerializationConstructorMarker;", "(ILjava/lang/String;Lcom/discord/primitives/ChannelId;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;ZLjava/lang/String;Ljava/lang/String;Lkotlinx/serialization/internal/SerializationConstructorMarker;Lkotlin/jvm/internal/DefaultConstructorMarker;)V", "getSoundId", "()Ljava/lang/String;", "getChannelId-o4g7jtM", "()J", "J", "getMessageId-3Eiw7ao", "Ljava/lang/String;", "getContent", "getGuildId", "getJumboable", "()Z", "getEmojiId", "getEmojiName", "component1", "component2", "component2-o4g7jtM", "component3", "component3-3Eiw7ao", "component4", "component5", "component6", "component7", "component8", "copy", "copy-FdtyiUI", "(Ljava/lang/String;JLjava/lang/String;Ljava/lang/String;Ljava/lang/String;ZLjava/lang/String;Ljava/lang/String;)Lcom/discord/chat/bridge/contentnode/SoundmojiContentNode;", "equals", "other", "", "hashCode", "toString", "write$Self", "", "self", "output", "Lkotlinx/serialization/encoding/CompositeEncoder;", "serialDesc", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "write$Self$chat_release", "$serializer", "Companion", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@dt.m
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class SoundmojiContentNode extends ContentNode {
    @NotNull
    public static final Companion Companion = new Companion(null);
    private final long channelId;
    private final String content;
    private final String emojiId;
    private final String emojiName;
    private final String guildId;
    private final boolean jumboable;
    @NotNull
    private final String messageId;
    @NotNull
    private final String soundId;

    @Metadata(d1 = {"\u0000\u0016\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\f\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00060\u0005¨\u0006\u0007"}, d2 = {"Lcom/discord/chat/bridge/contentnode/SoundmojiContentNode$Companion;", "", "<init>", "()V", "serializer", "Lkotlinx/serialization/KSerializer;", "Lcom/discord/chat/bridge/contentnode/SoundmojiContentNode;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class Companion {
        private Companion() {
        }

        @NotNull
        public final KSerializer serializer() {
            return SoundmojiContentNode$$serializer.INSTANCE;
        }

        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }
    }

    public /* synthetic */ SoundmojiContentNode(int i10, String str, ChannelId channelId, String str2, String str3, String str4, boolean z10, String str5, String str6, SerializationConstructorMarker serializationConstructorMarker, DefaultConstructorMarker defaultConstructorMarker) {
        this(i10, str, channelId, str2, str3, str4, z10, str5, str6, serializationConstructorMarker);
    }

    /* renamed from: copy-FdtyiUI$default  reason: not valid java name */
    public static /* synthetic */ SoundmojiContentNode m372copyFdtyiUI$default(SoundmojiContentNode soundmojiContentNode, String str, long j10, String str2, String str3, String str4, boolean z10, String str5, String str6, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            str = soundmojiContentNode.soundId;
        }
        if ((i10 & 2) != 0) {
            j10 = soundmojiContentNode.channelId;
        }
        if ((i10 & 4) != 0) {
            str2 = soundmojiContentNode.messageId;
        }
        if ((i10 & 8) != 0) {
            str3 = soundmojiContentNode.content;
        }
        if ((i10 & 16) != 0) {
            str4 = soundmojiContentNode.guildId;
        }
        if ((i10 & 32) != 0) {
            z10 = soundmojiContentNode.jumboable;
        }
        if ((i10 & 64) != 0) {
            str5 = soundmojiContentNode.emojiId;
        }
        if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
            str6 = soundmojiContentNode.emojiName;
        }
        String str7 = str5;
        String str8 = str6;
        return soundmojiContentNode.m375copyFdtyiUI(str, j10, str2, str3, str4, z10, str7, str8);
    }

    public static final /* synthetic */ void write$Self$chat_release(SoundmojiContentNode soundmojiContentNode, CompositeEncoder compositeEncoder, SerialDescriptor serialDescriptor) {
        compositeEncoder.x(serialDescriptor, 0, soundmojiContentNode.soundId);
        compositeEncoder.l(serialDescriptor, 1, ChannelId$$serializer.INSTANCE, ChannelId.m1059boximpl(soundmojiContentNode.channelId));
        compositeEncoder.l(serialDescriptor, 2, MessageId$$serializer.INSTANCE, MessageId.m1085boximpl(soundmojiContentNode.messageId));
        if (compositeEncoder.z(serialDescriptor, 3) || soundmojiContentNode.content != null) {
            compositeEncoder.A(serialDescriptor, 3, n2.f25302a, soundmojiContentNode.content);
        }
        if (compositeEncoder.z(serialDescriptor, 4) || soundmojiContentNode.guildId != null) {
            compositeEncoder.A(serialDescriptor, 4, n2.f25302a, soundmojiContentNode.guildId);
        }
        if (compositeEncoder.z(serialDescriptor, 5) || soundmojiContentNode.jumboable) {
            compositeEncoder.w(serialDescriptor, 5, soundmojiContentNode.jumboable);
        }
        if (compositeEncoder.z(serialDescriptor, 6) || soundmojiContentNode.emojiId != null) {
            compositeEncoder.A(serialDescriptor, 6, n2.f25302a, soundmojiContentNode.emojiId);
        }
        if (compositeEncoder.z(serialDescriptor, 7) || soundmojiContentNode.emojiName != null) {
            compositeEncoder.A(serialDescriptor, 7, n2.f25302a, soundmojiContentNode.emojiName);
        }
    }

    @NotNull
    public final String component1() {
        return this.soundId;
    }

    /* renamed from: component2-o4g7jtM  reason: not valid java name */
    public final long m373component2o4g7jtM() {
        return this.channelId;
    }

    @NotNull
    /* renamed from: component3-3Eiw7ao  reason: not valid java name */
    public final String m374component33Eiw7ao() {
        return this.messageId;
    }

    public final String component4() {
        return this.content;
    }

    public final String component5() {
        return this.guildId;
    }

    public final boolean component6() {
        return this.jumboable;
    }

    public final String component7() {
        return this.emojiId;
    }

    public final String component8() {
        return this.emojiName;
    }

    @NotNull
    /* renamed from: copy-FdtyiUI  reason: not valid java name */
    public final SoundmojiContentNode m375copyFdtyiUI(@NotNull String soundId, long j10, @NotNull String messageId, String str, String str2, boolean z10, String str3, String str4) {
        Intrinsics.checkNotNullParameter(soundId, "soundId");
        Intrinsics.checkNotNullParameter(messageId, "messageId");
        return new SoundmojiContentNode(soundId, j10, messageId, str, str2, z10, str3, str4, null);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof SoundmojiContentNode) {
            SoundmojiContentNode soundmojiContentNode = (SoundmojiContentNode) obj;
            return Intrinsics.areEqual(this.soundId, soundmojiContentNode.soundId) && ChannelId.m1063equalsimpl0(this.channelId, soundmojiContentNode.channelId) && MessageId.m1089equalsimpl0(this.messageId, soundmojiContentNode.messageId) && Intrinsics.areEqual(this.content, soundmojiContentNode.content) && Intrinsics.areEqual(this.guildId, soundmojiContentNode.guildId) && this.jumboable == soundmojiContentNode.jumboable && Intrinsics.areEqual(this.emojiId, soundmojiContentNode.emojiId) && Intrinsics.areEqual(this.emojiName, soundmojiContentNode.emojiName);
        }
        return false;
    }

    /* renamed from: getChannelId-o4g7jtM  reason: not valid java name */
    public final long m376getChannelIdo4g7jtM() {
        return this.channelId;
    }

    public final String getContent() {
        return this.content;
    }

    public final String getEmojiId() {
        return this.emojiId;
    }

    public final String getEmojiName() {
        return this.emojiName;
    }

    public final String getGuildId() {
        return this.guildId;
    }

    public final boolean getJumboable() {
        return this.jumboable;
    }

    @NotNull
    /* renamed from: getMessageId-3Eiw7ao  reason: not valid java name */
    public final String m377getMessageId3Eiw7ao() {
        return this.messageId;
    }

    @NotNull
    public final String getSoundId() {
        return this.soundId;
    }

    public int hashCode() {
        int hashCode = ((((this.soundId.hashCode() * 31) + ChannelId.m1064hashCodeimpl(this.channelId)) * 31) + MessageId.m1090hashCodeimpl(this.messageId)) * 31;
        String str = this.content;
        int hashCode2 = (hashCode + (str == null ? 0 : str.hashCode())) * 31;
        String str2 = this.guildId;
        int hashCode3 = (((hashCode2 + (str2 == null ? 0 : str2.hashCode())) * 31) + Boolean.hashCode(this.jumboable)) * 31;
        String str3 = this.emojiId;
        int hashCode4 = (hashCode3 + (str3 == null ? 0 : str3.hashCode())) * 31;
        String str4 = this.emojiName;
        return hashCode4 + (str4 != null ? str4.hashCode() : 0);
    }

    @NotNull
    public String toString() {
        String str = this.soundId;
        String m1066toStringimpl = ChannelId.m1066toStringimpl(this.channelId);
        String m1092toStringimpl = MessageId.m1092toStringimpl(this.messageId);
        String str2 = this.content;
        String str3 = this.guildId;
        boolean z10 = this.jumboable;
        String str4 = this.emojiId;
        String str5 = this.emojiName;
        return "SoundmojiContentNode(soundId=" + str + ", channelId=" + m1066toStringimpl + ", messageId=" + m1092toStringimpl + ", content=" + str2 + ", guildId=" + str3 + ", jumboable=" + z10 + ", emojiId=" + str4 + ", emojiName=" + str5 + ")";
    }

    public /* synthetic */ SoundmojiContentNode(String str, long j10, String str2, String str3, String str4, boolean z10, String str5, String str6, DefaultConstructorMarker defaultConstructorMarker) {
        this(str, j10, str2, str3, str4, z10, str5, str6);
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    private /* synthetic */ SoundmojiContentNode(int i10, String str, ChannelId channelId, String str2, String str3, String str4, boolean z10, String str5, String str6, SerializationConstructorMarker serializationConstructorMarker) {
        super(null);
        if (7 != (i10 & 7)) {
            v1.b(i10, 7, SoundmojiContentNode$$serializer.INSTANCE.getDescriptor());
        }
        this.soundId = str;
        this.channelId = channelId.m1068unboximpl();
        this.messageId = str2;
        if ((i10 & 8) == 0) {
            this.content = null;
        } else {
            this.content = str3;
        }
        if ((i10 & 16) == 0) {
            this.guildId = null;
        } else {
            this.guildId = str4;
        }
        if ((i10 & 32) == 0) {
            this.jumboable = false;
        } else {
            this.jumboable = z10;
        }
        if ((i10 & 64) == 0) {
            this.emojiId = null;
        } else {
            this.emojiId = str5;
        }
        if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) == 0) {
            this.emojiName = null;
        } else {
            this.emojiName = str6;
        }
    }

    public /* synthetic */ SoundmojiContentNode(String str, long j10, String str2, String str3, String str4, boolean z10, String str5, String str6, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this(str, j10, str2, (i10 & 8) != 0 ? null : str3, (i10 & 16) != 0 ? null : str4, (i10 & 32) != 0 ? false : z10, (i10 & 64) != 0 ? null : str5, (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0 ? null : str6, null);
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    private SoundmojiContentNode(String soundId, long j10, String messageId, String str, String str2, boolean z10, String str3, String str4) {
        super(null);
        Intrinsics.checkNotNullParameter(soundId, "soundId");
        Intrinsics.checkNotNullParameter(messageId, "messageId");
        this.soundId = soundId;
        this.channelId = j10;
        this.messageId = messageId;
        this.content = str;
        this.guildId = str2;
        this.jumboable = z10;
        this.emojiId = str3;
        this.emojiName = str4;
    }
}
