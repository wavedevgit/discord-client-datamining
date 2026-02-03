package net.time4j;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class c1 implements mt.o, tt.g {

    /* renamed from: d  reason: collision with root package name */
    private final a0 f40320d;

    /* renamed from: e  reason: collision with root package name */
    private final net.time4j.tz.l f40321e;

    /* renamed from: i  reason: collision with root package name */
    private final transient i0 f40322i;

    private c1(a0 a0Var, net.time4j.tz.l lVar) {
        this.f40321e = lVar;
        net.time4j.tz.p B = lVar.B(a0Var);
        if (a0Var.j0() && (B.k() != 0 || B.j() % 60 != 0)) {
            throw new IllegalArgumentException("Leap second can only be represented  with timezone-offset in full minutes: " + B);
        }
        this.f40320d = a0Var;
        this.f40322i = i0.U(a0Var, B);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static c1 d(a0 a0Var, net.time4j.tz.l lVar) {
        return new c1(a0Var, lVar);
    }

    @Override // kt.f
    public int a() {
        return this.f40320d.a();
    }

    public net.time4j.tz.p b() {
        return this.f40321e.B(this.f40320d);
    }

    public boolean c() {
        return this.f40320d.j0();
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof c1) {
            c1 c1Var = (c1) obj;
            if (this.f40320d.equals(c1Var.f40320d) && this.f40321e.equals(c1Var.f40321e)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return this.f40320d.hashCode() ^ this.f40321e.hashCode();
    }

    @Override // mt.o
    public int j(mt.p pVar) {
        if (this.f40320d.j0() && pVar == g0.J) {
            return 60;
        }
        int j10 = this.f40322i.j(pVar);
        if (j10 == Integer.MIN_VALUE) {
            return this.f40320d.j(pVar);
        }
        return j10;
    }

    @Override // tt.g
    public int k(tt.f fVar) {
        return this.f40320d.k(fVar);
    }

    @Override // mt.o
    public boolean l() {
        return true;
    }

    @Override // mt.o
    public Object o(mt.p pVar) {
        if (this.f40320d.j0() && pVar == g0.J) {
            return pVar.getType().cast(60);
        }
        if (this.f40322i.q(pVar)) {
            return this.f40322i.o(pVar);
        }
        return this.f40320d.o(pVar);
    }

    @Override // kt.f
    public long p() {
        return this.f40320d.p();
    }

    @Override // mt.o
    public boolean q(mt.p pVar) {
        if (!this.f40322i.q(pVar) && !this.f40320d.q(pVar)) {
            return false;
        }
        return true;
    }

    @Override // tt.g
    public long r(tt.f fVar) {
        return this.f40320d.r(fVar);
    }

    @Override // mt.o
    public net.time4j.tz.k t() {
        return this.f40321e.z();
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder(40);
        sb2.append(this.f40322i.V());
        sb2.append('T');
        int h10 = this.f40322i.h();
        if (h10 < 10) {
            sb2.append('0');
        }
        sb2.append(h10);
        sb2.append(':');
        int e10 = this.f40322i.e();
        if (e10 < 10) {
            sb2.append('0');
        }
        sb2.append(e10);
        sb2.append(':');
        if (c()) {
            sb2.append("60");
        } else {
            int d10 = this.f40322i.d();
            if (d10 < 10) {
                sb2.append('0');
            }
            sb2.append(d10);
        }
        int a10 = this.f40322i.a();
        if (a10 != 0) {
            g0.M0(sb2, a10);
        }
        sb2.append(b());
        net.time4j.tz.k t10 = t();
        if (!(t10 instanceof net.time4j.tz.p)) {
            sb2.append('[');
            sb2.append(t10.a());
            sb2.append(']');
        }
        return sb2.toString();
    }

    @Override // mt.o
    public Object u(mt.p pVar) {
        Object u10;
        if (this.f40322i.q(pVar)) {
            u10 = this.f40322i.u(pVar);
        } else {
            u10 = this.f40320d.u(pVar);
        }
        if (pVar == g0.J && this.f40322i.f() >= 1972) {
            i0 i0Var = (i0) this.f40322i.E(pVar, u10);
            if (!this.f40321e.K(i0Var, i0Var) && i0Var.Y(this.f40321e).n0(1L, o0.SECONDS).j0()) {
                return pVar.getType().cast(60);
            }
        }
        return u10;
    }

    @Override // mt.o
    public Object v(mt.p pVar) {
        if (this.f40322i.q(pVar)) {
            return this.f40322i.v(pVar);
        }
        return this.f40320d.v(pVar);
    }
}
