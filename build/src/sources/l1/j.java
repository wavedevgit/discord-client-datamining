package l1;

import androidx.constraintlayout.core.widgets.ConstraintWidget;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class j extends p {
    /* JADX INFO: Access modifiers changed from: package-private */
    public j(ConstraintWidget constraintWidget) {
        super(constraintWidget);
        constraintWidget.f2403e.f();
        constraintWidget.f2405f.f();
        this.f35490f = ((androidx.constraintlayout.core.widgets.f) constraintWidget).t1();
    }

    private void q(f fVar) {
        this.f35492h.f35443k.add(fVar);
        fVar.f35444l.add(this.f35492h);
    }

    @Override // l1.p, l1.d
    public void a(d dVar) {
        f fVar = this.f35492h;
        if (!fVar.f35435c || fVar.f35442j) {
            return;
        }
        this.f35492h.d((int) ((((f) fVar.f35444l.get(0)).f35439g * ((androidx.constraintlayout.core.widgets.f) this.f35486b).w1()) + 0.5f));
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // l1.p
    public void d() {
        androidx.constraintlayout.core.widgets.f fVar = (androidx.constraintlayout.core.widgets.f) this.f35486b;
        int u12 = fVar.u1();
        int v12 = fVar.v1();
        fVar.w1();
        if (fVar.t1() == 1) {
            if (u12 != -1) {
                this.f35492h.f35444l.add(this.f35486b.f2396a0.f2403e.f35492h);
                this.f35486b.f2396a0.f2403e.f35492h.f35443k.add(this.f35492h);
                this.f35492h.f35438f = u12;
            } else if (v12 != -1) {
                this.f35492h.f35444l.add(this.f35486b.f2396a0.f2403e.f35493i);
                this.f35486b.f2396a0.f2403e.f35493i.f35443k.add(this.f35492h);
                this.f35492h.f35438f = -v12;
            } else {
                f fVar2 = this.f35492h;
                fVar2.f35434b = true;
                fVar2.f35444l.add(this.f35486b.f2396a0.f2403e.f35493i);
                this.f35486b.f2396a0.f2403e.f35493i.f35443k.add(this.f35492h);
            }
            q(this.f35486b.f2403e.f35492h);
            q(this.f35486b.f2403e.f35493i);
            return;
        }
        if (u12 != -1) {
            this.f35492h.f35444l.add(this.f35486b.f2396a0.f2405f.f35492h);
            this.f35486b.f2396a0.f2405f.f35492h.f35443k.add(this.f35492h);
            this.f35492h.f35438f = u12;
        } else if (v12 != -1) {
            this.f35492h.f35444l.add(this.f35486b.f2396a0.f2405f.f35493i);
            this.f35486b.f2396a0.f2405f.f35493i.f35443k.add(this.f35492h);
            this.f35492h.f35438f = -v12;
        } else {
            f fVar3 = this.f35492h;
            fVar3.f35434b = true;
            fVar3.f35444l.add(this.f35486b.f2396a0.f2405f.f35493i);
            this.f35486b.f2396a0.f2405f.f35493i.f35443k.add(this.f35492h);
        }
        q(this.f35486b.f2405f.f35492h);
        q(this.f35486b.f2405f.f35493i);
    }

    @Override // l1.p
    public void e() {
        if (((androidx.constraintlayout.core.widgets.f) this.f35486b).t1() == 1) {
            this.f35486b.n1(this.f35492h.f35439g);
        } else {
            this.f35486b.o1(this.f35492h.f35439g);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // l1.p
    public void f() {
        this.f35492h.c();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // l1.p
    public boolean m() {
        return false;
    }
}
