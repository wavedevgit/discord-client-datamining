package fd;

import android.media.MediaCodec;
import android.media.MediaCrypto;
import android.media.MediaCryptoException;
import android.media.MediaFormat;
import android.media.metrics.LogSessionId;
import android.os.Bundle;
import android.os.SystemClock;
import com.google.android.exoplayer2.Format;
import com.google.android.exoplayer2.decoder.DecoderCounters;
import com.google.android.exoplayer2.decoder.DecoderReuseEvaluation;
import com.reactnativecommunity.webview.RNCWebViewManager;
import fd.l;
import fd.y;
import java.nio.ByteBuffer;
import java.nio.ByteOrder;
import java.util.ArrayDeque;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;
import mc.t1;
import ne.d0;
import ne.r0;
import ne.t0;
import ne.w0;
import qc.f;
import rc.c0;
import rc.n;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class r extends com.google.android.exoplayer2.f {
    private static final byte[] Q0 = {0, 0, 1, 103, 66, -64, 11, -38, 37, -112, 0, 0, 1, 104, -50, 15, 19, 32, 0, 0, 1, 101, -120, -124, 13, -50, 113, 24, -96, 0, 47, -65, 28, 49, -61, 39, 93, 120};
    private final l.b A;
    private int A0;
    private final t B;
    private int B0;
    private final boolean C;
    private boolean C0;
    private final float D;
    private boolean D0;
    private final qc.f E;
    private boolean E0;
    private final qc.f F;
    private long F0;
    private final qc.f G;
    private long G0;
    private final h H;
    private boolean H0;
    private final ArrayList I;
    private boolean I0;
    private final MediaCodec.BufferInfo J;
    private boolean J0;
    private final ArrayDeque K;
    private boolean K0;
    private final nc.v L;
    private com.google.android.exoplayer2.j L0;
    private Format M;
    protected DecoderCounters M0;
    private Format N;
    private c N0;
    private rc.n O;
    private long O0;
    private rc.n P;
    private boolean P0;
    private MediaCrypto Q;
    private boolean R;
    private long S;
    private float T;
    private float U;
    private l V;
    private Format W;
    private MediaFormat X;
    private boolean Y;
    private float Z;

    /* renamed from: a0  reason: collision with root package name */
    private ArrayDeque f24994a0;

    /* renamed from: b0  reason: collision with root package name */
    private b f24995b0;

    /* renamed from: c0  reason: collision with root package name */
    private q f24996c0;

    /* renamed from: d0  reason: collision with root package name */
    private int f24997d0;

    /* renamed from: e0  reason: collision with root package name */
    private boolean f24998e0;

    /* renamed from: f0  reason: collision with root package name */
    private boolean f24999f0;

    /* renamed from: g0  reason: collision with root package name */
    private boolean f25000g0;

    /* renamed from: h0  reason: collision with root package name */
    private boolean f25001h0;

    /* renamed from: i0  reason: collision with root package name */
    private boolean f25002i0;

    /* renamed from: j0  reason: collision with root package name */
    private boolean f25003j0;

    /* renamed from: k0  reason: collision with root package name */
    private boolean f25004k0;

    /* renamed from: l0  reason: collision with root package name */
    private boolean f25005l0;

    /* renamed from: m0  reason: collision with root package name */
    private boolean f25006m0;

    /* renamed from: n0  reason: collision with root package name */
    private boolean f25007n0;

    /* renamed from: o0  reason: collision with root package name */
    private i f25008o0;

    /* renamed from: p0  reason: collision with root package name */
    private long f25009p0;

    /* renamed from: q0  reason: collision with root package name */
    private int f25010q0;

    /* renamed from: r0  reason: collision with root package name */
    private int f25011r0;

    /* renamed from: s0  reason: collision with root package name */
    private ByteBuffer f25012s0;

    /* renamed from: t0  reason: collision with root package name */
    private boolean f25013t0;

    /* renamed from: u0  reason: collision with root package name */
    private boolean f25014u0;

    /* renamed from: v0  reason: collision with root package name */
    private boolean f25015v0;

    /* renamed from: w0  reason: collision with root package name */
    private boolean f25016w0;

    /* renamed from: x0  reason: collision with root package name */
    private boolean f25017x0;

    /* renamed from: y0  reason: collision with root package name */
    private boolean f25018y0;

    /* renamed from: z0  reason: collision with root package name */
    private int f25019z0;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {
        public static void a(l.a aVar, t1 t1Var) {
            LogSessionId logSessionId;
            LogSessionId a10 = t1Var.a();
            logSessionId = LogSessionId.LOG_SESSION_ID_NONE;
            if (!a10.equals(logSessionId)) {
                aVar.f24976b.setString("log-session-id", a10.getStringId());
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class c {

        /* renamed from: e  reason: collision with root package name */
        public static final c f25025e = new c(-9223372036854775807L, -9223372036854775807L, -9223372036854775807L);

        /* renamed from: a  reason: collision with root package name */
        public final long f25026a;

        /* renamed from: b  reason: collision with root package name */
        public final long f25027b;

        /* renamed from: c  reason: collision with root package name */
        public final long f25028c;

        /* renamed from: d  reason: collision with root package name */
        public final r0 f25029d = new r0();

        public c(long j10, long j11, long j12) {
            this.f25026a = j10;
            this.f25027b = j11;
            this.f25028c = j12;
        }
    }

    public r(int i10, l.b bVar, t tVar, boolean z10, float f10) {
        super(i10);
        this.A = bVar;
        this.B = (t) ne.a.e(tVar);
        this.C = z10;
        this.D = f10;
        this.E = qc.f.x();
        this.F = new qc.f(0);
        this.G = new qc.f(2);
        h hVar = new h();
        this.H = hVar;
        this.I = new ArrayList();
        this.J = new MediaCodec.BufferInfo();
        this.T = 1.0f;
        this.U = 1.0f;
        this.S = -9223372036854775807L;
        this.K = new ArrayDeque();
        o1(c.f25025e);
        hVar.u(0);
        hVar.f47092i.order(ByteOrder.nativeOrder());
        this.L = new nc.v();
        this.Z = -1.0f;
        this.f24997d0 = 0;
        this.f25019z0 = 0;
        this.f25010q0 = -1;
        this.f25011r0 = -1;
        this.f25009p0 = -9223372036854775807L;
        this.F0 = -9223372036854775807L;
        this.G0 = -9223372036854775807L;
        this.O0 = -9223372036854775807L;
        this.A0 = 0;
        this.B0 = 0;
    }

    private boolean I0() {
        if (this.f25011r0 >= 0) {
            return true;
        }
        return false;
    }

    private void J0(Format format) {
        n0();
        String str = format.f12706w;
        if (!"audio/mp4a-latm".equals(str) && !"audio/mpeg".equals(str) && !"audio/opus".equals(str)) {
            this.H.F(1);
        } else {
            this.H.F(32);
        }
        this.f25015v0 = true;
    }

    private void K0(q qVar, MediaCrypto mediaCrypto) {
        float B0;
        boolean z10;
        String str = qVar.f24983a;
        int i10 = w0.f40295a;
        float f10 = -1.0f;
        if (i10 < 23) {
            B0 = -1.0f;
        } else {
            B0 = B0(this.U, this.M, M());
        }
        if (B0 > this.D) {
            f10 = B0;
        }
        b1(this.M);
        long elapsedRealtime = SystemClock.elapsedRealtime();
        l.a E0 = E0(qVar, this.M, mediaCrypto, f10);
        if (i10 >= 31) {
            a.a(E0, L());
        }
        try {
            t0.a("createCodec:" + str);
            this.V = this.A.a(E0);
            t0.c();
            long elapsedRealtime2 = SystemClock.elapsedRealtime();
            if (!qVar.o(this.M)) {
                ne.y.i("MediaCodecRenderer", w0.D("Format exceeds selected codec's capabilities [%s, %s]", Format.i(this.M), str));
            }
            this.f24996c0 = qVar;
            this.Z = f10;
            this.W = this.M;
            this.f24997d0 = d0(str);
            this.f24998e0 = e0(str, this.W);
            this.f24999f0 = j0(str);
            this.f25000g0 = l0(str);
            this.f25001h0 = g0(str);
            this.f25002i0 = h0(str);
            this.f25003j0 = f0(str);
            this.f25004k0 = k0(str, this.W);
            boolean z11 = false;
            if (!i0(qVar) && !A0()) {
                z10 = false;
            } else {
                z10 = true;
            }
            this.f25007n0 = z10;
            if (this.V.e()) {
                this.f25018y0 = true;
                this.f25019z0 = 1;
                if (this.f24997d0 != 0) {
                    z11 = true;
                }
                this.f25005l0 = z11;
            }
            if ("c2.android.mp3.decoder".equals(qVar.f24983a)) {
                this.f25008o0 = new i();
            }
            if (getState() == 2) {
                this.f25009p0 = SystemClock.elapsedRealtime() + 1000;
            }
            this.M0.f13485a++;
            T0(str, E0, elapsedRealtime2, elapsedRealtime2 - elapsedRealtime);
        } catch (Throwable th2) {
            t0.c();
            throw th2;
        }
    }

    private boolean M0(long j10) {
        int size = this.I.size();
        for (int i10 = 0; i10 < size; i10++) {
            if (((Long) this.I.get(i10)).longValue() == j10) {
                this.I.remove(i10);
                return true;
            }
        }
        return false;
    }

    private static boolean N0(IllegalStateException illegalStateException) {
        if (w0.f40295a >= 21 && O0(illegalStateException)) {
            return true;
        }
        StackTraceElement[] stackTrace = illegalStateException.getStackTrace();
        if (stackTrace.length > 0 && stackTrace[0].getClassName().equals("android.media.MediaCodec")) {
            return true;
        }
        return false;
    }

    private static boolean O0(IllegalStateException illegalStateException) {
        return illegalStateException instanceof MediaCodec.CodecException;
    }

    private static boolean P0(IllegalStateException illegalStateException) {
        if (illegalStateException instanceof MediaCodec.CodecException) {
            return ((MediaCodec.CodecException) illegalStateException).isRecoverable();
        }
        return false;
    }

    /* JADX WARN: Removed duplicated region for block: B:35:0x009e  */
    /* JADX WARN: Removed duplicated region for block: B:36:0x00a1  */
    /* JADX WARN: Removed duplicated region for block: B:54:0x00b0 A[SYNTHETIC] */
    /* JADX WARN: Removed duplicated region for block: B:60:0x004a A[SYNTHETIC] */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private void R0(android.media.MediaCrypto r8, boolean r9) {
        /*
            r7 = this;
            java.util.ArrayDeque r0 = r7.f24994a0
            r1 = 0
            if (r0 != 0) goto L3a
            java.util.List r0 = r7.x0(r9)     // Catch: fd.y.c -> L18
            java.util.ArrayDeque r2 = new java.util.ArrayDeque     // Catch: fd.y.c -> L18
            r2.<init>()     // Catch: fd.y.c -> L18
            r7.f24994a0 = r2     // Catch: fd.y.c -> L18
            boolean r3 = r7.C     // Catch: fd.y.c -> L18
            if (r3 == 0) goto L1a
            r2.addAll(r0)     // Catch: fd.y.c -> L18
            goto L2c
        L18:
            r8 = move-exception
            goto L2f
        L1a:
            boolean r2 = r0.isEmpty()     // Catch: fd.y.c -> L18
            if (r2 != 0) goto L2c
            java.util.ArrayDeque r2 = r7.f24994a0     // Catch: fd.y.c -> L18
            r3 = 0
            java.lang.Object r0 = r0.get(r3)     // Catch: fd.y.c -> L18
            fd.q r0 = (fd.q) r0     // Catch: fd.y.c -> L18
            r2.add(r0)     // Catch: fd.y.c -> L18
        L2c:
            r7.f24995b0 = r1     // Catch: fd.y.c -> L18
            goto L3a
        L2f:
            fd.r$b r0 = new fd.r$b
            com.google.android.exoplayer2.Format r1 = r7.M
            r2 = -49998(0xffffffffffff3cb2, float:NaN)
            r0.<init>(r1, r8, r9, r2)
            throw r0
        L3a:
            java.util.ArrayDeque r0 = r7.f24994a0
            boolean r0 = r0.isEmpty()
            if (r0 != 0) goto Lb6
            java.util.ArrayDeque r0 = r7.f24994a0
            java.lang.Object r0 = r0.peekFirst()
            fd.q r0 = (fd.q) r0
        L4a:
            fd.l r2 = r7.V
            if (r2 != 0) goto Lb3
            java.util.ArrayDeque r2 = r7.f24994a0
            java.lang.Object r2 = r2.peekFirst()
            fd.q r2 = (fd.q) r2
            boolean r3 = r7.t1(r2)
            if (r3 != 0) goto L5d
            return
        L5d:
            r7.K0(r2, r8)     // Catch: java.lang.Exception -> L61
            goto L4a
        L61:
            r3 = move-exception
            java.lang.String r4 = "MediaCodecRenderer"
            if (r2 != r0) goto L76
            java.lang.String r3 = "Preferred decoder instantiation failed. Sleeping for 50ms then retrying."
            ne.y.i(r4, r3)     // Catch: java.lang.Exception -> L74
            r5 = 50
            java.lang.Thread.sleep(r5)     // Catch: java.lang.Exception -> L74
            r7.K0(r2, r8)     // Catch: java.lang.Exception -> L74
            goto L4a
        L74:
            r3 = move-exception
            goto L77
        L76:
            throw r3     // Catch: java.lang.Exception -> L74
        L77:
            java.lang.StringBuilder r5 = new java.lang.StringBuilder
            r5.<init>()
            java.lang.String r6 = "Failed to initialize decoder: "
            r5.append(r6)
            r5.append(r2)
            java.lang.String r5 = r5.toString()
            ne.y.j(r4, r5, r3)
            java.util.ArrayDeque r4 = r7.f24994a0
            r4.removeFirst()
            fd.r$b r4 = new fd.r$b
            com.google.android.exoplayer2.Format r5 = r7.M
            r4.<init>(r5, r3, r9, r2)
            r7.S0(r4)
            fd.r$b r2 = r7.f24995b0
            if (r2 != 0) goto La1
            r7.f24995b0 = r4
            goto La7
        La1:
            fd.r$b r2 = fd.r.b.a(r2, r4)
            r7.f24995b0 = r2
        La7:
            java.util.ArrayDeque r2 = r7.f24994a0
            boolean r2 = r2.isEmpty()
            if (r2 != 0) goto Lb0
            goto L4a
        Lb0:
            fd.r$b r8 = r7.f24995b0
            throw r8
        Lb3:
            r7.f24994a0 = r1
            return
        Lb6:
            fd.r$b r8 = new fd.r$b
            com.google.android.exoplayer2.Format r0 = r7.M
            r2 = -49999(0xffffffffffff3cb1, float:NaN)
            r8.<init>(r0, r1, r9, r2)
            throw r8
        */
        throw new UnsupportedOperationException("Method not decompiled: fd.r.R0(android.media.MediaCrypto, boolean):void");
    }

    private void a0() {
        String str;
        ne.a.g(!this.H0);
        lc.x J = J();
        this.G.h();
        do {
            this.G.h();
            int X = X(J, this.G, 0);
            if (X != -5) {
                if (X != -4) {
                    if (X == -3) {
                        return;
                    }
                    throw new IllegalStateException();
                } else if (this.G.o()) {
                    this.H0 = true;
                    return;
                } else {
                    if (this.J0) {
                        Format format = (Format) ne.a.e(this.M);
                        this.N = format;
                        W0(format, null);
                        this.J0 = false;
                    }
                    this.G.v();
                    Format format2 = this.M;
                    if (format2 != null && (str = format2.f12706w) != null && str.equals("audio/opus")) {
                        this.L.a(this.G, this.M.f12708y);
                    }
                }
            } else {
                V0(J);
                return;
            }
        } while (this.H.z(this.G));
        this.f25016w0 = true;
    }

    private boolean b0(long j10, long j11) {
        boolean z10;
        ne.a.g(!this.I0);
        if (this.H.E()) {
            h hVar = this.H;
            z10 = false;
            if (!d1(j10, j11, null, hVar.f47092i, this.f25011r0, 0, hVar.D(), this.H.B(), this.H.l(), this.H.o(), this.N)) {
                return false;
            }
            Y0(this.H.C());
            this.H.h();
        } else {
            z10 = false;
        }
        if (this.H0) {
            this.I0 = true;
            return z10;
        }
        if (this.f25016w0) {
            ne.a.g(this.H.z(this.G));
            this.f25016w0 = z10;
        }
        if (this.f25017x0) {
            if (this.H.E()) {
                return true;
            }
            n0();
            this.f25017x0 = z10;
            Q0();
            if (!this.f25015v0) {
                return z10;
            }
        }
        a0();
        if (this.H.E()) {
            this.H.v();
        }
        if (this.H.E() || this.H0 || this.f25017x0) {
            return true;
        }
        return z10;
    }

    private void c1() {
        int i10 = this.B0;
        if (i10 != 1) {
            if (i10 != 2) {
                if (i10 != 3) {
                    this.I0 = true;
                    i1();
                    return;
                }
                g1();
                return;
            }
            u0();
            z1();
            return;
        }
        u0();
    }

    private int d0(String str) {
        int i10 = w0.f40295a;
        if (i10 <= 25 && "OMX.Exynos.avc.dec.secure".equals(str)) {
            String str2 = w0.f40298d;
            if (str2.startsWith("SM-T585") || str2.startsWith("SM-A510") || str2.startsWith("SM-A520") || str2.startsWith("SM-J700")) {
                return 2;
            }
        }
        if (i10 < 24) {
            if ("OMX.Nvidia.h264.decode".equals(str) || "OMX.Nvidia.h264.decode.secure".equals(str)) {
                String str3 = w0.f40296b;
                if ("flounder".equals(str3) || "flounder_lte".equals(str3) || "grouper".equals(str3) || "tilapia".equals(str3)) {
                    return 1;
                }
                return 0;
            }
            return 0;
        }
        return 0;
    }

    private static boolean e0(String str, Format format) {
        if (w0.f40295a < 21 && format.f12708y.isEmpty() && "OMX.MTK.VIDEO.DECODER.AVC".equals(str)) {
            return true;
        }
        return false;
    }

    private void e1() {
        this.E0 = true;
        MediaFormat outputFormat = this.V.getOutputFormat();
        if (this.f24997d0 != 0 && outputFormat.getInteger("width") == 32 && outputFormat.getInteger("height") == 32) {
            this.f25006m0 = true;
            return;
        }
        if (this.f25004k0) {
            outputFormat.setInteger("channel-count", 1);
        }
        this.X = outputFormat;
        this.Y = true;
    }

    private static boolean f0(String str) {
        if (w0.f40295a < 21 && "OMX.SEC.mp3.dec".equals(str) && "samsung".equals(w0.f40297c)) {
            String str2 = w0.f40296b;
            if (str2.startsWith("baffin") || str2.startsWith("grand") || str2.startsWith("fortuna") || str2.startsWith("gprimelte") || str2.startsWith("j2y18lte") || str2.startsWith("ms01")) {
                return true;
            }
            return false;
        }
        return false;
    }

    private boolean f1(int i10) {
        lc.x J = J();
        this.E.h();
        int X = X(J, this.E, i10 | 4);
        if (X == -5) {
            V0(J);
            return true;
        } else if (X == -4 && this.E.o()) {
            this.H0 = true;
            c1();
            return false;
        } else {
            return false;
        }
    }

    private static boolean g0(String str) {
        int i10 = w0.f40295a;
        if (i10 > 23 || !"OMX.google.vorbis.decoder".equals(str)) {
            if (i10 <= 19) {
                String str2 = w0.f40296b;
                if ("hb2000".equals(str2) || "stvm8".equals(str2)) {
                    if ("OMX.amlogic.avc.decoder.awesome".equals(str) || "OMX.amlogic.avc.decoder.awesome.secure".equals(str)) {
                        return true;
                    }
                    return false;
                }
                return false;
            }
            return false;
        }
        return true;
    }

    private void g1() {
        h1();
        Q0();
    }

    private static boolean h0(String str) {
        if (w0.f40295a == 21 && "OMX.google.aac.decoder".equals(str)) {
            return true;
        }
        return false;
    }

    private static boolean i0(q qVar) {
        String str = qVar.f24983a;
        int i10 = w0.f40295a;
        if (i10 > 25 || !"OMX.rk.video_decoder.avc".equals(str)) {
            if (i10 > 17 || !"OMX.allwinner.video.decoder.avc".equals(str)) {
                if (i10 > 29 || (!"OMX.broadcom.video_decoder.tunnel".equals(str) && !"OMX.broadcom.video_decoder.tunnel.secure".equals(str) && !"OMX.bcm.vdec.avc.tunnel".equals(str) && !"OMX.bcm.vdec.avc.tunnel.secure".equals(str) && !"OMX.bcm.vdec.hevc.tunnel".equals(str) && !"OMX.bcm.vdec.hevc.tunnel.secure".equals(str))) {
                    if ("Amazon".equals(w0.f40297c) && "AFTS".equals(w0.f40298d) && qVar.f24989g) {
                        return true;
                    }
                    return false;
                }
                return true;
            }
            return true;
        }
        return true;
    }

    private static boolean j0(String str) {
        int i10 = w0.f40295a;
        if (i10 >= 18) {
            if (i10 != 18 || (!"OMX.SEC.avc.dec".equals(str) && !"OMX.SEC.avc.dec.secure".equals(str))) {
                if (i10 == 19 && w0.f40298d.startsWith("SM-G800")) {
                    if (!"OMX.Exynos.avc.dec".equals(str) && !"OMX.Exynos.avc.dec.secure".equals(str)) {
                        return false;
                    }
                    return true;
                }
                return false;
            }
            return true;
        }
        return true;
    }

    private static boolean k0(String str, Format format) {
        if (w0.f40295a <= 18 && format.J == 1 && "OMX.MTK.AUDIO.DECODER.MP3".equals(str)) {
            return true;
        }
        return false;
    }

    private static boolean l0(String str) {
        if (w0.f40295a == 29 && "c2.android.aac.decoder".equals(str)) {
            return true;
        }
        return false;
    }

    private void l1() {
        this.f25010q0 = -1;
        this.F.f47092i = null;
    }

    private void m1() {
        this.f25011r0 = -1;
        this.f25012s0 = null;
    }

    private void n0() {
        this.f25017x0 = false;
        this.H.h();
        this.G.h();
        this.f25016w0 = false;
        this.f25015v0 = false;
        this.L.d();
    }

    private void n1(rc.n nVar) {
        rc.n.f(this.O, nVar);
        this.O = nVar;
    }

    private boolean o0() {
        if (this.C0) {
            this.A0 = 1;
            if (!this.f24999f0 && !this.f25001h0) {
                this.B0 = 1;
            } else {
                this.B0 = 3;
                return false;
            }
        }
        return true;
    }

    private void o1(c cVar) {
        this.N0 = cVar;
        long j10 = cVar.f25028c;
        if (j10 != -9223372036854775807L) {
            this.P0 = true;
            X0(j10);
        }
    }

    private void p0() {
        if (this.C0) {
            this.A0 = 1;
            this.B0 = 3;
            return;
        }
        g1();
    }

    private boolean q0() {
        if (this.C0) {
            this.A0 = 1;
            if (!this.f24999f0 && !this.f25001h0) {
                this.B0 = 2;
            } else {
                this.B0 = 3;
                return false;
            }
        } else {
            z1();
        }
        return true;
    }

    private boolean r0(long j10, long j11) {
        boolean z10;
        boolean d12;
        boolean z11;
        l lVar;
        ByteBuffer byteBuffer;
        int i10;
        MediaCodec.BufferInfo bufferInfo;
        int h10;
        boolean z12;
        if (!I0()) {
            if (this.f25002i0 && this.D0) {
                try {
                    h10 = this.V.h(this.J);
                } catch (IllegalStateException unused) {
                    c1();
                    if (this.I0) {
                        h1();
                    }
                    return false;
                }
            } else {
                h10 = this.V.h(this.J);
            }
            if (h10 < 0) {
                if (h10 == -2) {
                    e1();
                    return true;
                }
                if (this.f25007n0 && (this.H0 || this.A0 == 2)) {
                    c1();
                }
                return false;
            } else if (this.f25006m0) {
                this.f25006m0 = false;
                this.V.releaseOutputBuffer(h10, false);
                return true;
            } else {
                MediaCodec.BufferInfo bufferInfo2 = this.J;
                if (bufferInfo2.size == 0 && (bufferInfo2.flags & 4) != 0) {
                    c1();
                    return false;
                }
                this.f25011r0 = h10;
                ByteBuffer outputBuffer = this.V.getOutputBuffer(h10);
                this.f25012s0 = outputBuffer;
                if (outputBuffer != null) {
                    outputBuffer.position(this.J.offset);
                    ByteBuffer byteBuffer2 = this.f25012s0;
                    MediaCodec.BufferInfo bufferInfo3 = this.J;
                    byteBuffer2.limit(bufferInfo3.offset + bufferInfo3.size);
                }
                if (this.f25003j0) {
                    MediaCodec.BufferInfo bufferInfo4 = this.J;
                    if (bufferInfo4.presentationTimeUs == 0 && (bufferInfo4.flags & 4) != 0) {
                        long j12 = this.F0;
                        if (j12 != -9223372036854775807L) {
                            bufferInfo4.presentationTimeUs = j12;
                        }
                    }
                }
                this.f25013t0 = M0(this.J.presentationTimeUs);
                long j13 = this.G0;
                long j14 = this.J.presentationTimeUs;
                if (j13 == j14) {
                    z12 = true;
                } else {
                    z12 = false;
                }
                this.f25014u0 = z12;
                A1(j14);
            }
        }
        if (this.f25002i0 && this.D0) {
            try {
                lVar = this.V;
                byteBuffer = this.f25012s0;
                i10 = this.f25011r0;
                bufferInfo = this.J;
                z10 = false;
            } catch (IllegalStateException unused2) {
                z10 = false;
            }
            try {
                d12 = d1(j10, j11, lVar, byteBuffer, i10, bufferInfo.flags, 1, bufferInfo.presentationTimeUs, this.f25013t0, this.f25014u0, this.N);
            } catch (IllegalStateException unused3) {
                c1();
                if (this.I0) {
                    h1();
                }
                return z10;
            }
        } else {
            z10 = false;
            l lVar2 = this.V;
            ByteBuffer byteBuffer3 = this.f25012s0;
            int i11 = this.f25011r0;
            MediaCodec.BufferInfo bufferInfo5 = this.J;
            d12 = d1(j10, j11, lVar2, byteBuffer3, i11, bufferInfo5.flags, 1, bufferInfo5.presentationTimeUs, this.f25013t0, this.f25014u0, this.N);
        }
        if (d12) {
            Y0(this.J.presentationTimeUs);
            if ((this.J.flags & 4) != 0) {
                z11 = true;
            } else {
                z11 = z10;
            }
            m1();
            if (!z11) {
                return true;
            }
            c1();
        }
        return z10;
    }

    private void r1(rc.n nVar) {
        rc.n.f(this.P, nVar);
        this.P = nVar;
    }

    private boolean s0(q qVar, Format format, rc.n nVar, rc.n nVar2) {
        qc.b d10;
        qc.b d11;
        boolean h10;
        if (nVar == nVar2) {
            return false;
        }
        if (nVar2 != null && nVar != null && (d10 = nVar2.d()) != null && (d11 = nVar.d()) != null && d10.getClass().equals(d11.getClass())) {
            if (!(d10 instanceof c0)) {
                return false;
            }
            c0 c0Var = (c0) d10;
            if (!nVar2.a().equals(nVar.a()) || w0.f40295a < 23) {
                return true;
            }
            UUID uuid = lc.d.f37073e;
            if (!uuid.equals(nVar.a()) && !uuid.equals(nVar2.a())) {
                if (c0Var.f48132c) {
                    h10 = false;
                } else {
                    h10 = nVar2.h(format.f12706w);
                }
                if (qVar.f24989g || !h10) {
                    return false;
                }
                return true;
            }
        }
        return true;
    }

    private boolean s1(long j10) {
        if (this.S != -9223372036854775807L && SystemClock.elapsedRealtime() - j10 >= this.S) {
            return false;
        }
        return true;
    }

    private boolean t0() {
        int i10;
        if (this.V == null || (i10 = this.A0) == 2 || this.H0) {
            return false;
        }
        if (i10 == 0 && u1()) {
            p0();
        }
        if (this.f25010q0 < 0) {
            int g10 = this.V.g();
            this.f25010q0 = g10;
            if (g10 < 0) {
                return false;
            }
            this.F.f47092i = this.V.getInputBuffer(g10);
            this.F.h();
        }
        if (this.A0 == 1) {
            if (!this.f25007n0) {
                this.D0 = true;
                this.V.queueInputBuffer(this.f25010q0, 0, 0, 0L, 4);
                l1();
            }
            this.A0 = 2;
            return false;
        } else if (this.f25005l0) {
            this.f25005l0 = false;
            ByteBuffer byteBuffer = this.F.f47092i;
            byte[] bArr = Q0;
            byteBuffer.put(bArr);
            this.V.queueInputBuffer(this.f25010q0, 0, bArr.length, 0L, 0);
            l1();
            this.C0 = true;
            return true;
        } else {
            if (this.f25019z0 == 1) {
                for (int i11 = 0; i11 < this.W.f12708y.size(); i11++) {
                    this.F.f47092i.put((byte[]) this.W.f12708y.get(i11));
                }
                this.f25019z0 = 2;
            }
            int position = this.F.f47092i.position();
            lc.x J = J();
            try {
                int X = X(J, this.F, 0);
                if (h() || this.F.r()) {
                    this.G0 = this.F0;
                }
                if (X == -3) {
                    return false;
                }
                if (X == -5) {
                    if (this.f25019z0 == 2) {
                        this.F.h();
                        this.f25019z0 = 1;
                    }
                    V0(J);
                    return true;
                } else if (this.F.o()) {
                    if (this.f25019z0 == 2) {
                        this.F.h();
                        this.f25019z0 = 1;
                    }
                    this.H0 = true;
                    if (!this.C0) {
                        c1();
                        return false;
                    }
                    try {
                        if (!this.f25007n0) {
                            this.D0 = true;
                            this.V.queueInputBuffer(this.f25010q0, 0, 0, 0L, 4);
                            l1();
                        }
                        return false;
                    } catch (MediaCodec.CryptoException e10) {
                        throw G(e10, this.M, w0.Y(e10.getErrorCode()));
                    }
                } else if (!this.C0 && !this.F.q()) {
                    this.F.h();
                    if (this.f25019z0 == 2) {
                        this.f25019z0 = 1;
                    }
                    return true;
                } else {
                    boolean w10 = this.F.w();
                    if (w10) {
                        this.F.f47091e.b(position);
                    }
                    if (this.f24998e0 && !w10) {
                        d0.b(this.F.f47092i);
                        if (this.F.f47092i.position() == 0) {
                            return true;
                        }
                        this.f24998e0 = false;
                    }
                    qc.f fVar = this.F;
                    long j10 = fVar.f47094p;
                    i iVar = this.f25008o0;
                    if (iVar != null) {
                        j10 = iVar.d(this.M, fVar);
                        this.F0 = Math.max(this.F0, this.f25008o0.b(this.M));
                    }
                    long j11 = j10;
                    if (this.F.l()) {
                        this.I.add(Long.valueOf(j11));
                    }
                    if (this.J0) {
                        if (!this.K.isEmpty()) {
                            ((c) this.K.peekLast()).f25029d.a(j11, this.M);
                        } else {
                            this.N0.f25029d.a(j11, this.M);
                        }
                        this.J0 = false;
                    }
                    this.F0 = Math.max(this.F0, j11);
                    this.F.v();
                    if (this.F.k()) {
                        H0(this.F);
                    }
                    a1(this.F);
                    try {
                        if (w10) {
                            this.V.a(this.f25010q0, 0, this.F.f47091e, j11, 0);
                        } else {
                            this.V.queueInputBuffer(this.f25010q0, 0, this.F.f47092i.limit(), j11, 0);
                        }
                        l1();
                        this.C0 = true;
                        this.f25019z0 = 0;
                        this.M0.f13487c++;
                        return true;
                    } catch (MediaCodec.CryptoException e11) {
                        throw G(e11, this.M, w0.Y(e11.getErrorCode()));
                    }
                }
            } catch (f.a e12) {
                S0(e12);
                f1(0);
                u0();
                return true;
            }
        }
    }

    private void u0() {
        try {
            this.V.flush();
        } finally {
            j1();
        }
    }

    private List x0(boolean z10) {
        List D0 = D0(this.B, this.M, z10);
        if (D0.isEmpty() && z10) {
            List D02 = D0(this.B, this.M, false);
            if (!D02.isEmpty()) {
                ne.y.i("MediaCodecRenderer", "Drm session requires secure decoder for " + this.M.f12706w + ", but no secure decoder available. Trying to proceed with " + D02 + ".");
            }
            return D02;
        }
        return D0;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public static boolean x1(Format format) {
        int i10 = format.R;
        if (i10 != 0 && i10 != 2) {
            return false;
        }
        return true;
    }

    private boolean y1(Format format) {
        if (w0.f40295a >= 23 && this.V != null && this.B0 != 3 && getState() != 0) {
            float B0 = B0(this.U, format, M());
            float f10 = this.Z;
            if (f10 == B0) {
                return true;
            }
            if (B0 == -1.0f) {
                p0();
                return false;
            } else if (f10 == -1.0f && B0 <= this.D) {
                return true;
            } else {
                Bundle bundle = new Bundle();
                bundle.putFloat("operating-rate", B0);
                this.V.setParameters(bundle);
                this.Z = B0;
            }
        }
        return true;
    }

    private void z1() {
        qc.b d10 = this.P.d();
        if (d10 instanceof c0) {
            try {
                this.Q.setMediaDrmSession(((c0) d10).f48131b);
            } catch (MediaCryptoException e10) {
                throw G(e10, this.M, 6006);
            }
        }
        n1(this.P);
        this.A0 = 0;
        this.B0 = 0;
    }

    protected boolean A0() {
        return false;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final void A1(long j10) {
        Format format = (Format) this.N0.f25029d.j(j10);
        if (format == null && this.P0 && this.X != null) {
            format = (Format) this.N0.f25029d.i();
        }
        if (format != null) {
            this.N = format;
        } else if (!this.Y || this.N == null) {
            return;
        }
        W0(this.N, this.X);
        this.Y = false;
        this.P0 = false;
    }

    protected abstract float B0(float f10, Format format, Format[] formatArr);

    /* JADX INFO: Access modifiers changed from: protected */
    public final MediaFormat C0() {
        return this.X;
    }

    protected abstract List D0(t tVar, Format format, boolean z10);

    protected abstract l.a E0(q qVar, Format format, MediaCrypto mediaCrypto, float f10);

    /* JADX INFO: Access modifiers changed from: protected */
    public final long F0() {
        return this.N0.f25028c;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public float G0() {
        return this.T;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final boolean L0(Format format) {
        if (this.P == null && v1(format)) {
            return true;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // com.google.android.exoplayer2.f
    public void O() {
        this.M = null;
        o1(c.f25025e);
        this.K.clear();
        w0();
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // com.google.android.exoplayer2.f
    public void P(boolean z10, boolean z11) {
        this.M0 = new DecoderCounters();
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // com.google.android.exoplayer2.f
    public void Q(long j10, boolean z10) {
        this.H0 = false;
        this.I0 = false;
        this.K0 = false;
        if (this.f25015v0) {
            this.H.h();
            this.G.h();
            this.f25016w0 = false;
            this.L.d();
        } else {
            v0();
        }
        if (this.N0.f25029d.l() > 0) {
            this.J0 = true;
        }
        this.N0.f25029d.c();
        this.K.clear();
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final void Q0() {
        Format format;
        boolean z10;
        if (this.V == null && !this.f25015v0 && (format = this.M) != null) {
            if (L0(format)) {
                J0(this.M);
                return;
            }
            n1(this.P);
            String str = this.M.f12706w;
            rc.n nVar = this.O;
            if (nVar != null) {
                qc.b d10 = nVar.d();
                if (this.Q == null) {
                    if (d10 == null) {
                        if (this.O.getError() == null) {
                            return;
                        }
                    } else if (d10 instanceof c0) {
                        c0 c0Var = (c0) d10;
                        try {
                            MediaCrypto mediaCrypto = new MediaCrypto(c0Var.f48130a, c0Var.f48131b);
                            this.Q = mediaCrypto;
                            if (!c0Var.f48132c && mediaCrypto.requiresSecureDecoderComponent(str)) {
                                z10 = true;
                            } else {
                                z10 = false;
                            }
                            this.R = z10;
                        } catch (MediaCryptoException e10) {
                            throw G(e10, this.M, 6006);
                        }
                    }
                }
                if (c0.f48129d && (d10 instanceof c0)) {
                    int state = this.O.getState();
                    if (state != 1) {
                        if (state != 4) {
                            return;
                        }
                    } else {
                        n.a aVar = (n.a) ne.a.e(this.O.getError());
                        throw G(aVar, this.M, aVar.f48242d);
                    }
                }
            }
            try {
                R0(this.Q, this.R);
            } catch (b e11) {
                throw G(e11, this.M, RNCWebViewManager.COMMAND_RELEASE);
            }
        }
    }

    protected abstract void S0(Exception exc);

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // com.google.android.exoplayer2.f
    public void T() {
        try {
            n0();
            h1();
        } finally {
            r1(null);
        }
    }

    protected abstract void T0(String str, l.a aVar, long j10, long j11);

    protected abstract void U0(String str);

    /* JADX INFO: Access modifiers changed from: protected */
    /* JADX WARN: Code restructure failed: missing block: B:38:0x0080, code lost:
        if (q0() == false) goto L45;
     */
    /* JADX WARN: Code restructure failed: missing block: B:39:0x0082, code lost:
        r7 = 2;
     */
    /* JADX WARN: Code restructure failed: missing block: B:57:0x00b3, code lost:
        if (q0() == false) goto L45;
     */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public com.google.android.exoplayer2.decoder.DecoderReuseEvaluation V0(lc.x r12) {
        /*
            Method dump skipped, instructions count: 245
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: fd.r.V0(lc.x):com.google.android.exoplayer2.decoder.DecoderReuseEvaluation");
    }

    /* JADX WARN: Code restructure failed: missing block: B:13:0x0034, code lost:
        if (r4 >= r0) goto L14;
     */
    @Override // com.google.android.exoplayer2.f
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    protected void W(com.google.android.exoplayer2.Format[] r13, long r14, long r16) {
        /*
            r12 = this;
            fd.r$c r13 = r12.N0
            long r0 = r13.f25028c
            r2 = -9223372036854775807(0x8000000000000001, double:-4.9E-324)
            int r13 = (r0 > r2 ? 1 : (r0 == r2 ? 0 : -1))
            if (r13 != 0) goto L1e
            fd.r$c r4 = new fd.r$c
            r5 = -9223372036854775807(0x8000000000000001, double:-4.9E-324)
            r7 = r14
            r9 = r16
            r4.<init>(r5, r7, r9)
            r12.o1(r4)
            return
        L1e:
            java.util.ArrayDeque r13 = r12.K
            boolean r13 = r13.isEmpty()
            if (r13 == 0) goto L52
            long r0 = r12.F0
            int r13 = (r0 > r2 ? 1 : (r0 == r2 ? 0 : -1))
            if (r13 == 0) goto L36
            long r4 = r12.O0
            int r13 = (r4 > r2 ? 1 : (r4 == r2 ? 0 : -1))
            if (r13 == 0) goto L52
            int r13 = (r4 > r0 ? 1 : (r4 == r0 ? 0 : -1))
            if (r13 < 0) goto L52
        L36:
            fd.r$c r5 = new fd.r$c
            r6 = -9223372036854775807(0x8000000000000001, double:-4.9E-324)
            r8 = r14
            r10 = r16
            r5.<init>(r6, r8, r10)
            r12.o1(r5)
            fd.r$c r13 = r12.N0
            long r13 = r13.f25028c
            int r13 = (r13 > r2 ? 1 : (r13 == r2 ? 0 : -1))
            if (r13 == 0) goto L51
            r12.Z0()
        L51:
            return
        L52:
            java.util.ArrayDeque r13 = r12.K
            fd.r$c r5 = new fd.r$c
            long r6 = r12.F0
            r8 = r14
            r10 = r16
            r5.<init>(r6, r8, r10)
            r13.add(r5)
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: fd.r.W(com.google.android.exoplayer2.Format[], long, long):void");
    }

    protected abstract void W0(Format format, MediaFormat mediaFormat);

    /* JADX INFO: Access modifiers changed from: protected */
    public void Y0(long j10) {
        this.O0 = j10;
        while (!this.K.isEmpty() && j10 >= ((c) this.K.peek()).f25026a) {
            o1((c) this.K.poll());
            Z0();
        }
    }

    @Override // com.google.android.exoplayer2.w1
    public final int a(Format format) {
        try {
            return w1(this.B, format);
        } catch (y.c e10) {
            throw G(e10, format, 4002);
        }
    }

    protected abstract void a1(qc.f fVar);

    protected abstract DecoderReuseEvaluation c0(q qVar, Format format, Format format2);

    @Override // com.google.android.exoplayer2.v1
    public boolean d() {
        return this.I0;
    }

    protected abstract boolean d1(long j10, long j11, l lVar, ByteBuffer byteBuffer, int i10, int i11, int i12, long j12, boolean z10, boolean z11, Format format);

    /* JADX INFO: Access modifiers changed from: protected */
    /* JADX WARN: Multi-variable type inference failed */
    /* JADX WARN: Type inference failed for: r0v0, types: [rc.n, android.media.MediaCrypto] */
    public void h1() {
        try {
            l lVar = this.V;
            if (lVar != null) {
                lVar.release();
                this.M0.f13486b++;
                U0(this.f24996c0.f24983a);
            }
            this.V = null;
            try {
                MediaCrypto mediaCrypto = this.Q;
                if (mediaCrypto != null) {
                    mediaCrypto.release();
                }
            } finally {
            }
        } catch (Throwable th2) {
            this.V = null;
            try {
                MediaCrypto mediaCrypto2 = this.Q;
                if (mediaCrypto2 != null) {
                    mediaCrypto2.release();
                }
                throw th2;
            } finally {
            }
        }
    }

    @Override // com.google.android.exoplayer2.v1
    public boolean isReady() {
        if (this.M != null) {
            if (!N() && !I0()) {
                if (this.f25009p0 != -9223372036854775807L && SystemClock.elapsedRealtime() < this.f25009p0) {
                    return true;
                }
                return false;
            }
            return true;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public void j1() {
        l1();
        m1();
        this.f25009p0 = -9223372036854775807L;
        this.D0 = false;
        this.C0 = false;
        this.f25005l0 = false;
        this.f25006m0 = false;
        this.f25013t0 = false;
        this.f25014u0 = false;
        this.I.clear();
        this.F0 = -9223372036854775807L;
        this.G0 = -9223372036854775807L;
        this.O0 = -9223372036854775807L;
        i iVar = this.f25008o0;
        if (iVar != null) {
            iVar.c();
        }
        this.A0 = 0;
        this.B0 = 0;
        this.f25019z0 = this.f25018y0 ? 1 : 0;
    }

    protected void k1() {
        j1();
        this.L0 = null;
        this.f25008o0 = null;
        this.f24994a0 = null;
        this.f24996c0 = null;
        this.W = null;
        this.X = null;
        this.Y = false;
        this.E0 = false;
        this.Z = -1.0f;
        this.f24997d0 = 0;
        this.f24998e0 = false;
        this.f24999f0 = false;
        this.f25000g0 = false;
        this.f25001h0 = false;
        this.f25002i0 = false;
        this.f25003j0 = false;
        this.f25004k0 = false;
        this.f25007n0 = false;
        this.f25018y0 = false;
        this.f25019z0 = 0;
        this.R = false;
    }

    protected m m0(Throwable th2, q qVar) {
        return new m(th2, qVar);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final void p1() {
        this.K0 = true;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final void q1(com.google.android.exoplayer2.j jVar) {
        this.L0 = jVar;
    }

    protected boolean t1(q qVar) {
        return true;
    }

    protected boolean u1() {
        return false;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final boolean v0() {
        boolean w02 = w0();
        if (w02) {
            Q0();
        }
        return w02;
    }

    protected boolean v1(Format format) {
        return false;
    }

    @Override // com.google.android.exoplayer2.v1
    public void w(float f10, float f11) {
        this.T = f10;
        this.U = f11;
        y1(this.W);
    }

    protected boolean w0() {
        boolean z10;
        if (this.V == null) {
            return false;
        }
        int i10 = this.B0;
        if (i10 != 3 && !this.f24999f0 && ((!this.f25000g0 || this.E0) && (!this.f25001h0 || !this.D0))) {
            if (i10 == 2) {
                int i11 = w0.f40295a;
                if (i11 >= 23) {
                    z10 = true;
                } else {
                    z10 = false;
                }
                ne.a.g(z10);
                if (i11 >= 23) {
                    try {
                        z1();
                    } catch (com.google.android.exoplayer2.j e10) {
                        ne.y.j("MediaCodecRenderer", "Failed to update the DRM session, releasing the codec instead.", e10);
                        h1();
                        return true;
                    }
                }
            }
            u0();
            return false;
        }
        h1();
        return true;
    }

    protected abstract int w1(t tVar, Format format);

    @Override // com.google.android.exoplayer2.f, com.google.android.exoplayer2.w1
    public final int x() {
        return 8;
    }

    @Override // com.google.android.exoplayer2.v1
    public void y(long j10, long j11) {
        boolean z10 = false;
        if (this.K0) {
            this.K0 = false;
            c1();
        }
        com.google.android.exoplayer2.j jVar = this.L0;
        if (jVar == null) {
            try {
                if (this.I0) {
                    i1();
                    return;
                } else if (this.M == null && !f1(2)) {
                    return;
                } else {
                    Q0();
                    if (this.f25015v0) {
                        t0.a("bypassRender");
                        while (b0(j10, j11)) {
                        }
                        t0.c();
                    } else if (this.V != null) {
                        long elapsedRealtime = SystemClock.elapsedRealtime();
                        t0.a("drainAndFeed");
                        while (r0(j10, j11) && s1(elapsedRealtime)) {
                        }
                        while (t0() && s1(elapsedRealtime)) {
                        }
                        t0.c();
                    } else {
                        this.M0.f13488d += Z(j10);
                        f1(1);
                    }
                    this.M0.c();
                    return;
                }
            } catch (IllegalStateException e10) {
                if (N0(e10)) {
                    S0(e10);
                    if (w0.f40295a >= 21 && P0(e10)) {
                        z10 = true;
                    }
                    if (z10) {
                        h1();
                    }
                    throw H(m0(e10, z0()), this.M, z10, 4003);
                }
                throw e10;
            }
        }
        this.L0 = null;
        throw jVar;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final l y0() {
        return this.V;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final q z0() {
        return this.f24996c0;
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class b extends Exception {

        /* renamed from: d  reason: collision with root package name */
        public final String f25020d;

        /* renamed from: e  reason: collision with root package name */
        public final boolean f25021e;

        /* renamed from: i  reason: collision with root package name */
        public final q f25022i;

        /* renamed from: o  reason: collision with root package name */
        public final String f25023o;

        /* renamed from: p  reason: collision with root package name */
        public final b f25024p;

        public b(Format format, Throwable th2, boolean z10, int i10) {
            this("Decoder init failed: [" + i10 + "], " + format, th2, format.f12706w, z10, null, b(i10), null);
        }

        private static String b(int i10) {
            String str;
            if (i10 < 0) {
                str = "neg_";
            } else {
                str = "";
            }
            return "com.google.android.exoplayer2.mediacodec.MediaCodecRenderer_" + str + Math.abs(i10);
        }

        /* JADX INFO: Access modifiers changed from: private */
        public b c(b bVar) {
            return new b(getMessage(), getCause(), this.f25020d, this.f25021e, this.f25022i, this.f25023o, bVar);
        }

        private static String d(Throwable th2) {
            if (th2 instanceof MediaCodec.CodecException) {
                return ((MediaCodec.CodecException) th2).getDiagnosticInfo();
            }
            return null;
        }

        public b(Format format, Throwable th2, boolean z10, q qVar) {
            this("Decoder init failed: " + qVar.f24983a + ", " + format, th2, format.f12706w, z10, qVar, w0.f40295a >= 21 ? d(th2) : null, null);
        }

        private b(String str, Throwable th2, String str2, boolean z10, q qVar, String str3, b bVar) {
            super(str, th2);
            this.f25020d = str2;
            this.f25021e = z10;
            this.f25022i = qVar;
            this.f25023o = str3;
            this.f25024p = bVar;
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // com.google.android.exoplayer2.f
    public void U() {
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // com.google.android.exoplayer2.f
    public void V() {
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public void Z0() {
    }

    protected void i1() {
    }

    protected void H0(qc.f fVar) {
    }

    protected void X0(long j10) {
    }

    protected void b1(Format format) {
    }
}
