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
    private final com.google.android.exoplayer2.upstream.a f47310s;

    /* renamed from: t  reason: collision with root package name */
    private final DataSource.Factory f47311t;

    /* renamed from: u  reason: collision with root package name */
    private final Format f47312u;

    /* renamed from: v  reason: collision with root package name */
    private final long f47313v;

    /* renamed from: w  reason: collision with root package name */
    private final com.google.android.exoplayer2.upstream.h f47314w;

    /* renamed from: x  reason: collision with root package name */
    private final boolean f47315x;

    /* renamed from: y  reason: collision with root package name */
    private final Timeline f47316y;

    /* renamed from: z  reason: collision with root package name */
    private final MediaItem f47317z;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        private final DataSource.Factory f47318a;

        /* renamed from: b  reason: collision with root package name */
        private com.google.android.exoplayer2.upstream.h f47319b = new com.google.android.exoplayer2.upstream.f();

        /* renamed from: c  reason: collision with root package name */
        private boolean f47320c = true;

        /* renamed from: d  reason: collision with root package name */
        private Object f47321d;

        /* renamed from: e  reason: collision with root package name */
        private String f47322e;

        public b(DataSource.Factory factory) {
            this.f47318a = (DataSource.Factory) ne.a.e(factory);
        }

        public r0 a(MediaItem.k kVar, long j10) {
            return new r0(this.f47322e, kVar, this.f47318a, j10, this.f47319b, this.f47320c, this.f47321d);
        }
    }

    @Override // qd.a
    protected void B(le.c0 c0Var) {
        this.A = c0Var;
        C(this.f47316y);
    }

    @Override // qd.r
    public void c(p pVar) {
        ((q0) pVar).s();
    }

    @Override // qd.r
    public MediaItem f() {
        return this.f47317z;
    }

    @Override // qd.r
    public p h(r.b bVar, le.b bVar2, long j10) {
        return new q0(this.f47310s, this.f47311t, this.A, this.f47312u, this.f47313v, this.f47314w, w(bVar), this.f47315x);
    }

    private r0(String str, MediaItem.k kVar, DataSource.Factory factory, long j10, com.google.android.exoplayer2.upstream.h hVar, boolean z10, Object obj) {
        this.f47311t = factory;
        this.f47313v = j10;
        this.f47314w = hVar;
        this.f47315x = z10;
        MediaItem a10 = new MediaItem.c().e(Uri.EMPTY).b(kVar.f12862d.toString()).c(ji.s.s(kVar)).d(obj).a();
        this.f47317z = a10;
        Format.b W = new Format.b().g0((String) ii.h.a(kVar.f12863e, "text/x-unknown")).X(kVar.f12864i).i0(kVar.f12865o).e0(kVar.f12866p).W(kVar.f12867q);
        String str2 = kVar.f12868r;
        this.f47312u = W.U(str2 != null ? str2 : str).G();
        this.f47310s = new a.b().i(kVar.f12862d).b(1).a();
        this.f47316y = new p0(j10, true, false, false, null, a10);
    }

    @Override // qd.a
    protected void D() {
    }

    @Override // qd.r
    public void o() {
    }
}
