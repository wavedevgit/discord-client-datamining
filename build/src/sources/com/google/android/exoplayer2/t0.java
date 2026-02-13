package com.google.android.exoplayer2;

import android.os.Handler;
import android.os.HandlerThread;
import android.os.Looper;
import android.os.Message;
import android.util.Pair;
import com.discord.misc.utilities.chat_view_types.ChatViewRecyclerTypes;
import com.google.android.exoplayer2.MediaItem;
import com.google.android.exoplayer2.Timeline;
import com.google.android.exoplayer2.i;
import com.google.android.exoplayer2.metadata.Metadata;
import com.google.android.exoplayer2.o1;
import com.google.android.exoplayer2.s1;
import com.google.android.exoplayer2.v1;
import com.google.android.exoplayer2.w1;
import com.reactnativecommunity.webview.RNCWebViewManager;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Set;
import java.util.concurrent.atomic.AtomicBoolean;
import ke.q;
import kotlin.jvm.internal.LongCompanionObject;
import qi.s;
import rd.p;
import rd.r;
import sc.n;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class t0 implements Handler.Callback, p.a, q.a, o1.d, i.a, s1.a {
    private final ArrayList A;
    private final oe.e B;
    private final f C;
    private final z0 D;
    private final o1 E;
    private final v0 F;
    private final long G;
    private mc.t0 H;
    private r1 I;
    private e J;
    private boolean K;
    private boolean L;
    private boolean M;
    private boolean N;
    private boolean O;
    private int P;
    private boolean Q;
    private boolean R;
    private boolean S;
    private boolean T;
    private int U;
    private h V;
    private long W;
    private int X;
    private boolean Y;
    private j Z;

    /* renamed from: a0  reason: collision with root package name */
    private long f13601a0;

    /* renamed from: b0  reason: collision with root package name */
    private long f13602b0 = -9223372036854775807L;

    /* renamed from: d  reason: collision with root package name */
    private final v1[] f13603d;

    /* renamed from: e  reason: collision with root package name */
    private final Set f13604e;

    /* renamed from: i  reason: collision with root package name */
    private final w1[] f13605i;

    /* renamed from: o  reason: collision with root package name */
    private final ke.q f13606o;

    /* renamed from: p  reason: collision with root package name */
    private final ke.r f13607p;

    /* renamed from: q  reason: collision with root package name */
    private final mc.a0 f13608q;

    /* renamed from: r  reason: collision with root package name */
    private final me.e f13609r;

    /* renamed from: s  reason: collision with root package name */
    private final oe.u f13610s;

    /* renamed from: t  reason: collision with root package name */
    private final HandlerThread f13611t;

    /* renamed from: u  reason: collision with root package name */
    private final Looper f13612u;

    /* renamed from: v  reason: collision with root package name */
    private final Timeline.d f13613v;

    /* renamed from: w  reason: collision with root package name */
    private final Timeline.b f13614w;

    /* renamed from: x  reason: collision with root package name */
    private final long f13615x;

    /* renamed from: y  reason: collision with root package name */
    private final boolean f13616y;

    /* renamed from: z  reason: collision with root package name */
    private final i f13617z;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public class a implements v1.a {
        a() {
        }

        @Override // com.google.android.exoplayer2.v1.a
        public void a() {
            t0.this.S = true;
        }

        @Override // com.google.android.exoplayer2.v1.a
        public void b() {
            t0.this.f13610s.h(2);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        private final List f13619a;

        /* renamed from: b  reason: collision with root package name */
        private final rd.o0 f13620b;

        /* renamed from: c  reason: collision with root package name */
        private final int f13621c;

        /* renamed from: d  reason: collision with root package name */
        private final long f13622d;

        /* synthetic */ b(List list, rd.o0 o0Var, int i10, long j10, a aVar) {
            this(list, o0Var, i10, j10);
        }

        private b(List list, rd.o0 o0Var, int i10, long j10) {
            this.f13619a = list;
            this.f13620b = o0Var;
            this.f13621c = i10;
            this.f13622d = j10;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private static class c {
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class d implements Comparable {

        /* renamed from: d  reason: collision with root package name */
        public final s1 f13623d;

        /* renamed from: e  reason: collision with root package name */
        public int f13624e;

        /* renamed from: i  reason: collision with root package name */
        public long f13625i;

        /* renamed from: o  reason: collision with root package name */
        public Object f13626o;

        public d(s1 s1Var) {
            this.f13623d = s1Var;
        }

        @Override // java.lang.Comparable
        /* renamed from: a */
        public int compareTo(d dVar) {
            boolean z10;
            boolean z11;
            Object obj = this.f13626o;
            if (obj == null) {
                z10 = true;
            } else {
                z10 = false;
            }
            if (dVar.f13626o == null) {
                z11 = true;
            } else {
                z11 = false;
            }
            if (z10 != z11) {
                if (obj == null) {
                    return 1;
                }
                return -1;
            } else if (obj == null) {
                return 0;
            } else {
                int i10 = this.f13624e - dVar.f13624e;
                if (i10 != 0) {
                    return i10;
                }
                return oe.w0.o(this.f13625i, dVar.f13625i);
            }
        }

        public void d(int i10, long j10, Object obj) {
            this.f13624e = i10;
            this.f13625i = j10;
            this.f13626o = obj;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class e {

        /* renamed from: a  reason: collision with root package name */
        private boolean f13627a;

        /* renamed from: b  reason: collision with root package name */
        public r1 f13628b;

        /* renamed from: c  reason: collision with root package name */
        public int f13629c;

        /* renamed from: d  reason: collision with root package name */
        public boolean f13630d;

        /* renamed from: e  reason: collision with root package name */
        public int f13631e;

        /* renamed from: f  reason: collision with root package name */
        public boolean f13632f;

        /* renamed from: g  reason: collision with root package name */
        public int f13633g;

        public e(r1 r1Var) {
            this.f13628b = r1Var;
        }

        public void b(int i10) {
            boolean z10;
            boolean z11 = this.f13627a;
            if (i10 > 0) {
                z10 = true;
            } else {
                z10 = false;
            }
            this.f13627a = z11 | z10;
            this.f13629c += i10;
        }

        public void c(int i10) {
            this.f13627a = true;
            this.f13632f = true;
            this.f13633g = i10;
        }

        public void d(r1 r1Var) {
            boolean z10;
            boolean z11 = this.f13627a;
            if (this.f13628b != r1Var) {
                z10 = true;
            } else {
                z10 = false;
            }
            this.f13627a = z11 | z10;
            this.f13628b = r1Var;
        }

        public void e(int i10) {
            boolean z10 = true;
            if (this.f13630d && this.f13631e != 5) {
                if (i10 != 5) {
                    z10 = false;
                }
                oe.a.a(z10);
                return;
            }
            this.f13627a = true;
            this.f13630d = true;
            this.f13631e = i10;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface f {
        void a(e eVar);
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class g {

        /* renamed from: a  reason: collision with root package name */
        public final r.b f13634a;

        /* renamed from: b  reason: collision with root package name */
        public final long f13635b;

        /* renamed from: c  reason: collision with root package name */
        public final long f13636c;

        /* renamed from: d  reason: collision with root package name */
        public final boolean f13637d;

        /* renamed from: e  reason: collision with root package name */
        public final boolean f13638e;

        /* renamed from: f  reason: collision with root package name */
        public final boolean f13639f;

        public g(r.b bVar, long j10, long j11, boolean z10, boolean z11, boolean z12) {
            this.f13634a = bVar;
            this.f13635b = j10;
            this.f13636c = j11;
            this.f13637d = z10;
            this.f13638e = z11;
            this.f13639f = z12;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class h {

        /* renamed from: a  reason: collision with root package name */
        public final Timeline f13640a;

        /* renamed from: b  reason: collision with root package name */
        public final int f13641b;

        /* renamed from: c  reason: collision with root package name */
        public final long f13642c;

        public h(Timeline timeline, int i10, long j10) {
            this.f13640a = timeline;
            this.f13641b = i10;
            this.f13642c = j10;
        }
    }

    public t0(v1[] v1VarArr, ke.q qVar, ke.r rVar, mc.a0 a0Var, me.e eVar, int i10, boolean z10, nc.a aVar, mc.t0 t0Var, v0 v0Var, long j10, boolean z11, Looper looper, oe.e eVar2, f fVar, nc.t1 t1Var, Looper looper2) {
        this.C = fVar;
        this.f13603d = v1VarArr;
        this.f13606o = qVar;
        this.f13607p = rVar;
        this.f13608q = a0Var;
        this.f13609r = eVar;
        this.P = i10;
        this.Q = z10;
        this.H = t0Var;
        this.F = v0Var;
        this.G = j10;
        this.f13601a0 = j10;
        this.L = z11;
        this.B = eVar2;
        this.f13615x = a0Var.e();
        this.f13616y = a0Var.d();
        r1 k10 = r1.k(rVar);
        this.I = k10;
        this.J = new e(k10);
        this.f13605i = new w1[v1VarArr.length];
        w1.a c10 = qVar.c();
        for (int i11 = 0; i11 < v1VarArr.length; i11++) {
            v1VarArr[i11].p(i11, t1Var);
            this.f13605i[i11] = v1VarArr[i11].t();
            if (c10 != null) {
                this.f13605i[i11].D(c10);
            }
        }
        this.f13617z = new i(this, eVar2);
        this.A = new ArrayList();
        this.f13604e = qi.q0.h();
        this.f13613v = new Timeline.d();
        this.f13614w = new Timeline.b();
        qVar.d(this, eVar);
        this.Y = true;
        oe.u c11 = eVar2.c(looper, null);
        this.D = new z0(aVar, c11);
        this.E = new o1(this, aVar, c11, t1Var);
        if (looper2 != null) {
            this.f13611t = null;
            this.f13612u = looper2;
        } else {
            HandlerThread handlerThread = new HandlerThread("ExoPlayer:Playback", -16);
            this.f13611t = handlerThread;
            handlerThread.start();
            this.f13612u = handlerThread.getLooper();
        }
        this.f13610s = eVar2.c(this.f13612u, this);
    }

    private long A() {
        w0 s10 = this.D.s();
        if (s10 == null) {
            return 0L;
        }
        long l10 = s10.l();
        if (!s10.f14189d) {
            return l10;
        }
        int i10 = 0;
        while (true) {
            v1[] v1VarArr = this.f13603d;
            if (i10 < v1VarArr.length) {
                if (R(v1VarArr[i10]) && this.f13603d[i10].z() == s10.f14188c[i10]) {
                    long A = this.f13603d[i10].A();
                    if (A == Long.MIN_VALUE) {
                        return Long.MIN_VALUE;
                    }
                    l10 = Math.max(A, l10);
                }
                i10++;
            } else {
                return l10;
            }
        }
    }

    private void A0(long j10, long j11) {
        this.f13610s.i(2, j10 + j11);
    }

    private Pair B(Timeline timeline) {
        long j10 = 0;
        if (timeline.u()) {
            return Pair.create(r1.l(), 0L);
        }
        Pair n10 = timeline.n(this.f13613v, this.f13614w, timeline.e(this.Q), -9223372036854775807L);
        r.b E = this.D.E(timeline, n10.first, 0L);
        long longValue = ((Long) n10.second).longValue();
        if (E.b()) {
            timeline.l(E.f47006a, this.f13614w);
            if (E.f47008c == this.f13614w.n(E.f47007b)) {
                j10 = this.f13614w.j();
            }
            longValue = j10;
        }
        return Pair.create(E, Long.valueOf(longValue));
    }

    private void C0(boolean z10) {
        r.b bVar = this.D.r().f14191f.f14202a;
        long F0 = F0(bVar, this.I.f13396r, true, false);
        if (F0 != this.I.f13396r) {
            r1 r1Var = this.I;
            this.I = M(bVar, F0, r1Var.f13381c, r1Var.f13382d, z10, 5);
        }
    }

    private long D() {
        return E(this.I.f13394p);
    }

    /* JADX WARN: Removed duplicated region for block: B:24:0x00a1 A[Catch: all -> 0x00a4, TryCatch #1 {all -> 0x00a4, blocks: (B:22:0x0097, B:24:0x00a1, B:30:0x00ad, B:32:0x00b3, B:33:0x00b6, B:35:0x00be, B:39:0x00d0, B:43:0x00d8), top: B:91:0x0097 }] */
    /* JADX WARN: Removed duplicated region for block: B:28:0x00aa  */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private void D0(com.google.android.exoplayer2.t0.h r20) {
        /*
            Method dump skipped, instructions count: 344
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: com.google.android.exoplayer2.t0.D0(com.google.android.exoplayer2.t0$h):void");
    }

    private long E(long j10) {
        w0 l10 = this.D.l();
        if (l10 == null) {
            return 0L;
        }
        return Math.max(0L, j10 - l10.y(this.W));
    }

    private long E0(r.b bVar, long j10, boolean z10) {
        boolean z11;
        if (this.D.r() != this.D.s()) {
            z11 = true;
        } else {
            z11 = false;
        }
        return F0(bVar, j10, z11, z10);
    }

    private void F(rd.p pVar) {
        if (!this.D.y(pVar)) {
            return;
        }
        this.D.B(this.W);
        U();
    }

    private long F0(r.b bVar, long j10, boolean z10, boolean z11) {
        k1();
        this.N = false;
        if (z11 || this.I.f13383e == 3) {
            b1(2);
        }
        w0 r10 = this.D.r();
        w0 w0Var = r10;
        while (w0Var != null && !bVar.equals(w0Var.f14191f.f14202a)) {
            w0Var = w0Var.j();
        }
        if (z10 || r10 != w0Var || (w0Var != null && w0Var.z(j10) < 0)) {
            for (v1 v1Var : this.f13603d) {
                p(v1Var);
            }
            if (w0Var != null) {
                while (this.D.r() != w0Var) {
                    this.D.b();
                }
                this.D.C(w0Var);
                w0Var.x(1000000000000L);
                s();
            }
        }
        if (w0Var != null) {
            this.D.C(w0Var);
            if (!w0Var.f14189d) {
                w0Var.f14191f = w0Var.f14191f.b(j10);
            } else if (w0Var.f14190e) {
                j10 = w0Var.f14186a.l(j10);
                w0Var.f14186a.t(j10 - this.f13615x, this.f13616y);
            }
            t0(j10);
            U();
        } else {
            this.D.f();
            t0(j10);
        }
        H(false);
        this.f13610s.h(2);
        return j10;
    }

    private void G(IOException iOException, int i10) {
        j g10 = j.g(iOException, i10);
        w0 r10 = this.D.r();
        if (r10 != null) {
            g10 = g10.e(r10.f14191f.f14202a);
        }
        oe.y.d("ExoPlayerImplInternal", "Playback error", g10);
        j1(false, false);
        this.I = this.I.f(g10);
    }

    private void G0(s1 s1Var) {
        if (s1Var.f() == -9223372036854775807L) {
            H0(s1Var);
        } else if (this.I.f13379a.u()) {
            this.A.add(new d(s1Var));
        } else {
            d dVar = new d(s1Var);
            Timeline timeline = this.I.f13379a;
            if (v0(dVar, timeline, timeline, this.P, this.Q, this.f13613v, this.f13614w)) {
                this.A.add(dVar);
                Collections.sort(this.A);
                return;
            }
            s1Var.k(false);
        }
    }

    private void H(boolean z10) {
        r.b bVar;
        long i10;
        w0 l10 = this.D.l();
        if (l10 == null) {
            bVar = this.I.f13380b;
        } else {
            bVar = l10.f14191f.f14202a;
        }
        boolean equals = this.I.f13389k.equals(bVar);
        if (!equals) {
            this.I = this.I.c(bVar);
        }
        r1 r1Var = this.I;
        if (l10 == null) {
            i10 = r1Var.f13396r;
        } else {
            i10 = l10.i();
        }
        r1Var.f13394p = i10;
        this.I.f13395q = D();
        if ((!equals || z10) && l10 != null && l10.f14189d) {
            m1(l10.f14191f.f14202a, l10.n(), l10.o());
        }
    }

    private void H0(s1 s1Var) {
        if (s1Var.c() == this.f13612u) {
            o(s1Var);
            int i10 = this.I.f13383e;
            if (i10 != 3 && i10 != 2) {
                return;
            }
            this.f13610s.h(2);
            return;
        }
        this.f13610s.d(15, s1Var).a();
    }

    private void I(Timeline timeline, boolean z10) {
        boolean z11;
        int i10;
        r.b bVar;
        long j10;
        Timeline timeline2;
        long j11;
        long j12;
        boolean z12;
        int i11;
        Timeline timeline3;
        long j13;
        boolean z13;
        long j14;
        int i12;
        Timeline timeline4;
        g x02 = x0(timeline, this.I, this.V, this.D, this.P, this.Q, this.f13613v, this.f13614w);
        r.b bVar2 = x02.f13634a;
        long j15 = x02.f13636c;
        boolean z14 = x02.f13637d;
        long j16 = x02.f13635b;
        int i13 = 1;
        if (this.I.f13380b.equals(bVar2) && j16 == this.I.f13396r) {
            z11 = false;
        } else {
            z11 = true;
        }
        Timeline timeline5 = null;
        try {
            if (x02.f13638e) {
                if (this.I.f13383e != 1) {
                    b1(4);
                }
                r0(false, false, false, true);
            }
            try {
                if (!z11) {
                    try {
                        try {
                            i10 = 4;
                            try {
                                i13 = -1;
                                try {
                                    timeline3 = timeline;
                                    if (!this.D.I(timeline, this.W, A())) {
                                        C0(false);
                                    }
                                } catch (Throwable th2) {
                                    th = th2;
                                    timeline5 = timeline;
                                    bVar = bVar2;
                                    j10 = j15;
                                    timeline2 = timeline5;
                                    r1 r1Var = this.I;
                                    Timeline timeline6 = r1Var.f13379a;
                                    r.b bVar3 = r1Var.f13380b;
                                    if (x02.f13639f) {
                                        j11 = j16;
                                    } else {
                                        j11 = -9223372036854775807L;
                                    }
                                    p1(timeline2, bVar, timeline6, bVar3, j11, false);
                                    if (z11 || j10 != this.I.f13381c) {
                                        r1 r1Var2 = this.I;
                                        Object obj = r1Var2.f13380b.f47006a;
                                        Timeline timeline7 = r1Var2.f13379a;
                                        if (z11 && z10 && !timeline7.u() && !timeline7.l(obj, this.f13614w).f12598q) {
                                            j12 = j10;
                                            z12 = true;
                                        } else {
                                            j12 = j10;
                                            z12 = false;
                                        }
                                        long j17 = this.I.f13382d;
                                        if (timeline2.f(obj) == i13) {
                                            i11 = i10;
                                        } else {
                                            i11 = 3;
                                        }
                                        this.I = M(bVar, j16, j12, j17, z12, i11);
                                    }
                                    s0();
                                    w0(timeline2, this.I.f13379a);
                                    this.I = this.I.j(timeline2);
                                    if (!timeline2.u()) {
                                        this.V = null;
                                    }
                                    H(false);
                                    throw th;
                                }
                            } catch (Throwable th3) {
                                th = th3;
                                timeline5 = timeline;
                                i13 = -1;
                            }
                        } catch (Throwable th4) {
                            th = th4;
                            timeline5 = timeline;
                            i13 = -1;
                            i10 = 4;
                        }
                    } catch (Throwable th5) {
                        th = th5;
                        timeline5 = timeline;
                        i13 = -1;
                        i10 = 4;
                    }
                } else {
                    timeline3 = timeline;
                    i13 = -1;
                    i10 = 4;
                    if (!timeline3.u()) {
                        for (w0 r10 = this.D.r(); r10 != null; r10 = r10.j()) {
                            if (r10.f14191f.f14202a.equals(bVar2)) {
                                r10.f14191f = this.D.t(timeline3, r10.f14191f);
                                r10.A();
                            }
                        }
                        j16 = E0(bVar2, j16, z14);
                    }
                }
                r1 r1Var3 = this.I;
                Timeline timeline8 = r1Var3.f13379a;
                r.b bVar4 = r1Var3.f13380b;
                if (x02.f13639f) {
                    j13 = j16;
                } else {
                    j13 = -9223372036854775807L;
                }
                p1(timeline3, bVar2, timeline8, bVar4, j13, false);
                if (!z11 && j15 == this.I.f13381c) {
                    timeline4 = timeline3;
                } else {
                    r1 r1Var4 = this.I;
                    Object obj2 = r1Var4.f13380b.f47006a;
                    Timeline timeline9 = r1Var4.f13379a;
                    if (z11 && z10 && !timeline9.u() && !timeline9.l(obj2, this.f13614w).f12598q) {
                        z13 = true;
                    } else {
                        z13 = false;
                    }
                    long j18 = this.I.f13382d;
                    if (timeline3.f(obj2) == i13) {
                        j14 = j15;
                        i12 = i10;
                    } else {
                        j14 = j15;
                        i12 = 3;
                    }
                    timeline4 = timeline3;
                    this.I = M(bVar2, j16, j14, j18, z13, i12);
                }
                s0();
                w0(timeline4, this.I.f13379a);
                this.I = this.I.j(timeline4);
                if (!timeline4.u()) {
                    this.V = null;
                }
                H(false);
            } catch (Throwable th6) {
                th = th6;
            }
        } catch (Throwable th7) {
            th = th7;
            i13 = -1;
            i10 = 4;
            bVar = bVar2;
            j10 = j15;
            timeline2 = timeline;
        }
    }

    private void I0(final s1 s1Var) {
        Looper c10 = s1Var.c();
        if (!c10.getThread().isAlive()) {
            oe.y.i("TAG", "Trying to send message on a dead thread.");
            s1Var.k(false);
            return;
        }
        this.B.c(c10, null).post(new Runnable() { // from class: com.google.android.exoplayer2.s0
            @Override // java.lang.Runnable
            public final void run() {
                t0.g(t0.this, s1Var);
            }
        });
    }

    private void J(rd.p pVar) {
        if (!this.D.y(pVar)) {
            return;
        }
        w0 l10 = this.D.l();
        l10.p(this.f13617z.c().f12554d, this.I.f13379a);
        m1(l10.f14191f.f14202a, l10.n(), l10.o());
        if (l10 == this.D.r()) {
            t0(l10.f14191f.f14203b);
            s();
            r1 r1Var = this.I;
            r.b bVar = r1Var.f13380b;
            long j10 = l10.f14191f.f14203b;
            this.I = M(bVar, j10, r1Var.f13381c, j10, false, 5);
        }
        U();
    }

    private void J0(long j10) {
        v1[] v1VarArr;
        for (v1 v1Var : this.f13603d) {
            if (v1Var.z() != null) {
                K0(v1Var, j10);
            }
        }
    }

    private void K(PlaybackParameters playbackParameters, float f10, boolean z10, boolean z11) {
        v1[] v1VarArr;
        if (z10) {
            if (z11) {
                this.J.b(1);
            }
            this.I = this.I.g(playbackParameters);
        }
        q1(playbackParameters.f12554d);
        for (v1 v1Var : this.f13603d) {
            if (v1Var != null) {
                v1Var.w(f10, playbackParameters.f12554d);
            }
        }
    }

    private void K0(v1 v1Var, long j10) {
        v1Var.k();
        if (v1Var instanceof ae.n) {
            ((ae.n) v1Var).k0(j10);
        }
    }

    private void L(PlaybackParameters playbackParameters, boolean z10) {
        K(playbackParameters, playbackParameters.f12554d, true, z10);
    }

    private void L0(boolean z10, AtomicBoolean atomicBoolean) {
        v1[] v1VarArr;
        if (this.R != z10) {
            this.R = z10;
            if (!z10) {
                for (v1 v1Var : this.f13603d) {
                    if (!R(v1Var) && this.f13604e.remove(v1Var)) {
                        v1Var.reset();
                    }
                }
            }
        }
        if (atomicBoolean != null) {
            synchronized (this) {
                atomicBoolean.set(true);
                notifyAll();
            }
        }
    }

    private r1 M(r.b bVar, long j10, long j11, long j12, boolean z10, int i10) {
        boolean z11;
        List list;
        rd.w0 w0Var;
        ke.r rVar;
        rd.w0 n10;
        ke.r o10;
        if (!this.Y && j10 == this.I.f13396r && bVar.equals(this.I.f13380b)) {
            z11 = false;
        } else {
            z11 = true;
        }
        this.Y = z11;
        s0();
        r1 r1Var = this.I;
        rd.w0 w0Var2 = r1Var.f13386h;
        ke.r rVar2 = r1Var.f13387i;
        List list2 = r1Var.f13388j;
        if (this.E.t()) {
            w0 r10 = this.D.r();
            if (r10 == null) {
                n10 = rd.w0.f47078o;
            } else {
                n10 = r10.n();
            }
            if (r10 == null) {
                o10 = this.f13607p;
            } else {
                o10 = r10.o();
            }
            List w10 = w(o10.f32293c);
            if (r10 != null) {
                x0 x0Var = r10.f14191f;
                if (x0Var.f14204c != j11) {
                    r10.f14191f = x0Var.a(j11);
                }
            }
            w0Var = n10;
            rVar = o10;
            list = w10;
        } else {
            if (!bVar.equals(this.I.f13380b)) {
                w0Var2 = rd.w0.f47078o;
                rVar2 = this.f13607p;
                list2 = qi.s.t();
            }
            list = list2;
            w0Var = w0Var2;
            rVar = rVar2;
        }
        if (z10) {
            this.J.e(i10);
        }
        return this.I.d(bVar, j10, j11, j12, D(), w0Var, rVar, list);
    }

    private void M0(PlaybackParameters playbackParameters) {
        this.f13610s.j(16);
        this.f13617z.f(playbackParameters);
    }

    private boolean N(v1 v1Var, w0 w0Var) {
        w0 j10 = w0Var.j();
        if (w0Var.f14191f.f14207f && j10.f14189d) {
            if ((v1Var instanceof ae.n) || (v1Var instanceof com.google.android.exoplayer2.metadata.a) || v1Var.A() >= j10.m()) {
                return true;
            }
            return false;
        }
        return false;
    }

    private void N0(b bVar) {
        this.J.b(1);
        if (bVar.f13621c != -1) {
            this.V = new h(new t1(bVar.f13619a, bVar.f13620b), bVar.f13621c, bVar.f13622d);
        }
        I(this.E.B(bVar.f13619a, bVar.f13620b), false);
    }

    private boolean O() {
        w0 s10 = this.D.s();
        if (!s10.f14189d) {
            return false;
        }
        int i10 = 0;
        while (true) {
            v1[] v1VarArr = this.f13603d;
            if (i10 < v1VarArr.length) {
                v1 v1Var = v1VarArr[i10];
                rd.m0 m0Var = s10.f14188c[i10];
                if (v1Var.z() != m0Var || (m0Var != null && !v1Var.h() && !N(v1Var, s10))) {
                    break;
                }
                i10++;
            } else {
                return true;
            }
        }
        return false;
    }

    private static boolean P(boolean z10, r.b bVar, long j10, r.b bVar2, Timeline.b bVar3, long j11) {
        if (!z10 && j10 == j11 && bVar.f47006a.equals(bVar2.f47006a)) {
            if (bVar.b() && bVar3.u(bVar.f47007b)) {
                if (bVar3.k(bVar.f47007b, bVar.f47008c) == 4 || bVar3.k(bVar.f47007b, bVar.f47008c) == 2) {
                    return false;
                }
                return true;
            } else if (bVar2.b() && bVar3.u(bVar2.f47007b)) {
                return true;
            }
        }
        return false;
    }

    private void P0(boolean z10) {
        if (z10 != this.T) {
            this.T = z10;
            if (!z10 && this.I.f13393o) {
                this.f13610s.h(2);
            }
        }
    }

    private boolean Q() {
        w0 l10 = this.D.l();
        if (l10 == null || l10.k() == Long.MIN_VALUE) {
            return false;
        }
        return true;
    }

    private void Q0(boolean z10) {
        this.L = z10;
        s0();
        if (this.M && this.D.s() != this.D.r()) {
            C0(true);
            H(false);
        }
    }

    private static boolean R(v1 v1Var) {
        if (v1Var.getState() != 0) {
            return true;
        }
        return false;
    }

    private boolean S() {
        w0 r10 = this.D.r();
        long j10 = r10.f14191f.f14206e;
        if (r10.f14189d) {
            if (j10 == -9223372036854775807L || this.I.f13396r < j10 || !e1()) {
                return true;
            }
            return false;
        }
        return false;
    }

    private void S0(boolean z10, int i10, boolean z11, int i11) {
        this.J.b(z11 ? 1 : 0);
        this.J.c(i11);
        this.I = this.I.e(z10, i10);
        this.N = false;
        e0(z10);
        if (!e1()) {
            k1();
            o1();
            return;
        }
        int i12 = this.I.f13383e;
        if (i12 == 3) {
            h1();
            this.f13610s.h(2);
        } else if (i12 == 2) {
            this.f13610s.h(2);
        }
    }

    private static boolean T(r1 r1Var, Timeline.b bVar) {
        r.b bVar2 = r1Var.f13380b;
        Timeline timeline = r1Var.f13379a;
        if (!timeline.u() && !timeline.l(bVar2.f47006a, bVar).f12598q) {
            return false;
        }
        return true;
    }

    private void U() {
        boolean d12 = d1();
        this.O = d12;
        if (d12) {
            this.D.l().d(this.W);
        }
        l1();
    }

    private void U0(PlaybackParameters playbackParameters) {
        M0(playbackParameters);
        L(this.f13617z.c(), true);
    }

    private void V() {
        this.J.d(this.I);
        if (this.J.f13627a) {
            this.C.a(this.J);
            this.J = new e(this.I);
        }
    }

    /* JADX WARN: Removed duplicated region for block: B:39:0x0095 A[LOOP:1: B:29:0x0079->B:39:0x0095, LOOP_END] */
    /* JADX WARN: Removed duplicated region for block: B:78:0x0078 A[SYNTHETIC] */
    /* JADX WARN: Removed duplicated region for block: B:88:0x00e1 A[SYNTHETIC] */
    /* JADX WARN: Removed duplicated region for block: B:90:0x00d8 A[SYNTHETIC] */
    /* JADX WARN: Unsupported multi-entry loop pattern (BACK_EDGE: B:28:0x0078 -> B:29:0x0079). Please submit an issue!!! */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private void W(long r9, long r11) {
        /*
            Method dump skipped, instructions count: 253
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: com.google.android.exoplayer2.t0.W(long, long):void");
    }

    private void W0(int i10) {
        this.P = i10;
        if (!this.D.J(this.I.f13379a, i10)) {
            C0(true);
        }
        H(false);
    }

    private void X() {
        x0 q10;
        this.D.B(this.W);
        if (this.D.G() && (q10 = this.D.q(this.W, this.I)) != null) {
            w0 g10 = this.D.g(this.f13605i, this.f13606o, this.f13608q.h(), this.E, q10, this.f13607p);
            g10.f14186a.u(this, q10.f14203b);
            if (this.D.r() == g10) {
                t0(q10.f14203b);
            }
            H(false);
        }
        if (this.O) {
            this.O = Q();
            l1();
            return;
        }
        U();
    }

    private void X0(mc.t0 t0Var) {
        this.H = t0Var;
    }

    private void Y() {
        boolean z10;
        boolean z11 = false;
        while (c1()) {
            if (z11) {
                V();
            }
            w0 w0Var = (w0) oe.a.e(this.D.b());
            if (this.I.f13380b.f47006a.equals(w0Var.f14191f.f14202a.f47006a)) {
                r.b bVar = this.I.f13380b;
                if (bVar.f47007b == -1) {
                    r.b bVar2 = w0Var.f14191f.f14202a;
                    if (bVar2.f47007b == -1 && bVar.f47010e != bVar2.f47010e) {
                        z10 = true;
                        x0 x0Var = w0Var.f14191f;
                        r.b bVar3 = x0Var.f14202a;
                        long j10 = x0Var.f14203b;
                        this.I = M(bVar3, j10, x0Var.f14204c, j10, !z10, 0);
                        s0();
                        o1();
                        z11 = true;
                    }
                }
            }
            z10 = false;
            x0 x0Var2 = w0Var.f14191f;
            r.b bVar32 = x0Var2.f14202a;
            long j102 = x0Var2.f14203b;
            this.I = M(bVar32, j102, x0Var2.f14204c, j102, !z10, 0);
            s0();
            o1();
            z11 = true;
        }
    }

    private void Z() {
        long j10;
        boolean z10;
        w0 s10 = this.D.s();
        if (s10 != null) {
            int i10 = 0;
            if (s10.j() != null && !this.M) {
                if (O()) {
                    if (s10.j().f14189d || this.W >= s10.j().m()) {
                        ke.r o10 = s10.o();
                        w0 c10 = this.D.c();
                        ke.r o11 = c10.o();
                        Timeline timeline = this.I.f13379a;
                        p1(timeline, c10.f14191f.f14202a, timeline, s10.f14191f.f14202a, -9223372036854775807L, false);
                        if (c10.f14189d && c10.f14186a.m() != -9223372036854775807L) {
                            J0(c10.m());
                            return;
                        }
                        for (int i11 = 0; i11 < this.f13603d.length; i11++) {
                            boolean c11 = o10.c(i11);
                            boolean c12 = o11.c(i11);
                            if (c11 && !this.f13603d[i11].r()) {
                                if (this.f13605i[i11].e() == -2) {
                                    z10 = true;
                                } else {
                                    z10 = false;
                                }
                                mc.r0 r0Var = o10.f32292b[i11];
                                mc.r0 r0Var2 = o11.f32292b[i11];
                                if (!c12 || !r0Var2.equals(r0Var) || z10) {
                                    K0(this.f13603d[i11], c10.m());
                                }
                            }
                        }
                    }
                }
            } else if (s10.f14191f.f14210i || this.M) {
                while (true) {
                    v1[] v1VarArr = this.f13603d;
                    if (i10 < v1VarArr.length) {
                        v1 v1Var = v1VarArr[i10];
                        rd.m0 m0Var = s10.f14188c[i10];
                        if (m0Var != null && v1Var.z() == m0Var && v1Var.h()) {
                            long j11 = s10.f14191f.f14206e;
                            if (j11 != -9223372036854775807L && j11 != Long.MIN_VALUE) {
                                j10 = s10.l() + s10.f14191f.f14206e;
                            } else {
                                j10 = -9223372036854775807L;
                            }
                            K0(v1Var, j10);
                        }
                        i10++;
                    } else {
                        return;
                    }
                }
            }
        }
    }

    private void Z0(boolean z10) {
        this.Q = z10;
        if (!this.D.K(this.I.f13379a, z10)) {
            C0(true);
        }
        H(false);
    }

    private void a0() {
        w0 s10 = this.D.s();
        if (s10 != null && this.D.r() != s10 && !s10.f14192g && o0()) {
            s();
        }
    }

    private void a1(rd.o0 o0Var) {
        this.J.b(1);
        I(this.E.C(o0Var), false);
    }

    private void b0() {
        I(this.E.i(), true);
    }

    private void b1(int i10) {
        r1 r1Var = this.I;
        if (r1Var.f13383e != i10) {
            if (i10 != 2) {
                this.f13602b0 = -9223372036854775807L;
            }
            this.I = r1Var.h(i10);
        }
    }

    private void c0(c cVar) {
        this.J.b(1);
        throw null;
    }

    private boolean c1() {
        w0 r10;
        w0 j10;
        if (!e1() || this.M || (r10 = this.D.r()) == null || (j10 = r10.j()) == null || this.W < j10.m() || !j10.f14192g) {
            return false;
        }
        return true;
    }

    private void d0() {
        com.google.android.exoplayer2.trackselection.g[] gVarArr;
        for (w0 r10 = this.D.r(); r10 != null; r10 = r10.j()) {
            for (com.google.android.exoplayer2.trackselection.g gVar : r10.o().f32293c) {
                if (gVar != null) {
                    gVar.i();
                }
            }
        }
    }

    private boolean d1() {
        long y10;
        if (!Q()) {
            return false;
        }
        w0 l10 = this.D.l();
        long E = E(l10.k());
        if (l10 == this.D.r()) {
            y10 = l10.y(this.W);
        } else {
            y10 = l10.y(this.W) - l10.f14191f.f14203b;
        }
        long j10 = y10;
        boolean k10 = this.f13608q.k(j10, E, this.f13617z.c().f12554d);
        if (!k10 && E < 500000) {
            if (this.f13615x > 0 || this.f13616y) {
                this.D.r().f14186a.t(this.I.f13396r, false);
                return this.f13608q.k(j10, E, this.f13617z.c().f12554d);
            }
            return k10;
        }
        return k10;
    }

    private void e0(boolean z10) {
        com.google.android.exoplayer2.trackselection.g[] gVarArr;
        for (w0 r10 = this.D.r(); r10 != null; r10 = r10.j()) {
            for (com.google.android.exoplayer2.trackselection.g gVar : r10.o().f32293c) {
                if (gVar != null) {
                    gVar.m(z10);
                }
            }
        }
    }

    private boolean e1() {
        r1 r1Var = this.I;
        if (r1Var.f13390l && r1Var.f13391m == 0) {
            return true;
        }
        return false;
    }

    private void f0() {
        com.google.android.exoplayer2.trackselection.g[] gVarArr;
        for (w0 r10 = this.D.r(); r10 != null; r10 = r10.j()) {
            for (com.google.android.exoplayer2.trackselection.g gVar : r10.o().f32293c) {
                if (gVar != null) {
                    gVar.s();
                }
            }
        }
    }

    private boolean f1(boolean z10) {
        long j10;
        boolean z11;
        boolean z12;
        if (this.U == 0) {
            return S();
        }
        if (!z10) {
            return false;
        }
        if (!this.I.f13385g) {
            return true;
        }
        w0 r10 = this.D.r();
        if (g1(this.I.f13379a, r10.f14191f.f14202a)) {
            j10 = this.F.c();
        } else {
            j10 = -9223372036854775807L;
        }
        long j11 = j10;
        w0 l10 = this.D.l();
        if (l10.q() && l10.f14191f.f14210i) {
            z11 = true;
        } else {
            z11 = false;
        }
        if (l10.f14191f.f14202a.b() && !l10.f14189d) {
            z12 = true;
        } else {
            z12 = false;
        }
        if (!z11 && !z12 && !this.f13608q.g(this.I.f13379a, r10.f14191f.f14202a, D(), this.f13617z.c().f12554d, this.N, j11)) {
            return false;
        }
        return true;
    }

    public static /* synthetic */ void g(t0 t0Var, s1 s1Var) {
        t0Var.getClass();
        try {
            t0Var.o(s1Var);
        } catch (j e10) {
            oe.y.d("ExoPlayerImplInternal", "Unexpected error delivering message on external thread.", e10);
            throw new RuntimeException(e10);
        }
    }

    private boolean g1(Timeline timeline, r.b bVar) {
        if (!bVar.b() && !timeline.u()) {
            timeline.r(timeline.l(bVar.f47006a, this.f13614w).f12595i, this.f13613v);
            if (this.f13613v.g()) {
                Timeline.d dVar = this.f13613v;
                if (dVar.f12612t && dVar.f12609q != -9223372036854775807L) {
                    return true;
                }
            }
        }
        return false;
    }

    private void h1() {
        v1[] v1VarArr;
        this.N = false;
        this.f13617z.g();
        for (v1 v1Var : this.f13603d) {
            if (R(v1Var)) {
                v1Var.start();
            }
        }
    }

    private void i0() {
        int i10;
        this.J.b(1);
        r0(false, false, false, true);
        this.f13608q.c();
        if (this.I.f13379a.u()) {
            i10 = 4;
        } else {
            i10 = 2;
        }
        b1(i10);
        this.E.v(this.f13609r.e());
        this.f13610s.h(2);
    }

    private void j1(boolean z10, boolean z11) {
        boolean z12;
        if (!z10 && this.R) {
            z12 = false;
        } else {
            z12 = true;
        }
        r0(z12, false, true, false);
        this.J.b(z11 ? 1 : 0);
        this.f13608q.i();
        b1(1);
    }

    private void k0() {
        r0(true, false, true, false);
        l0();
        this.f13608q.j();
        b1(1);
        HandlerThread handlerThread = this.f13611t;
        if (handlerThread != null) {
            handlerThread.quit();
        }
        synchronized (this) {
            this.K = true;
            notifyAll();
        }
    }

    private void k1() {
        v1[] v1VarArr;
        this.f13617z.h();
        for (v1 v1Var : this.f13603d) {
            if (R(v1Var)) {
                u(v1Var);
            }
        }
    }

    private void l0() {
        for (int i10 = 0; i10 < this.f13603d.length; i10++) {
            this.f13605i[i10].g();
            this.f13603d[i10].release();
        }
    }

    private void l1() {
        boolean z10;
        w0 l10 = this.D.l();
        if (!this.O && (l10 == null || !l10.f14186a.d())) {
            z10 = false;
        } else {
            z10 = true;
        }
        r1 r1Var = this.I;
        if (z10 != r1Var.f13385g) {
            this.I = r1Var.b(z10);
        }
    }

    private void m(b bVar, int i10) {
        this.J.b(1);
        o1 o1Var = this.E;
        if (i10 == -1) {
            i10 = o1Var.r();
        }
        I(o1Var.f(i10, bVar.f13619a, bVar.f13620b), false);
    }

    private void m0(int i10, int i11, rd.o0 o0Var) {
        this.J.b(1);
        I(this.E.z(i10, i11, o0Var), false);
    }

    private void m1(r.b bVar, rd.w0 w0Var, ke.r rVar) {
        this.f13608q.f(this.I.f13379a, bVar, this.f13603d, w0Var, rVar.f32293c);
    }

    private void n() {
        q0();
    }

    private void n1() {
        if (!this.I.f13379a.u() && this.E.t()) {
            X();
            Z();
            a0();
            Y();
        }
    }

    private void o(s1 s1Var) {
        if (s1Var.j()) {
            return;
        }
        try {
            s1Var.g().o(s1Var.i(), s1Var.e());
        } finally {
            s1Var.k(true);
        }
    }

    private boolean o0() {
        boolean z10;
        w0 s10 = this.D.s();
        ke.r o10 = s10.o();
        int i10 = 0;
        boolean z11 = false;
        while (true) {
            v1[] v1VarArr = this.f13603d;
            if (i10 < v1VarArr.length) {
                v1 v1Var = v1VarArr[i10];
                if (R(v1Var)) {
                    if (v1Var.z() != s10.f14188c[i10]) {
                        z10 = true;
                    } else {
                        z10 = false;
                    }
                    if (!o10.c(i10) || z10) {
                        if (!v1Var.r()) {
                            v1Var.j(y(o10.f32293c[i10]), s10.f14188c[i10], s10.m(), s10.l());
                        } else if (v1Var.d()) {
                            p(v1Var);
                        } else {
                            z11 = true;
                        }
                    }
                }
                i10++;
            } else {
                return !z11;
            }
        }
    }

    private void o1() {
        long j10;
        boolean z10;
        w0 r10 = this.D.r();
        if (r10 != null) {
            if (r10.f14189d) {
                j10 = r10.f14186a.m();
            } else {
                j10 = -9223372036854775807L;
            }
            if (j10 != -9223372036854775807L) {
                t0(j10);
                if (j10 != this.I.f13396r) {
                    r1 r1Var = this.I;
                    long j11 = j10;
                    this.I = M(r1Var.f13380b, j11, r1Var.f13381c, j11, true, 5);
                }
            } else {
                i iVar = this.f13617z;
                if (r10 != this.D.s()) {
                    z10 = true;
                } else {
                    z10 = false;
                }
                long i10 = iVar.i(z10);
                this.W = i10;
                long y10 = r10.y(i10);
                W(this.I.f13396r, y10);
                this.I.o(y10);
            }
            this.I.f13394p = this.D.l().i();
            this.I.f13395q = D();
            r1 r1Var2 = this.I;
            if (r1Var2.f13390l && r1Var2.f13383e == 3 && g1(r1Var2.f13379a, r1Var2.f13380b) && this.I.f13392n.f12554d == 1.0f) {
                float b10 = this.F.b(x(), D());
                if (this.f13617z.c().f12554d != b10) {
                    M0(this.I.f13392n.c(b10));
                    K(this.I.f13392n, this.f13617z.c().f12554d, false, false);
                }
            }
        }
    }

    private void p(v1 v1Var) {
        if (!R(v1Var)) {
            return;
        }
        this.f13617z.a(v1Var);
        u(v1Var);
        v1Var.disable();
        this.U--;
    }

    private void p0() {
        int i10;
        boolean z10;
        float f10 = this.f13617z.c().f12554d;
        w0 s10 = this.D.s();
        boolean z11 = true;
        for (w0 r10 = this.D.r(); r10 != null && r10.f14189d; r10 = r10.j()) {
            ke.r v10 = r10.v(f10, this.I.f13379a);
            if (!v10.a(r10.o())) {
                if (z11) {
                    w0 r11 = this.D.r();
                    boolean C = this.D.C(r11);
                    boolean[] zArr = new boolean[this.f13603d.length];
                    long b10 = r11.b(v10, this.I.f13396r, C, zArr);
                    r1 r1Var = this.I;
                    if (r1Var.f13383e != 4 && b10 != r1Var.f13396r) {
                        z10 = true;
                    } else {
                        z10 = false;
                    }
                    r1 r1Var2 = this.I;
                    i10 = 4;
                    this.I = M(r1Var2.f13380b, b10, r1Var2.f13381c, r1Var2.f13382d, z10, 5);
                    if (z10) {
                        t0(b10);
                    }
                    boolean[] zArr2 = new boolean[this.f13603d.length];
                    int i11 = 0;
                    while (true) {
                        v1[] v1VarArr = this.f13603d;
                        if (i11 >= v1VarArr.length) {
                            break;
                        }
                        v1 v1Var = v1VarArr[i11];
                        boolean R = R(v1Var);
                        zArr2[i11] = R;
                        rd.m0 m0Var = r11.f14188c[i11];
                        if (R) {
                            if (m0Var != v1Var.z()) {
                                p(v1Var);
                            } else if (zArr[i11]) {
                                v1Var.B(this.W);
                            }
                        }
                        i11++;
                    }
                    t(zArr2);
                } else {
                    i10 = 4;
                    this.D.C(r10);
                    if (r10.f14189d) {
                        r10.a(v10, Math.max(r10.f14191f.f14203b, r10.y(this.W)), false);
                    }
                }
                H(true);
                if (this.I.f13383e != i10) {
                    U();
                    o1();
                    this.f13610s.h(2);
                    return;
                }
                return;
            }
            if (r10 == s10) {
                z11 = false;
            }
        }
    }

    private void p1(Timeline timeline, r.b bVar, Timeline timeline2, r.b bVar2, long j10, boolean z10) {
        Object obj;
        PlaybackParameters playbackParameters;
        if (!g1(timeline, bVar)) {
            if (bVar.b()) {
                playbackParameters = PlaybackParameters.f12550o;
            } else {
                playbackParameters = this.I.f13392n;
            }
            if (!this.f13617z.c().equals(playbackParameters)) {
                M0(playbackParameters);
                K(this.I.f13392n, playbackParameters.f12554d, false, false);
                return;
            }
            return;
        }
        timeline.r(timeline.l(bVar.f47006a, this.f13614w).f12595i, this.f13613v);
        this.F.a((MediaItem.g) oe.w0.j(this.f13613v.f12614v));
        if (j10 != -9223372036854775807L) {
            this.F.e(z(timeline, bVar.f47006a, j10));
            return;
        }
        Object obj2 = this.f13613v.f12604d;
        if (!timeline2.u()) {
            obj = timeline2.r(timeline2.l(bVar2.f47006a, this.f13614w).f12595i, this.f13613v).f12604d;
        } else {
            obj = null;
        }
        if (oe.w0.c(obj, obj2) && !z10) {
            return;
        }
        this.F.e(-9223372036854775807L);
    }

    /* JADX WARN: Removed duplicated region for block: B:130:0x01c6  */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private void q() {
        /*
            Method dump skipped, instructions count: 498
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: com.google.android.exoplayer2.t0.q():void");
    }

    private void q0() {
        p0();
        C0(true);
    }

    private void q1(float f10) {
        com.google.android.exoplayer2.trackselection.g[] gVarArr;
        for (w0 r10 = this.D.r(); r10 != null; r10 = r10.j()) {
            for (com.google.android.exoplayer2.trackselection.g gVar : r10.o().f32293c) {
                if (gVar != null) {
                    gVar.g(f10);
                }
            }
        }
    }

    private void r(int i10, boolean z10) {
        boolean z11;
        boolean z12;
        boolean z13;
        v1 v1Var = this.f13603d[i10];
        if (!R(v1Var)) {
            w0 s10 = this.D.s();
            if (s10 == this.D.r()) {
                z11 = true;
            } else {
                z11 = false;
            }
            ke.r o10 = s10.o();
            mc.r0 r0Var = o10.f32292b[i10];
            Format[] y10 = y(o10.f32293c[i10]);
            if (e1() && this.I.f13383e == 3) {
                z12 = true;
            } else {
                z12 = false;
            }
            if (!z10 && z12) {
                z13 = true;
            } else {
                z13 = false;
            }
            this.U++;
            this.f13604e.add(v1Var);
            v1Var.E(r0Var, y10, s10.f14188c[i10], this.W, z13, z11, s10.m(), s10.l());
            v1Var.o(11, new a());
            this.f13617z.b(v1Var);
            if (z12) {
                v1Var.start();
            }
        }
    }

    /* JADX WARN: Removed duplicated region for block: B:42:0x00c7  */
    /* JADX WARN: Removed duplicated region for block: B:49:0x00f6  */
    /* JADX WARN: Removed duplicated region for block: B:51:0x00fb  */
    /* JADX WARN: Removed duplicated region for block: B:53:0x00ff  */
    /* JADX WARN: Removed duplicated region for block: B:55:0x0104  */
    /* JADX WARN: Removed duplicated region for block: B:57:0x0109  */
    /* JADX WARN: Removed duplicated region for block: B:59:0x010e  */
    /* JADX WARN: Removed duplicated region for block: B:61:0x0115  */
    /* JADX WARN: Removed duplicated region for block: B:64:0x013a  */
    /* JADX WARN: Removed duplicated region for block: B:77:? A[RETURN, SYNTHETIC] */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private void r0(boolean r32, boolean r33, boolean r34, boolean r35) {
        /*
            Method dump skipped, instructions count: 320
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: com.google.android.exoplayer2.t0.r0(boolean, boolean, boolean, boolean):void");
    }

    private synchronized void r1(pi.r rVar, long j10) {
        long b10 = this.B.b() + j10;
        boolean z10 = false;
        while (!((Boolean) rVar.get()).booleanValue() && j10 > 0) {
            try {
                this.B.d();
                wait(j10);
            } catch (InterruptedException unused) {
                z10 = true;
            }
            j10 = b10 - this.B.b();
        }
        if (z10) {
            Thread.currentThread().interrupt();
        }
    }

    private void s() {
        t(new boolean[this.f13603d.length]);
    }

    private void s0() {
        boolean z10;
        w0 r10 = this.D.r();
        if (r10 != null && r10.f14191f.f14209h && this.L) {
            z10 = true;
        } else {
            z10 = false;
        }
        this.M = z10;
    }

    private void t(boolean[] zArr) {
        w0 s10 = this.D.s();
        ke.r o10 = s10.o();
        for (int i10 = 0; i10 < this.f13603d.length; i10++) {
            if (!o10.c(i10) && this.f13604e.remove(this.f13603d[i10])) {
                this.f13603d[i10].reset();
            }
        }
        for (int i11 = 0; i11 < this.f13603d.length; i11++) {
            if (o10.c(i11)) {
                r(i11, zArr[i11]);
            }
        }
        s10.f14192g = true;
    }

    private void t0(long j10) {
        long z10;
        v1[] v1VarArr;
        w0 r10 = this.D.r();
        if (r10 == null) {
            z10 = j10 + 1000000000000L;
        } else {
            z10 = r10.z(j10);
        }
        this.W = z10;
        this.f13617z.d(z10);
        for (v1 v1Var : this.f13603d) {
            if (R(v1Var)) {
                v1Var.B(this.W);
            }
        }
        d0();
    }

    private void u(v1 v1Var) {
        if (v1Var.getState() == 2) {
            v1Var.stop();
        }
    }

    private static void u0(Timeline timeline, d dVar, Timeline.d dVar2, Timeline.b bVar) {
        long j10;
        int i10 = timeline.r(timeline.l(dVar.f13626o, bVar).f12595i, dVar2).A;
        Object obj = timeline.k(i10, bVar, true).f12594e;
        long j11 = bVar.f12596o;
        if (j11 != -9223372036854775807L) {
            j10 = j11 - 1;
        } else {
            j10 = LongCompanionObject.MAX_VALUE;
        }
        dVar.d(i10, j10, obj);
    }

    private static boolean v0(d dVar, Timeline timeline, Timeline timeline2, int i10, boolean z10, Timeline.d dVar2, Timeline.b bVar) {
        long K0;
        Object obj = dVar.f13626o;
        if (obj == null) {
            if (dVar.f13623d.f() == Long.MIN_VALUE) {
                K0 = -9223372036854775807L;
            } else {
                K0 = oe.w0.K0(dVar.f13623d.f());
            }
            Pair y02 = y0(timeline, new h(dVar.f13623d.h(), dVar.f13623d.d(), K0), false, i10, z10, dVar2, bVar);
            if (y02 == null) {
                return false;
            }
            dVar.d(timeline.f(y02.first), ((Long) y02.second).longValue(), y02.first);
            if (dVar.f13623d.f() == Long.MIN_VALUE) {
                u0(timeline, dVar, dVar2, bVar);
            }
            return true;
        }
        int f10 = timeline.f(obj);
        if (f10 == -1) {
            return false;
        }
        if (dVar.f13623d.f() == Long.MIN_VALUE) {
            u0(timeline, dVar, dVar2, bVar);
            return true;
        }
        dVar.f13624e = f10;
        timeline2.l(dVar.f13626o, bVar);
        if (bVar.f12598q && timeline2.r(bVar.f12595i, dVar2).f12618z == timeline2.f(dVar.f13626o)) {
            Pair n10 = timeline.n(dVar2, bVar, timeline.l(dVar.f13626o, bVar).f12595i, dVar.f13625i + bVar.q());
            dVar.d(timeline.f(n10.first), ((Long) n10.second).longValue(), n10.first);
        }
        return true;
    }

    private qi.s w(com.google.android.exoplayer2.trackselection.g[] gVarArr) {
        s.a aVar = new s.a();
        boolean z10 = false;
        for (com.google.android.exoplayer2.trackselection.g gVar : gVarArr) {
            if (gVar != null) {
                Metadata metadata = gVar.c(0).f12303u;
                if (metadata == null) {
                    aVar.a(new Metadata(new Metadata.b[0]));
                } else {
                    aVar.a(metadata);
                    z10 = true;
                }
            }
        }
        if (z10) {
            return aVar.k();
        }
        return qi.s.t();
    }

    private void w0(Timeline timeline, Timeline timeline2) {
        if (timeline.u() && timeline2.u()) {
            return;
        }
        int size = this.A.size() - 1;
        while (size >= 0) {
            Timeline timeline3 = timeline;
            Timeline timeline4 = timeline2;
            if (!v0((d) this.A.get(size), timeline3, timeline4, this.P, this.Q, this.f13613v, this.f13614w)) {
                ((d) this.A.get(size)).f13623d.k(false);
                this.A.remove(size);
            }
            size--;
            timeline = timeline3;
            timeline2 = timeline4;
        }
        Collections.sort(this.A);
    }

    private long x() {
        r1 r1Var = this.I;
        return z(r1Var.f13379a, r1Var.f13380b.f47006a, r1Var.f13396r);
    }

    private static g x0(Timeline timeline, r1 r1Var, h hVar, z0 z0Var, int i10, boolean z10, Timeline.d dVar, Timeline.b bVar) {
        long j10;
        long j11;
        long j12;
        int i11;
        boolean z11;
        boolean z12;
        boolean z13;
        int i12;
        boolean z14;
        Timeline timeline2;
        Timeline.b bVar2;
        long j13;
        boolean z15;
        long j14;
        int i13;
        boolean z16;
        boolean z17;
        boolean z18;
        if (timeline.u()) {
            return new g(r1.l(), 0L, -9223372036854775807L, false, true, false);
        }
        r.b bVar3 = r1Var.f13380b;
        Object obj = bVar3.f47006a;
        boolean T = T(r1Var, bVar);
        if (!r1Var.f13380b.b() && !T) {
            j10 = r1Var.f13396r;
        } else {
            j10 = r1Var.f13381c;
        }
        long j15 = j10;
        boolean z19 = false;
        if (hVar != null) {
            Pair y02 = y0(timeline, hVar, true, i10, z10, dVar, bVar);
            if (y02 == null) {
                i11 = timeline.e(z10);
                j12 = j15;
                j11 = -9223372036854775807L;
                z16 = false;
                z17 = false;
                z18 = true;
            } else {
                if (hVar.f13642c == -9223372036854775807L) {
                    i11 = timeline.l(y02.first, bVar).f12595i;
                    j12 = j15;
                    z16 = false;
                } else {
                    obj = y02.first;
                    j12 = ((Long) y02.second).longValue();
                    i11 = -1;
                    z16 = true;
                }
                j11 = -9223372036854775807L;
                if (r1Var.f13383e == 4) {
                    z17 = true;
                } else {
                    z17 = false;
                }
                z18 = false;
            }
            z13 = z16;
            z11 = z17;
            z12 = z18;
        } else {
            j11 = -9223372036854775807L;
            if (r1Var.f13379a.u()) {
                i11 = timeline.e(z10);
            } else if (timeline.f(obj) == -1) {
                Object z02 = z0(dVar, bVar, i10, z10, obj, r1Var.f13379a, timeline);
                if (z02 == null) {
                    i12 = timeline.e(z10);
                    z14 = true;
                } else {
                    i12 = timeline.l(z02, bVar).f12595i;
                    z14 = false;
                }
                i11 = i12;
                obj = obj;
                j12 = j15;
                z12 = z14;
                z11 = false;
                z13 = false;
            } else if (j15 == -9223372036854775807L) {
                i11 = timeline.l(obj, bVar).f12595i;
                obj = obj;
            } else if (T) {
                r1Var.f13379a.l(bVar3.f47006a, bVar);
                if (r1Var.f13379a.r(bVar.f12595i, dVar).f12618z == r1Var.f13379a.f(bVar3.f47006a)) {
                    Pair n10 = timeline.n(dVar, bVar, timeline.l(obj, bVar).f12595i, bVar.q() + j15);
                    obj = n10.first;
                    j12 = ((Long) n10.second).longValue();
                } else {
                    obj = obj;
                    j12 = j15;
                }
                i11 = -1;
                z11 = false;
                z12 = false;
                z13 = true;
            } else {
                obj = obj;
                j12 = j15;
                i11 = -1;
                z11 = false;
                z12 = false;
                z13 = false;
            }
            j12 = j15;
            z11 = false;
            z12 = false;
            z13 = false;
        }
        if (i11 != -1) {
            timeline2 = timeline;
            Pair n11 = timeline2.n(dVar, bVar, i11, -9223372036854775807L);
            bVar2 = bVar;
            obj = n11.first;
            j12 = ((Long) n11.second).longValue();
            j13 = j11;
        } else {
            timeline2 = timeline;
            bVar2 = bVar;
            j13 = j12;
        }
        r.b E = z0Var.E(timeline2, obj, j12);
        int i14 = E.f47010e;
        if (i14 != -1 && ((i13 = bVar3.f47010e) == -1 || i14 < i13)) {
            z15 = false;
        } else {
            z15 = true;
        }
        if (bVar3.f47006a.equals(obj) && !bVar3.b() && !E.b() && z15) {
            z19 = true;
        }
        r.b bVar4 = E;
        boolean P = P(T, bVar3, j15, bVar4, timeline2.l(obj, bVar2), j13);
        if (z19 || P) {
            bVar4 = bVar3;
        }
        if (bVar4.b()) {
            if (bVar4.equals(bVar3)) {
                j12 = r1Var.f13396r;
            } else {
                timeline2.l(bVar4.f47006a, bVar2);
                if (bVar4.f47008c == bVar2.n(bVar4.f47007b)) {
                    j14 = bVar2.j();
                } else {
                    j14 = 0;
                }
                j12 = j14;
            }
        }
        return new g(bVar4, j12, j13, z11, z12, z13);
    }

    private static Format[] y(com.google.android.exoplayer2.trackselection.g gVar) {
        int i10;
        if (gVar != null) {
            i10 = gVar.length();
        } else {
            i10 = 0;
        }
        Format[] formatArr = new Format[i10];
        for (int i11 = 0; i11 < i10; i11++) {
            formatArr[i11] = gVar.c(i11);
        }
        return formatArr;
    }

    private static Pair y0(Timeline timeline, h hVar, boolean z10, int i10, boolean z11, Timeline.d dVar, Timeline.b bVar) {
        Pair n10;
        Timeline timeline2;
        Object z02;
        Timeline timeline3 = hVar.f13640a;
        if (timeline.u()) {
            return null;
        }
        if (timeline3.u()) {
            timeline3 = timeline;
        }
        try {
            n10 = timeline3.n(dVar, bVar, hVar.f13641b, hVar.f13642c);
            timeline2 = timeline3;
        } catch (IndexOutOfBoundsException unused) {
        }
        if (timeline.equals(timeline2)) {
            return n10;
        }
        if (timeline.f(n10.first) != -1) {
            if (timeline2.l(n10.first, bVar).f12598q && timeline2.r(bVar.f12595i, dVar).f12618z == timeline2.f(n10.first)) {
                return timeline.n(dVar, bVar, timeline.l(n10.first, bVar).f12595i, hVar.f13642c);
            }
            return n10;
        }
        if (z10 && (z02 = z0(dVar, bVar, i10, z11, n10.first, timeline2, timeline)) != null) {
            return timeline.n(dVar, bVar, timeline.l(z02, bVar).f12595i, -9223372036854775807L);
        }
        return null;
    }

    private long z(Timeline timeline, Object obj, long j10) {
        timeline.r(timeline.l(obj, this.f13614w).f12595i, this.f13613v);
        Timeline.d dVar = this.f13613v;
        if (dVar.f12609q != -9223372036854775807L && dVar.g()) {
            Timeline.d dVar2 = this.f13613v;
            if (dVar2.f12612t) {
                return oe.w0.K0(dVar2.c() - this.f13613v.f12609q) - (j10 + this.f13614w.q());
            }
        }
        return -9223372036854775807L;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static Object z0(Timeline.d dVar, Timeline.b bVar, int i10, boolean z10, Object obj, Timeline timeline, Timeline timeline2) {
        int f10 = timeline.f(obj);
        int m10 = timeline.m();
        int i11 = 0;
        int i12 = f10;
        int i13 = -1;
        while (i11 < m10 && i13 == -1) {
            Timeline.d dVar2 = dVar;
            Timeline.b bVar2 = bVar;
            int i14 = i10;
            boolean z11 = z10;
            Timeline timeline3 = timeline;
            i12 = timeline3.h(i12, bVar2, dVar2, i14, z11);
            if (i12 == -1) {
                break;
            }
            i13 = timeline2.f(timeline3.q(i12));
            i11++;
            timeline = timeline3;
            bVar = bVar2;
            dVar = dVar2;
            i10 = i14;
            z10 = z11;
        }
        if (i13 == -1) {
            return null;
        }
        return timeline2.q(i13);
    }

    public void B0(Timeline timeline, int i10, long j10) {
        this.f13610s.d(3, new h(timeline, i10, j10)).a();
    }

    public Looper C() {
        return this.f13612u;
    }

    public void O0(List list, int i10, long j10, rd.o0 o0Var) {
        this.f13610s.d(17, new b(list, o0Var, i10, j10, null)).a();
    }

    public void R0(boolean z10, int i10) {
        this.f13610s.g(1, z10 ? 1 : 0, i10).a();
    }

    public void T0(PlaybackParameters playbackParameters) {
        this.f13610s.d(4, playbackParameters).a();
    }

    public void V0(int i10) {
        this.f13610s.g(11, i10, 0).a();
    }

    public void Y0(boolean z10) {
        this.f13610s.g(12, z10 ? 1 : 0, 0).a();
    }

    @Override // ke.q.a
    public void a(v1 v1Var) {
        this.f13610s.h(26);
    }

    @Override // ke.q.a
    public void b() {
        this.f13610s.h(10);
    }

    @Override // com.google.android.exoplayer2.o1.d
    public void d() {
        this.f13610s.h(22);
    }

    @Override // com.google.android.exoplayer2.s1.a
    public synchronized void e(s1 s1Var) {
        if (!this.K && this.f13612u.getThread().isAlive()) {
            this.f13610s.d(14, s1Var).a();
            return;
        }
        oe.y.i("ExoPlayerImplInternal", "Ignoring messages sent after release.");
        s1Var.k(false);
    }

    @Override // rd.n0.a
    /* renamed from: g0 */
    public void i(rd.p pVar) {
        this.f13610s.d(9, pVar).a();
    }

    public void h0() {
        this.f13610s.a(0).a();
    }

    @Override // android.os.Handler.Callback
    public boolean handleMessage(Message message) {
        int i10;
        w0 s10;
        boolean z10;
        boolean z11;
        boolean z12;
        boolean z13;
        boolean z14;
        int i11 = 1000;
        try {
            switch (message.what) {
                case 0:
                    i0();
                    break;
                case 1:
                    if (message.arg1 != 0) {
                        z10 = true;
                    } else {
                        z10 = false;
                    }
                    S0(z10, message.arg2, true, 1);
                    break;
                case 2:
                    q();
                    break;
                case 3:
                    D0((h) message.obj);
                    break;
                case 4:
                    U0((PlaybackParameters) message.obj);
                    break;
                case 5:
                    X0((mc.t0) message.obj);
                    break;
                case 6:
                    j1(false, true);
                    break;
                case 7:
                    k0();
                    return true;
                case 8:
                    J((rd.p) message.obj);
                    break;
                case 9:
                    F((rd.p) message.obj);
                    break;
                case 10:
                    p0();
                    break;
                case 11:
                    W0(message.arg1);
                    break;
                case 12:
                    if (message.arg1 != 0) {
                        z11 = true;
                    } else {
                        z11 = false;
                    }
                    Z0(z11);
                    break;
                case 13:
                    if (message.arg1 != 0) {
                        z12 = true;
                    } else {
                        z12 = false;
                    }
                    L0(z12, (AtomicBoolean) message.obj);
                    break;
                case 14:
                    G0((s1) message.obj);
                    break;
                case 15:
                    I0((s1) message.obj);
                    break;
                case 16:
                    L((PlaybackParameters) message.obj, false);
                    break;
                case 17:
                    N0((b) message.obj);
                    break;
                case ChatViewRecyclerTypes.EPHEMERAL_INDICATION /* 18 */:
                    m((b) message.obj, message.arg1);
                    break;
                case ChatViewRecyclerTypes.INTERACTION_STATUS /* 19 */:
                    android.support.v4.media.session.b.a(message.obj);
                    c0(null);
                    break;
                case 20:
                    m0(message.arg1, message.arg2, (rd.o0) message.obj);
                    break;
                case ChatViewRecyclerTypes.FLAGGED_MESSAGE_EMBED /* 21 */:
                    a1((rd.o0) message.obj);
                    break;
                case ChatViewRecyclerTypes.FLAGGED_MESSAGE_ACTION_BAR /* 22 */:
                    b0();
                    break;
                case 23:
                    if (message.arg1 != 0) {
                        z13 = true;
                    } else {
                        z13 = false;
                    }
                    Q0(z13);
                    break;
                case ChatViewRecyclerTypes.SURVEY_INDICATION /* 24 */:
                    if (message.arg1 == 1) {
                        z14 = true;
                    } else {
                        z14 = false;
                    }
                    P0(z14);
                    break;
                case ChatViewRecyclerTypes.GUILD_INVITE_DISABLED /* 25 */:
                    n();
                    break;
                case ChatViewRecyclerTypes.MEDIA_MOSAIC_ATTACHMENT /* 26 */:
                    q0();
                    break;
                default:
                    return false;
            }
        } catch (j e10) {
            e = e10;
            if (e.f13283t == 1 && (s10 = this.D.s()) != null) {
                e = e.e(s10.f14191f.f14202a);
            }
            if (e.f13289z && this.Z == null) {
                oe.y.j("ExoPlayerImplInternal", "Recoverable renderer error", e);
                this.Z = e;
                oe.u uVar = this.f13610s;
                uVar.k(uVar.d(25, e));
            } else {
                j jVar = this.Z;
                if (jVar != null) {
                    jVar.addSuppressed(e);
                    e = this.Z;
                }
                oe.y.d("ExoPlayerImplInternal", "Playback error", e);
                if (e.f13283t == 1 && this.D.r() != this.D.s()) {
                    while (this.D.r() != this.D.s()) {
                        this.D.b();
                    }
                    x0 x0Var = ((w0) oe.a.e(this.D.r())).f14191f;
                    r.b bVar = x0Var.f14202a;
                    long j10 = x0Var.f14203b;
                    this.I = M(bVar, j10, x0Var.f14204c, j10, true, 0);
                }
                j1(true, false);
                this.I = this.I.f(e);
            }
        } catch (RuntimeException e11) {
            j i12 = j.i(e11, ((e11 instanceof IllegalStateException) || (e11 instanceof IllegalArgumentException)) ? 1004 : 1004);
            oe.y.d("ExoPlayerImplInternal", "Playback error", i12);
            j1(true, false);
            this.I = this.I.f(i12);
        } catch (mc.l0 e12) {
            int i13 = e12.f36833e;
            if (i13 == 1) {
                if (e12.f36832d) {
                    i10 = 3001;
                } else {
                    i10 = 3003;
                }
            } else {
                if (i13 == 4) {
                    if (e12.f36832d) {
                        i10 = 3002;
                    } else {
                        i10 = 3004;
                    }
                }
                G(e12, i11);
            }
            i11 = i10;
            G(e12, i11);
        } catch (me.m e13) {
            G(e13, e13.f36945d);
        } catch (rd.b e14) {
            G(e14, RNCWebViewManager.COMMAND_CLEAR_HISTORY);
        } catch (n.a e15) {
            G(e15, e15.f48602d);
        } catch (IOException e16) {
            G(e16, 2000);
        }
        V();
        return true;
    }

    public void i1() {
        this.f13610s.a(6).a();
    }

    @Override // rd.p.a
    public void j(rd.p pVar) {
        this.f13610s.d(8, pVar).a();
    }

    public synchronized boolean j0() {
        if (!this.K && this.f13612u.getThread().isAlive()) {
            this.f13610s.h(7);
            r1(new pi.r() { // from class: com.google.android.exoplayer2.r0
                @Override // pi.r
                public final Object get() {
                    Boolean valueOf;
                    valueOf = Boolean.valueOf(t0.this.K);
                    return valueOf;
                }
            }, this.G);
            return this.K;
        }
        return true;
    }

    public void n0(int i10, int i11, rd.o0 o0Var) {
        this.f13610s.c(20, i10, i11, o0Var).a();
    }

    @Override // com.google.android.exoplayer2.i.a
    public void onPlaybackParametersChanged(PlaybackParameters playbackParameters) {
        this.f13610s.d(16, playbackParameters).a();
    }

    public void v(long j10) {
        this.f13601a0 = j10;
    }
}
