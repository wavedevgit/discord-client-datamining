package com.discord.chat.reactevents;

import com.discord.reactevents.ReactEvent;
import com.facebook.react.bridge.WritableMap;
import dt.m;
import gt.v1;
import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.encoding.CompositeEncoder;
import kotlinx.serialization.internal.SerializationConstructorMarker;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000D\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0002\b\u0005\n\u0002\u0010\b\n\u0000\n\u0002\u0018\u0002\n\u0002\b\n\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\b\u0081\b\u0018\u0000 $2\u00020\u0001:\u0002#$B\u001f\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0003\u0012\u0006\u0010\u0005\u001a\u00020\u0003¢\u0006\u0004\b\u0006\u0010\u0007B9\b\u0010\u0012\u0006\u0010\b\u001a\u00020\t\u0012\b\u0010\u0002\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u0004\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u0005\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\n\u001a\u0004\u0018\u00010\u000b¢\u0006\u0004\b\u0006\u0010\fJ\t\u0010\u0011\u001a\u00020\u0003HÆ\u0003J\t\u0010\u0012\u001a\u00020\u0003HÆ\u0003J\t\u0010\u0013\u001a\u00020\u0003HÆ\u0003J'\u0010\u0014\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\b\b\u0002\u0010\u0004\u001a\u00020\u00032\b\b\u0002\u0010\u0005\u001a\u00020\u0003HÆ\u0001J\u0013\u0010\u0015\u001a\u00020\u00162\b\u0010\u0017\u001a\u0004\u0018\u00010\u0018HÖ\u0003J\t\u0010\u0019\u001a\u00020\tHÖ\u0001J\t\u0010\u001a\u001a\u00020\u0003HÖ\u0001J%\u0010\u001b\u001a\u00020\u001c2\u0006\u0010\u001d\u001a\u00020\u00002\u0006\u0010\u001e\u001a\u00020\u001f2\u0006\u0010 \u001a\u00020!H\u0001¢\u0006\u0002\b\"R\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\r\u0010\u000eR\u0011\u0010\u0004\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u000f\u0010\u000eR\u0011\u0010\u0005\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0010\u0010\u000e¨\u0006%"}, d2 = {"Lcom/discord/chat/reactevents/TapSummaryData;", "Lcom/discord/reactevents/ReactEvent;", "channelId", "", "messageId", "summaryId", "<init>", "(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)V", "seen0", "", "serializationConstructorMarker", "Lkotlinx/serialization/internal/SerializationConstructorMarker;", "(ILjava/lang/String;Ljava/lang/String;Ljava/lang/String;Lkotlinx/serialization/internal/SerializationConstructorMarker;)V", "getChannelId", "()Ljava/lang/String;", "getMessageId", "getSummaryId", "component1", "component2", "component3", "copy", "equals", "", "other", "", "hashCode", "toString", "write$Self", "", "self", "output", "Lkotlinx/serialization/encoding/CompositeEncoder;", "serialDesc", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "write$Self$chat_release", "$serializer", "Companion", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@m
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class TapSummaryData implements ReactEvent {
    @NotNull
    public static final Companion Companion = new Companion(null);
    @NotNull
    private final String channelId;
    @NotNull
    private final String messageId;
    @NotNull
    private final String summaryId;

    @Metadata(d1 = {"\u0000\u0016\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\f\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00060\u0005¨\u0006\u0007"}, d2 = {"Lcom/discord/chat/reactevents/TapSummaryData$Companion;", "", "<init>", "()V", "serializer", "Lkotlinx/serialization/KSerializer;", "Lcom/discord/chat/reactevents/TapSummaryData;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class Companion {
        private Companion() {
        }

        @NotNull
        public final KSerializer serializer() {
            return TapSummaryData$$serializer.INSTANCE;
        }

        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }
    }

    public /* synthetic */ TapSummaryData(int i10, String str, String str2, String str3, SerializationConstructorMarker serializationConstructorMarker) {
        if (7 != (i10 & 7)) {
            v1.b(i10, 7, TapSummaryData$$serializer.INSTANCE.getDescriptor());
        }
        this.channelId = str;
        this.messageId = str2;
        this.summaryId = str3;
    }

    public static /* synthetic */ TapSummaryData copy$default(TapSummaryData tapSummaryData, String str, String str2, String str3, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            str = tapSummaryData.channelId;
        }
        if ((i10 & 2) != 0) {
            str2 = tapSummaryData.messageId;
        }
        if ((i10 & 4) != 0) {
            str3 = tapSummaryData.summaryId;
        }
        return tapSummaryData.copy(str, str2, str3);
    }

    public static final /* synthetic */ void write$Self$chat_release(TapSummaryData tapSummaryData, CompositeEncoder compositeEncoder, SerialDescriptor serialDescriptor) {
        compositeEncoder.x(serialDescriptor, 0, tapSummaryData.channelId);
        compositeEncoder.x(serialDescriptor, 1, tapSummaryData.messageId);
        compositeEncoder.x(serialDescriptor, 2, tapSummaryData.summaryId);
    }

    @NotNull
    public final String component1() {
        return this.channelId;
    }

    @NotNull
    public final String component2() {
        return this.messageId;
    }

    @NotNull
    public final String component3() {
        return this.summaryId;
    }

    @NotNull
    public final TapSummaryData copy(@NotNull String channelId, @NotNull String messageId, @NotNull String summaryId) {
        Intrinsics.checkNotNullParameter(channelId, "channelId");
        Intrinsics.checkNotNullParameter(messageId, "messageId");
        Intrinsics.checkNotNullParameter(summaryId, "summaryId");
        return new TapSummaryData(channelId, messageId, summaryId);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof TapSummaryData) {
            TapSummaryData tapSummaryData = (TapSummaryData) obj;
            return Intrinsics.areEqual(this.channelId, tapSummaryData.channelId) && Intrinsics.areEqual(this.messageId, tapSummaryData.messageId) && Intrinsics.areEqual(this.summaryId, tapSummaryData.summaryId);
        }
        return false;
    }

    @NotNull
    public final String getChannelId() {
        return this.channelId;
    }

    @NotNull
    public final String getMessageId() {
        return this.messageId;
    }

    @NotNull
    public final String getSummaryId() {
        return this.summaryId;
    }

    public int hashCode() {
        return (((this.channelId.hashCode() * 31) + this.messageId.hashCode()) * 31) + this.summaryId.hashCode();
    }

    @Override // com.discord.reactevents.ReactEvent
    @NotNull
    public WritableMap serialize() {
        return ReactEvent.DefaultImpls.serialize(this);
    }

    @NotNull
    public String toString() {
        String str = this.channelId;
        String str2 = this.messageId;
        String str3 = this.summaryId;
        return "TapSummaryData(channelId=" + str + ", messageId=" + str2 + ", summaryId=" + str3 + ")";
    }

    public TapSummaryData(@NotNull String channelId, @NotNull String messageId, @NotNull String summaryId) {
        Intrinsics.checkNotNullParameter(channelId, "channelId");
        Intrinsics.checkNotNullParameter(messageId, "messageId");
        Intrinsics.checkNotNullParameter(summaryId, "summaryId");
        this.channelId = channelId;
        this.messageId = messageId;
        this.summaryId = summaryId;
    }
}
