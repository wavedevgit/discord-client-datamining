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
        this.f35493h.f35444k.add(fVar);
        fVar.f35445l.add(this.f35493h);
    }

    @Override // l1.p, l1.d
    public void a(d dVar) {
        androidx.constraintlayout.core.widgets.a aVar = (androidx.constraintlayout.core.widgets.a) this.f35487b;
        int w12 = aVar.w1();
        int i10 = 0;
        int i11 = -1;
        for (f fVar : this.f35493h.f35445l) {
            int i12 = fVar.f35440g;
            if (i11 == -1 || i12 < i11) {
                i11 = i12;
            }
            if (i10 < i12) {
                i10 = i12;
            }
        }
        if (w12 != 0 && w12 != 2) {
            this.f35493h.d(i10 + aVar.x1());
        } else {
            this.f35493h.d(i11 + aVar.x1());
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // l1.p
    public void d() {
        ConstraintWidget constraintWidget = this.f35487b;
        if (constraintWidget instanceof androidx.constraintlayout.core.widgets.a) {
            this.f35493h.f35435b = true;
            androidx.constraintlayout.core.widgets.a aVar = (androidx.constraintlayout.core.widgets.a) constraintWidget;
            int w12 = aVar.w1();
            boolean v12 = aVar.v1();
            int i10 = 0;
            if (w12 != 0) {
                if (w12 != 1) {
                    if (w12 != 2) {
                        if (w12 == 3) {
                            this.f35493h.f35438e = f.a.BOTTOM;
                            while (i10 < aVar.M0) {
                                ConstraintWidget constraintWidget2 = aVar.L0[i10];
                                if (v12 || constraintWidget2.V() != 8) {
                                    f fVar = constraintWidget2.f2405f.f35494i;
                                    fVar.f35444k.add(this.f35493h);
                                    this.f35493h.f35445l.add(fVar);
                                }
                                i10++;
                            }
                            q(this.f35487b.f2405f.f35493h);
                            q(this.f35487b.f2405f.f35494i);
                            return;
                        }
                        return;
                    }
                    this.f35493h.f35438e = f.a.TOP;
                    while (i10 < aVar.M0) {
                        ConstraintWidget constraintWidget3 = aVar.L0[i10];
                        if (v12 || constraintWidget3.V() != 8) {
                            f fVar2 = constraintWidget3.f2405f.f35493h;
                            fVar2.f35444k.add(this.f35493h);
                            this.f35493h.f35445l.add(fVar2);
                        }
                        i10++;
                    }
                    q(this.f35487b.f2405f.f35493h);
                    q(this.f35487b.f2405f.f35494i);
                    return;
                }
                this.f35493h.f35438e = f.a.RIGHT;
                while (i10 < aVar.M0) {
                    ConstraintWidget constraintWidget4 = aVar.L0[i10];
                    if (v12 || constraintWidget4.V() != 8) {
                        f fVar3 = constraintWidget4.f2403e.f35494i;
                        fVar3.f35444k.add(this.f35493h);
                        this.f35493h.f35445l.add(fVar3);
                    }
                    i10++;
                }
                q(this.f35487b.f2403e.f35493h);
                q(this.f35487b.f2403e.f35494i);
                return;
            }
            this.f35493h.f35438e = f.a.LEFT;
            while (i10 < aVar.M0) {
                ConstraintWidget constraintWidget5 = aVar.L0[i10];
                if (v12 || constraintWidget5.V() != 8) {
                    f fVar4 = constraintWidget5.f2403e.f35493h;
                    fVar4.f35444k.add(this.f35493h);
                    this.f35493h.f35445l.add(fVar4);
                }
                i10++;
            }
            q(this.f35487b.f2403e.f35493h);
            q(this.f35487b.f2403e.f35494i);
        }
    }

    @Override // l1.p
    public void e() {
        ConstraintWidget constraintWidget = this.f35487b;
        if (constraintWidget instanceof androidx.constraintlayout.core.widgets.a) {
            int w12 = ((androidx.constraintlayout.core.widgets.a) constraintWidget).w1();
            if (w12 != 0 && w12 != 1) {
                this.f35487b.o1(this.f35493h.f35440g);
            } else {
                this.f35487b.n1(this.f35493h.f35440g);
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // l1.p
    public void f() {
        this.f35488c = null;
        this.f35493h.c();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // l1.p
    public boolean m() {
        return false;
    }
}
