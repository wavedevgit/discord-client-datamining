package net.time4j;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class c1 implements kt.o, rt.g {

    /* renamed from: d  reason: collision with root package name */
    private final a0 f40281d;

    /* renamed from: e  reason: collision with root package name */
    private final net.time4j.tz.l f40282e;

    /* renamed from: i  reason: collision with root package name */
    private final transient i0 f40283i;

    private c1(a0 a0Var, net.time4j.tz.l lVar) {
        this.f40282e = lVar;
        net.time4j.tz.p B = lVar.B(a0Var);
        if (a0Var.j0() && (B.l() != 0 || B.k() % 60 != 0)) {
            throw new IllegalArgumentException("Leap second can only be represented  with timezone-offset in full minutes: " + B);
        }
        this.f40281d = a0Var;
        this.f40283i = i0.U(a0Var, B);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static c1 d(a0 a0Var, net.time4j.tz.l lVar) {
        return new c1(a0Var, lVar);
    }

    @Override // ht.f
    public int a() {
        return this.f40281d.a();
    }

    public net.time4j.tz.p b() {
        return this.f40282e.B(this.f40281d);
    }

    public boolean c() {
        return this.f40281d.j0();
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof c1) {
            c1 c1Var = (c1) obj;
            if (this.f40281d.equals(c1Var.f40281d) && this.f40282e.equals(c1Var.f40282e)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return this.f40281d.hashCode() ^ this.f40282e.hashCode();
    }

    @Override // kt.o
    public Object k(kt.p pVar) {
        if (this.f40283i.s(pVar)) {
            return this.f40283i.k(pVar);
        }
        return this.f40281d.k(pVar);
    }

    @Override // kt.o
    public boolean l() {
        return true;
    }

    @Override // rt.g
    public long m(rt.f fVar) {
        return this.f40281d.m(fVar);
    }

    @Override // ht.f
    public long o() {
        return this.f40281d.o();
    }

    @Override // kt.o
    public Object p(kt.p pVar) {
        Object p10;
        if (this.f40283i.s(pVar)) {
            p10 = this.f40283i.p(pVar);
        } else {
            p10 = this.f40281d.p(pVar);
        }
        if (pVar == g0.J && this.f40283i.f() >= 1972) {
            i0 i0Var = (i0) this.f40283i.E(pVar, p10);
            if (!this.f40282e.K(i0Var, i0Var) && i0Var.Y(this.f40282e).n0(1L, o0.SECONDS).j0()) {
                return pVar.getType().cast(60);
            }
        }
        return p10;
    }

    @Override // rt.g
    public int q(rt.f fVar) {
        return this.f40281d.q(fVar);
    }

    @Override // kt.o
    public boolean s(kt.p pVar) {
        if (!this.f40283i.s(pVar) && !this.f40281d.s(pVar)) {
            return false;
        }
        return true;
    }

    @Override // kt.o
    public int t(kt.p pVar) {
        if (this.f40281d.j0() && pVar == g0.J) {
            return 60;
        }
        int t10 = this.f40283i.t(pVar);
        if (t10 == Integer.MIN_VALUE) {
            return this.f40281d.t(pVar);
        }
        return t10;
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder(40);
        sb2.append(this.f40283i.V());
        sb2.append('T');
        int h10 = this.f40283i.h();
        if (h10 < 10) {
            sb2.append('0');
        }
        sb2.append(h10);
        sb2.append(':');
        int e10 = this.f40283i.e();
        if (e10 < 10) {
            sb2.append('0');
        }
        sb2.append(e10);
        sb2.append(':');
        if (c()) {
            sb2.append("60");
        } else {
            int d10 = this.f40283i.d();
            if (d10 < 10) {
                sb2.append('0');
            }
            sb2.append(d10);
        }
        int a10 = this.f40283i.a();
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

    @Override // kt.o
    public net.time4j.tz.k u() {
        return this.f40282e.z();
    }

    @Override // kt.o
    public Object v(kt.p pVar) {
        if (this.f40281d.j0() && pVar == g0.J) {
            return pVar.getType().cast(60);
        }
        if (this.f40283i.s(pVar)) {
            return this.f40283i.v(pVar);
        }
        return this.f40281d.v(pVar);
    }
}
