package net.time4j;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class r implements bu.o {

    /* renamed from: d  reason: collision with root package name */
    private final bu.m f38237d;

    /* renamed from: e  reason: collision with root package name */
    private final g0 f38238e;

    private r(bu.l lVar, bu.m mVar, g0 g0Var) {
        if (g0Var.h() == 24) {
            this.f38237d = mVar.R(bu.h.e(1L));
            this.f38238e = g0.F0();
            return;
        }
        this.f38237d = mVar;
        this.f38238e = g0Var;
    }

    public static r b(bu.m mVar, g0 g0Var) {
        if (mVar != null) {
            return new r(null, mVar, g0Var);
        }
        throw new NullPointerException("Missing date component.");
    }

    private bu.o d() {
        return this.f38237d;
    }

    public a0 a(net.time4j.tz.l lVar, bu.f0 f0Var) {
        i0 o02 = ((f0) this.f38237d.S(f0.class)).o0(this.f38238e);
        int intValue = ((Integer) this.f38238e.k(g0.K)).intValue() - f0Var.b(o02.V(), lVar.z());
        if (intValue >= 86400) {
            o02 = (i0) o02.J(1L, f.f38001s);
        } else if (intValue < 0) {
            o02 = (i0) o02.K(1L, f.f38001s);
        }
        return o02.Y(lVar);
    }

    public Object c() {
        return this.f38237d;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof r) {
            r rVar = (r) r.class.cast(obj);
            if (this.f38238e.equals(rVar.f38238e) && this.f38237d.equals(rVar.f38237d)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return this.f38237d.hashCode() + this.f38238e.hashCode();
    }

    @Override // bu.o
    public Object k(bu.p pVar) {
        if (pVar.A()) {
            return d().k(pVar);
        }
        return this.f38238e.k(pVar);
    }

    @Override // bu.o
    public boolean l() {
        return false;
    }

    @Override // bu.o
    public int m(bu.p pVar) {
        if (pVar.A()) {
            return d().m(pVar);
        }
        return this.f38238e.m(pVar);
    }

    @Override // bu.o
    public boolean n(bu.p pVar) {
        if (pVar.A()) {
            return d().n(pVar);
        }
        return this.f38238e.n(pVar);
    }

    @Override // bu.o
    public net.time4j.tz.k r() {
        throw new bu.r("Timezone not available: " + this);
    }

    @Override // bu.o
    public Object t(bu.p pVar) {
        if (pVar.A()) {
            return d().t(pVar);
        }
        return this.f38238e.t(pVar);
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder();
        sb2.append(this.f38237d);
        sb2.append(this.f38238e);
        return sb2.toString();
    }

    @Override // bu.o
    public Object v(bu.p pVar) {
        if (pVar.A()) {
            return d().v(pVar);
        }
        return this.f38238e.v(pVar);
    }
}
