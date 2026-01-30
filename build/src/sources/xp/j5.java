package xp;

import android.widget.TextView;
import com.withpersona.sdk2.inquiry.network.dto.ui.components.Title;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.TextBasedComponentStyle;
import kotlin.Unit;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class j5 {
    public static final TextView b(h5 h5Var, m5 uiComponentHelper, final Title config) {
        Intrinsics.checkNotNullParameter(h5Var, "<this>");
        Intrinsics.checkNotNullParameter(uiComponentHelper, "uiComponentHelper");
        Intrinsics.checkNotNullParameter(config, "config");
        final aq.x c10 = aq.x.c(uiComponentHelper.b());
        Title.Attributes attributes = config.getAttributes();
        if (attributes != null) {
            TextView textView = c10.f6708b;
            Intrinsics.checkNotNullExpressionValue(textView, "textView");
            yp.f.d(textView, attributes.getText());
            uiComponentHelper.d(new Function0() { // from class: xp.i5
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit c11;
                    c11 = j5.c(Title.this, c10);
                    return c11;
                }
            });
        }
        TextView root = c10.getRoot();
        Intrinsics.checkNotNullExpressionValue(root, "getRoot(...)");
        return root;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit c(Title title, aq.x xVar) {
        TextBasedComponentStyle styles = title.getStyles();
        if (styles != null) {
            TextView textView = xVar.f6708b;
            Intrinsics.checkNotNullExpressionValue(textView, "textView");
            cq.f0.n(textView, styles, null, 2, null);
        }
        return Unit.f33298a;
    }
}
