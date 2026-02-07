package l1;

import androidx.constraintlayout.core.widgets.ConstraintWidget;
import androidx.constraintlayout.core.widgets.d;
import l1.f;
import l1.p;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class l extends p {

    /* renamed from: k  reason: collision with root package name */
    private static int[] f35726k = new int[2];

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f35727a;

        static {
            int[] iArr = new int[p.b.values().length];
            f35727a = iArr;
            try {
                iArr[p.b.START.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f35727a[p.b.END.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                f35727a[p.b.CENTER.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
        }
    }

    public l(ConstraintWidget constraintWidget) {
        super(constraintWidget);
        this.f35760h.f35705e = f.a.LEFT;
        this.f35761i.f35705e = f.a.RIGHT;
        this.f35758f = 0;
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
        ConstraintWidget constraintWidget = this.f35754b;
        if (constraintWidget.f2695a) {
            this.f35757e.d(constraintWidget.W());
        }
        if (!this.f35757e.f35710j) {
            ConstraintWidget.b A = this.f35754b.A();
            this.f35756d = A;
            if (A != ConstraintWidget.b.MATCH_CONSTRAINT) {
                ConstraintWidget.b bVar = ConstraintWidget.b.MATCH_PARENT;
                if (A == bVar && (K2 = this.f35754b.K()) != null && (K2.A() == ConstraintWidget.b.FIXED || K2.A() == bVar)) {
                    int W = (K2.W() - this.f35754b.O.f()) - this.f35754b.Q.f();
                    b(this.f35760h, K2.f2703e.f35760h, this.f35754b.O.f());
                    b(this.f35761i, K2.f2703e.f35761i, -this.f35754b.Q.f());
                    this.f35757e.d(W);
                    return;
                } else if (this.f35756d == ConstraintWidget.b.FIXED) {
                    this.f35757e.d(this.f35754b.W());
                }
            }
        } else {
            ConstraintWidget.b bVar2 = this.f35756d;
            ConstraintWidget.b bVar3 = ConstraintWidget.b.MATCH_PARENT;
            if (bVar2 == bVar3 && (K = this.f35754b.K()) != null && (K.A() == ConstraintWidget.b.FIXED || K.A() == bVar3)) {
                b(this.f35760h, K.f2703e.f35760h, this.f35754b.O.f());
                b(this.f35761i, K.f2703e.f35761i, -this.f35754b.Q.f());
                return;
            }
        }
        g gVar = this.f35757e;
        if (gVar.f35710j) {
            ConstraintWidget constraintWidget2 = this.f35754b;
            if (constraintWidget2.f2695a) {
                androidx.constraintlayout.core.widgets.d[] dVarArr = constraintWidget2.W;
                androidx.constraintlayout.core.widgets.d dVar = dVarArr[0];
                androidx.constraintlayout.core.widgets.d dVar2 = dVar.f2797f;
                if (dVar2 != null && dVarArr[1].f2797f != null) {
                    if (constraintWidget2.i0()) {
                        this.f35760h.f35706f = this.f35754b.W[0].f();
                        this.f35761i.f35706f = -this.f35754b.W[1].f();
                        return;
                    }
                    f h10 = h(this.f35754b.W[0]);
                    if (h10 != null) {
                        b(this.f35760h, h10, this.f35754b.W[0].f());
                    }
                    f h11 = h(this.f35754b.W[1]);
                    if (h11 != null) {
                        b(this.f35761i, h11, -this.f35754b.W[1].f());
                    }
                    this.f35760h.f35702b = true;
                    this.f35761i.f35702b = true;
                    return;
                } else if (dVar2 != null) {
                    f h12 = h(dVar);
                    if (h12 != null) {
                        b(this.f35760h, h12, this.f35754b.W[0].f());
                        b(this.f35761i, this.f35760h, this.f35757e.f35707g);
                        return;
                    }
                    return;
                } else {
                    androidx.constraintlayout.core.widgets.d dVar3 = dVarArr[1];
                    if (dVar3.f2797f != null) {
                        f h13 = h(dVar3);
                        if (h13 != null) {
                            b(this.f35761i, h13, -this.f35754b.W[1].f());
                            b(this.f35760h, this.f35761i, -this.f35757e.f35707g);
                            return;
                        }
                        return;
                    } else if (!(constraintWidget2 instanceof k1.a) && constraintWidget2.K() != null && this.f35754b.o(d.a.CENTER).f2797f == null) {
                        b(this.f35760h, this.f35754b.K().f2703e.f35760h, this.f35754b.X());
                        b(this.f35761i, this.f35760h, this.f35757e.f35707g);
                        return;
                    } else {
                        return;
                    }
                }
            }
        }
        if (this.f35756d == ConstraintWidget.b.MATCH_CONSTRAINT) {
            ConstraintWidget constraintWidget3 = this.f35754b;
            int i10 = constraintWidget3.f2739w;
            if (i10 != 2) {
                if (i10 == 3) {
                    if (constraintWidget3.f2741x == 3) {
                        this.f35760h.f35701a = this;
                        this.f35761i.f35701a = this;
                        n nVar = constraintWidget3.f2705f;
                        nVar.f35760h.f35701a = this;
                        nVar.f35761i.f35701a = this;
                        gVar.f35701a = this;
                        if (constraintWidget3.k0()) {
                            this.f35757e.f35712l.add(this.f35754b.f2705f.f35757e);
                            this.f35754b.f2705f.f35757e.f35711k.add(this.f35757e);
                            n nVar2 = this.f35754b.f2705f;
                            nVar2.f35757e.f35701a = this;
                            this.f35757e.f35712l.add(nVar2.f35760h);
                            this.f35757e.f35712l.add(this.f35754b.f2705f.f35761i);
                            this.f35754b.f2705f.f35760h.f35711k.add(this.f35757e);
                            this.f35754b.f2705f.f35761i.f35711k.add(this.f35757e);
                        } else if (this.f35754b.i0()) {
                            this.f35754b.f2705f.f35757e.f35712l.add(this.f35757e);
                            this.f35757e.f35711k.add(this.f35754b.f2705f.f35757e);
                        } else {
                            this.f35754b.f2705f.f35757e.f35712l.add(this.f35757e);
                        }
                    } else {
                        g gVar2 = constraintWidget3.f2705f.f35757e;
                        gVar.f35712l.add(gVar2);
                        gVar2.f35711k.add(this.f35757e);
                        this.f35754b.f2705f.f35760h.f35711k.add(this.f35757e);
                        this.f35754b.f2705f.f35761i.f35711k.add(this.f35757e);
                        g gVar3 = this.f35757e;
                        gVar3.f35702b = true;
                        gVar3.f35711k.add(this.f35760h);
                        this.f35757e.f35711k.add(this.f35761i);
                        this.f35760h.f35712l.add(this.f35757e);
                        this.f35761i.f35712l.add(this.f35757e);
                    }
                }
            } else {
                ConstraintWidget K3 = constraintWidget3.K();
                if (K3 != null) {
                    g gVar4 = K3.f2705f.f35757e;
                    this.f35757e.f35712l.add(gVar4);
                    gVar4.f35711k.add(this.f35757e);
                    g gVar5 = this.f35757e;
                    gVar5.f35702b = true;
                    gVar5.f35711k.add(this.f35760h);
                    this.f35757e.f35711k.add(this.f35761i);
                }
            }
        }
        ConstraintWidget constraintWidget4 = this.f35754b;
        androidx.constraintlayout.core.widgets.d[] dVarArr2 = constraintWidget4.W;
        androidx.constraintlayout.core.widgets.d dVar4 = dVarArr2[0];
        androidx.constraintlayout.core.widgets.d dVar5 = dVar4.f2797f;
        if (dVar5 != null && dVarArr2[1].f2797f != null) {
            if (constraintWidget4.i0()) {
                this.f35760h.f35706f = this.f35754b.W[0].f();
                this.f35761i.f35706f = -this.f35754b.W[1].f();
                return;
            }
            f h14 = h(this.f35754b.W[0]);
            f h15 = h(this.f35754b.W[1]);
            if (h14 != null) {
                h14.b(this);
            }
            if (h15 != null) {
                h15.b(this);
            }
            this.f35762j = p.b.CENTER;
        } else if (dVar5 != null) {
            f h16 = h(dVar4);
            if (h16 != null) {
                b(this.f35760h, h16, this.f35754b.W[0].f());
                c(this.f35761i, this.f35760h, 1, this.f35757e);
            }
        } else {
            androidx.constraintlayout.core.widgets.d dVar6 = dVarArr2[1];
            if (dVar6.f2797f != null) {
                f h17 = h(dVar6);
                if (h17 != null) {
                    b(this.f35761i, h17, -this.f35754b.W[1].f());
                    c(this.f35760h, this.f35761i, -1, this.f35757e);
                }
            } else if (!(constraintWidget4 instanceof k1.a) && constraintWidget4.K() != null) {
                b(this.f35760h, this.f35754b.K().f2703e.f35760h, this.f35754b.X());
                c(this.f35761i, this.f35760h, 1, this.f35757e);
            }
        }
    }

    @Override // l1.p
    public void e() {
        f fVar = this.f35760h;
        if (fVar.f35710j) {
            this.f35754b.n1(fVar.f35707g);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // l1.p
    public void f() {
        this.f35755c = null;
        this.f35760h.c();
        this.f35761i.c();
        this.f35757e.c();
        this.f35759g = false;
    }

    @Override // l1.p
    boolean m() {
        if (this.f35756d != ConstraintWidget.b.MATCH_CONSTRAINT || this.f35754b.f2739w == 0) {
            return true;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void r() {
        this.f35759g = false;
        this.f35760h.c();
        this.f35760h.f35710j = false;
        this.f35761i.c();
        this.f35761i.f35710j = false;
        this.f35757e.f35710j = false;
    }

    public String toString() {
        return "HorizontalRun " + this.f35754b.t();
    }
}
