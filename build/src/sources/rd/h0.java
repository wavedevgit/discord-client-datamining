package rd;

import android.os.Looper;
import com.google.android.exoplayer2.MediaItem;
import com.google.android.exoplayer2.Timeline;
import com.google.android.exoplayer2.upstream.DataSource;
import nc.t1;
import rd.b0;
import rd.g0;
import rd.h0;
import rd.r;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class h0 extends rd.a implements g0.b {
    private long A;
    private boolean B;
    private boolean C;
    private me.c0 D;

    /* renamed from: s  reason: collision with root package name */
    private final MediaItem f47881s;

    /* renamed from: t  reason: collision with root package name */
    private final MediaItem.h f47882t;

    /* renamed from: u  reason: collision with root package name */
    private final DataSource.Factory f47883u;

    /* renamed from: v  reason: collision with root package name */
    private final b0.a f47884v;

    /* renamed from: w  reason: collision with root package name */
    private final sc.v f47885w;

    /* renamed from: x  reason: collision with root package name */
    private final com.google.android.exoplayer2.upstream.i f47886x;

    /* renamed from: y  reason: collision with root package name */
    private final int f47887y;

    /* renamed from: z  reason: collision with root package name */
    private boolean f47888z;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public class a extends l {
        a(Timeline timeline) {
            super(timeline);
        }

        @Override // rd.l, com.google.android.exoplayer2.Timeline
        public Timeline.b k(int i10, Timeline.b bVar, boolean z10) {
            super.k(i10, bVar, z10);
            bVar.f12020q = true;
            return bVar;
        }

        @Override // rd.l, com.google.android.exoplayer2.Timeline
        public Timeline.d s(int i10, Timeline.d dVar, long j10) {
            super.s(i10, dVar, j10);
            dVar.f12037w = true;
            return dVar;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class b implements r.a {

        /* renamed from: a  reason: collision with root package name */
        private final DataSource.Factory f47890a;

        /* renamed from: b  reason: collision with root package name */
        private b0.a f47891b;

        /* renamed from: c  reason: collision with root package name */
        private sc.x f47892c;

        /* renamed from: d  reason: collision with root package name */
        private com.google.android.exoplayer2.upstream.i f47893d;

        /* renamed from: e  reason: collision with root package name */
        private int f47894e;

        public b(DataSource.Factory factory) {
            this(factory, new uc.h());
        }

        public static /* synthetic */ b0 a(uc.p pVar, t1 t1Var) {
            return new c(pVar);
        }

        public h0 b(MediaItem mediaItem) {
            oe.a.e(mediaItem.f11765e);
            return new h0(mediaItem, this.f47890a, this.f47891b, this.f47892c.a(mediaItem), this.f47893d, this.f47894e, null);
        }

        public b c(com.google.android.exoplayer2.upstream.i iVar) {
            this.f47893d = (com.google.android.exoplayer2.upstream.i) oe.a.f(iVar, "MediaSource.Factory#setLoadErrorHandlingPolicy no longer handles null by instantiating a new DefaultLoadErrorHandlingPolicy. Explicitly construct and pass an instance in order to retain the old behavior.");
            return this;
        }

        public b(DataSource.Factory factory, final uc.p pVar) {
            this(factory, new b0.a() { // from class: rd.i0
                @Override // rd.b0.a
                public final b0 a(t1 t1Var) {
                    return h0.b.a(uc.p.this, t1Var);
                }
            });
        }

        public b(DataSource.Factory factory, b0.a aVar) {
            this(factory, aVar, new sc.l(), new com.google.android.exoplayer2.upstream.g(), 1048576);
        }

        public b(DataSource.Factory factory, b0.a aVar, sc.x xVar, com.google.android.exoplayer2.upstream.i iVar, int i10) {
            this.f47890a = factory;
            this.f47891b = aVar;
            this.f47892c = xVar;
            this.f47893d = iVar;
            this.f47894e = i10;
        }
    }

    /* synthetic */ h0(MediaItem mediaItem, DataSource.Factory factory, b0.a aVar, sc.v vVar, com.google.android.exoplayer2.upstream.i iVar, int i10, a aVar2) {
        this(mediaItem, factory, aVar, vVar, iVar, i10);
    }

    private void E() {
        Timeline p0Var = new p0(this.A, this.B, false, this.C, null, this.f47881s);
        if (this.f47888z) {
            p0Var = new a(p0Var);
        }
        C(p0Var);
    }

    @Override // rd.a
    protected void B(me.c0 c0Var) {
        this.D = c0Var;
        this.f47885w.e((Looper) oe.a.e(Looper.myLooper()), z());
        this.f47885w.d();
        E();
    }

    @Override // rd.a
    protected void D() {
        this.f47885w.release();
    }

    @Override // rd.r
    public void a(p pVar) {
        ((g0) pVar).c0();
    }

    @Override // rd.r
    public MediaItem d() {
        return this.f47881s;
    }

    @Override // rd.r
    public p f(r.b bVar, me.b bVar2, long j10) {
        DataSource createDataSource = this.f47883u.createDataSource();
        me.c0 c0Var = this.D;
        if (c0Var != null) {
            createDataSource.i(c0Var);
        }
        return new g0(this.f47882t.f11855d, createDataSource, this.f47884v.a(z()), this.f47885w, u(bVar), this.f47886x, w(bVar), this, bVar2, this.f47882t.f11860q, this.f47887y);
    }

    @Override // rd.g0.b
    public void o(long j10, boolean z10, boolean z11) {
        if (j10 == -9223372036854775807L) {
            j10 = this.A;
        }
        if (!this.f47888z && this.A == j10 && this.B == z10 && this.C == z11) {
            return;
        }
        this.A = j10;
        this.B = z10;
        this.C = z11;
        this.f47888z = false;
        E();
    }

    private h0(MediaItem mediaItem, DataSource.Factory factory, b0.a aVar, sc.v vVar, com.google.android.exoplayer2.upstream.i iVar, int i10) {
        this.f47882t = (MediaItem.h) oe.a.e(mediaItem.f11765e);
        this.f47881s = mediaItem;
        this.f47883u = factory;
        this.f47884v = aVar;
        this.f47885w = vVar;
        this.f47886x = iVar;
        this.f47887y = i10;
        this.f47888z = true;
        this.A = -9223372036854775807L;
    }

    @Override // rd.r
    public void q() {
    }
}
