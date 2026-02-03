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
    private final com.google.android.exoplayer2.upstream.a f47581s;

    /* renamed from: t  reason: collision with root package name */
    private final DataSource.Factory f47582t;

    /* renamed from: u  reason: collision with root package name */
    private final Format f47583u;

    /* renamed from: v  reason: collision with root package name */
    private final long f47584v;

    /* renamed from: w  reason: collision with root package name */
    private final com.google.android.exoplayer2.upstream.h f47585w;

    /* renamed from: x  reason: collision with root package name */
    private final boolean f47586x;

    /* renamed from: y  reason: collision with root package name */
    private final Timeline f47587y;

    /* renamed from: z  reason: collision with root package name */
    private final MediaItem f47588z;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        private final DataSource.Factory f47589a;

        /* renamed from: b  reason: collision with root package name */
        private com.google.android.exoplayer2.upstream.h f47590b = new com.google.android.exoplayer2.upstream.f();

        /* renamed from: c  reason: collision with root package name */
        private boolean f47591c = true;

        /* renamed from: d  reason: collision with root package name */
        private Object f47592d;

        /* renamed from: e  reason: collision with root package name */
        private String f47593e;

        public b(DataSource.Factory factory) {
            this.f47589a = (DataSource.Factory) ne.a.e(factory);
        }

        public r0 a(MediaItem.k kVar, long j10) {
            return new r0(this.f47593e, kVar, this.f47589a, j10, this.f47590b, this.f47591c, this.f47592d);
        }
    }

    @Override // qd.a
    protected void B(le.c0 c0Var) {
        this.A = c0Var;
        C(this.f47587y);
    }

    @Override // qd.r
    public void c(p pVar) {
        ((q0) pVar).s();
    }

    @Override // qd.r
    public MediaItem f() {
        return this.f47588z;
    }

    @Override // qd.r
    public p h(r.b bVar, le.b bVar2, long j10) {
        return new q0(this.f47581s, this.f47582t, this.A, this.f47583u, this.f47584v, this.f47585w, w(bVar), this.f47586x);
    }

    private r0(String str, MediaItem.k kVar, DataSource.Factory factory, long j10, com.google.android.exoplayer2.upstream.h hVar, boolean z10, Object obj) {
        this.f47582t = factory;
        this.f47584v = j10;
        this.f47585w = hVar;
        this.f47586x = z10;
        MediaItem a10 = new MediaItem.c().e(Uri.EMPTY).b(kVar.f12491d.toString()).c(ji.s.s(kVar)).d(obj).a();
        this.f47588z = a10;
        Format.b W = new Format.b().g0((String) ii.h.a(kVar.f12492e, "text/x-unknown")).X(kVar.f12493i).i0(kVar.f12494o).e0(kVar.f12495p).W(kVar.f12496q);
        String str2 = kVar.f12497r;
        this.f47583u = W.U(str2 != null ? str2 : str).G();
        this.f47581s = new a.b().i(kVar.f12491d).b(1).a();
        this.f47587y = new p0(j10, true, false, false, null, a10);
    }

    @Override // qd.a
    protected void D() {
    }

    @Override // qd.r
    public void o() {
    }
}
