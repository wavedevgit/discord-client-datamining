package zs;

import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class k implements h, k0, n0, dt.c {

    /* renamed from: a  reason: collision with root package name */
    private final v f56585a;

    /* renamed from: b  reason: collision with root package name */
    private final w f56586b;

    /* renamed from: c  reason: collision with root package name */
    private final x f56587c;

    /* renamed from: d  reason: collision with root package name */
    private String f56588d;

    public k(v date, w time, x offset, String str) {
        Intrinsics.checkNotNullParameter(date, "date");
        Intrinsics.checkNotNullParameter(time, "time");
        Intrinsics.checkNotNullParameter(offset, "offset");
        this.f56585a = date;
        this.f56586b = time;
        this.f56587c = offset;
        this.f56588d = str;
    }

    @Override // zs.h
    public void A(Integer num) {
        this.f56585a.A(num);
    }

    @Override // zs.h
    public Integer B() {
        return this.f56585a.B();
    }

    @Override // zs.k0
    public void C(Integer num) {
        this.f56586b.C(num);
    }

    @Override // zs.h
    public void D(Integer num) {
        this.f56585a.D(num);
    }

    @Override // zs.k0
    public void E(g gVar) {
        this.f56586b.E(gVar);
    }

    @Override // dt.c
    /* renamed from: F */
    public k copy() {
        return new k(this.f56585a.copy(), this.f56586b.copy(), this.f56587c.copy(), this.f56588d);
    }

    public final v G() {
        return this.f56585a;
    }

    public final x H() {
        return this.f56587c;
    }

    public final w I() {
        return this.f56586b;
    }

    public final String J() {
        return this.f56588d;
    }

    public final void K(String str) {
        this.f56588d = str;
    }

    @Override // zs.k0
    public Integer a() {
        return this.f56586b.a();
    }

    @Override // zs.n0
    public Integer b() {
        return this.f56587c.b();
    }

    @Override // zs.k0
    public Integer c() {
        return this.f56586b.c();
    }

    @Override // zs.k0
    public Integer d() {
        return this.f56586b.d();
    }

    @Override // zs.k0
    public Integer e() {
        return this.f56586b.e();
    }

    public boolean equals(Object obj) {
        if (obj instanceof k) {
            k kVar = (k) obj;
            if (Intrinsics.areEqual(kVar.f56585a, this.f56585a) && Intrinsics.areEqual(kVar.f56586b, this.f56586b) && Intrinsics.areEqual(kVar.f56587c, this.f56587c) && Intrinsics.areEqual(kVar.f56588d, this.f56588d)) {
                return true;
            }
            return false;
        }
        return false;
    }

    @Override // zs.h
    public Integer f() {
        return this.f56585a.f();
    }

    @Override // zs.h
    public Integer g() {
        return this.f56585a.g();
    }

    @Override // zs.k0
    public Integer h() {
        return this.f56586b.h();
    }

    public int hashCode() {
        int i10;
        int hashCode = (this.f56585a.hashCode() ^ this.f56586b.hashCode()) ^ this.f56587c.hashCode();
        String str = this.f56588d;
        if (str != null) {
            i10 = str.hashCode();
        } else {
            i10 = 0;
        }
        return hashCode ^ i10;
    }

    @Override // zs.h
    public Integer i() {
        return this.f56585a.i();
    }

    @Override // zs.n0
    public Boolean isNegative() {
        return this.f56587c.isNegative();
    }

    @Override // zs.n0
    public Integer j() {
        return this.f56587c.j();
    }

    @Override // zs.n0
    public void k(Boolean bool) {
        this.f56587c.k(bool);
    }

    @Override // zs.n0
    public void l(Integer num) {
        this.f56587c.l(num);
    }

    @Override // zs.k0
    public void m(Integer num) {
        this.f56586b.m(num);
    }

    @Override // zs.h
    public void n(Integer num) {
        this.f56585a.n(num);
    }

    @Override // zs.n0
    public void o(Integer num) {
        this.f56587c.o(num);
    }

    @Override // zs.n0
    public void p(Integer num) {
        this.f56587c.p(num);
    }

    @Override // zs.k0
    public g q() {
        return this.f56586b.q();
    }

    @Override // zs.k0
    public void r(Integer num) {
        this.f56586b.r(num);
    }

    @Override // zs.k0
    public void s(Integer num) {
        this.f56586b.s(num);
    }

    @Override // zs.h
    public void t(Integer num) {
        this.f56585a.t(num);
    }

    @Override // zs.k0
    public void u(at.a aVar) {
        this.f56586b.u(aVar);
    }

    @Override // zs.n0
    public Integer v() {
        return this.f56587c.v();
    }

    @Override // zs.k0
    public void w(Integer num) {
        this.f56586b.w(num);
    }

    @Override // zs.h
    public void x(Integer num) {
        this.f56585a.x(num);
    }

    @Override // zs.k0
    public at.a y() {
        return this.f56586b.y();
    }

    @Override // zs.h
    public Integer z() {
        return this.f56585a.z();
    }

    public /* synthetic */ k(v vVar, w wVar, x xVar, String str, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this((i10 & 1) != 0 ? new v(null, null, null, null, null, 31, null) : vVar, (i10 & 2) != 0 ? new w(null, null, null, null, null, null, 63, null) : wVar, (i10 & 4) != 0 ? new x(null, null, null, null, 15, null) : xVar, (i10 & 8) != 0 ? null : str);
    }
}
