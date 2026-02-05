package net.time4j;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class c1 implements pt.o, wt.g {

    /* renamed from: d  reason: collision with root package name */
    private final a0 f39780d;

    /* renamed from: e  reason: collision with root package name */
    private final net.time4j.tz.l f39781e;

    /* renamed from: i  reason: collision with root package name */
    private final transient i0 f39782i;

    private c1(a0 a0Var, net.time4j.tz.l lVar) {
        this.f39781e = lVar;
        net.time4j.tz.p B = lVar.B(a0Var);
        if (a0Var.j0() && (B.l() != 0 || B.k() % 60 != 0)) {
            throw new IllegalArgumentException("Leap second can only be represented  with timezone-offset in full minutes: " + B);
        }
        this.f39780d = a0Var;
        this.f39782i = i0.U(a0Var, B);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static c1 d(a0 a0Var, net.time4j.tz.l lVar) {
        return new c1(a0Var, lVar);
    }

    @Override // nt.f
    public int a() {
        return this.f39780d.a();
    }

    public net.time4j.tz.p b() {
        return this.f39781e.B(this.f39780d);
    }

    public boolean c() {
        return this.f39780d.j0();
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof c1) {
            c1 c1Var = (c1) obj;
            if (this.f39780d.equals(c1Var.f39780d) && this.f39781e.equals(c1Var.f39781e)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return this.f39780d.hashCode() ^ this.f39781e.hashCode();
    }

    @Override // pt.o
    public boolean k() {
        return true;
    }

    @Override // wt.g
    public long l(wt.f fVar) {
        return this.f39780d.l(fVar);
    }

    @Override // pt.o
    public boolean m(pt.p pVar) {
        if (!this.f39782i.m(pVar) && !this.f39780d.m(pVar)) {
            return false;
        }
        return true;
    }

    @Override // pt.o
    public Object n(pt.p pVar) {
        Object n10;
        if (this.f39782i.m(pVar)) {
            n10 = this.f39782i.n(pVar);
        } else {
            n10 = this.f39780d.n(pVar);
        }
        if (pVar == g0.J && this.f39782i.f() >= 1972) {
            i0 i0Var = (i0) this.f39782i.E(pVar, n10);
            if (!this.f39781e.K(i0Var, i0Var) && i0Var.Y(this.f39781e).n0(1L, o0.SECONDS).j0()) {
                return pVar.getType().cast(60);
            }
        }
        return n10;
    }

    @Override // wt.g
    public int p(wt.f fVar) {
        return this.f39780d.p(fVar);
    }

    @Override // nt.f
    public long q() {
        return this.f39780d.q();
    }

    @Override // pt.o
    public int r(pt.p pVar) {
        if (this.f39780d.j0() && pVar == g0.J) {
            return 60;
        }
        int r10 = this.f39782i.r(pVar);
        if (r10 == Integer.MIN_VALUE) {
            return this.f39780d.r(pVar);
        }
        return r10;
    }

    @Override // pt.o
    public Object s(pt.p pVar) {
        if (this.f39782i.m(pVar)) {
            return this.f39782i.s(pVar);
        }
        return this.f39780d.s(pVar);
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder(40);
        sb2.append(this.f39782i.V());
        sb2.append('T');
        int h10 = this.f39782i.h();
        if (h10 < 10) {
            sb2.append('0');
        }
        sb2.append(h10);
        sb2.append(':');
        int e10 = this.f39782i.e();
        if (e10 < 10) {
            sb2.append('0');
        }
        sb2.append(e10);
        sb2.append(':');
        if (c()) {
            sb2.append("60");
        } else {
            int d10 = this.f39782i.d();
            if (d10 < 10) {
                sb2.append('0');
            }
            sb2.append(d10);
        }
        int a10 = this.f39782i.a();
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

    @Override // pt.o
    public net.time4j.tz.k u() {
        return this.f39781e.z();
    }

    @Override // pt.o
    public Object v(pt.p pVar) {
        if (this.f39780d.j0() && pVar == g0.J) {
            return pVar.getType().cast(60);
        }
        if (this.f39782i.m(pVar)) {
            return this.f39782i.v(pVar);
        }
        return this.f39780d.v(pVar);
    }
}
