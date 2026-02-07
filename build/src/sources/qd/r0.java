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
    private final com.google.android.exoplayer2.upstream.a f46891s;

    /* renamed from: t  reason: collision with root package name */
    private final DataSource.Factory f46892t;

    /* renamed from: u  reason: collision with root package name */
    private final Format f46893u;

    /* renamed from: v  reason: collision with root package name */
    private final long f46894v;

    /* renamed from: w  reason: collision with root package name */
    private final com.google.android.exoplayer2.upstream.i f46895w;

    /* renamed from: x  reason: collision with root package name */
    private final boolean f46896x;

    /* renamed from: y  reason: collision with root package name */
    private final Timeline f46897y;

    /* renamed from: z  reason: collision with root package name */
    private final MediaItem f46898z;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        private final DataSource.Factory f46899a;

        /* renamed from: b  reason: collision with root package name */
        private com.google.android.exoplayer2.upstream.i f46900b = new com.google.android.exoplayer2.upstream.g();

        /* renamed from: c  reason: collision with root package name */
        private boolean f46901c = true;

        /* renamed from: d  reason: collision with root package name */
        private Object f46902d;

        /* renamed from: e  reason: collision with root package name */
        private String f46903e;

        public b(DataSource.Factory factory) {
            this.f46899a = (DataSource.Factory) ne.a.e(factory);
        }

        public r0 a(MediaItem.k kVar, long j10) {
            return new r0(this.f46903e, kVar, this.f46899a, j10, this.f46900b, this.f46901c, this.f46902d);
        }
    }

    @Override // qd.a
    protected void B(le.c0 c0Var) {
        this.A = c0Var;
        C(this.f46897y);
    }

    @Override // qd.r
    public void c(p pVar) {
        ((q0) pVar).s();
    }

    @Override // qd.r
    public MediaItem f() {
        return this.f46898z;
    }

    @Override // qd.r
    public p h(r.b bVar, le.b bVar2, long j10) {
        return new q0(this.f46891s, this.f46892t, this.A, this.f46893u, this.f46894v, this.f46895w, w(bVar), this.f46896x);
    }

    private r0(String str, MediaItem.k kVar, DataSource.Factory factory, long j10, com.google.android.exoplayer2.upstream.i iVar, boolean z10, Object obj) {
        this.f46892t = factory;
        this.f46894v = j10;
        this.f46895w = iVar;
        this.f46896x = z10;
        MediaItem a10 = new MediaItem.c().e(Uri.EMPTY).b(kVar.f11743d.toString()).c(ni.s.u(kVar)).d(obj).a();
        this.f46898z = a10;
        Format.b W = new Format.b().g0((String) mi.h.a(kVar.f11744e, "text/x-unknown")).X(kVar.f11745i).i0(kVar.f11746o).e0(kVar.f11747p).W(kVar.f11748q);
        String str2 = kVar.f11749r;
        this.f46893u = W.U(str2 != null ? str2 : str).G();
        this.f46891s = new a.b().i(kVar.f11743d).b(1).a();
        this.f46897y = new p0(j10, true, false, false, null, a10);
    }

    @Override // qd.a
    protected void D() {
    }

    @Override // qd.r
    public void o() {
    }
}
