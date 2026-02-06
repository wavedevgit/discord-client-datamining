package zs;

import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class k implements h, k0, n0, dt.c {

    /* renamed from: a  reason: collision with root package name */
    private final v f56537a;

    /* renamed from: b  reason: collision with root package name */
    private final w f56538b;

    /* renamed from: c  reason: collision with root package name */
    private final x f56539c;

    /* renamed from: d  reason: collision with root package name */
    private String f56540d;

    public k(v date, w time, x offset, String str) {
        Intrinsics.checkNotNullParameter(date, "date");
        Intrinsics.checkNotNullParameter(time, "time");
        Intrinsics.checkNotNullParameter(offset, "offset");
        this.f56537a = date;
        this.f56538b = time;
        this.f56539c = offset;
        this.f56540d = str;
    }

    @Override // zs.h
    public void A(Integer num) {
        this.f56537a.A(num);
    }

    @Override // zs.h
    public Integer B() {
        return this.f56537a.B();
    }

    @Override // zs.k0
    public void C(Integer num) {
        this.f56538b.C(num);
    }

    @Override // zs.h
    public void D(Integer num) {
        this.f56537a.D(num);
    }

    @Override // zs.k0
    public void E(g gVar) {
        this.f56538b.E(gVar);
    }

    @Override // dt.c
    /* renamed from: F */
    public k copy() {
        return new k(this.f56537a.copy(), this.f56538b.copy(), this.f56539c.copy(), this.f56540d);
    }

    public final v G() {
        return this.f56537a;
    }

    public final x H() {
        return this.f56539c;
    }

    public final w I() {
        return this.f56538b;
    }

    public final String J() {
        return this.f56540d;
    }

    public final void K(String str) {
        this.f56540d = str;
    }

    @Override // zs.k0
    public Integer a() {
        return this.f56538b.a();
    }

    @Override // zs.n0
    public Integer b() {
        return this.f56539c.b();
    }

    @Override // zs.k0
    public Integer c() {
        return this.f56538b.c();
    }

    @Override // zs.k0
    public Integer d() {
        return this.f56538b.d();
    }

    @Override // zs.k0
    public Integer e() {
        return this.f56538b.e();
    }

    public boolean equals(Object obj) {
        if (obj instanceof k) {
            k kVar = (k) obj;
            if (Intrinsics.areEqual(kVar.f56537a, this.f56537a) && Intrinsics.areEqual(kVar.f56538b, this.f56538b) && Intrinsics.areEqual(kVar.f56539c, this.f56539c) && Intrinsics.areEqual(kVar.f56540d, this.f56540d)) {
                return true;
            }
            return false;
        }
        return false;
    }

    @Override // zs.h
    public Integer f() {
        return this.f56537a.f();
    }

    @Override // zs.h
    public Integer g() {
        return this.f56537a.g();
    }

    @Override // zs.k0
    public Integer h() {
        return this.f56538b.h();
    }

    public int hashCode() {
        int i10;
        int hashCode = (this.f56537a.hashCode() ^ this.f56538b.hashCode()) ^ this.f56539c.hashCode();
        String str = this.f56540d;
        if (str != null) {
            i10 = str.hashCode();
        } else {
            i10 = 0;
        }
        return hashCode ^ i10;
    }

    @Override // zs.h
    public Integer i() {
        return this.f56537a.i();
    }

    @Override // zs.n0
    public Boolean isNegative() {
        return this.f56539c.isNegative();
    }

    @Override // zs.n0
    public Integer j() {
        return this.f56539c.j();
    }

    @Override // zs.n0
    public void k(Boolean bool) {
        this.f56539c.k(bool);
    }

    @Override // zs.n0
    public void l(Integer num) {
        this.f56539c.l(num);
    }

    @Override // zs.k0
    public void m(Integer num) {
        this.f56538b.m(num);
    }

    @Override // zs.h
    public void n(Integer num) {
        this.f56537a.n(num);
    }

    @Override // zs.n0
    public void o(Integer num) {
        this.f56539c.o(num);
    }

    @Override // zs.n0
    public void p(Integer num) {
        this.f56539c.p(num);
    }

    @Override // zs.k0
    public g q() {
        return this.f56538b.q();
    }

    @Override // zs.k0
    public void r(Integer num) {
        this.f56538b.r(num);
    }

    @Override // zs.k0
    public void s(Integer num) {
        this.f56538b.s(num);
    }

    @Override // zs.h
    public void t(Integer num) {
        this.f56537a.t(num);
    }

    @Override // zs.k0
    public void u(at.a aVar) {
        this.f56538b.u(aVar);
    }

    @Override // zs.n0
    public Integer v() {
        return this.f56539c.v();
    }

    @Override // zs.k0
    public void w(Integer num) {
        this.f56538b.w(num);
    }

    @Override // zs.h
    public void x(Integer num) {
        this.f56537a.x(num);
    }

    @Override // zs.k0
    public at.a y() {
        return this.f56538b.y();
    }

    @Override // zs.h
    public Integer z() {
        return this.f56537a.z();
    }

    public /* synthetic */ k(v vVar, w wVar, x xVar, String str, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this((i10 & 1) != 0 ? new v(null, null, null, null, null, 31, null) : vVar, (i10 & 2) != 0 ? new w(null, null, null, null, null, null, 63, null) : wVar, (i10 & 4) != 0 ? new x(null, null, null, null, 15, null) : xVar, (i10 & 8) != 0 ? null : str);
    }
}
