package v5;

import android.graphics.PointF;
import android.view.animation.Interpolator;
import android.view.animation.LinearInterpolator;
import androidx.collection.SparseArrayCompat;
import java.lang.ref.WeakReference;
import w5.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
abstract class t {

    /* renamed from: b  reason: collision with root package name */
    private static SparseArrayCompat f52229b;

    /* renamed from: a  reason: collision with root package name */
    private static final Interpolator f52228a = new LinearInterpolator();

    /* renamed from: c  reason: collision with root package name */
    static c.a f52230c = c.a.a("t", "s", "e", "o", "i", "h", "to", "ti");

    /* renamed from: d  reason: collision with root package name */
    static c.a f52231d = c.a.a("x", "y");

    private static WeakReference a(int i10) {
        WeakReference weakReference;
        synchronized (t.class) {
            weakReference = (WeakReference) g().e(i10);
        }
        return weakReference;
    }

    private static Interpolator b(PointF pointF, PointF pointF2) {
        WeakReference a10;
        Interpolator linearInterpolator;
        pointF.x = x5.i.b(pointF.x, -1.0f, 1.0f);
        pointF.y = x5.i.b(pointF.y, -100.0f, 100.0f);
        pointF2.x = x5.i.b(pointF2.x, -1.0f, 1.0f);
        float b10 = x5.i.b(pointF2.y, -100.0f, 100.0f);
        pointF2.y = b10;
        int i10 = x5.j.i(pointF.x, pointF.y, pointF2.x, b10);
        Interpolator interpolator = null;
        if (l5.e.e()) {
            a10 = null;
        } else {
            a10 = a(i10);
        }
        if (a10 != null) {
            interpolator = (Interpolator) a10.get();
        }
        if (a10 != null && interpolator != null) {
            return interpolator;
        }
        try {
            linearInterpolator = d2.a.a(pointF.x, pointF.y, pointF2.x, pointF2.y);
        } catch (IllegalArgumentException e10) {
            if ("The Path cannot loop back on itself.".equals(e10.getMessage())) {
                linearInterpolator = d2.a.a(Math.min(pointF.x, 1.0f), pointF.y, Math.max(pointF2.x, 0.0f), pointF2.y);
            } else {
                linearInterpolator = new LinearInterpolator();
            }
        }
        if (!l5.e.e()) {
            try {
                h(i10, new WeakReference(linearInterpolator));
            } catch (ArrayIndexOutOfBoundsException unused) {
            }
        }
        return linearInterpolator;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static y5.a c(w5.c cVar, l5.i iVar, float f10, n0 n0Var, boolean z10, boolean z11) {
        if (z10 && z11) {
            return e(iVar, cVar, f10, n0Var);
        }
        if (z10) {
            return d(iVar, cVar, f10, n0Var);
        }
        return f(cVar, f10, n0Var);
    }

    private static y5.a d(l5.i iVar, w5.c cVar, float f10, n0 n0Var) {
        Interpolator interpolator;
        Interpolator interpolator2;
        Object obj;
        cVar.u();
        PointF pointF = null;
        Object obj2 = null;
        Object obj3 = null;
        PointF pointF2 = null;
        PointF pointF3 = null;
        float f11 = 0.0f;
        boolean z10 = false;
        PointF pointF4 = null;
        while (cVar.hasNext()) {
            switch (cVar.p(f52230c)) {
                case 0:
                    f11 = (float) cVar.nextDouble();
                    break;
                case 1:
                    obj3 = n0Var.a(cVar, f10);
                    break;
                case 2:
                    obj2 = n0Var.a(cVar, f10);
                    break;
                case 3:
                    pointF = s.e(cVar, 1.0f);
                    break;
                case 4:
                    pointF4 = s.e(cVar, 1.0f);
                    break;
                case 5:
                    if (cVar.nextInt() == 1) {
                        z10 = true;
                        break;
                    } else {
                        z10 = false;
                        break;
                    }
                case 6:
                    pointF2 = s.e(cVar, f10);
                    break;
                case 7:
                    pointF3 = s.e(cVar, f10);
                    break;
                default:
                    cVar.S();
                    break;
            }
        }
        cVar.D();
        if (z10) {
            interpolator2 = f52228a;
            obj = obj3;
        } else {
            if (pointF != null && pointF4 != null) {
                interpolator = b(pointF, pointF4);
            } else {
                interpolator = f52228a;
            }
            interpolator2 = interpolator;
            obj = obj2;
        }
        y5.a aVar = new y5.a(iVar, obj3, obj, interpolator2, f11, null);
        aVar.f54993o = pointF2;
        aVar.f54994p = pointF3;
        return aVar;
    }

    private static y5.a e(l5.i iVar, w5.c cVar, float f10, n0 n0Var) {
        Interpolator interpolator;
        Interpolator b10;
        Interpolator b11;
        Object obj;
        Interpolator interpolator2;
        PointF pointF;
        PointF pointF2;
        y5.a aVar;
        PointF pointF3;
        boolean z10;
        float f11;
        cVar.u();
        boolean z11 = false;
        PointF pointF4 = null;
        PointF pointF5 = null;
        PointF pointF6 = null;
        Object obj2 = null;
        PointF pointF7 = null;
        PointF pointF8 = null;
        PointF pointF9 = null;
        PointF pointF10 = null;
        PointF pointF11 = null;
        float f12 = 0.0f;
        Object obj3 = null;
        while (cVar.hasNext()) {
            switch (cVar.p(f52230c)) {
                case 0:
                    f12 = (float) cVar.nextDouble();
                    break;
                case 1:
                    obj2 = n0Var.a(cVar, f10);
                    break;
                case 2:
                    obj3 = n0Var.a(cVar, f10);
                    break;
                case 3:
                    boolean z12 = z11;
                    if (cVar.m() == c.b.BEGIN_OBJECT) {
                        cVar.u();
                        float f13 = 0.0f;
                        float f14 = 0.0f;
                        float f15 = 0.0f;
                        float f16 = 0.0f;
                        while (cVar.hasNext()) {
                            int p10 = cVar.p(f52231d);
                            if (p10 != 0) {
                                if (p10 != 1) {
                                    cVar.S();
                                } else {
                                    c.b m10 = cVar.m();
                                    c.b bVar = c.b.NUMBER;
                                    if (m10 == bVar) {
                                        pointF3 = pointF8;
                                        f16 = (float) cVar.nextDouble();
                                        f14 = f16;
                                    } else {
                                        pointF3 = pointF8;
                                        cVar.x();
                                        f14 = (float) cVar.nextDouble();
                                        if (cVar.m() == bVar) {
                                            f16 = (float) cVar.nextDouble();
                                        } else {
                                            f16 = f14;
                                        }
                                        cVar.v();
                                    }
                                }
                            } else {
                                pointF3 = pointF8;
                                c.b m11 = cVar.m();
                                c.b bVar2 = c.b.NUMBER;
                                if (m11 == bVar2) {
                                    f15 = (float) cVar.nextDouble();
                                    f13 = f15;
                                } else {
                                    cVar.x();
                                    f13 = (float) cVar.nextDouble();
                                    if (cVar.m() == bVar2) {
                                        f15 = (float) cVar.nextDouble();
                                    } else {
                                        f15 = f13;
                                    }
                                    cVar.v();
                                }
                            }
                            pointF8 = pointF3;
                        }
                        pointF6 = new PointF(f13, f14);
                        pointF7 = new PointF(f15, f16);
                        cVar.D();
                    } else {
                        pointF4 = s.e(cVar, f10);
                    }
                    z11 = z12;
                    break;
                case 4:
                    if (cVar.m() == c.b.BEGIN_OBJECT) {
                        cVar.u();
                        float f17 = 0.0f;
                        float f18 = 0.0f;
                        float f19 = 0.0f;
                        float f20 = 0.0f;
                        while (cVar.hasNext()) {
                            int p11 = cVar.p(f52231d);
                            if (p11 != 0) {
                                z10 = z11;
                                if (p11 != 1) {
                                    cVar.S();
                                } else {
                                    c.b m12 = cVar.m();
                                    c.b bVar3 = c.b.NUMBER;
                                    if (m12 == bVar3) {
                                        f20 = (float) cVar.nextDouble();
                                        f18 = f20;
                                    } else {
                                        cVar.x();
                                        PointF pointF12 = pointF10;
                                        float nextDouble = (float) cVar.nextDouble();
                                        if (cVar.m() == bVar3) {
                                            f20 = (float) cVar.nextDouble();
                                        } else {
                                            f20 = nextDouble;
                                        }
                                        cVar.v();
                                        pointF10 = pointF12;
                                        f18 = nextDouble;
                                    }
                                }
                            } else {
                                z10 = z11;
                                PointF pointF13 = pointF10;
                                c.b m13 = cVar.m();
                                c.b bVar4 = c.b.NUMBER;
                                if (m13 == bVar4) {
                                    pointF10 = pointF13;
                                    f19 = (float) cVar.nextDouble();
                                    f17 = f19;
                                } else {
                                    pointF10 = pointF13;
                                    cVar.x();
                                    float nextDouble2 = (float) cVar.nextDouble();
                                    if (cVar.m() == bVar4) {
                                        f11 = nextDouble2;
                                        f19 = (float) cVar.nextDouble();
                                    } else {
                                        f11 = nextDouble2;
                                        f19 = f11;
                                    }
                                    cVar.v();
                                    f17 = f11;
                                }
                            }
                            z11 = z10;
                        }
                        PointF pointF14 = new PointF(f17, f18);
                        PointF pointF15 = new PointF(f19, f20);
                        cVar.D();
                        pointF9 = pointF15;
                        pointF8 = pointF14;
                        break;
                    } else {
                        pointF5 = s.e(cVar, f10);
                        break;
                    }
                case 5:
                    if (cVar.nextInt() == 1) {
                        z11 = true;
                        break;
                    } else {
                        z11 = false;
                        break;
                    }
                case 6:
                    pointF10 = s.e(cVar, f10);
                    break;
                case 7:
                    pointF11 = s.e(cVar, f10);
                    break;
                default:
                    cVar.S();
                    break;
            }
        }
        boolean z13 = z11;
        PointF pointF16 = pointF8;
        cVar.D();
        if (z13) {
            interpolator2 = f52228a;
            obj = obj2;
        } else {
            if (pointF4 != null && pointF5 != null) {
                interpolator = b(pointF4, pointF5);
            } else if (pointF6 != null && pointF7 != null && pointF16 != null && pointF9 != null) {
                b10 = b(pointF6, pointF16);
                b11 = b(pointF7, pointF9);
                obj = obj3;
                interpolator2 = null;
                if (b10 == null && b11 != null) {
                    pointF2 = pointF11;
                    pointF = pointF10;
                    aVar = new y5.a(iVar, obj2, obj, b10, b11, f12, null);
                } else {
                    pointF = pointF10;
                    pointF2 = pointF11;
                    aVar = new y5.a(iVar, obj2, obj, interpolator2, f12, null);
                }
                aVar.f54993o = pointF;
                aVar.f54994p = pointF2;
                return aVar;
            } else {
                interpolator = f52228a;
            }
            interpolator2 = interpolator;
            obj = obj3;
        }
        b10 = null;
        b11 = null;
        if (b10 == null) {
        }
        pointF = pointF10;
        pointF2 = pointF11;
        aVar = new y5.a(iVar, obj2, obj, interpolator2, f12, null);
        aVar.f54993o = pointF;
        aVar.f54994p = pointF2;
        return aVar;
    }

    private static y5.a f(w5.c cVar, float f10, n0 n0Var) {
        return new y5.a(n0Var.a(cVar, f10));
    }

    private static SparseArrayCompat g() {
        if (f52229b == null) {
            f52229b = new SparseArrayCompat();
        }
        return f52229b;
    }

    private static void h(int i10, WeakReference weakReference) {
        synchronized (t.class) {
            f52229b.k(i10, weakReference);
        }
    }
}
