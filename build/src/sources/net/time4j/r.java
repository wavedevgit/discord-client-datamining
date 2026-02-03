package net.time4j;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class r implements kt.o {

    /* renamed from: d  reason: collision with root package name */
    private final kt.m f40670d;

    /* renamed from: e  reason: collision with root package name */
    private final g0 f40671e;

    private r(kt.l lVar, kt.m mVar, g0 g0Var) {
        if (g0Var.h() == 24) {
            this.f40670d = mVar.R(kt.h.e(1L));
            this.f40671e = g0.F0();
            return;
        }
        this.f40670d = mVar;
        this.f40671e = g0Var;
    }

    public static r b(kt.m mVar, g0 g0Var) {
        if (mVar != null) {
            return new r(null, mVar, g0Var);
        }
        throw new NullPointerException("Missing date component.");
    }

    private kt.o d() {
        return this.f40670d;
    }

    public a0 a(net.time4j.tz.l lVar, kt.f0 f0Var) {
        i0 o02 = ((f0) this.f40670d.T(f0.class)).o0(this.f40671e);
        int intValue = ((Integer) this.f40671e.v(g0.K)).intValue() - f0Var.b(o02.V(), lVar.z());
        if (intValue >= 86400) {
            o02 = (i0) o02.J(1L, f.f40434s);
        } else if (intValue < 0) {
            o02 = (i0) o02.K(1L, f.f40434s);
        }
        return o02.Y(lVar);
    }

    public Object c() {
        return this.f40670d;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof r) {
            r rVar = (r) r.class.cast(obj);
            if (this.f40671e.equals(rVar.f40671e) && this.f40670d.equals(rVar.f40670d)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return this.f40670d.hashCode() + this.f40671e.hashCode();
    }

    @Override // kt.o
    public Object k(kt.p pVar) {
        if (pVar.y()) {
            return d().k(pVar);
        }
        return this.f40671e.k(pVar);
    }

    @Override // kt.o
    public boolean l() {
        return false;
    }

    @Override // kt.o
    public Object p(kt.p pVar) {
        if (pVar.y()) {
            return d().p(pVar);
        }
        return this.f40671e.p(pVar);
    }

    @Override // kt.o
    public boolean s(kt.p pVar) {
        if (pVar.y()) {
            return d().s(pVar);
        }
        return this.f40671e.s(pVar);
    }

    @Override // kt.o
    public int t(kt.p pVar) {
        if (pVar.y()) {
            return d().t(pVar);
        }
        return this.f40671e.t(pVar);
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder();
        sb2.append(this.f40670d);
        sb2.append(this.f40671e);
        return sb2.toString();
    }

    @Override // kt.o
    public net.time4j.tz.k u() {
        throw new kt.r("Timezone not available: " + this);
    }

    @Override // kt.o
    public Object v(kt.p pVar) {
        if (pVar.y()) {
            return d().v(pVar);
        }
        return this.f40671e.v(pVar);
    }
}
