package yp;

import android.view.View;
import java.util.List;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class q {
    public static final View a(com.withpersona.sdk2.inquiry.steps.ui.components.a aVar, m5 uiComponentHelper) {
        Intrinsics.checkNotNullParameter(aVar, "<this>");
        Intrinsics.checkNotNullParameter(uiComponentHelper, "uiComponentHelper");
        return null;
    }

    public static final com.withpersona.sdk2.inquiry.steps.ui.components.a b(com.withpersona.sdk2.inquiry.steps.ui.components.a aVar, k5 old, k5 k5Var) {
        List list;
        Intrinsics.checkNotNullParameter(aVar, "<this>");
        Intrinsics.checkNotNullParameter(old, "old");
        Intrinsics.checkNotNullParameter(k5Var, "new");
        wp.g h10 = aVar.h();
        List components = aVar.h().getComponents();
        if (components != null) {
            list = com.withpersona.sdk2.inquiry.steps.ui.components.f.m(components, old, k5Var);
        } else {
            list = null;
        }
        return com.withpersona.sdk2.inquiry.steps.ui.components.a.b(aVar, null, null, null, false, false, false, false, wp.g.c(h10, list, null, null, 6, null), 127, null);
    }
}
