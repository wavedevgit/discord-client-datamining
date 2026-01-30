package l1;

import androidx.constraintlayout.core.widgets.ConstraintWidget;
import androidx.constraintlayout.core.widgets.d;
import l1.f;
import l1.p;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class n extends p {

    /* renamed from: k  reason: collision with root package name */
    public f f36785k;

    /* renamed from: l  reason: collision with root package name */
    g f36786l;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f36787a;

        static {
            int[] iArr = new int[p.b.values().length];
            f36787a = iArr;
            try {
                iArr[p.b.START.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f36787a[p.b.END.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                f36787a[p.b.CENTER.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
        }
    }

    public n(ConstraintWidget constraintWidget) {
        super(constraintWidget);
        f fVar = new f(this);
        this.f36785k = fVar;
        this.f36786l = null;
        this.f36809h.f36754e = f.a.TOP;
        this.f36810i.f36754e = f.a.BOTTOM;
        fVar.f36754e = f.a.BASELINE;
        this.f36807f = 1;
    }

    @Override // l1.p, l1.d
    public void a(d dVar) {
        g gVar;
        float f10;
        float v10;
        float f11;
        int i10;
        ConstraintWidget constraintWidget;
        int i11 = a.f36787a[this.f36811j.ordinal()];
        if (i11 != 1) {
            if (i11 != 2) {
                if (i11 == 3) {
                    ConstraintWidget constraintWidget2 = this.f36803b;
                    n(dVar, constraintWidget2.P, constraintWidget2.R, 1);
                    return;
                }
            } else {
                o(dVar);
            }
        } else {
            p(dVar);
        }
        g gVar2 = this.f36806e;
        if (gVar2.f36752c && !gVar2.f36759j && this.f36805d == ConstraintWidget.b.MATCH_CONSTRAINT) {
            ConstraintWidget constraintWidget3 = this.f36803b;
            int i12 = constraintWidget3.f2287x;
            if (i12 != 2) {
                if (i12 == 3 && constraintWidget3.f2249e.f36806e.f36759j) {
                    int w10 = constraintWidget3.w();
                    if (w10 != -1) {
                        if (w10 != 0) {
                            if (w10 != 1) {
                                i10 = 0;
                                this.f36806e.d(i10);
                            } else {
                                ConstraintWidget constraintWidget4 = this.f36803b;
                                f10 = constraintWidget4.f2249e.f36806e.f36756g;
                                v10 = constraintWidget4.v();
                            }
                        } else {
                            f11 = constraintWidget.f2249e.f36806e.f36756g * this.f36803b.v();
                            i10 = (int) (f11 + 0.5f);
                            this.f36806e.d(i10);
                        }
                    } else {
                        ConstraintWidget constraintWidget5 = this.f36803b;
                        f10 = constraintWidget5.f2249e.f36806e.f36756g;
                        v10 = constraintWidget5.v();
                    }
                    f11 = f10 / v10;
                    i10 = (int) (f11 + 0.5f);
                    this.f36806e.d(i10);
                }
            } else {
                ConstraintWidget K = constraintWidget3.K();
                if (K != null) {
                    if (K.f2251f.f36806e.f36759j) {
                        this.f36806e.d((int) ((gVar.f36756g * this.f36803b.E) + 0.5f));
                    }
                }
            }
        }
        f fVar = this.f36809h;
        if (fVar.f36752c) {
            f fVar2 = this.f36810i;
            if (fVar2.f36752c) {
                if (!fVar.f36759j || !fVar2.f36759j || !this.f36806e.f36759j) {
                    if (!this.f36806e.f36759j && this.f36805d == ConstraintWidget.b.MATCH_CONSTRAINT) {
                        ConstraintWidget constraintWidget6 = this.f36803b;
                        if (constraintWidget6.f2285w == 0 && !constraintWidget6.k0()) {
                            int i13 = ((f) this.f36809h.f36761l.get(0)).f36756g;
                            f fVar3 = this.f36809h;
                            int i14 = i13 + fVar3.f36755f;
                            int i15 = ((f) this.f36810i.f36761l.get(0)).f36756g + this.f36810i.f36755f;
                            fVar3.d(i14);
                            this.f36810i.d(i15);
                            this.f36806e.d(i15 - i14);
                            return;
                        }
                    }
                    if (!this.f36806e.f36759j && this.f36805d == ConstraintWidget.b.MATCH_CONSTRAINT && this.f36802a == 1 && this.f36809h.f36761l.size() > 0 && this.f36810i.f36761l.size() > 0) {
                        int i16 = (((f) this.f36810i.f36761l.get(0)).f36756g + this.f36810i.f36755f) - (((f) this.f36809h.f36761l.get(0)).f36756g + this.f36809h.f36755f);
                        g gVar3 = this.f36806e;
                        int i17 = gVar3.f36771m;
                        if (i16 < i17) {
                            gVar3.d(i16);
                        } else {
                            gVar3.d(i17);
                        }
                    }
                    if (this.f36806e.f36759j && this.f36809h.f36761l.size() > 0 && this.f36810i.f36761l.size() > 0) {
                        f fVar4 = (f) this.f36809h.f36761l.get(0);
                        f fVar5 = (f) this.f36810i.f36761l.get(0);
                        int i18 = fVar4.f36756g + this.f36809h.f36755f;
                        int i19 = fVar5.f36756g + this.f36810i.f36755f;
                        float R = this.f36803b.R();
                        if (fVar4 == fVar5) {
                            i18 = fVar4.f36756g;
                            i19 = fVar5.f36756g;
                            R = 0.5f;
                        }
                        this.f36809h.d((int) (i18 + 0.5f + (((i19 - i18) - this.f36806e.f36756g) * R)));
                        this.f36810i.d(this.f36809h.f36756g + this.f36806e.f36756g);
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
        ConstraintWidget constraintWidget = this.f36803b;
        if (constraintWidget.f2241a) {
            this.f36806e.d(constraintWidget.x());
        }
        if (!this.f36806e.f36759j) {
            this.f36805d = this.f36803b.T();
            if (this.f36803b.Z()) {
                this.f36786l = new l1.a(this);
            }
            ConstraintWidget.b bVar = this.f36805d;
            if (bVar != ConstraintWidget.b.MATCH_CONSTRAINT) {
                if (bVar == ConstraintWidget.b.MATCH_PARENT && (K2 = this.f36803b.K()) != null && K2.T() == ConstraintWidget.b.FIXED) {
                    int x10 = (K2.x() - this.f36803b.P.f()) - this.f36803b.R.f();
                    b(this.f36809h, K2.f2251f.f36809h, this.f36803b.P.f());
                    b(this.f36810i, K2.f2251f.f36810i, -this.f36803b.R.f());
                    this.f36806e.d(x10);
                    return;
                } else if (this.f36805d == ConstraintWidget.b.FIXED) {
                    this.f36806e.d(this.f36803b.x());
                }
            }
        } else if (this.f36805d == ConstraintWidget.b.MATCH_PARENT && (K = this.f36803b.K()) != null && K.T() == ConstraintWidget.b.FIXED) {
            b(this.f36809h, K.f2251f.f36809h, this.f36803b.P.f());
            b(this.f36810i, K.f2251f.f36810i, -this.f36803b.R.f());
            return;
        }
        g gVar = this.f36806e;
        boolean z10 = gVar.f36759j;
        if (z10) {
            ConstraintWidget constraintWidget2 = this.f36803b;
            if (constraintWidget2.f2241a) {
                androidx.constraintlayout.core.widgets.d[] dVarArr = constraintWidget2.W;
                androidx.constraintlayout.core.widgets.d dVar = dVarArr[2];
                androidx.constraintlayout.core.widgets.d dVar2 = dVar.f2343f;
                if (dVar2 != null && dVarArr[3].f2343f != null) {
                    if (constraintWidget2.k0()) {
                        this.f36809h.f36755f = this.f36803b.W[2].f();
                        this.f36810i.f36755f = -this.f36803b.W[3].f();
                    } else {
                        f h10 = h(this.f36803b.W[2]);
                        if (h10 != null) {
                            b(this.f36809h, h10, this.f36803b.W[2].f());
                        }
                        f h11 = h(this.f36803b.W[3]);
                        if (h11 != null) {
                            b(this.f36810i, h11, -this.f36803b.W[3].f());
                        }
                        this.f36809h.f36751b = true;
                        this.f36810i.f36751b = true;
                    }
                    if (this.f36803b.Z()) {
                        b(this.f36785k, this.f36809h, this.f36803b.p());
                        return;
                    }
                    return;
                } else if (dVar2 != null) {
                    f h12 = h(dVar);
                    if (h12 != null) {
                        b(this.f36809h, h12, this.f36803b.W[2].f());
                        b(this.f36810i, this.f36809h, this.f36806e.f36756g);
                        if (this.f36803b.Z()) {
                            b(this.f36785k, this.f36809h, this.f36803b.p());
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
                            b(this.f36810i, h13, -this.f36803b.W[3].f());
                            b(this.f36809h, this.f36810i, -this.f36806e.f36756g);
                        }
                        if (this.f36803b.Z()) {
                            b(this.f36785k, this.f36809h, this.f36803b.p());
                            return;
                        }
                        return;
                    }
                    androidx.constraintlayout.core.widgets.d dVar4 = dVarArr[4];
                    if (dVar4.f2343f != null) {
                        f h14 = h(dVar4);
                        if (h14 != null) {
                            b(this.f36785k, h14, 0);
                            b(this.f36809h, this.f36785k, -this.f36803b.p());
                            b(this.f36810i, this.f36809h, this.f36806e.f36756g);
                            return;
                        }
                        return;
                    } else if (!(constraintWidget2 instanceof k1.a) && constraintWidget2.K() != null && this.f36803b.o(d.a.CENTER).f2343f == null) {
                        b(this.f36809h, this.f36803b.K().f2251f.f36809h, this.f36803b.Y());
                        b(this.f36810i, this.f36809h, this.f36806e.f36756g);
                        if (this.f36803b.Z()) {
                            b(this.f36785k, this.f36809h, this.f36803b.p());
                            return;
                        }
                        return;
                    } else {
                        return;
                    }
                }
            }
        }
        if (!z10 && this.f36805d == ConstraintWidget.b.MATCH_CONSTRAINT) {
            ConstraintWidget constraintWidget3 = this.f36803b;
            int i10 = constraintWidget3.f2287x;
            if (i10 != 2) {
                if (i10 == 3 && !constraintWidget3.k0()) {
                    ConstraintWidget constraintWidget4 = this.f36803b;
                    if (constraintWidget4.f2285w != 3) {
                        g gVar2 = constraintWidget4.f2249e.f36806e;
                        this.f36806e.f36761l.add(gVar2);
                        gVar2.f36760k.add(this.f36806e);
                        g gVar3 = this.f36806e;
                        gVar3.f36751b = true;
                        gVar3.f36760k.add(this.f36809h);
                        this.f36806e.f36760k.add(this.f36810i);
                    }
                }
            } else {
                ConstraintWidget K3 = constraintWidget3.K();
                if (K3 != null) {
                    g gVar4 = K3.f2251f.f36806e;
                    this.f36806e.f36761l.add(gVar4);
                    gVar4.f36760k.add(this.f36806e);
                    g gVar5 = this.f36806e;
                    gVar5.f36751b = true;
                    gVar5.f36760k.add(this.f36809h);
                    this.f36806e.f36760k.add(this.f36810i);
                }
            }
        } else {
            gVar.b(this);
        }
        ConstraintWidget constraintWidget5 = this.f36803b;
        androidx.constraintlayout.core.widgets.d[] dVarArr2 = constraintWidget5.W;
        androidx.constraintlayout.core.widgets.d dVar5 = dVarArr2[2];
        androidx.constraintlayout.core.widgets.d dVar6 = dVar5.f2343f;
        if (dVar6 != null && dVarArr2[3].f2343f != null) {
            if (constraintWidget5.k0()) {
                this.f36809h.f36755f = this.f36803b.W[2].f();
                this.f36810i.f36755f = -this.f36803b.W[3].f();
            } else {
                f h15 = h(this.f36803b.W[2]);
                f h16 = h(this.f36803b.W[3]);
                if (h15 != null) {
                    h15.b(this);
                }
                if (h16 != null) {
                    h16.b(this);
                }
                this.f36811j = p.b.CENTER;
            }
            if (this.f36803b.Z()) {
                c(this.f36785k, this.f36809h, 1, this.f36786l);
            }
        } else if (dVar6 != null) {
            f h17 = h(dVar5);
            if (h17 != null) {
                b(this.f36809h, h17, this.f36803b.W[2].f());
                c(this.f36810i, this.f36809h, 1, this.f36806e);
                if (this.f36803b.Z()) {
                    c(this.f36785k, this.f36809h, 1, this.f36786l);
                }
                ConstraintWidget.b bVar2 = this.f36805d;
                ConstraintWidget.b bVar3 = ConstraintWidget.b.MATCH_CONSTRAINT;
                if (bVar2 == bVar3 && this.f36803b.v() > 0.0f) {
                    l lVar = this.f36803b.f2249e;
                    if (lVar.f36805d == bVar3) {
                        lVar.f36806e.f36760k.add(this.f36806e);
                        this.f36806e.f36761l.add(this.f36803b.f2249e.f36806e);
                        this.f36806e.f36750a = this;
                    }
                }
            }
        } else {
            androidx.constraintlayout.core.widgets.d dVar7 = dVarArr2[3];
            if (dVar7.f2343f != null) {
                f h18 = h(dVar7);
                if (h18 != null) {
                    b(this.f36810i, h18, -this.f36803b.W[3].f());
                    c(this.f36809h, this.f36810i, -1, this.f36806e);
                    if (this.f36803b.Z()) {
                        c(this.f36785k, this.f36809h, 1, this.f36786l);
                    }
                }
            } else {
                androidx.constraintlayout.core.widgets.d dVar8 = dVarArr2[4];
                if (dVar8.f2343f != null) {
                    f h19 = h(dVar8);
                    if (h19 != null) {
                        b(this.f36785k, h19, 0);
                        c(this.f36809h, this.f36785k, -1, this.f36786l);
                        c(this.f36810i, this.f36809h, 1, this.f36806e);
                    }
                } else if (!(constraintWidget5 instanceof k1.a) && constraintWidget5.K() != null) {
                    b(this.f36809h, this.f36803b.K().f2251f.f36809h, this.f36803b.Y());
                    c(this.f36810i, this.f36809h, 1, this.f36806e);
                    if (this.f36803b.Z()) {
                        c(this.f36785k, this.f36809h, 1, this.f36786l);
                    }
                    ConstraintWidget.b bVar4 = this.f36805d;
                    ConstraintWidget.b bVar5 = ConstraintWidget.b.MATCH_CONSTRAINT;
                    if (bVar4 == bVar5 && this.f36803b.v() > 0.0f) {
                        l lVar2 = this.f36803b.f2249e;
                        if (lVar2.f36805d == bVar5) {
                            lVar2.f36806e.f36760k.add(this.f36806e);
                            this.f36806e.f36761l.add(this.f36803b.f2249e.f36806e);
                            this.f36806e.f36750a = this;
                        }
                    }
                }
            }
        }
        if (this.f36806e.f36761l.size() == 0) {
            this.f36806e.f36752c = true;
        }
    }

    @Override // l1.p
    public void e() {
        f fVar = this.f36809h;
        if (fVar.f36759j) {
            this.f36803b.o1(fVar.f36756g);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // l1.p
    public void f() {
        this.f36804c = null;
        this.f36809h.c();
        this.f36810i.c();
        this.f36785k.c();
        this.f36806e.c();
        this.f36808g = false;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // l1.p
    public boolean m() {
        if (this.f36805d != ConstraintWidget.b.MATCH_CONSTRAINT || this.f36803b.f2287x == 0) {
            return true;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void q() {
        this.f36808g = false;
        this.f36809h.c();
        this.f36809h.f36759j = false;
        this.f36810i.c();
        this.f36810i.f36759j = false;
        this.f36785k.c();
        this.f36785k.f36759j = false;
        this.f36806e.f36759j = false;
    }

    public String toString() {
        return "VerticalRun " + this.f36803b.t();
    }
}
