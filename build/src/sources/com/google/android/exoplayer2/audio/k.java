package com.google.android.exoplayer2.audio;

import android.content.Context;
import android.media.AudioAttributes;
import android.media.AudioDeviceInfo;
import android.media.AudioFormat;
import android.media.AudioManager;
import android.media.AudioTrack;
import android.media.AudioTrack$StreamEventCallback;
import android.media.PlaybackParams;
import android.media.metrics.LogSessionId;
import android.os.Handler;
import android.os.Looper;
import android.os.SystemClock;
import androidx.recyclerview.widget.RecyclerView;
import com.discord.misc.utilities.chat_view_types.ChatViewRecyclerTypes;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import com.google.android.exoplayer2.Format;
import com.google.android.exoplayer2.PlaybackParameters;
import com.google.android.exoplayer2.audio.b;
import com.google.android.exoplayer2.audio.f;
import com.google.android.exoplayer2.audio.h;
import com.google.android.exoplayer2.audio.l;
import java.nio.ByteBuffer;
import java.nio.ByteOrder;
import java.util.ArrayDeque;
import java.util.Objects;
import java.util.concurrent.ExecutorService;
import mc.t1;
import mi.t0;
import nc.t;
import nc.u;
import nc.w;
import ne.c0;
import ne.w0;
import ne.y;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class k implements com.google.android.exoplayer2.audio.f {

    /* renamed from: h0  reason: collision with root package name */
    public static boolean f12282h0 = false;

    /* renamed from: i0  reason: collision with root package name */
    private static final Object f12283i0 = new Object();

    /* renamed from: j0  reason: collision with root package name */
    private static ExecutorService f12284j0;

    /* renamed from: k0  reason: collision with root package name */
    private static int f12285k0;
    private j A;
    private j B;
    private PlaybackParameters C;
    private boolean D;
    private ByteBuffer E;
    private int F;
    private long G;
    private long H;
    private long I;
    private long J;
    private int K;
    private boolean L;
    private boolean M;
    private long N;
    private float O;
    private ByteBuffer P;
    private int Q;
    private ByteBuffer R;
    private byte[] S;
    private int T;
    private boolean U;
    private boolean V;
    private boolean W;
    private boolean X;
    private int Y;
    private nc.p Z;

    /* renamed from: a  reason: collision with root package name */
    private final Context f12286a;

    /* renamed from: a0  reason: collision with root package name */
    private d f12287a0;

    /* renamed from: b  reason: collision with root package name */
    private final nc.e f12288b;

    /* renamed from: b0  reason: collision with root package name */
    private boolean f12289b0;

    /* renamed from: c  reason: collision with root package name */
    private final boolean f12290c;

    /* renamed from: c0  reason: collision with root package name */
    private long f12291c0;

    /* renamed from: d  reason: collision with root package name */
    private final com.google.android.exoplayer2.audio.j f12292d;

    /* renamed from: d0  reason: collision with root package name */
    private long f12293d0;

    /* renamed from: e  reason: collision with root package name */
    private final s f12294e;

    /* renamed from: e0  reason: collision with root package name */
    private boolean f12295e0;

    /* renamed from: f  reason: collision with root package name */
    private final mi.s f12296f;

    /* renamed from: f0  reason: collision with root package name */
    private boolean f12297f0;

    /* renamed from: g  reason: collision with root package name */
    private final mi.s f12298g;

    /* renamed from: g0  reason: collision with root package name */
    private Looper f12299g0;

    /* renamed from: h  reason: collision with root package name */
    private final ne.h f12300h;

    /* renamed from: i  reason: collision with root package name */
    private final com.google.android.exoplayer2.audio.h f12301i;

    /* renamed from: j  reason: collision with root package name */
    private final ArrayDeque f12302j;

    /* renamed from: k  reason: collision with root package name */
    private final boolean f12303k;

    /* renamed from: l  reason: collision with root package name */
    private final int f12304l;

    /* renamed from: m  reason: collision with root package name */
    private m f12305m;

    /* renamed from: n  reason: collision with root package name */
    private final C0167k f12306n;

    /* renamed from: o  reason: collision with root package name */
    private final C0167k f12307o;

    /* renamed from: p  reason: collision with root package name */
    private final e f12308p;

    /* renamed from: q  reason: collision with root package name */
    private final lc.i f12309q;

    /* renamed from: r  reason: collision with root package name */
    private t1 f12310r;

    /* renamed from: s  reason: collision with root package name */
    private f.c f12311s;

    /* renamed from: t  reason: collision with root package name */
    private g f12312t;

    /* renamed from: u  reason: collision with root package name */
    private g f12313u;

    /* renamed from: v  reason: collision with root package name */
    private com.google.android.exoplayer2.audio.c f12314v;

    /* renamed from: w  reason: collision with root package name */
    private AudioTrack f12315w;

    /* renamed from: x  reason: collision with root package name */
    private com.google.android.exoplayer2.audio.a f12316x;

    /* renamed from: y  reason: collision with root package name */
    private com.google.android.exoplayer2.audio.b f12317y;

    /* renamed from: z  reason: collision with root package name */
    private AudioAttributes f12318z;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class b {
        public static void a(AudioTrack audioTrack, d dVar) {
            AudioDeviceInfo audioDeviceInfo;
            if (dVar == null) {
                audioDeviceInfo = null;
            } else {
                audioDeviceInfo = dVar.f12319a;
            }
            audioTrack.setPreferredDevice(audioDeviceInfo);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class c {
        public static void a(AudioTrack audioTrack, t1 t1Var) {
            LogSessionId logSessionId;
            LogSessionId a10 = t1Var.a();
            logSessionId = LogSessionId.LOG_SESSION_ID_NONE;
            if (!a10.equals(logSessionId)) {
                audioTrack.setLogSessionId(a10);
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class d {

        /* renamed from: a  reason: collision with root package name */
        public final AudioDeviceInfo f12319a;

        public d(AudioDeviceInfo audioDeviceInfo) {
            this.f12319a = audioDeviceInfo;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface e {

        /* renamed from: a  reason: collision with root package name */
        public static final e f12320a = new l.a().g();

        int a(int i10, int i11, int i12, int i13, int i14, int i15, double d10);
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class f {

        /* renamed from: a  reason: collision with root package name */
        private final Context f12321a;

        /* renamed from: c  reason: collision with root package name */
        private nc.e f12323c;

        /* renamed from: d  reason: collision with root package name */
        private boolean f12324d;

        /* renamed from: e  reason: collision with root package name */
        private boolean f12325e;

        /* renamed from: h  reason: collision with root package name */
        lc.i f12328h;

        /* renamed from: b  reason: collision with root package name */
        private com.google.android.exoplayer2.audio.a f12322b = com.google.android.exoplayer2.audio.a.f12194c;

        /* renamed from: f  reason: collision with root package name */
        private int f12326f = 0;

        /* renamed from: g  reason: collision with root package name */
        e f12327g = e.f12320a;

        public f(Context context) {
            this.f12321a = context;
        }

        public k g() {
            if (this.f12323c == null) {
                this.f12323c = new h(new com.google.android.exoplayer2.audio.d[0]);
            }
            return new k(this);
        }

        public f h(boolean z10) {
            this.f12325e = z10;
            return this;
        }

        public f i(boolean z10) {
            this.f12324d = z10;
            return this;
        }

        public f j(int i10) {
            this.f12326f = i10;
            return this;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class g {

        /* renamed from: a  reason: collision with root package name */
        public final Format f12329a;

        /* renamed from: b  reason: collision with root package name */
        public final int f12330b;

        /* renamed from: c  reason: collision with root package name */
        public final int f12331c;

        /* renamed from: d  reason: collision with root package name */
        public final int f12332d;

        /* renamed from: e  reason: collision with root package name */
        public final int f12333e;

        /* renamed from: f  reason: collision with root package name */
        public final int f12334f;

        /* renamed from: g  reason: collision with root package name */
        public final int f12335g;

        /* renamed from: h  reason: collision with root package name */
        public final int f12336h;

        /* renamed from: i  reason: collision with root package name */
        public final com.google.android.exoplayer2.audio.c f12337i;

        /* renamed from: j  reason: collision with root package name */
        public final boolean f12338j;

        public g(Format format, int i10, int i11, int i12, int i13, int i14, int i15, int i16, com.google.android.exoplayer2.audio.c cVar, boolean z10) {
            this.f12329a = format;
            this.f12330b = i10;
            this.f12331c = i11;
            this.f12332d = i12;
            this.f12333e = i13;
            this.f12334f = i14;
            this.f12335g = i15;
            this.f12336h = i16;
            this.f12337i = cVar;
            this.f12338j = z10;
        }

        private AudioTrack d(boolean z10, AudioAttributes audioAttributes, int i10) {
            int i11 = w0.f39657a;
            if (i11 >= 29) {
                return f(z10, audioAttributes, i10);
            }
            if (i11 >= 21) {
                return e(z10, audioAttributes, i10);
            }
            return g(audioAttributes, i10);
        }

        private AudioTrack e(boolean z10, AudioAttributes audioAttributes, int i10) {
            return new AudioTrack(i(audioAttributes, z10), k.N(this.f12333e, this.f12334f, this.f12335g), this.f12336h, 1, i10);
        }

        private AudioTrack f(boolean z10, AudioAttributes audioAttributes, int i10) {
            AudioFormat N = k.N(this.f12333e, this.f12334f, this.f12335g);
            android.media.AudioAttributes i11 = i(audioAttributes, z10);
            boolean z11 = true;
            AudioTrack.Builder sessionId = new AudioTrack.Builder().setAudioAttributes(i11).setAudioFormat(N).setTransferMode(1).setBufferSizeInBytes(this.f12336h).setSessionId(i10);
            if (this.f12331c != 1) {
                z11 = false;
            }
            return sessionId.setOffloadedPlayback(z11).build();
        }

        private AudioTrack g(AudioAttributes audioAttributes, int i10) {
            int k02 = w0.k0(audioAttributes.f12184i);
            if (i10 == 0) {
                return new AudioTrack(k02, this.f12333e, this.f12334f, this.f12335g, this.f12336h, 1);
            }
            return new AudioTrack(k02, this.f12333e, this.f12334f, this.f12335g, this.f12336h, 1, i10);
        }

        private static android.media.AudioAttributes i(AudioAttributes audioAttributes, boolean z10) {
            if (z10) {
                return j();
            }
            return audioAttributes.b().f12188a;
        }

        private static android.media.AudioAttributes j() {
            return new AudioAttributes.Builder().setContentType(3).setFlags(16).setUsage(1).build();
        }

        public AudioTrack a(boolean z10, AudioAttributes audioAttributes, int i10) {
            try {
                AudioTrack d10 = d(z10, audioAttributes, i10);
                int state = d10.getState();
                if (state == 1) {
                    return d10;
                }
                try {
                    d10.release();
                } catch (Exception unused) {
                }
                throw new f.b(state, this.f12333e, this.f12334f, this.f12336h, this.f12329a, l(), null);
            } catch (IllegalArgumentException | UnsupportedOperationException e10) {
                throw new f.b(0, this.f12333e, this.f12334f, this.f12336h, this.f12329a, l(), e10);
            }
        }

        public boolean b(g gVar) {
            if (gVar.f12331c == this.f12331c && gVar.f12335g == this.f12335g && gVar.f12333e == this.f12333e && gVar.f12334f == this.f12334f && gVar.f12332d == this.f12332d && gVar.f12338j == this.f12338j) {
                return true;
            }
            return false;
        }

        public g c(int i10) {
            return new g(this.f12329a, this.f12330b, this.f12331c, this.f12332d, this.f12333e, this.f12334f, this.f12335g, i10, this.f12337i, this.f12338j);
        }

        public long h(long j10) {
            return w0.W0(j10, this.f12333e);
        }

        public long k(long j10) {
            return w0.W0(j10, this.f12329a.K);
        }

        public boolean l() {
            if (this.f12331c == 1) {
                return true;
            }
            return false;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class h implements nc.e {

        /* renamed from: a  reason: collision with root package name */
        private final com.google.android.exoplayer2.audio.d[] f12339a;

        /* renamed from: b  reason: collision with root package name */
        private final n f12340b;

        /* renamed from: c  reason: collision with root package name */
        private final p f12341c;

        public h(com.google.android.exoplayer2.audio.d... dVarArr) {
            this(dVarArr, new n(), new p());
        }

        @Override // nc.e
        public long a(long j10) {
            return this.f12341c.g(j10);
        }

        @Override // nc.e
        public com.google.android.exoplayer2.audio.d[] b() {
            return this.f12339a;
        }

        @Override // nc.e
        public PlaybackParameters c(PlaybackParameters playbackParameters) {
            this.f12341c.i(playbackParameters.f11937d);
            this.f12341c.h(playbackParameters.f11938e);
            return playbackParameters;
        }

        @Override // nc.e
        public long d() {
            return this.f12340b.p();
        }

        @Override // nc.e
        public boolean e(boolean z10) {
            this.f12340b.v(z10);
            return z10;
        }

        public h(com.google.android.exoplayer2.audio.d[] dVarArr, n nVar, p pVar) {
            com.google.android.exoplayer2.audio.d[] dVarArr2 = new com.google.android.exoplayer2.audio.d[dVarArr.length + 2];
            this.f12339a = dVarArr2;
            System.arraycopy(dVarArr, 0, dVarArr2, 0, dVarArr.length);
            this.f12340b = nVar;
            this.f12341c = pVar;
            dVarArr2[dVarArr.length] = nVar;
            dVarArr2[dVarArr.length + 1] = pVar;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class i extends RuntimeException {
        private i(String str) {
            super(str);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class j {

        /* renamed from: a  reason: collision with root package name */
        public final PlaybackParameters f12342a;

        /* renamed from: b  reason: collision with root package name */
        public final long f12343b;

        /* renamed from: c  reason: collision with root package name */
        public final long f12344c;

        private j(PlaybackParameters playbackParameters, long j10, long j11) {
            this.f12342a = playbackParameters;
            this.f12343b = j10;
            this.f12344c = j11;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* renamed from: com.google.android.exoplayer2.audio.k$k  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class C0167k {

        /* renamed from: a  reason: collision with root package name */
        private final long f12345a;

        /* renamed from: b  reason: collision with root package name */
        private Exception f12346b;

        /* renamed from: c  reason: collision with root package name */
        private long f12347c;

        public C0167k(long j10) {
            this.f12345a = j10;
        }

        public void a() {
            this.f12346b = null;
        }

        public void b(Exception exc) {
            long elapsedRealtime = SystemClock.elapsedRealtime();
            if (this.f12346b == null) {
                this.f12346b = exc;
                this.f12347c = this.f12345a + elapsedRealtime;
            }
            if (elapsedRealtime >= this.f12347c) {
                Exception exc2 = this.f12346b;
                if (exc2 != exc) {
                    exc2.addSuppressed(exc);
                }
                Exception exc3 = this.f12346b;
                a();
                throw exc3;
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private final class l implements h.a {
        private l() {
        }

        @Override // com.google.android.exoplayer2.audio.h.a
        public void a(int i10, long j10) {
            if (k.this.f12311s != null) {
                k.this.f12311s.d(i10, j10, SystemClock.elapsedRealtime() - k.this.f12293d0);
            }
        }

        @Override // com.google.android.exoplayer2.audio.h.a
        public void b(long j10) {
            if (k.this.f12311s != null) {
                k.this.f12311s.b(j10);
            }
        }

        @Override // com.google.android.exoplayer2.audio.h.a
        public void c(long j10) {
            y.i("DefaultAudioSink", "Ignoring impossibly large audio latency: " + j10);
        }

        @Override // com.google.android.exoplayer2.audio.h.a
        public void d(long j10, long j11, long j12, long j13) {
            String str = "Spurious audio timestamp (frame position mismatch): " + j10 + ", " + j11 + ", " + j12 + ", " + j13 + ", " + k.this.R() + ", " + k.this.S();
            if (!k.f12282h0) {
                y.i("DefaultAudioSink", str);
                return;
            }
            throw new i(str);
        }

        @Override // com.google.android.exoplayer2.audio.h.a
        public void e(long j10, long j11, long j12, long j13) {
            String str = "Spurious audio timestamp (system clock mismatch): " + j10 + ", " + j11 + ", " + j12 + ", " + j13 + ", " + k.this.R() + ", " + k.this.S();
            if (!k.f12282h0) {
                y.i("DefaultAudioSink", str);
                return;
            }
            throw new i(str);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public final class m {

        /* renamed from: a  reason: collision with root package name */
        private final Handler f12349a = new Handler(Looper.myLooper());

        /* renamed from: b  reason: collision with root package name */
        private final AudioTrack$StreamEventCallback f12350b;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        class a extends AudioTrack$StreamEventCallback {

            /* renamed from: a  reason: collision with root package name */
            final /* synthetic */ k f12352a;

            a(k kVar) {
                this.f12352a = kVar;
            }

            public void onDataRequest(AudioTrack audioTrack, int i10) {
                if (audioTrack.equals(k.this.f12315w) && k.this.f12311s != null && k.this.W) {
                    k.this.f12311s.g();
                }
            }

            public void onTearDown(AudioTrack audioTrack) {
                if (audioTrack.equals(k.this.f12315w) && k.this.f12311s != null && k.this.W) {
                    k.this.f12311s.g();
                }
            }
        }

        public m() {
            this.f12350b = new a(k.this);
        }

        public void a(AudioTrack audioTrack) {
            Handler handler = this.f12349a;
            Objects.requireNonNull(handler);
            audioTrack.registerStreamEventCallback(new nc.s(handler), this.f12350b);
        }

        public void b(AudioTrack audioTrack) {
            audioTrack.unregisterStreamEventCallback(this.f12350b);
            this.f12349a.removeCallbacksAndMessages(null);
        }
    }

    private void G(long j10) {
        PlaybackParameters playbackParameters;
        boolean z10;
        if (!m0()) {
            if (k0()) {
                playbackParameters = this.f12288b.c(this.C);
            } else {
                playbackParameters = PlaybackParameters.f11933o;
            }
            this.C = playbackParameters;
        } else {
            playbackParameters = PlaybackParameters.f11933o;
        }
        PlaybackParameters playbackParameters2 = playbackParameters;
        if (k0()) {
            z10 = this.f12288b.e(this.D);
        } else {
            z10 = false;
        }
        this.D = z10;
        this.f12302j.add(new j(playbackParameters2, Math.max(0L, j10), this.f12313u.h(S())));
        j0();
        f.c cVar = this.f12311s;
        if (cVar != null) {
            cVar.onSkipSilenceEnabledChanged(this.D);
        }
    }

    private long H(long j10) {
        while (!this.f12302j.isEmpty() && j10 >= ((j) this.f12302j.getFirst()).f12344c) {
            this.B = (j) this.f12302j.remove();
        }
        j jVar = this.B;
        long j11 = j10 - jVar.f12344c;
        if (jVar.f12342a.equals(PlaybackParameters.f11933o)) {
            return this.B.f12343b + j11;
        }
        if (this.f12302j.isEmpty()) {
            return this.B.f12343b + this.f12288b.a(j11);
        }
        j jVar2 = (j) this.f12302j.getFirst();
        return jVar2.f12343b - w0.e0(jVar2.f12344c - j10, this.B.f12342a.f11937d);
    }

    private long I(long j10) {
        return j10 + this.f12313u.h(this.f12288b.d());
    }

    private AudioTrack J(g gVar) {
        try {
            AudioTrack a10 = gVar.a(this.f12289b0, this.f12318z, this.Y);
            lc.i iVar = this.f12309q;
            if (iVar != null) {
                iVar.y(W(a10));
                return a10;
            }
            return a10;
        } catch (f.b e10) {
            f.c cVar = this.f12311s;
            if (cVar != null) {
                cVar.a(e10);
            }
            throw e10;
        }
    }

    private AudioTrack K() {
        try {
            return J((g) ne.a.e(this.f12313u));
        } catch (f.b e10) {
            g gVar = this.f12313u;
            if (gVar.f12336h > 1000000) {
                g c10 = gVar.c(1000000);
                try {
                    AudioTrack J = J(c10);
                    this.f12313u = c10;
                    return J;
                } catch (f.b e11) {
                    e10.addSuppressed(e11);
                    X();
                    throw e10;
                }
            }
            X();
            throw e10;
        }
    }

    private boolean L() {
        ByteBuffer byteBuffer;
        if (!this.f12314v.f()) {
            ByteBuffer byteBuffer2 = this.R;
            if (byteBuffer2 == null) {
                return true;
            }
            o0(byteBuffer2, Long.MIN_VALUE);
            if (this.R != null) {
                return false;
            }
            return true;
        }
        this.f12314v.h();
        a0(Long.MIN_VALUE);
        if (!this.f12314v.e() || ((byteBuffer = this.R) != null && byteBuffer.hasRemaining())) {
            return false;
        }
        return true;
    }

    private com.google.android.exoplayer2.audio.a M() {
        if (this.f12317y == null && this.f12286a != null) {
            this.f12299g0 = Looper.myLooper();
            com.google.android.exoplayer2.audio.b bVar = new com.google.android.exoplayer2.audio.b(this.f12286a, new b.f() { // from class: nc.q
                @Override // com.google.android.exoplayer2.audio.b.f
                public final void a(com.google.android.exoplayer2.audio.a aVar) {
                    com.google.android.exoplayer2.audio.k.this.Y(aVar);
                }
            });
            this.f12317y = bVar;
            this.f12316x = bVar.d();
        }
        return this.f12316x;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static AudioFormat N(int i10, int i11, int i12) {
        return new AudioFormat.Builder().setSampleRate(i10).setChannelMask(i11).setEncoding(i12).build();
    }

    private static int O(int i10, int i11, int i12) {
        boolean z10;
        int minBufferSize = AudioTrack.getMinBufferSize(i10, i11, i12);
        if (minBufferSize != -2) {
            z10 = true;
        } else {
            z10 = false;
        }
        ne.a.g(z10);
        return minBufferSize;
    }

    private static int P(int i10, ByteBuffer byteBuffer) {
        switch (i10) {
            case 5:
            case 6:
            case ChatViewRecyclerTypes.EPHEMERAL_INDICATION /* 18 */:
                return nc.b.e(byteBuffer);
            case 7:
            case 8:
                return t.e(byteBuffer);
            case 9:
                int m10 = u.m(w0.J(byteBuffer, byteBuffer.position()));
                if (m10 != -1) {
                    return m10;
                }
                throw new IllegalArgumentException();
            case 10:
                return IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET;
            case 11:
            case 12:
                return RecyclerView.ItemAnimator.FLAG_MOVED;
            case 13:
            case ChatViewRecyclerTypes.INTERACTION_STATUS /* 19 */:
            default:
                throw new IllegalStateException("Unexpected audio encoding: " + i10);
            case 14:
                int b10 = nc.b.b(byteBuffer);
                if (b10 == -1) {
                    return 0;
                }
                return nc.b.i(byteBuffer, b10) * 16;
            case 15:
                return IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING;
            case 16:
                return IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET;
            case 17:
                return nc.c.c(byteBuffer);
            case 20:
                return w.g(byteBuffer);
        }
    }

    private int Q(AudioFormat audioFormat, android.media.AudioAttributes audioAttributes) {
        int i10 = w0.f39657a;
        if (i10 >= 31) {
            return AudioManager.getPlaybackOffloadSupport(audioFormat, audioAttributes);
        }
        if (!AudioManager.isOffloadedPlaybackSupported(audioFormat, audioAttributes)) {
            return 0;
        }
        if (i10 == 30 && w0.f39660d.startsWith("Pixel")) {
            return 2;
        }
        return 1;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public long R() {
        g gVar = this.f12313u;
        if (gVar.f12331c == 0) {
            return this.G / gVar.f12330b;
        }
        return this.H;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public long S() {
        g gVar = this.f12313u;
        if (gVar.f12331c == 0) {
            return this.I / gVar.f12332d;
        }
        return this.J;
    }

    private boolean T() {
        boolean z10;
        t1 t1Var;
        if (!this.f12300h.d()) {
            return false;
        }
        AudioTrack K = K();
        this.f12315w = K;
        if (W(K)) {
            b0(this.f12315w);
            if (this.f12304l != 3) {
                AudioTrack audioTrack = this.f12315w;
                Format format = this.f12313u.f12329a;
                audioTrack.setOffloadDelayPadding(format.M, format.N);
            }
        }
        int i10 = w0.f39657a;
        if (i10 >= 31 && (t1Var = this.f12310r) != null) {
            c.a(this.f12315w, t1Var);
        }
        this.Y = this.f12315w.getAudioSessionId();
        com.google.android.exoplayer2.audio.h hVar = this.f12301i;
        AudioTrack audioTrack2 = this.f12315w;
        g gVar = this.f12313u;
        if (gVar.f12331c == 2) {
            z10 = true;
        } else {
            z10 = false;
        }
        hVar.r(audioTrack2, z10, gVar.f12335g, gVar.f12332d, gVar.f12336h);
        g0();
        int i11 = this.Z.f39435a;
        if (i11 != 0) {
            this.f12315w.attachAuxEffect(i11);
            this.f12315w.setAuxEffectSendLevel(this.Z.f39436b);
        }
        d dVar = this.f12287a0;
        if (dVar != null && i10 >= 23) {
            b.a(this.f12315w, dVar);
        }
        this.M = true;
        return true;
    }

    private static boolean U(int i10) {
        if ((w0.f39657a >= 24 && i10 == -6) || i10 == -32) {
            return true;
        }
        return false;
    }

    private boolean V() {
        if (this.f12315w != null) {
            return true;
        }
        return false;
    }

    private static boolean W(AudioTrack audioTrack) {
        if (w0.f39657a >= 29 && audioTrack.isOffloadedPlayback()) {
            return true;
        }
        return false;
    }

    private void X() {
        if (!this.f12313u.l()) {
            return;
        }
        this.f12295e0 = true;
    }

    private void Z() {
        if (!this.V) {
            this.V = true;
            this.f12301i.f(S());
            this.f12315w.stop();
            this.F = 0;
        }
    }

    /* JADX WARN: Code restructure failed: missing block: B:17:0x0031, code lost:
        r0 = r2.P;
     */
    /* JADX WARN: Code restructure failed: missing block: B:18:0x0033, code lost:
        if (r0 == null) goto L25;
     */
    /* JADX WARN: Code restructure failed: missing block: B:20:0x0039, code lost:
        if (r0.hasRemaining() != false) goto L22;
     */
    /* JADX WARN: Code restructure failed: missing block: B:22:0x003c, code lost:
        r2.f12314v.i(r2.P);
     */
    /* JADX WARN: Code restructure failed: missing block: B:23:0x0044, code lost:
        return;
     */
    /* JADX WARN: Code restructure failed: missing block: B:29:?, code lost:
        return;
     */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private void a0(long r3) {
        /*
            r2 = this;
            com.google.android.exoplayer2.audio.c r0 = r2.f12314v
            boolean r0 = r0.f()
            if (r0 != 0) goto L13
            java.nio.ByteBuffer r0 = r2.P
            if (r0 == 0) goto Ld
            goto Lf
        Ld:
            java.nio.ByteBuffer r0 = com.google.android.exoplayer2.audio.d.f12219a
        Lf:
            r2.o0(r0, r3)
            return
        L13:
            com.google.android.exoplayer2.audio.c r0 = r2.f12314v
            boolean r0 = r0.e()
            if (r0 != 0) goto L44
        L1b:
            com.google.android.exoplayer2.audio.c r0 = r2.f12314v
            java.nio.ByteBuffer r0 = r0.d()
            boolean r1 = r0.hasRemaining()
            if (r1 == 0) goto L31
            r2.o0(r0, r3)
            boolean r0 = r0.hasRemaining()
            if (r0 == 0) goto L1b
            goto L44
        L31:
            java.nio.ByteBuffer r0 = r2.P
            if (r0 == 0) goto L44
            boolean r0 = r0.hasRemaining()
            if (r0 != 0) goto L3c
            goto L44
        L3c:
            com.google.android.exoplayer2.audio.c r0 = r2.f12314v
            java.nio.ByteBuffer r1 = r2.P
            r0.i(r1)
            goto L13
        L44:
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: com.google.android.exoplayer2.audio.k.a0(long):void");
    }

    private void b0(AudioTrack audioTrack) {
        if (this.f12305m == null) {
            this.f12305m = new m();
        }
        this.f12305m.a(audioTrack);
    }

    private static void c0(final AudioTrack audioTrack, final ne.h hVar) {
        hVar.c();
        synchronized (f12283i0) {
            try {
                if (f12284j0 == null) {
                    f12284j0 = w0.L0("ExoPlayer:AudioTrackReleaseThread");
                }
                f12285k0++;
                f12284j0.execute(new Runnable() { // from class: nc.r
                    @Override // java.lang.Runnable
                    public final void run() {
                        com.google.android.exoplayer2.audio.k.y(audioTrack, hVar);
                    }
                });
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    private void d0() {
        this.G = 0L;
        this.H = 0L;
        this.I = 0L;
        this.J = 0L;
        this.f12297f0 = false;
        this.K = 0;
        this.B = new j(this.C, 0L, 0L);
        this.N = 0L;
        this.A = null;
        this.f12302j.clear();
        this.P = null;
        this.Q = 0;
        this.R = null;
        this.V = false;
        this.U = false;
        this.E = null;
        this.F = 0;
        this.f12294e.n();
        j0();
    }

    private void e0(PlaybackParameters playbackParameters) {
        j jVar = new j(playbackParameters, -9223372036854775807L, -9223372036854775807L);
        if (V()) {
            this.A = jVar;
        } else {
            this.B = jVar;
        }
    }

    private void f0() {
        if (V()) {
            try {
                this.f12315w.setPlaybackParams(new PlaybackParams().allowDefaults().setSpeed(this.C.f11937d).setPitch(this.C.f11938e).setAudioFallbackMode(2));
            } catch (IllegalArgumentException e10) {
                y.j("DefaultAudioSink", "Failed to set playback params", e10);
            }
            PlaybackParameters playbackParameters = new PlaybackParameters(this.f12315w.getPlaybackParams().getSpeed(), this.f12315w.getPlaybackParams().getPitch());
            this.C = playbackParameters;
            this.f12301i.s(playbackParameters.f11937d);
        }
    }

    private void g0() {
        if (!V()) {
            return;
        }
        if (w0.f39657a >= 21) {
            h0(this.f12315w, this.O);
        } else {
            i0(this.f12315w, this.O);
        }
    }

    private static void h0(AudioTrack audioTrack, float f10) {
        audioTrack.setVolume(f10);
    }

    private static void i0(AudioTrack audioTrack, float f10) {
        audioTrack.setStereoVolume(f10, f10);
    }

    private void j0() {
        com.google.android.exoplayer2.audio.c cVar = this.f12313u.f12337i;
        this.f12314v = cVar;
        cVar.b();
    }

    private boolean k0() {
        if (!this.f12289b0) {
            g gVar = this.f12313u;
            if (gVar.f12331c == 0 && !l0(gVar.f12329a.L)) {
                return true;
            }
            return false;
        }
        return false;
    }

    private boolean l0(int i10) {
        if (this.f12290c && w0.D0(i10)) {
            return true;
        }
        return false;
    }

    private boolean m0() {
        g gVar = this.f12313u;
        if (gVar != null && gVar.f12338j && w0.f39657a >= 23) {
            return true;
        }
        return false;
    }

    private boolean n0(Format format, AudioAttributes audioAttributes) {
        int f10;
        int H;
        int Q;
        boolean z10;
        boolean z11;
        if (w0.f39657a < 29 || this.f12304l == 0 || (f10 = c0.f((String) ne.a.e(format.f11688w), format.f11685t)) == 0 || (H = w0.H(format.J)) == 0 || (Q = Q(N(format.K, H, f10), audioAttributes.b().f12188a)) == 0) {
            return false;
        }
        if (Q != 1) {
            if (Q == 2) {
                return true;
            }
            throw new IllegalStateException();
        }
        if (format.M == 0 && format.N == 0) {
            z10 = false;
        } else {
            z10 = true;
        }
        if (this.f12304l == 1) {
            z11 = true;
        } else {
            z11 = false;
        }
        if (z10 && z11) {
            return false;
        }
        return true;
    }

    private void o0(ByteBuffer byteBuffer, long j10) {
        k kVar;
        ByteBuffer byteBuffer2;
        int p02;
        boolean z10;
        f.c cVar;
        boolean z11;
        if (byteBuffer.hasRemaining()) {
            ByteBuffer byteBuffer3 = this.R;
            boolean z12 = true;
            if (byteBuffer3 != null) {
                if (byteBuffer3 == byteBuffer) {
                    z11 = true;
                } else {
                    z11 = false;
                }
                ne.a.a(z11);
            } else {
                this.R = byteBuffer;
                if (w0.f39657a < 21) {
                    int remaining = byteBuffer.remaining();
                    byte[] bArr = this.S;
                    if (bArr == null || bArr.length < remaining) {
                        this.S = new byte[remaining];
                    }
                    int position = byteBuffer.position();
                    byteBuffer.get(this.S, 0, remaining);
                    byteBuffer.position(position);
                    this.T = 0;
                }
            }
            int remaining2 = byteBuffer.remaining();
            if (w0.f39657a < 21) {
                int b10 = this.f12301i.b(this.I);
                if (b10 > 0) {
                    p02 = this.f12315w.write(this.S, this.T, Math.min(remaining2, b10));
                    if (p02 > 0) {
                        this.T += p02;
                        byteBuffer.position(byteBuffer.position() + p02);
                    }
                } else {
                    p02 = 0;
                }
                kVar = this;
                byteBuffer2 = byteBuffer;
            } else if (this.f12289b0) {
                if (j10 != -9223372036854775807L) {
                    z10 = true;
                } else {
                    z10 = false;
                }
                ne.a.g(z10);
                if (j10 == Long.MIN_VALUE) {
                    j10 = this.f12291c0;
                } else {
                    this.f12291c0 = j10;
                }
                kVar = this;
                byteBuffer2 = byteBuffer;
                p02 = kVar.q0(this.f12315w, byteBuffer2, remaining2, j10);
            } else {
                kVar = this;
                byteBuffer2 = byteBuffer;
                p02 = p0(kVar.f12315w, byteBuffer2, remaining2);
            }
            kVar.f12293d0 = SystemClock.elapsedRealtime();
            if (p02 < 0) {
                if (!U(p02) || kVar.J <= 0) {
                    z12 = false;
                }
                f.e eVar = new f.e(p02, kVar.f12313u.f12329a, z12);
                f.c cVar2 = kVar.f12311s;
                if (cVar2 != null) {
                    cVar2.a(eVar);
                }
                if (!eVar.f12234e) {
                    kVar.f12307o.b(eVar);
                    return;
                } else {
                    kVar.f12316x = com.google.android.exoplayer2.audio.a.f12194c;
                    throw eVar;
                }
            }
            kVar.f12307o.a();
            if (W(kVar.f12315w)) {
                if (kVar.J > 0) {
                    kVar.f12297f0 = false;
                }
                if (kVar.W && (cVar = kVar.f12311s) != null && p02 < remaining2 && !kVar.f12297f0) {
                    cVar.c();
                }
            }
            int i10 = kVar.f12313u.f12331c;
            if (i10 == 0) {
                kVar.I += p02;
            }
            if (p02 == remaining2) {
                if (i10 != 0) {
                    if (byteBuffer2 != kVar.P) {
                        z12 = false;
                    }
                    ne.a.g(z12);
                    kVar.J += kVar.K * kVar.Q;
                }
                kVar.R = null;
            }
        }
    }

    private static int p0(AudioTrack audioTrack, ByteBuffer byteBuffer, int i10) {
        return audioTrack.write(byteBuffer, i10, 1);
    }

    private int q0(AudioTrack audioTrack, ByteBuffer byteBuffer, int i10, long j10) {
        if (w0.f39657a >= 26) {
            return audioTrack.write(byteBuffer, i10, 1, j10 * 1000);
        }
        if (this.E == null) {
            ByteBuffer allocate = ByteBuffer.allocate(16);
            this.E = allocate;
            allocate.order(ByteOrder.BIG_ENDIAN);
            this.E.putInt(1431633921);
        }
        if (this.F == 0) {
            this.E.putInt(4, i10);
            this.E.putLong(8, j10 * 1000);
            this.E.position(0);
            this.F = i10;
        }
        int remaining = this.E.remaining();
        if (remaining > 0) {
            int write = audioTrack.write(this.E, remaining, 1);
            if (write < 0) {
                this.F = 0;
                return write;
            } else if (write < remaining) {
                return 0;
            }
        }
        int p02 = p0(audioTrack, byteBuffer, i10);
        if (p02 < 0) {
            this.F = 0;
            return p02;
        }
        this.F -= p02;
        return p02;
    }

    public static /* synthetic */ void y(AudioTrack audioTrack, ne.h hVar) {
        try {
            audioTrack.flush();
            audioTrack.release();
            hVar.e();
            synchronized (f12283i0) {
                try {
                    int i10 = f12285k0 - 1;
                    f12285k0 = i10;
                    if (i10 == 0) {
                        f12284j0.shutdown();
                        f12284j0 = null;
                    }
                } finally {
                }
            }
        } catch (Throwable th2) {
            hVar.e();
            synchronized (f12283i0) {
                try {
                    int i11 = f12285k0 - 1;
                    f12285k0 = i11;
                    if (i11 == 0) {
                        f12284j0.shutdown();
                        f12284j0 = null;
                    }
                    throw th2;
                } finally {
                }
            }
        }
    }

    public void Y(com.google.android.exoplayer2.audio.a aVar) {
        boolean z10;
        if (this.f12299g0 == Looper.myLooper()) {
            z10 = true;
        } else {
            z10 = false;
        }
        ne.a.g(z10);
        if (!aVar.equals(M())) {
            this.f12316x = aVar;
            f.c cVar = this.f12311s;
            if (cVar != null) {
                cVar.e();
            }
        }
    }

    @Override // com.google.android.exoplayer2.audio.f
    public boolean a(Format format) {
        if (m(format) != 0) {
            return true;
        }
        return false;
    }

    @Override // com.google.android.exoplayer2.audio.f
    public void b() {
        this.W = false;
        if (V() && this.f12301i.o()) {
            this.f12315w.pause();
        }
    }

    @Override // com.google.android.exoplayer2.audio.f
    public PlaybackParameters c() {
        return this.C;
    }

    @Override // com.google.android.exoplayer2.audio.f
    public boolean d() {
        if (V()) {
            if (!this.U || g()) {
                return false;
            }
            return true;
        }
        return true;
    }

    @Override // com.google.android.exoplayer2.audio.f
    public void e() {
        this.W = true;
        if (V()) {
            this.f12301i.t();
            this.f12315w.play();
        }
    }

    @Override // com.google.android.exoplayer2.audio.f
    public void f(PlaybackParameters playbackParameters) {
        this.C = new PlaybackParameters(w0.p(playbackParameters.f11937d, 0.1f, 8.0f), w0.p(playbackParameters.f11938e, 0.1f, 8.0f));
        if (m0()) {
            f0();
        } else {
            e0(playbackParameters);
        }
    }

    @Override // com.google.android.exoplayer2.audio.f
    public void flush() {
        if (V()) {
            d0();
            if (this.f12301i.h()) {
                this.f12315w.pause();
            }
            if (W(this.f12315w)) {
                ((m) ne.a.e(this.f12305m)).b(this.f12315w);
            }
            if (w0.f39657a < 21 && !this.X) {
                this.Y = 0;
            }
            g gVar = this.f12312t;
            if (gVar != null) {
                this.f12313u = gVar;
                this.f12312t = null;
            }
            this.f12301i.p();
            c0(this.f12315w, this.f12300h);
            this.f12315w = null;
        }
        this.f12307o.a();
        this.f12306n.a();
    }

    @Override // com.google.android.exoplayer2.audio.f
    public boolean g() {
        if (V() && this.f12301i.g(S())) {
            return true;
        }
        return false;
    }

    @Override // com.google.android.exoplayer2.audio.f
    public void h(int i10) {
        boolean z10;
        if (this.Y != i10) {
            this.Y = i10;
            if (i10 != 0) {
                z10 = true;
            } else {
                z10 = false;
            }
            this.X = z10;
            flush();
        }
    }

    @Override // com.google.android.exoplayer2.audio.f
    public void i() {
        if (this.f12289b0) {
            this.f12289b0 = false;
            flush();
        }
    }

    @Override // com.google.android.exoplayer2.audio.f
    public void j(AudioAttributes audioAttributes) {
        if (!this.f12318z.equals(audioAttributes)) {
            this.f12318z = audioAttributes;
            if (this.f12289b0) {
                return;
            }
            flush();
        }
    }

    @Override // com.google.android.exoplayer2.audio.f
    public boolean k(ByteBuffer byteBuffer, long j10, int i10) {
        boolean z10;
        boolean z11;
        ByteBuffer byteBuffer2 = this.P;
        if (byteBuffer2 != null && byteBuffer != byteBuffer2) {
            z10 = false;
        } else {
            z10 = true;
        }
        ne.a.a(z10);
        if (this.f12312t != null) {
            if (!L()) {
                return false;
            }
            if (!this.f12312t.b(this.f12313u)) {
                Z();
                if (g()) {
                    return false;
                }
                flush();
            } else {
                this.f12313u = this.f12312t;
                this.f12312t = null;
                if (W(this.f12315w) && this.f12304l != 3) {
                    if (this.f12315w.getPlayState() == 3) {
                        this.f12315w.setOffloadEndOfStream();
                    }
                    AudioTrack audioTrack = this.f12315w;
                    Format format = this.f12313u.f12329a;
                    audioTrack.setOffloadDelayPadding(format.M, format.N);
                    this.f12297f0 = true;
                }
            }
            G(j10);
        }
        if (!V()) {
            try {
                if (!T()) {
                    return false;
                }
            } catch (f.b e10) {
                if (!e10.f12229e) {
                    this.f12306n.b(e10);
                    return false;
                }
                throw e10;
            }
        }
        this.f12306n.a();
        if (this.M) {
            this.N = Math.max(0L, j10);
            this.L = false;
            this.M = false;
            if (m0()) {
                f0();
            }
            G(j10);
            if (this.W) {
                e();
            }
        }
        if (!this.f12301i.j(S())) {
            return false;
        }
        if (this.P == null) {
            if (byteBuffer.order() == ByteOrder.LITTLE_ENDIAN) {
                z11 = true;
            } else {
                z11 = false;
            }
            ne.a.a(z11);
            if (!byteBuffer.hasRemaining()) {
                return true;
            }
            g gVar = this.f12313u;
            if (gVar.f12331c != 0 && this.K == 0) {
                int P = P(gVar.f12335g, byteBuffer);
                this.K = P;
                if (P == 0) {
                    return true;
                }
            }
            if (this.A != null) {
                if (!L()) {
                    return false;
                }
                G(j10);
                this.A = null;
            }
            long k10 = this.N + this.f12313u.k(R() - this.f12294e.m());
            if (!this.L && Math.abs(k10 - j10) > 200000) {
                f.c cVar = this.f12311s;
                if (cVar != null) {
                    cVar.a(new f.d(j10, k10));
                }
                this.L = true;
            }
            if (this.L) {
                if (!L()) {
                    return false;
                }
                long j11 = j10 - k10;
                this.N += j11;
                this.L = false;
                G(j10);
                f.c cVar2 = this.f12311s;
                if (cVar2 != null && j11 != 0) {
                    cVar2.f();
                }
            }
            if (this.f12313u.f12331c == 0) {
                this.G += byteBuffer.remaining();
            } else {
                this.H += this.K * i10;
            }
            this.P = byteBuffer;
            this.Q = i10;
        }
        a0(j10);
        if (!this.P.hasRemaining()) {
            this.P = null;
            this.Q = 0;
            return true;
        } else if (!this.f12301i.i(S())) {
            return false;
        } else {
            y.i("DefaultAudioSink", "Resetting stalled audio track");
            flush();
            return true;
        }
    }

    @Override // com.google.android.exoplayer2.audio.f
    public void l(f.c cVar) {
        this.f12311s = cVar;
    }

    @Override // com.google.android.exoplayer2.audio.f
    public int m(Format format) {
        if ("audio/raw".equals(format.f11688w)) {
            if (!w0.E0(format.L)) {
                y.i("DefaultAudioSink", "Invalid PCM encoding: " + format.L);
                return 0;
            }
            int i10 = format.L;
            if (i10 == 2 || (this.f12290c && i10 == 4)) {
                return 2;
            }
            return 1;
        } else if ((this.f12295e0 || !n0(format, this.f12318z)) && !M().i(format)) {
            return 0;
        } else {
            return 2;
        }
    }

    @Override // com.google.android.exoplayer2.audio.f
    public void n() {
        boolean z10;
        if (w0.f39657a < 25) {
            flush();
            return;
        }
        this.f12307o.a();
        this.f12306n.a();
        if (!V()) {
            return;
        }
        d0();
        if (this.f12301i.h()) {
            this.f12315w.pause();
        }
        this.f12315w.flush();
        this.f12301i.p();
        com.google.android.exoplayer2.audio.h hVar = this.f12301i;
        AudioTrack audioTrack = this.f12315w;
        g gVar = this.f12313u;
        if (gVar.f12331c == 2) {
            z10 = true;
        } else {
            z10 = false;
        }
        hVar.r(audioTrack, z10, gVar.f12335g, gVar.f12332d, gVar.f12336h);
        this.M = true;
    }

    @Override // com.google.android.exoplayer2.audio.f
    public void o() {
        if (!this.U && V() && L()) {
            Z();
            this.U = true;
        }
    }

    @Override // com.google.android.exoplayer2.audio.f
    public long p(boolean z10) {
        if (V() && !this.M) {
            return I(H(Math.min(this.f12301i.c(z10), this.f12313u.h(S()))));
        }
        return Long.MIN_VALUE;
    }

    @Override // com.google.android.exoplayer2.audio.f
    public void q(t1 t1Var) {
        this.f12310r = t1Var;
    }

    @Override // com.google.android.exoplayer2.audio.f
    public void release() {
        com.google.android.exoplayer2.audio.b bVar = this.f12317y;
        if (bVar != null) {
            bVar.e();
        }
    }

    @Override // com.google.android.exoplayer2.audio.f
    public void reset() {
        flush();
        t0 it = this.f12296f.iterator();
        while (it.hasNext()) {
            ((com.google.android.exoplayer2.audio.d) it.next()).reset();
        }
        t0 it2 = this.f12298g.iterator();
        while (it2.hasNext()) {
            ((com.google.android.exoplayer2.audio.d) it2.next()).reset();
        }
        com.google.android.exoplayer2.audio.c cVar = this.f12314v;
        if (cVar != null) {
            cVar.j();
        }
        this.W = false;
        this.f12295e0 = false;
    }

    @Override // com.google.android.exoplayer2.audio.f
    public void s() {
        this.L = true;
    }

    @Override // com.google.android.exoplayer2.audio.f
    public void setPreferredDevice(AudioDeviceInfo audioDeviceInfo) {
        d dVar;
        if (audioDeviceInfo == null) {
            dVar = null;
        } else {
            dVar = new d(audioDeviceInfo);
        }
        this.f12287a0 = dVar;
        AudioTrack audioTrack = this.f12315w;
        if (audioTrack != null) {
            b.a(audioTrack, dVar);
        }
    }

    @Override // com.google.android.exoplayer2.audio.f
    public void t(float f10) {
        if (this.O != f10) {
            this.O = f10;
            g0();
        }
    }

    @Override // com.google.android.exoplayer2.audio.f
    public void u() {
        boolean z10;
        if (w0.f39657a >= 21) {
            z10 = true;
        } else {
            z10 = false;
        }
        ne.a.g(z10);
        ne.a.g(this.X);
        if (!this.f12289b0) {
            this.f12289b0 = true;
            flush();
        }
    }

    @Override // com.google.android.exoplayer2.audio.f
    public void v(nc.p pVar) {
        if (this.Z.equals(pVar)) {
            return;
        }
        int i10 = pVar.f39435a;
        float f10 = pVar.f39436b;
        AudioTrack audioTrack = this.f12315w;
        if (audioTrack != null) {
            if (this.Z.f39435a != i10) {
                audioTrack.attachAuxEffect(i10);
            }
            if (i10 != 0) {
                this.f12315w.setAuxEffectSendLevel(f10);
            }
        }
        this.Z = pVar;
    }

    /* JADX WARN: Removed duplicated region for block: B:35:0x0109  */
    /* JADX WARN: Removed duplicated region for block: B:56:0x016a  */
    @Override // com.google.android.exoplayer2.audio.f
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public void w(com.google.android.exoplayer2.Format r22, int r23, int[] r24) {
        /*
            Method dump skipped, instructions count: 414
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: com.google.android.exoplayer2.audio.k.w(com.google.android.exoplayer2.Format, int, int[]):void");
    }

    @Override // com.google.android.exoplayer2.audio.f
    public void x(boolean z10) {
        PlaybackParameters playbackParameters;
        this.D = z10;
        if (m0()) {
            playbackParameters = PlaybackParameters.f11933o;
        } else {
            playbackParameters = this.C;
        }
        e0(playbackParameters);
    }

    private k(f fVar) {
        com.google.android.exoplayer2.audio.a aVar;
        Context context = fVar.f12321a;
        this.f12286a = context;
        if (context == null) {
            aVar = fVar.f12322b;
        } else {
            aVar = com.google.android.exoplayer2.audio.a.c(context);
        }
        this.f12316x = aVar;
        this.f12288b = fVar.f12323c;
        int i10 = w0.f39657a;
        boolean z10 = true;
        this.f12290c = i10 >= 21 && fVar.f12324d;
        this.f12303k = (i10 < 23 || !fVar.f12325e) ? false : z10;
        this.f12304l = i10 >= 29 ? fVar.f12326f : 0;
        this.f12308p = fVar.f12327g;
        ne.h hVar = new ne.h(ne.e.f39550a);
        this.f12300h = hVar;
        hVar.e();
        this.f12301i = new com.google.android.exoplayer2.audio.h(new l());
        com.google.android.exoplayer2.audio.j jVar = new com.google.android.exoplayer2.audio.j();
        this.f12292d = jVar;
        s sVar = new s();
        this.f12294e = sVar;
        this.f12296f = mi.s.v(new r(), jVar, sVar);
        this.f12298g = mi.s.t(new q());
        this.O = 1.0f;
        this.f12318z = AudioAttributes.f12175r;
        this.Y = 0;
        this.Z = new nc.p(0, 0.0f);
        PlaybackParameters playbackParameters = PlaybackParameters.f11933o;
        this.B = new j(playbackParameters, 0L, 0L);
        this.C = playbackParameters;
        this.D = false;
        this.f12302j = new ArrayDeque();
        this.f12306n = new C0167k(100L);
        this.f12307o = new C0167k(100L);
        this.f12309q = fVar.f12328h;
    }
}
