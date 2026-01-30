package xp;

import android.widget.EditText;
import com.google.android.material.textfield.TextInputLayout;
import com.withpersona.sdk2.inquiry.network.dto.ui.components.InputSelect;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.InputSelectComponentStyle;
import kotlin.Unit;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.Intrinsics;
import kotlin.text.StringsKt;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class e2 {
    public static final TextInputLayout b(com.withpersona.sdk2.inquiry.steps.ui.components.e eVar, m5 uiComponentHelper, final InputSelect config) {
        EditText editText;
        Intrinsics.checkNotNullParameter(eVar, "<this>");
        Intrinsics.checkNotNullParameter(uiComponentHelper, "uiComponentHelper");
        Intrinsics.checkNotNullParameter(config, "config");
        final aq.r c10 = aq.r.c(uiComponentHelper.b());
        InputSelect.Attributes attributes = config.getAttributes();
        if (attributes != null) {
            String placeholder = attributes.getPlaceholder();
            if (placeholder != null && !StringsKt.k0(placeholder)) {
                c10.getRoot().setPlaceholderText(attributes.getPlaceholder());
                c10.getRoot().setExpandedHintEnabled(false);
                TextInputLayout root = c10.getRoot();
                Intrinsics.checkNotNullExpressionValue(root, "getRoot(...)");
                tp.o.a(root);
            }
            String prefill = attributes.getPrefill();
            if (prefill != null && (editText = c10.getRoot().getEditText()) != null) {
                editText.setText(prefill);
            }
            String label = attributes.getLabel();
            if (label != null) {
                c10.getRoot().setHint(label);
            }
        }
        uiComponentHelper.d(new Function0() { // from class: xp.d2
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit c11;
                c11 = e2.c(InputSelect.this, c10);
                return c11;
            }
        });
        TextInputLayout root2 = c10.getRoot();
        Intrinsics.checkNotNullExpressionValue(root2, "getRoot(...)");
        return root2;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit c(InputSelect inputSelect, aq.r rVar) {
        InputSelectComponentStyle styles = inputSelect.getStyles();
        if (styles != null) {
            TextInputLayout listSelector = rVar.f6691b;
            Intrinsics.checkNotNullExpressionValue(listSelector, "listSelector");
            cq.o.i(listSelector, styles);
        }
        return Unit.f33298a;
    }
}
