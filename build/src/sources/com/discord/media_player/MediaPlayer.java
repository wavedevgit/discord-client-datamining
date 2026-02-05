package com.discord.media_player;

import android.content.Context;
import android.net.Uri;
import com.discord.logging.Log;
import com.discord.media_player.MediaPlayer;
import com.discord.media_player.MediaPlayerView;
import com.discord.media_player.reactevents.MediaPlayFinishedAnalytics;
import com.discord.resource_usage.DeviceResourceUsageRecorder;
import com.google.android.exoplayer2.DeviceInfo;
import com.google.android.exoplayer2.Format;
import com.google.android.exoplayer2.MediaItem;
import com.google.android.exoplayer2.MediaMetadata;
import com.google.android.exoplayer2.PlaybackException;
import com.google.android.exoplayer2.PlaybackParameters;
import com.google.android.exoplayer2.Player;
import com.google.android.exoplayer2.SimpleExoPlayer;
import com.google.android.exoplayer2.Timeline;
import com.google.android.exoplayer2.Tracks;
import com.google.android.exoplayer2.analytics.AnalyticsListener;
import com.google.android.exoplayer2.analytics.PlaybackStats;
import com.google.android.exoplayer2.analytics.e;
import com.google.android.exoplayer2.audio.AudioAttributes;
import com.google.android.exoplayer2.decoder.DecoderCounters;
import com.google.android.exoplayer2.decoder.DecoderReuseEvaluation;
import com.google.android.exoplayer2.j;
import com.google.android.exoplayer2.source.LoadEventInfo;
import com.google.android.exoplayer2.source.MediaLoadData;
import com.google.android.exoplayer2.text.CueGroup;
import com.google.android.exoplayer2.trackselection.DefaultTrackSelector;
import com.google.android.exoplayer2.trackselection.MappingTrackSelector;
import com.google.android.exoplayer2.trackselection.TrackSelectionParameters;
import com.google.android.exoplayer2.upstream.DataSource;
import com.google.android.exoplayer2.video.VideoSize;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import je.q;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import lc.e;
import mi.s;
import org.jetbrains.annotations.NotNull;
import qd.h0;
import qd.w0;
@Metadata(d1 = {"\u0000x\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0010\u0002\n\u0002\b\u0005\n\u0002\u0010\u0007\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0006\n\u0002\u0010\u000b\n\u0002\b\u0002\n\u0002\u0010\t\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0019\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0002\b\u0007\u0018\u0000 N2\u00020\u0001:\u0003LMNB\u001f\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0005\u0012\u0006\u0010\u0006\u001a\u00020\u0007¢\u0006\u0004\b\b\u0010\tJF\u0010 \u001a\u00020\r2\u0006\u0010\u001a\u001a\u00020\u001b2\b\b\u0002\u0010!\u001a\u00020\"2\b\b\u0002\u0010#\u001a\u00020\"2\b\b\u0002\u0010$\u001a\u00020%2\n\b\u0002\u0010&\u001a\u0004\u0018\u00010'2\n\b\u0002\u0010(\u001a\u0004\u0018\u00010)H\u0007J\b\u0010*\u001a\u00020\rH\u0007J\b\u0010+\u001a\u00020\rH\u0007J\u0006\u0010,\u001a\u00020\rJ\b\u0010-\u001a\u00020\rH\u0007J\u0010\u0010.\u001a\u00020\r2\u0006\u0010/\u001a\u00020\u0013H\u0007J\b\u00100\u001a\u00020\rH\u0007J\u000e\u00101\u001a\u00020\r2\u0006\u00102\u001a\u00020%J\u0006\u00103\u001a\u00020%J\u0006\u00104\u001a\u00020%J\u0006\u00105\u001a\u00020%J\b\u00106\u001a\u00020\u0013H\u0007J\b\u00107\u001a\u00020\u0013H\u0007J\u0006\u00108\u001a\u00020\"J\u0006\u00109\u001a\u00020\"J\u0006\u0010:\u001a\u00020\"J\u0006\u0010;\u001a\u00020\"J\u0006\u0010<\u001a\u00020\"J\u0006\u0010=\u001a\u00020\"J\u0010\u0010>\u001a\u00020\r2\u0006\u0010?\u001a\u00020\fH\u0002J\b\u0010@\u001a\u00020\rH\u0002J\u0010\u0010A\u001a\u00020\r2\u0006\u0010B\u001a\u00020CH\u0002J \u0010D\u001a\u00020\"2\u0006\u0010B\u001a\u00020C2\u0006\u0010E\u001a\u00020F2\u0006\u0010G\u001a\u00020HH\u0002J\u000e\u0010I\u001a\u00020\"2\u0006\u0010J\u001a\u00020\u0007J\u0010\u0010K\u001a\u00020\r2\u0006\u0010&\u001a\u00020'H\u0007R\u000e\u0010\u0002\u001a\u00020\u0003X\u0082\u0004¢\u0006\u0002\n\u0000R\u000e\u0010\u0004\u001a\u00020\u0005X\u0082\u0004¢\u0006\u0002\n\u0000R\u000e\u0010\u0006\u001a\u00020\u0007X\u0082\u0004¢\u0006\u0002\n\u0000R&\u0010\n\u001a\u000e\u0012\u0004\u0012\u00020\f\u0012\u0004\u0012\u00020\r0\u000bX\u0086\u000e¢\u0006\u000e\n\u0000\u001a\u0004\b\u000e\u0010\u000f\"\u0004\b\u0010\u0010\u0011R&\u0010\u0012\u001a\u000e\u0012\u0004\u0012\u00020\u0013\u0012\u0004\u0012\u00020\r0\u000bX\u0086\u000e¢\u0006\u000e\n\u0000\u001a\u0004\b\u0014\u0010\u000f\"\u0004\b\u0015\u0010\u0011R&\u0010\u0016\u001a\u000e\u0012\u0004\u0012\u00020\u0017\u0012\u0004\u0012\u00020\r0\u000bX\u0086\u000e¢\u0006\u000e\n\u0000\u001a\u0004\b\u0018\u0010\u000f\"\u0004\b\u0019\u0010\u0011R\u001c\u0010\u001a\u001a\u0004\u0018\u00010\u001bX\u0086\u000e¢\u0006\u000e\n\u0000\u001a\u0004\b\u001c\u0010\u001d\"\u0004\b\u001e\u0010\u001f¨\u0006O"}, d2 = {"Lcom/discord/media_player/MediaPlayer;", "", "exoPlayer", "Lcom/google/android/exoplayer2/SimpleExoPlayer;", "dataSourceFactory", "Lcom/google/android/exoplayer2/upstream/DataSource$Factory;", "currentSettings", "Lcom/discord/media_player/MediaPlayer$PlayerSettings;", "<init>", "(Lcom/google/android/exoplayer2/SimpleExoPlayer;Lcom/google/android/exoplayer2/upstream/DataSource$Factory;Lcom/discord/media_player/MediaPlayer$PlayerSettings;)V", "eventListener", "Lkotlin/Function1;", "Lcom/discord/media_player/MediaPlayer$Event;", "", "getEventListener", "()Lkotlin/jvm/functions/Function1;", "setEventListener", "(Lkotlin/jvm/functions/Function1;)V", "volumeListener", "", "getVolumeListener", "setVolumeListener", "analyticsListener", "Lcom/discord/media_player/reactevents/MediaPlayFinishedAnalytics;", "getAnalyticsListener", "setAnalyticsListener", "mediaSource", "Lcom/discord/media_player/MediaSource;", "getMediaSource", "()Lcom/discord/media_player/MediaSource;", "setMediaSource", "(Lcom/discord/media_player/MediaSource;)V", "preparePlayer", "autoPlayWhenReady", "", "loopMedia", "initialSeekPositionMs", "", "mediaPlayerView", "Lcom/discord/media_player/MediaPlayerView;", "playerControlView", "Lcom/discord/media_player/MediaPlayerView$ControlView;", "release", "play", "playOrReset", "pause", "setVolume", "volume", "reset", "seekTo", "positionMs", "durationMs", "currentPositionMs", "bufferedPositionMs", "currentPositionPercentage", "bufferedPercentage", "shouldPlay", "isPlaying", "isBuffering", "hasError", "isMuted", "hasEnded", "setEvent", "event", "configureMultiAudioTrackSelection", "configureDefaultAudioTrackOverride", "trackSelector", "Lcom/google/android/exoplayer2/trackselection/DefaultTrackSelector;", "findAndConfigureAudioRenderer", "mappedTrackInfo", "Lcom/google/android/exoplayer2/trackselection/MappingTrackSelector$MappedTrackInfo;", "rendererIndex", "", "hasDifferentSettings", "newSettings", "reattachSurface", "Event", "PlayerSettings", "Factory", "media_player_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class MediaPlayer {
    private static final int FIRST_AUDIO_GROUP = 0;
    private static final int FIRST_TRACK_IN_GROUP = 0;
    @NotNull
    public static final Factory Factory = new Factory(null);
    @NotNull
    private static final PlayerSettings defaultSettings = new PlayerSettings(20000, 20000, 1000, 1000, false, true);
    @NotNull
    private Function1<? super MediaPlayFinishedAnalytics, Unit> analyticsListener;
    @NotNull
    private final PlayerSettings currentSettings;
    @NotNull
    private final DataSource.Factory dataSourceFactory;
    @NotNull
    private Function1<? super Event, Unit> eventListener;
    @NotNull
    private final SimpleExoPlayer exoPlayer;
    private MediaSource mediaSource;
    @NotNull
    private Function1<? super Float, Unit> volumeListener;

    @Metadata(d1 = {"\u0000&\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\b\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\b6\u0018\u00002\u00020\u0001:\u0006\u0004\u0005\u0006\u0007\b\tB\t\b\u0004¢\u0006\u0004\b\u0002\u0010\u0003\u0082\u0001\u0006\n\u000b\f\r\u000e\u000f¨\u0006\u0010"}, d2 = {"Lcom/discord/media_player/MediaPlayer$Event;", "", "<init>", "()V", "BufferStart", "BufferEnd", "Paused", "StartedPlaying", "PlaybackEnded", "PlaybackError", "Lcom/discord/media_player/MediaPlayer$Event$BufferEnd;", "Lcom/discord/media_player/MediaPlayer$Event$BufferStart;", "Lcom/discord/media_player/MediaPlayer$Event$Paused;", "Lcom/discord/media_player/MediaPlayer$Event$PlaybackEnded;", "Lcom/discord/media_player/MediaPlayer$Event$PlaybackError;", "Lcom/discord/media_player/MediaPlayer$Event$StartedPlaying;", "media_player_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static abstract class Event {

        @Metadata(d1 = {"\u0000$\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\b\n\u0000\n\u0002\u0010\u000e\n\u0000\bÆ\n\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\u0013\u0010\u0004\u001a\u00020\u00052\b\u0010\u0006\u001a\u0004\u0018\u00010\u0007HÖ\u0003J\t\u0010\b\u001a\u00020\tHÖ\u0001J\t\u0010\n\u001a\u00020\u000bHÖ\u0001¨\u0006\f"}, d2 = {"Lcom/discord/media_player/MediaPlayer$Event$BufferEnd;", "Lcom/discord/media_player/MediaPlayer$Event;", "<init>", "()V", "equals", "", "other", "", "hashCode", "", "toString", "", "media_player_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        public static final class BufferEnd extends Event {
            @NotNull
            public static final BufferEnd INSTANCE = new BufferEnd();

            private BufferEnd() {
                super(null);
            }

            public boolean equals(Object obj) {
                return this == obj || (obj instanceof BufferEnd);
            }

            public int hashCode() {
                return 1704075707;
            }

            @NotNull
            public String toString() {
                return "BufferEnd";
            }
        }

        @Metadata(d1 = {"\u0000$\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\b\n\u0000\n\u0002\u0010\u000e\n\u0000\bÆ\n\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\u0013\u0010\u0004\u001a\u00020\u00052\b\u0010\u0006\u001a\u0004\u0018\u00010\u0007HÖ\u0003J\t\u0010\b\u001a\u00020\tHÖ\u0001J\t\u0010\n\u001a\u00020\u000bHÖ\u0001¨\u0006\f"}, d2 = {"Lcom/discord/media_player/MediaPlayer$Event$BufferStart;", "Lcom/discord/media_player/MediaPlayer$Event;", "<init>", "()V", "equals", "", "other", "", "hashCode", "", "toString", "", "media_player_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        public static final class BufferStart extends Event {
            @NotNull
            public static final BufferStart INSTANCE = new BufferStart();

            private BufferStart() {
                super(null);
            }

            public boolean equals(Object obj) {
                return this == obj || (obj instanceof BufferStart);
            }

            public int hashCode() {
                return 1247323458;
            }

            @NotNull
            public String toString() {
                return "BufferStart";
            }
        }

        @Metadata(d1 = {"\u0000$\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\b\n\u0000\n\u0002\u0010\u000e\n\u0000\bÆ\n\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\u0013\u0010\u0004\u001a\u00020\u00052\b\u0010\u0006\u001a\u0004\u0018\u00010\u0007HÖ\u0003J\t\u0010\b\u001a\u00020\tHÖ\u0001J\t\u0010\n\u001a\u00020\u000bHÖ\u0001¨\u0006\f"}, d2 = {"Lcom/discord/media_player/MediaPlayer$Event$Paused;", "Lcom/discord/media_player/MediaPlayer$Event;", "<init>", "()V", "equals", "", "other", "", "hashCode", "", "toString", "", "media_player_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        public static final class Paused extends Event {
            @NotNull
            public static final Paused INSTANCE = new Paused();

            private Paused() {
                super(null);
            }

            public boolean equals(Object obj) {
                return this == obj || (obj instanceof Paused);
            }

            public int hashCode() {
                return -1136552978;
            }

            @NotNull
            public String toString() {
                return "Paused";
            }
        }

        @Metadata(d1 = {"\u0000$\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\b\n\u0000\n\u0002\u0010\u000e\n\u0000\bÆ\n\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\u0013\u0010\u0004\u001a\u00020\u00052\b\u0010\u0006\u001a\u0004\u0018\u00010\u0007HÖ\u0003J\t\u0010\b\u001a\u00020\tHÖ\u0001J\t\u0010\n\u001a\u00020\u000bHÖ\u0001¨\u0006\f"}, d2 = {"Lcom/discord/media_player/MediaPlayer$Event$PlaybackEnded;", "Lcom/discord/media_player/MediaPlayer$Event;", "<init>", "()V", "equals", "", "other", "", "hashCode", "", "toString", "", "media_player_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        public static final class PlaybackEnded extends Event {
            @NotNull
            public static final PlaybackEnded INSTANCE = new PlaybackEnded();

            private PlaybackEnded() {
                super(null);
            }

            public boolean equals(Object obj) {
                return this == obj || (obj instanceof PlaybackEnded);
            }

            public int hashCode() {
                return -1335489889;
            }

            @NotNull
            public String toString() {
                return "PlaybackEnded";
            }
        }

        @Metadata(d1 = {"\u0000.\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0007\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\b\n\u0000\n\u0002\u0010\u000e\n\u0000\b\u0086\b\u0018\u00002\u00020\u0001B\u0013\u0012\n\u0010\u0002\u001a\u00060\u0003j\u0002`\u0004¢\u0006\u0004\b\u0005\u0010\u0006J\r\u0010\t\u001a\u00060\u0003j\u0002`\u0004HÆ\u0003J\u0017\u0010\n\u001a\u00020\u00002\f\b\u0002\u0010\u0002\u001a\u00060\u0003j\u0002`\u0004HÆ\u0001J\u0013\u0010\u000b\u001a\u00020\f2\b\u0010\r\u001a\u0004\u0018\u00010\u000eHÖ\u0003J\t\u0010\u000f\u001a\u00020\u0010HÖ\u0001J\t\u0010\u0011\u001a\u00020\u0012HÖ\u0001R\u0015\u0010\u0002\u001a\u00060\u0003j\u0002`\u0004¢\u0006\b\n\u0000\u001a\u0004\b\u0007\u0010\b¨\u0006\u0013"}, d2 = {"Lcom/discord/media_player/MediaPlayer$Event$PlaybackError;", "Lcom/discord/media_player/MediaPlayer$Event;", "exception", "Ljava/lang/Exception;", "Lkotlin/Exception;", "<init>", "(Ljava/lang/Exception;)V", "getException", "()Ljava/lang/Exception;", "component1", "copy", "equals", "", "other", "", "hashCode", "", "toString", "", "media_player_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        public static final class PlaybackError extends Event {
            @NotNull
            private final Exception exception;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public PlaybackError(@NotNull Exception exception) {
                super(null);
                Intrinsics.checkNotNullParameter(exception, "exception");
                this.exception = exception;
            }

            public static /* synthetic */ PlaybackError copy$default(PlaybackError playbackError, Exception exc, int i10, Object obj) {
                if ((i10 & 1) != 0) {
                    exc = playbackError.exception;
                }
                return playbackError.copy(exc);
            }

            @NotNull
            public final Exception component1() {
                return this.exception;
            }

            @NotNull
            public final PlaybackError copy(@NotNull Exception exception) {
                Intrinsics.checkNotNullParameter(exception, "exception");
                return new PlaybackError(exception);
            }

            public boolean equals(Object obj) {
                if (this == obj) {
                    return true;
                }
                return (obj instanceof PlaybackError) && Intrinsics.areEqual(this.exception, ((PlaybackError) obj).exception);
            }

            @NotNull
            public final Exception getException() {
                return this.exception;
            }

            public int hashCode() {
                return this.exception.hashCode();
            }

            @NotNull
            public String toString() {
                Exception exc = this.exception;
                return "PlaybackError(exception=" + exc + ")";
            }
        }

        @Metadata(d1 = {"\u0000$\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\b\n\u0000\n\u0002\u0010\u000e\n\u0000\bÆ\n\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\u0013\u0010\u0004\u001a\u00020\u00052\b\u0010\u0006\u001a\u0004\u0018\u00010\u0007HÖ\u0003J\t\u0010\b\u001a\u00020\tHÖ\u0001J\t\u0010\n\u001a\u00020\u000bHÖ\u0001¨\u0006\f"}, d2 = {"Lcom/discord/media_player/MediaPlayer$Event$StartedPlaying;", "Lcom/discord/media_player/MediaPlayer$Event;", "<init>", "()V", "equals", "", "other", "", "hashCode", "", "toString", "", "media_player_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        public static final class StartedPlaying extends Event {
            @NotNull
            public static final StartedPlaying INSTANCE = new StartedPlaying();

            private StartedPlaying() {
                super(null);
            }

            public boolean equals(Object obj) {
                return this == obj || (obj instanceof StartedPlaying);
            }

            public int hashCode() {
                return -142606547;
            }

            @NotNull
            public String toString() {
                return "StartedPlaying";
            }
        }

        public /* synthetic */ Event(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private Event() {
        }
    }

    @Metadata(d1 = {"\u0000*\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\b\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\u001a\u0010\u000b\u001a\u00020\f2\u0006\u0010\r\u001a\u00020\u000e2\n\b\u0002\u0010\u000f\u001a\u0004\u0018\u00010\bR\u000e\u0010\u0004\u001a\u00020\u0005X\u0082T¢\u0006\u0002\n\u0000R\u000e\u0010\u0006\u001a\u00020\u0005X\u0082T¢\u0006\u0002\n\u0000R\u0011\u0010\u0007\u001a\u00020\b¢\u0006\b\n\u0000\u001a\u0004\b\t\u0010\n¨\u0006\u0010"}, d2 = {"Lcom/discord/media_player/MediaPlayer$Factory;", "", "<init>", "()V", "FIRST_AUDIO_GROUP", "", "FIRST_TRACK_IN_GROUP", "defaultSettings", "Lcom/discord/media_player/MediaPlayer$PlayerSettings;", "getDefaultSettings", "()Lcom/discord/media_player/MediaPlayer$PlayerSettings;", "create", "Lcom/discord/media_player/MediaPlayer;", "context", "Landroid/content/Context;", "playerSettings", "media_player_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class Factory {
        public /* synthetic */ Factory(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public static /* synthetic */ MediaPlayer create$default(Factory factory, Context context, PlayerSettings playerSettings, int i10, Object obj) {
            if ((i10 & 2) != 0) {
                playerSettings = null;
            }
            return factory.create(context, playerSettings);
        }

        @NotNull
        public final MediaPlayer create(@NotNull Context context, PlayerSettings playerSettings) {
            Intrinsics.checkNotNullParameter(context, "context");
            if (playerSettings == null) {
                playerSettings = getDefaultSettings();
            }
            lc.e a10 = new e.a().c(playerSettings.getMinBufferMs(), playerSettings.getMaxBufferMs(), playerSettings.getBufferForPlaybackMs(), playerSettings.getBufferForPlaybackAfterRebufferMs()).a();
            Intrinsics.checkNotNullExpressionValue(a10, "build(...)");
            lc.f k10 = new lc.f(context).k(playerSettings.getEnableDecoderFallback());
            Intrinsics.checkNotNullExpressionValue(k10, "setEnableDecoderFallback(...)");
            if (playerSettings.getEnableAsyncBufferQueueing()) {
                k10.i();
            }
            SimpleExoPlayer a11 = new SimpleExoPlayer.a(context, k10).c(a10).d(new DefaultTrackSelector(context)).a();
            Intrinsics.checkNotNullExpressionValue(a11, "build(...)");
            return new MediaPlayer(a11, CacheDataSourceFactory.Companion.getInstance(), playerSettings);
        }

        @NotNull
        public final PlayerSettings getDefaultSettings() {
            return MediaPlayer.defaultSettings;
        }

        private Factory() {
        }
    }

    @Metadata(d1 = {"\u0000 \n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\b\n\u0002\b\u0004\n\u0002\u0010\u000b\n\u0002\b\u0016\n\u0002\u0010\u000e\n\u0000\b\u0086\b\u0018\u00002\u00020\u0001B7\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0003\u0012\u0006\u0010\u0005\u001a\u00020\u0003\u0012\u0006\u0010\u0006\u001a\u00020\u0003\u0012\u0006\u0010\u0007\u001a\u00020\b\u0012\u0006\u0010\t\u001a\u00020\b¢\u0006\u0004\b\n\u0010\u000bJ\t\u0010\u0014\u001a\u00020\u0003HÆ\u0003J\t\u0010\u0015\u001a\u00020\u0003HÆ\u0003J\t\u0010\u0016\u001a\u00020\u0003HÆ\u0003J\t\u0010\u0017\u001a\u00020\u0003HÆ\u0003J\t\u0010\u0018\u001a\u00020\bHÆ\u0003J\t\u0010\u0019\u001a\u00020\bHÆ\u0003JE\u0010\u001a\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\b\b\u0002\u0010\u0004\u001a\u00020\u00032\b\b\u0002\u0010\u0005\u001a\u00020\u00032\b\b\u0002\u0010\u0006\u001a\u00020\u00032\b\b\u0002\u0010\u0007\u001a\u00020\b2\b\b\u0002\u0010\t\u001a\u00020\bHÆ\u0001J\u0013\u0010\u001b\u001a\u00020\b2\b\u0010\u001c\u001a\u0004\u0018\u00010\u0001HÖ\u0003J\t\u0010\u001d\u001a\u00020\u0003HÖ\u0001J\t\u0010\u001e\u001a\u00020\u001fHÖ\u0001R\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\f\u0010\rR\u0011\u0010\u0004\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u000e\u0010\rR\u0011\u0010\u0005\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u000f\u0010\rR\u0011\u0010\u0006\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0010\u0010\rR\u0011\u0010\u0007\u001a\u00020\b¢\u0006\b\n\u0000\u001a\u0004\b\u0011\u0010\u0012R\u0011\u0010\t\u001a\u00020\b¢\u0006\b\n\u0000\u001a\u0004\b\u0013\u0010\u0012¨\u0006 "}, d2 = {"Lcom/discord/media_player/MediaPlayer$PlayerSettings;", "", "minBufferMs", "", "maxBufferMs", "bufferForPlaybackMs", "bufferForPlaybackAfterRebufferMs", "enableDecoderFallback", "", "enableAsyncBufferQueueing", "<init>", "(IIIIZZ)V", "getMinBufferMs", "()I", "getMaxBufferMs", "getBufferForPlaybackMs", "getBufferForPlaybackAfterRebufferMs", "getEnableDecoderFallback", "()Z", "getEnableAsyncBufferQueueing", "component1", "component2", "component3", "component4", "component5", "component6", "copy", "equals", "other", "hashCode", "toString", "", "media_player_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class PlayerSettings {
        private final int bufferForPlaybackAfterRebufferMs;
        private final int bufferForPlaybackMs;
        private final boolean enableAsyncBufferQueueing;
        private final boolean enableDecoderFallback;
        private final int maxBufferMs;
        private final int minBufferMs;

        public PlayerSettings(int i10, int i11, int i12, int i13, boolean z10, boolean z11) {
            this.minBufferMs = i10;
            this.maxBufferMs = i11;
            this.bufferForPlaybackMs = i12;
            this.bufferForPlaybackAfterRebufferMs = i13;
            this.enableDecoderFallback = z10;
            this.enableAsyncBufferQueueing = z11;
        }

        public static /* synthetic */ PlayerSettings copy$default(PlayerSettings playerSettings, int i10, int i11, int i12, int i13, boolean z10, boolean z11, int i14, Object obj) {
            if ((i14 & 1) != 0) {
                i10 = playerSettings.minBufferMs;
            }
            if ((i14 & 2) != 0) {
                i11 = playerSettings.maxBufferMs;
            }
            if ((i14 & 4) != 0) {
                i12 = playerSettings.bufferForPlaybackMs;
            }
            if ((i14 & 8) != 0) {
                i13 = playerSettings.bufferForPlaybackAfterRebufferMs;
            }
            if ((i14 & 16) != 0) {
                z10 = playerSettings.enableDecoderFallback;
            }
            if ((i14 & 32) != 0) {
                z11 = playerSettings.enableAsyncBufferQueueing;
            }
            boolean z12 = z10;
            boolean z13 = z11;
            return playerSettings.copy(i10, i11, i12, i13, z12, z13);
        }

        public final int component1() {
            return this.minBufferMs;
        }

        public final int component2() {
            return this.maxBufferMs;
        }

        public final int component3() {
            return this.bufferForPlaybackMs;
        }

        public final int component4() {
            return this.bufferForPlaybackAfterRebufferMs;
        }

        public final boolean component5() {
            return this.enableDecoderFallback;
        }

        public final boolean component6() {
            return this.enableAsyncBufferQueueing;
        }

        @NotNull
        public final PlayerSettings copy(int i10, int i11, int i12, int i13, boolean z10, boolean z11) {
            return new PlayerSettings(i10, i11, i12, i13, z10, z11);
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj instanceof PlayerSettings) {
                PlayerSettings playerSettings = (PlayerSettings) obj;
                return this.minBufferMs == playerSettings.minBufferMs && this.maxBufferMs == playerSettings.maxBufferMs && this.bufferForPlaybackMs == playerSettings.bufferForPlaybackMs && this.bufferForPlaybackAfterRebufferMs == playerSettings.bufferForPlaybackAfterRebufferMs && this.enableDecoderFallback == playerSettings.enableDecoderFallback && this.enableAsyncBufferQueueing == playerSettings.enableAsyncBufferQueueing;
            }
            return false;
        }

        public final int getBufferForPlaybackAfterRebufferMs() {
            return this.bufferForPlaybackAfterRebufferMs;
        }

        public final int getBufferForPlaybackMs() {
            return this.bufferForPlaybackMs;
        }

        public final boolean getEnableAsyncBufferQueueing() {
            return this.enableAsyncBufferQueueing;
        }

        public final boolean getEnableDecoderFallback() {
            return this.enableDecoderFallback;
        }

        public final int getMaxBufferMs() {
            return this.maxBufferMs;
        }

        public final int getMinBufferMs() {
            return this.minBufferMs;
        }

        public int hashCode() {
            return (((((((((Integer.hashCode(this.minBufferMs) * 31) + Integer.hashCode(this.maxBufferMs)) * 31) + Integer.hashCode(this.bufferForPlaybackMs)) * 31) + Integer.hashCode(this.bufferForPlaybackAfterRebufferMs)) * 31) + Boolean.hashCode(this.enableDecoderFallback)) * 31) + Boolean.hashCode(this.enableAsyncBufferQueueing);
        }

        @NotNull
        public String toString() {
            int i10 = this.minBufferMs;
            int i11 = this.maxBufferMs;
            int i12 = this.bufferForPlaybackMs;
            int i13 = this.bufferForPlaybackAfterRebufferMs;
            boolean z10 = this.enableDecoderFallback;
            boolean z11 = this.enableAsyncBufferQueueing;
            return "PlayerSettings(minBufferMs=" + i10 + ", maxBufferMs=" + i11 + ", bufferForPlaybackMs=" + i12 + ", bufferForPlaybackAfterRebufferMs=" + i13 + ", enableDecoderFallback=" + z10 + ", enableAsyncBufferQueueing=" + z11 + ")";
        }
    }

    public MediaPlayer(@NotNull SimpleExoPlayer exoPlayer, @NotNull DataSource.Factory dataSourceFactory, @NotNull PlayerSettings currentSettings) {
        Intrinsics.checkNotNullParameter(exoPlayer, "exoPlayer");
        Intrinsics.checkNotNullParameter(dataSourceFactory, "dataSourceFactory");
        Intrinsics.checkNotNullParameter(currentSettings, "currentSettings");
        this.exoPlayer = exoPlayer;
        this.dataSourceFactory = dataSourceFactory;
        this.currentSettings = currentSettings;
        this.eventListener = new Function1() { // from class: com.discord.media_player.a
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit eventListener$lambda$0;
                eventListener$lambda$0 = MediaPlayer.eventListener$lambda$0((MediaPlayer.Event) obj);
                return eventListener$lambda$0;
            }
        };
        this.volumeListener = new Function1() { // from class: com.discord.media_player.b
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit volumeListener$lambda$1;
                volumeListener$lambda$1 = MediaPlayer.volumeListener$lambda$1(((Float) obj).floatValue());
                return volumeListener$lambda$1;
            }
        };
        this.analyticsListener = new Function1() { // from class: com.discord.media_player.c
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit analyticsListener$lambda$2;
                analyticsListener$lambda$2 = MediaPlayer.analyticsListener$lambda$2((MediaPlayFinishedAnalytics) obj);
                return analyticsListener$lambda$2;
            }
        };
        exoPlayer.L(new Player.b() { // from class: com.discord.media_player.MediaPlayer.1
            {
                MediaPlayer.this = this;
            }

            @Override // com.google.android.exoplayer2.Player.b
            public /* bridge */ /* synthetic */ void onAudioAttributesChanged(AudioAttributes audioAttributes) {
                super.onAudioAttributesChanged(audioAttributes);
            }

            @Override // com.google.android.exoplayer2.Player.b
            public /* bridge */ /* synthetic */ void onAudioSessionIdChanged(int i10) {
                super.onAudioSessionIdChanged(i10);
            }

            @Override // com.google.android.exoplayer2.Player.b
            public /* bridge */ /* synthetic */ void onAvailableCommandsChanged(Player.Commands commands) {
                super.onAvailableCommandsChanged(commands);
            }

            @Override // com.google.android.exoplayer2.Player.b, zd.m
            public /* bridge */ /* synthetic */ void onCues(CueGroup cueGroup) {
                super.onCues(cueGroup);
            }

            @Override // com.google.android.exoplayer2.Player.b
            public /* bridge */ /* synthetic */ void onDeviceInfoChanged(DeviceInfo deviceInfo) {
                super.onDeviceInfoChanged(deviceInfo);
            }

            @Override // com.google.android.exoplayer2.Player.b
            public /* bridge */ /* synthetic */ void onDeviceVolumeChanged(int i10, boolean z10) {
                super.onDeviceVolumeChanged(i10, z10);
            }

            @Override // com.google.android.exoplayer2.Player.b
            public /* bridge */ /* synthetic */ void onEvents(Player player, Player.Events events) {
                super.onEvents(player, events);
            }

            @Override // com.google.android.exoplayer2.Player.b
            public /* bridge */ /* synthetic */ void onIsLoadingChanged(boolean z10) {
                super.onIsLoadingChanged(z10);
            }

            @Override // com.google.android.exoplayer2.Player.b
            public void onIsPlayingChanged(boolean z10) {
                super.onIsPlayingChanged(z10);
                if (z10) {
                    MediaPlayer.this.setEvent(Event.StartedPlaying.INSTANCE);
                } else if (MediaPlayer.this.exoPlayer.O() != 4 && MediaPlayer.this.exoPlayer.O() != 2) {
                    MediaPlayer.this.setEvent(Event.Paused.INSTANCE);
                }
            }

            @Override // com.google.android.exoplayer2.Player.b
            @Deprecated
            public /* bridge */ /* synthetic */ void onLoadingChanged(boolean z10) {
                super.onLoadingChanged(z10);
            }

            @Override // com.google.android.exoplayer2.Player.b
            public /* bridge */ /* synthetic */ void onMaxSeekToPreviousPositionChanged(long j10) {
                super.onMaxSeekToPreviousPositionChanged(j10);
            }

            @Override // com.google.android.exoplayer2.Player.b
            public /* bridge */ /* synthetic */ void onMediaItemTransition(MediaItem mediaItem, int i10) {
                super.onMediaItemTransition(mediaItem, i10);
            }

            @Override // com.google.android.exoplayer2.Player.b
            public /* bridge */ /* synthetic */ void onMediaMetadataChanged(MediaMetadata mediaMetadata) {
                super.onMediaMetadataChanged(mediaMetadata);
            }

            @Override // com.google.android.exoplayer2.Player.b, gd.d
            public /* bridge */ /* synthetic */ void onMetadata(com.google.android.exoplayer2.metadata.Metadata metadata) {
                super.onMetadata(metadata);
            }

            @Override // com.google.android.exoplayer2.Player.b
            public /* bridge */ /* synthetic */ void onPlayWhenReadyChanged(boolean z10, int i10) {
                super.onPlayWhenReadyChanged(z10, i10);
            }

            @Override // com.google.android.exoplayer2.Player.b
            public /* bridge */ /* synthetic */ void onPlaybackParametersChanged(PlaybackParameters playbackParameters) {
                super.onPlaybackParametersChanged(playbackParameters);
            }

            @Override // com.google.android.exoplayer2.Player.b
            public void onPlaybackStateChanged(int i10) {
                super.onPlaybackStateChanged(i10);
                if (i10 == 2) {
                    MediaPlayer.this.setEvent(Event.BufferStart.INSTANCE);
                } else if (i10 == 3) {
                    MediaPlayer.this.setEvent(Event.BufferEnd.INSTANCE);
                } else if (i10 == 4) {
                    MediaPlayer.this.setEvent(Event.PlaybackEnded.INSTANCE);
                }
            }

            @Override // com.google.android.exoplayer2.Player.b
            public /* bridge */ /* synthetic */ void onPlaybackSuppressionReasonChanged(int i10) {
                super.onPlaybackSuppressionReasonChanged(i10);
            }

            @Override // com.google.android.exoplayer2.Player.b
            public void onPlayerError(PlaybackException error) {
                String str;
                String str2;
                Intrinsics.checkNotNullParameter(error, "error");
                super.onPlayerError(error);
                MediaPlayer.this.setEvent(new Event.PlaybackError(error));
                Log log = Log.INSTANCE;
                String simpleName = AnonymousClass1.class.getSimpleName();
                Intrinsics.checkNotNullExpressionValue(simpleName, "getSimpleName(...)");
                MediaSource mediaSource = MediaPlayer.this.getMediaSource();
                DefaultTrackSelector defaultTrackSelector = null;
                if (mediaSource != null) {
                    str = mediaSource.getFeatureTag();
                } else {
                    str = null;
                }
                log.e(simpleName, "Playback error for feature: " + str, error);
                if (error instanceof j) {
                    j jVar = (j) error;
                    if (jVar.f12604t == 1) {
                        String simpleName2 = AnonymousClass1.class.getSimpleName();
                        Intrinsics.checkNotNullExpressionValue(simpleName2, "getSimpleName(...)");
                        int i10 = jVar.f12606v;
                        MediaSource mediaSource2 = MediaPlayer.this.getMediaSource();
                        if (mediaSource2 != null) {
                            str2 = mediaSource2.getFeatureTag();
                        } else {
                            str2 = null;
                        }
                        Log.e$default(log, simpleName2, "Disabling problematic renderer index " + i10 + ", retrying: " + str2, (Throwable) null, 4, (Object) null);
                        q x02 = MediaPlayer.this.exoPlayer.x0();
                        if (x02 instanceof DefaultTrackSelector) {
                            defaultTrackSelector = (DefaultTrackSelector) x02;
                        }
                        if (defaultTrackSelector != null) {
                            DefaultTrackSelector.d.a E = defaultTrackSelector.E();
                            Intrinsics.checkNotNullExpressionValue(E, "buildUponParameters(...)");
                            E.v0(jVar.f12606v, true);
                            defaultTrackSelector.b0(E.A());
                            MediaPlayer.this.exoPlayer.d();
                            MediaPlayer.this.exoPlayer.e();
                            return;
                        }
                        String simpleName3 = AnonymousClass1.class.getSimpleName();
                        Intrinsics.checkNotNullExpressionValue(simpleName3, "getSimpleName(...)");
                        Log.e$default(log, simpleName3, "TrackSelector is not of type DefaultTrackSelector.", (Throwable) null, 4, (Object) null);
                    }
                }
            }

            @Override // com.google.android.exoplayer2.Player.b
            public /* bridge */ /* synthetic */ void onPlayerErrorChanged(PlaybackException playbackException) {
                super.onPlayerErrorChanged(playbackException);
            }

            @Override // com.google.android.exoplayer2.Player.b
            @or.c
            public void onPlayerStateChanged(boolean z10, int i10) {
                if (z10 && i10 == 3) {
                    MediaPlayer.this.exoPlayer.e();
                }
            }

            @Override // com.google.android.exoplayer2.Player.b
            public /* bridge */ /* synthetic */ void onPlaylistMetadataChanged(MediaMetadata mediaMetadata) {
                super.onPlaylistMetadataChanged(mediaMetadata);
            }

            @Override // com.google.android.exoplayer2.Player.b
            @Deprecated
            public /* bridge */ /* synthetic */ void onPositionDiscontinuity(int i10) {
                super.onPositionDiscontinuity(i10);
            }

            @Override // com.google.android.exoplayer2.Player.b
            public /* bridge */ /* synthetic */ void onRenderedFirstFrame() {
                super.onRenderedFirstFrame();
            }

            @Override // com.google.android.exoplayer2.Player.b
            public /* bridge */ /* synthetic */ void onRepeatModeChanged(int i10) {
                super.onRepeatModeChanged(i10);
            }

            @Override // com.google.android.exoplayer2.Player.b
            public /* bridge */ /* synthetic */ void onSeekBackIncrementChanged(long j10) {
                super.onSeekBackIncrementChanged(j10);
            }

            @Override // com.google.android.exoplayer2.Player.b
            public /* bridge */ /* synthetic */ void onSeekForwardIncrementChanged(long j10) {
                super.onSeekForwardIncrementChanged(j10);
            }

            @Override // com.google.android.exoplayer2.Player.b
            public /* bridge */ /* synthetic */ void onShuffleModeEnabledChanged(boolean z10) {
                super.onShuffleModeEnabledChanged(z10);
            }

            @Override // com.google.android.exoplayer2.Player.b
            public /* bridge */ /* synthetic */ void onSkipSilenceEnabledChanged(boolean z10) {
                super.onSkipSilenceEnabledChanged(z10);
            }

            @Override // com.google.android.exoplayer2.Player.b
            public /* bridge */ /* synthetic */ void onSurfaceSizeChanged(int i10, int i11) {
                super.onSurfaceSizeChanged(i10, i11);
            }

            @Override // com.google.android.exoplayer2.Player.b
            public /* bridge */ /* synthetic */ void onTimelineChanged(Timeline timeline, int i10) {
                super.onTimelineChanged(timeline, i10);
            }

            @Override // com.google.android.exoplayer2.Player.b
            public /* bridge */ /* synthetic */ void onTrackSelectionParametersChanged(TrackSelectionParameters trackSelectionParameters) {
                super.onTrackSelectionParametersChanged(trackSelectionParameters);
            }

            @Override // com.google.android.exoplayer2.Player.b
            public /* bridge */ /* synthetic */ void onTracksChanged(Tracks tracks) {
                super.onTracksChanged(tracks);
            }

            @Override // com.google.android.exoplayer2.Player.b
            public /* bridge */ /* synthetic */ void onVideoSizeChanged(VideoSize videoSize) {
                super.onVideoSizeChanged(videoSize);
            }

            @Override // com.google.android.exoplayer2.Player.b
            public /* bridge */ /* synthetic */ void onVolumeChanged(float f10) {
                super.onVolumeChanged(f10);
            }

            @Override // com.google.android.exoplayer2.Player.b, zd.m
            @Deprecated
            public /* bridge */ /* synthetic */ void onCues(List list) {
                super.onCues(list);
            }

            @Override // com.google.android.exoplayer2.Player.b
            public /* bridge */ /* synthetic */ void onPositionDiscontinuity(Player.PositionInfo positionInfo, Player.PositionInfo positionInfo2, int i10) {
                super.onPositionDiscontinuity(positionInfo, positionInfo2, i10);
            }
        });
        exoPlayer.r0(new com.google.android.exoplayer2.analytics.e(false, new e.a() { // from class: com.discord.media_player.d
            @Override // com.google.android.exoplayer2.analytics.e.a
            public final void a(AnalyticsListener.EventTime eventTime, PlaybackStats playbackStats) {
                MediaPlayer._init_$lambda$3(MediaPlayer.this, eventTime, playbackStats);
            }
        }));
        exoPlayer.r0(new AnalyticsListener() { // from class: com.discord.media_player.MediaPlayer.3
            @Override // com.google.android.exoplayer2.analytics.AnalyticsListener
            public /* bridge */ /* synthetic */ void onAudioAttributesChanged(AnalyticsListener.EventTime eventTime, AudioAttributes audioAttributes) {
                super.onAudioAttributesChanged(eventTime, audioAttributes);
            }

            @Override // com.google.android.exoplayer2.analytics.AnalyticsListener
            public /* bridge */ /* synthetic */ void onAudioCodecError(AnalyticsListener.EventTime eventTime, Exception exc) {
                super.onAudioCodecError(eventTime, exc);
            }

            @Override // com.google.android.exoplayer2.analytics.AnalyticsListener
            @Deprecated
            public /* bridge */ /* synthetic */ void onAudioDecoderInitialized(AnalyticsListener.EventTime eventTime, String str, long j10) {
                super.onAudioDecoderInitialized(eventTime, str, j10);
            }

            @Override // com.google.android.exoplayer2.analytics.AnalyticsListener
            public /* bridge */ /* synthetic */ void onAudioDecoderReleased(AnalyticsListener.EventTime eventTime, String str) {
                super.onAudioDecoderReleased(eventTime, str);
            }

            @Override // com.google.android.exoplayer2.analytics.AnalyticsListener
            public /* bridge */ /* synthetic */ void onAudioDisabled(AnalyticsListener.EventTime eventTime, DecoderCounters decoderCounters) {
                super.onAudioDisabled(eventTime, decoderCounters);
            }

            @Override // com.google.android.exoplayer2.analytics.AnalyticsListener
            public /* bridge */ /* synthetic */ void onAudioEnabled(AnalyticsListener.EventTime eventTime, DecoderCounters decoderCounters) {
                super.onAudioEnabled(eventTime, decoderCounters);
            }

            @Override // com.google.android.exoplayer2.analytics.AnalyticsListener
            @Deprecated
            public /* bridge */ /* synthetic */ void onAudioInputFormatChanged(AnalyticsListener.EventTime eventTime, Format format) {
                super.onAudioInputFormatChanged(eventTime, format);
            }

            @Override // com.google.android.exoplayer2.analytics.AnalyticsListener
            public /* bridge */ /* synthetic */ void onAudioPositionAdvancing(AnalyticsListener.EventTime eventTime, long j10) {
                super.onAudioPositionAdvancing(eventTime, j10);
            }

            @Override // com.google.android.exoplayer2.analytics.AnalyticsListener
            public /* bridge */ /* synthetic */ void onAudioSessionIdChanged(AnalyticsListener.EventTime eventTime, int i10) {
                super.onAudioSessionIdChanged(eventTime, i10);
            }

            @Override // com.google.android.exoplayer2.analytics.AnalyticsListener
            public /* bridge */ /* synthetic */ void onAudioSinkError(AnalyticsListener.EventTime eventTime, Exception exc) {
                super.onAudioSinkError(eventTime, exc);
            }

            @Override // com.google.android.exoplayer2.analytics.AnalyticsListener
            public /* bridge */ /* synthetic */ void onAudioUnderrun(AnalyticsListener.EventTime eventTime, int i10, long j10, long j11) {
                super.onAudioUnderrun(eventTime, i10, j10, j11);
            }

            @Override // com.google.android.exoplayer2.analytics.AnalyticsListener
            public /* bridge */ /* synthetic */ void onAvailableCommandsChanged(AnalyticsListener.EventTime eventTime, Player.Commands commands) {
                super.onAvailableCommandsChanged(eventTime, commands);
            }

            @Override // com.google.android.exoplayer2.analytics.AnalyticsListener
            public /* bridge */ /* synthetic */ void onBandwidthEstimate(AnalyticsListener.EventTime eventTime, int i10, long j10, long j11) {
                super.onBandwidthEstimate(eventTime, i10, j10, j11);
            }

            @Override // com.google.android.exoplayer2.analytics.AnalyticsListener
            public /* bridge */ /* synthetic */ void onCues(AnalyticsListener.EventTime eventTime, CueGroup cueGroup) {
                super.onCues(eventTime, cueGroup);
            }

            @Override // com.google.android.exoplayer2.analytics.AnalyticsListener
            public /* bridge */ /* synthetic */ void onDeviceInfoChanged(AnalyticsListener.EventTime eventTime, DeviceInfo deviceInfo) {
                super.onDeviceInfoChanged(eventTime, deviceInfo);
            }

            @Override // com.google.android.exoplayer2.analytics.AnalyticsListener
            public /* bridge */ /* synthetic */ void onDeviceVolumeChanged(AnalyticsListener.EventTime eventTime, int i10, boolean z10) {
                super.onDeviceVolumeChanged(eventTime, i10, z10);
            }

            @Override // com.google.android.exoplayer2.analytics.AnalyticsListener
            public /* bridge */ /* synthetic */ void onDownstreamFormatChanged(AnalyticsListener.EventTime eventTime, MediaLoadData mediaLoadData) {
                super.onDownstreamFormatChanged(eventTime, mediaLoadData);
            }

            @Override // com.google.android.exoplayer2.analytics.AnalyticsListener
            public /* bridge */ /* synthetic */ void onDrmKeysLoaded(AnalyticsListener.EventTime eventTime) {
                super.onDrmKeysLoaded(eventTime);
            }

            @Override // com.google.android.exoplayer2.analytics.AnalyticsListener
            public /* bridge */ /* synthetic */ void onDrmKeysRemoved(AnalyticsListener.EventTime eventTime) {
                super.onDrmKeysRemoved(eventTime);
            }

            @Override // com.google.android.exoplayer2.analytics.AnalyticsListener
            public /* bridge */ /* synthetic */ void onDrmKeysRestored(AnalyticsListener.EventTime eventTime) {
                super.onDrmKeysRestored(eventTime);
            }

            @Override // com.google.android.exoplayer2.analytics.AnalyticsListener
            @Deprecated
            public /* bridge */ /* synthetic */ void onDrmSessionAcquired(AnalyticsListener.EventTime eventTime) {
                super.onDrmSessionAcquired(eventTime);
            }

            @Override // com.google.android.exoplayer2.analytics.AnalyticsListener
            public /* bridge */ /* synthetic */ void onDrmSessionManagerError(AnalyticsListener.EventTime eventTime, Exception exc) {
                super.onDrmSessionManagerError(eventTime, exc);
            }

            @Override // com.google.android.exoplayer2.analytics.AnalyticsListener
            public /* bridge */ /* synthetic */ void onDrmSessionReleased(AnalyticsListener.EventTime eventTime) {
                super.onDrmSessionReleased(eventTime);
            }

            @Override // com.google.android.exoplayer2.analytics.AnalyticsListener
            public /* bridge */ /* synthetic */ void onDroppedVideoFrames(AnalyticsListener.EventTime eventTime, int i10, long j10) {
                super.onDroppedVideoFrames(eventTime, i10, j10);
            }

            @Override // com.google.android.exoplayer2.analytics.AnalyticsListener
            public /* bridge */ /* synthetic */ void onEvents(Player player, AnalyticsListener.Events events) {
                super.onEvents(player, events);
            }

            @Override // com.google.android.exoplayer2.analytics.AnalyticsListener
            public /* bridge */ /* synthetic */ void onIsLoadingChanged(AnalyticsListener.EventTime eventTime, boolean z10) {
                super.onIsLoadingChanged(eventTime, z10);
            }

            @Override // com.google.android.exoplayer2.analytics.AnalyticsListener
            public /* bridge */ /* synthetic */ void onIsPlayingChanged(AnalyticsListener.EventTime eventTime, boolean z10) {
                super.onIsPlayingChanged(eventTime, z10);
            }

            @Override // com.google.android.exoplayer2.analytics.AnalyticsListener
            public void onLoadCanceled(AnalyticsListener.EventTime eventTime, LoadEventInfo loadEventInfo, MediaLoadData mediaLoadData) {
                Intrinsics.checkNotNullParameter(eventTime, "eventTime");
                Intrinsics.checkNotNullParameter(loadEventInfo, "loadEventInfo");
                Intrinsics.checkNotNullParameter(mediaLoadData, "mediaLoadData");
                if (loadEventInfo.f12740d.isEmpty()) {
                    return;
                }
                DeviceResourceUsageRecorder.Companion companion = DeviceResourceUsageRecorder.Companion;
                companion.setMediaPlayerBytesReceived(companion.getMediaPlayerBytesReceived() + loadEventInfo.f12743g);
            }

            @Override // com.google.android.exoplayer2.analytics.AnalyticsListener
            public void onLoadCompleted(AnalyticsListener.EventTime eventTime, LoadEventInfo loadEventInfo, MediaLoadData mediaLoadData) {
                Intrinsics.checkNotNullParameter(eventTime, "eventTime");
                Intrinsics.checkNotNullParameter(loadEventInfo, "loadEventInfo");
                Intrinsics.checkNotNullParameter(mediaLoadData, "mediaLoadData");
                if (loadEventInfo.f12740d.isEmpty()) {
                    return;
                }
                DeviceResourceUsageRecorder.Companion companion = DeviceResourceUsageRecorder.Companion;
                companion.setMediaPlayerBytesReceived(companion.getMediaPlayerBytesReceived() + loadEventInfo.f12743g);
            }

            @Override // com.google.android.exoplayer2.analytics.AnalyticsListener
            public void onLoadError(AnalyticsListener.EventTime eventTime, LoadEventInfo loadEventInfo, MediaLoadData mediaLoadData, IOException error, boolean z10) {
                Intrinsics.checkNotNullParameter(eventTime, "eventTime");
                Intrinsics.checkNotNullParameter(loadEventInfo, "loadEventInfo");
                Intrinsics.checkNotNullParameter(mediaLoadData, "mediaLoadData");
                Intrinsics.checkNotNullParameter(error, "error");
                if (loadEventInfo.f12740d.isEmpty()) {
                    return;
                }
                DeviceResourceUsageRecorder.Companion companion = DeviceResourceUsageRecorder.Companion;
                companion.setMediaPlayerBytesReceived(companion.getMediaPlayerBytesReceived() + loadEventInfo.f12743g);
            }

            @Override // com.google.android.exoplayer2.analytics.AnalyticsListener
            public /* bridge */ /* synthetic */ void onLoadStarted(AnalyticsListener.EventTime eventTime, LoadEventInfo loadEventInfo, MediaLoadData mediaLoadData) {
                super.onLoadStarted(eventTime, loadEventInfo, mediaLoadData);
            }

            @Override // com.google.android.exoplayer2.analytics.AnalyticsListener
            @Deprecated
            public /* bridge */ /* synthetic */ void onLoadingChanged(AnalyticsListener.EventTime eventTime, boolean z10) {
                super.onLoadingChanged(eventTime, z10);
            }

            @Override // com.google.android.exoplayer2.analytics.AnalyticsListener
            public /* bridge */ /* synthetic */ void onMaxSeekToPreviousPositionChanged(AnalyticsListener.EventTime eventTime, long j10) {
                super.onMaxSeekToPreviousPositionChanged(eventTime, j10);
            }

            @Override // com.google.android.exoplayer2.analytics.AnalyticsListener
            public /* bridge */ /* synthetic */ void onMediaItemTransition(AnalyticsListener.EventTime eventTime, MediaItem mediaItem, int i10) {
                super.onMediaItemTransition(eventTime, mediaItem, i10);
            }

            @Override // com.google.android.exoplayer2.analytics.AnalyticsListener
            public /* bridge */ /* synthetic */ void onMediaMetadataChanged(AnalyticsListener.EventTime eventTime, MediaMetadata mediaMetadata) {
                super.onMediaMetadataChanged(eventTime, mediaMetadata);
            }

            @Override // com.google.android.exoplayer2.analytics.AnalyticsListener
            public /* bridge */ /* synthetic */ void onMetadata(AnalyticsListener.EventTime eventTime, com.google.android.exoplayer2.metadata.Metadata metadata) {
                super.onMetadata(eventTime, metadata);
            }

            @Override // com.google.android.exoplayer2.analytics.AnalyticsListener
            public /* bridge */ /* synthetic */ void onPlayWhenReadyChanged(AnalyticsListener.EventTime eventTime, boolean z10, int i10) {
                super.onPlayWhenReadyChanged(eventTime, z10, i10);
            }

            @Override // com.google.android.exoplayer2.analytics.AnalyticsListener
            public /* bridge */ /* synthetic */ void onPlaybackParametersChanged(AnalyticsListener.EventTime eventTime, PlaybackParameters playbackParameters) {
                super.onPlaybackParametersChanged(eventTime, playbackParameters);
            }

            @Override // com.google.android.exoplayer2.analytics.AnalyticsListener
            public /* bridge */ /* synthetic */ void onPlaybackStateChanged(AnalyticsListener.EventTime eventTime, int i10) {
                super.onPlaybackStateChanged(eventTime, i10);
            }

            @Override // com.google.android.exoplayer2.analytics.AnalyticsListener
            public /* bridge */ /* synthetic */ void onPlaybackSuppressionReasonChanged(AnalyticsListener.EventTime eventTime, int i10) {
                super.onPlaybackSuppressionReasonChanged(eventTime, i10);
            }

            @Override // com.google.android.exoplayer2.analytics.AnalyticsListener
            public /* bridge */ /* synthetic */ void onPlayerError(AnalyticsListener.EventTime eventTime, PlaybackException playbackException) {
                super.onPlayerError(eventTime, playbackException);
            }

            @Override // com.google.android.exoplayer2.analytics.AnalyticsListener
            public /* bridge */ /* synthetic */ void onPlayerErrorChanged(AnalyticsListener.EventTime eventTime, PlaybackException playbackException) {
                super.onPlayerErrorChanged(eventTime, playbackException);
            }

            @Override // com.google.android.exoplayer2.analytics.AnalyticsListener
            public /* bridge */ /* synthetic */ void onPlayerReleased(AnalyticsListener.EventTime eventTime) {
                super.onPlayerReleased(eventTime);
            }

            @Override // com.google.android.exoplayer2.analytics.AnalyticsListener
            @Deprecated
            public /* bridge */ /* synthetic */ void onPlayerStateChanged(AnalyticsListener.EventTime eventTime, boolean z10, int i10) {
                super.onPlayerStateChanged(eventTime, z10, i10);
            }

            @Override // com.google.android.exoplayer2.analytics.AnalyticsListener
            public /* bridge */ /* synthetic */ void onPlaylistMetadataChanged(AnalyticsListener.EventTime eventTime, MediaMetadata mediaMetadata) {
                super.onPlaylistMetadataChanged(eventTime, mediaMetadata);
            }

            @Override // com.google.android.exoplayer2.analytics.AnalyticsListener
            @Deprecated
            public /* bridge */ /* synthetic */ void onPositionDiscontinuity(AnalyticsListener.EventTime eventTime, int i10) {
                super.onPositionDiscontinuity(eventTime, i10);
            }

            @Override // com.google.android.exoplayer2.analytics.AnalyticsListener
            public /* bridge */ /* synthetic */ void onRenderedFirstFrame(AnalyticsListener.EventTime eventTime, Object obj, long j10) {
                super.onRenderedFirstFrame(eventTime, obj, j10);
            }

            @Override // com.google.android.exoplayer2.analytics.AnalyticsListener
            public /* bridge */ /* synthetic */ void onRepeatModeChanged(AnalyticsListener.EventTime eventTime, int i10) {
                super.onRepeatModeChanged(eventTime, i10);
            }

            @Override // com.google.android.exoplayer2.analytics.AnalyticsListener
            public /* bridge */ /* synthetic */ void onSeekBackIncrementChanged(AnalyticsListener.EventTime eventTime, long j10) {
                super.onSeekBackIncrementChanged(eventTime, j10);
            }

            @Override // com.google.android.exoplayer2.analytics.AnalyticsListener
            public /* bridge */ /* synthetic */ void onSeekForwardIncrementChanged(AnalyticsListener.EventTime eventTime, long j10) {
                super.onSeekForwardIncrementChanged(eventTime, j10);
            }

            @Override // com.google.android.exoplayer2.analytics.AnalyticsListener
            @Deprecated
            public /* bridge */ /* synthetic */ void onSeekStarted(AnalyticsListener.EventTime eventTime) {
                super.onSeekStarted(eventTime);
            }

            @Override // com.google.android.exoplayer2.analytics.AnalyticsListener
            public /* bridge */ /* synthetic */ void onShuffleModeChanged(AnalyticsListener.EventTime eventTime, boolean z10) {
                super.onShuffleModeChanged(eventTime, z10);
            }

            @Override // com.google.android.exoplayer2.analytics.AnalyticsListener
            public /* bridge */ /* synthetic */ void onSkipSilenceEnabledChanged(AnalyticsListener.EventTime eventTime, boolean z10) {
                super.onSkipSilenceEnabledChanged(eventTime, z10);
            }

            @Override // com.google.android.exoplayer2.analytics.AnalyticsListener
            public /* bridge */ /* synthetic */ void onSurfaceSizeChanged(AnalyticsListener.EventTime eventTime, int i10, int i11) {
                super.onSurfaceSizeChanged(eventTime, i10, i11);
            }

            @Override // com.google.android.exoplayer2.analytics.AnalyticsListener
            public /* bridge */ /* synthetic */ void onTimelineChanged(AnalyticsListener.EventTime eventTime, int i10) {
                super.onTimelineChanged(eventTime, i10);
            }

            @Override // com.google.android.exoplayer2.analytics.AnalyticsListener
            public /* bridge */ /* synthetic */ void onTrackSelectionParametersChanged(AnalyticsListener.EventTime eventTime, TrackSelectionParameters trackSelectionParameters) {
                super.onTrackSelectionParametersChanged(eventTime, trackSelectionParameters);
            }

            @Override // com.google.android.exoplayer2.analytics.AnalyticsListener
            public /* bridge */ /* synthetic */ void onTracksChanged(AnalyticsListener.EventTime eventTime, Tracks tracks) {
                super.onTracksChanged(eventTime, tracks);
            }

            @Override // com.google.android.exoplayer2.analytics.AnalyticsListener
            public /* bridge */ /* synthetic */ void onUpstreamDiscarded(AnalyticsListener.EventTime eventTime, MediaLoadData mediaLoadData) {
                super.onUpstreamDiscarded(eventTime, mediaLoadData);
            }

            @Override // com.google.android.exoplayer2.analytics.AnalyticsListener
            public /* bridge */ /* synthetic */ void onVideoCodecError(AnalyticsListener.EventTime eventTime, Exception exc) {
                super.onVideoCodecError(eventTime, exc);
            }

            @Override // com.google.android.exoplayer2.analytics.AnalyticsListener
            @Deprecated
            public /* bridge */ /* synthetic */ void onVideoDecoderInitialized(AnalyticsListener.EventTime eventTime, String str, long j10) {
                super.onVideoDecoderInitialized(eventTime, str, j10);
            }

            @Override // com.google.android.exoplayer2.analytics.AnalyticsListener
            public /* bridge */ /* synthetic */ void onVideoDecoderReleased(AnalyticsListener.EventTime eventTime, String str) {
                super.onVideoDecoderReleased(eventTime, str);
            }

            @Override // com.google.android.exoplayer2.analytics.AnalyticsListener
            public /* bridge */ /* synthetic */ void onVideoDisabled(AnalyticsListener.EventTime eventTime, DecoderCounters decoderCounters) {
                super.onVideoDisabled(eventTime, decoderCounters);
            }

            @Override // com.google.android.exoplayer2.analytics.AnalyticsListener
            public /* bridge */ /* synthetic */ void onVideoEnabled(AnalyticsListener.EventTime eventTime, DecoderCounters decoderCounters) {
                super.onVideoEnabled(eventTime, decoderCounters);
            }

            @Override // com.google.android.exoplayer2.analytics.AnalyticsListener
            public /* bridge */ /* synthetic */ void onVideoFrameProcessingOffset(AnalyticsListener.EventTime eventTime, long j10, int i10) {
                super.onVideoFrameProcessingOffset(eventTime, j10, i10);
            }

            @Override // com.google.android.exoplayer2.analytics.AnalyticsListener
            @Deprecated
            public /* bridge */ /* synthetic */ void onVideoInputFormatChanged(AnalyticsListener.EventTime eventTime, Format format) {
                super.onVideoInputFormatChanged(eventTime, format);
            }

            @Override // com.google.android.exoplayer2.analytics.AnalyticsListener
            @Deprecated
            public /* bridge */ /* synthetic */ void onVideoSizeChanged(AnalyticsListener.EventTime eventTime, int i10, int i11, int i12, float f10) {
                super.onVideoSizeChanged(eventTime, i10, i11, i12, f10);
            }

            @Override // com.google.android.exoplayer2.analytics.AnalyticsListener
            public /* bridge */ /* synthetic */ void onVolumeChanged(AnalyticsListener.EventTime eventTime, float f10) {
                super.onVolumeChanged(eventTime, f10);
            }

            @Override // com.google.android.exoplayer2.analytics.AnalyticsListener
            public /* bridge */ /* synthetic */ void onAudioDecoderInitialized(AnalyticsListener.EventTime eventTime, String str, long j10, long j11) {
                super.onAudioDecoderInitialized(eventTime, str, j10, j11);
            }

            @Override // com.google.android.exoplayer2.analytics.AnalyticsListener
            public /* bridge */ /* synthetic */ void onAudioInputFormatChanged(AnalyticsListener.EventTime eventTime, Format format, DecoderReuseEvaluation decoderReuseEvaluation) {
                super.onAudioInputFormatChanged(eventTime, format, decoderReuseEvaluation);
            }

            @Override // com.google.android.exoplayer2.analytics.AnalyticsListener
            @Deprecated
            public /* bridge */ /* synthetic */ void onCues(AnalyticsListener.EventTime eventTime, List list) {
                super.onCues(eventTime, list);
            }

            @Override // com.google.android.exoplayer2.analytics.AnalyticsListener
            public /* bridge */ /* synthetic */ void onDrmSessionAcquired(AnalyticsListener.EventTime eventTime, int i10) {
                super.onDrmSessionAcquired(eventTime, i10);
            }

            @Override // com.google.android.exoplayer2.analytics.AnalyticsListener
            public /* bridge */ /* synthetic */ void onPositionDiscontinuity(AnalyticsListener.EventTime eventTime, Player.PositionInfo positionInfo, Player.PositionInfo positionInfo2, int i10) {
                super.onPositionDiscontinuity(eventTime, positionInfo, positionInfo2, i10);
            }

            @Override // com.google.android.exoplayer2.analytics.AnalyticsListener
            public /* bridge */ /* synthetic */ void onVideoDecoderInitialized(AnalyticsListener.EventTime eventTime, String str, long j10, long j11) {
                super.onVideoDecoderInitialized(eventTime, str, j10, j11);
            }

            @Override // com.google.android.exoplayer2.analytics.AnalyticsListener
            public /* bridge */ /* synthetic */ void onVideoInputFormatChanged(AnalyticsListener.EventTime eventTime, Format format, DecoderReuseEvaluation decoderReuseEvaluation) {
                super.onVideoInputFormatChanged(eventTime, format, decoderReuseEvaluation);
            }

            @Override // com.google.android.exoplayer2.analytics.AnalyticsListener
            public /* bridge */ /* synthetic */ void onVideoSizeChanged(AnalyticsListener.EventTime eventTime, VideoSize videoSize) {
                super.onVideoSizeChanged(eventTime, videoSize);
            }
        });
    }

    public static final void _init_$lambda$3(MediaPlayer mediaPlayer, AnalyticsListener.EventTime eventTime, PlaybackStats playbackStats) {
        Uri uri;
        Intrinsics.checkNotNullParameter(eventTime, "eventTime");
        Intrinsics.checkNotNullParameter(playbackStats, "playbackStats");
        if (playbackStats.b() == 0) {
            return;
        }
        Timeline.d dVar = new Timeline.d();
        eventTime.f12026b.r(eventTime.f12027c, dVar);
        long c10 = oi.g.c(dVar.f(), mediaPlayer.exoPlayer.getDuration(), mediaPlayer.exoPlayer.d0());
        Function1<? super MediaPlayFinishedAnalytics, Unit> function1 = mediaPlayer.analyticsListener;
        long b10 = playbackStats.b();
        long c11 = playbackStats.c();
        int i10 = playbackStats.f12050n;
        int i11 = playbackStats.f12049m;
        long j10 = playbackStats.f12045i;
        MediaItem.h hVar = dVar.f11989i.f11727i;
        String str = null;
        if (hVar != null) {
            uri = hVar.f11816d;
        } else {
            uri = null;
        }
        String valueOf = String.valueOf(uri);
        float f10 = ((float) c10) / 1000.0f;
        MediaItem.h hVar2 = dVar.f11989i.f11727i;
        if (hVar2 != null) {
            str = hVar2.f11817e;
        }
        function1.invoke(new MediaPlayFinishedAnalytics(b10, c11, i10, i11, j10, valueOf, f10, str, playbackStats.J, playbackStats.K, playbackStats.G, playbackStats.F));
    }

    public static final Unit analyticsListener$lambda$2(MediaPlayFinishedAnalytics it) {
        Intrinsics.checkNotNullParameter(it, "it");
        return Unit.f31988a;
    }

    public final void configureDefaultAudioTrackOverride(DefaultTrackSelector defaultTrackSelector) {
        MappingTrackSelector.MappedTrackInfo m10 = defaultTrackSelector.m();
        if (m10 != null) {
            int d10 = m10.d();
            for (int i10 = 0; i10 < d10 && !findAndConfigureAudioRenderer(defaultTrackSelector, m10, i10); i10++) {
            }
        }
    }

    private final void configureMultiAudioTrackSelection() {
        final DefaultTrackSelector defaultTrackSelector;
        q x02 = this.exoPlayer.x0();
        if (x02 instanceof DefaultTrackSelector) {
            defaultTrackSelector = (DefaultTrackSelector) x02;
        } else {
            defaultTrackSelector = null;
        }
        if (defaultTrackSelector == null) {
            return;
        }
        this.exoPlayer.L(new Player.b() { // from class: com.discord.media_player.MediaPlayer$configureMultiAudioTrackSelection$listener$1
            @Override // com.google.android.exoplayer2.Player.b
            public /* bridge */ /* synthetic */ void onAudioAttributesChanged(AudioAttributes audioAttributes) {
                super.onAudioAttributesChanged(audioAttributes);
            }

            @Override // com.google.android.exoplayer2.Player.b
            public /* bridge */ /* synthetic */ void onAudioSessionIdChanged(int i10) {
                super.onAudioSessionIdChanged(i10);
            }

            @Override // com.google.android.exoplayer2.Player.b
            public /* bridge */ /* synthetic */ void onAvailableCommandsChanged(Player.Commands commands) {
                super.onAvailableCommandsChanged(commands);
            }

            @Override // com.google.android.exoplayer2.Player.b, zd.m
            public /* bridge */ /* synthetic */ void onCues(CueGroup cueGroup) {
                super.onCues(cueGroup);
            }

            @Override // com.google.android.exoplayer2.Player.b
            public /* bridge */ /* synthetic */ void onDeviceInfoChanged(DeviceInfo deviceInfo) {
                super.onDeviceInfoChanged(deviceInfo);
            }

            @Override // com.google.android.exoplayer2.Player.b
            public /* bridge */ /* synthetic */ void onDeviceVolumeChanged(int i10, boolean z10) {
                super.onDeviceVolumeChanged(i10, z10);
            }

            @Override // com.google.android.exoplayer2.Player.b
            public /* bridge */ /* synthetic */ void onEvents(Player player, Player.Events events) {
                super.onEvents(player, events);
            }

            @Override // com.google.android.exoplayer2.Player.b
            public /* bridge */ /* synthetic */ void onIsLoadingChanged(boolean z10) {
                super.onIsLoadingChanged(z10);
            }

            @Override // com.google.android.exoplayer2.Player.b
            public /* bridge */ /* synthetic */ void onIsPlayingChanged(boolean z10) {
                super.onIsPlayingChanged(z10);
            }

            @Override // com.google.android.exoplayer2.Player.b
            @Deprecated
            public /* bridge */ /* synthetic */ void onLoadingChanged(boolean z10) {
                super.onLoadingChanged(z10);
            }

            @Override // com.google.android.exoplayer2.Player.b
            public /* bridge */ /* synthetic */ void onMaxSeekToPreviousPositionChanged(long j10) {
                super.onMaxSeekToPreviousPositionChanged(j10);
            }

            @Override // com.google.android.exoplayer2.Player.b
            public /* bridge */ /* synthetic */ void onMediaItemTransition(MediaItem mediaItem, int i10) {
                super.onMediaItemTransition(mediaItem, i10);
            }

            @Override // com.google.android.exoplayer2.Player.b
            public /* bridge */ /* synthetic */ void onMediaMetadataChanged(MediaMetadata mediaMetadata) {
                super.onMediaMetadataChanged(mediaMetadata);
            }

            @Override // com.google.android.exoplayer2.Player.b, gd.d
            public /* bridge */ /* synthetic */ void onMetadata(com.google.android.exoplayer2.metadata.Metadata metadata) {
                super.onMetadata(metadata);
            }

            @Override // com.google.android.exoplayer2.Player.b
            public /* bridge */ /* synthetic */ void onPlayWhenReadyChanged(boolean z10, int i10) {
                super.onPlayWhenReadyChanged(z10, i10);
            }

            @Override // com.google.android.exoplayer2.Player.b
            public /* bridge */ /* synthetic */ void onPlaybackParametersChanged(PlaybackParameters playbackParameters) {
                super.onPlaybackParametersChanged(playbackParameters);
            }

            @Override // com.google.android.exoplayer2.Player.b
            public /* bridge */ /* synthetic */ void onPlaybackStateChanged(int i10) {
                super.onPlaybackStateChanged(i10);
            }

            @Override // com.google.android.exoplayer2.Player.b
            public /* bridge */ /* synthetic */ void onPlaybackSuppressionReasonChanged(int i10) {
                super.onPlaybackSuppressionReasonChanged(i10);
            }

            @Override // com.google.android.exoplayer2.Player.b
            public /* bridge */ /* synthetic */ void onPlayerError(PlaybackException playbackException) {
                super.onPlayerError(playbackException);
            }

            @Override // com.google.android.exoplayer2.Player.b
            public /* bridge */ /* synthetic */ void onPlayerErrorChanged(PlaybackException playbackException) {
                super.onPlayerErrorChanged(playbackException);
            }

            @Override // com.google.android.exoplayer2.Player.b
            @Deprecated
            public /* bridge */ /* synthetic */ void onPlayerStateChanged(boolean z10, int i10) {
                super.onPlayerStateChanged(z10, i10);
            }

            @Override // com.google.android.exoplayer2.Player.b
            public /* bridge */ /* synthetic */ void onPlaylistMetadataChanged(MediaMetadata mediaMetadata) {
                super.onPlaylistMetadataChanged(mediaMetadata);
            }

            @Override // com.google.android.exoplayer2.Player.b
            @Deprecated
            public /* bridge */ /* synthetic */ void onPositionDiscontinuity(int i10) {
                super.onPositionDiscontinuity(i10);
            }

            @Override // com.google.android.exoplayer2.Player.b
            public /* bridge */ /* synthetic */ void onRenderedFirstFrame() {
                super.onRenderedFirstFrame();
            }

            @Override // com.google.android.exoplayer2.Player.b
            public /* bridge */ /* synthetic */ void onRepeatModeChanged(int i10) {
                super.onRepeatModeChanged(i10);
            }

            @Override // com.google.android.exoplayer2.Player.b
            public /* bridge */ /* synthetic */ void onSeekBackIncrementChanged(long j10) {
                super.onSeekBackIncrementChanged(j10);
            }

            @Override // com.google.android.exoplayer2.Player.b
            public /* bridge */ /* synthetic */ void onSeekForwardIncrementChanged(long j10) {
                super.onSeekForwardIncrementChanged(j10);
            }

            @Override // com.google.android.exoplayer2.Player.b
            public /* bridge */ /* synthetic */ void onShuffleModeEnabledChanged(boolean z10) {
                super.onShuffleModeEnabledChanged(z10);
            }

            @Override // com.google.android.exoplayer2.Player.b
            public /* bridge */ /* synthetic */ void onSkipSilenceEnabledChanged(boolean z10) {
                super.onSkipSilenceEnabledChanged(z10);
            }

            @Override // com.google.android.exoplayer2.Player.b
            public /* bridge */ /* synthetic */ void onSurfaceSizeChanged(int i10, int i11) {
                super.onSurfaceSizeChanged(i10, i11);
            }

            @Override // com.google.android.exoplayer2.Player.b
            public /* bridge */ /* synthetic */ void onTimelineChanged(Timeline timeline, int i10) {
                super.onTimelineChanged(timeline, i10);
            }

            @Override // com.google.android.exoplayer2.Player.b
            public /* bridge */ /* synthetic */ void onTrackSelectionParametersChanged(TrackSelectionParameters trackSelectionParameters) {
                super.onTrackSelectionParametersChanged(trackSelectionParameters);
            }

            @Override // com.google.android.exoplayer2.Player.b
            public void onTracksChanged(Tracks tracks) {
                String str;
                Intrinsics.checkNotNullParameter(tracks, "tracks");
                s b10 = tracks.b();
                Intrinsics.checkNotNullExpressionValue(b10, "getGroups(...)");
                ArrayList<Tracks.a> arrayList = new ArrayList();
                for (Object obj : b10) {
                    if (((Tracks.a) obj).d() == 1) {
                        arrayList.add(obj);
                    }
                }
                int i10 = 0;
                for (Tracks.a aVar : arrayList) {
                    i10 += aVar.f12011d;
                }
                if (i10 > 1) {
                    try {
                        MediaPlayer.this.configureDefaultAudioTrackOverride(defaultTrackSelector);
                    } catch (Exception e10) {
                        Log log = Log.INSTANCE;
                        MediaSource mediaSource = MediaPlayer.this.getMediaSource();
                        if (mediaSource != null) {
                            str = mediaSource.getFeatureTag();
                        } else {
                            str = null;
                        }
                        log.e("MediaPlayer", "Failed to configure multi-audio track selection for feature: " + str, e10);
                    }
                    MediaPlayer.this.exoPlayer.h(this);
                    return;
                }
                MediaPlayer.this.exoPlayer.h(this);
            }

            @Override // com.google.android.exoplayer2.Player.b
            public /* bridge */ /* synthetic */ void onVideoSizeChanged(VideoSize videoSize) {
                super.onVideoSizeChanged(videoSize);
            }

            @Override // com.google.android.exoplayer2.Player.b
            public /* bridge */ /* synthetic */ void onVolumeChanged(float f10) {
                super.onVolumeChanged(f10);
            }

            @Override // com.google.android.exoplayer2.Player.b, zd.m
            @Deprecated
            public /* bridge */ /* synthetic */ void onCues(List list) {
                super.onCues(list);
            }

            @Override // com.google.android.exoplayer2.Player.b
            public /* bridge */ /* synthetic */ void onPositionDiscontinuity(Player.PositionInfo positionInfo, Player.PositionInfo positionInfo2, int i10) {
                super.onPositionDiscontinuity(positionInfo, positionInfo2, i10);
            }
        });
    }

    public static final Unit eventListener$lambda$0(Event it) {
        Intrinsics.checkNotNullParameter(it, "it");
        return Unit.f31988a;
    }

    private final boolean findAndConfigureAudioRenderer(DefaultTrackSelector defaultTrackSelector, MappingTrackSelector.MappedTrackInfo mappedTrackInfo, int i10) {
        if (mappedTrackInfo.e(i10) != 1) {
            return false;
        }
        w0 f10 = mappedTrackInfo.f(i10);
        Intrinsics.checkNotNullExpressionValue(f10, "getTrackGroups(...)");
        int i11 = f10.f47844d;
        if (i11 > 1 && i11 != 0 && f10.b(0).f47828d != 0) {
            DefaultTrackSelector.d.a E = defaultTrackSelector.E();
            Intrinsics.checkNotNullExpressionValue(E, "buildUponParameters(...)");
            E.s0(false);
            E.w0(i10, f10, new DefaultTrackSelector.e(0, 0));
            defaultTrackSelector.b0(E.A());
        }
        return true;
    }

    public static /* synthetic */ void preparePlayer$default(MediaPlayer mediaPlayer, MediaSource mediaSource, boolean z10, boolean z11, long j10, MediaPlayerView mediaPlayerView, MediaPlayerView.ControlView controlView, int i10, Object obj) {
        if ((i10 & 2) != 0) {
            z10 = false;
        }
        if ((i10 & 4) != 0) {
            z11 = false;
        }
        if ((i10 & 8) != 0) {
            j10 = 0;
        }
        if ((i10 & 16) != 0) {
            mediaPlayerView = null;
        }
        if ((i10 & 32) != 0) {
            controlView = null;
        }
        mediaPlayer.preparePlayer(mediaSource, z10, z11, j10, mediaPlayerView, controlView);
    }

    public final synchronized void setEvent(Event event) {
        MediaPlayerManager.INSTANCE.mediaPlayerEventHandler$media_player_release(event, this);
        this.eventListener.invoke(event);
    }

    public static final Unit volumeListener$lambda$1(float f10) {
        return Unit.f31988a;
    }

    public final float bufferedPercentage() {
        return this.exoPlayer.c0() / 100.0f;
    }

    public final long bufferedPositionMs() {
        return this.exoPlayer.M();
    }

    public final long currentPositionMs() {
        return this.exoPlayer.Z();
    }

    public final float currentPositionPercentage() {
        return ((float) currentPositionMs()) / ((float) durationMs());
    }

    public final long durationMs() {
        return this.exoPlayer.getDuration();
    }

    @NotNull
    public final Function1<MediaPlayFinishedAnalytics, Unit> getAnalyticsListener() {
        return this.analyticsListener;
    }

    @NotNull
    public final Function1<Event, Unit> getEventListener() {
        return this.eventListener;
    }

    public final MediaSource getMediaSource() {
        return this.mediaSource;
    }

    @NotNull
    public final Function1<Float, Unit> getVolumeListener() {
        return this.volumeListener;
    }

    public final boolean hasDifferentSettings(@NotNull PlayerSettings newSettings) {
        Intrinsics.checkNotNullParameter(newSettings, "newSettings");
        return !Intrinsics.areEqual(this.currentSettings, newSettings);
    }

    public final boolean hasEnded() {
        if (this.exoPlayer.O() == 4) {
            return true;
        }
        return false;
    }

    public final boolean hasError() {
        if (this.exoPlayer.m() != null) {
            return true;
        }
        return false;
    }

    public final boolean isBuffering() {
        if (this.exoPlayer.O() == 2) {
            return true;
        }
        return false;
    }

    public final boolean isMuted() {
        if (this.exoPlayer.z0() == 0.0f) {
            return true;
        }
        return false;
    }

    public final boolean isPlaying() {
        return this.exoPlayer.P();
    }

    public final void pause() {
        this.exoPlayer.n(false);
    }

    public final void play() {
        this.exoPlayer.n(true);
    }

    public final void playOrReset() {
        if (Math.abs(currentPositionMs() - durationMs()) < 0.1d) {
            seekTo(0L);
        }
        play();
    }

    public final void preparePlayer(@NotNull MediaSource mediaSource, boolean z10, boolean z11, long j10, MediaPlayerView mediaPlayerView, MediaPlayerView.ControlView controlView) {
        DefaultTrackSelector defaultTrackSelector;
        Intrinsics.checkNotNullParameter(mediaSource, "mediaSource");
        this.mediaSource = mediaSource;
        if (mediaSource.getSourceUrl() != null) {
            q x02 = this.exoPlayer.x0();
            if (x02 instanceof DefaultTrackSelector) {
                defaultTrackSelector = (DefaultTrackSelector) x02;
            } else {
                defaultTrackSelector = null;
            }
            if (defaultTrackSelector != null) {
                defaultTrackSelector.b0(DefaultTrackSelector.d.F0);
            }
            this.exoPlayer.E0(1);
            h0 b10 = new h0.b(this.dataSourceFactory).b(MediaItem.c(mediaSource.getSourceUrl()));
            Intrinsics.checkNotNullExpressionValue(b10, "createMediaSource(...)");
            SimpleExoPlayer simpleExoPlayer = this.exoPlayer;
            simpleExoPlayer.C0(b10);
            if (j10 >= 0) {
                simpleExoPlayer.l0(j10);
            }
            simpleExoPlayer.R(z11 ? 1 : 0);
            simpleExoPlayer.d();
            configureMultiAudioTrackSelection();
            if (mediaPlayerView != null) {
                mediaPlayerView.assignViewToPlayer(this.exoPlayer);
            }
            if (mediaPlayerView != null) {
                mediaPlayerView.setPlayer$media_player_release(this.exoPlayer);
            }
            if (controlView != null) {
                controlView.setPlayer$media_player_release(this.exoPlayer);
            }
            if (z10) {
                play();
            }
        }
    }

    public final void reattachSurface(@NotNull MediaPlayerView mediaPlayerView) {
        Intrinsics.checkNotNullParameter(mediaPlayerView, "mediaPlayerView");
        mediaPlayerView.assignViewToPlayer(this.exoPlayer);
    }

    public final void release() {
        this.exoPlayer.B0();
    }

    public final void reset() {
        DefaultTrackSelector defaultTrackSelector;
        String sourceUrl;
        q x02 = this.exoPlayer.x0();
        if (x02 instanceof DefaultTrackSelector) {
            defaultTrackSelector = (DefaultTrackSelector) x02;
        } else {
            defaultTrackSelector = null;
        }
        if (defaultTrackSelector != null) {
            defaultTrackSelector.b0(DefaultTrackSelector.d.F0);
        }
        MediaSource mediaSource = this.mediaSource;
        if (mediaSource != null && (sourceUrl = mediaSource.getSourceUrl()) != null) {
            h0 b10 = new h0.b(this.dataSourceFactory).b(MediaItem.c(sourceUrl));
            Intrinsics.checkNotNullExpressionValue(b10, "createMediaSource(...)");
            this.exoPlayer.C0(b10);
        }
        seekTo(0L);
        this.exoPlayer.n(false);
    }

    public final void seekTo(long j10) {
        try {
            this.exoPlayer.l0(j10);
        } catch (IllegalArgumentException e10) {
            Log log = Log.INSTANCE;
            String simpleName = MediaPlayer.class.getSimpleName();
            Intrinsics.checkNotNullExpressionValue(simpleName, "getSimpleName(...)");
            log.e(simpleName, "Invalid seek position: " + j10, e10);
        }
    }

    public final void setAnalyticsListener(@NotNull Function1<? super MediaPlayFinishedAnalytics, Unit> function1) {
        Intrinsics.checkNotNullParameter(function1, "<set-?>");
        this.analyticsListener = function1;
    }

    public final void setEventListener(@NotNull Function1<? super Event, Unit> function1) {
        Intrinsics.checkNotNullParameter(function1, "<set-?>");
        this.eventListener = function1;
    }

    public final void setMediaSource(MediaSource mediaSource) {
        this.mediaSource = mediaSource;
    }

    public final void setVolume(float f10) {
        this.exoPlayer.F0(f10);
        this.volumeListener.invoke(Float.valueOf(f10));
    }

    public final void setVolumeListener(@NotNull Function1<? super Float, Unit> function1) {
        Intrinsics.checkNotNullParameter(function1, "<set-?>");
        this.volumeListener = function1;
    }

    public final boolean shouldPlay() {
        return this.exoPlayer.B();
    }
}
