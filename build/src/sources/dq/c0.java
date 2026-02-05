package dq;

import android.widget.LinearLayout;
import android.widget.TextView;
import androidx.constraintlayout.widget.ConstraintLayout;
import com.google.android.material.textfield.TextInputLayout;
import com.withpersona.sdk2.inquiry.network.dto.JsonLogicBoolean;
import com.withpersona.sdk2.inquiry.network.dto.ui.BasicButtonAttributes;
import com.withpersona.sdk2.inquiry.network.dto.ui.components.Button;
import com.withpersona.sdk2.inquiry.network.dto.ui.components.GovernmentIdNfcScan;
import com.withpersona.sdk2.inquiry.network.dto.ui.components.InputDate;
import com.withpersona.sdk2.inquiry.network.dto.ui.components.InputText;
import com.withpersona.sdk2.inquiry.network.dto.ui.components.SubmitButton;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.ButtonSubmitComponentStyle;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.InputTextBasedComponentStyle;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.TextBasedComponentStyle;
import com.withpersona.sdk2.inquiry.shared.ui.ButtonWithLoadingIndicator;
import com.withpersona.sdk2.inquiry.steps.ui.components.GovernmentIdNfcScanComponent;
import com.withpersona.sdk2.inquiry.steps.ui.components.InputDateComponent;
import com.withpersona.sdk2.inquiry.steps.ui.components.InputTextComponent;
import java.util.List;
import kotlin.Unit;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.Intrinsics;
import kotlin.text.StringsKt;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class c0 {
    public static final LinearLayout c(GovernmentIdNfcScanComponent governmentIdNfcScanComponent, m5 uiComponentHelper, final GovernmentIdNfcScan config) {
        String str;
        String str2;
        JsonLogicBoolean jsonLogicBoolean;
        JsonLogicBoolean jsonLogicBoolean2;
        InputTextBasedComponentStyle inputTextBasedComponentStyle;
        String str3;
        String str4;
        JsonLogicBoolean jsonLogicBoolean3;
        JsonLogicBoolean jsonLogicBoolean4;
        InputTextBasedComponentStyle inputTextBasedComponentStyle2;
        String str5;
        String str6;
        JsonLogicBoolean jsonLogicBoolean5;
        JsonLogicBoolean jsonLogicBoolean6;
        InputDate.InputDateComponentStyle inputDateComponentStyle;
        String str7;
        String str8;
        JsonLogicBoolean jsonLogicBoolean7;
        JsonLogicBoolean jsonLogicBoolean8;
        InputDate.InputDateComponentStyle inputDateComponentStyle2;
        ButtonSubmitComponentStyle buttonSubmitComponentStyle;
        Boolean hidePrefilledInputs;
        Intrinsics.checkNotNullParameter(governmentIdNfcScanComponent, "<this>");
        Intrinsics.checkNotNullParameter(uiComponentHelper, "uiComponentHelper");
        Intrinsics.checkNotNullParameter(config, "config");
        LinearLayout linearLayout = new LinearLayout(uiComponentHelper.a());
        linearLayout.setOrientation(1);
        GovernmentIdNfcScan.Attributes attributes = config.getAttributes();
        String str9 = null;
        if (attributes != null) {
            str = attributes.getCardAccessNumberLabel();
        } else {
            str = null;
        }
        GovernmentIdNfcScan.Attributes attributes2 = config.getAttributes();
        if (attributes2 != null) {
            str2 = attributes2.getPrefillCardAccessNumber();
        } else {
            str2 = null;
        }
        InputText.InputType inputType = InputText.InputType.TEXT;
        GovernmentIdNfcScan.Attributes attributes3 = config.getAttributes();
        if (attributes3 != null) {
            jsonLogicBoolean = attributes3.getDisabled();
        } else {
            jsonLogicBoolean = null;
        }
        GovernmentIdNfcScan.Attributes attributes4 = config.getAttributes();
        if (attributes4 != null) {
            jsonLogicBoolean2 = attributes4.getHidden();
        } else {
            jsonLogicBoolean2 = null;
        }
        InputText.Attributes attributes5 = new InputText.Attributes(str2, str, null, inputType, null, jsonLogicBoolean2, jsonLogicBoolean);
        GovernmentIdNfcScan.GovernmentIdNfcScanStyles styles = config.getStyles();
        if (styles != null) {
            inputTextBasedComponentStyle = styles.getDocumentNumberStyle();
        } else {
            inputTextBasedComponentStyle = null;
        }
        InputText inputText = new InputText("can_access_code", attributes5, inputTextBasedComponentStyle);
        final TextInputLayout b10 = i2.b(new InputTextComponent(inputText), uiComponentHelper, inputText, governmentIdNfcScanComponent.c());
        b10.setId(bq.e.f7113c0);
        linearLayout.addView(b10);
        GovernmentIdNfcScan.Attributes attributes6 = config.getAttributes();
        if (attributes6 != null) {
            str3 = attributes6.getDocumentNumberLabel();
        } else {
            str3 = null;
        }
        GovernmentIdNfcScan.Attributes attributes7 = config.getAttributes();
        if (attributes7 != null) {
            str4 = attributes7.getPrefillDocumentNumber();
        } else {
            str4 = null;
        }
        GovernmentIdNfcScan.Attributes attributes8 = config.getAttributes();
        if (attributes8 != null) {
            jsonLogicBoolean3 = attributes8.getDisabled();
        } else {
            jsonLogicBoolean3 = null;
        }
        GovernmentIdNfcScan.Attributes attributes9 = config.getAttributes();
        if (attributes9 != null) {
            jsonLogicBoolean4 = attributes9.getHidden();
        } else {
            jsonLogicBoolean4 = null;
        }
        InputText.Attributes attributes10 = new InputText.Attributes(str4, str3, null, inputType, null, jsonLogicBoolean4, jsonLogicBoolean3);
        GovernmentIdNfcScan.GovernmentIdNfcScanStyles styles2 = config.getStyles();
        if (styles2 != null) {
            inputTextBasedComponentStyle2 = styles2.getDocumentNumberStyle();
        } else {
            inputTextBasedComponentStyle2 = null;
        }
        InputText inputText2 = new InputText("doc_number", attributes10, inputTextBasedComponentStyle2);
        final TextInputLayout b11 = i2.b(new InputTextComponent(inputText2), uiComponentHelper, inputText2, governmentIdNfcScanComponent.g());
        b11.setId(bq.e.f7117e0);
        linearLayout.addView(b11);
        GovernmentIdNfcScan.Attributes attributes11 = config.getAttributes();
        if (attributes11 != null) {
            str5 = attributes11.getDateOfBirthLabel();
        } else {
            str5 = null;
        }
        GovernmentIdNfcScan.Attributes attributes12 = config.getAttributes();
        if (attributes12 != null) {
            str6 = attributes12.getPrefillDateOfBirth();
        } else {
            str6 = null;
        }
        GovernmentIdNfcScan.Companion companion = GovernmentIdNfcScan.Companion;
        List<String> generateTextMonths = companion.generateTextMonths();
        GovernmentIdNfcScan.Attributes attributes13 = config.getAttributes();
        if (attributes13 != null) {
            jsonLogicBoolean5 = attributes13.getDisabled();
        } else {
            jsonLogicBoolean5 = null;
        }
        GovernmentIdNfcScan.Attributes attributes14 = config.getAttributes();
        if (attributes14 != null) {
            jsonLogicBoolean6 = attributes14.getHidden();
        } else {
            jsonLogicBoolean6 = null;
        }
        InputDate.Attributes attributes15 = new InputDate.Attributes(str6, str5, null, null, null, generateTextMonths, jsonLogicBoolean6, jsonLogicBoolean5, 28, null);
        GovernmentIdNfcScan.GovernmentIdNfcScanStyles styles3 = config.getStyles();
        if (styles3 != null) {
            inputDateComponentStyle = styles3.getDateStyle();
        } else {
            inputDateComponentStyle = null;
        }
        InputDate inputDate = new InputDate("dob", inputDateComponentStyle, attributes15);
        final ConstraintLayout b12 = e1.b(new InputDateComponent(inputDate), uiComponentHelper, governmentIdNfcScanComponent.f(), inputDate);
        b12.setId(bq.e.f7115d0);
        linearLayout.addView(b12);
        GovernmentIdNfcScan.Attributes attributes16 = config.getAttributes();
        if (attributes16 != null) {
            str7 = attributes16.getExpirationDateLabel();
        } else {
            str7 = null;
        }
        GovernmentIdNfcScan.Attributes attributes17 = config.getAttributes();
        if (attributes17 != null) {
            str8 = attributes17.getPrefillExpirationDate();
        } else {
            str8 = null;
        }
        List<String> generateTextMonths2 = companion.generateTextMonths();
        GovernmentIdNfcScan.Attributes attributes18 = config.getAttributes();
        if (attributes18 != null) {
            jsonLogicBoolean7 = attributes18.getDisabled();
        } else {
            jsonLogicBoolean7 = null;
        }
        GovernmentIdNfcScan.Attributes attributes19 = config.getAttributes();
        if (attributes19 != null) {
            jsonLogicBoolean8 = attributes19.getHidden();
        } else {
            jsonLogicBoolean8 = null;
        }
        InputDate.Attributes attributes20 = new InputDate.Attributes(str8, str7, null, null, null, generateTextMonths2, jsonLogicBoolean8, jsonLogicBoolean7, 28, null);
        GovernmentIdNfcScan.GovernmentIdNfcScanStyles styles4 = config.getStyles();
        if (styles4 != null) {
            inputDateComponentStyle2 = styles4.getDateStyle();
        } else {
            inputDateComponentStyle2 = null;
        }
        InputDate inputDate2 = new InputDate(GovernmentIdNfcScan.expirationDateName, inputDateComponentStyle2, attributes20);
        final ConstraintLayout b13 = e1.b(new InputDateComponent(inputDate2), uiComponentHelper, governmentIdNfcScanComponent.i(), inputDate2);
        b13.setId(bq.e.f7121g0);
        linearLayout.addView(b13);
        GovernmentIdNfcScan.Attributes attributes21 = config.getAttributes();
        BasicButtonAttributes basicButtonAttributes = new BasicButtonAttributes((attributes21 == null || (r10 = attributes21.getLaunchButtonText()) == null) ? "" : "", Button.ButtonType.PRIMARY, null, null, null, null, 60, null);
        GovernmentIdNfcScan.GovernmentIdNfcScanStyles styles5 = config.getStyles();
        if (styles5 != null) {
            buttonSubmitComponentStyle = styles5.getLaunchButtonStyle();
        } else {
            buttonSubmitComponentStyle = null;
        }
        SubmitButton submitButton = new SubmitButton(GovernmentIdNfcScan.launchButtonName, basicButtonAttributes, buttonSubmitComponentStyle);
        ButtonWithLoadingIndicator a10 = d5.a(new c5(submitButton), uiComponentHelper, submitButton);
        a10.setId(bq.e.f7123h0);
        linearLayout.addView(a10);
        GovernmentIdNfcScan.Attributes attributes22 = config.getAttributes();
        if (attributes22 != null) {
            str9 = attributes22.getPrefillCardAccessNumber();
        }
        if (str9 == null || StringsKt.k0(str9)) {
            b10.setVisibility(8);
        }
        GovernmentIdNfcScan.Attributes attributes23 = config.getAttributes();
        if (attributes23 != null && (hidePrefilledInputs = attributes23.getHidePrefilledInputs()) != null && hidePrefilledInputs.booleanValue()) {
            uiComponentHelper.d(new Function0() { // from class: dq.a0
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit d10;
                    d10 = c0.d(TextInputLayout.this, b11, b12, b13);
                    return d10;
                }
            });
        }
        final TextView textView = new TextView(linearLayout.getContext());
        textView.setId(bq.e.f7119f0);
        uiComponentHelper.d(new Function0() { // from class: dq.b0
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit e10;
                e10 = c0.e(textView, config);
                return e10;
            }
        });
        linearLayout.addView(textView);
        Object tag = b12.getTag();
        Intrinsics.checkNotNull(tag, "null cannot be cast to non-null type com.withpersona.sdk2.inquiry.steps.ui.databinding.Pi2UiDateFieldBinding");
        gq.f fVar = (gq.f) tag;
        Object tag2 = b13.getTag();
        Intrinsics.checkNotNull(tag2, "null cannot be cast to non-null type com.withpersona.sdk2.inquiry.steps.ui.databinding.Pi2UiDateFieldBinding");
        linearLayout.setTag(new d0(b10, b11, fVar, (gq.f) tag2, a10, textView));
        return linearLayout;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit d(TextInputLayout textInputLayout, TextInputLayout textInputLayout2, ConstraintLayout constraintLayout, ConstraintLayout constraintLayout2) {
        textInputLayout.setVisibility(8);
        textInputLayout2.setVisibility(8);
        constraintLayout.setVisibility(8);
        constraintLayout2.setVisibility(8);
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit e(TextView textView, GovernmentIdNfcScan governmentIdNfcScan) {
        TextBasedComponentStyle errorLabelStyle;
        textView.setVisibility(8);
        GovernmentIdNfcScan.GovernmentIdNfcScanStyles styles = governmentIdNfcScan.getStyles();
        if (styles != null && (errorLabelStyle = styles.getErrorLabelStyle()) != null) {
            iq.f0.n(textView, errorLabelStyle, null, 2, null);
        }
        return Unit.f31988a;
    }
}
