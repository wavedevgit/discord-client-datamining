package xs;

import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import xs.k0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class w implements k0, bt.c {

    /* renamed from: a  reason: collision with root package name */
    private Integer f54244a;

    /* renamed from: b  reason: collision with root package name */
    private Integer f54245b;

    /* renamed from: c  reason: collision with root package name */
    private g f54246c;

    /* renamed from: d  reason: collision with root package name */
    private Integer f54247d;

    /* renamed from: e  reason: collision with root package name */
    private Integer f54248e;

    /* renamed from: f  reason: collision with root package name */
    private Integer f54249f;

    public w(Integer num, Integer num2, g gVar, Integer num3, Integer num4, Integer num5) {
        this.f54244a = num;
        this.f54245b = num2;
        this.f54246c = gVar;
        this.f54247d = num3;
        this.f54248e = num4;
        this.f54249f = num5;
    }

    @Override // xs.k0
    public void C(Integer num) {
        this.f54244a = num;
    }

    @Override // xs.k0
    public void E(g gVar) {
        this.f54246c = gVar;
    }

    @Override // xs.k0
    public Integer a() {
        return this.f54249f;
    }

    @Override // bt.c
    /* renamed from: b */
    public w copy() {
        return new w(h(), c(), r(), e(), d(), a());
    }

    @Override // xs.k0
    public Integer c() {
        return this.f54245b;
    }

    @Override // xs.k0
    public Integer d() {
        return this.f54248e;
    }

    @Override // xs.k0
    public Integer e() {
        return this.f54247d;
    }

    public boolean equals(Object obj) {
        if (obj instanceof w) {
            w wVar = (w) obj;
            if (Intrinsics.areEqual(h(), wVar.h()) && Intrinsics.areEqual(c(), wVar.c()) && r() == wVar.r() && Intrinsics.areEqual(e(), wVar.e()) && Intrinsics.areEqual(d(), wVar.d()) && Intrinsics.areEqual(a(), wVar.a())) {
                return true;
            }
            return false;
        }
        return false;
    }

    public final ws.i f() {
        int intValue;
        int i10;
        boolean z10;
        int intValue2;
        Integer h10 = h();
        int i11 = 12;
        int i12 = 0;
        if (h10 != null) {
            intValue = h10.intValue();
            Integer c10 = c();
            boolean z11 = true;
            if (c10 != null && ((intValue + 11) % 12) + 1 != (intValue2 = c10.intValue())) {
                throw new IllegalArgumentException(("Inconsistent hour and hour-of-am-pm: hour is " + intValue + ", but hour-of-am-pm is " + intValue2).toString());
            }
            g r10 = r();
            if (r10 != null) {
                if (r10 == g.f54115e) {
                    z10 = true;
                } else {
                    z10 = false;
                }
                if (intValue < 12) {
                    z11 = false;
                }
                if (z10 != z11) {
                    throw new IllegalArgumentException(("Inconsistent hour and the AM/PM marker: hour is " + intValue + ", but the AM/PM marker is " + r10).toString());
                }
            }
        } else {
            Integer c11 = c();
            Integer num = null;
            if (c11 != null) {
                int intValue3 = c11.intValue();
                g r11 = r();
                if (r11 != null) {
                    if (intValue3 == 12) {
                        intValue3 = 0;
                    }
                    if (r11 != g.f54115e) {
                        i11 = 0;
                    }
                    num = Integer.valueOf(intValue3 + i11);
                }
            }
            if (num != null) {
                intValue = num.intValue();
            } else {
                throw new ws.b("Incomplete time: missing hour");
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
        return new ws.i(intValue, intValue4, i10, i12);
    }

    @Override // xs.k0
    public Integer h() {
        return this.f54244a;
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
        Integer c10 = c();
        if (c10 != null) {
            i11 = c10.intValue();
        } else {
            i11 = 0;
        }
        int i17 = i16 + (i11 * 31);
        g r10 = r();
        if (r10 != null) {
            i12 = r10.hashCode();
        } else {
            i12 = 0;
        }
        int i18 = i17 + (i12 * 31);
        Integer e10 = e();
        if (e10 != null) {
            i13 = e10.intValue();
        } else {
            i13 = 0;
        }
        int i19 = i18 + (i13 * 31);
        Integer d10 = d();
        if (d10 != null) {
            i14 = d10.intValue();
        } else {
            i14 = 0;
        }
        int i20 = i19 + (i14 * 31);
        Integer a10 = a();
        if (a10 != null) {
            i15 = a10.intValue();
        }
        return i20 + i15;
    }

    @Override // xs.k0
    public void k(ys.a aVar) {
        k0.a.b(this, aVar);
    }

    @Override // xs.k0
    public void n(Integer num) {
        this.f54248e = num;
    }

    @Override // xs.k0
    public g r() {
        return this.f54246c;
    }

    @Override // xs.k0
    public void s(Integer num) {
        this.f54245b = num;
    }

    @Override // xs.k0
    public void t(Integer num) {
        this.f54249f = num;
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
        throw new UnsupportedOperationException("Method not decompiled: xs.w.toString():java.lang.String");
    }

    @Override // xs.k0
    public void w(Integer num) {
        this.f54247d = num;
    }

    @Override // xs.k0
    public ys.a y() {
        return k0.a.a(this);
    }

    public /* synthetic */ w(Integer num, Integer num2, g gVar, Integer num3, Integer num4, Integer num5, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this((i10 & 1) != 0 ? null : num, (i10 & 2) != 0 ? null : num2, (i10 & 4) != 0 ? null : gVar, (i10 & 8) != 0 ? null : num3, (i10 & 16) != 0 ? null : num4, (i10 & 32) != 0 ? null : num5);
    }
}
