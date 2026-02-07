package net.time4j;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class c1 implements rt.o, yt.g {

    /* renamed from: d  reason: collision with root package name */
    private final a0 f39183d;

    /* renamed from: e  reason: collision with root package name */
    private final net.time4j.tz.l f39184e;

    /* renamed from: i  reason: collision with root package name */
    private final transient i0 f39185i;

    private c1(a0 a0Var, net.time4j.tz.l lVar) {
        this.f39184e = lVar;
        net.time4j.tz.p B = lVar.B(a0Var);
        if (a0Var.j0() && (B.k() != 0 || B.j() % 60 != 0)) {
            throw new IllegalArgumentException("Leap second can only be represented  with timezone-offset in full minutes: " + B);
        }
        this.f39183d = a0Var;
        this.f39185i = i0.U(a0Var, B);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static c1 d(a0 a0Var, net.time4j.tz.l lVar) {
        return new c1(a0Var, lVar);
    }

    @Override // pt.f
    public int a() {
        return this.f39183d.a();
    }

    public net.time4j.tz.p b() {
        return this.f39184e.B(this.f39183d);
    }

    public boolean c() {
        return this.f39183d.j0();
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof c1) {
            c1 c1Var = (c1) obj;
            if (this.f39183d.equals(c1Var.f39183d) && this.f39184e.equals(c1Var.f39184e)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return this.f39183d.hashCode() ^ this.f39184e.hashCode();
    }

    @Override // yt.g
    public int j(yt.f fVar) {
        return this.f39183d.j(fVar);
    }

    @Override // rt.o
    public boolean k() {
        return true;
    }

    @Override // pt.f
    public long m() {
        return this.f39183d.m();
    }

    @Override // rt.o
    public boolean n(rt.p pVar) {
        if (!this.f39185i.n(pVar) && !this.f39183d.n(pVar)) {
            return false;
        }
        return true;
    }

    @Override // yt.g
    public long o(yt.f fVar) {
        return this.f39183d.o(fVar);
    }

    @Override // rt.o
    public int q(rt.p pVar) {
        if (this.f39183d.j0() && pVar == g0.J) {
            return 60;
        }
        int q10 = this.f39185i.q(pVar);
        if (q10 == Integer.MIN_VALUE) {
            return this.f39183d.q(pVar);
        }
        return q10;
    }

    @Override // rt.o
    public Object s(rt.p pVar) {
        if (this.f39183d.j0() && pVar == g0.J) {
            return pVar.getType().cast(60);
        }
        if (this.f39185i.n(pVar)) {
            return this.f39185i.s(pVar);
        }
        return this.f39183d.s(pVar);
    }

    @Override // rt.o
    public Object t(rt.p pVar) {
        Object t10;
        if (this.f39185i.n(pVar)) {
            t10 = this.f39185i.t(pVar);
        } else {
            t10 = this.f39183d.t(pVar);
        }
        if (pVar == g0.J && this.f39185i.f() >= 1972) {
            i0 i0Var = (i0) this.f39185i.E(pVar, t10);
            if (!this.f39184e.K(i0Var, i0Var) && i0Var.Y(this.f39184e).n0(1L, o0.SECONDS).j0()) {
                return pVar.getType().cast(60);
            }
        }
        return t10;
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder(40);
        sb2.append(this.f39185i.V());
        sb2.append('T');
        int h10 = this.f39185i.h();
        if (h10 < 10) {
            sb2.append('0');
        }
        sb2.append(h10);
        sb2.append(':');
        int e10 = this.f39185i.e();
        if (e10 < 10) {
            sb2.append('0');
        }
        sb2.append(e10);
        sb2.append(':');
        if (c()) {
            sb2.append("60");
        } else {
            int d10 = this.f39185i.d();
            if (d10 < 10) {
                sb2.append('0');
            }
            sb2.append(d10);
        }
        int a10 = this.f39185i.a();
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

    @Override // rt.o
    public net.time4j.tz.k u() {
        return this.f39184e.z();
    }

    @Override // rt.o
    public Object v(rt.p pVar) {
        if (this.f39185i.n(pVar)) {
            return this.f39185i.v(pVar);
        }
        return this.f39183d.v(pVar);
    }
}
