package net.time4j;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class c1 implements st.o, zt.g {

    /* renamed from: d  reason: collision with root package name */
    private final a0 f38275d;

    /* renamed from: e  reason: collision with root package name */
    private final net.time4j.tz.l f38276e;

    /* renamed from: i  reason: collision with root package name */
    private final transient i0 f38277i;

    private c1(a0 a0Var, net.time4j.tz.l lVar) {
        this.f38276e = lVar;
        net.time4j.tz.p B = lVar.B(a0Var);
        if (a0Var.j0() && (B.l() != 0 || B.k() % 60 != 0)) {
            throw new IllegalArgumentException("Leap second can only be represented  with timezone-offset in full minutes: " + B);
        }
        this.f38275d = a0Var;
        this.f38277i = i0.U(a0Var, B);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static c1 d(a0 a0Var, net.time4j.tz.l lVar) {
        return new c1(a0Var, lVar);
    }

    @Override // qt.f
    public int a() {
        return this.f38275d.a();
    }

    public net.time4j.tz.p b() {
        return this.f38276e.B(this.f38275d);
    }

    public boolean c() {
        return this.f38275d.j0();
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof c1) {
            c1 c1Var = (c1) obj;
            if (this.f38275d.equals(c1Var.f38275d) && this.f38276e.equals(c1Var.f38276e)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return this.f38275d.hashCode() ^ this.f38276e.hashCode();
    }

    @Override // st.o
    public boolean k() {
        return true;
    }

    @Override // zt.g
    public long l(zt.f fVar) {
        return this.f38275d.l(fVar);
    }

    @Override // st.o
    public Object m(st.p pVar) {
        if (this.f38277i.s(pVar)) {
            return this.f38277i.m(pVar);
        }
        return this.f38275d.m(pVar);
    }

    @Override // st.o
    public Object n(st.p pVar) {
        Object n10;
        if (this.f38277i.s(pVar)) {
            n10 = this.f38277i.n(pVar);
        } else {
            n10 = this.f38275d.n(pVar);
        }
        if (pVar == g0.J && this.f38277i.f() >= 1972) {
            i0 i0Var = (i0) this.f38277i.E(pVar, n10);
            if (!this.f38276e.K(i0Var, i0Var) && i0Var.Y(this.f38276e).n0(1L, o0.SECONDS).j0()) {
                return pVar.getType().cast(60);
            }
        }
        return n10;
    }

    @Override // qt.f
    public long o() {
        return this.f38275d.o();
    }

    @Override // zt.g
    public int q(zt.f fVar) {
        return this.f38275d.q(fVar);
    }

    @Override // st.o
    public boolean s(st.p pVar) {
        if (!this.f38277i.s(pVar) && !this.f38275d.s(pVar)) {
            return false;
        }
        return true;
    }

    @Override // st.o
    public Object t(st.p pVar) {
        if (this.f38275d.j0() && pVar == g0.J) {
            return pVar.getType().cast(60);
        }
        if (this.f38277i.s(pVar)) {
            return this.f38277i.t(pVar);
        }
        return this.f38275d.t(pVar);
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder(40);
        sb2.append(this.f38277i.V());
        sb2.append('T');
        int h10 = this.f38277i.h();
        if (h10 < 10) {
            sb2.append('0');
        }
        sb2.append(h10);
        sb2.append(':');
        int e10 = this.f38277i.e();
        if (e10 < 10) {
            sb2.append('0');
        }
        sb2.append(e10);
        sb2.append(':');
        if (c()) {
            sb2.append("60");
        } else {
            int d10 = this.f38277i.d();
            if (d10 < 10) {
                sb2.append('0');
            }
            sb2.append(d10);
        }
        int a10 = this.f38277i.a();
        if (a10 != 0) {
            g0.M0(sb2, a10);
        }
        sb2.append(b());
        net.time4j.tz.k u10 = u();
        if (!(u10 instanceof net.time4j.tz.p)) {
            sb2.append('[');
            sb2.append(u10.a());
            sb2.append(']');
        }
        return sb2.toString();
    }

    @Override // st.o
    public net.time4j.tz.k u() {
        return this.f38276e.z();
    }

    @Override // st.o
    public int v(st.p pVar) {
        if (this.f38275d.j0() && pVar == g0.J) {
            return 60;
        }
        int v10 = this.f38277i.v(pVar);
        if (v10 == Integer.MIN_VALUE) {
            return this.f38275d.v(pVar);
        }
        return v10;
    }
}
