package net.time4j;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class r implements bu.o {

    /* renamed from: d  reason: collision with root package name */
    private final bu.m f37668d;

    /* renamed from: e  reason: collision with root package name */
    private final g0 f37669e;

    private r(bu.l lVar, bu.m mVar, g0 g0Var) {
        if (g0Var.h() == 24) {
            this.f37668d = mVar.R(bu.h.e(1L));
            this.f37669e = g0.F0();
            return;
        }
        this.f37668d = mVar;
        this.f37669e = g0Var;
    }

    public static r b(bu.m mVar, g0 g0Var) {
        if (mVar != null) {
            return new r(null, mVar, g0Var);
        }
        throw new NullPointerException("Missing date component.");
    }

    private bu.o d() {
        return this.f37668d;
    }

    public a0 a(net.time4j.tz.l lVar, bu.f0 f0Var) {
        i0 o02 = ((f0) this.f37668d.S(f0.class)).o0(this.f37669e);
        int intValue = ((Integer) this.f37669e.k(g0.K)).intValue() - f0Var.b(o02.V(), lVar.z());
        if (intValue >= 86400) {
            o02 = (i0) o02.J(1L, f.f37432s);
        } else if (intValue < 0) {
            o02 = (i0) o02.K(1L, f.f37432s);
        }
        return o02.Y(lVar);
    }

    public Object c() {
        return this.f37668d;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof r) {
            r rVar = (r) r.class.cast(obj);
            if (this.f37669e.equals(rVar.f37669e) && this.f37668d.equals(rVar.f37668d)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return this.f37668d.hashCode() + this.f37669e.hashCode();
    }

    @Override // bu.o
    public Object k(bu.p pVar) {
        if (pVar.A()) {
            return d().k(pVar);
        }
        return this.f37669e.k(pVar);
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
        return this.f37669e.m(pVar);
    }

    @Override // bu.o
    public boolean n(bu.p pVar) {
        if (pVar.A()) {
            return d().n(pVar);
        }
        return this.f37669e.n(pVar);
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
        return this.f37669e.t(pVar);
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder();
        sb2.append(this.f37668d);
        sb2.append(this.f37669e);
        return sb2.toString();
    }

    @Override // bu.o
    public Object v(bu.p pVar) {
        if (pVar.A()) {
            return d().v(pVar);
        }
        return this.f37669e.v(pVar);
    }
}
