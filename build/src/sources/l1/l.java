package l1;

import androidx.constraintlayout.core.widgets.ConstraintWidget;
import androidx.constraintlayout.core.widgets.d;
import l1.f;
import l1.p;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class l extends p {

    /* renamed from: k  reason: collision with root package name */
    private static int[] f36759k = new int[2];

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f36760a;

        static {
            int[] iArr = new int[p.b.values().length];
            f36760a = iArr;
            try {
                iArr[p.b.START.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f36760a[p.b.END.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                f36760a[p.b.CENTER.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
        }
    }

    public l(ConstraintWidget constraintWidget) {
        super(constraintWidget);
        this.f36793h.f36738e = f.a.LEFT;
        this.f36794i.f36738e = f.a.RIGHT;
        this.f36791f = 0;
    }

    private void q(int[] iArr, int i10, int i11, int i12, int i13, float f10, int i14) {
        int i15 = i11 - i10;
        int i16 = i13 - i12;
        if (i14 != -1) {
            if (i14 != 0) {
                if (i14 == 1) {
                    iArr[0] = i15;
                    iArr[1] = (int) ((i15 * f10) + 0.5f);
                    return;
                }
                return;
            }
            iArr[0] = (int) ((i16 * f10) + 0.5f);
            iArr[1] = i16;
            return;
        }
        int i17 = (int) ((i16 * f10) + 0.5f);
        int i18 = (int) ((i15 / f10) + 0.5f);
        if (i17 <= i15) {
            iArr[0] = i17;
            iArr[1] = i16;
        } else if (i18 <= i16) {
            iArr[0] = i15;
            iArr[1] = i18;
        }
    }

    /* JADX WARN: Code restructure failed: missing block: B:116:0x02a5, code lost:
        if (r7 != 1) goto L131;
     */
    @Override // l1.p, l1.d
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public void a(l1.d r14) {
        /*
            Method dump skipped, instructions count: 1067
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: l1.l.a(l1.d):void");
    }

    @Override // l1.p
    void d() {
        ConstraintWidget K;
        ConstraintWidget K2;
        ConstraintWidget constraintWidget = this.f36787b;
        if (constraintWidget.f2241a) {
            this.f36790e.d(constraintWidget.W());
        }
        if (!this.f36790e.f36743j) {
            ConstraintWidget.b A = this.f36787b.A();
            this.f36789d = A;
            if (A != ConstraintWidget.b.MATCH_CONSTRAINT) {
                ConstraintWidget.b bVar = ConstraintWidget.b.MATCH_PARENT;
                if (A == bVar && (K2 = this.f36787b.K()) != null && (K2.A() == ConstraintWidget.b.FIXED || K2.A() == bVar)) {
                    int W = (K2.W() - this.f36787b.O.f()) - this.f36787b.Q.f();
                    b(this.f36793h, K2.f2249e.f36793h, this.f36787b.O.f());
                    b(this.f36794i, K2.f2249e.f36794i, -this.f36787b.Q.f());
                    this.f36790e.d(W);
                    return;
                } else if (this.f36789d == ConstraintWidget.b.FIXED) {
                    this.f36790e.d(this.f36787b.W());
                }
            }
        } else {
            ConstraintWidget.b bVar2 = this.f36789d;
            ConstraintWidget.b bVar3 = ConstraintWidget.b.MATCH_PARENT;
            if (bVar2 == bVar3 && (K = this.f36787b.K()) != null && (K.A() == ConstraintWidget.b.FIXED || K.A() == bVar3)) {
                b(this.f36793h, K.f2249e.f36793h, this.f36787b.O.f());
                b(this.f36794i, K.f2249e.f36794i, -this.f36787b.Q.f());
                return;
            }
        }
        g gVar = this.f36790e;
        if (gVar.f36743j) {
            ConstraintWidget constraintWidget2 = this.f36787b;
            if (constraintWidget2.f2241a) {
                androidx.constraintlayout.core.widgets.d[] dVarArr = constraintWidget2.W;
                androidx.constraintlayout.core.widgets.d dVar = dVarArr[0];
                androidx.constraintlayout.core.widgets.d dVar2 = dVar.f2343f;
                if (dVar2 != null && dVarArr[1].f2343f != null) {
                    if (constraintWidget2.i0()) {
                        this.f36793h.f36739f = this.f36787b.W[0].f();
                        this.f36794i.f36739f = -this.f36787b.W[1].f();
                        return;
                    }
                    f h10 = h(this.f36787b.W[0]);
                    if (h10 != null) {
                        b(this.f36793h, h10, this.f36787b.W[0].f());
                    }
                    f h11 = h(this.f36787b.W[1]);
                    if (h11 != null) {
                        b(this.f36794i, h11, -this.f36787b.W[1].f());
                    }
                    this.f36793h.f36735b = true;
                    this.f36794i.f36735b = true;
                    return;
                } else if (dVar2 != null) {
                    f h12 = h(dVar);
                    if (h12 != null) {
                        b(this.f36793h, h12, this.f36787b.W[0].f());
                        b(this.f36794i, this.f36793h, this.f36790e.f36740g);
                        return;
                    }
                    return;
                } else {
                    androidx.constraintlayout.core.widgets.d dVar3 = dVarArr[1];
                    if (dVar3.f2343f != null) {
                        f h13 = h(dVar3);
                        if (h13 != null) {
                            b(this.f36794i, h13, -this.f36787b.W[1].f());
                            b(this.f36793h, this.f36794i, -this.f36790e.f36740g);
                            return;
                        }
                        return;
                    } else if (!(constraintWidget2 instanceof k1.a) && constraintWidget2.K() != null && this.f36787b.o(d.a.CENTER).f2343f == null) {
                        b(this.f36793h, this.f36787b.K().f2249e.f36793h, this.f36787b.X());
                        b(this.f36794i, this.f36793h, this.f36790e.f36740g);
                        return;
                    } else {
                        return;
                    }
                }
            }
        }
        if (this.f36789d == ConstraintWidget.b.MATCH_CONSTRAINT) {
            ConstraintWidget constraintWidget3 = this.f36787b;
            int i10 = constraintWidget3.f2285w;
            if (i10 != 2) {
                if (i10 == 3) {
                    if (constraintWidget3.f2287x == 3) {
                        this.f36793h.f36734a = this;
                        this.f36794i.f36734a = this;
                        n nVar = constraintWidget3.f2251f;
                        nVar.f36793h.f36734a = this;
                        nVar.f36794i.f36734a = this;
                        gVar.f36734a = this;
                        if (constraintWidget3.k0()) {
                            this.f36790e.f36745l.add(this.f36787b.f2251f.f36790e);
                            this.f36787b.f2251f.f36790e.f36744k.add(this.f36790e);
                            n nVar2 = this.f36787b.f2251f;
                            nVar2.f36790e.f36734a = this;
                            this.f36790e.f36745l.add(nVar2.f36793h);
                            this.f36790e.f36745l.add(this.f36787b.f2251f.f36794i);
                            this.f36787b.f2251f.f36793h.f36744k.add(this.f36790e);
                            this.f36787b.f2251f.f36794i.f36744k.add(this.f36790e);
                        } else if (this.f36787b.i0()) {
                            this.f36787b.f2251f.f36790e.f36745l.add(this.f36790e);
                            this.f36790e.f36744k.add(this.f36787b.f2251f.f36790e);
                        } else {
                            this.f36787b.f2251f.f36790e.f36745l.add(this.f36790e);
                        }
                    } else {
                        g gVar2 = constraintWidget3.f2251f.f36790e;
                        gVar.f36745l.add(gVar2);
                        gVar2.f36744k.add(this.f36790e);
                        this.f36787b.f2251f.f36793h.f36744k.add(this.f36790e);
                        this.f36787b.f2251f.f36794i.f36744k.add(this.f36790e);
                        g gVar3 = this.f36790e;
                        gVar3.f36735b = true;
                        gVar3.f36744k.add(this.f36793h);
                        this.f36790e.f36744k.add(this.f36794i);
                        this.f36793h.f36745l.add(this.f36790e);
                        this.f36794i.f36745l.add(this.f36790e);
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
        }
        ConstraintWidget constraintWidget4 = this.f36787b;
        androidx.constraintlayout.core.widgets.d[] dVarArr2 = constraintWidget4.W;
        androidx.constraintlayout.core.widgets.d dVar4 = dVarArr2[0];
        androidx.constraintlayout.core.widgets.d dVar5 = dVar4.f2343f;
        if (dVar5 != null && dVarArr2[1].f2343f != null) {
            if (constraintWidget4.i0()) {
                this.f36793h.f36739f = this.f36787b.W[0].f();
                this.f36794i.f36739f = -this.f36787b.W[1].f();
                return;
            }
            f h14 = h(this.f36787b.W[0]);
            f h15 = h(this.f36787b.W[1]);
            if (h14 != null) {
                h14.b(this);
            }
            if (h15 != null) {
                h15.b(this);
            }
            this.f36795j = p.b.CENTER;
        } else if (dVar5 != null) {
            f h16 = h(dVar4);
            if (h16 != null) {
                b(this.f36793h, h16, this.f36787b.W[0].f());
                c(this.f36794i, this.f36793h, 1, this.f36790e);
            }
        } else {
            androidx.constraintlayout.core.widgets.d dVar6 = dVarArr2[1];
            if (dVar6.f2343f != null) {
                f h17 = h(dVar6);
                if (h17 != null) {
                    b(this.f36794i, h17, -this.f36787b.W[1].f());
                    c(this.f36793h, this.f36794i, -1, this.f36790e);
                }
            } else if (!(constraintWidget4 instanceof k1.a) && constraintWidget4.K() != null) {
                b(this.f36793h, this.f36787b.K().f2249e.f36793h, this.f36787b.X());
                c(this.f36794i, this.f36793h, 1, this.f36790e);
            }
        }
    }

    @Override // l1.p
    public void e() {
        f fVar = this.f36793h;
        if (fVar.f36743j) {
            this.f36787b.n1(fVar.f36740g);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // l1.p
    public void f() {
        this.f36788c = null;
        this.f36793h.c();
        this.f36794i.c();
        this.f36790e.c();
        this.f36792g = false;
    }

    @Override // l1.p
    boolean m() {
        if (this.f36789d != ConstraintWidget.b.MATCH_CONSTRAINT || this.f36787b.f2285w == 0) {
            return true;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void r() {
        this.f36792g = false;
        this.f36793h.c();
        this.f36793h.f36743j = false;
        this.f36794i.c();
        this.f36794i.f36743j = false;
        this.f36790e.f36743j = false;
    }

    public String toString() {
        return "HorizontalRun " + this.f36787b.t();
    }
}
