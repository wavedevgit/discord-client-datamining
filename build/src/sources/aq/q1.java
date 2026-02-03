package aq;

import com.google.android.material.textfield.TextInputLayout;
import com.withpersona.sdk2.inquiry.network.dto.ui.components.InputMultiSelect;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.InputSelectComponentStyle;
import kotlin.Unit;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.Intrinsics;
import kotlin.text.StringsKt;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class q1 {
    public static final TextInputLayout b(com.withpersona.sdk2.inquiry.steps.ui.components.d dVar, m5 uiComponentHelper, final InputMultiSelect config) {
        Intrinsics.checkNotNullParameter(dVar, "<this>");
        Intrinsics.checkNotNullParameter(uiComponentHelper, "uiComponentHelper");
        Intrinsics.checkNotNullParameter(config, "config");
        final dq.r c10 = dq.r.c(uiComponentHelper.b());
        InputMultiSelect.Attributes attributes = config.getAttributes();
        if (attributes != null) {
            String placeholder = attributes.getPlaceholder();
            if (placeholder != null && !StringsKt.k0(placeholder)) {
                c10.getRoot().setPlaceholderText(attributes.getPlaceholder());
                c10.getRoot().setExpandedHintEnabled(false);
                TextInputLayout root = c10.getRoot();
                Intrinsics.checkNotNullExpressionValue(root, "getRoot(...)");
                wp.o.a(root);
            }
            String label = attributes.getLabel();
            if (label != null) {
                c10.getRoot().setHint(label);
            }
        }
        uiComponentHelper.d(new Function0() { // from class: aq.p1
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit c11;
                c11 = q1.c(InputMultiSelect.this, c10);
                return c11;
            }
        });
        TextInputLayout root2 = c10.getRoot();
        Intrinsics.checkNotNullExpressionValue(root2, "getRoot(...)");
        return root2;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit c(InputMultiSelect inputMultiSelect, dq.r rVar) {
        InputSelectComponentStyle styles = inputMultiSelect.getStyles();
        if (styles != null) {
            TextInputLayout listSelector = rVar.f20821b;
            Intrinsics.checkNotNullExpressionValue(listSelector, "listSelector");
            fq.o.i(listSelector, styles);
        }
        return Unit.f32464a;
    }
}
