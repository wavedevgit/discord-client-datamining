package l1;

import androidx.constraintlayout.core.widgets.ConstraintWidget;
import androidx.constraintlayout.core.widgets.d;
import l1.f;
import l1.p;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class l extends p {

    /* renamed from: k  reason: collision with root package name */
    private static int[] f36358k = new int[2];

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f36359a;

        static {
            int[] iArr = new int[p.b.values().length];
            f36359a = iArr;
            try {
                iArr[p.b.START.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f36359a[p.b.END.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                f36359a[p.b.CENTER.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
        }
    }

    public l(ConstraintWidget constraintWidget) {
        super(constraintWidget);
        this.f36392h.f36337e = f.a.LEFT;
        this.f36393i.f36337e = f.a.RIGHT;
        this.f36390f = 0;
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
        ConstraintWidget constraintWidget = this.f36386b;
        if (constraintWidget.f2254a) {
            this.f36389e.d(constraintWidget.W());
        }
        if (!this.f36389e.f36342j) {
            ConstraintWidget.b A = this.f36386b.A();
            this.f36388d = A;
            if (A != ConstraintWidget.b.MATCH_CONSTRAINT) {
                ConstraintWidget.b bVar = ConstraintWidget.b.MATCH_PARENT;
                if (A == bVar && (K2 = this.f36386b.K()) != null && (K2.A() == ConstraintWidget.b.FIXED || K2.A() == bVar)) {
                    int W = (K2.W() - this.f36386b.O.f()) - this.f36386b.Q.f();
                    b(this.f36392h, K2.f2262e.f36392h, this.f36386b.O.f());
                    b(this.f36393i, K2.f2262e.f36393i, -this.f36386b.Q.f());
                    this.f36389e.d(W);
                    return;
                } else if (this.f36388d == ConstraintWidget.b.FIXED) {
                    this.f36389e.d(this.f36386b.W());
                }
            }
        } else {
            ConstraintWidget.b bVar2 = this.f36388d;
            ConstraintWidget.b bVar3 = ConstraintWidget.b.MATCH_PARENT;
            if (bVar2 == bVar3 && (K = this.f36386b.K()) != null && (K.A() == ConstraintWidget.b.FIXED || K.A() == bVar3)) {
                b(this.f36392h, K.f2262e.f36392h, this.f36386b.O.f());
                b(this.f36393i, K.f2262e.f36393i, -this.f36386b.Q.f());
                return;
            }
        }
        g gVar = this.f36389e;
        if (gVar.f36342j) {
            ConstraintWidget constraintWidget2 = this.f36386b;
            if (constraintWidget2.f2254a) {
                androidx.constraintlayout.core.widgets.d[] dVarArr = constraintWidget2.W;
                androidx.constraintlayout.core.widgets.d dVar = dVarArr[0];
                androidx.constraintlayout.core.widgets.d dVar2 = dVar.f2356f;
                if (dVar2 != null && dVarArr[1].f2356f != null) {
                    if (constraintWidget2.i0()) {
                        this.f36392h.f36338f = this.f36386b.W[0].f();
                        this.f36393i.f36338f = -this.f36386b.W[1].f();
                        return;
                    }
                    f h10 = h(this.f36386b.W[0]);
                    if (h10 != null) {
                        b(this.f36392h, h10, this.f36386b.W[0].f());
                    }
                    f h11 = h(this.f36386b.W[1]);
                    if (h11 != null) {
                        b(this.f36393i, h11, -this.f36386b.W[1].f());
                    }
                    this.f36392h.f36334b = true;
                    this.f36393i.f36334b = true;
                    return;
                } else if (dVar2 != null) {
                    f h12 = h(dVar);
                    if (h12 != null) {
                        b(this.f36392h, h12, this.f36386b.W[0].f());
                        b(this.f36393i, this.f36392h, this.f36389e.f36339g);
                        return;
                    }
                    return;
                } else {
                    androidx.constraintlayout.core.widgets.d dVar3 = dVarArr[1];
                    if (dVar3.f2356f != null) {
                        f h13 = h(dVar3);
                        if (h13 != null) {
                            b(this.f36393i, h13, -this.f36386b.W[1].f());
                            b(this.f36392h, this.f36393i, -this.f36389e.f36339g);
                            return;
                        }
                        return;
                    } else if (!(constraintWidget2 instanceof k1.a) && constraintWidget2.K() != null && this.f36386b.o(d.a.CENTER).f2356f == null) {
                        b(this.f36392h, this.f36386b.K().f2262e.f36392h, this.f36386b.X());
                        b(this.f36393i, this.f36392h, this.f36389e.f36339g);
                        return;
                    } else {
                        return;
                    }
                }
            }
        }
        if (this.f36388d == ConstraintWidget.b.MATCH_CONSTRAINT) {
            ConstraintWidget constraintWidget3 = this.f36386b;
            int i10 = constraintWidget3.f2298w;
            if (i10 != 2) {
                if (i10 == 3) {
                    if (constraintWidget3.f2300x == 3) {
                        this.f36392h.f36333a = this;
                        this.f36393i.f36333a = this;
                        n nVar = constraintWidget3.f2264f;
                        nVar.f36392h.f36333a = this;
                        nVar.f36393i.f36333a = this;
                        gVar.f36333a = this;
                        if (constraintWidget3.k0()) {
                            this.f36389e.f36344l.add(this.f36386b.f2264f.f36389e);
                            this.f36386b.f2264f.f36389e.f36343k.add(this.f36389e);
                            n nVar2 = this.f36386b.f2264f;
                            nVar2.f36389e.f36333a = this;
                            this.f36389e.f36344l.add(nVar2.f36392h);
                            this.f36389e.f36344l.add(this.f36386b.f2264f.f36393i);
                            this.f36386b.f2264f.f36392h.f36343k.add(this.f36389e);
                            this.f36386b.f2264f.f36393i.f36343k.add(this.f36389e);
                        } else if (this.f36386b.i0()) {
                            this.f36386b.f2264f.f36389e.f36344l.add(this.f36389e);
                            this.f36389e.f36343k.add(this.f36386b.f2264f.f36389e);
                        } else {
                            this.f36386b.f2264f.f36389e.f36344l.add(this.f36389e);
                        }
                    } else {
                        g gVar2 = constraintWidget3.f2264f.f36389e;
                        gVar.f36344l.add(gVar2);
                        gVar2.f36343k.add(this.f36389e);
                        this.f36386b.f2264f.f36392h.f36343k.add(this.f36389e);
                        this.f36386b.f2264f.f36393i.f36343k.add(this.f36389e);
                        g gVar3 = this.f36389e;
                        gVar3.f36334b = true;
                        gVar3.f36343k.add(this.f36392h);
                        this.f36389e.f36343k.add(this.f36393i);
                        this.f36392h.f36344l.add(this.f36389e);
                        this.f36393i.f36344l.add(this.f36389e);
                    }
                }
            } else {
                ConstraintWidget K3 = constraintWidget3.K();
                if (K3 != null) {
                    g gVar4 = K3.f2264f.f36389e;
                    this.f36389e.f36344l.add(gVar4);
                    gVar4.f36343k.add(this.f36389e);
                    g gVar5 = this.f36389e;
                    gVar5.f36334b = true;
                    gVar5.f36343k.add(this.f36392h);
                    this.f36389e.f36343k.add(this.f36393i);
                }
            }
        }
        ConstraintWidget constraintWidget4 = this.f36386b;
        androidx.constraintlayout.core.widgets.d[] dVarArr2 = constraintWidget4.W;
        androidx.constraintlayout.core.widgets.d dVar4 = dVarArr2[0];
        androidx.constraintlayout.core.widgets.d dVar5 = dVar4.f2356f;
        if (dVar5 != null && dVarArr2[1].f2356f != null) {
            if (constraintWidget4.i0()) {
                this.f36392h.f36338f = this.f36386b.W[0].f();
                this.f36393i.f36338f = -this.f36386b.W[1].f();
                return;
            }
            f h14 = h(this.f36386b.W[0]);
            f h15 = h(this.f36386b.W[1]);
            if (h14 != null) {
                h14.b(this);
            }
            if (h15 != null) {
                h15.b(this);
            }
            this.f36394j = p.b.CENTER;
        } else if (dVar5 != null) {
            f h16 = h(dVar4);
            if (h16 != null) {
                b(this.f36392h, h16, this.f36386b.W[0].f());
                c(this.f36393i, this.f36392h, 1, this.f36389e);
            }
        } else {
            androidx.constraintlayout.core.widgets.d dVar6 = dVarArr2[1];
            if (dVar6.f2356f != null) {
                f h17 = h(dVar6);
                if (h17 != null) {
                    b(this.f36393i, h17, -this.f36386b.W[1].f());
                    c(this.f36392h, this.f36393i, -1, this.f36389e);
                }
            } else if (!(constraintWidget4 instanceof k1.a) && constraintWidget4.K() != null) {
                b(this.f36392h, this.f36386b.K().f2262e.f36392h, this.f36386b.X());
                c(this.f36393i, this.f36392h, 1, this.f36389e);
            }
        }
    }

    @Override // l1.p
    public void e() {
        f fVar = this.f36392h;
        if (fVar.f36342j) {
            this.f36386b.n1(fVar.f36339g);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // l1.p
    public void f() {
        this.f36387c = null;
        this.f36392h.c();
        this.f36393i.c();
        this.f36389e.c();
        this.f36391g = false;
    }

    @Override // l1.p
    boolean m() {
        if (this.f36388d != ConstraintWidget.b.MATCH_CONSTRAINT || this.f36386b.f2298w == 0) {
            return true;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void r() {
        this.f36391g = false;
        this.f36392h.c();
        this.f36392h.f36342j = false;
        this.f36393i.c();
        this.f36393i.f36342j = false;
        this.f36389e.f36342j = false;
    }

    public String toString() {
        return "HorizontalRun " + this.f36386b.t();
    }
}
