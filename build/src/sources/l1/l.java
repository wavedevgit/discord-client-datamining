package l1;

import androidx.constraintlayout.core.widgets.ConstraintWidget;
import androidx.constraintlayout.core.widgets.d;
import l1.f;
import l1.p;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class l extends p {

    /* renamed from: k  reason: collision with root package name */
    private static int[] f35459k = new int[2];

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f35460a;

        static {
            int[] iArr = new int[p.b.values().length];
            f35460a = iArr;
            try {
                iArr[p.b.START.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f35460a[p.b.END.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                f35460a[p.b.CENTER.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
        }
    }

    public l(ConstraintWidget constraintWidget) {
        super(constraintWidget);
        this.f35493h.f35438e = f.a.LEFT;
        this.f35494i.f35438e = f.a.RIGHT;
        this.f35491f = 0;
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
        ConstraintWidget constraintWidget = this.f35487b;
        if (constraintWidget.f2395a) {
            this.f35490e.d(constraintWidget.W());
        }
        if (!this.f35490e.f35443j) {
            ConstraintWidget.b A = this.f35487b.A();
            this.f35489d = A;
            if (A != ConstraintWidget.b.MATCH_CONSTRAINT) {
                ConstraintWidget.b bVar = ConstraintWidget.b.MATCH_PARENT;
                if (A == bVar && (K2 = this.f35487b.K()) != null && (K2.A() == ConstraintWidget.b.FIXED || K2.A() == bVar)) {
                    int W = (K2.W() - this.f35487b.O.f()) - this.f35487b.Q.f();
                    b(this.f35493h, K2.f2403e.f35493h, this.f35487b.O.f());
                    b(this.f35494i, K2.f2403e.f35494i, -this.f35487b.Q.f());
                    this.f35490e.d(W);
                    return;
                } else if (this.f35489d == ConstraintWidget.b.FIXED) {
                    this.f35490e.d(this.f35487b.W());
                }
            }
        } else {
            ConstraintWidget.b bVar2 = this.f35489d;
            ConstraintWidget.b bVar3 = ConstraintWidget.b.MATCH_PARENT;
            if (bVar2 == bVar3 && (K = this.f35487b.K()) != null && (K.A() == ConstraintWidget.b.FIXED || K.A() == bVar3)) {
                b(this.f35493h, K.f2403e.f35493h, this.f35487b.O.f());
                b(this.f35494i, K.f2403e.f35494i, -this.f35487b.Q.f());
                return;
            }
        }
        g gVar = this.f35490e;
        if (gVar.f35443j) {
            ConstraintWidget constraintWidget2 = this.f35487b;
            if (constraintWidget2.f2395a) {
                androidx.constraintlayout.core.widgets.d[] dVarArr = constraintWidget2.W;
                androidx.constraintlayout.core.widgets.d dVar = dVarArr[0];
                androidx.constraintlayout.core.widgets.d dVar2 = dVar.f2497f;
                if (dVar2 != null && dVarArr[1].f2497f != null) {
                    if (constraintWidget2.i0()) {
                        this.f35493h.f35439f = this.f35487b.W[0].f();
                        this.f35494i.f35439f = -this.f35487b.W[1].f();
                        return;
                    }
                    f h10 = h(this.f35487b.W[0]);
                    if (h10 != null) {
                        b(this.f35493h, h10, this.f35487b.W[0].f());
                    }
                    f h11 = h(this.f35487b.W[1]);
                    if (h11 != null) {
                        b(this.f35494i, h11, -this.f35487b.W[1].f());
                    }
                    this.f35493h.f35435b = true;
                    this.f35494i.f35435b = true;
                    return;
                } else if (dVar2 != null) {
                    f h12 = h(dVar);
                    if (h12 != null) {
                        b(this.f35493h, h12, this.f35487b.W[0].f());
                        b(this.f35494i, this.f35493h, this.f35490e.f35440g);
                        return;
                    }
                    return;
                } else {
                    androidx.constraintlayout.core.widgets.d dVar3 = dVarArr[1];
                    if (dVar3.f2497f != null) {
                        f h13 = h(dVar3);
                        if (h13 != null) {
                            b(this.f35494i, h13, -this.f35487b.W[1].f());
                            b(this.f35493h, this.f35494i, -this.f35490e.f35440g);
                            return;
                        }
                        return;
                    } else if (!(constraintWidget2 instanceof k1.a) && constraintWidget2.K() != null && this.f35487b.o(d.a.CENTER).f2497f == null) {
                        b(this.f35493h, this.f35487b.K().f2403e.f35493h, this.f35487b.X());
                        b(this.f35494i, this.f35493h, this.f35490e.f35440g);
                        return;
                    } else {
                        return;
                    }
                }
            }
        }
        if (this.f35489d == ConstraintWidget.b.MATCH_CONSTRAINT) {
            ConstraintWidget constraintWidget3 = this.f35487b;
            int i10 = constraintWidget3.f2439w;
            if (i10 != 2) {
                if (i10 == 3) {
                    if (constraintWidget3.f2441x == 3) {
                        this.f35493h.f35434a = this;
                        this.f35494i.f35434a = this;
                        n nVar = constraintWidget3.f2405f;
                        nVar.f35493h.f35434a = this;
                        nVar.f35494i.f35434a = this;
                        gVar.f35434a = this;
                        if (constraintWidget3.k0()) {
                            this.f35490e.f35445l.add(this.f35487b.f2405f.f35490e);
                            this.f35487b.f2405f.f35490e.f35444k.add(this.f35490e);
                            n nVar2 = this.f35487b.f2405f;
                            nVar2.f35490e.f35434a = this;
                            this.f35490e.f35445l.add(nVar2.f35493h);
                            this.f35490e.f35445l.add(this.f35487b.f2405f.f35494i);
                            this.f35487b.f2405f.f35493h.f35444k.add(this.f35490e);
                            this.f35487b.f2405f.f35494i.f35444k.add(this.f35490e);
                        } else if (this.f35487b.i0()) {
                            this.f35487b.f2405f.f35490e.f35445l.add(this.f35490e);
                            this.f35490e.f35444k.add(this.f35487b.f2405f.f35490e);
                        } else {
                            this.f35487b.f2405f.f35490e.f35445l.add(this.f35490e);
                        }
                    } else {
                        g gVar2 = constraintWidget3.f2405f.f35490e;
                        gVar.f35445l.add(gVar2);
                        gVar2.f35444k.add(this.f35490e);
                        this.f35487b.f2405f.f35493h.f35444k.add(this.f35490e);
                        this.f35487b.f2405f.f35494i.f35444k.add(this.f35490e);
                        g gVar3 = this.f35490e;
                        gVar3.f35435b = true;
                        gVar3.f35444k.add(this.f35493h);
                        this.f35490e.f35444k.add(this.f35494i);
                        this.f35493h.f35445l.add(this.f35490e);
                        this.f35494i.f35445l.add(this.f35490e);
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
        }
        ConstraintWidget constraintWidget4 = this.f35487b;
        androidx.constraintlayout.core.widgets.d[] dVarArr2 = constraintWidget4.W;
        androidx.constraintlayout.core.widgets.d dVar4 = dVarArr2[0];
        androidx.constraintlayout.core.widgets.d dVar5 = dVar4.f2497f;
        if (dVar5 != null && dVarArr2[1].f2497f != null) {
            if (constraintWidget4.i0()) {
                this.f35493h.f35439f = this.f35487b.W[0].f();
                this.f35494i.f35439f = -this.f35487b.W[1].f();
                return;
            }
            f h14 = h(this.f35487b.W[0]);
            f h15 = h(this.f35487b.W[1]);
            if (h14 != null) {
                h14.b(this);
            }
            if (h15 != null) {
                h15.b(this);
            }
            this.f35495j = p.b.CENTER;
        } else if (dVar5 != null) {
            f h16 = h(dVar4);
            if (h16 != null) {
                b(this.f35493h, h16, this.f35487b.W[0].f());
                c(this.f35494i, this.f35493h, 1, this.f35490e);
            }
        } else {
            androidx.constraintlayout.core.widgets.d dVar6 = dVarArr2[1];
            if (dVar6.f2497f != null) {
                f h17 = h(dVar6);
                if (h17 != null) {
                    b(this.f35494i, h17, -this.f35487b.W[1].f());
                    c(this.f35493h, this.f35494i, -1, this.f35490e);
                }
            } else if (!(constraintWidget4 instanceof k1.a) && constraintWidget4.K() != null) {
                b(this.f35493h, this.f35487b.K().f2403e.f35493h, this.f35487b.X());
                c(this.f35494i, this.f35493h, 1, this.f35490e);
            }
        }
    }

    @Override // l1.p
    public void e() {
        f fVar = this.f35493h;
        if (fVar.f35443j) {
            this.f35487b.n1(fVar.f35440g);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // l1.p
    public void f() {
        this.f35488c = null;
        this.f35493h.c();
        this.f35494i.c();
        this.f35490e.c();
        this.f35492g = false;
    }

    @Override // l1.p
    boolean m() {
        if (this.f35489d != ConstraintWidget.b.MATCH_CONSTRAINT || this.f35487b.f2439w == 0) {
            return true;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void r() {
        this.f35492g = false;
        this.f35493h.c();
        this.f35493h.f35443j = false;
        this.f35494i.c();
        this.f35494i.f35443j = false;
        this.f35490e.f35443j = false;
    }

    public String toString() {
        return "HorizontalRun " + this.f35487b.t();
    }
}
