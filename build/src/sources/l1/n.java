package l1;

import androidx.constraintlayout.core.widgets.ConstraintWidget;
import androidx.constraintlayout.core.widgets.d;
import l1.f;
import l1.p;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class n extends p {

    /* renamed from: k  reason: collision with root package name */
    public f f35468k;

    /* renamed from: l  reason: collision with root package name */
    g f35469l;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f35470a;

        static {
            int[] iArr = new int[p.b.values().length];
            f35470a = iArr;
            try {
                iArr[p.b.START.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f35470a[p.b.END.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                f35470a[p.b.CENTER.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
        }
    }

    public n(ConstraintWidget constraintWidget) {
        super(constraintWidget);
        f fVar = new f(this);
        this.f35468k = fVar;
        this.f35469l = null;
        this.f35492h.f35437e = f.a.TOP;
        this.f35493i.f35437e = f.a.BOTTOM;
        fVar.f35437e = f.a.BASELINE;
        this.f35490f = 1;
    }

    @Override // l1.p, l1.d
    public void a(d dVar) {
        g gVar;
        float f10;
        float v10;
        float f11;
        int i10;
        ConstraintWidget constraintWidget;
        int i11 = a.f35470a[this.f35494j.ordinal()];
        if (i11 != 1) {
            if (i11 != 2) {
                if (i11 == 3) {
                    ConstraintWidget constraintWidget2 = this.f35486b;
                    n(dVar, constraintWidget2.P, constraintWidget2.R, 1);
                    return;
                }
            } else {
                o(dVar);
            }
        } else {
            p(dVar);
        }
        g gVar2 = this.f35489e;
        if (gVar2.f35435c && !gVar2.f35442j && this.f35488d == ConstraintWidget.b.MATCH_CONSTRAINT) {
            ConstraintWidget constraintWidget3 = this.f35486b;
            int i12 = constraintWidget3.f2441x;
            if (i12 != 2) {
                if (i12 == 3 && constraintWidget3.f2403e.f35489e.f35442j) {
                    int w10 = constraintWidget3.w();
                    if (w10 != -1) {
                        if (w10 != 0) {
                            if (w10 != 1) {
                                i10 = 0;
                                this.f35489e.d(i10);
                            } else {
                                ConstraintWidget constraintWidget4 = this.f35486b;
                                f10 = constraintWidget4.f2403e.f35489e.f35439g;
                                v10 = constraintWidget4.v();
                            }
                        } else {
                            f11 = constraintWidget.f2403e.f35489e.f35439g * this.f35486b.v();
                            i10 = (int) (f11 + 0.5f);
                            this.f35489e.d(i10);
                        }
                    } else {
                        ConstraintWidget constraintWidget5 = this.f35486b;
                        f10 = constraintWidget5.f2403e.f35489e.f35439g;
                        v10 = constraintWidget5.v();
                    }
                    f11 = f10 / v10;
                    i10 = (int) (f11 + 0.5f);
                    this.f35489e.d(i10);
                }
            } else {
                ConstraintWidget K = constraintWidget3.K();
                if (K != null) {
                    if (K.f2405f.f35489e.f35442j) {
                        this.f35489e.d((int) ((gVar.f35439g * this.f35486b.E) + 0.5f));
                    }
                }
            }
        }
        f fVar = this.f35492h;
        if (fVar.f35435c) {
            f fVar2 = this.f35493i;
            if (fVar2.f35435c) {
                if (!fVar.f35442j || !fVar2.f35442j || !this.f35489e.f35442j) {
                    if (!this.f35489e.f35442j && this.f35488d == ConstraintWidget.b.MATCH_CONSTRAINT) {
                        ConstraintWidget constraintWidget6 = this.f35486b;
                        if (constraintWidget6.f2439w == 0 && !constraintWidget6.k0()) {
                            int i13 = ((f) this.f35492h.f35444l.get(0)).f35439g;
                            f fVar3 = this.f35492h;
                            int i14 = i13 + fVar3.f35438f;
                            int i15 = ((f) this.f35493i.f35444l.get(0)).f35439g + this.f35493i.f35438f;
                            fVar3.d(i14);
                            this.f35493i.d(i15);
                            this.f35489e.d(i15 - i14);
                            return;
                        }
                    }
                    if (!this.f35489e.f35442j && this.f35488d == ConstraintWidget.b.MATCH_CONSTRAINT && this.f35485a == 1 && this.f35492h.f35444l.size() > 0 && this.f35493i.f35444l.size() > 0) {
                        int i16 = (((f) this.f35493i.f35444l.get(0)).f35439g + this.f35493i.f35438f) - (((f) this.f35492h.f35444l.get(0)).f35439g + this.f35492h.f35438f);
                        g gVar3 = this.f35489e;
                        int i17 = gVar3.f35454m;
                        if (i16 < i17) {
                            gVar3.d(i16);
                        } else {
                            gVar3.d(i17);
                        }
                    }
                    if (this.f35489e.f35442j && this.f35492h.f35444l.size() > 0 && this.f35493i.f35444l.size() > 0) {
                        f fVar4 = (f) this.f35492h.f35444l.get(0);
                        f fVar5 = (f) this.f35493i.f35444l.get(0);
                        int i18 = fVar4.f35439g + this.f35492h.f35438f;
                        int i19 = fVar5.f35439g + this.f35493i.f35438f;
                        float R = this.f35486b.R();
                        if (fVar4 == fVar5) {
                            i18 = fVar4.f35439g;
                            i19 = fVar5.f35439g;
                            R = 0.5f;
                        }
                        this.f35492h.d((int) (i18 + 0.5f + (((i19 - i18) - this.f35489e.f35439g) * R)));
                        this.f35493i.d(this.f35492h.f35439g + this.f35489e.f35439g);
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
        ConstraintWidget constraintWidget = this.f35486b;
        if (constraintWidget.f2395a) {
            this.f35489e.d(constraintWidget.x());
        }
        if (!this.f35489e.f35442j) {
            this.f35488d = this.f35486b.T();
            if (this.f35486b.Z()) {
                this.f35469l = new l1.a(this);
            }
            ConstraintWidget.b bVar = this.f35488d;
            if (bVar != ConstraintWidget.b.MATCH_CONSTRAINT) {
                if (bVar == ConstraintWidget.b.MATCH_PARENT && (K2 = this.f35486b.K()) != null && K2.T() == ConstraintWidget.b.FIXED) {
                    int x10 = (K2.x() - this.f35486b.P.f()) - this.f35486b.R.f();
                    b(this.f35492h, K2.f2405f.f35492h, this.f35486b.P.f());
                    b(this.f35493i, K2.f2405f.f35493i, -this.f35486b.R.f());
                    this.f35489e.d(x10);
                    return;
                } else if (this.f35488d == ConstraintWidget.b.FIXED) {
                    this.f35489e.d(this.f35486b.x());
                }
            }
        } else if (this.f35488d == ConstraintWidget.b.MATCH_PARENT && (K = this.f35486b.K()) != null && K.T() == ConstraintWidget.b.FIXED) {
            b(this.f35492h, K.f2405f.f35492h, this.f35486b.P.f());
            b(this.f35493i, K.f2405f.f35493i, -this.f35486b.R.f());
            return;
        }
        g gVar = this.f35489e;
        boolean z10 = gVar.f35442j;
        if (z10) {
            ConstraintWidget constraintWidget2 = this.f35486b;
            if (constraintWidget2.f2395a) {
                androidx.constraintlayout.core.widgets.d[] dVarArr = constraintWidget2.W;
                androidx.constraintlayout.core.widgets.d dVar = dVarArr[2];
                androidx.constraintlayout.core.widgets.d dVar2 = dVar.f2497f;
                if (dVar2 != null && dVarArr[3].f2497f != null) {
                    if (constraintWidget2.k0()) {
                        this.f35492h.f35438f = this.f35486b.W[2].f();
                        this.f35493i.f35438f = -this.f35486b.W[3].f();
                    } else {
                        f h10 = h(this.f35486b.W[2]);
                        if (h10 != null) {
                            b(this.f35492h, h10, this.f35486b.W[2].f());
                        }
                        f h11 = h(this.f35486b.W[3]);
                        if (h11 != null) {
                            b(this.f35493i, h11, -this.f35486b.W[3].f());
                        }
                        this.f35492h.f35434b = true;
                        this.f35493i.f35434b = true;
                    }
                    if (this.f35486b.Z()) {
                        b(this.f35468k, this.f35492h, this.f35486b.p());
                        return;
                    }
                    return;
                } else if (dVar2 != null) {
                    f h12 = h(dVar);
                    if (h12 != null) {
                        b(this.f35492h, h12, this.f35486b.W[2].f());
                        b(this.f35493i, this.f35492h, this.f35489e.f35439g);
                        if (this.f35486b.Z()) {
                            b(this.f35468k, this.f35492h, this.f35486b.p());
                            return;
                        }
                        return;
                    }
                    return;
                } else {
                    androidx.constraintlayout.core.widgets.d dVar3 = dVarArr[3];
                    if (dVar3.f2497f != null) {
                        f h13 = h(dVar3);
                        if (h13 != null) {
                            b(this.f35493i, h13, -this.f35486b.W[3].f());
                            b(this.f35492h, this.f35493i, -this.f35489e.f35439g);
                        }
                        if (this.f35486b.Z()) {
                            b(this.f35468k, this.f35492h, this.f35486b.p());
                            return;
                        }
                        return;
                    }
                    androidx.constraintlayout.core.widgets.d dVar4 = dVarArr[4];
                    if (dVar4.f2497f != null) {
                        f h14 = h(dVar4);
                        if (h14 != null) {
                            b(this.f35468k, h14, 0);
                            b(this.f35492h, this.f35468k, -this.f35486b.p());
                            b(this.f35493i, this.f35492h, this.f35489e.f35439g);
                            return;
                        }
                        return;
                    } else if (!(constraintWidget2 instanceof k1.a) && constraintWidget2.K() != null && this.f35486b.o(d.a.CENTER).f2497f == null) {
                        b(this.f35492h, this.f35486b.K().f2405f.f35492h, this.f35486b.Y());
                        b(this.f35493i, this.f35492h, this.f35489e.f35439g);
                        if (this.f35486b.Z()) {
                            b(this.f35468k, this.f35492h, this.f35486b.p());
                            return;
                        }
                        return;
                    } else {
                        return;
                    }
                }
            }
        }
        if (!z10 && this.f35488d == ConstraintWidget.b.MATCH_CONSTRAINT) {
            ConstraintWidget constraintWidget3 = this.f35486b;
            int i10 = constraintWidget3.f2441x;
            if (i10 != 2) {
                if (i10 == 3 && !constraintWidget3.k0()) {
                    ConstraintWidget constraintWidget4 = this.f35486b;
                    if (constraintWidget4.f2439w != 3) {
                        g gVar2 = constraintWidget4.f2403e.f35489e;
                        this.f35489e.f35444l.add(gVar2);
                        gVar2.f35443k.add(this.f35489e);
                        g gVar3 = this.f35489e;
                        gVar3.f35434b = true;
                        gVar3.f35443k.add(this.f35492h);
                        this.f35489e.f35443k.add(this.f35493i);
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
        } else {
            gVar.b(this);
        }
        ConstraintWidget constraintWidget5 = this.f35486b;
        androidx.constraintlayout.core.widgets.d[] dVarArr2 = constraintWidget5.W;
        androidx.constraintlayout.core.widgets.d dVar5 = dVarArr2[2];
        androidx.constraintlayout.core.widgets.d dVar6 = dVar5.f2497f;
        if (dVar6 != null && dVarArr2[3].f2497f != null) {
            if (constraintWidget5.k0()) {
                this.f35492h.f35438f = this.f35486b.W[2].f();
                this.f35493i.f35438f = -this.f35486b.W[3].f();
            } else {
                f h15 = h(this.f35486b.W[2]);
                f h16 = h(this.f35486b.W[3]);
                if (h15 != null) {
                    h15.b(this);
                }
                if (h16 != null) {
                    h16.b(this);
                }
                this.f35494j = p.b.CENTER;
            }
            if (this.f35486b.Z()) {
                c(this.f35468k, this.f35492h, 1, this.f35469l);
            }
        } else if (dVar6 != null) {
            f h17 = h(dVar5);
            if (h17 != null) {
                b(this.f35492h, h17, this.f35486b.W[2].f());
                c(this.f35493i, this.f35492h, 1, this.f35489e);
                if (this.f35486b.Z()) {
                    c(this.f35468k, this.f35492h, 1, this.f35469l);
                }
                ConstraintWidget.b bVar2 = this.f35488d;
                ConstraintWidget.b bVar3 = ConstraintWidget.b.MATCH_CONSTRAINT;
                if (bVar2 == bVar3 && this.f35486b.v() > 0.0f) {
                    l lVar = this.f35486b.f2403e;
                    if (lVar.f35488d == bVar3) {
                        lVar.f35489e.f35443k.add(this.f35489e);
                        this.f35489e.f35444l.add(this.f35486b.f2403e.f35489e);
                        this.f35489e.f35433a = this;
                    }
                }
            }
        } else {
            androidx.constraintlayout.core.widgets.d dVar7 = dVarArr2[3];
            if (dVar7.f2497f != null) {
                f h18 = h(dVar7);
                if (h18 != null) {
                    b(this.f35493i, h18, -this.f35486b.W[3].f());
                    c(this.f35492h, this.f35493i, -1, this.f35489e);
                    if (this.f35486b.Z()) {
                        c(this.f35468k, this.f35492h, 1, this.f35469l);
                    }
                }
            } else {
                androidx.constraintlayout.core.widgets.d dVar8 = dVarArr2[4];
                if (dVar8.f2497f != null) {
                    f h19 = h(dVar8);
                    if (h19 != null) {
                        b(this.f35468k, h19, 0);
                        c(this.f35492h, this.f35468k, -1, this.f35469l);
                        c(this.f35493i, this.f35492h, 1, this.f35489e);
                    }
                } else if (!(constraintWidget5 instanceof k1.a) && constraintWidget5.K() != null) {
                    b(this.f35492h, this.f35486b.K().f2405f.f35492h, this.f35486b.Y());
                    c(this.f35493i, this.f35492h, 1, this.f35489e);
                    if (this.f35486b.Z()) {
                        c(this.f35468k, this.f35492h, 1, this.f35469l);
                    }
                    ConstraintWidget.b bVar4 = this.f35488d;
                    ConstraintWidget.b bVar5 = ConstraintWidget.b.MATCH_CONSTRAINT;
                    if (bVar4 == bVar5 && this.f35486b.v() > 0.0f) {
                        l lVar2 = this.f35486b.f2403e;
                        if (lVar2.f35488d == bVar5) {
                            lVar2.f35489e.f35443k.add(this.f35489e);
                            this.f35489e.f35444l.add(this.f35486b.f2403e.f35489e);
                            this.f35489e.f35433a = this;
                        }
                    }
                }
            }
        }
        if (this.f35489e.f35444l.size() == 0) {
            this.f35489e.f35435c = true;
        }
    }

    @Override // l1.p
    public void e() {
        f fVar = this.f35492h;
        if (fVar.f35442j) {
            this.f35486b.o1(fVar.f35439g);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // l1.p
    public void f() {
        this.f35487c = null;
        this.f35492h.c();
        this.f35493i.c();
        this.f35468k.c();
        this.f35489e.c();
        this.f35491g = false;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // l1.p
    public boolean m() {
        if (this.f35488d != ConstraintWidget.b.MATCH_CONSTRAINT || this.f35486b.f2441x == 0) {
            return true;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void q() {
        this.f35491g = false;
        this.f35492h.c();
        this.f35492h.f35442j = false;
        this.f35493i.c();
        this.f35493i.f35442j = false;
        this.f35468k.c();
        this.f35468k.f35442j = false;
        this.f35489e.f35442j = false;
    }

    public String toString() {
        return "VerticalRun " + this.f35486b.t();
    }
}
