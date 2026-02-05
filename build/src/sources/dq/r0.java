package dq;

import android.content.Context;
import android.content.res.ColorStateList;
import android.view.View;
import android.view.ViewGroup;
import android.widget.CompoundButton;
import android.widget.TextView;
import androidx.constraintlayout.widget.ConstraintLayout;
import com.facebook.react.views.text.internal.span.SetSpanOperation;
import com.withpersona.sdk2.inquiry.network.dto.ui.components.InputCheckbox;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.AttributeStyles;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.StyleElements;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.TextBasedComponentStyle;
import com.withpersona.sdk2.inquiry.steps.ui.components.InputCheckboxComponent;
import kotlin.Unit;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.Intrinsics;
import kotlin.text.StringsKt;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class r0 {
    public static final ConstraintLayout d(InputCheckboxComponent inputCheckboxComponent, m5 uiComponentHelper, InputCheckbox config) {
        Intrinsics.checkNotNullParameter(inputCheckboxComponent, "<this>");
        Intrinsics.checkNotNullParameter(uiComponentHelper, "uiComponentHelper");
        Intrinsics.checkNotNullParameter(config, "config");
        gq.i c10 = gq.i.c(uiComponentHelper.b());
        Intrinsics.checkNotNullExpressionValue(c10, "inflate(...)");
        return e(inputCheckboxComponent, uiComponentHelper, c10, config);
    }

    public static final ConstraintLayout e(final InputCheckboxComponent inputCheckboxComponent, m5 uiComponentHelper, final gq.i binding, final InputCheckbox config) {
        String str;
        AttributeStyles.TextBasedTextColorStyle textColorHighlight;
        StyleElements.SimpleElementColor base;
        StyleElements.SimpleElementColorValue base2;
        Integer value;
        Intrinsics.checkNotNullParameter(inputCheckboxComponent, "<this>");
        Intrinsics.checkNotNullParameter(uiComponentHelper, "uiComponentHelper");
        Intrinsics.checkNotNullParameter(binding, "binding");
        Intrinsics.checkNotNullParameter(config, "config");
        Context a10 = uiComponentHelper.a();
        binding.f25108b.setChecked(inputCheckboxComponent.a().b());
        binding.f25108b.setClickable(false);
        binding.f25108b.setFocusable(false);
        InputCheckbox.Attributes attributes = config.getAttributes();
        String str2 = null;
        if (attributes != null) {
            str = attributes.getLabel();
        } else {
            str = null;
        }
        if (str != null && !StringsKt.k0(str)) {
            binding.f25111e.setVisibility(0);
            TextView checkboxLabel = binding.f25111e;
            Intrinsics.checkNotNullExpressionValue(checkboxLabel, "checkboxLabel");
            eq.f.d(checkboxLabel, str);
        } else {
            binding.f25111e.setVisibility(8);
        }
        InputCheckbox.Attributes attributes2 = config.getAttributes();
        if (attributes2 != null) {
            str2 = attributes2.getDescriptionText();
        }
        if (str2 != null && !StringsKt.k0(str2)) {
            binding.f25109c.setVisibility(0);
            TextView checkboxDescription = binding.f25109c;
            Intrinsics.checkNotNullExpressionValue(checkboxDescription, "checkboxDescription");
            eq.f.d(checkboxDescription, str2);
        } else {
            binding.f25109c.setVisibility(8);
        }
        binding.f25108b.setOnCheckedChangeListener(new CompoundButton.OnCheckedChangeListener() { // from class: dq.o0
            @Override // android.widget.CompoundButton.OnCheckedChangeListener
            public final void onCheckedChanged(CompoundButton compoundButton, boolean z10) {
                r0.f(InputCheckboxComponent.this, compoundButton, z10);
            }
        });
        binding.getRoot().setOnClickListener(new View.OnClickListener() { // from class: dq.p0
            @Override // android.view.View.OnClickListener
            public final void onClick(View view) {
                r0.g(gq.i.this, view);
            }
        });
        InputCheckbox.InputCheckboxComponentStyle styles = config.getStyles();
        if (styles != null && (textColorHighlight = styles.getTextColorHighlight()) != null && (base = textColorHighlight.getBase()) != null && (base2 = base.getBase()) != null && (value = base2.getValue()) != null) {
            binding.f25108b.setButtonTintList(new ColorStateList(new int[][]{new int[]{-16842910}, new int[]{-16842912}, new int[]{16842912}}, new int[]{r1.c.l(pp.s.d(a10, zg.b.f55554k, null, false, 6, null), (int) (q1.j.h(a10.getResources(), zg.d.f55611x) * ((float) SetSpanOperation.SPAN_MAX_PRIORITY))), pp.s.d(a10, zg.b.f55554k, null, false, 6, null), value.intValue()}));
        }
        uiComponentHelper.d(new Function0() { // from class: dq.q0
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit h10;
                h10 = r0.h(InputCheckbox.this, binding);
                return h10;
            }
        });
        binding.getRoot().setTag(binding);
        ConstraintLayout root = binding.getRoot();
        Intrinsics.checkNotNullExpressionValue(root, "getRoot(...)");
        return root;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void f(InputCheckboxComponent inputCheckboxComponent, CompoundButton compoundButton, boolean z10) {
        inputCheckboxComponent.a().c(z10);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void g(gq.i iVar, View view) {
        iVar.f25108b.toggle();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit h(InputCheckbox inputCheckbox, gq.i iVar) {
        TextBasedComponentStyle errorTextStyle;
        TextBasedComponentStyle descriptionTextStyle;
        TextBasedComponentStyle textBasedStyle;
        InputCheckbox.InputCheckboxComponentStyle styles = inputCheckbox.getStyles();
        if (styles != null && (textBasedStyle = styles.getTextBasedStyle()) != null) {
            TextView checkboxLabel = iVar.f25111e;
            Intrinsics.checkNotNullExpressionValue(checkboxLabel, "checkboxLabel");
            iq.f0.n(checkboxLabel, textBasedStyle, null, 2, null);
        }
        InputCheckbox.InputCheckboxComponentStyle styles2 = inputCheckbox.getStyles();
        if (styles2 != null && (descriptionTextStyle = styles2.getDescriptionTextStyle()) != null) {
            TextView checkboxDescription = iVar.f25109c;
            Intrinsics.checkNotNullExpressionValue(checkboxDescription, "checkboxDescription");
            iq.f0.n(checkboxDescription, descriptionTextStyle, null, 2, null);
        }
        InputCheckbox.InputCheckboxComponentStyle styles3 = inputCheckbox.getStyles();
        if (styles3 != null && (errorTextStyle = styles3.getErrorTextStyle()) != null) {
            TextView checkboxError = iVar.f25110d;
            Intrinsics.checkNotNullExpressionValue(checkboxError, "checkboxError");
            iq.f0.n(checkboxError, errorTextStyle, null, 2, null);
        }
        TextView checkboxLabel2 = iVar.f25111e;
        Intrinsics.checkNotNullExpressionValue(checkboxLabel2, "checkboxLabel");
        ViewGroup.LayoutParams layoutParams = checkboxLabel2.getLayoutParams();
        if (layoutParams != null) {
            ConstraintLayout.LayoutParams layoutParams2 = (ConstraintLayout.LayoutParams) layoutParams;
            TextView checkboxLabel3 = iVar.f25111e;
            Intrinsics.checkNotNullExpressionValue(checkboxLabel3, "checkboxLabel");
            int a10 = zp.p.a(checkboxLabel3);
            TextView checkboxDescription2 = iVar.f25109c;
            Intrinsics.checkNotNullExpressionValue(checkboxDescription2, "checkboxDescription");
            int a11 = a10 + zp.p.a(checkboxDescription2);
            if (a11 != 0) {
                if (a11 != 1) {
                    ((ViewGroup.MarginLayoutParams) layoutParams2).topMargin = (int) pp.h.a(4.0d);
                } else {
                    ((ViewGroup.MarginLayoutParams) layoutParams2).topMargin = (int) pp.h.a(0.0d);
                }
            }
            checkboxLabel2.setLayoutParams(layoutParams2);
            return Unit.f31988a;
        }
        throw new NullPointerException("null cannot be cast to non-null type androidx.constraintlayout.widget.ConstraintLayout.LayoutParams");
    }
}
