package com.discord.chat.reactevents;

import at.m;
import com.discord.react.utilities.NativeMapExtensionsKt;
import com.discord.reactevents.ReactEvent;
import com.facebook.react.bridge.WritableMap;
import dt.n2;
import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.encoding.CompositeEncoder;
import kotlinx.serialization.internal.SerializationConstructorMarker;
import lr.v;
import org.jetbrains.annotations.NotNull;
@m
@Metadata(d1 = {"\u0000L\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0002\b\u0005\n\u0002\u0010\b\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0006\n\u0002\u0018\u0002\n\u0002\b\u0005\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\b\u0081\b\u0018\u0000 &2\u00020\u0001:\u0002%&B+\u0012\n\b\u0002\u0010\u0002\u001a\u0004\u0018\u00010\u0003\u0012\n\b\u0002\u0010\u0004\u001a\u0004\u0018\u00010\u0003\u0012\n\b\u0002\u0010\u0005\u001a\u0004\u0018\u00010\u0003¢\u0006\u0004\b\u0006\u0010\u0007B9\b\u0010\u0012\u0006\u0010\b\u001a\u00020\t\u0012\b\u0010\u0002\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u0004\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u0005\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\n\u001a\u0004\u0018\u00010\u000b¢\u0006\u0004\b\u0006\u0010\fJ\b\u0010\u0011\u001a\u00020\u0012H\u0016J\u000b\u0010\u0013\u001a\u0004\u0018\u00010\u0003HÆ\u0003J\u000b\u0010\u0014\u001a\u0004\u0018\u00010\u0003HÆ\u0003J\u000b\u0010\u0015\u001a\u0004\u0018\u00010\u0003HÆ\u0003J-\u0010\u0016\u001a\u00020\u00002\n\b\u0002\u0010\u0002\u001a\u0004\u0018\u00010\u00032\n\b\u0002\u0010\u0004\u001a\u0004\u0018\u00010\u00032\n\b\u0002\u0010\u0005\u001a\u0004\u0018\u00010\u0003HÆ\u0001J\u0013\u0010\u0017\u001a\u00020\u00182\b\u0010\u0019\u001a\u0004\u0018\u00010\u001aHÖ\u0003J\t\u0010\u001b\u001a\u00020\tHÖ\u0001J\t\u0010\u001c\u001a\u00020\u0003HÖ\u0001J%\u0010\u001d\u001a\u00020\u001e2\u0006\u0010\u001f\u001a\u00020\u00002\u0006\u0010 \u001a\u00020!2\u0006\u0010\"\u001a\u00020#H\u0001¢\u0006\u0002\b$R\u0013\u0010\u0002\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\r\u0010\u000eR\u0013\u0010\u0004\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u000f\u0010\u000eR\u0013\u0010\u0005\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0010\u0010\u000e¨\u0006'"}, d2 = {"Lcom/discord/chat/reactevents/TapChannelData;", "Lcom/discord/reactevents/ReactEvent;", "guildId", "", "channelId", "messageId", "<init>", "(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)V", "seen0", "", "serializationConstructorMarker", "Lkotlinx/serialization/internal/SerializationConstructorMarker;", "(ILjava/lang/String;Ljava/lang/String;Ljava/lang/String;Lkotlinx/serialization/internal/SerializationConstructorMarker;)V", "getGuildId", "()Ljava/lang/String;", "getChannelId", "getMessageId", "serialize", "Lcom/facebook/react/bridge/WritableMap;", "component1", "component2", "component3", "copy", "equals", "", "other", "", "hashCode", "toString", "write$Self", "", "self", "output", "Lkotlinx/serialization/encoding/CompositeEncoder;", "serialDesc", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "write$Self$chat_release", "$serializer", "Companion", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class TapChannelData implements ReactEvent {
    @NotNull
    public static final Companion Companion = new Companion(null);
    private final String channelId;
    private final String guildId;
    private final String messageId;

    @Metadata(d1 = {"\u0000\u0016\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\f\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00060\u0005¨\u0006\u0007"}, d2 = {"Lcom/discord/chat/reactevents/TapChannelData$Companion;", "", "<init>", "()V", "serializer", "Lkotlinx/serialization/KSerializer;", "Lcom/discord/chat/reactevents/TapChannelData;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class Companion {
        private Companion() {
        }

        @NotNull
        public final KSerializer serializer() {
            return TapChannelData$$serializer.INSTANCE;
        }

        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }
    }

    public TapChannelData() {
        this((String) null, (String) null, (String) null, 7, (DefaultConstructorMarker) null);
    }

    public static /* synthetic */ TapChannelData copy$default(TapChannelData tapChannelData, String str, String str2, String str3, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            str = tapChannelData.guildId;
        }
        if ((i10 & 2) != 0) {
            str2 = tapChannelData.channelId;
        }
        if ((i10 & 4) != 0) {
            str3 = tapChannelData.messageId;
        }
        return tapChannelData.copy(str, str2, str3);
    }

    public static final /* synthetic */ void write$Self$chat_release(TapChannelData tapChannelData, CompositeEncoder compositeEncoder, SerialDescriptor serialDescriptor) {
        if (compositeEncoder.z(serialDescriptor, 0) || tapChannelData.guildId != null) {
            compositeEncoder.s(serialDescriptor, 0, n2.f20978a, tapChannelData.guildId);
        }
        if (compositeEncoder.z(serialDescriptor, 1) || tapChannelData.channelId != null) {
            compositeEncoder.s(serialDescriptor, 1, n2.f20978a, tapChannelData.channelId);
        }
        if (compositeEncoder.z(serialDescriptor, 2) || tapChannelData.messageId != null) {
            compositeEncoder.s(serialDescriptor, 2, n2.f20978a, tapChannelData.messageId);
        }
    }

    public final String component1() {
        return this.guildId;
    }

    public final String component2() {
        return this.channelId;
    }

    public final String component3() {
        return this.messageId;
    }

    @NotNull
    public final TapChannelData copy(String str, String str2, String str3) {
        return new TapChannelData(str, str2, str3);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof TapChannelData) {
            TapChannelData tapChannelData = (TapChannelData) obj;
            return Intrinsics.areEqual(this.guildId, tapChannelData.guildId) && Intrinsics.areEqual(this.channelId, tapChannelData.channelId) && Intrinsics.areEqual(this.messageId, tapChannelData.messageId);
        }
        return false;
    }

    public final String getChannelId() {
        return this.channelId;
    }

    public final String getGuildId() {
        return this.guildId;
    }

    public final String getMessageId() {
        return this.messageId;
    }

    public int hashCode() {
        String str = this.guildId;
        int hashCode = (str == null ? 0 : str.hashCode()) * 31;
        String str2 = this.channelId;
        int hashCode2 = (hashCode + (str2 == null ? 0 : str2.hashCode())) * 31;
        String str3 = this.messageId;
        return hashCode2 + (str3 != null ? str3.hashCode() : 0);
    }

    @Override // com.discord.reactevents.ReactEvent
    @NotNull
    public WritableMap serialize() {
        return NativeMapExtensionsKt.nativeMapOf(v.a("data", NativeMapExtensionsKt.nativeMapOf(v.a("guildId", this.guildId), v.a("channelId", this.channelId), v.a("messageId", this.messageId))));
    }

    @NotNull
    public String toString() {
        String str = this.guildId;
        String str2 = this.channelId;
        String str3 = this.messageId;
        return "TapChannelData(guildId=" + str + ", channelId=" + str2 + ", messageId=" + str3 + ")";
    }

    public /* synthetic */ TapChannelData(int i10, String str, String str2, String str3, SerializationConstructorMarker serializationConstructorMarker) {
        if ((i10 & 1) == 0) {
            this.guildId = null;
        } else {
            this.guildId = str;
        }
        if ((i10 & 2) == 0) {
            this.channelId = null;
        } else {
            this.channelId = str2;
        }
        if ((i10 & 4) == 0) {
            this.messageId = null;
        } else {
            this.messageId = str3;
        }
    }

    public TapChannelData(String str, String str2, String str3) {
        this.guildId = str;
        this.channelId = str2;
        this.messageId = str3;
    }

    public /* synthetic */ TapChannelData(String str, String str2, String str3, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this((i10 & 1) != 0 ? null : str, (i10 & 2) != 0 ? null : str2, (i10 & 4) != 0 ? null : str3);
    }
}
