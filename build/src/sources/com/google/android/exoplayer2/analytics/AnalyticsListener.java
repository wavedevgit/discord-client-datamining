package com.google.android.exoplayer2.analytics;

import android.util.SparseArray;
import com.google.android.exoplayer2.DeviceInfo;
import com.google.android.exoplayer2.Format;
import com.google.android.exoplayer2.MediaItem;
import com.google.android.exoplayer2.MediaMetadata;
import com.google.android.exoplayer2.PlaybackException;
import com.google.android.exoplayer2.PlaybackParameters;
import com.google.android.exoplayer2.Player;
import com.google.android.exoplayer2.Timeline;
import com.google.android.exoplayer2.Tracks;
import com.google.android.exoplayer2.audio.AudioAttributes;
import com.google.android.exoplayer2.decoder.DecoderCounters;
import com.google.android.exoplayer2.decoder.DecoderReuseEvaluation;
import com.google.android.exoplayer2.metadata.Metadata;
import com.google.android.exoplayer2.source.LoadEventInfo;
import com.google.android.exoplayer2.source.MediaLoadData;
import com.google.android.exoplayer2.text.CueGroup;
import com.google.android.exoplayer2.trackselection.TrackSelectionParameters;
import com.google.android.exoplayer2.video.VideoSize;
import java.io.IOException;
import java.util.List;
import oe.q;
import pi.j;
import rd.r;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public interface AnalyticsListener {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class EventTime {

        /* renamed from: a  reason: collision with root package name */
        public final long f12642a;

        /* renamed from: b  reason: collision with root package name */
        public final Timeline f12643b;

        /* renamed from: c  reason: collision with root package name */
        public final int f12644c;

        /* renamed from: d  reason: collision with root package name */
        public final r.b f12645d;

        /* renamed from: e  reason: collision with root package name */
        public final long f12646e;

        /* renamed from: f  reason: collision with root package name */
        public final Timeline f12647f;

        /* renamed from: g  reason: collision with root package name */
        public final int f12648g;

        /* renamed from: h  reason: collision with root package name */
        public final r.b f12649h;

        /* renamed from: i  reason: collision with root package name */
        public final long f12650i;

        /* renamed from: j  reason: collision with root package name */
        public final long f12651j;

        public EventTime(long j10, Timeline timeline, int i10, r.b bVar, long j11, Timeline timeline2, int i11, r.b bVar2, long j12, long j13) {
            this.f12642a = j10;
            this.f12643b = timeline;
            this.f12644c = i10;
            this.f12645d = bVar;
            this.f12646e = j11;
            this.f12647f = timeline2;
            this.f12648g = i11;
            this.f12649h = bVar2;
            this.f12650i = j12;
            this.f12651j = j13;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj != null && EventTime.class == obj.getClass()) {
                EventTime eventTime = (EventTime) obj;
                if (this.f12642a == eventTime.f12642a && this.f12644c == eventTime.f12644c && this.f12646e == eventTime.f12646e && this.f12648g == eventTime.f12648g && this.f12650i == eventTime.f12650i && this.f12651j == eventTime.f12651j && j.a(this.f12643b, eventTime.f12643b) && j.a(this.f12645d, eventTime.f12645d) && j.a(this.f12647f, eventTime.f12647f) && j.a(this.f12649h, eventTime.f12649h)) {
                    return true;
                }
            }
            return false;
        }

        public int hashCode() {
            return j.b(Long.valueOf(this.f12642a), this.f12643b, Integer.valueOf(this.f12644c), this.f12645d, Long.valueOf(this.f12646e), this.f12647f, Integer.valueOf(this.f12648g), this.f12649h, Long.valueOf(this.f12650i), Long.valueOf(this.f12651j));
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class Events {

        /* renamed from: a  reason: collision with root package name */
        private final q f12652a;

        /* renamed from: b  reason: collision with root package name */
        private final SparseArray f12653b;

        public Events(q qVar, SparseArray sparseArray) {
            this.f12652a = qVar;
            SparseArray sparseArray2 = new SparseArray(qVar.d());
            for (int i10 = 0; i10 < qVar.d(); i10++) {
                int c10 = qVar.c(i10);
                sparseArray2.append(c10, (EventTime) oe.a.e((EventTime) sparseArray.get(c10)));
            }
            this.f12653b = sparseArray2;
        }

        public boolean a(int i10) {
            return this.f12652a.a(i10);
        }

        public int b(int i10) {
            return this.f12652a.c(i10);
        }

        public EventTime c(int i10) {
            return (EventTime) oe.a.e((EventTime) this.f12653b.get(i10));
        }

        public int d() {
            return this.f12652a.d();
        }
    }

    default void onAudioAttributesChanged(EventTime eventTime, AudioAttributes audioAttributes) {
    }

    default void onAudioCodecError(EventTime eventTime, Exception exc) {
    }

    default void onAudioDecoderInitialized(EventTime eventTime, String str, long j10) {
    }

    default void onAudioDecoderReleased(EventTime eventTime, String str) {
    }

    default void onAudioDisabled(EventTime eventTime, DecoderCounters decoderCounters) {
    }

    default void onAudioEnabled(EventTime eventTime, DecoderCounters decoderCounters) {
    }

    default void onAudioInputFormatChanged(EventTime eventTime, Format format) {
    }

    default void onAudioPositionAdvancing(EventTime eventTime, long j10) {
    }

    default void onAudioSessionIdChanged(EventTime eventTime, int i10) {
    }

    default void onAudioSinkError(EventTime eventTime, Exception exc) {
    }

    default void onAudioUnderrun(EventTime eventTime, int i10, long j10, long j11) {
    }

    default void onAvailableCommandsChanged(EventTime eventTime, Player.Commands commands) {
    }

    default void onBandwidthEstimate(EventTime eventTime, int i10, long j10, long j11) {
    }

    default void onCues(EventTime eventTime, CueGroup cueGroup) {
    }

    default void onDeviceInfoChanged(EventTime eventTime, DeviceInfo deviceInfo) {
    }

    default void onDeviceVolumeChanged(EventTime eventTime, int i10, boolean z10) {
    }

    default void onDownstreamFormatChanged(EventTime eventTime, MediaLoadData mediaLoadData) {
    }

    default void onDrmKeysLoaded(EventTime eventTime) {
    }

    default void onDrmKeysRemoved(EventTime eventTime) {
    }

    default void onDrmKeysRestored(EventTime eventTime) {
    }

    default void onDrmSessionAcquired(EventTime eventTime) {
    }

    default void onDrmSessionManagerError(EventTime eventTime, Exception exc) {
    }

    default void onDrmSessionReleased(EventTime eventTime) {
    }

    default void onDroppedVideoFrames(EventTime eventTime, int i10, long j10) {
    }

    default void onEvents(Player player, Events events) {
    }

    default void onIsLoadingChanged(EventTime eventTime, boolean z10) {
    }

    default void onIsPlayingChanged(EventTime eventTime, boolean z10) {
    }

    default void onLoadCanceled(EventTime eventTime, LoadEventInfo loadEventInfo, MediaLoadData mediaLoadData) {
    }

    default void onLoadCompleted(EventTime eventTime, LoadEventInfo loadEventInfo, MediaLoadData mediaLoadData) {
    }

    void onLoadError(EventTime eventTime, LoadEventInfo loadEventInfo, MediaLoadData mediaLoadData, IOException iOException, boolean z10);

    default void onLoadStarted(EventTime eventTime, LoadEventInfo loadEventInfo, MediaLoadData mediaLoadData) {
    }

    default void onLoadingChanged(EventTime eventTime, boolean z10) {
    }

    default void onMaxSeekToPreviousPositionChanged(EventTime eventTime, long j10) {
    }

    default void onMediaItemTransition(EventTime eventTime, MediaItem mediaItem, int i10) {
    }

    default void onMediaMetadataChanged(EventTime eventTime, MediaMetadata mediaMetadata) {
    }

    default void onMetadata(EventTime eventTime, Metadata metadata) {
    }

    default void onPlayWhenReadyChanged(EventTime eventTime, boolean z10, int i10) {
    }

    default void onPlaybackParametersChanged(EventTime eventTime, PlaybackParameters playbackParameters) {
    }

    default void onPlaybackStateChanged(EventTime eventTime, int i10) {
    }

    default void onPlaybackSuppressionReasonChanged(EventTime eventTime, int i10) {
    }

    default void onPlayerError(EventTime eventTime, PlaybackException playbackException) {
    }

    default void onPlayerErrorChanged(EventTime eventTime, PlaybackException playbackException) {
    }

    default void onPlayerReleased(EventTime eventTime) {
    }

    default void onPlayerStateChanged(EventTime eventTime, boolean z10, int i10) {
    }

    default void onPlaylistMetadataChanged(EventTime eventTime, MediaMetadata mediaMetadata) {
    }

    default void onPositionDiscontinuity(EventTime eventTime, int i10) {
    }

    default void onRenderedFirstFrame(EventTime eventTime, Object obj, long j10) {
    }

    default void onRepeatModeChanged(EventTime eventTime, int i10) {
    }

    default void onSeekBackIncrementChanged(EventTime eventTime, long j10) {
    }

    default void onSeekForwardIncrementChanged(EventTime eventTime, long j10) {
    }

    default void onSeekStarted(EventTime eventTime) {
    }

    default void onShuffleModeChanged(EventTime eventTime, boolean z10) {
    }

    default void onSkipSilenceEnabledChanged(EventTime eventTime, boolean z10) {
    }

    default void onSurfaceSizeChanged(EventTime eventTime, int i10, int i11) {
    }

    default void onTimelineChanged(EventTime eventTime, int i10) {
    }

    default void onTrackSelectionParametersChanged(EventTime eventTime, TrackSelectionParameters trackSelectionParameters) {
    }

    default void onTracksChanged(EventTime eventTime, Tracks tracks) {
    }

    default void onUpstreamDiscarded(EventTime eventTime, MediaLoadData mediaLoadData) {
    }

    default void onVideoCodecError(EventTime eventTime, Exception exc) {
    }

    default void onVideoDecoderInitialized(EventTime eventTime, String str, long j10) {
    }

    default void onVideoDecoderReleased(EventTime eventTime, String str) {
    }

    default void onVideoDisabled(EventTime eventTime, DecoderCounters decoderCounters) {
    }

    default void onVideoEnabled(EventTime eventTime, DecoderCounters decoderCounters) {
    }

    default void onVideoFrameProcessingOffset(EventTime eventTime, long j10, int i10) {
    }

    default void onVideoInputFormatChanged(EventTime eventTime, Format format) {
    }

    default void onVideoSizeChanged(EventTime eventTime, int i10, int i11, int i12, float f10) {
    }

    default void onVolumeChanged(EventTime eventTime, float f10) {
    }

    default void onAudioDecoderInitialized(EventTime eventTime, String str, long j10, long j11) {
    }

    default void onAudioInputFormatChanged(EventTime eventTime, Format format, DecoderReuseEvaluation decoderReuseEvaluation) {
    }

    default void onCues(EventTime eventTime, List list) {
    }

    default void onDrmSessionAcquired(EventTime eventTime, int i10) {
    }

    default void onPositionDiscontinuity(EventTime eventTime, Player.PositionInfo positionInfo, Player.PositionInfo positionInfo2, int i10) {
    }

    default void onVideoDecoderInitialized(EventTime eventTime, String str, long j10, long j11) {
    }

    default void onVideoInputFormatChanged(EventTime eventTime, Format format, DecoderReuseEvaluation decoderReuseEvaluation) {
    }

    default void onVideoSizeChanged(EventTime eventTime, VideoSize videoSize) {
    }
}
