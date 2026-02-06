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
        this.f35710f = ((androidx.constraintlayout.core.widgets.f) constraintWidget).t1();
    }

    private void q(f fVar) {
        this.f35712h.f35663k.add(fVar);
        fVar.f35664l.add(this.f35712h);
    }

    @Override // l1.p, l1.d
    public void a(d dVar) {
        f fVar = this.f35712h;
        if (!fVar.f35655c || fVar.f35662j) {
            return;
        }
        this.f35712h.d((int) ((((f) fVar.f35664l.get(0)).f35659g * ((androidx.constraintlayout.core.widgets.f) this.f35706b).w1()) + 0.5f));
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // l1.p
    public void d() {
        androidx.constraintlayout.core.widgets.f fVar = (androidx.constraintlayout.core.widgets.f) this.f35706b;
        int u12 = fVar.u1();
        int v12 = fVar.v1();
        fVar.w1();
        if (fVar.t1() == 1) {
            if (u12 != -1) {
                this.f35712h.f35664l.add(this.f35706b.f2696a0.f2703e.f35712h);
                this.f35706b.f2696a0.f2703e.f35712h.f35663k.add(this.f35712h);
                this.f35712h.f35658f = u12;
            } else if (v12 != -1) {
                this.f35712h.f35664l.add(this.f35706b.f2696a0.f2703e.f35713i);
                this.f35706b.f2696a0.f2703e.f35713i.f35663k.add(this.f35712h);
                this.f35712h.f35658f = -v12;
            } else {
                f fVar2 = this.f35712h;
                fVar2.f35654b = true;
                fVar2.f35664l.add(this.f35706b.f2696a0.f2703e.f35713i);
                this.f35706b.f2696a0.f2703e.f35713i.f35663k.add(this.f35712h);
            }
            q(this.f35706b.f2703e.f35712h);
            q(this.f35706b.f2703e.f35713i);
            return;
        }
        if (u12 != -1) {
            this.f35712h.f35664l.add(this.f35706b.f2696a0.f2705f.f35712h);
            this.f35706b.f2696a0.f2705f.f35712h.f35663k.add(this.f35712h);
            this.f35712h.f35658f = u12;
        } else if (v12 != -1) {
            this.f35712h.f35664l.add(this.f35706b.f2696a0.f2705f.f35713i);
            this.f35706b.f2696a0.f2705f.f35713i.f35663k.add(this.f35712h);
            this.f35712h.f35658f = -v12;
        } else {
            f fVar3 = this.f35712h;
            fVar3.f35654b = true;
            fVar3.f35664l.add(this.f35706b.f2696a0.f2705f.f35713i);
            this.f35706b.f2696a0.f2705f.f35713i.f35663k.add(this.f35712h);
        }
        q(this.f35706b.f2705f.f35712h);
        q(this.f35706b.f2705f.f35713i);
    }

    @Override // l1.p
    public void e() {
        if (((androidx.constraintlayout.core.widgets.f) this.f35706b).t1() == 1) {
            this.f35706b.n1(this.f35712h.f35659g);
        } else {
            this.f35706b.o1(this.f35712h.f35659g);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // l1.p
    public void f() {
        this.f35712h.c();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // l1.p
    public boolean m() {
        return false;
    }
}
