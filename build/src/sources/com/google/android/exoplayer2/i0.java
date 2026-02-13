package com.google.android.exoplayer2;

import android.content.Context;
import android.graphics.Rect;
import android.graphics.SurfaceTexture;
import android.media.AudioTrack;
import android.media.MediaFormat;
import android.media.metrics.LogSessionId;
import android.os.Handler;
import android.os.Looper;
import android.util.Pair;
import android.view.Surface;
import android.view.SurfaceHolder;
import android.view.SurfaceView;
import android.view.TextureView;
import com.google.android.exoplayer2.DeviceInfo;
import com.google.android.exoplayer2.Player;
import com.google.android.exoplayer2.Timeline;
import com.google.android.exoplayer2.analytics.AnalyticsListener;
import com.google.android.exoplayer2.audio.AudioAttributes;
import com.google.android.exoplayer2.b;
import com.google.android.exoplayer2.d;
import com.google.android.exoplayer2.decoder.DecoderCounters;
import com.google.android.exoplayer2.decoder.DecoderReuseEvaluation;
import com.google.android.exoplayer2.metadata.Metadata;
import com.google.android.exoplayer2.o1;
import com.google.android.exoplayer2.s1;
import com.google.android.exoplayer2.t0;
import com.google.android.exoplayer2.text.CueGroup;
import com.google.android.exoplayer2.video.VideoSize;
import com.google.android.exoplayer2.y1;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Iterator;
import java.util.List;
import java.util.concurrent.CopyOnWriteArraySet;
import java.util.concurrent.TimeoutException;
import oe.x;
import qe.l;
import rd.o0;
import rd.r;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class i0 extends com.google.android.exoplayer2.e implements Player {
    private final com.google.android.exoplayer2.d A;
    private final y1 B;
    private final b2 C;
    private final c2 D;
    private final long E;
    private int F;
    private boolean G;
    private int H;
    private int I;
    private boolean J;
    private int K;
    private mc.t0 L;
    private rd.o0 M;
    private boolean N;
    private Player.Commands O;
    private MediaMetadata P;
    private MediaMetadata Q;
    private Format R;
    private Format S;
    private AudioTrack T;
    private Object U;
    private Surface V;
    private SurfaceHolder W;
    private qe.l X;
    private boolean Y;
    private TextureView Z;

    /* renamed from: a0  reason: collision with root package name */
    private int f13226a0;

    /* renamed from: b  reason: collision with root package name */
    final ke.r f13227b;

    /* renamed from: b0  reason: collision with root package name */
    private int f13228b0;

    /* renamed from: c  reason: collision with root package name */
    final Player.Commands f13229c;

    /* renamed from: c0  reason: collision with root package name */
    private oe.l0 f13230c0;

    /* renamed from: d  reason: collision with root package name */
    private final oe.h f13231d;

    /* renamed from: d0  reason: collision with root package name */
    private DecoderCounters f13232d0;

    /* renamed from: e  reason: collision with root package name */
    private final Context f13233e;

    /* renamed from: e0  reason: collision with root package name */
    private DecoderCounters f13234e0;

    /* renamed from: f  reason: collision with root package name */
    private final Player f13235f;

    /* renamed from: f0  reason: collision with root package name */
    private int f13236f0;

    /* renamed from: g  reason: collision with root package name */
    private final v1[] f13237g;

    /* renamed from: g0  reason: collision with root package name */
    private AudioAttributes f13238g0;

    /* renamed from: h  reason: collision with root package name */
    private final ke.q f13239h;

    /* renamed from: h0  reason: collision with root package name */
    private float f13240h0;

    /* renamed from: i  reason: collision with root package name */
    private final oe.u f13241i;

    /* renamed from: i0  reason: collision with root package name */
    private boolean f13242i0;

    /* renamed from: j  reason: collision with root package name */
    private final t0.f f13243j;

    /* renamed from: j0  reason: collision with root package name */
    private CueGroup f13244j0;

    /* renamed from: k  reason: collision with root package name */
    private final t0 f13245k;

    /* renamed from: k0  reason: collision with root package name */
    private boolean f13246k0;

    /* renamed from: l  reason: collision with root package name */
    private final oe.x f13247l;

    /* renamed from: l0  reason: collision with root package name */
    private boolean f13248l0;

    /* renamed from: m  reason: collision with root package name */
    private final CopyOnWriteArraySet f13249m;

    /* renamed from: m0  reason: collision with root package name */
    private boolean f13250m0;

    /* renamed from: n  reason: collision with root package name */
    private final Timeline.b f13251n;

    /* renamed from: n0  reason: collision with root package name */
    private boolean f13252n0;

    /* renamed from: o  reason: collision with root package name */
    private final List f13253o;

    /* renamed from: o0  reason: collision with root package name */
    private DeviceInfo f13254o0;

    /* renamed from: p  reason: collision with root package name */
    private final boolean f13255p;

    /* renamed from: p0  reason: collision with root package name */
    private VideoSize f13256p0;

    /* renamed from: q  reason: collision with root package name */
    private final r.a f13257q;

    /* renamed from: q0  reason: collision with root package name */
    private MediaMetadata f13258q0;

    /* renamed from: r  reason: collision with root package name */
    private final nc.a f13259r;

    /* renamed from: r0  reason: collision with root package name */
    private r1 f13260r0;

    /* renamed from: s  reason: collision with root package name */
    private final Looper f13261s;

    /* renamed from: s0  reason: collision with root package name */
    private int f13262s0;

    /* renamed from: t  reason: collision with root package name */
    private final me.e f13263t;

    /* renamed from: t0  reason: collision with root package name */
    private int f13264t0;

    /* renamed from: u  reason: collision with root package name */
    private final long f13265u;

    /* renamed from: u0  reason: collision with root package name */
    private long f13266u0;

    /* renamed from: v  reason: collision with root package name */
    private final long f13267v;

    /* renamed from: w  reason: collision with root package name */
    private final oe.e f13268w;

    /* renamed from: x  reason: collision with root package name */
    private final c f13269x;

    /* renamed from: y  reason: collision with root package name */
    private final d f13270y;

    /* renamed from: z  reason: collision with root package name */
    private final com.google.android.exoplayer2.b f13271z;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private static final class b {
        public static nc.t1 a(Context context, i0 i0Var, boolean z10) {
            LogSessionId logSessionId;
            com.google.android.exoplayer2.analytics.c f10 = com.google.android.exoplayer2.analytics.c.f(context);
            if (f10 == null) {
                oe.y.i("ExoPlayerImpl", "MediaMetricsService unavailable.");
                logSessionId = LogSessionId.LOG_SESSION_ID_NONE;
                return new nc.t1(logSessionId);
            }
            if (z10) {
                i0Var.q1(f10);
            }
            return new nc.t1(f10.m());
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public final class c implements pe.y, com.google.android.exoplayer2.audio.e, ae.m, hd.d, SurfaceHolder.Callback, TextureView.SurfaceTextureListener, l.b, d.b, b.InterfaceC0165b, y1.b, mc.i {
        private c() {
        }

        @Override // com.google.android.exoplayer2.d.b
        public void A(float f10) {
            i0.this.c2();
        }

        @Override // com.google.android.exoplayer2.d.b
        public void B(int i10) {
            boolean B = i0.this.B();
            i0.this.s2(B, i10, i0.G1(B, i10));
        }

        @Override // com.google.android.exoplayer2.audio.e
        public void a(Exception exc) {
            i0.this.f13259r.a(exc);
        }

        @Override // pe.y
        public void b(String str) {
            i0.this.f13259r.b(str);
        }

        @Override // com.google.android.exoplayer2.audio.e
        public void c(DecoderCounters decoderCounters) {
            i0.this.f13234e0 = decoderCounters;
            i0.this.f13259r.c(decoderCounters);
        }

        @Override // pe.y
        public void d(String str, long j10, long j11) {
            i0.this.f13259r.d(str, j10, j11);
        }

        @Override // com.google.android.exoplayer2.audio.e
        public void e(String str) {
            i0.this.f13259r.e(str);
        }

        @Override // com.google.android.exoplayer2.audio.e
        public void f(String str, long j10, long j11) {
            i0.this.f13259r.f(str, j10, j11);
        }

        @Override // com.google.android.exoplayer2.b.InterfaceC0165b
        public void g() {
            i0.this.s2(false, -1, 3);
        }

        @Override // pe.y
        public void h(Format format, DecoderReuseEvaluation decoderReuseEvaluation) {
            i0.this.R = format;
            i0.this.f13259r.h(format, decoderReuseEvaluation);
        }

        @Override // com.google.android.exoplayer2.audio.e
        public void i(long j10) {
            i0.this.f13259r.i(j10);
        }

        @Override // pe.y
        public void j(Exception exc) {
            i0.this.f13259r.j(exc);
        }

        @Override // pe.y
        public void k(DecoderCounters decoderCounters) {
            i0.this.f13259r.k(decoderCounters);
            i0.this.R = null;
            i0.this.f13232d0 = null;
        }

        @Override // com.google.android.exoplayer2.audio.e
        public void l(DecoderCounters decoderCounters) {
            i0.this.f13259r.l(decoderCounters);
            i0.this.S = null;
            i0.this.f13234e0 = null;
        }

        @Override // pe.y
        public void m(int i10, long j10) {
            i0.this.f13259r.m(i10, j10);
        }

        @Override // com.google.android.exoplayer2.audio.e
        public void n(Format format, DecoderReuseEvaluation decoderReuseEvaluation) {
            i0.this.S = format;
            i0.this.f13259r.n(format, decoderReuseEvaluation);
        }

        @Override // pe.y
        public void o(Object obj, long j10) {
            i0.this.f13259r.o(obj, j10);
            if (i0.this.U == obj) {
                i0.this.f13247l.k(26, new x.a() { // from class: mc.t
                    @Override // oe.x.a
                    public final void invoke(Object obj2) {
                        ((Player.b) obj2).onRenderedFirstFrame();
                    }
                });
            }
        }

        @Override // ae.m
        public void onCues(final List list) {
            i0.this.f13247l.k(27, new x.a() { // from class: com.google.android.exoplayer2.j0
                @Override // oe.x.a
                public final void invoke(Object obj) {
                    ((Player.b) obj).onCues(list);
                }
            });
        }

        @Override // hd.d
        public void onMetadata(final Metadata metadata) {
            i0 i0Var = i0.this;
            i0Var.f13258q0 = i0Var.f13258q0.b().K(metadata).H();
            MediaMetadata t12 = i0.this.t1();
            if (!t12.equals(i0.this.P)) {
                i0.this.P = t12;
                i0.this.f13247l.h(14, new x.a() { // from class: com.google.android.exoplayer2.l0
                    @Override // oe.x.a
                    public final void invoke(Object obj) {
                        ((Player.b) obj).onMediaMetadataChanged(i0.this.P);
                    }
                });
            }
            i0.this.f13247l.h(28, new x.a() { // from class: com.google.android.exoplayer2.m0
                @Override // oe.x.a
                public final void invoke(Object obj) {
                    ((Player.b) obj).onMetadata(Metadata.this);
                }
            });
            i0.this.f13247l.f();
        }

        @Override // com.google.android.exoplayer2.audio.e
        public void onSkipSilenceEnabledChanged(final boolean z10) {
            if (i0.this.f13242i0 != z10) {
                i0.this.f13242i0 = z10;
                i0.this.f13247l.k(23, new x.a() { // from class: com.google.android.exoplayer2.p0
                    @Override // oe.x.a
                    public final void invoke(Object obj) {
                        ((Player.b) obj).onSkipSilenceEnabledChanged(z10);
                    }
                });
            }
        }

        @Override // android.view.TextureView.SurfaceTextureListener
        public void onSurfaceTextureAvailable(SurfaceTexture surfaceTexture, int i10, int i11) {
            i0.this.k2(surfaceTexture);
            i0.this.U1(i10, i11);
        }

        @Override // android.view.TextureView.SurfaceTextureListener
        public boolean onSurfaceTextureDestroyed(SurfaceTexture surfaceTexture) {
            i0.this.l2(null);
            i0.this.U1(0, 0);
            return true;
        }

        @Override // android.view.TextureView.SurfaceTextureListener
        public void onSurfaceTextureSizeChanged(SurfaceTexture surfaceTexture, int i10, int i11) {
            i0.this.U1(i10, i11);
        }

        @Override // android.view.TextureView.SurfaceTextureListener
        public void onSurfaceTextureUpdated(SurfaceTexture surfaceTexture) {
        }

        @Override // pe.y
        public void onVideoSizeChanged(final VideoSize videoSize) {
            i0.this.f13256p0 = videoSize;
            i0.this.f13247l.k(25, new x.a() { // from class: com.google.android.exoplayer2.q0
                @Override // oe.x.a
                public final void invoke(Object obj) {
                    ((Player.b) obj).onVideoSizeChanged(VideoSize.this);
                }
            });
        }

        @Override // pe.y
        public void p(DecoderCounters decoderCounters) {
            i0.this.f13232d0 = decoderCounters;
            i0.this.f13259r.p(decoderCounters);
        }

        @Override // com.google.android.exoplayer2.audio.e
        public void q(Exception exc) {
            i0.this.f13259r.q(exc);
        }

        @Override // com.google.android.exoplayer2.audio.e
        public void r(int i10, long j10, long j11) {
            i0.this.f13259r.r(i10, j10, j11);
        }

        @Override // pe.y
        public void s(long j10, int i10) {
            i0.this.f13259r.s(j10, i10);
        }

        @Override // android.view.SurfaceHolder.Callback
        public void surfaceChanged(SurfaceHolder surfaceHolder, int i10, int i11, int i12) {
            i0.this.U1(i11, i12);
        }

        @Override // android.view.SurfaceHolder.Callback
        public void surfaceCreated(SurfaceHolder surfaceHolder) {
            if (i0.this.Y) {
                i0.this.l2(surfaceHolder.getSurface());
            }
        }

        @Override // android.view.SurfaceHolder.Callback
        public void surfaceDestroyed(SurfaceHolder surfaceHolder) {
            if (i0.this.Y) {
                i0.this.l2(null);
            }
            i0.this.U1(0, 0);
        }

        @Override // com.google.android.exoplayer2.y1.b
        public void t(int i10) {
            final DeviceInfo w12 = i0.w1(i0.this.B);
            if (!w12.equals(i0.this.f13254o0)) {
                i0.this.f13254o0 = w12;
                i0.this.f13247l.k(29, new x.a() { // from class: com.google.android.exoplayer2.o0
                    @Override // oe.x.a
                    public final void invoke(Object obj) {
                        ((Player.b) obj).onDeviceInfoChanged(DeviceInfo.this);
                    }
                });
            }
        }

        @Override // qe.l.b
        public void u(Surface surface) {
            i0.this.l2(null);
        }

        @Override // qe.l.b
        public void v(Surface surface) {
            i0.this.l2(surface);
        }

        @Override // com.google.android.exoplayer2.y1.b
        public void w(final int i10, final boolean z10) {
            i0.this.f13247l.k(30, new x.a() { // from class: com.google.android.exoplayer2.n0
                @Override // oe.x.a
                public final void invoke(Object obj) {
                    ((Player.b) obj).onDeviceVolumeChanged(i10, z10);
                }
            });
        }

        @Override // mc.i
        public void z(boolean z10) {
            i0.this.v2();
        }

        @Override // ae.m
        public void onCues(final CueGroup cueGroup) {
            i0.this.f13244j0 = cueGroup;
            i0.this.f13247l.k(27, new x.a() { // from class: com.google.android.exoplayer2.k0
                @Override // oe.x.a
                public final void invoke(Object obj) {
                    ((Player.b) obj).onCues(CueGroup.this);
                }
            });
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class d implements pe.l, qe.a, s1.b {

        /* renamed from: d  reason: collision with root package name */
        private pe.l f13273d;

        /* renamed from: e  reason: collision with root package name */
        private qe.a f13274e;

        /* renamed from: i  reason: collision with root package name */
        private pe.l f13275i;

        /* renamed from: o  reason: collision with root package name */
        private qe.a f13276o;

        private d() {
        }

        @Override // pe.l
        public void a(long j10, long j11, Format format, MediaFormat mediaFormat) {
            long j12;
            long j13;
            Format format2;
            MediaFormat mediaFormat2;
            pe.l lVar = this.f13275i;
            if (lVar != null) {
                lVar.a(j10, j11, format, mediaFormat);
                mediaFormat2 = mediaFormat;
                format2 = format;
                j13 = j11;
                j12 = j10;
            } else {
                j12 = j10;
                j13 = j11;
                format2 = format;
                mediaFormat2 = mediaFormat;
            }
            pe.l lVar2 = this.f13273d;
            if (lVar2 != null) {
                lVar2.a(j12, j13, format2, mediaFormat2);
            }
        }

        @Override // qe.a
        public void b(long j10, float[] fArr) {
            qe.a aVar = this.f13276o;
            if (aVar != null) {
                aVar.b(j10, fArr);
            }
            qe.a aVar2 = this.f13274e;
            if (aVar2 != null) {
                aVar2.b(j10, fArr);
            }
        }

        @Override // qe.a
        public void c() {
            qe.a aVar = this.f13276o;
            if (aVar != null) {
                aVar.c();
            }
            qe.a aVar2 = this.f13274e;
            if (aVar2 != null) {
                aVar2.c();
            }
        }

        @Override // com.google.android.exoplayer2.s1.b
        public void o(int i10, Object obj) {
            if (i10 != 7) {
                if (i10 != 8) {
                    if (i10 != 10000) {
                        return;
                    }
                    qe.l lVar = (qe.l) obj;
                    if (lVar == null) {
                        this.f13275i = null;
                        this.f13276o = null;
                        return;
                    }
                    this.f13275i = lVar.getVideoFrameMetadataListener();
                    this.f13276o = lVar.getCameraMotionListener();
                    return;
                }
                this.f13274e = (qe.a) obj;
                return;
            }
            this.f13273d = (pe.l) obj;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class e implements a1 {

        /* renamed from: a  reason: collision with root package name */
        private final Object f13277a;

        /* renamed from: b  reason: collision with root package name */
        private Timeline f13278b;

        public e(Object obj, Timeline timeline) {
            this.f13277a = obj;
            this.f13278b = timeline;
        }

        @Override // com.google.android.exoplayer2.a1
        public Object a() {
            return this.f13277a;
        }

        @Override // com.google.android.exoplayer2.a1
        public Timeline b() {
            return this.f13278b;
        }
    }

    static {
        mc.u.a("goog.exo.exoplayer");
    }

    public i0(k kVar, Player player) {
        boolean z10;
        i0 i0Var;
        nc.t1 a10;
        AudioAttributes audioAttributes;
        boolean z11;
        boolean z12;
        oe.h hVar = new oe.h();
        this.f13231d = hVar;
        try {
            oe.y.f("ExoPlayerImpl", "Init " + Integer.toHexString(System.identityHashCode(this)) + " [ExoPlayerLib/2.19.1] [" + oe.w0.f39610e + "]");
            Context applicationContext = kVar.f13294a.getApplicationContext();
            this.f13233e = applicationContext;
            nc.a aVar = (nc.a) kVar.f13302i.apply(kVar.f13295b);
            this.f13259r = aVar;
            this.f13238g0 = kVar.f13304k;
            this.f13226a0 = kVar.f13310q;
            this.f13228b0 = kVar.f13311r;
            this.f13242i0 = kVar.f13308o;
            this.E = kVar.f13318y;
            c cVar = new c();
            this.f13269x = cVar;
            d dVar = new d();
            this.f13270y = dVar;
            Handler handler = new Handler(kVar.f13303j);
            v1[] a11 = ((mc.s0) kVar.f13297d.get()).a(handler, cVar, cVar, cVar, cVar);
            this.f13237g = a11;
            if (a11.length > 0) {
                z10 = true;
            } else {
                z10 = false;
            }
            oe.a.g(z10);
            ke.q qVar = (ke.q) kVar.f13299f.get();
            this.f13239h = qVar;
            this.f13257q = (r.a) kVar.f13298e.get();
            me.e eVar = (me.e) kVar.f13301h.get();
            this.f13263t = eVar;
            this.f13255p = kVar.f13312s;
            this.L = kVar.f13313t;
            this.f13265u = kVar.f13314u;
            this.f13267v = kVar.f13315v;
            this.N = kVar.f13319z;
            Looper looper = kVar.f13303j;
            this.f13261s = looper;
            oe.e eVar2 = kVar.f13295b;
            this.f13268w = eVar2;
            if (player == null) {
                i0Var = this;
            } else {
                i0Var = player;
            }
            this.f13235f = i0Var;
            this.f13247l = new oe.x(looper, eVar2, new x.b() { // from class: com.google.android.exoplayer2.s
                @Override // oe.x.b
                public final void a(Object obj, oe.q qVar2) {
                    ((Player.b) obj).onEvents(i0.this.f13235f, new Player.Events(qVar2));
                }
            });
            this.f13249m = new CopyOnWriteArraySet();
            this.f13253o = new ArrayList();
            this.M = new o0.a(0);
            ke.r rVar = new ke.r(new mc.r0[a11.length], new com.google.android.exoplayer2.trackselection.g[a11.length], Tracks.f12619e, null);
            this.f13227b = rVar;
            this.f13251n = new Timeline.b();
            Player.Commands e10 = new Player.Commands.a().c(1, 2, 3, 13, 14, 15, 16, 17, 18, 19, 31, 20, 30, 21, 22, 24, 27, 28, 32).d(29, qVar.g()).d(23, kVar.f13309p).d(25, kVar.f13309p).d(33, kVar.f13309p).d(26, kVar.f13309p).d(34, kVar.f13309p).e();
            this.f13229c = e10;
            this.O = new Player.Commands.a().b(e10).a(4).a(10).e();
            this.f13241i = eVar2.c(looper, null);
            t0.f fVar = new t0.f() { // from class: com.google.android.exoplayer2.t
                @Override // com.google.android.exoplayer2.t0.f
                public final void a(t0.e eVar3) {
                    r0.f13241i.post(new Runnable() { // from class: com.google.android.exoplayer2.y
                        @Override // java.lang.Runnable
                        public final void run() {
                            i0.this.Q1(eVar3);
                        }
                    });
                }
            };
            this.f13243j = fVar;
            this.f13260r0 = r1.k(rVar);
            aVar.y(i0Var, looper);
            int i10 = oe.w0.f39606a;
            if (i10 < 31) {
                a10 = new nc.t1();
            } else {
                a10 = b.a(applicationContext, this, kVar.A);
            }
            t0 t0Var = new t0(a11, qVar, rVar, (mc.a0) kVar.f13300g.get(), eVar, this.F, this.G, aVar, this.L, kVar.f13316w, kVar.f13317x, this.N, looper, eVar2, fVar, a10, kVar.B);
            this.f13245k = t0Var;
            this.f13240h0 = 1.0f;
            this.F = 0;
            MediaMetadata mediaMetadata = MediaMetadata.T;
            this.P = mediaMetadata;
            this.Q = mediaMetadata;
            this.f13258q0 = mediaMetadata;
            this.f13262s0 = -1;
            if (i10 < 21) {
                this.f13236f0 = R1(0);
            } else {
                this.f13236f0 = oe.w0.G(applicationContext);
            }
            this.f13244j0 = CueGroup.f13652i;
            this.f13246k0 = true;
            L(aVar);
            eVar.d(new Handler(looper), aVar);
            r1(cVar);
            long j10 = kVar.f13296c;
            if (j10 > 0) {
                t0Var.v(j10);
            }
            com.google.android.exoplayer2.b bVar = new com.google.android.exoplayer2.b(kVar.f13294a, handler, cVar);
            this.f13271z = bVar;
            bVar.b(kVar.f13307n);
            com.google.android.exoplayer2.d dVar2 = new com.google.android.exoplayer2.d(kVar.f13294a, handler, cVar);
            this.A = dVar2;
            if (kVar.f13305l) {
                audioAttributes = this.f13238g0;
            } else {
                audioAttributes = null;
            }
            dVar2.m(audioAttributes);
            if (kVar.f13309p) {
                y1 y1Var = new y1(kVar.f13294a, handler, cVar);
                this.B = y1Var;
                y1Var.h(oe.w0.k0(this.f13238g0.f12801i));
            } else {
                this.B = null;
            }
            b2 b2Var = new b2(kVar.f13294a);
            this.C = b2Var;
            if (kVar.f13306m != 0) {
                z11 = true;
            } else {
                z11 = false;
            }
            b2Var.a(z11);
            c2 c2Var = new c2(kVar.f13294a);
            this.D = c2Var;
            if (kVar.f13306m == 2) {
                z12 = true;
            } else {
                z12 = false;
            }
            c2Var.a(z12);
            this.f13254o0 = w1(this.B);
            this.f13256p0 = VideoSize.f14174p;
            this.f13230c0 = oe.l0.f39536c;
            qVar.k(this.f13238g0);
            b2(1, 10, Integer.valueOf(this.f13236f0));
            b2(2, 10, Integer.valueOf(this.f13236f0));
            b2(1, 3, this.f13238g0);
            b2(2, 4, Integer.valueOf(this.f13226a0));
            b2(2, 5, Integer.valueOf(this.f13228b0));
            b2(1, 9, Boolean.valueOf(this.f13242i0));
            b2(2, 7, dVar);
            b2(6, 8, dVar);
            hVar.f();
        } catch (Throwable th2) {
            this.f13231d.f();
            throw th2;
        }
    }

    private long B1(r1 r1Var) {
        if (r1Var.f13380b.b()) {
            r1Var.f13379a.l(r1Var.f13380b.f47006a, this.f13251n);
            if (r1Var.f13381c == -9223372036854775807L) {
                return r1Var.f13379a.r(E1(r1Var), this.f13101a).d();
            }
            return this.f13251n.p() + oe.w0.p1(r1Var.f13381c);
        }
        return oe.w0.p1(C1(r1Var));
    }

    public static /* synthetic */ void C0(int i10, Player.PositionInfo positionInfo, Player.PositionInfo positionInfo2, Player.b bVar) {
        bVar.onPositionDiscontinuity(i10);
        bVar.onPositionDiscontinuity(positionInfo, positionInfo2, i10);
    }

    private long C1(r1 r1Var) {
        long j10;
        if (r1Var.f13379a.u()) {
            return oe.w0.K0(this.f13266u0);
        }
        if (r1Var.f13393o) {
            j10 = r1Var.m();
        } else {
            j10 = r1Var.f13396r;
        }
        if (r1Var.f13380b.b()) {
            return j10;
        }
        return V1(r1Var.f13379a, r1Var.f13380b, j10);
    }

    private int E1(r1 r1Var) {
        if (r1Var.f13379a.u()) {
            return this.f13262s0;
        }
        return r1Var.f13379a.l(r1Var.f13380b.f47006a, this.f13251n).f12595i;
    }

    private Pair F1(Timeline timeline, Timeline timeline2, int i10, long j10) {
        boolean z10;
        long j11 = -9223372036854775807L;
        int i11 = -1;
        if (!timeline.u() && !timeline2.u()) {
            Pair n10 = timeline.n(this.f13101a, this.f13251n, i10, oe.w0.K0(j10));
            Object obj = ((Pair) oe.w0.j(n10)).first;
            if (timeline2.f(obj) != -1) {
                return n10;
            }
            Object z02 = t0.z0(this.f13101a, this.f13251n, this.F, this.G, obj, timeline, timeline2);
            if (z02 != null) {
                timeline2.l(z02, this.f13251n);
                int i12 = this.f13251n.f12595i;
                return T1(timeline2, i12, timeline2.r(i12, this.f13101a).d());
            }
            return T1(timeline2, -1, -9223372036854775807L);
        }
        if (!timeline.u() && timeline2.u()) {
            z10 = true;
        } else {
            z10 = false;
        }
        if (!z10) {
            i11 = i10;
        }
        if (!z10) {
            j11 = j10;
        }
        return T1(timeline2, i11, j11);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static int G1(boolean z10, int i10) {
        return (!z10 || i10 == 1) ? 1 : 2;
    }

    private Player.PositionInfo I1(long j10) {
        Object obj;
        int i10;
        MediaItem mediaItem;
        Object obj2;
        long j11;
        int Q = Q();
        if (!this.f13260r0.f13379a.u()) {
            r1 r1Var = this.f13260r0;
            Object obj3 = r1Var.f13380b.f47006a;
            r1Var.f13379a.l(obj3, this.f13251n);
            i10 = this.f13260r0.f13379a.f(obj3);
            obj2 = obj3;
            obj = this.f13260r0.f13379a.r(Q, this.f13101a).f12604d;
            mediaItem = this.f13101a.f12606i;
        } else {
            obj = null;
            i10 = -1;
            mediaItem = null;
            obj2 = null;
        }
        int i11 = i10;
        long p12 = oe.w0.p1(j10);
        if (this.f13260r0.f13380b.b()) {
            j11 = oe.w0.p1(M1(this.f13260r0));
        } else {
            j11 = p12;
        }
        r.b bVar = this.f13260r0.f13380b;
        return new Player.PositionInfo(obj, Q, mediaItem, obj2, i11, p12, j11, bVar.f47007b, bVar.f47008c);
    }

    private Player.PositionInfo J1(int i10, r1 r1Var, int i11) {
        int i12;
        Object obj;
        MediaItem mediaItem;
        Object obj2;
        int i13;
        long j10;
        long M1;
        Timeline.b bVar = new Timeline.b();
        if (!r1Var.f13379a.u()) {
            Object obj3 = r1Var.f13380b.f47006a;
            r1Var.f13379a.l(obj3, bVar);
            int i14 = bVar.f12595i;
            int f10 = r1Var.f13379a.f(obj3);
            Object obj4 = r1Var.f13379a.r(i14, this.f13101a).f12604d;
            mediaItem = this.f13101a.f12606i;
            obj2 = obj3;
            i13 = f10;
            obj = obj4;
            i12 = i14;
        } else {
            i12 = i11;
            obj = null;
            mediaItem = null;
            obj2 = null;
            i13 = -1;
        }
        if (i10 == 0) {
            if (r1Var.f13380b.b()) {
                r.b bVar2 = r1Var.f13380b;
                j10 = bVar.e(bVar2.f47007b, bVar2.f47008c);
                M1 = M1(r1Var);
            } else {
                if (r1Var.f13380b.f47010e != -1) {
                    j10 = M1(this.f13260r0);
                } else {
                    j10 = bVar.f12597p + bVar.f12596o;
                }
                M1 = j10;
            }
        } else if (r1Var.f13380b.b()) {
            j10 = r1Var.f13396r;
            M1 = M1(r1Var);
        } else {
            j10 = bVar.f12597p + r1Var.f13396r;
            M1 = j10;
        }
        long p12 = oe.w0.p1(j10);
        long p13 = oe.w0.p1(M1);
        r.b bVar3 = r1Var.f13380b;
        return new Player.PositionInfo(obj, i12, mediaItem, obj2, i13, p12, p13, bVar3.f47007b, bVar3.f47008c);
    }

    public static /* synthetic */ void K0(r1 r1Var, Player.b bVar) {
        bVar.onLoadingChanged(r1Var.f13385g);
        bVar.onIsLoadingChanged(r1Var.f13385g);
    }

    private static long M1(r1 r1Var) {
        Timeline.d dVar = new Timeline.d();
        Timeline.b bVar = new Timeline.b();
        r1Var.f13379a.l(r1Var.f13380b.f47006a, bVar);
        if (r1Var.f13381c == -9223372036854775807L) {
            return r1Var.f13379a.r(bVar.f12595i, dVar).e();
        }
        return bVar.q() + r1Var.f13381c;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void Q1(t0.e eVar) {
        long j10;
        boolean z10;
        int i10 = this.H - eVar.f13629c;
        this.H = i10;
        boolean z11 = true;
        if (eVar.f13630d) {
            this.I = eVar.f13631e;
            this.J = true;
        }
        if (eVar.f13632f) {
            this.K = eVar.f13633g;
        }
        if (i10 == 0) {
            Timeline timeline = eVar.f13628b.f13379a;
            if (!this.f13260r0.f13379a.u() && timeline.u()) {
                this.f13262s0 = -1;
                this.f13266u0 = 0L;
                this.f13264t0 = 0;
            }
            if (!timeline.u()) {
                List J = ((t1) timeline).J();
                if (J.size() == this.f13253o.size()) {
                    z10 = true;
                } else {
                    z10 = false;
                }
                oe.a.g(z10);
                for (int i11 = 0; i11 < J.size(); i11++) {
                    ((e) this.f13253o.get(i11)).f13278b = (Timeline) J.get(i11);
                }
            }
            long j11 = -9223372036854775807L;
            if (this.J) {
                if (eVar.f13628b.f13380b.equals(this.f13260r0.f13380b) && eVar.f13628b.f13382d == this.f13260r0.f13396r) {
                    z11 = false;
                }
                if (z11) {
                    if (!timeline.u() && !eVar.f13628b.f13380b.b()) {
                        r1 r1Var = eVar.f13628b;
                        j10 = V1(timeline, r1Var.f13380b, r1Var.f13382d);
                    } else {
                        j10 = eVar.f13628b.f13382d;
                    }
                    j11 = j10;
                }
            } else {
                z11 = false;
            }
            this.J = false;
            t2(eVar.f13628b, 1, this.K, z11, this.I, j11, -1, false);
        }
    }

    private int R1(int i10) {
        AudioTrack audioTrack = this.T;
        if (audioTrack != null && audioTrack.getAudioSessionId() != i10) {
            this.T.release();
            this.T = null;
        }
        if (this.T == null) {
            this.T = new AudioTrack(3, 4000, 4, 2, 2, 0, i10);
        }
        return this.T.getAudioSessionId();
    }

    private r1 S1(r1 r1Var, Timeline timeline, Pair pair) {
        boolean z10;
        r.b bVar;
        rd.w0 w0Var;
        ke.r rVar;
        List list;
        int i10;
        long j10;
        if (!timeline.u() && pair == null) {
            z10 = false;
        } else {
            z10 = true;
        }
        oe.a.a(z10);
        Timeline timeline2 = r1Var.f13379a;
        long B1 = B1(r1Var);
        r1 j11 = r1Var.j(timeline);
        if (timeline.u()) {
            r.b l10 = r1.l();
            long K0 = oe.w0.K0(this.f13266u0);
            r1 c10 = j11.d(l10, K0, K0, K0, 0L, rd.w0.f47078o, this.f13227b, qi.s.t()).c(l10);
            c10.f13394p = c10.f13396r;
            return c10;
        }
        Object obj = j11.f13380b.f47006a;
        boolean equals = obj.equals(((Pair) oe.w0.j(pair)).first);
        if (!equals) {
            bVar = new r.b(pair.first);
        } else {
            bVar = j11.f13380b;
        }
        long longValue = ((Long) pair.second).longValue();
        long K02 = oe.w0.K0(B1);
        if (!timeline2.u()) {
            K02 -= timeline2.l(obj, this.f13251n).q();
        }
        if (!equals || longValue < K02) {
            r.b bVar2 = bVar;
            oe.a.g(!bVar2.b());
            if (!equals) {
                w0Var = rd.w0.f47078o;
            } else {
                w0Var = j11.f13386h;
            }
            rd.w0 w0Var2 = w0Var;
            if (!equals) {
                rVar = this.f13227b;
            } else {
                rVar = j11.f13387i;
            }
            ke.r rVar2 = rVar;
            if (!equals) {
                list = qi.s.t();
            } else {
                list = j11.f13388j;
            }
            r1 c11 = j11.d(bVar2, longValue, longValue, longValue, 0L, w0Var2, rVar2, list).c(bVar2);
            c11.f13394p = longValue;
            return c11;
        } else if (i10 == 0) {
            int f10 = timeline.f(j11.f13389k.f47006a);
            if (f10 != -1 && timeline.j(f10, this.f13251n).f12595i == timeline.l(bVar.f47006a, this.f13251n).f12595i) {
                return j11;
            }
            timeline.l(bVar.f47006a, this.f13251n);
            if (bVar.b()) {
                j10 = this.f13251n.e(bVar.f47007b, bVar.f47008c);
            } else {
                j10 = this.f13251n.f12596o;
            }
            r.b bVar3 = bVar;
            r1 c12 = j11.d(bVar3, j11.f13396r, j11.f13396r, j11.f13382d, j10 - j11.f13396r, j11.f13386h, j11.f13387i, j11.f13388j).c(bVar3);
            c12.f13394p = j10;
            return c12;
        } else {
            r.b bVar4 = bVar;
            oe.a.g(!bVar4.b());
            long max = Math.max(0L, j11.f13395q - (longValue - K02));
            long j12 = j11.f13394p;
            if (j11.f13389k.equals(j11.f13380b)) {
                j12 = longValue + max;
            }
            r1 d10 = j11.d(bVar4, longValue, longValue, longValue, max, j11.f13386h, j11.f13387i, j11.f13388j);
            d10.f13394p = j12;
            return d10;
        }
    }

    private Pair T1(Timeline timeline, int i10, long j10) {
        if (timeline.u()) {
            this.f13262s0 = i10;
            if (j10 == -9223372036854775807L) {
                j10 = 0;
            }
            this.f13266u0 = j10;
            this.f13264t0 = 0;
            return null;
        }
        if (i10 == -1 || i10 >= timeline.t()) {
            i10 = timeline.e(this.G);
            j10 = timeline.r(i10, this.f13101a).d();
        }
        return timeline.n(this.f13101a, this.f13251n, i10, oe.w0.K0(j10));
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void U1(final int i10, final int i11) {
        if (i10 == this.f13230c0.b() && i11 == this.f13230c0.a()) {
            return;
        }
        this.f13230c0 = new oe.l0(i10, i11);
        this.f13247l.k(24, new x.a() { // from class: com.google.android.exoplayer2.v
            @Override // oe.x.a
            public final void invoke(Object obj) {
                ((Player.b) obj).onSurfaceSizeChanged(i10, i11);
            }
        });
        b2(2, 14, new oe.l0(i10, i11));
    }

    private long V1(Timeline timeline, r.b bVar, long j10) {
        timeline.l(bVar.f47006a, this.f13251n);
        return j10 + this.f13251n.q();
    }

    private r1 Y1(r1 r1Var, int i10, int i11) {
        int E1 = E1(r1Var);
        long B1 = B1(r1Var);
        Timeline timeline = r1Var.f13379a;
        int size = this.f13253o.size();
        this.H++;
        Z1(i10, i11);
        Timeline x12 = x1();
        r1 S1 = S1(r1Var, x12, F1(timeline, x12, E1, B1));
        int i12 = S1.f13383e;
        if (i12 != 1 && i12 != 4 && i10 < i11 && i11 == size && E1 >= S1.f13379a.t()) {
            S1 = S1.h(4);
        }
        this.f13245k.n0(i10, i11, this.M);
        return S1;
    }

    private void Z1(int i10, int i11) {
        for (int i12 = i11 - 1; i12 >= i10; i12--) {
            this.f13253o.remove(i12);
        }
        this.M = this.M.a(i10, i11);
    }

    private void a2() {
        if (this.X != null) {
            y1(this.f13270y).n(10000).m(null).l();
            this.X.g(this.f13269x);
            this.X = null;
        }
        TextureView textureView = this.Z;
        if (textureView != null) {
            if (textureView.getSurfaceTextureListener() != this.f13269x) {
                oe.y.i("ExoPlayerImpl", "SurfaceTextureListener already unset or replaced.");
            } else {
                this.Z.setSurfaceTextureListener(null);
            }
            this.Z = null;
        }
        SurfaceHolder surfaceHolder = this.W;
        if (surfaceHolder != null) {
            surfaceHolder.removeCallback(this.f13269x);
            this.W = null;
        }
    }

    private void b2(int i10, int i11, Object obj) {
        v1[] v1VarArr;
        for (v1 v1Var : this.f13237g) {
            if (v1Var.e() == i10) {
                y1(v1Var).n(i11).m(obj).l();
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void c2() {
        b2(1, 2, Float.valueOf(this.f13240h0 * this.A.g()));
    }

    private void h2(List list, int i10, long j10, boolean z10) {
        long j11;
        int i11;
        int i12;
        r1 h10;
        boolean z11;
        int i13 = i10;
        int E1 = E1(this.f13260r0);
        long Z = Z();
        this.H++;
        if (!this.f13253o.isEmpty()) {
            Z1(0, this.f13253o.size());
        }
        List s12 = s1(0, list);
        Timeline x12 = x1();
        if (!x12.u() && i13 >= x12.t()) {
            throw new mc.z(x12, i13, j10);
        }
        if (z10) {
            i13 = x12.e(this.G);
            j11 = -9223372036854775807L;
        } else if (i13 == -1) {
            i11 = E1;
            j11 = Z;
            r1 S1 = S1(this.f13260r0, x12, T1(x12, i11, j11));
            i12 = S1.f13383e;
            if (i11 != -1 && i12 != 1) {
                i12 = (!x12.u() || i11 >= x12.t()) ? 4 : 2;
            }
            h10 = S1.h(i12);
            this.f13245k.O0(s12, i11, oe.w0.K0(j11), this.M);
            if (this.f13260r0.f13380b.f47006a.equals(h10.f13380b.f47006a) && !this.f13260r0.f13379a.u()) {
                z11 = true;
            } else {
                z11 = false;
            }
            t2(h10, 0, 1, z11, 4, C1(h10), -1, false);
        } else {
            j11 = j10;
        }
        i11 = i13;
        r1 S12 = S1(this.f13260r0, x12, T1(x12, i11, j11));
        i12 = S12.f13383e;
        if (i11 != -1) {
            if (x12.u()) {
            }
        }
        h10 = S12.h(i12);
        this.f13245k.O0(s12, i11, oe.w0.K0(j11), this.M);
        if (this.f13260r0.f13380b.f47006a.equals(h10.f13380b.f47006a)) {
        }
        z11 = false;
        t2(h10, 0, 1, z11, 4, C1(h10), -1, false);
    }

    private void i2(SurfaceHolder surfaceHolder) {
        this.Y = false;
        this.W = surfaceHolder;
        surfaceHolder.addCallback(this.f13269x);
        Surface surface = this.W.getSurface();
        if (surface != null && surface.isValid()) {
            Rect surfaceFrame = this.W.getSurfaceFrame();
            U1(surfaceFrame.width(), surfaceFrame.height());
            return;
        }
        U1(0, 0);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void k2(SurfaceTexture surfaceTexture) {
        Surface surface = new Surface(surfaceTexture);
        l2(surface);
        this.V = surface;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void l2(Object obj) {
        v1[] v1VarArr;
        ArrayList<s1> arrayList = new ArrayList();
        boolean z10 = false;
        for (v1 v1Var : this.f13237g) {
            if (v1Var.e() == 2) {
                arrayList.add(y1(v1Var).n(1).m(obj).l());
            }
        }
        Object obj2 = this.U;
        if (obj2 != null && obj2 != obj) {
            try {
                for (s1 s1Var : arrayList) {
                    s1Var.a(this.E);
                }
            } catch (InterruptedException unused) {
                Thread.currentThread().interrupt();
            } catch (TimeoutException unused2) {
                z10 = true;
            }
            Object obj3 = this.U;
            Surface surface = this.V;
            if (obj3 == surface) {
                surface.release();
                this.V = null;
            }
        }
        this.U = obj;
        if (z10) {
            q2(j.i(new mc.v(3), 1003));
        }
    }

    private void q2(j jVar) {
        r1 r1Var = this.f13260r0;
        r1 c10 = r1Var.c(r1Var.f13380b);
        c10.f13394p = c10.f13396r;
        c10.f13395q = 0L;
        r1 h10 = c10.h(1);
        if (jVar != null) {
            h10 = h10.f(jVar);
        }
        this.H++;
        this.f13245k.i1();
        t2(h10, 0, 1, false, 5, -9223372036854775807L, -1, false);
    }

    private void r2() {
        Player.Commands commands = this.O;
        Player.Commands I = oe.w0.I(this.f13235f, this.f13229c);
        this.O = I;
        if (!I.equals(commands)) {
            this.f13247l.h(13, new x.a() { // from class: com.google.android.exoplayer2.z
                @Override // oe.x.a
                public final void invoke(Object obj) {
                    ((Player.b) obj).onAvailableCommandsChanged(i0.this.O);
                }
            });
        }
    }

    private List s1(int i10, List list) {
        ArrayList arrayList = new ArrayList();
        for (int i11 = 0; i11 < list.size(); i11++) {
            o1.c cVar = new o1.c((rd.r) list.get(i11), this.f13255p);
            arrayList.add(cVar);
            this.f13253o.add(i11 + i10, new e(cVar.f13366b, cVar.f13365a.X()));
        }
        this.M = this.M.g(i10, arrayList.size());
        return arrayList;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void s2(boolean z10, int i10, int i11) {
        boolean z11;
        int i12 = 0;
        if (z10 && i10 != -1) {
            z11 = true;
        } else {
            z11 = false;
        }
        if (z11 && i10 != 1) {
            i12 = 1;
        }
        r1 r1Var = this.f13260r0;
        if (r1Var.f13390l == z11 && r1Var.f13391m == i12) {
            return;
        }
        this.H++;
        if (r1Var.f13393o) {
            r1Var = r1Var.a();
        }
        r1 e10 = r1Var.e(z11, i12);
        this.f13245k.R0(z11, i12);
        t2(e10, 0, i11, false, 5, -9223372036854775807L, -1, false);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public MediaMetadata t1() {
        Timeline v10 = v();
        if (v10.u()) {
            return this.f13258q0;
        }
        return this.f13258q0.b().J(v10.r(Q(), this.f13101a).f12606i.f12346p).H();
    }

    private void t2(final r1 r1Var, final int i10, final int i11, boolean z10, final int i12, long j10, int i13, boolean z11) {
        boolean z12;
        boolean z13;
        boolean z14;
        r1 r1Var2 = this.f13260r0;
        this.f13260r0 = r1Var;
        boolean equals = r1Var2.f13379a.equals(r1Var.f13379a);
        Pair z15 = z1(r1Var, r1Var2, z10, i12, !equals, z11);
        boolean booleanValue = ((Boolean) z15.first).booleanValue();
        final int intValue = ((Integer) z15.second).intValue();
        MediaMetadata mediaMetadata = this.P;
        final MediaItem mediaItem = null;
        if (booleanValue) {
            if (!r1Var.f13379a.u()) {
                mediaItem = r1Var.f13379a.r(r1Var.f13379a.l(r1Var.f13380b.f47006a, this.f13251n).f12595i, this.f13101a).f12606i;
            }
            this.f13258q0 = MediaMetadata.T;
        }
        if (booleanValue || !r1Var2.f13388j.equals(r1Var.f13388j)) {
            this.f13258q0 = this.f13258q0.b().L(r1Var.f13388j).H();
            mediaMetadata = t1();
        }
        boolean equals2 = mediaMetadata.equals(this.P);
        this.P = mediaMetadata;
        if (r1Var2.f13390l != r1Var.f13390l) {
            z12 = true;
        } else {
            z12 = false;
        }
        if (r1Var2.f13383e != r1Var.f13383e) {
            z13 = true;
        } else {
            z13 = false;
        }
        if (z13 || z12) {
            v2();
        }
        boolean z16 = r1Var2.f13385g;
        boolean z17 = r1Var.f13385g;
        if (z16 != z17) {
            z14 = true;
        } else {
            z14 = false;
        }
        if (z14) {
            u2(z17);
        }
        if (!equals) {
            this.f13247l.h(0, new x.a() { // from class: com.google.android.exoplayer2.l
                @Override // oe.x.a
                public final void invoke(Object obj) {
                    Player.b bVar = (Player.b) obj;
                    bVar.onTimelineChanged(r1.this.f13379a, i10);
                }
            });
        }
        if (z10) {
            final Player.PositionInfo J1 = J1(i12, r1Var2, i13);
            final Player.PositionInfo I1 = I1(j10);
            this.f13247l.h(11, new x.a() { // from class: com.google.android.exoplayer2.d0
                @Override // oe.x.a
                public final void invoke(Object obj) {
                    i0.C0(i12, J1, I1, (Player.b) obj);
                }
            });
        }
        if (booleanValue) {
            this.f13247l.h(1, new x.a() { // from class: com.google.android.exoplayer2.e0
                @Override // oe.x.a
                public final void invoke(Object obj) {
                    ((Player.b) obj).onMediaItemTransition(MediaItem.this, intValue);
                }
            });
        }
        if (r1Var2.f13384f != r1Var.f13384f) {
            this.f13247l.h(10, new x.a() { // from class: com.google.android.exoplayer2.f0
                @Override // oe.x.a
                public final void invoke(Object obj) {
                    ((Player.b) obj).onPlayerErrorChanged(r1.this.f13384f);
                }
            });
            if (r1Var.f13384f != null) {
                this.f13247l.h(10, new x.a() { // from class: com.google.android.exoplayer2.g0
                    @Override // oe.x.a
                    public final void invoke(Object obj) {
                        ((Player.b) obj).onPlayerError(r1.this.f13384f);
                    }
                });
            }
        }
        ke.r rVar = r1Var2.f13387i;
        ke.r rVar2 = r1Var.f13387i;
        if (rVar != rVar2) {
            this.f13239h.h(rVar2.f32295e);
            this.f13247l.h(2, new x.a() { // from class: com.google.android.exoplayer2.h0
                @Override // oe.x.a
                public final void invoke(Object obj) {
                    ((Player.b) obj).onTracksChanged(r1.this.f13387i.f32294d);
                }
            });
        }
        if (!equals2) {
            final MediaMetadata mediaMetadata2 = this.P;
            this.f13247l.h(14, new x.a() { // from class: com.google.android.exoplayer2.m
                @Override // oe.x.a
                public final void invoke(Object obj) {
                    ((Player.b) obj).onMediaMetadataChanged(MediaMetadata.this);
                }
            });
        }
        if (z14) {
            this.f13247l.h(3, new x.a() { // from class: com.google.android.exoplayer2.n
                @Override // oe.x.a
                public final void invoke(Object obj) {
                    i0.K0(r1.this, (Player.b) obj);
                }
            });
        }
        if (z13 || z12) {
            this.f13247l.h(-1, new x.a() { // from class: com.google.android.exoplayer2.o
                @Override // oe.x.a
                public final void invoke(Object obj) {
                    ((Player.b) obj).onPlayerStateChanged(r0.f13390l, r1.this.f13383e);
                }
            });
        }
        if (z13) {
            this.f13247l.h(4, new x.a() { // from class: com.google.android.exoplayer2.p
                @Override // oe.x.a
                public final void invoke(Object obj) {
                    ((Player.b) obj).onPlaybackStateChanged(r1.this.f13383e);
                }
            });
        }
        if (z12) {
            this.f13247l.h(5, new x.a() { // from class: com.google.android.exoplayer2.w
                @Override // oe.x.a
                public final void invoke(Object obj) {
                    Player.b bVar = (Player.b) obj;
                    bVar.onPlayWhenReadyChanged(r1.this.f13390l, i11);
                }
            });
        }
        if (r1Var2.f13391m != r1Var.f13391m) {
            this.f13247l.h(6, new x.a() { // from class: com.google.android.exoplayer2.a0
                @Override // oe.x.a
                public final void invoke(Object obj) {
                    ((Player.b) obj).onPlaybackSuppressionReasonChanged(r1.this.f13391m);
                }
            });
        }
        if (r1Var2.n() != r1Var.n()) {
            this.f13247l.h(7, new x.a() { // from class: com.google.android.exoplayer2.b0
                @Override // oe.x.a
                public final void invoke(Object obj) {
                    ((Player.b) obj).onIsPlayingChanged(r1.this.n());
                }
            });
        }
        if (!r1Var2.f13392n.equals(r1Var.f13392n)) {
            this.f13247l.h(12, new x.a() { // from class: com.google.android.exoplayer2.c0
                @Override // oe.x.a
                public final void invoke(Object obj) {
                    ((Player.b) obj).onPlaybackParametersChanged(r1.this.f13392n);
                }
            });
        }
        r2();
        this.f13247l.f();
        if (r1Var2.f13393o != r1Var.f13393o) {
            Iterator it = this.f13249m.iterator();
            while (it.hasNext()) {
                ((mc.i) it.next()).z(r1Var.f13393o);
            }
        }
    }

    private void u2(boolean z10) {
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void v2() {
        int O = O();
        boolean z10 = false;
        if (O != 1) {
            if (O != 2 && O != 3) {
                if (O != 4) {
                    throw new IllegalStateException();
                }
            } else {
                boolean A1 = A1();
                b2 b2Var = this.C;
                if (B() && !A1) {
                    z10 = true;
                }
                b2Var.b(z10);
                this.D.b(B());
                return;
            }
        }
        this.C.b(false);
        this.D.b(false);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static DeviceInfo w1(y1 y1Var) {
        int i10;
        int i11 = 0;
        DeviceInfo.b bVar = new DeviceInfo.b(0);
        if (y1Var != null) {
            i10 = y1Var.d();
        } else {
            i10 = 0;
        }
        DeviceInfo.b g10 = bVar.g(i10);
        if (y1Var != null) {
            i11 = y1Var.c();
        }
        return g10.f(i11).e();
    }

    private void w2() {
        IllegalStateException illegalStateException;
        this.f13231d.c();
        if (Thread.currentThread() != w().getThread()) {
            String D = oe.w0.D("Player is accessed on the wrong thread.\nCurrent thread: '%s'\nExpected thread: '%s'\nSee https://developer.android.com/guide/topics/media/issues/player-accessed-on-wrong-thread", Thread.currentThread().getName(), w().getThread().getName());
            if (!this.f13246k0) {
                if (this.f13248l0) {
                    illegalStateException = null;
                } else {
                    illegalStateException = new IllegalStateException();
                }
                oe.y.j("ExoPlayerImpl", D, illegalStateException);
                this.f13248l0 = true;
                return;
            }
            throw new IllegalStateException(D);
        }
    }

    private Timeline x1() {
        return new t1(this.f13253o, this.M);
    }

    private s1 y1(s1.b bVar) {
        int E1 = E1(this.f13260r0);
        t0 t0Var = this.f13245k;
        Timeline timeline = this.f13260r0.f13379a;
        if (E1 == -1) {
            E1 = 0;
        }
        return new s1(t0Var, bVar, timeline, E1, this.f13268w, t0Var.C());
    }

    private Pair z1(r1 r1Var, r1 r1Var2, boolean z10, int i10, boolean z11, boolean z12) {
        Timeline timeline = r1Var2.f13379a;
        Timeline timeline2 = r1Var.f13379a;
        if (timeline2.u() && timeline.u()) {
            return new Pair(Boolean.FALSE, -1);
        }
        int i11 = 3;
        if (timeline2.u() != timeline.u()) {
            return new Pair(Boolean.TRUE, 3);
        }
        if (!timeline.r(timeline.l(r1Var2.f13380b.f47006a, this.f13251n).f12595i, this.f13101a).f12604d.equals(timeline2.r(timeline2.l(r1Var.f13380b.f47006a, this.f13251n).f12595i, this.f13101a).f12604d)) {
            if (z10 && i10 == 0) {
                i11 = 1;
            } else if (z10 && i10 == 1) {
                i11 = 2;
            } else if (!z11) {
                throw new IllegalStateException();
            }
            return new Pair(Boolean.TRUE, Integer.valueOf(i11));
        } else if (z10 && i10 == 0 && r1Var2.f13380b.f47009d < r1Var.f13380b.f47009d) {
            return new Pair(Boolean.TRUE, 0);
        } else {
            if (z10 && i10 == 1 && z12) {
                return new Pair(Boolean.TRUE, 2);
            }
            return new Pair(Boolean.FALSE, -1);
        }
    }

    @Override // com.google.android.exoplayer2.Player
    public Player.Commands A() {
        w2();
        return this.O;
    }

    public boolean A1() {
        w2();
        return this.f13260r0.f13393o;
    }

    @Override // com.google.android.exoplayer2.Player
    public boolean B() {
        w2();
        return this.f13260r0.f13390l;
    }

    @Override // com.google.android.exoplayer2.Player
    public void C(final boolean z10) {
        w2();
        if (this.G != z10) {
            this.G = z10;
            this.f13245k.Y0(z10);
            this.f13247l.h(9, new x.a() { // from class: com.google.android.exoplayer2.x
                @Override // oe.x.a
                public final void invoke(Object obj) {
                    ((Player.b) obj).onShuffleModeEnabledChanged(z10);
                }
            });
            r2();
            this.f13247l.f();
        }
    }

    @Override // com.google.android.exoplayer2.Player
    public long D() {
        w2();
        return 3000L;
    }

    public ke.m D1() {
        w2();
        return new ke.m(this.f13260r0.f13387i.f32293c);
    }

    @Override // com.google.android.exoplayer2.Player
    public int E() {
        w2();
        if (this.f13260r0.f13379a.u()) {
            return this.f13264t0;
        }
        r1 r1Var = this.f13260r0;
        return r1Var.f13379a.f(r1Var.f13380b.f47006a);
    }

    @Override // com.google.android.exoplayer2.Player
    public void F(TextureView textureView) {
        w2();
        if (textureView != null && textureView == this.Z) {
            u1();
        }
    }

    @Override // com.google.android.exoplayer2.Player
    public VideoSize G() {
        w2();
        return this.f13256p0;
    }

    @Override // com.google.android.exoplayer2.Player
    /* renamed from: H1 */
    public j m() {
        w2();
        return this.f13260r0.f13384f;
    }

    @Override // com.google.android.exoplayer2.Player
    public int I() {
        w2();
        if (f()) {
            return this.f13260r0.f13380b.f47008c;
        }
        return -1;
    }

    @Override // com.google.android.exoplayer2.Player
    public long J() {
        w2();
        return this.f13267v;
    }

    @Override // com.google.android.exoplayer2.Player
    public long K() {
        w2();
        return B1(this.f13260r0);
    }

    public int K1() {
        w2();
        return this.f13237g.length;
    }

    @Override // com.google.android.exoplayer2.Player
    public void L(Player.b bVar) {
        this.f13247l.c((Player.b) oe.a.e(bVar));
    }

    public int L1(int i10) {
        w2();
        return this.f13237g[i10].e();
    }

    @Override // com.google.android.exoplayer2.Player
    public long M() {
        w2();
        if (f()) {
            r1 r1Var = this.f13260r0;
            if (r1Var.f13389k.equals(r1Var.f13380b)) {
                return oe.w0.p1(this.f13260r0.f13394p);
            }
            return getDuration();
        }
        return V();
    }

    public ke.q N1() {
        w2();
        return this.f13239h;
    }

    @Override // com.google.android.exoplayer2.Player
    public int O() {
        w2();
        return this.f13260r0.f13383e;
    }

    public Format O1() {
        w2();
        return this.R;
    }

    public float P1() {
        w2();
        return this.f13240h0;
    }

    @Override // com.google.android.exoplayer2.Player
    public int Q() {
        w2();
        int E1 = E1(this.f13260r0);
        if (E1 == -1) {
            return 0;
        }
        return E1;
    }

    @Override // com.google.android.exoplayer2.Player
    public void R(final int i10) {
        w2();
        if (this.F != i10) {
            this.F = i10;
            this.f13245k.V0(i10);
            this.f13247l.h(8, new x.a() { // from class: com.google.android.exoplayer2.u
                @Override // oe.x.a
                public final void invoke(Object obj) {
                    ((Player.b) obj).onRepeatModeChanged(i10);
                }
            });
            r2();
            this.f13247l.f();
        }
    }

    @Override // com.google.android.exoplayer2.Player
    public void S(SurfaceView surfaceView) {
        SurfaceHolder holder;
        w2();
        if (surfaceView == null) {
            holder = null;
        } else {
            holder = surfaceView.getHolder();
        }
        v1(holder);
    }

    @Override // com.google.android.exoplayer2.Player
    public int T() {
        w2();
        return this.F;
    }

    @Override // com.google.android.exoplayer2.Player
    public boolean U() {
        w2();
        return this.G;
    }

    @Override // com.google.android.exoplayer2.Player
    public long V() {
        w2();
        if (this.f13260r0.f13379a.u()) {
            return this.f13266u0;
        }
        r1 r1Var = this.f13260r0;
        if (r1Var.f13389k.f47009d != r1Var.f13380b.f47009d) {
            return r1Var.f13379a.r(Q(), this.f13101a).f();
        }
        long j10 = r1Var.f13394p;
        if (this.f13260r0.f13389k.b()) {
            r1 r1Var2 = this.f13260r0;
            Timeline.b l10 = r1Var2.f13379a.l(r1Var2.f13389k.f47006a, this.f13251n);
            long i10 = l10.i(this.f13260r0.f13389k.f47007b);
            if (i10 == Long.MIN_VALUE) {
                j10 = l10.f12596o;
            } else {
                j10 = i10;
            }
        }
        r1 r1Var3 = this.f13260r0;
        return oe.w0.p1(V1(r1Var3.f13379a, r1Var3.f13389k, j10));
    }

    public void W1(rd.r rVar, boolean z10, boolean z11) {
        w2();
        e2(rVar, z10);
        d();
    }

    public void X1() {
        AudioTrack audioTrack;
        oe.y.f("ExoPlayerImpl", "Release " + Integer.toHexString(System.identityHashCode(this)) + " [ExoPlayerLib/2.19.1] [" + oe.w0.f39610e + "] [" + mc.u.b() + "]");
        w2();
        if (oe.w0.f39606a < 21 && (audioTrack = this.T) != null) {
            audioTrack.release();
            this.T = null;
        }
        this.f13271z.b(false);
        y1 y1Var = this.B;
        if (y1Var != null) {
            y1Var.g();
        }
        this.C.b(false);
        this.D.b(false);
        this.A.i();
        if (!this.f13245k.j0()) {
            this.f13247l.k(10, new x.a() { // from class: com.google.android.exoplayer2.q
                @Override // oe.x.a
                public final void invoke(Object obj) {
                    ((Player.b) obj).onPlayerError(j.i(new mc.v(1), 1003));
                }
            });
        }
        this.f13247l.i();
        this.f13241i.e(null);
        this.f13263t.a(this.f13259r);
        r1 r1Var = this.f13260r0;
        if (r1Var.f13393o) {
            this.f13260r0 = r1Var.a();
        }
        r1 h10 = this.f13260r0.h(1);
        this.f13260r0 = h10;
        r1 c10 = h10.c(h10.f13380b);
        this.f13260r0 = c10;
        c10.f13394p = c10.f13396r;
        this.f13260r0.f13395q = 0L;
        this.f13259r.release();
        this.f13239h.i();
        a2();
        Surface surface = this.V;
        if (surface != null) {
            surface.release();
            this.V = null;
        }
        if (!this.f13250m0) {
            this.f13244j0 = CueGroup.f13652i;
            this.f13252n0 = true;
            return;
        }
        android.support.v4.media.session.b.a(oe.a.e(null));
        throw null;
    }

    @Override // com.google.android.exoplayer2.Player
    public MediaMetadata Y() {
        w2();
        return this.P;
    }

    @Override // com.google.android.exoplayer2.Player
    public long Z() {
        w2();
        return oe.w0.p1(C1(this.f13260r0));
    }

    @Override // com.google.android.exoplayer2.Player
    public long a0() {
        w2();
        return this.f13265u;
    }

    @Override // com.google.android.exoplayer2.Player
    public PlaybackParameters c() {
        w2();
        return this.f13260r0.f13392n;
    }

    @Override // com.google.android.exoplayer2.Player
    public void d() {
        w2();
        boolean B = B();
        int i10 = 2;
        int p10 = this.A.p(B, 2);
        s2(B, p10, G1(B, p10));
        r1 r1Var = this.f13260r0;
        if (r1Var.f13383e != 1) {
            return;
        }
        r1 f10 = r1Var.f(null);
        if (f10.f13379a.u()) {
            i10 = 4;
        }
        r1 h10 = f10.h(i10);
        this.H++;
        this.f13245k.h0();
        t2(h10, 1, 1, false, 5, -9223372036854775807L, -1, false);
    }

    public void d2(rd.r rVar) {
        w2();
        f2(Collections.singletonList(rVar));
    }

    public void e2(rd.r rVar, boolean z10) {
        w2();
        g2(Collections.singletonList(rVar), z10);
    }

    @Override // com.google.android.exoplayer2.Player
    public boolean f() {
        w2();
        return this.f13260r0.f13380b.b();
    }

    public void f2(List list) {
        w2();
        g2(list, true);
    }

    @Override // com.google.android.exoplayer2.Player
    public long g() {
        w2();
        return oe.w0.p1(this.f13260r0.f13395q);
    }

    public void g2(List list, boolean z10) {
        w2();
        h2(list, -1, -9223372036854775807L, z10);
    }

    @Override // com.google.android.exoplayer2.Player
    public long getDuration() {
        w2();
        if (f()) {
            r1 r1Var = this.f13260r0;
            r.b bVar = r1Var.f13380b;
            r1Var.f13379a.l(bVar.f47006a, this.f13251n);
            return oe.w0.p1(this.f13251n.e(bVar.f47007b, bVar.f47008c));
        }
        return d0();
    }

    @Override // com.google.android.exoplayer2.Player
    public void h(Player.b bVar) {
        w2();
        this.f13247l.j((Player.b) oe.a.e(bVar));
    }

    @Override // com.google.android.exoplayer2.Player
    public void j(SurfaceView surfaceView) {
        SurfaceHolder holder;
        w2();
        if (surfaceView instanceof pe.k) {
            a2();
            l2(surfaceView);
            i2(surfaceView.getHolder());
        } else if (surfaceView instanceof qe.l) {
            a2();
            this.X = (qe.l) surfaceView;
            y1(this.f13270y).n(10000).m(this.X).l();
            this.X.d(this.f13269x);
            l2(this.X.getVideoSurface());
            i2(surfaceView.getHolder());
        } else {
            if (surfaceView == null) {
                holder = null;
            } else {
                holder = surfaceView.getHolder();
            }
            n2(holder);
        }
    }

    public void j2(PlaybackParameters playbackParameters) {
        w2();
        if (playbackParameters == null) {
            playbackParameters = PlaybackParameters.f12550o;
        }
        if (this.f13260r0.f13392n.equals(playbackParameters)) {
            return;
        }
        r1 g10 = this.f13260r0.g(playbackParameters);
        this.H++;
        this.f13245k.T0(playbackParameters);
        t2(g10, 0, 1, false, 5, -9223372036854775807L, -1, false);
    }

    @Override // com.google.android.exoplayer2.Player
    public void k(int i10, int i11) {
        boolean z10;
        w2();
        if (i10 >= 0 && i11 >= i10) {
            z10 = true;
        } else {
            z10 = false;
        }
        oe.a.a(z10);
        int size = this.f13253o.size();
        int min = Math.min(i11, size);
        if (i10 < size && i10 != min) {
            r1 Y1 = Y1(this.f13260r0, i10, min);
            t2(Y1, 0, 1, !Y1.f13380b.f47006a.equals(this.f13260r0.f13380b.f47006a), 4, C1(Y1), -1, false);
        }
    }

    @Override // com.google.android.exoplayer2.e
    public void k0(int i10, long j10, int i11, boolean z10) {
        boolean z11;
        w2();
        if (i10 >= 0) {
            z11 = true;
        } else {
            z11 = false;
        }
        oe.a.a(z11);
        this.f13259r.x();
        Timeline timeline = this.f13260r0.f13379a;
        if (!timeline.u() && i10 >= timeline.t()) {
            return;
        }
        this.H++;
        if (f()) {
            oe.y.i("ExoPlayerImpl", "seekTo ignored because an ad is playing");
            t0.e eVar = new t0.e(this.f13260r0);
            eVar.b(1);
            this.f13243j.a(eVar);
            return;
        }
        r1 r1Var = this.f13260r0;
        int i12 = r1Var.f13383e;
        if (i12 == 3 || (i12 == 4 && !timeline.u())) {
            r1Var = this.f13260r0.h(2);
        }
        int Q = Q();
        r1 S1 = S1(r1Var, timeline, T1(timeline, i10, j10));
        this.f13245k.B0(timeline, i10, oe.w0.K0(j10));
        t2(S1, 0, 1, true, 1, C1(S1), Q, z10);
    }

    public void m2(int i10) {
        w2();
        this.f13226a0 = i10;
        b2(2, 4, Integer.valueOf(i10));
    }

    @Override // com.google.android.exoplayer2.Player
    public void n(boolean z10) {
        w2();
        int p10 = this.A.p(z10, O());
        s2(z10, p10, G1(z10, p10));
    }

    public void n2(SurfaceHolder surfaceHolder) {
        w2();
        if (surfaceHolder == null) {
            u1();
            return;
        }
        a2();
        this.Y = true;
        this.W = surfaceHolder;
        surfaceHolder.addCallback(this.f13269x);
        Surface surface = surfaceHolder.getSurface();
        if (surface != null && surface.isValid()) {
            l2(surface);
            Rect surfaceFrame = surfaceHolder.getSurfaceFrame();
            U1(surfaceFrame.width(), surfaceFrame.height());
            return;
        }
        l2(null);
        U1(0, 0);
    }

    @Override // com.google.android.exoplayer2.Player
    public Tracks o() {
        w2();
        return this.f13260r0.f13387i.f32294d;
    }

    public void o2(float f10) {
        w2();
        final float p10 = oe.w0.p(f10, 0.0f, 1.0f);
        if (this.f13240h0 == p10) {
            return;
        }
        this.f13240h0 = p10;
        c2();
        this.f13247l.k(22, new x.a() { // from class: com.google.android.exoplayer2.r
            @Override // oe.x.a
            public final void invoke(Object obj) {
                ((Player.b) obj).onVolumeChanged(p10);
            }
        });
    }

    public void p2() {
        w2();
        this.A.p(B(), 1);
        q2(null);
        this.f13244j0 = new CueGroup(qi.s.t(), this.f13260r0.f13396r);
    }

    @Override // com.google.android.exoplayer2.Player
    public CueGroup q() {
        w2();
        return this.f13244j0;
    }

    public void q1(AnalyticsListener analyticsListener) {
        this.f13259r.z((AnalyticsListener) oe.a.e(analyticsListener));
    }

    @Override // com.google.android.exoplayer2.Player
    public int r() {
        w2();
        if (f()) {
            return this.f13260r0.f13380b.f47007b;
        }
        return -1;
    }

    public void r1(mc.i iVar) {
        this.f13249m.add(iVar);
    }

    @Override // com.google.android.exoplayer2.Player
    public int u() {
        w2();
        return this.f13260r0.f13391m;
    }

    public void u1() {
        w2();
        a2();
        l2(null);
        U1(0, 0);
    }

    @Override // com.google.android.exoplayer2.Player
    public Timeline v() {
        w2();
        return this.f13260r0.f13379a;
    }

    public void v1(SurfaceHolder surfaceHolder) {
        w2();
        if (surfaceHolder != null && surfaceHolder == this.W) {
            u1();
        }
    }

    @Override // com.google.android.exoplayer2.Player
    public Looper w() {
        return this.f13261s;
    }

    @Override // com.google.android.exoplayer2.Player
    public void y(TextureView textureView) {
        SurfaceTexture surfaceTexture;
        w2();
        if (textureView == null) {
            u1();
            return;
        }
        a2();
        this.Z = textureView;
        if (textureView.getSurfaceTextureListener() != null) {
            oe.y.i("ExoPlayerImpl", "Replacing existing SurfaceTextureListener.");
        }
        textureView.setSurfaceTextureListener(this.f13269x);
        if (textureView.isAvailable()) {
            surfaceTexture = textureView.getSurfaceTexture();
        } else {
            surfaceTexture = null;
        }
        if (surfaceTexture == null) {
            l2(null);
            U1(0, 0);
            return;
        }
        k2(surfaceTexture);
        U1(textureView.getWidth(), textureView.getHeight());
    }
}
