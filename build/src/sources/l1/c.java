package l1;

import androidx.constraintlayout.core.widgets.ConstraintWidget;
import androidx.constraintlayout.core.widgets.ConstraintWidgetContainer;
import java.util.ArrayList;
import java.util.Iterator;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class c extends p {

    /* renamed from: k  reason: collision with root package name */
    ArrayList f35642k;

    /* renamed from: l  reason: collision with root package name */
    private int f35643l;

    public c(ConstraintWidget constraintWidget, int i10) {
        super(constraintWidget);
        this.f35642k = new ArrayList();
        this.f35710f = i10;
        q();
    }

    private void q() {
        ConstraintWidget constraintWidget;
        int S;
        ConstraintWidget constraintWidget2 = this.f35706b;
        ConstraintWidget L = constraintWidget2.L(this.f35710f);
        while (true) {
            ConstraintWidget constraintWidget3 = L;
            constraintWidget = constraintWidget2;
            constraintWidget2 = constraintWidget3;
            if (constraintWidget2 == null) {
                break;
            }
            L = constraintWidget2.L(this.f35710f);
        }
        this.f35706b = constraintWidget;
        this.f35642k.add(constraintWidget.N(this.f35710f));
        ConstraintWidget J = constraintWidget.J(this.f35710f);
        while (J != null) {
            this.f35642k.add(J.N(this.f35710f));
            J = J.J(this.f35710f);
        }
        Iterator it = this.f35642k.iterator();
        while (it.hasNext()) {
            p pVar = (p) it.next();
            int i10 = this.f35710f;
            if (i10 == 0) {
                pVar.f35706b.f2699c = this;
            } else if (i10 == 1) {
                pVar.f35706b.f2701d = this;
            }
        }
        if (this.f35710f == 0 && ((ConstraintWidgetContainer) this.f35706b.K()).R1() && this.f35642k.size() > 1) {
            ArrayList arrayList = this.f35642k;
            this.f35706b = ((p) arrayList.get(arrayList.size() - 1)).f35706b;
        }
        if (this.f35710f == 0) {
            S = this.f35706b.z();
        } else {
            S = this.f35706b.S();
        }
        this.f35643l = S;
    }

    private ConstraintWidget r() {
        for (int i10 = 0; i10 < this.f35642k.size(); i10++) {
            p pVar = (p) this.f35642k.get(i10);
            if (pVar.f35706b.V() != 8) {
                return pVar.f35706b;
            }
        }
        return null;
    }

    private ConstraintWidget s() {
        for (int size = this.f35642k.size() - 1; size >= 0; size--) {
            p pVar = (p) this.f35642k.get(size);
            if (pVar.f35706b.V() != 8) {
                return pVar.f35706b;
            }
        }
        return null;
    }

    /* JADX WARN: Code restructure failed: missing block: B:270:0x03f6, code lost:
        r1 = r1 - r9;
     */
    /* JADX WARN: Code restructure failed: missing block: B:58:0x00d4, code lost:
        if (r3.f35662j != false) goto L69;
     */
    @Override // l1.p, l1.d
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public void a(l1.d r27) {
        /*
            Method dump skipped, instructions count: 1054
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: l1.c.a(l1.d):void");
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // l1.p
    public void d() {
        Iterator it = this.f35642k.iterator();
        while (it.hasNext()) {
            ((p) it.next()).d();
        }
        int size = this.f35642k.size();
        if (size < 1) {
            return;
        }
        ConstraintWidget constraintWidget = ((p) this.f35642k.get(0)).f35706b;
        ConstraintWidget constraintWidget2 = ((p) this.f35642k.get(size - 1)).f35706b;
        if (this.f35710f == 0) {
            androidx.constraintlayout.core.widgets.d dVar = constraintWidget.O;
            androidx.constraintlayout.core.widgets.d dVar2 = constraintWidget2.Q;
            f i10 = i(dVar, 0);
            int f10 = dVar.f();
            ConstraintWidget r10 = r();
            if (r10 != null) {
                f10 = r10.O.f();
            }
            if (i10 != null) {
                b(this.f35712h, i10, f10);
            }
            f i11 = i(dVar2, 0);
            int f11 = dVar2.f();
            ConstraintWidget s10 = s();
            if (s10 != null) {
                f11 = s10.Q.f();
            }
            if (i11 != null) {
                b(this.f35713i, i11, -f11);
            }
        } else {
            androidx.constraintlayout.core.widgets.d dVar3 = constraintWidget.P;
            androidx.constraintlayout.core.widgets.d dVar4 = constraintWidget2.R;
            f i12 = i(dVar3, 1);
            int f12 = dVar3.f();
            ConstraintWidget r11 = r();
            if (r11 != null) {
                f12 = r11.P.f();
            }
            if (i12 != null) {
                b(this.f35712h, i12, f12);
            }
            f i13 = i(dVar4, 1);
            int f13 = dVar4.f();
            ConstraintWidget s11 = s();
            if (s11 != null) {
                f13 = s11.R.f();
            }
            if (i13 != null) {
                b(this.f35713i, i13, -f13);
            }
        }
        this.f35712h.f35653a = this;
        this.f35713i.f35653a = this;
    }

    @Override // l1.p
    public void e() {
        for (int i10 = 0; i10 < this.f35642k.size(); i10++) {
            ((p) this.f35642k.get(i10)).e();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // l1.p
    public void f() {
        this.f35707c = null;
        Iterator it = this.f35642k.iterator();
        while (it.hasNext()) {
            ((p) it.next()).f();
        }
    }

    @Override // l1.p
    public long j() {
        int size = this.f35642k.size();
        long j10 = 0;
        for (int i10 = 0; i10 < size; i10++) {
            p pVar = (p) this.f35642k.get(i10);
            j10 = j10 + pVar.f35712h.f35658f + pVar.j() + pVar.f35713i.f35658f;
        }
        return j10;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // l1.p
    public boolean m() {
        int size = this.f35642k.size();
        for (int i10 = 0; i10 < size; i10++) {
            if (!((p) this.f35642k.get(i10)).m()) {
                return false;
            }
        }
        return true;
    }

    public String toString() {
        String str;
        StringBuilder sb2 = new StringBuilder("ChainRun ");
        if (this.f35710f == 0) {
            str = "horizontal : ";
        } else {
            str = "vertical : ";
        }
        sb2.append(str);
        Iterator it = this.f35642k.iterator();
        while (it.hasNext()) {
            sb2.append("<");
            sb2.append((p) it.next());
            sb2.append("> ");
        }
        return sb2.toString();
    }
}
