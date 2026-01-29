package xp;

import com.google.android.material.textfield.TextInputEditText;
import com.google.android.material.textfield.TextInputLayout;
import com.withpersona.sdk2.inquiry.network.dto.ui.components.InputTextArea;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.InputTextBasedComponentStyle;
import com.withpersona.sdk2.inquiry.steps.ui.components.InputTextAreaComponent;
import kotlin.Unit;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class g2 {
    public static final TextInputLayout b(InputTextAreaComponent inputTextAreaComponent, m5 uiComponentHelper, final InputTextArea config) {
        Intrinsics.checkNotNullParameter(inputTextAreaComponent, "<this>");
        Intrinsics.checkNotNullParameter(uiComponentHelper, "uiComponentHelper");
        Intrinsics.checkNotNullParameter(config, "config");
        final aq.n c10 = aq.n.c(uiComponentHelper.b());
        InputTextArea.Attributes attributes = config.getAttributes();
        if (attributes != null) {
            vm.t b10 = inputTextAreaComponent.b();
            TextInputEditText editText = c10.f6672b;
            Intrinsics.checkNotNullExpressionValue(editText, "editText");
            vm.u.b(b10, editText);
            String label = attributes.getLabel();
            if (label != null) {
                c10.f6673c.setHint(label);
            }
            String placeholder = attributes.getPlaceholder();
            if (placeholder != null) {
                c10.f6673c.setPlaceholderText(placeholder);
                TextInputLayout inputLayout = c10.f6673c;
                Intrinsics.checkNotNullExpressionValue(inputLayout, "inputLayout");
                tp.o.a(inputLayout);
            }
            Integer rows = attributes.getRows();
            if (rows != null) {
                int intValue = rows.intValue();
                c10.f6672b.setMaxLines(intValue);
                c10.f6672b.setMinLines(intValue);
                c10.f6672b.setVerticalScrollBarEnabled(true);
            }
        }
        uiComponentHelper.d(new Function0() { // from class: xp.f2
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit c11;
                c11 = g2.c(InputTextArea.this, c10);
                return c11;
            }
        });
        TextInputLayout root = c10.getRoot();
        Intrinsics.checkNotNullExpressionValue(root, "getRoot(...)");
        return root;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit c(InputTextArea inputTextArea, aq.n nVar) {
        InputTextBasedComponentStyle styles = inputTextArea.getStyles();
        if (styles != null) {
            TextInputLayout inputLayout = nVar.f6673c;
            Intrinsics.checkNotNullExpressionValue(inputLayout, "inputLayout");
            cq.a0.k(inputLayout, styles);
        }
        return Unit.f33282a;
    }
}
