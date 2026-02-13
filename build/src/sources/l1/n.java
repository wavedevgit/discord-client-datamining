package l1;

import androidx.constraintlayout.core.widgets.ConstraintWidget;
import androidx.constraintlayout.core.widgets.d;
import l1.f;
import l1.p;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class n extends p {

    /* renamed from: k  reason: collision with root package name */
    public f f36037k;

    /* renamed from: l  reason: collision with root package name */
    g f36038l;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f36039a;

        static {
            int[] iArr = new int[p.b.values().length];
            f36039a = iArr;
            try {
                iArr[p.b.START.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f36039a[p.b.END.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                f36039a[p.b.CENTER.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
        }
    }

    public n(ConstraintWidget constraintWidget) {
        super(constraintWidget);
        f fVar = new f(this);
        this.f36037k = fVar;
        this.f36038l = null;
        this.f36061h.f36006e = f.a.TOP;
        this.f36062i.f36006e = f.a.BOTTOM;
        fVar.f36006e = f.a.BASELINE;
        this.f36059f = 1;
    }

    @Override // l1.p, l1.d
    public void a(d dVar) {
        g gVar;
        float f10;
        float v10;
        float f11;
        int i10;
        ConstraintWidget constraintWidget;
        int i11 = a.f36039a[this.f36063j.ordinal()];
        if (i11 != 1) {
            if (i11 != 2) {
                if (i11 == 3) {
                    ConstraintWidget constraintWidget2 = this.f36055b;
                    n(dVar, constraintWidget2.P, constraintWidget2.R, 1);
                    return;
                }
            } else {
                o(dVar);
            }
        } else {
            p(dVar);
        }
        g gVar2 = this.f36058e;
        if (gVar2.f36004c && !gVar2.f36011j && this.f36057d == ConstraintWidget.b.MATCH_CONSTRAINT) {
            ConstraintWidget constraintWidget3 = this.f36055b;
            int i12 = constraintWidget3.f2441x;
            if (i12 != 2) {
                if (i12 == 3 && constraintWidget3.f2403e.f36058e.f36011j) {
                    int w10 = constraintWidget3.w();
                    if (w10 != -1) {
                        if (w10 != 0) {
                            if (w10 != 1) {
                                i10 = 0;
                                this.f36058e.d(i10);
                            } else {
                                ConstraintWidget constraintWidget4 = this.f36055b;
                                f10 = constraintWidget4.f2403e.f36058e.f36008g;
                                v10 = constraintWidget4.v();
                            }
                        } else {
                            f11 = constraintWidget.f2403e.f36058e.f36008g * this.f36055b.v();
                            i10 = (int) (f11 + 0.5f);
                            this.f36058e.d(i10);
                        }
                    } else {
                        ConstraintWidget constraintWidget5 = this.f36055b;
                        f10 = constraintWidget5.f2403e.f36058e.f36008g;
                        v10 = constraintWidget5.v();
                    }
                    f11 = f10 / v10;
                    i10 = (int) (f11 + 0.5f);
                    this.f36058e.d(i10);
                }
            } else {
                ConstraintWidget K = constraintWidget3.K();
                if (K != null) {
                    if (K.f2405f.f36058e.f36011j) {
                        this.f36058e.d((int) ((gVar.f36008g * this.f36055b.E) + 0.5f));
                    }
                }
            }
        }
        f fVar = this.f36061h;
        if (fVar.f36004c) {
            f fVar2 = this.f36062i;
            if (fVar2.f36004c) {
                if (!fVar.f36011j || !fVar2.f36011j || !this.f36058e.f36011j) {
                    if (!this.f36058e.f36011j && this.f36057d == ConstraintWidget.b.MATCH_CONSTRAINT) {
                        ConstraintWidget constraintWidget6 = this.f36055b;
                        if (constraintWidget6.f2439w == 0 && !constraintWidget6.k0()) {
                            int i13 = ((f) this.f36061h.f36013l.get(0)).f36008g;
                            f fVar3 = this.f36061h;
                            int i14 = i13 + fVar3.f36007f;
                            int i15 = ((f) this.f36062i.f36013l.get(0)).f36008g + this.f36062i.f36007f;
                            fVar3.d(i14);
                            this.f36062i.d(i15);
                            this.f36058e.d(i15 - i14);
                            return;
                        }
                    }
                    if (!this.f36058e.f36011j && this.f36057d == ConstraintWidget.b.MATCH_CONSTRAINT && this.f36054a == 1 && this.f36061h.f36013l.size() > 0 && this.f36062i.f36013l.size() > 0) {
                        int i16 = (((f) this.f36062i.f36013l.get(0)).f36008g + this.f36062i.f36007f) - (((f) this.f36061h.f36013l.get(0)).f36008g + this.f36061h.f36007f);
                        g gVar3 = this.f36058e;
                        int i17 = gVar3.f36023m;
                        if (i16 < i17) {
                            gVar3.d(i16);
                        } else {
                            gVar3.d(i17);
                        }
                    }
                    if (this.f36058e.f36011j && this.f36061h.f36013l.size() > 0 && this.f36062i.f36013l.size() > 0) {
                        f fVar4 = (f) this.f36061h.f36013l.get(0);
                        f fVar5 = (f) this.f36062i.f36013l.get(0);
                        int i18 = fVar4.f36008g + this.f36061h.f36007f;
                        int i19 = fVar5.f36008g + this.f36062i.f36007f;
                        float R = this.f36055b.R();
                        if (fVar4 == fVar5) {
                            i18 = fVar4.f36008g;
                            i19 = fVar5.f36008g;
                            R = 0.5f;
                        }
                        this.f36061h.d((int) (i18 + 0.5f + (((i19 - i18) - this.f36058e.f36008g) * R)));
                        this.f36062i.d(this.f36061h.f36008g + this.f36058e.f36008g);
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
        ConstraintWidget constraintWidget = this.f36055b;
        if (constraintWidget.f2395a) {
            this.f36058e.d(constraintWidget.x());
        }
        if (!this.f36058e.f36011j) {
            this.f36057d = this.f36055b.T();
            if (this.f36055b.Z()) {
                this.f36038l = new l1.a(this);
            }
            ConstraintWidget.b bVar = this.f36057d;
            if (bVar != ConstraintWidget.b.MATCH_CONSTRAINT) {
                if (bVar == ConstraintWidget.b.MATCH_PARENT && (K2 = this.f36055b.K()) != null && K2.T() == ConstraintWidget.b.FIXED) {
                    int x10 = (K2.x() - this.f36055b.P.f()) - this.f36055b.R.f();
                    b(this.f36061h, K2.f2405f.f36061h, this.f36055b.P.f());
                    b(this.f36062i, K2.f2405f.f36062i, -this.f36055b.R.f());
                    this.f36058e.d(x10);
                    return;
                } else if (this.f36057d == ConstraintWidget.b.FIXED) {
                    this.f36058e.d(this.f36055b.x());
                }
            }
        } else if (this.f36057d == ConstraintWidget.b.MATCH_PARENT && (K = this.f36055b.K()) != null && K.T() == ConstraintWidget.b.FIXED) {
            b(this.f36061h, K.f2405f.f36061h, this.f36055b.P.f());
            b(this.f36062i, K.f2405f.f36062i, -this.f36055b.R.f());
            return;
        }
        g gVar = this.f36058e;
        boolean z10 = gVar.f36011j;
        if (z10) {
            ConstraintWidget constraintWidget2 = this.f36055b;
            if (constraintWidget2.f2395a) {
                androidx.constraintlayout.core.widgets.d[] dVarArr = constraintWidget2.W;
                androidx.constraintlayout.core.widgets.d dVar = dVarArr[2];
                androidx.constraintlayout.core.widgets.d dVar2 = dVar.f2497f;
                if (dVar2 != null && dVarArr[3].f2497f != null) {
                    if (constraintWidget2.k0()) {
                        this.f36061h.f36007f = this.f36055b.W[2].f();
                        this.f36062i.f36007f = -this.f36055b.W[3].f();
                    } else {
                        f h10 = h(this.f36055b.W[2]);
                        if (h10 != null) {
                            b(this.f36061h, h10, this.f36055b.W[2].f());
                        }
                        f h11 = h(this.f36055b.W[3]);
                        if (h11 != null) {
                            b(this.f36062i, h11, -this.f36055b.W[3].f());
                        }
                        this.f36061h.f36003b = true;
                        this.f36062i.f36003b = true;
                    }
                    if (this.f36055b.Z()) {
                        b(this.f36037k, this.f36061h, this.f36055b.p());
                        return;
                    }
                    return;
                } else if (dVar2 != null) {
                    f h12 = h(dVar);
                    if (h12 != null) {
                        b(this.f36061h, h12, this.f36055b.W[2].f());
                        b(this.f36062i, this.f36061h, this.f36058e.f36008g);
                        if (this.f36055b.Z()) {
                            b(this.f36037k, this.f36061h, this.f36055b.p());
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
                            b(this.f36062i, h13, -this.f36055b.W[3].f());
                            b(this.f36061h, this.f36062i, -this.f36058e.f36008g);
                        }
                        if (this.f36055b.Z()) {
                            b(this.f36037k, this.f36061h, this.f36055b.p());
                            return;
                        }
                        return;
                    }
                    androidx.constraintlayout.core.widgets.d dVar4 = dVarArr[4];
                    if (dVar4.f2497f != null) {
                        f h14 = h(dVar4);
                        if (h14 != null) {
                            b(this.f36037k, h14, 0);
                            b(this.f36061h, this.f36037k, -this.f36055b.p());
                            b(this.f36062i, this.f36061h, this.f36058e.f36008g);
                            return;
                        }
                        return;
                    } else if (!(constraintWidget2 instanceof k1.a) && constraintWidget2.K() != null && this.f36055b.o(d.a.CENTER).f2497f == null) {
                        b(this.f36061h, this.f36055b.K().f2405f.f36061h, this.f36055b.Y());
                        b(this.f36062i, this.f36061h, this.f36058e.f36008g);
                        if (this.f36055b.Z()) {
                            b(this.f36037k, this.f36061h, this.f36055b.p());
                            return;
                        }
                        return;
                    } else {
                        return;
                    }
                }
            }
        }
        if (!z10 && this.f36057d == ConstraintWidget.b.MATCH_CONSTRAINT) {
            ConstraintWidget constraintWidget3 = this.f36055b;
            int i10 = constraintWidget3.f2441x;
            if (i10 != 2) {
                if (i10 == 3 && !constraintWidget3.k0()) {
                    ConstraintWidget constraintWidget4 = this.f36055b;
                    if (constraintWidget4.f2439w != 3) {
                        g gVar2 = constraintWidget4.f2403e.f36058e;
                        this.f36058e.f36013l.add(gVar2);
                        gVar2.f36012k.add(this.f36058e);
                        g gVar3 = this.f36058e;
                        gVar3.f36003b = true;
                        gVar3.f36012k.add(this.f36061h);
                        this.f36058e.f36012k.add(this.f36062i);
                    }
                }
            } else {
                ConstraintWidget K3 = constraintWidget3.K();
                if (K3 != null) {
                    g gVar4 = K3.f2405f.f36058e;
                    this.f36058e.f36013l.add(gVar4);
                    gVar4.f36012k.add(this.f36058e);
                    g gVar5 = this.f36058e;
                    gVar5.f36003b = true;
                    gVar5.f36012k.add(this.f36061h);
                    this.f36058e.f36012k.add(this.f36062i);
                }
            }
        } else {
            gVar.b(this);
        }
        ConstraintWidget constraintWidget5 = this.f36055b;
        androidx.constraintlayout.core.widgets.d[] dVarArr2 = constraintWidget5.W;
        androidx.constraintlayout.core.widgets.d dVar5 = dVarArr2[2];
        androidx.constraintlayout.core.widgets.d dVar6 = dVar5.f2497f;
        if (dVar6 != null && dVarArr2[3].f2497f != null) {
            if (constraintWidget5.k0()) {
                this.f36061h.f36007f = this.f36055b.W[2].f();
                this.f36062i.f36007f = -this.f36055b.W[3].f();
            } else {
                f h15 = h(this.f36055b.W[2]);
                f h16 = h(this.f36055b.W[3]);
                if (h15 != null) {
                    h15.b(this);
                }
                if (h16 != null) {
                    h16.b(this);
                }
                this.f36063j = p.b.CENTER;
            }
            if (this.f36055b.Z()) {
                c(this.f36037k, this.f36061h, 1, this.f36038l);
            }
        } else if (dVar6 != null) {
            f h17 = h(dVar5);
            if (h17 != null) {
                b(this.f36061h, h17, this.f36055b.W[2].f());
                c(this.f36062i, this.f36061h, 1, this.f36058e);
                if (this.f36055b.Z()) {
                    c(this.f36037k, this.f36061h, 1, this.f36038l);
                }
                ConstraintWidget.b bVar2 = this.f36057d;
                ConstraintWidget.b bVar3 = ConstraintWidget.b.MATCH_CONSTRAINT;
                if (bVar2 == bVar3 && this.f36055b.v() > 0.0f) {
                    l lVar = this.f36055b.f2403e;
                    if (lVar.f36057d == bVar3) {
                        lVar.f36058e.f36012k.add(this.f36058e);
                        this.f36058e.f36013l.add(this.f36055b.f2403e.f36058e);
                        this.f36058e.f36002a = this;
                    }
                }
            }
        } else {
            androidx.constraintlayout.core.widgets.d dVar7 = dVarArr2[3];
            if (dVar7.f2497f != null) {
                f h18 = h(dVar7);
                if (h18 != null) {
                    b(this.f36062i, h18, -this.f36055b.W[3].f());
                    c(this.f36061h, this.f36062i, -1, this.f36058e);
                    if (this.f36055b.Z()) {
                        c(this.f36037k, this.f36061h, 1, this.f36038l);
                    }
                }
            } else {
                androidx.constraintlayout.core.widgets.d dVar8 = dVarArr2[4];
                if (dVar8.f2497f != null) {
                    f h19 = h(dVar8);
                    if (h19 != null) {
                        b(this.f36037k, h19, 0);
                        c(this.f36061h, this.f36037k, -1, this.f36038l);
                        c(this.f36062i, this.f36061h, 1, this.f36058e);
                    }
                } else if (!(constraintWidget5 instanceof k1.a) && constraintWidget5.K() != null) {
                    b(this.f36061h, this.f36055b.K().f2405f.f36061h, this.f36055b.Y());
                    c(this.f36062i, this.f36061h, 1, this.f36058e);
                    if (this.f36055b.Z()) {
                        c(this.f36037k, this.f36061h, 1, this.f36038l);
                    }
                    ConstraintWidget.b bVar4 = this.f36057d;
                    ConstraintWidget.b bVar5 = ConstraintWidget.b.MATCH_CONSTRAINT;
                    if (bVar4 == bVar5 && this.f36055b.v() > 0.0f) {
                        l lVar2 = this.f36055b.f2403e;
                        if (lVar2.f36057d == bVar5) {
                            lVar2.f36058e.f36012k.add(this.f36058e);
                            this.f36058e.f36013l.add(this.f36055b.f2403e.f36058e);
                            this.f36058e.f36002a = this;
                        }
                    }
                }
            }
        }
        if (this.f36058e.f36013l.size() == 0) {
            this.f36058e.f36004c = true;
        }
    }

    @Override // l1.p
    public void e() {
        f fVar = this.f36061h;
        if (fVar.f36011j) {
            this.f36055b.o1(fVar.f36008g);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // l1.p
    public void f() {
        this.f36056c = null;
        this.f36061h.c();
        this.f36062i.c();
        this.f36037k.c();
        this.f36058e.c();
        this.f36060g = false;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // l1.p
    public boolean m() {
        if (this.f36057d != ConstraintWidget.b.MATCH_CONSTRAINT || this.f36055b.f2441x == 0) {
            return true;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void q() {
        this.f36060g = false;
        this.f36061h.c();
        this.f36061h.f36011j = false;
        this.f36062i.c();
        this.f36062i.f36011j = false;
        this.f36037k.c();
        this.f36037k.f36011j = false;
        this.f36058e.f36011j = false;
    }

    public String toString() {
        return "VerticalRun " + this.f36055b.t();
    }
}
