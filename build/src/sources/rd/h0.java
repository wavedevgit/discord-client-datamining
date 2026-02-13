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
    private final MediaItem f46904s;

    /* renamed from: t  reason: collision with root package name */
    private final MediaItem.h f46905t;

    /* renamed from: u  reason: collision with root package name */
    private final DataSource.Factory f46906u;

    /* renamed from: v  reason: collision with root package name */
    private final b0.a f46907v;

    /* renamed from: w  reason: collision with root package name */
    private final sc.v f46908w;

    /* renamed from: x  reason: collision with root package name */
    private final com.google.android.exoplayer2.upstream.i f46909x;

    /* renamed from: y  reason: collision with root package name */
    private final int f46910y;

    /* renamed from: z  reason: collision with root package name */
    private boolean f46911z;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public class a extends l {
        a(Timeline timeline) {
            super(timeline);
        }

        @Override // rd.l, com.google.android.exoplayer2.Timeline
        public Timeline.b k(int i10, Timeline.b bVar, boolean z10) {
            super.k(i10, bVar, z10);
            bVar.f12598q = true;
            return bVar;
        }

        @Override // rd.l, com.google.android.exoplayer2.Timeline
        public Timeline.d s(int i10, Timeline.d dVar, long j10) {
            super.s(i10, dVar, j10);
            dVar.f12615w = true;
            return dVar;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class b implements r.a {

        /* renamed from: a  reason: collision with root package name */
        private final DataSource.Factory f46913a;

        /* renamed from: b  reason: collision with root package name */
        private b0.a f46914b;

        /* renamed from: c  reason: collision with root package name */
        private sc.x f46915c;

        /* renamed from: d  reason: collision with root package name */
        private com.google.android.exoplayer2.upstream.i f46916d;

        /* renamed from: e  reason: collision with root package name */
        private int f46917e;

        public b(DataSource.Factory factory) {
            this(factory, new uc.h());
        }

        public static /* synthetic */ b0 a(uc.p pVar, t1 t1Var) {
            return new c(pVar);
        }

        public h0 b(MediaItem mediaItem) {
            oe.a.e(mediaItem.f12343e);
            return new h0(mediaItem, this.f46913a, this.f46914b, this.f46915c.a(mediaItem), this.f46916d, this.f46917e, null);
        }

        public b c(com.google.android.exoplayer2.upstream.i iVar) {
            this.f46916d = (com.google.android.exoplayer2.upstream.i) oe.a.f(iVar, "MediaSource.Factory#setLoadErrorHandlingPolicy no longer handles null by instantiating a new DefaultLoadErrorHandlingPolicy. Explicitly construct and pass an instance in order to retain the old behavior.");
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
            this.f46913a = factory;
            this.f46914b = aVar;
            this.f46915c = xVar;
            this.f46916d = iVar;
            this.f46917e = i10;
        }
    }

    /* synthetic */ h0(MediaItem mediaItem, DataSource.Factory factory, b0.a aVar, sc.v vVar, com.google.android.exoplayer2.upstream.i iVar, int i10, a aVar2) {
        this(mediaItem, factory, aVar, vVar, iVar, i10);
    }

    private void E() {
        Timeline p0Var = new p0(this.A, this.B, false, this.C, null, this.f46904s);
        if (this.f46911z) {
            p0Var = new a(p0Var);
        }
        C(p0Var);
    }

    @Override // rd.a
    protected void B(me.c0 c0Var) {
        this.D = c0Var;
        this.f46908w.e((Looper) oe.a.e(Looper.myLooper()), z());
        this.f46908w.d();
        E();
    }

    @Override // rd.a
    protected void D() {
        this.f46908w.release();
    }

    @Override // rd.r
    public void a(p pVar) {
        ((g0) pVar).c0();
    }

    @Override // rd.r
    public MediaItem d() {
        return this.f46904s;
    }

    @Override // rd.r
    public p f(r.b bVar, me.b bVar2, long j10) {
        DataSource createDataSource = this.f46906u.createDataSource();
        me.c0 c0Var = this.D;
        if (c0Var != null) {
            createDataSource.i(c0Var);
        }
        return new g0(this.f46905t.f12433d, createDataSource, this.f46907v.a(z()), this.f46908w, u(bVar), this.f46909x, w(bVar), this, bVar2, this.f46905t.f12438q, this.f46910y);
    }

    @Override // rd.g0.b
    public void o(long j10, boolean z10, boolean z11) {
        if (j10 == -9223372036854775807L) {
            j10 = this.A;
        }
        if (!this.f46911z && this.A == j10 && this.B == z10 && this.C == z11) {
            return;
        }
        this.A = j10;
        this.B = z10;
        this.C = z11;
        this.f46911z = false;
        E();
    }

    private h0(MediaItem mediaItem, DataSource.Factory factory, b0.a aVar, sc.v vVar, com.google.android.exoplayer2.upstream.i iVar, int i10) {
        this.f46905t = (MediaItem.h) oe.a.e(mediaItem.f12343e);
        this.f46904s = mediaItem;
        this.f46906u = factory;
        this.f46907v = aVar;
        this.f46908w = vVar;
        this.f46909x = iVar;
        this.f46910y = i10;
        this.f46911z = true;
        this.A = -9223372036854775807L;
    }

    @Override // rd.r
    public void q() {
    }
}
