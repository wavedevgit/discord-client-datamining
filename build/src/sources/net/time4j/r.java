package net.time4j;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class r implements st.o {

    /* renamed from: d  reason: collision with root package name */
    private final st.m f38664d;

    /* renamed from: e  reason: collision with root package name */
    private final g0 f38665e;

    private r(st.l lVar, st.m mVar, g0 g0Var) {
        if (g0Var.h() == 24) {
            this.f38664d = mVar.R(st.h.e(1L));
            this.f38665e = g0.F0();
            return;
        }
        this.f38664d = mVar;
        this.f38665e = g0Var;
    }

    public static r b(st.m mVar, g0 g0Var) {
        if (mVar != null) {
            return new r(null, mVar, g0Var);
        }
        throw new NullPointerException("Missing date component.");
    }

    private st.o d() {
        return this.f38664d;
    }

    public a0 a(net.time4j.tz.l lVar, st.f0 f0Var) {
        i0 o02 = ((f0) this.f38664d.T(f0.class)).o0(this.f38665e);
        int intValue = ((Integer) this.f38665e.t(g0.K)).intValue() - f0Var.b(o02.V(), lVar.z());
        if (intValue >= 86400) {
            o02 = (i0) o02.J(1L, f.f38428s);
        } else if (intValue < 0) {
            o02 = (i0) o02.K(1L, f.f38428s);
        }
        return o02.Y(lVar);
    }

    public Object c() {
        return this.f38664d;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof r) {
            r rVar = (r) r.class.cast(obj);
            if (this.f38665e.equals(rVar.f38665e) && this.f38664d.equals(rVar.f38664d)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return this.f38664d.hashCode() + this.f38665e.hashCode();
    }

    @Override // st.o
    public boolean k() {
        return false;
    }

    @Override // st.o
    public Object m(st.p pVar) {
        if (pVar.A()) {
            return d().m(pVar);
        }
        return this.f38665e.m(pVar);
    }

    @Override // st.o
    public Object n(st.p pVar) {
        if (pVar.A()) {
            return d().n(pVar);
        }
        return this.f38665e.n(pVar);
    }

    @Override // st.o
    public boolean s(st.p pVar) {
        if (pVar.A()) {
            return d().s(pVar);
        }
        return this.f38665e.s(pVar);
    }

    @Override // st.o
    public Object t(st.p pVar) {
        if (pVar.A()) {
            return d().t(pVar);
        }
        return this.f38665e.t(pVar);
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder();
        sb2.append(this.f38664d);
        sb2.append(this.f38665e);
        return sb2.toString();
    }

    @Override // st.o
    public net.time4j.tz.k u() {
        throw new st.r("Timezone not available: " + this);
    }

    @Override // st.o
    public int v(st.p pVar) {
        if (pVar.A()) {
            return d().v(pVar);
        }
        return this.f38665e.v(pVar);
    }
}
