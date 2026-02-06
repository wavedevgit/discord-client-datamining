package fq;

import com.google.android.material.button.MaterialButton;
import com.withpersona.sdk2.inquiry.network.dto.ui.components.CancelButton;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class j {
    public static final MaterialButton a(i iVar, m5 uiComponentHelper, CancelButton config) {
        Intrinsics.checkNotNullParameter(iVar, "<this>");
        Intrinsics.checkNotNullParameter(uiComponentHelper, "uiComponentHelper");
        Intrinsics.checkNotNullParameter(config, "config");
        return com.withpersona.sdk2.inquiry.steps.ui.components.f.d(iVar, uiComponentHelper, config);
    }
}
