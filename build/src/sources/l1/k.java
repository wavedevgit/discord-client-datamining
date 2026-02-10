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
        this.f35595h.f35546k.add(fVar);
        fVar.f35547l.add(this.f35595h);
    }

    @Override // l1.p, l1.d
    public void a(d dVar) {
        androidx.constraintlayout.core.widgets.a aVar = (androidx.constraintlayout.core.widgets.a) this.f35589b;
        int w12 = aVar.w1();
        int i10 = 0;
        int i11 = -1;
        for (f fVar : this.f35595h.f35547l) {
            int i12 = fVar.f35542g;
            if (i11 == -1 || i12 < i11) {
                i11 = i12;
            }
            if (i10 < i12) {
                i10 = i12;
            }
        }
        if (w12 != 0 && w12 != 2) {
            this.f35595h.d(i10 + aVar.x1());
        } else {
            this.f35595h.d(i11 + aVar.x1());
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // l1.p
    public void d() {
        ConstraintWidget constraintWidget = this.f35589b;
        if (constraintWidget instanceof androidx.constraintlayout.core.widgets.a) {
            this.f35595h.f35537b = true;
            androidx.constraintlayout.core.widgets.a aVar = (androidx.constraintlayout.core.widgets.a) constraintWidget;
            int w12 = aVar.w1();
            boolean v12 = aVar.v1();
            int i10 = 0;
            if (w12 != 0) {
                if (w12 != 1) {
                    if (w12 != 2) {
                        if (w12 == 3) {
                            this.f35595h.f35540e = f.a.BOTTOM;
                            while (i10 < aVar.M0) {
                                ConstraintWidget constraintWidget2 = aVar.L0[i10];
                                if (v12 || constraintWidget2.V() != 8) {
                                    f fVar = constraintWidget2.f2402f.f35596i;
                                    fVar.f35546k.add(this.f35595h);
                                    this.f35595h.f35547l.add(fVar);
                                }
                                i10++;
                            }
                            q(this.f35589b.f2402f.f35595h);
                            q(this.f35589b.f2402f.f35596i);
                            return;
                        }
                        return;
                    }
                    this.f35595h.f35540e = f.a.TOP;
                    while (i10 < aVar.M0) {
                        ConstraintWidget constraintWidget3 = aVar.L0[i10];
                        if (v12 || constraintWidget3.V() != 8) {
                            f fVar2 = constraintWidget3.f2402f.f35595h;
                            fVar2.f35546k.add(this.f35595h);
                            this.f35595h.f35547l.add(fVar2);
                        }
                        i10++;
                    }
                    q(this.f35589b.f2402f.f35595h);
                    q(this.f35589b.f2402f.f35596i);
                    return;
                }
                this.f35595h.f35540e = f.a.RIGHT;
                while (i10 < aVar.M0) {
                    ConstraintWidget constraintWidget4 = aVar.L0[i10];
                    if (v12 || constraintWidget4.V() != 8) {
                        f fVar3 = constraintWidget4.f2400e.f35596i;
                        fVar3.f35546k.add(this.f35595h);
                        this.f35595h.f35547l.add(fVar3);
                    }
                    i10++;
                }
                q(this.f35589b.f2400e.f35595h);
                q(this.f35589b.f2400e.f35596i);
                return;
            }
            this.f35595h.f35540e = f.a.LEFT;
            while (i10 < aVar.M0) {
                ConstraintWidget constraintWidget5 = aVar.L0[i10];
                if (v12 || constraintWidget5.V() != 8) {
                    f fVar4 = constraintWidget5.f2400e.f35595h;
                    fVar4.f35546k.add(this.f35595h);
                    this.f35595h.f35547l.add(fVar4);
                }
                i10++;
            }
            q(this.f35589b.f2400e.f35595h);
            q(this.f35589b.f2400e.f35596i);
        }
    }

    @Override // l1.p
    public void e() {
        ConstraintWidget constraintWidget = this.f35589b;
        if (constraintWidget instanceof androidx.constraintlayout.core.widgets.a) {
            int w12 = ((androidx.constraintlayout.core.widgets.a) constraintWidget).w1();
            if (w12 != 0 && w12 != 1) {
                this.f35589b.o1(this.f35595h.f35542g);
            } else {
                this.f35589b.n1(this.f35595h.f35542g);
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // l1.p
    public void f() {
        this.f35590c = null;
        this.f35595h.c();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // l1.p
    public boolean m() {
        return false;
    }
}
