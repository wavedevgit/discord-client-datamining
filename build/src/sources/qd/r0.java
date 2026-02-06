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
    private final com.google.android.exoplayer2.upstream.a f46843s;

    /* renamed from: t  reason: collision with root package name */
    private final DataSource.Factory f46844t;

    /* renamed from: u  reason: collision with root package name */
    private final Format f46845u;

    /* renamed from: v  reason: collision with root package name */
    private final long f46846v;

    /* renamed from: w  reason: collision with root package name */
    private final com.google.android.exoplayer2.upstream.i f46847w;

    /* renamed from: x  reason: collision with root package name */
    private final boolean f46848x;

    /* renamed from: y  reason: collision with root package name */
    private final Timeline f46849y;

    /* renamed from: z  reason: collision with root package name */
    private final MediaItem f46850z;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        private final DataSource.Factory f46851a;

        /* renamed from: b  reason: collision with root package name */
        private com.google.android.exoplayer2.upstream.i f46852b = new com.google.android.exoplayer2.upstream.g();

        /* renamed from: c  reason: collision with root package name */
        private boolean f46853c = true;

        /* renamed from: d  reason: collision with root package name */
        private Object f46854d;

        /* renamed from: e  reason: collision with root package name */
        private String f46855e;

        public b(DataSource.Factory factory) {
            this.f46851a = (DataSource.Factory) ne.a.e(factory);
        }

        public r0 a(MediaItem.k kVar, long j10) {
            return new r0(this.f46855e, kVar, this.f46851a, j10, this.f46852b, this.f46853c, this.f46854d);
        }
    }

    @Override // qd.a
    protected void B(le.c0 c0Var) {
        this.A = c0Var;
        C(this.f46849y);
    }

    @Override // qd.r
    public void c(p pVar) {
        ((q0) pVar).s();
    }

    @Override // qd.r
    public MediaItem f() {
        return this.f46850z;
    }

    @Override // qd.r
    public p h(r.b bVar, le.b bVar2, long j10) {
        return new q0(this.f46843s, this.f46844t, this.A, this.f46845u, this.f46846v, this.f46847w, w(bVar), this.f46848x);
    }

    private r0(String str, MediaItem.k kVar, DataSource.Factory factory, long j10, com.google.android.exoplayer2.upstream.i iVar, boolean z10, Object obj) {
        this.f46844t = factory;
        this.f46846v = j10;
        this.f46847w = iVar;
        this.f46848x = z10;
        MediaItem a10 = new MediaItem.c().e(Uri.EMPTY).b(kVar.f11743d.toString()).c(ni.s.u(kVar)).d(obj).a();
        this.f46850z = a10;
        Format.b W = new Format.b().g0((String) mi.h.a(kVar.f11744e, "text/x-unknown")).X(kVar.f11745i).i0(kVar.f11746o).e0(kVar.f11747p).W(kVar.f11748q);
        String str2 = kVar.f11749r;
        this.f46845u = W.U(str2 != null ? str2 : str).G();
        this.f46843s = new a.b().i(kVar.f11743d).b(1).a();
        this.f46849y = new p0(j10, true, false, false, null, a10);
    }

    @Override // qd.a
    protected void D() {
    }

    @Override // qd.r
    public void o() {
    }
}
