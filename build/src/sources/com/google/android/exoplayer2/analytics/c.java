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
import ji.s;
import ji.t0;
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
    private final Context f13119a;

    /* renamed from: b  reason: collision with root package name */
    private final d f13120b;

    /* renamed from: c  reason: collision with root package name */
    private final PlaybackSession f13121c;

    /* renamed from: i  reason: collision with root package name */
    private String f13127i;

    /* renamed from: j  reason: collision with root package name */
    private PlaybackMetrics.Builder f13128j;

    /* renamed from: k  reason: collision with root package name */
    private int f13129k;

    /* renamed from: n  reason: collision with root package name */
    private PlaybackException f13132n;

    /* renamed from: o  reason: collision with root package name */
    private b f13133o;

    /* renamed from: p  reason: collision with root package name */
    private b f13134p;

    /* renamed from: q  reason: collision with root package name */
    private b f13135q;

    /* renamed from: r  reason: collision with root package name */
    private Format f13136r;

    /* renamed from: s  reason: collision with root package name */
    private Format f13137s;

    /* renamed from: t  reason: collision with root package name */
    private Format f13138t;

    /* renamed from: u  reason: collision with root package name */
    private boolean f13139u;

    /* renamed from: v  reason: collision with root package name */
    private int f13140v;

    /* renamed from: w  reason: collision with root package name */
    private boolean f13141w;

    /* renamed from: x  reason: collision with root package name */
    private int f13142x;

    /* renamed from: y  reason: collision with root package name */
    private int f13143y;

    /* renamed from: z  reason: collision with root package name */
    private int f13144z;

    /* renamed from: e  reason: collision with root package name */
    private final Timeline.d f13123e = new Timeline.d();

    /* renamed from: f  reason: collision with root package name */
    private final Timeline.b f13124f = new Timeline.b();

    /* renamed from: h  reason: collision with root package name */
    private final HashMap f13126h = new HashMap();

    /* renamed from: g  reason: collision with root package name */
    private final HashMap f13125g = new HashMap();

    /* renamed from: d  reason: collision with root package name */
    private final long f13122d = SystemClock.elapsedRealtime();

    /* renamed from: l  reason: collision with root package name */
    private int f13130l = 0;

    /* renamed from: m  reason: collision with root package name */
    private int f13131m = 0;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        public final int f13145a;

        /* renamed from: b  reason: collision with root package name */
        public final int f13146b;

        public a(int i10, int i11) {
            this.f13145a = i10;
            this.f13146b = i11;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        public final Format f13147a;

        /* renamed from: b  reason: collision with root package name */
        public final int f13148b;

        /* renamed from: c  reason: collision with root package name */
        public final String f13149c;

        public b(Format format, int i10, String str) {
            this.f13147a = format;
            this.f13148b = i10;
            this.f13149c = str;
        }
    }

    private c(Context context, PlaybackSession playbackSession) {
        this.f13119a = context.getApplicationContext();
        this.f13121c = playbackSession;
        com.google.android.exoplayer2.analytics.b bVar = new com.google.android.exoplayer2.analytics.b();
        this.f13120b = bVar;
        bVar.b(this);
    }

    private void A(int i10, long j10, Format format, int i11) {
        TrackChangeEvent.Builder timeSinceCreatedMillis = o1.a(i10).setTimeSinceCreatedMillis(j10 - this.f13122d);
        if (format != null) {
            timeSinceCreatedMillis.setTrackState(1);
            timeSinceCreatedMillis.setTrackChangeReason(p(i11));
            String str = format.f12705v;
            if (str != null) {
                timeSinceCreatedMillis.setContainerMimeType(str);
            }
            String str2 = format.f12706w;
            if (str2 != null) {
                timeSinceCreatedMillis.setSampleMimeType(str2);
            }
            String str3 = format.f12703t;
            if (str3 != null) {
                timeSinceCreatedMillis.setCodecName(str3);
            }
            int i12 = format.f12702s;
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
            String str4 = format.f12697i;
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
        this.f13121c.reportTrackChangeEvent(timeSinceCreatedMillis.build());
    }

    private int B(Player player) {
        int O = player.O();
        if (this.f13139u) {
            return 5;
        }
        if (this.f13141w) {
            return 13;
        }
        if (O == 4) {
            return 11;
        }
        if (O == 2) {
            int i10 = this.f13130l;
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
        } else if (O == 1 && this.f13130l != 0) {
            return 12;
        } else {
            return this.f13130l;
        }
    }

    private boolean e(b bVar) {
        if (bVar != null && bVar.f13149c.equals(this.f13120b.a())) {
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
        PlaybackMetrics.Builder builder = this.f13128j;
        if (builder != null && this.A) {
            builder.setAudioUnderrunCount(this.f13144z);
            this.f13128j.setVideoFramesDropped(this.f13142x);
            this.f13128j.setVideoFramesPlayed(this.f13143y);
            Long l10 = (Long) this.f13125g.get(this.f13127i);
            PlaybackMetrics.Builder builder2 = this.f13128j;
            if (l10 == null) {
                longValue = 0;
            } else {
                longValue = l10.longValue();
            }
            builder2.setNetworkTransferDurationMillis(longValue);
            Long l11 = (Long) this.f13126h.get(this.f13127i);
            PlaybackMetrics.Builder builder3 = this.f13128j;
            if (l11 == null) {
                longValue2 = 0;
            } else {
                longValue2 = l11.longValue();
            }
            builder3.setNetworkBytesRead(longValue2);
            PlaybackMetrics.Builder builder4 = this.f13128j;
            if (l11 != null && l11.longValue() > 0) {
                i10 = 1;
            } else {
                i10 = 0;
            }
            builder4.setStreamSource(i10);
            this.f13121c.reportPlaybackMetrics(this.f13128j.build());
        }
        this.f13128j = null;
        this.f13127i = null;
        this.f13144z = 0;
        this.f13142x = 0;
        this.f13143y = 0;
        this.f13136r = null;
        this.f13137s = null;
        this.f13138t = null;
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
            for (int i10 = 0; i10 < aVar.f13029d; i10++) {
                if (aVar.g(i10) && (mVar = aVar.c(i10).f12709z) != null) {
                    return mVar;
                }
            }
        }
        return null;
    }

    private static int j(m mVar) {
        for (int i10 = 0; i10 < mVar.f48220o; i10++) {
            UUID uuid = mVar.k(i10).f48222e;
            if (uuid.equals(lc.d.f37056d)) {
                return 3;
            }
            if (uuid.equals(lc.d.f37057e)) {
                return 2;
            }
            if (uuid.equals(lc.d.f37055c)) {
                return 6;
            }
        }
        return 1;
    }

    private static a k(PlaybackException playbackException, Context context, boolean z10) {
        int i10;
        boolean z11;
        int i11;
        if (playbackException.f12949d == 1001) {
            return new a(20, 0);
        }
        if (playbackException instanceof j) {
            j jVar = (j) playbackException;
            if (jVar.f13622t == 1) {
                z11 = true;
            } else {
                z11 = false;
            }
            i10 = jVar.f13626x;
        } else {
            i10 = 0;
            z11 = false;
        }
        Throwable th2 = (Throwable) ne.a.e(playbackException.getCause());
        if (th2 instanceof IOException) {
            if (th2 instanceof g.f) {
                return new a(5, ((g.f) th2).f14467o);
            }
            if (!(th2 instanceof g.e) && !(th2 instanceof l0)) {
                boolean z12 = th2 instanceof g.d;
                if (!z12 && !(th2 instanceof d0.a)) {
                    if (playbackException.f12949d == 1002) {
                        return new a(21, 0);
                    }
                    if (th2 instanceof n.a) {
                        Throwable th3 = (Throwable) ne.a.e(th2.getCause());
                        int i12 = w0.f40279a;
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
                        if (w0.f40279a >= 21 && (cause instanceof ErrnoException) && ((ErrnoException) cause).errno == OsConstants.EACCES) {
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
                    if (z12 && ((g.d) th2).f14465i == 1) {
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
                return new a(13, w0.Z(((r.b) th2).f25023o));
            }
            if (th2 instanceof fd.m) {
                return new a(14, w0.Z(((fd.m) th2).f24982e));
            }
            if (th2 instanceof OutOfMemoryError) {
                return new a(14, 0);
            }
            if (th2 instanceof f.b) {
                return new a(17, ((f.b) th2).f13246d);
            }
            if (th2 instanceof f.e) {
                return new a(18, ((f.e) th2).f13251d);
            }
            if (w0.f40279a >= 16 && (th2 instanceof MediaCodec.CryptoException)) {
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
        MediaItem.h hVar = mediaItem.f12744e;
        if (hVar == null) {
            return 0;
        }
        int z02 = w0.z0(hVar.f12834d, hVar.f12835e);
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
                this.f13120b.g(c10);
            } else if (b10 == 11) {
                this.f13120b.f(c10, this.f13129k);
            } else {
                this.f13120b.d(c10);
            }
        }
    }

    private void r(long j10) {
        int n10 = n(this.f13119a);
        if (n10 != this.f13131m) {
            this.f13131m = n10;
            this.f13121c.reportNetworkEvent(p1.a().setNetworkType(n10).setTimeSinceCreatedMillis(j10 - this.f13122d).build());
        }
    }

    private void s(long j10) {
        boolean z10;
        PlaybackException playbackException = this.f13132n;
        if (playbackException == null) {
            return;
        }
        Context context = this.f13119a;
        if (this.f13140v == 4) {
            z10 = true;
        } else {
            z10 = false;
        }
        a k10 = k(playbackException, context, z10);
        this.f13121c.reportPlaybackErrorEvent(n1.a().setTimeSinceCreatedMillis(j10 - this.f13122d).setErrorCode(k10.f13145a).setSubErrorCode(k10.f13146b).setException(playbackException).build());
        this.A = true;
        this.f13132n = null;
    }

    private void t(Player player, AnalyticsListener.Events events, long j10) {
        if (player.O() != 2) {
            this.f13139u = false;
        }
        if (player.m() == null) {
            this.f13141w = false;
        } else if (events.a(10)) {
            this.f13141w = true;
        }
        int B = B(player);
        if (this.f13130l != B) {
            this.f13130l = B;
            this.A = true;
            this.f13121c.reportPlaybackStateEvent(m1.a().setState(this.f13130l).setTimeSinceCreatedMillis(j10 - this.f13122d).build());
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
        if (e(this.f13133o)) {
            b bVar = this.f13133o;
            Format format = bVar.f13147a;
            if (format.C != -1) {
                z(j10, format, bVar.f13148b);
                this.f13133o = null;
            }
        }
        if (e(this.f13134p)) {
            b bVar2 = this.f13134p;
            v(j10, bVar2.f13147a, bVar2.f13148b);
            this.f13134p = null;
        }
        if (e(this.f13135q)) {
            b bVar3 = this.f13135q;
            x(j10, bVar3.f13147a, bVar3.f13148b);
            this.f13135q = null;
        }
    }

    private void v(long j10, Format format, int i10) {
        if (w0.c(this.f13137s, format)) {
            return;
        }
        if (this.f13137s == null && i10 == 0) {
            i10 = 1;
        }
        this.f13137s = format;
        A(0, j10, format, i10);
    }

    private void w(Player player, AnalyticsListener.Events events) {
        m i10;
        if (events.a(0)) {
            AnalyticsListener.EventTime c10 = events.c(0);
            if (this.f13128j != null) {
                y(c10.f13044b, c10.f13046d);
            }
        }
        if (events.a(2) && this.f13128j != null && (i10 = i(player.o().b())) != null) {
            r1.a(w0.j(this.f13128j)).setDrmType(j(i10));
        }
        if (events.a(1011)) {
            this.f13144z++;
        }
    }

    private void x(long j10, Format format, int i10) {
        if (w0.c(this.f13138t, format)) {
            return;
        }
        if (this.f13138t == null && i10 == 0) {
            i10 = 1;
        }
        this.f13138t = format;
        A(2, j10, format, i10);
    }

    private void y(Timeline timeline, r.b bVar) {
        int f10;
        int i10;
        PlaybackMetrics.Builder builder = this.f13128j;
        if (bVar == null || (f10 = timeline.f(bVar.f47284a)) == -1) {
            return;
        }
        timeline.j(f10, this.f13124f);
        timeline.r(this.f13124f.f12996i, this.f13123e);
        builder.setStreamType(o(this.f13123e.f13007i));
        Timeline.d dVar = this.f13123e;
        if (dVar.f13018y != -9223372036854775807L && !dVar.f13016w && !dVar.f13013t && !dVar.g()) {
            builder.setMediaDurationMillis(this.f13123e.f());
        }
        if (this.f13123e.g()) {
            i10 = 2;
        } else {
            i10 = 1;
        }
        builder.setPlaybackType(i10);
        this.A = true;
    }

    private void z(long j10, Format format, int i10) {
        if (w0.c(this.f13136r, format)) {
            return;
        }
        if (this.f13136r == null && i10 == 0) {
            i10 = 1;
        }
        this.f13136r = format;
        A(1, j10, format, i10);
    }

    @Override // com.google.android.exoplayer2.analytics.d.a
    public void a(AnalyticsListener.EventTime eventTime, String str, boolean z10) {
        r.b bVar = eventTime.f13046d;
        if ((bVar == null || !bVar.b()) && str.equals(this.f13127i)) {
            g();
        }
        this.f13125g.remove(str);
        this.f13126h.remove(str);
    }

    @Override // com.google.android.exoplayer2.analytics.d.a
    public void b(AnalyticsListener.EventTime eventTime, String str) {
        r.b bVar = eventTime.f13046d;
        if (bVar != null && bVar.b()) {
            return;
        }
        g();
        this.f13127i = str;
        this.f13128j = q1.a().setPlayerName("ExoPlayerLib").setPlayerVersion("2.19.1");
        y(eventTime.f13044b, eventTime.f13046d);
    }

    @Override // com.google.android.exoplayer2.analytics.d.a
    public void c(AnalyticsListener.EventTime eventTime, String str) {
    }

    @Override // com.google.android.exoplayer2.analytics.d.a
    public void d(AnalyticsListener.EventTime eventTime, String str, String str2) {
    }

    public LogSessionId m() {
        return this.f13121c.getSessionId();
    }

    @Override // com.google.android.exoplayer2.analytics.AnalyticsListener
    public void onBandwidthEstimate(AnalyticsListener.EventTime eventTime, int i10, long j10, long j11) {
        long longValue;
        r.b bVar = eventTime.f13046d;
        if (bVar != null) {
            String h10 = this.f13120b.h(eventTime.f13044b, (r.b) ne.a.e(bVar));
            Long l10 = (Long) this.f13126h.get(h10);
            Long l11 = (Long) this.f13125g.get(h10);
            HashMap hashMap = this.f13126h;
            long j12 = 0;
            if (l10 == null) {
                longValue = 0;
            } else {
                longValue = l10.longValue();
            }
            hashMap.put(h10, Long.valueOf(longValue + j10));
            HashMap hashMap2 = this.f13125g;
            if (l11 != null) {
                j12 = l11.longValue();
            }
            hashMap2.put(h10, Long.valueOf(j12 + i10));
        }
    }

    @Override // com.google.android.exoplayer2.analytics.AnalyticsListener
    public void onDownstreamFormatChanged(AnalyticsListener.EventTime eventTime, MediaLoadData mediaLoadData) {
        if (eventTime.f13046d != null) {
            b bVar = new b((Format) ne.a.e(mediaLoadData.f13764c), mediaLoadData.f13765d, this.f13120b.h(eventTime.f13044b, (r.b) ne.a.e(eventTime.f13046d)));
            int i10 = mediaLoadData.f13763b;
            if (i10 != 0) {
                if (i10 != 1) {
                    if (i10 != 2) {
                        if (i10 != 3) {
                            return;
                        }
                        this.f13135q = bVar;
                        return;
                    }
                } else {
                    this.f13134p = bVar;
                    return;
                }
            }
            this.f13133o = bVar;
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
                this.f13120b.c(events.c(1028));
            }
        }
    }

    @Override // com.google.android.exoplayer2.analytics.AnalyticsListener
    public void onLoadError(AnalyticsListener.EventTime eventTime, LoadEventInfo loadEventInfo, MediaLoadData mediaLoadData, IOException iOException, boolean z10) {
        this.f13140v = mediaLoadData.f13762a;
    }

    @Override // com.google.android.exoplayer2.analytics.AnalyticsListener
    public void onPlayerError(AnalyticsListener.EventTime eventTime, PlaybackException playbackException) {
        this.f13132n = playbackException;
    }

    @Override // com.google.android.exoplayer2.analytics.AnalyticsListener
    public void onPositionDiscontinuity(AnalyticsListener.EventTime eventTime, Player.PositionInfo positionInfo, Player.PositionInfo positionInfo2, int i10) {
        if (i10 == 1) {
            this.f13139u = true;
        }
        this.f13129k = i10;
    }

    @Override // com.google.android.exoplayer2.analytics.AnalyticsListener
    public void onVideoDisabled(AnalyticsListener.EventTime eventTime, DecoderCounters decoderCounters) {
        this.f13142x += decoderCounters.f13491g;
        this.f13143y += decoderCounters.f13489e;
    }

    @Override // com.google.android.exoplayer2.analytics.AnalyticsListener
    public void onVideoSizeChanged(AnalyticsListener.EventTime eventTime, VideoSize videoSize) {
        b bVar = this.f13133o;
        if (bVar != null) {
            Format format = bVar.f13147a;
            if (format.C == -1) {
                this.f13133o = new b(format.b().n0(videoSize.f14519d).S(videoSize.f14520e).G(), bVar.f13148b, bVar.f13149c);
            }
        }
    }
}
