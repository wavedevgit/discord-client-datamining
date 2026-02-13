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
    private final com.google.android.exoplayer2.upstream.a f47032s;

    /* renamed from: t  reason: collision with root package name */
    private final DataSource.Factory f47033t;

    /* renamed from: u  reason: collision with root package name */
    private final Format f47034u;

    /* renamed from: v  reason: collision with root package name */
    private final long f47035v;

    /* renamed from: w  reason: collision with root package name */
    private final com.google.android.exoplayer2.upstream.i f47036w;

    /* renamed from: x  reason: collision with root package name */
    private final boolean f47037x;

    /* renamed from: y  reason: collision with root package name */
    private final Timeline f47038y;

    /* renamed from: z  reason: collision with root package name */
    private final MediaItem f47039z;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        private final DataSource.Factory f47040a;

        /* renamed from: b  reason: collision with root package name */
        private com.google.android.exoplayer2.upstream.i f47041b = new com.google.android.exoplayer2.upstream.g();

        /* renamed from: c  reason: collision with root package name */
        private boolean f47042c = true;

        /* renamed from: d  reason: collision with root package name */
        private Object f47043d;

        /* renamed from: e  reason: collision with root package name */
        private String f47044e;

        public b(DataSource.Factory factory) {
            this.f47040a = (DataSource.Factory) oe.a.e(factory);
        }

        public r0 a(MediaItem.k kVar, long j10) {
            return new r0(this.f47044e, kVar, this.f47040a, j10, this.f47041b, this.f47042c, this.f47043d);
        }
    }

    @Override // rd.a
    protected void B(me.c0 c0Var) {
        this.A = c0Var;
        C(this.f47038y);
    }

    @Override // rd.r
    public void a(p pVar) {
        ((q0) pVar).q();
    }

    @Override // rd.r
    public MediaItem d() {
        return this.f47039z;
    }

    @Override // rd.r
    public p f(r.b bVar, me.b bVar2, long j10) {
        return new q0(this.f47032s, this.f47033t, this.A, this.f47034u, this.f47035v, this.f47036w, w(bVar), this.f47037x);
    }

    private r0(String str, MediaItem.k kVar, DataSource.Factory factory, long j10, com.google.android.exoplayer2.upstream.i iVar, boolean z10, Object obj) {
        this.f47033t = factory;
        this.f47035v = j10;
        this.f47036w = iVar;
        this.f47037x = z10;
        MediaItem a10 = new MediaItem.c().e(Uri.EMPTY).b(kVar.f12461d.toString()).c(qi.s.u(kVar)).d(obj).a();
        this.f47039z = a10;
        Format.b W = new Format.b().g0((String) pi.h.a(kVar.f12462e, "text/x-unknown")).X(kVar.f12463i).i0(kVar.f12464o).e0(kVar.f12465p).W(kVar.f12466q);
        String str2 = kVar.f12467r;
        this.f47034u = W.U(str2 != null ? str2 : str).G();
        this.f47032s = new a.b().i(kVar.f12461d).b(1).a();
        this.f47038y = new p0(j10, true, false, false, null, a10);
    }

    @Override // rd.a
    protected void D() {
    }

    @Override // rd.r
    public void q() {
    }
}
