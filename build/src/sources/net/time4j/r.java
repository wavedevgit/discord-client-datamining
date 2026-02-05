package net.time4j;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class r implements pt.o {

    /* renamed from: d  reason: collision with root package name */
    private final pt.m f40169d;

    /* renamed from: e  reason: collision with root package name */
    private final g0 f40170e;

    private r(pt.l lVar, pt.m mVar, g0 g0Var) {
        if (g0Var.h() == 24) {
            this.f40169d = mVar.R(pt.h.e(1L));
            this.f40170e = g0.F0();
            return;
        }
        this.f40169d = mVar;
        this.f40170e = g0Var;
    }

    public static r b(pt.m mVar, g0 g0Var) {
        if (mVar != null) {
            return new r(null, mVar, g0Var);
        }
        throw new NullPointerException("Missing date component.");
    }

    private pt.o d() {
        return this.f40169d;
    }

    public a0 a(net.time4j.tz.l lVar, pt.f0 f0Var) {
        i0 o02 = ((f0) this.f40169d.T(f0.class)).o0(this.f40170e);
        int intValue = ((Integer) this.f40170e.v(g0.K)).intValue() - f0Var.b(o02.V(), lVar.z());
        if (intValue >= 86400) {
            o02 = (i0) o02.J(1L, f.f39933s);
        } else if (intValue < 0) {
            o02 = (i0) o02.K(1L, f.f39933s);
        }
        return o02.Y(lVar);
    }

    public Object c() {
        return this.f40169d;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof r) {
            r rVar = (r) r.class.cast(obj);
            if (this.f40170e.equals(rVar.f40170e) && this.f40169d.equals(rVar.f40169d)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return this.f40169d.hashCode() + this.f40170e.hashCode();
    }

    @Override // pt.o
    public boolean k() {
        return false;
    }

    @Override // pt.o
    public boolean m(pt.p pVar) {
        if (pVar.z()) {
            return d().m(pVar);
        }
        return this.f40170e.m(pVar);
    }

    @Override // pt.o
    public Object n(pt.p pVar) {
        if (pVar.z()) {
            return d().n(pVar);
        }
        return this.f40170e.n(pVar);
    }

    @Override // pt.o
    public int r(pt.p pVar) {
        if (pVar.z()) {
            return d().r(pVar);
        }
        return this.f40170e.r(pVar);
    }

    @Override // pt.o
    public Object s(pt.p pVar) {
        if (pVar.z()) {
            return d().s(pVar);
        }
        return this.f40170e.s(pVar);
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder();
        sb2.append(this.f40169d);
        sb2.append(this.f40170e);
        return sb2.toString();
    }

    @Override // pt.o
    public net.time4j.tz.k u() {
        throw new pt.r("Timezone not available: " + this);
    }

    @Override // pt.o
    public Object v(pt.p pVar) {
        if (pVar.z()) {
            return d().v(pVar);
        }
        return this.f40170e.v(pVar);
    }
}
