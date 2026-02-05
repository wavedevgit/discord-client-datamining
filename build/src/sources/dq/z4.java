package dq;

import android.view.View;
import android.view.ViewGroup;
import kotlin.Unit;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class z4 {
    public static final View b(final x4 x4Var, m5 uiComponentHelper) {
        Intrinsics.checkNotNullParameter(x4Var, "<this>");
        Intrinsics.checkNotNullParameter(uiComponentHelper, "uiComponentHelper");
        final View view = new View(uiComponentHelper.a());
        uiComponentHelper.d(new Function0() { // from class: dq.y4
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit c10;
                c10 = z4.c(view, x4Var);
                return c10;
            }
        });
        return view;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit c(View view, x4 x4Var) {
        ViewGroup.LayoutParams layoutParams = view.getLayoutParams();
        layoutParams.height = kotlin.ranges.d.d(x4Var.getHeight(), 1);
        view.setLayoutParams(layoutParams);
        return Unit.f31988a;
    }
}
