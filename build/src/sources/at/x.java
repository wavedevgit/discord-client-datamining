package at;

import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class x implements n0, et.c {

    /* renamed from: a  reason: collision with root package name */
    private Boolean f6189a;

    /* renamed from: b  reason: collision with root package name */
    private Integer f6190b;

    /* renamed from: c  reason: collision with root package name */
    private Integer f6191c;

    /* renamed from: d  reason: collision with root package name */
    private Integer f6192d;

    public x(Boolean bool, Integer num, Integer num2, Integer num3) {
        this.f6189a = bool;
        this.f6190b = num;
        this.f6191c = num2;
        this.f6192d = num3;
    }

    @Override // et.c
    /* renamed from: a */
    public x copy() {
        return new x(isNegative(), b(), c(), v());
    }

    @Override // at.n0
    public Integer b() {
        return this.f6190b;
    }

    @Override // at.n0
    public Integer c() {
        return this.f6191c;
    }

    public final zs.k d() {
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
        Integer v10 = v();
        if (v10 != null) {
            num3 = Integer.valueOf(v10.intValue() * i10);
        }
        return zs.m.a(num, num2, num3);
    }

    public boolean equals(Object obj) {
        if (obj instanceof x) {
            x xVar = (x) obj;
            if (Intrinsics.areEqual(isNegative(), xVar.isNegative()) && Intrinsics.areEqual(b(), xVar.b()) && Intrinsics.areEqual(c(), xVar.c()) && Intrinsics.areEqual(v(), xVar.v())) {
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
        Integer v10 = v();
        if (v10 != null) {
            i13 = v10.hashCode();
        }
        return i15 + i13;
    }

    @Override // at.n0
    public Boolean isNegative() {
        return this.f6189a;
    }

    @Override // at.n0
    public void k(Boolean bool) {
        this.f6189a = bool;
    }

    @Override // at.n0
    public void l(Integer num) {
        this.f6191c = num;
    }

    @Override // at.n0
    public void o(Integer num) {
        this.f6190b = num;
    }

    @Override // at.n0
    public void p(Integer num) {
        this.f6192d = num;
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
        Integer v10 = v();
        if (v10 != null) {
            obj = v10;
        }
        sb2.append(obj);
        return sb2.toString();
    }

    @Override // at.n0
    public Integer v() {
        return this.f6192d;
    }

    public /* synthetic */ x(Boolean bool, Integer num, Integer num2, Integer num3, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this((i10 & 1) != 0 ? null : bool, (i10 & 2) != 0 ? null : num, (i10 & 4) != 0 ? null : num2, (i10 & 8) != 0 ? null : num3);
    }
}
