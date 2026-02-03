package l1;

import androidx.constraintlayout.core.Metrics;
import androidx.constraintlayout.core.widgets.ConstraintWidget;
import androidx.constraintlayout.core.widgets.ConstraintWidgetContainer;
import androidx.constraintlayout.core.widgets.d;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import java.util.ArrayList;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class b {

    /* renamed from: a  reason: collision with root package name */
    private final ArrayList f36837a = new ArrayList();

    /* renamed from: b  reason: collision with root package name */
    private a f36838b = new a();

    /* renamed from: c  reason: collision with root package name */
    private ConstraintWidgetContainer f36839c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class a {

        /* renamed from: k  reason: collision with root package name */
        public static int f36840k = 0;

        /* renamed from: l  reason: collision with root package name */
        public static int f36841l = 1;

        /* renamed from: m  reason: collision with root package name */
        public static int f36842m = 2;

        /* renamed from: a  reason: collision with root package name */
        public ConstraintWidget.b f36843a;

        /* renamed from: b  reason: collision with root package name */
        public ConstraintWidget.b f36844b;

        /* renamed from: c  reason: collision with root package name */
        public int f36845c;

        /* renamed from: d  reason: collision with root package name */
        public int f36846d;

        /* renamed from: e  reason: collision with root package name */
        public int f36847e;

        /* renamed from: f  reason: collision with root package name */
        public int f36848f;

        /* renamed from: g  reason: collision with root package name */
        public int f36849g;

        /* renamed from: h  reason: collision with root package name */
        public boolean f36850h;

        /* renamed from: i  reason: collision with root package name */
        public boolean f36851i;

        /* renamed from: j  reason: collision with root package name */
        public int f36852j;
    }

    /* renamed from: l1.b$b  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public interface InterfaceC0479b {
        void a();

        void b(ConstraintWidget constraintWidget, a aVar);
    }

    public b(ConstraintWidgetContainer constraintWidgetContainer) {
        this.f36839c = constraintWidgetContainer;
    }

    private boolean a(InterfaceC0479b interfaceC0479b, ConstraintWidget constraintWidget, int i10) {
        boolean z10;
        boolean z11;
        boolean z12;
        boolean z13;
        this.f36838b.f36843a = constraintWidget.A();
        this.f36838b.f36844b = constraintWidget.T();
        this.f36838b.f36845c = constraintWidget.W();
        this.f36838b.f36846d = constraintWidget.x();
        a aVar = this.f36838b;
        aVar.f36851i = false;
        aVar.f36852j = i10;
        ConstraintWidget.b bVar = aVar.f36843a;
        ConstraintWidget.b bVar2 = ConstraintWidget.b.MATCH_CONSTRAINT;
        if (bVar == bVar2) {
            z10 = true;
        } else {
            z10 = false;
        }
        if (aVar.f36844b == bVar2) {
            z11 = true;
        } else {
            z11 = false;
        }
        if (z10 && constraintWidget.f2292d0 > 0.0f) {
            z12 = true;
        } else {
            z12 = false;
        }
        if (z11 && constraintWidget.f2292d0 > 0.0f) {
            z13 = true;
        } else {
            z13 = false;
        }
        if (z12 && constraintWidget.f2333y[0] == 4) {
            aVar.f36843a = ConstraintWidget.b.FIXED;
        }
        if (z13 && constraintWidget.f2333y[1] == 4) {
            aVar.f36844b = ConstraintWidget.b.FIXED;
        }
        interfaceC0479b.b(constraintWidget, aVar);
        constraintWidget.l1(this.f36838b.f36847e);
        constraintWidget.M0(this.f36838b.f36848f);
        constraintWidget.L0(this.f36838b.f36850h);
        constraintWidget.B0(this.f36838b.f36849g);
        a aVar2 = this.f36838b;
        aVar2.f36852j = a.f36840k;
        return aVar2.f36851i;
    }

    /* JADX WARN: Code restructure failed: missing block: B:52:0x008e, code lost:
        if (r8 != r9) goto L58;
     */
    /* JADX WARN: Code restructure failed: missing block: B:54:0x0095, code lost:
        if (r5.f2292d0 <= 0.0f) goto L58;
     */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private void b(androidx.constraintlayout.core.widgets.ConstraintWidgetContainer r13) {
        /*
            r12 = this;
            java.util.ArrayList r0 = r13.L0
            int r0 = r0.size()
            r1 = 64
            boolean r1 = r13.V1(r1)
            l1.b$b r2 = r13.K1()
            r3 = 0
            r4 = r3
        L12:
            if (r4 >= r0) goto Lb0
            java.util.ArrayList r5 = r13.L0
            java.lang.Object r5 = r5.get(r4)
            androidx.constraintlayout.core.widgets.ConstraintWidget r5 = (androidx.constraintlayout.core.widgets.ConstraintWidget) r5
            boolean r6 = r5 instanceof androidx.constraintlayout.core.widgets.f
            if (r6 == 0) goto L22
            goto Lac
        L22:
            boolean r6 = r5 instanceof androidx.constraintlayout.core.widgets.a
            if (r6 == 0) goto L28
            goto Lac
        L28:
            boolean r6 = r5.l0()
            if (r6 == 0) goto L30
            goto Lac
        L30:
            if (r1 == 0) goto L48
            l1.l r6 = r5.f2293e
            if (r6 == 0) goto L48
            l1.n r7 = r5.f2295f
            if (r7 == 0) goto L48
            l1.g r6 = r6.f36920e
            boolean r6 = r6.f36873j
            if (r6 == 0) goto L48
            l1.g r6 = r7.f36920e
            boolean r6 = r6.f36873j
            if (r6 == 0) goto L48
            goto Lac
        L48:
            androidx.constraintlayout.core.widgets.ConstraintWidget$b r6 = r5.u(r3)
            r7 = 1
            androidx.constraintlayout.core.widgets.ConstraintWidget$b r8 = r5.u(r7)
            androidx.constraintlayout.core.widgets.ConstraintWidget$b r9 = androidx.constraintlayout.core.widgets.ConstraintWidget.b.MATCH_CONSTRAINT
            if (r6 != r9) goto L61
            int r10 = r5.f2329w
            if (r10 == r7) goto L61
            if (r8 != r9) goto L61
            int r10 = r5.f2331x
            if (r10 == r7) goto L61
            r10 = r7
            goto L62
        L61:
            r10 = r3
        L62:
            if (r10 != 0) goto L98
            boolean r11 = r13.V1(r7)
            if (r11 == 0) goto L98
            boolean r11 = r5 instanceof androidx.constraintlayout.core.widgets.h
            if (r11 != 0) goto L98
            if (r6 != r9) goto L7d
            int r11 = r5.f2329w
            if (r11 != 0) goto L7d
            if (r8 == r9) goto L7d
            boolean r11 = r5.i0()
            if (r11 != 0) goto L7d
            r10 = r7
        L7d:
            if (r8 != r9) goto L8c
            int r11 = r5.f2331x
            if (r11 != 0) goto L8c
            if (r6 == r9) goto L8c
            boolean r11 = r5.i0()
            if (r11 != 0) goto L8c
            r10 = r7
        L8c:
            if (r6 == r9) goto L90
            if (r8 != r9) goto L98
        L90:
            float r6 = r5.f2292d0
            r8 = 0
            int r6 = (r6 > r8 ? 1 : (r6 == r8 ? 0 : -1))
            if (r6 <= 0) goto L98
            goto L99
        L98:
            r7 = r10
        L99:
            if (r7 == 0) goto L9c
            goto Lac
        L9c:
            int r6 = l1.b.a.f36840k
            r12.a(r2, r5, r6)
            androidx.constraintlayout.core.Metrics r5 = r13.R0
            if (r5 == 0) goto Lac
            long r6 = r5.f2261c
            r8 = 1
            long r6 = r6 + r8
            r5.f2261c = r6
        Lac:
            int r4 = r4 + 1
            goto L12
        Lb0:
            r2.a()
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: l1.b.b(androidx.constraintlayout.core.widgets.ConstraintWidgetContainer):void");
    }

    private void c(ConstraintWidgetContainer constraintWidgetContainer, String str, int i10, int i11, int i12) {
        long j10;
        if (constraintWidgetContainer.R0 != null) {
            j10 = System.nanoTime();
        } else {
            j10 = 0;
        }
        int I = constraintWidgetContainer.I();
        int H = constraintWidgetContainer.H();
        constraintWidgetContainer.b1(0);
        constraintWidgetContainer.a1(0);
        constraintWidgetContainer.l1(i11);
        constraintWidgetContainer.M0(i12);
        constraintWidgetContainer.b1(I);
        constraintWidgetContainer.a1(H);
        this.f36839c.Z1(i10);
        this.f36839c.t1();
        if (constraintWidgetContainer.R0 != null) {
            long nanoTime = System.nanoTime();
            Metrics metrics = constraintWidgetContainer.R0;
            metrics.M++;
            metrics.f2260b += nanoTime - j10;
        }
    }

    public long d(ConstraintWidgetContainer constraintWidgetContainer, int i10, int i11, int i12, int i13, int i14, int i15, int i16, int i17, int i18) {
        boolean z10;
        boolean z11;
        long j10;
        boolean z12;
        int i19;
        int i20;
        int i21;
        long j11;
        boolean z13;
        boolean z14;
        int i22;
        long j12;
        int i23;
        int i24;
        boolean z15;
        boolean z16;
        boolean z17;
        Metrics metrics;
        boolean z18;
        boolean z19;
        boolean z20;
        b bVar = this;
        ConstraintWidgetContainer constraintWidgetContainer2 = constraintWidgetContainer;
        InterfaceC0479b K1 = constraintWidgetContainer2.K1();
        int size = constraintWidgetContainer2.L0.size();
        int W = constraintWidgetContainer2.W();
        int x10 = constraintWidgetContainer2.x();
        boolean b10 = androidx.constraintlayout.core.widgets.g.b(i10, IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT);
        if (!b10 && !androidx.constraintlayout.core.widgets.g.b(i10, 64)) {
            z10 = false;
        } else {
            z10 = true;
        }
        if (z10) {
            for (int i25 = 0; i25 < size; i25++) {
                ConstraintWidget constraintWidget = (ConstraintWidget) constraintWidgetContainer2.L0.get(i25);
                ConstraintWidget.b A = constraintWidget.A();
                ConstraintWidget.b bVar2 = ConstraintWidget.b.MATCH_CONSTRAINT;
                if (A == bVar2) {
                    z18 = true;
                } else {
                    z18 = false;
                }
                if (constraintWidget.T() == bVar2) {
                    z19 = true;
                } else {
                    z19 = false;
                }
                if (z18 && z19 && constraintWidget.v() > 0.0f) {
                    z20 = true;
                } else {
                    z20 = false;
                }
                if ((constraintWidget.i0() && z20) || ((constraintWidget.k0() && z20) || (constraintWidget instanceof androidx.constraintlayout.core.widgets.h) || constraintWidget.i0() || constraintWidget.k0())) {
                    z10 = false;
                    break;
                }
            }
        }
        if (z10 && (metrics = h1.d.f27430x) != null) {
            metrics.f2263e++;
        }
        if ((i13 == 1073741824 && i15 == 1073741824) || b10) {
            z11 = true;
        } else {
            z11 = false;
        }
        boolean z21 = z10 & z11;
        int i26 = 2;
        if (z21) {
            j10 = 1;
            int min = Math.min(constraintWidgetContainer2.G(), i14);
            int min2 = Math.min(constraintWidgetContainer2.F(), i16);
            if (i13 == 1073741824 && constraintWidgetContainer2.W() != min) {
                constraintWidgetContainer2.l1(min);
                constraintWidgetContainer2.O1();
            }
            if (i15 == 1073741824 && constraintWidgetContainer2.x() != min2) {
                constraintWidgetContainer2.M0(min2);
                constraintWidgetContainer2.O1();
            }
            if (i13 == 1073741824 && i15 == 1073741824) {
                z12 = constraintWidgetContainer2.G1(b10);
                i19 = 2;
            } else {
                boolean H1 = constraintWidgetContainer2.H1(b10);
                if (i13 == 1073741824) {
                    H1 &= constraintWidgetContainer2.I1(b10, 0);
                    i19 = 1;
                } else {
                    i19 = 0;
                }
                if (i15 == 1073741824) {
                    z12 = constraintWidgetContainer2.I1(b10, 1) & H1;
                    i19++;
                } else {
                    z12 = H1;
                }
            }
            if (z12) {
                if (i13 == 1073741824) {
                    z16 = true;
                } else {
                    z16 = false;
                }
                if (i15 == 1073741824) {
                    z17 = true;
                } else {
                    z17 = false;
                }
                constraintWidgetContainer2.q1(z16, z17);
            }
        } else {
            j10 = 1;
            z12 = false;
            i19 = 0;
        }
        long j13 = 0;
        if (!z12 || i19 != 2) {
            int L1 = constraintWidgetContainer2.L1();
            if (size > 0) {
                b(constraintWidgetContainer);
            }
            if (constraintWidgetContainer2.R0 != null) {
                j13 = System.nanoTime();
            }
            e(constraintWidgetContainer);
            int size2 = bVar.f36837a.size();
            if (size > 0) {
                bVar.c(constraintWidgetContainer2, "First pass", 0, W, x10);
                i20 = W;
                i21 = x10;
            } else {
                i20 = W;
                i21 = x10;
            }
            if (size2 > 0) {
                ConstraintWidget.b A2 = constraintWidgetContainer2.A();
                ConstraintWidget.b bVar3 = ConstraintWidget.b.WRAP_CONTENT;
                if (A2 == bVar3) {
                    z13 = true;
                } else {
                    z13 = false;
                }
                if (constraintWidgetContainer2.T() == bVar3) {
                    z14 = true;
                } else {
                    z14 = false;
                }
                int max = Math.max(constraintWidgetContainer2.W(), bVar.f36839c.I());
                int max2 = Math.max(constraintWidgetContainer2.x(), bVar.f36839c.H());
                int i27 = 0;
                boolean z22 = false;
                while (i27 < size2) {
                    ConstraintWidget constraintWidget2 = (ConstraintWidget) bVar.f36837a.get(i27);
                    boolean z23 = z21;
                    if (!(constraintWidget2 instanceof androidx.constraintlayout.core.widgets.h)) {
                        j12 = j13;
                        i23 = i20;
                        i24 = i21;
                    } else {
                        int W2 = constraintWidget2.W();
                        j12 = j13;
                        int x11 = constraintWidget2.x();
                        boolean a10 = z22 | bVar.a(K1, constraintWidget2, a.f36841l);
                        Metrics metrics2 = constraintWidgetContainer2.R0;
                        i23 = i20;
                        i24 = i21;
                        if (metrics2 != null) {
                            metrics2.f2262d += j10;
                        }
                        int W3 = constraintWidget2.W();
                        int x12 = constraintWidget2.x();
                        if (W3 != W2) {
                            constraintWidget2.l1(W3);
                            if (z13 && constraintWidget2.M() > max) {
                                max = Math.max(max, constraintWidget2.M() + constraintWidget2.o(d.a.RIGHT).f());
                            }
                            z15 = true;
                        } else {
                            z15 = a10;
                        }
                        if (x12 != x11) {
                            constraintWidget2.M0(x12);
                            if (z14 && constraintWidget2.r() > max2) {
                                max2 = Math.max(max2, constraintWidget2.r() + constraintWidget2.o(d.a.BOTTOM).f());
                            }
                            z15 = true;
                        }
                        z22 = z15 | ((androidx.constraintlayout.core.widgets.h) constraintWidget2).G1();
                    }
                    i27++;
                    i20 = i23;
                    i21 = i24;
                    z21 = z23;
                    j13 = j12;
                    i26 = 2;
                }
                boolean z24 = z21;
                j11 = j13;
                int i28 = i20;
                int i29 = i21;
                int i30 = i26;
                int i31 = 0;
                while (true) {
                    if (i31 >= i30) {
                        break;
                    }
                    int i32 = 0;
                    while (i32 < size2) {
                        ConstraintWidget constraintWidget3 = (ConstraintWidget) bVar.f36837a.get(i32);
                        if (((constraintWidget3 instanceof k1.a) && !(constraintWidget3 instanceof androidx.constraintlayout.core.widgets.h)) || (constraintWidget3 instanceof androidx.constraintlayout.core.widgets.f) || constraintWidget3.V() == 8 || ((z24 && constraintWidget3.f2293e.f36920e.f36873j && constraintWidget3.f2295f.f36920e.f36873j) || (constraintWidget3 instanceof androidx.constraintlayout.core.widgets.h))) {
                            i22 = i31;
                        } else {
                            int W4 = constraintWidget3.W();
                            int x13 = constraintWidget3.x();
                            int p10 = constraintWidget3.p();
                            int i33 = a.f36841l;
                            if (i31 == 1) {
                                i33 = a.f36842m;
                            }
                            boolean a11 = z22 | bVar.a(K1, constraintWidget3, i33);
                            Metrics metrics3 = constraintWidgetContainer2.R0;
                            i22 = i31;
                            if (metrics3 != null) {
                                metrics3.f2262d += j10;
                            }
                            int W5 = constraintWidget3.W();
                            int x14 = constraintWidget3.x();
                            if (W5 != W4) {
                                constraintWidget3.l1(W5);
                                if (z13 && constraintWidget3.M() > max) {
                                    max = Math.max(max, constraintWidget3.M() + constraintWidget3.o(d.a.RIGHT).f());
                                }
                                a11 = true;
                            }
                            if (x14 != x13) {
                                constraintWidget3.M0(x14);
                                if (z14 && constraintWidget3.r() > max2) {
                                    max2 = Math.max(max2, constraintWidget3.r() + constraintWidget3.o(d.a.BOTTOM).f());
                                }
                                a11 = true;
                            }
                            if (constraintWidget3.Z() && p10 != constraintWidget3.p()) {
                                z22 = true;
                            } else {
                                z22 = a11;
                            }
                        }
                        i32++;
                        bVar = this;
                        constraintWidgetContainer2 = constraintWidgetContainer;
                        i31 = i22;
                    }
                    int i34 = i31;
                    if (z22) {
                        i31 = i34 + 1;
                        c(constraintWidgetContainer, "intermediate pass", i31, i28, i29);
                        bVar = this;
                        constraintWidgetContainer2 = constraintWidgetContainer;
                        i30 = 2;
                        z22 = false;
                    } else {
                        constraintWidgetContainer2 = constraintWidgetContainer;
                        break;
                    }
                }
            } else {
                j11 = j13;
            }
            constraintWidgetContainer2.Y1(L1);
            j13 = j11;
        }
        if (constraintWidgetContainer2.R0 != null) {
            return System.nanoTime() - j13;
        }
        return j13;
    }

    public void e(ConstraintWidgetContainer constraintWidgetContainer) {
        this.f36837a.clear();
        int size = constraintWidgetContainer.L0.size();
        for (int i10 = 0; i10 < size; i10++) {
            ConstraintWidget constraintWidget = (ConstraintWidget) constraintWidgetContainer.L0.get(i10);
            ConstraintWidget.b A = constraintWidget.A();
            ConstraintWidget.b bVar = ConstraintWidget.b.MATCH_CONSTRAINT;
            if (A == bVar || constraintWidget.T() == bVar) {
                this.f36837a.add(constraintWidget);
            }
        }
        constraintWidgetContainer.O1();
    }
}
