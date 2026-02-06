package l1;

import androidx.constraintlayout.core.widgets.ConstraintWidget;
import androidx.constraintlayout.core.widgets.ConstraintWidgetContainer;
import androidx.constraintlayout.core.widgets.d;
import java.util.ArrayList;
import java.util.Iterator;
import l1.b;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class h {

    /* renamed from: a  reason: collision with root package name */
    private static b.a f35675a = new b.a();

    /* renamed from: b  reason: collision with root package name */
    private static int f35676b = 0;

    /* renamed from: c  reason: collision with root package name */
    private static int f35677c = 0;

    private static boolean a(int i10, ConstraintWidget constraintWidget) {
        ConstraintWidgetContainer constraintWidgetContainer;
        boolean z10;
        boolean z11;
        ConstraintWidget.b bVar;
        ConstraintWidget.b bVar2;
        ConstraintWidget.b A = constraintWidget.A();
        ConstraintWidget.b T = constraintWidget.T();
        if (constraintWidget.K() != null) {
            constraintWidgetContainer = (ConstraintWidgetContainer) constraintWidget.K();
        } else {
            constraintWidgetContainer = null;
        }
        if (constraintWidgetContainer != null) {
            constraintWidgetContainer.A();
            ConstraintWidget.b bVar3 = ConstraintWidget.b.FIXED;
        }
        if (constraintWidgetContainer != null) {
            constraintWidgetContainer.T();
            ConstraintWidget.b bVar4 = ConstraintWidget.b.FIXED;
        }
        ConstraintWidget.b bVar5 = ConstraintWidget.b.FIXED;
        if (A != bVar5 && !constraintWidget.n0() && A != ConstraintWidget.b.WRAP_CONTENT && ((A != (bVar2 = ConstraintWidget.b.MATCH_CONSTRAINT) || constraintWidget.f2739w != 0 || constraintWidget.f2702d0 != 0.0f || !constraintWidget.a0(0)) && (A != bVar2 || constraintWidget.f2739w != 1 || !constraintWidget.d0(0, constraintWidget.W())))) {
            z10 = false;
        } else {
            z10 = true;
        }
        if (T != bVar5 && !constraintWidget.o0() && T != ConstraintWidget.b.WRAP_CONTENT && ((T != (bVar = ConstraintWidget.b.MATCH_CONSTRAINT) || constraintWidget.f2741x != 0 || constraintWidget.f2702d0 != 0.0f || !constraintWidget.a0(1)) && (T != bVar || constraintWidget.f2741x != 1 || !constraintWidget.d0(1, constraintWidget.x())))) {
            z11 = false;
        } else {
            z11 = true;
        }
        if (constraintWidget.f2702d0 > 0.0f && (z10 || z11)) {
            return true;
        }
        if (!z10 || !z11) {
            return false;
        }
        return true;
    }

    private static void b(int i10, ConstraintWidget constraintWidget, b.InterfaceC0477b interfaceC0477b, boolean z10) {
        boolean z11;
        androidx.constraintlayout.core.widgets.d dVar;
        androidx.constraintlayout.core.widgets.d dVar2;
        boolean z12;
        boolean z13;
        androidx.constraintlayout.core.widgets.d dVar3;
        androidx.constraintlayout.core.widgets.d dVar4;
        if (constraintWidget.g0()) {
            return;
        }
        boolean z14 = true;
        f35676b++;
        if (!(constraintWidget instanceof ConstraintWidgetContainer) && constraintWidget.m0()) {
            int i11 = i10 + 1;
            if (a(i11, constraintWidget)) {
                ConstraintWidgetContainer.U1(i11, constraintWidget, interfaceC0477b, new b.a(), b.a.f35629k);
            }
        }
        androidx.constraintlayout.core.widgets.d o10 = constraintWidget.o(d.a.LEFT);
        androidx.constraintlayout.core.widgets.d o11 = constraintWidget.o(d.a.RIGHT);
        int e10 = o10.e();
        int e11 = o11.e();
        if (o10.d() != null && o10.n()) {
            Iterator it = o10.d().iterator();
            while (it.hasNext()) {
                androidx.constraintlayout.core.widgets.d dVar5 = (androidx.constraintlayout.core.widgets.d) it.next();
                ConstraintWidget constraintWidget2 = dVar5.f2795d;
                int i12 = i10 + 1;
                boolean a10 = a(i12, constraintWidget2);
                if (constraintWidget2.m0() && a10) {
                    z12 = z14;
                    ConstraintWidgetContainer.U1(i12, constraintWidget2, interfaceC0477b, new b.a(), b.a.f35629k);
                } else {
                    z12 = z14;
                }
                if ((dVar5 == constraintWidget2.O && (dVar4 = constraintWidget2.Q.f2797f) != null && dVar4.n()) || (dVar5 == constraintWidget2.Q && (dVar3 = constraintWidget2.O.f2797f) != null && dVar3.n())) {
                    z13 = z12;
                } else {
                    z13 = false;
                }
                ConstraintWidget.b A = constraintWidget2.A();
                ConstraintWidget.b bVar = ConstraintWidget.b.MATCH_CONSTRAINT;
                if (A == bVar && !a10) {
                    if (constraintWidget2.A() == bVar && constraintWidget2.A >= 0 && constraintWidget2.f2745z >= 0 && ((constraintWidget2.V() == 8 || (constraintWidget2.f2739w == 0 && constraintWidget2.v() == 0.0f)) && !constraintWidget2.i0() && !constraintWidget2.l0() && z13 && !constraintWidget2.i0())) {
                        e(i12, constraintWidget, interfaceC0477b, constraintWidget2, z10);
                    }
                } else if (!constraintWidget2.m0()) {
                    androidx.constraintlayout.core.widgets.d dVar6 = constraintWidget2.O;
                    if (dVar5 == dVar6 && constraintWidget2.Q.f2797f == null) {
                        int f10 = dVar6.f() + e10;
                        constraintWidget2.G0(f10, constraintWidget2.W() + f10);
                        b(i12, constraintWidget2, interfaceC0477b, z10);
                    } else {
                        androidx.constraintlayout.core.widgets.d dVar7 = constraintWidget2.Q;
                        if (dVar5 == dVar7 && dVar6.f2797f == null) {
                            int f11 = e10 - dVar7.f();
                            constraintWidget2.G0(f11 - constraintWidget2.W(), f11);
                            b(i12, constraintWidget2, interfaceC0477b, z10);
                        } else if (z13 && !constraintWidget2.i0()) {
                            d(i12, interfaceC0477b, constraintWidget2, z10);
                        }
                    }
                }
                z14 = z12;
            }
        }
        boolean z15 = z14;
        if (constraintWidget instanceof androidx.constraintlayout.core.widgets.f) {
            return;
        }
        if (o11.d() != null && o11.n()) {
            Iterator it2 = o11.d().iterator();
            while (it2.hasNext()) {
                androidx.constraintlayout.core.widgets.d dVar8 = (androidx.constraintlayout.core.widgets.d) it2.next();
                ConstraintWidget constraintWidget3 = dVar8.f2795d;
                int i13 = i10 + 1;
                boolean a11 = a(i13, constraintWidget3);
                if (constraintWidget3.m0() && a11) {
                    ConstraintWidgetContainer.U1(i13, constraintWidget3, interfaceC0477b, new b.a(), b.a.f35629k);
                }
                if ((dVar8 == constraintWidget3.O && (dVar2 = constraintWidget3.Q.f2797f) != null && dVar2.n()) || (dVar8 == constraintWidget3.Q && (dVar = constraintWidget3.O.f2797f) != null && dVar.n())) {
                    z11 = z15;
                } else {
                    z11 = false;
                }
                ConstraintWidget.b A2 = constraintWidget3.A();
                ConstraintWidget.b bVar2 = ConstraintWidget.b.MATCH_CONSTRAINT;
                if (A2 == bVar2 && !a11) {
                    if (constraintWidget3.A() == bVar2 && constraintWidget3.A >= 0 && constraintWidget3.f2745z >= 0 && (constraintWidget3.V() == 8 || (constraintWidget3.f2739w == 0 && constraintWidget3.v() == 0.0f))) {
                        if (!constraintWidget3.i0() && !constraintWidget3.l0() && z11 && !constraintWidget3.i0()) {
                            e(i13, constraintWidget, interfaceC0477b, constraintWidget3, z10);
                        }
                    }
                } else if (!constraintWidget3.m0()) {
                    androidx.constraintlayout.core.widgets.d dVar9 = constraintWidget3.O;
                    if (dVar8 == dVar9 && constraintWidget3.Q.f2797f == null) {
                        int f12 = dVar9.f() + e11;
                        constraintWidget3.G0(f12, constraintWidget3.W() + f12);
                        b(i13, constraintWidget3, interfaceC0477b, z10);
                    } else {
                        androidx.constraintlayout.core.widgets.d dVar10 = constraintWidget3.Q;
                        if (dVar8 == dVar10 && dVar9.f2797f == null) {
                            int f13 = e11 - dVar10.f();
                            constraintWidget3.G0(f13 - constraintWidget3.W(), f13);
                            b(i13, constraintWidget3, interfaceC0477b, z10);
                        } else if (z11 && !constraintWidget3.i0()) {
                            d(i13, interfaceC0477b, constraintWidget3, z10);
                        }
                    }
                }
            }
        }
        constraintWidget.q0();
    }

    private static void c(int i10, androidx.constraintlayout.core.widgets.a aVar, b.InterfaceC0477b interfaceC0477b, int i11, boolean z10) {
        if (aVar.u1()) {
            if (i11 == 0) {
                b(i10 + 1, aVar, interfaceC0477b, z10);
            } else {
                i(i10 + 1, aVar, interfaceC0477b);
            }
        }
    }

    private static void d(int i10, b.InterfaceC0477b interfaceC0477b, ConstraintWidget constraintWidget, boolean z10) {
        float f10;
        float y10 = constraintWidget.y();
        int e10 = constraintWidget.O.f2797f.e();
        int e11 = constraintWidget.Q.f2797f.e();
        int f11 = constraintWidget.O.f() + e10;
        int f12 = e11 - constraintWidget.Q.f();
        if (e10 == e11) {
            y10 = 0.5f;
        } else {
            e10 = f11;
            e11 = f12;
        }
        int W = constraintWidget.W();
        int i11 = (e11 - e10) - W;
        if (e10 > e11) {
            i11 = (e10 - e11) - W;
        }
        if (i11 > 0) {
            f10 = (y10 * i11) + 0.5f;
        } else {
            f10 = y10 * i11;
        }
        int i12 = ((int) f10) + e10;
        int i13 = i12 + W;
        if (e10 > e11) {
            i13 = i12 - W;
        }
        constraintWidget.G0(i12, i13);
        b(i10 + 1, constraintWidget, interfaceC0477b, z10);
    }

    private static void e(int i10, ConstraintWidget constraintWidget, b.InterfaceC0477b interfaceC0477b, ConstraintWidget constraintWidget2, boolean z10) {
        int W;
        float y10 = constraintWidget2.y();
        int e10 = constraintWidget2.O.f2797f.e() + constraintWidget2.O.f();
        int e11 = constraintWidget2.Q.f2797f.e() - constraintWidget2.Q.f();
        if (e11 >= e10) {
            int W2 = constraintWidget2.W();
            if (constraintWidget2.V() != 8) {
                int i11 = constraintWidget2.f2739w;
                if (i11 == 2) {
                    if (constraintWidget instanceof ConstraintWidgetContainer) {
                        W = constraintWidget.W();
                    } else {
                        W = constraintWidget.K().W();
                    }
                    W2 = (int) (constraintWidget2.y() * 0.5f * W);
                } else if (i11 == 0) {
                    W2 = e11 - e10;
                }
                W2 = Math.max(constraintWidget2.f2745z, W2);
                int i12 = constraintWidget2.A;
                if (i12 > 0) {
                    W2 = Math.min(i12, W2);
                }
            }
            int i13 = e10 + ((int) ((y10 * ((e11 - e10) - W2)) + 0.5f));
            constraintWidget2.G0(i13, W2 + i13);
            b(i10 + 1, constraintWidget2, interfaceC0477b, z10);
        }
    }

    private static void f(int i10, b.InterfaceC0477b interfaceC0477b, ConstraintWidget constraintWidget) {
        float f10;
        float R = constraintWidget.R();
        int e10 = constraintWidget.P.f2797f.e();
        int e11 = constraintWidget.R.f2797f.e();
        int f11 = constraintWidget.P.f() + e10;
        int f12 = e11 - constraintWidget.R.f();
        if (e10 == e11) {
            R = 0.5f;
        } else {
            e10 = f11;
            e11 = f12;
        }
        int x10 = constraintWidget.x();
        int i11 = (e11 - e10) - x10;
        if (e10 > e11) {
            i11 = (e10 - e11) - x10;
        }
        if (i11 > 0) {
            f10 = (R * i11) + 0.5f;
        } else {
            f10 = R * i11;
        }
        int i12 = (int) f10;
        int i13 = e10 + i12;
        int i14 = i13 + x10;
        if (e10 > e11) {
            i13 = e10 - i12;
            i14 = i13 - x10;
        }
        constraintWidget.J0(i13, i14);
        i(i10 + 1, constraintWidget, interfaceC0477b);
    }

    private static void g(int i10, ConstraintWidget constraintWidget, b.InterfaceC0477b interfaceC0477b, ConstraintWidget constraintWidget2) {
        int x10;
        float R = constraintWidget2.R();
        int e10 = constraintWidget2.P.f2797f.e() + constraintWidget2.P.f();
        int e11 = constraintWidget2.R.f2797f.e() - constraintWidget2.R.f();
        if (e11 >= e10) {
            int x11 = constraintWidget2.x();
            if (constraintWidget2.V() != 8) {
                int i11 = constraintWidget2.f2741x;
                if (i11 == 2) {
                    if (constraintWidget instanceof ConstraintWidgetContainer) {
                        x10 = constraintWidget.x();
                    } else {
                        x10 = constraintWidget.K().x();
                    }
                    x11 = (int) (R * 0.5f * x10);
                } else if (i11 == 0) {
                    x11 = e11 - e10;
                }
                x11 = Math.max(constraintWidget2.C, x11);
                int i12 = constraintWidget2.D;
                if (i12 > 0) {
                    x11 = Math.min(i12, x11);
                }
            }
            int i13 = e10 + ((int) ((R * ((e11 - e10) - x11)) + 0.5f));
            constraintWidget2.J0(i13, x11 + i13);
            i(i10 + 1, constraintWidget2, interfaceC0477b);
        }
    }

    public static void h(ConstraintWidgetContainer constraintWidgetContainer, b.InterfaceC0477b interfaceC0477b) {
        ConstraintWidget.b A = constraintWidgetContainer.A();
        ConstraintWidget.b T = constraintWidgetContainer.T();
        f35676b = 0;
        f35677c = 0;
        constraintWidgetContainer.v0();
        ArrayList s12 = constraintWidgetContainer.s1();
        int size = s12.size();
        for (int i10 = 0; i10 < size; i10++) {
            ((ConstraintWidget) s12.get(i10)).v0();
        }
        boolean R1 = constraintWidgetContainer.R1();
        if (A == ConstraintWidget.b.FIXED) {
            constraintWidgetContainer.G0(0, constraintWidgetContainer.W());
        } else {
            constraintWidgetContainer.H0(0);
        }
        boolean z10 = false;
        boolean z11 = false;
        for (int i11 = 0; i11 < size; i11++) {
            ConstraintWidget constraintWidget = (ConstraintWidget) s12.get(i11);
            if (constraintWidget instanceof androidx.constraintlayout.core.widgets.f) {
                androidx.constraintlayout.core.widgets.f fVar = (androidx.constraintlayout.core.widgets.f) constraintWidget;
                if (fVar.t1() == 1) {
                    if (fVar.u1() != -1) {
                        fVar.x1(fVar.u1());
                    } else if (fVar.v1() != -1 && constraintWidgetContainer.n0()) {
                        fVar.x1(constraintWidgetContainer.W() - fVar.v1());
                    } else if (constraintWidgetContainer.n0()) {
                        fVar.x1((int) ((fVar.w1() * constraintWidgetContainer.W()) + 0.5f));
                    }
                    z10 = true;
                }
            } else if ((constraintWidget instanceof androidx.constraintlayout.core.widgets.a) && ((androidx.constraintlayout.core.widgets.a) constraintWidget).y1() == 0) {
                z11 = true;
            }
        }
        if (z10) {
            for (int i12 = 0; i12 < size; i12++) {
                ConstraintWidget constraintWidget2 = (ConstraintWidget) s12.get(i12);
                if (constraintWidget2 instanceof androidx.constraintlayout.core.widgets.f) {
                    androidx.constraintlayout.core.widgets.f fVar2 = (androidx.constraintlayout.core.widgets.f) constraintWidget2;
                    if (fVar2.t1() == 1) {
                        b(0, fVar2, interfaceC0477b, R1);
                    }
                }
            }
        }
        b(0, constraintWidgetContainer, interfaceC0477b, R1);
        if (z11) {
            for (int i13 = 0; i13 < size; i13++) {
                ConstraintWidget constraintWidget3 = (ConstraintWidget) s12.get(i13);
                if (constraintWidget3 instanceof androidx.constraintlayout.core.widgets.a) {
                    androidx.constraintlayout.core.widgets.a aVar = (androidx.constraintlayout.core.widgets.a) constraintWidget3;
                    if (aVar.y1() == 0) {
                        c(0, aVar, interfaceC0477b, 0, R1);
                    }
                }
            }
        }
        if (T == ConstraintWidget.b.FIXED) {
            constraintWidgetContainer.J0(0, constraintWidgetContainer.x());
        } else {
            constraintWidgetContainer.I0(0);
        }
        boolean z12 = false;
        boolean z13 = false;
        for (int i14 = 0; i14 < size; i14++) {
            ConstraintWidget constraintWidget4 = (ConstraintWidget) s12.get(i14);
            if (constraintWidget4 instanceof androidx.constraintlayout.core.widgets.f) {
                androidx.constraintlayout.core.widgets.f fVar3 = (androidx.constraintlayout.core.widgets.f) constraintWidget4;
                if (fVar3.t1() == 0) {
                    if (fVar3.u1() != -1) {
                        fVar3.x1(fVar3.u1());
                    } else if (fVar3.v1() != -1 && constraintWidgetContainer.o0()) {
                        fVar3.x1(constraintWidgetContainer.x() - fVar3.v1());
                    } else if (constraintWidgetContainer.o0()) {
                        fVar3.x1((int) ((fVar3.w1() * constraintWidgetContainer.x()) + 0.5f));
                    }
                    z12 = true;
                }
            } else if ((constraintWidget4 instanceof androidx.constraintlayout.core.widgets.a) && ((androidx.constraintlayout.core.widgets.a) constraintWidget4).y1() == 1) {
                z13 = true;
            }
        }
        if (z12) {
            for (int i15 = 0; i15 < size; i15++) {
                ConstraintWidget constraintWidget5 = (ConstraintWidget) s12.get(i15);
                if (constraintWidget5 instanceof androidx.constraintlayout.core.widgets.f) {
                    androidx.constraintlayout.core.widgets.f fVar4 = (androidx.constraintlayout.core.widgets.f) constraintWidget5;
                    if (fVar4.t1() == 0) {
                        i(1, fVar4, interfaceC0477b);
                    }
                }
            }
        }
        i(0, constraintWidgetContainer, interfaceC0477b);
        if (z13) {
            for (int i16 = 0; i16 < size; i16++) {
                ConstraintWidget constraintWidget6 = (ConstraintWidget) s12.get(i16);
                if (constraintWidget6 instanceof androidx.constraintlayout.core.widgets.a) {
                    androidx.constraintlayout.core.widgets.a aVar2 = (androidx.constraintlayout.core.widgets.a) constraintWidget6;
                    if (aVar2.y1() == 1) {
                        c(0, aVar2, interfaceC0477b, 1, R1);
                    }
                }
            }
        }
        for (int i17 = 0; i17 < size; i17++) {
            ConstraintWidget constraintWidget7 = (ConstraintWidget) s12.get(i17);
            if (constraintWidget7.m0() && a(0, constraintWidget7)) {
                ConstraintWidgetContainer.U1(0, constraintWidget7, interfaceC0477b, f35675a, b.a.f35629k);
                if (constraintWidget7 instanceof androidx.constraintlayout.core.widgets.f) {
                    if (((androidx.constraintlayout.core.widgets.f) constraintWidget7).t1() == 0) {
                        i(0, constraintWidget7, interfaceC0477b);
                    } else {
                        b(0, constraintWidget7, interfaceC0477b, R1);
                    }
                } else {
                    b(0, constraintWidget7, interfaceC0477b, R1);
                    i(0, constraintWidget7, interfaceC0477b);
                }
            }
        }
    }

    private static void i(int i10, ConstraintWidget constraintWidget, b.InterfaceC0477b interfaceC0477b) {
        boolean z10;
        androidx.constraintlayout.core.widgets.d dVar;
        androidx.constraintlayout.core.widgets.d dVar2;
        boolean z11;
        androidx.constraintlayout.core.widgets.d dVar3;
        androidx.constraintlayout.core.widgets.d dVar4;
        if (constraintWidget.p0()) {
            return;
        }
        boolean z12 = true;
        f35677c++;
        if (!(constraintWidget instanceof ConstraintWidgetContainer) && constraintWidget.m0()) {
            int i11 = i10 + 1;
            if (a(i11, constraintWidget)) {
                ConstraintWidgetContainer.U1(i11, constraintWidget, interfaceC0477b, new b.a(), b.a.f35629k);
            }
        }
        androidx.constraintlayout.core.widgets.d o10 = constraintWidget.o(d.a.TOP);
        androidx.constraintlayout.core.widgets.d o11 = constraintWidget.o(d.a.BOTTOM);
        int e10 = o10.e();
        int e11 = o11.e();
        if (o10.d() != null && o10.n()) {
            Iterator it = o10.d().iterator();
            while (it.hasNext()) {
                androidx.constraintlayout.core.widgets.d dVar5 = (androidx.constraintlayout.core.widgets.d) it.next();
                ConstraintWidget constraintWidget2 = dVar5.f2795d;
                int i12 = i10 + 1;
                boolean a10 = a(i12, constraintWidget2);
                if (constraintWidget2.m0() && a10) {
                    ConstraintWidgetContainer.U1(i12, constraintWidget2, interfaceC0477b, new b.a(), b.a.f35629k);
                }
                if ((dVar5 == constraintWidget2.P && (dVar4 = constraintWidget2.R.f2797f) != null && dVar4.n()) || (dVar5 == constraintWidget2.R && (dVar3 = constraintWidget2.P.f2797f) != null && dVar3.n())) {
                    z11 = z12;
                } else {
                    z11 = false;
                }
                ConstraintWidget.b T = constraintWidget2.T();
                boolean z13 = z12;
                ConstraintWidget.b bVar = ConstraintWidget.b.MATCH_CONSTRAINT;
                if (T == bVar && !a10) {
                    if (constraintWidget2.T() == bVar && constraintWidget2.D >= 0 && constraintWidget2.C >= 0 && ((constraintWidget2.V() == 8 || (constraintWidget2.f2741x == 0 && constraintWidget2.v() == 0.0f)) && !constraintWidget2.k0() && !constraintWidget2.l0() && z11 && !constraintWidget2.k0())) {
                        g(i12, constraintWidget, interfaceC0477b, constraintWidget2);
                    }
                } else if (!constraintWidget2.m0()) {
                    androidx.constraintlayout.core.widgets.d dVar6 = constraintWidget2.P;
                    if (dVar5 == dVar6 && constraintWidget2.R.f2797f == null) {
                        int f10 = dVar6.f() + e10;
                        constraintWidget2.J0(f10, constraintWidget2.x() + f10);
                        i(i12, constraintWidget2, interfaceC0477b);
                    } else {
                        androidx.constraintlayout.core.widgets.d dVar7 = constraintWidget2.R;
                        if (dVar5 == dVar7 && dVar6.f2797f == null) {
                            int f11 = e10 - dVar7.f();
                            constraintWidget2.J0(f11 - constraintWidget2.x(), f11);
                            i(i12, constraintWidget2, interfaceC0477b);
                        } else if (z11 && !constraintWidget2.k0()) {
                            f(i12, interfaceC0477b, constraintWidget2);
                        }
                    }
                }
                z12 = z13;
            }
        }
        boolean z14 = z12;
        if (constraintWidget instanceof androidx.constraintlayout.core.widgets.f) {
            return;
        }
        if (o11.d() != null && o11.n()) {
            Iterator it2 = o11.d().iterator();
            while (it2.hasNext()) {
                androidx.constraintlayout.core.widgets.d dVar8 = (androidx.constraintlayout.core.widgets.d) it2.next();
                ConstraintWidget constraintWidget3 = dVar8.f2795d;
                int i13 = i10 + 1;
                boolean a11 = a(i13, constraintWidget3);
                if (constraintWidget3.m0() && a11) {
                    ConstraintWidgetContainer.U1(i13, constraintWidget3, interfaceC0477b, new b.a(), b.a.f35629k);
                }
                if ((dVar8 == constraintWidget3.P && (dVar2 = constraintWidget3.R.f2797f) != null && dVar2.n()) || (dVar8 == constraintWidget3.R && (dVar = constraintWidget3.P.f2797f) != null && dVar.n())) {
                    z10 = z14;
                } else {
                    z10 = false;
                }
                ConstraintWidget.b T2 = constraintWidget3.T();
                ConstraintWidget.b bVar2 = ConstraintWidget.b.MATCH_CONSTRAINT;
                if (T2 == bVar2 && !a11) {
                    if (constraintWidget3.T() == bVar2 && constraintWidget3.D >= 0 && constraintWidget3.C >= 0 && (constraintWidget3.V() == 8 || (constraintWidget3.f2741x == 0 && constraintWidget3.v() == 0.0f))) {
                        if (!constraintWidget3.k0() && !constraintWidget3.l0() && z10 && !constraintWidget3.k0()) {
                            g(i13, constraintWidget, interfaceC0477b, constraintWidget3);
                        }
                    }
                } else if (!constraintWidget3.m0()) {
                    androidx.constraintlayout.core.widgets.d dVar9 = constraintWidget3.P;
                    if (dVar8 == dVar9 && constraintWidget3.R.f2797f == null) {
                        int f12 = dVar9.f() + e11;
                        constraintWidget3.J0(f12, constraintWidget3.x() + f12);
                        i(i13, constraintWidget3, interfaceC0477b);
                    } else {
                        androidx.constraintlayout.core.widgets.d dVar10 = constraintWidget3.R;
                        if (dVar8 == dVar10 && dVar9.f2797f == null) {
                            int f13 = e11 - dVar10.f();
                            constraintWidget3.J0(f13 - constraintWidget3.x(), f13);
                            i(i13, constraintWidget3, interfaceC0477b);
                        } else if (z10 && !constraintWidget3.k0()) {
                            f(i13, interfaceC0477b, constraintWidget3);
                        }
                    }
                }
            }
        }
        androidx.constraintlayout.core.widgets.d o12 = constraintWidget.o(d.a.BASELINE);
        if (o12.d() != null && o12.n()) {
            int e12 = o12.e();
            Iterator it3 = o12.d().iterator();
            while (it3.hasNext()) {
                androidx.constraintlayout.core.widgets.d dVar11 = (androidx.constraintlayout.core.widgets.d) it3.next();
                ConstraintWidget constraintWidget4 = dVar11.f2795d;
                int i14 = i10 + 1;
                boolean a12 = a(i14, constraintWidget4);
                if (constraintWidget4.m0() && a12) {
                    ConstraintWidgetContainer.U1(i14, constraintWidget4, interfaceC0477b, new b.a(), b.a.f35629k);
                }
                if (constraintWidget4.T() != ConstraintWidget.b.MATCH_CONSTRAINT || a12) {
                    if (!constraintWidget4.m0() && dVar11 == constraintWidget4.S) {
                        constraintWidget4.F0(dVar11.f() + e12);
                        i(i14, constraintWidget4, interfaceC0477b);
                    }
                }
            }
        }
        constraintWidget.r0();
    }
}
