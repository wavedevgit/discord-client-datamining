package dq;

import android.widget.LinearLayout;
import android.widget.TextView;
import com.google.android.material.checkbox.MaterialCheckBox;
import com.withpersona.sdk2.inquiry.network.dto.JsonLogicBoolean;
import com.withpersona.sdk2.inquiry.network.dto.ui.components.InputCheckbox;
import com.withpersona.sdk2.inquiry.network.dto.ui.components.InputCheckboxGroup;
import com.withpersona.sdk2.inquiry.network.dto.ui.components.OptionWithDescription;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.TextBasedComponentStyle;
import com.withpersona.sdk2.inquiry.steps.ui.components.InputCheckboxComponent;
import com.withpersona.sdk2.inquiry.steps.ui.components.InputCheckboxGroupComponent;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Set;
import kotlin.Unit;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class u0 {
    public static final LinearLayout c(final InputCheckboxGroupComponent inputCheckboxGroupComponent, m5 uiComponentHelper, final InputCheckboxGroup config) {
        Set set;
        List<OptionWithDescription> l10;
        String str;
        String str2;
        TextBasedComponentStyle errorTextStyle;
        boolean z10;
        JsonLogicBoolean jsonLogicBoolean;
        boolean z11;
        JsonLogicBoolean jsonLogicBoolean2;
        JsonLogicBoolean jsonLogicBoolean3;
        boolean z12;
        List<String> prefill;
        Intrinsics.checkNotNullParameter(inputCheckboxGroupComponent, "<this>");
        Intrinsics.checkNotNullParameter(uiComponentHelper, "uiComponentHelper");
        Intrinsics.checkNotNullParameter(config, "config");
        final gq.j c10 = gq.j.c(uiComponentHelper.b());
        InputCheckboxGroup.Attributes attributes = config.getAttributes();
        final ArrayList<MaterialCheckBox> arrayList = new ArrayList();
        if (attributes != null && (prefill = attributes.getPrefill()) != null) {
            set = CollectionsKt.l1(prefill);
        } else {
            set = null;
        }
        if (attributes == null || (l10 = attributes.getOptions()) == null) {
            l10 = CollectionsKt.l();
        }
        for (OptionWithDescription optionWithDescription : l10) {
            String value = optionWithDescription.getValue();
            if (set != null && set.contains(optionWithDescription.getValue())) {
                z10 = true;
            } else {
                z10 = false;
            }
            Boolean valueOf = Boolean.valueOf(z10);
            String text = optionWithDescription.getText();
            String descriptionText = optionWithDescription.getDescriptionText();
            if (attributes != null) {
                jsonLogicBoolean = attributes.getHidden();
            } else {
                jsonLogicBoolean = null;
            }
            if (attributes != null) {
                z11 = true;
                jsonLogicBoolean2 = jsonLogicBoolean;
                jsonLogicBoolean3 = attributes.getDisabled();
            } else {
                z11 = true;
                jsonLogicBoolean2 = jsonLogicBoolean;
                jsonLogicBoolean3 = null;
            }
            InputCheckbox inputCheckbox = new InputCheckbox(value, new InputCheckbox.Attributes(valueOf, text, descriptionText, jsonLogicBoolean2, jsonLogicBoolean3), config.getStyles());
            if (set != null && set.contains(optionWithDescription.getValue()) == z11) {
                z12 = z11;
            } else {
                z12 = false;
            }
            InputCheckboxComponent inputCheckboxComponent = new InputCheckboxComponent(inputCheckbox, z12);
            gq.i d10 = gq.i.d(uiComponentHelper.b(), c10.f25113b, false);
            Intrinsics.checkNotNullExpressionValue(d10, "inflate(...)");
            c10.f25113b.addView(r0.e(inputCheckboxComponent, uiComponentHelper, d10, inputCheckbox));
            d10.f25108b.setTag(optionWithDescription.getValue());
            if (inputCheckboxGroupComponent.b().b().contains(optionWithDescription.getValue())) {
                d10.f25108b.setChecked(z11);
            }
            MaterialCheckBox checkbox = d10.f25108b;
            Intrinsics.checkNotNullExpressionValue(checkbox, "checkbox");
            arrayList.add(checkbox);
        }
        for (MaterialCheckBox materialCheckBox : arrayList) {
            materialCheckBox.c(new MaterialCheckBox.b() { // from class: dq.s0
                @Override // com.google.android.material.checkbox.MaterialCheckBox.b
                public final void a(MaterialCheckBox materialCheckBox2, int i10) {
                    u0.d(InputCheckboxGroupComponent.this, arrayList, materialCheckBox2, i10);
                }
            });
        }
        InputCheckbox.InputCheckboxComponentStyle styles = config.getStyles();
        if (styles != null && (errorTextStyle = styles.getErrorTextStyle()) != null) {
            TextView checkboxGroupError = c10.f25114c;
            Intrinsics.checkNotNullExpressionValue(checkboxGroupError, "checkboxGroupError");
            str = null;
            iq.f0.n(checkboxGroupError, errorTextStyle, null, 2, null);
        } else {
            str = null;
        }
        if (attributes != null) {
            str2 = attributes.getLabel();
        } else {
            str2 = str;
        }
        if (str2 != null && str2.length() != 0) {
            c10.f25115d.setVisibility(0);
            c10.f25115d.setText(str2);
            uiComponentHelper.d(new Function0() { // from class: dq.t0
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit e10;
                    e10 = u0.e(InputCheckboxGroup.this, c10);
                    return e10;
                }
            });
        } else {
            c10.f25115d.setVisibility(8);
        }
        c10.getRoot().setTag(c10);
        LinearLayout root = c10.getRoot();
        Intrinsics.checkNotNullExpressionValue(root, "getRoot(...)");
        return root;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void d(InputCheckboxGroupComponent inputCheckboxGroupComponent, List list, MaterialCheckBox checkBox, int i10) {
        Intrinsics.checkNotNullParameter(checkBox, "checkBox");
        f(inputCheckboxGroupComponent, list);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit e(InputCheckboxGroup inputCheckboxGroup, gq.j jVar) {
        TextBasedComponentStyle textBasedStyle;
        InputCheckbox.InputCheckboxComponentStyle styles = inputCheckboxGroup.getStyles();
        if (styles != null && (textBasedStyle = styles.getTextBasedStyle()) != null) {
            TextView checkboxGroupLabel = jVar.f25115d;
            Intrinsics.checkNotNullExpressionValue(checkboxGroupLabel, "checkboxGroupLabel");
            iq.f0.n(checkboxGroupLabel, textBasedStyle, null, 2, null);
        }
        return Unit.f31988a;
    }

    private static final void f(InputCheckboxGroupComponent inputCheckboxGroupComponent, List list) {
        String str;
        eq.l b10 = inputCheckboxGroupComponent.b();
        LinkedHashSet linkedHashSet = new LinkedHashSet();
        Iterator it = list.iterator();
        while (it.hasNext()) {
            MaterialCheckBox materialCheckBox = (MaterialCheckBox) it.next();
            if (materialCheckBox.isChecked()) {
                Object tag = materialCheckBox.getTag();
                Intrinsics.checkNotNull(tag, "null cannot be cast to non-null type kotlin.String");
                str = (String) tag;
            } else {
                str = null;
            }
            if (str != null) {
                linkedHashSet.add(str);
            }
        }
        b10.c(linkedHashSet);
    }
}
