package l1;

import androidx.constraintlayout.core.widgets.ConstraintWidget;
import androidx.constraintlayout.core.widgets.d;
import l1.f;
import l1.p;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class n extends p {

    /* renamed from: k  reason: collision with root package name */
    public f f35571k;

    /* renamed from: l  reason: collision with root package name */
    g f35572l;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f35573a;

        static {
            int[] iArr = new int[p.b.values().length];
            f35573a = iArr;
            try {
                iArr[p.b.START.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f35573a[p.b.END.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                f35573a[p.b.CENTER.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
        }
    }

    public n(ConstraintWidget constraintWidget) {
        super(constraintWidget);
        f fVar = new f(this);
        this.f35571k = fVar;
        this.f35572l = null;
        this.f35595h.f35540e = f.a.TOP;
        this.f35596i.f35540e = f.a.BOTTOM;
        fVar.f35540e = f.a.BASELINE;
        this.f35593f = 1;
    }

    @Override // l1.p, l1.d
    public void a(d dVar) {
        g gVar;
        float f10;
        float v10;
        float f11;
        int i10;
        ConstraintWidget constraintWidget;
        int i11 = a.f35573a[this.f35597j.ordinal()];
        if (i11 != 1) {
            if (i11 != 2) {
                if (i11 == 3) {
                    ConstraintWidget constraintWidget2 = this.f35589b;
                    n(dVar, constraintWidget2.P, constraintWidget2.R, 1);
                    return;
                }
            } else {
                o(dVar);
            }
        } else {
            p(dVar);
        }
        g gVar2 = this.f35592e;
        if (gVar2.f35538c && !gVar2.f35545j && this.f35591d == ConstraintWidget.b.MATCH_CONSTRAINT) {
            ConstraintWidget constraintWidget3 = this.f35589b;
            int i12 = constraintWidget3.f2438x;
            if (i12 != 2) {
                if (i12 == 3 && constraintWidget3.f2400e.f35592e.f35545j) {
                    int w10 = constraintWidget3.w();
                    if (w10 != -1) {
                        if (w10 != 0) {
                            if (w10 != 1) {
                                i10 = 0;
                                this.f35592e.d(i10);
                            } else {
                                ConstraintWidget constraintWidget4 = this.f35589b;
                                f10 = constraintWidget4.f2400e.f35592e.f35542g;
                                v10 = constraintWidget4.v();
                            }
                        } else {
                            f11 = constraintWidget.f2400e.f35592e.f35542g * this.f35589b.v();
                            i10 = (int) (f11 + 0.5f);
                            this.f35592e.d(i10);
                        }
                    } else {
                        ConstraintWidget constraintWidget5 = this.f35589b;
                        f10 = constraintWidget5.f2400e.f35592e.f35542g;
                        v10 = constraintWidget5.v();
                    }
                    f11 = f10 / v10;
                    i10 = (int) (f11 + 0.5f);
                    this.f35592e.d(i10);
                }
            } else {
                ConstraintWidget K = constraintWidget3.K();
                if (K != null) {
                    if (K.f2402f.f35592e.f35545j) {
                        this.f35592e.d((int) ((gVar.f35542g * this.f35589b.E) + 0.5f));
                    }
                }
            }
        }
        f fVar = this.f35595h;
        if (fVar.f35538c) {
            f fVar2 = this.f35596i;
            if (fVar2.f35538c) {
                if (!fVar.f35545j || !fVar2.f35545j || !this.f35592e.f35545j) {
                    if (!this.f35592e.f35545j && this.f35591d == ConstraintWidget.b.MATCH_CONSTRAINT) {
                        ConstraintWidget constraintWidget6 = this.f35589b;
                        if (constraintWidget6.f2436w == 0 && !constraintWidget6.k0()) {
                            int i13 = ((f) this.f35595h.f35547l.get(0)).f35542g;
                            f fVar3 = this.f35595h;
                            int i14 = i13 + fVar3.f35541f;
                            int i15 = ((f) this.f35596i.f35547l.get(0)).f35542g + this.f35596i.f35541f;
                            fVar3.d(i14);
                            this.f35596i.d(i15);
                            this.f35592e.d(i15 - i14);
                            return;
                        }
                    }
                    if (!this.f35592e.f35545j && this.f35591d == ConstraintWidget.b.MATCH_CONSTRAINT && this.f35588a == 1 && this.f35595h.f35547l.size() > 0 && this.f35596i.f35547l.size() > 0) {
                        int i16 = (((f) this.f35596i.f35547l.get(0)).f35542g + this.f35596i.f35541f) - (((f) this.f35595h.f35547l.get(0)).f35542g + this.f35595h.f35541f);
                        g gVar3 = this.f35592e;
                        int i17 = gVar3.f35557m;
                        if (i16 < i17) {
                            gVar3.d(i16);
                        } else {
                            gVar3.d(i17);
                        }
                    }
                    if (this.f35592e.f35545j && this.f35595h.f35547l.size() > 0 && this.f35596i.f35547l.size() > 0) {
                        f fVar4 = (f) this.f35595h.f35547l.get(0);
                        f fVar5 = (f) this.f35596i.f35547l.get(0);
                        int i18 = fVar4.f35542g + this.f35595h.f35541f;
                        int i19 = fVar5.f35542g + this.f35596i.f35541f;
                        float R = this.f35589b.R();
                        if (fVar4 == fVar5) {
                            i18 = fVar4.f35542g;
                            i19 = fVar5.f35542g;
                            R = 0.5f;
                        }
                        this.f35595h.d((int) (i18 + 0.5f + (((i19 - i18) - this.f35592e.f35542g) * R)));
                        this.f35596i.d(this.f35595h.f35542g + this.f35592e.f35542g);
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
        ConstraintWidget constraintWidget = this.f35589b;
        if (constraintWidget.f2392a) {
            this.f35592e.d(constraintWidget.x());
        }
        if (!this.f35592e.f35545j) {
            this.f35591d = this.f35589b.T();
            if (this.f35589b.Z()) {
                this.f35572l = new l1.a(this);
            }
            ConstraintWidget.b bVar = this.f35591d;
            if (bVar != ConstraintWidget.b.MATCH_CONSTRAINT) {
                if (bVar == ConstraintWidget.b.MATCH_PARENT && (K2 = this.f35589b.K()) != null && K2.T() == ConstraintWidget.b.FIXED) {
                    int x10 = (K2.x() - this.f35589b.P.f()) - this.f35589b.R.f();
                    b(this.f35595h, K2.f2402f.f35595h, this.f35589b.P.f());
                    b(this.f35596i, K2.f2402f.f35596i, -this.f35589b.R.f());
                    this.f35592e.d(x10);
                    return;
                } else if (this.f35591d == ConstraintWidget.b.FIXED) {
                    this.f35592e.d(this.f35589b.x());
                }
            }
        } else if (this.f35591d == ConstraintWidget.b.MATCH_PARENT && (K = this.f35589b.K()) != null && K.T() == ConstraintWidget.b.FIXED) {
            b(this.f35595h, K.f2402f.f35595h, this.f35589b.P.f());
            b(this.f35596i, K.f2402f.f35596i, -this.f35589b.R.f());
            return;
        }
        g gVar = this.f35592e;
        boolean z10 = gVar.f35545j;
        if (z10) {
            ConstraintWidget constraintWidget2 = this.f35589b;
            if (constraintWidget2.f2392a) {
                androidx.constraintlayout.core.widgets.d[] dVarArr = constraintWidget2.W;
                androidx.constraintlayout.core.widgets.d dVar = dVarArr[2];
                androidx.constraintlayout.core.widgets.d dVar2 = dVar.f2494f;
                if (dVar2 != null && dVarArr[3].f2494f != null) {
                    if (constraintWidget2.k0()) {
                        this.f35595h.f35541f = this.f35589b.W[2].f();
                        this.f35596i.f35541f = -this.f35589b.W[3].f();
                    } else {
                        f h10 = h(this.f35589b.W[2]);
                        if (h10 != null) {
                            b(this.f35595h, h10, this.f35589b.W[2].f());
                        }
                        f h11 = h(this.f35589b.W[3]);
                        if (h11 != null) {
                            b(this.f35596i, h11, -this.f35589b.W[3].f());
                        }
                        this.f35595h.f35537b = true;
                        this.f35596i.f35537b = true;
                    }
                    if (this.f35589b.Z()) {
                        b(this.f35571k, this.f35595h, this.f35589b.p());
                        return;
                    }
                    return;
                } else if (dVar2 != null) {
                    f h12 = h(dVar);
                    if (h12 != null) {
                        b(this.f35595h, h12, this.f35589b.W[2].f());
                        b(this.f35596i, this.f35595h, this.f35592e.f35542g);
                        if (this.f35589b.Z()) {
                            b(this.f35571k, this.f35595h, this.f35589b.p());
                            return;
                        }
                        return;
                    }
                    return;
                } else {
                    androidx.constraintlayout.core.widgets.d dVar3 = dVarArr[3];
                    if (dVar3.f2494f != null) {
                        f h13 = h(dVar3);
                        if (h13 != null) {
                            b(this.f35596i, h13, -this.f35589b.W[3].f());
                            b(this.f35595h, this.f35596i, -this.f35592e.f35542g);
                        }
                        if (this.f35589b.Z()) {
                            b(this.f35571k, this.f35595h, this.f35589b.p());
                            return;
                        }
                        return;
                    }
                    androidx.constraintlayout.core.widgets.d dVar4 = dVarArr[4];
                    if (dVar4.f2494f != null) {
                        f h14 = h(dVar4);
                        if (h14 != null) {
                            b(this.f35571k, h14, 0);
                            b(this.f35595h, this.f35571k, -this.f35589b.p());
                            b(this.f35596i, this.f35595h, this.f35592e.f35542g);
                            return;
                        }
                        return;
                    } else if (!(constraintWidget2 instanceof k1.a) && constraintWidget2.K() != null && this.f35589b.o(d.a.CENTER).f2494f == null) {
                        b(this.f35595h, this.f35589b.K().f2402f.f35595h, this.f35589b.Y());
                        b(this.f35596i, this.f35595h, this.f35592e.f35542g);
                        if (this.f35589b.Z()) {
                            b(this.f35571k, this.f35595h, this.f35589b.p());
                            return;
                        }
                        return;
                    } else {
                        return;
                    }
                }
            }
        }
        if (!z10 && this.f35591d == ConstraintWidget.b.MATCH_CONSTRAINT) {
            ConstraintWidget constraintWidget3 = this.f35589b;
            int i10 = constraintWidget3.f2438x;
            if (i10 != 2) {
                if (i10 == 3 && !constraintWidget3.k0()) {
                    ConstraintWidget constraintWidget4 = this.f35589b;
                    if (constraintWidget4.f2436w != 3) {
                        g gVar2 = constraintWidget4.f2400e.f35592e;
                        this.f35592e.f35547l.add(gVar2);
                        gVar2.f35546k.add(this.f35592e);
                        g gVar3 = this.f35592e;
                        gVar3.f35537b = true;
                        gVar3.f35546k.add(this.f35595h);
                        this.f35592e.f35546k.add(this.f35596i);
                    }
                }
            } else {
                ConstraintWidget K3 = constraintWidget3.K();
                if (K3 != null) {
                    g gVar4 = K3.f2402f.f35592e;
                    this.f35592e.f35547l.add(gVar4);
                    gVar4.f35546k.add(this.f35592e);
                    g gVar5 = this.f35592e;
                    gVar5.f35537b = true;
                    gVar5.f35546k.add(this.f35595h);
                    this.f35592e.f35546k.add(this.f35596i);
                }
            }
        } else {
            gVar.b(this);
        }
        ConstraintWidget constraintWidget5 = this.f35589b;
        androidx.constraintlayout.core.widgets.d[] dVarArr2 = constraintWidget5.W;
        androidx.constraintlayout.core.widgets.d dVar5 = dVarArr2[2];
        androidx.constraintlayout.core.widgets.d dVar6 = dVar5.f2494f;
        if (dVar6 != null && dVarArr2[3].f2494f != null) {
            if (constraintWidget5.k0()) {
                this.f35595h.f35541f = this.f35589b.W[2].f();
                this.f35596i.f35541f = -this.f35589b.W[3].f();
            } else {
                f h15 = h(this.f35589b.W[2]);
                f h16 = h(this.f35589b.W[3]);
                if (h15 != null) {
                    h15.b(this);
                }
                if (h16 != null) {
                    h16.b(this);
                }
                this.f35597j = p.b.CENTER;
            }
            if (this.f35589b.Z()) {
                c(this.f35571k, this.f35595h, 1, this.f35572l);
            }
        } else if (dVar6 != null) {
            f h17 = h(dVar5);
            if (h17 != null) {
                b(this.f35595h, h17, this.f35589b.W[2].f());
                c(this.f35596i, this.f35595h, 1, this.f35592e);
                if (this.f35589b.Z()) {
                    c(this.f35571k, this.f35595h, 1, this.f35572l);
                }
                ConstraintWidget.b bVar2 = this.f35591d;
                ConstraintWidget.b bVar3 = ConstraintWidget.b.MATCH_CONSTRAINT;
                if (bVar2 == bVar3 && this.f35589b.v() > 0.0f) {
                    l lVar = this.f35589b.f2400e;
                    if (lVar.f35591d == bVar3) {
                        lVar.f35592e.f35546k.add(this.f35592e);
                        this.f35592e.f35547l.add(this.f35589b.f2400e.f35592e);
                        this.f35592e.f35536a = this;
                    }
                }
            }
        } else {
            androidx.constraintlayout.core.widgets.d dVar7 = dVarArr2[3];
            if (dVar7.f2494f != null) {
                f h18 = h(dVar7);
                if (h18 != null) {
                    b(this.f35596i, h18, -this.f35589b.W[3].f());
                    c(this.f35595h, this.f35596i, -1, this.f35592e);
                    if (this.f35589b.Z()) {
                        c(this.f35571k, this.f35595h, 1, this.f35572l);
                    }
                }
            } else {
                androidx.constraintlayout.core.widgets.d dVar8 = dVarArr2[4];
                if (dVar8.f2494f != null) {
                    f h19 = h(dVar8);
                    if (h19 != null) {
                        b(this.f35571k, h19, 0);
                        c(this.f35595h, this.f35571k, -1, this.f35572l);
                        c(this.f35596i, this.f35595h, 1, this.f35592e);
                    }
                } else if (!(constraintWidget5 instanceof k1.a) && constraintWidget5.K() != null) {
                    b(this.f35595h, this.f35589b.K().f2402f.f35595h, this.f35589b.Y());
                    c(this.f35596i, this.f35595h, 1, this.f35592e);
                    if (this.f35589b.Z()) {
                        c(this.f35571k, this.f35595h, 1, this.f35572l);
                    }
                    ConstraintWidget.b bVar4 = this.f35591d;
                    ConstraintWidget.b bVar5 = ConstraintWidget.b.MATCH_CONSTRAINT;
                    if (bVar4 == bVar5 && this.f35589b.v() > 0.0f) {
                        l lVar2 = this.f35589b.f2400e;
                        if (lVar2.f35591d == bVar5) {
                            lVar2.f35592e.f35546k.add(this.f35592e);
                            this.f35592e.f35547l.add(this.f35589b.f2400e.f35592e);
                            this.f35592e.f35536a = this;
                        }
                    }
                }
            }
        }
        if (this.f35592e.f35547l.size() == 0) {
            this.f35592e.f35538c = true;
        }
    }

    @Override // l1.p
    public void e() {
        f fVar = this.f35595h;
        if (fVar.f35545j) {
            this.f35589b.o1(fVar.f35542g);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // l1.p
    public void f() {
        this.f35590c = null;
        this.f35595h.c();
        this.f35596i.c();
        this.f35571k.c();
        this.f35592e.c();
        this.f35594g = false;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // l1.p
    public boolean m() {
        if (this.f35591d != ConstraintWidget.b.MATCH_CONSTRAINT || this.f35589b.f2438x == 0) {
            return true;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void q() {
        this.f35594g = false;
        this.f35595h.c();
        this.f35595h.f35545j = false;
        this.f35596i.c();
        this.f35596i.f35545j = false;
        this.f35571k.c();
        this.f35571k.f35545j = false;
        this.f35592e.f35545j = false;
    }

    public String toString() {
        return "VerticalRun " + this.f35589b.t();
    }
}
