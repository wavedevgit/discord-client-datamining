package com.discord.chat.reactevents;

import at.m;
import com.discord.primitives.MessageId;
import com.discord.primitives.MessageId$$serializer;
import com.discord.reactevents.ReactEvent;
import com.facebook.react.bridge.WritableMap;
import dt.n2;
import dt.v1;
import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.encoding.CompositeEncoder;
import kotlinx.serialization.internal.SerializationConstructorMarker;
import org.jetbrains.annotations.NotNull;
@m
@Metadata(d1 = {"\u0000L\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\b\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0010\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\b\u0087\b\u0018\u0000 ,2\u00020\u0001:\u0002+,B/\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0003\u0012\n\b\u0002\u0010\u0005\u001a\u0004\u0018\u00010\u0003\u0012\n\b\u0002\u0010\u0006\u001a\u0004\u0018\u00010\u0007¢\u0006\u0004\b\b\u0010\tBC\b\u0010\u0012\u0006\u0010\n\u001a\u00020\u000b\u0012\b\u0010\u0002\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u0004\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u0005\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u0006\u001a\u0004\u0018\u00010\u0007\u0012\b\u0010\f\u001a\u0004\u0018\u00010\r¢\u0006\u0004\b\b\u0010\u000eJ\t\u0010\u0015\u001a\u00020\u0003HÆ\u0003J\t\u0010\u0016\u001a\u00020\u0003HÆ\u0003J\u000b\u0010\u0017\u001a\u0004\u0018\u00010\u0003HÆ\u0003J\u0012\u0010\u0018\u001a\u0004\u0018\u00010\u0007HÆ\u0003¢\u0006\u0004\b\u0019\u0010\u0010J<\u0010\u001a\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\b\b\u0002\u0010\u0004\u001a\u00020\u00032\n\b\u0002\u0010\u0005\u001a\u0004\u0018\u00010\u00032\n\b\u0002\u0010\u0006\u001a\u0004\u0018\u00010\u0007HÆ\u0001¢\u0006\u0004\b\u001b\u0010\u001cJ\u0013\u0010\u001d\u001a\u00020\u001e2\b\u0010\u001f\u001a\u0004\u0018\u00010 HÖ\u0003J\t\u0010!\u001a\u00020\u000bHÖ\u0001J\t\u0010\"\u001a\u00020\u0003HÖ\u0001J%\u0010#\u001a\u00020$2\u0006\u0010%\u001a\u00020\u00002\u0006\u0010&\u001a\u00020'2\u0006\u0010(\u001a\u00020)H\u0001¢\u0006\u0002\b*R\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u000f\u0010\u0010R\u0011\u0010\u0004\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0011\u0010\u0010R\u0013\u0010\u0005\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0012\u0010\u0010R\u0015\u0010\u0006\u001a\u0004\u0018\u00010\u0007¢\u0006\n\n\u0002\u0010\u0014\u001a\u0004\b\u0013\u0010\u0010¨\u0006-"}, d2 = {"Lcom/discord/chat/reactevents/TapSoundmojiData;", "Lcom/discord/reactevents/ReactEvent;", "soundId", "", "channelId", "guildId", "messageId", "Lcom/discord/primitives/MessageId;", "<init>", "(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Lkotlin/jvm/internal/DefaultConstructorMarker;)V", "seen0", "", "serializationConstructorMarker", "Lkotlinx/serialization/internal/SerializationConstructorMarker;", "(ILjava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Lkotlinx/serialization/internal/SerializationConstructorMarker;Lkotlin/jvm/internal/DefaultConstructorMarker;)V", "getSoundId", "()Ljava/lang/String;", "getChannelId", "getGuildId", "getMessageId-N_6c4I0", "Ljava/lang/String;", "component1", "component2", "component3", "component4", "component4-N_6c4I0", "copy", "copy-TQNKv7g", "(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)Lcom/discord/chat/reactevents/TapSoundmojiData;", "equals", "", "other", "", "hashCode", "toString", "write$Self", "", "self", "output", "Lkotlinx/serialization/encoding/CompositeEncoder;", "serialDesc", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "write$Self$chat_release", "$serializer", "Companion", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class TapSoundmojiData implements ReactEvent {
    @NotNull
    public static final Companion Companion = new Companion(null);
    @NotNull
    private final String channelId;
    private final String guildId;
    private final String messageId;
    @NotNull
    private final String soundId;

    @Metadata(d1 = {"\u0000\u0016\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\f\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00060\u0005¨\u0006\u0007"}, d2 = {"Lcom/discord/chat/reactevents/TapSoundmojiData$Companion;", "", "<init>", "()V", "serializer", "Lkotlinx/serialization/KSerializer;", "Lcom/discord/chat/reactevents/TapSoundmojiData;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class Companion {
        private Companion() {
        }

        @NotNull
        public final KSerializer serializer() {
            return TapSoundmojiData$$serializer.INSTANCE;
        }

        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }
    }

    public /* synthetic */ TapSoundmojiData(int i10, String str, String str2, String str3, String str4, SerializationConstructorMarker serializationConstructorMarker, DefaultConstructorMarker defaultConstructorMarker) {
        this(i10, str, str2, str3, str4, serializationConstructorMarker);
    }

    /* renamed from: copy-TQNKv7g$default  reason: not valid java name */
    public static /* synthetic */ TapSoundmojiData m840copyTQNKv7g$default(TapSoundmojiData tapSoundmojiData, String str, String str2, String str3, String str4, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            str = tapSoundmojiData.soundId;
        }
        if ((i10 & 2) != 0) {
            str2 = tapSoundmojiData.channelId;
        }
        if ((i10 & 4) != 0) {
            str3 = tapSoundmojiData.guildId;
        }
        if ((i10 & 8) != 0) {
            str4 = tapSoundmojiData.messageId;
        }
        return tapSoundmojiData.m842copyTQNKv7g(str, str2, str3, str4);
    }

    public static final /* synthetic */ void write$Self$chat_release(TapSoundmojiData tapSoundmojiData, CompositeEncoder compositeEncoder, SerialDescriptor serialDescriptor) {
        MessageId messageId;
        compositeEncoder.y(serialDescriptor, 0, tapSoundmojiData.soundId);
        compositeEncoder.y(serialDescriptor, 1, tapSoundmojiData.channelId);
        if (compositeEncoder.z(serialDescriptor, 2) || tapSoundmojiData.guildId != null) {
            compositeEncoder.s(serialDescriptor, 2, n2.f20978a, tapSoundmojiData.guildId);
        }
        if (compositeEncoder.z(serialDescriptor, 3) || tapSoundmojiData.messageId != null) {
            MessageId$$serializer messageId$$serializer = MessageId$$serializer.INSTANCE;
            String str = tapSoundmojiData.messageId;
            if (str != null) {
                messageId = MessageId.m1085boximpl(str);
            } else {
                messageId = null;
            }
            compositeEncoder.s(serialDescriptor, 3, messageId$$serializer, messageId);
        }
    }

    @NotNull
    public final String component1() {
        return this.soundId;
    }

    @NotNull
    public final String component2() {
        return this.channelId;
    }

    public final String component3() {
        return this.guildId;
    }

    /* renamed from: component4-N_6c4I0  reason: not valid java name */
    public final String m841component4N_6c4I0() {
        return this.messageId;
    }

    @NotNull
    /* renamed from: copy-TQNKv7g  reason: not valid java name */
    public final TapSoundmojiData m842copyTQNKv7g(@NotNull String soundId, @NotNull String channelId, String str, String str2) {
        Intrinsics.checkNotNullParameter(soundId, "soundId");
        Intrinsics.checkNotNullParameter(channelId, "channelId");
        return new TapSoundmojiData(soundId, channelId, str, str2, null);
    }

    public boolean equals(Object obj) {
        boolean m1089equalsimpl0;
        if (this == obj) {
            return true;
        }
        if (obj instanceof TapSoundmojiData) {
            TapSoundmojiData tapSoundmojiData = (TapSoundmojiData) obj;
            if (Intrinsics.areEqual(this.soundId, tapSoundmojiData.soundId) && Intrinsics.areEqual(this.channelId, tapSoundmojiData.channelId) && Intrinsics.areEqual(this.guildId, tapSoundmojiData.guildId)) {
                String str = this.messageId;
                String str2 = tapSoundmojiData.messageId;
                if (str == null) {
                    if (str2 == null) {
                        m1089equalsimpl0 = true;
                    }
                    m1089equalsimpl0 = false;
                } else {
                    if (str2 != null) {
                        m1089equalsimpl0 = MessageId.m1089equalsimpl0(str, str2);
                    }
                    m1089equalsimpl0 = false;
                }
                return m1089equalsimpl0;
            }
            return false;
        }
        return false;
    }

    @NotNull
    public final String getChannelId() {
        return this.channelId;
    }

    public final String getGuildId() {
        return this.guildId;
    }

    /* renamed from: getMessageId-N_6c4I0  reason: not valid java name */
    public final String m843getMessageIdN_6c4I0() {
        return this.messageId;
    }

    @NotNull
    public final String getSoundId() {
        return this.soundId;
    }

    public int hashCode() {
        int hashCode = ((this.soundId.hashCode() * 31) + this.channelId.hashCode()) * 31;
        String str = this.guildId;
        int hashCode2 = (hashCode + (str == null ? 0 : str.hashCode())) * 31;
        String str2 = this.messageId;
        return hashCode2 + (str2 != null ? MessageId.m1090hashCodeimpl(str2) : 0);
    }

    @Override // com.discord.reactevents.ReactEvent
    @NotNull
    public WritableMap serialize() {
        return ReactEvent.DefaultImpls.serialize(this);
    }

    @NotNull
    public String toString() {
        String str = this.soundId;
        String str2 = this.channelId;
        String str3 = this.guildId;
        String str4 = this.messageId;
        String m1092toStringimpl = str4 == null ? "null" : MessageId.m1092toStringimpl(str4);
        return "TapSoundmojiData(soundId=" + str + ", channelId=" + str2 + ", guildId=" + str3 + ", messageId=" + m1092toStringimpl + ")";
    }

    public /* synthetic */ TapSoundmojiData(String str, String str2, String str3, String str4, DefaultConstructorMarker defaultConstructorMarker) {
        this(str, str2, str3, str4);
    }

    private /* synthetic */ TapSoundmojiData(int i10, String str, String str2, String str3, String str4, SerializationConstructorMarker serializationConstructorMarker) {
        if (3 != (i10 & 3)) {
            v1.b(i10, 3, TapSoundmojiData$$serializer.INSTANCE.getDescriptor());
        }
        this.soundId = str;
        this.channelId = str2;
        if ((i10 & 4) == 0) {
            this.guildId = null;
        } else {
            this.guildId = str3;
        }
        if ((i10 & 8) == 0) {
            this.messageId = null;
        } else {
            this.messageId = str4;
        }
    }

    private TapSoundmojiData(String soundId, String channelId, String str, String str2) {
        Intrinsics.checkNotNullParameter(soundId, "soundId");
        Intrinsics.checkNotNullParameter(channelId, "channelId");
        this.soundId = soundId;
        this.channelId = channelId;
        this.guildId = str;
        this.messageId = str2;
    }

    public /* synthetic */ TapSoundmojiData(String str, String str2, String str3, String str4, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this(str, str2, (i10 & 4) != 0 ? null : str3, (i10 & 8) != 0 ? null : str4, null);
    }
}
