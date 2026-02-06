package com.discord.media_player.reactevents;

import com.discord.react.utilities.NativeMapExtensionsKt;
import com.discord.reactevents.ReactEvent;
import com.facebook.react.bridge.WritableMap;
import ft.m;
import ft.w;
import jt.v1;
import kotlin.Metadata;
import kotlin.collections.o0;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.internal.SerializationConstructorMarker;
import nt.a;
import org.jetbrains.annotations.NotNull;
import qr.v;
@m
@Metadata(d1 = {"\u0000R\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\b\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010\u0000\n\u0002\b\u0002\n\u0002\u0010\u000e\n\u0000\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\b\u0087\b\u0018\u0000 !2\u00020\u0001:\u0002 !B\u0011\u0012\b\u0010\u0002\u001a\u0004\u0018\u00010\u0003¢\u0006\u0004\b\u0004\u0010\u0005B%\b\u0010\u0012\u0006\u0010\u0006\u001a\u00020\u0007\u0012\b\u0010\u0002\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\b\u001a\u0004\u0018\u00010\t¢\u0006\u0004\b\u0004\u0010\nJ\b\u0010\r\u001a\u00020\u000eH\u0016J\u000b\u0010\u000f\u001a\u0004\u0018\u00010\u0003HÆ\u0003J\u0015\u0010\u0010\u001a\u00020\u00002\n\b\u0002\u0010\u0002\u001a\u0004\u0018\u00010\u0003HÆ\u0001J\u0013\u0010\u0011\u001a\u00020\u00122\b\u0010\u0013\u001a\u0004\u0018\u00010\u0014HÖ\u0003J\t\u0010\u0015\u001a\u00020\u0007HÖ\u0001J\t\u0010\u0016\u001a\u00020\u0017HÖ\u0001J%\u0010\u0018\u001a\u00020\u00192\u0006\u0010\u001a\u001a\u00020\u00002\u0006\u0010\u001b\u001a\u00020\u001c2\u0006\u0010\u001d\u001a\u00020\u001eH\u0001¢\u0006\u0002\b\u001fR\u0013\u0010\u0002\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u000b\u0010\f¨\u0006\""}, d2 = {"Lcom/discord/media_player/reactevents/MediaPlayerPlaybackSourceChanged;", "Lcom/discord/reactevents/ReactEvent;", "source", "Lcom/discord/media_player/reactevents/MediaPlayerPlaybackSource;", "<init>", "(Lcom/discord/media_player/reactevents/MediaPlayerPlaybackSource;)V", "seen0", "", "serializationConstructorMarker", "Lkotlinx/serialization/internal/SerializationConstructorMarker;", "(ILcom/discord/media_player/reactevents/MediaPlayerPlaybackSource;Lkotlinx/serialization/internal/SerializationConstructorMarker;)V", "getSource", "()Lcom/discord/media_player/reactevents/MediaPlayerPlaybackSource;", "serialize", "Lcom/facebook/react/bridge/WritableMap;", "component1", "copy", "equals", "", "other", "", "hashCode", "toString", "", "write$Self", "", "self", "output", "Lkotlinx/serialization/encoding/CompositeEncoder;", "serialDesc", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "write$Self$media_player_release", "$serializer", "Companion", "media_player_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class MediaPlayerPlaybackSourceChanged implements ReactEvent {
    @NotNull
    public static final Companion Companion = new Companion(null);
    private final MediaPlayerPlaybackSource source;

    @Metadata(d1 = {"\u0000\u0016\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\f\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00060\u0005¨\u0006\u0007"}, d2 = {"Lcom/discord/media_player/reactevents/MediaPlayerPlaybackSourceChanged$Companion;", "", "<init>", "()V", "serializer", "Lkotlinx/serialization/KSerializer;", "Lcom/discord/media_player/reactevents/MediaPlayerPlaybackSourceChanged;", "media_player_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class Companion {
        private Companion() {
        }

        @NotNull
        public final KSerializer serializer() {
            return MediaPlayerPlaybackSourceChanged$$serializer.INSTANCE;
        }

        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }
    }

    public /* synthetic */ MediaPlayerPlaybackSourceChanged(int i10, MediaPlayerPlaybackSource mediaPlayerPlaybackSource, SerializationConstructorMarker serializationConstructorMarker) {
        if (1 != (i10 & 1)) {
            v1.b(i10, 1, MediaPlayerPlaybackSourceChanged$$serializer.INSTANCE.getDescriptor());
        }
        this.source = mediaPlayerPlaybackSource;
    }

    public static /* synthetic */ MediaPlayerPlaybackSourceChanged copy$default(MediaPlayerPlaybackSourceChanged mediaPlayerPlaybackSourceChanged, MediaPlayerPlaybackSource mediaPlayerPlaybackSource, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            mediaPlayerPlaybackSource = mediaPlayerPlaybackSourceChanged.source;
        }
        return mediaPlayerPlaybackSourceChanged.copy(mediaPlayerPlaybackSource);
    }

    public final MediaPlayerPlaybackSource component1() {
        return this.source;
    }

    @NotNull
    public final MediaPlayerPlaybackSourceChanged copy(MediaPlayerPlaybackSource mediaPlayerPlaybackSource) {
        return new MediaPlayerPlaybackSourceChanged(mediaPlayerPlaybackSource);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        return (obj instanceof MediaPlayerPlaybackSourceChanged) && Intrinsics.areEqual(this.source, ((MediaPlayerPlaybackSourceChanged) obj).source);
    }

    public final MediaPlayerPlaybackSource getSource() {
        return this.source;
    }

    public int hashCode() {
        MediaPlayerPlaybackSource mediaPlayerPlaybackSource = this.source;
        if (mediaPlayerPlaybackSource == null) {
            return 0;
        }
        return mediaPlayerPlaybackSource.hashCode();
    }

    @Override // com.discord.reactevents.ReactEvent
    @NotNull
    public WritableMap serialize() {
        if (this.source == null) {
            return NativeMapExtensionsKt.toNativeMap(o0.i());
        }
        return NativeMapExtensionsKt.nativeMapOf(v.a("source", NativeMapExtensionsKt.toNativeMap(a.f41154b.e(w.b(MediaPlayerPlaybackSource.class), this.source))));
    }

    @NotNull
    public String toString() {
        MediaPlayerPlaybackSource mediaPlayerPlaybackSource = this.source;
        return "MediaPlayerPlaybackSourceChanged(source=" + mediaPlayerPlaybackSource + ")";
    }

    public MediaPlayerPlaybackSourceChanged(MediaPlayerPlaybackSource mediaPlayerPlaybackSource) {
        this.source = mediaPlayerPlaybackSource;
    }
}
