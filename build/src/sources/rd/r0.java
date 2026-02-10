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
    private final com.google.android.exoplayer2.upstream.a f46463s;

    /* renamed from: t  reason: collision with root package name */
    private final DataSource.Factory f46464t;

    /* renamed from: u  reason: collision with root package name */
    private final Format f46465u;

    /* renamed from: v  reason: collision with root package name */
    private final long f46466v;

    /* renamed from: w  reason: collision with root package name */
    private final com.google.android.exoplayer2.upstream.i f46467w;

    /* renamed from: x  reason: collision with root package name */
    private final boolean f46468x;

    /* renamed from: y  reason: collision with root package name */
    private final Timeline f46469y;

    /* renamed from: z  reason: collision with root package name */
    private final MediaItem f46470z;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        private final DataSource.Factory f46471a;

        /* renamed from: b  reason: collision with root package name */
        private com.google.android.exoplayer2.upstream.i f46472b = new com.google.android.exoplayer2.upstream.g();

        /* renamed from: c  reason: collision with root package name */
        private boolean f46473c = true;

        /* renamed from: d  reason: collision with root package name */
        private Object f46474d;

        /* renamed from: e  reason: collision with root package name */
        private String f46475e;

        public b(DataSource.Factory factory) {
            this.f46471a = (DataSource.Factory) oe.a.e(factory);
        }

        public r0 a(MediaItem.k kVar, long j10) {
            return new r0(this.f46475e, kVar, this.f46471a, j10, this.f46472b, this.f46473c, this.f46474d);
        }
    }

    @Override // rd.a
    protected void B(me.c0 c0Var) {
        this.A = c0Var;
        C(this.f46469y);
    }

    @Override // rd.r
    public void a(p pVar) {
        ((q0) pVar).q();
    }

    @Override // rd.r
    public MediaItem d() {
        return this.f46470z;
    }

    @Override // rd.r
    public p f(r.b bVar, me.b bVar2, long j10) {
        return new q0(this.f46463s, this.f46464t, this.A, this.f46465u, this.f46466v, this.f46467w, w(bVar), this.f46468x);
    }

    private r0(String str, MediaItem.k kVar, DataSource.Factory factory, long j10, com.google.android.exoplayer2.upstream.i iVar, boolean z10, Object obj) {
        this.f46464t = factory;
        this.f46466v = j10;
        this.f46467w = iVar;
        this.f46468x = z10;
        MediaItem a10 = new MediaItem.c().e(Uri.EMPTY).b(kVar.f12460d.toString()).c(qi.s.u(kVar)).d(obj).a();
        this.f46470z = a10;
        Format.b W = new Format.b().g0((String) pi.h.a(kVar.f12461e, "text/x-unknown")).X(kVar.f12462i).i0(kVar.f12463o).e0(kVar.f12464p).W(kVar.f12465q);
        String str2 = kVar.f12466r;
        this.f46465u = W.U(str2 != null ? str2 : str).G();
        this.f46463s = new a.b().i(kVar.f12460d).b(1).a();
        this.f46469y = new p0(j10, true, false, false, null, a10);
    }

    @Override // rd.a
    protected void D() {
    }

    @Override // rd.r
    public void q() {
    }
}
