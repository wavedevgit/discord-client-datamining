package androidx.constraintlayout.core.widgets;

import androidx.constraintlayout.core.widgets.ConstraintWidget;
import java.util.ArrayList;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class e extends h {

    /* renamed from: x1  reason: collision with root package name */
    private ConstraintWidget[] f2393x1;

    /* renamed from: a1  reason: collision with root package name */
    private int f2370a1 = -1;

    /* renamed from: b1  reason: collision with root package name */
    private int f2371b1 = -1;

    /* renamed from: c1  reason: collision with root package name */
    private int f2372c1 = -1;

    /* renamed from: d1  reason: collision with root package name */
    private int f2373d1 = -1;

    /* renamed from: e1  reason: collision with root package name */
    private int f2374e1 = -1;

    /* renamed from: f1  reason: collision with root package name */
    private int f2375f1 = -1;

    /* renamed from: g1  reason: collision with root package name */
    private float f2376g1 = 0.5f;

    /* renamed from: h1  reason: collision with root package name */
    private float f2377h1 = 0.5f;

    /* renamed from: i1  reason: collision with root package name */
    private float f2378i1 = 0.5f;

    /* renamed from: j1  reason: collision with root package name */
    private float f2379j1 = 0.5f;

    /* renamed from: k1  reason: collision with root package name */
    private float f2380k1 = 0.5f;

    /* renamed from: l1  reason: collision with root package name */
    private float f2381l1 = 0.5f;

    /* renamed from: m1  reason: collision with root package name */
    private int f2382m1 = 0;

    /* renamed from: n1  reason: collision with root package name */
    private int f2383n1 = 0;

    /* renamed from: o1  reason: collision with root package name */
    private int f2384o1 = 2;

    /* renamed from: p1  reason: collision with root package name */
    private int f2385p1 = 2;

    /* renamed from: q1  reason: collision with root package name */
    private int f2386q1 = 0;

    /* renamed from: r1  reason: collision with root package name */
    private int f2387r1 = -1;

    /* renamed from: s1  reason: collision with root package name */
    private int f2388s1 = 0;

    /* renamed from: t1  reason: collision with root package name */
    private ArrayList f2389t1 = new ArrayList();

    /* renamed from: u1  reason: collision with root package name */
    private ConstraintWidget[] f2390u1 = null;

    /* renamed from: v1  reason: collision with root package name */
    private ConstraintWidget[] f2391v1 = null;

    /* renamed from: w1  reason: collision with root package name */
    private int[] f2392w1 = null;

    /* renamed from: y1  reason: collision with root package name */
    private int f2394y1 = 0;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class a {

        /* renamed from: a  reason: collision with root package name */
        private int f2395a;

        /* renamed from: d  reason: collision with root package name */
        private d f2398d;

        /* renamed from: e  reason: collision with root package name */
        private d f2399e;

        /* renamed from: f  reason: collision with root package name */
        private d f2400f;

        /* renamed from: g  reason: collision with root package name */
        private d f2401g;

        /* renamed from: h  reason: collision with root package name */
        private int f2402h;

        /* renamed from: i  reason: collision with root package name */
        private int f2403i;

        /* renamed from: j  reason: collision with root package name */
        private int f2404j;

        /* renamed from: k  reason: collision with root package name */
        private int f2405k;

        /* renamed from: q  reason: collision with root package name */
        private int f2411q;

        /* renamed from: b  reason: collision with root package name */
        private ConstraintWidget f2396b = null;

        /* renamed from: c  reason: collision with root package name */
        int f2397c = 0;

        /* renamed from: l  reason: collision with root package name */
        private int f2406l = 0;

        /* renamed from: m  reason: collision with root package name */
        private int f2407m = 0;

        /* renamed from: n  reason: collision with root package name */
        private int f2408n = 0;

        /* renamed from: o  reason: collision with root package name */
        private int f2409o = 0;

        /* renamed from: p  reason: collision with root package name */
        private int f2410p = 0;

        a(int i10, d dVar, d dVar2, d dVar3, d dVar4, int i11) {
            this.f2402h = 0;
            this.f2403i = 0;
            this.f2404j = 0;
            this.f2405k = 0;
            this.f2411q = 0;
            this.f2395a = i10;
            this.f2398d = dVar;
            this.f2399e = dVar2;
            this.f2400f = dVar3;
            this.f2401g = dVar4;
            this.f2402h = e.this.A1();
            this.f2403i = e.this.C1();
            this.f2404j = e.this.B1();
            this.f2405k = e.this.z1();
            this.f2411q = i11;
        }

        private void h() {
            this.f2406l = 0;
            this.f2407m = 0;
            this.f2396b = null;
            this.f2397c = 0;
            int i10 = this.f2409o;
            for (int i11 = 0; i11 < i10 && this.f2408n + i11 < e.this.f2394y1; i11++) {
                ConstraintWidget constraintWidget = e.this.f2393x1[this.f2408n + i11];
                if (this.f2395a != 0) {
                    int m22 = e.this.m2(constraintWidget, this.f2411q);
                    int l22 = e.this.l2(constraintWidget, this.f2411q);
                    int i12 = e.this.f2383n1;
                    if (constraintWidget.V() == 8) {
                        i12 = 0;
                    }
                    this.f2407m += l22 + i12;
                    if (this.f2396b == null || this.f2397c < m22) {
                        this.f2396b = constraintWidget;
                        this.f2397c = m22;
                        this.f2406l = m22;
                    }
                } else {
                    int W = constraintWidget.W();
                    int i13 = e.this.f2382m1;
                    if (constraintWidget.V() == 8) {
                        i13 = 0;
                    }
                    this.f2406l += W + i13;
                    int l23 = e.this.l2(constraintWidget, this.f2411q);
                    if (this.f2396b == null || this.f2397c < l23) {
                        this.f2396b = constraintWidget;
                        this.f2397c = l23;
                        this.f2407m = l23;
                    }
                }
            }
        }

        public void b(ConstraintWidget constraintWidget) {
            int i10 = 0;
            if (this.f2395a == 0) {
                int m22 = e.this.m2(constraintWidget, this.f2411q);
                if (constraintWidget.A() == ConstraintWidget.b.MATCH_CONSTRAINT) {
                    this.f2410p++;
                    m22 = 0;
                }
                int i11 = e.this.f2382m1;
                if (constraintWidget.V() != 8) {
                    i10 = i11;
                }
                this.f2406l += m22 + i10;
                int l22 = e.this.l2(constraintWidget, this.f2411q);
                if (this.f2396b == null || this.f2397c < l22) {
                    this.f2396b = constraintWidget;
                    this.f2397c = l22;
                    this.f2407m = l22;
                }
            } else {
                int m23 = e.this.m2(constraintWidget, this.f2411q);
                int l23 = e.this.l2(constraintWidget, this.f2411q);
                if (constraintWidget.T() == ConstraintWidget.b.MATCH_CONSTRAINT) {
                    this.f2410p++;
                    l23 = 0;
                }
                int i12 = e.this.f2383n1;
                if (constraintWidget.V() != 8) {
                    i10 = i12;
                }
                this.f2407m += l23 + i10;
                if (this.f2396b == null || this.f2397c < m23) {
                    this.f2396b = constraintWidget;
                    this.f2397c = m23;
                    this.f2406l = m23;
                }
            }
            this.f2409o++;
        }

        public void c() {
            this.f2397c = 0;
            this.f2396b = null;
            this.f2406l = 0;
            this.f2407m = 0;
            this.f2408n = 0;
            this.f2409o = 0;
            this.f2410p = 0;
        }

        public void d(boolean z10, int i10, boolean z11) {
            ConstraintWidget constraintWidget;
            int i11;
            char c10;
            float f10;
            float f11;
            int i12 = this.f2409o;
            for (int i13 = 0; i13 < i12 && this.f2408n + i13 < e.this.f2394y1; i13++) {
                ConstraintWidget constraintWidget2 = e.this.f2393x1[this.f2408n + i13];
                if (constraintWidget2 != null) {
                    constraintWidget2.u0();
                }
            }
            if (i12 == 0 || this.f2396b == null) {
                return;
            }
            boolean z12 = z11 && i10 == 0;
            int i14 = -1;
            int i15 = -1;
            for (int i16 = 0; i16 < i12; i16++) {
                int i17 = z10 ? (i12 - 1) - i16 : i16;
                if (this.f2408n + i17 >= e.this.f2394y1) {
                    break;
                }
                ConstraintWidget constraintWidget3 = e.this.f2393x1[this.f2408n + i17];
                if (constraintWidget3 != null && constraintWidget3.V() == 0) {
                    if (i14 == -1) {
                        i14 = i16;
                    }
                    i15 = i16;
                }
            }
            ConstraintWidget constraintWidget4 = null;
            if (this.f2395a == 0) {
                ConstraintWidget constraintWidget5 = this.f2396b;
                constraintWidget5.f1(e.this.f2371b1);
                int i18 = this.f2403i;
                if (i10 > 0) {
                    i18 += e.this.f2383n1;
                }
                constraintWidget5.P.a(this.f2399e, i18);
                if (z11) {
                    constraintWidget5.R.a(this.f2401g, this.f2405k);
                }
                if (i10 > 0) {
                    this.f2399e.f2354d.R.a(constraintWidget5.P, 0);
                }
                char c11 = 3;
                if (e.this.f2385p1 == 3 && !constraintWidget5.Z()) {
                    for (int i19 = 0; i19 < i12; i19++) {
                        int i20 = z10 ? (i12 - 1) - i19 : i19;
                        if (this.f2408n + i20 >= e.this.f2394y1) {
                            break;
                        }
                        constraintWidget = e.this.f2393x1[this.f2408n + i20];
                        if (constraintWidget.Z()) {
                            break;
                        }
                    }
                }
                constraintWidget = constraintWidget5;
                int i21 = 0;
                while (i21 < i12) {
                    int i22 = z10 ? (i12 - 1) - i21 : i21;
                    if (this.f2408n + i22 >= e.this.f2394y1) {
                        return;
                    }
                    ConstraintWidget constraintWidget6 = e.this.f2393x1[this.f2408n + i22];
                    if (constraintWidget6 == null) {
                        constraintWidget6 = constraintWidget4;
                        c10 = c11;
                    } else {
                        if (i21 == 0) {
                            i11 = 1;
                            constraintWidget6.k(constraintWidget6.O, this.f2398d, this.f2402h);
                        } else {
                            i11 = 1;
                        }
                        if (i22 == 0) {
                            int i23 = e.this.f2370a1;
                            float f12 = e.this.f2376g1;
                            if (z10) {
                                f12 = 1.0f - f12;
                            }
                            if (this.f2408n != 0 || e.this.f2372c1 == -1) {
                                if (z11 && e.this.f2374e1 != -1) {
                                    i23 = e.this.f2374e1;
                                    if (z10) {
                                        f11 = e.this.f2380k1;
                                        f10 = 1.0f - f11;
                                        f12 = f10;
                                    } else {
                                        f10 = e.this.f2380k1;
                                        f12 = f10;
                                    }
                                }
                            } else {
                                i23 = e.this.f2372c1;
                                if (z10) {
                                    f11 = e.this.f2378i1;
                                    f10 = 1.0f - f11;
                                    f12 = f10;
                                } else {
                                    f10 = e.this.f2378i1;
                                    f12 = f10;
                                }
                            }
                            constraintWidget6.O0(i23);
                            constraintWidget6.N0(f12);
                        }
                        if (i21 == i12 - 1) {
                            constraintWidget6.k(constraintWidget6.Q, this.f2400f, this.f2404j);
                        }
                        if (constraintWidget4 != null) {
                            constraintWidget6.O.a(constraintWidget4.Q, e.this.f2382m1);
                            if (i21 == i14) {
                                constraintWidget6.O.u(this.f2402h);
                            }
                            constraintWidget4.Q.a(constraintWidget6.O, 0);
                            if (i21 == i15 + 1) {
                                constraintWidget4.Q.u(this.f2404j);
                            }
                        }
                        if (constraintWidget6 != constraintWidget5) {
                            c10 = 3;
                            if (e.this.f2385p1 != 3 || !constraintWidget.Z() || constraintWidget6 == constraintWidget || !constraintWidget6.Z()) {
                                int i24 = e.this.f2385p1;
                                if (i24 == 0) {
                                    constraintWidget6.P.a(constraintWidget5.P, 0);
                                } else if (i24 == i11) {
                                    constraintWidget6.R.a(constraintWidget5.R, 0);
                                } else if (z12) {
                                    constraintWidget6.P.a(this.f2399e, this.f2403i);
                                    constraintWidget6.R.a(this.f2401g, this.f2405k);
                                } else {
                                    constraintWidget6.P.a(constraintWidget5.P, 0);
                                    constraintWidget6.R.a(constraintWidget5.R, 0);
                                }
                            } else {
                                constraintWidget6.S.a(constraintWidget.S, 0);
                            }
                        } else {
                            c10 = 3;
                        }
                    }
                    i21++;
                    c11 = c10;
                    constraintWidget4 = constraintWidget6;
                }
                return;
            }
            ConstraintWidget constraintWidget7 = this.f2396b;
            constraintWidget7.O0(e.this.f2370a1);
            int i25 = this.f2402h;
            if (i10 > 0) {
                i25 += e.this.f2382m1;
            }
            if (z10) {
                constraintWidget7.Q.a(this.f2400f, i25);
                if (z11) {
                    constraintWidget7.O.a(this.f2398d, this.f2404j);
                }
                if (i10 > 0) {
                    this.f2400f.f2354d.O.a(constraintWidget7.Q, 0);
                }
            } else {
                constraintWidget7.O.a(this.f2398d, i25);
                if (z11) {
                    constraintWidget7.Q.a(this.f2400f, this.f2404j);
                }
                if (i10 > 0) {
                    this.f2398d.f2354d.Q.a(constraintWidget7.O, 0);
                }
            }
            for (int i26 = 0; i26 < i12 && this.f2408n + i26 < e.this.f2394y1; i26++) {
                ConstraintWidget constraintWidget8 = e.this.f2393x1[this.f2408n + i26];
                if (constraintWidget8 != null) {
                    if (i26 == 0) {
                        constraintWidget8.k(constraintWidget8.P, this.f2399e, this.f2403i);
                        int i27 = e.this.f2371b1;
                        float f13 = e.this.f2377h1;
                        if (this.f2408n != 0 || e.this.f2373d1 == -1) {
                            if (z11 && e.this.f2375f1 != -1) {
                                i27 = e.this.f2375f1;
                                f13 = e.this.f2381l1;
                            }
                        } else {
                            i27 = e.this.f2373d1;
                            f13 = e.this.f2379j1;
                        }
                        constraintWidget8.f1(i27);
                        constraintWidget8.e1(f13);
                    }
                    if (i26 == i12 - 1) {
                        constraintWidget8.k(constraintWidget8.R, this.f2401g, this.f2405k);
                    }
                    if (constraintWidget4 != null) {
                        constraintWidget8.P.a(constraintWidget4.R, e.this.f2383n1);
                        if (i26 == i14) {
                            constraintWidget8.P.u(this.f2403i);
                        }
                        constraintWidget4.R.a(constraintWidget8.P, 0);
                        if (i26 == i15 + 1) {
                            constraintWidget4.R.u(this.f2405k);
                        }
                    }
                    if (constraintWidget8 != constraintWidget7) {
                        if (z10) {
                            int i28 = e.this.f2384o1;
                            if (i28 == 0) {
                                constraintWidget8.Q.a(constraintWidget7.Q, 0);
                            } else if (i28 == 1) {
                                constraintWidget8.O.a(constraintWidget7.O, 0);
                            } else if (i28 == 2) {
                                constraintWidget8.O.a(constraintWidget7.O, 0);
                                constraintWidget8.Q.a(constraintWidget7.Q, 0);
                            }
                        } else {
                            int i29 = e.this.f2384o1;
                            if (i29 == 0) {
                                constraintWidget8.O.a(constraintWidget7.O, 0);
                            } else if (i29 == 1) {
                                constraintWidget8.Q.a(constraintWidget7.Q, 0);
                            } else if (i29 == 2) {
                                if (z12) {
                                    constraintWidget8.O.a(this.f2398d, this.f2402h);
                                    constraintWidget8.Q.a(this.f2400f, this.f2404j);
                                } else {
                                    constraintWidget8.O.a(constraintWidget7.O, 0);
                                    constraintWidget8.Q.a(constraintWidget7.Q, 0);
                                }
                            }
                            constraintWidget4 = constraintWidget8;
                        }
                    }
                    constraintWidget4 = constraintWidget8;
                }
            }
        }

        public int e() {
            if (this.f2395a == 1) {
                return this.f2407m - e.this.f2383n1;
            }
            return this.f2407m;
        }

        public int f() {
            if (this.f2395a == 0) {
                return this.f2406l - e.this.f2382m1;
            }
            return this.f2406l;
        }

        public void g(int i10) {
            int i11 = this.f2410p;
            if (i11 == 0) {
                return;
            }
            int i12 = this.f2409o;
            int i13 = i10 / i11;
            for (int i14 = 0; i14 < i12 && this.f2408n + i14 < e.this.f2394y1; i14++) {
                ConstraintWidget constraintWidget = e.this.f2393x1[this.f2408n + i14];
                if (this.f2395a == 0) {
                    if (constraintWidget != null && constraintWidget.A() == ConstraintWidget.b.MATCH_CONSTRAINT && constraintWidget.f2298w == 0) {
                        e.this.E1(constraintWidget, ConstraintWidget.b.FIXED, i13, constraintWidget.T(), constraintWidget.x());
                    }
                } else if (constraintWidget != null && constraintWidget.T() == ConstraintWidget.b.MATCH_CONSTRAINT && constraintWidget.f2300x == 0) {
                    int i15 = i13;
                    e.this.E1(constraintWidget, constraintWidget.A(), constraintWidget.W(), ConstraintWidget.b.FIXED, i15);
                    i13 = i15;
                }
            }
            h();
        }

        public void i(int i10) {
            this.f2408n = i10;
        }

        public void j(int i10, d dVar, d dVar2, d dVar3, d dVar4, int i11, int i12, int i13, int i14, int i15) {
            this.f2395a = i10;
            this.f2398d = dVar;
            this.f2399e = dVar2;
            this.f2400f = dVar3;
            this.f2401g = dVar4;
            this.f2402h = i11;
            this.f2403i = i12;
            this.f2404j = i13;
            this.f2405k = i14;
            this.f2411q = i15;
        }
    }

    private void k2(boolean z10) {
        ConstraintWidget constraintWidget;
        float f10;
        int i10;
        if (this.f2392w1 != null && this.f2391v1 != null && this.f2390u1 != null) {
            for (int i11 = 0; i11 < this.f2394y1; i11++) {
                this.f2393x1[i11].u0();
            }
            int[] iArr = this.f2392w1;
            int i12 = iArr[0];
            int i13 = iArr[1];
            float f11 = this.f2376g1;
            ConstraintWidget constraintWidget2 = null;
            int i14 = 0;
            while (i14 < i12) {
                if (z10) {
                    i10 = (i12 - i14) - 1;
                    f10 = 1.0f - this.f2376g1;
                } else {
                    f10 = f11;
                    i10 = i14;
                }
                ConstraintWidget constraintWidget3 = this.f2391v1[i10];
                if (constraintWidget3 != null && constraintWidget3.V() != 8) {
                    if (i14 == 0) {
                        constraintWidget3.k(constraintWidget3.O, this.O, A1());
                        constraintWidget3.O0(this.f2370a1);
                        constraintWidget3.N0(f10);
                    }
                    if (i14 == i12 - 1) {
                        constraintWidget3.k(constraintWidget3.Q, this.Q, B1());
                    }
                    if (i14 > 0 && constraintWidget2 != null) {
                        constraintWidget3.k(constraintWidget3.O, constraintWidget2.Q, this.f2382m1);
                        constraintWidget2.k(constraintWidget2.Q, constraintWidget3.O, 0);
                    }
                    constraintWidget2 = constraintWidget3;
                }
                i14++;
                f11 = f10;
            }
            for (int i15 = 0; i15 < i13; i15++) {
                ConstraintWidget constraintWidget4 = this.f2390u1[i15];
                if (constraintWidget4 != null && constraintWidget4.V() != 8) {
                    if (i15 == 0) {
                        constraintWidget4.k(constraintWidget4.P, this.P, C1());
                        constraintWidget4.f1(this.f2371b1);
                        constraintWidget4.e1(this.f2377h1);
                    }
                    if (i15 == i13 - 1) {
                        constraintWidget4.k(constraintWidget4.R, this.R, z1());
                    }
                    if (i15 > 0 && constraintWidget2 != null) {
                        constraintWidget4.k(constraintWidget4.P, constraintWidget2.R, this.f2383n1);
                        constraintWidget2.k(constraintWidget2.R, constraintWidget4.P, 0);
                    }
                    constraintWidget2 = constraintWidget4;
                }
            }
            for (int i16 = 0; i16 < i12; i16++) {
                for (int i17 = 0; i17 < i13; i17++) {
                    int i18 = (i17 * i12) + i16;
                    if (this.f2388s1 == 1) {
                        i18 = (i16 * i13) + i17;
                    }
                    ConstraintWidget[] constraintWidgetArr = this.f2393x1;
                    if (i18 < constraintWidgetArr.length && (constraintWidget = constraintWidgetArr[i18]) != null && constraintWidget.V() != 8) {
                        ConstraintWidget constraintWidget5 = this.f2391v1[i16];
                        ConstraintWidget constraintWidget6 = this.f2390u1[i17];
                        if (constraintWidget != constraintWidget5) {
                            constraintWidget.k(constraintWidget.O, constraintWidget5.O, 0);
                            constraintWidget.k(constraintWidget.Q, constraintWidget5.Q, 0);
                        }
                        if (constraintWidget != constraintWidget6) {
                            constraintWidget.k(constraintWidget.P, constraintWidget6.P, 0);
                            constraintWidget.k(constraintWidget.R, constraintWidget6.R, 0);
                        }
                    }
                }
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public int l2(ConstraintWidget constraintWidget, int i10) {
        ConstraintWidget constraintWidget2;
        if (constraintWidget == null) {
            return 0;
        }
        if (constraintWidget.T() == ConstraintWidget.b.MATCH_CONSTRAINT) {
            int i11 = constraintWidget.f2300x;
            if (i11 == 0) {
                return 0;
            }
            if (i11 == 2) {
                int i12 = (int) (constraintWidget.E * i10);
                if (i12 != constraintWidget.x()) {
                    constraintWidget.Z0(true);
                    E1(constraintWidget, constraintWidget.A(), constraintWidget.W(), ConstraintWidget.b.FIXED, i12);
                }
                return i12;
            }
            constraintWidget2 = constraintWidget;
            if (i11 == 1) {
                return constraintWidget2.x();
            }
            if (i11 == 3) {
                return (int) ((constraintWidget2.W() * constraintWidget2.f2261d0) + 0.5f);
            }
        } else {
            constraintWidget2 = constraintWidget;
        }
        return constraintWidget2.x();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public int m2(ConstraintWidget constraintWidget, int i10) {
        ConstraintWidget constraintWidget2;
        if (constraintWidget == null) {
            return 0;
        }
        if (constraintWidget.A() == ConstraintWidget.b.MATCH_CONSTRAINT) {
            int i11 = constraintWidget.f2298w;
            if (i11 == 0) {
                return 0;
            }
            if (i11 == 2) {
                int i12 = (int) (constraintWidget.B * i10);
                if (i12 != constraintWidget.W()) {
                    constraintWidget.Z0(true);
                    E1(constraintWidget, ConstraintWidget.b.FIXED, i12, constraintWidget.T(), constraintWidget.x());
                }
                return i12;
            }
            constraintWidget2 = constraintWidget;
            if (i11 == 1) {
                return constraintWidget2.W();
            }
            if (i11 == 3) {
                return (int) ((constraintWidget2.x() * constraintWidget2.f2261d0) + 0.5f);
            }
        } else {
            constraintWidget2 = constraintWidget;
        }
        return constraintWidget2.W();
    }

    /* JADX WARN: Removed duplicated region for block: B:45:0x005e  */
    /* JADX WARN: Unsupported multi-entry loop pattern (BACK_EDGE: B:105:0x010d -> B:42:0x0059). Please submit an issue!!! */
    /* JADX WARN: Unsupported multi-entry loop pattern (BACK_EDGE: B:106:0x010f -> B:42:0x0059). Please submit an issue!!! */
    /* JADX WARN: Unsupported multi-entry loop pattern (BACK_EDGE: B:108:0x0115 -> B:42:0x0059). Please submit an issue!!! */
    /* JADX WARN: Unsupported multi-entry loop pattern (BACK_EDGE: B:109:0x0117 -> B:42:0x0059). Please submit an issue!!! */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private void n2(androidx.constraintlayout.core.widgets.ConstraintWidget[] r11, int r12, int r13, int r14, int[] r15) {
        /*
            Method dump skipped, instructions count: 292
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: androidx.constraintlayout.core.widgets.e.n2(androidx.constraintlayout.core.widgets.ConstraintWidget[], int, int, int, int[]):void");
    }

    private void o2(ConstraintWidget[] constraintWidgetArr, int i10, int i11, int i12, int[] iArr) {
        int i13;
        e eVar;
        int i14;
        d dVar;
        int i15;
        e eVar2 = this;
        if (i10 == 0) {
            return;
        }
        eVar2.f2389t1.clear();
        int i16 = i12;
        a aVar = new a(i11, eVar2.O, eVar2.P, eVar2.Q, eVar2.R, i16);
        eVar2.f2389t1.add(aVar);
        if (i11 == 0) {
            i13 = 0;
            int i17 = 0;
            int i18 = 0;
            while (i18 < i10) {
                ConstraintWidget constraintWidget = constraintWidgetArr[i18];
                int m22 = eVar2.m2(constraintWidget, i16);
                if (constraintWidget.A() == ConstraintWidget.b.MATCH_CONSTRAINT) {
                    i13++;
                }
                int i19 = i13;
                boolean z10 = (i17 == i16 || (eVar2.f2382m1 + i17) + m22 > i16) && aVar.f2396b != null;
                if (!z10 && i18 > 0 && (i15 = eVar2.f2387r1) > 0 && i18 % i15 == 0) {
                    z10 = true;
                }
                if (z10) {
                    aVar = new a(i11, eVar2.O, eVar2.P, eVar2.Q, eVar2.R, i16);
                    aVar.i(i18);
                    eVar2.f2389t1.add(aVar);
                } else if (i18 > 0) {
                    i17 += eVar2.f2382m1 + m22;
                    aVar.b(constraintWidget);
                    i18++;
                    i13 = i19;
                }
                i17 = m22;
                aVar.b(constraintWidget);
                i18++;
                i13 = i19;
            }
        } else {
            i13 = 0;
            int i20 = 0;
            int i21 = 0;
            while (i21 < i10) {
                ConstraintWidget constraintWidget2 = constraintWidgetArr[i21];
                int l22 = eVar2.l2(constraintWidget2, i16);
                if (constraintWidget2.T() == ConstraintWidget.b.MATCH_CONSTRAINT) {
                    i13++;
                }
                int i22 = i13;
                boolean z11 = (i20 == i16 || (eVar2.f2383n1 + i20) + l22 > i16) && aVar.f2396b != null;
                if (!z11 && i21 > 0 && (i14 = eVar2.f2387r1) > 0 && i21 % i14 == 0) {
                    z11 = true;
                }
                if (z11) {
                    aVar = new a(i11, eVar2.O, eVar2.P, eVar2.Q, eVar2.R, i16);
                    eVar = eVar2;
                    aVar.i(i21);
                    eVar.f2389t1.add(aVar);
                } else {
                    eVar = eVar2;
                    if (i21 > 0) {
                        i20 += eVar.f2383n1 + l22;
                        aVar.b(constraintWidget2);
                        i21++;
                        i16 = i12;
                        i13 = i22;
                        eVar2 = eVar;
                    }
                }
                i20 = l22;
                aVar.b(constraintWidget2);
                i21++;
                i16 = i12;
                i13 = i22;
                eVar2 = eVar;
            }
        }
        e eVar3 = eVar2;
        int size = eVar3.f2389t1.size();
        d dVar2 = eVar3.O;
        d dVar3 = eVar3.P;
        d dVar4 = eVar3.Q;
        d dVar5 = eVar3.R;
        int A1 = eVar3.A1();
        int C1 = eVar3.C1();
        int B1 = eVar3.B1();
        int z12 = eVar3.z1();
        ConstraintWidget.b A = eVar3.A();
        ConstraintWidget.b bVar = ConstraintWidget.b.WRAP_CONTENT;
        boolean z13 = A == bVar || eVar3.T() == bVar;
        if (i13 > 0 && z13) {
            for (int i23 = 0; i23 < size; i23++) {
                a aVar2 = (a) eVar3.f2389t1.get(i23);
                if (i11 == 0) {
                    aVar2.g(i12 - aVar2.f());
                } else {
                    aVar2.g(i12 - aVar2.e());
                }
            }
        }
        d dVar6 = dVar2;
        int i24 = z12;
        int i25 = 0;
        int i26 = B1;
        int i27 = C1;
        int i28 = A1;
        d dVar7 = dVar5;
        d dVar8 = dVar4;
        d dVar9 = dVar3;
        int i29 = 0;
        for (int i30 = 0; i30 < size; i30++) {
            a aVar3 = (a) eVar3.f2389t1.get(i30);
            if (i11 == 0) {
                if (i30 < size - 1) {
                    dVar7 = ((a) eVar3.f2389t1.get(i30 + 1)).f2396b.P;
                    i24 = 0;
                } else {
                    dVar7 = eVar3.R;
                    i24 = eVar3.z1();
                }
                d dVar10 = aVar3.f2396b.R;
                int i31 = i29;
                aVar3.j(i11, dVar6, dVar9, dVar8, dVar7, i28, i27, i26, i24, i12);
                int max = Math.max(i25, aVar3.f());
                int e10 = aVar3.e() + i31;
                if (i30 > 0) {
                    e10 += eVar3.f2383n1;
                }
                i29 = e10;
                i25 = max;
                dVar9 = dVar10;
                i27 = 0;
            } else {
                int i32 = i25;
                int i33 = i29;
                if (i30 < size - 1) {
                    dVar = ((a) eVar3.f2389t1.get(i30 + 1)).f2396b.O;
                    i26 = 0;
                } else {
                    dVar = eVar3.Q;
                    i26 = eVar3.B1();
                }
                dVar8 = dVar;
                d dVar11 = aVar3.f2396b.Q;
                aVar3.j(i11, dVar6, dVar9, dVar8, dVar7, i28, i27, i26, i24, i12);
                int f10 = aVar3.f() + i32;
                int max2 = Math.max(i33, aVar3.e());
                if (i30 > 0) {
                    f10 += eVar3.f2382m1;
                }
                int i34 = f10;
                i29 = max2;
                i25 = i34;
                i28 = 0;
                dVar6 = dVar11;
            }
        }
        iArr[0] = i25;
        iArr[1] = i29;
    }

    private void p2(ConstraintWidget[] constraintWidgetArr, int i10, int i11, int i12, int[] iArr) {
        int i13;
        e eVar;
        int i14;
        char c10;
        d dVar;
        int i15;
        e eVar2 = this;
        if (i10 == 0) {
            return;
        }
        eVar2.f2389t1.clear();
        int i16 = i12;
        a aVar = new a(i11, eVar2.O, eVar2.P, eVar2.Q, eVar2.R, i16);
        eVar2.f2389t1.add(aVar);
        char c11 = 1;
        if (i11 == 0) {
            int i17 = 0;
            i13 = 0;
            int i18 = 0;
            int i19 = 0;
            while (i19 < i10) {
                i17++;
                ConstraintWidget constraintWidget = constraintWidgetArr[i19];
                int m22 = eVar2.m2(constraintWidget, i16);
                if (constraintWidget.A() == ConstraintWidget.b.MATCH_CONSTRAINT) {
                    i13++;
                }
                int i20 = i13;
                boolean z10 = (i18 == i16 || (eVar2.f2382m1 + i18) + m22 > i16) && aVar.f2396b != null;
                if (!z10 && i19 > 0 && (i15 = eVar2.f2387r1) > 0 && i17 > i15) {
                    z10 = true;
                }
                if (z10) {
                    aVar = new a(i11, eVar2.O, eVar2.P, eVar2.Q, eVar2.R, i16);
                    aVar.i(i19);
                    eVar2.f2389t1.add(aVar);
                    i17 = 1;
                } else if (i19 > 0) {
                    i18 += eVar2.f2382m1 + m22;
                    aVar.b(constraintWidget);
                    i19++;
                    i13 = i20;
                }
                i18 = m22;
                aVar.b(constraintWidget);
                i19++;
                i13 = i20;
            }
        } else {
            int i21 = 0;
            i13 = 0;
            int i22 = 0;
            int i23 = 0;
            while (i23 < i10) {
                i21++;
                ConstraintWidget constraintWidget2 = constraintWidgetArr[i23];
                int l22 = eVar2.l2(constraintWidget2, i16);
                if (constraintWidget2.T() == ConstraintWidget.b.MATCH_CONSTRAINT) {
                    i13++;
                }
                int i24 = i13;
                boolean z11 = (i22 == i16 || (eVar2.f2383n1 + i22) + l22 > i16) && aVar.f2396b != null;
                if (!z11 && i23 > 0 && (i14 = eVar2.f2387r1) > 0 && i21 > i14) {
                    z11 = true;
                }
                if (z11) {
                    aVar = new a(i11, eVar2.O, eVar2.P, eVar2.Q, eVar2.R, i16);
                    eVar = eVar2;
                    aVar.i(i23);
                    eVar.f2389t1.add(aVar);
                    i21 = 1;
                } else {
                    eVar = eVar2;
                    if (i23 > 0) {
                        i22 += eVar.f2383n1 + l22;
                        aVar.b(constraintWidget2);
                        i23++;
                        i16 = i12;
                        i13 = i24;
                        eVar2 = eVar;
                    }
                }
                i22 = l22;
                aVar.b(constraintWidget2);
                i23++;
                i16 = i12;
                i13 = i24;
                eVar2 = eVar;
            }
        }
        e eVar3 = eVar2;
        int size = eVar3.f2389t1.size();
        d dVar2 = eVar3.O;
        d dVar3 = eVar3.P;
        d dVar4 = eVar3.Q;
        d dVar5 = eVar3.R;
        int A1 = eVar3.A1();
        int C1 = eVar3.C1();
        int B1 = eVar3.B1();
        int z12 = eVar3.z1();
        ConstraintWidget.b A = eVar3.A();
        ConstraintWidget.b bVar = ConstraintWidget.b.WRAP_CONTENT;
        boolean z13 = A == bVar || eVar3.T() == bVar;
        if (i13 > 0 && z13) {
            for (int i25 = 0; i25 < size; i25++) {
                a aVar2 = (a) eVar3.f2389t1.get(i25);
                if (i11 == 0) {
                    aVar2.g(i12 - aVar2.f());
                } else {
                    aVar2.g(i12 - aVar2.e());
                }
            }
        }
        d dVar6 = dVar3;
        int i26 = z12;
        int i27 = 0;
        int i28 = 0;
        int i29 = B1;
        int i30 = C1;
        int i31 = A1;
        d dVar7 = dVar5;
        d dVar8 = dVar4;
        d dVar9 = dVar2;
        int i32 = 0;
        while (i28 < size) {
            a aVar3 = (a) eVar3.f2389t1.get(i28);
            if (i11 == 0) {
                if (i28 < size - 1) {
                    dVar7 = ((a) eVar3.f2389t1.get(i28 + 1)).f2396b.P;
                    i26 = 0;
                } else {
                    dVar7 = eVar3.R;
                    i26 = eVar3.z1();
                }
                d dVar10 = aVar3.f2396b.R;
                c10 = c11;
                int i33 = i27;
                aVar3.j(i11, dVar9, dVar6, dVar8, dVar7, i31, i30, i29, i26, i12);
                int max = Math.max(i32, aVar3.f());
                int e10 = aVar3.e() + i33;
                if (i28 > 0) {
                    e10 += eVar3.f2383n1;
                }
                i27 = e10;
                i32 = max;
                dVar6 = dVar10;
                i30 = 0;
            } else {
                int i34 = i27;
                c10 = c11;
                int i35 = i32;
                if (i28 < size - 1) {
                    dVar = ((a) eVar3.f2389t1.get(i28 + 1)).f2396b.O;
                    i29 = 0;
                } else {
                    dVar = eVar3.Q;
                    i29 = eVar3.B1();
                }
                dVar8 = dVar;
                d dVar11 = aVar3.f2396b.Q;
                aVar3.j(i11, dVar9, dVar6, dVar8, dVar7, i31, i30, i29, i26, i12);
                int f10 = aVar3.f() + i35;
                int max2 = Math.max(i34, aVar3.e());
                if (i28 > 0) {
                    f10 += eVar3.f2382m1;
                }
                int i36 = f10;
                i27 = max2;
                i32 = i36;
                i31 = 0;
                dVar9 = dVar11;
            }
            i28++;
            c11 = c10;
        }
        iArr[0] = i32;
        iArr[c11] = i27;
    }

    private void q2(ConstraintWidget[] constraintWidgetArr, int i10, int i11, int i12, int[] iArr) {
        a aVar;
        if (i10 == 0) {
            return;
        }
        if (this.f2389t1.size() == 0) {
            aVar = new a(i11, this.O, this.P, this.Q, this.R, i12);
            this.f2389t1.add(aVar);
        } else {
            a aVar2 = (a) this.f2389t1.get(0);
            aVar2.c();
            aVar2.j(i11, this.O, this.P, this.Q, this.R, A1(), C1(), B1(), z1(), i12);
            aVar = aVar2;
        }
        for (int i13 = 0; i13 < i10; i13++) {
            aVar.b(constraintWidgetArr[i13]);
        }
        iArr[0] = aVar.f();
        iArr[1] = aVar.e();
    }

    public void A2(int i10) {
        this.f2374e1 = i10;
    }

    public void B2(float f10) {
        this.f2381l1 = f10;
    }

    public void C2(int i10) {
        this.f2375f1 = i10;
    }

    @Override // androidx.constraintlayout.core.widgets.h
    public void D1(int i10, int i11, int i12, int i13) {
        int i14;
        ConstraintWidget[] constraintWidgetArr;
        boolean z10;
        if (this.M0 > 0 && !F1()) {
            I1(0, 0);
            H1(false);
            return;
        }
        int A1 = A1();
        int B1 = B1();
        int C1 = C1();
        int z12 = z1();
        int[] iArr = new int[2];
        int i15 = (i11 - A1) - B1;
        int i16 = this.f2388s1;
        if (i16 == 1) {
            i15 = (i13 - C1) - z12;
        }
        int i17 = i15;
        if (i16 == 0) {
            if (this.f2370a1 == -1) {
                this.f2370a1 = 0;
            }
            if (this.f2371b1 == -1) {
                this.f2371b1 = 0;
            }
        } else {
            if (this.f2370a1 == -1) {
                this.f2370a1 = 0;
            }
            if (this.f2371b1 == -1) {
                this.f2371b1 = 0;
            }
        }
        ConstraintWidget[] constraintWidgetArr2 = this.L0;
        int i18 = 0;
        int i19 = 0;
        while (true) {
            i14 = this.M0;
            if (i18 >= i14) {
                break;
            }
            if (this.L0[i18].V() == 8) {
                i19++;
            }
            i18++;
        }
        if (i19 > 0) {
            ConstraintWidget[] constraintWidgetArr3 = new ConstraintWidget[i14 - i19];
            int i20 = 0;
            i14 = 0;
            while (i20 < this.M0) {
                ConstraintWidget constraintWidget = this.L0[i20];
                ConstraintWidget[] constraintWidgetArr4 = constraintWidgetArr3;
                if (constraintWidget.V() != 8) {
                    constraintWidgetArr4[i14] = constraintWidget;
                    i14++;
                }
                i20++;
                constraintWidgetArr3 = constraintWidgetArr4;
            }
            constraintWidgetArr = constraintWidgetArr3;
        } else {
            constraintWidgetArr = constraintWidgetArr2;
        }
        int i21 = i14;
        this.f2393x1 = constraintWidgetArr;
        this.f2394y1 = i21;
        int i22 = this.f2386q1;
        if (i22 != 0) {
            if (i22 != 1) {
                if (i22 != 2) {
                    if (i22 == 3) {
                        p2(constraintWidgetArr, i21, this.f2388s1, i17, iArr);
                    }
                } else {
                    n2(constraintWidgetArr, i21, this.f2388s1, i17, iArr);
                }
            } else {
                o2(constraintWidgetArr, i21, this.f2388s1, i17, iArr);
            }
        } else {
            q2(constraintWidgetArr, i21, this.f2388s1, i17, iArr);
        }
        int i23 = iArr[0] + A1 + B1;
        int i24 = iArr[1] + C1 + z12;
        if (i10 == 1073741824) {
            i23 = i11;
        } else if (i10 == Integer.MIN_VALUE) {
            i23 = Math.min(i23, i11);
        } else if (i10 != 0) {
            i23 = 0;
        }
        if (i12 == 1073741824) {
            i24 = i13;
        } else if (i12 == Integer.MIN_VALUE) {
            i24 = Math.min(i24, i13);
        } else if (i12 != 0) {
            i24 = 0;
        }
        I1(i23, i24);
        l1(i23);
        M0(i24);
        if (this.M0 > 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        H1(z10);
    }

    public void D2(int i10) {
        this.f2387r1 = i10;
    }

    public void E2(int i10) {
        this.f2388s1 = i10;
    }

    public void F2(int i10) {
        this.f2385p1 = i10;
    }

    public void G2(float f10) {
        this.f2377h1 = f10;
    }

    public void H2(int i10) {
        this.f2383n1 = i10;
    }

    public void I2(int i10) {
        this.f2371b1 = i10;
    }

    public void J2(int i10) {
        this.f2386q1 = i10;
    }

    @Override // androidx.constraintlayout.core.widgets.ConstraintWidget
    public void g(h1.d dVar, boolean z10) {
        boolean z11;
        boolean z12;
        boolean z13;
        super.g(dVar, z10);
        if (K() != null && ((ConstraintWidgetContainer) K()).R1()) {
            z11 = true;
        } else {
            z11 = false;
        }
        int i10 = this.f2386q1;
        if (i10 != 0) {
            if (i10 != 1) {
                if (i10 != 2) {
                    if (i10 == 3) {
                        int size = this.f2389t1.size();
                        for (int i11 = 0; i11 < size; i11++) {
                            a aVar = (a) this.f2389t1.get(i11);
                            if (i11 == size - 1) {
                                z13 = true;
                            } else {
                                z13 = false;
                            }
                            aVar.d(z11, i11, z13);
                        }
                    }
                } else {
                    k2(z11);
                }
            } else {
                int size2 = this.f2389t1.size();
                for (int i12 = 0; i12 < size2; i12++) {
                    a aVar2 = (a) this.f2389t1.get(i12);
                    if (i12 == size2 - 1) {
                        z12 = true;
                    } else {
                        z12 = false;
                    }
                    aVar2.d(z11, i12, z12);
                }
            }
        } else if (this.f2389t1.size() > 0) {
            ((a) this.f2389t1.get(0)).d(z11, 0, true);
        }
        H1(false);
    }

    public void r2(float f10) {
        this.f2378i1 = f10;
    }

    public void s2(int i10) {
        this.f2372c1 = i10;
    }

    public void t2(float f10) {
        this.f2379j1 = f10;
    }

    public void u2(int i10) {
        this.f2373d1 = i10;
    }

    public void v2(int i10) {
        this.f2384o1 = i10;
    }

    public void w2(float f10) {
        this.f2376g1 = f10;
    }

    public void x2(int i10) {
        this.f2382m1 = i10;
    }

    public void y2(int i10) {
        this.f2370a1 = i10;
    }

    public void z2(float f10) {
        this.f2380k1 = f10;
    }
}
