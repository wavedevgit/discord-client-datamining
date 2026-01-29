package net.time4j;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class c1 implements jt.o, qt.g {

    /* renamed from: d  reason: collision with root package name */
    private final a0 f40402d;

    /* renamed from: e  reason: collision with root package name */
    private final net.time4j.tz.l f40403e;

    /* renamed from: i  reason: collision with root package name */
    private final transient i0 f40404i;

    private c1(a0 a0Var, net.time4j.tz.l lVar) {
        this.f40403e = lVar;
        net.time4j.tz.p B = lVar.B(a0Var);
        if (a0Var.j0() && (B.k() != 0 || B.j() % 60 != 0)) {
            throw new IllegalArgumentException("Leap second can only be represented  with timezone-offset in full minutes: " + B);
        }
        this.f40402d = a0Var;
        this.f40404i = i0.U(a0Var, B);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static c1 d(a0 a0Var, net.time4j.tz.l lVar) {
        return new c1(a0Var, lVar);
    }

    @Override // gt.f
    public int a() {
        return this.f40402d.a();
    }

    public net.time4j.tz.p b() {
        return this.f40403e.B(this.f40402d);
    }

    public boolean c() {
        return this.f40402d.j0();
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof c1) {
            c1 c1Var = (c1) obj;
            if (this.f40402d.equals(c1Var.f40402d) && this.f40403e.equals(c1Var.f40403e)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return this.f40402d.hashCode() ^ this.f40403e.hashCode();
    }

    @Override // jt.o
    public Object i(jt.p pVar) {
        Object i10;
        if (this.f40404i.o(pVar)) {
            i10 = this.f40404i.i(pVar);
        } else {
            i10 = this.f40402d.i(pVar);
        }
        if (pVar == g0.J && this.f40404i.f() >= 1972) {
            i0 i0Var = (i0) this.f40404i.E(pVar, i10);
            if (!this.f40403e.K(i0Var, i0Var) && i0Var.Y(this.f40403e).n0(1L, o0.SECONDS).j0()) {
                return pVar.getType().cast(60);
            }
        }
        return i10;
    }

    @Override // qt.g
    public int k(qt.f fVar) {
        return this.f40402d.k(fVar);
    }

    @Override // jt.o
    public boolean l() {
        return true;
    }

    @Override // jt.o
    public boolean o(jt.p pVar) {
        if (!this.f40404i.o(pVar) && !this.f40402d.o(pVar)) {
            return false;
        }
        return true;
    }

    @Override // jt.o
    public Object p(jt.p pVar) {
        if (this.f40402d.j0() && pVar == g0.J) {
            return pVar.getType().cast(60);
        }
        if (this.f40404i.o(pVar)) {
            return this.f40404i.p(pVar);
        }
        return this.f40402d.p(pVar);
    }

    @Override // jt.o
    public int q(jt.p pVar) {
        if (this.f40402d.j0() && pVar == g0.J) {
            return 60;
        }
        int q10 = this.f40404i.q(pVar);
        if (q10 == Integer.MIN_VALUE) {
            return this.f40402d.q(pVar);
        }
        return q10;
    }

    @Override // gt.f
    public long r() {
        return this.f40402d.r();
    }

    @Override // qt.g
    public long s(qt.f fVar) {
        return this.f40402d.s(fVar);
    }

    @Override // jt.o
    public Object t(jt.p pVar) {
        if (this.f40404i.o(pVar)) {
            return this.f40404i.t(pVar);
        }
        return this.f40402d.t(pVar);
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder(40);
        sb2.append(this.f40404i.V());
        sb2.append('T');
        int h10 = this.f40404i.h();
        if (h10 < 10) {
            sb2.append('0');
        }
        sb2.append(h10);
        sb2.append(':');
        int e10 = this.f40404i.e();
        if (e10 < 10) {
            sb2.append('0');
        }
        sb2.append(e10);
        sb2.append(':');
        if (c()) {
            sb2.append("60");
        } else {
            int d10 = this.f40404i.d();
            if (d10 < 10) {
                sb2.append('0');
            }
            sb2.append(d10);
        }
        int a10 = this.f40404i.a();
        if (a10 != 0) {
            g0.M0(sb2, a10);
        }
        sb2.append(b());
        net.time4j.tz.k v10 = v();
        if (!(v10 instanceof net.time4j.tz.p)) {
            sb2.append('[');
            sb2.append(v10.a());
            sb2.append(']');
        }
        return sb2.toString();
    }

    @Override // jt.o
    public net.time4j.tz.k v() {
        return this.f40403e.z();
    }
}
