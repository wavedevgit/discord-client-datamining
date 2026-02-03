package com.discord.chat.reactevents;

import at.m;
import com.discord.primitives.ChannelId;
import com.discord.primitives.ChannelId$$serializer;
import com.discord.primitives.MessageId;
import com.discord.primitives.MessageId$$serializer;
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
@Metadata(d1 = {"\u0000P\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\b\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u000f\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010\u0000\n\u0002\b\u0002\n\u0002\u0010\u000e\n\u0000\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\b\u0081\b\u0018\u0000 *2\u00020\u0001:\u0002)*B\u0017\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0005¢\u0006\u0004\b\u0006\u0010\u0007B/\b\u0010\u0012\u0006\u0010\b\u001a\u00020\t\u0012\b\u0010\u0002\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u0004\u001a\u0004\u0018\u00010\u0005\u0012\b\u0010\n\u001a\u0004\u0018\u00010\u000b¢\u0006\u0004\b\u0006\u0010\fJ\u0010\u0010\u0013\u001a\u00020\u0003HÆ\u0003¢\u0006\u0004\b\u0014\u0010\u000eJ\u0010\u0010\u0015\u001a\u00020\u0005HÆ\u0003¢\u0006\u0004\b\u0016\u0010\u0011J$\u0010\u0017\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\b\b\u0002\u0010\u0004\u001a\u00020\u0005HÆ\u0001¢\u0006\u0004\b\u0018\u0010\u0019J\u0013\u0010\u001a\u001a\u00020\u001b2\b\u0010\u001c\u001a\u0004\u0018\u00010\u001dHÖ\u0003J\t\u0010\u001e\u001a\u00020\tHÖ\u0001J\t\u0010\u001f\u001a\u00020 HÖ\u0001J%\u0010!\u001a\u00020\"2\u0006\u0010#\u001a\u00020\u00002\u0006\u0010$\u001a\u00020%2\u0006\u0010&\u001a\u00020'H\u0001¢\u0006\u0002\b(R\u0013\u0010\u0002\u001a\u00020\u0003¢\u0006\n\n\u0002\u0010\u000f\u001a\u0004\b\r\u0010\u000eR\u0013\u0010\u0004\u001a\u00020\u0005¢\u0006\n\n\u0002\u0010\u0012\u001a\u0004\b\u0010\u0010\u0011¨\u0006+"}, d2 = {"Lcom/discord/chat/reactevents/InitiateThreadData;", "Lcom/discord/reactevents/ReactEvent;", "messageId", "Lcom/discord/primitives/MessageId;", "channelId", "Lcom/discord/primitives/ChannelId;", "<init>", "(Ljava/lang/String;JLkotlin/jvm/internal/DefaultConstructorMarker;)V", "seen0", "", "serializationConstructorMarker", "Lkotlinx/serialization/internal/SerializationConstructorMarker;", "(ILjava/lang/String;Lcom/discord/primitives/ChannelId;Lkotlinx/serialization/internal/SerializationConstructorMarker;Lkotlin/jvm/internal/DefaultConstructorMarker;)V", "getMessageId-3Eiw7ao", "()Ljava/lang/String;", "Ljava/lang/String;", "getChannelId-o4g7jtM", "()J", "J", "component1", "component1-3Eiw7ao", "component2", "component2-o4g7jtM", "copy", "copy-pfaIj0E", "(Ljava/lang/String;J)Lcom/discord/chat/reactevents/InitiateThreadData;", "equals", "", "other", "", "hashCode", "toString", "", "write$Self", "", "self", "output", "Lkotlinx/serialization/encoding/CompositeEncoder;", "serialDesc", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "write$Self$chat_release", "$serializer", "Companion", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class InitiateThreadData implements ReactEvent {
    @NotNull
    public static final Companion Companion = new Companion(null);
    private final long channelId;
    @NotNull
    private final String messageId;

    @Metadata(d1 = {"\u0000\u0016\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\f\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00060\u0005¨\u0006\u0007"}, d2 = {"Lcom/discord/chat/reactevents/InitiateThreadData$Companion;", "", "<init>", "()V", "serializer", "Lkotlinx/serialization/KSerializer;", "Lcom/discord/chat/reactevents/InitiateThreadData;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class Companion {
        private Companion() {
        }

        @NotNull
        public final KSerializer serializer() {
            return InitiateThreadData$$serializer.INSTANCE;
        }

        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }
    }

    public /* synthetic */ InitiateThreadData(int i10, String str, ChannelId channelId, SerializationConstructorMarker serializationConstructorMarker, DefaultConstructorMarker defaultConstructorMarker) {
        this(i10, str, channelId, serializationConstructorMarker);
    }

    /* renamed from: copy-pfaIj0E$default  reason: not valid java name */
    public static /* synthetic */ InitiateThreadData m746copypfaIj0E$default(InitiateThreadData initiateThreadData, String str, long j10, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            str = initiateThreadData.messageId;
        }
        if ((i10 & 2) != 0) {
            j10 = initiateThreadData.channelId;
        }
        return initiateThreadData.m749copypfaIj0E(str, j10);
    }

    public static final /* synthetic */ void write$Self$chat_release(InitiateThreadData initiateThreadData, CompositeEncoder compositeEncoder, SerialDescriptor serialDescriptor) {
        compositeEncoder.D(serialDescriptor, 0, MessageId$$serializer.INSTANCE, MessageId.m1085boximpl(initiateThreadData.messageId));
        compositeEncoder.D(serialDescriptor, 1, ChannelId$$serializer.INSTANCE, ChannelId.m1059boximpl(initiateThreadData.channelId));
    }

    @NotNull
    /* renamed from: component1-3Eiw7ao  reason: not valid java name */
    public final String m747component13Eiw7ao() {
        return this.messageId;
    }

    /* renamed from: component2-o4g7jtM  reason: not valid java name */
    public final long m748component2o4g7jtM() {
        return this.channelId;
    }

    @NotNull
    /* renamed from: copy-pfaIj0E  reason: not valid java name */
    public final InitiateThreadData m749copypfaIj0E(@NotNull String messageId, long j10) {
        Intrinsics.checkNotNullParameter(messageId, "messageId");
        return new InitiateThreadData(messageId, j10, null);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof InitiateThreadData) {
            InitiateThreadData initiateThreadData = (InitiateThreadData) obj;
            return MessageId.m1089equalsimpl0(this.messageId, initiateThreadData.messageId) && ChannelId.m1063equalsimpl0(this.channelId, initiateThreadData.channelId);
        }
        return false;
    }

    /* renamed from: getChannelId-o4g7jtM  reason: not valid java name */
    public final long m750getChannelIdo4g7jtM() {
        return this.channelId;
    }

    @NotNull
    /* renamed from: getMessageId-3Eiw7ao  reason: not valid java name */
    public final String m751getMessageId3Eiw7ao() {
        return this.messageId;
    }

    public int hashCode() {
        return (MessageId.m1090hashCodeimpl(this.messageId) * 31) + ChannelId.m1064hashCodeimpl(this.channelId);
    }

    @Override // com.discord.reactevents.ReactEvent
    @NotNull
    public WritableMap serialize() {
        return ReactEvent.DefaultImpls.serialize(this);
    }

    @NotNull
    public String toString() {
        String m1092toStringimpl = MessageId.m1092toStringimpl(this.messageId);
        String m1066toStringimpl = ChannelId.m1066toStringimpl(this.channelId);
        return "InitiateThreadData(messageId=" + m1092toStringimpl + ", channelId=" + m1066toStringimpl + ")";
    }

    public /* synthetic */ InitiateThreadData(String str, long j10, DefaultConstructorMarker defaultConstructorMarker) {
        this(str, j10);
    }

    private /* synthetic */ InitiateThreadData(int i10, String str, ChannelId channelId, SerializationConstructorMarker serializationConstructorMarker) {
        if (3 != (i10 & 3)) {
            v1.b(i10, 3, InitiateThreadData$$serializer.INSTANCE.getDescriptor());
        }
        this.messageId = str;
        this.channelId = channelId.m1068unboximpl();
    }

    private InitiateThreadData(String messageId, long j10) {
        Intrinsics.checkNotNullParameter(messageId, "messageId");
        this.messageId = messageId;
        this.channelId = j10;
    }
}
