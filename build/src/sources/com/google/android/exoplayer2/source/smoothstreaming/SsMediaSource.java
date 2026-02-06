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
import le.c0;
import le.u;
import ne.w0;
import qd.h;
import qd.p;
import qd.p0;
import qd.r;
import qd.y;
import rc.l;
import rc.v;
import rc.x;
import yd.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class SsMediaSource extends qd.a implements j.b {
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
    private yd.a K;
    private Handler L;

    /* renamed from: s  reason: collision with root package name */
    private final boolean f12842s;

    /* renamed from: t  reason: collision with root package name */
    private final Uri f12843t;

    /* renamed from: u  reason: collision with root package name */
    private final MediaItem.h f12844u;

    /* renamed from: v  reason: collision with root package name */
    private final MediaItem f12845v;

    /* renamed from: w  reason: collision with root package name */
    private final DataSource.Factory f12846w;

    /* renamed from: x  reason: collision with root package name */
    private final b.a f12847x;

    /* renamed from: y  reason: collision with root package name */
    private final h f12848y;

    /* renamed from: z  reason: collision with root package name */
    private final v f12849z;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class Factory implements r.a {

        /* renamed from: a  reason: collision with root package name */
        private final b.a f12850a;

        /* renamed from: b  reason: collision with root package name */
        private final DataSource.Factory f12851b;

        /* renamed from: c  reason: collision with root package name */
        private h f12852c;

        /* renamed from: d  reason: collision with root package name */
        private x f12853d;

        /* renamed from: e  reason: collision with root package name */
        private i f12854e;

        /* renamed from: f  reason: collision with root package name */
        private long f12855f;

        /* renamed from: g  reason: collision with root package name */
        private k.a f12856g;

        public Factory(DataSource.Factory factory) {
            this(new a.C0164a(factory), factory);
        }

        public SsMediaSource a(MediaItem mediaItem) {
            pd.b bVar;
            ne.a.e(mediaItem.f11625e);
            k.a aVar = this.f12856g;
            if (aVar == null) {
                aVar = new yd.b();
            }
            List list = mediaItem.f11625e.f11719p;
            if (!list.isEmpty()) {
                bVar = new pd.b(aVar, list);
            } else {
                bVar = aVar;
            }
            return new SsMediaSource(mediaItem, null, this.f12851b, bVar, this.f12850a, this.f12852c, null, this.f12853d.a(mediaItem), this.f12854e, this.f12855f);
        }

        public Factory b(i iVar) {
            this.f12854e = (i) ne.a.f(iVar, "MediaSource.Factory#setLoadErrorHandlingPolicy no longer handles null by instantiating a new DefaultLoadErrorHandlingPolicy. Explicitly construct and pass an instance in order to retain the old behavior.");
            return this;
        }

        public Factory(b.a aVar, DataSource.Factory factory) {
            this.f12850a = (b.a) ne.a.e(aVar);
            this.f12851b = factory;
            this.f12853d = new l();
            this.f12854e = new g();
            this.f12855f = 30000L;
            this.f12852c = new qd.i();
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
        for (a.b bVar : this.K.f55252f) {
            if (bVar.f55268k > 0) {
                j12 = Math.min(j12, bVar.e(0));
                j11 = Math.max(j11, bVar.e(bVar.f55268k - 1) + bVar.c(bVar.f55268k - 1));
            }
        }
        if (j12 == LongCompanionObject.MAX_VALUE) {
            if (this.K.f55250d) {
                j10 = -9223372036854775807L;
            } else {
                j10 = 0;
            }
            yd.a aVar = this.K;
            boolean z10 = aVar.f55250d;
            p0Var = new p0(j10, 0L, 0L, 0L, true, z10, z10, aVar, this.f12845v);
        } else {
            yd.a aVar2 = this.K;
            if (aVar2.f55250d) {
                long j13 = aVar2.f55254h;
                if (j13 != -9223372036854775807L && j13 > 0) {
                    j12 = Math.max(j12, j11 - j13);
                }
                long j14 = j12;
                long j15 = j11 - j14;
                long K0 = j15 - w0.K0(this.B);
                if (K0 < 5000000) {
                    K0 = Math.min(5000000L, j15 / 2);
                }
                p0Var = new p0(-9223372036854775807L, j15, j14, K0, true, true, true, this.K, this.f12845v);
            } else {
                long j16 = aVar2.f55253g;
                if (j16 == -9223372036854775807L) {
                    j16 = j11 - j12;
                }
                long j17 = j16;
                p0Var = new p0(j12 + j17, j17, j12, 0L, true, false, false, this.K, this.f12845v);
            }
        }
        C(p0Var);
    }

    private void J() {
        if (!this.K.f55250d) {
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
        k kVar = new k(this.F, this.f12843t, 4, this.D);
        this.C.s(new LoadEventInfo(kVar.f13446a, kVar.f13447b, this.G.n(kVar, this, this.A.b(kVar.f13448c))), kVar.f13448c);
    }

    @Override // qd.a
    protected void B(c0 c0Var) {
        this.I = c0Var;
        this.f12849z.a(Looper.myLooper(), z());
        this.f12849z.d();
        if (this.f12842s) {
            this.H = new u.a();
            I();
            return;
        }
        this.F = this.f12846w.createDataSource();
        j jVar = new j("SsMediaSource");
        this.G = jVar;
        this.H = jVar;
        this.L = w0.w();
        K();
    }

    @Override // qd.a
    protected void D() {
        yd.a aVar;
        if (this.f12842s) {
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
        this.f12849z.release();
    }

    @Override // com.google.android.exoplayer2.upstream.j.b
    /* renamed from: F */
    public void i(k kVar, long j10, long j11, boolean z10) {
        LoadEventInfo loadEventInfo = new LoadEventInfo(kVar.f13446a, kVar.f13447b, kVar.f(), kVar.d(), j10, j11, kVar.a());
        this.A.d(kVar.f13446a);
        this.C.j(loadEventInfo, kVar.f13448c);
    }

    @Override // com.google.android.exoplayer2.upstream.j.b
    /* renamed from: G */
    public void j(k kVar, long j10, long j11) {
        LoadEventInfo loadEventInfo = new LoadEventInfo(kVar.f13446a, kVar.f13447b, kVar.f(), kVar.d(), j10, j11, kVar.a());
        this.A.d(kVar.f13446a);
        this.C.m(loadEventInfo, kVar.f13448c);
        this.K = (yd.a) kVar.e();
        this.J = j10 - j11;
        I();
        J();
    }

    @Override // com.google.android.exoplayer2.upstream.j.b
    /* renamed from: H */
    public j.c n(k kVar, long j10, long j11, IOException iOException, int i10) {
        j.c h10;
        LoadEventInfo loadEventInfo = new LoadEventInfo(kVar.f13446a, kVar.f13447b, kVar.f(), kVar.d(), j10, j11, kVar.a());
        long a10 = this.A.a(new i.c(loadEventInfo, new MediaLoadData(kVar.f13448c), iOException, i10));
        if (a10 == -9223372036854775807L) {
            h10 = j.f13429g;
        } else {
            h10 = j.h(false, a10);
        }
        boolean c10 = h10.c();
        this.C.q(loadEventInfo, kVar.f13448c, iOException, !c10);
        if (!c10) {
            this.A.d(kVar.f13446a);
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
        return this.f12845v;
    }

    @Override // qd.r
    public p h(r.b bVar, le.b bVar2, long j10) {
        y.a w10 = w(bVar);
        c cVar = new c(this.K, this.f12847x, this.I, this.f12848y, null, this.f12849z, u(bVar), this.A, w10, this.H, bVar2);
        this.E.add(cVar);
        return cVar;
    }

    @Override // qd.r
    public void o() {
        this.H.a();
    }

    private SsMediaSource(MediaItem mediaItem, yd.a aVar, DataSource.Factory factory, k.a aVar2, b.a aVar3, h hVar, le.g gVar, v vVar, i iVar, long j10) {
        ne.a.g(aVar == null || !aVar.f55250d);
        this.f12845v = mediaItem;
        MediaItem.h hVar2 = (MediaItem.h) ne.a.e(mediaItem.f11625e);
        this.f12844u = hVar2;
        this.K = aVar;
        this.f12843t = hVar2.f11715d.equals(Uri.EMPTY) ? null : w0.C(hVar2.f11715d);
        this.f12846w = factory;
        this.D = aVar2;
        this.f12847x = aVar3;
        this.f12848y = hVar;
        this.f12849z = vVar;
        this.A = iVar;
        this.B = j10;
        this.C = w(null);
        this.f12842s = aVar != null;
        this.E = new ArrayList();
    }
}
