package fq;

import android.content.Context;
import android.graphics.drawable.ColorDrawable;
import android.widget.AutoCompleteTextView;
import android.widget.TextView;
import androidx.constraintlayout.widget.ConstraintLayout;
import com.google.android.material.textfield.TextInputEditText;
import com.google.android.material.textfield.TextInputLayout;
import com.withpersona.sdk2.inquiry.network.dto.ui.components.InputDate;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.AttributeStyles;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.InputSelectComponentStyle;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.InputTextBasedComponentStyle;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.StyleElements;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.TextBasedComponentStyle;
import com.withpersona.sdk2.inquiry.steps.ui.components.InputDateComponent;
import java.util.List;
import kotlin.Unit;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class e1 {
    public static final ConstraintLayout b(InputDateComponent inputDateComponent, m5 uiComponentHelper, gq.e dateController, InputDate config) {
        TextBasedComponentStyle textBasedComponentStyle;
        AttributeStyles.DateSelectBackgroundColorStyle backgroundColor;
        Integer inputSelectBackgroundColor;
        InputSelectComponentStyle inputSelectStyle;
        Intrinsics.checkNotNullParameter(inputDateComponent, "<this>");
        Intrinsics.checkNotNullParameter(uiComponentHelper, "uiComponentHelper");
        Intrinsics.checkNotNullParameter(dateController, "dateController");
        Intrinsics.checkNotNullParameter(config, "config");
        final iq.f c10 = iq.f.c(uiComponentHelper.b());
        final InputDate.InputDateComponentStyle styles = config.getStyles();
        InputDate.Attributes attributes = config.getAttributes();
        if (attributes != null) {
            c10.f29267b.setText(attributes.getLabel());
            List<String> textMonths = attributes.getTextMonths();
            if (textMonths == null) {
                textMonths = CollectionsKt.l();
            }
            Context a10 = uiComponentHelper.a();
            int i10 = dq.f.f21082g;
            if (styles != null && (inputSelectStyle = styles.getInputSelectStyle()) != null) {
                textBasedComponentStyle = inputSelectStyle.getTextBasedStyle();
            } else {
                textBasedComponentStyle = null;
            }
            eq.a aVar = new eq.a(a10, i10, textMonths, textBasedComponentStyle);
            dn.t d10 = dateController.d();
            AutoCompleteTextView monthEditText = c10.f29272g;
            Intrinsics.checkNotNullExpressionValue(monthEditText, "monthEditText");
            dn.u.b(d10, monthEditText);
            c10.f29272g.setAdapter(aVar);
            if (styles != null && (backgroundColor = styles.getBackgroundColor()) != null && (inputSelectBackgroundColor = backgroundColor.getInputSelectBackgroundColor()) != null) {
                c10.f29272g.setDropDownBackgroundDrawable(new ColorDrawable(inputSelectBackgroundColor.intValue()));
            }
            c10.f29268c.setHint(attributes.getPlaceholderDay());
            dn.t c11 = dateController.c();
            TextInputEditText dayEditText = c10.f29269d;
            Intrinsics.checkNotNullExpressionValue(dayEditText, "dayEditText");
            dn.u.b(c11, dayEditText);
            c10.f29273h.setHint(attributes.getPlaceholderYear());
            dn.t g10 = dateController.g();
            TextInputEditText yearEditText = c10.f29274i;
            Intrinsics.checkNotNullExpressionValue(yearEditText, "yearEditText");
            dn.u.b(g10, yearEditText);
        }
        uiComponentHelper.d(new Function0() { // from class: fq.d1
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit d11;
                d11 = e1.d(InputDate.InputDateComponentStyle.this, c10);
                return d11;
            }
        });
        c10.getRoot().setTag(c10);
        ConstraintLayout root = c10.getRoot();
        Intrinsics.checkNotNullExpressionValue(root, "getRoot(...)");
        return root;
    }

    public static /* synthetic */ ConstraintLayout c(InputDateComponent inputDateComponent, m5 m5Var, gq.e eVar, InputDate inputDate, int i10, Object obj) {
        if ((i10 & 2) != 0) {
            eVar = inputDateComponent.b();
        }
        return b(inputDateComponent, m5Var, eVar, inputDate);
    }

    public static final Unit d(InputDate.InputDateComponentStyle inputDateComponentStyle, iq.f fVar) {
        InputTextBasedComponentStyle inputTextStyle;
        InputTextBasedComponentStyle inputTextStyle2;
        InputSelectComponentStyle inputSelectStyle;
        InputSelectComponentStyle inputSelectStyle2;
        TextBasedComponentStyle errorTextStyle;
        InputSelectComponentStyle inputSelectStyle3;
        TextBasedComponentStyle labelStyle;
        AttributeStyles.InputMarginStyle margin;
        StyleElements.MeasurementSet base;
        StyleElements.SizeSet base2;
        if (inputDateComponentStyle != null && (margin = inputDateComponentStyle.getMargin()) != null && (base = margin.getBase()) != null && (base2 = base.getBase()) != null) {
            ConstraintLayout root = fVar.getRoot();
            Intrinsics.checkNotNullExpressionValue(root, "getRoot(...)");
            nq.d.c(root, base2);
        }
        if (inputDateComponentStyle != null && (inputSelectStyle3 = inputDateComponentStyle.getInputSelectStyle()) != null && (labelStyle = inputSelectStyle3.getLabelStyle()) != null) {
            TextView dateLabel = fVar.f29267b;
            Intrinsics.checkNotNullExpressionValue(dateLabel, "dateLabel");
            kq.f0.n(dateLabel, labelStyle, null, 2, null);
        }
        if (inputDateComponentStyle != null && (inputSelectStyle2 = inputDateComponentStyle.getInputSelectStyle()) != null && (errorTextStyle = inputSelectStyle2.getErrorTextStyle()) != null) {
            TextView errorLabel = fVar.f29270e;
            Intrinsics.checkNotNullExpressionValue(errorLabel, "errorLabel");
            kq.f0.n(errorLabel, errorTextStyle, null, 2, null);
        }
        if (inputDateComponentStyle != null && (inputSelectStyle = inputDateComponentStyle.getInputSelectStyle()) != null) {
            TextInputLayout month = fVar.f29271f;
            Intrinsics.checkNotNullExpressionValue(month, "month");
            kq.o.i(month, inputSelectStyle);
        }
        if (inputDateComponentStyle != null && (inputTextStyle2 = inputDateComponentStyle.getInputTextStyle()) != null) {
            TextInputLayout day = fVar.f29268c;
            Intrinsics.checkNotNullExpressionValue(day, "day");
            kq.a0.k(day, inputTextStyle2);
        }
        if (inputDateComponentStyle != null && (inputTextStyle = inputDateComponentStyle.getInputTextStyle()) != null) {
            TextInputLayout year = fVar.f29273h;
            Intrinsics.checkNotNullExpressionValue(year, "year");
            kq.a0.k(year, inputTextStyle);
        }
        return Unit.f32056a;
    }
}
