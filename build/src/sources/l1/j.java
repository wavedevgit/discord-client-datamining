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
        this.f36791f = ((androidx.constraintlayout.core.widgets.f) constraintWidget).t1();
    }

    private void q(f fVar) {
        this.f36793h.f36744k.add(fVar);
        fVar.f36745l.add(this.f36793h);
    }

    @Override // l1.p, l1.d
    public void a(d dVar) {
        f fVar = this.f36793h;
        if (!fVar.f36736c || fVar.f36743j) {
            return;
        }
        this.f36793h.d((int) ((((f) fVar.f36745l.get(0)).f36740g * ((androidx.constraintlayout.core.widgets.f) this.f36787b).w1()) + 0.5f));
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // l1.p
    public void d() {
        androidx.constraintlayout.core.widgets.f fVar = (androidx.constraintlayout.core.widgets.f) this.f36787b;
        int u12 = fVar.u1();
        int v12 = fVar.v1();
        fVar.w1();
        if (fVar.t1() == 1) {
            if (u12 != -1) {
                this.f36793h.f36745l.add(this.f36787b.f2242a0.f2249e.f36793h);
                this.f36787b.f2242a0.f2249e.f36793h.f36744k.add(this.f36793h);
                this.f36793h.f36739f = u12;
            } else if (v12 != -1) {
                this.f36793h.f36745l.add(this.f36787b.f2242a0.f2249e.f36794i);
                this.f36787b.f2242a0.f2249e.f36794i.f36744k.add(this.f36793h);
                this.f36793h.f36739f = -v12;
            } else {
                f fVar2 = this.f36793h;
                fVar2.f36735b = true;
                fVar2.f36745l.add(this.f36787b.f2242a0.f2249e.f36794i);
                this.f36787b.f2242a0.f2249e.f36794i.f36744k.add(this.f36793h);
            }
            q(this.f36787b.f2249e.f36793h);
            q(this.f36787b.f2249e.f36794i);
            return;
        }
        if (u12 != -1) {
            this.f36793h.f36745l.add(this.f36787b.f2242a0.f2251f.f36793h);
            this.f36787b.f2242a0.f2251f.f36793h.f36744k.add(this.f36793h);
            this.f36793h.f36739f = u12;
        } else if (v12 != -1) {
            this.f36793h.f36745l.add(this.f36787b.f2242a0.f2251f.f36794i);
            this.f36787b.f2242a0.f2251f.f36794i.f36744k.add(this.f36793h);
            this.f36793h.f36739f = -v12;
        } else {
            f fVar3 = this.f36793h;
            fVar3.f36735b = true;
            fVar3.f36745l.add(this.f36787b.f2242a0.f2251f.f36794i);
            this.f36787b.f2242a0.f2251f.f36794i.f36744k.add(this.f36793h);
        }
        q(this.f36787b.f2251f.f36793h);
        q(this.f36787b.f2251f.f36794i);
    }

    @Override // l1.p
    public void e() {
        if (((androidx.constraintlayout.core.widgets.f) this.f36787b).t1() == 1) {
            this.f36787b.n1(this.f36793h.f36740g);
        } else {
            this.f36787b.o1(this.f36793h.f36740g);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // l1.p
    public void f() {
        this.f36793h.c();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // l1.p
    public boolean m() {
        return false;
    }
}
