package com.google.android.exoplayer2.analytics;

import android.os.Looper;
import android.util.SparseArray;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import com.google.android.exoplayer2.DeviceInfo;
import com.google.android.exoplayer2.Format;
import com.google.android.exoplayer2.MediaItem;
import com.google.android.exoplayer2.MediaMetadata;
import com.google.android.exoplayer2.PlaybackException;
import com.google.android.exoplayer2.PlaybackParameters;
import com.google.android.exoplayer2.Player;
import com.google.android.exoplayer2.Timeline;
import com.google.android.exoplayer2.Tracks;
import com.google.android.exoplayer2.analytics.AnalyticsListener;
import com.google.android.exoplayer2.decoder.DecoderCounters;
import com.google.android.exoplayer2.decoder.DecoderReuseEvaluation;
import com.google.android.exoplayer2.metadata.Metadata;
import com.google.android.exoplayer2.source.LoadEventInfo;
import com.google.android.exoplayer2.source.MediaLoadData;
import com.google.android.exoplayer2.text.CueGroup;
import com.google.android.exoplayer2.video.VideoSize;
import com.reactnativecommunity.webview.RNCWebViewManager;
import java.io.IOException;
import java.util.List;
import oe.q;
import oe.u;
import oe.w0;
import oe.x;
import pi.j;
import qi.s;
import qi.t;
import qi.v;
import rd.r;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class a implements nc.a {

    /* renamed from: d  reason: collision with root package name */
    private final oe.e f12685d;

    /* renamed from: e  reason: collision with root package name */
    private final Timeline.b f12686e;

    /* renamed from: i  reason: collision with root package name */
    private final Timeline.d f12687i;

    /* renamed from: o  reason: collision with root package name */
    private final C0161a f12688o;

    /* renamed from: p  reason: collision with root package name */
    private final SparseArray f12689p;

    /* renamed from: q  reason: collision with root package name */
    private x f12690q;

    /* renamed from: r  reason: collision with root package name */
    private Player f12691r;

    /* renamed from: s  reason: collision with root package name */
    private u f12692s;

    /* renamed from: t  reason: collision with root package name */
    private boolean f12693t;

    /* JADX INFO: Access modifiers changed from: private */
    /* renamed from: com.google.android.exoplayer2.analytics.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class C0161a {

        /* renamed from: a  reason: collision with root package name */
        private final Timeline.b f12694a;

        /* renamed from: b  reason: collision with root package name */
        private s f12695b = s.t();

        /* renamed from: c  reason: collision with root package name */
        private t f12696c = t.j();

        /* renamed from: d  reason: collision with root package name */
        private r.b f12697d;

        /* renamed from: e  reason: collision with root package name */
        private r.b f12698e;

        /* renamed from: f  reason: collision with root package name */
        private r.b f12699f;

        public C0161a(Timeline.b bVar) {
            this.f12694a = bVar;
        }

        private void b(t.a aVar, r.b bVar, Timeline timeline) {
            if (bVar != null) {
                if (timeline.f(bVar.f46437a) != -1) {
                    aVar.f(bVar, timeline);
                    return;
                }
                Timeline timeline2 = (Timeline) this.f12696c.get(bVar);
                if (timeline2 != null) {
                    aVar.f(bVar, timeline2);
                }
            }
        }

        private static r.b c(Player player, s sVar, r.b bVar, Timeline.b bVar2) {
            Object q10;
            int i10;
            Timeline v10 = player.v();
            int E = player.E();
            if (v10.u()) {
                q10 = null;
            } else {
                q10 = v10.q(E);
            }
            if (!player.f() && !v10.u()) {
                i10 = v10.j(E, bVar2).g(w0.K0(player.Z()) - bVar2.q());
            } else {
                i10 = -1;
            }
            int i11 = i10;
            for (int i12 = 0; i12 < sVar.size(); i12++) {
                r.b bVar3 = (r.b) sVar.get(i12);
                if (i(bVar3, q10, player.f(), player.r(), player.I(), i11)) {
                    return bVar3;
                }
            }
            if (!sVar.isEmpty() || bVar == null || !i(bVar, q10, player.f(), player.r(), player.I(), i11)) {
                return null;
            }
            return bVar;
        }

        private static boolean i(r.b bVar, Object obj, boolean z10, int i10, int i11, int i12) {
            if (!bVar.f46437a.equals(obj)) {
                return false;
            }
            if (!z10 || bVar.f46438b != i10 || bVar.f46439c != i11) {
                if (z10 || bVar.f46438b != -1 || bVar.f46441e != i12) {
                    return false;
                }
                return true;
            }
            return true;
        }

        private void m(Timeline timeline) {
            t.a a10 = t.a();
            if (this.f12695b.isEmpty()) {
                b(a10, this.f12698e, timeline);
                if (!j.a(this.f12699f, this.f12698e)) {
                    b(a10, this.f12699f, timeline);
                }
                if (!j.a(this.f12697d, this.f12698e) && !j.a(this.f12697d, this.f12699f)) {
                    b(a10, this.f12697d, timeline);
                }
            } else {
                for (int i10 = 0; i10 < this.f12695b.size(); i10++) {
                    b(a10, (r.b) this.f12695b.get(i10), timeline);
                }
                if (!this.f12695b.contains(this.f12697d)) {
                    b(a10, this.f12697d, timeline);
                }
            }
            this.f12696c = a10.c();
        }

        public r.b d() {
            return this.f12697d;
        }

        public r.b e() {
            if (this.f12695b.isEmpty()) {
                return null;
            }
            return (r.b) v.c(this.f12695b);
        }

        public Timeline f(r.b bVar) {
            return (Timeline) this.f12696c.get(bVar);
        }

        public r.b g() {
            return this.f12698e;
        }

        public r.b h() {
            return this.f12699f;
        }

        public void j(Player player) {
            this.f12697d = c(player, this.f12695b, this.f12698e, this.f12694a);
        }

        public void k(List list, r.b bVar, Player player) {
            this.f12695b = s.o(list);
            if (!list.isEmpty()) {
                this.f12698e = (r.b) list.get(0);
                this.f12699f = (r.b) oe.a.e(bVar);
            }
            if (this.f12697d == null) {
                this.f12697d = c(player, this.f12695b, this.f12698e, this.f12694a);
            }
            m(player.v());
        }

        public void l(Player player) {
            this.f12697d = c(player, this.f12695b, this.f12698e, this.f12694a);
            m(player.v());
        }
    }

    public a(oe.e eVar) {
        this.f12685d = (oe.e) oe.a.e(eVar);
        this.f12690q = new x(w0.R(), eVar, new x.b() { // from class: nc.z
            @Override // oe.x.b
            public final void a(Object obj, oe.q qVar) {
                com.google.android.exoplayer2.analytics.a.S((AnalyticsListener) obj, qVar);
            }
        });
        Timeline.b bVar = new Timeline.b();
        this.f12686e = bVar;
        this.f12687i = new Timeline.d();
        this.f12688o = new C0161a(bVar);
        this.f12689p = new SparseArray();
    }

    public static /* synthetic */ void J0(AnalyticsListener.EventTime eventTime, Format format, DecoderReuseEvaluation decoderReuseEvaluation, AnalyticsListener analyticsListener) {
        analyticsListener.onAudioInputFormatChanged(eventTime, format);
        analyticsListener.onAudioInputFormatChanged(eventTime, format, decoderReuseEvaluation);
    }

    public static /* synthetic */ void K0(AnalyticsListener.EventTime eventTime, Format format, DecoderReuseEvaluation decoderReuseEvaluation, AnalyticsListener analyticsListener) {
        analyticsListener.onVideoInputFormatChanged(eventTime, format);
        analyticsListener.onVideoInputFormatChanged(eventTime, format, decoderReuseEvaluation);
    }

    public static /* synthetic */ void O0(AnalyticsListener.EventTime eventTime, int i10, Player.PositionInfo positionInfo, Player.PositionInfo positionInfo2, AnalyticsListener analyticsListener) {
        analyticsListener.onPositionDiscontinuity(eventTime, i10);
        analyticsListener.onPositionDiscontinuity(eventTime, positionInfo, positionInfo2, i10);
    }

    public static /* synthetic */ void Q0(AnalyticsListener.EventTime eventTime, String str, long j10, long j11, AnalyticsListener analyticsListener) {
        analyticsListener.onAudioDecoderInitialized(eventTime, str, j10);
        analyticsListener.onAudioDecoderInitialized(eventTime, str, j11, j10);
    }

    public static /* synthetic */ void R0(AnalyticsListener.EventTime eventTime, String str, long j10, long j11, AnalyticsListener analyticsListener) {
        analyticsListener.onVideoDecoderInitialized(eventTime, str, j10);
        analyticsListener.onVideoDecoderInitialized(eventTime, str, j11, j10);
    }

    public static /* synthetic */ void S(AnalyticsListener analyticsListener, q qVar) {
    }

    private AnalyticsListener.EventTime W0(r.b bVar) {
        Timeline f10;
        oe.a.e(this.f12691r);
        if (bVar == null) {
            f10 = null;
        } else {
            f10 = this.f12688o.f(bVar);
        }
        if (bVar != null && f10 != null) {
            return V0(f10, f10.l(bVar.f46437a, this.f12686e).f12594i, bVar);
        }
        int Q = this.f12691r.Q();
        Timeline v10 = this.f12691r.v();
        if (Q >= v10.t()) {
            v10 = Timeline.f12581d;
        }
        return V0(v10, Q, null);
    }

    private AnalyticsListener.EventTime X0() {
        return W0(this.f12688o.e());
    }

    private AnalyticsListener.EventTime Y0(int i10, r.b bVar) {
        oe.a.e(this.f12691r);
        if (bVar != null) {
            if (this.f12688o.f(bVar) != null) {
                return W0(bVar);
            }
            return V0(Timeline.f12581d, i10, bVar);
        }
        Timeline v10 = this.f12691r.v();
        if (i10 >= v10.t()) {
            v10 = Timeline.f12581d;
        }
        return V0(v10, i10, null);
    }

    private AnalyticsListener.EventTime Z0() {
        return W0(this.f12688o.g());
    }

    private AnalyticsListener.EventTime a1() {
        return W0(this.f12688o.h());
    }

    private AnalyticsListener.EventTime b1(PlaybackException playbackException) {
        rd.q qVar;
        if ((playbackException instanceof com.google.android.exoplayer2.j) && (qVar = ((com.google.android.exoplayer2.j) playbackException).f13287y) != null) {
            return W0(new r.b(qVar));
        }
        return U0();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void c1() {
        final AnalyticsListener.EventTime U0 = U0();
        d1(U0, 1028, new x.a() { // from class: nc.d1
            @Override // oe.x.a
            public final void invoke(Object obj) {
                ((AnalyticsListener) obj).onPlayerReleased(AnalyticsListener.EventTime.this);
            }
        });
        this.f12690q.i();
    }

    public static /* synthetic */ void j0(AnalyticsListener.EventTime eventTime, int i10, AnalyticsListener analyticsListener) {
        analyticsListener.onDrmSessionAcquired(eventTime);
        analyticsListener.onDrmSessionAcquired(eventTime, i10);
    }

    public static /* synthetic */ void n0(AnalyticsListener.EventTime eventTime, VideoSize videoSize, AnalyticsListener analyticsListener) {
        analyticsListener.onVideoSizeChanged(eventTime, videoSize);
        analyticsListener.onVideoSizeChanged(eventTime, videoSize.f14179d, videoSize.f14180e, videoSize.f14181i, videoSize.f14182o);
    }

    public static /* synthetic */ void t0(AnalyticsListener.EventTime eventTime, boolean z10, AnalyticsListener analyticsListener) {
        analyticsListener.onLoadingChanged(eventTime, z10);
        analyticsListener.onIsLoadingChanged(eventTime, z10);
    }

    @Override // sc.u
    public final void A(int i10, r.b bVar, final int i11) {
        final AnalyticsListener.EventTime Y0 = Y0(i10, bVar);
        d1(Y0, 1022, new x.a() { // from class: nc.s0
            @Override // oe.x.a
            public final void invoke(Object obj) {
                com.google.android.exoplayer2.analytics.a.j0(AnalyticsListener.EventTime.this, i11, (AnalyticsListener) obj);
            }
        });
    }

    @Override // sc.u
    public final void B(int i10, r.b bVar, final Exception exc) {
        final AnalyticsListener.EventTime Y0 = Y0(i10, bVar);
        d1(Y0, IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET, new x.a() { // from class: nc.o0
            @Override // oe.x.a
            public final void invoke(Object obj) {
                ((AnalyticsListener) obj).onDrmSessionManagerError(AnalyticsListener.EventTime.this, exc);
            }
        });
    }

    @Override // rd.y
    public final void C(int i10, r.b bVar, final LoadEventInfo loadEventInfo, final MediaLoadData mediaLoadData) {
        final AnalyticsListener.EventTime Y0 = Y0(i10, bVar);
        d1(Y0, RNCWebViewManager.COMMAND_CLEAR_HISTORY, new x.a() { // from class: nc.h1
            @Override // oe.x.a
            public final void invoke(Object obj) {
                ((AnalyticsListener) obj).onLoadCanceled(AnalyticsListener.EventTime.this, loadEventInfo, mediaLoadData);
            }
        });
    }

    @Override // rd.y
    public final void D(int i10, r.b bVar, final LoadEventInfo loadEventInfo, final MediaLoadData mediaLoadData) {
        final AnalyticsListener.EventTime Y0 = Y0(i10, bVar);
        d1(Y0, 1000, new x.a() { // from class: nc.t0
            @Override // oe.x.a
            public final void invoke(Object obj) {
                ((AnalyticsListener) obj).onLoadStarted(AnalyticsListener.EventTime.this, loadEventInfo, mediaLoadData);
            }
        });
    }

    @Override // sc.u
    public final void E(int i10, r.b bVar) {
        final AnalyticsListener.EventTime Y0 = Y0(i10, bVar);
        d1(Y0, 1025, new x.a() { // from class: nc.g1
            @Override // oe.x.a
            public final void invoke(Object obj) {
                ((AnalyticsListener) obj).onDrmKeysRestored(AnalyticsListener.EventTime.this);
            }
        });
    }

    @Override // rd.y
    public final void F(int i10, r.b bVar, final MediaLoadData mediaLoadData) {
        final AnalyticsListener.EventTime Y0 = Y0(i10, bVar);
        d1(Y0, 1005, new x.a() { // from class: nc.n0
            @Override // oe.x.a
            public final void invoke(Object obj) {
                ((AnalyticsListener) obj).onUpstreamDiscarded(AnalyticsListener.EventTime.this, mediaLoadData);
            }
        });
    }

    @Override // rd.y
    public final void G(int i10, r.b bVar, final LoadEventInfo loadEventInfo, final MediaLoadData mediaLoadData) {
        final AnalyticsListener.EventTime Y0 = Y0(i10, bVar);
        d1(Y0, RNCWebViewManager.COMMAND_CLEAR_CACHE, new x.a() { // from class: nc.i
            @Override // oe.x.a
            public final void invoke(Object obj) {
                ((AnalyticsListener) obj).onLoadCompleted(AnalyticsListener.EventTime.this, loadEventInfo, mediaLoadData);
            }
        });
    }

    @Override // rd.y
    public final void H(int i10, r.b bVar, final LoadEventInfo loadEventInfo, final MediaLoadData mediaLoadData, final IOException iOException, final boolean z10) {
        final AnalyticsListener.EventTime Y0 = Y0(i10, bVar);
        d1(Y0, 1003, new x.a() { // from class: nc.p
            @Override // oe.x.a
            public final void invoke(Object obj) {
                ((AnalyticsListener) obj).onLoadError(AnalyticsListener.EventTime.this, loadEventInfo, mediaLoadData, iOException, z10);
            }
        });
    }

    @Override // sc.u
    public final void J(int i10, r.b bVar) {
        final AnalyticsListener.EventTime Y0 = Y0(i10, bVar);
        d1(Y0, 1026, new x.a() { // from class: nc.z0
            @Override // oe.x.a
            public final void invoke(Object obj) {
                ((AnalyticsListener) obj).onDrmKeysRemoved(AnalyticsListener.EventTime.this);
            }
        });
    }

    protected final AnalyticsListener.EventTime U0() {
        return W0(this.f12688o.d());
    }

    protected final AnalyticsListener.EventTime V0(Timeline timeline, int i10, r.b bVar) {
        r.b bVar2;
        boolean z10;
        if (timeline.u()) {
            bVar2 = null;
        } else {
            bVar2 = bVar;
        }
        long b10 = this.f12685d.b();
        if (timeline.equals(this.f12691r.v()) && i10 == this.f12691r.Q()) {
            z10 = true;
        } else {
            z10 = false;
        }
        long j10 = 0;
        if (bVar2 != null && bVar2.b()) {
            if (z10 && this.f12691r.r() == bVar2.f46438b && this.f12691r.I() == bVar2.f46439c) {
                j10 = this.f12691r.Z();
            }
        } else if (z10) {
            j10 = this.f12691r.K();
        } else if (!timeline.u()) {
            j10 = timeline.r(i10, this.f12687i).d();
        }
        return new AnalyticsListener.EventTime(b10, timeline, i10, bVar2, j10, this.f12691r.v(), this.f12691r.Q(), this.f12688o.d(), this.f12691r.Z(), this.f12691r.g());
    }

    @Override // nc.a
    public final void a(final Exception exc) {
        final AnalyticsListener.EventTime a12 = a1();
        d1(a12, 1014, new x.a() { // from class: nc.l0
            @Override // oe.x.a
            public final void invoke(Object obj) {
                ((AnalyticsListener) obj).onAudioSinkError(AnalyticsListener.EventTime.this, exc);
            }
        });
    }

    @Override // nc.a
    public final void b(final String str) {
        final AnalyticsListener.EventTime a12 = a1();
        d1(a12, 1019, new x.a() { // from class: nc.y0
            @Override // oe.x.a
            public final void invoke(Object obj) {
                ((AnalyticsListener) obj).onVideoDecoderReleased(AnalyticsListener.EventTime.this, str);
            }
        });
    }

    @Override // nc.a
    public final void c(final DecoderCounters decoderCounters) {
        final AnalyticsListener.EventTime a12 = a1();
        d1(a12, 1007, new x.a() { // from class: nc.q0
            @Override // oe.x.a
            public final void invoke(Object obj) {
                ((AnalyticsListener) obj).onAudioEnabled(AnalyticsListener.EventTime.this, decoderCounters);
            }
        });
    }

    @Override // nc.a
    public final void d(final String str, final long j10, final long j11) {
        final AnalyticsListener.EventTime a12 = a1();
        d1(a12, 1016, new x.a() { // from class: nc.y
            @Override // oe.x.a
            public final void invoke(Object obj) {
                com.google.android.exoplayer2.analytics.a.R0(AnalyticsListener.EventTime.this, str, j11, j10, (AnalyticsListener) obj);
            }
        });
    }

    protected final void d1(AnalyticsListener.EventTime eventTime, int i10, x.a aVar) {
        this.f12689p.put(i10, eventTime);
        this.f12690q.k(i10, aVar);
    }

    @Override // nc.a
    public final void e(final String str) {
        final AnalyticsListener.EventTime a12 = a1();
        d1(a12, 1012, new x.a() { // from class: nc.b0
            @Override // oe.x.a
            public final void invoke(Object obj) {
                ((AnalyticsListener) obj).onAudioDecoderReleased(AnalyticsListener.EventTime.this, str);
            }
        });
    }

    @Override // nc.a
    public final void f(final String str, final long j10, final long j11) {
        final AnalyticsListener.EventTime a12 = a1();
        d1(a12, 1008, new x.a() { // from class: nc.b
            @Override // oe.x.a
            public final void invoke(Object obj) {
                com.google.android.exoplayer2.analytics.a.Q0(AnalyticsListener.EventTime.this, str, j11, j10, (AnalyticsListener) obj);
            }
        });
    }

    @Override // rd.y
    public final void g(int i10, r.b bVar, final MediaLoadData mediaLoadData) {
        final AnalyticsListener.EventTime Y0 = Y0(i10, bVar);
        d1(Y0, 1004, new x.a() { // from class: nc.n
            @Override // oe.x.a
            public final void invoke(Object obj) {
                ((AnalyticsListener) obj).onDownstreamFormatChanged(AnalyticsListener.EventTime.this, mediaLoadData);
            }
        });
    }

    @Override // nc.a
    public final void h(final Format format, final DecoderReuseEvaluation decoderReuseEvaluation) {
        final AnalyticsListener.EventTime a12 = a1();
        d1(a12, 1017, new x.a() { // from class: nc.u
            @Override // oe.x.a
            public final void invoke(Object obj) {
                com.google.android.exoplayer2.analytics.a.K0(AnalyticsListener.EventTime.this, format, decoderReuseEvaluation, (AnalyticsListener) obj);
            }
        });
    }

    @Override // nc.a
    public final void i(final long j10) {
        final AnalyticsListener.EventTime a12 = a1();
        d1(a12, 1010, new x.a() { // from class: nc.d0
            @Override // oe.x.a
            public final void invoke(Object obj) {
                ((AnalyticsListener) obj).onAudioPositionAdvancing(AnalyticsListener.EventTime.this, j10);
            }
        });
    }

    @Override // nc.a
    public final void j(final Exception exc) {
        final AnalyticsListener.EventTime a12 = a1();
        d1(a12, 1030, new x.a() { // from class: nc.j1
            @Override // oe.x.a
            public final void invoke(Object obj) {
                ((AnalyticsListener) obj).onVideoCodecError(AnalyticsListener.EventTime.this, exc);
            }
        });
    }

    @Override // nc.a
    public final void k(final DecoderCounters decoderCounters) {
        final AnalyticsListener.EventTime Z0 = Z0();
        d1(Z0, 1020, new x.a() { // from class: nc.i0
            @Override // oe.x.a
            public final void invoke(Object obj) {
                ((AnalyticsListener) obj).onVideoDisabled(AnalyticsListener.EventTime.this, decoderCounters);
            }
        });
    }

    @Override // nc.a
    public final void l(final DecoderCounters decoderCounters) {
        final AnalyticsListener.EventTime Z0 = Z0();
        d1(Z0, 1013, new x.a() { // from class: nc.a0
            @Override // oe.x.a
            public final void invoke(Object obj) {
                ((AnalyticsListener) obj).onAudioDisabled(AnalyticsListener.EventTime.this, decoderCounters);
            }
        });
    }

    @Override // nc.a
    public final void m(final int i10, final long j10) {
        final AnalyticsListener.EventTime Z0 = Z0();
        d1(Z0, 1018, new x.a() { // from class: nc.h0
            @Override // oe.x.a
            public final void invoke(Object obj) {
                ((AnalyticsListener) obj).onDroppedVideoFrames(AnalyticsListener.EventTime.this, i10, j10);
            }
        });
    }

    @Override // nc.a
    public final void n(final Format format, final DecoderReuseEvaluation decoderReuseEvaluation) {
        final AnalyticsListener.EventTime a12 = a1();
        d1(a12, 1009, new x.a() { // from class: nc.d
            @Override // oe.x.a
            public final void invoke(Object obj) {
                com.google.android.exoplayer2.analytics.a.J0(AnalyticsListener.EventTime.this, format, decoderReuseEvaluation, (AnalyticsListener) obj);
            }
        });
    }

    @Override // nc.a
    public final void o(final Object obj, final long j10) {
        final AnalyticsListener.EventTime a12 = a1();
        d1(a12, 26, new x.a() { // from class: nc.b1
            @Override // oe.x.a
            public final void invoke(Object obj2) {
                ((AnalyticsListener) obj2).onRenderedFirstFrame(AnalyticsListener.EventTime.this, obj, j10);
            }
        });
    }

    @Override // com.google.android.exoplayer2.Player.b
    public void onAvailableCommandsChanged(final Player.Commands commands) {
        final AnalyticsListener.EventTime U0 = U0();
        d1(U0, 13, new x.a() { // from class: nc.t
            @Override // oe.x.a
            public final void invoke(Object obj) {
                ((AnalyticsListener) obj).onAvailableCommandsChanged(AnalyticsListener.EventTime.this, commands);
            }
        });
    }

    @Override // com.google.android.exoplayer2.Player.b, ae.m
    public void onCues(final List list) {
        final AnalyticsListener.EventTime U0 = U0();
        d1(U0, 27, new x.a() { // from class: nc.f0
            @Override // oe.x.a
            public final void invoke(Object obj) {
                ((AnalyticsListener) obj).onCues(AnalyticsListener.EventTime.this, list);
            }
        });
    }

    @Override // com.google.android.exoplayer2.Player.b
    public void onDeviceInfoChanged(final DeviceInfo deviceInfo) {
        final AnalyticsListener.EventTime U0 = U0();
        d1(U0, 29, new x.a() { // from class: nc.v0
            @Override // oe.x.a
            public final void invoke(Object obj) {
                ((AnalyticsListener) obj).onDeviceInfoChanged(AnalyticsListener.EventTime.this, deviceInfo);
            }
        });
    }

    @Override // com.google.android.exoplayer2.Player.b
    public void onDeviceVolumeChanged(final int i10, final boolean z10) {
        final AnalyticsListener.EventTime U0 = U0();
        d1(U0, 30, new x.a() { // from class: nc.w0
            @Override // oe.x.a
            public final void invoke(Object obj) {
                ((AnalyticsListener) obj).onDeviceVolumeChanged(AnalyticsListener.EventTime.this, i10, z10);
            }
        });
    }

    @Override // com.google.android.exoplayer2.Player.b
    public void onEvents(Player player, Player.Events events) {
    }

    @Override // com.google.android.exoplayer2.Player.b
    public final void onIsLoadingChanged(final boolean z10) {
        final AnalyticsListener.EventTime U0 = U0();
        d1(U0, 3, new x.a() { // from class: nc.e1
            @Override // oe.x.a
            public final void invoke(Object obj) {
                com.google.android.exoplayer2.analytics.a.t0(AnalyticsListener.EventTime.this, z10, (AnalyticsListener) obj);
            }
        });
    }

    @Override // com.google.android.exoplayer2.Player.b
    public void onIsPlayingChanged(final boolean z10) {
        final AnalyticsListener.EventTime U0 = U0();
        d1(U0, 7, new x.a() { // from class: nc.i1
            @Override // oe.x.a
            public final void invoke(Object obj) {
                ((AnalyticsListener) obj).onIsPlayingChanged(AnalyticsListener.EventTime.this, z10);
            }
        });
    }

    @Override // com.google.android.exoplayer2.Player.b
    public void onLoadingChanged(boolean z10) {
    }

    @Override // com.google.android.exoplayer2.Player.b
    public final void onMediaItemTransition(final MediaItem mediaItem, final int i10) {
        final AnalyticsListener.EventTime U0 = U0();
        d1(U0, 1, new x.a() { // from class: nc.r
            @Override // oe.x.a
            public final void invoke(Object obj) {
                ((AnalyticsListener) obj).onMediaItemTransition(AnalyticsListener.EventTime.this, mediaItem, i10);
            }
        });
    }

    @Override // com.google.android.exoplayer2.Player.b
    public void onMediaMetadataChanged(final MediaMetadata mediaMetadata) {
        final AnalyticsListener.EventTime U0 = U0();
        d1(U0, 14, new x.a() { // from class: nc.f
            @Override // oe.x.a
            public final void invoke(Object obj) {
                ((AnalyticsListener) obj).onMediaMetadataChanged(AnalyticsListener.EventTime.this, mediaMetadata);
            }
        });
    }

    @Override // com.google.android.exoplayer2.Player.b, hd.d
    public final void onMetadata(final Metadata metadata) {
        final AnalyticsListener.EventTime U0 = U0();
        d1(U0, 28, new x.a() { // from class: nc.x0
            @Override // oe.x.a
            public final void invoke(Object obj) {
                ((AnalyticsListener) obj).onMetadata(AnalyticsListener.EventTime.this, metadata);
            }
        });
    }

    @Override // com.google.android.exoplayer2.Player.b
    public final void onPlayWhenReadyChanged(final boolean z10, final int i10) {
        final AnalyticsListener.EventTime U0 = U0();
        d1(U0, 5, new x.a() { // from class: nc.m
            @Override // oe.x.a
            public final void invoke(Object obj) {
                ((AnalyticsListener) obj).onPlayWhenReadyChanged(AnalyticsListener.EventTime.this, z10, i10);
            }
        });
    }

    @Override // com.google.android.exoplayer2.Player.b
    public final void onPlaybackParametersChanged(final PlaybackParameters playbackParameters) {
        final AnalyticsListener.EventTime U0 = U0();
        d1(U0, 12, new x.a() { // from class: nc.h
            @Override // oe.x.a
            public final void invoke(Object obj) {
                ((AnalyticsListener) obj).onPlaybackParametersChanged(AnalyticsListener.EventTime.this, playbackParameters);
            }
        });
    }

    @Override // com.google.android.exoplayer2.Player.b
    public final void onPlaybackStateChanged(final int i10) {
        final AnalyticsListener.EventTime U0 = U0();
        d1(U0, 4, new x.a() { // from class: nc.w
            @Override // oe.x.a
            public final void invoke(Object obj) {
                ((AnalyticsListener) obj).onPlaybackStateChanged(AnalyticsListener.EventTime.this, i10);
            }
        });
    }

    @Override // com.google.android.exoplayer2.Player.b
    public final void onPlaybackSuppressionReasonChanged(final int i10) {
        final AnalyticsListener.EventTime U0 = U0();
        d1(U0, 6, new x.a() { // from class: nc.k0
            @Override // oe.x.a
            public final void invoke(Object obj) {
                ((AnalyticsListener) obj).onPlaybackSuppressionReasonChanged(AnalyticsListener.EventTime.this, i10);
            }
        });
    }

    @Override // com.google.android.exoplayer2.Player.b
    public final void onPlayerError(final PlaybackException playbackException) {
        final AnalyticsListener.EventTime b12 = b1(playbackException);
        d1(b12, 10, new x.a() { // from class: nc.q
            @Override // oe.x.a
            public final void invoke(Object obj) {
                ((AnalyticsListener) obj).onPlayerError(AnalyticsListener.EventTime.this, playbackException);
            }
        });
    }

    @Override // com.google.android.exoplayer2.Player.b
    public void onPlayerErrorChanged(final PlaybackException playbackException) {
        final AnalyticsListener.EventTime b12 = b1(playbackException);
        d1(b12, 10, new x.a() { // from class: nc.j0
            @Override // oe.x.a
            public final void invoke(Object obj) {
                ((AnalyticsListener) obj).onPlayerErrorChanged(AnalyticsListener.EventTime.this, playbackException);
            }
        });
    }

    @Override // com.google.android.exoplayer2.Player.b
    public final void onPlayerStateChanged(final boolean z10, final int i10) {
        final AnalyticsListener.EventTime U0 = U0();
        d1(U0, -1, new x.a() { // from class: nc.j
            @Override // oe.x.a
            public final void invoke(Object obj) {
                ((AnalyticsListener) obj).onPlayerStateChanged(AnalyticsListener.EventTime.this, z10, i10);
            }
        });
    }

    @Override // com.google.android.exoplayer2.Player.b
    public void onPositionDiscontinuity(int i10) {
    }

    @Override // com.google.android.exoplayer2.Player.b
    public void onRenderedFirstFrame() {
    }

    @Override // com.google.android.exoplayer2.Player.b
    public final void onRepeatModeChanged(final int i10) {
        final AnalyticsListener.EventTime U0 = U0();
        d1(U0, 8, new x.a() { // from class: nc.c0
            @Override // oe.x.a
            public final void invoke(Object obj) {
                ((AnalyticsListener) obj).onRepeatModeChanged(AnalyticsListener.EventTime.this, i10);
            }
        });
    }

    @Override // com.google.android.exoplayer2.Player.b
    public final void onShuffleModeEnabledChanged(final boolean z10) {
        final AnalyticsListener.EventTime U0 = U0();
        d1(U0, 9, new x.a() { // from class: nc.c
            @Override // oe.x.a
            public final void invoke(Object obj) {
                ((AnalyticsListener) obj).onShuffleModeChanged(AnalyticsListener.EventTime.this, z10);
            }
        });
    }

    @Override // com.google.android.exoplayer2.Player.b
    public final void onSkipSilenceEnabledChanged(final boolean z10) {
        final AnalyticsListener.EventTime a12 = a1();
        d1(a12, 23, new x.a() { // from class: nc.c1
            @Override // oe.x.a
            public final void invoke(Object obj) {
                ((AnalyticsListener) obj).onSkipSilenceEnabledChanged(AnalyticsListener.EventTime.this, z10);
            }
        });
    }

    @Override // com.google.android.exoplayer2.Player.b
    public final void onSurfaceSizeChanged(final int i10, final int i11) {
        final AnalyticsListener.EventTime a12 = a1();
        d1(a12, 24, new x.a() { // from class: nc.o
            @Override // oe.x.a
            public final void invoke(Object obj) {
                ((AnalyticsListener) obj).onSurfaceSizeChanged(AnalyticsListener.EventTime.this, i10, i11);
            }
        });
    }

    @Override // com.google.android.exoplayer2.Player.b
    public final void onTimelineChanged(Timeline timeline, final int i10) {
        this.f12688o.l((Player) oe.a.e(this.f12691r));
        final AnalyticsListener.EventTime U0 = U0();
        d1(U0, 0, new x.a() { // from class: nc.r0
            @Override // oe.x.a
            public final void invoke(Object obj) {
                ((AnalyticsListener) obj).onTimelineChanged(AnalyticsListener.EventTime.this, i10);
            }
        });
    }

    @Override // com.google.android.exoplayer2.Player.b
    public void onTracksChanged(final Tracks tracks) {
        final AnalyticsListener.EventTime U0 = U0();
        d1(U0, 2, new x.a() { // from class: nc.g0
            @Override // oe.x.a
            public final void invoke(Object obj) {
                ((AnalyticsListener) obj).onTracksChanged(AnalyticsListener.EventTime.this, tracks);
            }
        });
    }

    @Override // com.google.android.exoplayer2.Player.b
    public final void onVideoSizeChanged(final VideoSize videoSize) {
        final AnalyticsListener.EventTime a12 = a1();
        d1(a12, 25, new x.a() { // from class: nc.a1
            @Override // oe.x.a
            public final void invoke(Object obj) {
                com.google.android.exoplayer2.analytics.a.n0(AnalyticsListener.EventTime.this, videoSize, (AnalyticsListener) obj);
            }
        });
    }

    @Override // com.google.android.exoplayer2.Player.b
    public final void onVolumeChanged(final float f10) {
        final AnalyticsListener.EventTime a12 = a1();
        d1(a12, 22, new x.a() { // from class: nc.u0
            @Override // oe.x.a
            public final void invoke(Object obj) {
                ((AnalyticsListener) obj).onVolumeChanged(AnalyticsListener.EventTime.this, f10);
            }
        });
    }

    @Override // nc.a
    public final void p(final DecoderCounters decoderCounters) {
        final AnalyticsListener.EventTime a12 = a1();
        d1(a12, 1015, new x.a() { // from class: nc.v
            @Override // oe.x.a
            public final void invoke(Object obj) {
                ((AnalyticsListener) obj).onVideoEnabled(AnalyticsListener.EventTime.this, decoderCounters);
            }
        });
    }

    @Override // nc.a
    public final void q(final Exception exc) {
        final AnalyticsListener.EventTime a12 = a1();
        d1(a12, 1029, new x.a() { // from class: nc.k1
            @Override // oe.x.a
            public final void invoke(Object obj) {
                ((AnalyticsListener) obj).onAudioCodecError(AnalyticsListener.EventTime.this, exc);
            }
        });
    }

    @Override // nc.a
    public final void r(final int i10, final long j10, final long j11) {
        final AnalyticsListener.EventTime a12 = a1();
        d1(a12, 1011, new x.a() { // from class: nc.e
            @Override // oe.x.a
            public final void invoke(Object obj) {
                ((AnalyticsListener) obj).onAudioUnderrun(AnalyticsListener.EventTime.this, i10, j10, j11);
            }
        });
    }

    @Override // nc.a
    public void release() {
        ((u) oe.a.i(this.f12692s)).post(new Runnable() { // from class: nc.g
            @Override // java.lang.Runnable
            public final void run() {
                com.google.android.exoplayer2.analytics.a.this.c1();
            }
        });
    }

    @Override // nc.a
    public final void s(final long j10, final int i10) {
        final AnalyticsListener.EventTime Z0 = Z0();
        d1(Z0, 1021, new x.a() { // from class: nc.m0
            @Override // oe.x.a
            public final void invoke(Object obj) {
                ((AnalyticsListener) obj).onVideoFrameProcessingOffset(AnalyticsListener.EventTime.this, j10, i10);
            }
        });
    }

    @Override // sc.u
    public final void t(int i10, r.b bVar) {
        final AnalyticsListener.EventTime Y0 = Y0(i10, bVar);
        d1(Y0, 1027, new x.a() { // from class: nc.e0
            @Override // oe.x.a
            public final void invoke(Object obj) {
                ((AnalyticsListener) obj).onDrmSessionReleased(AnalyticsListener.EventTime.this);
            }
        });
    }

    @Override // sc.u
    public final void u(int i10, r.b bVar) {
        final AnalyticsListener.EventTime Y0 = Y0(i10, bVar);
        d1(Y0, 1023, new x.a() { // from class: nc.f1
            @Override // oe.x.a
            public final void invoke(Object obj) {
                ((AnalyticsListener) obj).onDrmKeysLoaded(AnalyticsListener.EventTime.this);
            }
        });
    }

    @Override // nc.a
    public final void v(List list, r.b bVar) {
        this.f12688o.k(list, bVar, (Player) oe.a.e(this.f12691r));
    }

    @Override // me.e.a
    public final void w(final int i10, final long j10, final long j11) {
        final AnalyticsListener.EventTime X0 = X0();
        d1(X0, 1006, new x.a() { // from class: nc.x
            @Override // oe.x.a
            public final void invoke(Object obj) {
                ((AnalyticsListener) obj).onBandwidthEstimate(AnalyticsListener.EventTime.this, i10, j10, j11);
            }
        });
    }

    @Override // nc.a
    public final void x() {
        if (!this.f12693t) {
            final AnalyticsListener.EventTime U0 = U0();
            this.f12693t = true;
            d1(U0, -1, new x.a() { // from class: nc.k
                @Override // oe.x.a
                public final void invoke(Object obj) {
                    ((AnalyticsListener) obj).onSeekStarted(AnalyticsListener.EventTime.this);
                }
            });
        }
    }

    @Override // nc.a
    public void y(final Player player, Looper looper) {
        boolean z10;
        if (this.f12691r != null && !this.f12688o.f12695b.isEmpty()) {
            z10 = false;
        } else {
            z10 = true;
        }
        oe.a.g(z10);
        this.f12691r = (Player) oe.a.e(player);
        this.f12692s = this.f12685d.c(looper, null);
        this.f12690q = this.f12690q.e(looper, new x.b() { // from class: nc.l
            @Override // oe.x.b
            public final void a(Object obj, oe.q qVar) {
                AnalyticsListener analyticsListener = (AnalyticsListener) obj;
                analyticsListener.onEvents(player, new AnalyticsListener.Events(qVar, com.google.android.exoplayer2.analytics.a.this.f12689p));
            }
        });
    }

    @Override // nc.a
    public void z(AnalyticsListener analyticsListener) {
        oe.a.e(analyticsListener);
        this.f12690q.c(analyticsListener);
    }

    @Override // com.google.android.exoplayer2.Player.b
    public final void onPositionDiscontinuity(final Player.PositionInfo positionInfo, final Player.PositionInfo positionInfo2, final int i10) {
        if (i10 == 1) {
            this.f12693t = false;
        }
        this.f12688o.j((Player) oe.a.e(this.f12691r));
        final AnalyticsListener.EventTime U0 = U0();
        d1(U0, 11, new x.a() { // from class: nc.p0
            @Override // oe.x.a
            public final void invoke(Object obj) {
                com.google.android.exoplayer2.analytics.a.O0(AnalyticsListener.EventTime.this, i10, positionInfo, positionInfo2, (AnalyticsListener) obj);
            }
        });
    }

    @Override // com.google.android.exoplayer2.Player.b, ae.m
    public void onCues(final CueGroup cueGroup) {
        final AnalyticsListener.EventTime U0 = U0();
        d1(U0, 27, new x.a() { // from class: nc.s
            @Override // oe.x.a
            public final void invoke(Object obj) {
                ((AnalyticsListener) obj).onCues(AnalyticsListener.EventTime.this, cueGroup);
            }
        });
    }
}
