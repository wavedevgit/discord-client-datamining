package l1;

import androidx.constraintlayout.core.widgets.ConstraintWidget;
import androidx.constraintlayout.core.widgets.d;
import l1.f;
import l1.p;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class n extends p {

    /* renamed from: k  reason: collision with root package name */
    public f f36368k;

    /* renamed from: l  reason: collision with root package name */
    g f36369l;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f36370a;

        static {
            int[] iArr = new int[p.b.values().length];
            f36370a = iArr;
            try {
                iArr[p.b.START.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f36370a[p.b.END.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                f36370a[p.b.CENTER.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
        }
    }

    public n(ConstraintWidget constraintWidget) {
        super(constraintWidget);
        f fVar = new f(this);
        this.f36368k = fVar;
        this.f36369l = null;
        this.f36392h.f36337e = f.a.TOP;
        this.f36393i.f36337e = f.a.BOTTOM;
        fVar.f36337e = f.a.BASELINE;
        this.f36390f = 1;
    }

    @Override // l1.p, l1.d
    public void a(d dVar) {
        g gVar;
        float f10;
        float v10;
        float f11;
        int i10;
        ConstraintWidget constraintWidget;
        int i11 = a.f36370a[this.f36394j.ordinal()];
        if (i11 != 1) {
            if (i11 != 2) {
                if (i11 == 3) {
                    ConstraintWidget constraintWidget2 = this.f36386b;
                    n(dVar, constraintWidget2.P, constraintWidget2.R, 1);
                    return;
                }
            } else {
                o(dVar);
            }
        } else {
            p(dVar);
        }
        g gVar2 = this.f36389e;
        if (gVar2.f36335c && !gVar2.f36342j && this.f36388d == ConstraintWidget.b.MATCH_CONSTRAINT) {
            ConstraintWidget constraintWidget3 = this.f36386b;
            int i12 = constraintWidget3.f2300x;
            if (i12 != 2) {
                if (i12 == 3 && constraintWidget3.f2262e.f36389e.f36342j) {
                    int w10 = constraintWidget3.w();
                    if (w10 != -1) {
                        if (w10 != 0) {
                            if (w10 != 1) {
                                i10 = 0;
                                this.f36389e.d(i10);
                            } else {
                                ConstraintWidget constraintWidget4 = this.f36386b;
                                f10 = constraintWidget4.f2262e.f36389e.f36339g;
                                v10 = constraintWidget4.v();
                            }
                        } else {
                            f11 = constraintWidget.f2262e.f36389e.f36339g * this.f36386b.v();
                            i10 = (int) (f11 + 0.5f);
                            this.f36389e.d(i10);
                        }
                    } else {
                        ConstraintWidget constraintWidget5 = this.f36386b;
                        f10 = constraintWidget5.f2262e.f36389e.f36339g;
                        v10 = constraintWidget5.v();
                    }
                    f11 = f10 / v10;
                    i10 = (int) (f11 + 0.5f);
                    this.f36389e.d(i10);
                }
            } else {
                ConstraintWidget K = constraintWidget3.K();
                if (K != null) {
                    if (K.f2264f.f36389e.f36342j) {
                        this.f36389e.d((int) ((gVar.f36339g * this.f36386b.E) + 0.5f));
                    }
                }
            }
        }
        f fVar = this.f36392h;
        if (fVar.f36335c) {
            f fVar2 = this.f36393i;
            if (fVar2.f36335c) {
                if (!fVar.f36342j || !fVar2.f36342j || !this.f36389e.f36342j) {
                    if (!this.f36389e.f36342j && this.f36388d == ConstraintWidget.b.MATCH_CONSTRAINT) {
                        ConstraintWidget constraintWidget6 = this.f36386b;
                        if (constraintWidget6.f2298w == 0 && !constraintWidget6.k0()) {
                            int i13 = ((f) this.f36392h.f36344l.get(0)).f36339g;
                            f fVar3 = this.f36392h;
                            int i14 = i13 + fVar3.f36338f;
                            int i15 = ((f) this.f36393i.f36344l.get(0)).f36339g + this.f36393i.f36338f;
                            fVar3.d(i14);
                            this.f36393i.d(i15);
                            this.f36389e.d(i15 - i14);
                            return;
                        }
                    }
                    if (!this.f36389e.f36342j && this.f36388d == ConstraintWidget.b.MATCH_CONSTRAINT && this.f36385a == 1 && this.f36392h.f36344l.size() > 0 && this.f36393i.f36344l.size() > 0) {
                        int i16 = (((f) this.f36393i.f36344l.get(0)).f36339g + this.f36393i.f36338f) - (((f) this.f36392h.f36344l.get(0)).f36339g + this.f36392h.f36338f);
                        g gVar3 = this.f36389e;
                        int i17 = gVar3.f36354m;
                        if (i16 < i17) {
                            gVar3.d(i16);
                        } else {
                            gVar3.d(i17);
                        }
                    }
                    if (this.f36389e.f36342j && this.f36392h.f36344l.size() > 0 && this.f36393i.f36344l.size() > 0) {
                        f fVar4 = (f) this.f36392h.f36344l.get(0);
                        f fVar5 = (f) this.f36393i.f36344l.get(0);
                        int i18 = fVar4.f36339g + this.f36392h.f36338f;
                        int i19 = fVar5.f36339g + this.f36393i.f36338f;
                        float R = this.f36386b.R();
                        if (fVar4 == fVar5) {
                            i18 = fVar4.f36339g;
                            i19 = fVar5.f36339g;
                            R = 0.5f;
                        }
                        this.f36392h.d((int) (i18 + 0.5f + (((i19 - i18) - this.f36389e.f36339g) * R)));
                        this.f36393i.d(this.f36392h.f36339g + this.f36389e.f36339g);
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
        ConstraintWidget constraintWidget = this.f36386b;
        if (constraintWidget.f2254a) {
            this.f36389e.d(constraintWidget.x());
        }
        if (!this.f36389e.f36342j) {
            this.f36388d = this.f36386b.T();
            if (this.f36386b.Z()) {
                this.f36369l = new l1.a(this);
            }
            ConstraintWidget.b bVar = this.f36388d;
            if (bVar != ConstraintWidget.b.MATCH_CONSTRAINT) {
                if (bVar == ConstraintWidget.b.MATCH_PARENT && (K2 = this.f36386b.K()) != null && K2.T() == ConstraintWidget.b.FIXED) {
                    int x10 = (K2.x() - this.f36386b.P.f()) - this.f36386b.R.f();
                    b(this.f36392h, K2.f2264f.f36392h, this.f36386b.P.f());
                    b(this.f36393i, K2.f2264f.f36393i, -this.f36386b.R.f());
                    this.f36389e.d(x10);
                    return;
                } else if (this.f36388d == ConstraintWidget.b.FIXED) {
                    this.f36389e.d(this.f36386b.x());
                }
            }
        } else if (this.f36388d == ConstraintWidget.b.MATCH_PARENT && (K = this.f36386b.K()) != null && K.T() == ConstraintWidget.b.FIXED) {
            b(this.f36392h, K.f2264f.f36392h, this.f36386b.P.f());
            b(this.f36393i, K.f2264f.f36393i, -this.f36386b.R.f());
            return;
        }
        g gVar = this.f36389e;
        boolean z10 = gVar.f36342j;
        if (z10) {
            ConstraintWidget constraintWidget2 = this.f36386b;
            if (constraintWidget2.f2254a) {
                androidx.constraintlayout.core.widgets.d[] dVarArr = constraintWidget2.W;
                androidx.constraintlayout.core.widgets.d dVar = dVarArr[2];
                androidx.constraintlayout.core.widgets.d dVar2 = dVar.f2356f;
                if (dVar2 != null && dVarArr[3].f2356f != null) {
                    if (constraintWidget2.k0()) {
                        this.f36392h.f36338f = this.f36386b.W[2].f();
                        this.f36393i.f36338f = -this.f36386b.W[3].f();
                    } else {
                        f h10 = h(this.f36386b.W[2]);
                        if (h10 != null) {
                            b(this.f36392h, h10, this.f36386b.W[2].f());
                        }
                        f h11 = h(this.f36386b.W[3]);
                        if (h11 != null) {
                            b(this.f36393i, h11, -this.f36386b.W[3].f());
                        }
                        this.f36392h.f36334b = true;
                        this.f36393i.f36334b = true;
                    }
                    if (this.f36386b.Z()) {
                        b(this.f36368k, this.f36392h, this.f36386b.p());
                        return;
                    }
                    return;
                } else if (dVar2 != null) {
                    f h12 = h(dVar);
                    if (h12 != null) {
                        b(this.f36392h, h12, this.f36386b.W[2].f());
                        b(this.f36393i, this.f36392h, this.f36389e.f36339g);
                        if (this.f36386b.Z()) {
                            b(this.f36368k, this.f36392h, this.f36386b.p());
                            return;
                        }
                        return;
                    }
                    return;
                } else {
                    androidx.constraintlayout.core.widgets.d dVar3 = dVarArr[3];
                    if (dVar3.f2356f != null) {
                        f h13 = h(dVar3);
                        if (h13 != null) {
                            b(this.f36393i, h13, -this.f36386b.W[3].f());
                            b(this.f36392h, this.f36393i, -this.f36389e.f36339g);
                        }
                        if (this.f36386b.Z()) {
                            b(this.f36368k, this.f36392h, this.f36386b.p());
                            return;
                        }
                        return;
                    }
                    androidx.constraintlayout.core.widgets.d dVar4 = dVarArr[4];
                    if (dVar4.f2356f != null) {
                        f h14 = h(dVar4);
                        if (h14 != null) {
                            b(this.f36368k, h14, 0);
                            b(this.f36392h, this.f36368k, -this.f36386b.p());
                            b(this.f36393i, this.f36392h, this.f36389e.f36339g);
                            return;
                        }
                        return;
                    } else if (!(constraintWidget2 instanceof k1.a) && constraintWidget2.K() != null && this.f36386b.o(d.a.CENTER).f2356f == null) {
                        b(this.f36392h, this.f36386b.K().f2264f.f36392h, this.f36386b.Y());
                        b(this.f36393i, this.f36392h, this.f36389e.f36339g);
                        if (this.f36386b.Z()) {
                            b(this.f36368k, this.f36392h, this.f36386b.p());
                            return;
                        }
                        return;
                    } else {
                        return;
                    }
                }
            }
        }
        if (!z10 && this.f36388d == ConstraintWidget.b.MATCH_CONSTRAINT) {
            ConstraintWidget constraintWidget3 = this.f36386b;
            int i10 = constraintWidget3.f2300x;
            if (i10 != 2) {
                if (i10 == 3 && !constraintWidget3.k0()) {
                    ConstraintWidget constraintWidget4 = this.f36386b;
                    if (constraintWidget4.f2298w != 3) {
                        g gVar2 = constraintWidget4.f2262e.f36389e;
                        this.f36389e.f36344l.add(gVar2);
                        gVar2.f36343k.add(this.f36389e);
                        g gVar3 = this.f36389e;
                        gVar3.f36334b = true;
                        gVar3.f36343k.add(this.f36392h);
                        this.f36389e.f36343k.add(this.f36393i);
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
        } else {
            gVar.b(this);
        }
        ConstraintWidget constraintWidget5 = this.f36386b;
        androidx.constraintlayout.core.widgets.d[] dVarArr2 = constraintWidget5.W;
        androidx.constraintlayout.core.widgets.d dVar5 = dVarArr2[2];
        androidx.constraintlayout.core.widgets.d dVar6 = dVar5.f2356f;
        if (dVar6 != null && dVarArr2[3].f2356f != null) {
            if (constraintWidget5.k0()) {
                this.f36392h.f36338f = this.f36386b.W[2].f();
                this.f36393i.f36338f = -this.f36386b.W[3].f();
            } else {
                f h15 = h(this.f36386b.W[2]);
                f h16 = h(this.f36386b.W[3]);
                if (h15 != null) {
                    h15.b(this);
                }
                if (h16 != null) {
                    h16.b(this);
                }
                this.f36394j = p.b.CENTER;
            }
            if (this.f36386b.Z()) {
                c(this.f36368k, this.f36392h, 1, this.f36369l);
            }
        } else if (dVar6 != null) {
            f h17 = h(dVar5);
            if (h17 != null) {
                b(this.f36392h, h17, this.f36386b.W[2].f());
                c(this.f36393i, this.f36392h, 1, this.f36389e);
                if (this.f36386b.Z()) {
                    c(this.f36368k, this.f36392h, 1, this.f36369l);
                }
                ConstraintWidget.b bVar2 = this.f36388d;
                ConstraintWidget.b bVar3 = ConstraintWidget.b.MATCH_CONSTRAINT;
                if (bVar2 == bVar3 && this.f36386b.v() > 0.0f) {
                    l lVar = this.f36386b.f2262e;
                    if (lVar.f36388d == bVar3) {
                        lVar.f36389e.f36343k.add(this.f36389e);
                        this.f36389e.f36344l.add(this.f36386b.f2262e.f36389e);
                        this.f36389e.f36333a = this;
                    }
                }
            }
        } else {
            androidx.constraintlayout.core.widgets.d dVar7 = dVarArr2[3];
            if (dVar7.f2356f != null) {
                f h18 = h(dVar7);
                if (h18 != null) {
                    b(this.f36393i, h18, -this.f36386b.W[3].f());
                    c(this.f36392h, this.f36393i, -1, this.f36389e);
                    if (this.f36386b.Z()) {
                        c(this.f36368k, this.f36392h, 1, this.f36369l);
                    }
                }
            } else {
                androidx.constraintlayout.core.widgets.d dVar8 = dVarArr2[4];
                if (dVar8.f2356f != null) {
                    f h19 = h(dVar8);
                    if (h19 != null) {
                        b(this.f36368k, h19, 0);
                        c(this.f36392h, this.f36368k, -1, this.f36369l);
                        c(this.f36393i, this.f36392h, 1, this.f36389e);
                    }
                } else if (!(constraintWidget5 instanceof k1.a) && constraintWidget5.K() != null) {
                    b(this.f36392h, this.f36386b.K().f2264f.f36392h, this.f36386b.Y());
                    c(this.f36393i, this.f36392h, 1, this.f36389e);
                    if (this.f36386b.Z()) {
                        c(this.f36368k, this.f36392h, 1, this.f36369l);
                    }
                    ConstraintWidget.b bVar4 = this.f36388d;
                    ConstraintWidget.b bVar5 = ConstraintWidget.b.MATCH_CONSTRAINT;
                    if (bVar4 == bVar5 && this.f36386b.v() > 0.0f) {
                        l lVar2 = this.f36386b.f2262e;
                        if (lVar2.f36388d == bVar5) {
                            lVar2.f36389e.f36343k.add(this.f36389e);
                            this.f36389e.f36344l.add(this.f36386b.f2262e.f36389e);
                            this.f36389e.f36333a = this;
                        }
                    }
                }
            }
        }
        if (this.f36389e.f36344l.size() == 0) {
            this.f36389e.f36335c = true;
        }
    }

    @Override // l1.p
    public void e() {
        f fVar = this.f36392h;
        if (fVar.f36342j) {
            this.f36386b.o1(fVar.f36339g);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // l1.p
    public void f() {
        this.f36387c = null;
        this.f36392h.c();
        this.f36393i.c();
        this.f36368k.c();
        this.f36389e.c();
        this.f36391g = false;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // l1.p
    public boolean m() {
        if (this.f36388d != ConstraintWidget.b.MATCH_CONSTRAINT || this.f36386b.f2300x == 0) {
            return true;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void q() {
        this.f36391g = false;
        this.f36392h.c();
        this.f36392h.f36342j = false;
        this.f36393i.c();
        this.f36393i.f36342j = false;
        this.f36368k.c();
        this.f36368k.f36342j = false;
        this.f36389e.f36342j = false;
    }

    public String toString() {
        return "VerticalRun " + this.f36386b.t();
    }
}
