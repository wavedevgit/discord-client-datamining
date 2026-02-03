package androidx.constraintlayout.core.widgets;

import androidx.constraintlayout.core.widgets.ConstraintWidget;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class g {

    /* renamed from: a  reason: collision with root package name */
    static boolean[] f2414a = new boolean[3];

    /* JADX INFO: Access modifiers changed from: package-private */
    public static void a(ConstraintWidgetContainer constraintWidgetContainer, h1.d dVar, ConstraintWidget constraintWidget) {
        constraintWidget.f2292t = -1;
        constraintWidget.f2294u = -1;
        ConstraintWidget.b bVar = constraintWidgetContainer.Z[0];
        ConstraintWidget.b bVar2 = ConstraintWidget.b.WRAP_CONTENT;
        if (bVar != bVar2 && constraintWidget.Z[0] == ConstraintWidget.b.MATCH_PARENT) {
            int i10 = constraintWidget.O.f2357g;
            int W = constraintWidgetContainer.W() - constraintWidget.Q.f2357g;
            d dVar2 = constraintWidget.O;
            dVar2.f2359i = dVar.q(dVar2);
            d dVar3 = constraintWidget.Q;
            dVar3.f2359i = dVar.q(dVar3);
            dVar.f(constraintWidget.O.f2359i, i10);
            dVar.f(constraintWidget.Q.f2359i, W);
            constraintWidget.f2292t = 2;
            constraintWidget.P0(i10, W);
        }
        if (constraintWidgetContainer.Z[1] != bVar2 && constraintWidget.Z[1] == ConstraintWidget.b.MATCH_PARENT) {
            int i11 = constraintWidget.P.f2357g;
            int x10 = constraintWidgetContainer.x() - constraintWidget.R.f2357g;
            d dVar4 = constraintWidget.P;
            dVar4.f2359i = dVar.q(dVar4);
            d dVar5 = constraintWidget.R;
            dVar5.f2359i = dVar.q(dVar5);
            dVar.f(constraintWidget.P.f2359i, i11);
            dVar.f(constraintWidget.R.f2359i, x10);
            if (constraintWidget.f2277l0 > 0 || constraintWidget.V() == 8) {
                d dVar6 = constraintWidget.S;
                dVar6.f2359i = dVar.q(dVar6);
                dVar.f(constraintWidget.S.f2359i, constraintWidget.f2277l0 + i11);
            }
            constraintWidget.f2294u = 2;
            constraintWidget.g1(i11, x10);
        }
    }

    public static final boolean b(int i10, int i11) {
        return (i10 & i11) == i11;
    }
}
