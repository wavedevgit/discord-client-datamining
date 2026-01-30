package rs;

import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class v implements h, vs.c {

    /* renamed from: a  reason: collision with root package name */
    private Integer f48626a;

    /* renamed from: b  reason: collision with root package name */
    private Integer f48627b;

    /* renamed from: c  reason: collision with root package name */
    private Integer f48628c;

    /* renamed from: d  reason: collision with root package name */
    private Integer f48629d;

    /* renamed from: e  reason: collision with root package name */
    private Integer f48630e;

    public v(Integer num, Integer num2, Integer num3, Integer num4, Integer num5) {
        this.f48626a = num;
        this.f48627b = num2;
        this.f48628c = num3;
        this.f48629d = num4;
        this.f48630e = num5;
    }

    @Override // rs.h
    public Integer A() {
        return this.f48630e;
    }

    @Override // rs.h
    public void B(Integer num) {
        this.f48626a = num;
    }

    @Override // rs.h
    public Integer C() {
        return this.f48627b;
    }

    @Override // rs.h
    public void E(Integer num) {
        this.f48629d = num;
    }

    @Override // vs.c
    /* renamed from: a */
    public v copy() {
        return new v(f(), C(), g(), i(), A());
    }

    public final qs.f b() {
        qs.f fVar;
        int intValue;
        int intValue2 = ((Number) z.d(f(), "year")).intValue();
        Integer A = A();
        if (A == null) {
            fVar = new qs.f(intValue2, ((Number) z.d(C(), "monthNumber")).intValue(), ((Number) z.d(g(), "dayOfMonth")).intValue());
        } else {
            qs.f b10 = qs.g.b(new qs.f(intValue2, 1, 1), A.intValue() - 1, qs.c.Companion.a());
            if (b10.i() == intValue2) {
                if (C() != null) {
                    int g10 = b10.g();
                    Integer C = C();
                    if (C == null || g10 != C.intValue()) {
                        throw new qs.b("Can not create a LocalDate from the given input: the day of year is " + A + ", which is " + b10.f() + ", but " + C() + " was specified as the month number");
                    }
                }
                if (g() != null) {
                    int d10 = b10.d();
                    Integer g11 = g();
                    if (g11 == null || d10 != g11.intValue()) {
                        throw new qs.b("Can not create a LocalDate from the given input: the day of year is " + A + ", which is the day " + b10.d() + " of " + b10.f() + ", but " + g() + " was specified as the day of month");
                    }
                }
                fVar = b10;
            } else {
                throw new qs.b("Can not create a LocalDate from the given input: the day of year is " + A + ", which is not a valid day of year for the year " + intValue2);
            }
        }
        Integer i10 = i();
        if (i10 != null && (intValue = i10.intValue()) != qs.d.b(fVar.e())) {
            throw new qs.b("Can not create a LocalDate from the given input: the day of week is " + qs.d.a(intValue) + " but the date is " + fVar + ", which is a " + fVar.e());
        }
        return fVar;
    }

    public boolean equals(Object obj) {
        if (obj instanceof v) {
            v vVar = (v) obj;
            if (Intrinsics.areEqual(f(), vVar.f()) && Intrinsics.areEqual(C(), vVar.C()) && Intrinsics.areEqual(g(), vVar.g()) && Intrinsics.areEqual(i(), vVar.i()) && Intrinsics.areEqual(A(), vVar.A())) {
                return true;
            }
            return false;
        }
        return false;
    }

    @Override // rs.h
    public Integer f() {
        return this.f48626a;
    }

    @Override // rs.h
    public Integer g() {
        return this.f48628c;
    }

    public int hashCode() {
        int i10;
        int i11;
        int i12;
        int i13;
        Integer f10 = f();
        int i14 = 0;
        if (f10 != null) {
            i10 = f10.hashCode();
        } else {
            i10 = 0;
        }
        int i15 = i10 * 923521;
        Integer C = C();
        if (C != null) {
            i11 = C.hashCode();
        } else {
            i11 = 0;
        }
        int i16 = i15 + (i11 * 29791);
        Integer g10 = g();
        if (g10 != null) {
            i12 = g10.hashCode();
        } else {
            i12 = 0;
        }
        int i17 = i16 + (i12 * 961);
        Integer i18 = i();
        if (i18 != null) {
            i13 = i18.hashCode();
        } else {
            i13 = 0;
        }
        int i19 = i17 + (i13 * 31);
        Integer A = A();
        if (A != null) {
            i14 = A.hashCode();
        }
        return i19 + i14;
    }

    @Override // rs.h
    public Integer i() {
        return this.f48629d;
    }

    @Override // rs.h
    public void p(Integer num) {
        this.f48630e = num;
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder();
        Integer f10 = f();
        Object obj = "??";
        if (f10 == null) {
            f10 = "??";
        }
        sb2.append(f10);
        sb2.append('-');
        Integer C = C();
        if (C == null) {
            C = "??";
        }
        sb2.append(C);
        sb2.append('-');
        Integer g10 = g();
        if (g10 == null) {
            g10 = "??";
        }
        sb2.append(g10);
        sb2.append(" (day of week is ");
        Integer i10 = i();
        if (i10 != null) {
            obj = i10;
        }
        sb2.append(obj);
        sb2.append(')');
        return sb2.toString();
    }

    @Override // rs.h
    public void v(Integer num) {
        this.f48627b = num;
    }

    @Override // rs.h
    public void y(Integer num) {
        this.f48628c = num;
    }

    public /* synthetic */ v(Integer num, Integer num2, Integer num3, Integer num4, Integer num5, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this((i10 & 1) != 0 ? null : num, (i10 & 2) != 0 ? null : num2, (i10 & 4) != 0 ? null : num3, (i10 & 8) != 0 ? null : num4, (i10 & 16) != 0 ? null : num5);
    }
}
