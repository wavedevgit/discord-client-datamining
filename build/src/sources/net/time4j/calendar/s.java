package net.time4j.calendar;

import jt.t;
import jt.z;
import net.time4j.a1;
import net.time4j.y0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
class s implements z {

    /* renamed from: d  reason: collision with root package name */
    private final a1 f40529d;

    /* renamed from: e  reason: collision with root package name */
    private final t f40530e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public s(a1 a1Var, t tVar) {
        this.f40529d = a1Var;
        this.f40530e = tVar;
    }

    private static y0 g(long j10) {
        return y0.h(gt.c.d(j10 + 5, 7) + 1);
    }

    @Override // jt.z
    /* renamed from: b */
    public jt.p a(jt.g gVar) {
        return null;
    }

    @Override // jt.z
    /* renamed from: c */
    public jt.p h(jt.g gVar) {
        return null;
    }

    @Override // jt.z
    /* renamed from: d */
    public y0 j(jt.g gVar) {
        jt.k kVar = (jt.k) this.f40530e.apply(gVar);
        if ((gVar.j() + 7) - x(gVar).e(this.f40529d) > kVar.a()) {
            return g(kVar.a());
        }
        return this.f40529d.f().f(6);
    }

    @Override // jt.z
    /* renamed from: e */
    public y0 p(jt.g gVar) {
        jt.k kVar = (jt.k) this.f40530e.apply(gVar);
        if ((gVar.j() + 1) - x(gVar).e(this.f40529d) < kVar.d()) {
            return g(kVar.d());
        }
        return this.f40529d.f();
    }

    @Override // jt.z
    /* renamed from: f */
    public y0 x(jt.g gVar) {
        return g(gVar.j());
    }

    @Override // jt.z
    /* renamed from: i */
    public boolean l(jt.g gVar, y0 y0Var) {
        if (y0Var == null) {
            return false;
        }
        int e10 = x(gVar).e(this.f40529d);
        long j10 = (gVar.j() + y0Var.e(this.f40529d)) - e10;
        jt.k kVar = (jt.k) this.f40530e.apply(gVar);
        if (j10 < kVar.d() || j10 > kVar.a()) {
            return false;
        }
        return true;
    }

    @Override // jt.z
    /* renamed from: m */
    public jt.g w(jt.g gVar, y0 y0Var, boolean z10) {
        if (y0Var != null) {
            int e10 = x(gVar).e(this.f40529d);
            long j10 = (gVar.j() + y0Var.e(this.f40529d)) - e10;
            jt.k kVar = (jt.k) this.f40530e.apply(gVar);
            if (j10 >= kVar.d() && j10 <= kVar.a()) {
                return (jt.g) kVar.b(j10);
            }
            throw new IllegalArgumentException("New day out of supported range.");
        }
        throw new IllegalArgumentException("Missing weekday.");
    }
}
