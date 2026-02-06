package l1;

import androidx.constraintlayout.core.widgets.ConstraintWidget;
import androidx.constraintlayout.core.widgets.d;
import l1.f;
import l1.p;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class n extends p {

    /* renamed from: k  reason: collision with root package name */
    public f f35688k;

    /* renamed from: l  reason: collision with root package name */
    g f35689l;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f35690a;

        static {
            int[] iArr = new int[p.b.values().length];
            f35690a = iArr;
            try {
                iArr[p.b.START.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f35690a[p.b.END.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                f35690a[p.b.CENTER.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
        }
    }

    public n(ConstraintWidget constraintWidget) {
        super(constraintWidget);
        f fVar = new f(this);
        this.f35688k = fVar;
        this.f35689l = null;
        this.f35712h.f35657e = f.a.TOP;
        this.f35713i.f35657e = f.a.BOTTOM;
        fVar.f35657e = f.a.BASELINE;
        this.f35710f = 1;
    }

    @Override // l1.p, l1.d
    public void a(d dVar) {
        g gVar;
        float f10;
        float v10;
        float f11;
        int i10;
        ConstraintWidget constraintWidget;
        int i11 = a.f35690a[this.f35714j.ordinal()];
        if (i11 != 1) {
            if (i11 != 2) {
                if (i11 == 3) {
                    ConstraintWidget constraintWidget2 = this.f35706b;
                    n(dVar, constraintWidget2.P, constraintWidget2.R, 1);
                    return;
                }
            } else {
                o(dVar);
            }
        } else {
            p(dVar);
        }
        g gVar2 = this.f35709e;
        if (gVar2.f35655c && !gVar2.f35662j && this.f35708d == ConstraintWidget.b.MATCH_CONSTRAINT) {
            ConstraintWidget constraintWidget3 = this.f35706b;
            int i12 = constraintWidget3.f2741x;
            if (i12 != 2) {
                if (i12 == 3 && constraintWidget3.f2703e.f35709e.f35662j) {
                    int w10 = constraintWidget3.w();
                    if (w10 != -1) {
                        if (w10 != 0) {
                            if (w10 != 1) {
                                i10 = 0;
                                this.f35709e.d(i10);
                            } else {
                                ConstraintWidget constraintWidget4 = this.f35706b;
                                f10 = constraintWidget4.f2703e.f35709e.f35659g;
                                v10 = constraintWidget4.v();
                            }
                        } else {
                            f11 = constraintWidget.f2703e.f35709e.f35659g * this.f35706b.v();
                            i10 = (int) (f11 + 0.5f);
                            this.f35709e.d(i10);
                        }
                    } else {
                        ConstraintWidget constraintWidget5 = this.f35706b;
                        f10 = constraintWidget5.f2703e.f35709e.f35659g;
                        v10 = constraintWidget5.v();
                    }
                    f11 = f10 / v10;
                    i10 = (int) (f11 + 0.5f);
                    this.f35709e.d(i10);
                }
            } else {
                ConstraintWidget K = constraintWidget3.K();
                if (K != null) {
                    if (K.f2705f.f35709e.f35662j) {
                        this.f35709e.d((int) ((gVar.f35659g * this.f35706b.E) + 0.5f));
                    }
                }
            }
        }
        f fVar = this.f35712h;
        if (fVar.f35655c) {
            f fVar2 = this.f35713i;
            if (fVar2.f35655c) {
                if (!fVar.f35662j || !fVar2.f35662j || !this.f35709e.f35662j) {
                    if (!this.f35709e.f35662j && this.f35708d == ConstraintWidget.b.MATCH_CONSTRAINT) {
                        ConstraintWidget constraintWidget6 = this.f35706b;
                        if (constraintWidget6.f2739w == 0 && !constraintWidget6.k0()) {
                            int i13 = ((f) this.f35712h.f35664l.get(0)).f35659g;
                            f fVar3 = this.f35712h;
                            int i14 = i13 + fVar3.f35658f;
                            int i15 = ((f) this.f35713i.f35664l.get(0)).f35659g + this.f35713i.f35658f;
                            fVar3.d(i14);
                            this.f35713i.d(i15);
                            this.f35709e.d(i15 - i14);
                            return;
                        }
                    }
                    if (!this.f35709e.f35662j && this.f35708d == ConstraintWidget.b.MATCH_CONSTRAINT && this.f35705a == 1 && this.f35712h.f35664l.size() > 0 && this.f35713i.f35664l.size() > 0) {
                        int i16 = (((f) this.f35713i.f35664l.get(0)).f35659g + this.f35713i.f35658f) - (((f) this.f35712h.f35664l.get(0)).f35659g + this.f35712h.f35658f);
                        g gVar3 = this.f35709e;
                        int i17 = gVar3.f35674m;
                        if (i16 < i17) {
                            gVar3.d(i16);
                        } else {
                            gVar3.d(i17);
                        }
                    }
                    if (this.f35709e.f35662j && this.f35712h.f35664l.size() > 0 && this.f35713i.f35664l.size() > 0) {
                        f fVar4 = (f) this.f35712h.f35664l.get(0);
                        f fVar5 = (f) this.f35713i.f35664l.get(0);
                        int i18 = fVar4.f35659g + this.f35712h.f35658f;
                        int i19 = fVar5.f35659g + this.f35713i.f35658f;
                        float R = this.f35706b.R();
                        if (fVar4 == fVar5) {
                            i18 = fVar4.f35659g;
                            i19 = fVar5.f35659g;
                            R = 0.5f;
                        }
                        this.f35712h.d((int) (i18 + 0.5f + (((i19 - i18) - this.f35709e.f35659g) * R)));
                        this.f35713i.d(this.f35712h.f35659g + this.f35709e.f35659g);
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
        ConstraintWidget constraintWidget = this.f35706b;
        if (constraintWidget.f2695a) {
            this.f35709e.d(constraintWidget.x());
        }
        if (!this.f35709e.f35662j) {
            this.f35708d = this.f35706b.T();
            if (this.f35706b.Z()) {
                this.f35689l = new l1.a(this);
            }
            ConstraintWidget.b bVar = this.f35708d;
            if (bVar != ConstraintWidget.b.MATCH_CONSTRAINT) {
                if (bVar == ConstraintWidget.b.MATCH_PARENT && (K2 = this.f35706b.K()) != null && K2.T() == ConstraintWidget.b.FIXED) {
                    int x10 = (K2.x() - this.f35706b.P.f()) - this.f35706b.R.f();
                    b(this.f35712h, K2.f2705f.f35712h, this.f35706b.P.f());
                    b(this.f35713i, K2.f2705f.f35713i, -this.f35706b.R.f());
                    this.f35709e.d(x10);
                    return;
                } else if (this.f35708d == ConstraintWidget.b.FIXED) {
                    this.f35709e.d(this.f35706b.x());
                }
            }
        } else if (this.f35708d == ConstraintWidget.b.MATCH_PARENT && (K = this.f35706b.K()) != null && K.T() == ConstraintWidget.b.FIXED) {
            b(this.f35712h, K.f2705f.f35712h, this.f35706b.P.f());
            b(this.f35713i, K.f2705f.f35713i, -this.f35706b.R.f());
            return;
        }
        g gVar = this.f35709e;
        boolean z10 = gVar.f35662j;
        if (z10) {
            ConstraintWidget constraintWidget2 = this.f35706b;
            if (constraintWidget2.f2695a) {
                androidx.constraintlayout.core.widgets.d[] dVarArr = constraintWidget2.W;
                androidx.constraintlayout.core.widgets.d dVar = dVarArr[2];
                androidx.constraintlayout.core.widgets.d dVar2 = dVar.f2797f;
                if (dVar2 != null && dVarArr[3].f2797f != null) {
                    if (constraintWidget2.k0()) {
                        this.f35712h.f35658f = this.f35706b.W[2].f();
                        this.f35713i.f35658f = -this.f35706b.W[3].f();
                    } else {
                        f h10 = h(this.f35706b.W[2]);
                        if (h10 != null) {
                            b(this.f35712h, h10, this.f35706b.W[2].f());
                        }
                        f h11 = h(this.f35706b.W[3]);
                        if (h11 != null) {
                            b(this.f35713i, h11, -this.f35706b.W[3].f());
                        }
                        this.f35712h.f35654b = true;
                        this.f35713i.f35654b = true;
                    }
                    if (this.f35706b.Z()) {
                        b(this.f35688k, this.f35712h, this.f35706b.p());
                        return;
                    }
                    return;
                } else if (dVar2 != null) {
                    f h12 = h(dVar);
                    if (h12 != null) {
                        b(this.f35712h, h12, this.f35706b.W[2].f());
                        b(this.f35713i, this.f35712h, this.f35709e.f35659g);
                        if (this.f35706b.Z()) {
                            b(this.f35688k, this.f35712h, this.f35706b.p());
                            return;
                        }
                        return;
                    }
                    return;
                } else {
                    androidx.constraintlayout.core.widgets.d dVar3 = dVarArr[3];
                    if (dVar3.f2797f != null) {
                        f h13 = h(dVar3);
                        if (h13 != null) {
                            b(this.f35713i, h13, -this.f35706b.W[3].f());
                            b(this.f35712h, this.f35713i, -this.f35709e.f35659g);
                        }
                        if (this.f35706b.Z()) {
                            b(this.f35688k, this.f35712h, this.f35706b.p());
                            return;
                        }
                        return;
                    }
                    androidx.constraintlayout.core.widgets.d dVar4 = dVarArr[4];
                    if (dVar4.f2797f != null) {
                        f h14 = h(dVar4);
                        if (h14 != null) {
                            b(this.f35688k, h14, 0);
                            b(this.f35712h, this.f35688k, -this.f35706b.p());
                            b(this.f35713i, this.f35712h, this.f35709e.f35659g);
                            return;
                        }
                        return;
                    } else if (!(constraintWidget2 instanceof k1.a) && constraintWidget2.K() != null && this.f35706b.o(d.a.CENTER).f2797f == null) {
                        b(this.f35712h, this.f35706b.K().f2705f.f35712h, this.f35706b.Y());
                        b(this.f35713i, this.f35712h, this.f35709e.f35659g);
                        if (this.f35706b.Z()) {
                            b(this.f35688k, this.f35712h, this.f35706b.p());
                            return;
                        }
                        return;
                    } else {
                        return;
                    }
                }
            }
        }
        if (!z10 && this.f35708d == ConstraintWidget.b.MATCH_CONSTRAINT) {
            ConstraintWidget constraintWidget3 = this.f35706b;
            int i10 = constraintWidget3.f2741x;
            if (i10 != 2) {
                if (i10 == 3 && !constraintWidget3.k0()) {
                    ConstraintWidget constraintWidget4 = this.f35706b;
                    if (constraintWidget4.f2739w != 3) {
                        g gVar2 = constraintWidget4.f2703e.f35709e;
                        this.f35709e.f35664l.add(gVar2);
                        gVar2.f35663k.add(this.f35709e);
                        g gVar3 = this.f35709e;
                        gVar3.f35654b = true;
                        gVar3.f35663k.add(this.f35712h);
                        this.f35709e.f35663k.add(this.f35713i);
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
        } else {
            gVar.b(this);
        }
        ConstraintWidget constraintWidget5 = this.f35706b;
        androidx.constraintlayout.core.widgets.d[] dVarArr2 = constraintWidget5.W;
        androidx.constraintlayout.core.widgets.d dVar5 = dVarArr2[2];
        androidx.constraintlayout.core.widgets.d dVar6 = dVar5.f2797f;
        if (dVar6 != null && dVarArr2[3].f2797f != null) {
            if (constraintWidget5.k0()) {
                this.f35712h.f35658f = this.f35706b.W[2].f();
                this.f35713i.f35658f = -this.f35706b.W[3].f();
            } else {
                f h15 = h(this.f35706b.W[2]);
                f h16 = h(this.f35706b.W[3]);
                if (h15 != null) {
                    h15.b(this);
                }
                if (h16 != null) {
                    h16.b(this);
                }
                this.f35714j = p.b.CENTER;
            }
            if (this.f35706b.Z()) {
                c(this.f35688k, this.f35712h, 1, this.f35689l);
            }
        } else if (dVar6 != null) {
            f h17 = h(dVar5);
            if (h17 != null) {
                b(this.f35712h, h17, this.f35706b.W[2].f());
                c(this.f35713i, this.f35712h, 1, this.f35709e);
                if (this.f35706b.Z()) {
                    c(this.f35688k, this.f35712h, 1, this.f35689l);
                }
                ConstraintWidget.b bVar2 = this.f35708d;
                ConstraintWidget.b bVar3 = ConstraintWidget.b.MATCH_CONSTRAINT;
                if (bVar2 == bVar3 && this.f35706b.v() > 0.0f) {
                    l lVar = this.f35706b.f2703e;
                    if (lVar.f35708d == bVar3) {
                        lVar.f35709e.f35663k.add(this.f35709e);
                        this.f35709e.f35664l.add(this.f35706b.f2703e.f35709e);
                        this.f35709e.f35653a = this;
                    }
                }
            }
        } else {
            androidx.constraintlayout.core.widgets.d dVar7 = dVarArr2[3];
            if (dVar7.f2797f != null) {
                f h18 = h(dVar7);
                if (h18 != null) {
                    b(this.f35713i, h18, -this.f35706b.W[3].f());
                    c(this.f35712h, this.f35713i, -1, this.f35709e);
                    if (this.f35706b.Z()) {
                        c(this.f35688k, this.f35712h, 1, this.f35689l);
                    }
                }
            } else {
                androidx.constraintlayout.core.widgets.d dVar8 = dVarArr2[4];
                if (dVar8.f2797f != null) {
                    f h19 = h(dVar8);
                    if (h19 != null) {
                        b(this.f35688k, h19, 0);
                        c(this.f35712h, this.f35688k, -1, this.f35689l);
                        c(this.f35713i, this.f35712h, 1, this.f35709e);
                    }
                } else if (!(constraintWidget5 instanceof k1.a) && constraintWidget5.K() != null) {
                    b(this.f35712h, this.f35706b.K().f2705f.f35712h, this.f35706b.Y());
                    c(this.f35713i, this.f35712h, 1, this.f35709e);
                    if (this.f35706b.Z()) {
                        c(this.f35688k, this.f35712h, 1, this.f35689l);
                    }
                    ConstraintWidget.b bVar4 = this.f35708d;
                    ConstraintWidget.b bVar5 = ConstraintWidget.b.MATCH_CONSTRAINT;
                    if (bVar4 == bVar5 && this.f35706b.v() > 0.0f) {
                        l lVar2 = this.f35706b.f2703e;
                        if (lVar2.f35708d == bVar5) {
                            lVar2.f35709e.f35663k.add(this.f35709e);
                            this.f35709e.f35664l.add(this.f35706b.f2703e.f35709e);
                            this.f35709e.f35653a = this;
                        }
                    }
                }
            }
        }
        if (this.f35709e.f35664l.size() == 0) {
            this.f35709e.f35655c = true;
        }
    }

    @Override // l1.p
    public void e() {
        f fVar = this.f35712h;
        if (fVar.f35662j) {
            this.f35706b.o1(fVar.f35659g);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // l1.p
    public void f() {
        this.f35707c = null;
        this.f35712h.c();
        this.f35713i.c();
        this.f35688k.c();
        this.f35709e.c();
        this.f35711g = false;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // l1.p
    public boolean m() {
        if (this.f35708d != ConstraintWidget.b.MATCH_CONSTRAINT || this.f35706b.f2741x == 0) {
            return true;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void q() {
        this.f35711g = false;
        this.f35712h.c();
        this.f35712h.f35662j = false;
        this.f35713i.c();
        this.f35713i.f35662j = false;
        this.f35688k.c();
        this.f35688k.f35662j = false;
        this.f35709e.f35662j = false;
    }

    public String toString() {
        return "VerticalRun " + this.f35706b.t();
    }
}
