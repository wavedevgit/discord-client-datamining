package com.discord.media_player.reactevents;

import at.f;
import at.n2;
import at.v1;
import com.discord.media_player.reactevents.MediaPlayerViewDidDisappear;
import com.discord.react.utilities.NativeArrayExtensionsKt;
import com.discord.react.utilities.NativeMapExtensionsKt;
import com.discord.reactevents.ReactEvent;
import com.facebook.react.bridge.WritableMap;
import ir.l;
import ir.o;
import ir.v;
import java.util.List;
import kotlin.Lazy;
import kotlin.Metadata;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.encoding.CompositeEncoder;
import kotlinx.serialization.internal.SerializationConstructorMarker;
import org.jetbrains.annotations.NotNull;
import xs.m;
@Metadata(d1 = {"\u0000R\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0000\n\u0002\u0010 \n\u0002\b\u0003\n\u0002\u0010\b\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0006\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\b\u0087\b\u0018\u0000 %2\u00020\u0001:\u0002$%B\u001d\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\f\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00030\u0005¢\u0006\u0004\b\u0006\u0010\u0007B5\b\u0010\u0012\u0006\u0010\b\u001a\u00020\t\u0012\b\u0010\u0002\u001a\u0004\u0018\u00010\u0003\u0012\u000e\u0010\u0004\u001a\n\u0012\u0004\u0012\u00020\u0003\u0018\u00010\u0005\u0012\b\u0010\n\u001a\u0004\u0018\u00010\u000b¢\u0006\u0004\b\u0006\u0010\fJ\b\u0010\u0011\u001a\u00020\u0012H\u0016J\t\u0010\u0013\u001a\u00020\u0003HÆ\u0003J\u000f\u0010\u0014\u001a\b\u0012\u0004\u0012\u00020\u00030\u0005HÆ\u0003J#\u0010\u0015\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\u000e\b\u0002\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00030\u0005HÆ\u0001J\u0013\u0010\u0016\u001a\u00020\u00172\b\u0010\u0018\u001a\u0004\u0018\u00010\u0019HÖ\u0003J\t\u0010\u001a\u001a\u00020\tHÖ\u0001J\t\u0010\u001b\u001a\u00020\u0003HÖ\u0001J%\u0010\u001c\u001a\u00020\u001d2\u0006\u0010\u001e\u001a\u00020\u00002\u0006\u0010\u001f\u001a\u00020 2\u0006\u0010!\u001a\u00020\"H\u0001¢\u0006\u0002\b#R\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\r\u0010\u000eR\u0017\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00030\u0005¢\u0006\b\n\u0000\u001a\u0004\b\u000f\u0010\u0010¨\u0006&"}, d2 = {"Lcom/discord/media_player/reactevents/MediaPlayerViewDidDisappear;", "Lcom/discord/reactevents/ReactEvent;", "channelId", "", "mediaItemIds", "", "<init>", "(Ljava/lang/String;Ljava/util/List;)V", "seen0", "", "serializationConstructorMarker", "Lkotlinx/serialization/internal/SerializationConstructorMarker;", "(ILjava/lang/String;Ljava/util/List;Lkotlinx/serialization/internal/SerializationConstructorMarker;)V", "getChannelId", "()Ljava/lang/String;", "getMediaItemIds", "()Ljava/util/List;", "serialize", "Lcom/facebook/react/bridge/WritableMap;", "component1", "component2", "copy", "equals", "", "other", "", "hashCode", "toString", "write$Self", "", "self", "output", "Lkotlinx/serialization/encoding/CompositeEncoder;", "serialDesc", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "write$Self$media_player_release", "$serializer", "Companion", "media_player_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@m
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class MediaPlayerViewDidDisappear implements ReactEvent {
    @NotNull
    private final String channelId;
    @NotNull
    private final List<String> mediaItemIds;
    @NotNull
    public static final Companion Companion = new Companion(null);
    @NotNull
    private static final Lazy[] $childSerializers = {null, l.a(o.f31103e, new Function0() { // from class: l7.a
        @Override // kotlin.jvm.functions.Function0
        public final Object invoke() {
            KSerializer _childSerializers$_anonymous_;
            _childSerializers$_anonymous_ = MediaPlayerViewDidDisappear._childSerializers$_anonymous_();
            return _childSerializers$_anonymous_;
        }
    })};

    @Metadata(d1 = {"\u0000\u0016\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\f\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00060\u0005¨\u0006\u0007"}, d2 = {"Lcom/discord/media_player/reactevents/MediaPlayerViewDidDisappear$Companion;", "", "<init>", "()V", "serializer", "Lkotlinx/serialization/KSerializer;", "Lcom/discord/media_player/reactevents/MediaPlayerViewDidDisappear;", "media_player_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class Companion {
        private Companion() {
        }

        @NotNull
        public final KSerializer serializer() {
            return MediaPlayerViewDidDisappear$$serializer.INSTANCE;
        }

        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }
    }

    public /* synthetic */ MediaPlayerViewDidDisappear(int i10, String str, List list, SerializationConstructorMarker serializationConstructorMarker) {
        if (3 != (i10 & 3)) {
            v1.b(i10, 3, MediaPlayerViewDidDisappear$$serializer.INSTANCE.getDescriptor());
        }
        this.channelId = str;
        this.mediaItemIds = list;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final /* synthetic */ KSerializer _childSerializers$_anonymous_() {
        return new f(n2.f6848a);
    }

    /* JADX WARN: Multi-variable type inference failed */
    public static /* synthetic */ MediaPlayerViewDidDisappear copy$default(MediaPlayerViewDidDisappear mediaPlayerViewDidDisappear, String str, List list, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            str = mediaPlayerViewDidDisappear.channelId;
        }
        if ((i10 & 2) != 0) {
            list = mediaPlayerViewDidDisappear.mediaItemIds;
        }
        return mediaPlayerViewDidDisappear.copy(str, list);
    }

    public static final /* synthetic */ void write$Self$media_player_release(MediaPlayerViewDidDisappear mediaPlayerViewDidDisappear, CompositeEncoder compositeEncoder, SerialDescriptor serialDescriptor) {
        Lazy[] lazyArr = $childSerializers;
        compositeEncoder.y(serialDescriptor, 0, mediaPlayerViewDidDisappear.channelId);
        compositeEncoder.j(serialDescriptor, 1, (xs.o) lazyArr[1].getValue(), mediaPlayerViewDidDisappear.mediaItemIds);
    }

    @NotNull
    public final String component1() {
        return this.channelId;
    }

    @NotNull
    public final List<String> component2() {
        return this.mediaItemIds;
    }

    @NotNull
    public final MediaPlayerViewDidDisappear copy(@NotNull String channelId, @NotNull List<String> mediaItemIds) {
        Intrinsics.checkNotNullParameter(channelId, "channelId");
        Intrinsics.checkNotNullParameter(mediaItemIds, "mediaItemIds");
        return new MediaPlayerViewDidDisappear(channelId, mediaItemIds);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof MediaPlayerViewDidDisappear) {
            MediaPlayerViewDidDisappear mediaPlayerViewDidDisappear = (MediaPlayerViewDidDisappear) obj;
            return Intrinsics.areEqual(this.channelId, mediaPlayerViewDidDisappear.channelId) && Intrinsics.areEqual(this.mediaItemIds, mediaPlayerViewDidDisappear.mediaItemIds);
        }
        return false;
    }

    @NotNull
    public final String getChannelId() {
        return this.channelId;
    }

    @NotNull
    public final List<String> getMediaItemIds() {
        return this.mediaItemIds;
    }

    public int hashCode() {
        return (this.channelId.hashCode() * 31) + this.mediaItemIds.hashCode();
    }

    @Override // com.discord.reactevents.ReactEvent
    @NotNull
    public WritableMap serialize() {
        return NativeMapExtensionsKt.nativeMapOf(v.a("channelId", this.channelId), v.a("mediaItemIds", NativeArrayExtensionsKt.toNativeArray$default(this.mediaItemIds, null, 1, null)));
    }

    @NotNull
    public String toString() {
        String str = this.channelId;
        List<String> list = this.mediaItemIds;
        return "MediaPlayerViewDidDisappear(channelId=" + str + ", mediaItemIds=" + list + ")";
    }

    public MediaPlayerViewDidDisappear(@NotNull String channelId, @NotNull List<String> mediaItemIds) {
        Intrinsics.checkNotNullParameter(channelId, "channelId");
        Intrinsics.checkNotNullParameter(mediaItemIds, "mediaItemIds");
        this.channelId = channelId;
        this.mediaItemIds = mediaItemIds;
    }
}
