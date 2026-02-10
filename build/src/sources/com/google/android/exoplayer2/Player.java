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
        public static final Commands f12556e = new a().e();

        /* renamed from: i  reason: collision with root package name */
        private static final String f12557i = oe.w0.B0(0);

        /* renamed from: o  reason: collision with root package name */
        public static final g.a f12558o = new g.a() { // from class: mc.o0
            @Override // com.google.android.exoplayer2.g.a
            public final com.google.android.exoplayer2.g a(Bundle bundle) {
                Player.Commands d10;
                d10 = Player.Commands.d(bundle);
                return d10;
            }
        };

        /* renamed from: d  reason: collision with root package name */
        private final oe.q f12559d;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        public static final class a {

            /* renamed from: b  reason: collision with root package name */
            private static final int[] f12560b = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 31, 20, 21, 22, 23, 24, 25, 33, 26, 34, 27, 28, 29, 30, 32};

            /* renamed from: a  reason: collision with root package name */
            private final q.b f12561a = new q.b();

            public a a(int i10) {
                this.f12561a.a(i10);
                return this;
            }

            public a b(Commands commands) {
                this.f12561a.b(commands.f12559d);
                return this;
            }

            public a c(int... iArr) {
                this.f12561a.c(iArr);
                return this;
            }

            public a d(int i10, boolean z10) {
                this.f12561a.d(i10, z10);
                return this;
            }

            public Commands e() {
                return new Commands(this.f12561a.e());
            }
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static Commands d(Bundle bundle) {
            ArrayList<Integer> integerArrayList = bundle.getIntegerArrayList(f12557i);
            if (integerArrayList == null) {
                return f12556e;
            }
            a aVar = new a();
            for (int i10 = 0; i10 < integerArrayList.size(); i10++) {
                aVar.a(integerArrayList.get(i10).intValue());
            }
            return aVar.e();
        }

        public boolean c(int i10) {
            return this.f12559d.a(i10);
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof Commands)) {
                return false;
            }
            return this.f12559d.equals(((Commands) obj).f12559d);
        }

        public int hashCode() {
            return this.f12559d.hashCode();
        }

        private Commands(oe.q qVar) {
            this.f12559d = qVar;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class Events {

        /* renamed from: a  reason: collision with root package name */
        private final oe.q f12562a;

        public Events(oe.q qVar) {
            this.f12562a = qVar;
        }

        public boolean a(int i10) {
            return this.f12562a.a(i10);
        }

        public boolean b(int... iArr) {
            return this.f12562a.b(iArr);
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof Events)) {
                return false;
            }
            return this.f12562a.equals(((Events) obj).f12562a);
        }

        public int hashCode() {
            return this.f12562a.hashCode();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class PositionInfo implements g {

        /* renamed from: d  reason: collision with root package name */
        public final Object f12568d;

        /* renamed from: e  reason: collision with root package name */
        public final int f12569e;

        /* renamed from: i  reason: collision with root package name */
        public final int f12570i;

        /* renamed from: o  reason: collision with root package name */
        public final MediaItem f12571o;

        /* renamed from: p  reason: collision with root package name */
        public final Object f12572p;

        /* renamed from: q  reason: collision with root package name */
        public final int f12573q;

        /* renamed from: r  reason: collision with root package name */
        public final long f12574r;

        /* renamed from: s  reason: collision with root package name */
        public final long f12575s;

        /* renamed from: t  reason: collision with root package name */
        public final int f12576t;

        /* renamed from: u  reason: collision with root package name */
        public final int f12577u;

        /* renamed from: v  reason: collision with root package name */
        private static final String f12563v = oe.w0.B0(0);

        /* renamed from: w  reason: collision with root package name */
        private static final String f12564w = oe.w0.B0(1);

        /* renamed from: x  reason: collision with root package name */
        private static final String f12565x = oe.w0.B0(2);

        /* renamed from: y  reason: collision with root package name */
        private static final String f12566y = oe.w0.B0(3);

        /* renamed from: z  reason: collision with root package name */
        private static final String f12567z = oe.w0.B0(4);
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
            this.f12568d = obj;
            this.f12569e = i10;
            this.f12570i = i10;
            this.f12571o = mediaItem;
            this.f12572p = obj2;
            this.f12573q = i11;
            this.f12574r = j10;
            this.f12575s = j11;
            this.f12576t = i12;
            this.f12577u = i13;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static PositionInfo b(Bundle bundle) {
            MediaItem mediaItem;
            int i10 = bundle.getInt(f12563v, 0);
            Bundle bundle2 = bundle.getBundle(f12564w);
            if (bundle2 == null) {
                mediaItem = null;
            } else {
                mediaItem = (MediaItem) MediaItem.A.a(bundle2);
            }
            return new PositionInfo(null, i10, mediaItem, null, bundle.getInt(f12565x, 0), bundle.getLong(f12566y, 0L), bundle.getLong(f12567z, 0L), bundle.getInt(A, -1), bundle.getInt(B, -1));
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj != null && PositionInfo.class == obj.getClass()) {
                PositionInfo positionInfo = (PositionInfo) obj;
                if (this.f12570i == positionInfo.f12570i && this.f12573q == positionInfo.f12573q && this.f12574r == positionInfo.f12574r && this.f12575s == positionInfo.f12575s && this.f12576t == positionInfo.f12576t && this.f12577u == positionInfo.f12577u && pi.j.a(this.f12568d, positionInfo.f12568d) && pi.j.a(this.f12572p, positionInfo.f12572p) && pi.j.a(this.f12571o, positionInfo.f12571o)) {
                    return true;
                }
            }
            return false;
        }

        public int hashCode() {
            return pi.j.b(this.f12568d, Integer.valueOf(this.f12570i), this.f12571o, this.f12572p, Integer.valueOf(this.f12573q), Long.valueOf(this.f12574r), Long.valueOf(this.f12575s), Integer.valueOf(this.f12576t), Integer.valueOf(this.f12577u));
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
