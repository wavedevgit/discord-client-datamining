package zs;

import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class x implements n0, dt.c {

    /* renamed from: a  reason: collision with root package name */
    private Boolean f56611a;

    /* renamed from: b  reason: collision with root package name */
    private Integer f56612b;

    /* renamed from: c  reason: collision with root package name */
    private Integer f56613c;

    /* renamed from: d  reason: collision with root package name */
    private Integer f56614d;

    public x(Boolean bool, Integer num, Integer num2, Integer num3) {
        this.f56611a = bool;
        this.f56612b = num;
        this.f56613c = num2;
        this.f56614d = num3;
    }

    @Override // dt.c
    /* renamed from: a */
    public x copy() {
        return new x(isNegative(), b(), j(), v());
    }

    @Override // zs.n0
    public Integer b() {
        return this.f56612b;
    }

    public final ys.k c() {
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
        Integer j10 = j();
        if (j10 != null) {
            num2 = Integer.valueOf(j10.intValue() * i10);
        } else {
            num2 = null;
        }
        Integer v10 = v();
        if (v10 != null) {
            num3 = Integer.valueOf(v10.intValue() * i10);
        }
        return ys.m.a(num, num2, num3);
    }

    public boolean equals(Object obj) {
        if (obj instanceof x) {
            x xVar = (x) obj;
            if (Intrinsics.areEqual(isNegative(), xVar.isNegative()) && Intrinsics.areEqual(b(), xVar.b()) && Intrinsics.areEqual(j(), xVar.j()) && Intrinsics.areEqual(v(), xVar.v())) {
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
        Integer j10 = j();
        if (j10 != null) {
            i12 = j10.hashCode();
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

    @Override // zs.n0
    public Boolean isNegative() {
        return this.f56611a;
    }

    @Override // zs.n0
    public Integer j() {
        return this.f56613c;
    }

    @Override // zs.n0
    public void k(Boolean bool) {
        this.f56611a = bool;
    }

    @Override // zs.n0
    public void l(Integer num) {
        this.f56613c = num;
    }

    @Override // zs.n0
    public void o(Integer num) {
        this.f56612b = num;
    }

    @Override // zs.n0
    public void p(Integer num) {
        this.f56614d = num;
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
        Integer j10 = j();
        if (j10 == null) {
            j10 = "??";
        }
        sb2.append(j10);
        sb2.append(':');
        Integer v10 = v();
        if (v10 != null) {
            obj = v10;
        }
        sb2.append(obj);
        return sb2.toString();
    }

    @Override // zs.n0
    public Integer v() {
        return this.f56614d;
    }

    public /* synthetic */ x(Boolean bool, Integer num, Integer num2, Integer num3, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this((i10 & 1) != 0 ? null : bool, (i10 & 2) != 0 ? null : num, (i10 & 4) != 0 ? null : num2, (i10 & 8) != 0 ? null : num3);
    }
}
