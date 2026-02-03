package l1;

import androidx.constraintlayout.core.widgets.ConstraintWidget;
import androidx.constraintlayout.core.widgets.d;
import l1.f;
import l1.p;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class n extends p {

    /* renamed from: k  reason: collision with root package name */
    public f f36899k;

    /* renamed from: l  reason: collision with root package name */
    g f36900l;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f36901a;

        static {
            int[] iArr = new int[p.b.values().length];
            f36901a = iArr;
            try {
                iArr[p.b.START.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f36901a[p.b.END.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                f36901a[p.b.CENTER.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
        }
    }

    public n(ConstraintWidget constraintWidget) {
        super(constraintWidget);
        f fVar = new f(this);
        this.f36899k = fVar;
        this.f36900l = null;
        this.f36923h.f36868e = f.a.TOP;
        this.f36924i.f36868e = f.a.BOTTOM;
        fVar.f36868e = f.a.BASELINE;
        this.f36921f = 1;
    }

    @Override // l1.p, l1.d
    public void a(d dVar) {
        g gVar;
        float f10;
        float v10;
        float f11;
        int i10;
        ConstraintWidget constraintWidget;
        int i11 = a.f36901a[this.f36925j.ordinal()];
        if (i11 != 1) {
            if (i11 != 2) {
                if (i11 == 3) {
                    ConstraintWidget constraintWidget2 = this.f36917b;
                    n(dVar, constraintWidget2.P, constraintWidget2.R, 1);
                    return;
                }
            } else {
                o(dVar);
            }
        } else {
            p(dVar);
        }
        g gVar2 = this.f36920e;
        if (gVar2.f36866c && !gVar2.f36873j && this.f36919d == ConstraintWidget.b.MATCH_CONSTRAINT) {
            ConstraintWidget constraintWidget3 = this.f36917b;
            int i12 = constraintWidget3.f2331x;
            if (i12 != 2) {
                if (i12 == 3 && constraintWidget3.f2293e.f36920e.f36873j) {
                    int w10 = constraintWidget3.w();
                    if (w10 != -1) {
                        if (w10 != 0) {
                            if (w10 != 1) {
                                i10 = 0;
                                this.f36920e.d(i10);
                            } else {
                                ConstraintWidget constraintWidget4 = this.f36917b;
                                f10 = constraintWidget4.f2293e.f36920e.f36870g;
                                v10 = constraintWidget4.v();
                            }
                        } else {
                            f11 = constraintWidget.f2293e.f36920e.f36870g * this.f36917b.v();
                            i10 = (int) (f11 + 0.5f);
                            this.f36920e.d(i10);
                        }
                    } else {
                        ConstraintWidget constraintWidget5 = this.f36917b;
                        f10 = constraintWidget5.f2293e.f36920e.f36870g;
                        v10 = constraintWidget5.v();
                    }
                    f11 = f10 / v10;
                    i10 = (int) (f11 + 0.5f);
                    this.f36920e.d(i10);
                }
            } else {
                ConstraintWidget K = constraintWidget3.K();
                if (K != null) {
                    if (K.f2295f.f36920e.f36873j) {
                        this.f36920e.d((int) ((gVar.f36870g * this.f36917b.E) + 0.5f));
                    }
                }
            }
        }
        f fVar = this.f36923h;
        if (fVar.f36866c) {
            f fVar2 = this.f36924i;
            if (fVar2.f36866c) {
                if (!fVar.f36873j || !fVar2.f36873j || !this.f36920e.f36873j) {
                    if (!this.f36920e.f36873j && this.f36919d == ConstraintWidget.b.MATCH_CONSTRAINT) {
                        ConstraintWidget constraintWidget6 = this.f36917b;
                        if (constraintWidget6.f2329w == 0 && !constraintWidget6.k0()) {
                            int i13 = ((f) this.f36923h.f36875l.get(0)).f36870g;
                            f fVar3 = this.f36923h;
                            int i14 = i13 + fVar3.f36869f;
                            int i15 = ((f) this.f36924i.f36875l.get(0)).f36870g + this.f36924i.f36869f;
                            fVar3.d(i14);
                            this.f36924i.d(i15);
                            this.f36920e.d(i15 - i14);
                            return;
                        }
                    }
                    if (!this.f36920e.f36873j && this.f36919d == ConstraintWidget.b.MATCH_CONSTRAINT && this.f36916a == 1 && this.f36923h.f36875l.size() > 0 && this.f36924i.f36875l.size() > 0) {
                        int i16 = (((f) this.f36924i.f36875l.get(0)).f36870g + this.f36924i.f36869f) - (((f) this.f36923h.f36875l.get(0)).f36870g + this.f36923h.f36869f);
                        g gVar3 = this.f36920e;
                        int i17 = gVar3.f36885m;
                        if (i16 < i17) {
                            gVar3.d(i16);
                        } else {
                            gVar3.d(i17);
                        }
                    }
                    if (this.f36920e.f36873j && this.f36923h.f36875l.size() > 0 && this.f36924i.f36875l.size() > 0) {
                        f fVar4 = (f) this.f36923h.f36875l.get(0);
                        f fVar5 = (f) this.f36924i.f36875l.get(0);
                        int i18 = fVar4.f36870g + this.f36923h.f36869f;
                        int i19 = fVar5.f36870g + this.f36924i.f36869f;
                        float R = this.f36917b.R();
                        if (fVar4 == fVar5) {
                            i18 = fVar4.f36870g;
                            i19 = fVar5.f36870g;
                            R = 0.5f;
                        }
                        this.f36923h.d((int) (i18 + 0.5f + (((i19 - i18) - this.f36920e.f36870g) * R)));
                        this.f36924i.d(this.f36923h.f36870g + this.f36920e.f36870g);
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
        ConstraintWidget constraintWidget = this.f36917b;
        if (constraintWidget.f2285a) {
            this.f36920e.d(constraintWidget.x());
        }
        if (!this.f36920e.f36873j) {
            this.f36919d = this.f36917b.T();
            if (this.f36917b.Z()) {
                this.f36900l = new l1.a(this);
            }
            ConstraintWidget.b bVar = this.f36919d;
            if (bVar != ConstraintWidget.b.MATCH_CONSTRAINT) {
                if (bVar == ConstraintWidget.b.MATCH_PARENT && (K2 = this.f36917b.K()) != null && K2.T() == ConstraintWidget.b.FIXED) {
                    int x10 = (K2.x() - this.f36917b.P.f()) - this.f36917b.R.f();
                    b(this.f36923h, K2.f2295f.f36923h, this.f36917b.P.f());
                    b(this.f36924i, K2.f2295f.f36924i, -this.f36917b.R.f());
                    this.f36920e.d(x10);
                    return;
                } else if (this.f36919d == ConstraintWidget.b.FIXED) {
                    this.f36920e.d(this.f36917b.x());
                }
            }
        } else if (this.f36919d == ConstraintWidget.b.MATCH_PARENT && (K = this.f36917b.K()) != null && K.T() == ConstraintWidget.b.FIXED) {
            b(this.f36923h, K.f2295f.f36923h, this.f36917b.P.f());
            b(this.f36924i, K.f2295f.f36924i, -this.f36917b.R.f());
            return;
        }
        g gVar = this.f36920e;
        boolean z10 = gVar.f36873j;
        if (z10) {
            ConstraintWidget constraintWidget2 = this.f36917b;
            if (constraintWidget2.f2285a) {
                androidx.constraintlayout.core.widgets.d[] dVarArr = constraintWidget2.W;
                androidx.constraintlayout.core.widgets.d dVar = dVarArr[2];
                androidx.constraintlayout.core.widgets.d dVar2 = dVar.f2387f;
                if (dVar2 != null && dVarArr[3].f2387f != null) {
                    if (constraintWidget2.k0()) {
                        this.f36923h.f36869f = this.f36917b.W[2].f();
                        this.f36924i.f36869f = -this.f36917b.W[3].f();
                    } else {
                        f h10 = h(this.f36917b.W[2]);
                        if (h10 != null) {
                            b(this.f36923h, h10, this.f36917b.W[2].f());
                        }
                        f h11 = h(this.f36917b.W[3]);
                        if (h11 != null) {
                            b(this.f36924i, h11, -this.f36917b.W[3].f());
                        }
                        this.f36923h.f36865b = true;
                        this.f36924i.f36865b = true;
                    }
                    if (this.f36917b.Z()) {
                        b(this.f36899k, this.f36923h, this.f36917b.p());
                        return;
                    }
                    return;
                } else if (dVar2 != null) {
                    f h12 = h(dVar);
                    if (h12 != null) {
                        b(this.f36923h, h12, this.f36917b.W[2].f());
                        b(this.f36924i, this.f36923h, this.f36920e.f36870g);
                        if (this.f36917b.Z()) {
                            b(this.f36899k, this.f36923h, this.f36917b.p());
                            return;
                        }
                        return;
                    }
                    return;
                } else {
                    androidx.constraintlayout.core.widgets.d dVar3 = dVarArr[3];
                    if (dVar3.f2387f != null) {
                        f h13 = h(dVar3);
                        if (h13 != null) {
                            b(this.f36924i, h13, -this.f36917b.W[3].f());
                            b(this.f36923h, this.f36924i, -this.f36920e.f36870g);
                        }
                        if (this.f36917b.Z()) {
                            b(this.f36899k, this.f36923h, this.f36917b.p());
                            return;
                        }
                        return;
                    }
                    androidx.constraintlayout.core.widgets.d dVar4 = dVarArr[4];
                    if (dVar4.f2387f != null) {
                        f h14 = h(dVar4);
                        if (h14 != null) {
                            b(this.f36899k, h14, 0);
                            b(this.f36923h, this.f36899k, -this.f36917b.p());
                            b(this.f36924i, this.f36923h, this.f36920e.f36870g);
                            return;
                        }
                        return;
                    } else if (!(constraintWidget2 instanceof k1.a) && constraintWidget2.K() != null && this.f36917b.o(d.a.CENTER).f2387f == null) {
                        b(this.f36923h, this.f36917b.K().f2295f.f36923h, this.f36917b.Y());
                        b(this.f36924i, this.f36923h, this.f36920e.f36870g);
                        if (this.f36917b.Z()) {
                            b(this.f36899k, this.f36923h, this.f36917b.p());
                            return;
                        }
                        return;
                    } else {
                        return;
                    }
                }
            }
        }
        if (!z10 && this.f36919d == ConstraintWidget.b.MATCH_CONSTRAINT) {
            ConstraintWidget constraintWidget3 = this.f36917b;
            int i10 = constraintWidget3.f2331x;
            if (i10 != 2) {
                if (i10 == 3 && !constraintWidget3.k0()) {
                    ConstraintWidget constraintWidget4 = this.f36917b;
                    if (constraintWidget4.f2329w != 3) {
                        g gVar2 = constraintWidget4.f2293e.f36920e;
                        this.f36920e.f36875l.add(gVar2);
                        gVar2.f36874k.add(this.f36920e);
                        g gVar3 = this.f36920e;
                        gVar3.f36865b = true;
                        gVar3.f36874k.add(this.f36923h);
                        this.f36920e.f36874k.add(this.f36924i);
                    }
                }
            } else {
                ConstraintWidget K3 = constraintWidget3.K();
                if (K3 != null) {
                    g gVar4 = K3.f2295f.f36920e;
                    this.f36920e.f36875l.add(gVar4);
                    gVar4.f36874k.add(this.f36920e);
                    g gVar5 = this.f36920e;
                    gVar5.f36865b = true;
                    gVar5.f36874k.add(this.f36923h);
                    this.f36920e.f36874k.add(this.f36924i);
                }
            }
        } else {
            gVar.b(this);
        }
        ConstraintWidget constraintWidget5 = this.f36917b;
        androidx.constraintlayout.core.widgets.d[] dVarArr2 = constraintWidget5.W;
        androidx.constraintlayout.core.widgets.d dVar5 = dVarArr2[2];
        androidx.constraintlayout.core.widgets.d dVar6 = dVar5.f2387f;
        if (dVar6 != null && dVarArr2[3].f2387f != null) {
            if (constraintWidget5.k0()) {
                this.f36923h.f36869f = this.f36917b.W[2].f();
                this.f36924i.f36869f = -this.f36917b.W[3].f();
            } else {
                f h15 = h(this.f36917b.W[2]);
                f h16 = h(this.f36917b.W[3]);
                if (h15 != null) {
                    h15.b(this);
                }
                if (h16 != null) {
                    h16.b(this);
                }
                this.f36925j = p.b.CENTER;
            }
            if (this.f36917b.Z()) {
                c(this.f36899k, this.f36923h, 1, this.f36900l);
            }
        } else if (dVar6 != null) {
            f h17 = h(dVar5);
            if (h17 != null) {
                b(this.f36923h, h17, this.f36917b.W[2].f());
                c(this.f36924i, this.f36923h, 1, this.f36920e);
                if (this.f36917b.Z()) {
                    c(this.f36899k, this.f36923h, 1, this.f36900l);
                }
                ConstraintWidget.b bVar2 = this.f36919d;
                ConstraintWidget.b bVar3 = ConstraintWidget.b.MATCH_CONSTRAINT;
                if (bVar2 == bVar3 && this.f36917b.v() > 0.0f) {
                    l lVar = this.f36917b.f2293e;
                    if (lVar.f36919d == bVar3) {
                        lVar.f36920e.f36874k.add(this.f36920e);
                        this.f36920e.f36875l.add(this.f36917b.f2293e.f36920e);
                        this.f36920e.f36864a = this;
                    }
                }
            }
        } else {
            androidx.constraintlayout.core.widgets.d dVar7 = dVarArr2[3];
            if (dVar7.f2387f != null) {
                f h18 = h(dVar7);
                if (h18 != null) {
                    b(this.f36924i, h18, -this.f36917b.W[3].f());
                    c(this.f36923h, this.f36924i, -1, this.f36920e);
                    if (this.f36917b.Z()) {
                        c(this.f36899k, this.f36923h, 1, this.f36900l);
                    }
                }
            } else {
                androidx.constraintlayout.core.widgets.d dVar8 = dVarArr2[4];
                if (dVar8.f2387f != null) {
                    f h19 = h(dVar8);
                    if (h19 != null) {
                        b(this.f36899k, h19, 0);
                        c(this.f36923h, this.f36899k, -1, this.f36900l);
                        c(this.f36924i, this.f36923h, 1, this.f36920e);
                    }
                } else if (!(constraintWidget5 instanceof k1.a) && constraintWidget5.K() != null) {
                    b(this.f36923h, this.f36917b.K().f2295f.f36923h, this.f36917b.Y());
                    c(this.f36924i, this.f36923h, 1, this.f36920e);
                    if (this.f36917b.Z()) {
                        c(this.f36899k, this.f36923h, 1, this.f36900l);
                    }
                    ConstraintWidget.b bVar4 = this.f36919d;
                    ConstraintWidget.b bVar5 = ConstraintWidget.b.MATCH_CONSTRAINT;
                    if (bVar4 == bVar5 && this.f36917b.v() > 0.0f) {
                        l lVar2 = this.f36917b.f2293e;
                        if (lVar2.f36919d == bVar5) {
                            lVar2.f36920e.f36874k.add(this.f36920e);
                            this.f36920e.f36875l.add(this.f36917b.f2293e.f36920e);
                            this.f36920e.f36864a = this;
                        }
                    }
                }
            }
        }
        if (this.f36920e.f36875l.size() == 0) {
            this.f36920e.f36866c = true;
        }
    }

    @Override // l1.p
    public void e() {
        f fVar = this.f36923h;
        if (fVar.f36873j) {
            this.f36917b.o1(fVar.f36870g);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // l1.p
    public void f() {
        this.f36918c = null;
        this.f36923h.c();
        this.f36924i.c();
        this.f36899k.c();
        this.f36920e.c();
        this.f36922g = false;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // l1.p
    public boolean m() {
        if (this.f36919d != ConstraintWidget.b.MATCH_CONSTRAINT || this.f36917b.f2331x == 0) {
            return true;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void q() {
        this.f36922g = false;
        this.f36923h.c();
        this.f36923h.f36873j = false;
        this.f36924i.c();
        this.f36924i.f36873j = false;
        this.f36899k.c();
        this.f36899k.f36873j = false;
        this.f36920e.f36873j = false;
    }

    public String toString() {
        return "VerticalRun " + this.f36917b.t();
    }
}
