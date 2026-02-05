package com.discord.media_player.reactevents;

import androidx.recyclerview.widget.RecyclerView;
import com.discord.reactevents.ReactEvent;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import dt.m;
import gt.n2;
import gt.v1;
import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.encoding.CompositeEncoder;
import kotlinx.serialization.internal.SerializationConstructorMarker;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000T\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\t\n\u0002\b\u0002\n\u0002\u0010\b\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0000\n\u0002\u0010\u0007\n\u0002\b\t\n\u0002\u0018\u0002\n\u0002\b\u001f\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\b\u0087\b\u0018\u0000 D2\u00020\u0001:\u0002CDBk\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0003\u0012\u0006\u0010\u0005\u001a\u00020\u0006\u0012\u0006\u0010\u0007\u001a\u00020\u0006\u0012\u0006\u0010\b\u001a\u00020\u0003\u0012\b\u0010\t\u001a\u0004\u0018\u00010\n\u0012\u0006\u0010\u000b\u001a\u00020\f\u0012\b\u0010\r\u001a\u0004\u0018\u00010\n\u0012\u0006\u0010\u000e\u001a\u00020\u0006\u0012\u0006\u0010\u000f\u001a\u00020\u0006\u0012\u0006\u0010\u0010\u001a\u00020\u0003\u0012\u0006\u0010\u0011\u001a\u00020\u0003¢\u0006\u0004\b\u0012\u0010\u0013B\u007f\b\u0010\u0012\u0006\u0010\u0014\u001a\u00020\u0006\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0003\u0012\u0006\u0010\u0005\u001a\u00020\u0006\u0012\u0006\u0010\u0007\u001a\u00020\u0006\u0012\u0006\u0010\b\u001a\u00020\u0003\u0012\b\u0010\t\u001a\u0004\u0018\u00010\n\u0012\u0006\u0010\u000b\u001a\u00020\f\u0012\b\u0010\r\u001a\u0004\u0018\u00010\n\u0012\u0006\u0010\u000e\u001a\u00020\u0006\u0012\u0006\u0010\u000f\u001a\u00020\u0006\u0012\u0006\u0010\u0010\u001a\u00020\u0003\u0012\u0006\u0010\u0011\u001a\u00020\u0003\u0012\b\u0010\u0015\u001a\u0004\u0018\u00010\u0016¢\u0006\u0004\b\u0012\u0010\u0017J\t\u0010(\u001a\u00020\u0003HÆ\u0003J\t\u0010)\u001a\u00020\u0003HÆ\u0003J\t\u0010*\u001a\u00020\u0006HÆ\u0003J\t\u0010+\u001a\u00020\u0006HÆ\u0003J\t\u0010,\u001a\u00020\u0003HÆ\u0003J\u000b\u0010-\u001a\u0004\u0018\u00010\nHÆ\u0003J\t\u0010.\u001a\u00020\fHÆ\u0003J\u000b\u0010/\u001a\u0004\u0018\u00010\nHÆ\u0003J\t\u00100\u001a\u00020\u0006HÆ\u0003J\t\u00101\u001a\u00020\u0006HÆ\u0003J\t\u00102\u001a\u00020\u0003HÆ\u0003J\t\u00103\u001a\u00020\u0003HÆ\u0003J\u0085\u0001\u00104\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\b\b\u0002\u0010\u0004\u001a\u00020\u00032\b\b\u0002\u0010\u0005\u001a\u00020\u00062\b\b\u0002\u0010\u0007\u001a\u00020\u00062\b\b\u0002\u0010\b\u001a\u00020\u00032\n\b\u0002\u0010\t\u001a\u0004\u0018\u00010\n2\b\b\u0002\u0010\u000b\u001a\u00020\f2\n\b\u0002\u0010\r\u001a\u0004\u0018\u00010\n2\b\b\u0002\u0010\u000e\u001a\u00020\u00062\b\b\u0002\u0010\u000f\u001a\u00020\u00062\b\b\u0002\u0010\u0010\u001a\u00020\u00032\b\b\u0002\u0010\u0011\u001a\u00020\u0003HÆ\u0001J\u0013\u00105\u001a\u0002062\b\u00107\u001a\u0004\u0018\u000108HÖ\u0003J\t\u00109\u001a\u00020\u0006HÖ\u0001J\t\u0010:\u001a\u00020\nHÖ\u0001J%\u0010;\u001a\u00020<2\u0006\u0010=\u001a\u00020\u00002\u0006\u0010>\u001a\u00020?2\u0006\u0010@\u001a\u00020AH\u0001¢\u0006\u0002\bBR\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0018\u0010\u0019R\u0011\u0010\u0004\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u001a\u0010\u0019R\u0011\u0010\u0005\u001a\u00020\u0006¢\u0006\b\n\u0000\u001a\u0004\b\u001b\u0010\u001cR\u0011\u0010\u0007\u001a\u00020\u0006¢\u0006\b\n\u0000\u001a\u0004\b\u001d\u0010\u001cR\u0011\u0010\b\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u001e\u0010\u0019R\u0013\u0010\t\u001a\u0004\u0018\u00010\n¢\u0006\b\n\u0000\u001a\u0004\b\u001f\u0010 R\u0011\u0010\u000b\u001a\u00020\f¢\u0006\b\n\u0000\u001a\u0004\b!\u0010\"R\u0013\u0010\r\u001a\u0004\u0018\u00010\n¢\u0006\b\n\u0000\u001a\u0004\b#\u0010 R\u0011\u0010\u000e\u001a\u00020\u0006¢\u0006\b\n\u0000\u001a\u0004\b$\u0010\u001cR\u0011\u0010\u000f\u001a\u00020\u0006¢\u0006\b\n\u0000\u001a\u0004\b%\u0010\u001cR\u0011\u0010\u0010\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b&\u0010\u0019R\u0011\u0010\u0011\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b'\u0010\u0019¨\u0006E"}, d2 = {"Lcom/discord/media_player/reactevents/MediaPlayFinishedAnalytics;", "Lcom/discord/reactevents/ReactEvent;", "playWallTimeMs", "", "stallMs", "stallCount", "", "seekCount", "firstPlayWaitingMs", "mediaSource", "", "fileDurationSec", "", "mimeType", "fatalErrorCount", "nonFatalErrorCount", "totalDroppedFrames", "totalBandwidthBytes", "<init>", "(JJIIJLjava/lang/String;FLjava/lang/String;IIJJ)V", "seen0", "serializationConstructorMarker", "Lkotlinx/serialization/internal/SerializationConstructorMarker;", "(IJJIIJLjava/lang/String;FLjava/lang/String;IIJJLkotlinx/serialization/internal/SerializationConstructorMarker;)V", "getPlayWallTimeMs", "()J", "getStallMs", "getStallCount", "()I", "getSeekCount", "getFirstPlayWaitingMs", "getMediaSource", "()Ljava/lang/String;", "getFileDurationSec", "()F", "getMimeType", "getFatalErrorCount", "getNonFatalErrorCount", "getTotalDroppedFrames", "getTotalBandwidthBytes", "component1", "component2", "component3", "component4", "component5", "component6", "component7", "component8", "component9", "component10", "component11", "component12", "copy", "equals", "", "other", "", "hashCode", "toString", "write$Self", "", "self", "output", "Lkotlinx/serialization/encoding/CompositeEncoder;", "serialDesc", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "write$Self$media_player_release", "$serializer", "Companion", "media_player_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@m
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class MediaPlayFinishedAnalytics implements ReactEvent {
    @NotNull
    public static final Companion Companion = new Companion(null);
    private final int fatalErrorCount;
    private final float fileDurationSec;
    private final long firstPlayWaitingMs;
    private final String mediaSource;
    private final String mimeType;
    private final int nonFatalErrorCount;
    private final long playWallTimeMs;
    private final int seekCount;
    private final int stallCount;
    private final long stallMs;
    private final long totalBandwidthBytes;
    private final long totalDroppedFrames;

    @Metadata(d1 = {"\u0000\u0016\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\f\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00060\u0005¨\u0006\u0007"}, d2 = {"Lcom/discord/media_player/reactevents/MediaPlayFinishedAnalytics$Companion;", "", "<init>", "()V", "serializer", "Lkotlinx/serialization/KSerializer;", "Lcom/discord/media_player/reactevents/MediaPlayFinishedAnalytics;", "media_player_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class Companion {
        private Companion() {
        }

        @NotNull
        public final KSerializer serializer() {
            return MediaPlayFinishedAnalytics$$serializer.INSTANCE;
        }

        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }
    }

    public /* synthetic */ MediaPlayFinishedAnalytics(int i10, long j10, long j11, int i11, int i12, long j12, String str, float f10, String str2, int i13, int i14, long j13, long j14, SerializationConstructorMarker serializationConstructorMarker) {
        if (4095 != (i10 & 4095)) {
            v1.b(i10, 4095, MediaPlayFinishedAnalytics$$serializer.INSTANCE.getDescriptor());
        }
        this.playWallTimeMs = j10;
        this.stallMs = j11;
        this.stallCount = i11;
        this.seekCount = i12;
        this.firstPlayWaitingMs = j12;
        this.mediaSource = str;
        this.fileDurationSec = f10;
        this.mimeType = str2;
        this.fatalErrorCount = i13;
        this.nonFatalErrorCount = i14;
        this.totalDroppedFrames = j13;
        this.totalBandwidthBytes = j14;
    }

    public static /* synthetic */ MediaPlayFinishedAnalytics copy$default(MediaPlayFinishedAnalytics mediaPlayFinishedAnalytics, long j10, long j11, int i10, int i11, long j12, String str, float f10, String str2, int i12, int i13, long j13, long j14, int i14, Object obj) {
        long j15;
        long j16;
        long j17;
        long j18;
        long j19 = (i14 & 1) != 0 ? mediaPlayFinishedAnalytics.playWallTimeMs : j10;
        long j20 = (i14 & 2) != 0 ? mediaPlayFinishedAnalytics.stallMs : j11;
        int i15 = (i14 & 4) != 0 ? mediaPlayFinishedAnalytics.stallCount : i10;
        int i16 = (i14 & 8) != 0 ? mediaPlayFinishedAnalytics.seekCount : i11;
        long j21 = (i14 & 16) != 0 ? mediaPlayFinishedAnalytics.firstPlayWaitingMs : j12;
        String str3 = (i14 & 32) != 0 ? mediaPlayFinishedAnalytics.mediaSource : str;
        float f11 = (i14 & 64) != 0 ? mediaPlayFinishedAnalytics.fileDurationSec : f10;
        String str4 = (i14 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0 ? mediaPlayFinishedAnalytics.mimeType : str2;
        int i17 = (i14 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0 ? mediaPlayFinishedAnalytics.fatalErrorCount : i12;
        int i18 = (i14 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0 ? mediaPlayFinishedAnalytics.nonFatalErrorCount : i13;
        if ((i14 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0) {
            j15 = j19;
            j16 = mediaPlayFinishedAnalytics.totalDroppedFrames;
        } else {
            j15 = j19;
            j16 = j13;
        }
        if ((i14 & RecyclerView.ItemAnimator.FLAG_MOVED) != 0) {
            j18 = j16;
            j17 = mediaPlayFinishedAnalytics.totalBandwidthBytes;
        } else {
            j17 = j14;
            j18 = j16;
        }
        return mediaPlayFinishedAnalytics.copy(j15, j20, i15, i16, j21, str3, f11, str4, i17, i18, j18, j17);
    }

    public static final /* synthetic */ void write$Self$media_player_release(MediaPlayFinishedAnalytics mediaPlayFinishedAnalytics, CompositeEncoder compositeEncoder, SerialDescriptor serialDescriptor) {
        compositeEncoder.E(serialDescriptor, 0, mediaPlayFinishedAnalytics.playWallTimeMs);
        compositeEncoder.E(serialDescriptor, 1, mediaPlayFinishedAnalytics.stallMs);
        compositeEncoder.v(serialDescriptor, 2, mediaPlayFinishedAnalytics.stallCount);
        compositeEncoder.v(serialDescriptor, 3, mediaPlayFinishedAnalytics.seekCount);
        compositeEncoder.E(serialDescriptor, 4, mediaPlayFinishedAnalytics.firstPlayWaitingMs);
        n2 n2Var = n2.f25302a;
        compositeEncoder.A(serialDescriptor, 5, n2Var, mediaPlayFinishedAnalytics.mediaSource);
        compositeEncoder.r(serialDescriptor, 6, mediaPlayFinishedAnalytics.fileDurationSec);
        compositeEncoder.A(serialDescriptor, 7, n2Var, mediaPlayFinishedAnalytics.mimeType);
        compositeEncoder.v(serialDescriptor, 8, mediaPlayFinishedAnalytics.fatalErrorCount);
        compositeEncoder.v(serialDescriptor, 9, mediaPlayFinishedAnalytics.nonFatalErrorCount);
        compositeEncoder.E(serialDescriptor, 10, mediaPlayFinishedAnalytics.totalDroppedFrames);
        compositeEncoder.E(serialDescriptor, 11, mediaPlayFinishedAnalytics.totalBandwidthBytes);
    }

    public final long component1() {
        return this.playWallTimeMs;
    }

    public final int component10() {
        return this.nonFatalErrorCount;
    }

    public final long component11() {
        return this.totalDroppedFrames;
    }

    public final long component12() {
        return this.totalBandwidthBytes;
    }

    public final long component2() {
        return this.stallMs;
    }

    public final int component3() {
        return this.stallCount;
    }

    public final int component4() {
        return this.seekCount;
    }

    public final long component5() {
        return this.firstPlayWaitingMs;
    }

    public final String component6() {
        return this.mediaSource;
    }

    public final float component7() {
        return this.fileDurationSec;
    }

    public final String component8() {
        return this.mimeType;
    }

    public final int component9() {
        return this.fatalErrorCount;
    }

    @NotNull
    public final MediaPlayFinishedAnalytics copy(long j10, long j11, int i10, int i11, long j12, String str, float f10, String str2, int i12, int i13, long j13, long j14) {
        return new MediaPlayFinishedAnalytics(j10, j11, i10, i11, j12, str, f10, str2, i12, i13, j13, j14);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof MediaPlayFinishedAnalytics) {
            MediaPlayFinishedAnalytics mediaPlayFinishedAnalytics = (MediaPlayFinishedAnalytics) obj;
            return this.playWallTimeMs == mediaPlayFinishedAnalytics.playWallTimeMs && this.stallMs == mediaPlayFinishedAnalytics.stallMs && this.stallCount == mediaPlayFinishedAnalytics.stallCount && this.seekCount == mediaPlayFinishedAnalytics.seekCount && this.firstPlayWaitingMs == mediaPlayFinishedAnalytics.firstPlayWaitingMs && Intrinsics.areEqual(this.mediaSource, mediaPlayFinishedAnalytics.mediaSource) && Float.compare(this.fileDurationSec, mediaPlayFinishedAnalytics.fileDurationSec) == 0 && Intrinsics.areEqual(this.mimeType, mediaPlayFinishedAnalytics.mimeType) && this.fatalErrorCount == mediaPlayFinishedAnalytics.fatalErrorCount && this.nonFatalErrorCount == mediaPlayFinishedAnalytics.nonFatalErrorCount && this.totalDroppedFrames == mediaPlayFinishedAnalytics.totalDroppedFrames && this.totalBandwidthBytes == mediaPlayFinishedAnalytics.totalBandwidthBytes;
        }
        return false;
    }

    public final int getFatalErrorCount() {
        return this.fatalErrorCount;
    }

    public final float getFileDurationSec() {
        return this.fileDurationSec;
    }

    public final long getFirstPlayWaitingMs() {
        return this.firstPlayWaitingMs;
    }

    public final String getMediaSource() {
        return this.mediaSource;
    }

    public final String getMimeType() {
        return this.mimeType;
    }

    public final int getNonFatalErrorCount() {
        return this.nonFatalErrorCount;
    }

    public final long getPlayWallTimeMs() {
        return this.playWallTimeMs;
    }

    public final int getSeekCount() {
        return this.seekCount;
    }

    public final int getStallCount() {
        return this.stallCount;
    }

    public final long getStallMs() {
        return this.stallMs;
    }

    public final long getTotalBandwidthBytes() {
        return this.totalBandwidthBytes;
    }

    public final long getTotalDroppedFrames() {
        return this.totalDroppedFrames;
    }

    public int hashCode() {
        int hashCode = ((((((((Long.hashCode(this.playWallTimeMs) * 31) + Long.hashCode(this.stallMs)) * 31) + Integer.hashCode(this.stallCount)) * 31) + Integer.hashCode(this.seekCount)) * 31) + Long.hashCode(this.firstPlayWaitingMs)) * 31;
        String str = this.mediaSource;
        int hashCode2 = (((hashCode + (str == null ? 0 : str.hashCode())) * 31) + Float.hashCode(this.fileDurationSec)) * 31;
        String str2 = this.mimeType;
        return ((((((((hashCode2 + (str2 != null ? str2.hashCode() : 0)) * 31) + Integer.hashCode(this.fatalErrorCount)) * 31) + Integer.hashCode(this.nonFatalErrorCount)) * 31) + Long.hashCode(this.totalDroppedFrames)) * 31) + Long.hashCode(this.totalBandwidthBytes);
    }

    @Override // com.discord.reactevents.ReactEvent
    @NotNull
    public WritableMap serialize() {
        return ReactEvent.DefaultImpls.serialize(this);
    }

    @NotNull
    public String toString() {
        long j10 = this.playWallTimeMs;
        long j11 = this.stallMs;
        int i10 = this.stallCount;
        int i11 = this.seekCount;
        long j12 = this.firstPlayWaitingMs;
        String str = this.mediaSource;
        float f10 = this.fileDurationSec;
        String str2 = this.mimeType;
        int i12 = this.fatalErrorCount;
        int i13 = this.nonFatalErrorCount;
        long j13 = this.totalDroppedFrames;
        long j14 = this.totalBandwidthBytes;
        return "MediaPlayFinishedAnalytics(playWallTimeMs=" + j10 + ", stallMs=" + j11 + ", stallCount=" + i10 + ", seekCount=" + i11 + ", firstPlayWaitingMs=" + j12 + ", mediaSource=" + str + ", fileDurationSec=" + f10 + ", mimeType=" + str2 + ", fatalErrorCount=" + i12 + ", nonFatalErrorCount=" + i13 + ", totalDroppedFrames=" + j13 + ", totalBandwidthBytes=" + j14 + ")";
    }

    public MediaPlayFinishedAnalytics(long j10, long j11, int i10, int i11, long j12, String str, float f10, String str2, int i12, int i13, long j13, long j14) {
        this.playWallTimeMs = j10;
        this.stallMs = j11;
        this.stallCount = i10;
        this.seekCount = i11;
        this.firstPlayWaitingMs = j12;
        this.mediaSource = str;
        this.fileDurationSec = f10;
        this.mimeType = str2;
        this.fatalErrorCount = i12;
        this.nonFatalErrorCount = i13;
        this.totalDroppedFrames = j13;
        this.totalBandwidthBytes = j14;
    }
}
