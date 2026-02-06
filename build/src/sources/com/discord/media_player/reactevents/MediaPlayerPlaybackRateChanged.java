package com.discord.media_player.reactevents;

import com.discord.react.utilities.NativeMapExtensionsKt;
import com.discord.reactevents.ReactEvent;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.bridge.WritableNativeMap;
import ft.m;
import ft.w;
import jt.v1;
import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.encoding.CompositeEncoder;
import kotlinx.serialization.internal.SerializationConstructorMarker;
import nt.a;
import org.jetbrains.annotations.NotNull;
import qr.v;
@m
@Metadata(d1 = {"\u0000X\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0006\n\u0002\b\u0003\n\u0002\u0010\b\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0006\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010\u0000\n\u0002\b\u0002\n\u0002\u0010\u000e\n\u0000\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\b\u0087\b\u0018\u0000 &2\u00020\u0001:\u0002%&B\u0019\u0012\b\u0010\u0002\u001a\u0004\u0018\u00010\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0005¢\u0006\u0004\b\u0006\u0010\u0007B-\b\u0010\u0012\u0006\u0010\b\u001a\u00020\t\u0012\b\u0010\u0002\u001a\u0004\u0018\u00010\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0005\u0012\b\u0010\n\u001a\u0004\u0018\u00010\u000b¢\u0006\u0004\b\u0006\u0010\fJ\b\u0010\u0011\u001a\u00020\u0012H\u0016J\u000b\u0010\u0013\u001a\u0004\u0018\u00010\u0003HÆ\u0003J\t\u0010\u0014\u001a\u00020\u0005HÆ\u0003J\u001f\u0010\u0015\u001a\u00020\u00002\n\b\u0002\u0010\u0002\u001a\u0004\u0018\u00010\u00032\b\b\u0002\u0010\u0004\u001a\u00020\u0005HÆ\u0001J\u0013\u0010\u0016\u001a\u00020\u00172\b\u0010\u0018\u001a\u0004\u0018\u00010\u0019HÖ\u0003J\t\u0010\u001a\u001a\u00020\tHÖ\u0001J\t\u0010\u001b\u001a\u00020\u001cHÖ\u0001J%\u0010\u001d\u001a\u00020\u001e2\u0006\u0010\u001f\u001a\u00020\u00002\u0006\u0010 \u001a\u00020!2\u0006\u0010\"\u001a\u00020#H\u0001¢\u0006\u0002\b$R\u0013\u0010\u0002\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\r\u0010\u000eR\u0011\u0010\u0004\u001a\u00020\u0005¢\u0006\b\n\u0000\u001a\u0004\b\u000f\u0010\u0010¨\u0006'"}, d2 = {"Lcom/discord/media_player/reactevents/MediaPlayerPlaybackRateChanged;", "Lcom/discord/reactevents/ReactEvent;", "source", "Lcom/discord/media_player/reactevents/MediaPlayerPlaybackSource;", "rate", "", "<init>", "(Lcom/discord/media_player/reactevents/MediaPlayerPlaybackSource;D)V", "seen0", "", "serializationConstructorMarker", "Lkotlinx/serialization/internal/SerializationConstructorMarker;", "(ILcom/discord/media_player/reactevents/MediaPlayerPlaybackSource;DLkotlinx/serialization/internal/SerializationConstructorMarker;)V", "getSource", "()Lcom/discord/media_player/reactevents/MediaPlayerPlaybackSource;", "getRate", "()D", "serialize", "Lcom/facebook/react/bridge/WritableMap;", "component1", "component2", "copy", "equals", "", "other", "", "hashCode", "toString", "", "write$Self", "", "self", "output", "Lkotlinx/serialization/encoding/CompositeEncoder;", "serialDesc", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "write$Self$media_player_release", "$serializer", "Companion", "media_player_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class MediaPlayerPlaybackRateChanged implements ReactEvent {
    @NotNull
    public static final Companion Companion = new Companion(null);
    private final double rate;
    private final MediaPlayerPlaybackSource source;

    @Metadata(d1 = {"\u0000\u0016\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\f\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00060\u0005¨\u0006\u0007"}, d2 = {"Lcom/discord/media_player/reactevents/MediaPlayerPlaybackRateChanged$Companion;", "", "<init>", "()V", "serializer", "Lkotlinx/serialization/KSerializer;", "Lcom/discord/media_player/reactevents/MediaPlayerPlaybackRateChanged;", "media_player_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class Companion {
        private Companion() {
        }

        @NotNull
        public final KSerializer serializer() {
            return MediaPlayerPlaybackRateChanged$$serializer.INSTANCE;
        }

        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }
    }

    public /* synthetic */ MediaPlayerPlaybackRateChanged(int i10, MediaPlayerPlaybackSource mediaPlayerPlaybackSource, double d10, SerializationConstructorMarker serializationConstructorMarker) {
        if (3 != (i10 & 3)) {
            v1.b(i10, 3, MediaPlayerPlaybackRateChanged$$serializer.INSTANCE.getDescriptor());
        }
        this.source = mediaPlayerPlaybackSource;
        this.rate = d10;
    }

    public static /* synthetic */ MediaPlayerPlaybackRateChanged copy$default(MediaPlayerPlaybackRateChanged mediaPlayerPlaybackRateChanged, MediaPlayerPlaybackSource mediaPlayerPlaybackSource, double d10, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            mediaPlayerPlaybackSource = mediaPlayerPlaybackRateChanged.source;
        }
        if ((i10 & 2) != 0) {
            d10 = mediaPlayerPlaybackRateChanged.rate;
        }
        return mediaPlayerPlaybackRateChanged.copy(mediaPlayerPlaybackSource, d10);
    }

    public static final /* synthetic */ void write$Self$media_player_release(MediaPlayerPlaybackRateChanged mediaPlayerPlaybackRateChanged, CompositeEncoder compositeEncoder, SerialDescriptor serialDescriptor) {
        compositeEncoder.l(serialDescriptor, 0, MediaPlayerPlaybackSource$$serializer.INSTANCE, mediaPlayerPlaybackRateChanged.source);
        compositeEncoder.D(serialDescriptor, 1, mediaPlayerPlaybackRateChanged.rate);
    }

    public final MediaPlayerPlaybackSource component1() {
        return this.source;
    }

    public final double component2() {
        return this.rate;
    }

    @NotNull
    public final MediaPlayerPlaybackRateChanged copy(MediaPlayerPlaybackSource mediaPlayerPlaybackSource, double d10) {
        return new MediaPlayerPlaybackRateChanged(mediaPlayerPlaybackSource, d10);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof MediaPlayerPlaybackRateChanged) {
            MediaPlayerPlaybackRateChanged mediaPlayerPlaybackRateChanged = (MediaPlayerPlaybackRateChanged) obj;
            return Intrinsics.areEqual(this.source, mediaPlayerPlaybackRateChanged.source) && Double.compare(this.rate, mediaPlayerPlaybackRateChanged.rate) == 0;
        }
        return false;
    }

    public final double getRate() {
        return this.rate;
    }

    public final MediaPlayerPlaybackSource getSource() {
        return this.source;
    }

    public int hashCode() {
        MediaPlayerPlaybackSource mediaPlayerPlaybackSource = this.source;
        return ((mediaPlayerPlaybackSource == null ? 0 : mediaPlayerPlaybackSource.hashCode()) * 31) + Double.hashCode(this.rate);
    }

    @Override // com.discord.reactevents.ReactEvent
    @NotNull
    public WritableMap serialize() {
        WritableNativeMap nativeMapOf = NativeMapExtensionsKt.nativeMapOf(v.a("rate", Double.valueOf(this.rate)));
        if (this.source != null) {
            nativeMapOf.putMap("source", NativeMapExtensionsKt.toNativeMap(a.f41154b.e(w.b(MediaPlayerPlaybackSource.class), this.source)));
        }
        return nativeMapOf;
    }

    @NotNull
    public String toString() {
        MediaPlayerPlaybackSource mediaPlayerPlaybackSource = this.source;
        double d10 = this.rate;
        return "MediaPlayerPlaybackRateChanged(source=" + mediaPlayerPlaybackSource + ", rate=" + d10 + ")";
    }

    public MediaPlayerPlaybackRateChanged(MediaPlayerPlaybackSource mediaPlayerPlaybackSource, double d10) {
        this.source = mediaPlayerPlaybackSource;
        this.rate = d10;
    }
}
