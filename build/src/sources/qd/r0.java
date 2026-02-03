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
    private final com.google.android.exoplayer2.upstream.a f47731s;

    /* renamed from: t  reason: collision with root package name */
    private final DataSource.Factory f47732t;

    /* renamed from: u  reason: collision with root package name */
    private final Format f47733u;

    /* renamed from: v  reason: collision with root package name */
    private final long f47734v;

    /* renamed from: w  reason: collision with root package name */
    private final com.google.android.exoplayer2.upstream.h f47735w;

    /* renamed from: x  reason: collision with root package name */
    private final boolean f47736x;

    /* renamed from: y  reason: collision with root package name */
    private final Timeline f47737y;

    /* renamed from: z  reason: collision with root package name */
    private final MediaItem f47738z;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        private final DataSource.Factory f47739a;

        /* renamed from: b  reason: collision with root package name */
        private com.google.android.exoplayer2.upstream.h f47740b = new com.google.android.exoplayer2.upstream.f();

        /* renamed from: c  reason: collision with root package name */
        private boolean f47741c = true;

        /* renamed from: d  reason: collision with root package name */
        private Object f47742d;

        /* renamed from: e  reason: collision with root package name */
        private String f47743e;

        public b(DataSource.Factory factory) {
            this.f47739a = (DataSource.Factory) ne.a.e(factory);
        }

        public r0 a(MediaItem.k kVar, long j10) {
            return new r0(this.f47743e, kVar, this.f47739a, j10, this.f47740b, this.f47741c, this.f47742d);
        }
    }

    @Override // qd.a
    protected void B(le.c0 c0Var) {
        this.A = c0Var;
        C(this.f47737y);
    }

    @Override // qd.r
    public void c(p pVar) {
        ((q0) pVar).s();
    }

    @Override // qd.r
    public MediaItem f() {
        return this.f47738z;
    }

    @Override // qd.r
    public p h(r.b bVar, le.b bVar2, long j10) {
        return new q0(this.f47731s, this.f47732t, this.A, this.f47733u, this.f47734v, this.f47735w, w(bVar), this.f47736x);
    }

    private r0(String str, MediaItem.k kVar, DataSource.Factory factory, long j10, com.google.android.exoplayer2.upstream.h hVar, boolean z10, Object obj) {
        this.f47732t = factory;
        this.f47734v = j10;
        this.f47735w = hVar;
        this.f47736x = z10;
        MediaItem a10 = new MediaItem.c().e(Uri.EMPTY).b(kVar.f11459d.toString()).c(ji.s.s(kVar)).d(obj).a();
        this.f47738z = a10;
        Format.b W = new Format.b().g0((String) ii.h.a(kVar.f11460e, "text/x-unknown")).X(kVar.f11461i).i0(kVar.f11462o).e0(kVar.f11463p).W(kVar.f11464q);
        String str2 = kVar.f11465r;
        this.f47733u = W.U(str2 != null ? str2 : str).G();
        this.f47731s = new a.b().i(kVar.f11459d).b(1).a();
        this.f47737y = new p0(j10, true, false, false, null, a10);
    }

    @Override // qd.a
    protected void D() {
    }

    @Override // qd.r
    public void o() {
    }
}
