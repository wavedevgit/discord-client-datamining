package qd;

import android.os.Looper;
import com.google.android.exoplayer2.MediaItem;
import com.google.android.exoplayer2.Timeline;
import com.google.android.exoplayer2.upstream.DataSource;
import mc.t1;
import qd.b0;
import qd.g0;
import qd.h0;
import qd.r;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class h0 extends qd.a implements g0.b {
    private long A;
    private boolean B;
    private boolean C;
    private le.c0 D;

    /* renamed from: s  reason: collision with root package name */
    private final MediaItem f46715s;

    /* renamed from: t  reason: collision with root package name */
    private final MediaItem.h f46716t;

    /* renamed from: u  reason: collision with root package name */
    private final DataSource.Factory f46717u;

    /* renamed from: v  reason: collision with root package name */
    private final b0.a f46718v;

    /* renamed from: w  reason: collision with root package name */
    private final rc.v f46719w;

    /* renamed from: x  reason: collision with root package name */
    private final com.google.android.exoplayer2.upstream.i f46720x;

    /* renamed from: y  reason: collision with root package name */
    private final int f46721y;

    /* renamed from: z  reason: collision with root package name */
    private boolean f46722z;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public class a extends l {
        a(Timeline timeline) {
            super(timeline);
        }

        @Override // qd.l, com.google.android.exoplayer2.Timeline
        public Timeline.b k(int i10, Timeline.b bVar, boolean z10) {
            super.k(i10, bVar, z10);
            bVar.f11880q = true;
            return bVar;
        }

        @Override // qd.l, com.google.android.exoplayer2.Timeline
        public Timeline.d s(int i10, Timeline.d dVar, long j10) {
            super.s(i10, dVar, j10);
            dVar.f11897w = true;
            return dVar;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class b implements r.a {

        /* renamed from: a  reason: collision with root package name */
        private final DataSource.Factory f46724a;

        /* renamed from: b  reason: collision with root package name */
        private b0.a f46725b;

        /* renamed from: c  reason: collision with root package name */
        private rc.x f46726c;

        /* renamed from: d  reason: collision with root package name */
        private com.google.android.exoplayer2.upstream.i f46727d;

        /* renamed from: e  reason: collision with root package name */
        private int f46728e;

        public b(DataSource.Factory factory) {
            this(factory, new tc.h());
        }

        public static /* synthetic */ b0 a(tc.p pVar, t1 t1Var) {
            return new c(pVar);
        }

        public h0 b(MediaItem mediaItem) {
            ne.a.e(mediaItem.f11625e);
            return new h0(mediaItem, this.f46724a, this.f46725b, this.f46726c.a(mediaItem), this.f46727d, this.f46728e, null);
        }

        public b c(com.google.android.exoplayer2.upstream.i iVar) {
            this.f46727d = (com.google.android.exoplayer2.upstream.i) ne.a.f(iVar, "MediaSource.Factory#setLoadErrorHandlingPolicy no longer handles null by instantiating a new DefaultLoadErrorHandlingPolicy. Explicitly construct and pass an instance in order to retain the old behavior.");
            return this;
        }

        public b(DataSource.Factory factory, final tc.p pVar) {
            this(factory, new b0.a() { // from class: qd.i0
                @Override // qd.b0.a
                public final b0 a(t1 t1Var) {
                    return h0.b.a(tc.p.this, t1Var);
                }
            });
        }

        public b(DataSource.Factory factory, b0.a aVar) {
            this(factory, aVar, new rc.l(), new com.google.android.exoplayer2.upstream.g(), 1048576);
        }

        public b(DataSource.Factory factory, b0.a aVar, rc.x xVar, com.google.android.exoplayer2.upstream.i iVar, int i10) {
            this.f46724a = factory;
            this.f46725b = aVar;
            this.f46726c = xVar;
            this.f46727d = iVar;
            this.f46728e = i10;
        }
    }

    /* synthetic */ h0(MediaItem mediaItem, DataSource.Factory factory, b0.a aVar, rc.v vVar, com.google.android.exoplayer2.upstream.i iVar, int i10, a aVar2) {
        this(mediaItem, factory, aVar, vVar, iVar, i10);
    }

    private void E() {
        Timeline p0Var = new p0(this.A, this.B, false, this.C, null, this.f46715s);
        if (this.f46722z) {
            p0Var = new a(p0Var);
        }
        C(p0Var);
    }

    @Override // qd.a
    protected void B(le.c0 c0Var) {
        this.D = c0Var;
        this.f46719w.a((Looper) ne.a.e(Looper.myLooper()), z());
        this.f46719w.d();
        E();
    }

    @Override // qd.a
    protected void D() {
        this.f46719w.release();
    }

    @Override // qd.r
    public void c(p pVar) {
        ((g0) pVar).c0();
    }

    @Override // qd.r
    public MediaItem f() {
        return this.f46715s;
    }

    @Override // qd.r
    public p h(r.b bVar, le.b bVar2, long j10) {
        DataSource createDataSource = this.f46717u.createDataSource();
        le.c0 c0Var = this.D;
        if (c0Var != null) {
            createDataSource.j(c0Var);
        }
        return new g0(this.f46716t.f11715d, createDataSource, this.f46718v.a(z()), this.f46719w, u(bVar), this.f46720x, w(bVar), this, bVar2, this.f46716t.f11720q, this.f46721y);
    }

    @Override // qd.g0.b
    public void l(long j10, boolean z10, boolean z11) {
        if (j10 == -9223372036854775807L) {
            j10 = this.A;
        }
        if (!this.f46722z && this.A == j10 && this.B == z10 && this.C == z11) {
            return;
        }
        this.A = j10;
        this.B = z10;
        this.C = z11;
        this.f46722z = false;
        E();
    }

    private h0(MediaItem mediaItem, DataSource.Factory factory, b0.a aVar, rc.v vVar, com.google.android.exoplayer2.upstream.i iVar, int i10) {
        this.f46716t = (MediaItem.h) ne.a.e(mediaItem.f11625e);
        this.f46715s = mediaItem;
        this.f46717u = factory;
        this.f46718v = aVar;
        this.f46719w = vVar;
        this.f46720x = iVar;
        this.f46721y = i10;
        this.f46722z = true;
        this.A = -9223372036854775807L;
    }

    @Override // qd.r
    public void o() {
    }
}
