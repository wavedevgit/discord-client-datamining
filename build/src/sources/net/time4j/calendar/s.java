package net.time4j.calendar;

import net.time4j.a1;
import net.time4j.y0;
import rt.t;
import rt.z;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
class s implements z {

    /* renamed from: d  reason: collision with root package name */
    private final a1 f39310d;

    /* renamed from: e  reason: collision with root package name */
    private final t f39311e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public s(a1 a1Var, t tVar) {
        this.f39310d = a1Var;
        this.f39311e = tVar;
    }

    private static y0 h(long j10) {
        return y0.h(pt.c.d(j10 + 5, 7) + 1);
    }

    @Override // rt.z
    /* renamed from: b */
    public rt.p a(rt.g gVar) {
        return null;
    }

    @Override // rt.z
    /* renamed from: c */
    public rt.p g(rt.g gVar) {
        return null;
    }

    @Override // rt.z
    /* renamed from: d */
    public y0 k(rt.g gVar) {
        rt.k kVar = (rt.k) this.f39311e.apply(gVar);
        if ((gVar.i() + 7) - y(gVar).e(this.f39310d) > kVar.a()) {
            return h(kVar.a());
        }
        return this.f39310d.f().f(6);
    }

    @Override // rt.z
    /* renamed from: e */
    public y0 o(rt.g gVar) {
        rt.k kVar = (rt.k) this.f39311e.apply(gVar);
        if ((gVar.i() + 1) - y(gVar).e(this.f39310d) < kVar.d()) {
            return h(kVar.d());
        }
        return this.f39310d.f();
    }

    @Override // rt.z
    /* renamed from: f */
    public y0 y(rt.g gVar) {
        return h(gVar.i());
    }

    @Override // rt.z
    /* renamed from: i */
    public boolean n(rt.g gVar, y0 y0Var) {
        if (y0Var == null) {
            return false;
        }
        int e10 = y(gVar).e(this.f39310d);
        long i10 = (gVar.i() + y0Var.e(this.f39310d)) - e10;
        rt.k kVar = (rt.k) this.f39311e.apply(gVar);
        if (i10 < kVar.d() || i10 > kVar.a()) {
            return false;
        }
        return true;
    }

    @Override // rt.z
    /* renamed from: j */
    public rt.g u(rt.g gVar, y0 y0Var, boolean z10) {
        if (y0Var != null) {
            int e10 = y(gVar).e(this.f39310d);
            long i10 = (gVar.i() + y0Var.e(this.f39310d)) - e10;
            rt.k kVar = (rt.k) this.f39311e.apply(gVar);
            if (i10 >= kVar.d() && i10 <= kVar.a()) {
                return (rt.g) kVar.b(i10);
            }
            throw new IllegalArgumentException("New day out of supported range.");
        }
        throw new IllegalArgumentException("Missing weekday.");
    }
}
