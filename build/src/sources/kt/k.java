package kt;

import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class k implements h, k0, n0, ot.c {

    /* renamed from: a  reason: collision with root package name */
    private final v f35816a;

    /* renamed from: b  reason: collision with root package name */
    private final w f35817b;

    /* renamed from: c  reason: collision with root package name */
    private final x f35818c;

    /* renamed from: d  reason: collision with root package name */
    private String f35819d;

    public k(v date, w time, x offset, String str) {
        Intrinsics.checkNotNullParameter(date, "date");
        Intrinsics.checkNotNullParameter(time, "time");
        Intrinsics.checkNotNullParameter(offset, "offset");
        this.f35816a = date;
        this.f35817b = time;
        this.f35818c = offset;
        this.f35819d = str;
    }

    @Override // kt.h
    public Integer A() {
        return this.f35816a.A();
    }

    @Override // kt.h
    public void B(Integer num) {
        this.f35816a.B(num);
    }

    @Override // kt.h
    public Integer C() {
        return this.f35816a.C();
    }

    @Override // kt.k0
    public void D(Integer num) {
        this.f35817b.D(num);
    }

    @Override // kt.h
    public void E(Integer num) {
        this.f35816a.E(num);
    }

    @Override // ot.c
    /* renamed from: F */
    public k copy() {
        return new k(this.f35816a.copy(), this.f35817b.copy(), this.f35818c.copy(), this.f35819d);
    }

    public final v G() {
        return this.f35816a;
    }

    public final x H() {
        return this.f35818c;
    }

    public final w I() {
        return this.f35817b;
    }

    public final String J() {
        return this.f35819d;
    }

    public final void K(String str) {
        this.f35819d = str;
    }

    @Override // kt.k0
    public Integer a() {
        return this.f35817b.a();
    }

    @Override // kt.n0
    public Integer b() {
        return this.f35818c.b();
    }

    @Override // kt.n0
    public Integer c() {
        return this.f35818c.c();
    }

    @Override // kt.k0
    public Integer d() {
        return this.f35817b.d();
    }

    @Override // kt.k0
    public Integer e() {
        return this.f35817b.e();
    }

    public boolean equals(Object obj) {
        if (obj instanceof k) {
            k kVar = (k) obj;
            if (Intrinsics.areEqual(kVar.f35816a, this.f35816a) && Intrinsics.areEqual(kVar.f35817b, this.f35817b) && Intrinsics.areEqual(kVar.f35818c, this.f35818c) && Intrinsics.areEqual(kVar.f35819d, this.f35819d)) {
                return true;
            }
            return false;
        }
        return false;
    }

    @Override // kt.h
    public Integer f() {
        return this.f35816a.f();
    }

    @Override // kt.h
    public Integer g() {
        return this.f35816a.g();
    }

    @Override // kt.k0
    public Integer h() {
        return this.f35817b.h();
    }

    public int hashCode() {
        int i10;
        int hashCode = (this.f35816a.hashCode() ^ this.f35817b.hashCode()) ^ this.f35818c.hashCode();
        String str = this.f35819d;
        if (str != null) {
            i10 = str.hashCode();
        } else {
            i10 = 0;
        }
        return hashCode ^ i10;
    }

    @Override // kt.k0
    public void i(g gVar) {
        this.f35817b.i(gVar);
    }

    @Override // kt.n0
    public Boolean isNegative() {
        return this.f35818c.isNegative();
    }

    @Override // kt.k0
    public Integer j() {
        return this.f35817b.j();
    }

    @Override // kt.h
    public Integer k() {
        return this.f35816a.k();
    }

    @Override // kt.n0
    public void l(Boolean bool) {
        this.f35818c.l(bool);
    }

    @Override // kt.n0
    public void m(Integer num) {
        this.f35818c.m(num);
    }

    @Override // kt.k0
    public void n(Integer num) {
        this.f35817b.n(num);
    }

    @Override // kt.h
    public void o(Integer num) {
        this.f35816a.o(num);
    }

    @Override // kt.n0
    public void p(Integer num) {
        this.f35818c.p(num);
    }

    @Override // kt.n0
    public void q(Integer num) {
        this.f35818c.q(num);
    }

    @Override // kt.k0
    public void r(lt.a aVar) {
        this.f35817b.r(aVar);
    }

    @Override // kt.k0
    public g s() {
        return this.f35817b.s();
    }

    @Override // kt.k0
    public void t(Integer num) {
        this.f35817b.t(num);
    }

    @Override // kt.k0
    public void u(Integer num) {
        this.f35817b.u(num);
    }

    @Override // kt.h
    public void v(Integer num) {
        this.f35816a.v(num);
    }

    @Override // kt.n0
    public Integer w() {
        return this.f35818c.w();
    }

    @Override // kt.k0
    public void x(Integer num) {
        this.f35817b.x(num);
    }

    @Override // kt.h
    public void y(Integer num) {
        this.f35816a.y(num);
    }

    @Override // kt.k0
    public lt.a z() {
        return this.f35817b.z();
    }

    public /* synthetic */ k(v vVar, w wVar, x xVar, String str, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this((i10 & 1) != 0 ? new v(null, null, null, null, null, 31, null) : vVar, (i10 & 2) != 0 ? new w(null, null, null, null, null, null, 63, null) : wVar, (i10 & 4) != 0 ? new x(null, null, null, null, 15, null) : xVar, (i10 & 8) != 0 ? null : str);
    }
}
