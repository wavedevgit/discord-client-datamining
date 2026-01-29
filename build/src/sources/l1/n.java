package l1;

import androidx.constraintlayout.core.widgets.ConstraintWidget;
import androidx.constraintlayout.core.widgets.d;
import l1.f;
import l1.p;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class n extends p {

    /* renamed from: k  reason: collision with root package name */
    public f f36769k;

    /* renamed from: l  reason: collision with root package name */
    g f36770l;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f36771a;

        static {
            int[] iArr = new int[p.b.values().length];
            f36771a = iArr;
            try {
                iArr[p.b.START.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f36771a[p.b.END.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                f36771a[p.b.CENTER.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
        }
    }

    public n(ConstraintWidget constraintWidget) {
        super(constraintWidget);
        f fVar = new f(this);
        this.f36769k = fVar;
        this.f36770l = null;
        this.f36793h.f36738e = f.a.TOP;
        this.f36794i.f36738e = f.a.BOTTOM;
        fVar.f36738e = f.a.BASELINE;
        this.f36791f = 1;
    }

    @Override // l1.p, l1.d
    public void a(d dVar) {
        g gVar;
        float f10;
        float v10;
        float f11;
        int i10;
        ConstraintWidget constraintWidget;
        int i11 = a.f36771a[this.f36795j.ordinal()];
        if (i11 != 1) {
            if (i11 != 2) {
                if (i11 == 3) {
                    ConstraintWidget constraintWidget2 = this.f36787b;
                    n(dVar, constraintWidget2.P, constraintWidget2.R, 1);
                    return;
                }
            } else {
                o(dVar);
            }
        } else {
            p(dVar);
        }
        g gVar2 = this.f36790e;
        if (gVar2.f36736c && !gVar2.f36743j && this.f36789d == ConstraintWidget.b.MATCH_CONSTRAINT) {
            ConstraintWidget constraintWidget3 = this.f36787b;
            int i12 = constraintWidget3.f2287x;
            if (i12 != 2) {
                if (i12 == 3 && constraintWidget3.f2249e.f36790e.f36743j) {
                    int w10 = constraintWidget3.w();
                    if (w10 != -1) {
                        if (w10 != 0) {
                            if (w10 != 1) {
                                i10 = 0;
                                this.f36790e.d(i10);
                            } else {
                                ConstraintWidget constraintWidget4 = this.f36787b;
                                f10 = constraintWidget4.f2249e.f36790e.f36740g;
                                v10 = constraintWidget4.v();
                            }
                        } else {
                            f11 = constraintWidget.f2249e.f36790e.f36740g * this.f36787b.v();
                            i10 = (int) (f11 + 0.5f);
                            this.f36790e.d(i10);
                        }
                    } else {
                        ConstraintWidget constraintWidget5 = this.f36787b;
                        f10 = constraintWidget5.f2249e.f36790e.f36740g;
                        v10 = constraintWidget5.v();
                    }
                    f11 = f10 / v10;
                    i10 = (int) (f11 + 0.5f);
                    this.f36790e.d(i10);
                }
            } else {
                ConstraintWidget K = constraintWidget3.K();
                if (K != null) {
                    if (K.f2251f.f36790e.f36743j) {
                        this.f36790e.d((int) ((gVar.f36740g * this.f36787b.E) + 0.5f));
                    }
                }
            }
        }
        f fVar = this.f36793h;
        if (fVar.f36736c) {
            f fVar2 = this.f36794i;
            if (fVar2.f36736c) {
                if (!fVar.f36743j || !fVar2.f36743j || !this.f36790e.f36743j) {
                    if (!this.f36790e.f36743j && this.f36789d == ConstraintWidget.b.MATCH_CONSTRAINT) {
                        ConstraintWidget constraintWidget6 = this.f36787b;
                        if (constraintWidget6.f2285w == 0 && !constraintWidget6.k0()) {
                            int i13 = ((f) this.f36793h.f36745l.get(0)).f36740g;
                            f fVar3 = this.f36793h;
                            int i14 = i13 + fVar3.f36739f;
                            int i15 = ((f) this.f36794i.f36745l.get(0)).f36740g + this.f36794i.f36739f;
                            fVar3.d(i14);
                            this.f36794i.d(i15);
                            this.f36790e.d(i15 - i14);
                            return;
                        }
                    }
                    if (!this.f36790e.f36743j && this.f36789d == ConstraintWidget.b.MATCH_CONSTRAINT && this.f36786a == 1 && this.f36793h.f36745l.size() > 0 && this.f36794i.f36745l.size() > 0) {
                        int i16 = (((f) this.f36794i.f36745l.get(0)).f36740g + this.f36794i.f36739f) - (((f) this.f36793h.f36745l.get(0)).f36740g + this.f36793h.f36739f);
                        g gVar3 = this.f36790e;
                        int i17 = gVar3.f36755m;
                        if (i16 < i17) {
                            gVar3.d(i16);
                        } else {
                            gVar3.d(i17);
                        }
                    }
                    if (this.f36790e.f36743j && this.f36793h.f36745l.size() > 0 && this.f36794i.f36745l.size() > 0) {
                        f fVar4 = (f) this.f36793h.f36745l.get(0);
                        f fVar5 = (f) this.f36794i.f36745l.get(0);
                        int i18 = fVar4.f36740g + this.f36793h.f36739f;
                        int i19 = fVar5.f36740g + this.f36794i.f36739f;
                        float R = this.f36787b.R();
                        if (fVar4 == fVar5) {
                            i18 = fVar4.f36740g;
                            i19 = fVar5.f36740g;
                            R = 0.5f;
                        }
                        this.f36793h.d((int) (i18 + 0.5f + (((i19 - i18) - this.f36790e.f36740g) * R)));
                        this.f36794i.d(this.f36793h.f36740g + this.f36790e.f36740g);
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
        ConstraintWidget constraintWidget = this.f36787b;
        if (constraintWidget.f2241a) {
            this.f36790e.d(constraintWidget.x());
        }
        if (!this.f36790e.f36743j) {
            this.f36789d = this.f36787b.T();
            if (this.f36787b.Z()) {
                this.f36770l = new l1.a(this);
            }
            ConstraintWidget.b bVar = this.f36789d;
            if (bVar != ConstraintWidget.b.MATCH_CONSTRAINT) {
                if (bVar == ConstraintWidget.b.MATCH_PARENT && (K2 = this.f36787b.K()) != null && K2.T() == ConstraintWidget.b.FIXED) {
                    int x10 = (K2.x() - this.f36787b.P.f()) - this.f36787b.R.f();
                    b(this.f36793h, K2.f2251f.f36793h, this.f36787b.P.f());
                    b(this.f36794i, K2.f2251f.f36794i, -this.f36787b.R.f());
                    this.f36790e.d(x10);
                    return;
                } else if (this.f36789d == ConstraintWidget.b.FIXED) {
                    this.f36790e.d(this.f36787b.x());
                }
            }
        } else if (this.f36789d == ConstraintWidget.b.MATCH_PARENT && (K = this.f36787b.K()) != null && K.T() == ConstraintWidget.b.FIXED) {
            b(this.f36793h, K.f2251f.f36793h, this.f36787b.P.f());
            b(this.f36794i, K.f2251f.f36794i, -this.f36787b.R.f());
            return;
        }
        g gVar = this.f36790e;
        boolean z10 = gVar.f36743j;
        if (z10) {
            ConstraintWidget constraintWidget2 = this.f36787b;
            if (constraintWidget2.f2241a) {
                androidx.constraintlayout.core.widgets.d[] dVarArr = constraintWidget2.W;
                androidx.constraintlayout.core.widgets.d dVar = dVarArr[2];
                androidx.constraintlayout.core.widgets.d dVar2 = dVar.f2343f;
                if (dVar2 != null && dVarArr[3].f2343f != null) {
                    if (constraintWidget2.k0()) {
                        this.f36793h.f36739f = this.f36787b.W[2].f();
                        this.f36794i.f36739f = -this.f36787b.W[3].f();
                    } else {
                        f h10 = h(this.f36787b.W[2]);
                        if (h10 != null) {
                            b(this.f36793h, h10, this.f36787b.W[2].f());
                        }
                        f h11 = h(this.f36787b.W[3]);
                        if (h11 != null) {
                            b(this.f36794i, h11, -this.f36787b.W[3].f());
                        }
                        this.f36793h.f36735b = true;
                        this.f36794i.f36735b = true;
                    }
                    if (this.f36787b.Z()) {
                        b(this.f36769k, this.f36793h, this.f36787b.p());
                        return;
                    }
                    return;
                } else if (dVar2 != null) {
                    f h12 = h(dVar);
                    if (h12 != null) {
                        b(this.f36793h, h12, this.f36787b.W[2].f());
                        b(this.f36794i, this.f36793h, this.f36790e.f36740g);
                        if (this.f36787b.Z()) {
                            b(this.f36769k, this.f36793h, this.f36787b.p());
                            return;
                        }
                        return;
                    }
                    return;
                } else {
                    androidx.constraintlayout.core.widgets.d dVar3 = dVarArr[3];
                    if (dVar3.f2343f != null) {
                        f h13 = h(dVar3);
                        if (h13 != null) {
                            b(this.f36794i, h13, -this.f36787b.W[3].f());
                            b(this.f36793h, this.f36794i, -this.f36790e.f36740g);
                        }
                        if (this.f36787b.Z()) {
                            b(this.f36769k, this.f36793h, this.f36787b.p());
                            return;
                        }
                        return;
                    }
                    androidx.constraintlayout.core.widgets.d dVar4 = dVarArr[4];
                    if (dVar4.f2343f != null) {
                        f h14 = h(dVar4);
                        if (h14 != null) {
                            b(this.f36769k, h14, 0);
                            b(this.f36793h, this.f36769k, -this.f36787b.p());
                            b(this.f36794i, this.f36793h, this.f36790e.f36740g);
                            return;
                        }
                        return;
                    } else if (!(constraintWidget2 instanceof k1.a) && constraintWidget2.K() != null && this.f36787b.o(d.a.CENTER).f2343f == null) {
                        b(this.f36793h, this.f36787b.K().f2251f.f36793h, this.f36787b.Y());
                        b(this.f36794i, this.f36793h, this.f36790e.f36740g);
                        if (this.f36787b.Z()) {
                            b(this.f36769k, this.f36793h, this.f36787b.p());
                            return;
                        }
                        return;
                    } else {
                        return;
                    }
                }
            }
        }
        if (!z10 && this.f36789d == ConstraintWidget.b.MATCH_CONSTRAINT) {
            ConstraintWidget constraintWidget3 = this.f36787b;
            int i10 = constraintWidget3.f2287x;
            if (i10 != 2) {
                if (i10 == 3 && !constraintWidget3.k0()) {
                    ConstraintWidget constraintWidget4 = this.f36787b;
                    if (constraintWidget4.f2285w != 3) {
                        g gVar2 = constraintWidget4.f2249e.f36790e;
                        this.f36790e.f36745l.add(gVar2);
                        gVar2.f36744k.add(this.f36790e);
                        g gVar3 = this.f36790e;
                        gVar3.f36735b = true;
                        gVar3.f36744k.add(this.f36793h);
                        this.f36790e.f36744k.add(this.f36794i);
                    }
                }
            } else {
                ConstraintWidget K3 = constraintWidget3.K();
                if (K3 != null) {
                    g gVar4 = K3.f2251f.f36790e;
                    this.f36790e.f36745l.add(gVar4);
                    gVar4.f36744k.add(this.f36790e);
                    g gVar5 = this.f36790e;
                    gVar5.f36735b = true;
                    gVar5.f36744k.add(this.f36793h);
                    this.f36790e.f36744k.add(this.f36794i);
                }
            }
        } else {
            gVar.b(this);
        }
        ConstraintWidget constraintWidget5 = this.f36787b;
        androidx.constraintlayout.core.widgets.d[] dVarArr2 = constraintWidget5.W;
        androidx.constraintlayout.core.widgets.d dVar5 = dVarArr2[2];
        androidx.constraintlayout.core.widgets.d dVar6 = dVar5.f2343f;
        if (dVar6 != null && dVarArr2[3].f2343f != null) {
            if (constraintWidget5.k0()) {
                this.f36793h.f36739f = this.f36787b.W[2].f();
                this.f36794i.f36739f = -this.f36787b.W[3].f();
            } else {
                f h15 = h(this.f36787b.W[2]);
                f h16 = h(this.f36787b.W[3]);
                if (h15 != null) {
                    h15.b(this);
                }
                if (h16 != null) {
                    h16.b(this);
                }
                this.f36795j = p.b.CENTER;
            }
            if (this.f36787b.Z()) {
                c(this.f36769k, this.f36793h, 1, this.f36770l);
            }
        } else if (dVar6 != null) {
            f h17 = h(dVar5);
            if (h17 != null) {
                b(this.f36793h, h17, this.f36787b.W[2].f());
                c(this.f36794i, this.f36793h, 1, this.f36790e);
                if (this.f36787b.Z()) {
                    c(this.f36769k, this.f36793h, 1, this.f36770l);
                }
                ConstraintWidget.b bVar2 = this.f36789d;
                ConstraintWidget.b bVar3 = ConstraintWidget.b.MATCH_CONSTRAINT;
                if (bVar2 == bVar3 && this.f36787b.v() > 0.0f) {
                    l lVar = this.f36787b.f2249e;
                    if (lVar.f36789d == bVar3) {
                        lVar.f36790e.f36744k.add(this.f36790e);
                        this.f36790e.f36745l.add(this.f36787b.f2249e.f36790e);
                        this.f36790e.f36734a = this;
                    }
                }
            }
        } else {
            androidx.constraintlayout.core.widgets.d dVar7 = dVarArr2[3];
            if (dVar7.f2343f != null) {
                f h18 = h(dVar7);
                if (h18 != null) {
                    b(this.f36794i, h18, -this.f36787b.W[3].f());
                    c(this.f36793h, this.f36794i, -1, this.f36790e);
                    if (this.f36787b.Z()) {
                        c(this.f36769k, this.f36793h, 1, this.f36770l);
                    }
                }
            } else {
                androidx.constraintlayout.core.widgets.d dVar8 = dVarArr2[4];
                if (dVar8.f2343f != null) {
                    f h19 = h(dVar8);
                    if (h19 != null) {
                        b(this.f36769k, h19, 0);
                        c(this.f36793h, this.f36769k, -1, this.f36770l);
                        c(this.f36794i, this.f36793h, 1, this.f36790e);
                    }
                } else if (!(constraintWidget5 instanceof k1.a) && constraintWidget5.K() != null) {
                    b(this.f36793h, this.f36787b.K().f2251f.f36793h, this.f36787b.Y());
                    c(this.f36794i, this.f36793h, 1, this.f36790e);
                    if (this.f36787b.Z()) {
                        c(this.f36769k, this.f36793h, 1, this.f36770l);
                    }
                    ConstraintWidget.b bVar4 = this.f36789d;
                    ConstraintWidget.b bVar5 = ConstraintWidget.b.MATCH_CONSTRAINT;
                    if (bVar4 == bVar5 && this.f36787b.v() > 0.0f) {
                        l lVar2 = this.f36787b.f2249e;
                        if (lVar2.f36789d == bVar5) {
                            lVar2.f36790e.f36744k.add(this.f36790e);
                            this.f36790e.f36745l.add(this.f36787b.f2249e.f36790e);
                            this.f36790e.f36734a = this;
                        }
                    }
                }
            }
        }
        if (this.f36790e.f36745l.size() == 0) {
            this.f36790e.f36736c = true;
        }
    }

    @Override // l1.p
    public void e() {
        f fVar = this.f36793h;
        if (fVar.f36743j) {
            this.f36787b.o1(fVar.f36740g);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // l1.p
    public void f() {
        this.f36788c = null;
        this.f36793h.c();
        this.f36794i.c();
        this.f36769k.c();
        this.f36790e.c();
        this.f36792g = false;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // l1.p
    public boolean m() {
        if (this.f36789d != ConstraintWidget.b.MATCH_CONSTRAINT || this.f36787b.f2287x == 0) {
            return true;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void q() {
        this.f36792g = false;
        this.f36793h.c();
        this.f36793h.f36743j = false;
        this.f36794i.c();
        this.f36794i.f36743j = false;
        this.f36769k.c();
        this.f36769k.f36743j = false;
        this.f36790e.f36743j = false;
    }

    public String toString() {
        return "VerticalRun " + this.f36787b.t();
    }
}
