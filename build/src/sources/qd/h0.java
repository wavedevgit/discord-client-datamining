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
    private final MediaItem f47667s;

    /* renamed from: t  reason: collision with root package name */
    private final MediaItem.h f47668t;

    /* renamed from: u  reason: collision with root package name */
    private final DataSource.Factory f47669u;

    /* renamed from: v  reason: collision with root package name */
    private final b0.a f47670v;

    /* renamed from: w  reason: collision with root package name */
    private final rc.v f47671w;

    /* renamed from: x  reason: collision with root package name */
    private final com.google.android.exoplayer2.upstream.h f47672x;

    /* renamed from: y  reason: collision with root package name */
    private final int f47673y;

    /* renamed from: z  reason: collision with root package name */
    private boolean f47674z;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public class a extends l {
        a(Timeline timeline) {
            super(timeline);
        }

        @Override // qd.l, com.google.android.exoplayer2.Timeline
        public Timeline.b k(int i10, Timeline.b bVar, boolean z10) {
            super.k(i10, bVar, z10);
            bVar.f11981q = true;
            return bVar;
        }

        @Override // qd.l, com.google.android.exoplayer2.Timeline
        public Timeline.d s(int i10, Timeline.d dVar, long j10) {
            super.s(i10, dVar, j10);
            dVar.f11998w = true;
            return dVar;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class b implements r.a {

        /* renamed from: a  reason: collision with root package name */
        private final DataSource.Factory f47676a;

        /* renamed from: b  reason: collision with root package name */
        private b0.a f47677b;

        /* renamed from: c  reason: collision with root package name */
        private rc.x f47678c;

        /* renamed from: d  reason: collision with root package name */
        private com.google.android.exoplayer2.upstream.h f47679d;

        /* renamed from: e  reason: collision with root package name */
        private int f47680e;

        public b(DataSource.Factory factory) {
            this(factory, new tc.h());
        }

        public static /* synthetic */ b0 a(tc.p pVar, t1 t1Var) {
            return new c(pVar);
        }

        public h0 b(MediaItem mediaItem) {
            ne.a.e(mediaItem.f11726e);
            return new h0(mediaItem, this.f47676a, this.f47677b, this.f47678c.a(mediaItem), this.f47679d, this.f47680e, null);
        }

        public b c(com.google.android.exoplayer2.upstream.h hVar) {
            this.f47679d = (com.google.android.exoplayer2.upstream.h) ne.a.f(hVar, "MediaSource.Factory#setLoadErrorHandlingPolicy no longer handles null by instantiating a new DefaultLoadErrorHandlingPolicy. Explicitly construct and pass an instance in order to retain the old behavior.");
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
            this(factory, aVar, new rc.l(), new com.google.android.exoplayer2.upstream.f(), 1048576);
        }

        public b(DataSource.Factory factory, b0.a aVar, rc.x xVar, com.google.android.exoplayer2.upstream.h hVar, int i10) {
            this.f47676a = factory;
            this.f47677b = aVar;
            this.f47678c = xVar;
            this.f47679d = hVar;
            this.f47680e = i10;
        }
    }

    /* synthetic */ h0(MediaItem mediaItem, DataSource.Factory factory, b0.a aVar, rc.v vVar, com.google.android.exoplayer2.upstream.h hVar, int i10, a aVar2) {
        this(mediaItem, factory, aVar, vVar, hVar, i10);
    }

    private void E() {
        Timeline p0Var = new p0(this.A, this.B, false, this.C, null, this.f47667s);
        if (this.f47674z) {
            p0Var = new a(p0Var);
        }
        C(p0Var);
    }

    @Override // qd.a
    protected void B(le.c0 c0Var) {
        this.D = c0Var;
        this.f47671w.a((Looper) ne.a.e(Looper.myLooper()), z());
        this.f47671w.d();
        E();
    }

    @Override // qd.a
    protected void D() {
        this.f47671w.release();
    }

    @Override // qd.r
    public void c(p pVar) {
        ((g0) pVar).c0();
    }

    @Override // qd.r
    public MediaItem f() {
        return this.f47667s;
    }

    @Override // qd.r
    public p h(r.b bVar, le.b bVar2, long j10) {
        DataSource createDataSource = this.f47669u.createDataSource();
        le.c0 c0Var = this.D;
        if (c0Var != null) {
            createDataSource.j(c0Var);
        }
        return new g0(this.f47668t.f11816d, createDataSource, this.f47670v.a(z()), this.f47671w, u(bVar), this.f47672x, w(bVar), this, bVar2, this.f47668t.f11821q, this.f47673y);
    }

    @Override // qd.g0.b
    public void l(long j10, boolean z10, boolean z11) {
        if (j10 == -9223372036854775807L) {
            j10 = this.A;
        }
        if (!this.f47674z && this.A == j10 && this.B == z10 && this.C == z11) {
            return;
        }
        this.A = j10;
        this.B = z10;
        this.C = z11;
        this.f47674z = false;
        E();
    }

    private h0(MediaItem mediaItem, DataSource.Factory factory, b0.a aVar, rc.v vVar, com.google.android.exoplayer2.upstream.h hVar, int i10) {
        this.f47668t = (MediaItem.h) ne.a.e(mediaItem.f11726e);
        this.f47667s = mediaItem;
        this.f47669u = factory;
        this.f47670v = aVar;
        this.f47671w = vVar;
        this.f47672x = hVar;
        this.f47673y = i10;
        this.f47674z = true;
        this.A = -9223372036854775807L;
    }

    @Override // qd.r
    public void o() {
    }
}
