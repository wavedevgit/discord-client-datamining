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
import oe.q;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public interface Player {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class Commands implements g {

        /* renamed from: e  reason: collision with root package name */
        public static final Commands f11979e = new a().e();

        /* renamed from: i  reason: collision with root package name */
        private static final String f11980i = oe.w0.B0(0);

        /* renamed from: o  reason: collision with root package name */
        public static final g.a f11981o = new g.a() { // from class: mc.o0
            @Override // com.google.android.exoplayer2.g.a
            public final com.google.android.exoplayer2.g a(Bundle bundle) {
                Player.Commands d10;
                d10 = Player.Commands.d(bundle);
                return d10;
            }
        };

        /* renamed from: d  reason: collision with root package name */
        private final oe.q f11982d;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        public static final class a {

            /* renamed from: b  reason: collision with root package name */
            private static final int[] f11983b = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 31, 20, 21, 22, 23, 24, 25, 33, 26, 34, 27, 28, 29, 30, 32};

            /* renamed from: a  reason: collision with root package name */
            private final q.b f11984a = new q.b();

            public a a(int i10) {
                this.f11984a.a(i10);
                return this;
            }

            public a b(Commands commands) {
                this.f11984a.b(commands.f11982d);
                return this;
            }

            public a c(int... iArr) {
                this.f11984a.c(iArr);
                return this;
            }

            public a d(int i10, boolean z10) {
                this.f11984a.d(i10, z10);
                return this;
            }

            public Commands e() {
                return new Commands(this.f11984a.e());
            }
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static Commands d(Bundle bundle) {
            ArrayList<Integer> integerArrayList = bundle.getIntegerArrayList(f11980i);
            if (integerArrayList == null) {
                return f11979e;
            }
            a aVar = new a();
            for (int i10 = 0; i10 < integerArrayList.size(); i10++) {
                aVar.a(integerArrayList.get(i10).intValue());
            }
            return aVar.e();
        }

        public boolean c(int i10) {
            return this.f11982d.a(i10);
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof Commands)) {
                return false;
            }
            return this.f11982d.equals(((Commands) obj).f11982d);
        }

        public int hashCode() {
            return this.f11982d.hashCode();
        }

        private Commands(oe.q qVar) {
            this.f11982d = qVar;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class Events {

        /* renamed from: a  reason: collision with root package name */
        private final oe.q f11985a;

        public Events(oe.q qVar) {
            this.f11985a = qVar;
        }

        public boolean a(int i10) {
            return this.f11985a.a(i10);
        }

        public boolean b(int... iArr) {
            return this.f11985a.b(iArr);
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof Events)) {
                return false;
            }
            return this.f11985a.equals(((Events) obj).f11985a);
        }

        public int hashCode() {
            return this.f11985a.hashCode();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class PositionInfo implements g {

        /* renamed from: d  reason: collision with root package name */
        public final Object f11991d;

        /* renamed from: e  reason: collision with root package name */
        public final int f11992e;

        /* renamed from: i  reason: collision with root package name */
        public final int f11993i;

        /* renamed from: o  reason: collision with root package name */
        public final MediaItem f11994o;

        /* renamed from: p  reason: collision with root package name */
        public final Object f11995p;

        /* renamed from: q  reason: collision with root package name */
        public final int f11996q;

        /* renamed from: r  reason: collision with root package name */
        public final long f11997r;

        /* renamed from: s  reason: collision with root package name */
        public final long f11998s;

        /* renamed from: t  reason: collision with root package name */
        public final int f11999t;

        /* renamed from: u  reason: collision with root package name */
        public final int f12000u;

        /* renamed from: v  reason: collision with root package name */
        private static final String f11986v = oe.w0.B0(0);

        /* renamed from: w  reason: collision with root package name */
        private static final String f11987w = oe.w0.B0(1);

        /* renamed from: x  reason: collision with root package name */
        private static final String f11988x = oe.w0.B0(2);

        /* renamed from: y  reason: collision with root package name */
        private static final String f11989y = oe.w0.B0(3);

        /* renamed from: z  reason: collision with root package name */
        private static final String f11990z = oe.w0.B0(4);
        private static final String A = oe.w0.B0(5);
        private static final String B = oe.w0.B0(6);
        public static final g.a C = new g.a() { // from class: mc.p0
            @Override // com.google.android.exoplayer2.g.a
            public final com.google.android.exoplayer2.g a(Bundle bundle) {
                Player.PositionInfo b10;
                b10 = Player.PositionInfo.b(bundle);
                return b10;
            }
        };

        public PositionInfo(Object obj, int i10, MediaItem mediaItem, Object obj2, int i11, long j10, long j11, int i12, int i13) {
            this.f11991d = obj;
            this.f11992e = i10;
            this.f11993i = i10;
            this.f11994o = mediaItem;
            this.f11995p = obj2;
            this.f11996q = i11;
            this.f11997r = j10;
            this.f11998s = j11;
            this.f11999t = i12;
            this.f12000u = i13;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static PositionInfo b(Bundle bundle) {
            MediaItem mediaItem;
            int i10 = bundle.getInt(f11986v, 0);
            Bundle bundle2 = bundle.getBundle(f11987w);
            if (bundle2 == null) {
                mediaItem = null;
            } else {
                mediaItem = (MediaItem) MediaItem.A.a(bundle2);
            }
            return new PositionInfo(null, i10, mediaItem, null, bundle.getInt(f11988x, 0), bundle.getLong(f11989y, 0L), bundle.getLong(f11990z, 0L), bundle.getInt(A, -1), bundle.getInt(B, -1));
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj != null && PositionInfo.class == obj.getClass()) {
                PositionInfo positionInfo = (PositionInfo) obj;
                if (this.f11993i == positionInfo.f11993i && this.f11996q == positionInfo.f11996q && this.f11997r == positionInfo.f11997r && this.f11998s == positionInfo.f11998s && this.f11999t == positionInfo.f11999t && this.f12000u == positionInfo.f12000u && ni.j.a(this.f11991d, positionInfo.f11991d) && ni.j.a(this.f11995p, positionInfo.f11995p) && ni.j.a(this.f11994o, positionInfo.f11994o)) {
                    return true;
                }
            }
            return false;
        }

        public int hashCode() {
            return ni.j.b(this.f11991d, Integer.valueOf(this.f11993i), this.f11994o, this.f11995p, Integer.valueOf(this.f11996q), Long.valueOf(this.f11997r), Long.valueOf(this.f11998s), Integer.valueOf(this.f11999t), Integer.valueOf(this.f12000u));
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
