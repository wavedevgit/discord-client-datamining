package qd;

import qd.p;
import qd.r;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class n implements p, p.a {

    /* renamed from: d  reason: collision with root package name */
    public final r.b f46790d;

    /* renamed from: e  reason: collision with root package name */
    private final long f46791e;

    /* renamed from: i  reason: collision with root package name */
    private final le.b f46792i;

    /* renamed from: o  reason: collision with root package name */
    private r f46793o;

    /* renamed from: p  reason: collision with root package name */
    private p f46794p;

    /* renamed from: q  reason: collision with root package name */
    private p.a f46795q;

    /* renamed from: r  reason: collision with root package name */
    private long f46796r = -9223372036854775807L;

    public n(r.b bVar, le.b bVar2, long j10) {
        this.f46790d = bVar;
        this.f46792i = bVar2;
        this.f46791e = j10;
    }

    private long s(long j10) {
        long j11 = this.f46796r;
        if (j11 != -9223372036854775807L) {
            return j11;
        }
        return j10;
    }

    public void a(r.b bVar) {
        long s10 = s(this.f46791e);
        p h10 = ((r) ne.a.e(this.f46793o)).h(bVar, this.f46792i, s10);
        this.f46794p = h10;
        if (this.f46795q != null) {
            h10.k(this, s10);
        }
    }

    @Override // qd.p, qd.n0
    public long b() {
        return ((p) ne.w0.j(this.f46794p)).b();
    }

    @Override // qd.p, qd.n0
    public boolean d() {
        p pVar = this.f46794p;
        if (pVar != null && pVar.d()) {
            return true;
        }
        return false;
    }

    @Override // qd.p
    public long e(long j10, lc.t0 t0Var) {
        return ((p) ne.w0.j(this.f46794p)).e(j10, t0Var);
    }

    @Override // qd.p, qd.n0
    public boolean f(long j10) {
        p pVar = this.f46794p;
        if (pVar != null && pVar.f(j10)) {
            return true;
        }
        return false;
    }

    @Override // qd.p, qd.n0
    public long g() {
        return ((p) ne.w0.j(this.f46794p)).g();
    }

    @Override // qd.p, qd.n0
    public void h(long j10) {
        ((p) ne.w0.j(this.f46794p)).h(j10);
    }

    @Override // qd.p.a
    public void j(p pVar) {
        ((p.a) ne.w0.j(this.f46795q)).j(this);
    }

    @Override // qd.p
    public void k(p.a aVar, long j10) {
        this.f46795q = aVar;
        p pVar = this.f46794p;
        if (pVar != null) {
            pVar.k(this, s(this.f46791e));
        }
    }

    @Override // qd.p
    public long l(long j10) {
        return ((p) ne.w0.j(this.f46794p)).l(j10);
    }

    @Override // qd.p
    public long m() {
        return ((p) ne.w0.j(this.f46794p)).m();
    }

    @Override // qd.p
    public long o(com.google.android.exoplayer2.trackselection.g[] gVarArr, boolean[] zArr, m0[] m0VarArr, boolean[] zArr2, long j10) {
        long j11;
        long j12 = this.f46796r;
        if (j12 != -9223372036854775807L && j10 == this.f46791e) {
            this.f46796r = -9223372036854775807L;
            j11 = j12;
        } else {
            j11 = j10;
        }
        return ((p) ne.w0.j(this.f46794p)).o(gVarArr, zArr, m0VarArr, zArr2, j11);
    }

    public long p() {
        return this.f46796r;
    }

    public long q() {
        return this.f46791e;
    }

    @Override // qd.p
    public void r() {
        p pVar = this.f46794p;
        if (pVar != null) {
            pVar.r();
            return;
        }
        r rVar = this.f46793o;
        if (rVar != null) {
            rVar.o();
        }
    }

    @Override // qd.p
    public w0 t() {
        return ((p) ne.w0.j(this.f46794p)).t();
    }

    @Override // qd.p
    public void u(long j10, boolean z10) {
        ((p) ne.w0.j(this.f46794p)).u(j10, z10);
    }

    @Override // qd.n0.a
    /* renamed from: v */
    public void i(p pVar) {
        ((p.a) ne.w0.j(this.f46795q)).i(this);
    }

    public void w(long j10) {
        this.f46796r = j10;
    }

    public void x() {
        if (this.f46794p != null) {
            ((r) ne.a.e(this.f46793o)).c(this.f46794p);
        }
    }

    public void y(r rVar) {
        boolean z10;
        if (this.f46793o == null) {
            z10 = true;
        } else {
            z10 = false;
        }
        ne.a.g(z10);
        this.f46793o = rVar;
    }
}
