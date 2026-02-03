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
import com.google.android.exoplayer2.upstream.f;
import com.google.android.exoplayer2.upstream.h;
import com.google.android.exoplayer2.upstream.i;
import com.google.android.exoplayer2.upstream.j;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import kotlin.jvm.internal.LongCompanionObject;
import le.c0;
import le.g;
import le.u;
import ne.w0;
import qd.p;
import qd.p0;
import qd.r;
import qd.y;
import rc.l;
import rc.v;
import rc.x;
import yd.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class SsMediaSource extends qd.a implements i.b {
    private final h A;
    private final long B;
    private final y.a C;
    private final j.a D;
    private final ArrayList E;
    private DataSource F;
    private i G;
    private u H;
    private c0 I;
    private long J;
    private yd.a K;
    private Handler L;

    /* renamed from: s  reason: collision with root package name */
    private final boolean f13528s;

    /* renamed from: t  reason: collision with root package name */
    private final Uri f13529t;

    /* renamed from: u  reason: collision with root package name */
    private final MediaItem.h f13530u;

    /* renamed from: v  reason: collision with root package name */
    private final MediaItem f13531v;

    /* renamed from: w  reason: collision with root package name */
    private final DataSource.Factory f13532w;

    /* renamed from: x  reason: collision with root package name */
    private final b.a f13533x;

    /* renamed from: y  reason: collision with root package name */
    private final qd.h f13534y;

    /* renamed from: z  reason: collision with root package name */
    private final v f13535z;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class Factory implements r.a {

        /* renamed from: a  reason: collision with root package name */
        private final b.a f13536a;

        /* renamed from: b  reason: collision with root package name */
        private final DataSource.Factory f13537b;

        /* renamed from: c  reason: collision with root package name */
        private qd.h f13538c;

        /* renamed from: d  reason: collision with root package name */
        private x f13539d;

        /* renamed from: e  reason: collision with root package name */
        private h f13540e;

        /* renamed from: f  reason: collision with root package name */
        private long f13541f;

        /* renamed from: g  reason: collision with root package name */
        private j.a f13542g;

        public Factory(DataSource.Factory factory) {
            this(new a.C0174a(factory), factory);
        }

        public SsMediaSource a(MediaItem mediaItem) {
            pd.b bVar;
            ne.a.e(mediaItem.f12373e);
            j.a aVar = this.f13542g;
            if (aVar == null) {
                aVar = new yd.b();
            }
            List list = mediaItem.f12373e.f12467p;
            if (!list.isEmpty()) {
                bVar = new pd.b(aVar, list);
            } else {
                bVar = aVar;
            }
            return new SsMediaSource(mediaItem, null, this.f13537b, bVar, this.f13536a, this.f13538c, null, this.f13539d.a(mediaItem), this.f13540e, this.f13541f);
        }

        public Factory b(h hVar) {
            this.f13540e = (h) ne.a.f(hVar, "MediaSource.Factory#setLoadErrorHandlingPolicy no longer handles null by instantiating a new DefaultLoadErrorHandlingPolicy. Explicitly construct and pass an instance in order to retain the old behavior.");
            return this;
        }

        public Factory(b.a aVar, DataSource.Factory factory) {
            this.f13536a = (b.a) ne.a.e(aVar);
            this.f13537b = factory;
            this.f13539d = new l();
            this.f13540e = new f();
            this.f13541f = 30000L;
            this.f13538c = new qd.i();
        }
    }

    static {
        lc.u.a("goog.exo.smoothstreaming");
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
        for (a.b bVar : this.K.f54257f) {
            if (bVar.f54273k > 0) {
                j12 = Math.min(j12, bVar.e(0));
                j11 = Math.max(j11, bVar.e(bVar.f54273k - 1) + bVar.c(bVar.f54273k - 1));
            }
        }
        if (j12 == LongCompanionObject.MAX_VALUE) {
            if (this.K.f54255d) {
                j10 = -9223372036854775807L;
            } else {
                j10 = 0;
            }
            yd.a aVar = this.K;
            boolean z10 = aVar.f54255d;
            p0Var = new p0(j10, 0L, 0L, 0L, true, z10, z10, aVar, this.f13531v);
        } else {
            yd.a aVar2 = this.K;
            if (aVar2.f54255d) {
                long j13 = aVar2.f54259h;
                if (j13 != -9223372036854775807L && j13 > 0) {
                    j12 = Math.max(j12, j11 - j13);
                }
                long j14 = j12;
                long j15 = j11 - j14;
                long K0 = j15 - w0.K0(this.B);
                if (K0 < 5000000) {
                    K0 = Math.min(5000000L, j15 / 2);
                }
                p0Var = new p0(-9223372036854775807L, j15, j14, K0, true, true, true, this.K, this.f13531v);
            } else {
                long j16 = aVar2.f54258g;
                if (j16 == -9223372036854775807L) {
                    j16 = j11 - j12;
                }
                long j17 = j16;
                p0Var = new p0(j12 + j17, j17, j12, 0L, true, false, false, this.K, this.f13531v);
            }
        }
        C(p0Var);
    }

    private void J() {
        if (!this.K.f54255d) {
            return;
        }
        this.L.postDelayed(new Runnable() { // from class: xd.a
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
        j jVar = new j(this.F, this.f13529t, 4, this.D);
        this.C.s(new LoadEventInfo(jVar.f14132a, jVar.f14133b, this.G.n(jVar, this, this.A.b(jVar.f14134c))), jVar.f14134c);
    }

    @Override // qd.a
    protected void B(c0 c0Var) {
        this.I = c0Var;
        this.f13535z.a(Looper.myLooper(), z());
        this.f13535z.d();
        if (this.f13528s) {
            this.H = new u.a();
            I();
            return;
        }
        this.F = this.f13532w.createDataSource();
        i iVar = new i("SsMediaSource");
        this.G = iVar;
        this.H = iVar;
        this.L = w0.w();
        K();
    }

    @Override // qd.a
    protected void D() {
        yd.a aVar;
        if (this.f13528s) {
            aVar = this.K;
        } else {
            aVar = null;
        }
        this.K = aVar;
        this.F = null;
        this.J = 0L;
        i iVar = this.G;
        if (iVar != null) {
            iVar.l();
            this.G = null;
        }
        Handler handler = this.L;
        if (handler != null) {
            handler.removeCallbacksAndMessages(null);
            this.L = null;
        }
        this.f13535z.release();
    }

    @Override // com.google.android.exoplayer2.upstream.i.b
    /* renamed from: F */
    public void i(j jVar, long j10, long j11, boolean z10) {
        LoadEventInfo loadEventInfo = new LoadEventInfo(jVar.f14132a, jVar.f14133b, jVar.f(), jVar.d(), j10, j11, jVar.a());
        this.A.d(jVar.f14132a);
        this.C.j(loadEventInfo, jVar.f14134c);
    }

    @Override // com.google.android.exoplayer2.upstream.i.b
    /* renamed from: G */
    public void j(j jVar, long j10, long j11) {
        LoadEventInfo loadEventInfo = new LoadEventInfo(jVar.f14132a, jVar.f14133b, jVar.f(), jVar.d(), j10, j11, jVar.a());
        this.A.d(jVar.f14132a);
        this.C.m(loadEventInfo, jVar.f14134c);
        this.K = (yd.a) jVar.e();
        this.J = j10 - j11;
        I();
        J();
    }

    @Override // com.google.android.exoplayer2.upstream.i.b
    /* renamed from: H */
    public i.c n(j jVar, long j10, long j11, IOException iOException, int i10) {
        i.c h10;
        LoadEventInfo loadEventInfo = new LoadEventInfo(jVar.f14132a, jVar.f14133b, jVar.f(), jVar.d(), j10, j11, jVar.a());
        long a10 = this.A.a(new h.c(loadEventInfo, new MediaLoadData(jVar.f14134c), iOException, i10));
        if (a10 == -9223372036854775807L) {
            h10 = i.f14115g;
        } else {
            h10 = i.h(false, a10);
        }
        boolean c10 = h10.c();
        this.C.q(loadEventInfo, jVar.f14134c, iOException, !c10);
        if (!c10) {
            this.A.d(jVar.f14132a);
        }
        return h10;
    }

    @Override // qd.r
    public void c(p pVar) {
        ((c) pVar).v();
        this.E.remove(pVar);
    }

    @Override // qd.r
    public MediaItem f() {
        return this.f13531v;
    }

    @Override // qd.r
    public p h(r.b bVar, le.b bVar2, long j10) {
        y.a w10 = w(bVar);
        c cVar = new c(this.K, this.f13533x, this.I, this.f13534y, null, this.f13535z, u(bVar), this.A, w10, this.H, bVar2);
        this.E.add(cVar);
        return cVar;
    }

    @Override // qd.r
    public void o() {
        this.H.a();
    }

    private SsMediaSource(MediaItem mediaItem, yd.a aVar, DataSource.Factory factory, j.a aVar2, b.a aVar3, qd.h hVar, g gVar, v vVar, h hVar2, long j10) {
        ne.a.g(aVar == null || !aVar.f54255d);
        this.f13531v = mediaItem;
        MediaItem.h hVar3 = (MediaItem.h) ne.a.e(mediaItem.f12373e);
        this.f13530u = hVar3;
        this.K = aVar;
        this.f13529t = hVar3.f12463d.equals(Uri.EMPTY) ? null : w0.C(hVar3.f12463d);
        this.f13532w = factory;
        this.D = aVar2;
        this.f13533x = aVar3;
        this.f13534y = hVar;
        this.f13535z = vVar;
        this.A = hVar2;
        this.B = j10;
        this.C = w(null);
        this.f13528s = aVar != null;
        this.E = new ArrayList();
    }
}
