package net.time4j;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class c1 implements bu.o, iu.g {

    /* renamed from: d  reason: collision with root package name */
    private final a0 f37280d;

    /* renamed from: e  reason: collision with root package name */
    private final net.time4j.tz.l f37281e;

    /* renamed from: i  reason: collision with root package name */
    private final transient i0 f37282i;

    private c1(a0 a0Var, net.time4j.tz.l lVar) {
        this.f37281e = lVar;
        net.time4j.tz.p B = lVar.B(a0Var);
        if (a0Var.j0() && (B.l() != 0 || B.k() % 60 != 0)) {
            throw new IllegalArgumentException("Leap second can only be represented  with timezone-offset in full minutes: " + B);
        }
        this.f37280d = a0Var;
        this.f37282i = i0.U(a0Var, B);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static c1 d(a0 a0Var, net.time4j.tz.l lVar) {
        return new c1(a0Var, lVar);
    }

    @Override // zt.f
    public int a() {
        return this.f37280d.a();
    }

    public net.time4j.tz.p b() {
        return this.f37281e.B(this.f37280d);
    }

    public boolean c() {
        return this.f37280d.j0();
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof c1) {
            c1 c1Var = (c1) obj;
            if (this.f37280d.equals(c1Var.f37280d) && this.f37281e.equals(c1Var.f37281e)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return this.f37280d.hashCode() ^ this.f37281e.hashCode();
    }

    @Override // bu.o
    public Object k(bu.p pVar) {
        if (this.f37280d.j0() && pVar == g0.J) {
            return pVar.getType().cast(60);
        }
        if (this.f37282i.n(pVar)) {
            return this.f37282i.k(pVar);
        }
        return this.f37280d.k(pVar);
    }

    @Override // bu.o
    public boolean l() {
        return true;
    }

    @Override // bu.o
    public int m(bu.p pVar) {
        if (this.f37280d.j0() && pVar == g0.J) {
            return 60;
        }
        int m10 = this.f37282i.m(pVar);
        if (m10 == Integer.MIN_VALUE) {
            return this.f37280d.m(pVar);
        }
        return m10;
    }

    @Override // bu.o
    public boolean n(bu.p pVar) {
        if (!this.f37282i.n(pVar) && !this.f37280d.n(pVar)) {
            return false;
        }
        return true;
    }

    @Override // zt.f
    public long o() {
        return this.f37280d.o();
    }

    @Override // bu.o
    public net.time4j.tz.k r() {
        return this.f37281e.z();
    }

    @Override // iu.g
    public long s(iu.f fVar) {
        return this.f37280d.s(fVar);
    }

    @Override // bu.o
    public Object t(bu.p pVar) {
        if (this.f37282i.n(pVar)) {
            return this.f37282i.t(pVar);
        }
        return this.f37280d.t(pVar);
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder(40);
        sb2.append(this.f37282i.V());
        sb2.append('T');
        int h10 = this.f37282i.h();
        if (h10 < 10) {
            sb2.append('0');
        }
        sb2.append(h10);
        sb2.append(':');
        int e10 = this.f37282i.e();
        if (e10 < 10) {
            sb2.append('0');
        }
        sb2.append(e10);
        sb2.append(':');
        if (c()) {
            sb2.append("60");
        } else {
            int d10 = this.f37282i.d();
            if (d10 < 10) {
                sb2.append('0');
            }
            sb2.append(d10);
        }
        int a10 = this.f37282i.a();
        if (a10 != 0) {
            g0.M0(sb2, a10);
        }
        sb2.append(b());
        net.time4j.tz.k r10 = r();
        if (!(r10 instanceof net.time4j.tz.p)) {
            sb2.append('[');
            sb2.append(r10.a());
            sb2.append(']');
        }
        return sb2.toString();
    }

    @Override // iu.g
    public int u(iu.f fVar) {
        return this.f37280d.u(fVar);
    }

    @Override // bu.o
    public Object v(bu.p pVar) {
        Object v10;
        if (this.f37282i.n(pVar)) {
            v10 = this.f37282i.v(pVar);
        } else {
            v10 = this.f37280d.v(pVar);
        }
        if (pVar == g0.J && this.f37282i.f() >= 1972) {
            i0 i0Var = (i0) this.f37282i.E(pVar, v10);
            if (!this.f37281e.K(i0Var, i0Var) && i0Var.Y(this.f37281e).n0(1L, o0.SECONDS).j0()) {
                return pVar.getType().cast(60);
            }
        }
        return v10;
    }
}
