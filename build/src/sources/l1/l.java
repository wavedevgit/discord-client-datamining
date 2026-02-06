package l1;

import androidx.constraintlayout.core.widgets.ConstraintWidget;
import androidx.constraintlayout.core.widgets.d;
import l1.f;
import l1.p;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class l extends p {

    /* renamed from: k  reason: collision with root package name */
    private static int[] f35678k = new int[2];

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f35679a;

        static {
            int[] iArr = new int[p.b.values().length];
            f35679a = iArr;
            try {
                iArr[p.b.START.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f35679a[p.b.END.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                f35679a[p.b.CENTER.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
        }
    }

    public l(ConstraintWidget constraintWidget) {
        super(constraintWidget);
        this.f35712h.f35657e = f.a.LEFT;
        this.f35713i.f35657e = f.a.RIGHT;
        this.f35710f = 0;
    }

    private void q(int[] iArr, int i10, int i11, int i12, int i13, float f10, int i14) {
        int i15 = i11 - i10;
        int i16 = i13 - i12;
        if (i14 != -1) {
            if (i14 != 0) {
                if (i14 == 1) {
                    iArr[0] = i15;
                    iArr[1] = (int) ((i15 * f10) + 0.5f);
                    return;
                }
                return;
            }
            iArr[0] = (int) ((i16 * f10) + 0.5f);
            iArr[1] = i16;
            return;
        }
        int i17 = (int) ((i16 * f10) + 0.5f);
        int i18 = (int) ((i15 / f10) + 0.5f);
        if (i17 <= i15) {
            iArr[0] = i17;
            iArr[1] = i16;
        } else if (i18 <= i16) {
            iArr[0] = i15;
            iArr[1] = i18;
        }
    }

    /* JADX WARN: Code restructure failed: missing block: B:116:0x02a5, code lost:
        if (r7 != 1) goto L131;
     */
    @Override // l1.p, l1.d
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public void a(l1.d r14) {
        /*
            Method dump skipped, instructions count: 1067
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: l1.l.a(l1.d):void");
    }

    @Override // l1.p
    void d() {
        ConstraintWidget K;
        ConstraintWidget K2;
        ConstraintWidget constraintWidget = this.f35706b;
        if (constraintWidget.f2695a) {
            this.f35709e.d(constraintWidget.W());
        }
        if (!this.f35709e.f35662j) {
            ConstraintWidget.b A = this.f35706b.A();
            this.f35708d = A;
            if (A != ConstraintWidget.b.MATCH_CONSTRAINT) {
                ConstraintWidget.b bVar = ConstraintWidget.b.MATCH_PARENT;
                if (A == bVar && (K2 = this.f35706b.K()) != null && (K2.A() == ConstraintWidget.b.FIXED || K2.A() == bVar)) {
                    int W = (K2.W() - this.f35706b.O.f()) - this.f35706b.Q.f();
                    b(this.f35712h, K2.f2703e.f35712h, this.f35706b.O.f());
                    b(this.f35713i, K2.f2703e.f35713i, -this.f35706b.Q.f());
                    this.f35709e.d(W);
                    return;
                } else if (this.f35708d == ConstraintWidget.b.FIXED) {
                    this.f35709e.d(this.f35706b.W());
                }
            }
        } else {
            ConstraintWidget.b bVar2 = this.f35708d;
            ConstraintWidget.b bVar3 = ConstraintWidget.b.MATCH_PARENT;
            if (bVar2 == bVar3 && (K = this.f35706b.K()) != null && (K.A() == ConstraintWidget.b.FIXED || K.A() == bVar3)) {
                b(this.f35712h, K.f2703e.f35712h, this.f35706b.O.f());
                b(this.f35713i, K.f2703e.f35713i, -this.f35706b.Q.f());
                return;
            }
        }
        g gVar = this.f35709e;
        if (gVar.f35662j) {
            ConstraintWidget constraintWidget2 = this.f35706b;
            if (constraintWidget2.f2695a) {
                androidx.constraintlayout.core.widgets.d[] dVarArr = constraintWidget2.W;
                androidx.constraintlayout.core.widgets.d dVar = dVarArr[0];
                androidx.constraintlayout.core.widgets.d dVar2 = dVar.f2797f;
                if (dVar2 != null && dVarArr[1].f2797f != null) {
                    if (constraintWidget2.i0()) {
                        this.f35712h.f35658f = this.f35706b.W[0].f();
                        this.f35713i.f35658f = -this.f35706b.W[1].f();
                        return;
                    }
                    f h10 = h(this.f35706b.W[0]);
                    if (h10 != null) {
                        b(this.f35712h, h10, this.f35706b.W[0].f());
                    }
                    f h11 = h(this.f35706b.W[1]);
                    if (h11 != null) {
                        b(this.f35713i, h11, -this.f35706b.W[1].f());
                    }
                    this.f35712h.f35654b = true;
                    this.f35713i.f35654b = true;
                    return;
                } else if (dVar2 != null) {
                    f h12 = h(dVar);
                    if (h12 != null) {
                        b(this.f35712h, h12, this.f35706b.W[0].f());
                        b(this.f35713i, this.f35712h, this.f35709e.f35659g);
                        return;
                    }
                    return;
                } else {
                    androidx.constraintlayout.core.widgets.d dVar3 = dVarArr[1];
                    if (dVar3.f2797f != null) {
                        f h13 = h(dVar3);
                        if (h13 != null) {
                            b(this.f35713i, h13, -this.f35706b.W[1].f());
                            b(this.f35712h, this.f35713i, -this.f35709e.f35659g);
                            return;
                        }
                        return;
                    } else if (!(constraintWidget2 instanceof k1.a) && constraintWidget2.K() != null && this.f35706b.o(d.a.CENTER).f2797f == null) {
                        b(this.f35712h, this.f35706b.K().f2703e.f35712h, this.f35706b.X());
                        b(this.f35713i, this.f35712h, this.f35709e.f35659g);
                        return;
                    } else {
                        return;
                    }
                }
            }
        }
        if (this.f35708d == ConstraintWidget.b.MATCH_CONSTRAINT) {
            ConstraintWidget constraintWidget3 = this.f35706b;
            int i10 = constraintWidget3.f2739w;
            if (i10 != 2) {
                if (i10 == 3) {
                    if (constraintWidget3.f2741x == 3) {
                        this.f35712h.f35653a = this;
                        this.f35713i.f35653a = this;
                        n nVar = constraintWidget3.f2705f;
                        nVar.f35712h.f35653a = this;
                        nVar.f35713i.f35653a = this;
                        gVar.f35653a = this;
                        if (constraintWidget3.k0()) {
                            this.f35709e.f35664l.add(this.f35706b.f2705f.f35709e);
                            this.f35706b.f2705f.f35709e.f35663k.add(this.f35709e);
                            n nVar2 = this.f35706b.f2705f;
                            nVar2.f35709e.f35653a = this;
                            this.f35709e.f35664l.add(nVar2.f35712h);
                            this.f35709e.f35664l.add(this.f35706b.f2705f.f35713i);
                            this.f35706b.f2705f.f35712h.f35663k.add(this.f35709e);
                            this.f35706b.f2705f.f35713i.f35663k.add(this.f35709e);
                        } else if (this.f35706b.i0()) {
                            this.f35706b.f2705f.f35709e.f35664l.add(this.f35709e);
                            this.f35709e.f35663k.add(this.f35706b.f2705f.f35709e);
                        } else {
                            this.f35706b.f2705f.f35709e.f35664l.add(this.f35709e);
                        }
                    } else {
                        g gVar2 = constraintWidget3.f2705f.f35709e;
                        gVar.f35664l.add(gVar2);
                        gVar2.f35663k.add(this.f35709e);
                        this.f35706b.f2705f.f35712h.f35663k.add(this.f35709e);
                        this.f35706b.f2705f.f35713i.f35663k.add(this.f35709e);
                        g gVar3 = this.f35709e;
                        gVar3.f35654b = true;
                        gVar3.f35663k.add(this.f35712h);
                        this.f35709e.f35663k.add(this.f35713i);
                        this.f35712h.f35664l.add(this.f35709e);
                        this.f35713i.f35664l.add(this.f35709e);
                    }
                }
            } else {
                ConstraintWidget K3 = constraintWidget3.K();
                if (K3 != null) {
                    g gVar4 = K3.f2705f.f35709e;
                    this.f35709e.f35664l.add(gVar4);
                    gVar4.f35663k.add(this.f35709e);
                    g gVar5 = this.f35709e;
                    gVar5.f35654b = true;
                    gVar5.f35663k.add(this.f35712h);
                    this.f35709e.f35663k.add(this.f35713i);
                }
            }
        }
        ConstraintWidget constraintWidget4 = this.f35706b;
        androidx.constraintlayout.core.widgets.d[] dVarArr2 = constraintWidget4.W;
        androidx.constraintlayout.core.widgets.d dVar4 = dVarArr2[0];
        androidx.constraintlayout.core.widgets.d dVar5 = dVar4.f2797f;
        if (dVar5 != null && dVarArr2[1].f2797f != null) {
            if (constraintWidget4.i0()) {
                this.f35712h.f35658f = this.f35706b.W[0].f();
                this.f35713i.f35658f = -this.f35706b.W[1].f();
                return;
            }
            f h14 = h(this.f35706b.W[0]);
            f h15 = h(this.f35706b.W[1]);
            if (h14 != null) {
                h14.b(this);
            }
            if (h15 != null) {
                h15.b(this);
            }
            this.f35714j = p.b.CENTER;
        } else if (dVar5 != null) {
            f h16 = h(dVar4);
            if (h16 != null) {
                b(this.f35712h, h16, this.f35706b.W[0].f());
                c(this.f35713i, this.f35712h, 1, this.f35709e);
            }
        } else {
            androidx.constraintlayout.core.widgets.d dVar6 = dVarArr2[1];
            if (dVar6.f2797f != null) {
                f h17 = h(dVar6);
                if (h17 != null) {
                    b(this.f35713i, h17, -this.f35706b.W[1].f());
                    c(this.f35712h, this.f35713i, -1, this.f35709e);
                }
            } else if (!(constraintWidget4 instanceof k1.a) && constraintWidget4.K() != null) {
                b(this.f35712h, this.f35706b.K().f2703e.f35712h, this.f35706b.X());
                c(this.f35713i, this.f35712h, 1, this.f35709e);
            }
        }
    }

    @Override // l1.p
    public void e() {
        f fVar = this.f35712h;
        if (fVar.f35662j) {
            this.f35706b.n1(fVar.f35659g);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // l1.p
    public void f() {
        this.f35707c = null;
        this.f35712h.c();
        this.f35713i.c();
        this.f35709e.c();
        this.f35711g = false;
    }

    @Override // l1.p
    boolean m() {
        if (this.f35708d != ConstraintWidget.b.MATCH_CONSTRAINT || this.f35706b.f2739w == 0) {
            return true;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void r() {
        this.f35711g = false;
        this.f35712h.c();
        this.f35712h.f35662j = false;
        this.f35713i.c();
        this.f35713i.f35662j = false;
        this.f35709e.f35662j = false;
    }

    public String toString() {
        return "HorizontalRun " + this.f35706b.t();
    }
}
