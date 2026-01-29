package rs;

import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class k implements h, k0, n0, vs.c {

    /* renamed from: a  reason: collision with root package name */
    private final v f48547a;

    /* renamed from: b  reason: collision with root package name */
    private final w f48548b;

    /* renamed from: c  reason: collision with root package name */
    private final x f48549c;

    /* renamed from: d  reason: collision with root package name */
    private String f48550d;

    public k(v date, w time, x offset, String str) {
        Intrinsics.checkNotNullParameter(date, "date");
        Intrinsics.checkNotNullParameter(time, "time");
        Intrinsics.checkNotNullParameter(offset, "offset");
        this.f48547a = date;
        this.f48548b = time;
        this.f48549c = offset;
        this.f48550d = str;
    }

    @Override // rs.h
    public Integer A() {
        return this.f48547a.A();
    }

    @Override // rs.h
    public void B(Integer num) {
        this.f48547a.B(num);
    }

    @Override // rs.h
    public Integer C() {
        return this.f48547a.C();
    }

    @Override // rs.k0
    public void D(Integer num) {
        this.f48548b.D(num);
    }

    @Override // rs.h
    public void E(Integer num) {
        this.f48547a.E(num);
    }

    @Override // vs.c
    /* renamed from: F */
    public k copy() {
        return new k(this.f48547a.copy(), this.f48548b.copy(), this.f48549c.copy(), this.f48550d);
    }

    public final v G() {
        return this.f48547a;
    }

    public final x H() {
        return this.f48549c;
    }

    public final w I() {
        return this.f48548b;
    }

    public final String J() {
        return this.f48550d;
    }

    public final void K(String str) {
        this.f48550d = str;
    }

    @Override // rs.k0
    public Integer a() {
        return this.f48548b.a();
    }

    @Override // rs.n0
    public Integer b() {
        return this.f48549c.b();
    }

    @Override // rs.k0
    public Integer c() {
        return this.f48548b.c();
    }

    @Override // rs.k0
    public Integer d() {
        return this.f48548b.d();
    }

    @Override // rs.k0
    public Integer e() {
        return this.f48548b.e();
    }

    public boolean equals(Object obj) {
        if (obj instanceof k) {
            k kVar = (k) obj;
            if (Intrinsics.areEqual(kVar.f48547a, this.f48547a) && Intrinsics.areEqual(kVar.f48548b, this.f48548b) && Intrinsics.areEqual(kVar.f48549c, this.f48549c) && Intrinsics.areEqual(kVar.f48550d, this.f48550d)) {
                return true;
            }
            return false;
        }
        return false;
    }

    @Override // rs.h
    public Integer f() {
        return this.f48547a.f();
    }

    @Override // rs.h
    public Integer g() {
        return this.f48547a.g();
    }

    @Override // rs.k0
    public Integer h() {
        return this.f48548b.h();
    }

    public int hashCode() {
        int i10;
        int hashCode = (this.f48547a.hashCode() ^ this.f48548b.hashCode()) ^ this.f48549c.hashCode();
        String str = this.f48550d;
        if (str != null) {
            i10 = str.hashCode();
        } else {
            i10 = 0;
        }
        return hashCode ^ i10;
    }

    @Override // rs.h
    public Integer i() {
        return this.f48547a.i();
    }

    @Override // rs.n0
    public Boolean isNegative() {
        return this.f48549c.isNegative();
    }

    @Override // rs.k0
    public void j(ss.a aVar) {
        this.f48548b.j(aVar);
    }

    @Override // rs.n0
    public Integer k() {
        return this.f48549c.k();
    }

    @Override // rs.k0
    public void l(g gVar) {
        this.f48548b.l(gVar);
    }

    @Override // rs.n0
    public void m(Boolean bool) {
        this.f48549c.m(bool);
    }

    @Override // rs.n0
    public void n(Integer num) {
        this.f48549c.n(num);
    }

    @Override // rs.k0
    public void o(Integer num) {
        this.f48548b.o(num);
    }

    @Override // rs.h
    public void p(Integer num) {
        this.f48547a.p(num);
    }

    @Override // rs.n0
    public void q(Integer num) {
        this.f48549c.q(num);
    }

    @Override // rs.n0
    public void r(Integer num) {
        this.f48549c.r(num);
    }

    @Override // rs.k0
    public g s() {
        return this.f48548b.s();
    }

    @Override // rs.k0
    public void t(Integer num) {
        this.f48548b.t(num);
    }

    @Override // rs.k0
    public void u(Integer num) {
        this.f48548b.u(num);
    }

    @Override // rs.h
    public void v(Integer num) {
        this.f48547a.v(num);
    }

    @Override // rs.n0
    public Integer w() {
        return this.f48549c.w();
    }

    @Override // rs.k0
    public void x(Integer num) {
        this.f48548b.x(num);
    }

    @Override // rs.h
    public void y(Integer num) {
        this.f48547a.y(num);
    }

    @Override // rs.k0
    public ss.a z() {
        return this.f48548b.z();
    }

    public /* synthetic */ k(v vVar, w wVar, x xVar, String str, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this((i10 & 1) != 0 ? new v(null, null, null, null, null, 31, null) : vVar, (i10 & 2) != 0 ? new w(null, null, null, null, null, null, 63, null) : wVar, (i10 & 4) != 0 ? new x(null, null, null, null, 15, null) : xVar, (i10 & 8) != 0 ? null : str);
    }
}
