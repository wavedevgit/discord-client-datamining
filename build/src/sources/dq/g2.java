package dq;

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
        final gq.n c10 = gq.n.c(uiComponentHelper.b());
        InputTextArea.Attributes attributes = config.getAttributes();
        if (attributes != null) {
            bn.t b10 = inputTextAreaComponent.b();
            TextInputEditText editText = c10.f25126b;
            Intrinsics.checkNotNullExpressionValue(editText, "editText");
            bn.u.b(b10, editText);
            String label = attributes.getLabel();
            if (label != null) {
                c10.f25127c.setHint(label);
            }
            String placeholder = attributes.getPlaceholder();
            if (placeholder != null) {
                c10.f25127c.setPlaceholderText(placeholder);
                TextInputLayout inputLayout = c10.f25127c;
                Intrinsics.checkNotNullExpressionValue(inputLayout, "inputLayout");
                zp.o.a(inputLayout);
            }
            Integer rows = attributes.getRows();
            if (rows != null) {
                int intValue = rows.intValue();
                c10.f25126b.setMaxLines(intValue);
                c10.f25126b.setMinLines(intValue);
                c10.f25126b.setVerticalScrollBarEnabled(true);
            }
        }
        uiComponentHelper.d(new Function0() { // from class: dq.f2
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
    public static final Unit c(InputTextArea inputTextArea, gq.n nVar) {
        InputTextBasedComponentStyle styles = inputTextArea.getStyles();
        if (styles != null) {
            TextInputLayout inputLayout = nVar.f25127c;
            Intrinsics.checkNotNullExpressionValue(inputLayout, "inputLayout");
            iq.a0.k(inputLayout, styles);
        }
        return Unit.f31988a;
    }
}
