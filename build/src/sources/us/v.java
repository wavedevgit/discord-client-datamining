package us;

import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class v implements h, ys.c {

    /* renamed from: a  reason: collision with root package name */
    private Integer f51003a;

    /* renamed from: b  reason: collision with root package name */
    private Integer f51004b;

    /* renamed from: c  reason: collision with root package name */
    private Integer f51005c;

    /* renamed from: d  reason: collision with root package name */
    private Integer f51006d;

    /* renamed from: e  reason: collision with root package name */
    private Integer f51007e;

    public v(Integer num, Integer num2, Integer num3, Integer num4, Integer num5) {
        this.f51003a = num;
        this.f51004b = num2;
        this.f51005c = num3;
        this.f51006d = num4;
        this.f51007e = num5;
    }

    @Override // us.h
    public Integer A() {
        return this.f51007e;
    }

    @Override // us.h
    public void B(Integer num) {
        this.f51003a = num;
    }

    @Override // us.h
    public Integer C() {
        return this.f51004b;
    }

    @Override // us.h
    public void E(Integer num) {
        this.f51006d = num;
    }

    @Override // ys.c
    /* renamed from: a */
    public v copy() {
        return new v(f(), C(), g(), j(), A());
    }

    public final ts.f b() {
        ts.f fVar;
        int intValue;
        int intValue2 = ((Number) z.d(f(), "year")).intValue();
        Integer A = A();
        if (A == null) {
            fVar = new ts.f(intValue2, ((Number) z.d(C(), "monthNumber")).intValue(), ((Number) z.d(g(), "dayOfMonth")).intValue());
        } else {
            ts.f b10 = ts.g.b(new ts.f(intValue2, 1, 1), A.intValue() - 1, ts.c.Companion.a());
            if (b10.i() == intValue2) {
                if (C() != null) {
                    int g10 = b10.g();
                    Integer C = C();
                    if (C == null || g10 != C.intValue()) {
                        throw new ts.b("Can not create a LocalDate from the given input: the day of year is " + A + ", which is " + b10.f() + ", but " + C() + " was specified as the month number");
                    }
                }
                if (g() != null) {
                    int d10 = b10.d();
                    Integer g11 = g();
                    if (g11 == null || d10 != g11.intValue()) {
                        throw new ts.b("Can not create a LocalDate from the given input: the day of year is " + A + ", which is the day " + b10.d() + " of " + b10.f() + ", but " + g() + " was specified as the day of month");
                    }
                }
                fVar = b10;
            } else {
                throw new ts.b("Can not create a LocalDate from the given input: the day of year is " + A + ", which is not a valid day of year for the year " + intValue2);
            }
        }
        Integer j10 = j();
        if (j10 != null && (intValue = j10.intValue()) != ts.d.b(fVar.e())) {
            throw new ts.b("Can not create a LocalDate from the given input: the day of week is " + ts.d.a(intValue) + " but the date is " + fVar + ", which is a " + fVar.e());
        }
        return fVar;
    }

    public boolean equals(Object obj) {
        if (obj instanceof v) {
            v vVar = (v) obj;
            if (Intrinsics.areEqual(f(), vVar.f()) && Intrinsics.areEqual(C(), vVar.C()) && Intrinsics.areEqual(g(), vVar.g()) && Intrinsics.areEqual(j(), vVar.j()) && Intrinsics.areEqual(A(), vVar.A())) {
                return true;
            }
            return false;
        }
        return false;
    }

    @Override // us.h
    public Integer f() {
        return this.f51003a;
    }

    @Override // us.h
    public Integer g() {
        return this.f51005c;
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
        Integer j10 = j();
        if (j10 != null) {
            i13 = j10.hashCode();
        } else {
            i13 = 0;
        }
        int i18 = i17 + (i13 * 31);
        Integer A = A();
        if (A != null) {
            i14 = A.hashCode();
        }
        return i18 + i14;
    }

    @Override // us.h
    public Integer j() {
        return this.f51006d;
    }

    @Override // us.h
    public void o(Integer num) {
        this.f51007e = num;
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
        Integer j10 = j();
        if (j10 != null) {
            obj = j10;
        }
        sb2.append(obj);
        sb2.append(')');
        return sb2.toString();
    }

    @Override // us.h
    public void v(Integer num) {
        this.f51004b = num;
    }

    @Override // us.h
    public void y(Integer num) {
        this.f51005c = num;
    }

    public /* synthetic */ v(Integer num, Integer num2, Integer num3, Integer num4, Integer num5, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this((i10 & 1) != 0 ? null : num, (i10 & 2) != 0 ? null : num2, (i10 & 4) != 0 ? null : num3, (i10 & 8) != 0 ? null : num4, (i10 & 16) != 0 ? null : num5);
    }
}
