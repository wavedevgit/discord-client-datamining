package net.time4j;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class r implements rt.o {

    /* renamed from: d  reason: collision with root package name */
    private final rt.m f39524d;

    /* renamed from: e  reason: collision with root package name */
    private final g0 f39525e;

    private r(rt.l lVar, rt.m mVar, g0 g0Var) {
        if (g0Var.h() == 24) {
            this.f39524d = mVar.R(rt.h.e(1L));
            this.f39525e = g0.F0();
            return;
        }
        this.f39524d = mVar;
        this.f39525e = g0Var;
    }

    public static r b(rt.m mVar, g0 g0Var) {
        if (mVar != null) {
            return new r(null, mVar, g0Var);
        }
        throw new NullPointerException("Missing date component.");
    }

    private rt.o d() {
        return this.f39524d;
    }

    public a0 a(net.time4j.tz.l lVar, rt.f0 f0Var) {
        i0 o02 = ((f0) this.f39524d.T(f0.class)).o0(this.f39525e);
        int intValue = ((Integer) this.f39525e.s(g0.K)).intValue() - f0Var.b(o02.V(), lVar.z());
        if (intValue >= 86400) {
            o02 = (i0) o02.J(1L, f.f39288s);
        } else if (intValue < 0) {
            o02 = (i0) o02.K(1L, f.f39288s);
        }
        return o02.Y(lVar);
    }

    public Object c() {
        return this.f39524d;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof r) {
            r rVar = (r) r.class.cast(obj);
            if (this.f39525e.equals(rVar.f39525e) && this.f39524d.equals(rVar.f39524d)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return this.f39524d.hashCode() + this.f39525e.hashCode();
    }

    @Override // rt.o
    public boolean k() {
        return false;
    }

    @Override // rt.o
    public boolean n(rt.p pVar) {
        if (pVar.A()) {
            return d().n(pVar);
        }
        return this.f39525e.n(pVar);
    }

    @Override // rt.o
    public int q(rt.p pVar) {
        if (pVar.A()) {
            return d().q(pVar);
        }
        return this.f39525e.q(pVar);
    }

    @Override // rt.o
    public Object s(rt.p pVar) {
        if (pVar.A()) {
            return d().s(pVar);
        }
        return this.f39525e.s(pVar);
    }

    @Override // rt.o
    public Object t(rt.p pVar) {
        if (pVar.A()) {
            return d().t(pVar);
        }
        return this.f39525e.t(pVar);
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder();
        sb2.append(this.f39524d);
        sb2.append(this.f39525e);
        return sb2.toString();
    }

    @Override // rt.o
    public net.time4j.tz.k u() {
        throw new rt.r("Timezone not available: " + this);
    }

    @Override // rt.o
    public Object v(rt.p pVar) {
        if (pVar.A()) {
            return d().v(pVar);
        }
        return this.f39525e.v(pVar);
    }
}
