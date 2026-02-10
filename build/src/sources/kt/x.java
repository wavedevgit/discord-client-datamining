package kt;

import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class x implements n0, ot.c {

    /* renamed from: a  reason: collision with root package name */
    private Boolean f35321a;

    /* renamed from: b  reason: collision with root package name */
    private Integer f35322b;

    /* renamed from: c  reason: collision with root package name */
    private Integer f35323c;

    /* renamed from: d  reason: collision with root package name */
    private Integer f35324d;

    public x(Boolean bool, Integer num, Integer num2, Integer num3) {
        this.f35321a = bool;
        this.f35322b = num;
        this.f35323c = num2;
        this.f35324d = num3;
    }

    @Override // ot.c
    /* renamed from: a */
    public x copy() {
        return new x(isNegative(), b(), c(), w());
    }

    @Override // kt.n0
    public Integer b() {
        return this.f35322b;
    }

    @Override // kt.n0
    public Integer c() {
        return this.f35323c;
    }

    public final jt.k d() {
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
        Integer c10 = c();
        if (c10 != null) {
            num2 = Integer.valueOf(c10.intValue() * i10);
        } else {
            num2 = null;
        }
        Integer w10 = w();
        if (w10 != null) {
            num3 = Integer.valueOf(w10.intValue() * i10);
        }
        return jt.m.a(num, num2, num3);
    }

    public boolean equals(Object obj) {
        if (obj instanceof x) {
            x xVar = (x) obj;
            if (Intrinsics.areEqual(isNegative(), xVar.isNegative()) && Intrinsics.areEqual(b(), xVar.b()) && Intrinsics.areEqual(c(), xVar.c()) && Intrinsics.areEqual(w(), xVar.w())) {
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
        Integer c10 = c();
        if (c10 != null) {
            i12 = c10.hashCode();
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

    @Override // kt.n0
    public Boolean isNegative() {
        return this.f35321a;
    }

    @Override // kt.n0
    public void l(Boolean bool) {
        this.f35321a = bool;
    }

    @Override // kt.n0
    public void m(Integer num) {
        this.f35323c = num;
    }

    @Override // kt.n0
    public void p(Integer num) {
        this.f35322b = num;
    }

    @Override // kt.n0
    public void q(Integer num) {
        this.f35324d = num;
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
        Integer c10 = c();
        if (c10 == null) {
            c10 = "??";
        }
        sb2.append(c10);
        sb2.append(':');
        Integer w10 = w();
        if (w10 != null) {
            obj = w10;
        }
        sb2.append(obj);
        return sb2.toString();
    }

    @Override // kt.n0
    public Integer w() {
        return this.f35324d;
    }

    public /* synthetic */ x(Boolean bool, Integer num, Integer num2, Integer num3, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this((i10 & 1) != 0 ? null : bool, (i10 & 2) != 0 ? null : num, (i10 & 4) != 0 ? null : num2, (i10 & 8) != 0 ? null : num3);
    }
}
