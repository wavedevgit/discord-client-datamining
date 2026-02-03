package yp;

import android.view.View;
import android.widget.EditText;
import android.widget.TextView;
import androidx.constraintlayout.widget.ConstraintLayout;
import com.google.android.material.textfield.TextInputLayout;
import com.withpersona.sdk2.inquiry.network.dto.ui.components.InputAddress;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.InputTextBasedComponentStyle;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.TextBasedComponentStyle;
import com.withpersona.sdk2.inquiry.steps.ui.components.InputAddressComponent;
import kotlin.Unit;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class n0 {
    /* JADX INFO: Access modifiers changed from: private */
    public static final InputAddressComponent d(InputAddressComponent inputAddressComponent, InputAddressComponent inputAddressComponent2) {
        inputAddressComponent.G(inputAddressComponent2.n());
        inputAddressComponent.J(inputAddressComponent2.g());
        inputAddressComponent.K(inputAddressComponent2.i());
        inputAddressComponent.H(inputAddressComponent2.a());
        inputAddressComponent.M(inputAddressComponent2.c());
        inputAddressComponent.I(inputAddressComponent2.b());
        return inputAddressComponent;
    }

    public static final ConstraintLayout e(final InputAddressComponent inputAddressComponent, m5 uiComponentHelper, final InputAddress config) {
        String placeholderAddressSubdivision;
        String placeholderAddressPostalCode;
        Intrinsics.checkNotNullParameter(inputAddressComponent, "<this>");
        Intrinsics.checkNotNullParameter(uiComponentHelper, "uiComponentHelper");
        Intrinsics.checkNotNullParameter(config, "config");
        final bq.d c10 = bq.d.c(uiComponentHelper.b());
        InputAddress.Attributes attributes = config.getAttributes();
        if (attributes != null) {
            wm.t g10 = inputAddressComponent.g();
            EditText editText = c10.f7432d.getEditText();
            Intrinsics.checkNotNull(editText);
            wm.u.b(g10, editText);
            wm.t g11 = inputAddressComponent.g();
            EditText editText2 = c10.f7434f.getEditText();
            Intrinsics.checkNotNull(editText2);
            wm.u.b(g11, editText2);
            wm.t i10 = inputAddressComponent.i();
            EditText editText3 = c10.f7442n.getEditText();
            Intrinsics.checkNotNull(editText3);
            wm.u.b(i10, editText3);
            wm.t a10 = inputAddressComponent.a();
            EditText editText4 = c10.f7430b.getEditText();
            Intrinsics.checkNotNull(editText4);
            wm.u.b(a10, editText4);
            wm.t c11 = inputAddressComponent.c();
            EditText editText5 = c10.f7441m.getEditText();
            Intrinsics.checkNotNull(editText5);
            wm.u.b(c11, editText5);
            wm.t b10 = inputAddressComponent.b();
            EditText editText6 = c10.f7440l.getEditText();
            Intrinsics.checkNotNull(editText6);
            wm.u.b(b10, editText6);
            String placeholderAutocomplete = attributes.getPlaceholderAutocomplete();
            if (placeholderAutocomplete != null) {
                c10.f7432d.setHint(placeholderAutocomplete);
            }
            String placeholderAddressStreet1 = attributes.getPlaceholderAddressStreet1();
            if (placeholderAddressStreet1 != null) {
                c10.f7434f.setHint(placeholderAddressStreet1);
            }
            String placeholderAddressStreet2 = attributes.getPlaceholderAddressStreet2();
            if (placeholderAddressStreet2 != null) {
                c10.f7442n.setHint(placeholderAddressStreet2);
            }
            String placeholderAddressCity = attributes.getPlaceholderAddressCity();
            if (placeholderAddressCity != null) {
                c10.f7430b.setHint(placeholderAddressCity);
            }
            boolean areEqual = Intrinsics.areEqual(attributes.getSelectedCountryCode(), "US");
            TextInputLayout textInputLayout = c10.f7441m;
            if (areEqual) {
                placeholderAddressSubdivision = attributes.getPlaceholderAddressSubdivisionUs();
            } else {
                placeholderAddressSubdivision = attributes.getPlaceholderAddressSubdivision();
            }
            textInputLayout.setHint(placeholderAddressSubdivision);
            TextInputLayout textInputLayout2 = c10.f7440l;
            if (areEqual) {
                placeholderAddressPostalCode = attributes.getPlaceholderAddressPostalCodeUs();
            } else {
                placeholderAddressPostalCode = attributes.getPlaceholderAddressPostalCode();
            }
            textInputLayout2.setHint(placeholderAddressPostalCode);
            String label = attributes.getLabel();
            if (label != null) {
                c10.f7439k.setText(label);
            }
            String editAddressManuallyPrompt = attributes.getEditAddressManuallyPrompt();
            if (editAddressManuallyPrompt != null) {
                c10.f7431c.setText(editAddressManuallyPrompt);
            }
        }
        c10.getRoot().setTag(c10);
        uiComponentHelper.d(new Function0() { // from class: yp.l0
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit g12;
                g12 = n0.g(InputAddress.this, c10);
                return g12;
            }
        });
        c10.f7431c.setOnClickListener(new View.OnClickListener() { // from class: yp.m0
            @Override // android.view.View.OnClickListener
            public final void onClick(View view) {
                n0.f(InputAddressComponent.this, view);
            }
        });
        c10.getRoot().setTag(c10);
        ConstraintLayout root = c10.getRoot();
        Intrinsics.checkNotNullExpressionValue(root, "getRoot(...)");
        return root;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void f(InputAddressComponent inputAddressComponent, View view) {
        boolean z10;
        inputAddressComponent.D(Boolean.FALSE);
        zp.m n10 = inputAddressComponent.n();
        Boolean C = inputAddressComponent.C();
        if (C != null) {
            z10 = C.booleanValue();
        } else {
            z10 = false;
        }
        n10.c(z10);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit g(InputAddress inputAddress, bq.d dVar) {
        InputTextBasedComponentStyle inputTextStyle;
        TextBasedComponentStyle expandComponentsButtonStyle;
        InputAddress.AddressComponentStyle styles = inputAddress.getStyles();
        if (styles != null && (expandComponentsButtonStyle = styles.getExpandComponentsButtonStyle()) != null) {
            TextView addressExpandComponentsButton = dVar.f7431c;
            Intrinsics.checkNotNullExpressionValue(addressExpandComponentsButton, "addressExpandComponentsButton");
            dq.f0.n(addressExpandComponentsButton, expandComponentsButtonStyle, null, 2, null);
        }
        InputAddress.AddressComponentStyle styles2 = inputAddress.getStyles();
        if (styles2 != null && (inputTextStyle = styles2.getInputTextStyle()) != null) {
            TextView addressLabel = dVar.f7439k;
            Intrinsics.checkNotNullExpressionValue(addressLabel, "addressLabel");
            dq.f0.n(addressLabel, inputTextStyle.getLabelTextBasedStyle(), null, 2, null);
            TextInputLayout addressFieldCollapsed = dVar.f7432d;
            Intrinsics.checkNotNullExpressionValue(addressFieldCollapsed, "addressFieldCollapsed");
            dq.a0.k(addressFieldCollapsed, inputTextStyle);
            TextInputLayout addressFieldExpanded = dVar.f7434f;
            Intrinsics.checkNotNullExpressionValue(addressFieldExpanded, "addressFieldExpanded");
            dq.a0.k(addressFieldExpanded, inputTextStyle);
            TextInputLayout addressSuite = dVar.f7442n;
            Intrinsics.checkNotNullExpressionValue(addressSuite, "addressSuite");
            dq.a0.k(addressSuite, inputTextStyle);
            TextInputLayout addressCity = dVar.f7430b;
            Intrinsics.checkNotNullExpressionValue(addressCity, "addressCity");
            dq.a0.k(addressCity, inputTextStyle);
            TextInputLayout addressSubdivision = dVar.f7441m;
            Intrinsics.checkNotNullExpressionValue(addressSubdivision, "addressSubdivision");
            dq.a0.k(addressSubdivision, inputTextStyle);
            TextInputLayout addressPostalCode = dVar.f7440l;
            Intrinsics.checkNotNullExpressionValue(addressPostalCode, "addressPostalCode");
            dq.a0.k(addressPostalCode, inputTextStyle);
        }
        return Unit.f33074a;
    }
}
