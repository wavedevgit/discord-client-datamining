package rd;

import rd.p;
import rd.r;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class n implements p, p.a {

    /* renamed from: d  reason: collision with root package name */
    public final r.b f46411d;

    /* renamed from: e  reason: collision with root package name */
    private final long f46412e;

    /* renamed from: i  reason: collision with root package name */
    private final me.b f46413i;

    /* renamed from: o  reason: collision with root package name */
    private r f46414o;

    /* renamed from: p  reason: collision with root package name */
    private p f46415p;

    /* renamed from: q  reason: collision with root package name */
    private p.a f46416q;

    /* renamed from: r  reason: collision with root package name */
    private long f46417r = -9223372036854775807L;

    public n(r.b bVar, me.b bVar2, long j10) {
        this.f46411d = bVar;
        this.f46413i = bVar2;
        this.f46412e = j10;
    }

    private long q(long j10) {
        long j11 = this.f46417r;
        if (j11 != -9223372036854775807L) {
            return j11;
        }
        return j10;
    }

    public void a(r.b bVar) {
        long q10 = q(this.f46412e);
        p f10 = ((r) oe.a.e(this.f46414o)).f(bVar, this.f46413i, q10);
        this.f46415p = f10;
        if (this.f46416q != null) {
            f10.u(this, q10);
        }
    }

    @Override // rd.p, rd.n0
    public long b() {
        return ((p) oe.w0.j(this.f46415p)).b();
    }

    @Override // rd.p, rd.n0
    public boolean d() {
        p pVar = this.f46415p;
        if (pVar != null && pVar.d()) {
            return true;
        }
        return false;
    }

    @Override // rd.p
    public long e(long j10, mc.t0 t0Var) {
        return ((p) oe.w0.j(this.f46415p)).e(j10, t0Var);
    }

    @Override // rd.p, rd.n0
    public boolean f(long j10) {
        p pVar = this.f46415p;
        if (pVar != null && pVar.f(j10)) {
            return true;
        }
        return false;
    }

    @Override // rd.p, rd.n0
    public long g() {
        return ((p) oe.w0.j(this.f46415p)).g();
    }

    @Override // rd.p, rd.n0
    public void h(long j10) {
        ((p) oe.w0.j(this.f46415p)).h(j10);
    }

    @Override // rd.p.a
    public void j(p pVar) {
        ((p.a) oe.w0.j(this.f46416q)).j(this);
    }

    @Override // rd.p
    public long l(long j10) {
        return ((p) oe.w0.j(this.f46415p)).l(j10);
    }

    @Override // rd.p
    public long m() {
        return ((p) oe.w0.j(this.f46415p)).m();
    }

    public long n() {
        return this.f46417r;
    }

    public long o() {
        return this.f46412e;
    }

    @Override // rd.p
    public void p() {
        p pVar = this.f46415p;
        if (pVar != null) {
            pVar.p();
            return;
        }
        r rVar = this.f46414o;
        if (rVar != null) {
            rVar.q();
        }
    }

    @Override // rd.p
    public long r(com.google.android.exoplayer2.trackselection.g[] gVarArr, boolean[] zArr, m0[] m0VarArr, boolean[] zArr2, long j10) {
        long j11;
        long j12 = this.f46417r;
        if (j12 != -9223372036854775807L && j10 == this.f46412e) {
            this.f46417r = -9223372036854775807L;
            j11 = j12;
        } else {
            j11 = j10;
        }
        return ((p) oe.w0.j(this.f46415p)).r(gVarArr, zArr, m0VarArr, zArr2, j11);
    }

    @Override // rd.p
    public w0 s() {
        return ((p) oe.w0.j(this.f46415p)).s();
    }

    @Override // rd.p
    public void t(long j10, boolean z10) {
        ((p) oe.w0.j(this.f46415p)).t(j10, z10);
    }

    @Override // rd.p
    public void u(p.a aVar, long j10) {
        this.f46416q = aVar;
        p pVar = this.f46415p;
        if (pVar != null) {
            pVar.u(this, q(this.f46412e));
        }
    }

    @Override // rd.n0.a
    /* renamed from: v */
    public void i(p pVar) {
        ((p.a) oe.w0.j(this.f46416q)).i(this);
    }

    public void w(long j10) {
        this.f46417r = j10;
    }

    public void x() {
        if (this.f46415p != null) {
            ((r) oe.a.e(this.f46414o)).a(this.f46415p);
        }
    }

    public void y(r rVar) {
        boolean z10;
        if (this.f46414o == null) {
            z10 = true;
        } else {
            z10 = false;
        }
        oe.a.g(z10);
        this.f46414o = rVar;
    }
}
