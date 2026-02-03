package aq;

import com.withpersona.sdk2.inquiry.network.dto.ui.components.CombinedStepButton;
import com.withpersona.sdk2.inquiry.shared.ui.ButtonWithLoadingIndicator;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class n {
    public static final ButtonWithLoadingIndicator a(m mVar, m5 uiComponentHelper, CombinedStepButton config) {
        Intrinsics.checkNotNullParameter(mVar, "<this>");
        Intrinsics.checkNotNullParameter(uiComponentHelper, "uiComponentHelper");
        Intrinsics.checkNotNullParameter(config, "config");
        return com.withpersona.sdk2.inquiry.steps.ui.components.f.f(mVar, uiComponentHelper, config);
    }
}
