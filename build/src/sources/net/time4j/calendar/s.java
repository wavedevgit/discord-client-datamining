package net.time4j.calendar;

import kt.t;
import kt.z;
import net.time4j.a1;
import net.time4j.y0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
class s implements z {

    /* renamed from: d  reason: collision with root package name */
    private final a1 f40408d;

    /* renamed from: e  reason: collision with root package name */
    private final t f40409e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public s(a1 a1Var, t tVar) {
        this.f40408d = a1Var;
        this.f40409e = tVar;
    }

    private static y0 j(long j10) {
        return y0.h(ht.c.d(j10 + 5, 7) + 1);
    }

    @Override // kt.z
    /* renamed from: b */
    public kt.p a(kt.g gVar) {
        return null;
    }

    @Override // kt.z
    /* renamed from: c */
    public kt.p g(kt.g gVar) {
        return null;
    }

    @Override // kt.z
    /* renamed from: d */
    public y0 h(kt.g gVar) {
        kt.k kVar = (kt.k) this.f40409e.apply(gVar);
        if ((gVar.i() + 7) - x(gVar).e(this.f40408d) > kVar.a()) {
            return j(kVar.a());
        }
        return this.f40408d.f().f(6);
    }

    @Override // kt.z
    /* renamed from: e */
    public y0 o(kt.g gVar) {
        kt.k kVar = (kt.k) this.f40409e.apply(gVar);
        if ((gVar.i() + 1) - x(gVar).e(this.f40408d) < kVar.d()) {
            return j(kVar.d());
        }
        return this.f40408d.f();
    }

    @Override // kt.z
    /* renamed from: f */
    public y0 x(kt.g gVar) {
        return j(gVar.i());
    }

    @Override // kt.z
    /* renamed from: k */
    public boolean l(kt.g gVar, y0 y0Var) {
        if (y0Var == null) {
            return false;
        }
        int e10 = x(gVar).e(this.f40408d);
        long i10 = (gVar.i() + y0Var.e(this.f40408d)) - e10;
        kt.k kVar = (kt.k) this.f40409e.apply(gVar);
        if (i10 < kVar.d() || i10 > kVar.a()) {
            return false;
        }
        return true;
    }

    @Override // kt.z
    /* renamed from: m */
    public kt.g v(kt.g gVar, y0 y0Var, boolean z10) {
        if (y0Var != null) {
            int e10 = x(gVar).e(this.f40408d);
            long i10 = (gVar.i() + y0Var.e(this.f40408d)) - e10;
            kt.k kVar = (kt.k) this.f40409e.apply(gVar);
            if (i10 >= kVar.d() && i10 <= kVar.a()) {
                return (kt.g) kVar.b(i10);
            }
            throw new IllegalArgumentException("New day out of supported range.");
        }
        throw new IllegalArgumentException("Missing weekday.");
    }
}
