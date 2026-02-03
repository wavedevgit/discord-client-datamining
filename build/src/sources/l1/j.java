package l1;

import androidx.constraintlayout.core.widgets.ConstraintWidget;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class j extends p {
    /* JADX INFO: Access modifiers changed from: package-private */
    public j(ConstraintWidget constraintWidget) {
        super(constraintWidget);
        constraintWidget.f2293e.f();
        constraintWidget.f2295f.f();
        this.f36921f = ((androidx.constraintlayout.core.widgets.f) constraintWidget).t1();
    }

    private void q(f fVar) {
        this.f36923h.f36874k.add(fVar);
        fVar.f36875l.add(this.f36923h);
    }

    @Override // l1.p, l1.d
    public void a(d dVar) {
        f fVar = this.f36923h;
        if (!fVar.f36866c || fVar.f36873j) {
            return;
        }
        this.f36923h.d((int) ((((f) fVar.f36875l.get(0)).f36870g * ((androidx.constraintlayout.core.widgets.f) this.f36917b).w1()) + 0.5f));
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // l1.p
    public void d() {
        androidx.constraintlayout.core.widgets.f fVar = (androidx.constraintlayout.core.widgets.f) this.f36917b;
        int u12 = fVar.u1();
        int v12 = fVar.v1();
        fVar.w1();
        if (fVar.t1() == 1) {
            if (u12 != -1) {
                this.f36923h.f36875l.add(this.f36917b.f2286a0.f2293e.f36923h);
                this.f36917b.f2286a0.f2293e.f36923h.f36874k.add(this.f36923h);
                this.f36923h.f36869f = u12;
            } else if (v12 != -1) {
                this.f36923h.f36875l.add(this.f36917b.f2286a0.f2293e.f36924i);
                this.f36917b.f2286a0.f2293e.f36924i.f36874k.add(this.f36923h);
                this.f36923h.f36869f = -v12;
            } else {
                f fVar2 = this.f36923h;
                fVar2.f36865b = true;
                fVar2.f36875l.add(this.f36917b.f2286a0.f2293e.f36924i);
                this.f36917b.f2286a0.f2293e.f36924i.f36874k.add(this.f36923h);
            }
            q(this.f36917b.f2293e.f36923h);
            q(this.f36917b.f2293e.f36924i);
            return;
        }
        if (u12 != -1) {
            this.f36923h.f36875l.add(this.f36917b.f2286a0.f2295f.f36923h);
            this.f36917b.f2286a0.f2295f.f36923h.f36874k.add(this.f36923h);
            this.f36923h.f36869f = u12;
        } else if (v12 != -1) {
            this.f36923h.f36875l.add(this.f36917b.f2286a0.f2295f.f36924i);
            this.f36917b.f2286a0.f2295f.f36924i.f36874k.add(this.f36923h);
            this.f36923h.f36869f = -v12;
        } else {
            f fVar3 = this.f36923h;
            fVar3.f36865b = true;
            fVar3.f36875l.add(this.f36917b.f2286a0.f2295f.f36924i);
            this.f36917b.f2286a0.f2295f.f36924i.f36874k.add(this.f36923h);
        }
        q(this.f36917b.f2295f.f36923h);
        q(this.f36917b.f2295f.f36924i);
    }

    @Override // l1.p
    public void e() {
        if (((androidx.constraintlayout.core.widgets.f) this.f36917b).t1() == 1) {
            this.f36917b.n1(this.f36923h.f36870g);
        } else {
            this.f36917b.o1(this.f36923h.f36870g);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // l1.p
    public void f() {
        this.f36923h.c();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // l1.p
    public boolean m() {
        return false;
    }
}
