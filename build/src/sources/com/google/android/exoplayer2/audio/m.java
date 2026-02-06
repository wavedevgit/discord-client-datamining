package com.google.android.exoplayer2.audio;

import android.content.Context;
import android.media.AudioDeviceInfo;
import android.media.MediaCrypto;
import android.media.MediaFormat;
import android.os.Handler;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import com.google.android.exoplayer2.Format;
import com.google.android.exoplayer2.PlaybackParameters;
import com.google.android.exoplayer2.audio.e;
import com.google.android.exoplayer2.audio.f;
import com.google.android.exoplayer2.decoder.DecoderReuseEvaluation;
import com.google.android.exoplayer2.v1;
import com.google.android.exoplayer2.w1;
import fd.l;
import fd.t;
import java.nio.ByteBuffer;
import java.util.List;
import lc.x;
import ne.a0;
import ne.b0;
import ne.c0;
import ne.w0;
import ne.y;
import org.webrtc.PeerConnection;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class m extends fd.r implements a0 {
    private final Context R0;
    private final e.a S0;
    private final f T0;
    private int U0;
    private boolean V0;
    private Format W0;
    private Format X0;
    private long Y0;
    private boolean Z0;

    /* renamed from: a1  reason: collision with root package name */
    private boolean f12265a1;

    /* renamed from: b1  reason: collision with root package name */
    private boolean f12266b1;

    /* renamed from: c1  reason: collision with root package name */
    private boolean f12267c1;

    /* renamed from: d1  reason: collision with root package name */
    private v1.a f12268d1;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private static final class b {
        public static void a(f fVar, Object obj) {
            fVar.setPreferredDevice((AudioDeviceInfo) obj);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private final class c implements f.c {
        private c() {
        }

        @Override // com.google.android.exoplayer2.audio.f.c
        public void a(Exception exc) {
            y.d("MediaCodecAudioRenderer", "Audio sink error", exc);
            m.this.S0.l(exc);
        }

        @Override // com.google.android.exoplayer2.audio.f.c
        public void b(long j10) {
            m.this.S0.r(j10);
        }

        @Override // com.google.android.exoplayer2.audio.f.c
        public void c() {
            if (m.this.f12268d1 != null) {
                m.this.f12268d1.a();
            }
        }

        @Override // com.google.android.exoplayer2.audio.f.c
        public void d(int i10, long j10, long j11) {
            m.this.S0.t(i10, j10, j11);
        }

        @Override // com.google.android.exoplayer2.audio.f.c
        public void e() {
            m.this.S();
        }

        @Override // com.google.android.exoplayer2.audio.f.c
        public void f() {
            m.this.K1();
        }

        @Override // com.google.android.exoplayer2.audio.f.c
        public void g() {
            if (m.this.f12268d1 != null) {
                m.this.f12268d1.b();
            }
        }

        @Override // com.google.android.exoplayer2.audio.f.c
        public void onSkipSilenceEnabledChanged(boolean z10) {
            m.this.S0.s(z10);
        }
    }

    public m(Context context, l.b bVar, t tVar, boolean z10, Handler handler, e eVar, f fVar) {
        super(1, bVar, tVar, z10, 44100.0f);
        this.R0 = context.getApplicationContext();
        this.T0 = fVar;
        this.S0 = new e.a(handler, eVar);
        fVar.l(new c());
    }

    private static boolean E1(String str) {
        if (w0.f39012a < 24 && "OMX.SEC.aac.dec".equals(str) && "samsung".equals(w0.f39014c)) {
            String str2 = w0.f39013b;
            if (str2.startsWith("zeroflte") || str2.startsWith("herolte") || str2.startsWith("heroqlte")) {
                return true;
            }
            return false;
        }
        return false;
    }

    private static boolean F1() {
        if (w0.f39012a == 23) {
            String str = w0.f39015d;
            if ("ZTE B2017G".equals(str) || "AXON 7 mini".equals(str)) {
                return true;
            }
            return false;
        }
        return false;
    }

    private int G1(fd.q qVar, Format format) {
        int i10;
        if ("OMX.google.raw.decoder".equals(qVar.f23112a) && (i10 = w0.f39012a) < 24 && (i10 != 23 || !w0.H0(this.R0))) {
            return -1;
        }
        return format.f11588x;
    }

    private static List I1(t tVar, Format format, boolean z10, f fVar) {
        fd.q x10;
        if (format.f11587w == null) {
            return ni.s.t();
        }
        if (fVar.a(format) && (x10 = fd.y.x()) != null) {
            return ni.s.u(x10);
        }
        return fd.y.v(tVar, format, z10, false);
    }

    private void L1() {
        long p10 = this.T0.p(d());
        if (p10 != Long.MIN_VALUE) {
            if (!this.f12265a1) {
                p10 = Math.max(this.Y0, p10);
            }
            this.Y0 = p10;
            this.f12265a1 = false;
        }
    }

    @Override // fd.r
    protected float B0(float f10, Format format, Format[] formatArr) {
        int i10 = -1;
        for (Format format2 : formatArr) {
            int i11 = format2.K;
            if (i11 != -1) {
                i10 = Math.max(i10, i11);
            }
        }
        if (i10 == -1) {
            return -1.0f;
        }
        return i10 * f10;
    }

    @Override // fd.r
    protected List D0(t tVar, Format format, boolean z10) {
        return fd.y.w(I1(tVar, format, z10, this.T0), format);
    }

    @Override // fd.r
    protected l.a E0(fd.q qVar, Format format, MediaCrypto mediaCrypto, float f10) {
        Format format2;
        this.U0 = H1(qVar, format, M());
        this.V0 = E1(qVar.f23112a);
        MediaFormat J1 = J1(format, qVar.f23114c, this.U0, f10);
        if ("audio/raw".equals(qVar.f23113b) && !"audio/raw".equals(format.f11587w)) {
            format2 = format;
        } else {
            format2 = null;
        }
        this.X0 = format2;
        return l.a.a(qVar, J1, format, mediaCrypto);
    }

    protected int H1(fd.q qVar, Format format, Format[] formatArr) {
        int G1 = G1(qVar, format);
        if (formatArr.length == 1) {
            return G1;
        }
        for (Format format2 : formatArr) {
            if (qVar.f(format, format2).f12381d != 0) {
                G1 = Math.max(G1, G1(qVar, format2));
            }
        }
        return G1;
    }

    protected MediaFormat J1(Format format, String str, int i10, float f10) {
        MediaFormat mediaFormat = new MediaFormat();
        mediaFormat.setString("mime", str);
        mediaFormat.setInteger("channel-count", format.J);
        mediaFormat.setInteger("sample-rate", format.K);
        b0.e(mediaFormat, format.f11589y);
        b0.d(mediaFormat, "max-input-size", i10);
        int i11 = w0.f39012a;
        if (i11 >= 23) {
            mediaFormat.setInteger("priority", 0);
            if (f10 != -1.0f && !F1()) {
                mediaFormat.setFloat("operating-rate", f10);
            }
        }
        if (i11 <= 28 && "audio/ac4".equals(format.f11587w)) {
            mediaFormat.setInteger("ac4-is-sync", 1);
        }
        if (i11 >= 24 && this.T0.m(w0.h0(4, format.J, format.K)) == 2) {
            mediaFormat.setInteger("pcm-encoding", 4);
        }
        if (i11 >= 32) {
            mediaFormat.setInteger("max-output-channel-count", 99);
        }
        return mediaFormat;
    }

    protected void K1() {
        this.f12265a1 = true;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // fd.r, com.google.android.exoplayer2.f
    public void O() {
        this.f12266b1 = true;
        this.W0 = null;
        try {
            this.T0.flush();
            try {
                super.O();
            } finally {
            }
        } catch (Throwable th2) {
            try {
                super.O();
                throw th2;
            } finally {
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // fd.r, com.google.android.exoplayer2.f
    public void P(boolean z10, boolean z11) {
        super.P(z10, z11);
        this.S0.p(this.M0);
        if (I().f36017a) {
            this.T0.u();
        } else {
            this.T0.i();
        }
        this.T0.q(L());
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // fd.r, com.google.android.exoplayer2.f
    public void Q(long j10, boolean z10) {
        super.Q(j10, z10);
        if (this.f12267c1) {
            this.T0.n();
        } else {
            this.T0.flush();
        }
        this.Y0 = j10;
        this.Z0 = true;
        this.f12265a1 = true;
    }

    @Override // com.google.android.exoplayer2.f
    protected void R() {
        this.T0.release();
    }

    @Override // fd.r
    protected void S0(Exception exc) {
        y.d("MediaCodecAudioRenderer", "Audio codec error", exc);
        this.S0.k(exc);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // fd.r, com.google.android.exoplayer2.f
    public void T() {
        try {
            super.T();
        } finally {
            if (this.f12266b1) {
                this.f12266b1 = false;
                this.T0.reset();
            }
        }
    }

    @Override // fd.r
    protected void T0(String str, l.a aVar, long j10, long j11) {
        this.S0.m(str, j10, j11);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // fd.r, com.google.android.exoplayer2.f
    public void U() {
        super.U();
        this.T0.e();
    }

    @Override // fd.r
    protected void U0(String str) {
        this.S0.n(str);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // fd.r, com.google.android.exoplayer2.f
    public void V() {
        L1();
        this.T0.b();
        super.V();
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // fd.r
    public DecoderReuseEvaluation V0(x xVar) {
        this.W0 = (Format) ne.a.e(xVar.f36029b);
        DecoderReuseEvaluation V0 = super.V0(xVar);
        this.S0.q(this.W0, V0);
        return V0;
    }

    @Override // fd.r
    protected void W0(Format format, MediaFormat mediaFormat) {
        int i10;
        int i11;
        Format format2 = this.X0;
        int[] iArr = null;
        if (format2 != null) {
            format = format2;
        } else if (y0() != null) {
            if ("audio/raw".equals(format.f11587w)) {
                i10 = format.L;
            } else if (w0.f39012a >= 24 && mediaFormat.containsKey("pcm-encoding")) {
                i10 = mediaFormat.getInteger("pcm-encoding");
            } else if (mediaFormat.containsKey("v-bits-per-sample")) {
                i10 = w0.g0(mediaFormat.getInteger("v-bits-per-sample"));
            } else {
                i10 = 2;
            }
            Format G = new Format.b().g0("audio/raw").a0(i10).P(format.M).Q(format.N).J(mediaFormat.getInteger("channel-count")).h0(mediaFormat.getInteger("sample-rate")).G();
            if (this.V0 && G.J == 6 && (i11 = format.J) < 6) {
                iArr = new int[i11];
                for (int i12 = 0; i12 < format.J; i12++) {
                    iArr[i12] = i12;
                }
            }
            format = G;
        }
        try {
            this.T0.w(format, 0, iArr);
        } catch (f.a e10) {
            throw G(e10, e10.f12126d, 5001);
        }
    }

    @Override // fd.r
    protected void X0(long j10) {
        this.T0.r(j10);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // fd.r
    public void Z0() {
        super.Z0();
        this.T0.s();
    }

    @Override // fd.r
    protected void a1(qc.f fVar) {
        if (this.Z0 && !fVar.m()) {
            if (Math.abs(fVar.f46611p - this.Y0) > 500000) {
                this.Y0 = fVar.f46611p;
            }
            this.Z0 = false;
        }
    }

    @Override // ne.a0
    public PlaybackParameters c() {
        return this.T0.c();
    }

    @Override // fd.r
    protected DecoderReuseEvaluation c0(fd.q qVar, Format format, Format format2) {
        int i10;
        DecoderReuseEvaluation f10 = qVar.f(format, format2);
        int i11 = f10.f12382e;
        if (L0(format2)) {
            i11 |= PeerConnection.PORTALLOCATOR_ENABLE_ANY_ADDRESS_PORTS;
        }
        if (G1(qVar, format2) > this.U0) {
            i11 |= 64;
        }
        int i12 = i11;
        String str = qVar.f23112a;
        if (i12 != 0) {
            i10 = 0;
        } else {
            i10 = f10.f12381d;
        }
        return new DecoderReuseEvaluation(str, format, format2, i10, i12);
    }

    @Override // fd.r, com.google.android.exoplayer2.v1
    public boolean d() {
        if (super.d() && this.T0.d()) {
            return true;
        }
        return false;
    }

    @Override // fd.r
    protected boolean d1(long j10, long j11, fd.l lVar, ByteBuffer byteBuffer, int i10, int i11, int i12, long j12, boolean z10, boolean z11, Format format) {
        ne.a.e(byteBuffer);
        if (this.X0 != null && (i11 & 2) != 0) {
            ((fd.l) ne.a.e(lVar)).releaseOutputBuffer(i10, false);
            return true;
        } else if (z10) {
            if (lVar != null) {
                lVar.releaseOutputBuffer(i10, false);
            }
            this.M0.f12371f += i12;
            this.T0.s();
            return true;
        } else {
            try {
                if (!this.T0.k(byteBuffer, j12, i12)) {
                    return false;
                }
                if (lVar != null) {
                    lVar.releaseOutputBuffer(i10, false);
                }
                this.M0.f12370e += i12;
                return true;
            } catch (f.b e10) {
                throw H(e10, this.W0, e10.f12128e, 5001);
            } catch (f.e e11) {
                throw H(e11, format, e11.f12133e, 5002);
            }
        }
    }

    @Override // ne.a0
    public void f(PlaybackParameters playbackParameters) {
        this.T0.f(playbackParameters);
    }

    @Override // com.google.android.exoplayer2.v1, com.google.android.exoplayer2.w1
    public String getName() {
        return "MediaCodecAudioRenderer";
    }

    @Override // fd.r
    protected void i1() {
        try {
            this.T0.o();
        } catch (f.e e10) {
            throw H(e10, e10.f12134i, e10.f12133e, 5002);
        }
    }

    @Override // fd.r, com.google.android.exoplayer2.v1
    public boolean isReady() {
        if (!this.T0.g() && !super.isReady()) {
            return false;
        }
        return true;
    }

    @Override // com.google.android.exoplayer2.f, com.google.android.exoplayer2.s1.b
    public void n(int i10, Object obj) {
        if (i10 != 2) {
            if (i10 != 3) {
                if (i10 != 6) {
                    switch (i10) {
                        case 9:
                            this.T0.x(((Boolean) obj).booleanValue());
                            return;
                        case 10:
                            this.T0.h(((Integer) obj).intValue());
                            return;
                        case 11:
                            this.f12268d1 = (v1.a) obj;
                            return;
                        case 12:
                            if (w0.f39012a >= 23) {
                                b.a(this.T0, obj);
                                return;
                            }
                            return;
                        default:
                            super.n(i10, obj);
                            return;
                    }
                }
                this.T0.v((nc.p) obj);
                return;
            }
            this.T0.j((AudioAttributes) obj);
            return;
        }
        this.T0.t(((Float) obj).floatValue());
    }

    @Override // ne.a0
    public long v() {
        if (getState() == 2) {
            L1();
        }
        return this.Y0;
    }

    @Override // fd.r
    protected boolean v1(Format format) {
        return this.T0.a(format);
    }

    @Override // fd.r
    protected int w1(t tVar, Format format) {
        int i10;
        boolean z10;
        boolean z11;
        int i11;
        int i12 = 0;
        if (!c0.o(format.f11587w)) {
            return w1.b(0);
        }
        if (w0.f39012a >= 21) {
            i10 = 32;
        } else {
            i10 = 0;
        }
        boolean z12 = true;
        if (format.R != 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        boolean x12 = fd.r.x1(format);
        int i13 = 8;
        int i14 = 4;
        if (x12 && this.T0.a(format) && (!z10 || fd.y.x() != null)) {
            return w1.u(4, 8, i10);
        }
        if ("audio/raw".equals(format.f11587w) && !this.T0.a(format)) {
            return w1.b(1);
        }
        if (!this.T0.a(w0.h0(2, format.J, format.K))) {
            return w1.b(1);
        }
        List I1 = I1(tVar, format, false, this.T0);
        if (I1.isEmpty()) {
            return w1.b(1);
        }
        if (!x12) {
            return w1.b(2);
        }
        fd.q qVar = (fd.q) I1.get(0);
        boolean o10 = qVar.o(format);
        if (!o10) {
            for (int i15 = 1; i15 < I1.size(); i15++) {
                fd.q qVar2 = (fd.q) I1.get(i15);
                if (qVar2.o(format)) {
                    z11 = false;
                    qVar = qVar2;
                    break;
                }
            }
        }
        z11 = true;
        z12 = o10;
        if (!z12) {
            i14 = 3;
        }
        if (z12 && qVar.r(format)) {
            i13 = 16;
        }
        if (qVar.f23119h) {
            i11 = 64;
        } else {
            i11 = 0;
        }
        if (z11) {
            i12 = IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        }
        return w1.k(i14, i13, i10, i11, i12);
    }

    @Override // com.google.android.exoplayer2.f, com.google.android.exoplayer2.v1
    public a0 D() {
        return this;
    }
}
