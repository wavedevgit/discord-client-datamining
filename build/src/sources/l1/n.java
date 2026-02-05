package l1;

import androidx.constraintlayout.core.widgets.ConstraintWidget;
import androidx.constraintlayout.core.widgets.d;
import l1.f;
import l1.p;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class n extends p {

    /* renamed from: k  reason: collision with root package name */
    public f f36295k;

    /* renamed from: l  reason: collision with root package name */
    g f36296l;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f36297a;

        static {
            int[] iArr = new int[p.b.values().length];
            f36297a = iArr;
            try {
                iArr[p.b.START.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f36297a[p.b.END.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                f36297a[p.b.CENTER.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
        }
    }

    public n(ConstraintWidget constraintWidget) {
        super(constraintWidget);
        f fVar = new f(this);
        this.f36295k = fVar;
        this.f36296l = null;
        this.f36319h.f36264e = f.a.TOP;
        this.f36320i.f36264e = f.a.BOTTOM;
        fVar.f36264e = f.a.BASELINE;
        this.f36317f = 1;
    }

    @Override // l1.p, l1.d
    public void a(d dVar) {
        g gVar;
        float f10;
        float v10;
        float f11;
        int i10;
        ConstraintWidget constraintWidget;
        int i11 = a.f36297a[this.f36321j.ordinal()];
        if (i11 != 1) {
            if (i11 != 2) {
                if (i11 == 3) {
                    ConstraintWidget constraintWidget2 = this.f36313b;
                    n(dVar, constraintWidget2.P, constraintWidget2.R, 1);
                    return;
                }
            } else {
                o(dVar);
            }
        } else {
            p(dVar);
        }
        g gVar2 = this.f36316e;
        if (gVar2.f36262c && !gVar2.f36269j && this.f36315d == ConstraintWidget.b.MATCH_CONSTRAINT) {
            ConstraintWidget constraintWidget3 = this.f36313b;
            int i12 = constraintWidget3.f2412x;
            if (i12 != 2) {
                if (i12 == 3 && constraintWidget3.f2374e.f36316e.f36269j) {
                    int w10 = constraintWidget3.w();
                    if (w10 != -1) {
                        if (w10 != 0) {
                            if (w10 != 1) {
                                i10 = 0;
                                this.f36316e.d(i10);
                            } else {
                                ConstraintWidget constraintWidget4 = this.f36313b;
                                f10 = constraintWidget4.f2374e.f36316e.f36266g;
                                v10 = constraintWidget4.v();
                            }
                        } else {
                            f11 = constraintWidget.f2374e.f36316e.f36266g * this.f36313b.v();
                            i10 = (int) (f11 + 0.5f);
                            this.f36316e.d(i10);
                        }
                    } else {
                        ConstraintWidget constraintWidget5 = this.f36313b;
                        f10 = constraintWidget5.f2374e.f36316e.f36266g;
                        v10 = constraintWidget5.v();
                    }
                    f11 = f10 / v10;
                    i10 = (int) (f11 + 0.5f);
                    this.f36316e.d(i10);
                }
            } else {
                ConstraintWidget K = constraintWidget3.K();
                if (K != null) {
                    if (K.f2376f.f36316e.f36269j) {
                        this.f36316e.d((int) ((gVar.f36266g * this.f36313b.E) + 0.5f));
                    }
                }
            }
        }
        f fVar = this.f36319h;
        if (fVar.f36262c) {
            f fVar2 = this.f36320i;
            if (fVar2.f36262c) {
                if (!fVar.f36269j || !fVar2.f36269j || !this.f36316e.f36269j) {
                    if (!this.f36316e.f36269j && this.f36315d == ConstraintWidget.b.MATCH_CONSTRAINT) {
                        ConstraintWidget constraintWidget6 = this.f36313b;
                        if (constraintWidget6.f2410w == 0 && !constraintWidget6.k0()) {
                            int i13 = ((f) this.f36319h.f36271l.get(0)).f36266g;
                            f fVar3 = this.f36319h;
                            int i14 = i13 + fVar3.f36265f;
                            int i15 = ((f) this.f36320i.f36271l.get(0)).f36266g + this.f36320i.f36265f;
                            fVar3.d(i14);
                            this.f36320i.d(i15);
                            this.f36316e.d(i15 - i14);
                            return;
                        }
                    }
                    if (!this.f36316e.f36269j && this.f36315d == ConstraintWidget.b.MATCH_CONSTRAINT && this.f36312a == 1 && this.f36319h.f36271l.size() > 0 && this.f36320i.f36271l.size() > 0) {
                        int i16 = (((f) this.f36320i.f36271l.get(0)).f36266g + this.f36320i.f36265f) - (((f) this.f36319h.f36271l.get(0)).f36266g + this.f36319h.f36265f);
                        g gVar3 = this.f36316e;
                        int i17 = gVar3.f36281m;
                        if (i16 < i17) {
                            gVar3.d(i16);
                        } else {
                            gVar3.d(i17);
                        }
                    }
                    if (this.f36316e.f36269j && this.f36319h.f36271l.size() > 0 && this.f36320i.f36271l.size() > 0) {
                        f fVar4 = (f) this.f36319h.f36271l.get(0);
                        f fVar5 = (f) this.f36320i.f36271l.get(0);
                        int i18 = fVar4.f36266g + this.f36319h.f36265f;
                        int i19 = fVar5.f36266g + this.f36320i.f36265f;
                        float R = this.f36313b.R();
                        if (fVar4 == fVar5) {
                            i18 = fVar4.f36266g;
                            i19 = fVar5.f36266g;
                            R = 0.5f;
                        }
                        this.f36319h.d((int) (i18 + 0.5f + (((i19 - i18) - this.f36316e.f36266g) * R)));
                        this.f36320i.d(this.f36319h.f36266g + this.f36316e.f36266g);
                    }
                }
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // l1.p
    public void d() {
        ConstraintWidget K;
        ConstraintWidget K2;
        ConstraintWidget constraintWidget = this.f36313b;
        if (constraintWidget.f2366a) {
            this.f36316e.d(constraintWidget.x());
        }
        if (!this.f36316e.f36269j) {
            this.f36315d = this.f36313b.T();
            if (this.f36313b.Z()) {
                this.f36296l = new l1.a(this);
            }
            ConstraintWidget.b bVar = this.f36315d;
            if (bVar != ConstraintWidget.b.MATCH_CONSTRAINT) {
                if (bVar == ConstraintWidget.b.MATCH_PARENT && (K2 = this.f36313b.K()) != null && K2.T() == ConstraintWidget.b.FIXED) {
                    int x10 = (K2.x() - this.f36313b.P.f()) - this.f36313b.R.f();
                    b(this.f36319h, K2.f2376f.f36319h, this.f36313b.P.f());
                    b(this.f36320i, K2.f2376f.f36320i, -this.f36313b.R.f());
                    this.f36316e.d(x10);
                    return;
                } else if (this.f36315d == ConstraintWidget.b.FIXED) {
                    this.f36316e.d(this.f36313b.x());
                }
            }
        } else if (this.f36315d == ConstraintWidget.b.MATCH_PARENT && (K = this.f36313b.K()) != null && K.T() == ConstraintWidget.b.FIXED) {
            b(this.f36319h, K.f2376f.f36319h, this.f36313b.P.f());
            b(this.f36320i, K.f2376f.f36320i, -this.f36313b.R.f());
            return;
        }
        g gVar = this.f36316e;
        boolean z10 = gVar.f36269j;
        if (z10) {
            ConstraintWidget constraintWidget2 = this.f36313b;
            if (constraintWidget2.f2366a) {
                androidx.constraintlayout.core.widgets.d[] dVarArr = constraintWidget2.W;
                androidx.constraintlayout.core.widgets.d dVar = dVarArr[2];
                androidx.constraintlayout.core.widgets.d dVar2 = dVar.f2468f;
                if (dVar2 != null && dVarArr[3].f2468f != null) {
                    if (constraintWidget2.k0()) {
                        this.f36319h.f36265f = this.f36313b.W[2].f();
                        this.f36320i.f36265f = -this.f36313b.W[3].f();
                    } else {
                        f h10 = h(this.f36313b.W[2]);
                        if (h10 != null) {
                            b(this.f36319h, h10, this.f36313b.W[2].f());
                        }
                        f h11 = h(this.f36313b.W[3]);
                        if (h11 != null) {
                            b(this.f36320i, h11, -this.f36313b.W[3].f());
                        }
                        this.f36319h.f36261b = true;
                        this.f36320i.f36261b = true;
                    }
                    if (this.f36313b.Z()) {
                        b(this.f36295k, this.f36319h, this.f36313b.p());
                        return;
                    }
                    return;
                } else if (dVar2 != null) {
                    f h12 = h(dVar);
                    if (h12 != null) {
                        b(this.f36319h, h12, this.f36313b.W[2].f());
                        b(this.f36320i, this.f36319h, this.f36316e.f36266g);
                        if (this.f36313b.Z()) {
                            b(this.f36295k, this.f36319h, this.f36313b.p());
                            return;
                        }
                        return;
                    }
                    return;
                } else {
                    androidx.constraintlayout.core.widgets.d dVar3 = dVarArr[3];
                    if (dVar3.f2468f != null) {
                        f h13 = h(dVar3);
                        if (h13 != null) {
                            b(this.f36320i, h13, -this.f36313b.W[3].f());
                            b(this.f36319h, this.f36320i, -this.f36316e.f36266g);
                        }
                        if (this.f36313b.Z()) {
                            b(this.f36295k, this.f36319h, this.f36313b.p());
                            return;
                        }
                        return;
                    }
                    androidx.constraintlayout.core.widgets.d dVar4 = dVarArr[4];
                    if (dVar4.f2468f != null) {
                        f h14 = h(dVar4);
                        if (h14 != null) {
                            b(this.f36295k, h14, 0);
                            b(this.f36319h, this.f36295k, -this.f36313b.p());
                            b(this.f36320i, this.f36319h, this.f36316e.f36266g);
                            return;
                        }
                        return;
                    } else if (!(constraintWidget2 instanceof k1.a) && constraintWidget2.K() != null && this.f36313b.o(d.a.CENTER).f2468f == null) {
                        b(this.f36319h, this.f36313b.K().f2376f.f36319h, this.f36313b.Y());
                        b(this.f36320i, this.f36319h, this.f36316e.f36266g);
                        if (this.f36313b.Z()) {
                            b(this.f36295k, this.f36319h, this.f36313b.p());
                            return;
                        }
                        return;
                    } else {
                        return;
                    }
                }
            }
        }
        if (!z10 && this.f36315d == ConstraintWidget.b.MATCH_CONSTRAINT) {
            ConstraintWidget constraintWidget3 = this.f36313b;
            int i10 = constraintWidget3.f2412x;
            if (i10 != 2) {
                if (i10 == 3 && !constraintWidget3.k0()) {
                    ConstraintWidget constraintWidget4 = this.f36313b;
                    if (constraintWidget4.f2410w != 3) {
                        g gVar2 = constraintWidget4.f2374e.f36316e;
                        this.f36316e.f36271l.add(gVar2);
                        gVar2.f36270k.add(this.f36316e);
                        g gVar3 = this.f36316e;
                        gVar3.f36261b = true;
                        gVar3.f36270k.add(this.f36319h);
                        this.f36316e.f36270k.add(this.f36320i);
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
        } else {
            gVar.b(this);
        }
        ConstraintWidget constraintWidget5 = this.f36313b;
        androidx.constraintlayout.core.widgets.d[] dVarArr2 = constraintWidget5.W;
        androidx.constraintlayout.core.widgets.d dVar5 = dVarArr2[2];
        androidx.constraintlayout.core.widgets.d dVar6 = dVar5.f2468f;
        if (dVar6 != null && dVarArr2[3].f2468f != null) {
            if (constraintWidget5.k0()) {
                this.f36319h.f36265f = this.f36313b.W[2].f();
                this.f36320i.f36265f = -this.f36313b.W[3].f();
            } else {
                f h15 = h(this.f36313b.W[2]);
                f h16 = h(this.f36313b.W[3]);
                if (h15 != null) {
                    h15.b(this);
                }
                if (h16 != null) {
                    h16.b(this);
                }
                this.f36321j = p.b.CENTER;
            }
            if (this.f36313b.Z()) {
                c(this.f36295k, this.f36319h, 1, this.f36296l);
            }
        } else if (dVar6 != null) {
            f h17 = h(dVar5);
            if (h17 != null) {
                b(this.f36319h, h17, this.f36313b.W[2].f());
                c(this.f36320i, this.f36319h, 1, this.f36316e);
                if (this.f36313b.Z()) {
                    c(this.f36295k, this.f36319h, 1, this.f36296l);
                }
                ConstraintWidget.b bVar2 = this.f36315d;
                ConstraintWidget.b bVar3 = ConstraintWidget.b.MATCH_CONSTRAINT;
                if (bVar2 == bVar3 && this.f36313b.v() > 0.0f) {
                    l lVar = this.f36313b.f2374e;
                    if (lVar.f36315d == bVar3) {
                        lVar.f36316e.f36270k.add(this.f36316e);
                        this.f36316e.f36271l.add(this.f36313b.f2374e.f36316e);
                        this.f36316e.f36260a = this;
                    }
                }
            }
        } else {
            androidx.constraintlayout.core.widgets.d dVar7 = dVarArr2[3];
            if (dVar7.f2468f != null) {
                f h18 = h(dVar7);
                if (h18 != null) {
                    b(this.f36320i, h18, -this.f36313b.W[3].f());
                    c(this.f36319h, this.f36320i, -1, this.f36316e);
                    if (this.f36313b.Z()) {
                        c(this.f36295k, this.f36319h, 1, this.f36296l);
                    }
                }
            } else {
                androidx.constraintlayout.core.widgets.d dVar8 = dVarArr2[4];
                if (dVar8.f2468f != null) {
                    f h19 = h(dVar8);
                    if (h19 != null) {
                        b(this.f36295k, h19, 0);
                        c(this.f36319h, this.f36295k, -1, this.f36296l);
                        c(this.f36320i, this.f36319h, 1, this.f36316e);
                    }
                } else if (!(constraintWidget5 instanceof k1.a) && constraintWidget5.K() != null) {
                    b(this.f36319h, this.f36313b.K().f2376f.f36319h, this.f36313b.Y());
                    c(this.f36320i, this.f36319h, 1, this.f36316e);
                    if (this.f36313b.Z()) {
                        c(this.f36295k, this.f36319h, 1, this.f36296l);
                    }
                    ConstraintWidget.b bVar4 = this.f36315d;
                    ConstraintWidget.b bVar5 = ConstraintWidget.b.MATCH_CONSTRAINT;
                    if (bVar4 == bVar5 && this.f36313b.v() > 0.0f) {
                        l lVar2 = this.f36313b.f2374e;
                        if (lVar2.f36315d == bVar5) {
                            lVar2.f36316e.f36270k.add(this.f36316e);
                            this.f36316e.f36271l.add(this.f36313b.f2374e.f36316e);
                            this.f36316e.f36260a = this;
                        }
                    }
                }
            }
        }
        if (this.f36316e.f36271l.size() == 0) {
            this.f36316e.f36262c = true;
        }
    }

    @Override // l1.p
    public void e() {
        f fVar = this.f36319h;
        if (fVar.f36269j) {
            this.f36313b.o1(fVar.f36266g);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // l1.p
    public void f() {
        this.f36314c = null;
        this.f36319h.c();
        this.f36320i.c();
        this.f36295k.c();
        this.f36316e.c();
        this.f36318g = false;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // l1.p
    public boolean m() {
        if (this.f36315d != ConstraintWidget.b.MATCH_CONSTRAINT || this.f36313b.f2412x == 0) {
            return true;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void q() {
        this.f36318g = false;
        this.f36319h.c();
        this.f36319h.f36269j = false;
        this.f36320i.c();
        this.f36320i.f36269j = false;
        this.f36295k.c();
        this.f36295k.f36269j = false;
        this.f36316e.f36269j = false;
    }

    public String toString() {
        return "VerticalRun " + this.f36313b.t();
    }
}
