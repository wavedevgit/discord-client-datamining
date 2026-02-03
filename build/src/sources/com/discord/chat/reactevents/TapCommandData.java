package com.discord.chat.reactevents;

import at.m;
import com.discord.chat.bridge.contentnode.CommandMentionContentNode;
import com.discord.primitives.ChannelId;
import com.discord.reactevents.ReactEvent;
import com.facebook.react.bridge.WritableMap;
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
@Metadata(d1 = {"\u0000L\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0002\b\u0006\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\b\n\u0000\n\u0002\u0018\u0002\n\u0002\b\f\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\b\u0087\b\u0018\u0000 *2\u00020\u0001:\u0002)*B'\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0003\u0012\u0006\u0010\u0005\u001a\u00020\u0003\u0012\u0006\u0010\u0006\u001a\u00020\u0003¢\u0006\u0004\b\u0007\u0010\bB\u0011\b\u0016\u0012\u0006\u0010\t\u001a\u00020\n¢\u0006\u0004\b\u0007\u0010\u000bBC\b\u0010\u0012\u0006\u0010\f\u001a\u00020\r\u0012\b\u0010\u0002\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u0004\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u0005\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u0006\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u000e\u001a\u0004\u0018\u00010\u000f¢\u0006\u0004\b\u0007\u0010\u0010J\t\u0010\u0016\u001a\u00020\u0003HÆ\u0003J\t\u0010\u0017\u001a\u00020\u0003HÆ\u0003J\t\u0010\u0018\u001a\u00020\u0003HÆ\u0003J\t\u0010\u0019\u001a\u00020\u0003HÆ\u0003J1\u0010\u001a\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\b\b\u0002\u0010\u0004\u001a\u00020\u00032\b\b\u0002\u0010\u0005\u001a\u00020\u00032\b\b\u0002\u0010\u0006\u001a\u00020\u0003HÆ\u0001J\u0013\u0010\u001b\u001a\u00020\u001c2\b\u0010\u001d\u001a\u0004\u0018\u00010\u001eHÖ\u0003J\t\u0010\u001f\u001a\u00020\rHÖ\u0001J\t\u0010 \u001a\u00020\u0003HÖ\u0001J%\u0010!\u001a\u00020\"2\u0006\u0010#\u001a\u00020\u00002\u0006\u0010$\u001a\u00020%2\u0006\u0010&\u001a\u00020'H\u0001¢\u0006\u0002\b(R\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0011\u0010\u0012R\u0011\u0010\u0004\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0013\u0010\u0012R\u0011\u0010\u0005\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0014\u0010\u0012R\u0011\u0010\u0006\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0015\u0010\u0012¨\u0006+"}, d2 = {"Lcom/discord/chat/reactevents/TapCommandData;", "Lcom/discord/reactevents/ReactEvent;", "channelId", "", "commandId", "commandName", "commandKey", "<init>", "(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)V", "node", "Lcom/discord/chat/bridge/contentnode/CommandMentionContentNode;", "(Lcom/discord/chat/bridge/contentnode/CommandMentionContentNode;)V", "seen0", "", "serializationConstructorMarker", "Lkotlinx/serialization/internal/SerializationConstructorMarker;", "(ILjava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Lkotlinx/serialization/internal/SerializationConstructorMarker;)V", "getChannelId", "()Ljava/lang/String;", "getCommandId", "getCommandName", "getCommandKey", "component1", "component2", "component3", "component4", "copy", "equals", "", "other", "", "hashCode", "toString", "write$Self", "", "self", "output", "Lkotlinx/serialization/encoding/CompositeEncoder;", "serialDesc", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "write$Self$chat_release", "$serializer", "Companion", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class TapCommandData implements ReactEvent {
    @NotNull
    public static final Companion Companion = new Companion(null);
    @NotNull
    private final String channelId;
    @NotNull
    private final String commandId;
    @NotNull
    private final String commandKey;
    @NotNull
    private final String commandName;

    @Metadata(d1 = {"\u0000\u0016\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\f\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00060\u0005¨\u0006\u0007"}, d2 = {"Lcom/discord/chat/reactevents/TapCommandData$Companion;", "", "<init>", "()V", "serializer", "Lkotlinx/serialization/KSerializer;", "Lcom/discord/chat/reactevents/TapCommandData;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class Companion {
        private Companion() {
        }

        @NotNull
        public final KSerializer serializer() {
            return TapCommandData$$serializer.INSTANCE;
        }

        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }
    }

    public /* synthetic */ TapCommandData(int i10, String str, String str2, String str3, String str4, SerializationConstructorMarker serializationConstructorMarker) {
        if (15 != (i10 & 15)) {
            v1.b(i10, 15, TapCommandData$$serializer.INSTANCE.getDescriptor());
        }
        this.channelId = str;
        this.commandId = str2;
        this.commandName = str3;
        this.commandKey = str4;
    }

    public static /* synthetic */ TapCommandData copy$default(TapCommandData tapCommandData, String str, String str2, String str3, String str4, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            str = tapCommandData.channelId;
        }
        if ((i10 & 2) != 0) {
            str2 = tapCommandData.commandId;
        }
        if ((i10 & 4) != 0) {
            str3 = tapCommandData.commandName;
        }
        if ((i10 & 8) != 0) {
            str4 = tapCommandData.commandKey;
        }
        return tapCommandData.copy(str, str2, str3, str4);
    }

    public static final /* synthetic */ void write$Self$chat_release(TapCommandData tapCommandData, CompositeEncoder compositeEncoder, SerialDescriptor serialDescriptor) {
        compositeEncoder.y(serialDescriptor, 0, tapCommandData.channelId);
        compositeEncoder.y(serialDescriptor, 1, tapCommandData.commandId);
        compositeEncoder.y(serialDescriptor, 2, tapCommandData.commandName);
        compositeEncoder.y(serialDescriptor, 3, tapCommandData.commandKey);
    }

    @NotNull
    public final String component1() {
        return this.channelId;
    }

    @NotNull
    public final String component2() {
        return this.commandId;
    }

    @NotNull
    public final String component3() {
        return this.commandName;
    }

    @NotNull
    public final String component4() {
        return this.commandKey;
    }

    @NotNull
    public final TapCommandData copy(@NotNull String channelId, @NotNull String commandId, @NotNull String commandName, @NotNull String commandKey) {
        Intrinsics.checkNotNullParameter(channelId, "channelId");
        Intrinsics.checkNotNullParameter(commandId, "commandId");
        Intrinsics.checkNotNullParameter(commandName, "commandName");
        Intrinsics.checkNotNullParameter(commandKey, "commandKey");
        return new TapCommandData(channelId, commandId, commandName, commandKey);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof TapCommandData) {
            TapCommandData tapCommandData = (TapCommandData) obj;
            return Intrinsics.areEqual(this.channelId, tapCommandData.channelId) && Intrinsics.areEqual(this.commandId, tapCommandData.commandId) && Intrinsics.areEqual(this.commandName, tapCommandData.commandName) && Intrinsics.areEqual(this.commandKey, tapCommandData.commandKey);
        }
        return false;
    }

    @NotNull
    public final String getChannelId() {
        return this.channelId;
    }

    @NotNull
    public final String getCommandId() {
        return this.commandId;
    }

    @NotNull
    public final String getCommandKey() {
        return this.commandKey;
    }

    @NotNull
    public final String getCommandName() {
        return this.commandName;
    }

    public int hashCode() {
        return (((((this.channelId.hashCode() * 31) + this.commandId.hashCode()) * 31) + this.commandName.hashCode()) * 31) + this.commandKey.hashCode();
    }

    @Override // com.discord.reactevents.ReactEvent
    @NotNull
    public WritableMap serialize() {
        return ReactEvent.DefaultImpls.serialize(this);
    }

    @NotNull
    public String toString() {
        String str = this.channelId;
        String str2 = this.commandId;
        String str3 = this.commandName;
        String str4 = this.commandKey;
        return "TapCommandData(channelId=" + str + ", commandId=" + str2 + ", commandName=" + str3 + ", commandKey=" + str4 + ")";
    }

    public TapCommandData(@NotNull String channelId, @NotNull String commandId, @NotNull String commandName, @NotNull String commandKey) {
        Intrinsics.checkNotNullParameter(channelId, "channelId");
        Intrinsics.checkNotNullParameter(commandId, "commandId");
        Intrinsics.checkNotNullParameter(commandName, "commandName");
        Intrinsics.checkNotNullParameter(commandKey, "commandKey");
        this.channelId = channelId;
        this.commandId = commandId;
        this.commandName = commandName;
        this.commandKey = commandKey;
    }

    /* JADX WARN: 'this' call moved to the top of the method (can break code semantics) */
    public TapCommandData(@NotNull CommandMentionContentNode node) {
        this(ChannelId.m1066toStringimpl(node.m297getChannelIdo4g7jtM()), node.getCommandId(), node.getCommandName(), node.getCommandKey());
        Intrinsics.checkNotNullParameter(node, "node");
    }
}
