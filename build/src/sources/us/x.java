package us;

import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class x implements n0, ys.c {

    /* renamed from: a  reason: collision with root package name */
    private Boolean f51014a;

    /* renamed from: b  reason: collision with root package name */
    private Integer f51015b;

    /* renamed from: c  reason: collision with root package name */
    private Integer f51016c;

    /* renamed from: d  reason: collision with root package name */
    private Integer f51017d;

    public x(Boolean bool, Integer num, Integer num2, Integer num3) {
        this.f51014a = bool;
        this.f51015b = num;
        this.f51016c = num2;
        this.f51017d = num3;
    }

    @Override // ys.c
    /* renamed from: a */
    public x copy() {
        return new x(isNegative(), b(), k(), w());
    }

    @Override // us.n0
    public Integer b() {
        return this.f51015b;
    }

    public final ts.k c() {
        int i10;
        Integer num;
        Integer num2;
        if (Intrinsics.areEqual(isNegative(), Boolean.TRUE)) {
            i10 = -1;
        } else {
            i10 = 1;
        }
        Integer b10 = b();
        Integer num3 = null;
        if (b10 != null) {
            num = Integer.valueOf(b10.intValue() * i10);
        } else {
            num = null;
        }
        Integer k10 = k();
        if (k10 != null) {
            num2 = Integer.valueOf(k10.intValue() * i10);
        } else {
            num2 = null;
        }
        Integer w10 = w();
        if (w10 != null) {
            num3 = Integer.valueOf(w10.intValue() * i10);
        }
        return ts.m.a(num, num2, num3);
    }

    public boolean equals(Object obj) {
        if (obj instanceof x) {
            x xVar = (x) obj;
            if (Intrinsics.areEqual(isNegative(), xVar.isNegative()) && Intrinsics.areEqual(b(), xVar.b()) && Intrinsics.areEqual(k(), xVar.k()) && Intrinsics.areEqual(w(), xVar.w())) {
                return true;
            }
            return false;
        }
        return false;
    }

    public int hashCode() {
        int i10;
        int i11;
        int i12;
        Boolean isNegative = isNegative();
        int i13 = 0;
        if (isNegative != null) {
            i10 = isNegative.hashCode();
        } else {
            i10 = 0;
        }
        Integer b10 = b();
        if (b10 != null) {
            i11 = b10.hashCode();
        } else {
            i11 = 0;
        }
        int i14 = i10 + i11;
        Integer k10 = k();
        if (k10 != null) {
            i12 = k10.hashCode();
        } else {
            i12 = 0;
        }
        int i15 = i14 + i12;
        Integer w10 = w();
        if (w10 != null) {
            i13 = w10.hashCode();
        }
        return i15 + i13;
    }

    @Override // us.n0
    public Boolean isNegative() {
        return this.f51014a;
    }

    @Override // us.n0
    public Integer k() {
        return this.f51016c;
    }

    @Override // us.n0
    public void l(Boolean bool) {
        this.f51014a = bool;
    }

    @Override // us.n0
    public void m(Integer num) {
        this.f51016c = num;
    }

    @Override // us.n0
    public void q(Integer num) {
        this.f51015b = num;
    }

    @Override // us.n0
    public void r(Integer num) {
        this.f51017d = num;
    }

    public String toString() {
        String str;
        StringBuilder sb2 = new StringBuilder();
        Boolean isNegative = isNegative();
        if (isNegative != null) {
            if (isNegative.booleanValue()) {
                str = "-";
            } else {
                str = "+";
            }
        } else {
            str = " ";
        }
        sb2.append(str);
        Integer b10 = b();
        Object obj = "??";
        if (b10 == null) {
            b10 = "??";
        }
        sb2.append(b10);
        sb2.append(':');
        Integer k10 = k();
        if (k10 == null) {
            k10 = "??";
        }
        sb2.append(k10);
        sb2.append(':');
        Integer w10 = w();
        if (w10 != null) {
            obj = w10;
        }
        sb2.append(obj);
        return sb2.toString();
    }

    @Override // us.n0
    public Integer w() {
        return this.f51017d;
    }

    public /* synthetic */ x(Boolean bool, Integer num, Integer num2, Integer num3, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this((i10 & 1) != 0 ? null : bool, (i10 & 2) != 0 ? null : num, (i10 & 4) != 0 ? null : num2, (i10 & 8) != 0 ? null : num3);
    }
}
