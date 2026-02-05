package l1;

import androidx.constraintlayout.core.widgets.ConstraintWidget;
import androidx.constraintlayout.core.widgets.d;
import l1.f;
import l1.p;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class l extends p {

    /* renamed from: k  reason: collision with root package name */
    private static int[] f36285k = new int[2];

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f36286a;

        static {
            int[] iArr = new int[p.b.values().length];
            f36286a = iArr;
            try {
                iArr[p.b.START.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f36286a[p.b.END.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                f36286a[p.b.CENTER.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
        }
    }

    public l(ConstraintWidget constraintWidget) {
        super(constraintWidget);
        this.f36319h.f36264e = f.a.LEFT;
        this.f36320i.f36264e = f.a.RIGHT;
        this.f36317f = 0;
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
        ConstraintWidget constraintWidget = this.f36313b;
        if (constraintWidget.f2366a) {
            this.f36316e.d(constraintWidget.W());
        }
        if (!this.f36316e.f36269j) {
            ConstraintWidget.b A = this.f36313b.A();
            this.f36315d = A;
            if (A != ConstraintWidget.b.MATCH_CONSTRAINT) {
                ConstraintWidget.b bVar = ConstraintWidget.b.MATCH_PARENT;
                if (A == bVar && (K2 = this.f36313b.K()) != null && (K2.A() == ConstraintWidget.b.FIXED || K2.A() == bVar)) {
                    int W = (K2.W() - this.f36313b.O.f()) - this.f36313b.Q.f();
                    b(this.f36319h, K2.f2374e.f36319h, this.f36313b.O.f());
                    b(this.f36320i, K2.f2374e.f36320i, -this.f36313b.Q.f());
                    this.f36316e.d(W);
                    return;
                } else if (this.f36315d == ConstraintWidget.b.FIXED) {
                    this.f36316e.d(this.f36313b.W());
                }
            }
        } else {
            ConstraintWidget.b bVar2 = this.f36315d;
            ConstraintWidget.b bVar3 = ConstraintWidget.b.MATCH_PARENT;
            if (bVar2 == bVar3 && (K = this.f36313b.K()) != null && (K.A() == ConstraintWidget.b.FIXED || K.A() == bVar3)) {
                b(this.f36319h, K.f2374e.f36319h, this.f36313b.O.f());
                b(this.f36320i, K.f2374e.f36320i, -this.f36313b.Q.f());
                return;
            }
        }
        g gVar = this.f36316e;
        if (gVar.f36269j) {
            ConstraintWidget constraintWidget2 = this.f36313b;
            if (constraintWidget2.f2366a) {
                androidx.constraintlayout.core.widgets.d[] dVarArr = constraintWidget2.W;
                androidx.constraintlayout.core.widgets.d dVar = dVarArr[0];
                androidx.constraintlayout.core.widgets.d dVar2 = dVar.f2468f;
                if (dVar2 != null && dVarArr[1].f2468f != null) {
                    if (constraintWidget2.i0()) {
                        this.f36319h.f36265f = this.f36313b.W[0].f();
                        this.f36320i.f36265f = -this.f36313b.W[1].f();
                        return;
                    }
                    f h10 = h(this.f36313b.W[0]);
                    if (h10 != null) {
                        b(this.f36319h, h10, this.f36313b.W[0].f());
                    }
                    f h11 = h(this.f36313b.W[1]);
                    if (h11 != null) {
                        b(this.f36320i, h11, -this.f36313b.W[1].f());
                    }
                    this.f36319h.f36261b = true;
                    this.f36320i.f36261b = true;
                    return;
                } else if (dVar2 != null) {
                    f h12 = h(dVar);
                    if (h12 != null) {
                        b(this.f36319h, h12, this.f36313b.W[0].f());
                        b(this.f36320i, this.f36319h, this.f36316e.f36266g);
                        return;
                    }
                    return;
                } else {
                    androidx.constraintlayout.core.widgets.d dVar3 = dVarArr[1];
                    if (dVar3.f2468f != null) {
                        f h13 = h(dVar3);
                        if (h13 != null) {
                            b(this.f36320i, h13, -this.f36313b.W[1].f());
                            b(this.f36319h, this.f36320i, -this.f36316e.f36266g);
                            return;
                        }
                        return;
                    } else if (!(constraintWidget2 instanceof k1.a) && constraintWidget2.K() != null && this.f36313b.o(d.a.CENTER).f2468f == null) {
                        b(this.f36319h, this.f36313b.K().f2374e.f36319h, this.f36313b.X());
                        b(this.f36320i, this.f36319h, this.f36316e.f36266g);
                        return;
                    } else {
                        return;
                    }
                }
            }
        }
        if (this.f36315d == ConstraintWidget.b.MATCH_CONSTRAINT) {
            ConstraintWidget constraintWidget3 = this.f36313b;
            int i10 = constraintWidget3.f2410w;
            if (i10 != 2) {
                if (i10 == 3) {
                    if (constraintWidget3.f2412x == 3) {
                        this.f36319h.f36260a = this;
                        this.f36320i.f36260a = this;
                        n nVar = constraintWidget3.f2376f;
                        nVar.f36319h.f36260a = this;
                        nVar.f36320i.f36260a = this;
                        gVar.f36260a = this;
                        if (constraintWidget3.k0()) {
                            this.f36316e.f36271l.add(this.f36313b.f2376f.f36316e);
                            this.f36313b.f2376f.f36316e.f36270k.add(this.f36316e);
                            n nVar2 = this.f36313b.f2376f;
                            nVar2.f36316e.f36260a = this;
                            this.f36316e.f36271l.add(nVar2.f36319h);
                            this.f36316e.f36271l.add(this.f36313b.f2376f.f36320i);
                            this.f36313b.f2376f.f36319h.f36270k.add(this.f36316e);
                            this.f36313b.f2376f.f36320i.f36270k.add(this.f36316e);
                        } else if (this.f36313b.i0()) {
                            this.f36313b.f2376f.f36316e.f36271l.add(this.f36316e);
                            this.f36316e.f36270k.add(this.f36313b.f2376f.f36316e);
                        } else {
                            this.f36313b.f2376f.f36316e.f36271l.add(this.f36316e);
                        }
                    } else {
                        g gVar2 = constraintWidget3.f2376f.f36316e;
                        gVar.f36271l.add(gVar2);
                        gVar2.f36270k.add(this.f36316e);
                        this.f36313b.f2376f.f36319h.f36270k.add(this.f36316e);
                        this.f36313b.f2376f.f36320i.f36270k.add(this.f36316e);
                        g gVar3 = this.f36316e;
                        gVar3.f36261b = true;
                        gVar3.f36270k.add(this.f36319h);
                        this.f36316e.f36270k.add(this.f36320i);
                        this.f36319h.f36271l.add(this.f36316e);
                        this.f36320i.f36271l.add(this.f36316e);
                    }
                }
            } else {
                ConstraintWidget K3 = constraintWidget3.K();
                if (K3 != null) {
                    g gVar4 = K3.f2376f.f36316e;
                    this.f36316e.f36271l.add(gVar4);
                    gVar4.f36270k.add(this.f36316e);
                    g gVar5 = this.f36316e;
                    gVar5.f36261b = true;
                    gVar5.f36270k.add(this.f36319h);
                    this.f36316e.f36270k.add(this.f36320i);
                }
            }
        }
        ConstraintWidget constraintWidget4 = this.f36313b;
        androidx.constraintlayout.core.widgets.d[] dVarArr2 = constraintWidget4.W;
        androidx.constraintlayout.core.widgets.d dVar4 = dVarArr2[0];
        androidx.constraintlayout.core.widgets.d dVar5 = dVar4.f2468f;
        if (dVar5 != null && dVarArr2[1].f2468f != null) {
            if (constraintWidget4.i0()) {
                this.f36319h.f36265f = this.f36313b.W[0].f();
                this.f36320i.f36265f = -this.f36313b.W[1].f();
                return;
            }
            f h14 = h(this.f36313b.W[0]);
            f h15 = h(this.f36313b.W[1]);
            if (h14 != null) {
                h14.b(this);
            }
            if (h15 != null) {
                h15.b(this);
            }
            this.f36321j = p.b.CENTER;
        } else if (dVar5 != null) {
            f h16 = h(dVar4);
            if (h16 != null) {
                b(this.f36319h, h16, this.f36313b.W[0].f());
                c(this.f36320i, this.f36319h, 1, this.f36316e);
            }
        } else {
            androidx.constraintlayout.core.widgets.d dVar6 = dVarArr2[1];
            if (dVar6.f2468f != null) {
                f h17 = h(dVar6);
                if (h17 != null) {
                    b(this.f36320i, h17, -this.f36313b.W[1].f());
                    c(this.f36319h, this.f36320i, -1, this.f36316e);
                }
            } else if (!(constraintWidget4 instanceof k1.a) && constraintWidget4.K() != null) {
                b(this.f36319h, this.f36313b.K().f2374e.f36319h, this.f36313b.X());
                c(this.f36320i, this.f36319h, 1, this.f36316e);
            }
        }
    }

    @Override // l1.p
    public void e() {
        f fVar = this.f36319h;
        if (fVar.f36269j) {
            this.f36313b.n1(fVar.f36266g);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // l1.p
    public void f() {
        this.f36314c = null;
        this.f36319h.c();
        this.f36320i.c();
        this.f36316e.c();
        this.f36318g = false;
    }

    @Override // l1.p
    boolean m() {
        if (this.f36315d != ConstraintWidget.b.MATCH_CONSTRAINT || this.f36313b.f2410w == 0) {
            return true;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void r() {
        this.f36318g = false;
        this.f36319h.c();
        this.f36319h.f36269j = false;
        this.f36320i.c();
        this.f36320i.f36269j = false;
        this.f36316e.f36269j = false;
    }

    public String toString() {
        return "HorizontalRun " + this.f36313b.t();
    }
}
