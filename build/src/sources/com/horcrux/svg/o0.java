package com.horcrux.svg;

import java.util.ArrayList;
import java.util.Iterator;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
class o0 {

    /* renamed from: d  reason: collision with root package name */
    private static ArrayList f17118d;

    /* renamed from: e  reason: collision with root package name */
    private static int f17119e;

    /* renamed from: f  reason: collision with root package name */
    private static m0 f17120f;

    /* renamed from: g  reason: collision with root package name */
    private static m0 f17121g;

    /* renamed from: h  reason: collision with root package name */
    private static m0 f17122h;

    /* renamed from: i  reason: collision with root package name */
    private static m0 f17123i;

    /* renamed from: j  reason: collision with root package name */
    private static boolean f17124j;

    /* renamed from: a  reason: collision with root package name */
    p0 f17125a;

    /* renamed from: b  reason: collision with root package name */
    m0 f17126b;

    /* renamed from: c  reason: collision with root package name */
    double f17127c;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f17128a;

        /* renamed from: b  reason: collision with root package name */
        static final /* synthetic */ int[] f17129b;

        static {
            int[] iArr = new int[g.values().length];
            f17129b = iArr;
            try {
                iArr[g.kCGPathElementAddCurveToPoint.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f17129b[g.kCGPathElementAddQuadCurveToPoint.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                f17129b[g.kCGPathElementMoveToPoint.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                f17129b[g.kCGPathElementAddLineToPoint.ordinal()] = 4;
            } catch (NoSuchFieldError unused4) {
            }
            try {
                f17129b[g.kCGPathElementCloseSubpath.ordinal()] = 5;
            } catch (NoSuchFieldError unused5) {
            }
            int[] iArr2 = new int[p0.values().length];
            f17128a = iArr2;
            try {
                iArr2[p0.kStartMarker.ordinal()] = 1;
            } catch (NoSuchFieldError unused6) {
            }
            try {
                f17128a[p0.kMidMarker.ordinal()] = 2;
            } catch (NoSuchFieldError unused7) {
            }
            try {
                f17128a[p0.kEndMarker.ordinal()] = 3;
            } catch (NoSuchFieldError unused8) {
            }
        }
    }

    private o0(p0 p0Var, m0 m0Var, double d10) {
        this.f17125a = p0Var;
        this.f17126b = m0Var;
        this.f17127c = d10;
    }

    private static double a(double d10, double d11) {
        if (Math.abs(d10 - d11) > 180.0d) {
            d10 += 360.0d;
        }
        return (d10 + d11) / 2.0d;
    }

    private static void b(s0 s0Var, m0 m0Var, m0 m0Var2, m0 m0Var3) {
        s0Var.f17162a = k(m0Var2, m0Var);
        s0Var.f17163b = k(m0Var3, m0Var2);
        if (i(s0Var.f17162a)) {
            s0Var.f17162a = s0Var.f17163b;
        } else if (i(s0Var.f17163b)) {
            s0Var.f17163b = s0Var.f17162a;
        }
    }

    private static double c(p0 p0Var) {
        double j10 = j(f(f17122h));
        double j11 = j(f(f17123i));
        int i10 = a.f17128a[p0Var.ordinal()];
        if (i10 != 1) {
            if (i10 != 2) {
                if (i10 != 3) {
                    return 0.0d;
                }
                return j10;
            }
            return a(j10, j11);
        } else if (f17124j) {
            return j11 + 180.0d;
        } else {
            return j11;
        }
    }

    private static s0 d(i0 i0Var) {
        s0 s0Var = new s0();
        m0[] m0VarArr = i0Var.f17048b;
        int i10 = a.f17129b[i0Var.f17047a.ordinal()];
        if (i10 != 1) {
            if (i10 != 2) {
                if (i10 != 3 && i10 != 4) {
                    if (i10 == 5) {
                        m0 m0Var = f17121g;
                        s0Var.f17164c = m0Var;
                        s0Var.f17162a = k(m0Var, f17120f);
                        s0Var.f17163b = k(s0Var.f17164c, f17120f);
                        return s0Var;
                    }
                } else {
                    m0 m0Var2 = m0VarArr[0];
                    s0Var.f17164c = m0Var2;
                    s0Var.f17162a = k(m0Var2, f17120f);
                    s0Var.f17163b = k(s0Var.f17164c, f17120f);
                    return s0Var;
                }
            } else {
                m0 m0Var3 = m0VarArr[1];
                s0Var.f17164c = m0Var3;
                b(s0Var, f17120f, m0VarArr[0], m0Var3);
                return s0Var;
            }
        } else {
            s0Var.f17164c = m0VarArr[2];
            s0Var.f17162a = k(m0VarArr[0], f17120f);
            s0Var.f17163b = k(m0VarArr[2], m0VarArr[1]);
            if (i(s0Var.f17162a)) {
                b(s0Var, m0VarArr[0], m0VarArr[1], m0VarArr[2]);
                return s0Var;
            } else if (i(s0Var.f17163b)) {
                b(s0Var, f17120f, m0VarArr[0], m0VarArr[1]);
            }
        }
        return s0Var;
    }

    private static void e() {
        p0 p0Var = p0.kEndMarker;
        f17118d.add(new o0(p0Var, f17120f, c(p0Var)));
    }

    private static double f(m0 m0Var) {
        return Math.atan2(m0Var.f17111b, m0Var.f17110a);
    }

    private static void g(i0 i0Var) {
        p0 p0Var;
        s0 d10 = d(i0Var);
        f17123i = d10.f17162a;
        int i10 = f17119e;
        if (i10 > 0) {
            if (i10 == 1) {
                p0Var = p0.kStartMarker;
            } else {
                p0Var = p0.kMidMarker;
            }
            f17118d.add(new o0(p0Var, f17120f, c(p0Var)));
        }
        f17122h = d10.f17163b;
        f17120f = d10.f17164c;
        g gVar = i0Var.f17047a;
        if (gVar == g.kCGPathElementMoveToPoint) {
            f17121g = i0Var.f17048b[0];
        } else if (gVar == g.kCGPathElementCloseSubpath) {
            f17121g = new m0(0.0d, 0.0d);
        }
        f17119e++;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static ArrayList h(ArrayList arrayList) {
        f17118d = new ArrayList();
        f17119e = 0;
        f17120f = new m0(0.0d, 0.0d);
        f17121g = new m0(0.0d, 0.0d);
        Iterator it = arrayList.iterator();
        while (it.hasNext()) {
            g((i0) it.next());
        }
        e();
        return f17118d;
    }

    private static boolean i(m0 m0Var) {
        if (m0Var.f17110a == 0.0d && m0Var.f17111b == 0.0d) {
            return true;
        }
        return false;
    }

    private static double j(double d10) {
        return d10 * 57.29577951308232d;
    }

    private static m0 k(m0 m0Var, m0 m0Var2) {
        return new m0(m0Var2.f17110a - m0Var.f17110a, m0Var2.f17111b - m0Var.f17111b);
    }
}
