package qd;

import android.net.Uri;
import com.google.android.exoplayer2.Format;
import com.google.android.exoplayer2.MediaItem;
import com.google.android.exoplayer2.Timeline;
import com.google.android.exoplayer2.upstream.DataSource;
import com.google.android.exoplayer2.upstream.a;
import qd.r;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class r0 extends qd.a {
    private le.c0 A;

    /* renamed from: s  reason: collision with root package name */
    private final com.google.android.exoplayer2.upstream.a f47326s;

    /* renamed from: t  reason: collision with root package name */
    private final DataSource.Factory f47327t;

    /* renamed from: u  reason: collision with root package name */
    private final Format f47328u;

    /* renamed from: v  reason: collision with root package name */
    private final long f47329v;

    /* renamed from: w  reason: collision with root package name */
    private final com.google.android.exoplayer2.upstream.h f47330w;

    /* renamed from: x  reason: collision with root package name */
    private final boolean f47331x;

    /* renamed from: y  reason: collision with root package name */
    private final Timeline f47332y;

    /* renamed from: z  reason: collision with root package name */
    private final MediaItem f47333z;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        private final DataSource.Factory f47334a;

        /* renamed from: b  reason: collision with root package name */
        private com.google.android.exoplayer2.upstream.h f47335b = new com.google.android.exoplayer2.upstream.f();

        /* renamed from: c  reason: collision with root package name */
        private boolean f47336c = true;

        /* renamed from: d  reason: collision with root package name */
        private Object f47337d;

        /* renamed from: e  reason: collision with root package name */
        private String f47338e;

        public b(DataSource.Factory factory) {
            this.f47334a = (DataSource.Factory) ne.a.e(factory);
        }

        public r0 a(MediaItem.k kVar, long j10) {
            return new r0(this.f47338e, kVar, this.f47334a, j10, this.f47335b, this.f47336c, this.f47337d);
        }
    }

    @Override // qd.a
    protected void B(le.c0 c0Var) {
        this.A = c0Var;
        C(this.f47332y);
    }

    @Override // qd.r
    public void c(p pVar) {
        ((q0) pVar).s();
    }

    @Override // qd.r
    public MediaItem f() {
        return this.f47333z;
    }

    @Override // qd.r
    public p h(r.b bVar, le.b bVar2, long j10) {
        return new q0(this.f47326s, this.f47327t, this.A, this.f47328u, this.f47329v, this.f47330w, w(bVar), this.f47331x);
    }

    private r0(String str, MediaItem.k kVar, DataSource.Factory factory, long j10, com.google.android.exoplayer2.upstream.h hVar, boolean z10, Object obj) {
        this.f47327t = factory;
        this.f47329v = j10;
        this.f47330w = hVar;
        this.f47331x = z10;
        MediaItem a10 = new MediaItem.c().e(Uri.EMPTY).b(kVar.f12862d.toString()).c(ji.s.s(kVar)).d(obj).a();
        this.f47333z = a10;
        Format.b W = new Format.b().g0((String) ii.h.a(kVar.f12863e, "text/x-unknown")).X(kVar.f12864i).i0(kVar.f12865o).e0(kVar.f12866p).W(kVar.f12867q);
        String str2 = kVar.f12868r;
        this.f47328u = W.U(str2 != null ? str2 : str).G();
        this.f47326s = new a.b().i(kVar.f12862d).b(1).a();
        this.f47332y = new p0(j10, true, false, false, null, a10);
    }

    @Override // qd.a
    protected void D() {
    }

    @Override // qd.r
    public void o() {
    }
}
