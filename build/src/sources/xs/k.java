package xs;

import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class k implements h, k0, n0, bt.c {

    /* renamed from: a  reason: collision with root package name */
    private final v f54176a;

    /* renamed from: b  reason: collision with root package name */
    private final w f54177b;

    /* renamed from: c  reason: collision with root package name */
    private final x f54178c;

    /* renamed from: d  reason: collision with root package name */
    private String f54179d;

    public k(v date, w time, x offset, String str) {
        Intrinsics.checkNotNullParameter(date, "date");
        Intrinsics.checkNotNullParameter(time, "time");
        Intrinsics.checkNotNullParameter(offset, "offset");
        this.f54176a = date;
        this.f54177b = time;
        this.f54178c = offset;
        this.f54179d = str;
    }

    @Override // xs.h
    public void A(Integer num) {
        this.f54176a.A(num);
    }

    @Override // xs.h
    public Integer B() {
        return this.f54176a.B();
    }

    @Override // xs.k0
    public void C(Integer num) {
        this.f54177b.C(num);
    }

    @Override // xs.h
    public void D(Integer num) {
        this.f54176a.D(num);
    }

    @Override // xs.k0
    public void E(g gVar) {
        this.f54177b.E(gVar);
    }

    @Override // bt.c
    /* renamed from: F */
    public k copy() {
        return new k(this.f54176a.copy(), this.f54177b.copy(), this.f54178c.copy(), this.f54179d);
    }

    public final v G() {
        return this.f54176a;
    }

    public final x H() {
        return this.f54178c;
    }

    public final w I() {
        return this.f54177b;
    }

    public final String J() {
        return this.f54179d;
    }

    public final void K(String str) {
        this.f54179d = str;
    }

    @Override // xs.k0
    public Integer a() {
        return this.f54177b.a();
    }

    @Override // xs.n0
    public Integer b() {
        return this.f54178c.b();
    }

    @Override // xs.k0
    public Integer c() {
        return this.f54177b.c();
    }

    @Override // xs.k0
    public Integer d() {
        return this.f54177b.d();
    }

    @Override // xs.k0
    public Integer e() {
        return this.f54177b.e();
    }

    public boolean equals(Object obj) {
        if (obj instanceof k) {
            k kVar = (k) obj;
            if (Intrinsics.areEqual(kVar.f54176a, this.f54176a) && Intrinsics.areEqual(kVar.f54177b, this.f54177b) && Intrinsics.areEqual(kVar.f54178c, this.f54178c) && Intrinsics.areEqual(kVar.f54179d, this.f54179d)) {
                return true;
            }
            return false;
        }
        return false;
    }

    @Override // xs.h
    public Integer f() {
        return this.f54176a.f();
    }

    @Override // xs.h
    public Integer g() {
        return this.f54176a.g();
    }

    @Override // xs.k0
    public Integer h() {
        return this.f54177b.h();
    }

    public int hashCode() {
        int i10;
        int hashCode = (this.f54176a.hashCode() ^ this.f54177b.hashCode()) ^ this.f54178c.hashCode();
        String str = this.f54179d;
        if (str != null) {
            i10 = str.hashCode();
        } else {
            i10 = 0;
        }
        return hashCode ^ i10;
    }

    @Override // xs.h
    public Integer i() {
        return this.f54176a.i();
    }

    @Override // xs.n0
    public Boolean isNegative() {
        return this.f54178c.isNegative();
    }

    @Override // xs.n0
    public Integer j() {
        return this.f54178c.j();
    }

    @Override // xs.k0
    public void k(ys.a aVar) {
        this.f54177b.k(aVar);
    }

    @Override // xs.n0
    public void l(Boolean bool) {
        this.f54178c.l(bool);
    }

    @Override // xs.n0
    public void m(Integer num) {
        this.f54178c.m(num);
    }

    @Override // xs.k0
    public void n(Integer num) {
        this.f54177b.n(num);
    }

    @Override // xs.h
    public void o(Integer num) {
        this.f54176a.o(num);
    }

    @Override // xs.n0
    public void p(Integer num) {
        this.f54178c.p(num);
    }

    @Override // xs.n0
    public void q(Integer num) {
        this.f54178c.q(num);
    }

    @Override // xs.k0
    public g r() {
        return this.f54177b.r();
    }

    @Override // xs.k0
    public void s(Integer num) {
        this.f54177b.s(num);
    }

    @Override // xs.k0
    public void t(Integer num) {
        this.f54177b.t(num);
    }

    @Override // xs.h
    public void u(Integer num) {
        this.f54176a.u(num);
    }

    @Override // xs.n0
    public Integer v() {
        return this.f54178c.v();
    }

    @Override // xs.k0
    public void w(Integer num) {
        this.f54177b.w(num);
    }

    @Override // xs.h
    public void x(Integer num) {
        this.f54176a.x(num);
    }

    @Override // xs.k0
    public ys.a y() {
        return this.f54177b.y();
    }

    @Override // xs.h
    public Integer z() {
        return this.f54176a.z();
    }

    public /* synthetic */ k(v vVar, w wVar, x xVar, String str, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this((i10 & 1) != 0 ? new v(null, null, null, null, null, 31, null) : vVar, (i10 & 2) != 0 ? new w(null, null, null, null, null, null, 63, null) : wVar, (i10 & 4) != 0 ? new x(null, null, null, null, 15, null) : xVar, (i10 & 8) != 0 ? null : str);
    }
}
