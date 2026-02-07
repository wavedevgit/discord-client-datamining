package fq;

import android.widget.TextView;
import com.withpersona.sdk2.inquiry.network.dto.ui.components.PrivacyPolicy;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.TextBasedComponentStyle;
import kotlin.Unit;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class e4 {
    public static final TextView b(c4 c4Var, m5 uiComponentHelper, final PrivacyPolicy config) {
        Intrinsics.checkNotNullParameter(c4Var, "<this>");
        Intrinsics.checkNotNullParameter(uiComponentHelper, "uiComponentHelper");
        Intrinsics.checkNotNullParameter(config, "config");
        final iq.t c10 = iq.t.c(uiComponentHelper.b());
        PrivacyPolicy.Attributes attributes = config.getAttributes();
        if (attributes != null) {
            TextView textView = c10.f29324b;
            Intrinsics.checkNotNullExpressionValue(textView, "textView");
            gq.f.d(textView, attributes.getText());
            uiComponentHelper.d(new Function0() { // from class: fq.d4
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit c11;
                    c11 = e4.c(PrivacyPolicy.this, c10);
                    return c11;
                }
            });
        }
        TextView root = c10.getRoot();
        Intrinsics.checkNotNullExpressionValue(root, "getRoot(...)");
        return root;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit c(PrivacyPolicy privacyPolicy, iq.t tVar) {
        TextBasedComponentStyle styles = privacyPolicy.getStyles();
        if (styles != null) {
            TextView textView = tVar.f29324b;
            Intrinsics.checkNotNullExpressionValue(textView, "textView");
            kq.f0.n(textView, styles, null, 2, null);
        }
        return Unit.f32056a;
    }
}
