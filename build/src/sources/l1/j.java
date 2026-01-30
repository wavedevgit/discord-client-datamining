package l1;

import androidx.constraintlayout.core.widgets.ConstraintWidget;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class j extends p {
    /* JADX INFO: Access modifiers changed from: package-private */
    public j(ConstraintWidget constraintWidget) {
        super(constraintWidget);
        constraintWidget.f2249e.f();
        constraintWidget.f2251f.f();
        this.f36807f = ((androidx.constraintlayout.core.widgets.f) constraintWidget).t1();
    }

    private void q(f fVar) {
        this.f36809h.f36760k.add(fVar);
        fVar.f36761l.add(this.f36809h);
    }

    @Override // l1.p, l1.d
    public void a(d dVar) {
        f fVar = this.f36809h;
        if (!fVar.f36752c || fVar.f36759j) {
            return;
        }
        this.f36809h.d((int) ((((f) fVar.f36761l.get(0)).f36756g * ((androidx.constraintlayout.core.widgets.f) this.f36803b).w1()) + 0.5f));
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // l1.p
    public void d() {
        androidx.constraintlayout.core.widgets.f fVar = (androidx.constraintlayout.core.widgets.f) this.f36803b;
        int u12 = fVar.u1();
        int v12 = fVar.v1();
        fVar.w1();
        if (fVar.t1() == 1) {
            if (u12 != -1) {
                this.f36809h.f36761l.add(this.f36803b.f2242a0.f2249e.f36809h);
                this.f36803b.f2242a0.f2249e.f36809h.f36760k.add(this.f36809h);
                this.f36809h.f36755f = u12;
            } else if (v12 != -1) {
                this.f36809h.f36761l.add(this.f36803b.f2242a0.f2249e.f36810i);
                this.f36803b.f2242a0.f2249e.f36810i.f36760k.add(this.f36809h);
                this.f36809h.f36755f = -v12;
            } else {
                f fVar2 = this.f36809h;
                fVar2.f36751b = true;
                fVar2.f36761l.add(this.f36803b.f2242a0.f2249e.f36810i);
                this.f36803b.f2242a0.f2249e.f36810i.f36760k.add(this.f36809h);
            }
            q(this.f36803b.f2249e.f36809h);
            q(this.f36803b.f2249e.f36810i);
            return;
        }
        if (u12 != -1) {
            this.f36809h.f36761l.add(this.f36803b.f2242a0.f2251f.f36809h);
            this.f36803b.f2242a0.f2251f.f36809h.f36760k.add(this.f36809h);
            this.f36809h.f36755f = u12;
        } else if (v12 != -1) {
            this.f36809h.f36761l.add(this.f36803b.f2242a0.f2251f.f36810i);
            this.f36803b.f2242a0.f2251f.f36810i.f36760k.add(this.f36809h);
            this.f36809h.f36755f = -v12;
        } else {
            f fVar3 = this.f36809h;
            fVar3.f36751b = true;
            fVar3.f36761l.add(this.f36803b.f2242a0.f2251f.f36810i);
            this.f36803b.f2242a0.f2251f.f36810i.f36760k.add(this.f36809h);
        }
        q(this.f36803b.f2251f.f36809h);
        q(this.f36803b.f2251f.f36810i);
    }

    @Override // l1.p
    public void e() {
        if (((androidx.constraintlayout.core.widgets.f) this.f36803b).t1() == 1) {
            this.f36803b.n1(this.f36809h.f36756g);
        } else {
            this.f36803b.o1(this.f36809h.f36756g);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // l1.p
    public void f() {
        this.f36809h.c();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // l1.p
    public boolean m() {
        return false;
    }
}
