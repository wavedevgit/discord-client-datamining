package aq;

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
        final dq.d c10 = dq.d.c(uiComponentHelper.b());
        InputAddress.Attributes attributes = config.getAttributes();
        if (attributes != null) {
            ym.t g10 = inputAddressComponent.g();
            EditText editText = c10.f20748d.getEditText();
            Intrinsics.checkNotNull(editText);
            ym.u.b(g10, editText);
            ym.t g11 = inputAddressComponent.g();
            EditText editText2 = c10.f20750f.getEditText();
            Intrinsics.checkNotNull(editText2);
            ym.u.b(g11, editText2);
            ym.t i10 = inputAddressComponent.i();
            EditText editText3 = c10.f20758n.getEditText();
            Intrinsics.checkNotNull(editText3);
            ym.u.b(i10, editText3);
            ym.t a10 = inputAddressComponent.a();
            EditText editText4 = c10.f20746b.getEditText();
            Intrinsics.checkNotNull(editText4);
            ym.u.b(a10, editText4);
            ym.t c11 = inputAddressComponent.c();
            EditText editText5 = c10.f20757m.getEditText();
            Intrinsics.checkNotNull(editText5);
            ym.u.b(c11, editText5);
            ym.t b10 = inputAddressComponent.b();
            EditText editText6 = c10.f20756l.getEditText();
            Intrinsics.checkNotNull(editText6);
            ym.u.b(b10, editText6);
            String placeholderAutocomplete = attributes.getPlaceholderAutocomplete();
            if (placeholderAutocomplete != null) {
                c10.f20748d.setHint(placeholderAutocomplete);
            }
            String placeholderAddressStreet1 = attributes.getPlaceholderAddressStreet1();
            if (placeholderAddressStreet1 != null) {
                c10.f20750f.setHint(placeholderAddressStreet1);
            }
            String placeholderAddressStreet2 = attributes.getPlaceholderAddressStreet2();
            if (placeholderAddressStreet2 != null) {
                c10.f20758n.setHint(placeholderAddressStreet2);
            }
            String placeholderAddressCity = attributes.getPlaceholderAddressCity();
            if (placeholderAddressCity != null) {
                c10.f20746b.setHint(placeholderAddressCity);
            }
            boolean areEqual = Intrinsics.areEqual(attributes.getSelectedCountryCode(), "US");
            TextInputLayout textInputLayout = c10.f20757m;
            if (areEqual) {
                placeholderAddressSubdivision = attributes.getPlaceholderAddressSubdivisionUs();
            } else {
                placeholderAddressSubdivision = attributes.getPlaceholderAddressSubdivision();
            }
            textInputLayout.setHint(placeholderAddressSubdivision);
            TextInputLayout textInputLayout2 = c10.f20756l;
            if (areEqual) {
                placeholderAddressPostalCode = attributes.getPlaceholderAddressPostalCodeUs();
            } else {
                placeholderAddressPostalCode = attributes.getPlaceholderAddressPostalCode();
            }
            textInputLayout2.setHint(placeholderAddressPostalCode);
            String label = attributes.getLabel();
            if (label != null) {
                c10.f20755k.setText(label);
            }
            String editAddressManuallyPrompt = attributes.getEditAddressManuallyPrompt();
            if (editAddressManuallyPrompt != null) {
                c10.f20747c.setText(editAddressManuallyPrompt);
            }
        }
        c10.getRoot().setTag(c10);
        uiComponentHelper.d(new Function0() { // from class: aq.l0
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit g12;
                g12 = n0.g(InputAddress.this, c10);
                return g12;
            }
        });
        c10.f20747c.setOnClickListener(new View.OnClickListener() { // from class: aq.m0
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
        bq.m n10 = inputAddressComponent.n();
        Boolean C = inputAddressComponent.C();
        if (C != null) {
            z10 = C.booleanValue();
        } else {
            z10 = false;
        }
        n10.c(z10);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit g(InputAddress inputAddress, dq.d dVar) {
        InputTextBasedComponentStyle inputTextStyle;
        TextBasedComponentStyle expandComponentsButtonStyle;
        InputAddress.AddressComponentStyle styles = inputAddress.getStyles();
        if (styles != null && (expandComponentsButtonStyle = styles.getExpandComponentsButtonStyle()) != null) {
            TextView addressExpandComponentsButton = dVar.f20747c;
            Intrinsics.checkNotNullExpressionValue(addressExpandComponentsButton, "addressExpandComponentsButton");
            fq.f0.n(addressExpandComponentsButton, expandComponentsButtonStyle, null, 2, null);
        }
        InputAddress.AddressComponentStyle styles2 = inputAddress.getStyles();
        if (styles2 != null && (inputTextStyle = styles2.getInputTextStyle()) != null) {
            TextView addressLabel = dVar.f20755k;
            Intrinsics.checkNotNullExpressionValue(addressLabel, "addressLabel");
            fq.f0.n(addressLabel, inputTextStyle.getLabelTextBasedStyle(), null, 2, null);
            TextInputLayout addressFieldCollapsed = dVar.f20748d;
            Intrinsics.checkNotNullExpressionValue(addressFieldCollapsed, "addressFieldCollapsed");
            fq.a0.k(addressFieldCollapsed, inputTextStyle);
            TextInputLayout addressFieldExpanded = dVar.f20750f;
            Intrinsics.checkNotNullExpressionValue(addressFieldExpanded, "addressFieldExpanded");
            fq.a0.k(addressFieldExpanded, inputTextStyle);
            TextInputLayout addressSuite = dVar.f20758n;
            Intrinsics.checkNotNullExpressionValue(addressSuite, "addressSuite");
            fq.a0.k(addressSuite, inputTextStyle);
            TextInputLayout addressCity = dVar.f20746b;
            Intrinsics.checkNotNullExpressionValue(addressCity, "addressCity");
            fq.a0.k(addressCity, inputTextStyle);
            TextInputLayout addressSubdivision = dVar.f20757m;
            Intrinsics.checkNotNullExpressionValue(addressSubdivision, "addressSubdivision");
            fq.a0.k(addressSubdivision, inputTextStyle);
            TextInputLayout addressPostalCode = dVar.f20756l;
            Intrinsics.checkNotNullExpressionValue(addressPostalCode, "addressPostalCode");
            fq.a0.k(addressPostalCode, inputTextStyle);
        }
        return Unit.f32464a;
    }
}
