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
        this.f36059f = ((androidx.constraintlayout.core.widgets.f) constraintWidget).t1();
    }

    private void q(f fVar) {
        this.f36061h.f36012k.add(fVar);
        fVar.f36013l.add(this.f36061h);
    }

    @Override // l1.p, l1.d
    public void a(d dVar) {
        f fVar = this.f36061h;
        if (!fVar.f36004c || fVar.f36011j) {
            return;
        }
        this.f36061h.d((int) ((((f) fVar.f36013l.get(0)).f36008g * ((androidx.constraintlayout.core.widgets.f) this.f36055b).w1()) + 0.5f));
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // l1.p
    public void d() {
        androidx.constraintlayout.core.widgets.f fVar = (androidx.constraintlayout.core.widgets.f) this.f36055b;
        int u12 = fVar.u1();
        int v12 = fVar.v1();
        fVar.w1();
        if (fVar.t1() == 1) {
            if (u12 != -1) {
                this.f36061h.f36013l.add(this.f36055b.f2396a0.f2403e.f36061h);
                this.f36055b.f2396a0.f2403e.f36061h.f36012k.add(this.f36061h);
                this.f36061h.f36007f = u12;
            } else if (v12 != -1) {
                this.f36061h.f36013l.add(this.f36055b.f2396a0.f2403e.f36062i);
                this.f36055b.f2396a0.f2403e.f36062i.f36012k.add(this.f36061h);
                this.f36061h.f36007f = -v12;
            } else {
                f fVar2 = this.f36061h;
                fVar2.f36003b = true;
                fVar2.f36013l.add(this.f36055b.f2396a0.f2403e.f36062i);
                this.f36055b.f2396a0.f2403e.f36062i.f36012k.add(this.f36061h);
            }
            q(this.f36055b.f2403e.f36061h);
            q(this.f36055b.f2403e.f36062i);
            return;
        }
        if (u12 != -1) {
            this.f36061h.f36013l.add(this.f36055b.f2396a0.f2405f.f36061h);
            this.f36055b.f2396a0.f2405f.f36061h.f36012k.add(this.f36061h);
            this.f36061h.f36007f = u12;
        } else if (v12 != -1) {
            this.f36061h.f36013l.add(this.f36055b.f2396a0.f2405f.f36062i);
            this.f36055b.f2396a0.f2405f.f36062i.f36012k.add(this.f36061h);
            this.f36061h.f36007f = -v12;
        } else {
            f fVar3 = this.f36061h;
            fVar3.f36003b = true;
            fVar3.f36013l.add(this.f36055b.f2396a0.f2405f.f36062i);
            this.f36055b.f2396a0.f2405f.f36062i.f36012k.add(this.f36061h);
        }
        q(this.f36055b.f2405f.f36061h);
        q(this.f36055b.f2405f.f36062i);
    }

    @Override // l1.p
    public void e() {
        if (((androidx.constraintlayout.core.widgets.f) this.f36055b).t1() == 1) {
            this.f36055b.n1(this.f36061h.f36008g);
        } else {
            this.f36055b.o1(this.f36061h.f36008g);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // l1.p
    public void f() {
        this.f36061h.c();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // l1.p
    public boolean m() {
        return false;
    }
}
