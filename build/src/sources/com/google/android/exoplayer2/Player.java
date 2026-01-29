package com.google.android.exoplayer2;

import android.os.Bundle;
import android.os.Looper;
import android.view.SurfaceView;
import android.view.TextureView;
import com.google.android.exoplayer2.Player;
import com.google.android.exoplayer2.audio.AudioAttributes;
import com.google.android.exoplayer2.g;
import com.google.android.exoplayer2.metadata.Metadata;
import com.google.android.exoplayer2.text.CueGroup;
import com.google.android.exoplayer2.trackselection.TrackSelectionParameters;
import com.google.android.exoplayer2.video.VideoSize;
import java.util.ArrayList;
import java.util.List;
import ne.q;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public interface Player {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class Commands implements g {

        /* renamed from: e  reason: collision with root package name */
        public static final Commands f12958e = new a().e();

        /* renamed from: i  reason: collision with root package name */
        private static final String f12959i = ne.w0.B0(0);

        /* renamed from: o  reason: collision with root package name */
        public static final g.a f12960o = new g.a() { // from class: lc.o0
            @Override // com.google.android.exoplayer2.g.a
            public final com.google.android.exoplayer2.g a(Bundle bundle) {
                Player.Commands d10;
                d10 = Player.Commands.d(bundle);
                return d10;
            }
        };

        /* renamed from: d  reason: collision with root package name */
        private final ne.q f12961d;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        public static final class a {

            /* renamed from: b  reason: collision with root package name */
            private static final int[] f12962b = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 31, 20, 21, 22, 23, 24, 25, 33, 26, 34, 27, 28, 29, 30, 32};

            /* renamed from: a  reason: collision with root package name */
            private final q.b f12963a = new q.b();

            public a a(int i10) {
                this.f12963a.a(i10);
                return this;
            }

            public a b(Commands commands) {
                this.f12963a.b(commands.f12961d);
                return this;
            }

            public a c(int... iArr) {
                this.f12963a.c(iArr);
                return this;
            }

            public a d(int i10, boolean z10) {
                this.f12963a.d(i10, z10);
                return this;
            }

            public Commands e() {
                return new Commands(this.f12963a.e());
            }
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static Commands d(Bundle bundle) {
            ArrayList<Integer> integerArrayList = bundle.getIntegerArrayList(f12959i);
            if (integerArrayList == null) {
                return f12958e;
            }
            a aVar = new a();
            for (int i10 = 0; i10 < integerArrayList.size(); i10++) {
                aVar.a(integerArrayList.get(i10).intValue());
            }
            return aVar.e();
        }

        public boolean c(int i10) {
            return this.f12961d.a(i10);
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof Commands)) {
                return false;
            }
            return this.f12961d.equals(((Commands) obj).f12961d);
        }

        public int hashCode() {
            return this.f12961d.hashCode();
        }

        private Commands(ne.q qVar) {
            this.f12961d = qVar;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class Events {

        /* renamed from: a  reason: collision with root package name */
        private final ne.q f12964a;

        public Events(ne.q qVar) {
            this.f12964a = qVar;
        }

        public boolean a(int i10) {
            return this.f12964a.a(i10);
        }

        public boolean b(int... iArr) {
            return this.f12964a.b(iArr);
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof Events)) {
                return false;
            }
            return this.f12964a.equals(((Events) obj).f12964a);
        }

        public int hashCode() {
            return this.f12964a.hashCode();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class PositionInfo implements g {

        /* renamed from: d  reason: collision with root package name */
        public final Object f12970d;

        /* renamed from: e  reason: collision with root package name */
        public final int f12971e;

        /* renamed from: i  reason: collision with root package name */
        public final int f12972i;

        /* renamed from: o  reason: collision with root package name */
        public final MediaItem f12973o;

        /* renamed from: p  reason: collision with root package name */
        public final Object f12974p;

        /* renamed from: q  reason: collision with root package name */
        public final int f12975q;

        /* renamed from: r  reason: collision with root package name */
        public final long f12976r;

        /* renamed from: s  reason: collision with root package name */
        public final long f12977s;

        /* renamed from: t  reason: collision with root package name */
        public final int f12978t;

        /* renamed from: u  reason: collision with root package name */
        public final int f12979u;

        /* renamed from: v  reason: collision with root package name */
        private static final String f12965v = ne.w0.B0(0);

        /* renamed from: w  reason: collision with root package name */
        private static final String f12966w = ne.w0.B0(1);

        /* renamed from: x  reason: collision with root package name */
        private static final String f12967x = ne.w0.B0(2);

        /* renamed from: y  reason: collision with root package name */
        private static final String f12968y = ne.w0.B0(3);

        /* renamed from: z  reason: collision with root package name */
        private static final String f12969z = ne.w0.B0(4);
        private static final String A = ne.w0.B0(5);
        private static final String B = ne.w0.B0(6);
        public static final g.a C = new g.a() { // from class: lc.p0
            @Override // com.google.android.exoplayer2.g.a
            public final com.google.android.exoplayer2.g a(Bundle bundle) {
                Player.PositionInfo b10;
                b10 = Player.PositionInfo.b(bundle);
                return b10;
            }
        };

        public PositionInfo(Object obj, int i10, MediaItem mediaItem, Object obj2, int i11, long j10, long j11, int i12, int i13) {
            this.f12970d = obj;
            this.f12971e = i10;
            this.f12972i = i10;
            this.f12973o = mediaItem;
            this.f12974p = obj2;
            this.f12975q = i11;
            this.f12976r = j10;
            this.f12977s = j11;
            this.f12978t = i12;
            this.f12979u = i13;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static PositionInfo b(Bundle bundle) {
            MediaItem mediaItem;
            int i10 = bundle.getInt(f12965v, 0);
            Bundle bundle2 = bundle.getBundle(f12966w);
            if (bundle2 == null) {
                mediaItem = null;
            } else {
                mediaItem = (MediaItem) MediaItem.A.a(bundle2);
            }
            return new PositionInfo(null, i10, mediaItem, null, bundle.getInt(f12967x, 0), bundle.getLong(f12968y, 0L), bundle.getLong(f12969z, 0L), bundle.getInt(A, -1), bundle.getInt(B, -1));
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj != null && PositionInfo.class == obj.getClass()) {
                PositionInfo positionInfo = (PositionInfo) obj;
                if (this.f12972i == positionInfo.f12972i && this.f12975q == positionInfo.f12975q && this.f12976r == positionInfo.f12976r && this.f12977s == positionInfo.f12977s && this.f12978t == positionInfo.f12978t && this.f12979u == positionInfo.f12979u && ii.j.a(this.f12970d, positionInfo.f12970d) && ii.j.a(this.f12974p, positionInfo.f12974p) && ii.j.a(this.f12973o, positionInfo.f12973o)) {
                    return true;
                }
            }
            return false;
        }

        public int hashCode() {
            return ii.j.b(this.f12970d, Integer.valueOf(this.f12972i), this.f12973o, this.f12974p, Integer.valueOf(this.f12975q), Long.valueOf(this.f12976r), Long.valueOf(this.f12977s), Integer.valueOf(this.f12978t), Integer.valueOf(this.f12979u));
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface b {
        default void onAudioAttributesChanged(AudioAttributes audioAttributes) {
        }

        default void onAudioSessionIdChanged(int i10) {
        }

        default void onAvailableCommandsChanged(Commands commands) {
        }

        default void onCues(CueGroup cueGroup) {
        }

        default void onDeviceInfoChanged(DeviceInfo deviceInfo) {
        }

        default void onDeviceVolumeChanged(int i10, boolean z10) {
        }

        default void onEvents(Player player, Events events) {
        }

        default void onIsLoadingChanged(boolean z10) {
        }

        default void onIsPlayingChanged(boolean z10) {
        }

        default void onLoadingChanged(boolean z10) {
        }

        default void onMaxSeekToPreviousPositionChanged(long j10) {
        }

        default void onMediaItemTransition(MediaItem mediaItem, int i10) {
        }

        default void onMediaMetadataChanged(MediaMetadata mediaMetadata) {
        }

        default void onMetadata(Metadata metadata) {
        }

        default void onPlayWhenReadyChanged(boolean z10, int i10) {
        }

        default void onPlaybackParametersChanged(PlaybackParameters playbackParameters) {
        }

        default void onPlaybackStateChanged(int i10) {
        }

        default void onPlaybackSuppressionReasonChanged(int i10) {
        }

        default void onPlayerError(PlaybackException playbackException) {
        }

        default void onPlayerErrorChanged(PlaybackException playbackException) {
        }

        default void onPlayerStateChanged(boolean z10, int i10) {
        }

        default void onPlaylistMetadataChanged(MediaMetadata mediaMetadata) {
        }

        default void onPositionDiscontinuity(int i10) {
        }

        default void onRenderedFirstFrame() {
        }

        default void onRepeatModeChanged(int i10) {
        }

        default void onSeekBackIncrementChanged(long j10) {
        }

        default void onSeekForwardIncrementChanged(long j10) {
        }

        default void onShuffleModeEnabledChanged(boolean z10) {
        }

        default void onSkipSilenceEnabledChanged(boolean z10) {
        }

        default void onSurfaceSizeChanged(int i10, int i11) {
        }

        default void onTimelineChanged(Timeline timeline, int i10) {
        }

        default void onTrackSelectionParametersChanged(TrackSelectionParameters trackSelectionParameters) {
        }

        default void onTracksChanged(Tracks tracks) {
        }

        default void onVideoSizeChanged(VideoSize videoSize) {
        }

        default void onVolumeChanged(float f10) {
        }

        default void onCues(List list) {
        }

        default void onPositionDiscontinuity(PositionInfo positionInfo, PositionInfo positionInfo2, int i10) {
        }
    }

    Commands A();

    boolean B();

    void C(boolean z10);

    long D();

    int E();

    void F(TextureView textureView);

    VideoSize G();

    boolean H();

    int I();

    long J();

    long K();

    void L(b bVar);

    long M();

    boolean N();

    int O();

    boolean P();

    int Q();

    void R(int i10);

    void S(SurfaceView surfaceView);

    int T();

    boolean U();

    long V();

    void W();

    void X();

    MediaMetadata Y();

    long Z();

    long a0();

    void b();

    boolean b0();

    PlaybackParameters c();

    void d();

    void e();

    boolean f();

    long g();

    long getDuration();

    void h(b bVar);

    void i();

    void j(SurfaceView surfaceView);

    void k(int i10, int i11);

    void l();

    PlaybackException m();

    void n(boolean z10);

    Tracks o();

    boolean p();

    CueGroup q();

    int r();

    boolean s(int i10);

    boolean t();

    int u();

    Timeline v();

    Looper w();

    void x();

    void y(TextureView textureView);

    void z(int i10, long j10);
}
