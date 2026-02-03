package ss;

import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class k implements h, k0, n0, ws.c {

    /* renamed from: a  reason: collision with root package name */
    private final v f49344a;

    /* renamed from: b  reason: collision with root package name */
    private final w f49345b;

    /* renamed from: c  reason: collision with root package name */
    private final x f49346c;

    /* renamed from: d  reason: collision with root package name */
    private String f49347d;

    public k(v date, w time, x offset, String str) {
        Intrinsics.checkNotNullParameter(date, "date");
        Intrinsics.checkNotNullParameter(time, "time");
        Intrinsics.checkNotNullParameter(offset, "offset");
        this.f49344a = date;
        this.f49345b = time;
        this.f49346c = offset;
        this.f49347d = str;
    }

    @Override // ss.h
    public Integer A() {
        return this.f49344a.A();
    }

    @Override // ss.h
    public void B(Integer num) {
        this.f49344a.B(num);
    }

    @Override // ss.h
    public Integer C() {
        return this.f49344a.C();
    }

    @Override // ss.k0
    public void D(Integer num) {
        this.f49345b.D(num);
    }

    @Override // ss.h
    public void E(Integer num) {
        this.f49344a.E(num);
    }

    @Override // ws.c
    /* renamed from: F */
    public k copy() {
        return new k(this.f49344a.copy(), this.f49345b.copy(), this.f49346c.copy(), this.f49347d);
    }

    public final v G() {
        return this.f49344a;
    }

    public final x H() {
        return this.f49346c;
    }

    public final w I() {
        return this.f49345b;
    }

    public final String J() {
        return this.f49347d;
    }

    public final void K(String str) {
        this.f49347d = str;
    }

    @Override // ss.k0
    public Integer a() {
        return this.f49345b.a();
    }

    @Override // ss.k0
    public void b(ts.a aVar) {
        this.f49345b.b(aVar);
    }

    @Override // ss.n0
    public Integer c() {
        return this.f49346c.c();
    }

    @Override // ss.k0
    public Integer d() {
        return this.f49345b.d();
    }

    @Override // ss.k0
    public Integer e() {
        return this.f49345b.e();
    }

    public boolean equals(Object obj) {
        if (obj instanceof k) {
            k kVar = (k) obj;
            if (Intrinsics.areEqual(kVar.f49344a, this.f49344a) && Intrinsics.areEqual(kVar.f49345b, this.f49345b) && Intrinsics.areEqual(kVar.f49346c, this.f49346c) && Intrinsics.areEqual(kVar.f49347d, this.f49347d)) {
                return true;
            }
            return false;
        }
        return false;
    }

    @Override // ss.h
    public Integer f() {
        return this.f49344a.f();
    }

    @Override // ss.h
    public Integer g() {
        return this.f49344a.g();
    }

    @Override // ss.k0
    public Integer h() {
        return this.f49345b.h();
    }

    public int hashCode() {
        int i10;
        int hashCode = (this.f49344a.hashCode() ^ this.f49345b.hashCode()) ^ this.f49346c.hashCode();
        String str = this.f49347d;
        if (str != null) {
            i10 = str.hashCode();
        } else {
            i10 = 0;
        }
        return hashCode ^ i10;
    }

    @Override // ss.k0
    public Integer i() {
        return this.f49345b.i();
    }

    @Override // ss.n0
    public Boolean isNegative() {
        return this.f49346c.isNegative();
    }

    @Override // ss.h
    public Integer j() {
        return this.f49344a.j();
    }

    @Override // ss.n0
    public Integer k() {
        return this.f49346c.k();
    }

    @Override // ss.n0
    public void l(Boolean bool) {
        this.f49346c.l(bool);
    }

    @Override // ss.n0
    public void m(Integer num) {
        this.f49346c.m(num);
    }

    @Override // ss.k0
    public void n(Integer num) {
        this.f49345b.n(num);
    }

    @Override // ss.h
    public void o(Integer num) {
        this.f49344a.o(num);
    }

    @Override // ss.n0
    public void p(Integer num) {
        this.f49346c.p(num);
    }

    @Override // ss.n0
    public void q(Integer num) {
        this.f49346c.q(num);
    }

    @Override // ss.k0
    public g r() {
        return this.f49345b.r();
    }

    @Override // ss.k0
    public void s(g gVar) {
        this.f49345b.s(gVar);
    }

    @Override // ss.k0
    public void t(Integer num) {
        this.f49345b.t(num);
    }

    @Override // ss.k0
    public void u(Integer num) {
        this.f49345b.u(num);
    }

    @Override // ss.h
    public void v(Integer num) {
        this.f49344a.v(num);
    }

    @Override // ss.n0
    public Integer w() {
        return this.f49346c.w();
    }

    @Override // ss.k0
    public void x(Integer num) {
        this.f49345b.x(num);
    }

    @Override // ss.h
    public void y(Integer num) {
        this.f49344a.y(num);
    }

    @Override // ss.k0
    public ts.a z() {
        return this.f49345b.z();
    }

    public /* synthetic */ k(v vVar, w wVar, x xVar, String str, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this((i10 & 1) != 0 ? new v(null, null, null, null, null, 31, null) : vVar, (i10 & 2) != 0 ? new w(null, null, null, null, null, null, 63, null) : wVar, (i10 & 4) != 0 ? new x(null, null, null, null, 15, null) : xVar, (i10 & 8) != 0 ? null : str);
    }
}
