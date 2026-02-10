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
    private final boolean f12982s;

    /* renamed from: t  reason: collision with root package name */
    private final Uri f12983t;

    /* renamed from: u  reason: collision with root package name */
    private final MediaItem.h f12984u;

    /* renamed from: v  reason: collision with root package name */
    private final MediaItem f12985v;

    /* renamed from: w  reason: collision with root package name */
    private final DataSource.Factory f12986w;

    /* renamed from: x  reason: collision with root package name */
    private final b.a f12987x;

    /* renamed from: y  reason: collision with root package name */
    private final h f12988y;

    /* renamed from: z  reason: collision with root package name */
    private final v f12989z;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class Factory implements r.a {

        /* renamed from: a  reason: collision with root package name */
        private final b.a f12990a;

        /* renamed from: b  reason: collision with root package name */
        private final DataSource.Factory f12991b;

        /* renamed from: c  reason: collision with root package name */
        private h f12992c;

        /* renamed from: d  reason: collision with root package name */
        private x f12993d;

        /* renamed from: e  reason: collision with root package name */
        private i f12994e;

        /* renamed from: f  reason: collision with root package name */
        private long f12995f;

        /* renamed from: g  reason: collision with root package name */
        private k.a f12996g;

        public Factory(DataSource.Factory factory) {
            this(new a.C0191a(factory), factory);
        }

        public SsMediaSource a(MediaItem mediaItem) {
            qd.b bVar;
            oe.a.e(mediaItem.f11765e);
            k.a aVar = this.f12996g;
            if (aVar == null) {
                aVar = new zd.b();
            }
            List list = mediaItem.f11765e.f11859p;
            if (!list.isEmpty()) {
                bVar = new qd.b(aVar, list);
            } else {
                bVar = aVar;
            }
            return new SsMediaSource(mediaItem, null, this.f12991b, bVar, this.f12990a, this.f12992c, null, this.f12993d.a(mediaItem), this.f12994e, this.f12995f);
        }

        public Factory b(i iVar) {
            this.f12994e = (i) oe.a.f(iVar, "MediaSource.Factory#setLoadErrorHandlingPolicy no longer handles null by instantiating a new DefaultLoadErrorHandlingPolicy. Explicitly construct and pass an instance in order to retain the old behavior.");
            return this;
        }

        public Factory(b.a aVar, DataSource.Factory factory) {
            this.f12990a = (b.a) oe.a.e(aVar);
            this.f12991b = factory;
            this.f12993d = new l();
            this.f12994e = new g();
            this.f12995f = 30000L;
            this.f12992c = new rd.i();
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
        for (a.b bVar : this.K.f56325f) {
            if (bVar.f56341k > 0) {
                j12 = Math.min(j12, bVar.e(0));
                j11 = Math.max(j11, bVar.e(bVar.f56341k - 1) + bVar.c(bVar.f56341k - 1));
            }
        }
        if (j12 == LongCompanionObject.MAX_VALUE) {
            if (this.K.f56323d) {
                j10 = -9223372036854775807L;
            } else {
                j10 = 0;
            }
            zd.a aVar = this.K;
            boolean z10 = aVar.f56323d;
            p0Var = new p0(j10, 0L, 0L, 0L, true, z10, z10, aVar, this.f12985v);
        } else {
            zd.a aVar2 = this.K;
            if (aVar2.f56323d) {
                long j13 = aVar2.f56327h;
                if (j13 != -9223372036854775807L && j13 > 0) {
                    j12 = Math.max(j12, j11 - j13);
                }
                long j14 = j12;
                long j15 = j11 - j14;
                long K0 = j15 - w0.K0(this.B);
                if (K0 < 5000000) {
                    K0 = Math.min(5000000L, j15 / 2);
                }
                p0Var = new p0(-9223372036854775807L, j15, j14, K0, true, true, true, this.K, this.f12985v);
            } else {
                long j16 = aVar2.f56326g;
                if (j16 == -9223372036854775807L) {
                    j16 = j11 - j12;
                }
                long j17 = j16;
                p0Var = new p0(j12 + j17, j17, j12, 0L, true, false, false, this.K, this.f12985v);
            }
        }
        C(p0Var);
    }

    private void J() {
        if (!this.K.f56323d) {
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
        k kVar = new k(this.F, this.f12983t, 4, this.D);
        this.C.s(new LoadEventInfo(kVar.f13586a, kVar.f13587b, this.G.n(kVar, this, this.A.b(kVar.f13588c))), kVar.f13588c);
    }

    @Override // rd.a
    protected void B(c0 c0Var) {
        this.I = c0Var;
        this.f12989z.e(Looper.myLooper(), z());
        this.f12989z.d();
        if (this.f12982s) {
            this.H = new u.a();
            I();
            return;
        }
        this.F = this.f12986w.createDataSource();
        j jVar = new j("SsMediaSource");
        this.G = jVar;
        this.H = jVar;
        this.L = w0.w();
        K();
    }

    @Override // rd.a
    protected void D() {
        zd.a aVar;
        if (this.f12982s) {
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
        this.f12989z.release();
    }

    @Override // com.google.android.exoplayer2.upstream.j.b
    /* renamed from: F */
    public void i(k kVar, long j10, long j11, boolean z10) {
        LoadEventInfo loadEventInfo = new LoadEventInfo(kVar.f13586a, kVar.f13587b, kVar.f(), kVar.d(), j10, j11, kVar.b());
        this.A.d(kVar.f13586a);
        this.C.j(loadEventInfo, kVar.f13588c);
    }

    @Override // com.google.android.exoplayer2.upstream.j.b
    /* renamed from: G */
    public void k(k kVar, long j10, long j11) {
        LoadEventInfo loadEventInfo = new LoadEventInfo(kVar.f13586a, kVar.f13587b, kVar.f(), kVar.d(), j10, j11, kVar.b());
        this.A.d(kVar.f13586a);
        this.C.m(loadEventInfo, kVar.f13588c);
        this.K = (zd.a) kVar.e();
        this.J = j10 - j11;
        I();
        J();
    }

    @Override // com.google.android.exoplayer2.upstream.j.b
    /* renamed from: H */
    public j.c n(k kVar, long j10, long j11, IOException iOException, int i10) {
        j.c h10;
        LoadEventInfo loadEventInfo = new LoadEventInfo(kVar.f13586a, kVar.f13587b, kVar.f(), kVar.d(), j10, j11, kVar.b());
        long a10 = this.A.a(new i.c(loadEventInfo, new MediaLoadData(kVar.f13588c), iOException, i10));
        if (a10 == -9223372036854775807L) {
            h10 = j.f13569g;
        } else {
            h10 = j.h(false, a10);
        }
        boolean c10 = h10.c();
        this.C.q(loadEventInfo, kVar.f13588c, iOException, !c10);
        if (!c10) {
            this.A.d(kVar.f13586a);
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
        return this.f12985v;
    }

    @Override // rd.r
    public p f(r.b bVar, me.b bVar2, long j10) {
        y.a w10 = w(bVar);
        c cVar = new c(this.K, this.f12987x, this.I, this.f12988y, null, this.f12989z, u(bVar), this.A, w10, this.H, bVar2);
        this.E.add(cVar);
        return cVar;
    }

    @Override // rd.r
    public void q() {
        this.H.a();
    }

    private SsMediaSource(MediaItem mediaItem, zd.a aVar, DataSource.Factory factory, k.a aVar2, b.a aVar3, h hVar, me.g gVar, v vVar, i iVar, long j10) {
        oe.a.g(aVar == null || !aVar.f56323d);
        this.f12985v = mediaItem;
        MediaItem.h hVar2 = (MediaItem.h) oe.a.e(mediaItem.f11765e);
        this.f12984u = hVar2;
        this.K = aVar;
        this.f12983t = hVar2.f11855d.equals(Uri.EMPTY) ? null : w0.C(hVar2.f11855d);
        this.f12986w = factory;
        this.D = aVar2;
        this.f12987x = aVar3;
        this.f12988y = hVar;
        this.f12989z = vVar;
        this.A = iVar;
        this.B = j10;
        this.C = w(null);
        this.f12982s = aVar != null;
        this.E = new ArrayList();
    }
}
