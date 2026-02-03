package yp;

import com.withpersona.sdk2.inquiry.network.dto.ui.components.VerifyPersonaButton;
import com.withpersona.sdk2.inquiry.shared.ui.ButtonWithLoadingIndicator;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class r5 {
    public static final ButtonWithLoadingIndicator a(q5 q5Var, m5 uiComponentHelper, VerifyPersonaButton config) {
        Intrinsics.checkNotNullParameter(q5Var, "<this>");
        Intrinsics.checkNotNullParameter(uiComponentHelper, "uiComponentHelper");
        Intrinsics.checkNotNullParameter(config, "config");
        if (q5Var.a() != null) {
            return com.withpersona.sdk2.inquiry.steps.ui.components.f.f(q5Var, uiComponentHelper, config);
        }
        return null;
    }
}
