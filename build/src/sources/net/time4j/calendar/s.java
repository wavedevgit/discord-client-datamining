package net.time4j.calendar;

import net.time4j.a1;
import net.time4j.y0;
import st.t;
import st.z;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
class s implements z {

    /* renamed from: d  reason: collision with root package name */
    private final a1 f38402d;

    /* renamed from: e  reason: collision with root package name */
    private final t f38403e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public s(a1 a1Var, t tVar) {
        this.f38402d = a1Var;
        this.f38403e = tVar;
    }

    private static y0 j(long j10) {
        return y0.h(qt.c.d(j10 + 5, 7) + 1);
    }

    @Override // st.z
    /* renamed from: b */
    public st.p a(st.g gVar) {
        return null;
    }

    @Override // st.z
    /* renamed from: c */
    public st.p g(st.g gVar) {
        return null;
    }

    @Override // st.z
    /* renamed from: d */
    public y0 h(st.g gVar) {
        st.k kVar = (st.k) this.f38403e.apply(gVar);
        if ((gVar.i() + 7) - y(gVar).e(this.f38402d) > kVar.a()) {
            return j(kVar.a());
        }
        return this.f38402d.f().f(6);
    }

    @Override // st.z
    /* renamed from: e */
    public y0 m(st.g gVar) {
        st.k kVar = (st.k) this.f38403e.apply(gVar);
        if ((gVar.i() + 1) - y(gVar).e(this.f38402d) < kVar.d()) {
            return j(kVar.d());
        }
        return this.f38402d.f();
    }

    @Override // st.z
    /* renamed from: f */
    public y0 y(st.g gVar) {
        return j(gVar.i());
    }

    @Override // st.z
    /* renamed from: l */
    public boolean k(st.g gVar, y0 y0Var) {
        if (y0Var == null) {
            return false;
        }
        int e10 = y(gVar).e(this.f38402d);
        long i10 = (gVar.i() + y0Var.e(this.f38402d)) - e10;
        st.k kVar = (st.k) this.f38403e.apply(gVar);
        if (i10 < kVar.d() || i10 > kVar.a()) {
            return false;
        }
        return true;
    }

    @Override // st.z
    /* renamed from: o */
    public st.g s(st.g gVar, y0 y0Var, boolean z10) {
        if (y0Var != null) {
            int e10 = y(gVar).e(this.f38402d);
            long i10 = (gVar.i() + y0Var.e(this.f38402d)) - e10;
            st.k kVar = (st.k) this.f38403e.apply(gVar);
            if (i10 >= kVar.d() && i10 <= kVar.a()) {
                return (st.g) kVar.b(i10);
            }
            throw new IllegalArgumentException("New day out of supported range.");
        }
        throw new IllegalArgumentException("Missing weekday.");
    }
}
