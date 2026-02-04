package us;

import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class k implements h, k0, n0, ys.c {

    /* renamed from: a  reason: collision with root package name */
    private final v f50937a;

    /* renamed from: b  reason: collision with root package name */
    private final w f50938b;

    /* renamed from: c  reason: collision with root package name */
    private final x f50939c;

    /* renamed from: d  reason: collision with root package name */
    private String f50940d;

    public k(v date, w time, x offset, String str) {
        Intrinsics.checkNotNullParameter(date, "date");
        Intrinsics.checkNotNullParameter(time, "time");
        Intrinsics.checkNotNullParameter(offset, "offset");
        this.f50937a = date;
        this.f50938b = time;
        this.f50939c = offset;
        this.f50940d = str;
    }

    @Override // us.h
    public Integer A() {
        return this.f50937a.A();
    }

    @Override // us.h
    public void B(Integer num) {
        this.f50937a.B(num);
    }

    @Override // us.h
    public Integer C() {
        return this.f50937a.C();
    }

    @Override // us.k0
    public void D(Integer num) {
        this.f50938b.D(num);
    }

    @Override // us.h
    public void E(Integer num) {
        this.f50937a.E(num);
    }

    @Override // ys.c
    /* renamed from: F */
    public k copy() {
        return new k(this.f50937a.copy(), this.f50938b.copy(), this.f50939c.copy(), this.f50940d);
    }

    public final v G() {
        return this.f50937a;
    }

    public final x H() {
        return this.f50939c;
    }

    public final w I() {
        return this.f50938b;
    }

    public final String J() {
        return this.f50940d;
    }

    public final void K(String str) {
        this.f50940d = str;
    }

    @Override // us.k0
    public Integer a() {
        return this.f50938b.a();
    }

    @Override // us.n0
    public Integer b() {
        return this.f50939c.b();
    }

    @Override // us.k0
    public void c(g gVar) {
        this.f50938b.c(gVar);
    }

    @Override // us.k0
    public Integer d() {
        return this.f50938b.d();
    }

    @Override // us.k0
    public Integer e() {
        return this.f50938b.e();
    }

    public boolean equals(Object obj) {
        if (obj instanceof k) {
            k kVar = (k) obj;
            if (Intrinsics.areEqual(kVar.f50937a, this.f50937a) && Intrinsics.areEqual(kVar.f50938b, this.f50938b) && Intrinsics.areEqual(kVar.f50939c, this.f50939c) && Intrinsics.areEqual(kVar.f50940d, this.f50940d)) {
                return true;
            }
            return false;
        }
        return false;
    }

    @Override // us.h
    public Integer f() {
        return this.f50937a.f();
    }

    @Override // us.h
    public Integer g() {
        return this.f50937a.g();
    }

    @Override // us.k0
    public Integer h() {
        return this.f50938b.h();
    }

    public int hashCode() {
        int i10;
        int hashCode = (this.f50937a.hashCode() ^ this.f50938b.hashCode()) ^ this.f50939c.hashCode();
        String str = this.f50940d;
        if (str != null) {
            i10 = str.hashCode();
        } else {
            i10 = 0;
        }
        return hashCode ^ i10;
    }

    @Override // us.k0
    public Integer i() {
        return this.f50938b.i();
    }

    @Override // us.n0
    public Boolean isNegative() {
        return this.f50939c.isNegative();
    }

    @Override // us.h
    public Integer j() {
        return this.f50937a.j();
    }

    @Override // us.n0
    public Integer k() {
        return this.f50939c.k();
    }

    @Override // us.n0
    public void l(Boolean bool) {
        this.f50939c.l(bool);
    }

    @Override // us.n0
    public void m(Integer num) {
        this.f50939c.m(num);
    }

    @Override // us.k0
    public void n(Integer num) {
        this.f50938b.n(num);
    }

    @Override // us.h
    public void o(Integer num) {
        this.f50937a.o(num);
    }

    @Override // us.k0
    public void p(vs.a aVar) {
        this.f50938b.p(aVar);
    }

    @Override // us.n0
    public void q(Integer num) {
        this.f50939c.q(num);
    }

    @Override // us.n0
    public void r(Integer num) {
        this.f50939c.r(num);
    }

    @Override // us.k0
    public g s() {
        return this.f50938b.s();
    }

    @Override // us.k0
    public void t(Integer num) {
        this.f50938b.t(num);
    }

    @Override // us.k0
    public void u(Integer num) {
        this.f50938b.u(num);
    }

    @Override // us.h
    public void v(Integer num) {
        this.f50937a.v(num);
    }

    @Override // us.n0
    public Integer w() {
        return this.f50939c.w();
    }

    @Override // us.k0
    public void x(Integer num) {
        this.f50938b.x(num);
    }

    @Override // us.h
    public void y(Integer num) {
        this.f50937a.y(num);
    }

    @Override // us.k0
    public vs.a z() {
        return this.f50938b.z();
    }

    public /* synthetic */ k(v vVar, w wVar, x xVar, String str, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this((i10 & 1) != 0 ? new v(null, null, null, null, null, 31, null) : vVar, (i10 & 2) != 0 ? new w(null, null, null, null, null, null, 63, null) : wVar, (i10 & 4) != 0 ? new x(null, null, null, null, 15, null) : xVar, (i10 & 8) != 0 ? null : str);
    }
}
