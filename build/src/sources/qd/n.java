package qd;

import qd.p;
import qd.r;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class n implements p, p.a {

    /* renamed from: d  reason: collision with root package name */
    public final r.b f47257d;

    /* renamed from: e  reason: collision with root package name */
    private final long f47258e;

    /* renamed from: i  reason: collision with root package name */
    private final le.b f47259i;

    /* renamed from: o  reason: collision with root package name */
    private r f47260o;

    /* renamed from: p  reason: collision with root package name */
    private p f47261p;

    /* renamed from: q  reason: collision with root package name */
    private p.a f47262q;

    /* renamed from: r  reason: collision with root package name */
    private long f47263r = -9223372036854775807L;

    public n(r.b bVar, le.b bVar2, long j10) {
        this.f47257d = bVar;
        this.f47259i = bVar2;
        this.f47258e = j10;
    }

    private long s(long j10) {
        long j11 = this.f47263r;
        if (j11 != -9223372036854775807L) {
            return j11;
        }
        return j10;
    }

    public void a(r.b bVar) {
        long s10 = s(this.f47258e);
        p h10 = ((r) ne.a.e(this.f47260o)).h(bVar, this.f47259i, s10);
        this.f47261p = h10;
        if (this.f47262q != null) {
            h10.k(this, s10);
        }
    }

    @Override // qd.p, qd.n0
    public long b() {
        return ((p) ne.w0.j(this.f47261p)).b();
    }

    @Override // qd.p, qd.n0
    public boolean d() {
        p pVar = this.f47261p;
        if (pVar != null && pVar.d()) {
            return true;
        }
        return false;
    }

    @Override // qd.p
    public long e(long j10, lc.t0 t0Var) {
        return ((p) ne.w0.j(this.f47261p)).e(j10, t0Var);
    }

    @Override // qd.p, qd.n0
    public boolean f(long j10) {
        p pVar = this.f47261p;
        if (pVar != null && pVar.f(j10)) {
            return true;
        }
        return false;
    }

    @Override // qd.p, qd.n0
    public long g() {
        return ((p) ne.w0.j(this.f47261p)).g();
    }

    @Override // qd.p, qd.n0
    public void h(long j10) {
        ((p) ne.w0.j(this.f47261p)).h(j10);
    }

    @Override // qd.p.a
    public void j(p pVar) {
        ((p.a) ne.w0.j(this.f47262q)).j(this);
    }

    @Override // qd.p
    public void k(p.a aVar, long j10) {
        this.f47262q = aVar;
        p pVar = this.f47261p;
        if (pVar != null) {
            pVar.k(this, s(this.f47258e));
        }
    }

    @Override // qd.p
    public long l(long j10) {
        return ((p) ne.w0.j(this.f47261p)).l(j10);
    }

    @Override // qd.p
    public long m() {
        return ((p) ne.w0.j(this.f47261p)).m();
    }

    @Override // qd.p
    public long o(com.google.android.exoplayer2.trackselection.g[] gVarArr, boolean[] zArr, m0[] m0VarArr, boolean[] zArr2, long j10) {
        long j11;
        long j12 = this.f47263r;
        if (j12 != -9223372036854775807L && j10 == this.f47258e) {
            this.f47263r = -9223372036854775807L;
            j11 = j12;
        } else {
            j11 = j10;
        }
        return ((p) ne.w0.j(this.f47261p)).o(gVarArr, zArr, m0VarArr, zArr2, j11);
    }

    public long p() {
        return this.f47263r;
    }

    public long q() {
        return this.f47258e;
    }

    @Override // qd.p
    public void r() {
        p pVar = this.f47261p;
        if (pVar != null) {
            pVar.r();
            return;
        }
        r rVar = this.f47260o;
        if (rVar != null) {
            rVar.o();
        }
    }

    @Override // qd.p
    public w0 t() {
        return ((p) ne.w0.j(this.f47261p)).t();
    }

    @Override // qd.p
    public void u(long j10, boolean z10) {
        ((p) ne.w0.j(this.f47261p)).u(j10, z10);
    }

    @Override // qd.n0.a
    /* renamed from: v */
    public void i(p pVar) {
        ((p.a) ne.w0.j(this.f47262q)).i(this);
    }

    public void w(long j10) {
        this.f47263r = j10;
    }

    public void x() {
        if (this.f47261p != null) {
            ((r) ne.a.e(this.f47260o)).c(this.f47261p);
        }
    }

    public void y(r rVar) {
        boolean z10;
        if (this.f47260o == null) {
            z10 = true;
        } else {
            z10 = false;
        }
        ne.a.g(z10);
        this.f47260o = rVar;
    }
}
