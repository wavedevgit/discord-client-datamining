package l1;

import androidx.constraintlayout.core.widgets.ConstraintWidget;
import l1.f;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class k extends p {
    /* JADX INFO: Access modifiers changed from: package-private */
    public k(ConstraintWidget constraintWidget) {
        super(constraintWidget);
    }

    private void q(f fVar) {
        this.f36319h.f36270k.add(fVar);
        fVar.f36271l.add(this.f36319h);
    }

    @Override // l1.p, l1.d
    public void a(d dVar) {
        androidx.constraintlayout.core.widgets.a aVar = (androidx.constraintlayout.core.widgets.a) this.f36313b;
        int w12 = aVar.w1();
        int i10 = 0;
        int i11 = -1;
        for (f fVar : this.f36319h.f36271l) {
            int i12 = fVar.f36266g;
            if (i11 == -1 || i12 < i11) {
                i11 = i12;
            }
            if (i10 < i12) {
                i10 = i12;
            }
        }
        if (w12 != 0 && w12 != 2) {
            this.f36319h.d(i10 + aVar.x1());
        } else {
            this.f36319h.d(i11 + aVar.x1());
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // l1.p
    public void d() {
        ConstraintWidget constraintWidget = this.f36313b;
        if (constraintWidget instanceof androidx.constraintlayout.core.widgets.a) {
            this.f36319h.f36261b = true;
            androidx.constraintlayout.core.widgets.a aVar = (androidx.constraintlayout.core.widgets.a) constraintWidget;
            int w12 = aVar.w1();
            boolean v12 = aVar.v1();
            int i10 = 0;
            if (w12 != 0) {
                if (w12 != 1) {
                    if (w12 != 2) {
                        if (w12 == 3) {
                            this.f36319h.f36264e = f.a.BOTTOM;
                            while (i10 < aVar.M0) {
                                ConstraintWidget constraintWidget2 = aVar.L0[i10];
                                if (v12 || constraintWidget2.V() != 8) {
                                    f fVar = constraintWidget2.f2376f.f36320i;
                                    fVar.f36270k.add(this.f36319h);
                                    this.f36319h.f36271l.add(fVar);
                                }
                                i10++;
                            }
                            q(this.f36313b.f2376f.f36319h);
                            q(this.f36313b.f2376f.f36320i);
                            return;
                        }
                        return;
                    }
                    this.f36319h.f36264e = f.a.TOP;
                    while (i10 < aVar.M0) {
                        ConstraintWidget constraintWidget3 = aVar.L0[i10];
                        if (v12 || constraintWidget3.V() != 8) {
                            f fVar2 = constraintWidget3.f2376f.f36319h;
                            fVar2.f36270k.add(this.f36319h);
                            this.f36319h.f36271l.add(fVar2);
                        }
                        i10++;
                    }
                    q(this.f36313b.f2376f.f36319h);
                    q(this.f36313b.f2376f.f36320i);
                    return;
                }
                this.f36319h.f36264e = f.a.RIGHT;
                while (i10 < aVar.M0) {
                    ConstraintWidget constraintWidget4 = aVar.L0[i10];
                    if (v12 || constraintWidget4.V() != 8) {
                        f fVar3 = constraintWidget4.f2374e.f36320i;
                        fVar3.f36270k.add(this.f36319h);
                        this.f36319h.f36271l.add(fVar3);
                    }
                    i10++;
                }
                q(this.f36313b.f2374e.f36319h);
                q(this.f36313b.f2374e.f36320i);
                return;
            }
            this.f36319h.f36264e = f.a.LEFT;
            while (i10 < aVar.M0) {
                ConstraintWidget constraintWidget5 = aVar.L0[i10];
                if (v12 || constraintWidget5.V() != 8) {
                    f fVar4 = constraintWidget5.f2374e.f36319h;
                    fVar4.f36270k.add(this.f36319h);
                    this.f36319h.f36271l.add(fVar4);
                }
                i10++;
            }
            q(this.f36313b.f2374e.f36319h);
            q(this.f36313b.f2374e.f36320i);
        }
    }

    @Override // l1.p
    public void e() {
        ConstraintWidget constraintWidget = this.f36313b;
        if (constraintWidget instanceof androidx.constraintlayout.core.widgets.a) {
            int w12 = ((androidx.constraintlayout.core.widgets.a) constraintWidget).w1();
            if (w12 != 0 && w12 != 1) {
                this.f36313b.o1(this.f36319h.f36266g);
            } else {
                this.f36313b.n1(this.f36319h.f36266g);
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // l1.p
    public void f() {
        this.f36314c = null;
        this.f36319h.c();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // l1.p
    public boolean m() {
        return false;
    }
}
