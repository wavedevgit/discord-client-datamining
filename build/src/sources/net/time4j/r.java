package net.time4j;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class r implements mt.o {

    /* renamed from: d  reason: collision with root package name */
    private final mt.m f40709d;

    /* renamed from: e  reason: collision with root package name */
    private final g0 f40710e;

    private r(mt.l lVar, mt.m mVar, g0 g0Var) {
        if (g0Var.h() == 24) {
            this.f40709d = mVar.R(mt.h.e(1L));
            this.f40710e = g0.F0();
            return;
        }
        this.f40709d = mVar;
        this.f40710e = g0Var;
    }

    public static r b(mt.m mVar, g0 g0Var) {
        if (mVar != null) {
            return new r(null, mVar, g0Var);
        }
        throw new NullPointerException("Missing date component.");
    }

    private mt.o d() {
        return this.f40709d;
    }

    public a0 a(net.time4j.tz.l lVar, mt.f0 f0Var) {
        i0 o02 = ((f0) this.f40709d.T(f0.class)).o0(this.f40710e);
        int intValue = ((Integer) this.f40710e.o(g0.K)).intValue() - f0Var.b(o02.V(), lVar.z());
        if (intValue >= 86400) {
            o02 = (i0) o02.J(1L, f.f40473s);
        } else if (intValue < 0) {
            o02 = (i0) o02.K(1L, f.f40473s);
        }
        return o02.Y(lVar);
    }

    public Object c() {
        return this.f40709d;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof r) {
            r rVar = (r) r.class.cast(obj);
            if (this.f40710e.equals(rVar.f40710e) && this.f40709d.equals(rVar.f40709d)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return this.f40709d.hashCode() + this.f40710e.hashCode();
    }

    @Override // mt.o
    public int j(mt.p pVar) {
        if (pVar.y()) {
            return d().j(pVar);
        }
        return this.f40710e.j(pVar);
    }

    @Override // mt.o
    public boolean l() {
        return false;
    }

    @Override // mt.o
    public Object o(mt.p pVar) {
        if (pVar.y()) {
            return d().o(pVar);
        }
        return this.f40710e.o(pVar);
    }

    @Override // mt.o
    public boolean q(mt.p pVar) {
        if (pVar.y()) {
            return d().q(pVar);
        }
        return this.f40710e.q(pVar);
    }

    @Override // mt.o
    public net.time4j.tz.k t() {
        throw new mt.r("Timezone not available: " + this);
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder();
        sb2.append(this.f40709d);
        sb2.append(this.f40710e);
        return sb2.toString();
    }

    @Override // mt.o
    public Object u(mt.p pVar) {
        if (pVar.y()) {
            return d().u(pVar);
        }
        return this.f40710e.u(pVar);
    }

    @Override // mt.o
    public Object v(mt.p pVar) {
        if (pVar.y()) {
            return d().v(pVar);
        }
        return this.f40710e.v(pVar);
    }
}
