package com.horcrux.svg;

import java.util.ArrayList;
import java.util.Iterator;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
class o0 {

    /* renamed from: d  reason: collision with root package name */
    private static ArrayList f17636d;

    /* renamed from: e  reason: collision with root package name */
    private static int f17637e;

    /* renamed from: f  reason: collision with root package name */
    private static m0 f17638f;

    /* renamed from: g  reason: collision with root package name */
    private static m0 f17639g;

    /* renamed from: h  reason: collision with root package name */
    private static m0 f17640h;

    /* renamed from: i  reason: collision with root package name */
    private static m0 f17641i;

    /* renamed from: j  reason: collision with root package name */
    private static boolean f17642j;

    /* renamed from: a  reason: collision with root package name */
    p0 f17643a;

    /* renamed from: b  reason: collision with root package name */
    m0 f17644b;

    /* renamed from: c  reason: collision with root package name */
    double f17645c;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f17646a;

        /* renamed from: b  reason: collision with root package name */
        static final /* synthetic */ int[] f17647b;

        static {
            int[] iArr = new int[g.values().length];
            f17647b = iArr;
            try {
                iArr[g.kCGPathElementAddCurveToPoint.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f17647b[g.kCGPathElementAddQuadCurveToPoint.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                f17647b[g.kCGPathElementMoveToPoint.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                f17647b[g.kCGPathElementAddLineToPoint.ordinal()] = 4;
            } catch (NoSuchFieldError unused4) {
            }
            try {
                f17647b[g.kCGPathElementCloseSubpath.ordinal()] = 5;
            } catch (NoSuchFieldError unused5) {
            }
            int[] iArr2 = new int[p0.values().length];
            f17646a = iArr2;
            try {
                iArr2[p0.kStartMarker.ordinal()] = 1;
            } catch (NoSuchFieldError unused6) {
            }
            try {
                f17646a[p0.kMidMarker.ordinal()] = 2;
            } catch (NoSuchFieldError unused7) {
            }
            try {
                f17646a[p0.kEndMarker.ordinal()] = 3;
            } catch (NoSuchFieldError unused8) {
            }
        }
    }

    private o0(p0 p0Var, m0 m0Var, double d10) {
        this.f17643a = p0Var;
        this.f17644b = m0Var;
        this.f17645c = d10;
    }

    private static double a(double d10, double d11) {
        if (Math.abs(d10 - d11) > 180.0d) {
            d10 += 360.0d;
        }
        return (d10 + d11) / 2.0d;
    }

    private static void b(s0 s0Var, m0 m0Var, m0 m0Var2, m0 m0Var3) {
        s0Var.f17680a = k(m0Var2, m0Var);
        s0Var.f17681b = k(m0Var3, m0Var2);
        if (i(s0Var.f17680a)) {
            s0Var.f17680a = s0Var.f17681b;
        } else if (i(s0Var.f17681b)) {
            s0Var.f17681b = s0Var.f17680a;
        }
    }

    private static double c(p0 p0Var) {
        double j10 = j(f(f17640h));
        double j11 = j(f(f17641i));
        int i10 = a.f17646a[p0Var.ordinal()];
        if (i10 != 1) {
            if (i10 != 2) {
                if (i10 != 3) {
                    return 0.0d;
                }
                return j10;
            }
            return a(j10, j11);
        } else if (f17642j) {
            return j11 + 180.0d;
        } else {
            return j11;
        }
    }

    private static s0 d(i0 i0Var) {
        s0 s0Var = new s0();
        m0[] m0VarArr = i0Var.f17566b;
        int i10 = a.f17647b[i0Var.f17565a.ordinal()];
        if (i10 != 1) {
            if (i10 != 2) {
                if (i10 != 3 && i10 != 4) {
                    if (i10 == 5) {
                        m0 m0Var = f17639g;
                        s0Var.f17682c = m0Var;
                        s0Var.f17680a = k(m0Var, f17638f);
                        s0Var.f17681b = k(s0Var.f17682c, f17638f);
                        return s0Var;
                    }
                } else {
                    m0 m0Var2 = m0VarArr[0];
                    s0Var.f17682c = m0Var2;
                    s0Var.f17680a = k(m0Var2, f17638f);
                    s0Var.f17681b = k(s0Var.f17682c, f17638f);
                    return s0Var;
                }
            } else {
                m0 m0Var3 = m0VarArr[1];
                s0Var.f17682c = m0Var3;
                b(s0Var, f17638f, m0VarArr[0], m0Var3);
                return s0Var;
            }
        } else {
            s0Var.f17682c = m0VarArr[2];
            s0Var.f17680a = k(m0VarArr[0], f17638f);
            s0Var.f17681b = k(m0VarArr[2], m0VarArr[1]);
            if (i(s0Var.f17680a)) {
                b(s0Var, m0VarArr[0], m0VarArr[1], m0VarArr[2]);
                return s0Var;
            } else if (i(s0Var.f17681b)) {
                b(s0Var, f17638f, m0VarArr[0], m0VarArr[1]);
            }
        }
        return s0Var;
    }

    private static void e() {
        p0 p0Var = p0.kEndMarker;
        f17636d.add(new o0(p0Var, f17638f, c(p0Var)));
    }

    private static double f(m0 m0Var) {
        return Math.atan2(m0Var.f17629b, m0Var.f17628a);
    }

    private static void g(i0 i0Var) {
        p0 p0Var;
        s0 d10 = d(i0Var);
        f17641i = d10.f17680a;
        int i10 = f17637e;
        if (i10 > 0) {
            if (i10 == 1) {
                p0Var = p0.kStartMarker;
            } else {
                p0Var = p0.kMidMarker;
            }
            f17636d.add(new o0(p0Var, f17638f, c(p0Var)));
        }
        f17640h = d10.f17681b;
        f17638f = d10.f17682c;
        g gVar = i0Var.f17565a;
        if (gVar == g.kCGPathElementMoveToPoint) {
            f17639g = i0Var.f17566b[0];
        } else if (gVar == g.kCGPathElementCloseSubpath) {
            f17639g = new m0(0.0d, 0.0d);
        }
        f17637e++;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static ArrayList h(ArrayList arrayList) {
        f17636d = new ArrayList();
        f17637e = 0;
        f17638f = new m0(0.0d, 0.0d);
        f17639g = new m0(0.0d, 0.0d);
        Iterator it = arrayList.iterator();
        while (it.hasNext()) {
            g((i0) it.next());
        }
        e();
        return f17636d;
    }

    private static boolean i(m0 m0Var) {
        if (m0Var.f17628a == 0.0d && m0Var.f17629b == 0.0d) {
            return true;
        }
        return false;
    }

    private static double j(double d10) {
        return d10 * 57.29577951308232d;
    }

    private static m0 k(m0 m0Var, m0 m0Var2) {
        return new m0(m0Var2.f17628a - m0Var.f17628a, m0Var2.f17629b - m0Var.f17629b);
    }
}
