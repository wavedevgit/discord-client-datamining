package xp;

import android.widget.TextView;
import com.withpersona.sdk2.inquiry.network.dto.ui.components.Text;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.TextBasedComponentStyle;
import kotlin.Unit;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class g5 {
    public static final TextView b(e5 e5Var, m5 uiComponentHelper, final Text config) {
        Intrinsics.checkNotNullParameter(e5Var, "<this>");
        Intrinsics.checkNotNullParameter(uiComponentHelper, "uiComponentHelper");
        Intrinsics.checkNotNullParameter(config, "config");
        final aq.w c10 = aq.w.c(uiComponentHelper.b());
        Text.Attributes attributes = config.getAttributes();
        if (attributes != null) {
            TextView textView = c10.f6706b;
            Intrinsics.checkNotNullExpressionValue(textView, "textView");
            yp.f.d(textView, attributes.getText());
            uiComponentHelper.d(new Function0() { // from class: xp.f5
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit c11;
                    c11 = g5.c(Text.this, c10);
                    return c11;
                }
            });
        }
        TextView root = c10.getRoot();
        Intrinsics.checkNotNullExpressionValue(root, "getRoot(...)");
        return root;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit c(Text text, aq.w wVar) {
        TextBasedComponentStyle styles = text.getStyles();
        if (styles != null) {
            TextView textView = wVar.f6706b;
            Intrinsics.checkNotNullExpressionValue(textView, "textView");
            cq.f0.n(textView, styles, null, 2, null);
        }
        return Unit.f33282a;
    }
}
