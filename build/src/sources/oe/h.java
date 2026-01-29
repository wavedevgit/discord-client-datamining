package oe;

import android.content.Context;
import android.graphics.Point;
import android.hardware.display.DisplayManager;
import android.media.MediaCrypto;
import android.media.MediaFormat;
import android.os.Bundle;
import android.os.Handler;
import android.os.Message;
import android.os.SystemClock;
import android.util.Pair;
import android.view.Display;
import android.view.Surface;
import com.discord.media.utils.DiscordVideoMediaSource;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import com.facebook.react.uimanager.ViewProps;
import com.google.android.exoplayer2.Format;
import com.google.android.exoplayer2.decoder.DecoderCounters;
import com.google.android.exoplayer2.decoder.DecoderReuseEvaluation;
import com.google.android.exoplayer2.video.VideoSize;
import com.google.android.exoplayer2.w1;
import fd.l;
import fd.y;
import java.lang.reflect.Constructor;
import java.lang.reflect.Method;
import java.nio.ByteBuffer;
import java.util.ArrayDeque;
import java.util.List;
import java.util.Objects;
import java.util.concurrent.CopyOnWriteArrayList;
import kotlin.jvm.internal.LongCompanionObject;
import ne.b0;
import ne.c0;
import ne.l0;
import ne.o0;
import ne.r;
import ne.t0;
import ne.w0;
import ne.x0;
import oe.y;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class h extends fd.r {
    private static boolean A1;
    private static boolean B1;

    /* renamed from: z1  reason: collision with root package name */
    private static final int[] f42562z1 = {1920, 1600, 1440, 1280, 960, 854, DiscordVideoMediaSource.DEFAULT_WIDTH, 540, DiscordVideoMediaSource.DEFAULT_HEIGHT};
    private final Context R0;
    private final n S0;
    private final y.a T0;
    private final d U0;
    private final long V0;
    private final int W0;
    private final boolean X0;
    private b Y0;
    private boolean Z0;

    /* renamed from: a1  reason: collision with root package name */
    private boolean f42563a1;

    /* renamed from: b1  reason: collision with root package name */
    private Surface f42564b1;

    /* renamed from: c1  reason: collision with root package name */
    private i f42565c1;

    /* renamed from: d1  reason: collision with root package name */
    private boolean f42566d1;

    /* renamed from: e1  reason: collision with root package name */
    private int f42567e1;

    /* renamed from: f1  reason: collision with root package name */
    private boolean f42568f1;

    /* renamed from: g1  reason: collision with root package name */
    private boolean f42569g1;

    /* renamed from: h1  reason: collision with root package name */
    private boolean f42570h1;

    /* renamed from: i1  reason: collision with root package name */
    private long f42571i1;

    /* renamed from: j1  reason: collision with root package name */
    private long f42572j1;

    /* renamed from: k1  reason: collision with root package name */
    private long f42573k1;

    /* renamed from: l1  reason: collision with root package name */
    private int f42574l1;

    /* renamed from: m1  reason: collision with root package name */
    private int f42575m1;

    /* renamed from: n1  reason: collision with root package name */
    private int f42576n1;

    /* renamed from: o1  reason: collision with root package name */
    private long f42577o1;

    /* renamed from: p1  reason: collision with root package name */
    private long f42578p1;

    /* renamed from: q1  reason: collision with root package name */
    private long f42579q1;

    /* renamed from: r1  reason: collision with root package name */
    private int f42580r1;

    /* renamed from: s1  reason: collision with root package name */
    private long f42581s1;

    /* renamed from: t1  reason: collision with root package name */
    private VideoSize f42582t1;

    /* renamed from: u1  reason: collision with root package name */
    private VideoSize f42583u1;

    /* renamed from: v1  reason: collision with root package name */
    private boolean f42584v1;

    /* renamed from: w1  reason: collision with root package name */
    private int f42585w1;

    /* renamed from: x1  reason: collision with root package name */
    c f42586x1;

    /* renamed from: y1  reason: collision with root package name */
    private l f42587y1;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {
        public static boolean a(Context context) {
            Display display;
            DisplayManager displayManager = (DisplayManager) context.getSystemService(ViewProps.DISPLAY);
            if (displayManager != null) {
                display = displayManager.getDisplay(0);
            } else {
                display = null;
            }
            if (display != null && display.isHdr()) {
                for (int i10 : display.getHdrCapabilities().getSupportedHdrTypes()) {
                    if (i10 == 1) {
                        return true;
                    }
                }
            }
            return false;
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        public final int f42588a;

        /* renamed from: b  reason: collision with root package name */
        public final int f42589b;

        /* renamed from: c  reason: collision with root package name */
        public final int f42590c;

        public b(int i10, int i11, int i12) {
            this.f42588a = i10;
            this.f42589b = i11;
            this.f42590c = i12;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public final class c implements l.c, Handler.Callback {

        /* renamed from: d  reason: collision with root package name */
        private final Handler f42591d;

        public c(fd.l lVar) {
            Handler x10 = w0.x(this);
            this.f42591d = x10;
            lVar.b(this, x10);
        }

        private void b(long j10) {
            h hVar = h.this;
            if (this == hVar.f42586x1 && hVar.y0() != null) {
                if (j10 == LongCompanionObject.MAX_VALUE) {
                    h.this.o2();
                    return;
                }
                try {
                    h.this.n2(j10);
                } catch (com.google.android.exoplayer2.j e10) {
                    h.this.q1(e10);
                }
            }
        }

        @Override // fd.l.c
        public void a(fd.l lVar, long j10, long j11) {
            if (w0.f40279a < 30) {
                this.f42591d.sendMessageAtFrontOfQueue(Message.obtain(this.f42591d, 0, (int) (j10 >> 32), (int) j10));
                return;
            }
            b(j10);
        }

        @Override // android.os.Handler.Callback
        public boolean handleMessage(Message message) {
            if (message.what != 0) {
                return false;
            }
            b(w0.m1(message.arg1, message.arg2));
            return true;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class d {

        /* renamed from: a  reason: collision with root package name */
        private final n f42593a;

        /* renamed from: b  reason: collision with root package name */
        private final h f42594b;

        /* renamed from: e  reason: collision with root package name */
        private Handler f42597e;

        /* renamed from: f  reason: collision with root package name */
        private CopyOnWriteArrayList f42598f;

        /* renamed from: g  reason: collision with root package name */
        private Pair f42599g;

        /* renamed from: h  reason: collision with root package name */
        private Pair f42600h;

        /* renamed from: k  reason: collision with root package name */
        private boolean f42603k;

        /* renamed from: l  reason: collision with root package name */
        private boolean f42604l;

        /* renamed from: c  reason: collision with root package name */
        private final ArrayDeque f42595c = new ArrayDeque();

        /* renamed from: d  reason: collision with root package name */
        private final ArrayDeque f42596d = new ArrayDeque();

        /* renamed from: i  reason: collision with root package name */
        private int f42601i = -1;

        /* renamed from: j  reason: collision with root package name */
        private boolean f42602j = true;

        /* renamed from: m  reason: collision with root package name */
        private long f42605m = -9223372036854775807L;

        /* renamed from: n  reason: collision with root package name */
        private VideoSize f42606n = VideoSize.f14513p;

        /* renamed from: o  reason: collision with root package name */
        private long f42607o = -9223372036854775807L;

        /* renamed from: p  reason: collision with root package name */
        private long f42608p = -9223372036854775807L;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        public class a {

            /* renamed from: a  reason: collision with root package name */
            final /* synthetic */ Format f42609a;

            a(Format format) {
                this.f42609a = format;
            }
        }

        /* JADX INFO: Access modifiers changed from: private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        public static final class b {

            /* renamed from: a  reason: collision with root package name */
            private static Constructor f42611a;

            /* renamed from: b  reason: collision with root package name */
            private static Method f42612b;

            /* renamed from: c  reason: collision with root package name */
            private static Method f42613c;

            /* renamed from: d  reason: collision with root package name */
            private static Constructor f42614d;

            /* renamed from: e  reason: collision with root package name */
            private static Method f42615e;

            public static ne.n a(float f10) {
                c();
                Object newInstance = f42611a.newInstance(null);
                f42612b.invoke(newInstance, Float.valueOf(f10));
                android.support.v4.media.session.b.a(ne.a.e(f42613c.invoke(newInstance, null)));
                return null;
            }

            public static x0 b() {
                c();
                android.support.v4.media.session.b.a(ne.a.e(f42615e.invoke(f42614d.newInstance(null), null)));
                return null;
            }

            private static void c() {
                if (f42611a == null || f42612b == null || f42613c == null) {
                    Class<?> cls = Class.forName("com.google.android.exoplayer2.effect.ScaleAndRotateTransformation$Builder");
                    f42611a = cls.getConstructor(null);
                    f42612b = cls.getMethod("setRotationDegrees", Float.TYPE);
                    f42613c = cls.getMethod("build", null);
                }
                if (f42614d != null && f42615e != null) {
                    return;
                }
                Class<?> cls2 = Class.forName("com.google.android.exoplayer2.effect.DefaultVideoFrameProcessor$Factory$Builder");
                f42614d = cls2.getConstructor(null);
                f42615e = cls2.getMethod("build", null);
            }
        }

        public d(n nVar, h hVar) {
            this.f42593a = nVar;
            this.f42594b = hVar;
        }

        private void k(long j10, boolean z10) {
            ne.a.i(null);
            throw null;
        }

        public MediaFormat a(MediaFormat mediaFormat) {
            if (w0.f40279a >= 29 && this.f42594b.R0.getApplicationContext().getApplicationInfo().targetSdkVersion >= 29) {
                mediaFormat.setInteger("allow-frame-drop", 0);
            }
            return mediaFormat;
        }

        public void b() {
            android.support.v4.media.session.b.a(ne.a.e(null));
            throw null;
        }

        public void c() {
            ne.a.i(null);
            throw null;
        }

        public long d(long j10, long j11) {
            boolean z10;
            if (this.f42608p != -9223372036854775807L) {
                z10 = true;
            } else {
                z10 = false;
            }
            ne.a.g(z10);
            return (j10 + j11) - this.f42608p;
        }

        public Surface e() {
            android.support.v4.media.session.b.a(ne.a.e(null));
            throw null;
        }

        public boolean f() {
            return false;
        }

        public boolean g() {
            Pair pair = this.f42600h;
            if (pair != null && ((l0) pair.second).equals(l0.f40209c)) {
                return false;
            }
            return true;
        }

        public boolean h(Format format, long j10) {
            int i10;
            ne.a.g(!f());
            if (!this.f42602j) {
                return false;
            }
            if (this.f42598f == null) {
                this.f42602j = false;
                return false;
            }
            this.f42597e = w0.w();
            Pair V1 = this.f42594b.V1(format.I);
            try {
                if (!h.B1() && (i10 = format.E) != 0) {
                    CopyOnWriteArrayList copyOnWriteArrayList = this.f42598f;
                    b.a(i10);
                    copyOnWriteArrayList.add(0, null);
                }
                b.b();
                Context unused = this.f42594b.R0;
                List list = (List) ne.a.e(this.f42598f);
                ne.l lVar = ne.l.f40208a;
                oe.c cVar = (oe.c) V1.first;
                oe.c cVar2 = (oe.c) V1.second;
                Handler handler = this.f42597e;
                Objects.requireNonNull(handler);
                new nc.s(handler);
                new a(format);
                throw null;
            } catch (Exception e10) {
                throw this.f42594b.G(e10, format, 7000);
            }
        }

        public boolean i(Format format, long j10, boolean z10) {
            boolean z11;
            ne.a.i(null);
            if (this.f42601i != -1) {
                z11 = true;
            } else {
                z11 = false;
            }
            ne.a.g(z11);
            throw null;
        }

        public void j(String str) {
            this.f42601i = w0.d0(this.f42594b.R0, str, false);
        }

        public void l(long j10, long j11) {
            boolean z10;
            ne.a.i(null);
            while (!this.f42595c.isEmpty()) {
                boolean z11 = false;
                if (this.f42594b.getState() == 2) {
                    z10 = true;
                } else {
                    z10 = false;
                }
                long longValue = ((Long) ne.a.e((Long) this.f42595c.peek())).longValue();
                long j12 = longValue + this.f42608p;
                long M1 = this.f42594b.M1(j10, j11, SystemClock.elapsedRealtime() * 1000, j12, z10);
                if (this.f42603k && this.f42595c.size() == 1) {
                    z11 = true;
                }
                if (this.f42594b.z2(j10, M1)) {
                    k(-1L, z11);
                    return;
                } else if (z10 && j10 != this.f42594b.f42571i1 && M1 <= 50000) {
                    this.f42593a.h(j12);
                    long b10 = this.f42593a.b(System.nanoTime() + (M1 * 1000));
                    if (this.f42594b.y2((b10 - System.nanoTime()) / 1000, j11, z11)) {
                        k(-2L, z11);
                    } else {
                        if (!this.f42596d.isEmpty() && j12 > ((Long) ((Pair) this.f42596d.peek()).first).longValue()) {
                            this.f42599g = (Pair) this.f42596d.remove();
                        }
                        this.f42594b.m2(longValue, b10, (Format) this.f42599g.second);
                        if (this.f42607o >= j12) {
                            this.f42607o = -9223372036854775807L;
                            this.f42594b.j2(this.f42606n);
                        }
                        k(b10, z11);
                    }
                } else {
                    return;
                }
            }
        }

        public boolean m() {
            return this.f42604l;
        }

        public void n() {
            android.support.v4.media.session.b.a(ne.a.e(null));
            throw null;
        }

        public void o(Format format) {
            android.support.v4.media.session.b.a(ne.a.e(null));
            new r.b(format.B, format.C).b(format.F).a();
            throw null;
        }

        public void p(Surface surface, l0 l0Var) {
            Pair pair = this.f42600h;
            if (pair == null || !((Surface) pair.first).equals(surface) || !((l0) this.f42600h.second).equals(l0Var)) {
                this.f42600h = Pair.create(surface, l0Var);
                if (!f()) {
                    return;
                }
                android.support.v4.media.session.b.a(ne.a.e(null));
                new o0(surface, l0Var.b(), l0Var.a());
                throw null;
            }
        }

        public void q(List list) {
            CopyOnWriteArrayList copyOnWriteArrayList = this.f42598f;
            if (copyOnWriteArrayList == null) {
                this.f42598f = new CopyOnWriteArrayList(list);
                return;
            }
            copyOnWriteArrayList.clear();
            this.f42598f.addAll(list);
        }
    }

    public h(Context context, l.b bVar, fd.t tVar, long j10, boolean z10, Handler handler, y yVar, int i10) {
        this(context, bVar, tVar, j10, z10, handler, yVar, i10, 30.0f);
    }

    static /* synthetic */ boolean B1() {
        return P1();
    }

    private boolean B2(fd.q qVar) {
        if (w0.f40279a >= 23 && !this.f42584v1 && !Q1(qVar.f24983a)) {
            if (!qVar.f24989g || i.b(this.R0)) {
                return true;
            }
            return false;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public long M1(long j10, long j11, long j12, long j13, boolean z10) {
        long G0 = (long) ((j13 - j10) / G0());
        if (z10) {
            return G0 - (j12 - j11);
        }
        return G0;
    }

    private void N1() {
        fd.l y02;
        this.f42568f1 = false;
        if (w0.f40279a >= 23 && this.f42584v1 && (y02 = y0()) != null) {
            this.f42586x1 = new c(y02);
        }
    }

    private void O1() {
        this.f42583u1 = null;
    }

    private static boolean P1() {
        if (w0.f40279a >= 21) {
            return true;
        }
        return false;
    }

    private static void R1(MediaFormat mediaFormat, int i10) {
        mediaFormat.setFeatureEnabled("tunneled-playback", true);
        mediaFormat.setInteger("audio-session-id", i10);
    }

    private static boolean S1() {
        return "NVIDIA".equals(w0.f40281c);
    }

    /* JADX WARN: Can't fix incorrect switch cases order, some code will duplicate */
    /* JADX WARN: Code restructure failed: missing block: B:621:0x0844, code lost:
        if (r0.equals("PGN528") == false) goto L46;
     */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private static boolean U1() {
        /*
            Method dump skipped, instructions count: 3182
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: oe.h.U1():boolean");
    }

    /* JADX WARN: Can't fix incorrect switch cases order, some code will duplicate */
    /* JADX WARN: Code restructure failed: missing block: B:40:0x007a, code lost:
        if (r3.equals("video/av01") == false) goto L16;
     */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public static int W1(fd.q r9, com.google.android.exoplayer2.Format r10) {
        /*
            Method dump skipped, instructions count: 272
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: oe.h.W1(fd.q, com.google.android.exoplayer2.Format):int");
    }

    private static Point X1(fd.q qVar, Format format) {
        boolean z10;
        int i10;
        int[] iArr;
        int i11;
        int i12;
        int i13 = format.C;
        int i14 = format.B;
        if (i13 > i14) {
            z10 = true;
        } else {
            z10 = false;
        }
        if (z10) {
            i10 = i13;
        } else {
            i10 = i14;
        }
        if (z10) {
            i13 = i14;
        }
        float f10 = i13 / i10;
        for (int i15 : f42562z1) {
            int i16 = (int) (i15 * f10);
            if (i15 <= i10 || i16 <= i13) {
                break;
            }
            if (w0.f40279a >= 21) {
                if (z10) {
                    i12 = i16;
                } else {
                    i12 = i15;
                }
                if (!z10) {
                    i15 = i16;
                }
                Point c10 = qVar.c(i12, i15);
                if (qVar.w(c10.x, c10.y, format.D)) {
                    return c10;
                }
            } else {
                try {
                    int l10 = w0.l(i15, 16) * 16;
                    int l11 = w0.l(i16, 16) * 16;
                    if (l10 * l11 <= fd.y.L()) {
                        if (z10) {
                            i11 = l11;
                        } else {
                            i11 = l10;
                        }
                        if (!z10) {
                            l10 = l11;
                        }
                        return new Point(i11, l10);
                    }
                } catch (y.c unused) {
                }
            }
        }
        return null;
    }

    private static List Z1(Context context, fd.t tVar, Format format, boolean z10, boolean z11) {
        String str = format.f12706w;
        if (str == null) {
            return ji.s.r();
        }
        if (w0.f40279a >= 26 && "video/dolby-vision".equals(str) && !a.a(context)) {
            List n10 = fd.y.n(tVar, format, z10, z11);
            if (!n10.isEmpty()) {
                return n10;
            }
        }
        return fd.y.v(tVar, format, z10, z11);
    }

    protected static int a2(fd.q qVar, Format format) {
        if (format.f12707x != -1) {
            int size = format.f12708y.size();
            int i10 = 0;
            for (int i11 = 0; i11 < size; i11++) {
                i10 += ((byte[]) format.f12708y.get(i11)).length;
            }
            return format.f12707x + i10;
        }
        return W1(qVar, format);
    }

    private static int b2(int i10, int i11) {
        return (i10 * 3) / (i11 * 2);
    }

    private static boolean d2(long j10) {
        if (j10 < -30000) {
            return true;
        }
        return false;
    }

    private static boolean e2(long j10) {
        if (j10 < -500000) {
            return true;
        }
        return false;
    }

    private void g2() {
        if (this.f42574l1 > 0) {
            long elapsedRealtime = SystemClock.elapsedRealtime();
            this.T0.n(this.f42574l1, elapsedRealtime - this.f42573k1);
            this.f42574l1 = 0;
            this.f42573k1 = elapsedRealtime;
        }
    }

    private void i2() {
        int i10 = this.f42580r1;
        if (i10 != 0) {
            this.T0.r(this.f42579q1, i10);
            this.f42579q1 = 0L;
            this.f42580r1 = 0;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void j2(VideoSize videoSize) {
        if (!videoSize.equals(VideoSize.f14513p) && !videoSize.equals(this.f42583u1)) {
            this.f42583u1 = videoSize;
            this.T0.t(videoSize);
        }
    }

    private void k2() {
        if (this.f42566d1) {
            this.T0.q(this.f42564b1);
        }
    }

    private void l2() {
        VideoSize videoSize = this.f42583u1;
        if (videoSize != null) {
            this.T0.t(videoSize);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void m2(long j10, long j11, Format format) {
        l lVar = this.f42587y1;
        if (lVar != null) {
            lVar.a(j10, j11, format, C0());
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void o2() {
        p1();
    }

    private void p2() {
        Surface surface = this.f42564b1;
        i iVar = this.f42565c1;
        if (surface == iVar) {
            this.f42564b1 = null;
        }
        iVar.release();
        this.f42565c1 = null;
    }

    private void r2(fd.l lVar, Format format, int i10, long j10, boolean z10) {
        long nanoTime;
        long j11;
        if (this.U0.f()) {
            nanoTime = this.U0.d(j10, F0()) * 1000;
        } else {
            nanoTime = System.nanoTime();
        }
        long j12 = nanoTime;
        if (z10) {
            j11 = j10;
            m2(j11, j12, format);
        } else {
            j11 = j10;
        }
        if (w0.f40279a >= 21) {
            s2(lVar, i10, j11, j12);
        } else {
            q2(lVar, i10, j11);
        }
    }

    private static void t2(fd.l lVar, byte[] bArr) {
        Bundle bundle = new Bundle();
        bundle.putByteArray("hdr10-plus-info", bArr);
        lVar.setParameters(bundle);
    }

    private void u2() {
        long j10;
        if (this.V0 > 0) {
            j10 = SystemClock.elapsedRealtime() + this.V0;
        } else {
            j10 = -9223372036854775807L;
        }
        this.f42572j1 = j10;
    }

    /* JADX WARN: Multi-variable type inference failed */
    /* JADX WARN: Type inference failed for: r4v0, types: [oe.h, com.google.android.exoplayer2.f, fd.r] */
    /* JADX WARN: Type inference failed for: r5v10, types: [android.view.Surface] */
    private void v2(Object obj) {
        i iVar;
        if (obj instanceof Surface) {
            iVar = (Surface) obj;
        } else {
            iVar = null;
        }
        if (iVar == null) {
            i iVar2 = this.f42565c1;
            if (iVar2 != null) {
                iVar = iVar2;
            } else {
                fd.q z02 = z0();
                if (z02 != null && B2(z02)) {
                    iVar = i.c(this.R0, z02.f24989g);
                    this.f42565c1 = iVar;
                }
            }
        }
        if (this.f42564b1 != iVar) {
            this.f42564b1 = iVar;
            this.S0.m(iVar);
            this.f42566d1 = false;
            int state = getState();
            fd.l y02 = y0();
            if (y02 != null && !this.U0.f()) {
                if (w0.f40279a >= 23 && iVar != null && !this.Z0) {
                    w2(y02, iVar);
                } else {
                    h1();
                    Q0();
                }
            }
            if (iVar != null && iVar != this.f42565c1) {
                l2();
                N1();
                if (state == 2) {
                    u2();
                }
                if (this.U0.f()) {
                    this.U0.p(iVar, l0.f40209c);
                    return;
                }
                return;
            }
            O1();
            N1();
            if (this.U0.f()) {
                this.U0.b();
            }
        } else if (iVar != null && iVar != this.f42565c1) {
            l2();
            k2();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public boolean z2(long j10, long j11) {
        boolean z10;
        boolean z11;
        if (getState() == 2) {
            z10 = true;
        } else {
            z10 = false;
        }
        if (this.f42570h1 ? this.f42568f1 : !z10 && !this.f42569g1) {
            z11 = false;
        } else {
            z11 = true;
        }
        long elapsedRealtime = (SystemClock.elapsedRealtime() * 1000) - this.f42578p1;
        if (this.f42572j1 != -9223372036854775807L || j10 < F0() || (!z11 && (!z10 || !A2(j11, elapsedRealtime)))) {
            return false;
        }
        return true;
    }

    @Override // fd.r
    protected boolean A0() {
        if (this.f42584v1 && w0.f40279a < 23) {
            return true;
        }
        return false;
    }

    protected boolean A2(long j10, long j11) {
        if (d2(j10) && j11 > 100000) {
            return true;
        }
        return false;
    }

    @Override // fd.r
    protected float B0(float f10, Format format, Format[] formatArr) {
        float f11 = -1.0f;
        for (Format format2 : formatArr) {
            float f12 = format2.D;
            if (f12 != -1.0f) {
                f11 = Math.max(f11, f12);
            }
        }
        if (f11 == -1.0f) {
            return -1.0f;
        }
        return f11 * f10;
    }

    protected void C2(fd.l lVar, int i10, long j10) {
        t0.a("skipVideoBuffer");
        lVar.releaseOutputBuffer(i10, false);
        t0.c();
        this.M0.f13490f++;
    }

    @Override // fd.r
    protected List D0(fd.t tVar, Format format, boolean z10) {
        return fd.y.w(Z1(this.R0, tVar, format, z10, this.f42584v1), format);
    }

    protected void D2(int i10, int i11) {
        DecoderCounters decoderCounters = this.M0;
        decoderCounters.f13492h += i10;
        int i12 = i10 + i11;
        decoderCounters.f13491g += i12;
        this.f42574l1 += i12;
        int i13 = this.f42575m1 + i12;
        this.f42575m1 = i13;
        decoderCounters.f13493i = Math.max(i13, decoderCounters.f13493i);
        int i14 = this.W0;
        if (i14 > 0 && this.f42574l1 >= i14) {
            g2();
        }
    }

    @Override // fd.r
    protected l.a E0(fd.q qVar, Format format, MediaCrypto mediaCrypto, float f10) {
        int i10;
        Surface surface;
        i iVar = this.f42565c1;
        if (iVar != null && iVar.f42618d != qVar.f24989g) {
            p2();
        }
        String str = qVar.f24985c;
        b Y1 = Y1(qVar, format, M());
        this.Y0 = Y1;
        boolean z10 = this.X0;
        if (this.f42584v1) {
            i10 = this.f42585w1;
        } else {
            i10 = 0;
        }
        MediaFormat c22 = c2(format, str, Y1, f10, z10, i10);
        if (this.f42564b1 == null) {
            if (B2(qVar)) {
                if (this.f42565c1 == null) {
                    this.f42565c1 = i.c(this.R0, qVar.f24989g);
                }
                this.f42564b1 = this.f42565c1;
            } else {
                throw new IllegalStateException();
            }
        }
        if (this.U0.f()) {
            c22 = this.U0.a(c22);
        }
        if (this.U0.f()) {
            surface = this.U0.e();
        } else {
            surface = this.f42564b1;
        }
        return l.a.b(qVar, c22, format, surface, mediaCrypto);
    }

    protected void E2(long j10) {
        this.M0.a(j10);
        this.f42579q1 += j10;
        this.f42580r1++;
    }

    @Override // fd.r
    protected void H0(qc.f fVar) {
        if (this.f42563a1) {
            ByteBuffer byteBuffer = (ByteBuffer) ne.a.e(fVar.f47079q);
            if (byteBuffer.remaining() >= 7) {
                byte b10 = byteBuffer.get();
                short s10 = byteBuffer.getShort();
                short s11 = byteBuffer.getShort();
                byte b11 = byteBuffer.get();
                byte b12 = byteBuffer.get();
                byteBuffer.position(0);
                if (b10 == -75 && s10 == 60 && s11 == 1 && b11 == 4) {
                    if (b12 == 0 || b12 == 1) {
                        byte[] bArr = new byte[byteBuffer.remaining()];
                        byteBuffer.get(bArr);
                        byteBuffer.position(0);
                        t2(y0(), bArr);
                    }
                }
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // fd.r, com.google.android.exoplayer2.f
    public void O() {
        O1();
        N1();
        this.f42566d1 = false;
        this.f42586x1 = null;
        try {
            super.O();
        } finally {
            this.T0.m(this.M0);
            this.T0.t(VideoSize.f14513p);
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // fd.r, com.google.android.exoplayer2.f
    public void P(boolean z10, boolean z11) {
        boolean z12;
        super.P(z10, z11);
        boolean z13 = I().f37098a;
        if (z13 && this.f42585w1 == 0) {
            z12 = false;
        } else {
            z12 = true;
        }
        ne.a.g(z12);
        if (this.f42584v1 != z13) {
            this.f42584v1 = z13;
            h1();
        }
        this.T0.o(this.M0);
        this.f42569g1 = z11;
        this.f42570h1 = false;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // fd.r, com.google.android.exoplayer2.f
    public void Q(long j10, boolean z10) {
        super.Q(j10, z10);
        if (this.U0.f()) {
            this.U0.c();
        }
        N1();
        this.S0.j();
        this.f42577o1 = -9223372036854775807L;
        this.f42571i1 = -9223372036854775807L;
        this.f42575m1 = 0;
        if (z10) {
            u2();
        } else {
            this.f42572j1 = -9223372036854775807L;
        }
    }

    protected boolean Q1(String str) {
        if (str.startsWith("OMX.google")) {
            return false;
        }
        synchronized (h.class) {
            try {
                if (!A1) {
                    B1 = U1();
                    A1 = true;
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
        return B1;
    }

    @Override // fd.r
    protected void S0(Exception exc) {
        ne.y.d("MediaCodecVideoRenderer", "Video codec error", exc);
        this.T0.s(exc);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // fd.r, com.google.android.exoplayer2.f
    public void T() {
        try {
            super.T();
        } finally {
            if (this.U0.f()) {
                this.U0.n();
            }
            if (this.f42565c1 != null) {
                p2();
            }
        }
    }

    @Override // fd.r
    protected void T0(String str, l.a aVar, long j10, long j11) {
        this.T0.k(str, j10, j11);
        this.Z0 = Q1(str);
        this.f42563a1 = ((fd.q) ne.a.e(z0())).p();
        if (w0.f40279a >= 23 && this.f42584v1) {
            this.f42586x1 = new c((fd.l) ne.a.e(y0()));
        }
        this.U0.j(str);
    }

    protected void T1(fd.l lVar, int i10, long j10) {
        t0.a("dropVideoBuffer");
        lVar.releaseOutputBuffer(i10, false);
        t0.c();
        D2(0, 1);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // fd.r, com.google.android.exoplayer2.f
    public void U() {
        super.U();
        this.f42574l1 = 0;
        this.f42573k1 = SystemClock.elapsedRealtime();
        this.f42578p1 = SystemClock.elapsedRealtime() * 1000;
        this.f42579q1 = 0L;
        this.f42580r1 = 0;
        this.S0.k();
    }

    @Override // fd.r
    protected void U0(String str) {
        this.T0.l(str);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // fd.r, com.google.android.exoplayer2.f
    public void V() {
        this.f42572j1 = -9223372036854775807L;
        g2();
        i2();
        this.S0.l();
        super.V();
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // fd.r
    public DecoderReuseEvaluation V0(lc.x xVar) {
        DecoderReuseEvaluation V0 = super.V0(xVar);
        this.T0.p(xVar.f37110b, V0);
        return V0;
    }

    protected Pair V1(oe.c cVar) {
        if (!oe.c.f(cVar)) {
            oe.c cVar2 = oe.c.f42518q;
            return Pair.create(cVar2, cVar2);
        } else if (cVar.f42527i == 7) {
            return Pair.create(cVar, cVar.b().d(6).a());
        } else {
            return Pair.create(cVar, cVar);
        }
    }

    @Override // fd.r
    protected void W0(Format format, MediaFormat mediaFormat) {
        boolean z10;
        int integer;
        int integer2;
        int i10;
        int i11;
        fd.l y02 = y0();
        if (y02 != null) {
            y02.c(this.f42567e1);
        }
        int i12 = 0;
        if (this.f42584v1) {
            i11 = format.B;
            i10 = format.C;
        } else {
            ne.a.e(mediaFormat);
            if (mediaFormat.containsKey("crop-right") && mediaFormat.containsKey("crop-left") && mediaFormat.containsKey("crop-bottom") && mediaFormat.containsKey("crop-top")) {
                z10 = true;
            } else {
                z10 = false;
            }
            if (z10) {
                integer = (mediaFormat.getInteger("crop-right") - mediaFormat.getInteger("crop-left")) + 1;
            } else {
                integer = mediaFormat.getInteger("width");
            }
            if (z10) {
                integer2 = (mediaFormat.getInteger("crop-bottom") - mediaFormat.getInteger("crop-top")) + 1;
            } else {
                integer2 = mediaFormat.getInteger("height");
            }
            int i13 = integer;
            i10 = integer2;
            i11 = i13;
        }
        float f10 = format.F;
        if (P1()) {
            int i14 = format.E;
            if (i14 == 90 || i14 == 270) {
                f10 = 1.0f / f10;
                int i15 = i10;
                i10 = i11;
                i11 = i15;
            }
        } else if (!this.U0.f()) {
            i12 = format.E;
        }
        this.f42582t1 = new VideoSize(i11, i10, i12, f10);
        this.S0.g(format.D);
        if (this.U0.f()) {
            this.U0.o(format.b().n0(i11).S(i10).f0(i12).c0(f10).G());
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // fd.r
    public void Y0(long j10) {
        super.Y0(j10);
        if (!this.f42584v1) {
            this.f42576n1--;
        }
    }

    protected b Y1(fd.q qVar, Format format, Format[] formatArr) {
        boolean z10;
        int W1;
        int i10 = format.B;
        int i11 = format.C;
        int a22 = a2(qVar, format);
        if (formatArr.length == 1) {
            if (a22 != -1 && (W1 = W1(qVar, format)) != -1) {
                a22 = Math.min((int) (a22 * 1.5f), W1);
            }
            return new b(i10, i11, a22);
        }
        int length = formatArr.length;
        boolean z11 = false;
        for (int i12 = 0; i12 < length; i12++) {
            Format format2 = formatArr[i12];
            if (format.I != null && format2.I == null) {
                format2 = format2.b().L(format.I).G();
            }
            if (qVar.f(format, format2).f13500d != 0) {
                int i13 = format2.B;
                if (i13 != -1 && format2.C != -1) {
                    z10 = false;
                } else {
                    z10 = true;
                }
                z11 |= z10;
                i10 = Math.max(i10, i13);
                i11 = Math.max(i11, format2.C);
                a22 = Math.max(a22, a2(qVar, format2));
            }
        }
        if (z11) {
            ne.y.i("MediaCodecVideoRenderer", "Resolutions unknown. Codec max resolution: " + i10 + "x" + i11);
            Point X1 = X1(qVar, format);
            if (X1 != null) {
                i10 = Math.max(i10, X1.x);
                i11 = Math.max(i11, X1.y);
                a22 = Math.max(a22, W1(qVar, format.b().n0(i10).S(i11).G()));
                ne.y.i("MediaCodecVideoRenderer", "Codec max resolution adjusted to: " + i10 + "x" + i11);
            }
        }
        return new b(i10, i11, a22);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // fd.r
    public void Z0() {
        super.Z0();
        N1();
    }

    @Override // fd.r
    protected void a1(qc.f fVar) {
        boolean z10 = this.f42584v1;
        if (!z10) {
            this.f42576n1++;
        }
        if (w0.f40279a < 23 && z10) {
            n2(fVar.f47078p);
        }
    }

    @Override // fd.r
    protected void b1(Format format) {
        if (!this.U0.f()) {
            this.U0.h(format, F0());
        }
    }

    @Override // fd.r
    protected DecoderReuseEvaluation c0(fd.q qVar, Format format, Format format2) {
        int i10;
        DecoderReuseEvaluation f10 = qVar.f(format, format2);
        int i11 = f10.f13501e;
        int i12 = format2.B;
        b bVar = this.Y0;
        if (i12 > bVar.f42588a || format2.C > bVar.f42589b) {
            i11 |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER;
        }
        if (a2(qVar, format2) > this.Y0.f42590c) {
            i11 |= 64;
        }
        int i13 = i11;
        String str = qVar.f24983a;
        if (i13 != 0) {
            i10 = 0;
        } else {
            i10 = f10.f13500d;
        }
        return new DecoderReuseEvaluation(str, format, format2, i10, i13);
    }

    protected MediaFormat c2(Format format, String str, b bVar, float f10, boolean z10, int i10) {
        Pair r10;
        MediaFormat mediaFormat = new MediaFormat();
        mediaFormat.setString("mime", str);
        mediaFormat.setInteger("width", format.B);
        mediaFormat.setInteger("height", format.C);
        b0.e(mediaFormat, format.f12708y);
        b0.c(mediaFormat, "frame-rate", format.D);
        b0.d(mediaFormat, "rotation-degrees", format.E);
        b0.b(mediaFormat, format.I);
        if ("video/dolby-vision".equals(format.f12706w) && (r10 = fd.y.r(format)) != null) {
            b0.d(mediaFormat, "profile", ((Integer) r10.first).intValue());
        }
        mediaFormat.setInteger("max-width", bVar.f42588a);
        mediaFormat.setInteger("max-height", bVar.f42589b);
        b0.d(mediaFormat, "max-input-size", bVar.f42590c);
        if (w0.f40279a >= 23) {
            mediaFormat.setInteger("priority", 0);
            if (f10 != -1.0f) {
                mediaFormat.setFloat("operating-rate", f10);
            }
        }
        if (z10) {
            mediaFormat.setInteger("no-post-process", 1);
            mediaFormat.setInteger("auto-frc", 0);
        }
        if (i10 != 0) {
            R1(mediaFormat, i10);
        }
        return mediaFormat;
    }

    @Override // fd.r, com.google.android.exoplayer2.v1
    public boolean d() {
        boolean d10 = super.d();
        if (this.U0.f()) {
            return d10 & this.U0.m();
        }
        return d10;
    }

    @Override // fd.r
    protected boolean d1(long j10, long j11, fd.l lVar, ByteBuffer byteBuffer, int i10, int i11, int i12, long j12, boolean z10, boolean z11, Format format) {
        boolean z12;
        long j13;
        boolean z13;
        long j14;
        boolean z14;
        ne.a.e(lVar);
        if (this.f42571i1 == -9223372036854775807L) {
            this.f42571i1 = j10;
        }
        if (j12 != this.f42577o1) {
            if (!this.U0.f()) {
                this.S0.h(j12);
            }
            this.f42577o1 = j12;
        }
        long F0 = j12 - F0();
        if (z10 && !z11) {
            C2(lVar, i10, F0);
            return true;
        }
        if (getState() == 2) {
            z12 = true;
        } else {
            z12 = false;
        }
        long M1 = M1(j10, j11, SystemClock.elapsedRealtime() * 1000, j12, z12);
        if (this.f42564b1 == this.f42565c1) {
            if (!d2(M1)) {
                return false;
            }
            C2(lVar, i10, F0);
            E2(M1);
            return true;
        } else if (z2(j10, M1)) {
            if (this.U0.f()) {
                if (!this.U0.i(format, F0, z11)) {
                    return false;
                }
                z14 = false;
            } else {
                z14 = true;
            }
            r2(lVar, format, i10, F0, z14);
            E2(M1);
            return true;
        } else {
            if (z12 && j10 != this.f42571i1) {
                long nanoTime = System.nanoTime();
                long b10 = this.S0.b((M1 * 1000) + nanoTime);
                if (!this.U0.f()) {
                    M1 = (b10 - nanoTime) / 1000;
                }
                if (this.f42572j1 != -9223372036854775807L) {
                    j13 = M1;
                    z13 = true;
                } else {
                    j13 = M1;
                    z13 = false;
                }
                long j15 = j13;
                if (x2(j15, j11, z11) && f2(j10, z13)) {
                    return false;
                }
                if (y2(j15, j11, z11)) {
                    if (z13) {
                        C2(lVar, i10, F0);
                    } else {
                        T1(lVar, i10, F0);
                    }
                    E2(j15);
                    return true;
                } else if (this.U0.f()) {
                    this.U0.l(j10, j11);
                    if (!this.U0.i(format, F0, z11)) {
                        return false;
                    }
                    r2(lVar, format, i10, F0, false);
                    return true;
                } else if (w0.f40279a >= 21) {
                    if (j15 < 50000) {
                        if (b10 == this.f42581s1) {
                            C2(lVar, i10, F0);
                            j14 = b10;
                        } else {
                            m2(F0, b10, format);
                            s2(lVar, i10, F0, b10);
                            j14 = b10;
                        }
                        E2(j15);
                        this.f42581s1 = j14;
                        return true;
                    }
                } else if (j15 < 30000) {
                    if (j15 > 11000) {
                        try {
                            Thread.sleep((j15 - 10000) / 1000);
                        } catch (InterruptedException unused) {
                            Thread.currentThread().interrupt();
                            return false;
                        }
                    }
                    m2(F0, b10, format);
                    q2(lVar, i10, F0);
                    E2(j15);
                    return true;
                }
            }
            return false;
        }
    }

    protected boolean f2(long j10, boolean z10) {
        int Z = Z(j10);
        if (Z == 0) {
            return false;
        }
        if (z10) {
            DecoderCounters decoderCounters = this.M0;
            decoderCounters.f13488d += Z;
            decoderCounters.f13490f += this.f42576n1;
        } else {
            this.M0.f13494j++;
            D2(Z, this.f42576n1);
        }
        v0();
        if (this.U0.f()) {
            this.U0.c();
        }
        return true;
    }

    @Override // com.google.android.exoplayer2.v1, com.google.android.exoplayer2.w1
    public String getName() {
        return "MediaCodecVideoRenderer";
    }

    void h2() {
        this.f42570h1 = true;
        if (!this.f42568f1) {
            this.f42568f1 = true;
            this.T0.q(this.f42564b1);
            this.f42566d1 = true;
        }
    }

    @Override // fd.r, com.google.android.exoplayer2.v1
    public boolean isReady() {
        i iVar;
        if (super.isReady() && ((!this.U0.f() || this.U0.g()) && (this.f42568f1 || (((iVar = this.f42565c1) != null && this.f42564b1 == iVar) || y0() == null || this.f42584v1)))) {
            this.f42572j1 = -9223372036854775807L;
            return true;
        } else if (this.f42572j1 == -9223372036854775807L) {
            return false;
        } else {
            if (SystemClock.elapsedRealtime() < this.f42572j1) {
                return true;
            }
            this.f42572j1 = -9223372036854775807L;
            return false;
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // fd.r
    public void j1() {
        super.j1();
        this.f42576n1 = 0;
    }

    @Override // fd.r
    protected fd.m m0(Throwable th2, fd.q qVar) {
        return new g(th2, qVar, this.f42564b1);
    }

    @Override // com.google.android.exoplayer2.f, com.google.android.exoplayer2.s1.b
    public void n(int i10, Object obj) {
        Surface surface;
        if (i10 != 1) {
            if (i10 != 7) {
                if (i10 != 10) {
                    if (i10 != 4) {
                        if (i10 != 5) {
                            if (i10 != 13) {
                                if (i10 != 14) {
                                    super.n(i10, obj);
                                    return;
                                }
                                l0 l0Var = (l0) ne.a.e(obj);
                                if (l0Var.b() != 0 && l0Var.a() != 0 && (surface = this.f42564b1) != null) {
                                    this.U0.p(surface, l0Var);
                                    return;
                                }
                                return;
                            }
                            this.U0.q((List) ne.a.e(obj));
                            return;
                        }
                        this.S0.o(((Integer) obj).intValue());
                        return;
                    }
                    this.f42567e1 = ((Integer) obj).intValue();
                    fd.l y02 = y0();
                    if (y02 != null) {
                        y02.c(this.f42567e1);
                        return;
                    }
                    return;
                }
                int intValue = ((Integer) obj).intValue();
                if (this.f42585w1 != intValue) {
                    this.f42585w1 = intValue;
                    if (this.f42584v1) {
                        h1();
                        return;
                    }
                    return;
                }
                return;
            }
            this.f42587y1 = (l) obj;
            return;
        }
        v2(obj);
    }

    protected void n2(long j10) {
        A1(j10);
        j2(this.f42582t1);
        this.M0.f13489e++;
        h2();
        Y0(j10);
    }

    protected void q2(fd.l lVar, int i10, long j10) {
        t0.a("releaseOutputBuffer");
        lVar.releaseOutputBuffer(i10, true);
        t0.c();
        this.M0.f13489e++;
        this.f42575m1 = 0;
        if (!this.U0.f()) {
            this.f42578p1 = SystemClock.elapsedRealtime() * 1000;
            j2(this.f42582t1);
            h2();
        }
    }

    protected void s2(fd.l lVar, int i10, long j10, long j11) {
        t0.a("releaseOutputBuffer");
        lVar.f(i10, j11);
        t0.c();
        this.M0.f13489e++;
        this.f42575m1 = 0;
        if (!this.U0.f()) {
            this.f42578p1 = SystemClock.elapsedRealtime() * 1000;
            j2(this.f42582t1);
            h2();
        }
    }

    @Override // fd.r
    protected boolean t1(fd.q qVar) {
        if (this.f42564b1 == null && !B2(qVar)) {
            return false;
        }
        return true;
    }

    @Override // fd.r, com.google.android.exoplayer2.v1
    public void w(float f10, float f11) {
        super.w(f10, f11);
        this.S0.i(f10);
    }

    @Override // fd.r
    protected int w1(fd.t tVar, Format format) {
        boolean z10;
        boolean z11;
        int i10;
        int i11;
        int i12;
        int i13;
        int i14 = 0;
        if (!c0.s(format.f12706w)) {
            return w1.b(0);
        }
        if (format.f12709z != null) {
            z10 = true;
        } else {
            z10 = false;
        }
        List Z1 = Z1(this.R0, tVar, format, z10, false);
        if (z10 && Z1.isEmpty()) {
            Z1 = Z1(this.R0, tVar, format, false, false);
        }
        if (Z1.isEmpty()) {
            return w1.b(1);
        }
        if (!fd.r.x1(format)) {
            return w1.b(2);
        }
        fd.q qVar = (fd.q) Z1.get(0);
        boolean o10 = qVar.o(format);
        if (!o10) {
            for (int i15 = 1; i15 < Z1.size(); i15++) {
                fd.q qVar2 = (fd.q) Z1.get(i15);
                if (qVar2.o(format)) {
                    z11 = false;
                    o10 = true;
                    qVar = qVar2;
                    break;
                }
            }
        }
        z11 = true;
        if (o10) {
            i10 = 4;
        } else {
            i10 = 3;
        }
        if (qVar.r(format)) {
            i11 = 16;
        } else {
            i11 = 8;
        }
        if (qVar.f24990h) {
            i12 = 64;
        } else {
            i12 = 0;
        }
        if (z11) {
            i13 = IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        } else {
            i13 = 0;
        }
        if (w0.f40279a >= 26 && "video/dolby-vision".equals(format.f12706w) && !a.a(this.R0)) {
            i13 = IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER;
        }
        if (o10) {
            List Z12 = Z1(this.R0, tVar, format, z10, true);
            if (!Z12.isEmpty()) {
                fd.q qVar3 = (fd.q) fd.y.w(Z12, format).get(0);
                if (qVar3.o(format) && qVar3.r(format)) {
                    i14 = 32;
                }
            }
        }
        return w1.k(i10, i11, i14, i12, i13);
    }

    protected void w2(fd.l lVar, Surface surface) {
        lVar.d(surface);
    }

    protected boolean x2(long j10, long j11, boolean z10) {
        if (e2(j10) && !z10) {
            return true;
        }
        return false;
    }

    @Override // fd.r, com.google.android.exoplayer2.v1
    public void y(long j10, long j11) {
        super.y(j10, j11);
        if (this.U0.f()) {
            this.U0.l(j10, j11);
        }
    }

    protected boolean y2(long j10, long j11, boolean z10) {
        if (d2(j10) && !z10) {
            return true;
        }
        return false;
    }

    public h(Context context, l.b bVar, fd.t tVar, long j10, boolean z10, Handler handler, y yVar, int i10, float f10) {
        super(2, bVar, tVar, z10, f10);
        this.V0 = j10;
        this.W0 = i10;
        Context applicationContext = context.getApplicationContext();
        this.R0 = applicationContext;
        n nVar = new n(applicationContext);
        this.S0 = nVar;
        this.T0 = new y.a(handler, yVar);
        this.U0 = new d(nVar, this);
        this.X0 = S1();
        this.f42572j1 = -9223372036854775807L;
        this.f42567e1 = 1;
        this.f42582t1 = VideoSize.f14513p;
        this.f42585w1 = 0;
        O1();
    }
}
