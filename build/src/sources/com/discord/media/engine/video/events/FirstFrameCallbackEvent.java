package com.discord.media.engine.video.events;

import com.discord.reactevents.ReactEvent;
import com.facebook.react.bridge.WritableMap;
import ft.m;
import jt.v1;
import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.encoding.CompositeEncoder;
import kotlinx.serialization.internal.SerializationConstructorMarker;
import org.jetbrains.annotations.NotNull;
@m
@Metadata(d1 = {"\u0000N\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0000\n\u0002\u0010\u000e\n\u0000\n\u0002\u0010\t\n\u0002\u0018\u0002\n\u0002\b\u0005\n\u0002\u0018\u0002\n\u0002\b\u000e\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\b\u0081\b\u0018\u0000 +2\u00020\u0001:\u0002*+B+\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0005\u0012\n\u0010\u0006\u001a\u00060\u0007j\u0002`\b\u0012\u0006\u0010\t\u001a\u00020\u0005¢\u0006\u0004\b\n\u0010\u000bB?\b\u0010\u0012\u0006\u0010\f\u001a\u00020\u0003\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\b\u0010\u0004\u001a\u0004\u0018\u00010\u0005\u0012\u0006\u0010\u0006\u001a\u00020\u0007\u0012\b\u0010\t\u001a\u0004\u0018\u00010\u0005\u0012\b\u0010\r\u001a\u0004\u0018\u00010\u000e¢\u0006\u0004\b\n\u0010\u000fJ\t\u0010\u0017\u001a\u00020\u0003HÆ\u0003J\t\u0010\u0018\u001a\u00020\u0005HÆ\u0003J\r\u0010\u0019\u001a\u00060\u0007j\u0002`\bHÆ\u0003J\t\u0010\u001a\u001a\u00020\u0005HÆ\u0003J5\u0010\u001b\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\b\b\u0002\u0010\u0004\u001a\u00020\u00052\f\b\u0002\u0010\u0006\u001a\u00060\u0007j\u0002`\b2\b\b\u0002\u0010\t\u001a\u00020\u0005HÆ\u0001J\u0013\u0010\u001c\u001a\u00020\u001d2\b\u0010\u001e\u001a\u0004\u0018\u00010\u001fHÖ\u0003J\t\u0010 \u001a\u00020\u0003HÖ\u0001J\t\u0010!\u001a\u00020\u0005HÖ\u0001J%\u0010\"\u001a\u00020#2\u0006\u0010$\u001a\u00020\u00002\u0006\u0010%\u001a\u00020&2\u0006\u0010'\u001a\u00020(H\u0001¢\u0006\u0002\b)R\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0010\u0010\u0011R\u0011\u0010\u0004\u001a\u00020\u0005¢\u0006\b\n\u0000\u001a\u0004\b\u0012\u0010\u0013R\u0015\u0010\u0006\u001a\u00060\u0007j\u0002`\b¢\u0006\b\n\u0000\u001a\u0004\b\u0014\u0010\u0015R\u0011\u0010\t\u001a\u00020\u0005¢\u0006\b\n\u0000\u001a\u0004\b\u0016\u0010\u0013¨\u0006,"}, d2 = {"Lcom/discord/media/engine/video/events/FirstFrameCallbackEvent;", "Lcom/discord/reactevents/ReactEvent;", "connectionId", "", "userId", "", "ssrc", "", "Lcom/discord/media/engine/types/SSRC64;", "streamId", "<init>", "(ILjava/lang/String;JLjava/lang/String;)V", "seen0", "serializationConstructorMarker", "Lkotlinx/serialization/internal/SerializationConstructorMarker;", "(IILjava/lang/String;JLjava/lang/String;Lkotlinx/serialization/internal/SerializationConstructorMarker;)V", "getConnectionId", "()I", "getUserId", "()Ljava/lang/String;", "getSsrc", "()J", "getStreamId", "component1", "component2", "component3", "component4", "copy", "equals", "", "other", "", "hashCode", "toString", "write$Self", "", "self", "output", "Lkotlinx/serialization/encoding/CompositeEncoder;", "serialDesc", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "write$Self$media_engine_release", "$serializer", "Companion", "media_engine_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class FirstFrameCallbackEvent implements ReactEvent {
    @NotNull
    public static final Companion Companion = new Companion(null);
    private final int connectionId;
    private final long ssrc;
    @NotNull
    private final String streamId;
    @NotNull
    private final String userId;

    @Metadata(d1 = {"\u0000\u0016\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\f\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00060\u0005¨\u0006\u0007"}, d2 = {"Lcom/discord/media/engine/video/events/FirstFrameCallbackEvent$Companion;", "", "<init>", "()V", "serializer", "Lkotlinx/serialization/KSerializer;", "Lcom/discord/media/engine/video/events/FirstFrameCallbackEvent;", "media_engine_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class Companion {
        private Companion() {
        }

        @NotNull
        public final KSerializer serializer() {
            return FirstFrameCallbackEvent$$serializer.INSTANCE;
        }

        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }
    }

    public /* synthetic */ FirstFrameCallbackEvent(int i10, int i11, String str, long j10, String str2, SerializationConstructorMarker serializationConstructorMarker) {
        if (15 != (i10 & 15)) {
            v1.b(i10, 15, FirstFrameCallbackEvent$$serializer.INSTANCE.getDescriptor());
        }
        this.connectionId = i11;
        this.userId = str;
        this.ssrc = j10;
        this.streamId = str2;
    }

    public static /* synthetic */ FirstFrameCallbackEvent copy$default(FirstFrameCallbackEvent firstFrameCallbackEvent, int i10, String str, long j10, String str2, int i11, Object obj) {
        if ((i11 & 1) != 0) {
            i10 = firstFrameCallbackEvent.connectionId;
        }
        if ((i11 & 2) != 0) {
            str = firstFrameCallbackEvent.userId;
        }
        if ((i11 & 4) != 0) {
            j10 = firstFrameCallbackEvent.ssrc;
        }
        if ((i11 & 8) != 0) {
            str2 = firstFrameCallbackEvent.streamId;
        }
        String str3 = str2;
        return firstFrameCallbackEvent.copy(i10, str, j10, str3);
    }

    public static final /* synthetic */ void write$Self$media_engine_release(FirstFrameCallbackEvent firstFrameCallbackEvent, CompositeEncoder compositeEncoder, SerialDescriptor serialDescriptor) {
        compositeEncoder.x(serialDescriptor, 0, firstFrameCallbackEvent.connectionId);
        compositeEncoder.z(serialDescriptor, 1, firstFrameCallbackEvent.userId);
        compositeEncoder.E(serialDescriptor, 2, firstFrameCallbackEvent.ssrc);
        compositeEncoder.z(serialDescriptor, 3, firstFrameCallbackEvent.streamId);
    }

    public final int component1() {
        return this.connectionId;
    }

    @NotNull
    public final String component2() {
        return this.userId;
    }

    public final long component3() {
        return this.ssrc;
    }

    @NotNull
    public final String component4() {
        return this.streamId;
    }

    @NotNull
    public final FirstFrameCallbackEvent copy(int i10, @NotNull String userId, long j10, @NotNull String streamId) {
        Intrinsics.checkNotNullParameter(userId, "userId");
        Intrinsics.checkNotNullParameter(streamId, "streamId");
        return new FirstFrameCallbackEvent(i10, userId, j10, streamId);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof FirstFrameCallbackEvent) {
            FirstFrameCallbackEvent firstFrameCallbackEvent = (FirstFrameCallbackEvent) obj;
            return this.connectionId == firstFrameCallbackEvent.connectionId && Intrinsics.areEqual(this.userId, firstFrameCallbackEvent.userId) && this.ssrc == firstFrameCallbackEvent.ssrc && Intrinsics.areEqual(this.streamId, firstFrameCallbackEvent.streamId);
        }
        return false;
    }

    public final int getConnectionId() {
        return this.connectionId;
    }

    public final long getSsrc() {
        return this.ssrc;
    }

    @NotNull
    public final String getStreamId() {
        return this.streamId;
    }

    @NotNull
    public final String getUserId() {
        return this.userId;
    }

    public int hashCode() {
        return (((((Integer.hashCode(this.connectionId) * 31) + this.userId.hashCode()) * 31) + Long.hashCode(this.ssrc)) * 31) + this.streamId.hashCode();
    }

    @Override // com.discord.reactevents.ReactEvent
    @NotNull
    public WritableMap serialize() {
        return ReactEvent.DefaultImpls.serialize(this);
    }

    @NotNull
    public String toString() {
        int i10 = this.connectionId;
        String str = this.userId;
        long j10 = this.ssrc;
        String str2 = this.streamId;
        return "FirstFrameCallbackEvent(connectionId=" + i10 + ", userId=" + str + ", ssrc=" + j10 + ", streamId=" + str2 + ")";
    }

    public FirstFrameCallbackEvent(int i10, @NotNull String userId, long j10, @NotNull String streamId) {
        Intrinsics.checkNotNullParameter(userId, "userId");
        Intrinsics.checkNotNullParameter(streamId, "streamId");
        this.connectionId = i10;
        this.userId = userId;
        this.ssrc = j10;
        this.streamId = streamId;
    }
}
