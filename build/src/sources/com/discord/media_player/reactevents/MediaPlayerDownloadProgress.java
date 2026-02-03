package com.discord.media_player.reactevents;

import at.m;
import com.discord.reactevents.ReactEvent;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.devsupport.StackTraceHelper;
import dt.v1;
import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.encoding.CompositeEncoder;
import kotlinx.serialization.internal.SerializationConstructorMarker;
import org.jetbrains.annotations.NotNull;
@m
@Metadata(d1 = {"\u0000J\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0006\n\u0002\b\u0006\n\u0002\u0010\b\n\u0000\n\u0002\u0018\u0002\n\u0002\b\f\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010\u0000\n\u0002\b\u0002\n\u0002\u0010\u000e\n\u0000\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\b\u0087\b\u0018\u0000 (2\u00020\u0001:\u0002'(B'\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0003\u0012\u0006\u0010\u0005\u001a\u00020\u0003\u0012\u0006\u0010\u0006\u001a\u00020\u0003¢\u0006\u0004\b\u0007\u0010\bB;\b\u0010\u0012\u0006\u0010\t\u001a\u00020\n\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0003\u0012\u0006\u0010\u0005\u001a\u00020\u0003\u0012\u0006\u0010\u0006\u001a\u00020\u0003\u0012\b\u0010\u000b\u001a\u0004\u0018\u00010\f¢\u0006\u0004\b\u0007\u0010\rJ\t\u0010\u0013\u001a\u00020\u0003HÆ\u0003J\t\u0010\u0014\u001a\u00020\u0003HÆ\u0003J\t\u0010\u0015\u001a\u00020\u0003HÆ\u0003J\t\u0010\u0016\u001a\u00020\u0003HÆ\u0003J1\u0010\u0017\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\b\b\u0002\u0010\u0004\u001a\u00020\u00032\b\b\u0002\u0010\u0005\u001a\u00020\u00032\b\b\u0002\u0010\u0006\u001a\u00020\u0003HÆ\u0001J\u0013\u0010\u0018\u001a\u00020\u00192\b\u0010\u001a\u001a\u0004\u0018\u00010\u001bHÖ\u0003J\t\u0010\u001c\u001a\u00020\nHÖ\u0001J\t\u0010\u001d\u001a\u00020\u001eHÖ\u0001J%\u0010\u001f\u001a\u00020 2\u0006\u0010!\u001a\u00020\u00002\u0006\u0010\"\u001a\u00020#2\u0006\u0010$\u001a\u00020%H\u0001¢\u0006\u0002\b&R\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u000e\u0010\u000fR\u0011\u0010\u0004\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0010\u0010\u000fR\u0011\u0010\u0005\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0011\u0010\u000fR\u0011\u0010\u0006\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0012\u0010\u000f¨\u0006)"}, d2 = {"Lcom/discord/media_player/reactevents/MediaPlayerDownloadProgress;", "Lcom/discord/reactevents/ReactEvent;", StackTraceHelper.ID_KEY, "", "progressSeconds", "progressPercent", "totalDurationSeconds", "<init>", "(DDDD)V", "seen0", "", "serializationConstructorMarker", "Lkotlinx/serialization/internal/SerializationConstructorMarker;", "(IDDDDLkotlinx/serialization/internal/SerializationConstructorMarker;)V", "getId", "()D", "getProgressSeconds", "getProgressPercent", "getTotalDurationSeconds", "component1", "component2", "component3", "component4", "copy", "equals", "", "other", "", "hashCode", "toString", "", "write$Self", "", "self", "output", "Lkotlinx/serialization/encoding/CompositeEncoder;", "serialDesc", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "write$Self$media_player_release", "$serializer", "Companion", "media_player_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class MediaPlayerDownloadProgress implements ReactEvent {
    @NotNull
    public static final Companion Companion = new Companion(null);

    /* renamed from: id  reason: collision with root package name */
    private final double f9179id;
    private final double progressPercent;
    private final double progressSeconds;
    private final double totalDurationSeconds;

    @Metadata(d1 = {"\u0000\u0016\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\f\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00060\u0005¨\u0006\u0007"}, d2 = {"Lcom/discord/media_player/reactevents/MediaPlayerDownloadProgress$Companion;", "", "<init>", "()V", "serializer", "Lkotlinx/serialization/KSerializer;", "Lcom/discord/media_player/reactevents/MediaPlayerDownloadProgress;", "media_player_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class Companion {
        private Companion() {
        }

        @NotNull
        public final KSerializer serializer() {
            return MediaPlayerDownloadProgress$$serializer.INSTANCE;
        }

        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }
    }

    public /* synthetic */ MediaPlayerDownloadProgress(int i10, double d10, double d11, double d12, double d13, SerializationConstructorMarker serializationConstructorMarker) {
        if (15 != (i10 & 15)) {
            v1.b(i10, 15, MediaPlayerDownloadProgress$$serializer.INSTANCE.getDescriptor());
        }
        this.f9179id = d10;
        this.progressSeconds = d11;
        this.progressPercent = d12;
        this.totalDurationSeconds = d13;
    }

    public static /* synthetic */ MediaPlayerDownloadProgress copy$default(MediaPlayerDownloadProgress mediaPlayerDownloadProgress, double d10, double d11, double d12, double d13, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            d10 = mediaPlayerDownloadProgress.f9179id;
        }
        double d14 = d10;
        if ((i10 & 2) != 0) {
            d11 = mediaPlayerDownloadProgress.progressSeconds;
        }
        double d15 = d11;
        if ((i10 & 4) != 0) {
            d12 = mediaPlayerDownloadProgress.progressPercent;
        }
        return mediaPlayerDownloadProgress.copy(d14, d15, d12, (i10 & 8) != 0 ? mediaPlayerDownloadProgress.totalDurationSeconds : d13);
    }

    public static final /* synthetic */ void write$Self$media_player_release(MediaPlayerDownloadProgress mediaPlayerDownloadProgress, CompositeEncoder compositeEncoder, SerialDescriptor serialDescriptor) {
        compositeEncoder.C(serialDescriptor, 0, mediaPlayerDownloadProgress.f9179id);
        compositeEncoder.C(serialDescriptor, 1, mediaPlayerDownloadProgress.progressSeconds);
        compositeEncoder.C(serialDescriptor, 2, mediaPlayerDownloadProgress.progressPercent);
        compositeEncoder.C(serialDescriptor, 3, mediaPlayerDownloadProgress.totalDurationSeconds);
    }

    public final double component1() {
        return this.f9179id;
    }

    public final double component2() {
        return this.progressSeconds;
    }

    public final double component3() {
        return this.progressPercent;
    }

    public final double component4() {
        return this.totalDurationSeconds;
    }

    @NotNull
    public final MediaPlayerDownloadProgress copy(double d10, double d11, double d12, double d13) {
        return new MediaPlayerDownloadProgress(d10, d11, d12, d13);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof MediaPlayerDownloadProgress) {
            MediaPlayerDownloadProgress mediaPlayerDownloadProgress = (MediaPlayerDownloadProgress) obj;
            return Double.compare(this.f9179id, mediaPlayerDownloadProgress.f9179id) == 0 && Double.compare(this.progressSeconds, mediaPlayerDownloadProgress.progressSeconds) == 0 && Double.compare(this.progressPercent, mediaPlayerDownloadProgress.progressPercent) == 0 && Double.compare(this.totalDurationSeconds, mediaPlayerDownloadProgress.totalDurationSeconds) == 0;
        }
        return false;
    }

    public final double getId() {
        return this.f9179id;
    }

    public final double getProgressPercent() {
        return this.progressPercent;
    }

    public final double getProgressSeconds() {
        return this.progressSeconds;
    }

    public final double getTotalDurationSeconds() {
        return this.totalDurationSeconds;
    }

    public int hashCode() {
        return (((((Double.hashCode(this.f9179id) * 31) + Double.hashCode(this.progressSeconds)) * 31) + Double.hashCode(this.progressPercent)) * 31) + Double.hashCode(this.totalDurationSeconds);
    }

    @Override // com.discord.reactevents.ReactEvent
    @NotNull
    public WritableMap serialize() {
        return ReactEvent.DefaultImpls.serialize(this);
    }

    @NotNull
    public String toString() {
        double d10 = this.f9179id;
        double d11 = this.progressSeconds;
        double d12 = this.progressPercent;
        double d13 = this.totalDurationSeconds;
        return "MediaPlayerDownloadProgress(id=" + d10 + ", progressSeconds=" + d11 + ", progressPercent=" + d12 + ", totalDurationSeconds=" + d13 + ")";
    }

    public MediaPlayerDownloadProgress(double d10, double d11, double d12, double d13) {
        this.f9179id = d10;
        this.progressSeconds = d11;
        this.progressPercent = d12;
        this.totalDurationSeconds = d13;
    }
}
