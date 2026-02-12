package kt;

import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class k implements h, k0, n0, ot.c {

    /* renamed from: a  reason: collision with root package name */
    private final v f35248a;

    /* renamed from: b  reason: collision with root package name */
    private final w f35249b;

    /* renamed from: c  reason: collision with root package name */
    private final x f35250c;

    /* renamed from: d  reason: collision with root package name */
    private String f35251d;

    public k(v date, w time, x offset, String str) {
        Intrinsics.checkNotNullParameter(date, "date");
        Intrinsics.checkNotNullParameter(time, "time");
        Intrinsics.checkNotNullParameter(offset, "offset");
        this.f35248a = date;
        this.f35249b = time;
        this.f35250c = offset;
        this.f35251d = str;
    }

    @Override // kt.h
    public Integer A() {
        return this.f35248a.A();
    }

    @Override // kt.h
    public void B(Integer num) {
        this.f35248a.B(num);
    }

    @Override // kt.h
    public Integer C() {
        return this.f35248a.C();
    }

    @Override // kt.k0
    public void D(Integer num) {
        this.f35249b.D(num);
    }

    @Override // kt.h
    public void E(Integer num) {
        this.f35248a.E(num);
    }

    @Override // ot.c
    /* renamed from: F */
    public k copy() {
        return new k(this.f35248a.copy(), this.f35249b.copy(), this.f35250c.copy(), this.f35251d);
    }

    public final v G() {
        return this.f35248a;
    }

    public final x H() {
        return this.f35250c;
    }

    public final w I() {
        return this.f35249b;
    }

    public final String J() {
        return this.f35251d;
    }

    public final void K(String str) {
        this.f35251d = str;
    }

    @Override // kt.k0
    public Integer a() {
        return this.f35249b.a();
    }

    @Override // kt.n0
    public Integer b() {
        return this.f35250c.b();
    }

    @Override // kt.n0
    public Integer c() {
        return this.f35250c.c();
    }

    @Override // kt.k0
    public Integer d() {
        return this.f35249b.d();
    }

    @Override // kt.k0
    public Integer e() {
        return this.f35249b.e();
    }

    public boolean equals(Object obj) {
        if (obj instanceof k) {
            k kVar = (k) obj;
            if (Intrinsics.areEqual(kVar.f35248a, this.f35248a) && Intrinsics.areEqual(kVar.f35249b, this.f35249b) && Intrinsics.areEqual(kVar.f35250c, this.f35250c) && Intrinsics.areEqual(kVar.f35251d, this.f35251d)) {
                return true;
            }
            return false;
        }
        return false;
    }

    @Override // kt.h
    public Integer f() {
        return this.f35248a.f();
    }

    @Override // kt.h
    public Integer g() {
        return this.f35248a.g();
    }

    @Override // kt.k0
    public Integer h() {
        return this.f35249b.h();
    }

    public int hashCode() {
        int i10;
        int hashCode = (this.f35248a.hashCode() ^ this.f35249b.hashCode()) ^ this.f35250c.hashCode();
        String str = this.f35251d;
        if (str != null) {
            i10 = str.hashCode();
        } else {
            i10 = 0;
        }
        return hashCode ^ i10;
    }

    @Override // kt.k0
    public void i(g gVar) {
        this.f35249b.i(gVar);
    }

    @Override // kt.n0
    public Boolean isNegative() {
        return this.f35250c.isNegative();
    }

    @Override // kt.k0
    public Integer j() {
        return this.f35249b.j();
    }

    @Override // kt.h
    public Integer k() {
        return this.f35248a.k();
    }

    @Override // kt.n0
    public void l(Boolean bool) {
        this.f35250c.l(bool);
    }

    @Override // kt.n0
    public void m(Integer num) {
        this.f35250c.m(num);
    }

    @Override // kt.k0
    public void n(Integer num) {
        this.f35249b.n(num);
    }

    @Override // kt.h
    public void o(Integer num) {
        this.f35248a.o(num);
    }

    @Override // kt.n0
    public void p(Integer num) {
        this.f35250c.p(num);
    }

    @Override // kt.n0
    public void q(Integer num) {
        this.f35250c.q(num);
    }

    @Override // kt.k0
    public void r(lt.a aVar) {
        this.f35249b.r(aVar);
    }

    @Override // kt.k0
    public g s() {
        return this.f35249b.s();
    }

    @Override // kt.k0
    public void t(Integer num) {
        this.f35249b.t(num);
    }

    @Override // kt.k0
    public void u(Integer num) {
        this.f35249b.u(num);
    }

    @Override // kt.h
    public void v(Integer num) {
        this.f35248a.v(num);
    }

    @Override // kt.n0
    public Integer w() {
        return this.f35250c.w();
    }

    @Override // kt.k0
    public void x(Integer num) {
        this.f35249b.x(num);
    }

    @Override // kt.h
    public void y(Integer num) {
        this.f35248a.y(num);
    }

    @Override // kt.k0
    public lt.a z() {
        return this.f35249b.z();
    }

    public /* synthetic */ k(v vVar, w wVar, x xVar, String str, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this((i10 & 1) != 0 ? new v(null, null, null, null, null, 31, null) : vVar, (i10 & 2) != 0 ? new w(null, null, null, null, null, null, 63, null) : wVar, (i10 & 4) != 0 ? new x(null, null, null, null, 15, null) : xVar, (i10 & 8) != 0 ? null : str);
    }
}
