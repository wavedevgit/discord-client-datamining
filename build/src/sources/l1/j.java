package l1;

import androidx.constraintlayout.core.widgets.ConstraintWidget;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class j extends p {
    /* JADX INFO: Access modifiers changed from: package-private */
    public j(ConstraintWidget constraintWidget) {
        super(constraintWidget);
        constraintWidget.f2262e.f();
        constraintWidget.f2264f.f();
        this.f36390f = ((androidx.constraintlayout.core.widgets.f) constraintWidget).t1();
    }

    private void q(f fVar) {
        this.f36392h.f36343k.add(fVar);
        fVar.f36344l.add(this.f36392h);
    }

    @Override // l1.p, l1.d
    public void a(d dVar) {
        f fVar = this.f36392h;
        if (!fVar.f36335c || fVar.f36342j) {
            return;
        }
        this.f36392h.d((int) ((((f) fVar.f36344l.get(0)).f36339g * ((androidx.constraintlayout.core.widgets.f) this.f36386b).w1()) + 0.5f));
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // l1.p
    public void d() {
        androidx.constraintlayout.core.widgets.f fVar = (androidx.constraintlayout.core.widgets.f) this.f36386b;
        int u12 = fVar.u1();
        int v12 = fVar.v1();
        fVar.w1();
        if (fVar.t1() == 1) {
            if (u12 != -1) {
                this.f36392h.f36344l.add(this.f36386b.f2255a0.f2262e.f36392h);
                this.f36386b.f2255a0.f2262e.f36392h.f36343k.add(this.f36392h);
                this.f36392h.f36338f = u12;
            } else if (v12 != -1) {
                this.f36392h.f36344l.add(this.f36386b.f2255a0.f2262e.f36393i);
                this.f36386b.f2255a0.f2262e.f36393i.f36343k.add(this.f36392h);
                this.f36392h.f36338f = -v12;
            } else {
                f fVar2 = this.f36392h;
                fVar2.f36334b = true;
                fVar2.f36344l.add(this.f36386b.f2255a0.f2262e.f36393i);
                this.f36386b.f2255a0.f2262e.f36393i.f36343k.add(this.f36392h);
            }
            q(this.f36386b.f2262e.f36392h);
            q(this.f36386b.f2262e.f36393i);
            return;
        }
        if (u12 != -1) {
            this.f36392h.f36344l.add(this.f36386b.f2255a0.f2264f.f36392h);
            this.f36386b.f2255a0.f2264f.f36392h.f36343k.add(this.f36392h);
            this.f36392h.f36338f = u12;
        } else if (v12 != -1) {
            this.f36392h.f36344l.add(this.f36386b.f2255a0.f2264f.f36393i);
            this.f36386b.f2255a0.f2264f.f36393i.f36343k.add(this.f36392h);
            this.f36392h.f36338f = -v12;
        } else {
            f fVar3 = this.f36392h;
            fVar3.f36334b = true;
            fVar3.f36344l.add(this.f36386b.f2255a0.f2264f.f36393i);
            this.f36386b.f2255a0.f2264f.f36393i.f36343k.add(this.f36392h);
        }
        q(this.f36386b.f2264f.f36392h);
        q(this.f36386b.f2264f.f36393i);
    }

    @Override // l1.p
    public void e() {
        if (((androidx.constraintlayout.core.widgets.f) this.f36386b).t1() == 1) {
            this.f36386b.n1(this.f36392h.f36339g);
        } else {
            this.f36386b.o1(this.f36392h.f36339g);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // l1.p
    public void f() {
        this.f36392h.c();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // l1.p
    public boolean m() {
        return false;
    }
}
