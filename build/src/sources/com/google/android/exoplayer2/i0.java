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
    private int f13225a0;

    /* renamed from: b  reason: collision with root package name */
    final ke.r f13226b;

    /* renamed from: b0  reason: collision with root package name */
    private int f13227b0;

    /* renamed from: c  reason: collision with root package name */
    final Player.Commands f13228c;

    /* renamed from: c0  reason: collision with root package name */
    private oe.l0 f13229c0;

    /* renamed from: d  reason: collision with root package name */
    private final oe.h f13230d;

    /* renamed from: d0  reason: collision with root package name */
    private DecoderCounters f13231d0;

    /* renamed from: e  reason: collision with root package name */
    private final Context f13232e;

    /* renamed from: e0  reason: collision with root package name */
    private DecoderCounters f13233e0;

    /* renamed from: f  reason: collision with root package name */
    private final Player f13234f;

    /* renamed from: f0  reason: collision with root package name */
    private int f13235f0;

    /* renamed from: g  reason: collision with root package name */
    private final v1[] f13236g;

    /* renamed from: g0  reason: collision with root package name */
    private AudioAttributes f13237g0;

    /* renamed from: h  reason: collision with root package name */
    private final ke.q f13238h;

    /* renamed from: h0  reason: collision with root package name */
    private float f13239h0;

    /* renamed from: i  reason: collision with root package name */
    private final oe.u f13240i;

    /* renamed from: i0  reason: collision with root package name */
    private boolean f13241i0;

    /* renamed from: j  reason: collision with root package name */
    private final t0.f f13242j;

    /* renamed from: j0  reason: collision with root package name */
    private CueGroup f13243j0;

    /* renamed from: k  reason: collision with root package name */
    private final t0 f13244k;

    /* renamed from: k0  reason: collision with root package name */
    private boolean f13245k0;

    /* renamed from: l  reason: collision with root package name */
    private final oe.x f13246l;

    /* renamed from: l0  reason: collision with root package name */
    private boolean f13247l0;

    /* renamed from: m  reason: collision with root package name */
    private final CopyOnWriteArraySet f13248m;

    /* renamed from: m0  reason: collision with root package name */
    private boolean f13249m0;

    /* renamed from: n  reason: collision with root package name */
    private final Timeline.b f13250n;

    /* renamed from: n0  reason: collision with root package name */
    private boolean f13251n0;

    /* renamed from: o  reason: collision with root package name */
    private final List f13252o;

    /* renamed from: o0  reason: collision with root package name */
    private DeviceInfo f13253o0;

    /* renamed from: p  reason: collision with root package name */
    private final boolean f13254p;

    /* renamed from: p0  reason: collision with root package name */
    private VideoSize f13255p0;

    /* renamed from: q  reason: collision with root package name */
    private final r.a f13256q;

    /* renamed from: q0  reason: collision with root package name */
    private MediaMetadata f13257q0;

    /* renamed from: r  reason: collision with root package name */
    private final nc.a f13258r;

    /* renamed from: r0  reason: collision with root package name */
    private r1 f13259r0;

    /* renamed from: s  reason: collision with root package name */
    private final Looper f13260s;

    /* renamed from: s0  reason: collision with root package name */
    private int f13261s0;

    /* renamed from: t  reason: collision with root package name */
    private final me.e f13262t;

    /* renamed from: t0  reason: collision with root package name */
    private int f13263t0;

    /* renamed from: u  reason: collision with root package name */
    private final long f13264u;

    /* renamed from: u0  reason: collision with root package name */
    private long f13265u0;

    /* renamed from: v  reason: collision with root package name */
    private final long f13266v;

    /* renamed from: w  reason: collision with root package name */
    private final oe.e f13267w;

    /* renamed from: x  reason: collision with root package name */
    private final c f13268x;

    /* renamed from: y  reason: collision with root package name */
    private final d f13269y;

    /* renamed from: z  reason: collision with root package name */
    private final com.google.android.exoplayer2.b f13270z;

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
            i0.this.f13258r.a(exc);
        }

        @Override // pe.y
        public void b(String str) {
            i0.this.f13258r.b(str);
        }

        @Override // com.google.android.exoplayer2.audio.e
        public void c(DecoderCounters decoderCounters) {
            i0.this.f13233e0 = decoderCounters;
            i0.this.f13258r.c(decoderCounters);
        }

        @Override // pe.y
        public void d(String str, long j10, long j11) {
            i0.this.f13258r.d(str, j10, j11);
        }

        @Override // com.google.android.exoplayer2.audio.e
        public void e(String str) {
            i0.this.f13258r.e(str);
        }

        @Override // com.google.android.exoplayer2.audio.e
        public void f(String str, long j10, long j11) {
            i0.this.f13258r.f(str, j10, j11);
        }

        @Override // com.google.android.exoplayer2.b.InterfaceC0165b
        public void g() {
            i0.this.s2(false, -1, 3);
        }

        @Override // pe.y
        public void h(Format format, DecoderReuseEvaluation decoderReuseEvaluation) {
            i0.this.R = format;
            i0.this.f13258r.h(format, decoderReuseEvaluation);
        }

        @Override // com.google.android.exoplayer2.audio.e
        public void i(long j10) {
            i0.this.f13258r.i(j10);
        }

        @Override // pe.y
        public void j(Exception exc) {
            i0.this.f13258r.j(exc);
        }

        @Override // pe.y
        public void k(DecoderCounters decoderCounters) {
            i0.this.f13258r.k(decoderCounters);
            i0.this.R = null;
            i0.this.f13231d0 = null;
        }

        @Override // com.google.android.exoplayer2.audio.e
        public void l(DecoderCounters decoderCounters) {
            i0.this.f13258r.l(decoderCounters);
            i0.this.S = null;
            i0.this.f13233e0 = null;
        }

        @Override // pe.y
        public void m(int i10, long j10) {
            i0.this.f13258r.m(i10, j10);
        }

        @Override // com.google.android.exoplayer2.audio.e
        public void n(Format format, DecoderReuseEvaluation decoderReuseEvaluation) {
            i0.this.S = format;
            i0.this.f13258r.n(format, decoderReuseEvaluation);
        }

        @Override // pe.y
        public void o(Object obj, long j10) {
            i0.this.f13258r.o(obj, j10);
            if (i0.this.U == obj) {
                i0.this.f13246l.k(26, new x.a() { // from class: mc.t
                    @Override // oe.x.a
                    public final void invoke(Object obj2) {
                        ((Player.b) obj2).onRenderedFirstFrame();
                    }
                });
            }
        }

        @Override // ae.m
        public void onCues(final List list) {
            i0.this.f13246l.k(27, new x.a() { // from class: com.google.android.exoplayer2.j0
                @Override // oe.x.a
                public final void invoke(Object obj) {
                    ((Player.b) obj).onCues(list);
                }
            });
        }

        @Override // hd.d
        public void onMetadata(final Metadata metadata) {
            i0 i0Var = i0.this;
            i0Var.f13257q0 = i0Var.f13257q0.b().K(metadata).H();
            MediaMetadata t12 = i0.this.t1();
            if (!t12.equals(i0.this.P)) {
                i0.this.P = t12;
                i0.this.f13246l.h(14, new x.a() { // from class: com.google.android.exoplayer2.l0
                    @Override // oe.x.a
                    public final void invoke(Object obj) {
                        ((Player.b) obj).onMediaMetadataChanged(i0.this.P);
                    }
                });
            }
            i0.this.f13246l.h(28, new x.a() { // from class: com.google.android.exoplayer2.m0
                @Override // oe.x.a
                public final void invoke(Object obj) {
                    ((Player.b) obj).onMetadata(Metadata.this);
                }
            });
            i0.this.f13246l.f();
        }

        @Override // com.google.android.exoplayer2.audio.e
        public void onSkipSilenceEnabledChanged(final boolean z10) {
            if (i0.this.f13241i0 != z10) {
                i0.this.f13241i0 = z10;
                i0.this.f13246l.k(23, new x.a() { // from class: com.google.android.exoplayer2.p0
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
            i0.this.f13255p0 = videoSize;
            i0.this.f13246l.k(25, new x.a() { // from class: com.google.android.exoplayer2.q0
                @Override // oe.x.a
                public final void invoke(Object obj) {
                    ((Player.b) obj).onVideoSizeChanged(VideoSize.this);
                }
            });
        }

        @Override // pe.y
        public void p(DecoderCounters decoderCounters) {
            i0.this.f13231d0 = decoderCounters;
            i0.this.f13258r.p(decoderCounters);
        }

        @Override // com.google.android.exoplayer2.audio.e
        public void q(Exception exc) {
            i0.this.f13258r.q(exc);
        }

        @Override // com.google.android.exoplayer2.audio.e
        public void r(int i10, long j10, long j11) {
            i0.this.f13258r.r(i10, j10, j11);
        }

        @Override // pe.y
        public void s(long j10, int i10) {
            i0.this.f13258r.s(j10, i10);
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
            if (!w12.equals(i0.this.f13253o0)) {
                i0.this.f13253o0 = w12;
                i0.this.f13246l.k(29, new x.a() { // from class: com.google.android.exoplayer2.o0
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
            i0.this.f13246l.k(30, new x.a() { // from class: com.google.android.exoplayer2.n0
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
            i0.this.f13243j0 = cueGroup;
            i0.this.f13246l.k(27, new x.a() { // from class: com.google.android.exoplayer2.k0
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
        private pe.l f13272d;

        /* renamed from: e  reason: collision with root package name */
        private qe.a f13273e;

        /* renamed from: i  reason: collision with root package name */
        private pe.l f13274i;

        /* renamed from: o  reason: collision with root package name */
        private qe.a f13275o;

        private d() {
        }

        @Override // pe.l
        public void a(long j10, long j11, Format format, MediaFormat mediaFormat) {
            long j12;
            long j13;
            Format format2;
            MediaFormat mediaFormat2;
            pe.l lVar = this.f13274i;
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
            pe.l lVar2 = this.f13272d;
            if (lVar2 != null) {
                lVar2.a(j12, j13, format2, mediaFormat2);
            }
        }

        @Override // qe.a
        public void b(long j10, float[] fArr) {
            qe.a aVar = this.f13275o;
            if (aVar != null) {
                aVar.b(j10, fArr);
            }
            qe.a aVar2 = this.f13273e;
            if (aVar2 != null) {
                aVar2.b(j10, fArr);
            }
        }

        @Override // qe.a
        public void c() {
            qe.a aVar = this.f13275o;
            if (aVar != null) {
                aVar.c();
            }
            qe.a aVar2 = this.f13273e;
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
                        this.f13274i = null;
                        this.f13275o = null;
                        return;
                    }
                    this.f13274i = lVar.getVideoFrameMetadataListener();
                    this.f13275o = lVar.getCameraMotionListener();
                    return;
                }
                this.f13273e = (qe.a) obj;
                return;
            }
            this.f13272d = (pe.l) obj;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class e implements a1 {

        /* renamed from: a  reason: collision with root package name */
        private final Object f13276a;

        /* renamed from: b  reason: collision with root package name */
        private Timeline f13277b;

        public e(Object obj, Timeline timeline) {
            this.f13276a = obj;
            this.f13277b = timeline;
        }

        @Override // com.google.android.exoplayer2.a1
        public Object a() {
            return this.f13276a;
        }

        @Override // com.google.android.exoplayer2.a1
        public Timeline b() {
            return this.f13277b;
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
        this.f13230d = hVar;
        try {
            oe.y.f("ExoPlayerImpl", "Init " + Integer.toHexString(System.identityHashCode(this)) + " [ExoPlayerLib/2.19.1] [" + oe.w0.f39041e + "]");
            Context applicationContext = kVar.f13293a.getApplicationContext();
            this.f13232e = applicationContext;
            nc.a aVar = (nc.a) kVar.f13301i.apply(kVar.f13294b);
            this.f13258r = aVar;
            this.f13237g0 = kVar.f13303k;
            this.f13225a0 = kVar.f13309q;
            this.f13227b0 = kVar.f13310r;
            this.f13241i0 = kVar.f13307o;
            this.E = kVar.f13317y;
            c cVar = new c();
            this.f13268x = cVar;
            d dVar = new d();
            this.f13269y = dVar;
            Handler handler = new Handler(kVar.f13302j);
            v1[] a11 = ((mc.s0) kVar.f13296d.get()).a(handler, cVar, cVar, cVar, cVar);
            this.f13236g = a11;
            if (a11.length > 0) {
                z10 = true;
            } else {
                z10 = false;
            }
            oe.a.g(z10);
            ke.q qVar = (ke.q) kVar.f13298f.get();
            this.f13238h = qVar;
            this.f13256q = (r.a) kVar.f13297e.get();
            me.e eVar = (me.e) kVar.f13300h.get();
            this.f13262t = eVar;
            this.f13254p = kVar.f13311s;
            this.L = kVar.f13312t;
            this.f13264u = kVar.f13313u;
            this.f13266v = kVar.f13314v;
            this.N = kVar.f13318z;
            Looper looper = kVar.f13302j;
            this.f13260s = looper;
            oe.e eVar2 = kVar.f13294b;
            this.f13267w = eVar2;
            if (player == null) {
                i0Var = this;
            } else {
                i0Var = player;
            }
            this.f13234f = i0Var;
            this.f13246l = new oe.x(looper, eVar2, new x.b() { // from class: com.google.android.exoplayer2.s
                @Override // oe.x.b
                public final void a(Object obj, oe.q qVar2) {
                    ((Player.b) obj).onEvents(i0.this.f13234f, new Player.Events(qVar2));
                }
            });
            this.f13248m = new CopyOnWriteArraySet();
            this.f13252o = new ArrayList();
            this.M = new o0.a(0);
            ke.r rVar = new ke.r(new mc.r0[a11.length], new com.google.android.exoplayer2.trackselection.g[a11.length], Tracks.f12618e, null);
            this.f13226b = rVar;
            this.f13250n = new Timeline.b();
            Player.Commands e10 = new Player.Commands.a().c(1, 2, 3, 13, 14, 15, 16, 17, 18, 19, 31, 20, 30, 21, 22, 24, 27, 28, 32).d(29, qVar.g()).d(23, kVar.f13308p).d(25, kVar.f13308p).d(33, kVar.f13308p).d(26, kVar.f13308p).d(34, kVar.f13308p).e();
            this.f13228c = e10;
            this.O = new Player.Commands.a().b(e10).a(4).a(10).e();
            this.f13240i = eVar2.c(looper, null);
            t0.f fVar = new t0.f() { // from class: com.google.android.exoplayer2.t
                @Override // com.google.android.exoplayer2.t0.f
                public final void a(t0.e eVar3) {
                    r0.f13240i.post(new Runnable() { // from class: com.google.android.exoplayer2.y
                        @Override // java.lang.Runnable
                        public final void run() {
                            i0.this.Q1(eVar3);
                        }
                    });
                }
            };
            this.f13242j = fVar;
            this.f13259r0 = r1.k(rVar);
            aVar.y(i0Var, looper);
            int i10 = oe.w0.f39037a;
            if (i10 < 31) {
                a10 = new nc.t1();
            } else {
                a10 = b.a(applicationContext, this, kVar.A);
            }
            t0 t0Var = new t0(a11, qVar, rVar, (mc.a0) kVar.f13299g.get(), eVar, this.F, this.G, aVar, this.L, kVar.f13315w, kVar.f13316x, this.N, looper, eVar2, fVar, a10, kVar.B);
            this.f13244k = t0Var;
            this.f13239h0 = 1.0f;
            this.F = 0;
            MediaMetadata mediaMetadata = MediaMetadata.T;
            this.P = mediaMetadata;
            this.Q = mediaMetadata;
            this.f13257q0 = mediaMetadata;
            this.f13261s0 = -1;
            if (i10 < 21) {
                this.f13235f0 = R1(0);
            } else {
                this.f13235f0 = oe.w0.G(applicationContext);
            }
            this.f13243j0 = CueGroup.f13651i;
            this.f13245k0 = true;
            L(aVar);
            eVar.d(new Handler(looper), aVar);
            r1(cVar);
            long j10 = kVar.f13295c;
            if (j10 > 0) {
                t0Var.v(j10);
            }
            com.google.android.exoplayer2.b bVar = new com.google.android.exoplayer2.b(kVar.f13293a, handler, cVar);
            this.f13270z = bVar;
            bVar.b(kVar.f13306n);
            com.google.android.exoplayer2.d dVar2 = new com.google.android.exoplayer2.d(kVar.f13293a, handler, cVar);
            this.A = dVar2;
            if (kVar.f13304l) {
                audioAttributes = this.f13237g0;
            } else {
                audioAttributes = null;
            }
            dVar2.m(audioAttributes);
            if (kVar.f13308p) {
                y1 y1Var = new y1(kVar.f13293a, handler, cVar);
                this.B = y1Var;
                y1Var.h(oe.w0.k0(this.f13237g0.f12800i));
            } else {
                this.B = null;
            }
            b2 b2Var = new b2(kVar.f13293a);
            this.C = b2Var;
            if (kVar.f13305m != 0) {
                z11 = true;
            } else {
                z11 = false;
            }
            b2Var.a(z11);
            c2 c2Var = new c2(kVar.f13293a);
            this.D = c2Var;
            if (kVar.f13305m == 2) {
                z12 = true;
            } else {
                z12 = false;
            }
            c2Var.a(z12);
            this.f13253o0 = w1(this.B);
            this.f13255p0 = VideoSize.f14173p;
            this.f13229c0 = oe.l0.f38967c;
            qVar.k(this.f13237g0);
            b2(1, 10, Integer.valueOf(this.f13235f0));
            b2(2, 10, Integer.valueOf(this.f13235f0));
            b2(1, 3, this.f13237g0);
            b2(2, 4, Integer.valueOf(this.f13225a0));
            b2(2, 5, Integer.valueOf(this.f13227b0));
            b2(1, 9, Boolean.valueOf(this.f13241i0));
            b2(2, 7, dVar);
            b2(6, 8, dVar);
            hVar.f();
        } catch (Throwable th2) {
            this.f13230d.f();
            throw th2;
        }
    }

    private long B1(r1 r1Var) {
        if (r1Var.f13379b.b()) {
            r1Var.f13378a.l(r1Var.f13379b.f46437a, this.f13250n);
            if (r1Var.f13380c == -9223372036854775807L) {
                return r1Var.f13378a.r(E1(r1Var), this.f13100a).d();
            }
            return this.f13250n.p() + oe.w0.p1(r1Var.f13380c);
        }
        return oe.w0.p1(C1(r1Var));
    }

    public static /* synthetic */ void C0(int i10, Player.PositionInfo positionInfo, Player.PositionInfo positionInfo2, Player.b bVar) {
        bVar.onPositionDiscontinuity(i10);
        bVar.onPositionDiscontinuity(positionInfo, positionInfo2, i10);
    }

    private long C1(r1 r1Var) {
        long j10;
        if (r1Var.f13378a.u()) {
            return oe.w0.K0(this.f13265u0);
        }
        if (r1Var.f13392o) {
            j10 = r1Var.m();
        } else {
            j10 = r1Var.f13395r;
        }
        if (r1Var.f13379b.b()) {
            return j10;
        }
        return V1(r1Var.f13378a, r1Var.f13379b, j10);
    }

    private int E1(r1 r1Var) {
        if (r1Var.f13378a.u()) {
            return this.f13261s0;
        }
        return r1Var.f13378a.l(r1Var.f13379b.f46437a, this.f13250n).f12594i;
    }

    private Pair F1(Timeline timeline, Timeline timeline2, int i10, long j10) {
        boolean z10;
        long j11 = -9223372036854775807L;
        int i11 = -1;
        if (!timeline.u() && !timeline2.u()) {
            Pair n10 = timeline.n(this.f13100a, this.f13250n, i10, oe.w0.K0(j10));
            Object obj = ((Pair) oe.w0.j(n10)).first;
            if (timeline2.f(obj) != -1) {
                return n10;
            }
            Object z02 = t0.z0(this.f13100a, this.f13250n, this.F, this.G, obj, timeline, timeline2);
            if (z02 != null) {
                timeline2.l(z02, this.f13250n);
                int i12 = this.f13250n.f12594i;
                return T1(timeline2, i12, timeline2.r(i12, this.f13100a).d());
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
        if (!this.f13259r0.f13378a.u()) {
            r1 r1Var = this.f13259r0;
            Object obj3 = r1Var.f13379b.f46437a;
            r1Var.f13378a.l(obj3, this.f13250n);
            i10 = this.f13259r0.f13378a.f(obj3);
            obj2 = obj3;
            obj = this.f13259r0.f13378a.r(Q, this.f13100a).f12603d;
            mediaItem = this.f13100a.f12605i;
        } else {
            obj = null;
            i10 = -1;
            mediaItem = null;
            obj2 = null;
        }
        int i11 = i10;
        long p12 = oe.w0.p1(j10);
        if (this.f13259r0.f13379b.b()) {
            j11 = oe.w0.p1(M1(this.f13259r0));
        } else {
            j11 = p12;
        }
        r.b bVar = this.f13259r0.f13379b;
        return new Player.PositionInfo(obj, Q, mediaItem, obj2, i11, p12, j11, bVar.f46438b, bVar.f46439c);
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
        if (!r1Var.f13378a.u()) {
            Object obj3 = r1Var.f13379b.f46437a;
            r1Var.f13378a.l(obj3, bVar);
            int i14 = bVar.f12594i;
            int f10 = r1Var.f13378a.f(obj3);
            Object obj4 = r1Var.f13378a.r(i14, this.f13100a).f12603d;
            mediaItem = this.f13100a.f12605i;
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
            if (r1Var.f13379b.b()) {
                r.b bVar2 = r1Var.f13379b;
                j10 = bVar.e(bVar2.f46438b, bVar2.f46439c);
                M1 = M1(r1Var);
            } else {
                if (r1Var.f13379b.f46441e != -1) {
                    j10 = M1(this.f13259r0);
                } else {
                    j10 = bVar.f12596p + bVar.f12595o;
                }
                M1 = j10;
            }
        } else if (r1Var.f13379b.b()) {
            j10 = r1Var.f13395r;
            M1 = M1(r1Var);
        } else {
            j10 = bVar.f12596p + r1Var.f13395r;
            M1 = j10;
        }
        long p12 = oe.w0.p1(j10);
        long p13 = oe.w0.p1(M1);
        r.b bVar3 = r1Var.f13379b;
        return new Player.PositionInfo(obj, i12, mediaItem, obj2, i13, p12, p13, bVar3.f46438b, bVar3.f46439c);
    }

    public static /* synthetic */ void K0(r1 r1Var, Player.b bVar) {
        bVar.onLoadingChanged(r1Var.f13384g);
        bVar.onIsLoadingChanged(r1Var.f13384g);
    }

    private static long M1(r1 r1Var) {
        Timeline.d dVar = new Timeline.d();
        Timeline.b bVar = new Timeline.b();
        r1Var.f13378a.l(r1Var.f13379b.f46437a, bVar);
        if (r1Var.f13380c == -9223372036854775807L) {
            return r1Var.f13378a.r(bVar.f12594i, dVar).e();
        }
        return bVar.q() + r1Var.f13380c;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void Q1(t0.e eVar) {
        long j10;
        boolean z10;
        int i10 = this.H - eVar.f13628c;
        this.H = i10;
        boolean z11 = true;
        if (eVar.f13629d) {
            this.I = eVar.f13630e;
            this.J = true;
        }
        if (eVar.f13631f) {
            this.K = eVar.f13632g;
        }
        if (i10 == 0) {
            Timeline timeline = eVar.f13627b.f13378a;
            if (!this.f13259r0.f13378a.u() && timeline.u()) {
                this.f13261s0 = -1;
                this.f13265u0 = 0L;
                this.f13263t0 = 0;
            }
            if (!timeline.u()) {
                List J = ((t1) timeline).J();
                if (J.size() == this.f13252o.size()) {
                    z10 = true;
                } else {
                    z10 = false;
                }
                oe.a.g(z10);
                for (int i11 = 0; i11 < J.size(); i11++) {
                    ((e) this.f13252o.get(i11)).f13277b = (Timeline) J.get(i11);
                }
            }
            long j11 = -9223372036854775807L;
            if (this.J) {
                if (eVar.f13627b.f13379b.equals(this.f13259r0.f13379b) && eVar.f13627b.f13381d == this.f13259r0.f13395r) {
                    z11 = false;
                }
                if (z11) {
                    if (!timeline.u() && !eVar.f13627b.f13379b.b()) {
                        r1 r1Var = eVar.f13627b;
                        j10 = V1(timeline, r1Var.f13379b, r1Var.f13381d);
                    } else {
                        j10 = eVar.f13627b.f13381d;
                    }
                    j11 = j10;
                }
            } else {
                z11 = false;
            }
            this.J = false;
            t2(eVar.f13627b, 1, this.K, z11, this.I, j11, -1, false);
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
        Timeline timeline2 = r1Var.f13378a;
        long B1 = B1(r1Var);
        r1 j11 = r1Var.j(timeline);
        if (timeline.u()) {
            r.b l10 = r1.l();
            long K0 = oe.w0.K0(this.f13265u0);
            r1 c10 = j11.d(l10, K0, K0, K0, 0L, rd.w0.f46509o, this.f13226b, qi.s.t()).c(l10);
            c10.f13393p = c10.f13395r;
            return c10;
        }
        Object obj = j11.f13379b.f46437a;
        boolean equals = obj.equals(((Pair) oe.w0.j(pair)).first);
        if (!equals) {
            bVar = new r.b(pair.first);
        } else {
            bVar = j11.f13379b;
        }
        long longValue = ((Long) pair.second).longValue();
        long K02 = oe.w0.K0(B1);
        if (!timeline2.u()) {
            K02 -= timeline2.l(obj, this.f13250n).q();
        }
        if (!equals || longValue < K02) {
            r.b bVar2 = bVar;
            oe.a.g(!bVar2.b());
            if (!equals) {
                w0Var = rd.w0.f46509o;
            } else {
                w0Var = j11.f13385h;
            }
            rd.w0 w0Var2 = w0Var;
            if (!equals) {
                rVar = this.f13226b;
            } else {
                rVar = j11.f13386i;
            }
            ke.r rVar2 = rVar;
            if (!equals) {
                list = qi.s.t();
            } else {
                list = j11.f13387j;
            }
            r1 c11 = j11.d(bVar2, longValue, longValue, longValue, 0L, w0Var2, rVar2, list).c(bVar2);
            c11.f13393p = longValue;
            return c11;
        } else if (i10 == 0) {
            int f10 = timeline.f(j11.f13388k.f46437a);
            if (f10 != -1 && timeline.j(f10, this.f13250n).f12594i == timeline.l(bVar.f46437a, this.f13250n).f12594i) {
                return j11;
            }
            timeline.l(bVar.f46437a, this.f13250n);
            if (bVar.b()) {
                j10 = this.f13250n.e(bVar.f46438b, bVar.f46439c);
            } else {
                j10 = this.f13250n.f12595o;
            }
            r.b bVar3 = bVar;
            r1 c12 = j11.d(bVar3, j11.f13395r, j11.f13395r, j11.f13381d, j10 - j11.f13395r, j11.f13385h, j11.f13386i, j11.f13387j).c(bVar3);
            c12.f13393p = j10;
            return c12;
        } else {
            r.b bVar4 = bVar;
            oe.a.g(!bVar4.b());
            long max = Math.max(0L, j11.f13394q - (longValue - K02));
            long j12 = j11.f13393p;
            if (j11.f13388k.equals(j11.f13379b)) {
                j12 = longValue + max;
            }
            r1 d10 = j11.d(bVar4, longValue, longValue, longValue, max, j11.f13385h, j11.f13386i, j11.f13387j);
            d10.f13393p = j12;
            return d10;
        }
    }

    private Pair T1(Timeline timeline, int i10, long j10) {
        if (timeline.u()) {
            this.f13261s0 = i10;
            if (j10 == -9223372036854775807L) {
                j10 = 0;
            }
            this.f13265u0 = j10;
            this.f13263t0 = 0;
            return null;
        }
        if (i10 == -1 || i10 >= timeline.t()) {
            i10 = timeline.e(this.G);
            j10 = timeline.r(i10, this.f13100a).d();
        }
        return timeline.n(this.f13100a, this.f13250n, i10, oe.w0.K0(j10));
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void U1(final int i10, final int i11) {
        if (i10 == this.f13229c0.b() && i11 == this.f13229c0.a()) {
            return;
        }
        this.f13229c0 = new oe.l0(i10, i11);
        this.f13246l.k(24, new x.a() { // from class: com.google.android.exoplayer2.v
            @Override // oe.x.a
            public final void invoke(Object obj) {
                ((Player.b) obj).onSurfaceSizeChanged(i10, i11);
            }
        });
        b2(2, 14, new oe.l0(i10, i11));
    }

    private long V1(Timeline timeline, r.b bVar, long j10) {
        timeline.l(bVar.f46437a, this.f13250n);
        return j10 + this.f13250n.q();
    }

    private r1 Y1(r1 r1Var, int i10, int i11) {
        int E1 = E1(r1Var);
        long B1 = B1(r1Var);
        Timeline timeline = r1Var.f13378a;
        int size = this.f13252o.size();
        this.H++;
        Z1(i10, i11);
        Timeline x12 = x1();
        r1 S1 = S1(r1Var, x12, F1(timeline, x12, E1, B1));
        int i12 = S1.f13382e;
        if (i12 != 1 && i12 != 4 && i10 < i11 && i11 == size && E1 >= S1.f13378a.t()) {
            S1 = S1.h(4);
        }
        this.f13244k.n0(i10, i11, this.M);
        return S1;
    }

    private void Z1(int i10, int i11) {
        for (int i12 = i11 - 1; i12 >= i10; i12--) {
            this.f13252o.remove(i12);
        }
        this.M = this.M.a(i10, i11);
    }

    private void a2() {
        if (this.X != null) {
            y1(this.f13269y).n(10000).m(null).l();
            this.X.g(this.f13268x);
            this.X = null;
        }
        TextureView textureView = this.Z;
        if (textureView != null) {
            if (textureView.getSurfaceTextureListener() != this.f13268x) {
                oe.y.i("ExoPlayerImpl", "SurfaceTextureListener already unset or replaced.");
            } else {
                this.Z.setSurfaceTextureListener(null);
            }
            this.Z = null;
        }
        SurfaceHolder surfaceHolder = this.W;
        if (surfaceHolder != null) {
            surfaceHolder.removeCallback(this.f13268x);
            this.W = null;
        }
    }

    private void b2(int i10, int i11, Object obj) {
        v1[] v1VarArr;
        for (v1 v1Var : this.f13236g) {
            if (v1Var.e() == i10) {
                y1(v1Var).n(i11).m(obj).l();
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void c2() {
        b2(1, 2, Float.valueOf(this.f13239h0 * this.A.g()));
    }

    private void h2(List list, int i10, long j10, boolean z10) {
        long j11;
        int i11;
        int i12;
        r1 h10;
        boolean z11;
        int i13 = i10;
        int E1 = E1(this.f13259r0);
        long Z = Z();
        this.H++;
        if (!this.f13252o.isEmpty()) {
            Z1(0, this.f13252o.size());
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
            r1 S1 = S1(this.f13259r0, x12, T1(x12, i11, j11));
            i12 = S1.f13382e;
            if (i11 != -1 && i12 != 1) {
                i12 = (!x12.u() || i11 >= x12.t()) ? 4 : 2;
            }
            h10 = S1.h(i12);
            this.f13244k.O0(s12, i11, oe.w0.K0(j11), this.M);
            if (this.f13259r0.f13379b.f46437a.equals(h10.f13379b.f46437a) && !this.f13259r0.f13378a.u()) {
                z11 = true;
            } else {
                z11 = false;
            }
            t2(h10, 0, 1, z11, 4, C1(h10), -1, false);
        } else {
            j11 = j10;
        }
        i11 = i13;
        r1 S12 = S1(this.f13259r0, x12, T1(x12, i11, j11));
        i12 = S12.f13382e;
        if (i11 != -1) {
            if (x12.u()) {
            }
        }
        h10 = S12.h(i12);
        this.f13244k.O0(s12, i11, oe.w0.K0(j11), this.M);
        if (this.f13259r0.f13379b.f46437a.equals(h10.f13379b.f46437a)) {
        }
        z11 = false;
        t2(h10, 0, 1, z11, 4, C1(h10), -1, false);
    }

    private void i2(SurfaceHolder surfaceHolder) {
        this.Y = false;
        this.W = surfaceHolder;
        surfaceHolder.addCallback(this.f13268x);
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
        for (v1 v1Var : this.f13236g) {
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
        r1 r1Var = this.f13259r0;
        r1 c10 = r1Var.c(r1Var.f13379b);
        c10.f13393p = c10.f13395r;
        c10.f13394q = 0L;
        r1 h10 = c10.h(1);
        if (jVar != null) {
            h10 = h10.f(jVar);
        }
        this.H++;
        this.f13244k.i1();
        t2(h10, 0, 1, false, 5, -9223372036854775807L, -1, false);
    }

    private void r2() {
        Player.Commands commands = this.O;
        Player.Commands I = oe.w0.I(this.f13234f, this.f13228c);
        this.O = I;
        if (!I.equals(commands)) {
            this.f13246l.h(13, new x.a() { // from class: com.google.android.exoplayer2.z
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
            o1.c cVar = new o1.c((rd.r) list.get(i11), this.f13254p);
            arrayList.add(cVar);
            this.f13252o.add(i11 + i10, new e(cVar.f13365b, cVar.f13364a.X()));
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
        r1 r1Var = this.f13259r0;
        if (r1Var.f13389l == z11 && r1Var.f13390m == i12) {
            return;
        }
        this.H++;
        if (r1Var.f13392o) {
            r1Var = r1Var.a();
        }
        r1 e10 = r1Var.e(z11, i12);
        this.f13244k.R0(z11, i12);
        t2(e10, 0, i11, false, 5, -9223372036854775807L, -1, false);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public MediaMetadata t1() {
        Timeline v10 = v();
        if (v10.u()) {
            return this.f13257q0;
        }
        return this.f13257q0.b().J(v10.r(Q(), this.f13100a).f12605i.f12345p).H();
    }

    private void t2(final r1 r1Var, final int i10, final int i11, boolean z10, final int i12, long j10, int i13, boolean z11) {
        boolean z12;
        boolean z13;
        boolean z14;
        r1 r1Var2 = this.f13259r0;
        this.f13259r0 = r1Var;
        boolean equals = r1Var2.f13378a.equals(r1Var.f13378a);
        Pair z15 = z1(r1Var, r1Var2, z10, i12, !equals, z11);
        boolean booleanValue = ((Boolean) z15.first).booleanValue();
        final int intValue = ((Integer) z15.second).intValue();
        MediaMetadata mediaMetadata = this.P;
        final MediaItem mediaItem = null;
        if (booleanValue) {
            if (!r1Var.f13378a.u()) {
                mediaItem = r1Var.f13378a.r(r1Var.f13378a.l(r1Var.f13379b.f46437a, this.f13250n).f12594i, this.f13100a).f12605i;
            }
            this.f13257q0 = MediaMetadata.T;
        }
        if (booleanValue || !r1Var2.f13387j.equals(r1Var.f13387j)) {
            this.f13257q0 = this.f13257q0.b().L(r1Var.f13387j).H();
            mediaMetadata = t1();
        }
        boolean equals2 = mediaMetadata.equals(this.P);
        this.P = mediaMetadata;
        if (r1Var2.f13389l != r1Var.f13389l) {
            z12 = true;
        } else {
            z12 = false;
        }
        if (r1Var2.f13382e != r1Var.f13382e) {
            z13 = true;
        } else {
            z13 = false;
        }
        if (z13 || z12) {
            v2();
        }
        boolean z16 = r1Var2.f13384g;
        boolean z17 = r1Var.f13384g;
        if (z16 != z17) {
            z14 = true;
        } else {
            z14 = false;
        }
        if (z14) {
            u2(z17);
        }
        if (!equals) {
            this.f13246l.h(0, new x.a() { // from class: com.google.android.exoplayer2.l
                @Override // oe.x.a
                public final void invoke(Object obj) {
                    Player.b bVar = (Player.b) obj;
                    bVar.onTimelineChanged(r1.this.f13378a, i10);
                }
            });
        }
        if (z10) {
            final Player.PositionInfo J1 = J1(i12, r1Var2, i13);
            final Player.PositionInfo I1 = I1(j10);
            this.f13246l.h(11, new x.a() { // from class: com.google.android.exoplayer2.d0
                @Override // oe.x.a
                public final void invoke(Object obj) {
                    i0.C0(i12, J1, I1, (Player.b) obj);
                }
            });
        }
        if (booleanValue) {
            this.f13246l.h(1, new x.a() { // from class: com.google.android.exoplayer2.e0
                @Override // oe.x.a
                public final void invoke(Object obj) {
                    ((Player.b) obj).onMediaItemTransition(MediaItem.this, intValue);
                }
            });
        }
        if (r1Var2.f13383f != r1Var.f13383f) {
            this.f13246l.h(10, new x.a() { // from class: com.google.android.exoplayer2.f0
                @Override // oe.x.a
                public final void invoke(Object obj) {
                    ((Player.b) obj).onPlayerErrorChanged(r1.this.f13383f);
                }
            });
            if (r1Var.f13383f != null) {
                this.f13246l.h(10, new x.a() { // from class: com.google.android.exoplayer2.g0
                    @Override // oe.x.a
                    public final void invoke(Object obj) {
                        ((Player.b) obj).onPlayerError(r1.this.f13383f);
                    }
                });
            }
        }
        ke.r rVar = r1Var2.f13386i;
        ke.r rVar2 = r1Var.f13386i;
        if (rVar != rVar2) {
            this.f13238h.h(rVar2.f31726e);
            this.f13246l.h(2, new x.a() { // from class: com.google.android.exoplayer2.h0
                @Override // oe.x.a
                public final void invoke(Object obj) {
                    ((Player.b) obj).onTracksChanged(r1.this.f13386i.f31725d);
                }
            });
        }
        if (!equals2) {
            final MediaMetadata mediaMetadata2 = this.P;
            this.f13246l.h(14, new x.a() { // from class: com.google.android.exoplayer2.m
                @Override // oe.x.a
                public final void invoke(Object obj) {
                    ((Player.b) obj).onMediaMetadataChanged(MediaMetadata.this);
                }
            });
        }
        if (z14) {
            this.f13246l.h(3, new x.a() { // from class: com.google.android.exoplayer2.n
                @Override // oe.x.a
                public final void invoke(Object obj) {
                    i0.K0(r1.this, (Player.b) obj);
                }
            });
        }
        if (z13 || z12) {
            this.f13246l.h(-1, new x.a() { // from class: com.google.android.exoplayer2.o
                @Override // oe.x.a
                public final void invoke(Object obj) {
                    ((Player.b) obj).onPlayerStateChanged(r0.f13389l, r1.this.f13382e);
                }
            });
        }
        if (z13) {
            this.f13246l.h(4, new x.a() { // from class: com.google.android.exoplayer2.p
                @Override // oe.x.a
                public final void invoke(Object obj) {
                    ((Player.b) obj).onPlaybackStateChanged(r1.this.f13382e);
                }
            });
        }
        if (z12) {
            this.f13246l.h(5, new x.a() { // from class: com.google.android.exoplayer2.w
                @Override // oe.x.a
                public final void invoke(Object obj) {
                    Player.b bVar = (Player.b) obj;
                    bVar.onPlayWhenReadyChanged(r1.this.f13389l, i11);
                }
            });
        }
        if (r1Var2.f13390m != r1Var.f13390m) {
            this.f13246l.h(6, new x.a() { // from class: com.google.android.exoplayer2.a0
                @Override // oe.x.a
                public final void invoke(Object obj) {
                    ((Player.b) obj).onPlaybackSuppressionReasonChanged(r1.this.f13390m);
                }
            });
        }
        if (r1Var2.n() != r1Var.n()) {
            this.f13246l.h(7, new x.a() { // from class: com.google.android.exoplayer2.b0
                @Override // oe.x.a
                public final void invoke(Object obj) {
                    ((Player.b) obj).onIsPlayingChanged(r1.this.n());
                }
            });
        }
        if (!r1Var2.f13391n.equals(r1Var.f13391n)) {
            this.f13246l.h(12, new x.a() { // from class: com.google.android.exoplayer2.c0
                @Override // oe.x.a
                public final void invoke(Object obj) {
                    ((Player.b) obj).onPlaybackParametersChanged(r1.this.f13391n);
                }
            });
        }
        r2();
        this.f13246l.f();
        if (r1Var2.f13392o != r1Var.f13392o) {
            Iterator it = this.f13248m.iterator();
            while (it.hasNext()) {
                ((mc.i) it.next()).z(r1Var.f13392o);
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
        this.f13230d.c();
        if (Thread.currentThread() != w().getThread()) {
            String D = oe.w0.D("Player is accessed on the wrong thread.\nCurrent thread: '%s'\nExpected thread: '%s'\nSee https://developer.android.com/guide/topics/media/issues/player-accessed-on-wrong-thread", Thread.currentThread().getName(), w().getThread().getName());
            if (!this.f13245k0) {
                if (this.f13247l0) {
                    illegalStateException = null;
                } else {
                    illegalStateException = new IllegalStateException();
                }
                oe.y.j("ExoPlayerImpl", D, illegalStateException);
                this.f13247l0 = true;
                return;
            }
            throw new IllegalStateException(D);
        }
    }

    private Timeline x1() {
        return new t1(this.f13252o, this.M);
    }

    private s1 y1(s1.b bVar) {
        int E1 = E1(this.f13259r0);
        t0 t0Var = this.f13244k;
        Timeline timeline = this.f13259r0.f13378a;
        if (E1 == -1) {
            E1 = 0;
        }
        return new s1(t0Var, bVar, timeline, E1, this.f13267w, t0Var.C());
    }

    private Pair z1(r1 r1Var, r1 r1Var2, boolean z10, int i10, boolean z11, boolean z12) {
        Timeline timeline = r1Var2.f13378a;
        Timeline timeline2 = r1Var.f13378a;
        if (timeline2.u() && timeline.u()) {
            return new Pair(Boolean.FALSE, -1);
        }
        int i11 = 3;
        if (timeline2.u() != timeline.u()) {
            return new Pair(Boolean.TRUE, 3);
        }
        if (!timeline.r(timeline.l(r1Var2.f13379b.f46437a, this.f13250n).f12594i, this.f13100a).f12603d.equals(timeline2.r(timeline2.l(r1Var.f13379b.f46437a, this.f13250n).f12594i, this.f13100a).f12603d)) {
            if (z10 && i10 == 0) {
                i11 = 1;
            } else if (z10 && i10 == 1) {
                i11 = 2;
            } else if (!z11) {
                throw new IllegalStateException();
            }
            return new Pair(Boolean.TRUE, Integer.valueOf(i11));
        } else if (z10 && i10 == 0 && r1Var2.f13379b.f46440d < r1Var.f13379b.f46440d) {
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
        return this.f13259r0.f13392o;
    }

    @Override // com.google.android.exoplayer2.Player
    public boolean B() {
        w2();
        return this.f13259r0.f13389l;
    }

    @Override // com.google.android.exoplayer2.Player
    public void C(final boolean z10) {
        w2();
        if (this.G != z10) {
            this.G = z10;
            this.f13244k.Y0(z10);
            this.f13246l.h(9, new x.a() { // from class: com.google.android.exoplayer2.x
                @Override // oe.x.a
                public final void invoke(Object obj) {
                    ((Player.b) obj).onShuffleModeEnabledChanged(z10);
                }
            });
            r2();
            this.f13246l.f();
        }
    }

    @Override // com.google.android.exoplayer2.Player
    public long D() {
        w2();
        return 3000L;
    }

    public ke.m D1() {
        w2();
        return new ke.m(this.f13259r0.f13386i.f31724c);
    }

    @Override // com.google.android.exoplayer2.Player
    public int E() {
        w2();
        if (this.f13259r0.f13378a.u()) {
            return this.f13263t0;
        }
        r1 r1Var = this.f13259r0;
        return r1Var.f13378a.f(r1Var.f13379b.f46437a);
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
        return this.f13255p0;
    }

    @Override // com.google.android.exoplayer2.Player
    /* renamed from: H1 */
    public j m() {
        w2();
        return this.f13259r0.f13383f;
    }

    @Override // com.google.android.exoplayer2.Player
    public int I() {
        w2();
        if (f()) {
            return this.f13259r0.f13379b.f46439c;
        }
        return -1;
    }

    @Override // com.google.android.exoplayer2.Player
    public long J() {
        w2();
        return this.f13266v;
    }

    @Override // com.google.android.exoplayer2.Player
    public long K() {
        w2();
        return B1(this.f13259r0);
    }

    public int K1() {
        w2();
        return this.f13236g.length;
    }

    @Override // com.google.android.exoplayer2.Player
    public void L(Player.b bVar) {
        this.f13246l.c((Player.b) oe.a.e(bVar));
    }

    public int L1(int i10) {
        w2();
        return this.f13236g[i10].e();
    }

    @Override // com.google.android.exoplayer2.Player
    public long M() {
        w2();
        if (f()) {
            r1 r1Var = this.f13259r0;
            if (r1Var.f13388k.equals(r1Var.f13379b)) {
                return oe.w0.p1(this.f13259r0.f13393p);
            }
            return getDuration();
        }
        return V();
    }

    public ke.q N1() {
        w2();
        return this.f13238h;
    }

    @Override // com.google.android.exoplayer2.Player
    public int O() {
        w2();
        return this.f13259r0.f13382e;
    }

    public Format O1() {
        w2();
        return this.R;
    }

    public float P1() {
        w2();
        return this.f13239h0;
    }

    @Override // com.google.android.exoplayer2.Player
    public int Q() {
        w2();
        int E1 = E1(this.f13259r0);
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
            this.f13244k.V0(i10);
            this.f13246l.h(8, new x.a() { // from class: com.google.android.exoplayer2.u
                @Override // oe.x.a
                public final void invoke(Object obj) {
                    ((Player.b) obj).onRepeatModeChanged(i10);
                }
            });
            r2();
            this.f13246l.f();
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
        if (this.f13259r0.f13378a.u()) {
            return this.f13265u0;
        }
        r1 r1Var = this.f13259r0;
        if (r1Var.f13388k.f46440d != r1Var.f13379b.f46440d) {
            return r1Var.f13378a.r(Q(), this.f13100a).f();
        }
        long j10 = r1Var.f13393p;
        if (this.f13259r0.f13388k.b()) {
            r1 r1Var2 = this.f13259r0;
            Timeline.b l10 = r1Var2.f13378a.l(r1Var2.f13388k.f46437a, this.f13250n);
            long i10 = l10.i(this.f13259r0.f13388k.f46438b);
            if (i10 == Long.MIN_VALUE) {
                j10 = l10.f12595o;
            } else {
                j10 = i10;
            }
        }
        r1 r1Var3 = this.f13259r0;
        return oe.w0.p1(V1(r1Var3.f13378a, r1Var3.f13388k, j10));
    }

    public void W1(rd.r rVar, boolean z10, boolean z11) {
        w2();
        e2(rVar, z10);
        d();
    }

    public void X1() {
        AudioTrack audioTrack;
        oe.y.f("ExoPlayerImpl", "Release " + Integer.toHexString(System.identityHashCode(this)) + " [ExoPlayerLib/2.19.1] [" + oe.w0.f39041e + "] [" + mc.u.b() + "]");
        w2();
        if (oe.w0.f39037a < 21 && (audioTrack = this.T) != null) {
            audioTrack.release();
            this.T = null;
        }
        this.f13270z.b(false);
        y1 y1Var = this.B;
        if (y1Var != null) {
            y1Var.g();
        }
        this.C.b(false);
        this.D.b(false);
        this.A.i();
        if (!this.f13244k.j0()) {
            this.f13246l.k(10, new x.a() { // from class: com.google.android.exoplayer2.q
                @Override // oe.x.a
                public final void invoke(Object obj) {
                    ((Player.b) obj).onPlayerError(j.i(new mc.v(1), 1003));
                }
            });
        }
        this.f13246l.i();
        this.f13240i.e(null);
        this.f13262t.a(this.f13258r);
        r1 r1Var = this.f13259r0;
        if (r1Var.f13392o) {
            this.f13259r0 = r1Var.a();
        }
        r1 h10 = this.f13259r0.h(1);
        this.f13259r0 = h10;
        r1 c10 = h10.c(h10.f13379b);
        this.f13259r0 = c10;
        c10.f13393p = c10.f13395r;
        this.f13259r0.f13394q = 0L;
        this.f13258r.release();
        this.f13238h.i();
        a2();
        Surface surface = this.V;
        if (surface != null) {
            surface.release();
            this.V = null;
        }
        if (!this.f13249m0) {
            this.f13243j0 = CueGroup.f13651i;
            this.f13251n0 = true;
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
        return oe.w0.p1(C1(this.f13259r0));
    }

    @Override // com.google.android.exoplayer2.Player
    public long a0() {
        w2();
        return this.f13264u;
    }

    @Override // com.google.android.exoplayer2.Player
    public PlaybackParameters c() {
        w2();
        return this.f13259r0.f13391n;
    }

    @Override // com.google.android.exoplayer2.Player
    public void d() {
        w2();
        boolean B = B();
        int i10 = 2;
        int p10 = this.A.p(B, 2);
        s2(B, p10, G1(B, p10));
        r1 r1Var = this.f13259r0;
        if (r1Var.f13382e != 1) {
            return;
        }
        r1 f10 = r1Var.f(null);
        if (f10.f13378a.u()) {
            i10 = 4;
        }
        r1 h10 = f10.h(i10);
        this.H++;
        this.f13244k.h0();
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
        return this.f13259r0.f13379b.b();
    }

    public void f2(List list) {
        w2();
        g2(list, true);
    }

    @Override // com.google.android.exoplayer2.Player
    public long g() {
        w2();
        return oe.w0.p1(this.f13259r0.f13394q);
    }

    public void g2(List list, boolean z10) {
        w2();
        h2(list, -1, -9223372036854775807L, z10);
    }

    @Override // com.google.android.exoplayer2.Player
    public long getDuration() {
        w2();
        if (f()) {
            r1 r1Var = this.f13259r0;
            r.b bVar = r1Var.f13379b;
            r1Var.f13378a.l(bVar.f46437a, this.f13250n);
            return oe.w0.p1(this.f13250n.e(bVar.f46438b, bVar.f46439c));
        }
        return d0();
    }

    @Override // com.google.android.exoplayer2.Player
    public void h(Player.b bVar) {
        w2();
        this.f13246l.j((Player.b) oe.a.e(bVar));
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
            y1(this.f13269y).n(10000).m(this.X).l();
            this.X.d(this.f13268x);
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
            playbackParameters = PlaybackParameters.f12549o;
        }
        if (this.f13259r0.f13391n.equals(playbackParameters)) {
            return;
        }
        r1 g10 = this.f13259r0.g(playbackParameters);
        this.H++;
        this.f13244k.T0(playbackParameters);
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
        int size = this.f13252o.size();
        int min = Math.min(i11, size);
        if (i10 < size && i10 != min) {
            r1 Y1 = Y1(this.f13259r0, i10, min);
            t2(Y1, 0, 1, !Y1.f13379b.f46437a.equals(this.f13259r0.f13379b.f46437a), 4, C1(Y1), -1, false);
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
        this.f13258r.x();
        Timeline timeline = this.f13259r0.f13378a;
        if (!timeline.u() && i10 >= timeline.t()) {
            return;
        }
        this.H++;
        if (f()) {
            oe.y.i("ExoPlayerImpl", "seekTo ignored because an ad is playing");
            t0.e eVar = new t0.e(this.f13259r0);
            eVar.b(1);
            this.f13242j.a(eVar);
            return;
        }
        r1 r1Var = this.f13259r0;
        int i12 = r1Var.f13382e;
        if (i12 == 3 || (i12 == 4 && !timeline.u())) {
            r1Var = this.f13259r0.h(2);
        }
        int Q = Q();
        r1 S1 = S1(r1Var, timeline, T1(timeline, i10, j10));
        this.f13244k.B0(timeline, i10, oe.w0.K0(j10));
        t2(S1, 0, 1, true, 1, C1(S1), Q, z10);
    }

    public void m2(int i10) {
        w2();
        this.f13225a0 = i10;
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
        surfaceHolder.addCallback(this.f13268x);
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
        return this.f13259r0.f13386i.f31725d;
    }

    public void o2(float f10) {
        w2();
        final float p10 = oe.w0.p(f10, 0.0f, 1.0f);
        if (this.f13239h0 == p10) {
            return;
        }
        this.f13239h0 = p10;
        c2();
        this.f13246l.k(22, new x.a() { // from class: com.google.android.exoplayer2.r
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
        this.f13243j0 = new CueGroup(qi.s.t(), this.f13259r0.f13395r);
    }

    @Override // com.google.android.exoplayer2.Player
    public CueGroup q() {
        w2();
        return this.f13243j0;
    }

    public void q1(AnalyticsListener analyticsListener) {
        this.f13258r.z((AnalyticsListener) oe.a.e(analyticsListener));
    }

    @Override // com.google.android.exoplayer2.Player
    public int r() {
        w2();
        if (f()) {
            return this.f13259r0.f13379b.f46438b;
        }
        return -1;
    }

    public void r1(mc.i iVar) {
        this.f13248m.add(iVar);
    }

    @Override // com.google.android.exoplayer2.Player
    public int u() {
        w2();
        return this.f13259r0.f13390m;
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
        return this.f13259r0.f13378a;
    }

    public void v1(SurfaceHolder surfaceHolder) {
        w2();
        if (surfaceHolder != null && surfaceHolder == this.W) {
            u1();
        }
    }

    @Override // com.google.android.exoplayer2.Player
    public Looper w() {
        return this.f13260s;
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
        textureView.setSurfaceTextureListener(this.f13268x);
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
