package net.time4j;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class r implements jt.o {

    /* renamed from: d  reason: collision with root package name */
    private final jt.m f40807d;

    /* renamed from: e  reason: collision with root package name */
    private final g0 f40808e;

    private r(jt.l lVar, jt.m mVar, g0 g0Var) {
        if (g0Var.h() == 24) {
            this.f40807d = mVar.R(jt.h.e(1L));
            this.f40808e = g0.F0();
            return;
        }
        this.f40807d = mVar;
        this.f40808e = g0Var;
    }

    public static r b(jt.m mVar, g0 g0Var) {
        if (mVar != null) {
            return new r(null, mVar, g0Var);
        }
        throw new NullPointerException("Missing date component.");
    }

    private jt.o d() {
        return this.f40807d;
    }

    public a0 a(net.time4j.tz.l lVar, jt.f0 f0Var) {
        i0 o02 = ((f0) this.f40807d.T(f0.class)).o0(this.f40808e);
        int intValue = ((Integer) this.f40808e.p(g0.K)).intValue() - f0Var.b(o02.V(), lVar.z());
        if (intValue >= 86400) {
            o02 = (i0) o02.J(1L, f.f40571s);
        } else if (intValue < 0) {
            o02 = (i0) o02.K(1L, f.f40571s);
        }
        return o02.Y(lVar);
    }

    public Object c() {
        return this.f40807d;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof r) {
            r rVar = (r) r.class.cast(obj);
            if (this.f40808e.equals(rVar.f40808e) && this.f40807d.equals(rVar.f40807d)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return this.f40807d.hashCode() + this.f40808e.hashCode();
    }

    @Override // jt.o
    public Object i(jt.p pVar) {
        if (pVar.y()) {
            return d().i(pVar);
        }
        return this.f40808e.i(pVar);
    }

    @Override // jt.o
    public boolean l() {
        return false;
    }

    @Override // jt.o
    public boolean o(jt.p pVar) {
        if (pVar.y()) {
            return d().o(pVar);
        }
        return this.f40808e.o(pVar);
    }

    @Override // jt.o
    public Object p(jt.p pVar) {
        if (pVar.y()) {
            return d().p(pVar);
        }
        return this.f40808e.p(pVar);
    }

    @Override // jt.o
    public int q(jt.p pVar) {
        if (pVar.y()) {
            return d().q(pVar);
        }
        return this.f40808e.q(pVar);
    }

    @Override // jt.o
    public Object t(jt.p pVar) {
        if (pVar.y()) {
            return d().t(pVar);
        }
        return this.f40808e.t(pVar);
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder();
        sb2.append(this.f40807d);
        sb2.append(this.f40808e);
        return sb2.toString();
    }

    @Override // jt.o
    public net.time4j.tz.k v() {
        throw new jt.r("Timezone not available: " + this);
    }
}
