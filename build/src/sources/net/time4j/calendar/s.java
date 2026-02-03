package net.time4j.calendar;

import mt.t;
import mt.z;
import net.time4j.a1;
import net.time4j.y0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
class s implements z {

    /* renamed from: d  reason: collision with root package name */
    private final a1 f40447d;

    /* renamed from: e  reason: collision with root package name */
    private final t f40448e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public s(a1 a1Var, t tVar) {
        this.f40447d = a1Var;
        this.f40448e = tVar;
    }

    private static y0 g(long j10) {
        return y0.h(kt.c.d(j10 + 5, 7) + 1);
    }

    @Override // mt.z
    /* renamed from: b */
    public mt.p a(mt.g gVar) {
        return null;
    }

    @Override // mt.z
    /* renamed from: c */
    public mt.p h(mt.g gVar) {
        return null;
    }

    @Override // mt.z
    /* renamed from: d */
    public y0 l(mt.g gVar) {
        mt.k kVar = (mt.k) this.f40448e.apply(gVar);
        if ((gVar.i() + 7) - z(gVar).e(this.f40447d) > kVar.a()) {
            return g(kVar.a());
        }
        return this.f40447d.f().f(6);
    }

    @Override // mt.z
    /* renamed from: e */
    public y0 r(mt.g gVar) {
        mt.k kVar = (mt.k) this.f40448e.apply(gVar);
        if ((gVar.i() + 1) - z(gVar).e(this.f40447d) < kVar.d()) {
            return g(kVar.d());
        }
        return this.f40447d.f();
    }

    @Override // mt.z
    /* renamed from: f */
    public y0 z(mt.g gVar) {
        return g(gVar.i());
    }

    @Override // mt.z
    /* renamed from: i */
    public boolean q(mt.g gVar, y0 y0Var) {
        if (y0Var == null) {
            return false;
        }
        int e10 = z(gVar).e(this.f40447d);
        long i10 = (gVar.i() + y0Var.e(this.f40447d)) - e10;
        mt.k kVar = (mt.k) this.f40448e.apply(gVar);
        if (i10 < kVar.d() || i10 > kVar.a()) {
            return false;
        }
        return true;
    }

    @Override // mt.z
    /* renamed from: j */
    public mt.g x(mt.g gVar, y0 y0Var, boolean z10) {
        if (y0Var != null) {
            int e10 = z(gVar).e(this.f40447d);
            long i10 = (gVar.i() + y0Var.e(this.f40447d)) - e10;
            mt.k kVar = (mt.k) this.f40448e.apply(gVar);
            if (i10 >= kVar.d() && i10 <= kVar.a()) {
                return (mt.g) kVar.b(i10);
            }
            throw new IllegalArgumentException("New day out of supported range.");
        }
        throw new IllegalArgumentException("Missing weekday.");
    }
}
