package l1;

import androidx.constraintlayout.core.widgets.ConstraintWidget;
import androidx.constraintlayout.core.widgets.ConstraintWidgetContainer;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.Iterator;
import l1.b;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class e {

    /* renamed from: a  reason: collision with root package name */
    private ConstraintWidgetContainer f36251a;

    /* renamed from: d  reason: collision with root package name */
    private ConstraintWidgetContainer f36254d;

    /* renamed from: b  reason: collision with root package name */
    private boolean f36252b = true;

    /* renamed from: c  reason: collision with root package name */
    private boolean f36253c = true;

    /* renamed from: e  reason: collision with root package name */
    private ArrayList f36255e = new ArrayList();

    /* renamed from: f  reason: collision with root package name */
    private ArrayList f36256f = new ArrayList();

    /* renamed from: g  reason: collision with root package name */
    private b.InterfaceC0474b f36257g = null;

    /* renamed from: h  reason: collision with root package name */
    private b.a f36258h = new b.a();

    /* renamed from: i  reason: collision with root package name */
    ArrayList f36259i = new ArrayList();

    public e(ConstraintWidgetContainer constraintWidgetContainer) {
        this.f36251a = constraintWidgetContainer;
        this.f36254d = constraintWidgetContainer;
    }

    private void a(f fVar, int i10, int i11, f fVar2, ArrayList arrayList, m mVar) {
        int i12;
        f fVar3;
        ArrayList arrayList2;
        p pVar = fVar.f36263d;
        if (pVar.f36314c == null) {
            ConstraintWidgetContainer constraintWidgetContainer = this.f36251a;
            if (pVar != constraintWidgetContainer.f2374e && pVar != constraintWidgetContainer.f2376f) {
                if (mVar == null) {
                    mVar = new m(pVar, i11);
                    arrayList.add(mVar);
                }
                m mVar2 = mVar;
                pVar.f36314c = mVar2;
                mVar2.a(pVar);
                for (d dVar : pVar.f36319h.f36270k) {
                    if (dVar instanceof f) {
                        i12 = i10;
                        fVar3 = fVar2;
                        arrayList2 = arrayList;
                        a((f) dVar, i12, 0, fVar3, arrayList2, mVar2);
                    } else {
                        i12 = i10;
                        fVar3 = fVar2;
                        arrayList2 = arrayList;
                    }
                    i10 = i12;
                    fVar2 = fVar3;
                    arrayList = arrayList2;
                }
                int i13 = i10;
                f fVar4 = fVar2;
                ArrayList arrayList3 = arrayList;
                for (d dVar2 : pVar.f36320i.f36270k) {
                    if (dVar2 instanceof f) {
                        a((f) dVar2, i13, 1, fVar4, arrayList3, mVar2);
                    }
                }
                if (i13 == 1 && (pVar instanceof n)) {
                    for (d dVar3 : ((n) pVar).f36295k.f36270k) {
                        if (dVar3 instanceof f) {
                            a((f) dVar3, i13, 2, fVar4, arrayList3, mVar2);
                        }
                    }
                }
                for (f fVar5 : pVar.f36319h.f36271l) {
                    if (fVar5 == fVar4) {
                        mVar2.f36289b = true;
                    }
                    a(fVar5, i13, 0, fVar4, arrayList3, mVar2);
                }
                for (f fVar6 : pVar.f36320i.f36271l) {
                    if (fVar6 == fVar4) {
                        mVar2.f36289b = true;
                    }
                    a(fVar6, i13, 1, fVar4, arrayList3, mVar2);
                }
                if (i13 == 1 && (pVar instanceof n)) {
                    for (f fVar7 : ((n) pVar).f36295k.f36271l) {
                        a(fVar7, i13, 2, fVar4, arrayList3, mVar2);
                    }
                }
            }
        }
    }

    private boolean b(ConstraintWidgetContainer constraintWidgetContainer) {
        ConstraintWidget.b bVar;
        int i10;
        char c10;
        ConstraintWidget.b bVar2;
        float f10;
        ConstraintWidget.b bVar3;
        ConstraintWidget.b bVar4;
        ConstraintWidget.b bVar5;
        Iterator it = constraintWidgetContainer.L0.iterator();
        while (it.hasNext()) {
            ConstraintWidget constraintWidget = (ConstraintWidget) it.next();
            ConstraintWidget.b[] bVarArr = constraintWidget.Z;
            ConstraintWidget.b bVar6 = bVarArr[0];
            ConstraintWidget.b bVar7 = bVarArr[1];
            if (constraintWidget.V() == 8) {
                constraintWidget.f2366a = true;
            } else {
                if (constraintWidget.B < 1.0f && bVar6 == ConstraintWidget.b.MATCH_CONSTRAINT) {
                    constraintWidget.f2410w = 2;
                }
                if (constraintWidget.E < 1.0f && bVar7 == ConstraintWidget.b.MATCH_CONSTRAINT) {
                    constraintWidget.f2412x = 2;
                }
                if (constraintWidget.v() > 0.0f) {
                    ConstraintWidget.b bVar8 = ConstraintWidget.b.MATCH_CONSTRAINT;
                    if (bVar6 == bVar8 && (bVar7 == ConstraintWidget.b.WRAP_CONTENT || bVar7 == ConstraintWidget.b.FIXED)) {
                        constraintWidget.f2410w = 3;
                    } else if (bVar7 == bVar8 && (bVar6 == ConstraintWidget.b.WRAP_CONTENT || bVar6 == ConstraintWidget.b.FIXED)) {
                        constraintWidget.f2412x = 3;
                    } else if (bVar6 == bVar8 && bVar7 == bVar8) {
                        if (constraintWidget.f2410w == 0) {
                            constraintWidget.f2410w = 3;
                        }
                        if (constraintWidget.f2412x == 0) {
                            constraintWidget.f2412x = 3;
                        }
                    }
                }
                ConstraintWidget.b bVar9 = ConstraintWidget.b.MATCH_CONSTRAINT;
                if (bVar6 == bVar9 && constraintWidget.f2410w == 1 && (constraintWidget.O.f2468f == null || constraintWidget.Q.f2468f == null)) {
                    bVar6 = ConstraintWidget.b.WRAP_CONTENT;
                }
                if (bVar7 == bVar9 && constraintWidget.f2412x == 1 && (constraintWidget.P.f2468f == null || constraintWidget.R.f2468f == null)) {
                    bVar7 = ConstraintWidget.b.WRAP_CONTENT;
                }
                l lVar = constraintWidget.f2374e;
                lVar.f36315d = bVar6;
                int i11 = constraintWidget.f2410w;
                lVar.f36312a = i11;
                n nVar = constraintWidget.f2376f;
                nVar.f36315d = bVar7;
                int i12 = constraintWidget.f2412x;
                nVar.f36312a = i12;
                ConstraintWidget.b bVar10 = ConstraintWidget.b.MATCH_PARENT;
                if ((bVar6 == bVar10 || bVar6 == ConstraintWidget.b.FIXED || bVar6 == ConstraintWidget.b.WRAP_CONTENT) && (bVar7 == bVar10 || bVar7 == ConstraintWidget.b.FIXED || bVar7 == ConstraintWidget.b.WRAP_CONTENT)) {
                    ConstraintWidget.b bVar11 = bVar7;
                    ConstraintWidget.b bVar12 = bVar6;
                    int W = constraintWidget.W();
                    if (bVar12 == bVar10) {
                        W = (constraintWidgetContainer.W() - constraintWidget.O.f2469g) - constraintWidget.Q.f2469g;
                        bVar12 = ConstraintWidget.b.FIXED;
                    }
                    int i13 = W;
                    int x10 = constraintWidget.x();
                    if (bVar11 == bVar10) {
                        x10 = (constraintWidgetContainer.x() - constraintWidget.P.f2469g) - constraintWidget.R.f2469g;
                        bVar11 = ConstraintWidget.b.FIXED;
                    }
                    l(constraintWidget, bVar12, i13, bVar11, x10);
                    constraintWidget.f2374e.f36316e.d(constraintWidget.W());
                    constraintWidget.f2376f.f36316e.d(constraintWidget.x());
                    constraintWidget.f2366a = true;
                } else {
                    if (bVar6 == bVar9) {
                        bVar2 = bVar9;
                        ConstraintWidget.b bVar13 = ConstraintWidget.b.WRAP_CONTENT;
                        c10 = 0;
                        if (bVar7 != bVar13 && bVar7 != ConstraintWidget.b.FIXED) {
                            bVar = bVar7;
                            i10 = 3;
                        } else if (i11 == 3) {
                            if (bVar7 == bVar13) {
                                l(constraintWidget, bVar13, 0, bVar13, 0);
                            }
                            int x11 = constraintWidget.x();
                            ConstraintWidget.b bVar14 = ConstraintWidget.b.FIXED;
                            l(constraintWidget, bVar14, (int) ((x11 * constraintWidget.f2373d0) + 0.5f), bVar14, x11);
                            constraintWidget.f2374e.f36316e.d(constraintWidget.W());
                            constraintWidget.f2376f.f36316e.d(constraintWidget.x());
                            constraintWidget.f2366a = true;
                        } else if (i11 == 1) {
                            l(constraintWidget, bVar13, 0, bVar7, 0);
                            constraintWidget.f2374e.f36316e.f36281m = constraintWidget.W();
                        } else {
                            bVar = bVar7;
                            i10 = 3;
                            if (i11 == 2) {
                                ConstraintWidget.b bVar15 = constraintWidgetContainer.Z[0];
                                ConstraintWidget.b bVar16 = ConstraintWidget.b.FIXED;
                                if (bVar15 == bVar16 || bVar15 == bVar10) {
                                    l(constraintWidget, bVar16, (int) ((constraintWidget.B * constraintWidgetContainer.W()) + 0.5f), bVar, constraintWidget.x());
                                    constraintWidget.f2374e.f36316e.d(constraintWidget.W());
                                    constraintWidget.f2376f.f36316e.d(constraintWidget.x());
                                    constraintWidget.f2366a = true;
                                }
                            } else {
                                androidx.constraintlayout.core.widgets.d[] dVarArr = constraintWidget.W;
                                f10 = 1.0f;
                                if (dVarArr[0].f2468f == null || dVarArr[1].f2468f == null) {
                                    l(constraintWidget, bVar13, 0, bVar, 0);
                                    constraintWidget.f2374e.f36316e.d(constraintWidget.W());
                                    constraintWidget.f2376f.f36316e.d(constraintWidget.x());
                                    constraintWidget.f2366a = true;
                                } else {
                                    if (bVar == bVar2 || (bVar6 != (bVar4 = ConstraintWidget.b.WRAP_CONTENT) && bVar6 != ConstraintWidget.b.FIXED)) {
                                        bVar3 = bVar6;
                                    } else if (i12 == i10) {
                                        if (bVar6 == bVar4) {
                                            l(constraintWidget, bVar4, 0, bVar4, 0);
                                        }
                                        int W2 = constraintWidget.W();
                                        float f11 = constraintWidget.f2373d0;
                                        if (constraintWidget.w() == -1) {
                                            f11 = f10 / f11;
                                        }
                                        ConstraintWidget.b bVar17 = ConstraintWidget.b.FIXED;
                                        l(constraintWidget, bVar17, W2, bVar17, (int) ((W2 * f11) + 0.5f));
                                        constraintWidget.f2374e.f36316e.d(constraintWidget.W());
                                        constraintWidget.f2376f.f36316e.d(constraintWidget.x());
                                        constraintWidget.f2366a = true;
                                    } else if (i12 == 1) {
                                        l(constraintWidget, bVar6, 0, bVar4, 0);
                                        constraintWidget.f2376f.f36316e.f36281m = constraintWidget.x();
                                    } else {
                                        bVar3 = bVar6;
                                        if (i12 == 2) {
                                            ConstraintWidget.b bVar18 = constraintWidgetContainer.Z[1];
                                            bVar5 = bVar;
                                            ConstraintWidget.b bVar19 = ConstraintWidget.b.FIXED;
                                            if (bVar18 != bVar19 && bVar18 != bVar10) {
                                                bVar = bVar5;
                                            } else {
                                                l(constraintWidget, bVar3, constraintWidget.W(), bVar19, (int) ((constraintWidget.E * constraintWidgetContainer.x()) + 0.5f));
                                                constraintWidget.f2374e.f36316e.d(constraintWidget.W());
                                                constraintWidget.f2376f.f36316e.d(constraintWidget.x());
                                                constraintWidget.f2366a = true;
                                            }
                                        } else {
                                            bVar5 = bVar;
                                            androidx.constraintlayout.core.widgets.d[] dVarArr2 = constraintWidget.W;
                                            if (dVarArr2[2].f2468f != null && dVarArr2[i10].f2468f != null) {
                                                bVar = bVar5;
                                            } else {
                                                l(constraintWidget, bVar4, 0, bVar5, 0);
                                                constraintWidget.f2374e.f36316e.d(constraintWidget.W());
                                                constraintWidget.f2376f.f36316e.d(constraintWidget.x());
                                                constraintWidget.f2366a = true;
                                            }
                                        }
                                    }
                                    if (bVar3 == bVar2 && bVar == bVar2) {
                                        if (i11 == 1 && i12 != 1) {
                                            if (i12 == 2 && i11 == 2) {
                                                ConstraintWidget.b[] bVarArr2 = constraintWidgetContainer.Z;
                                                ConstraintWidget.b bVar20 = bVarArr2[c10];
                                                ConstraintWidget.b bVar21 = ConstraintWidget.b.FIXED;
                                                if (bVar20 == bVar21 && bVarArr2[1] == bVar21) {
                                                    l(constraintWidget, bVar21, (int) ((constraintWidget.B * constraintWidgetContainer.W()) + 0.5f), bVar21, (int) ((constraintWidget.E * constraintWidgetContainer.x()) + 0.5f));
                                                    constraintWidget.f2374e.f36316e.d(constraintWidget.W());
                                                    constraintWidget.f2376f.f36316e.d(constraintWidget.x());
                                                    constraintWidget.f2366a = true;
                                                }
                                            }
                                        } else {
                                            ConstraintWidget.b bVar22 = ConstraintWidget.b.WRAP_CONTENT;
                                            l(constraintWidget, bVar22, 0, bVar22, 0);
                                            constraintWidget.f2374e.f36316e.f36281m = constraintWidget.W();
                                            constraintWidget.f2376f.f36316e.f36281m = constraintWidget.x();
                                        }
                                    }
                                }
                            }
                        }
                    } else {
                        bVar = bVar7;
                        i10 = 3;
                        c10 = 0;
                        bVar2 = bVar9;
                    }
                    f10 = 1.0f;
                    if (bVar == bVar2) {
                    }
                    bVar3 = bVar6;
                    if (bVar3 == bVar2) {
                        if (i11 == 1) {
                        }
                        ConstraintWidget.b bVar222 = ConstraintWidget.b.WRAP_CONTENT;
                        l(constraintWidget, bVar222, 0, bVar222, 0);
                        constraintWidget.f2374e.f36316e.f36281m = constraintWidget.W();
                        constraintWidget.f2376f.f36316e.f36281m = constraintWidget.x();
                    }
                }
            }
        }
        return false;
    }

    private int e(ConstraintWidgetContainer constraintWidgetContainer, int i10) {
        int size = this.f36259i.size();
        long j10 = 0;
        for (int i11 = 0; i11 < size; i11++) {
            j10 = Math.max(j10, ((m) this.f36259i.get(i11)).b(constraintWidgetContainer, i10));
        }
        return (int) j10;
    }

    private void i(p pVar, int i10, ArrayList arrayList) {
        for (d dVar : pVar.f36319h.f36270k) {
            if (dVar instanceof f) {
                a((f) dVar, i10, 0, pVar.f36320i, arrayList, null);
            } else if (dVar instanceof p) {
                a(((p) dVar).f36319h, i10, 0, pVar.f36320i, arrayList, null);
            }
        }
        for (d dVar2 : pVar.f36320i.f36270k) {
            if (dVar2 instanceof f) {
                a((f) dVar2, i10, 1, pVar.f36319h, arrayList, null);
            } else if (dVar2 instanceof p) {
                a(((p) dVar2).f36320i, i10, 1, pVar.f36319h, arrayList, null);
            }
        }
        int i11 = i10;
        if (i11 == 1) {
            for (d dVar3 : ((n) pVar).f36295k.f36270k) {
                if (dVar3 instanceof f) {
                    a((f) dVar3, i11, 2, null, arrayList, null);
                }
                i11 = i10;
            }
        }
    }

    private void l(ConstraintWidget constraintWidget, ConstraintWidget.b bVar, int i10, ConstraintWidget.b bVar2, int i11) {
        b.a aVar = this.f36258h;
        aVar.f36239a = bVar;
        aVar.f36240b = bVar2;
        aVar.f36241c = i10;
        aVar.f36242d = i11;
        this.f36257g.b(constraintWidget, aVar);
        constraintWidget.l1(this.f36258h.f36243e);
        constraintWidget.M0(this.f36258h.f36244f);
        constraintWidget.L0(this.f36258h.f36246h);
        constraintWidget.B0(this.f36258h.f36245g);
    }

    public void c() {
        d(this.f36255e);
        this.f36259i.clear();
        m.f36287h = 0;
        i(this.f36251a.f2374e, 0, this.f36259i);
        i(this.f36251a.f2376f, 1, this.f36259i);
        this.f36252b = false;
    }

    public void d(ArrayList arrayList) {
        arrayList.clear();
        this.f36254d.f2374e.f();
        this.f36254d.f2376f.f();
        arrayList.add(this.f36254d.f2374e);
        arrayList.add(this.f36254d.f2376f);
        Iterator it = this.f36254d.L0.iterator();
        HashSet hashSet = null;
        while (it.hasNext()) {
            ConstraintWidget constraintWidget = (ConstraintWidget) it.next();
            if (constraintWidget instanceof androidx.constraintlayout.core.widgets.f) {
                arrayList.add(new j(constraintWidget));
            } else {
                if (constraintWidget.i0()) {
                    if (constraintWidget.f2370c == null) {
                        constraintWidget.f2370c = new c(constraintWidget, 0);
                    }
                    if (hashSet == null) {
                        hashSet = new HashSet();
                    }
                    hashSet.add(constraintWidget.f2370c);
                } else {
                    arrayList.add(constraintWidget.f2374e);
                }
                if (constraintWidget.k0()) {
                    if (constraintWidget.f2372d == null) {
                        constraintWidget.f2372d = new c(constraintWidget, 1);
                    }
                    if (hashSet == null) {
                        hashSet = new HashSet();
                    }
                    hashSet.add(constraintWidget.f2372d);
                } else {
                    arrayList.add(constraintWidget.f2376f);
                }
                if (constraintWidget instanceof k1.b) {
                    arrayList.add(new k(constraintWidget));
                }
            }
        }
        if (hashSet != null) {
            arrayList.addAll(hashSet);
        }
        Iterator it2 = arrayList.iterator();
        while (it2.hasNext()) {
            ((p) it2.next()).f();
        }
        Iterator it3 = arrayList.iterator();
        while (it3.hasNext()) {
            p pVar = (p) it3.next();
            if (pVar.f36313b != this.f36254d) {
                pVar.d();
            }
        }
    }

    public boolean f(boolean z10) {
        boolean z11;
        boolean z12 = false;
        if (this.f36252b || this.f36253c) {
            Iterator it = this.f36251a.L0.iterator();
            while (it.hasNext()) {
                ConstraintWidget constraintWidget = (ConstraintWidget) it.next();
                constraintWidget.n();
                constraintWidget.f2366a = false;
                constraintWidget.f2374e.r();
                constraintWidget.f2376f.q();
            }
            this.f36251a.n();
            ConstraintWidgetContainer constraintWidgetContainer = this.f36251a;
            constraintWidgetContainer.f2366a = false;
            constraintWidgetContainer.f2374e.r();
            this.f36251a.f2376f.q();
            this.f36253c = false;
        }
        if (b(this.f36254d)) {
            return false;
        }
        this.f36251a.n1(0);
        this.f36251a.o1(0);
        ConstraintWidget.b u10 = this.f36251a.u(0);
        ConstraintWidget.b u11 = this.f36251a.u(1);
        if (this.f36252b) {
            c();
        }
        int X = this.f36251a.X();
        int Y = this.f36251a.Y();
        this.f36251a.f2374e.f36319h.d(X);
        this.f36251a.f2376f.f36319h.d(Y);
        m();
        ConstraintWidget.b bVar = ConstraintWidget.b.WRAP_CONTENT;
        if (u10 == bVar || u11 == bVar) {
            if (z10) {
                Iterator it2 = this.f36255e.iterator();
                while (true) {
                    if (!it2.hasNext()) {
                        break;
                    } else if (!((p) it2.next()).m()) {
                        z10 = false;
                        break;
                    }
                }
            }
            if (z10 && u10 == ConstraintWidget.b.WRAP_CONTENT) {
                this.f36251a.Q0(ConstraintWidget.b.FIXED);
                ConstraintWidgetContainer constraintWidgetContainer2 = this.f36251a;
                constraintWidgetContainer2.l1(e(constraintWidgetContainer2, 0));
                ConstraintWidgetContainer constraintWidgetContainer3 = this.f36251a;
                constraintWidgetContainer3.f2374e.f36316e.d(constraintWidgetContainer3.W());
            }
            if (z10 && u11 == ConstraintWidget.b.WRAP_CONTENT) {
                this.f36251a.h1(ConstraintWidget.b.FIXED);
                ConstraintWidgetContainer constraintWidgetContainer4 = this.f36251a;
                constraintWidgetContainer4.M0(e(constraintWidgetContainer4, 1));
                ConstraintWidgetContainer constraintWidgetContainer5 = this.f36251a;
                constraintWidgetContainer5.f2376f.f36316e.d(constraintWidgetContainer5.x());
            }
        }
        ConstraintWidgetContainer constraintWidgetContainer6 = this.f36251a;
        ConstraintWidget.b bVar2 = constraintWidgetContainer6.Z[0];
        ConstraintWidget.b bVar3 = ConstraintWidget.b.FIXED;
        if (bVar2 != bVar3 && bVar2 != ConstraintWidget.b.MATCH_PARENT) {
            z11 = false;
        } else {
            int W = constraintWidgetContainer6.W() + X;
            this.f36251a.f2374e.f36320i.d(W);
            this.f36251a.f2374e.f36316e.d(W - X);
            m();
            ConstraintWidgetContainer constraintWidgetContainer7 = this.f36251a;
            ConstraintWidget.b bVar4 = constraintWidgetContainer7.Z[1];
            if (bVar4 == bVar3 || bVar4 == ConstraintWidget.b.MATCH_PARENT) {
                int x10 = constraintWidgetContainer7.x() + Y;
                this.f36251a.f2376f.f36320i.d(x10);
                this.f36251a.f2376f.f36316e.d(x10 - Y);
            }
            m();
            z11 = true;
        }
        Iterator it3 = this.f36255e.iterator();
        while (it3.hasNext()) {
            p pVar = (p) it3.next();
            if (pVar.f36313b != this.f36251a || pVar.f36318g) {
                pVar.e();
            }
        }
        Iterator it4 = this.f36255e.iterator();
        while (true) {
            if (it4.hasNext()) {
                p pVar2 = (p) it4.next();
                if (z11 || pVar2.f36313b != this.f36251a) {
                    if (!pVar2.f36319h.f36269j) {
                        break;
                    }
                    if (!pVar2.f36320i.f36269j) {
                        if (!(pVar2 instanceof j)) {
                            break;
                        }
                    }
                    if (!pVar2.f36316e.f36269j && !(pVar2 instanceof c) && !(pVar2 instanceof j)) {
                        break;
                    }
                }
            } else {
                z12 = true;
                break;
            }
        }
        this.f36251a.Q0(u10);
        this.f36251a.h1(u11);
        return z12;
    }

    public boolean g(boolean z10) {
        if (this.f36252b) {
            Iterator it = this.f36251a.L0.iterator();
            while (it.hasNext()) {
                ConstraintWidget constraintWidget = (ConstraintWidget) it.next();
                constraintWidget.n();
                constraintWidget.f2366a = false;
                l lVar = constraintWidget.f2374e;
                lVar.f36316e.f36269j = false;
                lVar.f36318g = false;
                lVar.r();
                n nVar = constraintWidget.f2376f;
                nVar.f36316e.f36269j = false;
                nVar.f36318g = false;
                nVar.q();
            }
            this.f36251a.n();
            ConstraintWidgetContainer constraintWidgetContainer = this.f36251a;
            constraintWidgetContainer.f2366a = false;
            l lVar2 = constraintWidgetContainer.f2374e;
            lVar2.f36316e.f36269j = false;
            lVar2.f36318g = false;
            lVar2.r();
            n nVar2 = this.f36251a.f2376f;
            nVar2.f36316e.f36269j = false;
            nVar2.f36318g = false;
            nVar2.q();
            c();
        }
        if (b(this.f36254d)) {
            return false;
        }
        this.f36251a.n1(0);
        this.f36251a.o1(0);
        this.f36251a.f2374e.f36319h.d(0);
        this.f36251a.f2376f.f36319h.d(0);
        return true;
    }

    public boolean h(boolean z10, int i10) {
        boolean z11;
        ConstraintWidget.b bVar;
        boolean z12 = false;
        ConstraintWidget.b u10 = this.f36251a.u(0);
        ConstraintWidget.b u11 = this.f36251a.u(1);
        int X = this.f36251a.X();
        int Y = this.f36251a.Y();
        if (z10 && (u10 == (bVar = ConstraintWidget.b.WRAP_CONTENT) || u11 == bVar)) {
            Iterator it = this.f36255e.iterator();
            while (true) {
                if (!it.hasNext()) {
                    break;
                }
                p pVar = (p) it.next();
                if (pVar.f36317f == i10 && !pVar.m()) {
                    z10 = false;
                    break;
                }
            }
            if (i10 == 0) {
                if (z10 && u10 == ConstraintWidget.b.WRAP_CONTENT) {
                    this.f36251a.Q0(ConstraintWidget.b.FIXED);
                    ConstraintWidgetContainer constraintWidgetContainer = this.f36251a;
                    constraintWidgetContainer.l1(e(constraintWidgetContainer, 0));
                    ConstraintWidgetContainer constraintWidgetContainer2 = this.f36251a;
                    constraintWidgetContainer2.f2374e.f36316e.d(constraintWidgetContainer2.W());
                }
            } else if (z10 && u11 == ConstraintWidget.b.WRAP_CONTENT) {
                this.f36251a.h1(ConstraintWidget.b.FIXED);
                ConstraintWidgetContainer constraintWidgetContainer3 = this.f36251a;
                constraintWidgetContainer3.M0(e(constraintWidgetContainer3, 1));
                ConstraintWidgetContainer constraintWidgetContainer4 = this.f36251a;
                constraintWidgetContainer4.f2376f.f36316e.d(constraintWidgetContainer4.x());
            }
        }
        if (i10 == 0) {
            ConstraintWidgetContainer constraintWidgetContainer5 = this.f36251a;
            ConstraintWidget.b bVar2 = constraintWidgetContainer5.Z[0];
            if (bVar2 == ConstraintWidget.b.FIXED || bVar2 == ConstraintWidget.b.MATCH_PARENT) {
                int W = constraintWidgetContainer5.W() + X;
                this.f36251a.f2374e.f36320i.d(W);
                this.f36251a.f2374e.f36316e.d(W - X);
                z11 = true;
            }
            z11 = false;
        } else {
            ConstraintWidgetContainer constraintWidgetContainer6 = this.f36251a;
            ConstraintWidget.b bVar3 = constraintWidgetContainer6.Z[1];
            if (bVar3 == ConstraintWidget.b.FIXED || bVar3 == ConstraintWidget.b.MATCH_PARENT) {
                int x10 = constraintWidgetContainer6.x() + Y;
                this.f36251a.f2376f.f36320i.d(x10);
                this.f36251a.f2376f.f36316e.d(x10 - Y);
                z11 = true;
            }
            z11 = false;
        }
        m();
        Iterator it2 = this.f36255e.iterator();
        while (it2.hasNext()) {
            p pVar2 = (p) it2.next();
            if (pVar2.f36317f == i10 && (pVar2.f36313b != this.f36251a || pVar2.f36318g)) {
                pVar2.e();
            }
        }
        Iterator it3 = this.f36255e.iterator();
        while (true) {
            if (it3.hasNext()) {
                p pVar3 = (p) it3.next();
                if (pVar3.f36317f == i10 && (z11 || pVar3.f36313b != this.f36251a)) {
                    if (!pVar3.f36319h.f36269j) {
                        break;
                    } else if (!pVar3.f36320i.f36269j) {
                        break;
                    } else if (!(pVar3 instanceof c) && !pVar3.f36316e.f36269j) {
                        break;
                    }
                }
            } else {
                z12 = true;
                break;
            }
        }
        this.f36251a.Q0(u10);
        this.f36251a.h1(u11);
        return z12;
    }

    public void j() {
        this.f36252b = true;
    }

    public void k() {
        this.f36253c = true;
    }

    public void m() {
        boolean z10;
        g gVar;
        Iterator it = this.f36251a.L0.iterator();
        while (it.hasNext()) {
            ConstraintWidget constraintWidget = (ConstraintWidget) it.next();
            if (!constraintWidget.f2366a) {
                ConstraintWidget.b[] bVarArr = constraintWidget.Z;
                boolean z11 = false;
                ConstraintWidget.b bVar = bVarArr[0];
                ConstraintWidget.b bVar2 = bVarArr[1];
                int i10 = constraintWidget.f2410w;
                int i11 = constraintWidget.f2412x;
                ConstraintWidget.b bVar3 = ConstraintWidget.b.WRAP_CONTENT;
                if (bVar != bVar3 && (bVar != ConstraintWidget.b.MATCH_CONSTRAINT || i10 != 1)) {
                    z10 = false;
                } else {
                    z10 = true;
                }
                if (bVar2 == bVar3 || (bVar2 == ConstraintWidget.b.MATCH_CONSTRAINT && i11 == 1)) {
                    z11 = true;
                }
                g gVar2 = constraintWidget.f2374e.f36316e;
                boolean z12 = gVar2.f36269j;
                g gVar3 = constraintWidget.f2376f.f36316e;
                boolean z13 = gVar3.f36269j;
                if (z12 && z13) {
                    ConstraintWidget.b bVar4 = ConstraintWidget.b.FIXED;
                    l(constraintWidget, bVar4, gVar2.f36266g, bVar4, gVar3.f36266g);
                    constraintWidget.f2366a = true;
                } else if (z12 && z11) {
                    l(constraintWidget, ConstraintWidget.b.FIXED, gVar2.f36266g, bVar3, gVar3.f36266g);
                    if (bVar2 == ConstraintWidget.b.MATCH_CONSTRAINT) {
                        constraintWidget.f2376f.f36316e.f36281m = constraintWidget.x();
                    } else {
                        constraintWidget.f2376f.f36316e.d(constraintWidget.x());
                        constraintWidget.f2366a = true;
                    }
                } else if (z13 && z10) {
                    l(constraintWidget, bVar3, gVar2.f36266g, ConstraintWidget.b.FIXED, gVar3.f36266g);
                    if (bVar == ConstraintWidget.b.MATCH_CONSTRAINT) {
                        constraintWidget.f2374e.f36316e.f36281m = constraintWidget.W();
                    } else {
                        constraintWidget.f2374e.f36316e.d(constraintWidget.W());
                        constraintWidget.f2366a = true;
                    }
                }
                if (constraintWidget.f2366a && (gVar = constraintWidget.f2376f.f36296l) != null) {
                    gVar.d(constraintWidget.p());
                }
            }
        }
    }

    public void n(b.InterfaceC0474b interfaceC0474b) {
        this.f36257g = interfaceC0474b;
    }
}
