package at;

import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class k implements h, k0, n0, et.c {

    /* renamed from: a  reason: collision with root package name */
    private final v f6115a;

    /* renamed from: b  reason: collision with root package name */
    private final w f6116b;

    /* renamed from: c  reason: collision with root package name */
    private final x f6117c;

    /* renamed from: d  reason: collision with root package name */
    private String f6118d;

    public k(v date, w time, x offset, String str) {
        Intrinsics.checkNotNullParameter(date, "date");
        Intrinsics.checkNotNullParameter(time, "time");
        Intrinsics.checkNotNullParameter(offset, "offset");
        this.f6115a = date;
        this.f6116b = time;
        this.f6117c = offset;
        this.f6118d = str;
    }

    @Override // at.h
    public void A(Integer num) {
        this.f6115a.A(num);
    }

    @Override // at.h
    public Integer B() {
        return this.f6115a.B();
    }

    @Override // at.k0
    public void C(bt.a aVar) {
        this.f6116b.C(aVar);
    }

    @Override // at.k0
    public void D(Integer num) {
        this.f6116b.D(num);
    }

    @Override // at.h
    public void E(Integer num) {
        this.f6115a.E(num);
    }

    @Override // et.c
    /* renamed from: F */
    public k copy() {
        return new k(this.f6115a.copy(), this.f6116b.copy(), this.f6117c.copy(), this.f6118d);
    }

    public final v G() {
        return this.f6115a;
    }

    public final x H() {
        return this.f6117c;
    }

    public final w I() {
        return this.f6116b;
    }

    public final String J() {
        return this.f6118d;
    }

    public final void K(String str) {
        this.f6118d = str;
    }

    @Override // at.k0
    public Integer a() {
        return this.f6116b.a();
    }

    @Override // at.n0
    public Integer b() {
        return this.f6117c.b();
    }

    @Override // at.n0
    public Integer c() {
        return this.f6117c.c();
    }

    @Override // at.k0
    public Integer d() {
        return this.f6116b.d();
    }

    @Override // at.k0
    public Integer e() {
        return this.f6116b.e();
    }

    public boolean equals(Object obj) {
        if (obj instanceof k) {
            k kVar = (k) obj;
            if (Intrinsics.areEqual(kVar.f6115a, this.f6115a) && Intrinsics.areEqual(kVar.f6116b, this.f6116b) && Intrinsics.areEqual(kVar.f6117c, this.f6117c) && Intrinsics.areEqual(kVar.f6118d, this.f6118d)) {
                return true;
            }
            return false;
        }
        return false;
    }

    @Override // at.h
    public Integer f() {
        return this.f6115a.f();
    }

    @Override // at.h
    public Integer g() {
        return this.f6115a.g();
    }

    @Override // at.k0
    public Integer h() {
        return this.f6116b.h();
    }

    public int hashCode() {
        int i10;
        int hashCode = (this.f6115a.hashCode() ^ this.f6116b.hashCode()) ^ this.f6117c.hashCode();
        String str = this.f6118d;
        if (str != null) {
            i10 = str.hashCode();
        } else {
            i10 = 0;
        }
        return hashCode ^ i10;
    }

    @Override // at.k0
    public Integer i() {
        return this.f6116b.i();
    }

    @Override // at.n0
    public Boolean isNegative() {
        return this.f6117c.isNegative();
    }

    @Override // at.h
    public Integer j() {
        return this.f6115a.j();
    }

    @Override // at.n0
    public void k(Boolean bool) {
        this.f6117c.k(bool);
    }

    @Override // at.n0
    public void l(Integer num) {
        this.f6117c.l(num);
    }

    @Override // at.k0
    public void m(Integer num) {
        this.f6116b.m(num);
    }

    @Override // at.h
    public void n(Integer num) {
        this.f6115a.n(num);
    }

    @Override // at.n0
    public void o(Integer num) {
        this.f6117c.o(num);
    }

    @Override // at.n0
    public void p(Integer num) {
        this.f6117c.p(num);
    }

    @Override // at.k0
    public g q() {
        return this.f6116b.q();
    }

    @Override // at.k0
    public void r(g gVar) {
        this.f6116b.r(gVar);
    }

    @Override // at.k0
    public void s(Integer num) {
        this.f6116b.s(num);
    }

    @Override // at.k0
    public void t(Integer num) {
        this.f6116b.t(num);
    }

    @Override // at.h
    public void u(Integer num) {
        this.f6115a.u(num);
    }

    @Override // at.n0
    public Integer v() {
        return this.f6117c.v();
    }

    @Override // at.k0
    public void w(Integer num) {
        this.f6116b.w(num);
    }

    @Override // at.h
    public void x(Integer num) {
        this.f6115a.x(num);
    }

    @Override // at.k0
    public bt.a y() {
        return this.f6116b.y();
    }

    @Override // at.h
    public Integer z() {
        return this.f6115a.z();
    }

    public /* synthetic */ k(v vVar, w wVar, x xVar, String str, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this((i10 & 1) != 0 ? new v(null, null, null, null, null, 31, null) : vVar, (i10 & 2) != 0 ? new w(null, null, null, null, null, null, 63, null) : wVar, (i10 & 4) != 0 ? new x(null, null, null, null, 15, null) : xVar, (i10 & 8) != 0 ? null : str);
    }
}
