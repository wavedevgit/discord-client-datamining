package l1;

import androidx.constraintlayout.core.widgets.ConstraintWidget;
import androidx.constraintlayout.core.widgets.d;
import l1.f;
import l1.p;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class n extends p {

    /* renamed from: k  reason: collision with root package name */
    public f f35736k;

    /* renamed from: l  reason: collision with root package name */
    g f35737l;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f35738a;

        static {
            int[] iArr = new int[p.b.values().length];
            f35738a = iArr;
            try {
                iArr[p.b.START.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f35738a[p.b.END.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                f35738a[p.b.CENTER.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
        }
    }

    public n(ConstraintWidget constraintWidget) {
        super(constraintWidget);
        f fVar = new f(this);
        this.f35736k = fVar;
        this.f35737l = null;
        this.f35760h.f35705e = f.a.TOP;
        this.f35761i.f35705e = f.a.BOTTOM;
        fVar.f35705e = f.a.BASELINE;
        this.f35758f = 1;
    }

    @Override // l1.p, l1.d
    public void a(d dVar) {
        g gVar;
        float f10;
        float v10;
        float f11;
        int i10;
        ConstraintWidget constraintWidget;
        int i11 = a.f35738a[this.f35762j.ordinal()];
        if (i11 != 1) {
            if (i11 != 2) {
                if (i11 == 3) {
                    ConstraintWidget constraintWidget2 = this.f35754b;
                    n(dVar, constraintWidget2.P, constraintWidget2.R, 1);
                    return;
                }
            } else {
                o(dVar);
            }
        } else {
            p(dVar);
        }
        g gVar2 = this.f35757e;
        if (gVar2.f35703c && !gVar2.f35710j && this.f35756d == ConstraintWidget.b.MATCH_CONSTRAINT) {
            ConstraintWidget constraintWidget3 = this.f35754b;
            int i12 = constraintWidget3.f2741x;
            if (i12 != 2) {
                if (i12 == 3 && constraintWidget3.f2703e.f35757e.f35710j) {
                    int w10 = constraintWidget3.w();
                    if (w10 != -1) {
                        if (w10 != 0) {
                            if (w10 != 1) {
                                i10 = 0;
                                this.f35757e.d(i10);
                            } else {
                                ConstraintWidget constraintWidget4 = this.f35754b;
                                f10 = constraintWidget4.f2703e.f35757e.f35707g;
                                v10 = constraintWidget4.v();
                            }
                        } else {
                            f11 = constraintWidget.f2703e.f35757e.f35707g * this.f35754b.v();
                            i10 = (int) (f11 + 0.5f);
                            this.f35757e.d(i10);
                        }
                    } else {
                        ConstraintWidget constraintWidget5 = this.f35754b;
                        f10 = constraintWidget5.f2703e.f35757e.f35707g;
                        v10 = constraintWidget5.v();
                    }
                    f11 = f10 / v10;
                    i10 = (int) (f11 + 0.5f);
                    this.f35757e.d(i10);
                }
            } else {
                ConstraintWidget K = constraintWidget3.K();
                if (K != null) {
                    if (K.f2705f.f35757e.f35710j) {
                        this.f35757e.d((int) ((gVar.f35707g * this.f35754b.E) + 0.5f));
                    }
                }
            }
        }
        f fVar = this.f35760h;
        if (fVar.f35703c) {
            f fVar2 = this.f35761i;
            if (fVar2.f35703c) {
                if (!fVar.f35710j || !fVar2.f35710j || !this.f35757e.f35710j) {
                    if (!this.f35757e.f35710j && this.f35756d == ConstraintWidget.b.MATCH_CONSTRAINT) {
                        ConstraintWidget constraintWidget6 = this.f35754b;
                        if (constraintWidget6.f2739w == 0 && !constraintWidget6.k0()) {
                            int i13 = ((f) this.f35760h.f35712l.get(0)).f35707g;
                            f fVar3 = this.f35760h;
                            int i14 = i13 + fVar3.f35706f;
                            int i15 = ((f) this.f35761i.f35712l.get(0)).f35707g + this.f35761i.f35706f;
                            fVar3.d(i14);
                            this.f35761i.d(i15);
                            this.f35757e.d(i15 - i14);
                            return;
                        }
                    }
                    if (!this.f35757e.f35710j && this.f35756d == ConstraintWidget.b.MATCH_CONSTRAINT && this.f35753a == 1 && this.f35760h.f35712l.size() > 0 && this.f35761i.f35712l.size() > 0) {
                        int i16 = (((f) this.f35761i.f35712l.get(0)).f35707g + this.f35761i.f35706f) - (((f) this.f35760h.f35712l.get(0)).f35707g + this.f35760h.f35706f);
                        g gVar3 = this.f35757e;
                        int i17 = gVar3.f35722m;
                        if (i16 < i17) {
                            gVar3.d(i16);
                        } else {
                            gVar3.d(i17);
                        }
                    }
                    if (this.f35757e.f35710j && this.f35760h.f35712l.size() > 0 && this.f35761i.f35712l.size() > 0) {
                        f fVar4 = (f) this.f35760h.f35712l.get(0);
                        f fVar5 = (f) this.f35761i.f35712l.get(0);
                        int i18 = fVar4.f35707g + this.f35760h.f35706f;
                        int i19 = fVar5.f35707g + this.f35761i.f35706f;
                        float R = this.f35754b.R();
                        if (fVar4 == fVar5) {
                            i18 = fVar4.f35707g;
                            i19 = fVar5.f35707g;
                            R = 0.5f;
                        }
                        this.f35760h.d((int) (i18 + 0.5f + (((i19 - i18) - this.f35757e.f35707g) * R)));
                        this.f35761i.d(this.f35760h.f35707g + this.f35757e.f35707g);
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
        ConstraintWidget constraintWidget = this.f35754b;
        if (constraintWidget.f2695a) {
            this.f35757e.d(constraintWidget.x());
        }
        if (!this.f35757e.f35710j) {
            this.f35756d = this.f35754b.T();
            if (this.f35754b.Z()) {
                this.f35737l = new l1.a(this);
            }
            ConstraintWidget.b bVar = this.f35756d;
            if (bVar != ConstraintWidget.b.MATCH_CONSTRAINT) {
                if (bVar == ConstraintWidget.b.MATCH_PARENT && (K2 = this.f35754b.K()) != null && K2.T() == ConstraintWidget.b.FIXED) {
                    int x10 = (K2.x() - this.f35754b.P.f()) - this.f35754b.R.f();
                    b(this.f35760h, K2.f2705f.f35760h, this.f35754b.P.f());
                    b(this.f35761i, K2.f2705f.f35761i, -this.f35754b.R.f());
                    this.f35757e.d(x10);
                    return;
                } else if (this.f35756d == ConstraintWidget.b.FIXED) {
                    this.f35757e.d(this.f35754b.x());
                }
            }
        } else if (this.f35756d == ConstraintWidget.b.MATCH_PARENT && (K = this.f35754b.K()) != null && K.T() == ConstraintWidget.b.FIXED) {
            b(this.f35760h, K.f2705f.f35760h, this.f35754b.P.f());
            b(this.f35761i, K.f2705f.f35761i, -this.f35754b.R.f());
            return;
        }
        g gVar = this.f35757e;
        boolean z10 = gVar.f35710j;
        if (z10) {
            ConstraintWidget constraintWidget2 = this.f35754b;
            if (constraintWidget2.f2695a) {
                androidx.constraintlayout.core.widgets.d[] dVarArr = constraintWidget2.W;
                androidx.constraintlayout.core.widgets.d dVar = dVarArr[2];
                androidx.constraintlayout.core.widgets.d dVar2 = dVar.f2797f;
                if (dVar2 != null && dVarArr[3].f2797f != null) {
                    if (constraintWidget2.k0()) {
                        this.f35760h.f35706f = this.f35754b.W[2].f();
                        this.f35761i.f35706f = -this.f35754b.W[3].f();
                    } else {
                        f h10 = h(this.f35754b.W[2]);
                        if (h10 != null) {
                            b(this.f35760h, h10, this.f35754b.W[2].f());
                        }
                        f h11 = h(this.f35754b.W[3]);
                        if (h11 != null) {
                            b(this.f35761i, h11, -this.f35754b.W[3].f());
                        }
                        this.f35760h.f35702b = true;
                        this.f35761i.f35702b = true;
                    }
                    if (this.f35754b.Z()) {
                        b(this.f35736k, this.f35760h, this.f35754b.p());
                        return;
                    }
                    return;
                } else if (dVar2 != null) {
                    f h12 = h(dVar);
                    if (h12 != null) {
                        b(this.f35760h, h12, this.f35754b.W[2].f());
                        b(this.f35761i, this.f35760h, this.f35757e.f35707g);
                        if (this.f35754b.Z()) {
                            b(this.f35736k, this.f35760h, this.f35754b.p());
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
                            b(this.f35761i, h13, -this.f35754b.W[3].f());
                            b(this.f35760h, this.f35761i, -this.f35757e.f35707g);
                        }
                        if (this.f35754b.Z()) {
                            b(this.f35736k, this.f35760h, this.f35754b.p());
                            return;
                        }
                        return;
                    }
                    androidx.constraintlayout.core.widgets.d dVar4 = dVarArr[4];
                    if (dVar4.f2797f != null) {
                        f h14 = h(dVar4);
                        if (h14 != null) {
                            b(this.f35736k, h14, 0);
                            b(this.f35760h, this.f35736k, -this.f35754b.p());
                            b(this.f35761i, this.f35760h, this.f35757e.f35707g);
                            return;
                        }
                        return;
                    } else if (!(constraintWidget2 instanceof k1.a) && constraintWidget2.K() != null && this.f35754b.o(d.a.CENTER).f2797f == null) {
                        b(this.f35760h, this.f35754b.K().f2705f.f35760h, this.f35754b.Y());
                        b(this.f35761i, this.f35760h, this.f35757e.f35707g);
                        if (this.f35754b.Z()) {
                            b(this.f35736k, this.f35760h, this.f35754b.p());
                            return;
                        }
                        return;
                    } else {
                        return;
                    }
                }
            }
        }
        if (!z10 && this.f35756d == ConstraintWidget.b.MATCH_CONSTRAINT) {
            ConstraintWidget constraintWidget3 = this.f35754b;
            int i10 = constraintWidget3.f2741x;
            if (i10 != 2) {
                if (i10 == 3 && !constraintWidget3.k0()) {
                    ConstraintWidget constraintWidget4 = this.f35754b;
                    if (constraintWidget4.f2739w != 3) {
                        g gVar2 = constraintWidget4.f2703e.f35757e;
                        this.f35757e.f35712l.add(gVar2);
                        gVar2.f35711k.add(this.f35757e);
                        g gVar3 = this.f35757e;
                        gVar3.f35702b = true;
                        gVar3.f35711k.add(this.f35760h);
                        this.f35757e.f35711k.add(this.f35761i);
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
        } else {
            gVar.b(this);
        }
        ConstraintWidget constraintWidget5 = this.f35754b;
        androidx.constraintlayout.core.widgets.d[] dVarArr2 = constraintWidget5.W;
        androidx.constraintlayout.core.widgets.d dVar5 = dVarArr2[2];
        androidx.constraintlayout.core.widgets.d dVar6 = dVar5.f2797f;
        if (dVar6 != null && dVarArr2[3].f2797f != null) {
            if (constraintWidget5.k0()) {
                this.f35760h.f35706f = this.f35754b.W[2].f();
                this.f35761i.f35706f = -this.f35754b.W[3].f();
            } else {
                f h15 = h(this.f35754b.W[2]);
                f h16 = h(this.f35754b.W[3]);
                if (h15 != null) {
                    h15.b(this);
                }
                if (h16 != null) {
                    h16.b(this);
                }
                this.f35762j = p.b.CENTER;
            }
            if (this.f35754b.Z()) {
                c(this.f35736k, this.f35760h, 1, this.f35737l);
            }
        } else if (dVar6 != null) {
            f h17 = h(dVar5);
            if (h17 != null) {
                b(this.f35760h, h17, this.f35754b.W[2].f());
                c(this.f35761i, this.f35760h, 1, this.f35757e);
                if (this.f35754b.Z()) {
                    c(this.f35736k, this.f35760h, 1, this.f35737l);
                }
                ConstraintWidget.b bVar2 = this.f35756d;
                ConstraintWidget.b bVar3 = ConstraintWidget.b.MATCH_CONSTRAINT;
                if (bVar2 == bVar3 && this.f35754b.v() > 0.0f) {
                    l lVar = this.f35754b.f2703e;
                    if (lVar.f35756d == bVar3) {
                        lVar.f35757e.f35711k.add(this.f35757e);
                        this.f35757e.f35712l.add(this.f35754b.f2703e.f35757e);
                        this.f35757e.f35701a = this;
                    }
                }
            }
        } else {
            androidx.constraintlayout.core.widgets.d dVar7 = dVarArr2[3];
            if (dVar7.f2797f != null) {
                f h18 = h(dVar7);
                if (h18 != null) {
                    b(this.f35761i, h18, -this.f35754b.W[3].f());
                    c(this.f35760h, this.f35761i, -1, this.f35757e);
                    if (this.f35754b.Z()) {
                        c(this.f35736k, this.f35760h, 1, this.f35737l);
                    }
                }
            } else {
                androidx.constraintlayout.core.widgets.d dVar8 = dVarArr2[4];
                if (dVar8.f2797f != null) {
                    f h19 = h(dVar8);
                    if (h19 != null) {
                        b(this.f35736k, h19, 0);
                        c(this.f35760h, this.f35736k, -1, this.f35737l);
                        c(this.f35761i, this.f35760h, 1, this.f35757e);
                    }
                } else if (!(constraintWidget5 instanceof k1.a) && constraintWidget5.K() != null) {
                    b(this.f35760h, this.f35754b.K().f2705f.f35760h, this.f35754b.Y());
                    c(this.f35761i, this.f35760h, 1, this.f35757e);
                    if (this.f35754b.Z()) {
                        c(this.f35736k, this.f35760h, 1, this.f35737l);
                    }
                    ConstraintWidget.b bVar4 = this.f35756d;
                    ConstraintWidget.b bVar5 = ConstraintWidget.b.MATCH_CONSTRAINT;
                    if (bVar4 == bVar5 && this.f35754b.v() > 0.0f) {
                        l lVar2 = this.f35754b.f2703e;
                        if (lVar2.f35756d == bVar5) {
                            lVar2.f35757e.f35711k.add(this.f35757e);
                            this.f35757e.f35712l.add(this.f35754b.f2703e.f35757e);
                            this.f35757e.f35701a = this;
                        }
                    }
                }
            }
        }
        if (this.f35757e.f35712l.size() == 0) {
            this.f35757e.f35703c = true;
        }
    }

    @Override // l1.p
    public void e() {
        f fVar = this.f35760h;
        if (fVar.f35710j) {
            this.f35754b.o1(fVar.f35707g);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // l1.p
    public void f() {
        this.f35755c = null;
        this.f35760h.c();
        this.f35761i.c();
        this.f35736k.c();
        this.f35757e.c();
        this.f35759g = false;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // l1.p
    public boolean m() {
        if (this.f35756d != ConstraintWidget.b.MATCH_CONSTRAINT || this.f35754b.f2741x == 0) {
            return true;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void q() {
        this.f35759g = false;
        this.f35760h.c();
        this.f35760h.f35710j = false;
        this.f35761i.c();
        this.f35761i.f35710j = false;
        this.f35736k.c();
        this.f35736k.f35710j = false;
        this.f35757e.f35710j = false;
    }

    public String toString() {
        return "VerticalRun " + this.f35754b.t();
    }
}
