package com.google.android.exoplayer2.source.smoothstreaming;

import android.net.Uri;
import android.os.Handler;
import android.os.Looper;
import android.os.SystemClock;
import com.google.android.exoplayer2.MediaItem;
import com.google.android.exoplayer2.source.LoadEventInfo;
import com.google.android.exoplayer2.source.MediaLoadData;
import com.google.android.exoplayer2.source.smoothstreaming.SsMediaSource;
import com.google.android.exoplayer2.source.smoothstreaming.a;
import com.google.android.exoplayer2.source.smoothstreaming.b;
import com.google.android.exoplayer2.upstream.DataSource;
import com.google.android.exoplayer2.upstream.g;
import com.google.android.exoplayer2.upstream.i;
import com.google.android.exoplayer2.upstream.j;
import com.google.android.exoplayer2.upstream.k;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import kotlin.jvm.internal.LongCompanionObject;
import me.c0;
import me.u;
import oe.w0;
import rd.h;
import rd.p;
import rd.p0;
import rd.r;
import rd.y;
import sc.l;
import sc.v;
import sc.x;
import zd.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class SsMediaSource extends rd.a implements j.b {
    private final i A;
    private final long B;
    private final y.a C;
    private final k.a D;
    private final ArrayList E;
    private DataSource F;
    private j G;
    private u H;
    private c0 I;
    private long J;
    private zd.a K;
    private Handler L;

    /* renamed from: s  reason: collision with root package name */
    private final boolean f13560s;

    /* renamed from: t  reason: collision with root package name */
    private final Uri f13561t;

    /* renamed from: u  reason: collision with root package name */
    private final MediaItem.h f13562u;

    /* renamed from: v  reason: collision with root package name */
    private final MediaItem f13563v;

    /* renamed from: w  reason: collision with root package name */
    private final DataSource.Factory f13564w;

    /* renamed from: x  reason: collision with root package name */
    private final b.a f13565x;

    /* renamed from: y  reason: collision with root package name */
    private final h f13566y;

    /* renamed from: z  reason: collision with root package name */
    private final v f13567z;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class Factory implements r.a {

        /* renamed from: a  reason: collision with root package name */
        private final b.a f13568a;

        /* renamed from: b  reason: collision with root package name */
        private final DataSource.Factory f13569b;

        /* renamed from: c  reason: collision with root package name */
        private h f13570c;

        /* renamed from: d  reason: collision with root package name */
        private x f13571d;

        /* renamed from: e  reason: collision with root package name */
        private i f13572e;

        /* renamed from: f  reason: collision with root package name */
        private long f13573f;

        /* renamed from: g  reason: collision with root package name */
        private k.a f13574g;

        public Factory(DataSource.Factory factory) {
            this(new a.C0168a(factory), factory);
        }

        public SsMediaSource a(MediaItem mediaItem) {
            qd.b bVar;
            oe.a.e(mediaItem.f12343e);
            k.a aVar = this.f13574g;
            if (aVar == null) {
                aVar = new zd.b();
            }
            List list = mediaItem.f12343e.f12437p;
            if (!list.isEmpty()) {
                bVar = new qd.b(aVar, list);
            } else {
                bVar = aVar;
            }
            return new SsMediaSource(mediaItem, null, this.f13569b, bVar, this.f13568a, this.f13570c, null, this.f13571d.a(mediaItem), this.f13572e, this.f13573f);
        }

        public Factory b(i iVar) {
            this.f13572e = (i) oe.a.f(iVar, "MediaSource.Factory#setLoadErrorHandlingPolicy no longer handles null by instantiating a new DefaultLoadErrorHandlingPolicy. Explicitly construct and pass an instance in order to retain the old behavior.");
            return this;
        }

        public Factory(b.a aVar, DataSource.Factory factory) {
            this.f13568a = (b.a) oe.a.e(aVar);
            this.f13569b = factory;
            this.f13571d = new l();
            this.f13572e = new g();
            this.f13573f = 30000L;
            this.f13570c = new rd.i();
        }
    }

    static {
        mc.u.a("goog.exo.smoothstreaming");
    }

    private void I() {
        a.b[] bVarArr;
        p0 p0Var;
        long j10;
        for (int i10 = 0; i10 < this.E.size(); i10++) {
            ((c) this.E.get(i10)).w(this.K);
        }
        long j11 = Long.MIN_VALUE;
        long j12 = Long.MAX_VALUE;
        for (a.b bVar : this.K.f56365f) {
            if (bVar.f56381k > 0) {
                j12 = Math.min(j12, bVar.e(0));
                j11 = Math.max(j11, bVar.e(bVar.f56381k - 1) + bVar.c(bVar.f56381k - 1));
            }
        }
        if (j12 == LongCompanionObject.MAX_VALUE) {
            if (this.K.f56363d) {
                j10 = -9223372036854775807L;
            } else {
                j10 = 0;
            }
            zd.a aVar = this.K;
            boolean z10 = aVar.f56363d;
            p0Var = new p0(j10, 0L, 0L, 0L, true, z10, z10, aVar, this.f13563v);
        } else {
            zd.a aVar2 = this.K;
            if (aVar2.f56363d) {
                long j13 = aVar2.f56367h;
                if (j13 != -9223372036854775807L && j13 > 0) {
                    j12 = Math.max(j12, j11 - j13);
                }
                long j14 = j12;
                long j15 = j11 - j14;
                long K0 = j15 - w0.K0(this.B);
                if (K0 < 5000000) {
                    K0 = Math.min(5000000L, j15 / 2);
                }
                p0Var = new p0(-9223372036854775807L, j15, j14, K0, true, true, true, this.K, this.f13563v);
            } else {
                long j16 = aVar2.f56366g;
                if (j16 == -9223372036854775807L) {
                    j16 = j11 - j12;
                }
                long j17 = j16;
                p0Var = new p0(j12 + j17, j17, j12, 0L, true, false, false, this.K, this.f13563v);
            }
        }
        C(p0Var);
    }

    private void J() {
        if (!this.K.f56363d) {
            return;
        }
        this.L.postDelayed(new Runnable() { // from class: yd.a
            @Override // java.lang.Runnable
            public final void run() {
                SsMediaSource.this.K();
            }
        }, Math.max(0L, (this.J + 5000) - SystemClock.elapsedRealtime()));
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void K() {
        if (this.G.i()) {
            return;
        }
        k kVar = new k(this.F, this.f13561t, 4, this.D);
        this.C.s(new LoadEventInfo(kVar.f14164a, kVar.f14165b, this.G.n(kVar, this, this.A.b(kVar.f14166c))), kVar.f14166c);
    }

    @Override // rd.a
    protected void B(c0 c0Var) {
        this.I = c0Var;
        this.f13567z.e(Looper.myLooper(), z());
        this.f13567z.d();
        if (this.f13560s) {
            this.H = new u.a();
            I();
            return;
        }
        this.F = this.f13564w.createDataSource();
        j jVar = new j("SsMediaSource");
        this.G = jVar;
        this.H = jVar;
        this.L = w0.w();
        K();
    }

    @Override // rd.a
    protected void D() {
        zd.a aVar;
        if (this.f13560s) {
            aVar = this.K;
        } else {
            aVar = null;
        }
        this.K = aVar;
        this.F = null;
        this.J = 0L;
        j jVar = this.G;
        if (jVar != null) {
            jVar.l();
            this.G = null;
        }
        Handler handler = this.L;
        if (handler != null) {
            handler.removeCallbacksAndMessages(null);
            this.L = null;
        }
        this.f13567z.release();
    }

    @Override // com.google.android.exoplayer2.upstream.j.b
    /* renamed from: F */
    public void i(k kVar, long j10, long j11, boolean z10) {
        LoadEventInfo loadEventInfo = new LoadEventInfo(kVar.f14164a, kVar.f14165b, kVar.f(), kVar.d(), j10, j11, kVar.b());
        this.A.d(kVar.f14164a);
        this.C.j(loadEventInfo, kVar.f14166c);
    }

    @Override // com.google.android.exoplayer2.upstream.j.b
    /* renamed from: G */
    public void k(k kVar, long j10, long j11) {
        LoadEventInfo loadEventInfo = new LoadEventInfo(kVar.f14164a, kVar.f14165b, kVar.f(), kVar.d(), j10, j11, kVar.b());
        this.A.d(kVar.f14164a);
        this.C.m(loadEventInfo, kVar.f14166c);
        this.K = (zd.a) kVar.e();
        this.J = j10 - j11;
        I();
        J();
    }

    @Override // com.google.android.exoplayer2.upstream.j.b
    /* renamed from: H */
    public j.c n(k kVar, long j10, long j11, IOException iOException, int i10) {
        j.c h10;
        LoadEventInfo loadEventInfo = new LoadEventInfo(kVar.f14164a, kVar.f14165b, kVar.f(), kVar.d(), j10, j11, kVar.b());
        long a10 = this.A.a(new i.c(loadEventInfo, new MediaLoadData(kVar.f14166c), iOException, i10));
        if (a10 == -9223372036854775807L) {
            h10 = j.f14147g;
        } else {
            h10 = j.h(false, a10);
        }
        boolean c10 = h10.c();
        this.C.q(loadEventInfo, kVar.f14166c, iOException, !c10);
        if (!c10) {
            this.A.d(kVar.f14164a);
        }
        return h10;
    }

    @Override // rd.r
    public void a(p pVar) {
        ((c) pVar).v();
        this.E.remove(pVar);
    }

    @Override // rd.r
    public MediaItem d() {
        return this.f13563v;
    }

    @Override // rd.r
    public p f(r.b bVar, me.b bVar2, long j10) {
        y.a w10 = w(bVar);
        c cVar = new c(this.K, this.f13565x, this.I, this.f13566y, null, this.f13567z, u(bVar), this.A, w10, this.H, bVar2);
        this.E.add(cVar);
        return cVar;
    }

    @Override // rd.r
    public void q() {
        this.H.a();
    }

    private SsMediaSource(MediaItem mediaItem, zd.a aVar, DataSource.Factory factory, k.a aVar2, b.a aVar3, h hVar, me.g gVar, v vVar, i iVar, long j10) {
        oe.a.g(aVar == null || !aVar.f56363d);
        this.f13563v = mediaItem;
        MediaItem.h hVar2 = (MediaItem.h) oe.a.e(mediaItem.f12343e);
        this.f13562u = hVar2;
        this.K = aVar;
        this.f13561t = hVar2.f12433d.equals(Uri.EMPTY) ? null : w0.C(hVar2.f12433d);
        this.f13564w = factory;
        this.D = aVar2;
        this.f13565x = aVar3;
        this.f13566y = hVar;
        this.f13567z = vVar;
        this.A = iVar;
        this.B = j10;
        this.C = w(null);
        this.f13560s = aVar != null;
        this.E = new ArrayList();
    }
}
