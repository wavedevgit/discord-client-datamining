package l1;

import androidx.constraintlayout.core.widgets.ConstraintWidget;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class j extends p {
    /* JADX INFO: Access modifiers changed from: package-private */
    public j(ConstraintWidget constraintWidget) {
        super(constraintWidget);
        constraintWidget.f2400e.f();
        constraintWidget.f2402f.f();
        this.f35593f = ((androidx.constraintlayout.core.widgets.f) constraintWidget).t1();
    }

    private void q(f fVar) {
        this.f35595h.f35546k.add(fVar);
        fVar.f35547l.add(this.f35595h);
    }

    @Override // l1.p, l1.d
    public void a(d dVar) {
        f fVar = this.f35595h;
        if (!fVar.f35538c || fVar.f35545j) {
            return;
        }
        this.f35595h.d((int) ((((f) fVar.f35547l.get(0)).f35542g * ((androidx.constraintlayout.core.widgets.f) this.f35589b).w1()) + 0.5f));
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // l1.p
    public void d() {
        androidx.constraintlayout.core.widgets.f fVar = (androidx.constraintlayout.core.widgets.f) this.f35589b;
        int u12 = fVar.u1();
        int v12 = fVar.v1();
        fVar.w1();
        if (fVar.t1() == 1) {
            if (u12 != -1) {
                this.f35595h.f35547l.add(this.f35589b.f2393a0.f2400e.f35595h);
                this.f35589b.f2393a0.f2400e.f35595h.f35546k.add(this.f35595h);
                this.f35595h.f35541f = u12;
            } else if (v12 != -1) {
                this.f35595h.f35547l.add(this.f35589b.f2393a0.f2400e.f35596i);
                this.f35589b.f2393a0.f2400e.f35596i.f35546k.add(this.f35595h);
                this.f35595h.f35541f = -v12;
            } else {
                f fVar2 = this.f35595h;
                fVar2.f35537b = true;
                fVar2.f35547l.add(this.f35589b.f2393a0.f2400e.f35596i);
                this.f35589b.f2393a0.f2400e.f35596i.f35546k.add(this.f35595h);
            }
            q(this.f35589b.f2400e.f35595h);
            q(this.f35589b.f2400e.f35596i);
            return;
        }
        if (u12 != -1) {
            this.f35595h.f35547l.add(this.f35589b.f2393a0.f2402f.f35595h);
            this.f35589b.f2393a0.f2402f.f35595h.f35546k.add(this.f35595h);
            this.f35595h.f35541f = u12;
        } else if (v12 != -1) {
            this.f35595h.f35547l.add(this.f35589b.f2393a0.f2402f.f35596i);
            this.f35589b.f2393a0.f2402f.f35596i.f35546k.add(this.f35595h);
            this.f35595h.f35541f = -v12;
        } else {
            f fVar3 = this.f35595h;
            fVar3.f35537b = true;
            fVar3.f35547l.add(this.f35589b.f2393a0.f2402f.f35596i);
            this.f35589b.f2393a0.f2402f.f35596i.f35546k.add(this.f35595h);
        }
        q(this.f35589b.f2402f.f35595h);
        q(this.f35589b.f2402f.f35596i);
    }

    @Override // l1.p
    public void e() {
        if (((androidx.constraintlayout.core.widgets.f) this.f35589b).t1() == 1) {
            this.f35589b.n1(this.f35595h.f35542g);
        } else {
            this.f35589b.o1(this.f35595h.f35542g);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // l1.p
    public void f() {
        this.f35595h.c();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // l1.p
    public boolean m() {
        return false;
    }
}
