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
import com.google.android.exoplayer2.upstream.h;
import com.google.android.exoplayer2.video.VideoSize;
import gd.r;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.net.SocketTimeoutException;
import java.net.UnknownHostException;
import java.util.HashMap;
import java.util.UUID;
import mc.l0;
import me.d0;
import me.s;
import nc.m1;
import nc.n1;
import nc.o1;
import nc.p1;
import nc.q1;
import nc.r1;
import nc.s1;
import oe.f0;
import oe.w0;
import oi.s;
import oi.t0;
import rd.r;
import sc.h;
import sc.m;
import sc.n;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class c implements AnalyticsListener, d.a {
    private boolean A;

    /* renamed from: a  reason: collision with root package name */
    private final Context f12140a;

    /* renamed from: b  reason: collision with root package name */
    private final d f12141b;

    /* renamed from: c  reason: collision with root package name */
    private final PlaybackSession f12142c;

    /* renamed from: i  reason: collision with root package name */
    private String f12148i;

    /* renamed from: j  reason: collision with root package name */
    private PlaybackMetrics.Builder f12149j;

    /* renamed from: k  reason: collision with root package name */
    private int f12150k;

    /* renamed from: n  reason: collision with root package name */
    private PlaybackException f12153n;

    /* renamed from: o  reason: collision with root package name */
    private b f12154o;

    /* renamed from: p  reason: collision with root package name */
    private b f12155p;

    /* renamed from: q  reason: collision with root package name */
    private b f12156q;

    /* renamed from: r  reason: collision with root package name */
    private Format f12157r;

    /* renamed from: s  reason: collision with root package name */
    private Format f12158s;

    /* renamed from: t  reason: collision with root package name */
    private Format f12159t;

    /* renamed from: u  reason: collision with root package name */
    private boolean f12160u;

    /* renamed from: v  reason: collision with root package name */
    private int f12161v;

    /* renamed from: w  reason: collision with root package name */
    private boolean f12162w;

    /* renamed from: x  reason: collision with root package name */
    private int f12163x;

    /* renamed from: y  reason: collision with root package name */
    private int f12164y;

    /* renamed from: z  reason: collision with root package name */
    private int f12165z;

    /* renamed from: e  reason: collision with root package name */
    private final Timeline.d f12144e = new Timeline.d();

    /* renamed from: f  reason: collision with root package name */
    private final Timeline.b f12145f = new Timeline.b();

    /* renamed from: h  reason: collision with root package name */
    private final HashMap f12147h = new HashMap();

    /* renamed from: g  reason: collision with root package name */
    private final HashMap f12146g = new HashMap();

    /* renamed from: d  reason: collision with root package name */
    private final long f12143d = SystemClock.elapsedRealtime();

    /* renamed from: l  reason: collision with root package name */
    private int f12151l = 0;

    /* renamed from: m  reason: collision with root package name */
    private int f12152m = 0;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        public final int f12166a;

        /* renamed from: b  reason: collision with root package name */
        public final int f12167b;

        public a(int i10, int i11) {
            this.f12166a = i10;
            this.f12167b = i11;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        public final Format f12168a;

        /* renamed from: b  reason: collision with root package name */
        public final int f12169b;

        /* renamed from: c  reason: collision with root package name */
        public final String f12170c;

        public b(Format format, int i10, String str) {
            this.f12168a = format;
            this.f12169b = i10;
            this.f12170c = str;
        }
    }

    private c(Context context, PlaybackSession playbackSession) {
        this.f12140a = context.getApplicationContext();
        this.f12142c = playbackSession;
        com.google.android.exoplayer2.analytics.b bVar = new com.google.android.exoplayer2.analytics.b();
        this.f12141b = bVar;
        bVar.b(this);
    }

    private void A(int i10, long j10, Format format, int i11) {
        TrackChangeEvent.Builder timeSinceCreatedMillis = o1.a(i10).setTimeSinceCreatedMillis(j10 - this.f12143d);
        if (format != null) {
            timeSinceCreatedMillis.setTrackState(1);
            timeSinceCreatedMillis.setTrackChangeReason(p(i11));
            String str = format.f11726v;
            if (str != null) {
                timeSinceCreatedMillis.setContainerMimeType(str);
            }
            String str2 = format.f11727w;
            if (str2 != null) {
                timeSinceCreatedMillis.setSampleMimeType(str2);
            }
            String str3 = format.f11724t;
            if (str3 != null) {
                timeSinceCreatedMillis.setCodecName(str3);
            }
            int i12 = format.f11723s;
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
            String str4 = format.f11718i;
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
        this.f12142c.reportTrackChangeEvent(timeSinceCreatedMillis.build());
    }

    private int B(Player player) {
        int O = player.O();
        if (this.f12160u) {
            return 5;
        }
        if (this.f12162w) {
            return 13;
        }
        if (O == 4) {
            return 11;
        }
        if (O == 2) {
            int i10 = this.f12151l;
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
        } else if (O == 1 && this.f12151l != 0) {
            return 12;
        } else {
            return this.f12151l;
        }
    }

    private boolean e(b bVar) {
        if (bVar != null && bVar.f12170c.equals(this.f12141b.a())) {
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
        PlaybackMetrics.Builder builder = this.f12149j;
        if (builder != null && this.A) {
            builder.setAudioUnderrunCount(this.f12165z);
            this.f12149j.setVideoFramesDropped(this.f12163x);
            this.f12149j.setVideoFramesPlayed(this.f12164y);
            Long l10 = (Long) this.f12146g.get(this.f12148i);
            PlaybackMetrics.Builder builder2 = this.f12149j;
            if (l10 == null) {
                longValue = 0;
            } else {
                longValue = l10.longValue();
            }
            builder2.setNetworkTransferDurationMillis(longValue);
            Long l11 = (Long) this.f12147h.get(this.f12148i);
            PlaybackMetrics.Builder builder3 = this.f12149j;
            if (l11 == null) {
                longValue2 = 0;
            } else {
                longValue2 = l11.longValue();
            }
            builder3.setNetworkBytesRead(longValue2);
            PlaybackMetrics.Builder builder4 = this.f12149j;
            if (l11 != null && l11.longValue() > 0) {
                i10 = 1;
            } else {
                i10 = 0;
            }
            builder4.setStreamSource(i10);
            this.f12142c.reportPlaybackMetrics(this.f12149j.build());
        }
        this.f12149j = null;
        this.f12148i = null;
        this.f12165z = 0;
        this.f12163x = 0;
        this.f12164y = 0;
        this.f12157r = null;
        this.f12158s = null;
        this.f12159t = null;
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
            for (int i10 = 0; i10 < aVar.f12050d; i10++) {
                if (aVar.g(i10) && (mVar = aVar.c(i10).f11730z) != null) {
                    return mVar;
                }
            }
        }
        return null;
    }

    private static int j(m mVar) {
        for (int i10 = 0; i10 < mVar.f49711o; i10++) {
            UUID uuid = mVar.i(i10).f49713e;
            if (uuid.equals(mc.d.f36853d)) {
                return 3;
            }
            if (uuid.equals(mc.d.f36854e)) {
                return 2;
            }
            if (uuid.equals(mc.d.f36852c)) {
                return 6;
            }
        }
        return 1;
    }

    private static a k(PlaybackException playbackException, Context context, boolean z10) {
        int i10;
        boolean z11;
        int i11;
        if (playbackException.f11970d == 1001) {
            return new a(20, 0);
        }
        if (playbackException instanceof j) {
            j jVar = (j) playbackException;
            if (jVar.f12705t == 1) {
                z11 = true;
            } else {
                z11 = false;
            }
            i10 = jVar.f12709x;
        } else {
            i10 = 0;
            z11 = false;
        }
        Throwable th2 = (Throwable) oe.a.e(playbackException.getCause());
        if (th2 instanceof IOException) {
            if (th2 instanceof h.f) {
                return new a(5, ((h.f) th2).f13550o);
            }
            if (!(th2 instanceof h.e) && !(th2 instanceof l0)) {
                boolean z12 = th2 instanceof h.d;
                if (!z12 && !(th2 instanceof d0.a)) {
                    if (playbackException.f11970d == 1002) {
                        return new a(21, 0);
                    }
                    if (th2 instanceof n.a) {
                        Throwable th3 = (Throwable) oe.a.e(th2.getCause());
                        int i12 = w0.f40711a;
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
                            if (th3 instanceof sc.l0) {
                                return new a(23, 0);
                            }
                            if (th3 instanceof h.e) {
                                return new a(28, 0);
                            }
                            return new a(30, 0);
                        }
                    } else if ((th2 instanceof s.b) && (th2.getCause() instanceof FileNotFoundException)) {
                        Throwable cause = ((Throwable) oe.a.e(th2.getCause())).getCause();
                        if (w0.f40711a >= 21 && (cause instanceof ErrnoException) && ((ErrnoException) cause).errno == OsConstants.EACCES) {
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
                    if (z12 && ((h.d) th2).f13548i == 1) {
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
                return new a(13, w0.Z(((r.b) th2).f24237o));
            }
            if (th2 instanceof gd.m) {
                return new a(14, w0.Z(((gd.m) th2).f24196e));
            }
            if (th2 instanceof OutOfMemoryError) {
                return new a(14, 0);
            }
            if (th2 instanceof f.b) {
                return new a(17, ((f.b) th2).f12267d);
            }
            if (th2 instanceof f.e) {
                return new a(18, ((f.e) th2).f12272d);
            }
            if (w0.f40711a >= 16 && (th2 instanceof MediaCodec.CryptoException)) {
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
        MediaItem.h hVar = mediaItem.f11765e;
        if (hVar == null) {
            return 0;
        }
        int z02 = w0.z0(hVar.f11855d, hVar.f11856e);
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
                this.f12141b.h(c10);
            } else if (b10 == 11) {
                this.f12141b.g(c10, this.f12150k);
            } else {
                this.f12141b.d(c10);
            }
        }
    }

    private void r(long j10) {
        int n10 = n(this.f12140a);
        if (n10 != this.f12152m) {
            this.f12152m = n10;
            this.f12142c.reportNetworkEvent(p1.a().setNetworkType(n10).setTimeSinceCreatedMillis(j10 - this.f12143d).build());
        }
    }

    private void s(long j10) {
        boolean z10;
        PlaybackException playbackException = this.f12153n;
        if (playbackException == null) {
            return;
        }
        Context context = this.f12140a;
        if (this.f12161v == 4) {
            z10 = true;
        } else {
            z10 = false;
        }
        a k10 = k(playbackException, context, z10);
        this.f12142c.reportPlaybackErrorEvent(n1.a().setTimeSinceCreatedMillis(j10 - this.f12143d).setErrorCode(k10.f12166a).setSubErrorCode(k10.f12167b).setException(playbackException).build());
        this.A = true;
        this.f12153n = null;
    }

    private void t(Player player, AnalyticsListener.Events events, long j10) {
        if (player.O() != 2) {
            this.f12160u = false;
        }
        if (player.m() == null) {
            this.f12162w = false;
        } else if (events.a(10)) {
            this.f12162w = true;
        }
        int B = B(player);
        if (this.f12151l != B) {
            this.f12151l = B;
            this.A = true;
            this.f12142c.reportPlaybackStateEvent(m1.a().setState(this.f12151l).setTimeSinceCreatedMillis(j10 - this.f12143d).build());
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
        if (e(this.f12154o)) {
            b bVar = this.f12154o;
            Format format = bVar.f12168a;
            if (format.C != -1) {
                z(j10, format, bVar.f12169b);
                this.f12154o = null;
            }
        }
        if (e(this.f12155p)) {
            b bVar2 = this.f12155p;
            v(j10, bVar2.f12168a, bVar2.f12169b);
            this.f12155p = null;
        }
        if (e(this.f12156q)) {
            b bVar3 = this.f12156q;
            x(j10, bVar3.f12168a, bVar3.f12169b);
            this.f12156q = null;
        }
    }

    private void v(long j10, Format format, int i10) {
        if (w0.c(this.f12158s, format)) {
            return;
        }
        if (this.f12158s == null && i10 == 0) {
            i10 = 1;
        }
        this.f12158s = format;
        A(0, j10, format, i10);
    }

    private void w(Player player, AnalyticsListener.Events events) {
        m i10;
        if (events.a(0)) {
            AnalyticsListener.EventTime c10 = events.c(0);
            if (this.f12149j != null) {
                y(c10.f12065b, c10.f12067d);
            }
        }
        if (events.a(2) && this.f12149j != null && (i10 = i(player.o().b())) != null) {
            r1.a(w0.j(this.f12149j)).setDrmType(j(i10));
        }
        if (events.a(1011)) {
            this.f12165z++;
        }
    }

    private void x(long j10, Format format, int i10) {
        if (w0.c(this.f12159t, format)) {
            return;
        }
        if (this.f12159t == null && i10 == 0) {
            i10 = 1;
        }
        this.f12159t = format;
        A(2, j10, format, i10);
    }

    private void y(Timeline timeline, r.b bVar) {
        int f10;
        int i10;
        PlaybackMetrics.Builder builder = this.f12149j;
        if (bVar == null || (f10 = timeline.f(bVar.f47983a)) == -1) {
            return;
        }
        timeline.j(f10, this.f12145f);
        timeline.r(this.f12145f.f12017i, this.f12144e);
        builder.setStreamType(o(this.f12144e.f12028i));
        Timeline.d dVar = this.f12144e;
        if (dVar.f12039y != -9223372036854775807L && !dVar.f12037w && !dVar.f12034t && !dVar.g()) {
            builder.setMediaDurationMillis(this.f12144e.f());
        }
        if (this.f12144e.g()) {
            i10 = 2;
        } else {
            i10 = 1;
        }
        builder.setPlaybackType(i10);
        this.A = true;
    }

    private void z(long j10, Format format, int i10) {
        if (w0.c(this.f12157r, format)) {
            return;
        }
        if (this.f12157r == null && i10 == 0) {
            i10 = 1;
        }
        this.f12157r = format;
        A(1, j10, format, i10);
    }

    @Override // com.google.android.exoplayer2.analytics.d.a
    public void a(AnalyticsListener.EventTime eventTime, String str, boolean z10) {
        r.b bVar = eventTime.f12067d;
        if ((bVar == null || !bVar.b()) && str.equals(this.f12148i)) {
            g();
        }
        this.f12146g.remove(str);
        this.f12147h.remove(str);
    }

    @Override // com.google.android.exoplayer2.analytics.d.a
    public void b(AnalyticsListener.EventTime eventTime, String str) {
        r.b bVar = eventTime.f12067d;
        if (bVar != null && bVar.b()) {
            return;
        }
        g();
        this.f12148i = str;
        this.f12149j = q1.a().setPlayerName("ExoPlayerLib").setPlayerVersion("2.19.1");
        y(eventTime.f12065b, eventTime.f12067d);
    }

    @Override // com.google.android.exoplayer2.analytics.d.a
    public void c(AnalyticsListener.EventTime eventTime, String str) {
    }

    @Override // com.google.android.exoplayer2.analytics.d.a
    public void d(AnalyticsListener.EventTime eventTime, String str, String str2) {
    }

    public LogSessionId m() {
        return this.f12142c.getSessionId();
    }

    @Override // com.google.android.exoplayer2.analytics.AnalyticsListener
    public void onBandwidthEstimate(AnalyticsListener.EventTime eventTime, int i10, long j10, long j11) {
        long longValue;
        r.b bVar = eventTime.f12067d;
        if (bVar != null) {
            String e10 = this.f12141b.e(eventTime.f12065b, (r.b) oe.a.e(bVar));
            Long l10 = (Long) this.f12147h.get(e10);
            Long l11 = (Long) this.f12146g.get(e10);
            HashMap hashMap = this.f12147h;
            long j12 = 0;
            if (l10 == null) {
                longValue = 0;
            } else {
                longValue = l10.longValue();
            }
            hashMap.put(e10, Long.valueOf(longValue + j10));
            HashMap hashMap2 = this.f12146g;
            if (l11 != null) {
                j12 = l11.longValue();
            }
            hashMap2.put(e10, Long.valueOf(j12 + i10));
        }
    }

    @Override // com.google.android.exoplayer2.analytics.AnalyticsListener
    public void onDownstreamFormatChanged(AnalyticsListener.EventTime eventTime, MediaLoadData mediaLoadData) {
        if (eventTime.f12067d != null) {
            b bVar = new b((Format) oe.a.e(mediaLoadData.f12847c), mediaLoadData.f12848d, this.f12141b.e(eventTime.f12065b, (r.b) oe.a.e(eventTime.f12067d)));
            int i10 = mediaLoadData.f12846b;
            if (i10 != 0) {
                if (i10 != 1) {
                    if (i10 != 2) {
                        if (i10 != 3) {
                            return;
                        }
                        this.f12156q = bVar;
                        return;
                    }
                } else {
                    this.f12155p = bVar;
                    return;
                }
            }
            this.f12154o = bVar;
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
                this.f12141b.c(events.c(1028));
            }
        }
    }

    @Override // com.google.android.exoplayer2.analytics.AnalyticsListener
    public void onLoadError(AnalyticsListener.EventTime eventTime, LoadEventInfo loadEventInfo, MediaLoadData mediaLoadData, IOException iOException, boolean z10) {
        this.f12161v = mediaLoadData.f12845a;
    }

    @Override // com.google.android.exoplayer2.analytics.AnalyticsListener
    public void onPlayerError(AnalyticsListener.EventTime eventTime, PlaybackException playbackException) {
        this.f12153n = playbackException;
    }

    @Override // com.google.android.exoplayer2.analytics.AnalyticsListener
    public void onPositionDiscontinuity(AnalyticsListener.EventTime eventTime, Player.PositionInfo positionInfo, Player.PositionInfo positionInfo2, int i10) {
        if (i10 == 1) {
            this.f12160u = true;
        }
        this.f12150k = i10;
    }

    @Override // com.google.android.exoplayer2.analytics.AnalyticsListener
    public void onVideoDisabled(AnalyticsListener.EventTime eventTime, DecoderCounters decoderCounters) {
        this.f12163x += decoderCounters.f12512g;
        this.f12164y += decoderCounters.f12510e;
    }

    @Override // com.google.android.exoplayer2.analytics.AnalyticsListener
    public void onVideoSizeChanged(AnalyticsListener.EventTime eventTime, VideoSize videoSize) {
        b bVar = this.f12154o;
        if (bVar != null) {
            Format format = bVar.f12168a;
            if (format.C == -1) {
                this.f12154o = new b(format.b().n0(videoSize.f13602d).S(videoSize.f13603e).G(), bVar.f12169b, bVar.f12170c);
            }
        }
    }
}
