package com.google.android.exoplayer2.analytics;

import android.content.Context;
import android.media.DeniedByServerException;
import android.media.MediaCodec;
import android.media.MediaDrm;
import android.media.MediaDrmResetException;
import android.media.NotProvisionedException;
import android.media.metrics.LogSessionId;
import android.media.metrics.MediaMetricsManager;
import android.media.metrics.PlaybackMetrics;
import android.media.metrics.PlaybackSession;
import android.media.metrics.TrackChangeEvent;
import android.os.SystemClock;
import android.system.ErrnoException;
import android.system.OsConstants;
import android.util.Pair;
import com.google.android.exoplayer2.Format;
import com.google.android.exoplayer2.MediaItem;
import com.google.android.exoplayer2.PlaybackException;
import com.google.android.exoplayer2.Player;
import com.google.android.exoplayer2.Timeline;
import com.google.android.exoplayer2.Tracks;
import com.google.android.exoplayer2.analytics.AnalyticsListener;
import com.google.android.exoplayer2.analytics.d;
import com.google.android.exoplayer2.audio.f;
import com.google.android.exoplayer2.decoder.DecoderCounters;
import com.google.android.exoplayer2.j;
import com.google.android.exoplayer2.source.LoadEventInfo;
import com.google.android.exoplayer2.source.MediaLoadData;
import com.google.android.exoplayer2.upstream.g;
import com.google.android.exoplayer2.video.VideoSize;
import fd.r;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.net.SocketTimeoutException;
import java.net.UnknownHostException;
import java.util.HashMap;
import java.util.UUID;
import lc.l0;
import le.d0;
import le.s;
import mc.m1;
import mc.n1;
import mc.o1;
import mc.p1;
import mc.q1;
import mc.r1;
import mc.s1;
import mi.s;
import mi.t0;
import ne.f0;
import ne.w0;
import qd.r;
import rc.h;
import rc.m;
import rc.n;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class c implements AnalyticsListener, d.a {
    private boolean A;

    /* renamed from: a  reason: collision with root package name */
    private final Context f12101a;

    /* renamed from: b  reason: collision with root package name */
    private final d f12102b;

    /* renamed from: c  reason: collision with root package name */
    private final PlaybackSession f12103c;

    /* renamed from: i  reason: collision with root package name */
    private String f12109i;

    /* renamed from: j  reason: collision with root package name */
    private PlaybackMetrics.Builder f12110j;

    /* renamed from: k  reason: collision with root package name */
    private int f12111k;

    /* renamed from: n  reason: collision with root package name */
    private PlaybackException f12114n;

    /* renamed from: o  reason: collision with root package name */
    private b f12115o;

    /* renamed from: p  reason: collision with root package name */
    private b f12116p;

    /* renamed from: q  reason: collision with root package name */
    private b f12117q;

    /* renamed from: r  reason: collision with root package name */
    private Format f12118r;

    /* renamed from: s  reason: collision with root package name */
    private Format f12119s;

    /* renamed from: t  reason: collision with root package name */
    private Format f12120t;

    /* renamed from: u  reason: collision with root package name */
    private boolean f12121u;

    /* renamed from: v  reason: collision with root package name */
    private int f12122v;

    /* renamed from: w  reason: collision with root package name */
    private boolean f12123w;

    /* renamed from: x  reason: collision with root package name */
    private int f12124x;

    /* renamed from: y  reason: collision with root package name */
    private int f12125y;

    /* renamed from: z  reason: collision with root package name */
    private int f12126z;

    /* renamed from: e  reason: collision with root package name */
    private final Timeline.d f12105e = new Timeline.d();

    /* renamed from: f  reason: collision with root package name */
    private final Timeline.b f12106f = new Timeline.b();

    /* renamed from: h  reason: collision with root package name */
    private final HashMap f12108h = new HashMap();

    /* renamed from: g  reason: collision with root package name */
    private final HashMap f12107g = new HashMap();

    /* renamed from: d  reason: collision with root package name */
    private final long f12104d = SystemClock.elapsedRealtime();

    /* renamed from: l  reason: collision with root package name */
    private int f12112l = 0;

    /* renamed from: m  reason: collision with root package name */
    private int f12113m = 0;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        public final int f12127a;

        /* renamed from: b  reason: collision with root package name */
        public final int f12128b;

        public a(int i10, int i11) {
            this.f12127a = i10;
            this.f12128b = i11;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        public final Format f12129a;

        /* renamed from: b  reason: collision with root package name */
        public final int f12130b;

        /* renamed from: c  reason: collision with root package name */
        public final String f12131c;

        public b(Format format, int i10, String str) {
            this.f12129a = format;
            this.f12130b = i10;
            this.f12131c = str;
        }
    }

    private c(Context context, PlaybackSession playbackSession) {
        this.f12101a = context.getApplicationContext();
        this.f12103c = playbackSession;
        com.google.android.exoplayer2.analytics.b bVar = new com.google.android.exoplayer2.analytics.b();
        this.f12102b = bVar;
        bVar.b(this);
    }

    private void A(int i10, long j10, Format format, int i11) {
        TrackChangeEvent.Builder timeSinceCreatedMillis = o1.a(i10).setTimeSinceCreatedMillis(j10 - this.f12104d);
        if (format != null) {
            timeSinceCreatedMillis.setTrackState(1);
            timeSinceCreatedMillis.setTrackChangeReason(p(i11));
            String str = format.f11687v;
            if (str != null) {
                timeSinceCreatedMillis.setContainerMimeType(str);
            }
            String str2 = format.f11688w;
            if (str2 != null) {
                timeSinceCreatedMillis.setSampleMimeType(str2);
            }
            String str3 = format.f11685t;
            if (str3 != null) {
                timeSinceCreatedMillis.setCodecName(str3);
            }
            int i12 = format.f11684s;
            if (i12 != -1) {
                timeSinceCreatedMillis.setBitrate(i12);
            }
            int i13 = format.B;
            if (i13 != -1) {
                timeSinceCreatedMillis.setWidth(i13);
            }
            int i14 = format.C;
            if (i14 != -1) {
                timeSinceCreatedMillis.setHeight(i14);
            }
            int i15 = format.J;
            if (i15 != -1) {
                timeSinceCreatedMillis.setChannelCount(i15);
            }
            int i16 = format.K;
            if (i16 != -1) {
                timeSinceCreatedMillis.setAudioSampleRate(i16);
            }
            String str4 = format.f11679i;
            if (str4 != null) {
                Pair l10 = l(str4);
                timeSinceCreatedMillis.setLanguage((String) l10.first);
                Object obj = l10.second;
                if (obj != null) {
                    timeSinceCreatedMillis.setLanguageRegion((String) obj);
                }
            }
            float f10 = format.D;
            if (f10 != -1.0f) {
                timeSinceCreatedMillis.setVideoFrameRate(f10);
            }
        } else {
            timeSinceCreatedMillis.setTrackState(0);
        }
        this.A = true;
        this.f12103c.reportTrackChangeEvent(timeSinceCreatedMillis.build());
    }

    private int B(Player player) {
        int O = player.O();
        if (this.f12121u) {
            return 5;
        }
        if (this.f12123w) {
            return 13;
        }
        if (O == 4) {
            return 11;
        }
        if (O == 2) {
            int i10 = this.f12112l;
            if (i10 == 0 || i10 == 2) {
                return 2;
            }
            if (!player.B()) {
                return 7;
            }
            if (player.u() != 0) {
                return 10;
            }
            return 6;
        } else if (O == 3) {
            if (!player.B()) {
                return 4;
            }
            if (player.u() == 0) {
                return 3;
            }
            return 9;
        } else if (O == 1 && this.f12112l != 0) {
            return 12;
        } else {
            return this.f12112l;
        }
    }

    private boolean e(b bVar) {
        if (bVar != null && bVar.f12131c.equals(this.f12102b.a())) {
            return true;
        }
        return false;
    }

    public static c f(Context context) {
        MediaMetricsManager a10 = s1.a(context.getSystemService("media_metrics"));
        if (a10 == null) {
            return null;
        }
        return new c(context, a10.createPlaybackSession());
    }

    private void g() {
        long longValue;
        long longValue2;
        int i10;
        PlaybackMetrics.Builder builder = this.f12110j;
        if (builder != null && this.A) {
            builder.setAudioUnderrunCount(this.f12126z);
            this.f12110j.setVideoFramesDropped(this.f12124x);
            this.f12110j.setVideoFramesPlayed(this.f12125y);
            Long l10 = (Long) this.f12107g.get(this.f12109i);
            PlaybackMetrics.Builder builder2 = this.f12110j;
            if (l10 == null) {
                longValue = 0;
            } else {
                longValue = l10.longValue();
            }
            builder2.setNetworkTransferDurationMillis(longValue);
            Long l11 = (Long) this.f12108h.get(this.f12109i);
            PlaybackMetrics.Builder builder3 = this.f12110j;
            if (l11 == null) {
                longValue2 = 0;
            } else {
                longValue2 = l11.longValue();
            }
            builder3.setNetworkBytesRead(longValue2);
            PlaybackMetrics.Builder builder4 = this.f12110j;
            if (l11 != null && l11.longValue() > 0) {
                i10 = 1;
            } else {
                i10 = 0;
            }
            builder4.setStreamSource(i10);
            this.f12103c.reportPlaybackMetrics(this.f12110j.build());
        }
        this.f12110j = null;
        this.f12109i = null;
        this.f12126z = 0;
        this.f12124x = 0;
        this.f12125y = 0;
        this.f12118r = null;
        this.f12119s = null;
        this.f12120t = null;
        this.A = false;
    }

    private static int h(int i10) {
        switch (w0.Y(i10)) {
            case 6002:
                return 24;
            case 6003:
                return 28;
            case 6004:
                return 25;
            case 6005:
                return 26;
            default:
                return 27;
        }
    }

    private static m i(s sVar) {
        m mVar;
        t0 it = sVar.iterator();
        while (it.hasNext()) {
            Tracks.a aVar = (Tracks.a) it.next();
            for (int i10 = 0; i10 < aVar.f12011d; i10++) {
                if (aVar.g(i10) && (mVar = aVar.c(i10).f11691z) != null) {
                    return mVar;
                }
            }
        }
        return null;
    }

    private static int j(m mVar) {
        for (int i10 = 0; i10 < mVar.f48754o; i10++) {
            UUID uuid = mVar.o(i10).f48756e;
            if (uuid.equals(lc.d.f36582d)) {
                return 3;
            }
            if (uuid.equals(lc.d.f36583e)) {
                return 2;
            }
            if (uuid.equals(lc.d.f36581c)) {
                return 6;
            }
        }
        return 1;
    }

    private static a k(PlaybackException playbackException, Context context, boolean z10) {
        int i10;
        boolean z11;
        int i11;
        if (playbackException.f11931d == 1001) {
            return new a(20, 0);
        }
        if (playbackException instanceof j) {
            j jVar = (j) playbackException;
            if (jVar.f12604t == 1) {
                z11 = true;
            } else {
                z11 = false;
            }
            i10 = jVar.f12608x;
        } else {
            i10 = 0;
            z11 = false;
        }
        Throwable th2 = (Throwable) ne.a.e(playbackException.getCause());
        if (th2 instanceof IOException) {
            if (th2 instanceof g.f) {
                return new a(5, ((g.f) th2).f13449o);
            }
            if (!(th2 instanceof g.e) && !(th2 instanceof l0)) {
                boolean z12 = th2 instanceof g.d;
                if (!z12 && !(th2 instanceof d0.a)) {
                    if (playbackException.f11931d == 1002) {
                        return new a(21, 0);
                    }
                    if (th2 instanceof n.a) {
                        Throwable th3 = (Throwable) ne.a.e(th2.getCause());
                        int i12 = w0.f39657a;
                        if (i12 >= 21 && (th3 instanceof MediaDrm.MediaDrmStateException)) {
                            int Z = w0.Z(((MediaDrm.MediaDrmStateException) th3).getDiagnosticInfo());
                            return new a(h(Z), Z);
                        } else if (i12 >= 23 && (th3 instanceof MediaDrmResetException)) {
                            return new a(27, 0);
                        } else {
                            if (i12 >= 18 && (th3 instanceof NotProvisionedException)) {
                                return new a(24, 0);
                            }
                            if (i12 >= 18 && (th3 instanceof DeniedByServerException)) {
                                return new a(29, 0);
                            }
                            if (th3 instanceof rc.l0) {
                                return new a(23, 0);
                            }
                            if (th3 instanceof h.e) {
                                return new a(28, 0);
                            }
                            return new a(30, 0);
                        }
                    } else if ((th2 instanceof s.b) && (th2.getCause() instanceof FileNotFoundException)) {
                        Throwable cause = ((Throwable) ne.a.e(th2.getCause())).getCause();
                        if (w0.f39657a >= 21 && (cause instanceof ErrnoException) && ((ErrnoException) cause).errno == OsConstants.EACCES) {
                            return new a(32, 0);
                        }
                        return new a(31, 0);
                    } else {
                        return new a(9, 0);
                    }
                } else if (f0.d(context).f() == 1) {
                    return new a(3, 0);
                } else {
                    Throwable cause2 = th2.getCause();
                    if (cause2 instanceof UnknownHostException) {
                        return new a(6, 0);
                    }
                    if (cause2 instanceof SocketTimeoutException) {
                        return new a(7, 0);
                    }
                    if (z12 && ((g.d) th2).f13447i == 1) {
                        return new a(4, 0);
                    }
                    return new a(8, 0);
                }
            }
            if (z10) {
                i11 = 10;
            } else {
                i11 = 11;
            }
            return new a(i11, 0);
        } else if (z11 && (i10 == 0 || i10 == 1)) {
            return new a(35, 0);
        } else {
            if (z11 && i10 == 3) {
                return new a(15, 0);
            }
            if (z11 && i10 == 2) {
                return new a(23, 0);
            }
            if (th2 instanceof r.b) {
                return new a(13, w0.Z(((r.b) th2).f22851o));
            }
            if (th2 instanceof fd.m) {
                return new a(14, w0.Z(((fd.m) th2).f22810e));
            }
            if (th2 instanceof OutOfMemoryError) {
                return new a(14, 0);
            }
            if (th2 instanceof f.b) {
                return new a(17, ((f.b) th2).f12228d);
            }
            if (th2 instanceof f.e) {
                return new a(18, ((f.e) th2).f12233d);
            }
            if (w0.f39657a >= 16 && (th2 instanceof MediaCodec.CryptoException)) {
                int errorCode = ((MediaCodec.CryptoException) th2).getErrorCode();
                return new a(h(errorCode), errorCode);
            }
            return new a(22, 0);
        }
    }

    private static Pair l(String str) {
        String str2;
        String[] d12 = w0.d1(str, "-");
        String str3 = d12[0];
        if (d12.length >= 2) {
            str2 = d12[1];
        } else {
            str2 = null;
        }
        return Pair.create(str3, str2);
    }

    private static int n(Context context) {
        switch (f0.d(context).f()) {
            case 0:
                return 0;
            case 1:
                return 9;
            case 2:
                return 2;
            case 3:
                return 4;
            case 4:
                return 5;
            case 5:
                return 6;
            case 6:
            case 8:
            default:
                return 1;
            case 7:
                return 3;
            case 9:
                return 8;
            case 10:
                return 7;
        }
    }

    private static int o(MediaItem mediaItem) {
        MediaItem.h hVar = mediaItem.f11726e;
        if (hVar == null) {
            return 0;
        }
        int z02 = w0.z0(hVar.f11816d, hVar.f11817e);
        if (z02 != 0) {
            if (z02 != 1) {
                if (z02 != 2) {
                    return 1;
                }
                return 4;
            }
            return 5;
        }
        return 3;
    }

    private static int p(int i10) {
        if (i10 != 1) {
            if (i10 != 2) {
                return i10 != 3 ? 1 : 4;
            }
            return 3;
        }
        return 2;
    }

    private void q(AnalyticsListener.Events events) {
        for (int i10 = 0; i10 < events.d(); i10++) {
            int b10 = events.b(i10);
            AnalyticsListener.EventTime c10 = events.c(b10);
            if (b10 == 0) {
                this.f12102b.g(c10);
            } else if (b10 == 11) {
                this.f12102b.f(c10, this.f12111k);
            } else {
                this.f12102b.d(c10);
            }
        }
    }

    private void r(long j10) {
        int n10 = n(this.f12101a);
        if (n10 != this.f12113m) {
            this.f12113m = n10;
            this.f12103c.reportNetworkEvent(p1.a().setNetworkType(n10).setTimeSinceCreatedMillis(j10 - this.f12104d).build());
        }
    }

    private void s(long j10) {
        boolean z10;
        PlaybackException playbackException = this.f12114n;
        if (playbackException == null) {
            return;
        }
        Context context = this.f12101a;
        if (this.f12122v == 4) {
            z10 = true;
        } else {
            z10 = false;
        }
        a k10 = k(playbackException, context, z10);
        this.f12103c.reportPlaybackErrorEvent(n1.a().setTimeSinceCreatedMillis(j10 - this.f12104d).setErrorCode(k10.f12127a).setSubErrorCode(k10.f12128b).setException(playbackException).build());
        this.A = true;
        this.f12114n = null;
    }

    private void t(Player player, AnalyticsListener.Events events, long j10) {
        if (player.O() != 2) {
            this.f12121u = false;
        }
        if (player.m() == null) {
            this.f12123w = false;
        } else if (events.a(10)) {
            this.f12123w = true;
        }
        int B = B(player);
        if (this.f12112l != B) {
            this.f12112l = B;
            this.A = true;
            this.f12103c.reportPlaybackStateEvent(m1.a().setState(this.f12112l).setTimeSinceCreatedMillis(j10 - this.f12104d).build());
        }
    }

    private void u(Player player, AnalyticsListener.Events events, long j10) {
        if (events.a(2)) {
            Tracks o10 = player.o();
            boolean d10 = o10.d(2);
            boolean d11 = o10.d(1);
            boolean d12 = o10.d(3);
            if (d10 || d11 || d12) {
                if (!d10) {
                    z(j10, null, 0);
                }
                if (!d11) {
                    v(j10, null, 0);
                }
                if (!d12) {
                    x(j10, null, 0);
                }
            }
        }
        if (e(this.f12115o)) {
            b bVar = this.f12115o;
            Format format = bVar.f12129a;
            if (format.C != -1) {
                z(j10, format, bVar.f12130b);
                this.f12115o = null;
            }
        }
        if (e(this.f12116p)) {
            b bVar2 = this.f12116p;
            v(j10, bVar2.f12129a, bVar2.f12130b);
            this.f12116p = null;
        }
        if (e(this.f12117q)) {
            b bVar3 = this.f12117q;
            x(j10, bVar3.f12129a, bVar3.f12130b);
            this.f12117q = null;
        }
    }

    private void v(long j10, Format format, int i10) {
        if (w0.c(this.f12119s, format)) {
            return;
        }
        if (this.f12119s == null && i10 == 0) {
            i10 = 1;
        }
        this.f12119s = format;
        A(0, j10, format, i10);
    }

    private void w(Player player, AnalyticsListener.Events events) {
        m i10;
        if (events.a(0)) {
            AnalyticsListener.EventTime c10 = events.c(0);
            if (this.f12110j != null) {
                y(c10.f12026b, c10.f12028d);
            }
        }
        if (events.a(2) && this.f12110j != null && (i10 = i(player.o().b())) != null) {
            r1.a(w0.j(this.f12110j)).setDrmType(j(i10));
        }
        if (events.a(1011)) {
            this.f12126z++;
        }
    }

    private void x(long j10, Format format, int i10) {
        if (w0.c(this.f12120t, format)) {
            return;
        }
        if (this.f12120t == null && i10 == 0) {
            i10 = 1;
        }
        this.f12120t = format;
        A(2, j10, format, i10);
    }

    private void y(Timeline timeline, r.b bVar) {
        int f10;
        int i10;
        PlaybackMetrics.Builder builder = this.f12110j;
        if (bVar == null || (f10 = timeline.f(bVar.f47769a)) == -1) {
            return;
        }
        timeline.j(f10, this.f12106f);
        timeline.r(this.f12106f.f11978i, this.f12105e);
        builder.setStreamType(o(this.f12105e.f11989i));
        Timeline.d dVar = this.f12105e;
        if (dVar.f12000y != -9223372036854775807L && !dVar.f11998w && !dVar.f11995t && !dVar.g()) {
            builder.setMediaDurationMillis(this.f12105e.f());
        }
        if (this.f12105e.g()) {
            i10 = 2;
        } else {
            i10 = 1;
        }
        builder.setPlaybackType(i10);
        this.A = true;
    }

    private void z(long j10, Format format, int i10) {
        if (w0.c(this.f12118r, format)) {
            return;
        }
        if (this.f12118r == null && i10 == 0) {
            i10 = 1;
        }
        this.f12118r = format;
        A(1, j10, format, i10);
    }

    @Override // com.google.android.exoplayer2.analytics.d.a
    public void a(AnalyticsListener.EventTime eventTime, String str, boolean z10) {
        r.b bVar = eventTime.f12028d;
        if ((bVar == null || !bVar.b()) && str.equals(this.f12109i)) {
            g();
        }
        this.f12107g.remove(str);
        this.f12108h.remove(str);
    }

    @Override // com.google.android.exoplayer2.analytics.d.a
    public void b(AnalyticsListener.EventTime eventTime, String str) {
        r.b bVar = eventTime.f12028d;
        if (bVar != null && bVar.b()) {
            return;
        }
        g();
        this.f12109i = str;
        this.f12110j = q1.a().setPlayerName("ExoPlayerLib").setPlayerVersion("2.19.1");
        y(eventTime.f12026b, eventTime.f12028d);
    }

    @Override // com.google.android.exoplayer2.analytics.d.a
    public void c(AnalyticsListener.EventTime eventTime, String str) {
    }

    @Override // com.google.android.exoplayer2.analytics.d.a
    public void d(AnalyticsListener.EventTime eventTime, String str, String str2) {
    }

    public LogSessionId m() {
        return this.f12103c.getSessionId();
    }

    @Override // com.google.android.exoplayer2.analytics.AnalyticsListener
    public void onBandwidthEstimate(AnalyticsListener.EventTime eventTime, int i10, long j10, long j11) {
        long longValue;
        r.b bVar = eventTime.f12028d;
        if (bVar != null) {
            String h10 = this.f12102b.h(eventTime.f12026b, (r.b) ne.a.e(bVar));
            Long l10 = (Long) this.f12108h.get(h10);
            Long l11 = (Long) this.f12107g.get(h10);
            HashMap hashMap = this.f12108h;
            long j12 = 0;
            if (l10 == null) {
                longValue = 0;
            } else {
                longValue = l10.longValue();
            }
            hashMap.put(h10, Long.valueOf(longValue + j10));
            HashMap hashMap2 = this.f12107g;
            if (l11 != null) {
                j12 = l11.longValue();
            }
            hashMap2.put(h10, Long.valueOf(j12 + i10));
        }
    }

    @Override // com.google.android.exoplayer2.analytics.AnalyticsListener
    public void onDownstreamFormatChanged(AnalyticsListener.EventTime eventTime, MediaLoadData mediaLoadData) {
        if (eventTime.f12028d != null) {
            b bVar = new b((Format) ne.a.e(mediaLoadData.f12746c), mediaLoadData.f12747d, this.f12102b.h(eventTime.f12026b, (r.b) ne.a.e(eventTime.f12028d)));
            int i10 = mediaLoadData.f12745b;
            if (i10 != 0) {
                if (i10 != 1) {
                    if (i10 != 2) {
                        if (i10 != 3) {
                            return;
                        }
                        this.f12117q = bVar;
                        return;
                    }
                } else {
                    this.f12116p = bVar;
                    return;
                }
            }
            this.f12115o = bVar;
        }
    }

    @Override // com.google.android.exoplayer2.analytics.AnalyticsListener
    public void onEvents(Player player, AnalyticsListener.Events events) {
        if (events.d() != 0) {
            q(events);
            long elapsedRealtime = SystemClock.elapsedRealtime();
            w(player, events);
            s(elapsedRealtime);
            u(player, events, elapsedRealtime);
            r(elapsedRealtime);
            t(player, events, elapsedRealtime);
            if (events.a(1028)) {
                this.f12102b.c(events.c(1028));
            }
        }
    }

    @Override // com.google.android.exoplayer2.analytics.AnalyticsListener
    public void onLoadError(AnalyticsListener.EventTime eventTime, LoadEventInfo loadEventInfo, MediaLoadData mediaLoadData, IOException iOException, boolean z10) {
        this.f12122v = mediaLoadData.f12744a;
    }

    @Override // com.google.android.exoplayer2.analytics.AnalyticsListener
    public void onPlayerError(AnalyticsListener.EventTime eventTime, PlaybackException playbackException) {
        this.f12114n = playbackException;
    }

    @Override // com.google.android.exoplayer2.analytics.AnalyticsListener
    public void onPositionDiscontinuity(AnalyticsListener.EventTime eventTime, Player.PositionInfo positionInfo, Player.PositionInfo positionInfo2, int i10) {
        if (i10 == 1) {
            this.f12121u = true;
        }
        this.f12111k = i10;
    }

    @Override // com.google.android.exoplayer2.analytics.AnalyticsListener
    public void onVideoDisabled(AnalyticsListener.EventTime eventTime, DecoderCounters decoderCounters) {
        this.f12124x += decoderCounters.f12473g;
        this.f12125y += decoderCounters.f12471e;
    }

    @Override // com.google.android.exoplayer2.analytics.AnalyticsListener
    public void onVideoSizeChanged(AnalyticsListener.EventTime eventTime, VideoSize videoSize) {
        b bVar = this.f12115o;
        if (bVar != null) {
            Format format = bVar.f12129a;
            if (format.C == -1) {
                this.f12115o = new b(format.b().n0(videoSize.f13501d).S(videoSize.f13502e).G(), bVar.f12130b, bVar.f12131c);
            }
        }
    }
}
