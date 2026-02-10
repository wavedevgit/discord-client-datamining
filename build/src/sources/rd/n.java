package rd;

import rd.p;
import rd.r;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class n implements p, p.a {

    /* renamed from: d  reason: collision with root package name */
    public final r.b f47956d;

    /* renamed from: e  reason: collision with root package name */
    private final long f47957e;

    /* renamed from: i  reason: collision with root package name */
    private final me.b f47958i;

    /* renamed from: o  reason: collision with root package name */
    private r f47959o;

    /* renamed from: p  reason: collision with root package name */
    private p f47960p;

    /* renamed from: q  reason: collision with root package name */
    private p.a f47961q;

    /* renamed from: r  reason: collision with root package name */
    private long f47962r = -9223372036854775807L;

    public n(r.b bVar, me.b bVar2, long j10) {
        this.f47956d = bVar;
        this.f47958i = bVar2;
        this.f47957e = j10;
    }

    private long q(long j10) {
        long j11 = this.f47962r;
        if (j11 != -9223372036854775807L) {
            return j11;
        }
        return j10;
    }

    public void a(r.b bVar) {
        long q10 = q(this.f47957e);
        p f10 = ((r) oe.a.e(this.f47959o)).f(bVar, this.f47958i, q10);
        this.f47960p = f10;
        if (this.f47961q != null) {
            f10.u(this, q10);
        }
    }

    @Override // rd.p, rd.n0
    public long b() {
        return ((p) oe.w0.j(this.f47960p)).b();
    }

    @Override // rd.p, rd.n0
    public boolean d() {
        p pVar = this.f47960p;
        if (pVar != null && pVar.d()) {
            return true;
        }
        return false;
    }

    @Override // rd.p
    public long e(long j10, mc.t0 t0Var) {
        return ((p) oe.w0.j(this.f47960p)).e(j10, t0Var);
    }

    @Override // rd.p, rd.n0
    public boolean f(long j10) {
        p pVar = this.f47960p;
        if (pVar != null && pVar.f(j10)) {
            return true;
        }
        return false;
    }

    @Override // rd.p, rd.n0
    public long g() {
        return ((p) oe.w0.j(this.f47960p)).g();
    }

    @Override // rd.p, rd.n0
    public void h(long j10) {
        ((p) oe.w0.j(this.f47960p)).h(j10);
    }

    @Override // rd.p.a
    public void j(p pVar) {
        ((p.a) oe.w0.j(this.f47961q)).j(this);
    }

    @Override // rd.p
    public long l(long j10) {
        return ((p) oe.w0.j(this.f47960p)).l(j10);
    }

    @Override // rd.p
    public long m() {
        return ((p) oe.w0.j(this.f47960p)).m();
    }

    public long n() {
        return this.f47962r;
    }

    public long o() {
        return this.f47957e;
    }

    @Override // rd.p
    public void p() {
        p pVar = this.f47960p;
        if (pVar != null) {
            pVar.p();
            return;
        }
        r rVar = this.f47959o;
        if (rVar != null) {
            rVar.q();
        }
    }

    @Override // rd.p
    public long r(com.google.android.exoplayer2.trackselection.g[] gVarArr, boolean[] zArr, m0[] m0VarArr, boolean[] zArr2, long j10) {
        long j11;
        long j12 = this.f47962r;
        if (j12 != -9223372036854775807L && j10 == this.f47957e) {
            this.f47962r = -9223372036854775807L;
            j11 = j12;
        } else {
            j11 = j10;
        }
        return ((p) oe.w0.j(this.f47960p)).r(gVarArr, zArr, m0VarArr, zArr2, j11);
    }

    @Override // rd.p
    public w0 s() {
        return ((p) oe.w0.j(this.f47960p)).s();
    }

    @Override // rd.p
    public void t(long j10, boolean z10) {
        ((p) oe.w0.j(this.f47960p)).t(j10, z10);
    }

    @Override // rd.p
    public void u(p.a aVar, long j10) {
        this.f47961q = aVar;
        p pVar = this.f47960p;
        if (pVar != null) {
            pVar.u(this, q(this.f47957e));
        }
    }

    @Override // rd.n0.a
    /* renamed from: v */
    public void i(p pVar) {
        ((p.a) oe.w0.j(this.f47961q)).i(this);
    }

    public void w(long j10) {
        this.f47962r = j10;
    }

    public void x() {
        if (this.f47960p != null) {
            ((r) oe.a.e(this.f47959o)).a(this.f47960p);
        }
    }

    public void y(r rVar) {
        boolean z10;
        if (this.f47959o == null) {
            z10 = true;
        } else {
            z10 = false;
        }
        oe.a.g(z10);
        this.f47959o = rVar;
    }
}
