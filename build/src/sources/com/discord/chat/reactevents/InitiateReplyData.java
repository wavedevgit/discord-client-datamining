package com.discord.chat.reactevents;

import com.discord.primitives.ChannelId;
import com.discord.primitives.ChannelId$$serializer;
import com.discord.primitives.MessageId;
import com.discord.primitives.MessageId$$serializer;
import com.discord.reactevents.ReactEvent;
import com.facebook.react.bridge.WritableMap;
import dt.m;
import gt.h;
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
@Metadata(d1 = {"\u0000P\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010\u000e\n\u0002\b\u0003\n\u0002\u0010\b\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0016\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\b\u0081\b\u0018\u0000 22\u00020\u0001:\u000212B-\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0005\u0012\n\b\u0002\u0010\u0006\u001a\u0004\u0018\u00010\u0007\u0012\b\u0010\b\u001a\u0004\u0018\u00010\t¢\u0006\u0004\b\n\u0010\u000bBC\b\u0010\u0012\u0006\u0010\f\u001a\u00020\r\u0012\b\u0010\u0002\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u0004\u001a\u0004\u0018\u00010\u0005\u0012\b\u0010\u0006\u001a\u0004\u0018\u00010\u0007\u0012\b\u0010\b\u001a\u0004\u0018\u00010\t\u0012\b\u0010\u000e\u001a\u0004\u0018\u00010\u000f¢\u0006\u0004\b\n\u0010\u0010J\u0010\u0010\u001b\u001a\u00020\u0003HÆ\u0003¢\u0006\u0004\b\u001c\u0010\u0012J\u0010\u0010\u001d\u001a\u00020\u0005HÆ\u0003¢\u0006\u0004\b\u001e\u0010\u0015J\u0010\u0010\u001f\u001a\u0004\u0018\u00010\u0007HÆ\u0003¢\u0006\u0002\u0010\u0018J\u000b\u0010 \u001a\u0004\u0018\u00010\tHÆ\u0003J<\u0010!\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\b\b\u0002\u0010\u0004\u001a\u00020\u00052\n\b\u0002\u0010\u0006\u001a\u0004\u0018\u00010\u00072\n\b\u0002\u0010\b\u001a\u0004\u0018\u00010\tHÆ\u0001¢\u0006\u0004\b\"\u0010#J\u0013\u0010$\u001a\u00020\u00072\b\u0010%\u001a\u0004\u0018\u00010&HÖ\u0003J\t\u0010'\u001a\u00020\rHÖ\u0001J\t\u0010(\u001a\u00020\tHÖ\u0001J%\u0010)\u001a\u00020*2\u0006\u0010+\u001a\u00020\u00002\u0006\u0010,\u001a\u00020-2\u0006\u0010.\u001a\u00020/H\u0001¢\u0006\u0002\b0R\u0013\u0010\u0002\u001a\u00020\u0003¢\u0006\n\n\u0002\u0010\u0013\u001a\u0004\b\u0011\u0010\u0012R\u0013\u0010\u0004\u001a\u00020\u0005¢\u0006\n\n\u0002\u0010\u0016\u001a\u0004\b\u0014\u0010\u0015R\u0015\u0010\u0006\u001a\u0004\u0018\u00010\u0007¢\u0006\n\n\u0002\u0010\u0019\u001a\u0004\b\u0017\u0010\u0018R\u0013\u0010\b\u001a\u0004\u0018\u00010\t¢\u0006\b\n\u0000\u001a\u0004\b\u001a\u0010\u0012¨\u00063"}, d2 = {"Lcom/discord/chat/reactevents/InitiateReplyData;", "Lcom/discord/reactevents/ReactEvent;", "messageId", "Lcom/discord/primitives/MessageId;", "channelId", "Lcom/discord/primitives/ChannelId;", "triggerHaptic", "", "location", "", "<init>", "(Ljava/lang/String;JLjava/lang/Boolean;Ljava/lang/String;Lkotlin/jvm/internal/DefaultConstructorMarker;)V", "seen0", "", "serializationConstructorMarker", "Lkotlinx/serialization/internal/SerializationConstructorMarker;", "(ILjava/lang/String;Lcom/discord/primitives/ChannelId;Ljava/lang/Boolean;Ljava/lang/String;Lkotlinx/serialization/internal/SerializationConstructorMarker;Lkotlin/jvm/internal/DefaultConstructorMarker;)V", "getMessageId-3Eiw7ao", "()Ljava/lang/String;", "Ljava/lang/String;", "getChannelId-o4g7jtM", "()J", "J", "getTriggerHaptic", "()Ljava/lang/Boolean;", "Ljava/lang/Boolean;", "getLocation", "component1", "component1-3Eiw7ao", "component2", "component2-o4g7jtM", "component3", "component4", "copy", "copy-8a0ehIg", "(Ljava/lang/String;JLjava/lang/Boolean;Ljava/lang/String;)Lcom/discord/chat/reactevents/InitiateReplyData;", "equals", "other", "", "hashCode", "toString", "write$Self", "", "self", "output", "Lkotlinx/serialization/encoding/CompositeEncoder;", "serialDesc", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "write$Self$chat_release", "$serializer", "Companion", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@m
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class InitiateReplyData implements ReactEvent {
    @NotNull
    public static final Companion Companion = new Companion(null);
    private final long channelId;
    private final String location;
    @NotNull
    private final String messageId;
    private final Boolean triggerHaptic;

    @Metadata(d1 = {"\u0000\u0016\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\f\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00060\u0005¨\u0006\u0007"}, d2 = {"Lcom/discord/chat/reactevents/InitiateReplyData$Companion;", "", "<init>", "()V", "serializer", "Lkotlinx/serialization/KSerializer;", "Lcom/discord/chat/reactevents/InitiateReplyData;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class Companion {
        private Companion() {
        }

        @NotNull
        public final KSerializer serializer() {
            return InitiateReplyData$$serializer.INSTANCE;
        }

        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }
    }

    public /* synthetic */ InitiateReplyData(int i10, String str, ChannelId channelId, Boolean bool, String str2, SerializationConstructorMarker serializationConstructorMarker, DefaultConstructorMarker defaultConstructorMarker) {
        this(i10, str, channelId, bool, str2, serializationConstructorMarker);
    }

    /* renamed from: copy-8a0ehIg$default  reason: not valid java name */
    public static /* synthetic */ InitiateReplyData m740copy8a0ehIg$default(InitiateReplyData initiateReplyData, String str, long j10, Boolean bool, String str2, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            str = initiateReplyData.messageId;
        }
        if ((i10 & 2) != 0) {
            j10 = initiateReplyData.channelId;
        }
        if ((i10 & 4) != 0) {
            bool = initiateReplyData.triggerHaptic;
        }
        if ((i10 & 8) != 0) {
            str2 = initiateReplyData.location;
        }
        return initiateReplyData.m743copy8a0ehIg(str, j10, bool, str2);
    }

    public static final /* synthetic */ void write$Self$chat_release(InitiateReplyData initiateReplyData, CompositeEncoder compositeEncoder, SerialDescriptor serialDescriptor) {
        compositeEncoder.l(serialDescriptor, 0, MessageId$$serializer.INSTANCE, MessageId.m1085boximpl(initiateReplyData.messageId));
        compositeEncoder.l(serialDescriptor, 1, ChannelId$$serializer.INSTANCE, ChannelId.m1059boximpl(initiateReplyData.channelId));
        if (compositeEncoder.z(serialDescriptor, 2) || !Intrinsics.areEqual(initiateReplyData.triggerHaptic, Boolean.FALSE)) {
            compositeEncoder.A(serialDescriptor, 2, h.f25266a, initiateReplyData.triggerHaptic);
        }
        compositeEncoder.A(serialDescriptor, 3, n2.f25302a, initiateReplyData.location);
    }

    @NotNull
    /* renamed from: component1-3Eiw7ao  reason: not valid java name */
    public final String m741component13Eiw7ao() {
        return this.messageId;
    }

    /* renamed from: component2-o4g7jtM  reason: not valid java name */
    public final long m742component2o4g7jtM() {
        return this.channelId;
    }

    public final Boolean component3() {
        return this.triggerHaptic;
    }

    public final String component4() {
        return this.location;
    }

    @NotNull
    /* renamed from: copy-8a0ehIg  reason: not valid java name */
    public final InitiateReplyData m743copy8a0ehIg(@NotNull String messageId, long j10, Boolean bool, String str) {
        Intrinsics.checkNotNullParameter(messageId, "messageId");
        return new InitiateReplyData(messageId, j10, bool, str, null);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof InitiateReplyData) {
            InitiateReplyData initiateReplyData = (InitiateReplyData) obj;
            return MessageId.m1089equalsimpl0(this.messageId, initiateReplyData.messageId) && ChannelId.m1063equalsimpl0(this.channelId, initiateReplyData.channelId) && Intrinsics.areEqual(this.triggerHaptic, initiateReplyData.triggerHaptic) && Intrinsics.areEqual(this.location, initiateReplyData.location);
        }
        return false;
    }

    /* renamed from: getChannelId-o4g7jtM  reason: not valid java name */
    public final long m744getChannelIdo4g7jtM() {
        return this.channelId;
    }

    public final String getLocation() {
        return this.location;
    }

    @NotNull
    /* renamed from: getMessageId-3Eiw7ao  reason: not valid java name */
    public final String m745getMessageId3Eiw7ao() {
        return this.messageId;
    }

    public final Boolean getTriggerHaptic() {
        return this.triggerHaptic;
    }

    public int hashCode() {
        int m1090hashCodeimpl = ((MessageId.m1090hashCodeimpl(this.messageId) * 31) + ChannelId.m1064hashCodeimpl(this.channelId)) * 31;
        Boolean bool = this.triggerHaptic;
        int hashCode = (m1090hashCodeimpl + (bool == null ? 0 : bool.hashCode())) * 31;
        String str = this.location;
        return hashCode + (str != null ? str.hashCode() : 0);
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
        Boolean bool = this.triggerHaptic;
        String str = this.location;
        return "InitiateReplyData(messageId=" + m1092toStringimpl + ", channelId=" + m1066toStringimpl + ", triggerHaptic=" + bool + ", location=" + str + ")";
    }

    public /* synthetic */ InitiateReplyData(String str, long j10, Boolean bool, String str2, DefaultConstructorMarker defaultConstructorMarker) {
        this(str, j10, bool, str2);
    }

    private /* synthetic */ InitiateReplyData(int i10, String str, ChannelId channelId, Boolean bool, String str2, SerializationConstructorMarker serializationConstructorMarker) {
        if (11 != (i10 & 11)) {
            v1.b(i10, 11, InitiateReplyData$$serializer.INSTANCE.getDescriptor());
        }
        this.messageId = str;
        this.channelId = channelId.m1068unboximpl();
        if ((i10 & 4) == 0) {
            this.triggerHaptic = Boolean.FALSE;
        } else {
            this.triggerHaptic = bool;
        }
        this.location = str2;
    }

    private InitiateReplyData(String messageId, long j10, Boolean bool, String str) {
        Intrinsics.checkNotNullParameter(messageId, "messageId");
        this.messageId = messageId;
        this.channelId = j10;
        this.triggerHaptic = bool;
        this.location = str;
    }

    public /* synthetic */ InitiateReplyData(String str, long j10, Boolean bool, String str2, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this(str, j10, (i10 & 4) != 0 ? Boolean.FALSE : bool, str2, null);
    }
}
