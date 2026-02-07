package l1;

import androidx.constraintlayout.core.widgets.ConstraintWidget;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class j extends p {
    /* JADX INFO: Access modifiers changed from: package-private */
    public j(ConstraintWidget constraintWidget) {
        super(constraintWidget);
        constraintWidget.f2703e.f();
        constraintWidget.f2705f.f();
        this.f35758f = ((androidx.constraintlayout.core.widgets.f) constraintWidget).t1();
    }

    private void q(f fVar) {
        this.f35760h.f35711k.add(fVar);
        fVar.f35712l.add(this.f35760h);
    }

    @Override // l1.p, l1.d
    public void a(d dVar) {
        f fVar = this.f35760h;
        if (!fVar.f35703c || fVar.f35710j) {
            return;
        }
        this.f35760h.d((int) ((((f) fVar.f35712l.get(0)).f35707g * ((androidx.constraintlayout.core.widgets.f) this.f35754b).w1()) + 0.5f));
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // l1.p
    public void d() {
        androidx.constraintlayout.core.widgets.f fVar = (androidx.constraintlayout.core.widgets.f) this.f35754b;
        int u12 = fVar.u1();
        int v12 = fVar.v1();
        fVar.w1();
        if (fVar.t1() == 1) {
            if (u12 != -1) {
                this.f35760h.f35712l.add(this.f35754b.f2696a0.f2703e.f35760h);
                this.f35754b.f2696a0.f2703e.f35760h.f35711k.add(this.f35760h);
                this.f35760h.f35706f = u12;
            } else if (v12 != -1) {
                this.f35760h.f35712l.add(this.f35754b.f2696a0.f2703e.f35761i);
                this.f35754b.f2696a0.f2703e.f35761i.f35711k.add(this.f35760h);
                this.f35760h.f35706f = -v12;
            } else {
                f fVar2 = this.f35760h;
                fVar2.f35702b = true;
                fVar2.f35712l.add(this.f35754b.f2696a0.f2703e.f35761i);
                this.f35754b.f2696a0.f2703e.f35761i.f35711k.add(this.f35760h);
            }
            q(this.f35754b.f2703e.f35760h);
            q(this.f35754b.f2703e.f35761i);
            return;
        }
        if (u12 != -1) {
            this.f35760h.f35712l.add(this.f35754b.f2696a0.f2705f.f35760h);
            this.f35754b.f2696a0.f2705f.f35760h.f35711k.add(this.f35760h);
            this.f35760h.f35706f = u12;
        } else if (v12 != -1) {
            this.f35760h.f35712l.add(this.f35754b.f2696a0.f2705f.f35761i);
            this.f35754b.f2696a0.f2705f.f35761i.f35711k.add(this.f35760h);
            this.f35760h.f35706f = -v12;
        } else {
            f fVar3 = this.f35760h;
            fVar3.f35702b = true;
            fVar3.f35712l.add(this.f35754b.f2696a0.f2705f.f35761i);
            this.f35754b.f2696a0.f2705f.f35761i.f35711k.add(this.f35760h);
        }
        q(this.f35754b.f2705f.f35760h);
        q(this.f35754b.f2705f.f35761i);
    }

    @Override // l1.p
    public void e() {
        if (((androidx.constraintlayout.core.widgets.f) this.f35754b).t1() == 1) {
            this.f35754b.n1(this.f35760h.f35707g);
        } else {
            this.f35754b.o1(this.f35760h.f35707g);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // l1.p
    public void f() {
        this.f35760h.c();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // l1.p
    public boolean m() {
        return false;
    }
}
