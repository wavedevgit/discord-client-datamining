package k1;

import androidx.constraintlayout.core.widgets.ConstraintWidget;
import java.util.ArrayList;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class c extends ConstraintWidget {
    public ArrayList L0 = new ArrayList();

    public void a(ConstraintWidget constraintWidget) {
        this.L0.add(constraintWidget);
        if (constraintWidget.K() != null) {
            ((c) constraintWidget.K()).u1(constraintWidget);
        }
        constraintWidget.d1(this);
    }

    public ArrayList s1() {
        return this.L0;
    }

    @Override // androidx.constraintlayout.core.widgets.ConstraintWidget
    public void t0() {
        this.L0.clear();
        super.t0();
    }

    public abstract void t1();

    public void u1(ConstraintWidget constraintWidget) {
        this.L0.remove(constraintWidget);
        constraintWidget.t0();
    }

    public void v1() {
        this.L0.clear();
    }

    @Override // androidx.constraintlayout.core.widgets.ConstraintWidget
    public void w0(h1.c cVar) {
        super.w0(cVar);
        int size = this.L0.size();
        for (int i10 = 0; i10 < size; i10++) {
            ((ConstraintWidget) this.L0.get(i10)).w0(cVar);
        }
    }
}
