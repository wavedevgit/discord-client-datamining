package us;

import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import us.k0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class w implements k0, ys.c {

    /* renamed from: a  reason: collision with root package name */
    private Integer f51008a;

    /* renamed from: b  reason: collision with root package name */
    private Integer f51009b;

    /* renamed from: c  reason: collision with root package name */
    private g f51010c;

    /* renamed from: d  reason: collision with root package name */
    private Integer f51011d;

    /* renamed from: e  reason: collision with root package name */
    private Integer f51012e;

    /* renamed from: f  reason: collision with root package name */
    private Integer f51013f;

    public w(Integer num, Integer num2, g gVar, Integer num3, Integer num4, Integer num5) {
        this.f51008a = num;
        this.f51009b = num2;
        this.f51010c = gVar;
        this.f51011d = num3;
        this.f51012e = num4;
        this.f51013f = num5;
    }

    @Override // us.k0
    public void D(Integer num) {
        this.f51008a = num;
    }

    @Override // us.k0
    public Integer a() {
        return this.f51013f;
    }

    @Override // ys.c
    /* renamed from: b */
    public w copy() {
        return new w(h(), i(), s(), e(), d(), a());
    }

    @Override // us.k0
    public void c(g gVar) {
        this.f51010c = gVar;
    }

    @Override // us.k0
    public Integer d() {
        return this.f51012e;
    }

    @Override // us.k0
    public Integer e() {
        return this.f51011d;
    }

    public boolean equals(Object obj) {
        if (obj instanceof w) {
            w wVar = (w) obj;
            if (Intrinsics.areEqual(h(), wVar.h()) && Intrinsics.areEqual(i(), wVar.i()) && s() == wVar.s() && Intrinsics.areEqual(e(), wVar.e()) && Intrinsics.areEqual(d(), wVar.d()) && Intrinsics.areEqual(a(), wVar.a())) {
                return true;
            }
            return false;
        }
        return false;
    }

    public final ts.i f() {
        int intValue;
        int i10;
        boolean z10;
        int intValue2;
        Integer h10 = h();
        int i11 = 12;
        int i12 = 0;
        if (h10 != null) {
            intValue = h10.intValue();
            Integer i13 = i();
            boolean z11 = true;
            if (i13 != null && ((intValue + 11) % 12) + 1 != (intValue2 = i13.intValue())) {
                throw new IllegalArgumentException(("Inconsistent hour and hour-of-am-pm: hour is " + intValue + ", but hour-of-am-pm is " + intValue2).toString());
            }
            g s10 = s();
            if (s10 != null) {
                if (s10 == g.f50879e) {
                    z10 = true;
                } else {
                    z10 = false;
                }
                if (intValue < 12) {
                    z11 = false;
                }
                if (z10 != z11) {
                    throw new IllegalArgumentException(("Inconsistent hour and the AM/PM marker: hour is " + intValue + ", but the AM/PM marker is " + s10).toString());
                }
            }
        } else {
            Integer i14 = i();
            Integer num = null;
            if (i14 != null) {
                int intValue3 = i14.intValue();
                g s11 = s();
                if (s11 != null) {
                    if (intValue3 == 12) {
                        intValue3 = 0;
                    }
                    if (s11 != g.f50879e) {
                        i11 = 0;
                    }
                    num = Integer.valueOf(intValue3 + i11);
                }
            }
            if (num != null) {
                intValue = num.intValue();
            } else {
                throw new ts.b("Incomplete time: missing hour");
            }
        }
        int intValue4 = ((Number) z.d(e(), "minute")).intValue();
        Integer d10 = d();
        if (d10 != null) {
            i10 = d10.intValue();
        } else {
            i10 = 0;
        }
        Integer a10 = a();
        if (a10 != null) {
            i12 = a10.intValue();
        }
        return new ts.i(intValue, intValue4, i10, i12);
    }

    @Override // us.k0
    public Integer h() {
        return this.f51008a;
    }

    public int hashCode() {
        int i10;
        int i11;
        int i12;
        int i13;
        int i14;
        Integer h10 = h();
        int i15 = 0;
        if (h10 != null) {
            i10 = h10.intValue();
        } else {
            i10 = 0;
        }
        int i16 = i10 * 31;
        Integer i17 = i();
        if (i17 != null) {
            i11 = i17.intValue();
        } else {
            i11 = 0;
        }
        int i18 = i16 + (i11 * 31);
        g s10 = s();
        if (s10 != null) {
            i12 = s10.hashCode();
        } else {
            i12 = 0;
        }
        int i19 = i18 + (i12 * 31);
        Integer e10 = e();
        if (e10 != null) {
            i13 = e10.intValue();
        } else {
            i13 = 0;
        }
        int i20 = i19 + (i13 * 31);
        Integer d10 = d();
        if (d10 != null) {
            i14 = d10.intValue();
        } else {
            i14 = 0;
        }
        int i21 = i20 + (i14 * 31);
        Integer a10 = a();
        if (a10 != null) {
            i15 = a10.intValue();
        }
        return i21 + i15;
    }

    @Override // us.k0
    public Integer i() {
        return this.f51009b;
    }

    @Override // us.k0
    public void n(Integer num) {
        this.f51012e = num;
    }

    @Override // us.k0
    public void p(vs.a aVar) {
        k0.a.b(this, aVar);
    }

    @Override // us.k0
    public g s() {
        return this.f51010c;
    }

    @Override // us.k0
    public void t(Integer num) {
        this.f51009b = num;
    }

    /* JADX WARN: Code restructure failed: missing block: B:15:0x004d, code lost:
        if (r1 == null) goto L17;
     */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public java.lang.String toString() {
        /*
            r4 = this;
            java.lang.StringBuilder r0 = new java.lang.StringBuilder
            r0.<init>()
            java.lang.Integer r1 = r4.h()
            java.lang.String r2 = "??"
            if (r1 != 0) goto Le
            r1 = r2
        Le:
            r0.append(r1)
            r1 = 58
            r0.append(r1)
            java.lang.Integer r3 = r4.e()
            if (r3 != 0) goto L1d
            r3 = r2
        L1d:
            r0.append(r3)
            r0.append(r1)
            java.lang.Integer r1 = r4.d()
            if (r1 != 0) goto L2a
            goto L2b
        L2a:
            r2 = r1
        L2b:
            r0.append(r2)
            r1 = 46
            r0.append(r1)
            java.lang.Integer r1 = r4.a()
            if (r1 == 0) goto L4f
            int r1 = r1.intValue()
            java.lang.String r1 = java.lang.String.valueOf(r1)
            int r2 = r1.length()
            int r2 = 9 - r2
            r3 = 48
            java.lang.String r1 = kotlin.text.StringsKt.t0(r1, r2, r3)
            if (r1 != 0) goto L51
        L4f:
            java.lang.String r1 = "???"
        L51:
            r0.append(r1)
            java.lang.String r0 = r0.toString()
            return r0
        */
        throw new UnsupportedOperationException("Method not decompiled: us.w.toString():java.lang.String");
    }

    @Override // us.k0
    public void u(Integer num) {
        this.f51013f = num;
    }

    @Override // us.k0
    public void x(Integer num) {
        this.f51011d = num;
    }

    @Override // us.k0
    public vs.a z() {
        return k0.a.a(this);
    }

    public /* synthetic */ w(Integer num, Integer num2, g gVar, Integer num3, Integer num4, Integer num5, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this((i10 & 1) != 0 ? null : num, (i10 & 2) != 0 ? null : num2, (i10 & 4) != 0 ? null : gVar, (i10 & 8) != 0 ? null : num3, (i10 & 16) != 0 ? null : num4, (i10 & 32) != 0 ? null : num5);
    }
}
