package fq;

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
        inputAddressComponent.Q(inputAddressComponent2.c());
        inputAddressComponent.M(inputAddressComponent2.b());
        return inputAddressComponent;
    }

    public static final ConstraintLayout e(final InputAddressComponent inputAddressComponent, m5 uiComponentHelper, final InputAddress config) {
        String placeholderAddressSubdivision;
        String placeholderAddressPostalCode;
        Intrinsics.checkNotNullParameter(inputAddressComponent, "<this>");
        Intrinsics.checkNotNullParameter(uiComponentHelper, "uiComponentHelper");
        Intrinsics.checkNotNullParameter(config, "config");
        final iq.d c10 = iq.d.c(uiComponentHelper.b());
        InputAddress.Attributes attributes = config.getAttributes();
        if (attributes != null) {
            dn.t h10 = inputAddressComponent.h();
            EditText editText = c10.f29247d.getEditText();
            Intrinsics.checkNotNull(editText);
            dn.u.b(h10, editText);
            dn.t h11 = inputAddressComponent.h();
            EditText editText2 = c10.f29249f.getEditText();
            Intrinsics.checkNotNull(editText2);
            dn.u.b(h11, editText2);
            dn.t i10 = inputAddressComponent.i();
            EditText editText3 = c10.f29257n.getEditText();
            Intrinsics.checkNotNull(editText3);
            dn.u.b(i10, editText3);
            dn.t a10 = inputAddressComponent.a();
            EditText editText4 = c10.f29245b.getEditText();
            Intrinsics.checkNotNull(editText4);
            dn.u.b(a10, editText4);
            dn.t c11 = inputAddressComponent.c();
            EditText editText5 = c10.f29256m.getEditText();
            Intrinsics.checkNotNull(editText5);
            dn.u.b(c11, editText5);
            dn.t b10 = inputAddressComponent.b();
            EditText editText6 = c10.f29255l.getEditText();
            Intrinsics.checkNotNull(editText6);
            dn.u.b(b10, editText6);
            String placeholderAutocomplete = attributes.getPlaceholderAutocomplete();
            if (placeholderAutocomplete != null) {
                c10.f29247d.setHint(placeholderAutocomplete);
            }
            String placeholderAddressStreet1 = attributes.getPlaceholderAddressStreet1();
            if (placeholderAddressStreet1 != null) {
                c10.f29249f.setHint(placeholderAddressStreet1);
            }
            String placeholderAddressStreet2 = attributes.getPlaceholderAddressStreet2();
            if (placeholderAddressStreet2 != null) {
                c10.f29257n.setHint(placeholderAddressStreet2);
            }
            String placeholderAddressCity = attributes.getPlaceholderAddressCity();
            if (placeholderAddressCity != null) {
                c10.f29245b.setHint(placeholderAddressCity);
            }
            boolean areEqual = Intrinsics.areEqual(attributes.getSelectedCountryCode(), "US");
            TextInputLayout textInputLayout = c10.f29256m;
            if (areEqual) {
                placeholderAddressSubdivision = attributes.getPlaceholderAddressSubdivisionUs();
            } else {
                placeholderAddressSubdivision = attributes.getPlaceholderAddressSubdivision();
            }
            textInputLayout.setHint(placeholderAddressSubdivision);
            TextInputLayout textInputLayout2 = c10.f29255l;
            if (areEqual) {
                placeholderAddressPostalCode = attributes.getPlaceholderAddressPostalCodeUs();
            } else {
                placeholderAddressPostalCode = attributes.getPlaceholderAddressPostalCode();
            }
            textInputLayout2.setHint(placeholderAddressPostalCode);
            String label = attributes.getLabel();
            if (label != null) {
                c10.f29254k.setText(label);
            }
            String editAddressManuallyPrompt = attributes.getEditAddressManuallyPrompt();
            if (editAddressManuallyPrompt != null) {
                c10.f29246c.setText(editAddressManuallyPrompt);
            }
        }
        c10.getRoot().setTag(c10);
        uiComponentHelper.d(new Function0() { // from class: fq.l0
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit g10;
                g10 = n0.g(InputAddress.this, c10);
                return g10;
            }
        });
        c10.f29246c.setOnClickListener(new View.OnClickListener() { // from class: fq.m0
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
        gq.m p10 = inputAddressComponent.p();
        Boolean G = inputAddressComponent.G();
        if (G != null) {
            z10 = G.booleanValue();
        } else {
            z10 = false;
        }
        p10.c(z10);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit g(InputAddress inputAddress, iq.d dVar) {
        InputTextBasedComponentStyle inputTextStyle;
        TextBasedComponentStyle expandComponentsButtonStyle;
        InputAddress.AddressComponentStyle styles = inputAddress.getStyles();
        if (styles != null && (expandComponentsButtonStyle = styles.getExpandComponentsButtonStyle()) != null) {
            TextView addressExpandComponentsButton = dVar.f29246c;
            Intrinsics.checkNotNullExpressionValue(addressExpandComponentsButton, "addressExpandComponentsButton");
            kq.f0.n(addressExpandComponentsButton, expandComponentsButtonStyle, null, 2, null);
        }
        InputAddress.AddressComponentStyle styles2 = inputAddress.getStyles();
        if (styles2 != null && (inputTextStyle = styles2.getInputTextStyle()) != null) {
            TextView addressLabel = dVar.f29254k;
            Intrinsics.checkNotNullExpressionValue(addressLabel, "addressLabel");
            kq.f0.n(addressLabel, inputTextStyle.getLabelTextBasedStyle(), null, 2, null);
            TextInputLayout addressFieldCollapsed = dVar.f29247d;
            Intrinsics.checkNotNullExpressionValue(addressFieldCollapsed, "addressFieldCollapsed");
            kq.a0.k(addressFieldCollapsed, inputTextStyle);
            TextInputLayout addressFieldExpanded = dVar.f29249f;
            Intrinsics.checkNotNullExpressionValue(addressFieldExpanded, "addressFieldExpanded");
            kq.a0.k(addressFieldExpanded, inputTextStyle);
            TextInputLayout addressSuite = dVar.f29257n;
            Intrinsics.checkNotNullExpressionValue(addressSuite, "addressSuite");
            kq.a0.k(addressSuite, inputTextStyle);
            TextInputLayout addressCity = dVar.f29245b;
            Intrinsics.checkNotNullExpressionValue(addressCity, "addressCity");
            kq.a0.k(addressCity, inputTextStyle);
            TextInputLayout addressSubdivision = dVar.f29256m;
            Intrinsics.checkNotNullExpressionValue(addressSubdivision, "addressSubdivision");
            kq.a0.k(addressSubdivision, inputTextStyle);
            TextInputLayout addressPostalCode = dVar.f29255l;
            Intrinsics.checkNotNullExpressionValue(addressPostalCode, "addressPostalCode");
            kq.a0.k(addressPostalCode, inputTextStyle);
        }
        return Unit.f32056a;
    }
}
