package l1;

import androidx.constraintlayout.core.widgets.ConstraintWidget;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class j extends p {
    /* JADX INFO: Access modifiers changed from: package-private */
    public j(ConstraintWidget constraintWidget) {
        super(constraintWidget);
        constraintWidget.f2374e.f();
        constraintWidget.f2376f.f();
        this.f36317f = ((androidx.constraintlayout.core.widgets.f) constraintWidget).t1();
    }

    private void q(f fVar) {
        this.f36319h.f36270k.add(fVar);
        fVar.f36271l.add(this.f36319h);
    }

    @Override // l1.p, l1.d
    public void a(d dVar) {
        f fVar = this.f36319h;
        if (!fVar.f36262c || fVar.f36269j) {
            return;
        }
        this.f36319h.d((int) ((((f) fVar.f36271l.get(0)).f36266g * ((androidx.constraintlayout.core.widgets.f) this.f36313b).w1()) + 0.5f));
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // l1.p
    public void d() {
        androidx.constraintlayout.core.widgets.f fVar = (androidx.constraintlayout.core.widgets.f) this.f36313b;
        int u12 = fVar.u1();
        int v12 = fVar.v1();
        fVar.w1();
        if (fVar.t1() == 1) {
            if (u12 != -1) {
                this.f36319h.f36271l.add(this.f36313b.f2367a0.f2374e.f36319h);
                this.f36313b.f2367a0.f2374e.f36319h.f36270k.add(this.f36319h);
                this.f36319h.f36265f = u12;
            } else if (v12 != -1) {
                this.f36319h.f36271l.add(this.f36313b.f2367a0.f2374e.f36320i);
                this.f36313b.f2367a0.f2374e.f36320i.f36270k.add(this.f36319h);
                this.f36319h.f36265f = -v12;
            } else {
                f fVar2 = this.f36319h;
                fVar2.f36261b = true;
                fVar2.f36271l.add(this.f36313b.f2367a0.f2374e.f36320i);
                this.f36313b.f2367a0.f2374e.f36320i.f36270k.add(this.f36319h);
            }
            q(this.f36313b.f2374e.f36319h);
            q(this.f36313b.f2374e.f36320i);
            return;
        }
        if (u12 != -1) {
            this.f36319h.f36271l.add(this.f36313b.f2367a0.f2376f.f36319h);
            this.f36313b.f2367a0.f2376f.f36319h.f36270k.add(this.f36319h);
            this.f36319h.f36265f = u12;
        } else if (v12 != -1) {
            this.f36319h.f36271l.add(this.f36313b.f2367a0.f2376f.f36320i);
            this.f36313b.f2367a0.f2376f.f36320i.f36270k.add(this.f36319h);
            this.f36319h.f36265f = -v12;
        } else {
            f fVar3 = this.f36319h;
            fVar3.f36261b = true;
            fVar3.f36271l.add(this.f36313b.f2367a0.f2376f.f36320i);
            this.f36313b.f2367a0.f2376f.f36320i.f36270k.add(this.f36319h);
        }
        q(this.f36313b.f2376f.f36319h);
        q(this.f36313b.f2376f.f36320i);
    }

    @Override // l1.p
    public void e() {
        if (((androidx.constraintlayout.core.widgets.f) this.f36313b).t1() == 1) {
            this.f36313b.n1(this.f36319h.f36266g);
        } else {
            this.f36313b.o1(this.f36319h.f36266g);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // l1.p
    public void f() {
        this.f36319h.c();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // l1.p
    public boolean m() {
        return false;
    }
}
