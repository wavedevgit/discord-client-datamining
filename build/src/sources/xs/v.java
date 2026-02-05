package xs;

import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class v implements h, bt.c {

    /* renamed from: a  reason: collision with root package name */
    private Integer f54239a;

    /* renamed from: b  reason: collision with root package name */
    private Integer f54240b;

    /* renamed from: c  reason: collision with root package name */
    private Integer f54241c;

    /* renamed from: d  reason: collision with root package name */
    private Integer f54242d;

    /* renamed from: e  reason: collision with root package name */
    private Integer f54243e;

    public v(Integer num, Integer num2, Integer num3, Integer num4, Integer num5) {
        this.f54239a = num;
        this.f54240b = num2;
        this.f54241c = num3;
        this.f54242d = num4;
        this.f54243e = num5;
    }

    @Override // xs.h
    public void A(Integer num) {
        this.f54239a = num;
    }

    @Override // xs.h
    public Integer B() {
        return this.f54240b;
    }

    @Override // xs.h
    public void D(Integer num) {
        this.f54242d = num;
    }

    @Override // bt.c
    /* renamed from: a */
    public v copy() {
        return new v(f(), B(), g(), i(), z());
    }

    public final ws.f b() {
        ws.f fVar;
        int intValue;
        int intValue2 = ((Number) z.d(f(), "year")).intValue();
        Integer z10 = z();
        if (z10 == null) {
            fVar = new ws.f(intValue2, ((Number) z.d(B(), "monthNumber")).intValue(), ((Number) z.d(g(), "dayOfMonth")).intValue());
        } else {
            ws.f b10 = ws.g.b(new ws.f(intValue2, 1, 1), z10.intValue() - 1, ws.c.Companion.a());
            if (b10.i() == intValue2) {
                if (B() != null) {
                    int g10 = b10.g();
                    Integer B = B();
                    if (B == null || g10 != B.intValue()) {
                        throw new ws.b("Can not create a LocalDate from the given input: the day of year is " + z10 + ", which is " + b10.f() + ", but " + B() + " was specified as the month number");
                    }
                }
                if (g() != null) {
                    int d10 = b10.d();
                    Integer g11 = g();
                    if (g11 == null || d10 != g11.intValue()) {
                        throw new ws.b("Can not create a LocalDate from the given input: the day of year is " + z10 + ", which is the day " + b10.d() + " of " + b10.f() + ", but " + g() + " was specified as the day of month");
                    }
                }
                fVar = b10;
            } else {
                throw new ws.b("Can not create a LocalDate from the given input: the day of year is " + z10 + ", which is not a valid day of year for the year " + intValue2);
            }
        }
        Integer i10 = i();
        if (i10 != null && (intValue = i10.intValue()) != ws.d.b(fVar.e())) {
            throw new ws.b("Can not create a LocalDate from the given input: the day of week is " + ws.d.a(intValue) + " but the date is " + fVar + ", which is a " + fVar.e());
        }
        return fVar;
    }

    public boolean equals(Object obj) {
        if (obj instanceof v) {
            v vVar = (v) obj;
            if (Intrinsics.areEqual(f(), vVar.f()) && Intrinsics.areEqual(B(), vVar.B()) && Intrinsics.areEqual(g(), vVar.g()) && Intrinsics.areEqual(i(), vVar.i()) && Intrinsics.areEqual(z(), vVar.z())) {
                return true;
            }
            return false;
        }
        return false;
    }

    @Override // xs.h
    public Integer f() {
        return this.f54239a;
    }

    @Override // xs.h
    public Integer g() {
        return this.f54241c;
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
        Integer B = B();
        if (B != null) {
            i11 = B.hashCode();
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
        Integer z10 = z();
        if (z10 != null) {
            i14 = z10.hashCode();
        }
        return i19 + i14;
    }

    @Override // xs.h
    public Integer i() {
        return this.f54242d;
    }

    @Override // xs.h
    public void o(Integer num) {
        this.f54243e = num;
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
        Integer B = B();
        if (B == null) {
            B = "??";
        }
        sb2.append(B);
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

    @Override // xs.h
    public void u(Integer num) {
        this.f54240b = num;
    }

    @Override // xs.h
    public void x(Integer num) {
        this.f54241c = num;
    }

    @Override // xs.h
    public Integer z() {
        return this.f54243e;
    }

    public /* synthetic */ v(Integer num, Integer num2, Integer num3, Integer num4, Integer num5, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this((i10 & 1) != 0 ? null : num, (i10 & 2) != 0 ? null : num2, (i10 & 4) != 0 ? null : num3, (i10 & 8) != 0 ? null : num4, (i10 & 16) != 0 ? null : num5);
    }
}
