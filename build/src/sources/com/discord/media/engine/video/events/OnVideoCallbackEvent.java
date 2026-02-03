package com.discord.media.engine.video.events;

import at.m;
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
@Metadata(d1 = {"\u0000N\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0000\n\u0002\u0010\u000e\n\u0000\n\u0002\u0010\t\n\u0002\u0018\u0002\n\u0002\b\u0006\n\u0002\u0018\u0002\n\u0002\b\u0010\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\b\u0081\b\u0018\u0000 .2\u00020\u0001:\u0002-.B3\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0005\u0012\n\u0010\u0006\u001a\u00060\u0007j\u0002`\b\u0012\u0006\u0010\t\u001a\u00020\u0005\u0012\u0006\u0010\n\u001a\u00020\u0005¢\u0006\u0004\b\u000b\u0010\fBI\b\u0010\u0012\u0006\u0010\r\u001a\u00020\u0003\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\b\u0010\u0004\u001a\u0004\u0018\u00010\u0005\u0012\u0006\u0010\u0006\u001a\u00020\u0007\u0012\b\u0010\t\u001a\u0004\u0018\u00010\u0005\u0012\b\u0010\n\u001a\u0004\u0018\u00010\u0005\u0012\b\u0010\u000e\u001a\u0004\u0018\u00010\u000f¢\u0006\u0004\b\u000b\u0010\u0010J\t\u0010\u0019\u001a\u00020\u0003HÆ\u0003J\t\u0010\u001a\u001a\u00020\u0005HÆ\u0003J\r\u0010\u001b\u001a\u00060\u0007j\u0002`\bHÆ\u0003J\t\u0010\u001c\u001a\u00020\u0005HÆ\u0003J\t\u0010\u001d\u001a\u00020\u0005HÆ\u0003J?\u0010\u001e\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\b\b\u0002\u0010\u0004\u001a\u00020\u00052\f\b\u0002\u0010\u0006\u001a\u00060\u0007j\u0002`\b2\b\b\u0002\u0010\t\u001a\u00020\u00052\b\b\u0002\u0010\n\u001a\u00020\u0005HÆ\u0001J\u0013\u0010\u001f\u001a\u00020 2\b\u0010!\u001a\u0004\u0018\u00010\"HÖ\u0003J\t\u0010#\u001a\u00020\u0003HÖ\u0001J\t\u0010$\u001a\u00020\u0005HÖ\u0001J%\u0010%\u001a\u00020&2\u0006\u0010'\u001a\u00020\u00002\u0006\u0010(\u001a\u00020)2\u0006\u0010*\u001a\u00020+H\u0001¢\u0006\u0002\b,R\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0011\u0010\u0012R\u0011\u0010\u0004\u001a\u00020\u0005¢\u0006\b\n\u0000\u001a\u0004\b\u0013\u0010\u0014R\u0015\u0010\u0006\u001a\u00060\u0007j\u0002`\b¢\u0006\b\n\u0000\u001a\u0004\b\u0015\u0010\u0016R\u0011\u0010\t\u001a\u00020\u0005¢\u0006\b\n\u0000\u001a\u0004\b\u0017\u0010\u0014R\u0011\u0010\n\u001a\u00020\u0005¢\u0006\b\n\u0000\u001a\u0004\b\u0018\u0010\u0014¨\u0006/"}, d2 = {"Lcom/discord/media/engine/video/events/OnVideoCallbackEvent;", "Lcom/discord/reactevents/ReactEvent;", "connectionId", "", "userId", "", "ssrc", "", "Lcom/discord/media/engine/types/SSRC64;", "streamId", "videoStreamParametersJSON", "<init>", "(ILjava/lang/String;JLjava/lang/String;Ljava/lang/String;)V", "seen0", "serializationConstructorMarker", "Lkotlinx/serialization/internal/SerializationConstructorMarker;", "(IILjava/lang/String;JLjava/lang/String;Ljava/lang/String;Lkotlinx/serialization/internal/SerializationConstructorMarker;)V", "getConnectionId", "()I", "getUserId", "()Ljava/lang/String;", "getSsrc", "()J", "getStreamId", "getVideoStreamParametersJSON", "component1", "component2", "component3", "component4", "component5", "copy", "equals", "", "other", "", "hashCode", "toString", "write$Self", "", "self", "output", "Lkotlinx/serialization/encoding/CompositeEncoder;", "serialDesc", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "write$Self$media_engine_release", "$serializer", "Companion", "media_engine_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class OnVideoCallbackEvent implements ReactEvent {
    @NotNull
    public static final Companion Companion = new Companion(null);
    private final int connectionId;
    private final long ssrc;
    @NotNull
    private final String streamId;
    @NotNull
    private final String userId;
    @NotNull
    private final String videoStreamParametersJSON;

    @Metadata(d1 = {"\u0000\u0016\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\f\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00060\u0005¨\u0006\u0007"}, d2 = {"Lcom/discord/media/engine/video/events/OnVideoCallbackEvent$Companion;", "", "<init>", "()V", "serializer", "Lkotlinx/serialization/KSerializer;", "Lcom/discord/media/engine/video/events/OnVideoCallbackEvent;", "media_engine_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class Companion {
        private Companion() {
        }

        @NotNull
        public final KSerializer serializer() {
            return OnVideoCallbackEvent$$serializer.INSTANCE;
        }

        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }
    }

    public /* synthetic */ OnVideoCallbackEvent(int i10, int i11, String str, long j10, String str2, String str3, SerializationConstructorMarker serializationConstructorMarker) {
        if (31 != (i10 & 31)) {
            v1.b(i10, 31, OnVideoCallbackEvent$$serializer.INSTANCE.getDescriptor());
        }
        this.connectionId = i11;
        this.userId = str;
        this.ssrc = j10;
        this.streamId = str2;
        this.videoStreamParametersJSON = str3;
    }

    public static /* synthetic */ OnVideoCallbackEvent copy$default(OnVideoCallbackEvent onVideoCallbackEvent, int i10, String str, long j10, String str2, String str3, int i11, Object obj) {
        if ((i11 & 1) != 0) {
            i10 = onVideoCallbackEvent.connectionId;
        }
        if ((i11 & 2) != 0) {
            str = onVideoCallbackEvent.userId;
        }
        if ((i11 & 4) != 0) {
            j10 = onVideoCallbackEvent.ssrc;
        }
        if ((i11 & 8) != 0) {
            str2 = onVideoCallbackEvent.streamId;
        }
        if ((i11 & 16) != 0) {
            str3 = onVideoCallbackEvent.videoStreamParametersJSON;
        }
        long j11 = j10;
        return onVideoCallbackEvent.copy(i10, str, j11, str2, str3);
    }

    public static final /* synthetic */ void write$Self$media_engine_release(OnVideoCallbackEvent onVideoCallbackEvent, CompositeEncoder compositeEncoder, SerialDescriptor serialDescriptor) {
        compositeEncoder.w(serialDescriptor, 0, onVideoCallbackEvent.connectionId);
        compositeEncoder.y(serialDescriptor, 1, onVideoCallbackEvent.userId);
        compositeEncoder.E(serialDescriptor, 2, onVideoCallbackEvent.ssrc);
        compositeEncoder.y(serialDescriptor, 3, onVideoCallbackEvent.streamId);
        compositeEncoder.y(serialDescriptor, 4, onVideoCallbackEvent.videoStreamParametersJSON);
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
    public final String component5() {
        return this.videoStreamParametersJSON;
    }

    @NotNull
    public final OnVideoCallbackEvent copy(int i10, @NotNull String userId, long j10, @NotNull String streamId, @NotNull String videoStreamParametersJSON) {
        Intrinsics.checkNotNullParameter(userId, "userId");
        Intrinsics.checkNotNullParameter(streamId, "streamId");
        Intrinsics.checkNotNullParameter(videoStreamParametersJSON, "videoStreamParametersJSON");
        return new OnVideoCallbackEvent(i10, userId, j10, streamId, videoStreamParametersJSON);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof OnVideoCallbackEvent) {
            OnVideoCallbackEvent onVideoCallbackEvent = (OnVideoCallbackEvent) obj;
            return this.connectionId == onVideoCallbackEvent.connectionId && Intrinsics.areEqual(this.userId, onVideoCallbackEvent.userId) && this.ssrc == onVideoCallbackEvent.ssrc && Intrinsics.areEqual(this.streamId, onVideoCallbackEvent.streamId) && Intrinsics.areEqual(this.videoStreamParametersJSON, onVideoCallbackEvent.videoStreamParametersJSON);
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

    @NotNull
    public final String getVideoStreamParametersJSON() {
        return this.videoStreamParametersJSON;
    }

    public int hashCode() {
        return (((((((Integer.hashCode(this.connectionId) * 31) + this.userId.hashCode()) * 31) + Long.hashCode(this.ssrc)) * 31) + this.streamId.hashCode()) * 31) + this.videoStreamParametersJSON.hashCode();
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
        String str3 = this.videoStreamParametersJSON;
        return "OnVideoCallbackEvent(connectionId=" + i10 + ", userId=" + str + ", ssrc=" + j10 + ", streamId=" + str2 + ", videoStreamParametersJSON=" + str3 + ")";
    }

    public OnVideoCallbackEvent(int i10, @NotNull String userId, long j10, @NotNull String streamId, @NotNull String videoStreamParametersJSON) {
        Intrinsics.checkNotNullParameter(userId, "userId");
        Intrinsics.checkNotNullParameter(streamId, "streamId");
        Intrinsics.checkNotNullParameter(videoStreamParametersJSON, "videoStreamParametersJSON");
        this.connectionId = i10;
        this.userId = userId;
        this.ssrc = j10;
        this.streamId = streamId;
        this.videoStreamParametersJSON = videoStreamParametersJSON;
    }
}
