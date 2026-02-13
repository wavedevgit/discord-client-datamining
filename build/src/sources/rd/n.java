package rd;

import rd.p;
import rd.r;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class n implements p, p.a {

    /* renamed from: d  reason: collision with root package name */
    public final r.b f46979d;

    /* renamed from: e  reason: collision with root package name */
    private final long f46980e;

    /* renamed from: i  reason: collision with root package name */
    private final me.b f46981i;

    /* renamed from: o  reason: collision with root package name */
    private r f46982o;

    /* renamed from: p  reason: collision with root package name */
    private p f46983p;

    /* renamed from: q  reason: collision with root package name */
    private p.a f46984q;

    /* renamed from: r  reason: collision with root package name */
    private long f46985r = -9223372036854775807L;

    public n(r.b bVar, me.b bVar2, long j10) {
        this.f46979d = bVar;
        this.f46981i = bVar2;
        this.f46980e = j10;
    }

    private long q(long j10) {
        long j11 = this.f46985r;
        if (j11 != -9223372036854775807L) {
            return j11;
        }
        return j10;
    }

    public void a(r.b bVar) {
        long q10 = q(this.f46980e);
        p f10 = ((r) oe.a.e(this.f46982o)).f(bVar, this.f46981i, q10);
        this.f46983p = f10;
        if (this.f46984q != null) {
            f10.u(this, q10);
        }
    }

    @Override // rd.p, rd.n0
    public long b() {
        return ((p) oe.w0.j(this.f46983p)).b();
    }

    @Override // rd.p, rd.n0
    public boolean d() {
        p pVar = this.f46983p;
        if (pVar != null && pVar.d()) {
            return true;
        }
        return false;
    }

    @Override // rd.p
    public long e(long j10, mc.t0 t0Var) {
        return ((p) oe.w0.j(this.f46983p)).e(j10, t0Var);
    }

    @Override // rd.p, rd.n0
    public boolean f(long j10) {
        p pVar = this.f46983p;
        if (pVar != null && pVar.f(j10)) {
            return true;
        }
        return false;
    }

    @Override // rd.p, rd.n0
    public long g() {
        return ((p) oe.w0.j(this.f46983p)).g();
    }

    @Override // rd.p, rd.n0
    public void h(long j10) {
        ((p) oe.w0.j(this.f46983p)).h(j10);
    }

    @Override // rd.p.a
    public void j(p pVar) {
        ((p.a) oe.w0.j(this.f46984q)).j(this);
    }

    @Override // rd.p
    public long l(long j10) {
        return ((p) oe.w0.j(this.f46983p)).l(j10);
    }

    @Override // rd.p
    public long m() {
        return ((p) oe.w0.j(this.f46983p)).m();
    }

    public long n() {
        return this.f46985r;
    }

    public long o() {
        return this.f46980e;
    }

    @Override // rd.p
    public void p() {
        p pVar = this.f46983p;
        if (pVar != null) {
            pVar.p();
            return;
        }
        r rVar = this.f46982o;
        if (rVar != null) {
            rVar.q();
        }
    }

    @Override // rd.p
    public long r(com.google.android.exoplayer2.trackselection.g[] gVarArr, boolean[] zArr, m0[] m0VarArr, boolean[] zArr2, long j10) {
        long j11;
        long j12 = this.f46985r;
        if (j12 != -9223372036854775807L && j10 == this.f46980e) {
            this.f46985r = -9223372036854775807L;
            j11 = j12;
        } else {
            j11 = j10;
        }
        return ((p) oe.w0.j(this.f46983p)).r(gVarArr, zArr, m0VarArr, zArr2, j11);
    }

    @Override // rd.p
    public w0 s() {
        return ((p) oe.w0.j(this.f46983p)).s();
    }

    @Override // rd.p
    public void t(long j10, boolean z10) {
        ((p) oe.w0.j(this.f46983p)).t(j10, z10);
    }

    @Override // rd.p
    public void u(p.a aVar, long j10) {
        this.f46984q = aVar;
        p pVar = this.f46983p;
        if (pVar != null) {
            pVar.u(this, q(this.f46980e));
        }
    }

    @Override // rd.n0.a
    /* renamed from: v */
    public void i(p pVar) {
        ((p.a) oe.w0.j(this.f46984q)).i(this);
    }

    public void w(long j10) {
        this.f46985r = j10;
    }

    public void x() {
        if (this.f46983p != null) {
            ((r) oe.a.e(this.f46982o)).a(this.f46983p);
        }
    }

    public void y(r rVar) {
        boolean z10;
        if (this.f46982o == null) {
            z10 = true;
        } else {
            z10 = false;
        }
        oe.a.g(z10);
        this.f46982o = rVar;
    }
}
