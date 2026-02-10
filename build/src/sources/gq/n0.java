package gq;

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
        inputAddressComponent.K(inputAddressComponent2.p());
        inputAddressComponent.N(inputAddressComponent2.h());
        inputAddressComponent.O(inputAddressComponent2.i());
        inputAddressComponent.L(inputAddressComponent2.a());
        inputAddressComponent.P(inputAddressComponent2.c());
        inputAddressComponent.M(inputAddressComponent2.b());
        return inputAddressComponent;
    }

    public static final ConstraintLayout e(final InputAddressComponent inputAddressComponent, m5 uiComponentHelper, final InputAddress config) {
        String placeholderAddressSubdivision;
        String placeholderAddressPostalCode;
        Intrinsics.checkNotNullParameter(inputAddressComponent, "<this>");
        Intrinsics.checkNotNullParameter(uiComponentHelper, "uiComponentHelper");
        Intrinsics.checkNotNullParameter(config, "config");
        final jq.d c10 = jq.d.c(uiComponentHelper.b());
        InputAddress.Attributes attributes = config.getAttributes();
        if (attributes != null) {
            en.t h10 = inputAddressComponent.h();
            EditText editText = c10.f30326d.getEditText();
            Intrinsics.checkNotNull(editText);
            en.u.b(h10, editText);
            en.t h11 = inputAddressComponent.h();
            EditText editText2 = c10.f30328f.getEditText();
            Intrinsics.checkNotNull(editText2);
            en.u.b(h11, editText2);
            en.t i10 = inputAddressComponent.i();
            EditText editText3 = c10.f30336n.getEditText();
            Intrinsics.checkNotNull(editText3);
            en.u.b(i10, editText3);
            en.t a10 = inputAddressComponent.a();
            EditText editText4 = c10.f30324b.getEditText();
            Intrinsics.checkNotNull(editText4);
            en.u.b(a10, editText4);
            en.t c11 = inputAddressComponent.c();
            EditText editText5 = c10.f30335m.getEditText();
            Intrinsics.checkNotNull(editText5);
            en.u.b(c11, editText5);
            en.t b10 = inputAddressComponent.b();
            EditText editText6 = c10.f30334l.getEditText();
            Intrinsics.checkNotNull(editText6);
            en.u.b(b10, editText6);
            String placeholderAutocomplete = attributes.getPlaceholderAutocomplete();
            if (placeholderAutocomplete != null) {
                c10.f30326d.setHint(placeholderAutocomplete);
            }
            String placeholderAddressStreet1 = attributes.getPlaceholderAddressStreet1();
            if (placeholderAddressStreet1 != null) {
                c10.f30328f.setHint(placeholderAddressStreet1);
            }
            String placeholderAddressStreet2 = attributes.getPlaceholderAddressStreet2();
            if (placeholderAddressStreet2 != null) {
                c10.f30336n.setHint(placeholderAddressStreet2);
            }
            String placeholderAddressCity = attributes.getPlaceholderAddressCity();
            if (placeholderAddressCity != null) {
                c10.f30324b.setHint(placeholderAddressCity);
            }
            boolean areEqual = Intrinsics.areEqual(attributes.getSelectedCountryCode(), "US");
            TextInputLayout textInputLayout = c10.f30335m;
            if (areEqual) {
                placeholderAddressSubdivision = attributes.getPlaceholderAddressSubdivisionUs();
            } else {
                placeholderAddressSubdivision = attributes.getPlaceholderAddressSubdivision();
            }
            textInputLayout.setHint(placeholderAddressSubdivision);
            TextInputLayout textInputLayout2 = c10.f30334l;
            if (areEqual) {
                placeholderAddressPostalCode = attributes.getPlaceholderAddressPostalCodeUs();
            } else {
                placeholderAddressPostalCode = attributes.getPlaceholderAddressPostalCode();
            }
            textInputLayout2.setHint(placeholderAddressPostalCode);
            String label = attributes.getLabel();
            if (label != null) {
                c10.f30333k.setText(label);
            }
            String editAddressManuallyPrompt = attributes.getEditAddressManuallyPrompt();
            if (editAddressManuallyPrompt != null) {
                c10.f30325c.setText(editAddressManuallyPrompt);
            }
        }
        c10.getRoot().setTag(c10);
        uiComponentHelper.d(new Function0() { // from class: gq.l0
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit g10;
                g10 = n0.g(InputAddress.this, c10);
                return g10;
            }
        });
        c10.f30325c.setOnClickListener(new View.OnClickListener() { // from class: gq.m0
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
        inputAddressComponent.H(Boolean.FALSE);
        hq.m p10 = inputAddressComponent.p();
        Boolean G = inputAddressComponent.G();
        if (G != null) {
            z10 = G.booleanValue();
        } else {
            z10 = false;
        }
        p10.c(z10);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit g(InputAddress inputAddress, jq.d dVar) {
        InputTextBasedComponentStyle inputTextStyle;
        TextBasedComponentStyle expandComponentsButtonStyle;
        InputAddress.AddressComponentStyle styles = inputAddress.getStyles();
        if (styles != null && (expandComponentsButtonStyle = styles.getExpandComponentsButtonStyle()) != null) {
            TextView addressExpandComponentsButton = dVar.f30325c;
            Intrinsics.checkNotNullExpressionValue(addressExpandComponentsButton, "addressExpandComponentsButton");
            lq.f0.n(addressExpandComponentsButton, expandComponentsButtonStyle, null, 2, null);
        }
        InputAddress.AddressComponentStyle styles2 = inputAddress.getStyles();
        if (styles2 != null && (inputTextStyle = styles2.getInputTextStyle()) != null) {
            TextView addressLabel = dVar.f30333k;
            Intrinsics.checkNotNullExpressionValue(addressLabel, "addressLabel");
            lq.f0.n(addressLabel, inputTextStyle.getLabelTextBasedStyle(), null, 2, null);
            TextInputLayout addressFieldCollapsed = dVar.f30326d;
            Intrinsics.checkNotNullExpressionValue(addressFieldCollapsed, "addressFieldCollapsed");
            lq.a0.k(addressFieldCollapsed, inputTextStyle);
            TextInputLayout addressFieldExpanded = dVar.f30328f;
            Intrinsics.checkNotNullExpressionValue(addressFieldExpanded, "addressFieldExpanded");
            lq.a0.k(addressFieldExpanded, inputTextStyle);
            TextInputLayout addressSuite = dVar.f30336n;
            Intrinsics.checkNotNullExpressionValue(addressSuite, "addressSuite");
            lq.a0.k(addressSuite, inputTextStyle);
            TextInputLayout addressCity = dVar.f30324b;
            Intrinsics.checkNotNullExpressionValue(addressCity, "addressCity");
            lq.a0.k(addressCity, inputTextStyle);
            TextInputLayout addressSubdivision = dVar.f30335m;
            Intrinsics.checkNotNullExpressionValue(addressSubdivision, "addressSubdivision");
            lq.a0.k(addressSubdivision, inputTextStyle);
            TextInputLayout addressPostalCode = dVar.f30334l;
            Intrinsics.checkNotNullExpressionValue(addressPostalCode, "addressPostalCode");
            lq.a0.k(addressPostalCode, inputTextStyle);
        }
        return Unit.f31765a;
    }
}
