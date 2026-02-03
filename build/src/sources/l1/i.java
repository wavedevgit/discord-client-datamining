package l1;

import androidx.constraintlayout.core.widgets.ConstraintWidget;
import java.util.ArrayList;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class i {
    public static o a(ConstraintWidget constraintWidget, int i10, ArrayList arrayList, o oVar) {
        int i11;
        int t12;
        if (i10 == 0) {
            i11 = constraintWidget.I0;
        } else {
            i11 = constraintWidget.J0;
        }
        int i12 = 0;
        if (i11 != -1 && (oVar == null || i11 != oVar.c())) {
            int i13 = 0;
            while (true) {
                if (i13 >= arrayList.size()) {
                    break;
                }
                o oVar2 = (o) arrayList.get(i13);
                if (oVar2.c() == i11) {
                    if (oVar != null) {
                        oVar.g(i10, oVar2);
                        arrayList.remove(oVar);
                    }
                    oVar = oVar2;
                } else {
                    i13++;
                }
            }
        } else if (i11 != -1) {
            return oVar;
        }
        if (oVar == null) {
            if ((constraintWidget instanceof k1.b) && (t12 = ((k1.b) constraintWidget).t1(i10)) != -1) {
                int i14 = 0;
                while (true) {
                    if (i14 >= arrayList.size()) {
                        break;
                    }
                    o oVar3 = (o) arrayList.get(i14);
                    if (oVar3.c() == t12) {
                        oVar = oVar3;
                        break;
                    }
                    i14++;
                }
            }
            if (oVar == null) {
                oVar = new o(i10);
            }
            arrayList.add(oVar);
        }
        if (oVar.a(constraintWidget)) {
            if (constraintWidget instanceof androidx.constraintlayout.core.widgets.f) {
                androidx.constraintlayout.core.widgets.f fVar = (androidx.constraintlayout.core.widgets.f) constraintWidget;
                androidx.constraintlayout.core.widgets.d s12 = fVar.s1();
                if (fVar.t1() == 0) {
                    i12 = 1;
                }
                s12.c(i12, arrayList, oVar);
            }
            if (i10 == 0) {
                constraintWidget.I0 = oVar.c();
                constraintWidget.O.c(i10, arrayList, oVar);
                constraintWidget.Q.c(i10, arrayList, oVar);
            } else {
                constraintWidget.J0 = oVar.c();
                constraintWidget.P.c(i10, arrayList, oVar);
                constraintWidget.S.c(i10, arrayList, oVar);
                constraintWidget.R.c(i10, arrayList, oVar);
            }
            constraintWidget.V.c(i10, arrayList, oVar);
        }
        return oVar;
    }

    private static o b(ArrayList arrayList, int i10) {
        int size = arrayList.size();
        for (int i11 = 0; i11 < size; i11++) {
            o oVar = (o) arrayList.get(i11);
            if (i10 == oVar.c()) {
                return oVar;
            }
        }
        return null;
    }

    /* JADX WARN: Removed duplicated region for block: B:182:0x035d  */
    /* JADX WARN: Removed duplicated region for block: B:194:0x0398  */
    /* JADX WARN: Removed duplicated region for block: B:197:0x039c A[ADDED_TO_REGION] */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public static boolean c(androidx.constraintlayout.core.widgets.ConstraintWidgetContainer r17, l1.b.InterfaceC0479b r18) {
        /*
            Method dump skipped, instructions count: 931
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: l1.i.c(androidx.constraintlayout.core.widgets.ConstraintWidgetContainer, l1.b$b):boolean");
    }

    public static boolean d(ConstraintWidget.b bVar, ConstraintWidget.b bVar2, ConstraintWidget.b bVar3, ConstraintWidget.b bVar4) {
        boolean z10;
        boolean z11;
        ConstraintWidget.b bVar5;
        ConstraintWidget.b bVar6;
        ConstraintWidget.b bVar7 = ConstraintWidget.b.FIXED;
        if (bVar3 != bVar7 && bVar3 != (bVar6 = ConstraintWidget.b.WRAP_CONTENT) && (bVar3 != ConstraintWidget.b.MATCH_PARENT || bVar == bVar6)) {
            z10 = false;
        } else {
            z10 = true;
        }
        if (bVar4 != bVar7 && bVar4 != (bVar5 = ConstraintWidget.b.WRAP_CONTENT) && (bVar4 != ConstraintWidget.b.MATCH_PARENT || bVar2 == bVar5)) {
            z11 = false;
        } else {
            z11 = true;
        }
        if (z10 || z11) {
            return true;
        }
        return false;
    }
}
