package net.time4j.calendar;

import net.time4j.a1;
import net.time4j.y0;
import pt.t;
import pt.z;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
class s implements z {

    /* renamed from: d  reason: collision with root package name */
    private final a1 f39907d;

    /* renamed from: e  reason: collision with root package name */
    private final t f39908e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public s(a1 a1Var, t tVar) {
        this.f39907d = a1Var;
        this.f39908e = tVar;
    }

    private static y0 g(long j10) {
        return y0.h(nt.c.d(j10 + 5, 7) + 1);
    }

    @Override // pt.z
    /* renamed from: b */
    public pt.p a(pt.g gVar) {
        return null;
    }

    @Override // pt.z
    /* renamed from: c */
    public pt.p h(pt.g gVar) {
        return null;
    }

    @Override // pt.z
    /* renamed from: d */
    public y0 k(pt.g gVar) {
        pt.k kVar = (pt.k) this.f39908e.apply(gVar);
        if ((gVar.i() + 7) - y(gVar).e(this.f39907d) > kVar.a()) {
            return g(kVar.a());
        }
        return this.f39907d.f().f(6);
    }

    @Override // pt.z
    /* renamed from: e */
    public y0 r(pt.g gVar) {
        pt.k kVar = (pt.k) this.f39908e.apply(gVar);
        if ((gVar.i() + 1) - y(gVar).e(this.f39907d) < kVar.d()) {
            return g(kVar.d());
        }
        return this.f39907d.f();
    }

    @Override // pt.z
    /* renamed from: f */
    public y0 y(pt.g gVar) {
        return g(gVar.i());
    }

    @Override // pt.z
    /* renamed from: i */
    public boolean p(pt.g gVar, y0 y0Var) {
        if (y0Var == null) {
            return false;
        }
        int e10 = y(gVar).e(this.f39907d);
        long i10 = (gVar.i() + y0Var.e(this.f39907d)) - e10;
        pt.k kVar = (pt.k) this.f39908e.apply(gVar);
        if (i10 < kVar.d() || i10 > kVar.a()) {
            return false;
        }
        return true;
    }

    @Override // pt.z
    /* renamed from: j */
    public pt.g x(pt.g gVar, y0 y0Var, boolean z10) {
        if (y0Var != null) {
            int e10 = y(gVar).e(this.f39907d);
            long i10 = (gVar.i() + y0Var.e(this.f39907d)) - e10;
            pt.k kVar = (pt.k) this.f39908e.apply(gVar);
            if (i10 >= kVar.d() && i10 <= kVar.a()) {
                return (pt.g) kVar.b(i10);
            }
            throw new IllegalArgumentException("New day out of supported range.");
        }
        throw new IllegalArgumentException("Missing weekday.");
    }
}
