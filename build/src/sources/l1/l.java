package l1;

import androidx.constraintlayout.core.widgets.ConstraintWidget;
import androidx.constraintlayout.core.widgets.d;
import l1.f;
import l1.p;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class l extends p {

    /* renamed from: k  reason: collision with root package name */
    private static int[] f35458k = new int[2];

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f35459a;

        static {
            int[] iArr = new int[p.b.values().length];
            f35459a = iArr;
            try {
                iArr[p.b.START.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f35459a[p.b.END.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                f35459a[p.b.CENTER.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
        }
    }

    public l(ConstraintWidget constraintWidget) {
        super(constraintWidget);
        this.f35492h.f35437e = f.a.LEFT;
        this.f35493i.f35437e = f.a.RIGHT;
        this.f35490f = 0;
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
        ConstraintWidget constraintWidget = this.f35486b;
        if (constraintWidget.f2395a) {
            this.f35489e.d(constraintWidget.W());
        }
        if (!this.f35489e.f35442j) {
            ConstraintWidget.b A = this.f35486b.A();
            this.f35488d = A;
            if (A != ConstraintWidget.b.MATCH_CONSTRAINT) {
                ConstraintWidget.b bVar = ConstraintWidget.b.MATCH_PARENT;
                if (A == bVar && (K2 = this.f35486b.K()) != null && (K2.A() == ConstraintWidget.b.FIXED || K2.A() == bVar)) {
                    int W = (K2.W() - this.f35486b.O.f()) - this.f35486b.Q.f();
                    b(this.f35492h, K2.f2403e.f35492h, this.f35486b.O.f());
                    b(this.f35493i, K2.f2403e.f35493i, -this.f35486b.Q.f());
                    this.f35489e.d(W);
                    return;
                } else if (this.f35488d == ConstraintWidget.b.FIXED) {
                    this.f35489e.d(this.f35486b.W());
                }
            }
        } else {
            ConstraintWidget.b bVar2 = this.f35488d;
            ConstraintWidget.b bVar3 = ConstraintWidget.b.MATCH_PARENT;
            if (bVar2 == bVar3 && (K = this.f35486b.K()) != null && (K.A() == ConstraintWidget.b.FIXED || K.A() == bVar3)) {
                b(this.f35492h, K.f2403e.f35492h, this.f35486b.O.f());
                b(this.f35493i, K.f2403e.f35493i, -this.f35486b.Q.f());
                return;
            }
        }
        g gVar = this.f35489e;
        if (gVar.f35442j) {
            ConstraintWidget constraintWidget2 = this.f35486b;
            if (constraintWidget2.f2395a) {
                androidx.constraintlayout.core.widgets.d[] dVarArr = constraintWidget2.W;
                androidx.constraintlayout.core.widgets.d dVar = dVarArr[0];
                androidx.constraintlayout.core.widgets.d dVar2 = dVar.f2497f;
                if (dVar2 != null && dVarArr[1].f2497f != null) {
                    if (constraintWidget2.i0()) {
                        this.f35492h.f35438f = this.f35486b.W[0].f();
                        this.f35493i.f35438f = -this.f35486b.W[1].f();
                        return;
                    }
                    f h10 = h(this.f35486b.W[0]);
                    if (h10 != null) {
                        b(this.f35492h, h10, this.f35486b.W[0].f());
                    }
                    f h11 = h(this.f35486b.W[1]);
                    if (h11 != null) {
                        b(this.f35493i, h11, -this.f35486b.W[1].f());
                    }
                    this.f35492h.f35434b = true;
                    this.f35493i.f35434b = true;
                    return;
                } else if (dVar2 != null) {
                    f h12 = h(dVar);
                    if (h12 != null) {
                        b(this.f35492h, h12, this.f35486b.W[0].f());
                        b(this.f35493i, this.f35492h, this.f35489e.f35439g);
                        return;
                    }
                    return;
                } else {
                    androidx.constraintlayout.core.widgets.d dVar3 = dVarArr[1];
                    if (dVar3.f2497f != null) {
                        f h13 = h(dVar3);
                        if (h13 != null) {
                            b(this.f35493i, h13, -this.f35486b.W[1].f());
                            b(this.f35492h, this.f35493i, -this.f35489e.f35439g);
                            return;
                        }
                        return;
                    } else if (!(constraintWidget2 instanceof k1.a) && constraintWidget2.K() != null && this.f35486b.o(d.a.CENTER).f2497f == null) {
                        b(this.f35492h, this.f35486b.K().f2403e.f35492h, this.f35486b.X());
                        b(this.f35493i, this.f35492h, this.f35489e.f35439g);
                        return;
                    } else {
                        return;
                    }
                }
            }
        }
        if (this.f35488d == ConstraintWidget.b.MATCH_CONSTRAINT) {
            ConstraintWidget constraintWidget3 = this.f35486b;
            int i10 = constraintWidget3.f2439w;
            if (i10 != 2) {
                if (i10 == 3) {
                    if (constraintWidget3.f2441x == 3) {
                        this.f35492h.f35433a = this;
                        this.f35493i.f35433a = this;
                        n nVar = constraintWidget3.f2405f;
                        nVar.f35492h.f35433a = this;
                        nVar.f35493i.f35433a = this;
                        gVar.f35433a = this;
                        if (constraintWidget3.k0()) {
                            this.f35489e.f35444l.add(this.f35486b.f2405f.f35489e);
                            this.f35486b.f2405f.f35489e.f35443k.add(this.f35489e);
                            n nVar2 = this.f35486b.f2405f;
                            nVar2.f35489e.f35433a = this;
                            this.f35489e.f35444l.add(nVar2.f35492h);
                            this.f35489e.f35444l.add(this.f35486b.f2405f.f35493i);
                            this.f35486b.f2405f.f35492h.f35443k.add(this.f35489e);
                            this.f35486b.f2405f.f35493i.f35443k.add(this.f35489e);
                        } else if (this.f35486b.i0()) {
                            this.f35486b.f2405f.f35489e.f35444l.add(this.f35489e);
                            this.f35489e.f35443k.add(this.f35486b.f2405f.f35489e);
                        } else {
                            this.f35486b.f2405f.f35489e.f35444l.add(this.f35489e);
                        }
                    } else {
                        g gVar2 = constraintWidget3.f2405f.f35489e;
                        gVar.f35444l.add(gVar2);
                        gVar2.f35443k.add(this.f35489e);
                        this.f35486b.f2405f.f35492h.f35443k.add(this.f35489e);
                        this.f35486b.f2405f.f35493i.f35443k.add(this.f35489e);
                        g gVar3 = this.f35489e;
                        gVar3.f35434b = true;
                        gVar3.f35443k.add(this.f35492h);
                        this.f35489e.f35443k.add(this.f35493i);
                        this.f35492h.f35444l.add(this.f35489e);
                        this.f35493i.f35444l.add(this.f35489e);
                    }
                }
            } else {
                ConstraintWidget K3 = constraintWidget3.K();
                if (K3 != null) {
                    g gVar4 = K3.f2405f.f35489e;
                    this.f35489e.f35444l.add(gVar4);
                    gVar4.f35443k.add(this.f35489e);
                    g gVar5 = this.f35489e;
                    gVar5.f35434b = true;
                    gVar5.f35443k.add(this.f35492h);
                    this.f35489e.f35443k.add(this.f35493i);
                }
            }
        }
        ConstraintWidget constraintWidget4 = this.f35486b;
        androidx.constraintlayout.core.widgets.d[] dVarArr2 = constraintWidget4.W;
        androidx.constraintlayout.core.widgets.d dVar4 = dVarArr2[0];
        androidx.constraintlayout.core.widgets.d dVar5 = dVar4.f2497f;
        if (dVar5 != null && dVarArr2[1].f2497f != null) {
            if (constraintWidget4.i0()) {
                this.f35492h.f35438f = this.f35486b.W[0].f();
                this.f35493i.f35438f = -this.f35486b.W[1].f();
                return;
            }
            f h14 = h(this.f35486b.W[0]);
            f h15 = h(this.f35486b.W[1]);
            if (h14 != null) {
                h14.b(this);
            }
            if (h15 != null) {
                h15.b(this);
            }
            this.f35494j = p.b.CENTER;
        } else if (dVar5 != null) {
            f h16 = h(dVar4);
            if (h16 != null) {
                b(this.f35492h, h16, this.f35486b.W[0].f());
                c(this.f35493i, this.f35492h, 1, this.f35489e);
            }
        } else {
            androidx.constraintlayout.core.widgets.d dVar6 = dVarArr2[1];
            if (dVar6.f2497f != null) {
                f h17 = h(dVar6);
                if (h17 != null) {
                    b(this.f35493i, h17, -this.f35486b.W[1].f());
                    c(this.f35492h, this.f35493i, -1, this.f35489e);
                }
            } else if (!(constraintWidget4 instanceof k1.a) && constraintWidget4.K() != null) {
                b(this.f35492h, this.f35486b.K().f2403e.f35492h, this.f35486b.X());
                c(this.f35493i, this.f35492h, 1, this.f35489e);
            }
        }
    }

    @Override // l1.p
    public void e() {
        f fVar = this.f35492h;
        if (fVar.f35442j) {
            this.f35486b.n1(fVar.f35439g);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // l1.p
    public void f() {
        this.f35487c = null;
        this.f35492h.c();
        this.f35493i.c();
        this.f35489e.c();
        this.f35491g = false;
    }

    @Override // l1.p
    boolean m() {
        if (this.f35488d != ConstraintWidget.b.MATCH_CONSTRAINT || this.f35486b.f2439w == 0) {
            return true;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void r() {
        this.f35491g = false;
        this.f35492h.c();
        this.f35492h.f35442j = false;
        this.f35493i.c();
        this.f35493i.f35442j = false;
        this.f35489e.f35442j = false;
    }

    public String toString() {
        return "HorizontalRun " + this.f35486b.t();
    }
}
