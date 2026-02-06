package fq;

import com.withpersona.sdk2.inquiry.network.dto.ui.components.SubmitButton;
import com.withpersona.sdk2.inquiry.shared.ui.ButtonWithLoadingIndicator;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class d5 {
    public static final ButtonWithLoadingIndicator a(c5 c5Var, m5 uiComponentHelper, SubmitButton config) {
        Intrinsics.checkNotNullParameter(c5Var, "<this>");
        Intrinsics.checkNotNullParameter(uiComponentHelper, "uiComponentHelper");
        Intrinsics.checkNotNullParameter(config, "config");
        return com.withpersona.sdk2.inquiry.steps.ui.components.f.f(c5Var, uiComponentHelper, config);
    }
}
