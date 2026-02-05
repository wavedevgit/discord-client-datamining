package dq;

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
        inputAddressComponent.G(inputAddressComponent2.o());
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
        final gq.d c10 = gq.d.c(uiComponentHelper.b());
        InputAddress.Attributes attributes = config.getAttributes();
        if (attributes != null) {
            bn.t g10 = inputAddressComponent.g();
            EditText editText = c10.f25072d.getEditText();
            Intrinsics.checkNotNull(editText);
            bn.u.b(g10, editText);
            bn.t g11 = inputAddressComponent.g();
            EditText editText2 = c10.f25074f.getEditText();
            Intrinsics.checkNotNull(editText2);
            bn.u.b(g11, editText2);
            bn.t i10 = inputAddressComponent.i();
            EditText editText3 = c10.f25082n.getEditText();
            Intrinsics.checkNotNull(editText3);
            bn.u.b(i10, editText3);
            bn.t a10 = inputAddressComponent.a();
            EditText editText4 = c10.f25070b.getEditText();
            Intrinsics.checkNotNull(editText4);
            bn.u.b(a10, editText4);
            bn.t c11 = inputAddressComponent.c();
            EditText editText5 = c10.f25081m.getEditText();
            Intrinsics.checkNotNull(editText5);
            bn.u.b(c11, editText5);
            bn.t b10 = inputAddressComponent.b();
            EditText editText6 = c10.f25080l.getEditText();
            Intrinsics.checkNotNull(editText6);
            bn.u.b(b10, editText6);
            String placeholderAutocomplete = attributes.getPlaceholderAutocomplete();
            if (placeholderAutocomplete != null) {
                c10.f25072d.setHint(placeholderAutocomplete);
            }
            String placeholderAddressStreet1 = attributes.getPlaceholderAddressStreet1();
            if (placeholderAddressStreet1 != null) {
                c10.f25074f.setHint(placeholderAddressStreet1);
            }
            String placeholderAddressStreet2 = attributes.getPlaceholderAddressStreet2();
            if (placeholderAddressStreet2 != null) {
                c10.f25082n.setHint(placeholderAddressStreet2);
            }
            String placeholderAddressCity = attributes.getPlaceholderAddressCity();
            if (placeholderAddressCity != null) {
                c10.f25070b.setHint(placeholderAddressCity);
            }
            boolean areEqual = Intrinsics.areEqual(attributes.getSelectedCountryCode(), "US");
            TextInputLayout textInputLayout = c10.f25081m;
            if (areEqual) {
                placeholderAddressSubdivision = attributes.getPlaceholderAddressSubdivisionUs();
            } else {
                placeholderAddressSubdivision = attributes.getPlaceholderAddressSubdivision();
            }
            textInputLayout.setHint(placeholderAddressSubdivision);
            TextInputLayout textInputLayout2 = c10.f25080l;
            if (areEqual) {
                placeholderAddressPostalCode = attributes.getPlaceholderAddressPostalCodeUs();
            } else {
                placeholderAddressPostalCode = attributes.getPlaceholderAddressPostalCode();
            }
            textInputLayout2.setHint(placeholderAddressPostalCode);
            String label = attributes.getLabel();
            if (label != null) {
                c10.f25079k.setText(label);
            }
            String editAddressManuallyPrompt = attributes.getEditAddressManuallyPrompt();
            if (editAddressManuallyPrompt != null) {
                c10.f25071c.setText(editAddressManuallyPrompt);
            }
        }
        c10.getRoot().setTag(c10);
        uiComponentHelper.d(new Function0() { // from class: dq.l0
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit g12;
                g12 = n0.g(InputAddress.this, c10);
                return g12;
            }
        });
        c10.f25071c.setOnClickListener(new View.OnClickListener() { // from class: dq.m0
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
        eq.m o10 = inputAddressComponent.o();
        Boolean C = inputAddressComponent.C();
        if (C != null) {
            z10 = C.booleanValue();
        } else {
            z10 = false;
        }
        o10.c(z10);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit g(InputAddress inputAddress, gq.d dVar) {
        InputTextBasedComponentStyle inputTextStyle;
        TextBasedComponentStyle expandComponentsButtonStyle;
        InputAddress.AddressComponentStyle styles = inputAddress.getStyles();
        if (styles != null && (expandComponentsButtonStyle = styles.getExpandComponentsButtonStyle()) != null) {
            TextView addressExpandComponentsButton = dVar.f25071c;
            Intrinsics.checkNotNullExpressionValue(addressExpandComponentsButton, "addressExpandComponentsButton");
            iq.f0.n(addressExpandComponentsButton, expandComponentsButtonStyle, null, 2, null);
        }
        InputAddress.AddressComponentStyle styles2 = inputAddress.getStyles();
        if (styles2 != null && (inputTextStyle = styles2.getInputTextStyle()) != null) {
            TextView addressLabel = dVar.f25079k;
            Intrinsics.checkNotNullExpressionValue(addressLabel, "addressLabel");
            iq.f0.n(addressLabel, inputTextStyle.getLabelTextBasedStyle(), null, 2, null);
            TextInputLayout addressFieldCollapsed = dVar.f25072d;
            Intrinsics.checkNotNullExpressionValue(addressFieldCollapsed, "addressFieldCollapsed");
            iq.a0.k(addressFieldCollapsed, inputTextStyle);
            TextInputLayout addressFieldExpanded = dVar.f25074f;
            Intrinsics.checkNotNullExpressionValue(addressFieldExpanded, "addressFieldExpanded");
            iq.a0.k(addressFieldExpanded, inputTextStyle);
            TextInputLayout addressSuite = dVar.f25082n;
            Intrinsics.checkNotNullExpressionValue(addressSuite, "addressSuite");
            iq.a0.k(addressSuite, inputTextStyle);
            TextInputLayout addressCity = dVar.f25070b;
            Intrinsics.checkNotNullExpressionValue(addressCity, "addressCity");
            iq.a0.k(addressCity, inputTextStyle);
            TextInputLayout addressSubdivision = dVar.f25081m;
            Intrinsics.checkNotNullExpressionValue(addressSubdivision, "addressSubdivision");
            iq.a0.k(addressSubdivision, inputTextStyle);
            TextInputLayout addressPostalCode = dVar.f25080l;
            Intrinsics.checkNotNullExpressionValue(addressPostalCode, "addressPostalCode");
            iq.a0.k(addressPostalCode, inputTextStyle);
        }
        return Unit.f31988a;
    }
}
