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
    private final com.google.android.exoplayer2.upstream.a f47795s;

    /* renamed from: t  reason: collision with root package name */
    private final DataSource.Factory f47796t;

    /* renamed from: u  reason: collision with root package name */
    private final Format f47797u;

    /* renamed from: v  reason: collision with root package name */
    private final long f47798v;

    /* renamed from: w  reason: collision with root package name */
    private final com.google.android.exoplayer2.upstream.h f47799w;

    /* renamed from: x  reason: collision with root package name */
    private final boolean f47800x;

    /* renamed from: y  reason: collision with root package name */
    private final Timeline f47801y;

    /* renamed from: z  reason: collision with root package name */
    private final MediaItem f47802z;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        private final DataSource.Factory f47803a;

        /* renamed from: b  reason: collision with root package name */
        private com.google.android.exoplayer2.upstream.h f47804b = new com.google.android.exoplayer2.upstream.f();

        /* renamed from: c  reason: collision with root package name */
        private boolean f47805c = true;

        /* renamed from: d  reason: collision with root package name */
        private Object f47806d;

        /* renamed from: e  reason: collision with root package name */
        private String f47807e;

        public b(DataSource.Factory factory) {
            this.f47803a = (DataSource.Factory) ne.a.e(factory);
        }

        public r0 a(MediaItem.k kVar, long j10) {
            return new r0(this.f47807e, kVar, this.f47803a, j10, this.f47804b, this.f47805c, this.f47806d);
        }
    }

    @Override // qd.a
    protected void B(le.c0 c0Var) {
        this.A = c0Var;
        C(this.f47801y);
    }

    @Override // qd.r
    public void c(p pVar) {
        ((q0) pVar).s();
    }

    @Override // qd.r
    public MediaItem f() {
        return this.f47802z;
    }

    @Override // qd.r
    public p h(r.b bVar, le.b bVar2, long j10) {
        return new q0(this.f47795s, this.f47796t, this.A, this.f47797u, this.f47798v, this.f47799w, w(bVar), this.f47800x);
    }

    private r0(String str, MediaItem.k kVar, DataSource.Factory factory, long j10, com.google.android.exoplayer2.upstream.h hVar, boolean z10, Object obj) {
        this.f47796t = factory;
        this.f47798v = j10;
        this.f47799w = hVar;
        this.f47800x = z10;
        MediaItem a10 = new MediaItem.c().e(Uri.EMPTY).b(kVar.f11844d.toString()).c(mi.s.t(kVar)).d(obj).a();
        this.f47802z = a10;
        Format.b W = new Format.b().g0((String) li.h.a(kVar.f11845e, "text/x-unknown")).X(kVar.f11846i).i0(kVar.f11847o).e0(kVar.f11848p).W(kVar.f11849q);
        String str2 = kVar.f11850r;
        this.f47797u = W.U(str2 != null ? str2 : str).G();
        this.f47795s = new a.b().i(kVar.f11844d).b(1).a();
        this.f47801y = new p0(j10, true, false, false, null, a10);
    }

    @Override // qd.a
    protected void D() {
    }

    @Override // qd.r
    public void o() {
    }
}
