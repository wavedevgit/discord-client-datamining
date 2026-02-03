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
import ne.x;
import pe.l;
import qd.o0;
import qd.r;
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
    private lc.t0 L;
    private qd.o0 M;
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
    private pe.l X;
    private boolean Y;
    private TextureView Z;

    /* renamed from: a0  reason: collision with root package name */
    private int f13194a0;

    /* renamed from: b  reason: collision with root package name */
    final je.r f13195b;

    /* renamed from: b0  reason: collision with root package name */
    private int f13196b0;

    /* renamed from: c  reason: collision with root package name */
    final Player.Commands f13197c;

    /* renamed from: c0  reason: collision with root package name */
    private ne.l0 f13198c0;

    /* renamed from: d  reason: collision with root package name */
    private final ne.h f13199d;

    /* renamed from: d0  reason: collision with root package name */
    private DecoderCounters f13200d0;

    /* renamed from: e  reason: collision with root package name */
    private final Context f13201e;

    /* renamed from: e0  reason: collision with root package name */
    private DecoderCounters f13202e0;

    /* renamed from: f  reason: collision with root package name */
    private final Player f13203f;

    /* renamed from: f0  reason: collision with root package name */
    private int f13204f0;

    /* renamed from: g  reason: collision with root package name */
    private final v1[] f13205g;

    /* renamed from: g0  reason: collision with root package name */
    private AudioAttributes f13206g0;

    /* renamed from: h  reason: collision with root package name */
    private final je.q f13207h;

    /* renamed from: h0  reason: collision with root package name */
    private float f13208h0;

    /* renamed from: i  reason: collision with root package name */
    private final ne.u f13209i;

    /* renamed from: i0  reason: collision with root package name */
    private boolean f13210i0;

    /* renamed from: j  reason: collision with root package name */
    private final t0.f f13211j;

    /* renamed from: j0  reason: collision with root package name */
    private CueGroup f13212j0;

    /* renamed from: k  reason: collision with root package name */
    private final t0 f13213k;

    /* renamed from: k0  reason: collision with root package name */
    private boolean f13214k0;

    /* renamed from: l  reason: collision with root package name */
    private final ne.x f13215l;

    /* renamed from: l0  reason: collision with root package name */
    private boolean f13216l0;

    /* renamed from: m  reason: collision with root package name */
    private final CopyOnWriteArraySet f13217m;

    /* renamed from: m0  reason: collision with root package name */
    private boolean f13218m0;

    /* renamed from: n  reason: collision with root package name */
    private final Timeline.b f13219n;

    /* renamed from: n0  reason: collision with root package name */
    private boolean f13220n0;

    /* renamed from: o  reason: collision with root package name */
    private final List f13221o;

    /* renamed from: o0  reason: collision with root package name */
    private DeviceInfo f13222o0;

    /* renamed from: p  reason: collision with root package name */
    private final boolean f13223p;

    /* renamed from: p0  reason: collision with root package name */
    private VideoSize f13224p0;

    /* renamed from: q  reason: collision with root package name */
    private final r.a f13225q;

    /* renamed from: q0  reason: collision with root package name */
    private MediaMetadata f13226q0;

    /* renamed from: r  reason: collision with root package name */
    private final mc.a f13227r;

    /* renamed from: r0  reason: collision with root package name */
    private r1 f13228r0;

    /* renamed from: s  reason: collision with root package name */
    private final Looper f13229s;

    /* renamed from: s0  reason: collision with root package name */
    private int f13230s0;

    /* renamed from: t  reason: collision with root package name */
    private final le.e f13231t;

    /* renamed from: t0  reason: collision with root package name */
    private int f13232t0;

    /* renamed from: u  reason: collision with root package name */
    private final long f13233u;

    /* renamed from: u0  reason: collision with root package name */
    private long f13234u0;

    /* renamed from: v  reason: collision with root package name */
    private final long f13235v;

    /* renamed from: w  reason: collision with root package name */
    private final ne.e f13236w;

    /* renamed from: x  reason: collision with root package name */
    private final c f13237x;

    /* renamed from: y  reason: collision with root package name */
    private final d f13238y;

    /* renamed from: z  reason: collision with root package name */
    private final com.google.android.exoplayer2.b f13239z;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private static final class b {
        public static mc.t1 a(Context context, i0 i0Var, boolean z10) {
            LogSessionId logSessionId;
            com.google.android.exoplayer2.analytics.c f10 = com.google.android.exoplayer2.analytics.c.f(context);
            if (f10 == null) {
                ne.y.i("ExoPlayerImpl", "MediaMetricsService unavailable.");
                logSessionId = LogSessionId.LOG_SESSION_ID_NONE;
                return new mc.t1(logSessionId);
            }
            if (z10) {
                i0Var.q1(f10);
            }
            return new mc.t1(f10.m());
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public final class c implements oe.y, com.google.android.exoplayer2.audio.e, zd.m, gd.d, SurfaceHolder.Callback, TextureView.SurfaceTextureListener, l.b, d.b, b.InterfaceC0171b, y1.b, lc.i {
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
            i0.this.f13227r.a(exc);
        }

        @Override // oe.y
        public void b(String str) {
            i0.this.f13227r.b(str);
        }

        @Override // com.google.android.exoplayer2.audio.e
        public void c(DecoderCounters decoderCounters) {
            i0.this.f13202e0 = decoderCounters;
            i0.this.f13227r.c(decoderCounters);
        }

        @Override // oe.y
        public void d(String str, long j10, long j11) {
            i0.this.f13227r.d(str, j10, j11);
        }

        @Override // com.google.android.exoplayer2.audio.e
        public void e(String str) {
            i0.this.f13227r.e(str);
        }

        @Override // com.google.android.exoplayer2.audio.e
        public void f(String str, long j10, long j11) {
            i0.this.f13227r.f(str, j10, j11);
        }

        @Override // com.google.android.exoplayer2.b.InterfaceC0171b
        public void g() {
            i0.this.s2(false, -1, 3);
        }

        @Override // oe.y
        public void h(Format format, DecoderReuseEvaluation decoderReuseEvaluation) {
            i0.this.R = format;
            i0.this.f13227r.h(format, decoderReuseEvaluation);
        }

        @Override // com.google.android.exoplayer2.audio.e
        public void i(long j10) {
            i0.this.f13227r.i(j10);
        }

        @Override // oe.y
        public void j(Exception exc) {
            i0.this.f13227r.j(exc);
        }

        @Override // oe.y
        public void k(DecoderCounters decoderCounters) {
            i0.this.f13227r.k(decoderCounters);
            i0.this.R = null;
            i0.this.f13200d0 = null;
        }

        @Override // com.google.android.exoplayer2.audio.e
        public void l(DecoderCounters decoderCounters) {
            i0.this.f13227r.l(decoderCounters);
            i0.this.S = null;
            i0.this.f13202e0 = null;
        }

        @Override // oe.y
        public void m(int i10, long j10) {
            i0.this.f13227r.m(i10, j10);
        }

        @Override // com.google.android.exoplayer2.audio.e
        public void n(Format format, DecoderReuseEvaluation decoderReuseEvaluation) {
            i0.this.S = format;
            i0.this.f13227r.n(format, decoderReuseEvaluation);
        }

        @Override // oe.y
        public void o(Object obj, long j10) {
            i0.this.f13227r.o(obj, j10);
            if (i0.this.U == obj) {
                i0.this.f13215l.k(26, new x.a() { // from class: lc.t
                    @Override // ne.x.a
                    public final void invoke(Object obj2) {
                        ((Player.b) obj2).onRenderedFirstFrame();
                    }
                });
            }
        }

        @Override // zd.m
        public void onCues(final List list) {
            i0.this.f13215l.k(27, new x.a() { // from class: com.google.android.exoplayer2.j0
                @Override // ne.x.a
                public final void invoke(Object obj) {
                    ((Player.b) obj).onCues(list);
                }
            });
        }

        @Override // gd.d
        public void onMetadata(final Metadata metadata) {
            i0 i0Var = i0.this;
            i0Var.f13226q0 = i0Var.f13226q0.b().K(metadata).H();
            MediaMetadata t12 = i0.this.t1();
            if (!t12.equals(i0.this.P)) {
                i0.this.P = t12;
                i0.this.f13215l.h(14, new x.a() { // from class: com.google.android.exoplayer2.l0
                    @Override // ne.x.a
                    public final void invoke(Object obj) {
                        ((Player.b) obj).onMediaMetadataChanged(i0.this.P);
                    }
                });
            }
            i0.this.f13215l.h(28, new x.a() { // from class: com.google.android.exoplayer2.m0
                @Override // ne.x.a
                public final void invoke(Object obj) {
                    ((Player.b) obj).onMetadata(Metadata.this);
                }
            });
            i0.this.f13215l.f();
        }

        @Override // com.google.android.exoplayer2.audio.e
        public void onSkipSilenceEnabledChanged(final boolean z10) {
            if (i0.this.f13210i0 != z10) {
                i0.this.f13210i0 = z10;
                i0.this.f13215l.k(23, new x.a() { // from class: com.google.android.exoplayer2.p0
                    @Override // ne.x.a
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

        @Override // oe.y
        public void onVideoSizeChanged(final VideoSize videoSize) {
            i0.this.f13224p0 = videoSize;
            i0.this.f13215l.k(25, new x.a() { // from class: com.google.android.exoplayer2.q0
                @Override // ne.x.a
                public final void invoke(Object obj) {
                    ((Player.b) obj).onVideoSizeChanged(VideoSize.this);
                }
            });
        }

        @Override // oe.y
        public void p(DecoderCounters decoderCounters) {
            i0.this.f13200d0 = decoderCounters;
            i0.this.f13227r.p(decoderCounters);
        }

        @Override // com.google.android.exoplayer2.audio.e
        public void q(Exception exc) {
            i0.this.f13227r.q(exc);
        }

        @Override // com.google.android.exoplayer2.audio.e
        public void r(int i10, long j10, long j11) {
            i0.this.f13227r.r(i10, j10, j11);
        }

        @Override // oe.y
        public void s(long j10, int i10) {
            i0.this.f13227r.s(j10, i10);
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
            if (!w12.equals(i0.this.f13222o0)) {
                i0.this.f13222o0 = w12;
                i0.this.f13215l.k(29, new x.a() { // from class: com.google.android.exoplayer2.o0
                    @Override // ne.x.a
                    public final void invoke(Object obj) {
                        ((Player.b) obj).onDeviceInfoChanged(DeviceInfo.this);
                    }
                });
            }
        }

        @Override // pe.l.b
        public void u(Surface surface) {
            i0.this.l2(null);
        }

        @Override // pe.l.b
        public void v(Surface surface) {
            i0.this.l2(surface);
        }

        @Override // com.google.android.exoplayer2.y1.b
        public void w(final int i10, final boolean z10) {
            i0.this.f13215l.k(30, new x.a() { // from class: com.google.android.exoplayer2.n0
                @Override // ne.x.a
                public final void invoke(Object obj) {
                    ((Player.b) obj).onDeviceVolumeChanged(i10, z10);
                }
            });
        }

        @Override // lc.i
        public void z(boolean z10) {
            i0.this.v2();
        }

        @Override // zd.m
        public void onCues(final CueGroup cueGroup) {
            i0.this.f13212j0 = cueGroup;
            i0.this.f13215l.k(27, new x.a() { // from class: com.google.android.exoplayer2.k0
                @Override // ne.x.a
                public final void invoke(Object obj) {
                    ((Player.b) obj).onCues(CueGroup.this);
                }
            });
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class d implements oe.l, pe.a, s1.b {

        /* renamed from: d  reason: collision with root package name */
        private oe.l f13241d;

        /* renamed from: e  reason: collision with root package name */
        private pe.a f13242e;

        /* renamed from: i  reason: collision with root package name */
        private oe.l f13243i;

        /* renamed from: o  reason: collision with root package name */
        private pe.a f13244o;

        private d() {
        }

        @Override // oe.l
        public void a(long j10, long j11, Format format, MediaFormat mediaFormat) {
            long j12;
            long j13;
            Format format2;
            MediaFormat mediaFormat2;
            oe.l lVar = this.f13243i;
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
            oe.l lVar2 = this.f13241d;
            if (lVar2 != null) {
                lVar2.a(j12, j13, format2, mediaFormat2);
            }
        }

        @Override // pe.a
        public void b(long j10, float[] fArr) {
            pe.a aVar = this.f13244o;
            if (aVar != null) {
                aVar.b(j10, fArr);
            }
            pe.a aVar2 = this.f13242e;
            if (aVar2 != null) {
                aVar2.b(j10, fArr);
            }
        }

        @Override // pe.a
        public void c() {
            pe.a aVar = this.f13244o;
            if (aVar != null) {
                aVar.c();
            }
            pe.a aVar2 = this.f13242e;
            if (aVar2 != null) {
                aVar2.c();
            }
        }

        @Override // com.google.android.exoplayer2.s1.b
        public void n(int i10, Object obj) {
            if (i10 != 7) {
                if (i10 != 8) {
                    if (i10 != 10000) {
                        return;
                    }
                    pe.l lVar = (pe.l) obj;
                    if (lVar == null) {
                        this.f13243i = null;
                        this.f13244o = null;
                        return;
                    }
                    this.f13243i = lVar.getVideoFrameMetadataListener();
                    this.f13244o = lVar.getCameraMotionListener();
                    return;
                }
                this.f13242e = (pe.a) obj;
                return;
            }
            this.f13241d = (oe.l) obj;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class e implements a1 {

        /* renamed from: a  reason: collision with root package name */
        private final Object f13245a;

        /* renamed from: b  reason: collision with root package name */
        private Timeline f13246b;

        public e(Object obj, Timeline timeline) {
            this.f13245a = obj;
            this.f13246b = timeline;
        }

        @Override // com.google.android.exoplayer2.a1
        public Object a() {
            return this.f13245a;
        }

        @Override // com.google.android.exoplayer2.a1
        public Timeline b() {
            return this.f13246b;
        }
    }

    static {
        lc.u.a("goog.exo.exoplayer");
    }

    public i0(k kVar, Player player) {
        boolean z10;
        i0 i0Var;
        mc.t1 a10;
        AudioAttributes audioAttributes;
        boolean z11;
        boolean z12;
        ne.h hVar = new ne.h();
        this.f13199d = hVar;
        try {
            ne.y.f("ExoPlayerImpl", "Init " + Integer.toHexString(System.identityHashCode(this)) + " [ExoPlayerLib/2.19.1] [" + ne.w0.f40162e + "]");
            Context applicationContext = kVar.f13262a.getApplicationContext();
            this.f13201e = applicationContext;
            mc.a aVar = (mc.a) kVar.f13270i.apply(kVar.f13263b);
            this.f13227r = aVar;
            this.f13206g0 = kVar.f13272k;
            this.f13194a0 = kVar.f13278q;
            this.f13196b0 = kVar.f13279r;
            this.f13210i0 = kVar.f13276o;
            this.E = kVar.f13286y;
            c cVar = new c();
            this.f13237x = cVar;
            d dVar = new d();
            this.f13238y = dVar;
            Handler handler = new Handler(kVar.f13271j);
            v1[] a11 = ((lc.s0) kVar.f13265d.get()).a(handler, cVar, cVar, cVar, cVar);
            this.f13205g = a11;
            if (a11.length > 0) {
                z10 = true;
            } else {
                z10 = false;
            }
            ne.a.g(z10);
            je.q qVar = (je.q) kVar.f13267f.get();
            this.f13207h = qVar;
            this.f13225q = (r.a) kVar.f13266e.get();
            le.e eVar = (le.e) kVar.f13269h.get();
            this.f13231t = eVar;
            this.f13223p = kVar.f13280s;
            this.L = kVar.f13281t;
            this.f13233u = kVar.f13282u;
            this.f13235v = kVar.f13283v;
            this.N = kVar.f13287z;
            Looper looper = kVar.f13271j;
            this.f13229s = looper;
            ne.e eVar2 = kVar.f13263b;
            this.f13236w = eVar2;
            if (player == null) {
                i0Var = this;
            } else {
                i0Var = player;
            }
            this.f13203f = i0Var;
            this.f13215l = new ne.x(looper, eVar2, new x.b() { // from class: com.google.android.exoplayer2.s
                @Override // ne.x.b
                public final void a(Object obj, ne.q qVar2) {
                    ((Player.b) obj).onEvents(i0.this.f13203f, new Player.Events(qVar2));
                }
            });
            this.f13217m = new CopyOnWriteArraySet();
            this.f13221o = new ArrayList();
            this.M = new o0.a(0);
            je.r rVar = new je.r(new lc.r0[a11.length], new com.google.android.exoplayer2.trackselection.g[a11.length], Tracks.f12649e, null);
            this.f13195b = rVar;
            this.f13219n = new Timeline.b();
            Player.Commands e10 = new Player.Commands.a().c(1, 2, 3, 13, 14, 15, 16, 17, 18, 19, 31, 20, 30, 21, 22, 24, 27, 28, 32).d(29, qVar.g()).d(23, kVar.f13277p).d(25, kVar.f13277p).d(33, kVar.f13277p).d(26, kVar.f13277p).d(34, kVar.f13277p).e();
            this.f13197c = e10;
            this.O = new Player.Commands.a().b(e10).a(4).a(10).e();
            this.f13209i = eVar2.c(looper, null);
            t0.f fVar = new t0.f() { // from class: com.google.android.exoplayer2.t
                @Override // com.google.android.exoplayer2.t0.f
                public final void a(t0.e eVar3) {
                    r0.f13209i.post(new Runnable() { // from class: com.google.android.exoplayer2.y
                        @Override // java.lang.Runnable
                        public final void run() {
                            i0.this.Q1(eVar3);
                        }
                    });
                }
            };
            this.f13211j = fVar;
            this.f13228r0 = r1.k(rVar);
            aVar.y(i0Var, looper);
            int i10 = ne.w0.f40158a;
            if (i10 < 31) {
                a10 = new mc.t1();
            } else {
                a10 = b.a(applicationContext, this, kVar.A);
            }
            t0 t0Var = new t0(a11, qVar, rVar, (lc.a0) kVar.f13268g.get(), eVar, this.F, this.G, aVar, this.L, kVar.f13284w, kVar.f13285x, this.N, looper, eVar2, fVar, a10, kVar.B);
            this.f13213k = t0Var;
            this.f13208h0 = 1.0f;
            this.F = 0;
            MediaMetadata mediaMetadata = MediaMetadata.T;
            this.P = mediaMetadata;
            this.Q = mediaMetadata;
            this.f13226q0 = mediaMetadata;
            this.f13230s0 = -1;
            if (i10 < 21) {
                this.f13204f0 = R1(0);
            } else {
                this.f13204f0 = ne.w0.G(applicationContext);
            }
            this.f13212j0 = CueGroup.f13620i;
            this.f13214k0 = true;
            L(aVar);
            eVar.b(new Handler(looper), aVar);
            r1(cVar);
            long j10 = kVar.f13264c;
            if (j10 > 0) {
                t0Var.v(j10);
            }
            com.google.android.exoplayer2.b bVar = new com.google.android.exoplayer2.b(kVar.f13262a, handler, cVar);
            this.f13239z = bVar;
            bVar.b(kVar.f13275n);
            com.google.android.exoplayer2.d dVar2 = new com.google.android.exoplayer2.d(kVar.f13262a, handler, cVar);
            this.A = dVar2;
            if (kVar.f13273l) {
                audioAttributes = this.f13206g0;
            } else {
                audioAttributes = null;
            }
            dVar2.m(audioAttributes);
            if (kVar.f13277p) {
                y1 y1Var = new y1(kVar.f13262a, handler, cVar);
                this.B = y1Var;
                y1Var.h(ne.w0.k0(this.f13206g0.f12831i));
            } else {
                this.B = null;
            }
            b2 b2Var = new b2(kVar.f13262a);
            this.C = b2Var;
            if (kVar.f13274m != 0) {
                z11 = true;
            } else {
                z11 = false;
            }
            b2Var.a(z11);
            c2 c2Var = new c2(kVar.f13262a);
            this.D = c2Var;
            if (kVar.f13274m == 2) {
                z12 = true;
            } else {
                z12 = false;
            }
            c2Var.a(z12);
            this.f13222o0 = w1(this.B);
            this.f13224p0 = VideoSize.f14142p;
            this.f13198c0 = ne.l0.f40088c;
            qVar.k(this.f13206g0);
            b2(1, 10, Integer.valueOf(this.f13204f0));
            b2(2, 10, Integer.valueOf(this.f13204f0));
            b2(1, 3, this.f13206g0);
            b2(2, 4, Integer.valueOf(this.f13194a0));
            b2(2, 5, Integer.valueOf(this.f13196b0));
            b2(1, 9, Boolean.valueOf(this.f13210i0));
            b2(2, 7, dVar);
            b2(6, 8, dVar);
            hVar.e();
        } catch (Throwable th2) {
            this.f13199d.e();
            throw th2;
        }
    }

    private long B1(r1 r1Var) {
        if (r1Var.f13348b.b()) {
            r1Var.f13347a.l(r1Var.f13348b.f47555a, this.f13219n);
            if (r1Var.f13349c == -9223372036854775807L) {
                return r1Var.f13347a.r(E1(r1Var), this.f13131a).d();
            }
            return this.f13219n.p() + ne.w0.p1(r1Var.f13349c);
        }
        return ne.w0.p1(C1(r1Var));
    }

    public static /* synthetic */ void C0(int i10, Player.PositionInfo positionInfo, Player.PositionInfo positionInfo2, Player.b bVar) {
        bVar.onPositionDiscontinuity(i10);
        bVar.onPositionDiscontinuity(positionInfo, positionInfo2, i10);
    }

    private long C1(r1 r1Var) {
        long j10;
        if (r1Var.f13347a.u()) {
            return ne.w0.K0(this.f13234u0);
        }
        if (r1Var.f13361o) {
            j10 = r1Var.m();
        } else {
            j10 = r1Var.f13364r;
        }
        if (r1Var.f13348b.b()) {
            return j10;
        }
        return V1(r1Var.f13347a, r1Var.f13348b, j10);
    }

    private int E1(r1 r1Var) {
        if (r1Var.f13347a.u()) {
            return this.f13230s0;
        }
        return r1Var.f13347a.l(r1Var.f13348b.f47555a, this.f13219n).f12625i;
    }

    private Pair F1(Timeline timeline, Timeline timeline2, int i10, long j10) {
        boolean z10;
        long j11 = -9223372036854775807L;
        int i11 = -1;
        if (!timeline.u() && !timeline2.u()) {
            Pair n10 = timeline.n(this.f13131a, this.f13219n, i10, ne.w0.K0(j10));
            Object obj = ((Pair) ne.w0.j(n10)).first;
            if (timeline2.f(obj) != -1) {
                return n10;
            }
            Object z02 = t0.z0(this.f13131a, this.f13219n, this.F, this.G, obj, timeline, timeline2);
            if (z02 != null) {
                timeline2.l(z02, this.f13219n);
                int i12 = this.f13219n.f12625i;
                return T1(timeline2, i12, timeline2.r(i12, this.f13131a).d());
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
        if (!this.f13228r0.f13347a.u()) {
            r1 r1Var = this.f13228r0;
            Object obj3 = r1Var.f13348b.f47555a;
            r1Var.f13347a.l(obj3, this.f13219n);
            i10 = this.f13228r0.f13347a.f(obj3);
            obj2 = obj3;
            obj = this.f13228r0.f13347a.r(Q, this.f13131a).f12634d;
            mediaItem = this.f13131a.f12636i;
        } else {
            obj = null;
            i10 = -1;
            mediaItem = null;
            obj2 = null;
        }
        int i11 = i10;
        long p12 = ne.w0.p1(j10);
        if (this.f13228r0.f13348b.b()) {
            j11 = ne.w0.p1(M1(this.f13228r0));
        } else {
            j11 = p12;
        }
        r.b bVar = this.f13228r0.f13348b;
        return new Player.PositionInfo(obj, Q, mediaItem, obj2, i11, p12, j11, bVar.f47556b, bVar.f47557c);
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
        if (!r1Var.f13347a.u()) {
            Object obj3 = r1Var.f13348b.f47555a;
            r1Var.f13347a.l(obj3, bVar);
            int i14 = bVar.f12625i;
            int f10 = r1Var.f13347a.f(obj3);
            Object obj4 = r1Var.f13347a.r(i14, this.f13131a).f12634d;
            mediaItem = this.f13131a.f12636i;
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
            if (r1Var.f13348b.b()) {
                r.b bVar2 = r1Var.f13348b;
                j10 = bVar.e(bVar2.f47556b, bVar2.f47557c);
                M1 = M1(r1Var);
            } else {
                if (r1Var.f13348b.f47559e != -1) {
                    j10 = M1(this.f13228r0);
                } else {
                    j10 = bVar.f12627p + bVar.f12626o;
                }
                M1 = j10;
            }
        } else if (r1Var.f13348b.b()) {
            j10 = r1Var.f13364r;
            M1 = M1(r1Var);
        } else {
            j10 = bVar.f12627p + r1Var.f13364r;
            M1 = j10;
        }
        long p12 = ne.w0.p1(j10);
        long p13 = ne.w0.p1(M1);
        r.b bVar3 = r1Var.f13348b;
        return new Player.PositionInfo(obj, i12, mediaItem, obj2, i13, p12, p13, bVar3.f47556b, bVar3.f47557c);
    }

    public static /* synthetic */ void K0(r1 r1Var, Player.b bVar) {
        bVar.onLoadingChanged(r1Var.f13353g);
        bVar.onIsLoadingChanged(r1Var.f13353g);
    }

    private static long M1(r1 r1Var) {
        Timeline.d dVar = new Timeline.d();
        Timeline.b bVar = new Timeline.b();
        r1Var.f13347a.l(r1Var.f13348b.f47555a, bVar);
        if (r1Var.f13349c == -9223372036854775807L) {
            return r1Var.f13347a.r(bVar.f12625i, dVar).e();
        }
        return bVar.q() + r1Var.f13349c;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void Q1(t0.e eVar) {
        long j10;
        boolean z10;
        int i10 = this.H - eVar.f13597c;
        this.H = i10;
        boolean z11 = true;
        if (eVar.f13598d) {
            this.I = eVar.f13599e;
            this.J = true;
        }
        if (eVar.f13600f) {
            this.K = eVar.f13601g;
        }
        if (i10 == 0) {
            Timeline timeline = eVar.f13596b.f13347a;
            if (!this.f13228r0.f13347a.u() && timeline.u()) {
                this.f13230s0 = -1;
                this.f13234u0 = 0L;
                this.f13232t0 = 0;
            }
            if (!timeline.u()) {
                List J = ((t1) timeline).J();
                if (J.size() == this.f13221o.size()) {
                    z10 = true;
                } else {
                    z10 = false;
                }
                ne.a.g(z10);
                for (int i11 = 0; i11 < J.size(); i11++) {
                    ((e) this.f13221o.get(i11)).f13246b = (Timeline) J.get(i11);
                }
            }
            long j11 = -9223372036854775807L;
            if (this.J) {
                if (eVar.f13596b.f13348b.equals(this.f13228r0.f13348b) && eVar.f13596b.f13350d == this.f13228r0.f13364r) {
                    z11 = false;
                }
                if (z11) {
                    if (!timeline.u() && !eVar.f13596b.f13348b.b()) {
                        r1 r1Var = eVar.f13596b;
                        j10 = V1(timeline, r1Var.f13348b, r1Var.f13350d);
                    } else {
                        j10 = eVar.f13596b.f13350d;
                    }
                    j11 = j10;
                }
            } else {
                z11 = false;
            }
            this.J = false;
            t2(eVar.f13596b, 1, this.K, z11, this.I, j11, -1, false);
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
        qd.w0 w0Var;
        je.r rVar;
        List list;
        int i10;
        long j10;
        if (!timeline.u() && pair == null) {
            z10 = false;
        } else {
            z10 = true;
        }
        ne.a.a(z10);
        Timeline timeline2 = r1Var.f13347a;
        long B1 = B1(r1Var);
        r1 j11 = r1Var.j(timeline);
        if (timeline.u()) {
            r.b l10 = r1.l();
            long K0 = ne.w0.K0(this.f13234u0);
            r1 c10 = j11.d(l10, K0, K0, K0, 0L, qd.w0.f47627o, this.f13195b, ji.s.r()).c(l10);
            c10.f13362p = c10.f13364r;
            return c10;
        }
        Object obj = j11.f13348b.f47555a;
        boolean equals = obj.equals(((Pair) ne.w0.j(pair)).first);
        if (!equals) {
            bVar = new r.b(pair.first);
        } else {
            bVar = j11.f13348b;
        }
        long longValue = ((Long) pair.second).longValue();
        long K02 = ne.w0.K0(B1);
        if (!timeline2.u()) {
            K02 -= timeline2.l(obj, this.f13219n).q();
        }
        if (!equals || longValue < K02) {
            r.b bVar2 = bVar;
            ne.a.g(!bVar2.b());
            if (!equals) {
                w0Var = qd.w0.f47627o;
            } else {
                w0Var = j11.f13354h;
            }
            qd.w0 w0Var2 = w0Var;
            if (!equals) {
                rVar = this.f13195b;
            } else {
                rVar = j11.f13355i;
            }
            je.r rVar2 = rVar;
            if (!equals) {
                list = ji.s.r();
            } else {
                list = j11.f13356j;
            }
            r1 c11 = j11.d(bVar2, longValue, longValue, longValue, 0L, w0Var2, rVar2, list).c(bVar2);
            c11.f13362p = longValue;
            return c11;
        } else if (i10 == 0) {
            int f10 = timeline.f(j11.f13357k.f47555a);
            if (f10 != -1 && timeline.j(f10, this.f13219n).f12625i == timeline.l(bVar.f47555a, this.f13219n).f12625i) {
                return j11;
            }
            timeline.l(bVar.f47555a, this.f13219n);
            if (bVar.b()) {
                j10 = this.f13219n.e(bVar.f47556b, bVar.f47557c);
            } else {
                j10 = this.f13219n.f12626o;
            }
            r.b bVar3 = bVar;
            r1 c12 = j11.d(bVar3, j11.f13364r, j11.f13364r, j11.f13350d, j10 - j11.f13364r, j11.f13354h, j11.f13355i, j11.f13356j).c(bVar3);
            c12.f13362p = j10;
            return c12;
        } else {
            r.b bVar4 = bVar;
            ne.a.g(!bVar4.b());
            long max = Math.max(0L, j11.f13363q - (longValue - K02));
            long j12 = j11.f13362p;
            if (j11.f13357k.equals(j11.f13348b)) {
                j12 = longValue + max;
            }
            r1 d10 = j11.d(bVar4, longValue, longValue, longValue, max, j11.f13354h, j11.f13355i, j11.f13356j);
            d10.f13362p = j12;
            return d10;
        }
    }

    private Pair T1(Timeline timeline, int i10, long j10) {
        if (timeline.u()) {
            this.f13230s0 = i10;
            if (j10 == -9223372036854775807L) {
                j10 = 0;
            }
            this.f13234u0 = j10;
            this.f13232t0 = 0;
            return null;
        }
        if (i10 == -1 || i10 >= timeline.t()) {
            i10 = timeline.e(this.G);
            j10 = timeline.r(i10, this.f13131a).d();
        }
        return timeline.n(this.f13131a, this.f13219n, i10, ne.w0.K0(j10));
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void U1(final int i10, final int i11) {
        if (i10 == this.f13198c0.b() && i11 == this.f13198c0.a()) {
            return;
        }
        this.f13198c0 = new ne.l0(i10, i11);
        this.f13215l.k(24, new x.a() { // from class: com.google.android.exoplayer2.v
            @Override // ne.x.a
            public final void invoke(Object obj) {
                ((Player.b) obj).onSurfaceSizeChanged(i10, i11);
            }
        });
        b2(2, 14, new ne.l0(i10, i11));
    }

    private long V1(Timeline timeline, r.b bVar, long j10) {
        timeline.l(bVar.f47555a, this.f13219n);
        return j10 + this.f13219n.q();
    }

    private r1 Y1(r1 r1Var, int i10, int i11) {
        int E1 = E1(r1Var);
        long B1 = B1(r1Var);
        Timeline timeline = r1Var.f13347a;
        int size = this.f13221o.size();
        this.H++;
        Z1(i10, i11);
        Timeline x12 = x1();
        r1 S1 = S1(r1Var, x12, F1(timeline, x12, E1, B1));
        int i12 = S1.f13351e;
        if (i12 != 1 && i12 != 4 && i10 < i11 && i11 == size && E1 >= S1.f13347a.t()) {
            S1 = S1.h(4);
        }
        this.f13213k.n0(i10, i11, this.M);
        return S1;
    }

    private void Z1(int i10, int i11) {
        for (int i12 = i11 - 1; i12 >= i10; i12--) {
            this.f13221o.remove(i12);
        }
        this.M = this.M.a(i10, i11);
    }

    private void a2() {
        if (this.X != null) {
            y1(this.f13238y).n(10000).m(null).l();
            this.X.g(this.f13237x);
            this.X = null;
        }
        TextureView textureView = this.Z;
        if (textureView != null) {
            if (textureView.getSurfaceTextureListener() != this.f13237x) {
                ne.y.i("ExoPlayerImpl", "SurfaceTextureListener already unset or replaced.");
            } else {
                this.Z.setSurfaceTextureListener(null);
            }
            this.Z = null;
        }
        SurfaceHolder surfaceHolder = this.W;
        if (surfaceHolder != null) {
            surfaceHolder.removeCallback(this.f13237x);
            this.W = null;
        }
    }

    private void b2(int i10, int i11, Object obj) {
        v1[] v1VarArr;
        for (v1 v1Var : this.f13205g) {
            if (v1Var.e() == i10) {
                y1(v1Var).n(i11).m(obj).l();
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void c2() {
        b2(1, 2, Float.valueOf(this.f13208h0 * this.A.g()));
    }

    private void h2(List list, int i10, long j10, boolean z10) {
        long j11;
        int i11;
        int i12;
        r1 h10;
        boolean z11;
        int i13 = i10;
        int E1 = E1(this.f13228r0);
        long Z = Z();
        this.H++;
        if (!this.f13221o.isEmpty()) {
            Z1(0, this.f13221o.size());
        }
        List s12 = s1(0, list);
        Timeline x12 = x1();
        if (!x12.u() && i13 >= x12.t()) {
            throw new lc.z(x12, i13, j10);
        }
        if (z10) {
            i13 = x12.e(this.G);
            j11 = -9223372036854775807L;
        } else if (i13 == -1) {
            i11 = E1;
            j11 = Z;
            r1 S1 = S1(this.f13228r0, x12, T1(x12, i11, j11));
            i12 = S1.f13351e;
            if (i11 != -1 && i12 != 1) {
                i12 = (!x12.u() || i11 >= x12.t()) ? 4 : 2;
            }
            h10 = S1.h(i12);
            this.f13213k.O0(s12, i11, ne.w0.K0(j11), this.M);
            if (this.f13228r0.f13348b.f47555a.equals(h10.f13348b.f47555a) && !this.f13228r0.f13347a.u()) {
                z11 = true;
            } else {
                z11 = false;
            }
            t2(h10, 0, 1, z11, 4, C1(h10), -1, false);
        } else {
            j11 = j10;
        }
        i11 = i13;
        r1 S12 = S1(this.f13228r0, x12, T1(x12, i11, j11));
        i12 = S12.f13351e;
        if (i11 != -1) {
            if (x12.u()) {
            }
        }
        h10 = S12.h(i12);
        this.f13213k.O0(s12, i11, ne.w0.K0(j11), this.M);
        if (this.f13228r0.f13348b.f47555a.equals(h10.f13348b.f47555a)) {
        }
        z11 = false;
        t2(h10, 0, 1, z11, 4, C1(h10), -1, false);
    }

    private void i2(SurfaceHolder surfaceHolder) {
        this.Y = false;
        this.W = surfaceHolder;
        surfaceHolder.addCallback(this.f13237x);
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
        for (v1 v1Var : this.f13205g) {
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
            q2(j.i(new lc.v(3), 1003));
        }
    }

    private void q2(j jVar) {
        r1 r1Var = this.f13228r0;
        r1 c10 = r1Var.c(r1Var.f13348b);
        c10.f13362p = c10.f13364r;
        c10.f13363q = 0L;
        r1 h10 = c10.h(1);
        if (jVar != null) {
            h10 = h10.f(jVar);
        }
        this.H++;
        this.f13213k.i1();
        t2(h10, 0, 1, false, 5, -9223372036854775807L, -1, false);
    }

    private void r2() {
        Player.Commands commands = this.O;
        Player.Commands I = ne.w0.I(this.f13203f, this.f13197c);
        this.O = I;
        if (!I.equals(commands)) {
            this.f13215l.h(13, new x.a() { // from class: com.google.android.exoplayer2.z
                @Override // ne.x.a
                public final void invoke(Object obj) {
                    ((Player.b) obj).onAvailableCommandsChanged(i0.this.O);
                }
            });
        }
    }

    private List s1(int i10, List list) {
        ArrayList arrayList = new ArrayList();
        for (int i11 = 0; i11 < list.size(); i11++) {
            o1.c cVar = new o1.c((qd.r) list.get(i11), this.f13223p);
            arrayList.add(cVar);
            this.f13221o.add(i11 + i10, new e(cVar.f13334b, cVar.f13333a.X()));
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
        r1 r1Var = this.f13228r0;
        if (r1Var.f13358l == z11 && r1Var.f13359m == i12) {
            return;
        }
        this.H++;
        if (r1Var.f13361o) {
            r1Var = r1Var.a();
        }
        r1 e10 = r1Var.e(z11, i12);
        this.f13213k.R0(z11, i12);
        t2(e10, 0, i11, false, 5, -9223372036854775807L, -1, false);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public MediaMetadata t1() {
        Timeline v10 = v();
        if (v10.u()) {
            return this.f13226q0;
        }
        return this.f13226q0.b().J(v10.r(Q(), this.f13131a).f12636i.f12376p).H();
    }

    private void t2(final r1 r1Var, final int i10, final int i11, boolean z10, final int i12, long j10, int i13, boolean z11) {
        boolean z12;
        boolean z13;
        boolean z14;
        r1 r1Var2 = this.f13228r0;
        this.f13228r0 = r1Var;
        boolean equals = r1Var2.f13347a.equals(r1Var.f13347a);
        Pair z15 = z1(r1Var, r1Var2, z10, i12, !equals, z11);
        boolean booleanValue = ((Boolean) z15.first).booleanValue();
        final int intValue = ((Integer) z15.second).intValue();
        MediaMetadata mediaMetadata = this.P;
        final MediaItem mediaItem = null;
        if (booleanValue) {
            if (!r1Var.f13347a.u()) {
                mediaItem = r1Var.f13347a.r(r1Var.f13347a.l(r1Var.f13348b.f47555a, this.f13219n).f12625i, this.f13131a).f12636i;
            }
            this.f13226q0 = MediaMetadata.T;
        }
        if (booleanValue || !r1Var2.f13356j.equals(r1Var.f13356j)) {
            this.f13226q0 = this.f13226q0.b().L(r1Var.f13356j).H();
            mediaMetadata = t1();
        }
        boolean equals2 = mediaMetadata.equals(this.P);
        this.P = mediaMetadata;
        if (r1Var2.f13358l != r1Var.f13358l) {
            z12 = true;
        } else {
            z12 = false;
        }
        if (r1Var2.f13351e != r1Var.f13351e) {
            z13 = true;
        } else {
            z13 = false;
        }
        if (z13 || z12) {
            v2();
        }
        boolean z16 = r1Var2.f13353g;
        boolean z17 = r1Var.f13353g;
        if (z16 != z17) {
            z14 = true;
        } else {
            z14 = false;
        }
        if (z14) {
            u2(z17);
        }
        if (!equals) {
            this.f13215l.h(0, new x.a() { // from class: com.google.android.exoplayer2.l
                @Override // ne.x.a
                public final void invoke(Object obj) {
                    Player.b bVar = (Player.b) obj;
                    bVar.onTimelineChanged(r1.this.f13347a, i10);
                }
            });
        }
        if (z10) {
            final Player.PositionInfo J1 = J1(i12, r1Var2, i13);
            final Player.PositionInfo I1 = I1(j10);
            this.f13215l.h(11, new x.a() { // from class: com.google.android.exoplayer2.d0
                @Override // ne.x.a
                public final void invoke(Object obj) {
                    i0.C0(i12, J1, I1, (Player.b) obj);
                }
            });
        }
        if (booleanValue) {
            this.f13215l.h(1, new x.a() { // from class: com.google.android.exoplayer2.e0
                @Override // ne.x.a
                public final void invoke(Object obj) {
                    ((Player.b) obj).onMediaItemTransition(MediaItem.this, intValue);
                }
            });
        }
        if (r1Var2.f13352f != r1Var.f13352f) {
            this.f13215l.h(10, new x.a() { // from class: com.google.android.exoplayer2.f0
                @Override // ne.x.a
                public final void invoke(Object obj) {
                    ((Player.b) obj).onPlayerErrorChanged(r1.this.f13352f);
                }
            });
            if (r1Var.f13352f != null) {
                this.f13215l.h(10, new x.a() { // from class: com.google.android.exoplayer2.g0
                    @Override // ne.x.a
                    public final void invoke(Object obj) {
                        ((Player.b) obj).onPlayerError(r1.this.f13352f);
                    }
                });
            }
        }
        je.r rVar = r1Var2.f13355i;
        je.r rVar2 = r1Var.f13355i;
        if (rVar != rVar2) {
            this.f13207h.h(rVar2.f31751e);
            this.f13215l.h(2, new x.a() { // from class: com.google.android.exoplayer2.h0
                @Override // ne.x.a
                public final void invoke(Object obj) {
                    ((Player.b) obj).onTracksChanged(r1.this.f13355i.f31750d);
                }
            });
        }
        if (!equals2) {
            final MediaMetadata mediaMetadata2 = this.P;
            this.f13215l.h(14, new x.a() { // from class: com.google.android.exoplayer2.m
                @Override // ne.x.a
                public final void invoke(Object obj) {
                    ((Player.b) obj).onMediaMetadataChanged(MediaMetadata.this);
                }
            });
        }
        if (z14) {
            this.f13215l.h(3, new x.a() { // from class: com.google.android.exoplayer2.n
                @Override // ne.x.a
                public final void invoke(Object obj) {
                    i0.K0(r1.this, (Player.b) obj);
                }
            });
        }
        if (z13 || z12) {
            this.f13215l.h(-1, new x.a() { // from class: com.google.android.exoplayer2.o
                @Override // ne.x.a
                public final void invoke(Object obj) {
                    ((Player.b) obj).onPlayerStateChanged(r0.f13358l, r1.this.f13351e);
                }
            });
        }
        if (z13) {
            this.f13215l.h(4, new x.a() { // from class: com.google.android.exoplayer2.p
                @Override // ne.x.a
                public final void invoke(Object obj) {
                    ((Player.b) obj).onPlaybackStateChanged(r1.this.f13351e);
                }
            });
        }
        if (z12) {
            this.f13215l.h(5, new x.a() { // from class: com.google.android.exoplayer2.w
                @Override // ne.x.a
                public final void invoke(Object obj) {
                    Player.b bVar = (Player.b) obj;
                    bVar.onPlayWhenReadyChanged(r1.this.f13358l, i11);
                }
            });
        }
        if (r1Var2.f13359m != r1Var.f13359m) {
            this.f13215l.h(6, new x.a() { // from class: com.google.android.exoplayer2.a0
                @Override // ne.x.a
                public final void invoke(Object obj) {
                    ((Player.b) obj).onPlaybackSuppressionReasonChanged(r1.this.f13359m);
                }
            });
        }
        if (r1Var2.n() != r1Var.n()) {
            this.f13215l.h(7, new x.a() { // from class: com.google.android.exoplayer2.b0
                @Override // ne.x.a
                public final void invoke(Object obj) {
                    ((Player.b) obj).onIsPlayingChanged(r1.this.n());
                }
            });
        }
        if (!r1Var2.f13360n.equals(r1Var.f13360n)) {
            this.f13215l.h(12, new x.a() { // from class: com.google.android.exoplayer2.c0
                @Override // ne.x.a
                public final void invoke(Object obj) {
                    ((Player.b) obj).onPlaybackParametersChanged(r1.this.f13360n);
                }
            });
        }
        r2();
        this.f13215l.f();
        if (r1Var2.f13361o != r1Var.f13361o) {
            Iterator it = this.f13217m.iterator();
            while (it.hasNext()) {
                ((lc.i) it.next()).z(r1Var.f13361o);
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
        this.f13199d.b();
        if (Thread.currentThread() != w().getThread()) {
            String D = ne.w0.D("Player is accessed on the wrong thread.\nCurrent thread: '%s'\nExpected thread: '%s'\nSee https://developer.android.com/guide/topics/media/issues/player-accessed-on-wrong-thread", Thread.currentThread().getName(), w().getThread().getName());
            if (!this.f13214k0) {
                if (this.f13216l0) {
                    illegalStateException = null;
                } else {
                    illegalStateException = new IllegalStateException();
                }
                ne.y.j("ExoPlayerImpl", D, illegalStateException);
                this.f13216l0 = true;
                return;
            }
            throw new IllegalStateException(D);
        }
    }

    private Timeline x1() {
        return new t1(this.f13221o, this.M);
    }

    private s1 y1(s1.b bVar) {
        int E1 = E1(this.f13228r0);
        t0 t0Var = this.f13213k;
        Timeline timeline = this.f13228r0.f13347a;
        if (E1 == -1) {
            E1 = 0;
        }
        return new s1(t0Var, bVar, timeline, E1, this.f13236w, t0Var.C());
    }

    private Pair z1(r1 r1Var, r1 r1Var2, boolean z10, int i10, boolean z11, boolean z12) {
        Timeline timeline = r1Var2.f13347a;
        Timeline timeline2 = r1Var.f13347a;
        if (timeline2.u() && timeline.u()) {
            return new Pair(Boolean.FALSE, -1);
        }
        int i11 = 3;
        if (timeline2.u() != timeline.u()) {
            return new Pair(Boolean.TRUE, 3);
        }
        if (!timeline.r(timeline.l(r1Var2.f13348b.f47555a, this.f13219n).f12625i, this.f13131a).f12634d.equals(timeline2.r(timeline2.l(r1Var.f13348b.f47555a, this.f13219n).f12625i, this.f13131a).f12634d)) {
            if (z10 && i10 == 0) {
                i11 = 1;
            } else if (z10 && i10 == 1) {
                i11 = 2;
            } else if (!z11) {
                throw new IllegalStateException();
            }
            return new Pair(Boolean.TRUE, Integer.valueOf(i11));
        } else if (z10 && i10 == 0 && r1Var2.f13348b.f47558d < r1Var.f13348b.f47558d) {
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
        return this.f13228r0.f13361o;
    }

    @Override // com.google.android.exoplayer2.Player
    public boolean B() {
        w2();
        return this.f13228r0.f13358l;
    }

    @Override // com.google.android.exoplayer2.Player
    public void C(final boolean z10) {
        w2();
        if (this.G != z10) {
            this.G = z10;
            this.f13213k.Y0(z10);
            this.f13215l.h(9, new x.a() { // from class: com.google.android.exoplayer2.x
                @Override // ne.x.a
                public final void invoke(Object obj) {
                    ((Player.b) obj).onShuffleModeEnabledChanged(z10);
                }
            });
            r2();
            this.f13215l.f();
        }
    }

    @Override // com.google.android.exoplayer2.Player
    public long D() {
        w2();
        return 3000L;
    }

    public je.m D1() {
        w2();
        return new je.m(this.f13228r0.f13355i.f31749c);
    }

    @Override // com.google.android.exoplayer2.Player
    public int E() {
        w2();
        if (this.f13228r0.f13347a.u()) {
            return this.f13232t0;
        }
        r1 r1Var = this.f13228r0;
        return r1Var.f13347a.f(r1Var.f13348b.f47555a);
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
        return this.f13224p0;
    }

    @Override // com.google.android.exoplayer2.Player
    /* renamed from: H1 */
    public j m() {
        w2();
        return this.f13228r0.f13352f;
    }

    @Override // com.google.android.exoplayer2.Player
    public int I() {
        w2();
        if (f()) {
            return this.f13228r0.f13348b.f47557c;
        }
        return -1;
    }

    @Override // com.google.android.exoplayer2.Player
    public long J() {
        w2();
        return this.f13235v;
    }

    @Override // com.google.android.exoplayer2.Player
    public long K() {
        w2();
        return B1(this.f13228r0);
    }

    public int K1() {
        w2();
        return this.f13205g.length;
    }

    @Override // com.google.android.exoplayer2.Player
    public void L(Player.b bVar) {
        this.f13215l.c((Player.b) ne.a.e(bVar));
    }

    public int L1(int i10) {
        w2();
        return this.f13205g[i10].e();
    }

    @Override // com.google.android.exoplayer2.Player
    public long M() {
        w2();
        if (f()) {
            r1 r1Var = this.f13228r0;
            if (r1Var.f13357k.equals(r1Var.f13348b)) {
                return ne.w0.p1(this.f13228r0.f13362p);
            }
            return getDuration();
        }
        return V();
    }

    public je.q N1() {
        w2();
        return this.f13207h;
    }

    @Override // com.google.android.exoplayer2.Player
    public int O() {
        w2();
        return this.f13228r0.f13351e;
    }

    public Format O1() {
        w2();
        return this.R;
    }

    public float P1() {
        w2();
        return this.f13208h0;
    }

    @Override // com.google.android.exoplayer2.Player
    public int Q() {
        w2();
        int E1 = E1(this.f13228r0);
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
            this.f13213k.V0(i10);
            this.f13215l.h(8, new x.a() { // from class: com.google.android.exoplayer2.u
                @Override // ne.x.a
                public final void invoke(Object obj) {
                    ((Player.b) obj).onRepeatModeChanged(i10);
                }
            });
            r2();
            this.f13215l.f();
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
        if (this.f13228r0.f13347a.u()) {
            return this.f13234u0;
        }
        r1 r1Var = this.f13228r0;
        if (r1Var.f13357k.f47558d != r1Var.f13348b.f47558d) {
            return r1Var.f13347a.r(Q(), this.f13131a).f();
        }
        long j10 = r1Var.f13362p;
        if (this.f13228r0.f13357k.b()) {
            r1 r1Var2 = this.f13228r0;
            Timeline.b l10 = r1Var2.f13347a.l(r1Var2.f13357k.f47555a, this.f13219n);
            long i10 = l10.i(this.f13228r0.f13357k.f47556b);
            if (i10 == Long.MIN_VALUE) {
                j10 = l10.f12626o;
            } else {
                j10 = i10;
            }
        }
        r1 r1Var3 = this.f13228r0;
        return ne.w0.p1(V1(r1Var3.f13347a, r1Var3.f13357k, j10));
    }

    public void W1(qd.r rVar, boolean z10, boolean z11) {
        w2();
        e2(rVar, z10);
        d();
    }

    public void X1() {
        AudioTrack audioTrack;
        ne.y.f("ExoPlayerImpl", "Release " + Integer.toHexString(System.identityHashCode(this)) + " [ExoPlayerLib/2.19.1] [" + ne.w0.f40162e + "] [" + lc.u.b() + "]");
        w2();
        if (ne.w0.f40158a < 21 && (audioTrack = this.T) != null) {
            audioTrack.release();
            this.T = null;
        }
        this.f13239z.b(false);
        y1 y1Var = this.B;
        if (y1Var != null) {
            y1Var.g();
        }
        this.C.b(false);
        this.D.b(false);
        this.A.i();
        if (!this.f13213k.j0()) {
            this.f13215l.k(10, new x.a() { // from class: com.google.android.exoplayer2.q
                @Override // ne.x.a
                public final void invoke(Object obj) {
                    ((Player.b) obj).onPlayerError(j.i(new lc.v(1), 1003));
                }
            });
        }
        this.f13215l.i();
        this.f13209i.e(null);
        this.f13231t.a(this.f13227r);
        r1 r1Var = this.f13228r0;
        if (r1Var.f13361o) {
            this.f13228r0 = r1Var.a();
        }
        r1 h10 = this.f13228r0.h(1);
        this.f13228r0 = h10;
        r1 c10 = h10.c(h10.f13348b);
        this.f13228r0 = c10;
        c10.f13362p = c10.f13364r;
        this.f13228r0.f13363q = 0L;
        this.f13227r.release();
        this.f13207h.i();
        a2();
        Surface surface = this.V;
        if (surface != null) {
            surface.release();
            this.V = null;
        }
        if (!this.f13218m0) {
            this.f13212j0 = CueGroup.f13620i;
            this.f13220n0 = true;
            return;
        }
        android.support.v4.media.session.b.a(ne.a.e(null));
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
        return ne.w0.p1(C1(this.f13228r0));
    }

    @Override // com.google.android.exoplayer2.Player
    public long a0() {
        w2();
        return this.f13233u;
    }

    @Override // com.google.android.exoplayer2.Player
    public PlaybackParameters c() {
        w2();
        return this.f13228r0.f13360n;
    }

    @Override // com.google.android.exoplayer2.Player
    public void d() {
        w2();
        boolean B = B();
        int i10 = 2;
        int p10 = this.A.p(B, 2);
        s2(B, p10, G1(B, p10));
        r1 r1Var = this.f13228r0;
        if (r1Var.f13351e != 1) {
            return;
        }
        r1 f10 = r1Var.f(null);
        if (f10.f13347a.u()) {
            i10 = 4;
        }
        r1 h10 = f10.h(i10);
        this.H++;
        this.f13213k.h0();
        t2(h10, 1, 1, false, 5, -9223372036854775807L, -1, false);
    }

    public void d2(qd.r rVar) {
        w2();
        f2(Collections.singletonList(rVar));
    }

    public void e2(qd.r rVar, boolean z10) {
        w2();
        g2(Collections.singletonList(rVar), z10);
    }

    @Override // com.google.android.exoplayer2.Player
    public boolean f() {
        w2();
        return this.f13228r0.f13348b.b();
    }

    public void f2(List list) {
        w2();
        g2(list, true);
    }

    @Override // com.google.android.exoplayer2.Player
    public long g() {
        w2();
        return ne.w0.p1(this.f13228r0.f13363q);
    }

    public void g2(List list, boolean z10) {
        w2();
        h2(list, -1, -9223372036854775807L, z10);
    }

    @Override // com.google.android.exoplayer2.Player
    public long getDuration() {
        w2();
        if (f()) {
            r1 r1Var = this.f13228r0;
            r.b bVar = r1Var.f13348b;
            r1Var.f13347a.l(bVar.f47555a, this.f13219n);
            return ne.w0.p1(this.f13219n.e(bVar.f47556b, bVar.f47557c));
        }
        return d0();
    }

    @Override // com.google.android.exoplayer2.Player
    public void h(Player.b bVar) {
        w2();
        this.f13215l.j((Player.b) ne.a.e(bVar));
    }

    @Override // com.google.android.exoplayer2.Player
    public void j(SurfaceView surfaceView) {
        SurfaceHolder holder;
        w2();
        if (surfaceView instanceof oe.k) {
            a2();
            l2(surfaceView);
            i2(surfaceView.getHolder());
        } else if (surfaceView instanceof pe.l) {
            a2();
            this.X = (pe.l) surfaceView;
            y1(this.f13238y).n(10000).m(this.X).l();
            this.X.d(this.f13237x);
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
            playbackParameters = PlaybackParameters.f12580o;
        }
        if (this.f13228r0.f13360n.equals(playbackParameters)) {
            return;
        }
        r1 g10 = this.f13228r0.g(playbackParameters);
        this.H++;
        this.f13213k.T0(playbackParameters);
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
        ne.a.a(z10);
        int size = this.f13221o.size();
        int min = Math.min(i11, size);
        if (i10 < size && i10 != min) {
            r1 Y1 = Y1(this.f13228r0, i10, min);
            t2(Y1, 0, 1, !Y1.f13348b.f47555a.equals(this.f13228r0.f13348b.f47555a), 4, C1(Y1), -1, false);
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
        ne.a.a(z11);
        this.f13227r.v();
        Timeline timeline = this.f13228r0.f13347a;
        if (!timeline.u() && i10 >= timeline.t()) {
            return;
        }
        this.H++;
        if (f()) {
            ne.y.i("ExoPlayerImpl", "seekTo ignored because an ad is playing");
            t0.e eVar = new t0.e(this.f13228r0);
            eVar.b(1);
            this.f13211j.a(eVar);
            return;
        }
        r1 r1Var = this.f13228r0;
        int i12 = r1Var.f13351e;
        if (i12 == 3 || (i12 == 4 && !timeline.u())) {
            r1Var = this.f13228r0.h(2);
        }
        int Q = Q();
        r1 S1 = S1(r1Var, timeline, T1(timeline, i10, j10));
        this.f13213k.B0(timeline, i10, ne.w0.K0(j10));
        t2(S1, 0, 1, true, 1, C1(S1), Q, z10);
    }

    public void m2(int i10) {
        w2();
        this.f13194a0 = i10;
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
        surfaceHolder.addCallback(this.f13237x);
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
        return this.f13228r0.f13355i.f31750d;
    }

    public void o2(float f10) {
        w2();
        final float p10 = ne.w0.p(f10, 0.0f, 1.0f);
        if (this.f13208h0 == p10) {
            return;
        }
        this.f13208h0 = p10;
        c2();
        this.f13215l.k(22, new x.a() { // from class: com.google.android.exoplayer2.r
            @Override // ne.x.a
            public final void invoke(Object obj) {
                ((Player.b) obj).onVolumeChanged(p10);
            }
        });
    }

    public void p2() {
        w2();
        this.A.p(B(), 1);
        q2(null);
        this.f13212j0 = new CueGroup(ji.s.r(), this.f13228r0.f13364r);
    }

    @Override // com.google.android.exoplayer2.Player
    public CueGroup q() {
        w2();
        return this.f13212j0;
    }

    public void q1(AnalyticsListener analyticsListener) {
        this.f13227r.B((AnalyticsListener) ne.a.e(analyticsListener));
    }

    @Override // com.google.android.exoplayer2.Player
    public int r() {
        w2();
        if (f()) {
            return this.f13228r0.f13348b.f47556b;
        }
        return -1;
    }

    public void r1(lc.i iVar) {
        this.f13217m.add(iVar);
    }

    @Override // com.google.android.exoplayer2.Player
    public int u() {
        w2();
        return this.f13228r0.f13359m;
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
        return this.f13228r0.f13347a;
    }

    public void v1(SurfaceHolder surfaceHolder) {
        w2();
        if (surfaceHolder != null && surfaceHolder == this.W) {
            u1();
        }
    }

    @Override // com.google.android.exoplayer2.Player
    public Looper w() {
        return this.f13229s;
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
            ne.y.i("ExoPlayerImpl", "Replacing existing SurfaceTextureListener.");
        }
        textureView.setSurfaceTextureListener(this.f13237x);
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
