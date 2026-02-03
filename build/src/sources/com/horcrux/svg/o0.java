package com.horcrux.svg;

import java.util.ArrayList;
import java.util.Iterator;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
class o0 {

    /* renamed from: d  reason: collision with root package name */
    private static ArrayList f16604d;

    /* renamed from: e  reason: collision with root package name */
    private static int f16605e;

    /* renamed from: f  reason: collision with root package name */
    private static m0 f16606f;

    /* renamed from: g  reason: collision with root package name */
    private static m0 f16607g;

    /* renamed from: h  reason: collision with root package name */
    private static m0 f16608h;

    /* renamed from: i  reason: collision with root package name */
    private static m0 f16609i;

    /* renamed from: j  reason: collision with root package name */
    private static boolean f16610j;

    /* renamed from: a  reason: collision with root package name */
    p0 f16611a;

    /* renamed from: b  reason: collision with root package name */
    m0 f16612b;

    /* renamed from: c  reason: collision with root package name */
    double f16613c;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f16614a;

        /* renamed from: b  reason: collision with root package name */
        static final /* synthetic */ int[] f16615b;

        static {
            int[] iArr = new int[g.values().length];
            f16615b = iArr;
            try {
                iArr[g.kCGPathElementAddCurveToPoint.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f16615b[g.kCGPathElementAddQuadCurveToPoint.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                f16615b[g.kCGPathElementMoveToPoint.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                f16615b[g.kCGPathElementAddLineToPoint.ordinal()] = 4;
            } catch (NoSuchFieldError unused4) {
            }
            try {
                f16615b[g.kCGPathElementCloseSubpath.ordinal()] = 5;
            } catch (NoSuchFieldError unused5) {
            }
            int[] iArr2 = new int[p0.values().length];
            f16614a = iArr2;
            try {
                iArr2[p0.kStartMarker.ordinal()] = 1;
            } catch (NoSuchFieldError unused6) {
            }
            try {
                f16614a[p0.kMidMarker.ordinal()] = 2;
            } catch (NoSuchFieldError unused7) {
            }
            try {
                f16614a[p0.kEndMarker.ordinal()] = 3;
            } catch (NoSuchFieldError unused8) {
            }
        }
    }

    private o0(p0 p0Var, m0 m0Var, double d10) {
        this.f16611a = p0Var;
        this.f16612b = m0Var;
        this.f16613c = d10;
    }

    private static double a(double d10, double d11) {
        if (Math.abs(d10 - d11) > 180.0d) {
            d10 += 360.0d;
        }
        return (d10 + d11) / 2.0d;
    }

    private static void b(s0 s0Var, m0 m0Var, m0 m0Var2, m0 m0Var3) {
        s0Var.f16648a = k(m0Var2, m0Var);
        s0Var.f16649b = k(m0Var3, m0Var2);
        if (i(s0Var.f16648a)) {
            s0Var.f16648a = s0Var.f16649b;
        } else if (i(s0Var.f16649b)) {
            s0Var.f16649b = s0Var.f16648a;
        }
    }

    private static double c(p0 p0Var) {
        double j10 = j(f(f16608h));
        double j11 = j(f(f16609i));
        int i10 = a.f16614a[p0Var.ordinal()];
        if (i10 != 1) {
            if (i10 != 2) {
                if (i10 != 3) {
                    return 0.0d;
                }
                return j10;
            }
            return a(j10, j11);
        } else if (f16610j) {
            return j11 + 180.0d;
        } else {
            return j11;
        }
    }

    private static s0 d(i0 i0Var) {
        s0 s0Var = new s0();
        m0[] m0VarArr = i0Var.f16534b;
        int i10 = a.f16615b[i0Var.f16533a.ordinal()];
        if (i10 != 1) {
            if (i10 != 2) {
                if (i10 != 3 && i10 != 4) {
                    if (i10 == 5) {
                        m0 m0Var = f16607g;
                        s0Var.f16650c = m0Var;
                        s0Var.f16648a = k(m0Var, f16606f);
                        s0Var.f16649b = k(s0Var.f16650c, f16606f);
                        return s0Var;
                    }
                } else {
                    m0 m0Var2 = m0VarArr[0];
                    s0Var.f16650c = m0Var2;
                    s0Var.f16648a = k(m0Var2, f16606f);
                    s0Var.f16649b = k(s0Var.f16650c, f16606f);
                    return s0Var;
                }
            } else {
                m0 m0Var3 = m0VarArr[1];
                s0Var.f16650c = m0Var3;
                b(s0Var, f16606f, m0VarArr[0], m0Var3);
                return s0Var;
            }
        } else {
            s0Var.f16650c = m0VarArr[2];
            s0Var.f16648a = k(m0VarArr[0], f16606f);
            s0Var.f16649b = k(m0VarArr[2], m0VarArr[1]);
            if (i(s0Var.f16648a)) {
                b(s0Var, m0VarArr[0], m0VarArr[1], m0VarArr[2]);
                return s0Var;
            } else if (i(s0Var.f16649b)) {
                b(s0Var, f16606f, m0VarArr[0], m0VarArr[1]);
            }
        }
        return s0Var;
    }

    private static void e() {
        p0 p0Var = p0.kEndMarker;
        f16604d.add(new o0(p0Var, f16606f, c(p0Var)));
    }

    private static double f(m0 m0Var) {
        return Math.atan2(m0Var.f16597b, m0Var.f16596a);
    }

    private static void g(i0 i0Var) {
        p0 p0Var;
        s0 d10 = d(i0Var);
        f16609i = d10.f16648a;
        int i10 = f16605e;
        if (i10 > 0) {
            if (i10 == 1) {
                p0Var = p0.kStartMarker;
            } else {
                p0Var = p0.kMidMarker;
            }
            f16604d.add(new o0(p0Var, f16606f, c(p0Var)));
        }
        f16608h = d10.f16649b;
        f16606f = d10.f16650c;
        g gVar = i0Var.f16533a;
        if (gVar == g.kCGPathElementMoveToPoint) {
            f16607g = i0Var.f16534b[0];
        } else if (gVar == g.kCGPathElementCloseSubpath) {
            f16607g = new m0(0.0d, 0.0d);
        }
        f16605e++;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static ArrayList h(ArrayList arrayList) {
        f16604d = new ArrayList();
        f16605e = 0;
        f16606f = new m0(0.0d, 0.0d);
        f16607g = new m0(0.0d, 0.0d);
        Iterator it = arrayList.iterator();
        while (it.hasNext()) {
            g((i0) it.next());
        }
        e();
        return f16604d;
    }

    private static boolean i(m0 m0Var) {
        if (m0Var.f16596a == 0.0d && m0Var.f16597b == 0.0d) {
            return true;
        }
        return false;
    }

    private static double j(double d10) {
        return d10 * 57.29577951308232d;
    }

    private static m0 k(m0 m0Var, m0 m0Var2) {
        return new m0(m0Var2.f16596a - m0Var.f16596a, m0Var2.f16597b - m0Var.f16597b);
    }
}
