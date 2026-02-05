package com.discord.media_player.reactevents;

import com.discord.reactevents.ReactEvent;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.devsupport.StackTraceHelper;
import dt.m;
import gt.v1;
import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.encoding.CompositeEncoder;
import kotlinx.serialization.internal.SerializationConstructorMarker;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000J\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0006\n\u0002\b\u0005\n\u0002\u0010\b\n\u0000\n\u0002\u0018\u0002\n\u0002\b\n\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010\u0000\n\u0002\b\u0002\n\u0002\u0010\u000e\n\u0000\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\b\u0087\b\u0018\u0000 %2\u00020\u0001:\u0002$%B\u001f\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0003\u0012\u0006\u0010\u0005\u001a\u00020\u0003¢\u0006\u0004\b\u0006\u0010\u0007B3\b\u0010\u0012\u0006\u0010\b\u001a\u00020\t\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0003\u0012\u0006\u0010\u0005\u001a\u00020\u0003\u0012\b\u0010\n\u001a\u0004\u0018\u00010\u000b¢\u0006\u0004\b\u0006\u0010\fJ\t\u0010\u0011\u001a\u00020\u0003HÆ\u0003J\t\u0010\u0012\u001a\u00020\u0003HÆ\u0003J\t\u0010\u0013\u001a\u00020\u0003HÆ\u0003J'\u0010\u0014\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\b\b\u0002\u0010\u0004\u001a\u00020\u00032\b\b\u0002\u0010\u0005\u001a\u00020\u0003HÆ\u0001J\u0013\u0010\u0015\u001a\u00020\u00162\b\u0010\u0017\u001a\u0004\u0018\u00010\u0018HÖ\u0003J\t\u0010\u0019\u001a\u00020\tHÖ\u0001J\t\u0010\u001a\u001a\u00020\u001bHÖ\u0001J%\u0010\u001c\u001a\u00020\u001d2\u0006\u0010\u001e\u001a\u00020\u00002\u0006\u0010\u001f\u001a\u00020 2\u0006\u0010!\u001a\u00020\"H\u0001¢\u0006\u0002\b#R\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\r\u0010\u000eR\u0011\u0010\u0004\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u000f\u0010\u000eR\u0011\u0010\u0005\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0010\u0010\u000e¨\u0006&"}, d2 = {"Lcom/discord/media_player/reactevents/MediaPlayerProgress;", "Lcom/discord/reactevents/ReactEvent;", StackTraceHelper.ID_KEY, "", "time", "duration", "<init>", "(DDD)V", "seen0", "", "serializationConstructorMarker", "Lkotlinx/serialization/internal/SerializationConstructorMarker;", "(IDDDLkotlinx/serialization/internal/SerializationConstructorMarker;)V", "getId", "()D", "getTime", "getDuration", "component1", "component2", "component3", "copy", "equals", "", "other", "", "hashCode", "toString", "", "write$Self", "", "self", "output", "Lkotlinx/serialization/encoding/CompositeEncoder;", "serialDesc", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "write$Self$media_player_release", "$serializer", "Companion", "media_player_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@m
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class MediaPlayerProgress implements ReactEvent {
    @NotNull
    public static final Companion Companion = new Companion(null);
    private final double duration;

    /* renamed from: id  reason: collision with root package name */
    private final double f9568id;
    private final double time;

    @Metadata(d1 = {"\u0000\u0016\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\f\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00060\u0005¨\u0006\u0007"}, d2 = {"Lcom/discord/media_player/reactevents/MediaPlayerProgress$Companion;", "", "<init>", "()V", "serializer", "Lkotlinx/serialization/KSerializer;", "Lcom/discord/media_player/reactevents/MediaPlayerProgress;", "media_player_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class Companion {
        private Companion() {
        }

        @NotNull
        public final KSerializer serializer() {
            return MediaPlayerProgress$$serializer.INSTANCE;
        }

        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }
    }

    public /* synthetic */ MediaPlayerProgress(int i10, double d10, double d11, double d12, SerializationConstructorMarker serializationConstructorMarker) {
        if (7 != (i10 & 7)) {
            v1.b(i10, 7, MediaPlayerProgress$$serializer.INSTANCE.getDescriptor());
        }
        this.f9568id = d10;
        this.time = d11;
        this.duration = d12;
    }

    public static /* synthetic */ MediaPlayerProgress copy$default(MediaPlayerProgress mediaPlayerProgress, double d10, double d11, double d12, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            d10 = mediaPlayerProgress.f9568id;
        }
        double d13 = d10;
        if ((i10 & 2) != 0) {
            d11 = mediaPlayerProgress.time;
        }
        double d14 = d11;
        if ((i10 & 4) != 0) {
            d12 = mediaPlayerProgress.duration;
        }
        return mediaPlayerProgress.copy(d13, d14, d12);
    }

    public static final /* synthetic */ void write$Self$media_player_release(MediaPlayerProgress mediaPlayerProgress, CompositeEncoder compositeEncoder, SerialDescriptor serialDescriptor) {
        compositeEncoder.D(serialDescriptor, 0, mediaPlayerProgress.f9568id);
        compositeEncoder.D(serialDescriptor, 1, mediaPlayerProgress.time);
        compositeEncoder.D(serialDescriptor, 2, mediaPlayerProgress.duration);
    }

    public final double component1() {
        return this.f9568id;
    }

    public final double component2() {
        return this.time;
    }

    public final double component3() {
        return this.duration;
    }

    @NotNull
    public final MediaPlayerProgress copy(double d10, double d11, double d12) {
        return new MediaPlayerProgress(d10, d11, d12);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof MediaPlayerProgress) {
            MediaPlayerProgress mediaPlayerProgress = (MediaPlayerProgress) obj;
            return Double.compare(this.f9568id, mediaPlayerProgress.f9568id) == 0 && Double.compare(this.time, mediaPlayerProgress.time) == 0 && Double.compare(this.duration, mediaPlayerProgress.duration) == 0;
        }
        return false;
    }

    public final double getDuration() {
        return this.duration;
    }

    public final double getId() {
        return this.f9568id;
    }

    public final double getTime() {
        return this.time;
    }

    public int hashCode() {
        return (((Double.hashCode(this.f9568id) * 31) + Double.hashCode(this.time)) * 31) + Double.hashCode(this.duration);
    }

    @Override // com.discord.reactevents.ReactEvent
    @NotNull
    public WritableMap serialize() {
        return ReactEvent.DefaultImpls.serialize(this);
    }

    @NotNull
    public String toString() {
        double d10 = this.f9568id;
        double d11 = this.time;
        double d12 = this.duration;
        return "MediaPlayerProgress(id=" + d10 + ", time=" + d11 + ", duration=" + d12 + ")";
    }

    public MediaPlayerProgress(double d10, double d11, double d12) {
        this.f9568id = d10;
        this.time = d11;
        this.duration = d12;
    }
}
