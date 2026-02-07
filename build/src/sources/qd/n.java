package qd;

import qd.p;
import qd.r;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class n implements p, p.a {

    /* renamed from: d  reason: collision with root package name */
    public final r.b f46838d;

    /* renamed from: e  reason: collision with root package name */
    private final long f46839e;

    /* renamed from: i  reason: collision with root package name */
    private final le.b f46840i;

    /* renamed from: o  reason: collision with root package name */
    private r f46841o;

    /* renamed from: p  reason: collision with root package name */
    private p f46842p;

    /* renamed from: q  reason: collision with root package name */
    private p.a f46843q;

    /* renamed from: r  reason: collision with root package name */
    private long f46844r = -9223372036854775807L;

    public n(r.b bVar, le.b bVar2, long j10) {
        this.f46838d = bVar;
        this.f46840i = bVar2;
        this.f46839e = j10;
    }

    private long s(long j10) {
        long j11 = this.f46844r;
        if (j11 != -9223372036854775807L) {
            return j11;
        }
        return j10;
    }

    public void a(r.b bVar) {
        long s10 = s(this.f46839e);
        p h10 = ((r) ne.a.e(this.f46841o)).h(bVar, this.f46840i, s10);
        this.f46842p = h10;
        if (this.f46843q != null) {
            h10.k(this, s10);
        }
    }

    @Override // qd.p, qd.n0
    public long b() {
        return ((p) ne.w0.j(this.f46842p)).b();
    }

    @Override // qd.p, qd.n0
    public boolean d() {
        p pVar = this.f46842p;
        if (pVar != null && pVar.d()) {
            return true;
        }
        return false;
    }

    @Override // qd.p
    public long e(long j10, lc.t0 t0Var) {
        return ((p) ne.w0.j(this.f46842p)).e(j10, t0Var);
    }

    @Override // qd.p, qd.n0
    public boolean f(long j10) {
        p pVar = this.f46842p;
        if (pVar != null && pVar.f(j10)) {
            return true;
        }
        return false;
    }

    @Override // qd.p, qd.n0
    public long g() {
        return ((p) ne.w0.j(this.f46842p)).g();
    }

    @Override // qd.p, qd.n0
    public void h(long j10) {
        ((p) ne.w0.j(this.f46842p)).h(j10);
    }

    @Override // qd.p.a
    public void j(p pVar) {
        ((p.a) ne.w0.j(this.f46843q)).j(this);
    }

    @Override // qd.p
    public void k(p.a aVar, long j10) {
        this.f46843q = aVar;
        p pVar = this.f46842p;
        if (pVar != null) {
            pVar.k(this, s(this.f46839e));
        }
    }

    @Override // qd.p
    public long l(long j10) {
        return ((p) ne.w0.j(this.f46842p)).l(j10);
    }

    @Override // qd.p
    public long m() {
        return ((p) ne.w0.j(this.f46842p)).m();
    }

    @Override // qd.p
    public long o(com.google.android.exoplayer2.trackselection.g[] gVarArr, boolean[] zArr, m0[] m0VarArr, boolean[] zArr2, long j10) {
        long j11;
        long j12 = this.f46844r;
        if (j12 != -9223372036854775807L && j10 == this.f46839e) {
            this.f46844r = -9223372036854775807L;
            j11 = j12;
        } else {
            j11 = j10;
        }
        return ((p) ne.w0.j(this.f46842p)).o(gVarArr, zArr, m0VarArr, zArr2, j11);
    }

    public long p() {
        return this.f46844r;
    }

    public long q() {
        return this.f46839e;
    }

    @Override // qd.p
    public void r() {
        p pVar = this.f46842p;
        if (pVar != null) {
            pVar.r();
            return;
        }
        r rVar = this.f46841o;
        if (rVar != null) {
            rVar.o();
        }
    }

    @Override // qd.p
    public w0 t() {
        return ((p) ne.w0.j(this.f46842p)).t();
    }

    @Override // qd.p
    public void u(long j10, boolean z10) {
        ((p) ne.w0.j(this.f46842p)).u(j10, z10);
    }

    @Override // qd.n0.a
    /* renamed from: v */
    public void i(p pVar) {
        ((p.a) ne.w0.j(this.f46843q)).i(this);
    }

    public void w(long j10) {
        this.f46844r = j10;
    }

    public void x() {
        if (this.f46842p != null) {
            ((r) ne.a.e(this.f46841o)).c(this.f46842p);
        }
    }

    public void y(r rVar) {
        boolean z10;
        if (this.f46841o == null) {
            z10 = true;
        } else {
            z10 = false;
        }
        ne.a.g(z10);
        this.f46841o = rVar;
    }
}
