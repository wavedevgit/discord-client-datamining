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
        this.f35491f = ((androidx.constraintlayout.core.widgets.f) constraintWidget).t1();
    }

    private void q(f fVar) {
        this.f35493h.f35444k.add(fVar);
        fVar.f35445l.add(this.f35493h);
    }

    @Override // l1.p, l1.d
    public void a(d dVar) {
        f fVar = this.f35493h;
        if (!fVar.f35436c || fVar.f35443j) {
            return;
        }
        this.f35493h.d((int) ((((f) fVar.f35445l.get(0)).f35440g * ((androidx.constraintlayout.core.widgets.f) this.f35487b).w1()) + 0.5f));
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // l1.p
    public void d() {
        androidx.constraintlayout.core.widgets.f fVar = (androidx.constraintlayout.core.widgets.f) this.f35487b;
        int u12 = fVar.u1();
        int v12 = fVar.v1();
        fVar.w1();
        if (fVar.t1() == 1) {
            if (u12 != -1) {
                this.f35493h.f35445l.add(this.f35487b.f2396a0.f2403e.f35493h);
                this.f35487b.f2396a0.f2403e.f35493h.f35444k.add(this.f35493h);
                this.f35493h.f35439f = u12;
            } else if (v12 != -1) {
                this.f35493h.f35445l.add(this.f35487b.f2396a0.f2403e.f35494i);
                this.f35487b.f2396a0.f2403e.f35494i.f35444k.add(this.f35493h);
                this.f35493h.f35439f = -v12;
            } else {
                f fVar2 = this.f35493h;
                fVar2.f35435b = true;
                fVar2.f35445l.add(this.f35487b.f2396a0.f2403e.f35494i);
                this.f35487b.f2396a0.f2403e.f35494i.f35444k.add(this.f35493h);
            }
            q(this.f35487b.f2403e.f35493h);
            q(this.f35487b.f2403e.f35494i);
            return;
        }
        if (u12 != -1) {
            this.f35493h.f35445l.add(this.f35487b.f2396a0.f2405f.f35493h);
            this.f35487b.f2396a0.f2405f.f35493h.f35444k.add(this.f35493h);
            this.f35493h.f35439f = u12;
        } else if (v12 != -1) {
            this.f35493h.f35445l.add(this.f35487b.f2396a0.f2405f.f35494i);
            this.f35487b.f2396a0.f2405f.f35494i.f35444k.add(this.f35493h);
            this.f35493h.f35439f = -v12;
        } else {
            f fVar3 = this.f35493h;
            fVar3.f35435b = true;
            fVar3.f35445l.add(this.f35487b.f2396a0.f2405f.f35494i);
            this.f35487b.f2396a0.f2405f.f35494i.f35444k.add(this.f35493h);
        }
        q(this.f35487b.f2405f.f35493h);
        q(this.f35487b.f2405f.f35494i);
    }

    @Override // l1.p
    public void e() {
        if (((androidx.constraintlayout.core.widgets.f) this.f35487b).t1() == 1) {
            this.f35487b.n1(this.f35493h.f35440g);
        } else {
            this.f35487b.o1(this.f35493h.f35440g);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // l1.p
    public void f() {
        this.f35493h.c();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // l1.p
    public boolean m() {
        return false;
    }
}
