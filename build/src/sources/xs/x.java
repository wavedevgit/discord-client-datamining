package xs;

import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class x implements n0, bt.c {

    /* renamed from: a  reason: collision with root package name */
    private Boolean f54250a;

    /* renamed from: b  reason: collision with root package name */
    private Integer f54251b;

    /* renamed from: c  reason: collision with root package name */
    private Integer f54252c;

    /* renamed from: d  reason: collision with root package name */
    private Integer f54253d;

    public x(Boolean bool, Integer num, Integer num2, Integer num3) {
        this.f54250a = bool;
        this.f54251b = num;
        this.f54252c = num2;
        this.f54253d = num3;
    }

    @Override // bt.c
    /* renamed from: a */
    public x copy() {
        return new x(isNegative(), b(), j(), v());
    }

    @Override // xs.n0
    public Integer b() {
        return this.f54251b;
    }

    public final ws.k c() {
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
        return ws.m.a(num, num2, num3);
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

    @Override // xs.n0
    public Boolean isNegative() {
        return this.f54250a;
    }

    @Override // xs.n0
    public Integer j() {
        return this.f54252c;
    }

    @Override // xs.n0
    public void l(Boolean bool) {
        this.f54250a = bool;
    }

    @Override // xs.n0
    public void m(Integer num) {
        this.f54252c = num;
    }

    @Override // xs.n0
    public void p(Integer num) {
        this.f54251b = num;
    }

    @Override // xs.n0
    public void q(Integer num) {
        this.f54253d = num;
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

    @Override // xs.n0
    public Integer v() {
        return this.f54253d;
    }

    public /* synthetic */ x(Boolean bool, Integer num, Integer num2, Integer num3, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this((i10 & 1) != 0 ? null : bool, (i10 & 2) != 0 ? null : num, (i10 & 4) != 0 ? null : num2, (i10 & 8) != 0 ? null : num3);
    }
}
