package pq;

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
        inputAddressComponent.F(inputAddressComponent2.o());
        inputAddressComponent.K(inputAddressComponent2.g());
        inputAddressComponent.L(inputAddressComponent2.i());
        inputAddressComponent.G(inputAddressComponent2.a());
        inputAddressComponent.M(inputAddressComponent2.c());
        inputAddressComponent.H(inputAddressComponent2.b());
        return inputAddressComponent;
    }

    public static final ConstraintLayout e(final InputAddressComponent inputAddressComponent, m5 uiComponentHelper, final InputAddress config) {
        String placeholderAddressSubdivision;
        String placeholderAddressPostalCode;
        Intrinsics.checkNotNullParameter(inputAddressComponent, "<this>");
        Intrinsics.checkNotNullParameter(uiComponentHelper, "uiComponentHelper");
        Intrinsics.checkNotNullParameter(config, "config");
        final sq.d c10 = sq.d.c(uiComponentHelper.b());
        InputAddress.Attributes attributes = config.getAttributes();
        if (attributes != null) {
            gn.t g10 = inputAddressComponent.g();
            EditText editText = c10.f48210d.getEditText();
            Intrinsics.checkNotNull(editText);
            gn.u.b(g10, editText);
            gn.t g11 = inputAddressComponent.g();
            EditText editText2 = c10.f48212f.getEditText();
            Intrinsics.checkNotNull(editText2);
            gn.u.b(g11, editText2);
            gn.t i10 = inputAddressComponent.i();
            EditText editText3 = c10.f48220n.getEditText();
            Intrinsics.checkNotNull(editText3);
            gn.u.b(i10, editText3);
            gn.t a10 = inputAddressComponent.a();
            EditText editText4 = c10.f48208b.getEditText();
            Intrinsics.checkNotNull(editText4);
            gn.u.b(a10, editText4);
            gn.t c11 = inputAddressComponent.c();
            EditText editText5 = c10.f48219m.getEditText();
            Intrinsics.checkNotNull(editText5);
            gn.u.b(c11, editText5);
            gn.t b10 = inputAddressComponent.b();
            EditText editText6 = c10.f48218l.getEditText();
            Intrinsics.checkNotNull(editText6);
            gn.u.b(b10, editText6);
            String placeholderAutocomplete = attributes.getPlaceholderAutocomplete();
            if (placeholderAutocomplete != null) {
                c10.f48210d.setHint(placeholderAutocomplete);
            }
            String placeholderAddressStreet1 = attributes.getPlaceholderAddressStreet1();
            if (placeholderAddressStreet1 != null) {
                c10.f48212f.setHint(placeholderAddressStreet1);
            }
            String placeholderAddressStreet2 = attributes.getPlaceholderAddressStreet2();
            if (placeholderAddressStreet2 != null) {
                c10.f48220n.setHint(placeholderAddressStreet2);
            }
            String placeholderAddressCity = attributes.getPlaceholderAddressCity();
            if (placeholderAddressCity != null) {
                c10.f48208b.setHint(placeholderAddressCity);
            }
            boolean areEqual = Intrinsics.areEqual(attributes.getSelectedCountryCode(), "US");
            TextInputLayout textInputLayout = c10.f48219m;
            if (areEqual) {
                placeholderAddressSubdivision = attributes.getPlaceholderAddressSubdivisionUs();
            } else {
                placeholderAddressSubdivision = attributes.getPlaceholderAddressSubdivision();
            }
            textInputLayout.setHint(placeholderAddressSubdivision);
            TextInputLayout textInputLayout2 = c10.f48218l;
            if (areEqual) {
                placeholderAddressPostalCode = attributes.getPlaceholderAddressPostalCodeUs();
            } else {
                placeholderAddressPostalCode = attributes.getPlaceholderAddressPostalCode();
            }
            textInputLayout2.setHint(placeholderAddressPostalCode);
            String label = attributes.getLabel();
            if (label != null) {
                c10.f48217k.setText(label);
            }
            String editAddressManuallyPrompt = attributes.getEditAddressManuallyPrompt();
            if (editAddressManuallyPrompt != null) {
                c10.f48209c.setText(editAddressManuallyPrompt);
            }
        }
        c10.getRoot().setTag(c10);
        uiComponentHelper.d(new Function0() { // from class: pq.l0
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit g12;
                g12 = n0.g(InputAddress.this, c10);
                return g12;
            }
        });
        c10.f48209c.setOnClickListener(new View.OnClickListener() { // from class: pq.m0
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
        inputAddressComponent.E(Boolean.FALSE);
        qq.m o10 = inputAddressComponent.o();
        Boolean D = inputAddressComponent.D();
        if (D != null) {
            z10 = D.booleanValue();
        } else {
            z10 = false;
        }
        o10.c(z10);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit g(InputAddress inputAddress, sq.d dVar) {
        InputTextBasedComponentStyle inputTextStyle;
        TextBasedComponentStyle expandComponentsButtonStyle;
        InputAddress.AddressComponentStyle styles = inputAddress.getStyles();
        if (styles != null && (expandComponentsButtonStyle = styles.getExpandComponentsButtonStyle()) != null) {
            TextView addressExpandComponentsButton = dVar.f48209c;
            Intrinsics.checkNotNullExpressionValue(addressExpandComponentsButton, "addressExpandComponentsButton");
            uq.f0.n(addressExpandComponentsButton, expandComponentsButtonStyle, null, 2, null);
        }
        InputAddress.AddressComponentStyle styles2 = inputAddress.getStyles();
        if (styles2 != null && (inputTextStyle = styles2.getInputTextStyle()) != null) {
            TextView addressLabel = dVar.f48217k;
            Intrinsics.checkNotNullExpressionValue(addressLabel, "addressLabel");
            uq.f0.n(addressLabel, inputTextStyle.getLabelTextBasedStyle(), null, 2, null);
            TextInputLayout addressFieldCollapsed = dVar.f48210d;
            Intrinsics.checkNotNullExpressionValue(addressFieldCollapsed, "addressFieldCollapsed");
            uq.a0.k(addressFieldCollapsed, inputTextStyle);
            TextInputLayout addressFieldExpanded = dVar.f48212f;
            Intrinsics.checkNotNullExpressionValue(addressFieldExpanded, "addressFieldExpanded");
            uq.a0.k(addressFieldExpanded, inputTextStyle);
            TextInputLayout addressSuite = dVar.f48220n;
            Intrinsics.checkNotNullExpressionValue(addressSuite, "addressSuite");
            uq.a0.k(addressSuite, inputTextStyle);
            TextInputLayout addressCity = dVar.f48208b;
            Intrinsics.checkNotNullExpressionValue(addressCity, "addressCity");
            uq.a0.k(addressCity, inputTextStyle);
            TextInputLayout addressSubdivision = dVar.f48219m;
            Intrinsics.checkNotNullExpressionValue(addressSubdivision, "addressSubdivision");
            uq.a0.k(addressSubdivision, inputTextStyle);
            TextInputLayout addressPostalCode = dVar.f48218l;
            Intrinsics.checkNotNullExpressionValue(addressPostalCode, "addressPostalCode");
            uq.a0.k(addressPostalCode, inputTextStyle);
        }
        return Unit.f31987a;
    }
}
