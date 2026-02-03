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
        this.f36923h.f36874k.add(fVar);
        fVar.f36875l.add(this.f36923h);
    }

    @Override // l1.p, l1.d
    public void a(d dVar) {
        androidx.constraintlayout.core.widgets.a aVar = (androidx.constraintlayout.core.widgets.a) this.f36917b;
        int w12 = aVar.w1();
        int i10 = 0;
        int i11 = -1;
        for (f fVar : this.f36923h.f36875l) {
            int i12 = fVar.f36870g;
            if (i11 == -1 || i12 < i11) {
                i11 = i12;
            }
            if (i10 < i12) {
                i10 = i12;
            }
        }
        if (w12 != 0 && w12 != 2) {
            this.f36923h.d(i10 + aVar.x1());
        } else {
            this.f36923h.d(i11 + aVar.x1());
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // l1.p
    public void d() {
        ConstraintWidget constraintWidget = this.f36917b;
        if (constraintWidget instanceof androidx.constraintlayout.core.widgets.a) {
            this.f36923h.f36865b = true;
            androidx.constraintlayout.core.widgets.a aVar = (androidx.constraintlayout.core.widgets.a) constraintWidget;
            int w12 = aVar.w1();
            boolean v12 = aVar.v1();
            int i10 = 0;
            if (w12 != 0) {
                if (w12 != 1) {
                    if (w12 != 2) {
                        if (w12 == 3) {
                            this.f36923h.f36868e = f.a.BOTTOM;
                            while (i10 < aVar.M0) {
                                ConstraintWidget constraintWidget2 = aVar.L0[i10];
                                if (v12 || constraintWidget2.V() != 8) {
                                    f fVar = constraintWidget2.f2295f.f36924i;
                                    fVar.f36874k.add(this.f36923h);
                                    this.f36923h.f36875l.add(fVar);
                                }
                                i10++;
                            }
                            q(this.f36917b.f2295f.f36923h);
                            q(this.f36917b.f2295f.f36924i);
                            return;
                        }
                        return;
                    }
                    this.f36923h.f36868e = f.a.TOP;
                    while (i10 < aVar.M0) {
                        ConstraintWidget constraintWidget3 = aVar.L0[i10];
                        if (v12 || constraintWidget3.V() != 8) {
                            f fVar2 = constraintWidget3.f2295f.f36923h;
                            fVar2.f36874k.add(this.f36923h);
                            this.f36923h.f36875l.add(fVar2);
                        }
                        i10++;
                    }
                    q(this.f36917b.f2295f.f36923h);
                    q(this.f36917b.f2295f.f36924i);
                    return;
                }
                this.f36923h.f36868e = f.a.RIGHT;
                while (i10 < aVar.M0) {
                    ConstraintWidget constraintWidget4 = aVar.L0[i10];
                    if (v12 || constraintWidget4.V() != 8) {
                        f fVar3 = constraintWidget4.f2293e.f36924i;
                        fVar3.f36874k.add(this.f36923h);
                        this.f36923h.f36875l.add(fVar3);
                    }
                    i10++;
                }
                q(this.f36917b.f2293e.f36923h);
                q(this.f36917b.f2293e.f36924i);
                return;
            }
            this.f36923h.f36868e = f.a.LEFT;
            while (i10 < aVar.M0) {
                ConstraintWidget constraintWidget5 = aVar.L0[i10];
                if (v12 || constraintWidget5.V() != 8) {
                    f fVar4 = constraintWidget5.f2293e.f36923h;
                    fVar4.f36874k.add(this.f36923h);
                    this.f36923h.f36875l.add(fVar4);
                }
                i10++;
            }
            q(this.f36917b.f2293e.f36923h);
            q(this.f36917b.f2293e.f36924i);
        }
    }

    @Override // l1.p
    public void e() {
        ConstraintWidget constraintWidget = this.f36917b;
        if (constraintWidget instanceof androidx.constraintlayout.core.widgets.a) {
            int w12 = ((androidx.constraintlayout.core.widgets.a) constraintWidget).w1();
            if (w12 != 0 && w12 != 1) {
                this.f36917b.o1(this.f36923h.f36870g);
            } else {
                this.f36917b.n1(this.f36923h.f36870g);
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // l1.p
    public void f() {
        this.f36918c = null;
        this.f36923h.c();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // l1.p
    public boolean m() {
        return false;
    }
}
