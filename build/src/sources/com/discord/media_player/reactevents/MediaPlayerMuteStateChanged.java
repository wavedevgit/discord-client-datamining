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
@Metadata(d1 = {"\u0000J\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0006\n\u0000\n\u0002\u0010\u000b\n\u0002\b\u0003\n\u0002\u0010\b\n\u0000\n\u0002\u0018\u0002\n\u0002\b\t\n\u0002\u0010\u0000\n\u0002\b\u0002\n\u0002\u0010\u000e\n\u0000\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\b\u0087\b\u0018\u0000 \"2\u00020\u0001:\u0002!\"B\u0017\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0005¢\u0006\u0004\b\u0006\u0010\u0007B+\b\u0010\u0012\u0006\u0010\b\u001a\u00020\t\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0005\u0012\b\u0010\n\u001a\u0004\u0018\u00010\u000b¢\u0006\u0004\b\u0006\u0010\fJ\t\u0010\u0010\u001a\u00020\u0003HÆ\u0003J\t\u0010\u0011\u001a\u00020\u0005HÆ\u0003J\u001d\u0010\u0012\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\b\b\u0002\u0010\u0004\u001a\u00020\u0005HÆ\u0001J\u0013\u0010\u0013\u001a\u00020\u00052\b\u0010\u0014\u001a\u0004\u0018\u00010\u0015HÖ\u0003J\t\u0010\u0016\u001a\u00020\tHÖ\u0001J\t\u0010\u0017\u001a\u00020\u0018HÖ\u0001J%\u0010\u0019\u001a\u00020\u001a2\u0006\u0010\u001b\u001a\u00020\u00002\u0006\u0010\u001c\u001a\u00020\u001d2\u0006\u0010\u001e\u001a\u00020\u001fH\u0001¢\u0006\u0002\b R\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\r\u0010\u000eR\u0011\u0010\u0004\u001a\u00020\u0005¢\u0006\b\n\u0000\u001a\u0004\b\u0004\u0010\u000f¨\u0006#"}, d2 = {"Lcom/discord/media_player/reactevents/MediaPlayerMuteStateChanged;", "Lcom/discord/reactevents/ReactEvent;", StackTraceHelper.ID_KEY, "", "isMuted", "", "<init>", "(DZ)V", "seen0", "", "serializationConstructorMarker", "Lkotlinx/serialization/internal/SerializationConstructorMarker;", "(IDZLkotlinx/serialization/internal/SerializationConstructorMarker;)V", "getId", "()D", "()Z", "component1", "component2", "copy", "equals", "other", "", "hashCode", "toString", "", "write$Self", "", "self", "output", "Lkotlinx/serialization/encoding/CompositeEncoder;", "serialDesc", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "write$Self$media_player_release", "$serializer", "Companion", "media_player_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@m
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class MediaPlayerMuteStateChanged implements ReactEvent {
    @NotNull
    public static final Companion Companion = new Companion(null);

    /* renamed from: id  reason: collision with root package name */
    private final double f9565id;
    private final boolean isMuted;

    @Metadata(d1 = {"\u0000\u0016\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\f\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00060\u0005¨\u0006\u0007"}, d2 = {"Lcom/discord/media_player/reactevents/MediaPlayerMuteStateChanged$Companion;", "", "<init>", "()V", "serializer", "Lkotlinx/serialization/KSerializer;", "Lcom/discord/media_player/reactevents/MediaPlayerMuteStateChanged;", "media_player_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class Companion {
        private Companion() {
        }

        @NotNull
        public final KSerializer serializer() {
            return MediaPlayerMuteStateChanged$$serializer.INSTANCE;
        }

        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }
    }

    public /* synthetic */ MediaPlayerMuteStateChanged(int i10, double d10, boolean z10, SerializationConstructorMarker serializationConstructorMarker) {
        if (3 != (i10 & 3)) {
            v1.b(i10, 3, MediaPlayerMuteStateChanged$$serializer.INSTANCE.getDescriptor());
        }
        this.f9565id = d10;
        this.isMuted = z10;
    }

    public static /* synthetic */ MediaPlayerMuteStateChanged copy$default(MediaPlayerMuteStateChanged mediaPlayerMuteStateChanged, double d10, boolean z10, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            d10 = mediaPlayerMuteStateChanged.f9565id;
        }
        if ((i10 & 2) != 0) {
            z10 = mediaPlayerMuteStateChanged.isMuted;
        }
        return mediaPlayerMuteStateChanged.copy(d10, z10);
    }

    public static final /* synthetic */ void write$Self$media_player_release(MediaPlayerMuteStateChanged mediaPlayerMuteStateChanged, CompositeEncoder compositeEncoder, SerialDescriptor serialDescriptor) {
        compositeEncoder.D(serialDescriptor, 0, mediaPlayerMuteStateChanged.f9565id);
        compositeEncoder.w(serialDescriptor, 1, mediaPlayerMuteStateChanged.isMuted);
    }

    public final double component1() {
        return this.f9565id;
    }

    public final boolean component2() {
        return this.isMuted;
    }

    @NotNull
    public final MediaPlayerMuteStateChanged copy(double d10, boolean z10) {
        return new MediaPlayerMuteStateChanged(d10, z10);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof MediaPlayerMuteStateChanged) {
            MediaPlayerMuteStateChanged mediaPlayerMuteStateChanged = (MediaPlayerMuteStateChanged) obj;
            return Double.compare(this.f9565id, mediaPlayerMuteStateChanged.f9565id) == 0 && this.isMuted == mediaPlayerMuteStateChanged.isMuted;
        }
        return false;
    }

    public final double getId() {
        return this.f9565id;
    }

    public int hashCode() {
        return (Double.hashCode(this.f9565id) * 31) + Boolean.hashCode(this.isMuted);
    }

    public final boolean isMuted() {
        return this.isMuted;
    }

    @Override // com.discord.reactevents.ReactEvent
    @NotNull
    public WritableMap serialize() {
        return ReactEvent.DefaultImpls.serialize(this);
    }

    @NotNull
    public String toString() {
        double d10 = this.f9565id;
        boolean z10 = this.isMuted;
        return "MediaPlayerMuteStateChanged(id=" + d10 + ", isMuted=" + z10 + ")";
    }

    public MediaPlayerMuteStateChanged(double d10, boolean z10) {
        this.f9565id = d10;
        this.isMuted = z10;
    }
}
