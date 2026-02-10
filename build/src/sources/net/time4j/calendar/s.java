package net.time4j.calendar;

import bu.t;
import bu.z;
import net.time4j.a1;
import net.time4j.y0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
class s implements z {

    /* renamed from: d  reason: collision with root package name */
    private final a1 f37406d;

    /* renamed from: e  reason: collision with root package name */
    private final t f37407e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public s(a1 a1Var, t tVar) {
        this.f37406d = a1Var;
        this.f37407e = tVar;
    }

    private static y0 g(long j10) {
        return y0.h(zt.c.d(j10 + 5, 7) + 1);
    }

    @Override // bu.z
    /* renamed from: b */
    public bu.p a(bu.g gVar) {
        return null;
    }

    @Override // bu.z
    /* renamed from: c */
    public bu.p h(bu.g gVar) {
        return null;
    }

    @Override // bu.z
    /* renamed from: d */
    public y0 m(bu.g gVar) {
        bu.k kVar = (bu.k) this.f37407e.apply(gVar);
        if ((gVar.i() + 7) - y(gVar).e(this.f37406d) > kVar.a()) {
            return g(kVar.a());
        }
        return this.f37406d.f().f(6);
    }

    @Override // bu.z
    /* renamed from: e */
    public y0 q(bu.g gVar) {
        bu.k kVar = (bu.k) this.f37407e.apply(gVar);
        if ((gVar.i() + 1) - y(gVar).e(this.f37406d) < kVar.d()) {
            return g(kVar.d());
        }
        return this.f37406d.f();
    }

    @Override // bu.z
    /* renamed from: f */
    public y0 y(bu.g gVar) {
        return g(gVar.i());
    }

    @Override // bu.z
    /* renamed from: i */
    public boolean o(bu.g gVar, y0 y0Var) {
        if (y0Var == null) {
            return false;
        }
        int e10 = y(gVar).e(this.f37406d);
        long i10 = (gVar.i() + y0Var.e(this.f37406d)) - e10;
        bu.k kVar = (bu.k) this.f37407e.apply(gVar);
        if (i10 < kVar.d() || i10 > kVar.a()) {
            return false;
        }
        return true;
    }

    @Override // bu.z
    /* renamed from: j */
    public bu.g x(bu.g gVar, y0 y0Var, boolean z10) {
        if (y0Var != null) {
            int e10 = y(gVar).e(this.f37406d);
            long i10 = (gVar.i() + y0Var.e(this.f37406d)) - e10;
            bu.k kVar = (bu.k) this.f37407e.apply(gVar);
            if (i10 >= kVar.d() && i10 <= kVar.a()) {
                return (bu.g) kVar.b(i10);
            }
            throw new IllegalArgumentException("New day out of supported range.");
        }
        throw new IllegalArgumentException("Missing weekday.");
    }
}
