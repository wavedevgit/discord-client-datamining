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
import mi.j;
import ne.q;
import ne.u;
import ne.w0;
import ne.x;
import ni.s;
import ni.t;
import ni.v;
import qd.r;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class a implements mc.a {

    /* renamed from: d  reason: collision with root package name */
    private final ne.e f11968d;

    /* renamed from: e  reason: collision with root package name */
    private final Timeline.b f11969e;

    /* renamed from: i  reason: collision with root package name */
    private final Timeline.d f11970i;

    /* renamed from: o  reason: collision with root package name */
    private final C0157a f11971o;

    /* renamed from: p  reason: collision with root package name */
    private final SparseArray f11972p;

    /* renamed from: q  reason: collision with root package name */
    private x f11973q;

    /* renamed from: r  reason: collision with root package name */
    private Player f11974r;

    /* renamed from: s  reason: collision with root package name */
    private u f11975s;

    /* renamed from: t  reason: collision with root package name */
    private boolean f11976t;

    /* JADX INFO: Access modifiers changed from: private */
    /* renamed from: com.google.android.exoplayer2.analytics.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class C0157a {

        /* renamed from: a  reason: collision with root package name */
        private final Timeline.b f11977a;

        /* renamed from: b  reason: collision with root package name */
        private s f11978b = s.t();

        /* renamed from: c  reason: collision with root package name */
        private t f11979c = t.j();

        /* renamed from: d  reason: collision with root package name */
        private r.b f11980d;

        /* renamed from: e  reason: collision with root package name */
        private r.b f11981e;

        /* renamed from: f  reason: collision with root package name */
        private r.b f11982f;

        public C0157a(Timeline.b bVar) {
            this.f11977a = bVar;
        }

        private void b(t.a aVar, r.b bVar, Timeline timeline) {
            if (bVar != null) {
                if (timeline.f(bVar.f46865a) != -1) {
                    aVar.f(bVar, timeline);
                    return;
                }
                Timeline timeline2 = (Timeline) this.f11979c.get(bVar);
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
            if (!bVar.f46865a.equals(obj)) {
                return false;
            }
            if (!z10 || bVar.f46866b != i10 || bVar.f46867c != i11) {
                if (z10 || bVar.f46866b != -1 || bVar.f46869e != i12) {
                    return false;
                }
                return true;
            }
            return true;
        }

        private void m(Timeline timeline) {
            t.a a10 = t.a();
            if (this.f11978b.isEmpty()) {
                b(a10, this.f11981e, timeline);
                if (!j.a(this.f11982f, this.f11981e)) {
                    b(a10, this.f11982f, timeline);
                }
                if (!j.a(this.f11980d, this.f11981e) && !j.a(this.f11980d, this.f11982f)) {
                    b(a10, this.f11980d, timeline);
                }
            } else {
                for (int i10 = 0; i10 < this.f11978b.size(); i10++) {
                    b(a10, (r.b) this.f11978b.get(i10), timeline);
                }
                if (!this.f11978b.contains(this.f11980d)) {
                    b(a10, this.f11980d, timeline);
                }
            }
            this.f11979c = a10.c();
        }

        public r.b d() {
            return this.f11980d;
        }

        public r.b e() {
            if (this.f11978b.isEmpty()) {
                return null;
            }
            return (r.b) v.c(this.f11978b);
        }

        public Timeline f(r.b bVar) {
            return (Timeline) this.f11979c.get(bVar);
        }

        public r.b g() {
            return this.f11981e;
        }

        public r.b h() {
            return this.f11982f;
        }

        public void j(Player player) {
            this.f11980d = c(player, this.f11978b, this.f11981e, this.f11977a);
        }

        public void k(List list, r.b bVar, Player player) {
            this.f11978b = s.o(list);
            if (!list.isEmpty()) {
                this.f11981e = (r.b) list.get(0);
                this.f11982f = (r.b) ne.a.e(bVar);
            }
            if (this.f11980d == null) {
                this.f11980d = c(player, this.f11978b, this.f11981e, this.f11977a);
            }
            m(player.v());
        }

        public void l(Player player) {
            this.f11980d = c(player, this.f11978b, this.f11981e, this.f11977a);
            m(player.v());
        }
    }

    public a(ne.e eVar) {
        this.f11968d = (ne.e) ne.a.e(eVar);
        this.f11973q = new x(w0.R(), eVar, new x.b() { // from class: mc.z
            @Override // ne.x.b
            public final void a(Object obj, ne.q qVar) {
                com.google.android.exoplayer2.analytics.a.S((AnalyticsListener) obj, qVar);
            }
        });
        Timeline.b bVar = new Timeline.b();
        this.f11969e = bVar;
        this.f11970i = new Timeline.d();
        this.f11971o = new C0157a(bVar);
        this.f11972p = new SparseArray();
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
        ne.a.e(this.f11974r);
        if (bVar == null) {
            f10 = null;
        } else {
            f10 = this.f11971o.f(bVar);
        }
        if (bVar != null && f10 != null) {
            return V0(f10, f10.l(bVar.f46865a, this.f11969e).f11877i, bVar);
        }
        int Q = this.f11974r.Q();
        Timeline v10 = this.f11974r.v();
        if (Q >= v10.t()) {
            v10 = Timeline.f11864d;
        }
        return V0(v10, Q, null);
    }

    private AnalyticsListener.EventTime X0() {
        return W0(this.f11971o.e());
    }

    private AnalyticsListener.EventTime Y0(int i10, r.b bVar) {
        ne.a.e(this.f11974r);
        if (bVar != null) {
            if (this.f11971o.f(bVar) != null) {
                return W0(bVar);
            }
            return V0(Timeline.f11864d, i10, bVar);
        }
        Timeline v10 = this.f11974r.v();
        if (i10 >= v10.t()) {
            v10 = Timeline.f11864d;
        }
        return V0(v10, i10, null);
    }

    private AnalyticsListener.EventTime Z0() {
        return W0(this.f11971o.g());
    }

    private AnalyticsListener.EventTime a1() {
        return W0(this.f11971o.h());
    }

    private AnalyticsListener.EventTime b1(PlaybackException playbackException) {
        qd.q qVar;
        if ((playbackException instanceof com.google.android.exoplayer2.j) && (qVar = ((com.google.android.exoplayer2.j) playbackException).f12570y) != null) {
            return W0(new r.b(qVar));
        }
        return U0();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void c1() {
        final AnalyticsListener.EventTime U0 = U0();
        d1(U0, 1028, new x.a() { // from class: mc.d1
            @Override // ne.x.a
            public final void invoke(Object obj) {
                ((AnalyticsListener) obj).onPlayerReleased(AnalyticsListener.EventTime.this);
            }
        });
        this.f11973q.i();
    }

    public static /* synthetic */ void j0(AnalyticsListener.EventTime eventTime, int i10, AnalyticsListener analyticsListener) {
        analyticsListener.onDrmSessionAcquired(eventTime);
        analyticsListener.onDrmSessionAcquired(eventTime, i10);
    }

    public static /* synthetic */ void n0(AnalyticsListener.EventTime eventTime, VideoSize videoSize, AnalyticsListener analyticsListener) {
        analyticsListener.onVideoSizeChanged(eventTime, videoSize);
        analyticsListener.onVideoSizeChanged(eventTime, videoSize.f13462d, videoSize.f13463e, videoSize.f13464i, videoSize.f13465o);
    }

    public static /* synthetic */ void t0(AnalyticsListener.EventTime eventTime, boolean z10, AnalyticsListener analyticsListener) {
        analyticsListener.onLoadingChanged(eventTime, z10);
        analyticsListener.onIsLoadingChanged(eventTime, z10);
    }

    @Override // rc.u
    public final void A(int i10, r.b bVar) {
        final AnalyticsListener.EventTime Y0 = Y0(i10, bVar);
        d1(Y0, 1023, new x.a() { // from class: mc.f1
            @Override // ne.x.a
            public final void invoke(Object obj) {
                ((AnalyticsListener) obj).onDrmKeysLoaded(AnalyticsListener.EventTime.this);
            }
        });
    }

    @Override // mc.a
    public void B(AnalyticsListener analyticsListener) {
        ne.a.e(analyticsListener);
        this.f11973q.c(analyticsListener);
    }

    @Override // qd.y
    public final void C(int i10, r.b bVar, final LoadEventInfo loadEventInfo, final MediaLoadData mediaLoadData) {
        final AnalyticsListener.EventTime Y0 = Y0(i10, bVar);
        d1(Y0, 1000, new x.a() { // from class: mc.t0
            @Override // ne.x.a
            public final void invoke(Object obj) {
                ((AnalyticsListener) obj).onLoadStarted(AnalyticsListener.EventTime.this, loadEventInfo, mediaLoadData);
            }
        });
    }

    @Override // qd.y
    public final void D(int i10, r.b bVar, final MediaLoadData mediaLoadData) {
        final AnalyticsListener.EventTime Y0 = Y0(i10, bVar);
        d1(Y0, 1005, new x.a() { // from class: mc.n0
            @Override // ne.x.a
            public final void invoke(Object obj) {
                ((AnalyticsListener) obj).onUpstreamDiscarded(AnalyticsListener.EventTime.this, mediaLoadData);
            }
        });
    }

    @Override // mc.a
    public final void E(List list, r.b bVar) {
        this.f11971o.k(list, bVar, (Player) ne.a.e(this.f11974r));
    }

    @Override // rc.u
    public final void F(int i10, r.b bVar) {
        final AnalyticsListener.EventTime Y0 = Y0(i10, bVar);
        d1(Y0, 1027, new x.a() { // from class: mc.e0
            @Override // ne.x.a
            public final void invoke(Object obj) {
                ((AnalyticsListener) obj).onDrmSessionReleased(AnalyticsListener.EventTime.this);
            }
        });
    }

    @Override // qd.y
    public final void G(int i10, r.b bVar, final LoadEventInfo loadEventInfo, final MediaLoadData mediaLoadData) {
        final AnalyticsListener.EventTime Y0 = Y0(i10, bVar);
        d1(Y0, RNCWebViewManager.COMMAND_CLEAR_HISTORY, new x.a() { // from class: mc.h1
            @Override // ne.x.a
            public final void invoke(Object obj) {
                ((AnalyticsListener) obj).onLoadCanceled(AnalyticsListener.EventTime.this, loadEventInfo, mediaLoadData);
            }
        });
    }

    @Override // qd.y
    public final void H(int i10, r.b bVar, final LoadEventInfo loadEventInfo, final MediaLoadData mediaLoadData) {
        final AnalyticsListener.EventTime Y0 = Y0(i10, bVar);
        d1(Y0, RNCWebViewManager.COMMAND_CLEAR_CACHE, new x.a() { // from class: mc.i
            @Override // ne.x.a
            public final void invoke(Object obj) {
                ((AnalyticsListener) obj).onLoadCompleted(AnalyticsListener.EventTime.this, loadEventInfo, mediaLoadData);
            }
        });
    }

    @Override // rc.u
    public final void I(int i10, r.b bVar, final Exception exc) {
        final AnalyticsListener.EventTime Y0 = Y0(i10, bVar);
        d1(Y0, IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET, new x.a() { // from class: mc.o0
            @Override // ne.x.a
            public final void invoke(Object obj) {
                ((AnalyticsListener) obj).onDrmSessionManagerError(AnalyticsListener.EventTime.this, exc);
            }
        });
    }

    @Override // rc.u
    public final void J(int i10, r.b bVar, final int i11) {
        final AnalyticsListener.EventTime Y0 = Y0(i10, bVar);
        d1(Y0, 1022, new x.a() { // from class: mc.s0
            @Override // ne.x.a
            public final void invoke(Object obj) {
                com.google.android.exoplayer2.analytics.a.j0(AnalyticsListener.EventTime.this, i11, (AnalyticsListener) obj);
            }
        });
    }

    protected final AnalyticsListener.EventTime U0() {
        return W0(this.f11971o.d());
    }

    protected final AnalyticsListener.EventTime V0(Timeline timeline, int i10, r.b bVar) {
        r.b bVar2;
        boolean z10;
        if (timeline.u()) {
            bVar2 = null;
        } else {
            bVar2 = bVar;
        }
        long b10 = this.f11968d.b();
        if (timeline.equals(this.f11974r.v()) && i10 == this.f11974r.Q()) {
            z10 = true;
        } else {
            z10 = false;
        }
        long j10 = 0;
        if (bVar2 != null && bVar2.b()) {
            if (z10 && this.f11974r.r() == bVar2.f46866b && this.f11974r.I() == bVar2.f46867c) {
                j10 = this.f11974r.Z();
            }
        } else if (z10) {
            j10 = this.f11974r.K();
        } else if (!timeline.u()) {
            j10 = timeline.r(i10, this.f11970i).d();
        }
        return new AnalyticsListener.EventTime(b10, timeline, i10, bVar2, j10, this.f11974r.v(), this.f11974r.Q(), this.f11971o.d(), this.f11974r.Z(), this.f11974r.g());
    }

    @Override // mc.a
    public final void a(final Exception exc) {
        final AnalyticsListener.EventTime a12 = a1();
        d1(a12, 1014, new x.a() { // from class: mc.l0
            @Override // ne.x.a
            public final void invoke(Object obj) {
                ((AnalyticsListener) obj).onAudioSinkError(AnalyticsListener.EventTime.this, exc);
            }
        });
    }

    @Override // mc.a
    public final void b(final String str) {
        final AnalyticsListener.EventTime a12 = a1();
        d1(a12, 1019, new x.a() { // from class: mc.y0
            @Override // ne.x.a
            public final void invoke(Object obj) {
                ((AnalyticsListener) obj).onVideoDecoderReleased(AnalyticsListener.EventTime.this, str);
            }
        });
    }

    @Override // mc.a
    public final void c(final DecoderCounters decoderCounters) {
        final AnalyticsListener.EventTime a12 = a1();
        d1(a12, 1007, new x.a() { // from class: mc.q0
            @Override // ne.x.a
            public final void invoke(Object obj) {
                ((AnalyticsListener) obj).onAudioEnabled(AnalyticsListener.EventTime.this, decoderCounters);
            }
        });
    }

    @Override // mc.a
    public final void d(final String str, final long j10, final long j11) {
        final AnalyticsListener.EventTime a12 = a1();
        d1(a12, 1016, new x.a() { // from class: mc.y
            @Override // ne.x.a
            public final void invoke(Object obj) {
                com.google.android.exoplayer2.analytics.a.R0(AnalyticsListener.EventTime.this, str, j11, j10, (AnalyticsListener) obj);
            }
        });
    }

    protected final void d1(AnalyticsListener.EventTime eventTime, int i10, x.a aVar) {
        this.f11972p.put(i10, eventTime);
        this.f11973q.k(i10, aVar);
    }

    @Override // mc.a
    public final void e(final String str) {
        final AnalyticsListener.EventTime a12 = a1();
        d1(a12, 1012, new x.a() { // from class: mc.b0
            @Override // ne.x.a
            public final void invoke(Object obj) {
                ((AnalyticsListener) obj).onAudioDecoderReleased(AnalyticsListener.EventTime.this, str);
            }
        });
    }

    @Override // mc.a
    public final void f(final String str, final long j10, final long j11) {
        final AnalyticsListener.EventTime a12 = a1();
        d1(a12, 1008, new x.a() { // from class: mc.b
            @Override // ne.x.a
            public final void invoke(Object obj) {
                com.google.android.exoplayer2.analytics.a.Q0(AnalyticsListener.EventTime.this, str, j11, j10, (AnalyticsListener) obj);
            }
        });
    }

    @Override // qd.y
    public final void g(int i10, r.b bVar, final MediaLoadData mediaLoadData) {
        final AnalyticsListener.EventTime Y0 = Y0(i10, bVar);
        d1(Y0, 1004, new x.a() { // from class: mc.n
            @Override // ne.x.a
            public final void invoke(Object obj) {
                ((AnalyticsListener) obj).onDownstreamFormatChanged(AnalyticsListener.EventTime.this, mediaLoadData);
            }
        });
    }

    @Override // mc.a
    public final void h(final Format format, final DecoderReuseEvaluation decoderReuseEvaluation) {
        final AnalyticsListener.EventTime a12 = a1();
        d1(a12, 1017, new x.a() { // from class: mc.u
            @Override // ne.x.a
            public final void invoke(Object obj) {
                com.google.android.exoplayer2.analytics.a.K0(AnalyticsListener.EventTime.this, format, decoderReuseEvaluation, (AnalyticsListener) obj);
            }
        });
    }

    @Override // mc.a
    public final void i(final long j10) {
        final AnalyticsListener.EventTime a12 = a1();
        d1(a12, 1010, new x.a() { // from class: mc.d0
            @Override // ne.x.a
            public final void invoke(Object obj) {
                ((AnalyticsListener) obj).onAudioPositionAdvancing(AnalyticsListener.EventTime.this, j10);
            }
        });
    }

    @Override // mc.a
    public final void j(final Exception exc) {
        final AnalyticsListener.EventTime a12 = a1();
        d1(a12, 1030, new x.a() { // from class: mc.j1
            @Override // ne.x.a
            public final void invoke(Object obj) {
                ((AnalyticsListener) obj).onVideoCodecError(AnalyticsListener.EventTime.this, exc);
            }
        });
    }

    @Override // mc.a
    public final void k(final DecoderCounters decoderCounters) {
        final AnalyticsListener.EventTime Z0 = Z0();
        d1(Z0, 1020, new x.a() { // from class: mc.i0
            @Override // ne.x.a
            public final void invoke(Object obj) {
                ((AnalyticsListener) obj).onVideoDisabled(AnalyticsListener.EventTime.this, decoderCounters);
            }
        });
    }

    @Override // mc.a
    public final void l(final DecoderCounters decoderCounters) {
        final AnalyticsListener.EventTime Z0 = Z0();
        d1(Z0, 1013, new x.a() { // from class: mc.a0
            @Override // ne.x.a
            public final void invoke(Object obj) {
                ((AnalyticsListener) obj).onAudioDisabled(AnalyticsListener.EventTime.this, decoderCounters);
            }
        });
    }

    @Override // mc.a
    public final void m(final int i10, final long j10) {
        final AnalyticsListener.EventTime Z0 = Z0();
        d1(Z0, 1018, new x.a() { // from class: mc.h0
            @Override // ne.x.a
            public final void invoke(Object obj) {
                ((AnalyticsListener) obj).onDroppedVideoFrames(AnalyticsListener.EventTime.this, i10, j10);
            }
        });
    }

    @Override // mc.a
    public final void n(final Format format, final DecoderReuseEvaluation decoderReuseEvaluation) {
        final AnalyticsListener.EventTime a12 = a1();
        d1(a12, 1009, new x.a() { // from class: mc.d
            @Override // ne.x.a
            public final void invoke(Object obj) {
                com.google.android.exoplayer2.analytics.a.J0(AnalyticsListener.EventTime.this, format, decoderReuseEvaluation, (AnalyticsListener) obj);
            }
        });
    }

    @Override // mc.a
    public final void o(final Object obj, final long j10) {
        final AnalyticsListener.EventTime a12 = a1();
        d1(a12, 26, new x.a() { // from class: mc.b1
            @Override // ne.x.a
            public final void invoke(Object obj2) {
                ((AnalyticsListener) obj2).onRenderedFirstFrame(AnalyticsListener.EventTime.this, obj, j10);
            }
        });
    }

    @Override // com.google.android.exoplayer2.Player.b
    public void onAvailableCommandsChanged(final Player.Commands commands) {
        final AnalyticsListener.EventTime U0 = U0();
        d1(U0, 13, new x.a() { // from class: mc.t
            @Override // ne.x.a
            public final void invoke(Object obj) {
                ((AnalyticsListener) obj).onAvailableCommandsChanged(AnalyticsListener.EventTime.this, commands);
            }
        });
    }

    @Override // com.google.android.exoplayer2.Player.b, zd.m
    public void onCues(final List list) {
        final AnalyticsListener.EventTime U0 = U0();
        d1(U0, 27, new x.a() { // from class: mc.f0
            @Override // ne.x.a
            public final void invoke(Object obj) {
                ((AnalyticsListener) obj).onCues(AnalyticsListener.EventTime.this, list);
            }
        });
    }

    @Override // com.google.android.exoplayer2.Player.b
    public void onDeviceInfoChanged(final DeviceInfo deviceInfo) {
        final AnalyticsListener.EventTime U0 = U0();
        d1(U0, 29, new x.a() { // from class: mc.v0
            @Override // ne.x.a
            public final void invoke(Object obj) {
                ((AnalyticsListener) obj).onDeviceInfoChanged(AnalyticsListener.EventTime.this, deviceInfo);
            }
        });
    }

    @Override // com.google.android.exoplayer2.Player.b
    public void onDeviceVolumeChanged(final int i10, final boolean z10) {
        final AnalyticsListener.EventTime U0 = U0();
        d1(U0, 30, new x.a() { // from class: mc.w0
            @Override // ne.x.a
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
        d1(U0, 3, new x.a() { // from class: mc.e1
            @Override // ne.x.a
            public final void invoke(Object obj) {
                com.google.android.exoplayer2.analytics.a.t0(AnalyticsListener.EventTime.this, z10, (AnalyticsListener) obj);
            }
        });
    }

    @Override // com.google.android.exoplayer2.Player.b
    public void onIsPlayingChanged(final boolean z10) {
        final AnalyticsListener.EventTime U0 = U0();
        d1(U0, 7, new x.a() { // from class: mc.i1
            @Override // ne.x.a
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
        d1(U0, 1, new x.a() { // from class: mc.r
            @Override // ne.x.a
            public final void invoke(Object obj) {
                ((AnalyticsListener) obj).onMediaItemTransition(AnalyticsListener.EventTime.this, mediaItem, i10);
            }
        });
    }

    @Override // com.google.android.exoplayer2.Player.b
    public void onMediaMetadataChanged(final MediaMetadata mediaMetadata) {
        final AnalyticsListener.EventTime U0 = U0();
        d1(U0, 14, new x.a() { // from class: mc.f
            @Override // ne.x.a
            public final void invoke(Object obj) {
                ((AnalyticsListener) obj).onMediaMetadataChanged(AnalyticsListener.EventTime.this, mediaMetadata);
            }
        });
    }

    @Override // com.google.android.exoplayer2.Player.b, gd.d
    public final void onMetadata(final Metadata metadata) {
        final AnalyticsListener.EventTime U0 = U0();
        d1(U0, 28, new x.a() { // from class: mc.x0
            @Override // ne.x.a
            public final void invoke(Object obj) {
                ((AnalyticsListener) obj).onMetadata(AnalyticsListener.EventTime.this, metadata);
            }
        });
    }

    @Override // com.google.android.exoplayer2.Player.b
    public final void onPlayWhenReadyChanged(final boolean z10, final int i10) {
        final AnalyticsListener.EventTime U0 = U0();
        d1(U0, 5, new x.a() { // from class: mc.m
            @Override // ne.x.a
            public final void invoke(Object obj) {
                ((AnalyticsListener) obj).onPlayWhenReadyChanged(AnalyticsListener.EventTime.this, z10, i10);
            }
        });
    }

    @Override // com.google.android.exoplayer2.Player.b
    public final void onPlaybackParametersChanged(final PlaybackParameters playbackParameters) {
        final AnalyticsListener.EventTime U0 = U0();
        d1(U0, 12, new x.a() { // from class: mc.h
            @Override // ne.x.a
            public final void invoke(Object obj) {
                ((AnalyticsListener) obj).onPlaybackParametersChanged(AnalyticsListener.EventTime.this, playbackParameters);
            }
        });
    }

    @Override // com.google.android.exoplayer2.Player.b
    public final void onPlaybackStateChanged(final int i10) {
        final AnalyticsListener.EventTime U0 = U0();
        d1(U0, 4, new x.a() { // from class: mc.w
            @Override // ne.x.a
            public final void invoke(Object obj) {
                ((AnalyticsListener) obj).onPlaybackStateChanged(AnalyticsListener.EventTime.this, i10);
            }
        });
    }

    @Override // com.google.android.exoplayer2.Player.b
    public final void onPlaybackSuppressionReasonChanged(final int i10) {
        final AnalyticsListener.EventTime U0 = U0();
        d1(U0, 6, new x.a() { // from class: mc.k0
            @Override // ne.x.a
            public final void invoke(Object obj) {
                ((AnalyticsListener) obj).onPlaybackSuppressionReasonChanged(AnalyticsListener.EventTime.this, i10);
            }
        });
    }

    @Override // com.google.android.exoplayer2.Player.b
    public final void onPlayerError(final PlaybackException playbackException) {
        final AnalyticsListener.EventTime b12 = b1(playbackException);
        d1(b12, 10, new x.a() { // from class: mc.q
            @Override // ne.x.a
            public final void invoke(Object obj) {
                ((AnalyticsListener) obj).onPlayerError(AnalyticsListener.EventTime.this, playbackException);
            }
        });
    }

    @Override // com.google.android.exoplayer2.Player.b
    public void onPlayerErrorChanged(final PlaybackException playbackException) {
        final AnalyticsListener.EventTime b12 = b1(playbackException);
        d1(b12, 10, new x.a() { // from class: mc.j0
            @Override // ne.x.a
            public final void invoke(Object obj) {
                ((AnalyticsListener) obj).onPlayerErrorChanged(AnalyticsListener.EventTime.this, playbackException);
            }
        });
    }

    @Override // com.google.android.exoplayer2.Player.b
    public final void onPlayerStateChanged(final boolean z10, final int i10) {
        final AnalyticsListener.EventTime U0 = U0();
        d1(U0, -1, new x.a() { // from class: mc.j
            @Override // ne.x.a
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
        d1(U0, 8, new x.a() { // from class: mc.c0
            @Override // ne.x.a
            public final void invoke(Object obj) {
                ((AnalyticsListener) obj).onRepeatModeChanged(AnalyticsListener.EventTime.this, i10);
            }
        });
    }

    @Override // com.google.android.exoplayer2.Player.b
    public final void onShuffleModeEnabledChanged(final boolean z10) {
        final AnalyticsListener.EventTime U0 = U0();
        d1(U0, 9, new x.a() { // from class: mc.c
            @Override // ne.x.a
            public final void invoke(Object obj) {
                ((AnalyticsListener) obj).onShuffleModeChanged(AnalyticsListener.EventTime.this, z10);
            }
        });
    }

    @Override // com.google.android.exoplayer2.Player.b
    public final void onSkipSilenceEnabledChanged(final boolean z10) {
        final AnalyticsListener.EventTime a12 = a1();
        d1(a12, 23, new x.a() { // from class: mc.c1
            @Override // ne.x.a
            public final void invoke(Object obj) {
                ((AnalyticsListener) obj).onSkipSilenceEnabledChanged(AnalyticsListener.EventTime.this, z10);
            }
        });
    }

    @Override // com.google.android.exoplayer2.Player.b
    public final void onSurfaceSizeChanged(final int i10, final int i11) {
        final AnalyticsListener.EventTime a12 = a1();
        d1(a12, 24, new x.a() { // from class: mc.o
            @Override // ne.x.a
            public final void invoke(Object obj) {
                ((AnalyticsListener) obj).onSurfaceSizeChanged(AnalyticsListener.EventTime.this, i10, i11);
            }
        });
    }

    @Override // com.google.android.exoplayer2.Player.b
    public final void onTimelineChanged(Timeline timeline, final int i10) {
        this.f11971o.l((Player) ne.a.e(this.f11974r));
        final AnalyticsListener.EventTime U0 = U0();
        d1(U0, 0, new x.a() { // from class: mc.r0
            @Override // ne.x.a
            public final void invoke(Object obj) {
                ((AnalyticsListener) obj).onTimelineChanged(AnalyticsListener.EventTime.this, i10);
            }
        });
    }

    @Override // com.google.android.exoplayer2.Player.b
    public void onTracksChanged(final Tracks tracks) {
        final AnalyticsListener.EventTime U0 = U0();
        d1(U0, 2, new x.a() { // from class: mc.g0
            @Override // ne.x.a
            public final void invoke(Object obj) {
                ((AnalyticsListener) obj).onTracksChanged(AnalyticsListener.EventTime.this, tracks);
            }
        });
    }

    @Override // com.google.android.exoplayer2.Player.b
    public final void onVideoSizeChanged(final VideoSize videoSize) {
        final AnalyticsListener.EventTime a12 = a1();
        d1(a12, 25, new x.a() { // from class: mc.a1
            @Override // ne.x.a
            public final void invoke(Object obj) {
                com.google.android.exoplayer2.analytics.a.n0(AnalyticsListener.EventTime.this, videoSize, (AnalyticsListener) obj);
            }
        });
    }

    @Override // com.google.android.exoplayer2.Player.b
    public final void onVolumeChanged(final float f10) {
        final AnalyticsListener.EventTime a12 = a1();
        d1(a12, 22, new x.a() { // from class: mc.u0
            @Override // ne.x.a
            public final void invoke(Object obj) {
                ((AnalyticsListener) obj).onVolumeChanged(AnalyticsListener.EventTime.this, f10);
            }
        });
    }

    @Override // mc.a
    public final void p(final DecoderCounters decoderCounters) {
        final AnalyticsListener.EventTime a12 = a1();
        d1(a12, 1015, new x.a() { // from class: mc.v
            @Override // ne.x.a
            public final void invoke(Object obj) {
                ((AnalyticsListener) obj).onVideoEnabled(AnalyticsListener.EventTime.this, decoderCounters);
            }
        });
    }

    @Override // mc.a
    public final void q(final Exception exc) {
        final AnalyticsListener.EventTime a12 = a1();
        d1(a12, 1029, new x.a() { // from class: mc.k1
            @Override // ne.x.a
            public final void invoke(Object obj) {
                ((AnalyticsListener) obj).onAudioCodecError(AnalyticsListener.EventTime.this, exc);
            }
        });
    }

    @Override // mc.a
    public final void r(final int i10, final long j10, final long j11) {
        final AnalyticsListener.EventTime a12 = a1();
        d1(a12, 1011, new x.a() { // from class: mc.e
            @Override // ne.x.a
            public final void invoke(Object obj) {
                ((AnalyticsListener) obj).onAudioUnderrun(AnalyticsListener.EventTime.this, i10, j10, j11);
            }
        });
    }

    @Override // mc.a
    public void release() {
        ((u) ne.a.i(this.f11975s)).post(new Runnable() { // from class: mc.g
            @Override // java.lang.Runnable
            public final void run() {
                com.google.android.exoplayer2.analytics.a.this.c1();
            }
        });
    }

    @Override // mc.a
    public final void s(final long j10, final int i10) {
        final AnalyticsListener.EventTime Z0 = Z0();
        d1(Z0, 1021, new x.a() { // from class: mc.m0
            @Override // ne.x.a
            public final void invoke(Object obj) {
                ((AnalyticsListener) obj).onVideoFrameProcessingOffset(AnalyticsListener.EventTime.this, j10, i10);
            }
        });
    }

    @Override // qd.y
    public final void t(int i10, r.b bVar, final LoadEventInfo loadEventInfo, final MediaLoadData mediaLoadData, final IOException iOException, final boolean z10) {
        final AnalyticsListener.EventTime Y0 = Y0(i10, bVar);
        d1(Y0, 1003, new x.a() { // from class: mc.p
            @Override // ne.x.a
            public final void invoke(Object obj) {
                ((AnalyticsListener) obj).onLoadError(AnalyticsListener.EventTime.this, loadEventInfo, mediaLoadData, iOException, z10);
            }
        });
    }

    @Override // le.e.a
    public final void u(final int i10, final long j10, final long j11) {
        final AnalyticsListener.EventTime X0 = X0();
        d1(X0, 1006, new x.a() { // from class: mc.x
            @Override // ne.x.a
            public final void invoke(Object obj) {
                ((AnalyticsListener) obj).onBandwidthEstimate(AnalyticsListener.EventTime.this, i10, j10, j11);
            }
        });
    }

    @Override // mc.a
    public final void v() {
        if (!this.f11976t) {
            final AnalyticsListener.EventTime U0 = U0();
            this.f11976t = true;
            d1(U0, -1, new x.a() { // from class: mc.k
                @Override // ne.x.a
                public final void invoke(Object obj) {
                    ((AnalyticsListener) obj).onSeekStarted(AnalyticsListener.EventTime.this);
                }
            });
        }
    }

    @Override // rc.u
    public final void w(int i10, r.b bVar) {
        final AnalyticsListener.EventTime Y0 = Y0(i10, bVar);
        d1(Y0, 1025, new x.a() { // from class: mc.g1
            @Override // ne.x.a
            public final void invoke(Object obj) {
                ((AnalyticsListener) obj).onDrmKeysRestored(AnalyticsListener.EventTime.this);
            }
        });
    }

    @Override // mc.a
    public void y(final Player player, Looper looper) {
        boolean z10;
        if (this.f11974r != null && !this.f11971o.f11978b.isEmpty()) {
            z10 = false;
        } else {
            z10 = true;
        }
        ne.a.g(z10);
        this.f11974r = (Player) ne.a.e(player);
        this.f11975s = this.f11968d.c(looper, null);
        this.f11973q = this.f11973q.e(looper, new x.b() { // from class: mc.l
            @Override // ne.x.b
            public final void a(Object obj, ne.q qVar) {
                AnalyticsListener analyticsListener = (AnalyticsListener) obj;
                analyticsListener.onEvents(player, new AnalyticsListener.Events(qVar, com.google.android.exoplayer2.analytics.a.this.f11972p));
            }
        });
    }

    @Override // rc.u
    public final void z(int i10, r.b bVar) {
        final AnalyticsListener.EventTime Y0 = Y0(i10, bVar);
        d1(Y0, 1026, new x.a() { // from class: mc.z0
            @Override // ne.x.a
            public final void invoke(Object obj) {
                ((AnalyticsListener) obj).onDrmKeysRemoved(AnalyticsListener.EventTime.this);
            }
        });
    }

    @Override // com.google.android.exoplayer2.Player.b
    public final void onPositionDiscontinuity(final Player.PositionInfo positionInfo, final Player.PositionInfo positionInfo2, final int i10) {
        if (i10 == 1) {
            this.f11976t = false;
        }
        this.f11971o.j((Player) ne.a.e(this.f11974r));
        final AnalyticsListener.EventTime U0 = U0();
        d1(U0, 11, new x.a() { // from class: mc.p0
            @Override // ne.x.a
            public final void invoke(Object obj) {
                com.google.android.exoplayer2.analytics.a.O0(AnalyticsListener.EventTime.this, i10, positionInfo, positionInfo2, (AnalyticsListener) obj);
            }
        });
    }

    @Override // com.google.android.exoplayer2.Player.b, zd.m
    public void onCues(final CueGroup cueGroup) {
        final AnalyticsListener.EventTime U0 = U0();
        d1(U0, 27, new x.a() { // from class: mc.s
            @Override // ne.x.a
            public final void invoke(Object obj) {
                ((AnalyticsListener) obj).onCues(AnalyticsListener.EventTime.this, cueGroup);
            }
        });
    }
}
