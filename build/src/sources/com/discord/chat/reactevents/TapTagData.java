package com.discord.chat.reactevents;

import at.m;
import com.discord.primitives.ChannelId;
import com.discord.primitives.ChannelId$$serializer;
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
@Metadata(d1 = {"\u0000P\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0002\b\u0003\n\u0002\u0010\b\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0011\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\b\u0087\b\u0018\u0000 -2\u00020\u0001:\u0002,-B!\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0005\u0012\b\u0010\u0006\u001a\u0004\u0018\u00010\u0007¢\u0006\u0004\b\b\u0010\tB9\b\u0010\u0012\u0006\u0010\n\u001a\u00020\u000b\u0012\b\u0010\u0002\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u0004\u001a\u0004\u0018\u00010\u0005\u0012\b\u0010\u0006\u001a\u0004\u0018\u00010\u0007\u0012\b\u0010\f\u001a\u0004\u0018\u00010\r¢\u0006\u0004\b\b\u0010\u000eJ\u0010\u0010\u0016\u001a\u00020\u0003HÆ\u0003¢\u0006\u0004\b\u0017\u0010\u0010J\u0010\u0010\u0018\u001a\u00020\u0005HÆ\u0003¢\u0006\u0004\b\u0019\u0010\u0013J\u000b\u0010\u001a\u001a\u0004\u0018\u00010\u0007HÆ\u0003J0\u0010\u001b\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\b\b\u0002\u0010\u0004\u001a\u00020\u00052\n\b\u0002\u0010\u0006\u001a\u0004\u0018\u00010\u0007HÆ\u0001¢\u0006\u0004\b\u001c\u0010\u001dJ\u0013\u0010\u001e\u001a\u00020\u001f2\b\u0010 \u001a\u0004\u0018\u00010!HÖ\u0003J\t\u0010\"\u001a\u00020\u000bHÖ\u0001J\t\u0010#\u001a\u00020\u0007HÖ\u0001J%\u0010$\u001a\u00020%2\u0006\u0010&\u001a\u00020\u00002\u0006\u0010'\u001a\u00020(2\u0006\u0010)\u001a\u00020*H\u0001¢\u0006\u0002\b+R\u0013\u0010\u0002\u001a\u00020\u0003¢\u0006\n\n\u0002\u0010\u0011\u001a\u0004\b\u000f\u0010\u0010R\u0013\u0010\u0004\u001a\u00020\u0005¢\u0006\n\n\u0002\u0010\u0014\u001a\u0004\b\u0012\u0010\u0013R\u0013\u0010\u0006\u001a\u0004\u0018\u00010\u0007¢\u0006\b\n\u0000\u001a\u0004\b\u0015\u0010\u0010¨\u0006."}, d2 = {"Lcom/discord/chat/reactevents/TapTagData;", "Lcom/discord/reactevents/ReactEvent;", "messageId", "Lcom/discord/primitives/MessageId;", "channelId", "Lcom/discord/primitives/ChannelId;", "tagType", "", "<init>", "(Ljava/lang/String;JLjava/lang/String;Lkotlin/jvm/internal/DefaultConstructorMarker;)V", "seen0", "", "serializationConstructorMarker", "Lkotlinx/serialization/internal/SerializationConstructorMarker;", "(ILjava/lang/String;Lcom/discord/primitives/ChannelId;Ljava/lang/String;Lkotlinx/serialization/internal/SerializationConstructorMarker;Lkotlin/jvm/internal/DefaultConstructorMarker;)V", "getMessageId-3Eiw7ao", "()Ljava/lang/String;", "Ljava/lang/String;", "getChannelId-o4g7jtM", "()J", "J", "getTagType", "component1", "component1-3Eiw7ao", "component2", "component2-o4g7jtM", "component3", "copy", "copy-Eqy5D80", "(Ljava/lang/String;JLjava/lang/String;)Lcom/discord/chat/reactevents/TapTagData;", "equals", "", "other", "", "hashCode", "toString", "write$Self", "", "self", "output", "Lkotlinx/serialization/encoding/CompositeEncoder;", "serialDesc", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "write$Self$chat_release", "$serializer", "Companion", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class TapTagData implements ReactEvent {
    @NotNull
    public static final Companion Companion = new Companion(null);
    private final long channelId;
    @NotNull
    private final String messageId;
    private final String tagType;

    @Metadata(d1 = {"\u0000\u0016\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\f\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00060\u0005¨\u0006\u0007"}, d2 = {"Lcom/discord/chat/reactevents/TapTagData$Companion;", "", "<init>", "()V", "serializer", "Lkotlinx/serialization/KSerializer;", "Lcom/discord/chat/reactevents/TapTagData;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class Companion {
        private Companion() {
        }

        @NotNull
        public final KSerializer serializer() {
            return TapTagData$$serializer.INSTANCE;
        }

        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }
    }

    public /* synthetic */ TapTagData(int i10, String str, ChannelId channelId, String str2, SerializationConstructorMarker serializationConstructorMarker, DefaultConstructorMarker defaultConstructorMarker) {
        this(i10, str, channelId, str2, serializationConstructorMarker);
    }

    /* renamed from: copy-Eqy5D80$default  reason: not valid java name */
    public static /* synthetic */ TapTagData m848copyEqy5D80$default(TapTagData tapTagData, String str, long j10, String str2, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            str = tapTagData.messageId;
        }
        if ((i10 & 2) != 0) {
            j10 = tapTagData.channelId;
        }
        if ((i10 & 4) != 0) {
            str2 = tapTagData.tagType;
        }
        return tapTagData.m851copyEqy5D80(str, j10, str2);
    }

    public static final /* synthetic */ void write$Self$chat_release(TapTagData tapTagData, CompositeEncoder compositeEncoder, SerialDescriptor serialDescriptor) {
        compositeEncoder.D(serialDescriptor, 0, MessageId$$serializer.INSTANCE, MessageId.m1085boximpl(tapTagData.messageId));
        compositeEncoder.D(serialDescriptor, 1, ChannelId$$serializer.INSTANCE, ChannelId.m1059boximpl(tapTagData.channelId));
        compositeEncoder.s(serialDescriptor, 2, n2.f20978a, tapTagData.tagType);
    }

    @NotNull
    /* renamed from: component1-3Eiw7ao  reason: not valid java name */
    public final String m849component13Eiw7ao() {
        return this.messageId;
    }

    /* renamed from: component2-o4g7jtM  reason: not valid java name */
    public final long m850component2o4g7jtM() {
        return this.channelId;
    }

    public final String component3() {
        return this.tagType;
    }

    @NotNull
    /* renamed from: copy-Eqy5D80  reason: not valid java name */
    public final TapTagData m851copyEqy5D80(@NotNull String messageId, long j10, String str) {
        Intrinsics.checkNotNullParameter(messageId, "messageId");
        return new TapTagData(messageId, j10, str, null);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof TapTagData) {
            TapTagData tapTagData = (TapTagData) obj;
            return MessageId.m1089equalsimpl0(this.messageId, tapTagData.messageId) && ChannelId.m1063equalsimpl0(this.channelId, tapTagData.channelId) && Intrinsics.areEqual(this.tagType, tapTagData.tagType);
        }
        return false;
    }

    /* renamed from: getChannelId-o4g7jtM  reason: not valid java name */
    public final long m852getChannelIdo4g7jtM() {
        return this.channelId;
    }

    @NotNull
    /* renamed from: getMessageId-3Eiw7ao  reason: not valid java name */
    public final String m853getMessageId3Eiw7ao() {
        return this.messageId;
    }

    public final String getTagType() {
        return this.tagType;
    }

    public int hashCode() {
        int m1090hashCodeimpl = ((MessageId.m1090hashCodeimpl(this.messageId) * 31) + ChannelId.m1064hashCodeimpl(this.channelId)) * 31;
        String str = this.tagType;
        return m1090hashCodeimpl + (str == null ? 0 : str.hashCode());
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
        String str = this.tagType;
        return "TapTagData(messageId=" + m1092toStringimpl + ", channelId=" + m1066toStringimpl + ", tagType=" + str + ")";
    }

    public /* synthetic */ TapTagData(String str, long j10, String str2, DefaultConstructorMarker defaultConstructorMarker) {
        this(str, j10, str2);
    }

    private /* synthetic */ TapTagData(int i10, String str, ChannelId channelId, String str2, SerializationConstructorMarker serializationConstructorMarker) {
        if (7 != (i10 & 7)) {
            v1.b(i10, 7, TapTagData$$serializer.INSTANCE.getDescriptor());
        }
        this.messageId = str;
        this.channelId = channelId.m1068unboximpl();
        this.tagType = str2;
    }

    private TapTagData(String messageId, long j10, String str) {
        Intrinsics.checkNotNullParameter(messageId, "messageId");
        this.messageId = messageId;
        this.channelId = j10;
        this.tagType = str;
    }
}
