package rs;

import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class k implements h, k0, n0, vs.c {

    /* renamed from: a  reason: collision with root package name */
    private final v f48563a;

    /* renamed from: b  reason: collision with root package name */
    private final w f48564b;

    /* renamed from: c  reason: collision with root package name */
    private final x f48565c;

    /* renamed from: d  reason: collision with root package name */
    private String f48566d;

    public k(v date, w time, x offset, String str) {
        Intrinsics.checkNotNullParameter(date, "date");
        Intrinsics.checkNotNullParameter(time, "time");
        Intrinsics.checkNotNullParameter(offset, "offset");
        this.f48563a = date;
        this.f48564b = time;
        this.f48565c = offset;
        this.f48566d = str;
    }

    @Override // rs.h
    public Integer A() {
        return this.f48563a.A();
    }

    @Override // rs.h
    public void B(Integer num) {
        this.f48563a.B(num);
    }

    @Override // rs.h
    public Integer C() {
        return this.f48563a.C();
    }

    @Override // rs.k0
    public void D(Integer num) {
        this.f48564b.D(num);
    }

    @Override // rs.h
    public void E(Integer num) {
        this.f48563a.E(num);
    }

    @Override // vs.c
    /* renamed from: F */
    public k copy() {
        return new k(this.f48563a.copy(), this.f48564b.copy(), this.f48565c.copy(), this.f48566d);
    }

    public final v G() {
        return this.f48563a;
    }

    public final x H() {
        return this.f48565c;
    }

    public final w I() {
        return this.f48564b;
    }

    public final String J() {
        return this.f48566d;
    }

    public final void K(String str) {
        this.f48566d = str;
    }

    @Override // rs.k0
    public Integer a() {
        return this.f48564b.a();
    }

    @Override // rs.n0
    public Integer b() {
        return this.f48565c.b();
    }

    @Override // rs.k0
    public Integer c() {
        return this.f48564b.c();
    }

    @Override // rs.k0
    public Integer d() {
        return this.f48564b.d();
    }

    @Override // rs.k0
    public Integer e() {
        return this.f48564b.e();
    }

    public boolean equals(Object obj) {
        if (obj instanceof k) {
            k kVar = (k) obj;
            if (Intrinsics.areEqual(kVar.f48563a, this.f48563a) && Intrinsics.areEqual(kVar.f48564b, this.f48564b) && Intrinsics.areEqual(kVar.f48565c, this.f48565c) && Intrinsics.areEqual(kVar.f48566d, this.f48566d)) {
                return true;
            }
            return false;
        }
        return false;
    }

    @Override // rs.h
    public Integer f() {
        return this.f48563a.f();
    }

    @Override // rs.h
    public Integer g() {
        return this.f48563a.g();
    }

    @Override // rs.k0
    public Integer h() {
        return this.f48564b.h();
    }

    public int hashCode() {
        int i10;
        int hashCode = (this.f48563a.hashCode() ^ this.f48564b.hashCode()) ^ this.f48565c.hashCode();
        String str = this.f48566d;
        if (str != null) {
            i10 = str.hashCode();
        } else {
            i10 = 0;
        }
        return hashCode ^ i10;
    }

    @Override // rs.h
    public Integer i() {
        return this.f48563a.i();
    }

    @Override // rs.n0
    public Boolean isNegative() {
        return this.f48565c.isNegative();
    }

    @Override // rs.k0
    public void j(ss.a aVar) {
        this.f48564b.j(aVar);
    }

    @Override // rs.n0
    public Integer k() {
        return this.f48565c.k();
    }

    @Override // rs.k0
    public void l(g gVar) {
        this.f48564b.l(gVar);
    }

    @Override // rs.n0
    public void m(Boolean bool) {
        this.f48565c.m(bool);
    }

    @Override // rs.n0
    public void n(Integer num) {
        this.f48565c.n(num);
    }

    @Override // rs.k0
    public void o(Integer num) {
        this.f48564b.o(num);
    }

    @Override // rs.h
    public void p(Integer num) {
        this.f48563a.p(num);
    }

    @Override // rs.n0
    public void q(Integer num) {
        this.f48565c.q(num);
    }

    @Override // rs.n0
    public void r(Integer num) {
        this.f48565c.r(num);
    }

    @Override // rs.k0
    public g s() {
        return this.f48564b.s();
    }

    @Override // rs.k0
    public void t(Integer num) {
        this.f48564b.t(num);
    }

    @Override // rs.k0
    public void u(Integer num) {
        this.f48564b.u(num);
    }

    @Override // rs.h
    public void v(Integer num) {
        this.f48563a.v(num);
    }

    @Override // rs.n0
    public Integer w() {
        return this.f48565c.w();
    }

    @Override // rs.k0
    public void x(Integer num) {
        this.f48564b.x(num);
    }

    @Override // rs.h
    public void y(Integer num) {
        this.f48563a.y(num);
    }

    @Override // rs.k0
    public ss.a z() {
        return this.f48564b.z();
    }

    public /* synthetic */ k(v vVar, w wVar, x xVar, String str, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this((i10 & 1) != 0 ? new v(null, null, null, null, null, 31, null) : vVar, (i10 & 2) != 0 ? new w(null, null, null, null, null, null, 63, null) : wVar, (i10 & 4) != 0 ? new x(null, null, null, null, 15, null) : xVar, (i10 & 8) != 0 ? null : str);
    }
}
