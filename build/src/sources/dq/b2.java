package dq;

import android.content.res.ColorStateList;
import android.view.View;
import android.widget.CompoundButton;
import android.widget.LinearLayout;
import android.widget.RadioButton;
import android.widget.TextView;
import com.google.android.material.radiobutton.MaterialRadioButton;
import com.withpersona.sdk2.inquiry.network.dto.ui.components.InputRadioGroup;
import com.withpersona.sdk2.inquiry.network.dto.ui.components.OptionWithDescription;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.StyleElements;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.TextBasedComponentStyle;
import com.withpersona.sdk2.inquiry.steps.ui.components.InputRadioGroupComponent;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import kotlin.Unit;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.Intrinsics;
import kotlin.text.StringsKt;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class b2 {
    public static final LinearLayout f(final InputRadioGroupComponent inputRadioGroupComponent, m5 uiComponentHelper, final InputRadioGroup config) {
        List<OptionWithDescription> l10;
        TextBasedComponentStyle errorTextStyle;
        Intrinsics.checkNotNullParameter(inputRadioGroupComponent, "<this>");
        Intrinsics.checkNotNullParameter(uiComponentHelper, "uiComponentHelper");
        Intrinsics.checkNotNullParameter(config, "config");
        final gq.m c10 = gq.m.c(uiComponentHelper.b());
        InputRadioGroup.Attributes attributes = config.getAttributes();
        final ArrayList arrayList = new ArrayList();
        if (attributes == null || (l10 = attributes.getOptions()) == null) {
            l10 = CollectionsKt.l();
        }
        for (final OptionWithDescription optionWithDescription : l10) {
            final gq.b c11 = gq.b.c(uiComponentHelper.b(), c10.getRoot(), false);
            TextView radioButtonLabel = c11.f25061d;
            Intrinsics.checkNotNullExpressionValue(radioButtonLabel, "radioButtonLabel");
            eq.f.d(radioButtonLabel, optionWithDescription.getText());
            String descriptionText = optionWithDescription.getDescriptionText();
            if (descriptionText != null && !StringsKt.k0(descriptionText)) {
                c11.f25060c.setVisibility(0);
                TextView radioButtonDescription = c11.f25060c;
                Intrinsics.checkNotNullExpressionValue(radioButtonDescription, "radioButtonDescription");
                eq.f.d(radioButtonDescription, descriptionText);
            } else {
                c11.f25060c.setVisibility(8);
            }
            uiComponentHelper.d(new Function0() { // from class: dq.w1
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit i10;
                    i10 = b2.i(InputRadioGroup.this, c11);
                    return i10;
                }
            });
            c11.f25059b.setOnCheckedChangeListener(new CompoundButton.OnCheckedChangeListener() { // from class: dq.x1
                @Override // android.widget.CompoundButton.OnCheckedChangeListener
                public final void onCheckedChanged(CompoundButton compoundButton, boolean z10) {
                    b2.j(arrayList, config, optionWithDescription, inputRadioGroupComponent, compoundButton, z10);
                }
            });
            c11.getRoot().setOnClickListener(new View.OnClickListener() { // from class: dq.y1
                @Override // android.view.View.OnClickListener
                public final void onClick(View view) {
                    b2.k(gq.b.this, view);
                }
            });
            c10.f25122b.addView(c11.getRoot());
            MaterialRadioButton radioButton = c11.f25059b;
            Intrinsics.checkNotNullExpressionValue(radioButton, "radioButton");
            arrayList.add(radioButton);
            if (Intrinsics.areEqual(inputRadioGroupComponent.b().b(), optionWithDescription.getValue())) {
                c11.f25059b.setChecked(true);
            }
        }
        InputRadioGroup.InputRadioGroupComponentStyle styles = config.getStyles();
        String str = null;
        if (styles != null && (errorTextStyle = styles.getErrorTextStyle()) != null) {
            TextView radioGroupError = c10.f25123c;
            Intrinsics.checkNotNullExpressionValue(radioGroupError, "radioGroupError");
            iq.f0.n(radioGroupError, errorTextStyle, null, 2, null);
        }
        if (attributes != null) {
            str = attributes.getLabel();
        }
        if (str != null && str.length() != 0) {
            c10.f25124d.setVisibility(0);
            c10.f25124d.setText(str);
            uiComponentHelper.d(new Function0() { // from class: dq.z1
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit g10;
                    g10 = b2.g(InputRadioGroup.this, c10);
                    return g10;
                }
            });
        } else {
            c10.f25124d.setVisibility(8);
        }
        uiComponentHelper.d(new Function0() { // from class: dq.a2
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit h10;
                h10 = b2.h(InputRadioGroup.this, c10);
                return h10;
            }
        });
        c10.getRoot().setTag(c10);
        LinearLayout root = c10.getRoot();
        Intrinsics.checkNotNullExpressionValue(root, "getRoot(...)");
        return root;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit g(InputRadioGroup inputRadioGroup, gq.m mVar) {
        TextBasedComponentStyle textBasedStyle;
        InputRadioGroup.InputRadioGroupComponentStyle styles = inputRadioGroup.getStyles();
        if (styles != null && (textBasedStyle = styles.getTextBasedStyle()) != null) {
            TextView radioGroupLabel = mVar.f25124d;
            Intrinsics.checkNotNullExpressionValue(radioGroupLabel, "radioGroupLabel");
            iq.f0.n(radioGroupLabel, textBasedStyle, null, 2, null);
        }
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit h(InputRadioGroup inputRadioGroup, gq.m mVar) {
        StyleElements.SizeSet margins;
        InputRadioGroup.InputRadioGroupComponentStyle styles = inputRadioGroup.getStyles();
        if (styles != null && (margins = styles.getMargins()) != null) {
            LinearLayout root = mVar.getRoot();
            Intrinsics.checkNotNullExpressionValue(root, "getRoot(...)");
            lq.d.c(root, margins);
        }
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit i(InputRadioGroup inputRadioGroup, gq.b bVar) {
        TextBasedComponentStyle descriptionTextStyle;
        TextBasedComponentStyle textBasedStyle;
        InputRadioGroup.InputRadioGroupComponentStyle styles = inputRadioGroup.getStyles();
        if (styles != null && (textBasedStyle = styles.getTextBasedStyle()) != null) {
            TextView radioButtonLabel = bVar.f25061d;
            Intrinsics.checkNotNullExpressionValue(radioButtonLabel, "radioButtonLabel");
            iq.f0.n(radioButtonLabel, textBasedStyle, null, 2, null);
        }
        InputRadioGroup.InputRadioGroupComponentStyle styles2 = inputRadioGroup.getStyles();
        if (styles2 != null && (descriptionTextStyle = styles2.getDescriptionTextStyle()) != null) {
            TextView radioButtonDescription = bVar.f25060c;
            Intrinsics.checkNotNullExpressionValue(radioButtonDescription, "radioButtonDescription");
            iq.f0.n(radioButtonDescription, descriptionTextStyle, null, 2, null);
        }
        bVar.f25059b.setButtonTintList(ColorStateList.valueOf(r1.c.l(bVar.f25061d.getCurrentTextColor(), 150)));
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void j(List list, InputRadioGroup inputRadioGroup, OptionWithDescription optionWithDescription, InputRadioGroupComponent inputRadioGroupComponent, CompoundButton compoundButton, boolean z10) {
        if (z10) {
            ArrayList<RadioButton> arrayList = new ArrayList();
            for (Object obj : list) {
                if (!Intrinsics.areEqual((RadioButton) obj, compoundButton)) {
                    arrayList.add(obj);
                }
            }
            for (RadioButton radioButton : arrayList) {
                radioButton.setChecked(false);
            }
            l(inputRadioGroupComponent, inputRadioGroup, optionWithDescription.getText());
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void k(gq.b bVar, View view) {
        if (!bVar.f25059b.isChecked()) {
            bVar.f25059b.setChecked(true);
        }
    }

    private static final void l(InputRadioGroupComponent inputRadioGroupComponent, InputRadioGroup inputRadioGroup, String str) {
        List<OptionWithDescription> options;
        Object obj;
        InputRadioGroup.Attributes attributes = inputRadioGroup.getAttributes();
        String str2 = null;
        if (attributes != null && (options = attributes.getOptions()) != null) {
            Iterator<T> it = options.iterator();
            while (true) {
                if (it.hasNext()) {
                    obj = it.next();
                    if (Intrinsics.areEqual(((OptionWithDescription) obj).getText(), str)) {
                        break;
                    }
                } else {
                    obj = null;
                    break;
                }
            }
            OptionWithDescription optionWithDescription = (OptionWithDescription) obj;
            if (optionWithDescription != null) {
                str2 = optionWithDescription.getValue();
            }
        }
        if (str2 != null) {
            inputRadioGroupComponent.b().c(str2);
        }
    }
}
