package l1;

import androidx.constraintlayout.core.widgets.ConstraintWidget;
import androidx.constraintlayout.core.widgets.d;
import l1.f;
import l1.p;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class n extends p {

    /* renamed from: k  reason: collision with root package name */
    public f f35469k;

    /* renamed from: l  reason: collision with root package name */
    g f35470l;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f35471a;

        static {
            int[] iArr = new int[p.b.values().length];
            f35471a = iArr;
            try {
                iArr[p.b.START.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f35471a[p.b.END.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                f35471a[p.b.CENTER.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
        }
    }

    public n(ConstraintWidget constraintWidget) {
        super(constraintWidget);
        f fVar = new f(this);
        this.f35469k = fVar;
        this.f35470l = null;
        this.f35493h.f35438e = f.a.TOP;
        this.f35494i.f35438e = f.a.BOTTOM;
        fVar.f35438e = f.a.BASELINE;
        this.f35491f = 1;
    }

    @Override // l1.p, l1.d
    public void a(d dVar) {
        g gVar;
        float f10;
        float v10;
        float f11;
        int i10;
        ConstraintWidget constraintWidget;
        int i11 = a.f35471a[this.f35495j.ordinal()];
        if (i11 != 1) {
            if (i11 != 2) {
                if (i11 == 3) {
                    ConstraintWidget constraintWidget2 = this.f35487b;
                    n(dVar, constraintWidget2.P, constraintWidget2.R, 1);
                    return;
                }
            } else {
                o(dVar);
            }
        } else {
            p(dVar);
        }
        g gVar2 = this.f35490e;
        if (gVar2.f35436c && !gVar2.f35443j && this.f35489d == ConstraintWidget.b.MATCH_CONSTRAINT) {
            ConstraintWidget constraintWidget3 = this.f35487b;
            int i12 = constraintWidget3.f2441x;
            if (i12 != 2) {
                if (i12 == 3 && constraintWidget3.f2403e.f35490e.f35443j) {
                    int w10 = constraintWidget3.w();
                    if (w10 != -1) {
                        if (w10 != 0) {
                            if (w10 != 1) {
                                i10 = 0;
                                this.f35490e.d(i10);
                            } else {
                                ConstraintWidget constraintWidget4 = this.f35487b;
                                f10 = constraintWidget4.f2403e.f35490e.f35440g;
                                v10 = constraintWidget4.v();
                            }
                        } else {
                            f11 = constraintWidget.f2403e.f35490e.f35440g * this.f35487b.v();
                            i10 = (int) (f11 + 0.5f);
                            this.f35490e.d(i10);
                        }
                    } else {
                        ConstraintWidget constraintWidget5 = this.f35487b;
                        f10 = constraintWidget5.f2403e.f35490e.f35440g;
                        v10 = constraintWidget5.v();
                    }
                    f11 = f10 / v10;
                    i10 = (int) (f11 + 0.5f);
                    this.f35490e.d(i10);
                }
            } else {
                ConstraintWidget K = constraintWidget3.K();
                if (K != null) {
                    if (K.f2405f.f35490e.f35443j) {
                        this.f35490e.d((int) ((gVar.f35440g * this.f35487b.E) + 0.5f));
                    }
                }
            }
        }
        f fVar = this.f35493h;
        if (fVar.f35436c) {
            f fVar2 = this.f35494i;
            if (fVar2.f35436c) {
                if (!fVar.f35443j || !fVar2.f35443j || !this.f35490e.f35443j) {
                    if (!this.f35490e.f35443j && this.f35489d == ConstraintWidget.b.MATCH_CONSTRAINT) {
                        ConstraintWidget constraintWidget6 = this.f35487b;
                        if (constraintWidget6.f2439w == 0 && !constraintWidget6.k0()) {
                            int i13 = ((f) this.f35493h.f35445l.get(0)).f35440g;
                            f fVar3 = this.f35493h;
                            int i14 = i13 + fVar3.f35439f;
                            int i15 = ((f) this.f35494i.f35445l.get(0)).f35440g + this.f35494i.f35439f;
                            fVar3.d(i14);
                            this.f35494i.d(i15);
                            this.f35490e.d(i15 - i14);
                            return;
                        }
                    }
                    if (!this.f35490e.f35443j && this.f35489d == ConstraintWidget.b.MATCH_CONSTRAINT && this.f35486a == 1 && this.f35493h.f35445l.size() > 0 && this.f35494i.f35445l.size() > 0) {
                        int i16 = (((f) this.f35494i.f35445l.get(0)).f35440g + this.f35494i.f35439f) - (((f) this.f35493h.f35445l.get(0)).f35440g + this.f35493h.f35439f);
                        g gVar3 = this.f35490e;
                        int i17 = gVar3.f35455m;
                        if (i16 < i17) {
                            gVar3.d(i16);
                        } else {
                            gVar3.d(i17);
                        }
                    }
                    if (this.f35490e.f35443j && this.f35493h.f35445l.size() > 0 && this.f35494i.f35445l.size() > 0) {
                        f fVar4 = (f) this.f35493h.f35445l.get(0);
                        f fVar5 = (f) this.f35494i.f35445l.get(0);
                        int i18 = fVar4.f35440g + this.f35493h.f35439f;
                        int i19 = fVar5.f35440g + this.f35494i.f35439f;
                        float R = this.f35487b.R();
                        if (fVar4 == fVar5) {
                            i18 = fVar4.f35440g;
                            i19 = fVar5.f35440g;
                            R = 0.5f;
                        }
                        this.f35493h.d((int) (i18 + 0.5f + (((i19 - i18) - this.f35490e.f35440g) * R)));
                        this.f35494i.d(this.f35493h.f35440g + this.f35490e.f35440g);
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
        ConstraintWidget constraintWidget = this.f35487b;
        if (constraintWidget.f2395a) {
            this.f35490e.d(constraintWidget.x());
        }
        if (!this.f35490e.f35443j) {
            this.f35489d = this.f35487b.T();
            if (this.f35487b.Z()) {
                this.f35470l = new l1.a(this);
            }
            ConstraintWidget.b bVar = this.f35489d;
            if (bVar != ConstraintWidget.b.MATCH_CONSTRAINT) {
                if (bVar == ConstraintWidget.b.MATCH_PARENT && (K2 = this.f35487b.K()) != null && K2.T() == ConstraintWidget.b.FIXED) {
                    int x10 = (K2.x() - this.f35487b.P.f()) - this.f35487b.R.f();
                    b(this.f35493h, K2.f2405f.f35493h, this.f35487b.P.f());
                    b(this.f35494i, K2.f2405f.f35494i, -this.f35487b.R.f());
                    this.f35490e.d(x10);
                    return;
                } else if (this.f35489d == ConstraintWidget.b.FIXED) {
                    this.f35490e.d(this.f35487b.x());
                }
            }
        } else if (this.f35489d == ConstraintWidget.b.MATCH_PARENT && (K = this.f35487b.K()) != null && K.T() == ConstraintWidget.b.FIXED) {
            b(this.f35493h, K.f2405f.f35493h, this.f35487b.P.f());
            b(this.f35494i, K.f2405f.f35494i, -this.f35487b.R.f());
            return;
        }
        g gVar = this.f35490e;
        boolean z10 = gVar.f35443j;
        if (z10) {
            ConstraintWidget constraintWidget2 = this.f35487b;
            if (constraintWidget2.f2395a) {
                androidx.constraintlayout.core.widgets.d[] dVarArr = constraintWidget2.W;
                androidx.constraintlayout.core.widgets.d dVar = dVarArr[2];
                androidx.constraintlayout.core.widgets.d dVar2 = dVar.f2497f;
                if (dVar2 != null && dVarArr[3].f2497f != null) {
                    if (constraintWidget2.k0()) {
                        this.f35493h.f35439f = this.f35487b.W[2].f();
                        this.f35494i.f35439f = -this.f35487b.W[3].f();
                    } else {
                        f h10 = h(this.f35487b.W[2]);
                        if (h10 != null) {
                            b(this.f35493h, h10, this.f35487b.W[2].f());
                        }
                        f h11 = h(this.f35487b.W[3]);
                        if (h11 != null) {
                            b(this.f35494i, h11, -this.f35487b.W[3].f());
                        }
                        this.f35493h.f35435b = true;
                        this.f35494i.f35435b = true;
                    }
                    if (this.f35487b.Z()) {
                        b(this.f35469k, this.f35493h, this.f35487b.p());
                        return;
                    }
                    return;
                } else if (dVar2 != null) {
                    f h12 = h(dVar);
                    if (h12 != null) {
                        b(this.f35493h, h12, this.f35487b.W[2].f());
                        b(this.f35494i, this.f35493h, this.f35490e.f35440g);
                        if (this.f35487b.Z()) {
                            b(this.f35469k, this.f35493h, this.f35487b.p());
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
                            b(this.f35494i, h13, -this.f35487b.W[3].f());
                            b(this.f35493h, this.f35494i, -this.f35490e.f35440g);
                        }
                        if (this.f35487b.Z()) {
                            b(this.f35469k, this.f35493h, this.f35487b.p());
                            return;
                        }
                        return;
                    }
                    androidx.constraintlayout.core.widgets.d dVar4 = dVarArr[4];
                    if (dVar4.f2497f != null) {
                        f h14 = h(dVar4);
                        if (h14 != null) {
                            b(this.f35469k, h14, 0);
                            b(this.f35493h, this.f35469k, -this.f35487b.p());
                            b(this.f35494i, this.f35493h, this.f35490e.f35440g);
                            return;
                        }
                        return;
                    } else if (!(constraintWidget2 instanceof k1.a) && constraintWidget2.K() != null && this.f35487b.o(d.a.CENTER).f2497f == null) {
                        b(this.f35493h, this.f35487b.K().f2405f.f35493h, this.f35487b.Y());
                        b(this.f35494i, this.f35493h, this.f35490e.f35440g);
                        if (this.f35487b.Z()) {
                            b(this.f35469k, this.f35493h, this.f35487b.p());
                            return;
                        }
                        return;
                    } else {
                        return;
                    }
                }
            }
        }
        if (!z10 && this.f35489d == ConstraintWidget.b.MATCH_CONSTRAINT) {
            ConstraintWidget constraintWidget3 = this.f35487b;
            int i10 = constraintWidget3.f2441x;
            if (i10 != 2) {
                if (i10 == 3 && !constraintWidget3.k0()) {
                    ConstraintWidget constraintWidget4 = this.f35487b;
                    if (constraintWidget4.f2439w != 3) {
                        g gVar2 = constraintWidget4.f2403e.f35490e;
                        this.f35490e.f35445l.add(gVar2);
                        gVar2.f35444k.add(this.f35490e);
                        g gVar3 = this.f35490e;
                        gVar3.f35435b = true;
                        gVar3.f35444k.add(this.f35493h);
                        this.f35490e.f35444k.add(this.f35494i);
                    }
                }
            } else {
                ConstraintWidget K3 = constraintWidget3.K();
                if (K3 != null) {
                    g gVar4 = K3.f2405f.f35490e;
                    this.f35490e.f35445l.add(gVar4);
                    gVar4.f35444k.add(this.f35490e);
                    g gVar5 = this.f35490e;
                    gVar5.f35435b = true;
                    gVar5.f35444k.add(this.f35493h);
                    this.f35490e.f35444k.add(this.f35494i);
                }
            }
        } else {
            gVar.b(this);
        }
        ConstraintWidget constraintWidget5 = this.f35487b;
        androidx.constraintlayout.core.widgets.d[] dVarArr2 = constraintWidget5.W;
        androidx.constraintlayout.core.widgets.d dVar5 = dVarArr2[2];
        androidx.constraintlayout.core.widgets.d dVar6 = dVar5.f2497f;
        if (dVar6 != null && dVarArr2[3].f2497f != null) {
            if (constraintWidget5.k0()) {
                this.f35493h.f35439f = this.f35487b.W[2].f();
                this.f35494i.f35439f = -this.f35487b.W[3].f();
            } else {
                f h15 = h(this.f35487b.W[2]);
                f h16 = h(this.f35487b.W[3]);
                if (h15 != null) {
                    h15.b(this);
                }
                if (h16 != null) {
                    h16.b(this);
                }
                this.f35495j = p.b.CENTER;
            }
            if (this.f35487b.Z()) {
                c(this.f35469k, this.f35493h, 1, this.f35470l);
            }
        } else if (dVar6 != null) {
            f h17 = h(dVar5);
            if (h17 != null) {
                b(this.f35493h, h17, this.f35487b.W[2].f());
                c(this.f35494i, this.f35493h, 1, this.f35490e);
                if (this.f35487b.Z()) {
                    c(this.f35469k, this.f35493h, 1, this.f35470l);
                }
                ConstraintWidget.b bVar2 = this.f35489d;
                ConstraintWidget.b bVar3 = ConstraintWidget.b.MATCH_CONSTRAINT;
                if (bVar2 == bVar3 && this.f35487b.v() > 0.0f) {
                    l lVar = this.f35487b.f2403e;
                    if (lVar.f35489d == bVar3) {
                        lVar.f35490e.f35444k.add(this.f35490e);
                        this.f35490e.f35445l.add(this.f35487b.f2403e.f35490e);
                        this.f35490e.f35434a = this;
                    }
                }
            }
        } else {
            androidx.constraintlayout.core.widgets.d dVar7 = dVarArr2[3];
            if (dVar7.f2497f != null) {
                f h18 = h(dVar7);
                if (h18 != null) {
                    b(this.f35494i, h18, -this.f35487b.W[3].f());
                    c(this.f35493h, this.f35494i, -1, this.f35490e);
                    if (this.f35487b.Z()) {
                        c(this.f35469k, this.f35493h, 1, this.f35470l);
                    }
                }
            } else {
                androidx.constraintlayout.core.widgets.d dVar8 = dVarArr2[4];
                if (dVar8.f2497f != null) {
                    f h19 = h(dVar8);
                    if (h19 != null) {
                        b(this.f35469k, h19, 0);
                        c(this.f35493h, this.f35469k, -1, this.f35470l);
                        c(this.f35494i, this.f35493h, 1, this.f35490e);
                    }
                } else if (!(constraintWidget5 instanceof k1.a) && constraintWidget5.K() != null) {
                    b(this.f35493h, this.f35487b.K().f2405f.f35493h, this.f35487b.Y());
                    c(this.f35494i, this.f35493h, 1, this.f35490e);
                    if (this.f35487b.Z()) {
                        c(this.f35469k, this.f35493h, 1, this.f35470l);
                    }
                    ConstraintWidget.b bVar4 = this.f35489d;
                    ConstraintWidget.b bVar5 = ConstraintWidget.b.MATCH_CONSTRAINT;
                    if (bVar4 == bVar5 && this.f35487b.v() > 0.0f) {
                        l lVar2 = this.f35487b.f2403e;
                        if (lVar2.f35489d == bVar5) {
                            lVar2.f35490e.f35444k.add(this.f35490e);
                            this.f35490e.f35445l.add(this.f35487b.f2403e.f35490e);
                            this.f35490e.f35434a = this;
                        }
                    }
                }
            }
        }
        if (this.f35490e.f35445l.size() == 0) {
            this.f35490e.f35436c = true;
        }
    }

    @Override // l1.p
    public void e() {
        f fVar = this.f35493h;
        if (fVar.f35443j) {
            this.f35487b.o1(fVar.f35440g);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // l1.p
    public void f() {
        this.f35488c = null;
        this.f35493h.c();
        this.f35494i.c();
        this.f35469k.c();
        this.f35490e.c();
        this.f35492g = false;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // l1.p
    public boolean m() {
        if (this.f35489d != ConstraintWidget.b.MATCH_CONSTRAINT || this.f35487b.f2441x == 0) {
            return true;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void q() {
        this.f35492g = false;
        this.f35493h.c();
        this.f35493h.f35443j = false;
        this.f35494i.c();
        this.f35494i.f35443j = false;
        this.f35469k.c();
        this.f35469k.f35443j = false;
        this.f35490e.f35443j = false;
    }

    public String toString() {
        return "VerticalRun " + this.f35487b.t();
    }
}
