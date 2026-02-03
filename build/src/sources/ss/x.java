package ss;

import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class x implements n0, ws.c {

    /* renamed from: a  reason: collision with root package name */
    private Boolean f49418a;

    /* renamed from: b  reason: collision with root package name */
    private Integer f49419b;

    /* renamed from: c  reason: collision with root package name */
    private Integer f49420c;

    /* renamed from: d  reason: collision with root package name */
    private Integer f49421d;

    public x(Boolean bool, Integer num, Integer num2, Integer num3) {
        this.f49418a = bool;
        this.f49419b = num;
        this.f49420c = num2;
        this.f49421d = num3;
    }

    @Override // ws.c
    /* renamed from: a */
    public x copy() {
        return new x(isNegative(), c(), k(), w());
    }

    public final rs.k b() {
        int i10;
        Integer num;
        Integer num2;
        if (Intrinsics.areEqual(isNegative(), Boolean.TRUE)) {
            i10 = -1;
        } else {
            i10 = 1;
        }
        Integer c10 = c();
        Integer num3 = null;
        if (c10 != null) {
            num = Integer.valueOf(c10.intValue() * i10);
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
        return rs.m.a(num, num2, num3);
    }

    @Override // ss.n0
    public Integer c() {
        return this.f49419b;
    }

    public boolean equals(Object obj) {
        if (obj instanceof x) {
            x xVar = (x) obj;
            if (Intrinsics.areEqual(isNegative(), xVar.isNegative()) && Intrinsics.areEqual(c(), xVar.c()) && Intrinsics.areEqual(k(), xVar.k()) && Intrinsics.areEqual(w(), xVar.w())) {
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
        Integer c10 = c();
        if (c10 != null) {
            i11 = c10.hashCode();
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

    @Override // ss.n0
    public Boolean isNegative() {
        return this.f49418a;
    }

    @Override // ss.n0
    public Integer k() {
        return this.f49420c;
    }

    @Override // ss.n0
    public void l(Boolean bool) {
        this.f49418a = bool;
    }

    @Override // ss.n0
    public void m(Integer num) {
        this.f49420c = num;
    }

    @Override // ss.n0
    public void p(Integer num) {
        this.f49419b = num;
    }

    @Override // ss.n0
    public void q(Integer num) {
        this.f49421d = num;
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
        Integer c10 = c();
        Object obj = "??";
        if (c10 == null) {
            c10 = "??";
        }
        sb2.append(c10);
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

    @Override // ss.n0
    public Integer w() {
        return this.f49421d;
    }

    public /* synthetic */ x(Boolean bool, Integer num, Integer num2, Integer num3, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this((i10 & 1) != 0 ? null : bool, (i10 & 2) != 0 ? null : num, (i10 & 4) != 0 ? null : num2, (i10 & 8) != 0 ? null : num3);
    }
}
