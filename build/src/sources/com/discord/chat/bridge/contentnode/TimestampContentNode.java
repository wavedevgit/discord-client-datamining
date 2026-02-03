package com.discord.chat.bridge.contentnode;

import dt.v1;
import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.encoding.CompositeEncoder;
import kotlinx.serialization.internal.SerializationConstructorMarker;
import org.jetbrains.annotations.NotNull;
@at.m
@Metadata(d1 = {"\u0000J\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\t\n\u0000\n\u0002\u0010\u000e\n\u0002\b\u0004\n\u0002\u0010\b\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u000b\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\b\u0087\b\u0018\u0000 &2\u00020\u0001:\u0002%&B\u001f\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0005\u0012\u0006\u0010\u0006\u001a\u00020\u0005¢\u0006\u0004\b\u0007\u0010\bB7\b\u0010\u0012\u0006\u0010\t\u001a\u00020\n\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\b\u0010\u0004\u001a\u0004\u0018\u00010\u0005\u0012\b\u0010\u0006\u001a\u0004\u0018\u00010\u0005\u0012\b\u0010\u000b\u001a\u0004\u0018\u00010\f¢\u0006\u0004\b\u0007\u0010\rJ\t\u0010\u0013\u001a\u00020\u0003HÆ\u0003J\t\u0010\u0014\u001a\u00020\u0005HÆ\u0003J\t\u0010\u0015\u001a\u00020\u0005HÆ\u0003J'\u0010\u0016\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\b\b\u0002\u0010\u0004\u001a\u00020\u00052\b\b\u0002\u0010\u0006\u001a\u00020\u0005HÆ\u0001J\u0013\u0010\u0017\u001a\u00020\u00182\b\u0010\u0019\u001a\u0004\u0018\u00010\u001aHÖ\u0003J\t\u0010\u001b\u001a\u00020\nHÖ\u0001J\t\u0010\u001c\u001a\u00020\u0005HÖ\u0001J%\u0010\u001d\u001a\u00020\u001e2\u0006\u0010\u001f\u001a\u00020\u00002\u0006\u0010 \u001a\u00020!2\u0006\u0010\"\u001a\u00020#H\u0001¢\u0006\u0002\b$R\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u000e\u0010\u000fR\u0011\u0010\u0004\u001a\u00020\u0005¢\u0006\b\n\u0000\u001a\u0004\b\u0010\u0010\u0011R\u0011\u0010\u0006\u001a\u00020\u0005¢\u0006\b\n\u0000\u001a\u0004\b\u0012\u0010\u0011¨\u0006'"}, d2 = {"Lcom/discord/chat/bridge/contentnode/TimestampContentNode;", "Lcom/discord/chat/bridge/contentnode/ContentNode;", "timestamp", "", "full", "", "formatted", "<init>", "(JLjava/lang/String;Ljava/lang/String;)V", "seen0", "", "serializationConstructorMarker", "Lkotlinx/serialization/internal/SerializationConstructorMarker;", "(IJLjava/lang/String;Ljava/lang/String;Lkotlinx/serialization/internal/SerializationConstructorMarker;)V", "getTimestamp", "()J", "getFull", "()Ljava/lang/String;", "getFormatted", "component1", "component2", "component3", "copy", "equals", "", "other", "", "hashCode", "toString", "write$Self", "", "self", "output", "Lkotlinx/serialization/encoding/CompositeEncoder;", "serialDesc", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "write$Self$chat_release", "$serializer", "Companion", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class TimestampContentNode extends ContentNode {
    @NotNull
    public static final Companion Companion = new Companion(null);
    @NotNull
    private final String formatted;
    @NotNull
    private final String full;
    private final long timestamp;

    @Metadata(d1 = {"\u0000\u0016\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\f\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00060\u0005¨\u0006\u0007"}, d2 = {"Lcom/discord/chat/bridge/contentnode/TimestampContentNode$Companion;", "", "<init>", "()V", "serializer", "Lkotlinx/serialization/KSerializer;", "Lcom/discord/chat/bridge/contentnode/TimestampContentNode;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class Companion {
        private Companion() {
        }

        @NotNull
        public final KSerializer serializer() {
            return TimestampContentNode$$serializer.INSTANCE;
        }

        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public /* synthetic */ TimestampContentNode(int i10, long j10, String str, String str2, SerializationConstructorMarker serializationConstructorMarker) {
        super(null);
        if (7 != (i10 & 7)) {
            v1.b(i10, 7, TimestampContentNode$$serializer.INSTANCE.getDescriptor());
        }
        this.timestamp = j10;
        this.full = str;
        this.formatted = str2;
    }

    public static /* synthetic */ TimestampContentNode copy$default(TimestampContentNode timestampContentNode, long j10, String str, String str2, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            j10 = timestampContentNode.timestamp;
        }
        if ((i10 & 2) != 0) {
            str = timestampContentNode.full;
        }
        if ((i10 & 4) != 0) {
            str2 = timestampContentNode.formatted;
        }
        return timestampContentNode.copy(j10, str, str2);
    }

    public static final /* synthetic */ void write$Self$chat_release(TimestampContentNode timestampContentNode, CompositeEncoder compositeEncoder, SerialDescriptor serialDescriptor) {
        compositeEncoder.E(serialDescriptor, 0, timestampContentNode.timestamp);
        compositeEncoder.y(serialDescriptor, 1, timestampContentNode.full);
        compositeEncoder.y(serialDescriptor, 2, timestampContentNode.formatted);
    }

    public final long component1() {
        return this.timestamp;
    }

    @NotNull
    public final String component2() {
        return this.full;
    }

    @NotNull
    public final String component3() {
        return this.formatted;
    }

    @NotNull
    public final TimestampContentNode copy(long j10, @NotNull String full, @NotNull String formatted) {
        Intrinsics.checkNotNullParameter(full, "full");
        Intrinsics.checkNotNullParameter(formatted, "formatted");
        return new TimestampContentNode(j10, full, formatted);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof TimestampContentNode) {
            TimestampContentNode timestampContentNode = (TimestampContentNode) obj;
            return this.timestamp == timestampContentNode.timestamp && Intrinsics.areEqual(this.full, timestampContentNode.full) && Intrinsics.areEqual(this.formatted, timestampContentNode.formatted);
        }
        return false;
    }

    @NotNull
    public final String getFormatted() {
        return this.formatted;
    }

    @NotNull
    public final String getFull() {
        return this.full;
    }

    public final long getTimestamp() {
        return this.timestamp;
    }

    public int hashCode() {
        return (((Long.hashCode(this.timestamp) * 31) + this.full.hashCode()) * 31) + this.formatted.hashCode();
    }

    @NotNull
    public String toString() {
        long j10 = this.timestamp;
        String str = this.full;
        String str2 = this.formatted;
        return "TimestampContentNode(timestamp=" + j10 + ", full=" + str + ", formatted=" + str2 + ")";
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public TimestampContentNode(long j10, @NotNull String full, @NotNull String formatted) {
        super(null);
        Intrinsics.checkNotNullParameter(full, "full");
        Intrinsics.checkNotNullParameter(formatted, "formatted");
        this.timestamp = j10;
        this.full = full;
        this.formatted = formatted;
    }
}
