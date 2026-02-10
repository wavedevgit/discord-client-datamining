package rd;

import android.net.Uri;
import com.google.android.exoplayer2.Format;
import com.google.android.exoplayer2.MediaItem;
import com.google.android.exoplayer2.Timeline;
import com.google.android.exoplayer2.upstream.DataSource;
import com.google.android.exoplayer2.upstream.a;
import rd.r;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class r0 extends rd.a {
    private me.c0 A;

    /* renamed from: s  reason: collision with root package name */
    private final com.google.android.exoplayer2.upstream.a f48009s;

    /* renamed from: t  reason: collision with root package name */
    private final DataSource.Factory f48010t;

    /* renamed from: u  reason: collision with root package name */
    private final Format f48011u;

    /* renamed from: v  reason: collision with root package name */
    private final long f48012v;

    /* renamed from: w  reason: collision with root package name */
    private final com.google.android.exoplayer2.upstream.i f48013w;

    /* renamed from: x  reason: collision with root package name */
    private final boolean f48014x;

    /* renamed from: y  reason: collision with root package name */
    private final Timeline f48015y;

    /* renamed from: z  reason: collision with root package name */
    private final MediaItem f48016z;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        private final DataSource.Factory f48017a;

        /* renamed from: b  reason: collision with root package name */
        private com.google.android.exoplayer2.upstream.i f48018b = new com.google.android.exoplayer2.upstream.g();

        /* renamed from: c  reason: collision with root package name */
        private boolean f48019c = true;

        /* renamed from: d  reason: collision with root package name */
        private Object f48020d;

        /* renamed from: e  reason: collision with root package name */
        private String f48021e;

        public b(DataSource.Factory factory) {
            this.f48017a = (DataSource.Factory) oe.a.e(factory);
        }

        public r0 a(MediaItem.k kVar, long j10) {
            return new r0(this.f48021e, kVar, this.f48017a, j10, this.f48018b, this.f48019c, this.f48020d);
        }
    }

    @Override // rd.a
    protected void B(me.c0 c0Var) {
        this.A = c0Var;
        C(this.f48015y);
    }

    @Override // rd.r
    public void a(p pVar) {
        ((q0) pVar).q();
    }

    @Override // rd.r
    public MediaItem d() {
        return this.f48016z;
    }

    @Override // rd.r
    public p f(r.b bVar, me.b bVar2, long j10) {
        return new q0(this.f48009s, this.f48010t, this.A, this.f48011u, this.f48012v, this.f48013w, w(bVar), this.f48014x);
    }

    private r0(String str, MediaItem.k kVar, DataSource.Factory factory, long j10, com.google.android.exoplayer2.upstream.i iVar, boolean z10, Object obj) {
        this.f48010t = factory;
        this.f48012v = j10;
        this.f48013w = iVar;
        this.f48014x = z10;
        MediaItem a10 = new MediaItem.c().e(Uri.EMPTY).b(kVar.f11883d.toString()).c(oi.s.u(kVar)).d(obj).a();
        this.f48016z = a10;
        Format.b W = new Format.b().g0((String) ni.h.a(kVar.f11884e, "text/x-unknown")).X(kVar.f11885i).i0(kVar.f11886o).e0(kVar.f11887p).W(kVar.f11888q);
        String str2 = kVar.f11889r;
        this.f48011u = W.U(str2 != null ? str2 : str).G();
        this.f48009s = new a.b().i(kVar.f11883d).b(1).a();
        this.f48015y = new p0(j10, true, false, false, null, a10);
    }

    @Override // rd.a
    protected void D() {
    }

    @Override // rd.r
    public void q() {
    }
}
